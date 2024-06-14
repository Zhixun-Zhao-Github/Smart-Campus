package com.zhao.smartcampus.util;

import javax.servlet.http.HttpServletRequest;

public class AuthContextHolder {

    //Get userid from request header token
    public static Long getUserIdToken(HttpServletRequest request) {
        //From the request header token
        String token = request.getHeader("token");
        //Calling tool class
        Long userId = JwtHelper.getUserId(token);
        return userId;
    }

    //Get the name from the request header token
    public static String getUserName(HttpServletRequest request) {
        //Get the token from the header
        String token = request.getHeader("token");
        //jwt gets username from token
        String userName = JwtHelper.getUserName(token);
        return userName;
    }
}
