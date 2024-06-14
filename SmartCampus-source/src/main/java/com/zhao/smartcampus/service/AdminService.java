package com.zhao.smartcampus.service;

import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.IService;
import com.zhao.smartcampus.pojo.Admin;
import com.zhao.smartcampus.pojo.LoginForm;

public interface AdminService extends IService<Admin> {
    Admin login(LoginForm loginForm);

    Admin getAmdinById(Long userId);

    IPage<Admin> getAmdinByOpr(Page<Admin> page, String adminName);
}
