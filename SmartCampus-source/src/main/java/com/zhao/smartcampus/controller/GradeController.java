package com.zhao.smartcampus.controller;

import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.zhao.smartcampus.pojo.Grade;
import com.zhao.smartcampus.service.GradeService;
import com.zhao.smartcampus.util.Result;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Api(tags = "Grade Controller")
@RestController
@RequestMapping("/sms/gradeController")
public class GradeController {
    @Autowired
    private GradeService gradeService;

    @ApiOperation(("Get all grades"))
    @GetMapping("/getGrades")
    public Result getGrades(){
        List<Grade> grades = gradeService.getGrades();
        return Result.ok(grades);
    }

    @ApiOperation("Delete Grade")
    @DeleteMapping("/deleteGrade")
    public Result deleteGrade(
            @ApiParam("JSON collection of IDs for all grades to be deleted.") @RequestBody List<Integer> ids) {
        gradeService.removeByIds(ids);
        return Result.ok();
    }

    @ApiOperation("Add or update Grade, with ID is updating")
    @PostMapping("/saveOrUpdateGrade")
    public Result saveOrUpdateGrade(
            @ApiParam("Grade object in JSON format.") @RequestBody Grade grade) {
        gradeService.saveOrUpdate(grade);
        return Result.ok();
    }

    @ApiOperation("Fuzzy search by grade name with pagination conditions.")
    @GetMapping("/getGrades/{pageNo}/{pageSize}")
    public Result getGradesByOpr(
            @ApiParam("Page number for paginated query") @PathVariable("pageNo") Integer pageNo,
            @ApiParam("Page size for paginated query") @PathVariable("pageSize") Integer pageSize,
            @ApiParam("Fuzzy search by grade name for paginated query") String gradeName
    ){
        //Pagination with conditional query
        Page<Grade> page = new Page<>(pageNo, pageSize);
        IPage<Grade> pageRs = gradeService.getGradeByOpr(page,gradeName);

        //Encapsulate and return the Result object.
        return Result.ok(pageRs);

    }
}
