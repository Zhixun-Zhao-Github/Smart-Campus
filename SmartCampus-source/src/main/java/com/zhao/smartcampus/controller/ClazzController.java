package com.zhao.smartcampus.controller;

import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.zhao.smartcampus.pojo.Clazz;
import com.zhao.smartcampus.service.ClazzService;
import com.zhao.smartcampus.util.Result;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@Api(tags = "Class Controller")
@RestController
@RequestMapping("/sms/clazzController")
public class ClazzController {
    @Autowired
    private ClazzService clazzService;

    @ApiOperation("get all classes")
    @GetMapping("/getClazzs")
    public Result getClazzs(){
        List<Clazz> clazzes = clazzService.getClazzs();
        return Result.ok(clazzes);
    }

    @ApiOperation("delete class")
    @DeleteMapping("/deleteClazz")
    public Result deleteClazz(
            @ApiParam("The list of ids of class") @RequestBody List<Integer> ids
    ){
        clazzService.removeByIds(ids);
        return Result.ok();

    }


    @ApiOperation("Add or update class")
    @PostMapping("/saveOrUpdateClazz")
    public Result saveOrUpdateClazz(
             @ApiParam("JSON format class information") @RequestBody Clazz clazz) {
        clazzService.saveOrUpdate(clazz);
        return Result.ok();
    }

    @ApiOperation("Paginated query for class information with conditions.")
    @GetMapping("/getClazzsByOpr/{pageNo}/{pageSize}")
    public Result getClazzByOpr(
            @ApiParam("Page number for paginated query") @PathVariable("pageNo") Integer pageNo,
            @ApiParam("Page size for paginated query") @PathVariable("pageSize") Integer pageSize,
            @ApiParam("Fuzzy search by name for paginated query") Clazz clazz
    ){
        Page<Clazz> page = new Page<>(pageNo, pageSize);
        IPage<Clazz> clazzIPage = clazzService.getClazzByOpr(page, clazz);
        return Result.ok(clazzIPage);

    }
}
