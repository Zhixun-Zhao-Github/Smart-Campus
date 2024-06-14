package com.zhao.smartcampus.controller;

import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.zhao.smartcampus.pojo.Clazz;
import com.zhao.smartcampus.pojo.Student;
import com.zhao.smartcampus.service.StudentService;
import com.zhao.smartcampus.util.JwtHelper;
import com.zhao.smartcampus.util.MD5;
import com.zhao.smartcampus.util.Result;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Api(tags = "Student Controller")
@RestController
@RequestMapping("/sms/studentController")
public class StudentController {

    @Autowired
    private StudentService studentService;

    @ApiOperation("Delete Student by id")
    @DeleteMapping("/delStudentById")
    public Result delStudentById(
           @ApiParam("The list of id for deletion") @RequestBody List<Integer> ids
    ){
        studentService.removeByIds(ids);
        return Result.ok();
    }

    @ApiOperation("Add or update student information")
    @PostMapping("/addOrUpdateStudent")
    public Result addOrUpdateStudent(
            @ApiParam("Student information in JSON") @RequestBody Student student){
        Integer id = student.getId();
        if (null == id || 0 ==id) {
            student.setPassword(MD5.encrypt(student.getPassword()));
        }
        studentService.saveOrUpdate(student);
        return Result.ok();
    }

    @ApiOperation("Get all student by conditions of pagination")
    @GetMapping("/getStudentByOpr/{pageNo}/{pageSize}")
    public Result getStudentByOpr(
            @ApiParam("page number") @PathVariable("pageNo") Integer pageNo,
            @ApiParam("page size") @PathVariable("pageSize") Integer pageSize,
            @ApiParam("Student information in JSON") Student student,
            @ApiParam("Class information in JSON") Clazz clazz
    ){
        Page<Student> page = new Page<>(pageNo, pageSize);
        IPage<Student> iPage = studentService.getStudentByOpr(page,student);
        return Result.ok(iPage);
    }

}
