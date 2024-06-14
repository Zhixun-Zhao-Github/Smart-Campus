package com.zhao.smartcampus.controller;

import com.zhao.smartcampus.pojo.Admin;
import com.zhao.smartcampus.pojo.LoginForm;
import com.zhao.smartcampus.pojo.Student;
import com.zhao.smartcampus.pojo.Teacher;
import com.zhao.smartcampus.service.AdminService;
import com.zhao.smartcampus.service.StudentService;
import com.zhao.smartcampus.service.TeacherService;
import com.zhao.smartcampus.util.*;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.ClassUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import sun.net.ftp.FtpClient;

import javax.imageio.ImageIO;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.UUID;

@Api(tags = "System Controller")
@RestController
@RequestMapping("/sms/system")
public class SystemController {
    @Autowired
    private AdminService adminService;
    @Autowired
    private StudentService studentService;
    @Autowired
    private TeacherService teacherService;

    @ApiOperation("update password")
    @PostMapping("/updatePwd/{oldPwd}/{newPwd}")
    public  Result updatePwd(
            @ApiParam("token") @RequestHeader("token") String token,
            @ApiParam("old password") @PathVariable("oldPwd") String oldPwd,
            @ApiParam("new password") @PathVariable("newPwd") String newPwd
    ){
        if (JwtHelper.isExpiration(token)) {
            return Result.fail().message("Your login has timed out, please log in again.");
        }
        Integer userType = JwtHelper.getUserType(token);
        Long userId = JwtHelper.getUserId(token);
        oldPwd = MD5.encrypt(oldPwd);
        newPwd = MD5.encrypt(newPwd);
        switch (userType) {
            case 1:
                Admin admin = adminService.getAmdinById(userId);
                if (oldPwd.equals(admin.getPassword())) {
                    admin.setPassword(newPwd);
                    adminService.saveOrUpdate(admin);
                }else {
                    return Result.fail().message("Your old password is incorrect.");
                }
                break;
            case 2:
                Student student = studentService.getStudentById(userId);
                if (oldPwd.equals(student.getPassword())) {
                    student.setPassword(newPwd);
                    studentService.saveOrUpdate(student);
                }else {
                    return Result.fail().message("Your old password is incorrect.");
                }
                break;
            case 3:
                Teacher teacher = teacherService.getTeacherById(userId);
                if (oldPwd.equals(teacher.getPassword())) {
                    teacher.setPassword(newPwd);
                    teacherService.saveOrUpdate(teacher);
                }else {
                    return Result.fail().message("Your old password is incorrect.");
                }
                break;
        }
        return Result.ok();
    }

    @ApiOperation("Unified entry for file upload")
    @PostMapping("/headerImgUpload")
    public Result headerImgUpload(
           @ApiParam("file") @RequestPart("multipartFile") MultipartFile multipartFile
    ){
        String uuid = UUID.randomUUID().toString().replace("-", "");
        int i = multipartFile.getOriginalFilename().lastIndexOf(".");
        String newFileName = uuid + multipartFile.getOriginalFilename().substring(i);
        String rootPath = ClassUtils.getDefaultClassLoader().getResource("").getPath();
        String filePath = rootPath+"/public/upload/"+newFileName;
        try {
            multipartFile.transferTo(new File(filePath));
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
        String path = "upload/"+newFileName;
        return Result.ok(path);
    }

    @ApiOperation("Get information")
    @GetMapping("/getInfo")
    public Result getInfoByToken(@ApiParam("token") @RequestHeader("token") String token) {
        boolean expiration = JwtHelper.isExpiration(token);
        if (expiration) {
            return Result.build(null, ResultCodeEnum.TOKEN_ERROR);
        }
        Long userId = JwtHelper.getUserId(token);
        Integer userType = JwtHelper.getUserType(token);

        Map<String, Object> data = new LinkedHashMap<>();
        switch (userType) {
            case 1:
                Admin admin = adminService.getAmdinById(userId);
                data.put("userType",1);
                data.put("user",admin);
                break;
            case 2:
                Student student = studentService.getStudentById(userId);
                data.put("userType",2);
                data.put("user",student);
                break;
            case 3:
                Teacher teacher = teacherService.getTeacherById(userId);
                data.put("userType",3);
                data.put("user",teacher);
                break;
        }
        return Result.ok(data);
    }

    @ApiOperation("login")
    @PostMapping("/login")
    public Result login(@RequestBody LoginForm loginForm, HttpServletRequest request, HttpServletResponse response){
        //Verification code verification
        HttpSession session = request.getSession();
        String sessionVerifiCode = (String) session.getAttribute("verifiCode");
        String loginFormVerifiCode = loginForm.getVerifiCode();
        if ("".equals(sessionVerifiCode) || null == loginFormVerifiCode) {
            return Result.fail().message("The verification code is invalid, please refresh and try again.");
        }
        if (!loginFormVerifiCode.equalsIgnoreCase(sessionVerifiCode)) {
            return Result.fail().message("Incorrect verification code.");
        }
        //Remove the existing verification code from the session domain
        session.removeAttribute("verifiCode");

        //Login user type verification
        Map<String, Object> map = new LinkedHashMap<>();
        switch (loginForm.getUserType()){
            case 1:
                try {
                    Admin admin = adminService.login(loginForm);
                    if (null !=admin) {
                        map.put("token",JwtHelper.createToken(admin.getId().longValue(),1));
                    }else {
                        throw new RuntimeException("The username or password is incorrect!");
                    }
                    return  Result.ok(map);
                } catch (RuntimeException e) {
                    e.printStackTrace();
                    return Result.fail().message(e.getMessage());
                }
            case 2:
                try {
                    Student student = studentService.login(loginForm);
                    if (null !=student) {
                        map.put("token",JwtHelper.createToken(student.getId().longValue(),2));
                    }else {
                        throw new RuntimeException("The username or password is incorrect!");
                    }
                    return  Result.ok(map);
                } catch (RuntimeException e) {
                    e.printStackTrace();
                    return Result.fail().message(e.getMessage());
                }
            case 3:
                try {
                    Teacher teacher = teacherService.login(loginForm);
                    if (null !=teacher) {
                        map.put("token",JwtHelper.createToken(teacher.getId().longValue(),3));
                    }else {
                        throw new RuntimeException("The username or password is incorrect!");
                    }
                    return  Result.ok(map);
                } catch (RuntimeException e) {
                    e.printStackTrace();
                    return Result.fail().message(e.getMessage());
                }
        }
        return Result.fail().message("There is no such user.");
    }

    @ApiOperation("Get verification code image")
    @GetMapping("/getVerifiCodeImage")
    public void getVerifiCodeImage(HttpServletRequest request, HttpServletResponse response){
        BufferedImage verifiCodeImage = CreateVerifiCodeImage.getVerifiCodeImage();
        String verifiCode = new String(CreateVerifiCodeImage.getVerifiCode());
        HttpSession session = request.getSession();
        session.setAttribute("verifiCode", verifiCode);
        try {
            ImageIO.write(verifiCodeImage, "JPEG", response.getOutputStream());
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }
}
