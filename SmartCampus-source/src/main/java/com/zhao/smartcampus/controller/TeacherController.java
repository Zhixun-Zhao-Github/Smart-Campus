package com.zhao.smartcampus.controller;

import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.zhao.smartcampus.pojo.Teacher;
import com.zhao.smartcampus.service.TeacherService;
import com.zhao.smartcampus.util.MD5;
import com.zhao.smartcampus.util.Result;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Api(tags = "Teacher Controller")
@RestController
@RequestMapping("/sms/teacherController")
public class TeacherController {
    @Autowired
    private TeacherService teacherService;

    @ApiOperation("Get teachers information")
    @GetMapping("/getTeachers/{pageNo}/{pageSize}")
    public Result getTeachers(
            @ApiParam("page number") @PathVariable("pageNo") Integer pageNO,
            @ApiParam("page size") @PathVariable("pageSize") Integer pageSize,
            @ApiParam("teacher object") Teacher teacher
    ){
        Page<Teacher> page = new Page<>(pageNO, pageSize);
        IPage<Teacher> iPage = teacherService.getTeachersByOpr(page,teacher);
        return Result.ok(iPage);
    }

    @ApiOperation("Add or update teachers information")
    @PostMapping("/saveOrUpdateTeacher")
    public Result saveOrUpdateTeacher(
            @ApiParam("Teacher") @RequestBody Teacher teacher){
        if (null == teacher.getId() || 0 == teacher.getId()) {
            teacher.setPassword(MD5.encrypt(teacher.getPassword()));
        }
        teacherService.saveOrUpdate(teacher);

        return Result.ok();
    }

    @ApiOperation("Delete teachers information")
    @DeleteMapping("deleteTeacher")
    public Result deleteTeacher(
            @ApiParam("The list of ids for deletion") @RequestBody List<Integer> ids
     ){
        teacherService.removeByIds(ids);
        return Result.ok();
    }
}
