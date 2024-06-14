package com.zhao.smartcampus.controller;

import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.zhao.smartcampus.pojo.Admin;
import com.zhao.smartcampus.service.AdminService;
import com.zhao.smartcampus.util.MD5;
import com.zhao.smartcampus.util.Result;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Api(tags = "Admin Controller")
@RestController
@RequestMapping("/sms/adminController")
public class AdminController {
    @Autowired
    private AdminService adminService;

    @ApiOperation("Delete admin")
    @DeleteMapping("/deleteAdmin")
    public Result deleteAdmin(
            @ApiParam("The list of deletion for admin") @RequestBody List<Integer> ids){
        adminService.removeByIds(ids);
        return Result.ok();
    }

    @ApiOperation("Add or update admin")
    @PostMapping("saveOrUpdateAdmin")
    public Result saveOrUpdateAdmin(
            @ApiParam("Admin information in JSON") @RequestBody Admin admin) {
        Integer id = admin.getId();
        if (null == id || 0 == id) {
            admin.setPassword(MD5.encrypt(admin.getPassword()));
        }
        adminService.saveOrUpdate(admin);
        return  Result.ok();
    }

    @ApiOperation("Get all admin")
    @GetMapping("/getAllAdmin/{pageNo}/{pageSize}")
    public Result getAllAdmin(
            @ApiParam("page number") @PathVariable("pageNo") Integer pageNo,
            @ApiParam("page size") @PathVariable("pageSize") Integer pageSize,
            @ApiParam("admin name in JSON") String adminName
    ){
        Page<Admin> page = new Page<>(pageNo, pageSize);
        IPage<Admin> iPage = adminService.getAmdinByOpr(page,adminName);
        return Result.ok(iPage);
    }
}
