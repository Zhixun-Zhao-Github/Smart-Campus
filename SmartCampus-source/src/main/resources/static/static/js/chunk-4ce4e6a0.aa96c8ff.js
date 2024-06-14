(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-4ce4e6a0"], {
    "79cb": function (e, t, s) {
        "use strict";
        s("cab9")
    }, "972a": function (e, t, s) {
        "use strict";
        s.r(t);
        var a = function () {
                var e = this, t = e.$createElement, s = e._self._c || t;
                return s("div", [s("el-row", [s("el-col", {attrs: {span: 8}}, [s("div", {staticClass: "fl-left avatar-box"}, [s("div", {staticClass: "user-card"}, [s("el-image", {
                    staticStyle: {
                        width: "150px",
                        height: "150px"
                    }, attrs: {src: e.userInfo.portraitPath}
                }), s("div", {staticClass: "user-personality"}, [s("div", {staticClass: "nickName"}, [e._v(" " + e._s(e.userInfo.name) + " ")])]), s("div", {staticClass: "user-information"}, [s("ul", [s("li", [s("span", {staticClass: "title"}, [e._v("Gender:")]), s("span", [e._v(e._s(e.userInfo.gender))])]), s("li", [s("span", {staticClass: "title"}, [e._v("Phone Number:")]), s("span", [e._v(e._s(e.userInfo.telephone))])]), s("li", [s("span", {staticClass: "title"}, [e._v("Email:")]), s("span", [e._v(e._s(e.userInfo.email))])]), e.userInfo.address.length > 15 ? s("el-tooltip", {
                    staticClass: "item",
                    attrs: {effect: "light", content: e.userInfo.address, placement: "top"}
                }, [s("li", [s("span", {staticClass: "title"}, [e._v("Address:")]), s("span", [e._v(e._s(e.userInfo.address))])])]) : s("li", [s("span", {staticClass: "title"}, [e._v("Address:")]), s("span", [e._v(e._s(e.userInfo.address))])])], 1)])], 1)])]), s("el-col", {attrs: {span: 16}}, [s("div", {staticClass: "user-addcount"}, [s("el-tabs", {
                    model: {
                        value: e.activeName,
                        callback: function (t) {
                            e.activeName = t
                        },
                        expression: "activeName"
                    }
                }, [s("el-tab-pane", {
                    attrs: {
                        label: "Account Binding",
                        name: "account"
                    }
                }, [s("ul", [s("li", [s("p", {staticClass: "title"}, [e._v("Change Password")]), s("p", {staticClass: "desc"}, [e._v(" Change Personal Password "), s("a", {
                    attrs: {href: "javascript:void(0)"},
                    on: {click: e.showPwdUpdate}
                }, [e._v("Change Password")])])]), s("li", [s("p", {staticClass: "title"}, [e._v("Modify Other Information")]), s("p", {staticClass: "desc"}, [e._v(" Modify Other Personal Information "), s("a", {
                    attrs: {href: "javascript:void(0)"},
                    on: {click: e.showUserUpdate}
                }, [e._v("Modify Now")])])])])])], 1)], 1)])], 1), s("el-dialog", {
                    attrs: {
                        title: "Change Password",
                        visible: e.dialogVisible,
                        width: "50%"
                    }, on: {
                        "update:visible": function (t) {
                            e.dialogVisible = t
                        }
                    }
                }, [s("el-form", {
                    ref: "form",
                    staticStyle: {width: "90%"},
                    attrs: {model: e.form, rules: e.rules, "label-width": "120px"}
                }, [s("el-form-item", {attrs: {label: "Current Password", prop: "oldPwd"}}, [s("el-input", {
                    attrs: {
                        type: "password",
                        placeholder: "Please enter your current password."
                    }, model: {
                        value: e.form.oldPwd, callback: function (t) {
                            e.$set(e.form, "oldPwd", t)
                        }, expression: "form.oldPwd"
                    }
                })], 1), s("el-form-item", {
                    attrs: {
                        label: "New Password",
                        prop: "newPwd"
                    }
                }, [s("el-input", {
                    attrs: {type: "password", placeholder: "Please enter your new password."},
                    model: {
                        value: e.form.newPwd, callback: function (t) {
                            e.$set(e.form, "newPwd", t)
                        }, expression: "form.newPwd"
                    }
                })], 1), s("el-form-item", {
                    attrs: {
                        label: "Confirm Password",
                        prop: "newPwd2"
                    }
                }, [s("el-input", {
                    attrs: {type: "password", placeholder: "Please confirm your password."},
                    model: {
                        value: e.form.newPwd2, callback: function (t) {
                            e.$set(e.form, "newPwd2", t)
                        }, expression: "form.newPwd2"
                    }
                })], 1)], 1), s("div", {
                    attrs: {slot: "footer"},
                    slot: "footer"
                }, [s("el-button", {on: {click: e.reset}}, [e._v("Reset")]), s("el-button", {
                    attrs: {type: "primary"},
                    on: {click: e.confirm}
                }, [e._v("Confirm")])], 1)], 1), s("el-dialog", {
                    attrs: {
                        title: "Modify information for " + e.userInfo.name,
                        visible: e.userDialogVisible,
                        width: "50%"
                    }, on: {
                        "update:visible": function (t) {
                            e.userDialogVisible = t
                        }
                    }
                }, [s("el-form", {
                    ref: "userForm",
                    staticStyle: {width: "90%"},
                    attrs: {model: e.userForm, rules: e.userRules, "label-width": "120px"}
                }, [s("el-form-item", {
                    attrs: {
                        label: "Name",
                        prop: "name"
                    }
                }, [s("el-input", {
                    attrs: {placeholder: "Please enter your name."},
                    model: {
                        value: e.userForm.name, callback: function (t) {
                            e.$set(e.userForm, "name", t)
                        }, expression: "userForm.name"
                    }
                })], 1), s("el-form-item", {
                    attrs: {
                        label: "Gender",
                        prop: "gender"
                    }
                }, [s("el-select", {
                    attrs: {placeholder: "Please select your gender."},
                    model: {
                        value: e.userForm.gender, callback: function (t) {
                            e.$set(e.userForm, "gender", t)
                        }, expression: "userForm.gender"
                    }
                }, [s("el-option", {attrs: {label: "M", value: "M"}}), s("el-option", {
                    attrs: {
                        label: "F",
                        value: "F"
                    }
                })], 1)], 1), s("el-form-item", {
                    attrs: {
                        label: "Email",
                        prop: "email"
                    }
                }, [s("el-input", {
                    attrs: {placeholder: "Please enter your email address."},
                    model: {
                        value: e.userForm.email, callback: function (t) {
                            e.$set(e.userForm, "email", t)
                        }, expression: "userForm.email"
                    }
                })], 1), s("el-form-item", {
                    attrs: {
                        label: "Telephone",
                        prop: "telephone"
                    }
                }, [s("el-input", {
                    attrs: {placeholder: "Please enter your phone number."},
                    model: {
                        value: e.userForm.telephone, callback: function (t) {
                            e.$set(e.userForm, "telephone", t)
                        }, expression: "userForm.telephone"
                    }
                })], 1), s("el-form-item", {
                    attrs: {
                        label: "Address",
                        prop: "address"
                    }
                }, [s("el-input", {
                    attrs: {placeholder: "Please enter your address."},
                    model: {
                        value: e.userForm.address, callback: function (t) {
                            e.$set(e.userForm, "address", t)
                        }, expression: "userForm.address"
                    }
                })], 1), s("el-form-item", {
                    attrs: {
                        label: "Portrait",
                        prop: "portraitPath"
                    }
                }, [s("el-upload", {
                    staticClass: "avatar-uploader",
                    attrs: {
                        action: e.$BASE_API + "/sms/system/headerImgUpload",
                        name: "multipartFile",
                        "show-file-list": !1,
                        "on-success": e.handleAvatarSuccess,
                        "before-upload": e.beforeAvatarUpload
                    }
                }, [e.userForm.portraitPath ? s("img", {
                    staticClass: "avatar",
                    attrs: {src: e.userForm.portraitPath}
                }) : s("i", {staticClass: "el-icon-plus avatar-uploader-icon"}), s("div", {
                    staticClass: "el-upload__tip",
                    attrs: {slot: "tip"},
                    slot: "tip"
                }, [e._v("Only JPG/PNG files are allowed, and they must not exceed 10MB.")])])], 1)], 1), s("div", {
                    attrs: {slot: "footer"},
                    slot: "footer"
                }, [s("el-button", {on: {click: e.resetUserForm}}, [e._v("Reset")]), s("el-button", {
                    attrs: {type: "primary"},
                    on: {click: e.confirmUser}
                }, [e._v("Confirm")])], 1)], 1)], 1)
            }, r = [], l = (s("c975"), s("ac1f"), s("5319"), s("ade3")), i = (s("96cf"), s("1da1")), o = s("5530"),
            n = s("2f62"), u = {
                name: "Personal", data: function () {
                    return {
                        dialogVisible: !1,
                        userDialogVisible: !1,
                        activeName: "account",
                        form: {oldPwd: null, newPwd: null, newPwd2: null},
                        rules: {
                            oldPwd: [{required: !0, message: "Original password must be specified"}],
                            newPwd: [{required: !0, message: "New password must be specified"}, {validator: this.validateNewPwd}],
                            newPwd2: [{required: !0, message: "Confirmation password must be specified"}, {validator: this.validateNewPwd2}]
                        },
                        userForm: {},
                        userRules: {
                            name: [{required: !0, message: "Administrator name is required."}, {
                                min: 2,
                                message: "Administrator name cannot be less than 2 characters."
                            }],
                            gender: [{required: !0, message: "Gender selection is required."}],
                            email: [{required: !0, message: "Administrator email is required."}, {
                                type: "email",
                                message: "Invalid email format."
                            }],
                            telephone: [{required: !0, message: "Administrator phone number is required."}, {
                                pattern: /^[1]([3-9])[0-9]{9}$/,
                                message: "Invalid phone number format."
                            }],
                            address: [{required: !0, message: "Administrator address is required."}],
                            portraitPath: [{required: !0, message: "Portrait upload is required."}]
                        }
                    }
                }, computed: Object(o["a"])({}, Object(n["b"])(["userInfo"])), methods: {
                    confirmUser: function () {
                        var e = this;
                        this.$refs.userForm.validate(function () {
                            var t = Object(i["a"])(regeneratorRuntime.mark((function t(s) {
                                var a, r;
                                return regeneratorRuntime.wrap((function (t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            if (!s) {
                                                t.next = 10;
                                                break
                                            }
                                            return a = Object(l["a"])({
                                                1: "admin",
                                                2: "student"
                                            }, "2", "teacher"), r = a[e.userInfo.userType], t.next = 6, e.$API[r].save(e.userForm);
                                        case 6:
                                            e.dialogVisible = !1, e.$message.success("User information updated successfully."), e.$store.dispatch("user/resetUser"), e.$router.replace("/login");
                                        case 10:
                                        case"end":
                                            return t.stop()
                                    }
                                }), t)
                            })));
                            return function (e) {
                                return t.apply(this, arguments)
                            }
                        }())
                    }, resetUserForm: function () {
                        this.userForm = Object(o["a"])(Object(o["a"])({}, this.userForm), {}, {
                            name: "",
                            gender: "",
                            email: "",
                            telephone: "",
                            address: "",
                            portraitPath: ""
                        })
                    }, showUserUpdate: function () {
                        this.userForm = Object(o["a"])({}, this.userInfo), this.userDialogVisible = !0
                    }, validateNewPwd: function (e, t, s) {
                        t === this.form.oldPwd ? s("The new password cannot be the same as the original password.") : s()
                    }, validateNewPwd2: function (e, t, s) {
                        t != this.form.newPwd ? s("The confirmation password must match the password.") : s()
                    }, reset: function () {
                        this.form = {oldPwd: null, newPwd: null, newPwd2: null}
                    }, showPwdUpdate: function () {
                        this.form = {oldPwd: null, newPwd: null, newPwd2: null}, this.dialogVisible = !0
                    }, confirm: function () {
                        var e = this;
                        this.$refs.form.validate(function () {
                            var t = Object(i["a"])(regeneratorRuntime.mark((function t(s) {
                                var a, r, l;
                                return regeneratorRuntime.wrap((function (t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            if (!s) {
                                                t.next = 8;
                                                break
                                            }
                                            return a = e.form, r = a.oldPwd, l = a.newPwd, t.next = 4, e.$API.login.updatePwd(r, l);
                                        case 4:
                                            e.dialogVisible = !1, e.$message.success("Password changed successfully. Please log in again."), e.$store.dispatch("user/resetUser"), e.$router.replace("/login");
                                        case 8:
                                        case"end":
                                            return t.stop()
                                    }
                                }), t)
                            })));
                            return function (e) {
                                return t.apply(this, arguments)
                            }
                        }())
                    }, handleAvatarSuccess: function (e, t) {
                        this.userForm.portraitPath = e.data, this.$refs.userForm.validateField("portraitPath")
                    }, beforeAvatarUpload: function (e) {
                        var t = ["image/jpeg", "image/png"].indexOf(e.type) >= 0, s = e.size / 1024 / 1024 < 10;
                        return t || this.$message.error("You can only upload images in JPG/PNG format!"), s || this.$message.error("Uploaded portrait image size cannot exceed 10MB!"), t && s
                    }
                }
            }, d = u, c = (s("79cb"), s("2877")), m = Object(c["a"])(d, a, r, !1, null, null, null);
        t["default"] = m.exports
    }, cab9: function (e, t, s) {
    }
}]);