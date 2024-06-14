package com.zhao.smartcampus.util;

import lombok.Getter;

/**
 * Unified return result status information class
 *
 */
@Getter
public enum ResultCodeEnum {

    SUCCESS(200,"successful"),
    FAIL(201, "failed"),
    SERVICE_ERROR(2012, "Service Abnormality"),
    ILLEGAL_REQUEST( 204, "Illegal request"),
    PAY_RUN(205, "Payments"),
    ARGUMENT_VALID_ERROR(206, "Parameter validation error"),

    LOGIN_ERROR(207, "wrong user name or password"),
    LOGIN_AUTH(208, "Not logged in"),
    PERMISSION(209, "permission denied"),
    SECKILL_NO_START(210, "The flash sale has not started yet"),
    SECKILL_RUN(211, "In the queue"),
    SECKILL_NO_PAY_ORDER(212, "You have unpaid orders"),
    SECKILL_FINISH(213, "Sold out"),
    SECKILL_END(214, "The flash sale has ended"),
    SECKILL_SUCCESS(215, "Successfully grabbed the order"),
    SECKILL_FAIL(216, "Failed to grab the order"),
    SECKILL_ILLEGAL(217, "Illegal request"),
    SECKILL_ORDER_SUCCESS(218, "successfully ordered"),
    COUPON_GET(220, "Coupon has been received"),
    COUPON_LIMIT_GET(221, "Coupon has been issued"),
    //2022-02-22
    LOGIN_CODE(222,"The session has expired due to long period of inactivity. Please refresh the page and try again!"),
    CODE_ERROR(223,"Verification code error!"),
    TOKEN_ERROR(224,"Invalid Token!")
    ;

    private Integer code;

    private String message;

    private ResultCodeEnum(Integer code, String message) {
        this.code = code;
        this.message = message;
    }
}