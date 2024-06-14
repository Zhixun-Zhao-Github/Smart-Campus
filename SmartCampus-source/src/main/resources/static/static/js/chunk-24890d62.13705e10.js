(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-24890d62"], {
    ac87: function (e, t, a) {
        "use strict";
        a.r(t);
        var r = function () {
            var e = this, t = e.$createElement, a = e._self._c || t;
            return a("el-card", {staticClass: "grade"}, [a("div", [a("el-form", {
                attrs: {inline: ""},
                nativeOn: {
                    submit: function (e) {
                        e.preventDefault()
                    }
                }
            }, [a("el-form-item", [a("el-button", {
                attrs: {type: "primary", icon: "el-icon-plus", size: "small"},
                on: {click: e.showAdd}
            }, [e._v("Add")]), a("el-popconfirm", {
                attrs: {title: "Are you sure you want to delete?"},
                on: {onConfirm: e.removeBatch}
            }, [a("el-button", {
                staticStyle: {"margin-left": "10px"},
                attrs: {
                    slot: "reference",
                    disabled: 0 === e.selectedList.length,
                    type: "danger",
                    icon: "el-icon-delete",
                    size: "small"
                },
                slot: "reference"
            }, [e._v("Batch Delete")])], 1)], 1), a("el-form-item", {attrs: {label: "Grade Name:"}}, [a("el-select", {
                attrs: {size: "small"},
                model: {
                    value: e.searchParams.gradeName, callback: function (t) {
                        e.$set(e.searchParams, "gradeName", t)
                    }, expression: "searchParams.gradeName"
                }
            }, e._l(e.gradeList, (function (e) {
                return a("el-option", {key: e.id, attrs: {label: e.name, value: e.name}})
            })), 1)], 1), a("el-form-item", {attrs: {label: "Class Name:"}}, [a("el-input", {
                attrs: {
                    placeholder: "Please enter the grade name",
                    size: "small"
                }, model: {
                    value: e.searchParams.name, callback: function (t) {
                        e.$set(e.searchParams, "name", t)
                    }, expression: "searchParams.name"
                }
            })], 1), a("el-form-item", [a("el-button", {
                attrs: {type: "primary", icon: "el-icon-search", size: "small"},
                on: {click: e.search}
            }, [e._v("Search")]), a("el-button", {
                attrs: {type: "info", icon: "el-icon-brush", size: "small"},
                on: {click: e.resetParams}
            }, [e._v("Reset")])], 1)], 1), a("el-table", {
                directives: [{
                    name: "loading",
                    rawName: "v-loading",
                    value: e.listLoading,
                    expression: "listLoading"
                }], attrs: {data: e.list, "row-key": "id", border: ""}, on: {
                    "selection-change": function (t) {
                        e.selectedList = t
                    }
                }
            }, [a("el-table-column", {
                attrs: {
                    align: "center",
                    type: "selection",
                    width: "60"
                }
            }), a("el-table-column", {
                attrs: {
                    label: "ID",
                    prop: "id",
                    width: "80"
                }
            }), a("el-table-column", {
                attrs: {
                    label: "ClassName",
                    prop: "name",
                    width: "100"
                }
            }), a("el-table-column", {
                attrs: {
                    label: "Number of Students",
                    prop: "number",
                    width: "100"
                }
            }), a("el-table-column", {
                attrs: {
                    label: "HeadmasterName",
                    width: "150",
                    prop: "headmaster"
                }
            }), a("el-table-column", {
                attrs: {
                    label: "Email",
                    width: "150",
                    prop: "email"
                }
            }), a("el-table-column", {
                attrs: {
                    label: "Telephone",
                    width: "120",
                    prop: "telephone"
                }
            }), a("el-table-column", {
                attrs: {
                    label: "Grade",
                    width: "120",
                    prop: "gradeName"
                }
            }), a("el-table-column", {
                attrs: {
                    label: "Class Introduction",
                    width: "200",
                    prop: "introduction"
                }

        }), a("el-table-column", {
                attrs: {label: "Operation", "min-width": "150", width: "180", align: "left", fixed: "right"},
                scopedSlots: e._u([{
                    key: "default", fn: function (t) {
                        var r = t.row;
                        return [a("el-button", {
                            attrs: {size: "small", type: "warning"}, on: {
                                click: function (t) {
                                    return e.showUpdate(r)
                                }
                            }
                        }, [e._v("Modify")]), a("el-popconfirm", {
                            attrs: {title: "Are you sure you want to delete " + r.name + "?"},
                            on: {
                                onConfirm: function (t) {
                                    return e.remove(r.id)
                                }
                            }
                        }, [a("el-button", {
                            staticStyle: {"margin-left": "10px"},
                            attrs: {slot: "reference", type: "danger", size: "mini"},
                            slot: "reference"
                        }, [e._v("Delete")])], 1)]
                    }
                }])
            })], 1), a("el-pagination", {
                staticStyle: {padding: "20px 0", "text-align": "center"},
                attrs: {
                    "current-page": e.searchParams.pageNo,
                    total: e.total,
                    "page-size": e.searchParams.pageSize,
                    "page-sizes": [3, 6, 9],
                    layout: "prev, pager, next, jumper, ->, sizes, total"
                },
                on: {"current-change": e.handleCurrentChange, "size-change": e.handleSizeChange}
            })], 1), a("el-dialog", {
                attrs: {
                    title: e.form.id ? "Modify class information" : "Add class information",
                    visible: e.dialogVisible,
                    width: "50%"
                }, on: {
                    "update:visible": function (t) {
                        e.dialogVisible = t
                    }
                }
            }, [a("el-form", {
                ref: "form",
                staticStyle: {width: "90%"},
                attrs: {model: e.form, rules: e.rules, "label-width": "165px"}
            }, [a("el-form-item", {
                attrs: {
                    label: "ClassName",
                    prop: "name"
                }
            }, [a("el-input", {
                attrs: {placeholder: "Please enter the class name."},
                model: {
                    value: e.form.name, callback: function (t) {
                        e.$set(e.form, "name", t)
                    }, expression: "form.name"
                }
            })], 1), a("el-form-item", {
                attrs: {
                    label: "Number of students",
                    prop: "number"
                }
            }, [a("el-input", {
                attrs: {type: "number", placeholder: "Please enter the number of students in the class."},
                model: {
                    value: e.form.number, callback: function (t) {
                        e.$set(e.form, "number", t)
                    }, expression: "form.number"
                }
            })], 1), a("el-form-item", {
                attrs: {
                    label: "Class teacher's name",
                    prop: "headmaster"
                }
            }, [a("el-input", {
                attrs: {placeholder: "Please enter the class teacher's name."},
                model: {
                    value: e.form.headmaster, callback: function (t) {
                        e.$set(e.form, "headmaster", t)
                    }, expression: "form.headmaster"
                }
            })], 1), a("el-form-item", {
                attrs: {
                    label: "Class teacher's email",
                    prop: "email"
                }
            }, [a("el-input", {
                attrs: {placeholder: "Please enter the class teacher's email."},
                model: {
                    value: e.form.email, callback: function (t) {
                        e.$set(e.form, "email", t)
                    }, expression: "form.email"
                }
            })], 1), a("el-form-item", {
                attrs: {
                    label: "Telephone",
                    prop: "telephone"
                }
            }, [a("el-input", {
                attrs: {placeholder: "Please enter the class teacher's phone number."},
                model: {
                    value: e.form.telephone, callback: function (t) {
                        e.$set(e.form, "telephone", t)
                    }, expression: "form.telephone"
                }
            })], 1), a("el-form-item", {
                attrs: {
                    label: "Grade",
                    prop: "gradeName"
                }
            }, [a("el-select", {
                attrs: {placeholder: "Please select the grade"},
                model: {
                    value: e.form.gradeName, callback: function (t) {
                        e.$set(e.form, "gradeName", t)
                    }, expression: "form.gradeName"
                }
            }, e._l(e.gradeList, (function (e) {
                return a("el-option", {key: e.id, attrs: {label: e.name, value: e.name}})
            })), 1)], 1), a("el-form-item", {
                attrs: {
                    label: "Class Introduction",
                    prop: "introduction"
                }
            }, [a("el-input", {
                attrs: {placeholder: "Please enter the grade description"},
                model: {
                    value: e.form.introduction, callback: function (t) {
                        e.$set(e.form, "introduction", t)
                    }, expression: "form.introduction"
                }
            })], 1)], 1), a("div", {
                attrs: {slot: "footer"},
                slot: "footer"
            }, [a("el-button", {on: {click: e.reset}}, [e._v("Reset")]), a("el-button", {
                attrs: {type: "primary"},
                on: {click: e.confirm}
            }, [e._v("Confirm")])], 1)], 1)], 1)
        }, n = [], s = (a("d81d"), a("5530")), l = (a("96cf"), a("1da1")), i = {
            name: "ClazzManage", data: function () {
                return {
                    listLoading: !1,
                    searchParams: {pageNo: 1, pageSize: 3, gradeName: null, name: null},
                    total: 0,
                    gradeList: [],
                    list: [],
                    selectedList: [],
                    dialogVisible: !1,
                    form: {
                        name: null,
                        number: null,
                        headmaster: null,
                        email: null,
                        telephone: null,
                        gradeName: null,
                        introduction: null
                    },
                    rules: {
                        name: [{required: !0, message: "Please enter class name"}, {min: 3, message: "Class name must be at least 3 characters"}],
                        number: [{required: !0, message: "Please enter number of students"}, {validator: this.validateNumber}],
                        headmaster: [{required: !0, message: "Please enter headmaster's name"}, {
                            min: 2,
                            message: "Headmaster's name must be at least 2 characters"
                        }],
                        email: [{required: !0, message: "Please enter headmaster's email"}, {
                            type: "email",
                            message: "Invalid email format"
                        }],
                        telephone: [{required: !0, message: "Please enter headmaster's phone number"}, {
                            pattern: /^[1]([3-9])[0-9]{9}$/,
                            message: "Invalid mobile phone number format"
                        }],
                        gradeName: [{required: !0, message: "Please select grade"}],
                        introduction: [{required: !0, message: "Please enter class introduction"}, {
                            min: 10,
                            message: "Class introduction must be at least 10 characters"
                        }]
                    }
                }
            }, mounted: function () {
                this.getList(), this.getGradeList()
            }, methods: {
                validateNumber: function (e, t, a) {
                    /^[1-9]\d*$/.test(t) ? a() : a("The number of students in the class must be a positive integer.")
                }, resetParams: function () {
                    this.searchParams = {pageNo: 1, pageSize: 3, gradeName: null, name: null}, this.getList()
                }, getGradeList: function () {
                    var e = this;
                    return Object(l["a"])(regeneratorRuntime.mark((function t() {
                        var a;
                        return regeneratorRuntime.wrap((function (t) {
                            while (1) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, e.$API.grade.getAllList();
                                case 2:
                                    a = t.sent, e.gradeList = a.data;
                                case 4:
                                case"end":
                                    return t.stop()
                            }
                        }), t)
                    })))()
                }, showAdd: function () {
                    var e = this;
                    this.form = {
                        name: "",
                        headmaster: "",
                        email: "",
                        telephone: "",
                        gradeName: "",
                        introduction: ""
                    }, this.dialogVisible = !0, this.$nextTick((function () {
                        return e.$refs.form.clearValidate()
                    }))
                }, showUpdate: function (e) {
                    this.form = Object(s["a"])({}, e), this.dialogVisible = !0
                }, remove: function (e) {
                    var t = this;
                    return Object(l["a"])(regeneratorRuntime.mark((function a() {
                        return regeneratorRuntime.wrap((function (a) {
                            while (1) switch (a.prev = a.next) {
                                case 0:
                                    return a.next = 2, t.$API.clazz.removeBatch([e]);
                                case 2:
                                    t.$message.success("Deletion successful"), 1 === t.list.length && t.searchParams.pageNo > 1 && t.searchParams.pageNo--, t.getList();
                                case 5:
                                case"end":
                                    return a.stop()
                            }
                        }), a)
                    })))()
                }, removeBatch: function () {
                    var e = this;
                    return Object(l["a"])(regeneratorRuntime.mark((function t() {
                        var a;
                        return regeneratorRuntime.wrap((function (t) {
                            while (1) switch (t.prev = t.next) {
                                case 0:
                                    return a = e.selectedList.map((function (e) {
                                        return e.id
                                    })), t.next = 3, e.$API.clazz.removeBatch(a);
                                case 3:
                                    e.$message.success("Deletion successful"), e.list.length === e.selectedList.length && e.searchParams.pageNo > 1 && e.searchParams.pageNo--, e.getList();
                                case 6:
                                case"end":
                                    return t.stop()
                            }
                        }), t)
                    })))()
                }, reset: function () {
                    this.form = Object(s["a"])(Object(s["a"])({}, this.form), {}, {
                        name: "",
                        headmaster: "",
                        email: "",
                        telephone: "",
                        gradeName: "",
                        introduction: ""
                    })
                }, confirm: function () {
                    var e = this;
                    this.$refs.form.validate(function () {
                        var t = Object(l["a"])(regeneratorRuntime.mark((function t(a) {
                            var r;
                            return regeneratorRuntime.wrap((function (t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        if (!a) {
                                            t.next = 8;
                                            break
                                        }
                                        return t.next = 3, e.$API.clazz.save(e.form);
                                    case 3:
                                        r = !!e.form.id, e.dialogVisible = !1, e.$message.success("".concat(r ? "Update" : "Add", "successful")), r || (e.searchParams.pageNo = 1), e.getList();
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
                }, getList: function () {
                    var e = this;
                    return Object(l["a"])(regeneratorRuntime.mark((function t() {
                        var a, r, n, s;
                        return regeneratorRuntime.wrap((function (t) {
                            while (1) switch (t.prev = t.next) {
                                case 0:
                                    return e.listLoading = !0, t.next = 3, e.$API.clazz.getList(e.searchParams);
                                case 3:
                                    a = t.sent, e.listLoading = !1, r = a.data, n = r.total, s = r.records, e.total = n, e.list = s;
                                case 8:
                                case"end":
                                    return t.stop()
                            }
                        }), t)
                    })))()
                }, search: function () {
                    this.searchParams.pageNo = 1, this.searchParams.pageSize = 3, this.getList()
                }, handleCurrentChange: function (e) {
                    this.searchParams.pageNo = e, this.getList()
                }, handleSizeChange: function (e) {
                    this.searchParams.pageSize = e, this.searchParams.pageNo = 1, this.getList()
                }
            }
        }, o = i, c = a("2877"), m = Object(c["a"])(o, r, n, !1, null, "0904816b", null);
        t["default"] = m.exports
    }, d81d: function (e, t, a) {
        "use strict";
        var r = a("23e7"), n = a("b727").map, s = a("1dde"), l = a("ae40"), i = s("map"), o = l("map");
        r({target: "Array", proto: !0, forced: !i || !o}, {
            map: function (e) {
                return n(this, e, arguments.length > 1 ? arguments[1] : void 0)
            }
        })
    }
}]);