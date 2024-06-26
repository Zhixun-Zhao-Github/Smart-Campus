//grade page
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-62446ae8"], {
    "2fa5": function (e, t, a) {
        "use strict";
        a.r(t);
        var r = function () {
            var e = this, t = e.$createElement, a = e._self._c || t;
            return a("el-card", { staticClass: "grade" }, [a("div", [a("el-form", {
                attrs: { inline: "" },
                nativeOn: {
                    submit: function (e) {
                        e.preventDefault()
                    }
                }
            }, [a("el-form-item", [a("el-button", {
                attrs: { type: "primary", icon: "el-icon-plus", size: "small" },
                on: { click: e.showAdd }
            }, [e._v("Add")]), a("el-popconfirm", {
                attrs: { title: "Are you sure you want to delete?" },
                on: { onConfirm: e.removeBatch }
            }, [a("el-button", {
                staticStyle: { "margin-left": "10px" },
                attrs: {
                    slot: "reference",
                    disabled: 0 === e.selectedList.length,
                    type: "danger",
                    icon: "el-icon-delete",
                    size: "small"
                },
                slot: "reference"
            }, [e._v("Batch delete")])], 1)], 1), a("el-form-item", { attrs: { label: "Grade name:" } }, [a("el-input", {
                attrs: {
                    placeholder: "Please enter the grade name.",
                    size: "small"
                }, model: {
                    value: e.searchParams.gradeName, callback: function (t) {
                        e.$set(e.searchParams, "gradeName", t)
                    }, expression: "searchParams.gradeName"
                }
            })], 1), a("el-form-item", [a("el-button", {
                attrs: { type: "primary", icon: "el-icon-search", size: "small" },
                on: { click: e.search }
            }, [e._v("Search")]), a("el-button", {
                attrs: { type: "info", icon: "el-icon-brush", size: "small" },
                on: { click: e.resetParams }
            }, [e._v("Reset")])], 1)], 1), a("el-table", {
                directives: [{
                    name: "loading",
                    rawName: "v-loading",
                    value: e.listLoading,
                    expression: "listLoading"
                }], attrs: { data: e.list, "row-key": "id", border: "" }, on: {
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
                    label: "Grade Name",
                    prop: "name",
                    "min-width": "100"
                }
            }), a("el-table-column", {
                attrs: {
                    label: "Grade Director",
                    prop: "manager",
                    "min-width": "100"
                }
            }), a("el-table-column", {
                attrs: {
                    label: "Email",
                    "min-width": "150",
                    prop: "email"
                }
            }), a("el-table-column", {
                attrs: {
                    label: "Telephone",
                    "min-width": "120",
                    prop: "telephone"
                }
            }), a("el-table-column", {
                attrs: {
                    label: "Introduction",
                    "min-width": "200",
                    prop: "introduction"
                }
            }), a("el-table-column", {
                attrs: { label: "Operation", "min-width": "150", align: "left", fixed: "right" },
                scopedSlots: e._u([{
                    key: "default", fn: function (t) {
                        var r = t.row;
                        return [a("el-button", {
                            attrs: { size: "small", type: "warning" }, on: {
                                click: function (t) {
                                    return e.showUpdate(r)
                                }
                            }
                        }, [e._v("Modify")]), a("el-popconfirm", {
                            attrs: { title: "Are you sure you want to delete? " + r.name },
                            on: {
                                onConfirm: function (t) {
                                    return e.remove(r.id)
                                }
                            }
                        }, [a("el-button", {
                            staticStyle: { "margin-left": "10px" },
                            attrs: { slot: "reference", type: "danger", size: "mini" },
                            slot: "reference"
                        }, [e._v("Delete")])], 1)]
                    }
                }])
            })], 1), a("el-pagination", {
                staticStyle: { padding: "20px 0", "text-align": "center" },
                attrs: {
                    "current-page": e.searchParams.pageNo,
                    total: e.total,
                    "page-size": e.searchParams.pageSize,
                    "page-sizes": [3, 6, 9],
                    layout: "prev, pager, next, jumper, ->, sizes, total"
                },
                on: { "current-change": e.handleCurrentChange, "size-change": e.handleSizeChange }
            })], 1), a("el-dialog", {
                attrs: {
                    title: e.form.id ? "Modify grade information" : "Add grade information",
                    visible: e.dialogVisible,
                    width: "50%"
                }, on: {
                    "update:visible": function (t) {
                        e.dialogVisible = t
                    }
                }
            }, [a("el-form", {
                ref: "form",
                staticStyle: { width: "90%" },
                attrs: { model: e.form, rules: e.rules, "label-width": "120px" }
            }, [a("el-form-item", {
                attrs: {
                    label: "Grade Name",
                    prop: "name"
                }
            }, [a("el-input", {
                attrs: { placeholder: "Please enter the grade name." },
                model: {
                    value: e.form.name, callback: function (t) {
                        e.$set(e.form, "name", t)
                    }, expression: "form.name"
                }
            })], 1), a("el-form-item", {
                attrs: {
                    label: "Grade Director",
                    prop: "manager"
                }
            }, [a("el-input", {
                attrs: { placeholder: "Please enter the grade director" },
                model: {
                    value: e.form.manager, callback: function (t) {
                        e.$set(e.form, "manager", t)
                    }, expression: "form.manager"
                }
            })], 1), a("el-form-item", {
                attrs: {
                    label: "Email",
                    prop: "email"
                }
            }, [a("el-input", {
                attrs: { placeholder: "Please enter the director's email address" },
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
                attrs: { placeholder: "Please enter the director's phone number" },
                model: {
                    value: e.form.telephone, callback: function (t) {
                        e.$set(e.form, "telephone", t)
                    }, expression: "form.telephone"
                }
            })], 1), a("el-form-item", {
                attrs: {
                    label: "Introduction",
                    prop: "introduction"
                }
            }, [a("el-input", {
                attrs: { type: "textarea", placeholder: "Please enter the grade description" },
                model: {
                    value: e.form.introduction, callback: function (t) {
                        e.$set(e.form, "introduction", t)
                    }, expression: "form.introduction"
                }
            })], 1)], 1), a("div", {
                attrs: { slot: "footer" },
                slot: "footer"
            }, [a("el-button", { on: { click: e.reset } }, [e._v("Reset")]), a("el-button", {
                attrs: { type: "primary" },
                on: { click: e.confirm }
            }, [e._v("Confirm")])], 1)], 1)], 1)
        }, n = [], i = (a("d81d"), a("96cf"), a("1da1")), s = a("5530"), o = {
            name: "GradeManage", data: function () {
                return {
                    listLoading: !1,
                    searchParams: { pageNo: 1, pageSize: 3, gradeName: null },
                    total: 0,
                    list: [],
                    selectedList: [],
                    dialogVisible: !1,
                    form: { name: "", manager: "", email: "", telephone: "", introduction: "" },
                    rules: {
                        name: [{ required: !0, message: "Please enter grade name" }, { min: 3, message: "Grade name must be at least 3 characters" }],
                        manager: [{ required: !0, message: "Please enter director's name" }, { min: 2, message: "Director's name must be at least 2 characters" }],
                        email: [{ required: !0, message: "Please enter director's email" }, {
                            type: "email",
                            message: "Invalid email format"
                        }],
                        telephone: [{ required: !0, message: "Please enter director's phone number" }, {
                            pattern: /^[1]([3-9])[0-9]{9}$/,
                            message: "Invalid mobile phone number format"
                        }],
                        introduction: [{ required: !0, message: "Please enter grade introduction" }, {
                            min: 10,
                            message: "Grade introduction must be at least 10 characters"
                        }]
                    }
                }
            }, mounted: function () {
                this.getList()
            }, methods: {
                resetParams: function () {
                    this.searchParams = { pageNo: 1, pageSize: 3, gradeName: null }, this.getList()
                }, showAdd: function () {
                    var e = this;
                    this.form = {
                        name: "",
                        manager: "",
                        email: "",
                        telephone: "",
                        introduction: ""
                    }, this.dialogVisible = !0, this.$nextTick((function () {
                        return e.$refs.form.clearValidate()
                    }))
                }, showUpdate: function (e) {
                    this.form = Object(s["a"])({}, e), this.dialogVisible = !0
                }, remove: function (e) {
                    var t = this;
                    return Object(i["a"])(regeneratorRuntime.mark((function a() {
                        return regeneratorRuntime.wrap((function (a) {
                            while (1) switch (a.prev = a.next) {
                                case 0:
                                    return a.next = 2, t.$API.grade.removeBatch([e]);
                                case 2:
                                    t.$message.success("Deletion successful"), 1 === t.list.length && t.searchParams.pageNo > 1 && t.searchParams.pageNo--, t.getList();
                                case 5:
                                case "end":
                                    return a.stop()
                            }
                        }), a)
                    })))()
                }, removeBatch: function () {
                    var e = this;
                    return Object(i["a"])(regeneratorRuntime.mark((function t() {
                        var a;
                        return regeneratorRuntime.wrap((function (t) {
                            while (1) switch (t.prev = t.next) {
                                case 0:
                                    return a = e.selectedList.map((function (e) {
                                        return e.id
                                    })), t.next = 3, e.$API.grade.removeBatch(a);
                                case 3:
                                    e.$message.success("Deletion successful"), e.list.length === e.selectedList.length && e.searchParams.pageNo > 1 && e.searchParams.pageNo--, e.getList();
                                case 6:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })))()
                }, reset: function () {
                    this.form = Object(s["a"])(Object(s["a"])({}, this.form), {}, {
                        name: "",
                        manager: "",
                        email: "",
                        telephone: "",
                        introduction: ""
                    })
                }, confirm: function () {
                    var e = this;
                    this.$refs.form.validate(function () {
                        var t = Object(i["a"])(regeneratorRuntime.mark((function t(a) {
                            var r;
                            return regeneratorRuntime.wrap((function (t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        if (!a) {
                                            t.next = 8;
                                            break
                                        }
                                        return t.next = 3, e.$API.grade.save(e.form);
                                    case 3:
                                        r = !!e.form.id, e.dialogVisible = !1, e.$message.success("".concat(r ? "Update" : "Add", "successful")), r || (e.searchParams.pageNo = 1), e.getList();
                                    case 8:
                                    case "end":
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
                    return Object(i["a"])(regeneratorRuntime.mark((function t() {
                        var a, r, n, i;
                        return regeneratorRuntime.wrap((function (t) {
                            while (1) switch (t.prev = t.next) {
                                case 0:
                                    return e.listLoading = !0, t.next = 3, e.$API.grade.getList(e.searchParams);
                                case 3:
                                    a = t.sent, e.listLoading = !1, r = a.data, n = r.total, i = r.records, e.total = n, e.list = i;
                                case 8:
                                case "end":
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
        }, l = o, c = a("2877"), m = Object(c["a"])(l, r, n, !1, null, "6718e09f", null);
        t["default"] = m.exports
    }, d81d: function (e, t, a) {
        "use strict";
        var r = a("23e7"), n = a("b727").map, i = a("1dde"), s = a("ae40"), o = i("map"), l = s("map");
        r({ target: "Array", proto: !0, forced: !o || !l }, {
            map: function (e) {
                return n(this, e, arguments.length > 1 ? arguments[1] : void 0)
            }
        })
    }
}]);