package com.zhao.smartcampus.config;

import com.baomidou.mybatisplus.extension.plugins.PaginationInterceptor;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
@MapperScan("com.zhao.smartcampus.mapper")
public class MyConfig {

    /**
     * Pagination plugin
     */
    @Bean
    public PaginationInterceptor paginationInterceptor() {
        PaginationInterceptor paginationInterceptor = new PaginationInterceptor();
        // paginationInterceptor.setLimit(Your maximum single page limit, the default is 500, less than 0 such as -1 is unlimited);
        return paginationInterceptor;
    }


}