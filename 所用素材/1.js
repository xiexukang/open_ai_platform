webpackJsonp([5], {
    "4Uwr": function (t, n, i) {
        t.exports = i.p + "img/logo.1547c3f.jpg"
    }, LyHr: function (t, n, i) {
        "use strict";
        Object.defineProperty(n, "__esModule", {value: !0});
        var e, o = i("zL8q"), r = i("ymww"), s = i("iDPj"), a = i("wAeJ"),
            h = (e = a) && e.__esModule ? e : {default: e};
        n.default = {
            components: {
                ElForm: o.Form,
                ElFormItem: o.FormItem,
                ElInput: o.Input,
                ElButton: o.Button,
                LangSelect: h.default
            }, data: function () {
                return {
                    formLogin: {username: "", password: ""},
                    rulesLogin: {
                        username: [{required: !0, message: this.$i18n.t("请输入用户名"), trigger: "blur"}],
                        password: [{required: !0, message: this.$i18n.t("请输入密码"), trigger: "blur"}]
                    },
                    showLogin: !1,
                    dialogPageVisible: !1,
                    page: {},
                    loginError: null
                }
            }, created: function () {
            }, mounted: function () {
                this.showLogin = !0, (0, r.init3D)(this)
            }, methods: {
                getPage: function (t) {
                    var n = this;
                    (0, s.getPage)(t).then(function (t) {
                        n.page = t, n.dialogPageVisible = !0
                    })
                }, submitForm: function () {
                    var t = this;
                    this.loginError = null, this.$refs.formLogin.validate(function (n) {
                        if (!n) return !1;
                        t.loading = !0, t.$store.dispatch("Login", t.formLogin).then(function () {
                            t.loading = !1, t.$router.push({path: "/"})
                        }).catch(function (n) {
                            if (t.loading = !1, n.response && 400 === n.response.status) {
                                var i = n.response.data;
                                i.non_field_errors.length > 0 ? t.loginError = t.$i18n.t(i.non_field_errors[0]) : t.loginError = t.$i18n.t("用户名或密码错误")
                            }
                        })
                    })
                }
            }, beforeDestroy: function () {
                this.interval && clearInterval(this.interval)
            }
        }
    }, O04U: function (t, n, i) {
        "use strict";
        Object.defineProperty(n, "__esModule", {value: !0});
        var e = e || {};
        e.Color = function (t) {
            this.autoUpdate = !0, this.setHex(t)
        }, e.Color.prototype = {
            setRGBA: function (t, n, i, e) {
                this.r = t, this.g = n, this.b = i, this.a = e, this.autoUpdate && (this.updateHex(), this.updateStyleString())
            }, setHex: function (t) {
                this.hex = t, this.autoUpdate && (this.updateRGBA(), this.updateStyleString())
            }, copyRGB: function (t) {
                this.r = t.r, this.g = t.g, this.b = t.b
            }, copyRGBA: function (t) {
                this.r = t.r, this.g = t.g, this.b = t.b, this.a = t.a
            }, multiplySelfRGB: function (t) {
                this.r *= t.r, this.g *= t.g, this.b *= t.b
            }, updateHex: function () {
                this.hex = Math.floor(255 * this.a) << 24 | Math.floor(255 * this.r) << 16 | Math.floor(255 * this.g) << 8 | Math.floor(255 * this.b)
            }, updateRGBA: function () {
                this.a = (this.hex >> 24 & 255) / 255, this.r = (this.hex >> 16 & 255) / 255, this.g = (this.hex >> 8 & 255) / 255, this.b = (255 & this.hex) / 255
            }, updateStyleString: function () {
                this.__styleString = "rgba(" + Math.floor(255 * this.r) + "," + Math.floor(255 * this.g) + "," + Math.floor(255 * this.b) + "," + this.a + ")"
            }, toString: function () {
                return "THREE.Color ( r: " + this.r + ", g: " + this.g + ", b: " + this.b + ", a: " + this.a + ", hex: " + this.hex + " )"
            }
        }, e.Vector2 = function (t, n) {
            this.x = t || 0, this.y = n || 0
        }, e.Vector2.prototype = {
            set: function (t, n) {
                return this.x = t, this.y = n, this
            }, copy: function (t) {
                return this.x = t.x, this.y = t.y, this
            }, addSelf: function (t) {
                return this.x += t.x, this.y += t.y, this
            }, add: function (t, n) {
                return this.x = t.x + n.x, this.y = t.y + n.y, this
            }, subSelf: function (t) {
                return this.x -= t.x, this.y -= t.y, this
            }, sub: function (t, n) {
                return this.x = t.x - n.x, this.y = t.y - n.y, this
            }, multiplyScalar: function (t) {
                return this.x *= t, this.y *= t, this
            }, unit: function () {
                return this.multiplyScalar(1 / this.length()), this
            }, length: function () {
                return Math.sqrt(this.x * this.x + this.y * this.y)
            }, lengthSq: function () {
                return this.x * this.x + this.y * this.y
            }, negate: function () {
                return this.x = -this.x, this.y = -this.y, this
            }, clone: function () {
                return new e.Vector2(this.x, this.y)
            }, toString: function () {
                return "THREE.Vector2 (" + this.x + ", " + this.y + ")"
            }
        }, e.Vector3 = function (t, n, i) {
            this.x = t || 0, this.y = n || 0, this.z = i || 0
        }, e.Vector3.prototype = {
            set: function (t, n, i) {
                return this.x = t, this.y = n, this.z = i, this
            }, copy: function (t) {
                return this.x = t.x, this.y = t.y, this.z = t.z, this
            }, add: function (t, n) {
                return this.x = t.x + n.x, this.y = t.y + n.y, this.z = t.z + n.z, this
            }, addSelf: function (t) {
                return this.x += t.x, this.y += t.y, this.z += t.z, this
            }, addScalar: function (t) {
                return this.x += t, this.y += t, this.z += t, this
            }, sub: function (t, n) {
                return this.x = t.x - n.x, this.y = t.y - n.y, this.z = t.z - n.z, this
            }, subSelf: function (t) {
                return this.x -= t.x, this.y -= t.y, this.z -= t.z, this
            }, cross: function (t, n) {
                return this.x = t.y * n.z - t.z * n.y, this.y = t.z * n.x - t.x * n.z, this.z = t.x * n.y - t.y * n.x, this
            }, crossSelf: function (t) {
                var n = this.x, i = this.y, e = this.z;
                return this.x = i * t.z - e * t.y, this.y = e * t.x - n * t.z, this.z = n * t.y - i * t.x, this
            }, multiplySelf: function (t) {
                return this.x *= t.x, this.y *= t.y, this.z *= t.z, this
            }, multiplyScalar: function (t) {
                return this.x *= t, this.y *= t, this.z *= t, this
            }, divideScalar: function (t) {
                return this.x /= t, this.y /= t, this.z /= t, this
            }, dot: function (t) {
                return this.x * t.x + this.y * t.y + this.z * t.z
            }, distanceTo: function (t) {
                return Math.sqrt(this.distanceToSquared(t))
            }, distanceToSquared: function (t) {
                var n = this.x - t.x, i = this.y - t.y, e = this.z - t.z;
                return n * n + i * i + e * e
            }, length: function () {
                return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
            }, lengthSq: function () {
                return this.x * this.x + this.y * this.y + this.z * this.z
            }, negate: function () {
                return this.x = -this.x, this.y = -this.y, this.z = -this.z, this
            }, normalize: function () {
                return this.length() > 0 ? this.multiplyScalar(1 / this.length()) : this.multiplyScalar(0), this
            }, setLength: function (t) {
                return this.normalize().multiplyScalar(t)
            }, isZero: function () {
                var t = 1e-4;
                return Math.abs(this.x) < t && Math.abs(this.y) < t && Math.abs(this.z) < t
            }, clone: function () {
                return new e.Vector3(this.x, this.y, this.z)
            }, toString: function () {
                return "THREE.Vector3 ( " + this.x + ", " + this.y + ", " + this.z + " )"
            }
        }, e.Vector4 = function (t, n, i, e) {
            this.x = t || 0, this.y = n || 0, this.z = i || 0, this.w = e || 1
        }, e.Vector4.prototype = {
            set: function (t, n, i, e) {
                return this.x = t, this.y = n, this.z = i, this.w = e, this
            }, copy: function (t) {
                return this.x = t.x, this.y = t.y, this.z = t.z, this.w = t.w, this
            }, add: function (t, n) {
                return this.x = t.x + n.x, this.y = t.y + n.y, this.z = t.z + n.z, this.w = t.w + n.w, this
            }, addSelf: function (t) {
                return this.x += t.x, this.y += t.y, this.z += t.z, this.w += t.w, this
            }, sub: function (t, n) {
                return this.x = t.x - n.x, this.y = t.y - n.y, this.z = t.z - n.z, this.w = t.w - n.w, this
            }, subSelf: function (t) {
                return this.x -= t.x, this.y -= t.y, this.z -= t.z, this.w -= t.w, this
            }, clone: function () {
                return new e.Vector4(this.x, this.y, this.z, this.w)
            }, toString: function () {
                return "THREE.Vector4 (" + this.x + ", " + this.y + ", " + this.z + ", " + this.w + ")"
            }
        }, e.Rectangle = function () {
            var t, n, i, e, o, r, s = !0;

            function a() {
                o = i - t, r = e - n
            }

            this.getX = function () {
                return t
            }, this.getY = function () {
                return n
            }, this.getWidth = function () {
                return o
            }, this.getHeight = function () {
                return r
            }, this.getX1 = function () {
                return t
            }, this.getY1 = function () {
                return n
            }, this.getX2 = function () {
                return i
            }, this.getY2 = function () {
                return e
            }, this.set = function (o, r, h, l) {
                s = !1, t = o, n = r, i = h, e = l, a()
            }, this.addPoint = function (o, r) {
                s ? (s = !1, t = o, n = r, i = o, e = r) : (t = Math.min(t, o), n = Math.min(n, r), i = Math.max(i, o), e = Math.max(e, r)), a()
            }, this.addRectangle = function (o) {
                s ? (s = !1, t = o.getX1(), n = o.getY1(), i = o.getX2(), e = o.getY2()) : (t = Math.min(t, o.getX1()), n = Math.min(n, o.getY1()), i = Math.max(i, o.getX2()), e = Math.max(e, o.getY2())), a()
            }, this.inflate = function (o) {
                t -= o, n -= o, i += o, e += o, a()
            }, this.minSelf = function (o) {
                t = Math.max(t, o.getX1()), n = Math.max(n, o.getY1()), i = Math.min(i, o.getX2()), e = Math.min(e, o.getY2()), a()
            }, this.instersects = function (o) {
                return Math.min(i, o.getX2()) - Math.max(t, o.getX1()) >= 0 && Math.min(e, o.getY2()) - Math.max(n, o.getY1()) >= 0
            }, this.empty = function () {
                s = !0, t = 0, n = 0, i = 0, e = 0, a()
            }, this.isEmpty = function () {
                return s
            }, this.toString = function () {
                return "THREE.Rectangle (x1: " + t + ", y1: " + e + ", x2: " + i + ", y1: " + n + ", width: " + o + ", height: " + r + ")"
            }
        }, e.Matrix3 = function () {
            this.m = []
        }, e.Matrix3.prototype = {
            transpose: function () {
                var t;
                return t = this.m[1], this.m[1] = this.m[3], this.m[3] = t, t = this.m[2], this.m[2] = this.m[6], this.m[6] = t, t = this.m[5], this.m[5] = this.m[7], this.m[7] = t, this
            }
        }, e.Matrix4 = function () {
            this._x = new e.Vector3, this._y = new e.Vector3, this._z = new e.Vector3
        }, e.Matrix4.prototype = {
            n11: 1,
            n12: 0,
            n13: 0,
            n14: 0,
            n21: 0,
            n22: 1,
            n23: 0,
            n24: 0,
            n31: 0,
            n32: 0,
            n33: 1,
            n34: 0,
            n41: 0,
            n42: 0,
            n43: 0,
            n44: 1,
            identity: function () {
                this.n11 = 1, this.n12 = 0, this.n13 = 0, this.n14 = 0, this.n21 = 0, this.n22 = 1, this.n23 = 0, this.n24 = 0, this.n31 = 0, this.n32 = 0, this.n33 = 1, this.n34 = 0, this.n41 = 0, this.n42 = 0, this.n43 = 0, this.n44 = 1
            },
            copy: function (t) {
                this.n11 = t.n11, this.n12 = t.n12, this.n13 = t.n13, this.n14 = t.n14, this.n21 = t.n21, this.n22 = t.n22, this.n23 = t.n23, this.n24 = t.n24, this.n31 = t.n31, this.n32 = t.n32, this.n33 = t.n33, this.n34 = t.n34, this.n41 = t.n41, this.n42 = t.n42, this.n43 = t.n43, this.n44 = t.n44
            },
            lookAt: function (t, n, i) {
                var e = this._x, o = this._y, r = this._z;
                r.sub(t, n), r.normalize(), e.cross(i, r), e.normalize(), o.cross(r, e), o.normalize(), this.n11 = e.x, this.n12 = e.y, this.n13 = e.z, this.n14 = -e.dot(t), this.n21 = o.x, this.n22 = o.y, this.n23 = o.z, this.n24 = -o.dot(t), this.n31 = r.x, this.n32 = r.y, this.n33 = r.z, this.n34 = -r.dot(t), this.n41 = 0, this.n42 = 0, this.n43 = 0, this.n44 = 1
            },
            transform: function (t) {
                var n = t.x, i = t.y, e = t.z, o = t.w ? t.w : 1;
                return t.x = this.n11 * n + this.n12 * i + this.n13 * e + this.n14 * o, t.y = this.n21 * n + this.n22 * i + this.n23 * e + this.n24 * o, t.z = this.n31 * n + this.n32 * i + this.n33 * e + this.n34 * o, o = this.n41 * n + this.n42 * i + this.n43 * e + this.n44 * o, t.w ? t.w = o : (t.x = t.x / o, t.y = t.y / o, t.z = t.z / o), t
            },
            crossVector: function (t) {
                var n = new e.Vector4;
                return n.x = this.n11 * t.x + this.n12 * t.y + this.n13 * t.z + this.n14 * t.w, n.y = this.n21 * t.x + this.n22 * t.y + this.n23 * t.z + this.n24 * t.w, n.z = this.n31 * t.x + this.n32 * t.y + this.n33 * t.z + this.n34 * t.w, n.w = t.w ? this.n41 * t.x + this.n42 * t.y + this.n43 * t.z + this.n44 * t.w : 1, n
            },
            multiply: function (t, n) {
                this.n11 = t.n11 * n.n11 + t.n12 * n.n21 + t.n13 * n.n31 + t.n14 * n.n41, this.n12 = t.n11 * n.n12 + t.n12 * n.n22 + t.n13 * n.n32 + t.n14 * n.n42, this.n13 = t.n11 * n.n13 + t.n12 * n.n23 + t.n13 * n.n33 + t.n14 * n.n43, this.n14 = t.n11 * n.n14 + t.n12 * n.n24 + t.n13 * n.n34 + t.n14 * n.n44, this.n21 = t.n21 * n.n11 + t.n22 * n.n21 + t.n23 * n.n31 + t.n24 * n.n41, this.n22 = t.n21 * n.n12 + t.n22 * n.n22 + t.n23 * n.n32 + t.n24 * n.n42, this.n23 = t.n21 * n.n13 + t.n22 * n.n23 + t.n23 * n.n33 + t.n24 * n.n43, this.n24 = t.n21 * n.n14 + t.n22 * n.n24 + t.n23 * n.n34 + t.n24 * n.n44, this.n31 = t.n31 * n.n11 + t.n32 * n.n21 + t.n33 * n.n31 + t.n34 * n.n41, this.n32 = t.n31 * n.n12 + t.n32 * n.n22 + t.n33 * n.n32 + t.n34 * n.n42, this.n33 = t.n31 * n.n13 + t.n32 * n.n23 + t.n33 * n.n33 + t.n34 * n.n43, this.n34 = t.n31 * n.n14 + t.n32 * n.n24 + t.n33 * n.n34 + t.n34 * n.n44, this.n41 = t.n41 * n.n11 + t.n42 * n.n21 + t.n43 * n.n31 + t.n44 * n.n41, this.n42 = t.n41 * n.n12 + t.n42 * n.n22 + t.n43 * n.n32 + t.n44 * n.n42, this.n43 = t.n41 * n.n13 + t.n42 * n.n23 + t.n43 * n.n33 + t.n44 * n.n43, this.n44 = t.n41 * n.n14 + t.n42 * n.n24 + t.n43 * n.n34 + t.n44 * n.n44
            },
            multiplySelf: function (t) {
                var n = this.n11, i = this.n12, e = this.n13, o = this.n14, r = this.n21, s = this.n22, a = this.n23,
                    h = this.n24, l = this.n31, c = this.n32, u = this.n33, f = this.n34, m = this.n41, p = this.n42,
                    g = this.n43, d = this.n44;
                this.n11 = n * t.n11 + i * t.n21 + e * t.n31 + o * t.n41, this.n12 = n * t.n12 + i * t.n22 + e * t.n32 + o * t.n42, this.n13 = n * t.n13 + i * t.n23 + e * t.n33 + o * t.n43, this.n14 = n * t.n14 + i * t.n24 + e * t.n34 + o * t.n44, this.n21 = r * t.n11 + s * t.n21 + a * t.n31 + h * t.n41, this.n22 = r * t.n12 + s * t.n22 + a * t.n32 + h * t.n42, this.n23 = r * t.n13 + s * t.n23 + a * t.n33 + h * t.n43, this.n24 = r * t.n14 + s * t.n24 + a * t.n34 + h * t.n44, this.n31 = l * t.n11 + c * t.n21 + u * t.n31 + f * t.n41, this.n32 = l * t.n12 + c * t.n22 + u * t.n32 + f * t.n42, this.n33 = l * t.n13 + c * t.n23 + u * t.n33 + f * t.n43, this.n34 = l * t.n14 + c * t.n24 + u * t.n34 + f * t.n44, this.n41 = m * t.n11 + p * t.n21 + g * t.n31 + d * t.n41, this.n42 = m * t.n12 + p * t.n22 + g * t.n32 + d * t.n42, this.n43 = m * t.n13 + p * t.n23 + g * t.n33 + d * t.n43, this.n44 = m * t.n14 + p * t.n24 + g * t.n34 + d * t.n44
            },
            multiplyScalar: function (t) {
                this.n11 *= t, this.n12 *= t, this.n13 *= t, this.n14 *= t, this.n21 *= t, this.n22 *= t, this.n23 *= t, this.n24 *= t, this.n31 *= t, this.n32 *= t, this.n33 *= t, this.n34 *= t, this.n41 *= t, this.n42 *= t, this.n43 *= t, this.n44 *= t
            },
            determinant: function () {
                return this.n14 * this.n23 * this.n32 * this.n41 - this.n13 * this.n24 * this.n32 * this.n41 - this.n14 * this.n22 * this.n33 * this.n41 + this.n12 * this.n24 * this.n33 * this.n41 + this.n13 * this.n22 * this.n34 * this.n41 - this.n12 * this.n23 * this.n34 * this.n41 - this.n14 * this.n23 * this.n31 * this.n42 + this.n13 * this.n24 * this.n31 * this.n42 + this.n14 * this.n21 * this.n33 * this.n42 - this.n11 * this.n24 * this.n33 * this.n42 - this.n13 * this.n21 * this.n34 * this.n42 + this.n11 * this.n23 * this.n34 * this.n42 + this.n14 * this.n22 * this.n31 * this.n43 - this.n12 * this.n24 * this.n31 * this.n43 - this.n14 * this.n21 * this.n32 * this.n43 + this.n11 * this.n24 * this.n32 * this.n43 + this.n12 * this.n21 * this.n34 * this.n43 - this.n11 * this.n22 * this.n34 * this.n43 - this.n13 * this.n22 * this.n31 * this.n44 + this.n12 * this.n23 * this.n31 * this.n44 + this.n13 * this.n21 * this.n32 * this.n44 - this.n11 * this.n23 * this.n32 * this.n44 - this.n12 * this.n21 * this.n33 * this.n44 + this.n11 * this.n22 * this.n33 * this.n44
            },
            transpose: function () {
                function t(t, n, i) {
                    var e = t[n];
                    t[n] = t[i], t[i] = e
                }

                return t(this, "n21", "n12"), t(this, "n31", "n13"), t(this, "n32", "n23"), t(this, "n41", "n14"), t(this, "n42", "n24"), t(this, "n43", "n34"), this
            },
            clone: function () {
                var t = new e.Matrix4;
                return t.n11 = this.n11, t.n12 = this.n12, t.n13 = this.n13, t.n14 = this.n14, t.n21 = this.n21, t.n22 = this.n22, t.n23 = this.n23, t.n24 = this.n24, t.n31 = this.n31, t.n32 = this.n32, t.n33 = this.n33, t.n34 = this.n34, t.n41 = this.n41, t.n42 = this.n42, t.n43 = this.n43, t.n44 = this.n44, t
            },
            flatten: function () {
                return [this.n11, this.n21, this.n31, this.n41, this.n12, this.n22, this.n32, this.n42, this.n13, this.n23, this.n33, this.n43, this.n14, this.n24, this.n34, this.n44]
            },
            toString: function () {
                return "| " + this.n11 + " " + this.n12 + " " + this.n13 + " " + this.n14 + " |\n| " + this.n21 + " " + this.n22 + " " + this.n23 + " " + this.n24 + " |\n| " + this.n31 + " " + this.n32 + " " + this.n33 + " " + this.n34 + " |\n| " + this.n41 + " " + this.n42 + " " + this.n43 + " " + this.n44 + " |"
            }
        }, e.Matrix4.translationMatrix = function (t, n, i) {
            var o = new e.Matrix4;
            return o.n14 = t, o.n24 = n, o.n34 = i, o
        }, e.Matrix4.scaleMatrix = function (t, n, i) {
            var o = new e.Matrix4;
            return o.n11 = t, o.n22 = n, o.n33 = i, o
        }, e.Matrix4.rotationXMatrix = function (t) {
            var n = new e.Matrix4;
            return n.n22 = n.n33 = Math.cos(t), n.n32 = Math.sin(t), n.n23 = -n.n32, n
        }, e.Matrix4.rotationYMatrix = function (t) {
            var n = new e.Matrix4;
            return n.n11 = n.n33 = Math.cos(t), n.n13 = Math.sin(t), n.n31 = -n.n13, n
        }, e.Matrix4.rotationZMatrix = function (t) {
            var n = new e.Matrix4;
            return n.n11 = n.n22 = Math.cos(t), n.n21 = Math.sin(t), n.n12 = -n.n21, n
        }, e.Matrix4.rotationAxisAngleMatrix = function (t, n) {
            var i = new e.Matrix4, o = Math.cos(n), r = Math.sin(n), s = 1 - o, a = t.x, h = t.y, l = t.z;
            return i.n11 = s * a * a + o, i.n12 = s * a * h - r * l, i.n13 = s * a * l + r * h, i.n21 = s * a * h + r * l, i.n22 = s * h * h + o, i.n23 = s * h * l - r * a, i.n31 = s * a * l - r * h, i.n32 = s * h * l + r * a, i.n33 = s * l * l + o, i
        }, e.Matrix4.makeInvert = function (t) {
            var n = new e.Matrix4;
            return n.n11 = t.n23 * t.n34 * t.n42 - t.n24 * t.n33 * t.n42 + t.n24 * t.n32 * t.n43 - t.n22 * t.n34 * t.n43 - t.n23 * t.n32 * t.n44 + t.n22 * t.n33 * t.n44, n.n12 = t.n14 * t.n33 * t.n42 - t.n13 * t.n34 * t.n42 - t.n14 * t.n32 * t.n43 + t.n12 * t.n34 * t.n43 + t.n13 * t.n32 * t.n44 - t.n12 * t.n33 * t.n44, n.n13 = t.n13 * t.n24 * t.n42 - t.n14 * t.n23 * t.n42 + t.n14 * t.n22 * t.n43 - t.n12 * t.n24 * t.n43 - t.n13 * t.n22 * t.n44 + t.n12 * t.n23 * t.n44, n.n14 = t.n14 * t.n23 * t.n32 - t.n13 * t.n24 * t.n32 - t.n14 * t.n22 * t.n33 + t.n12 * t.n24 * t.n33 + t.n13 * t.n22 * t.n34 - t.n12 * t.n23 * t.n34, n.n21 = t.n24 * t.n33 * t.n41 - t.n23 * t.n34 * t.n41 - t.n24 * t.n31 * t.n43 + t.n21 * t.n34 * t.n43 + t.n23 * t.n31 * t.n44 - t.n21 * t.n33 * t.n44, n.n22 = t.n13 * t.n34 * t.n41 - t.n14 * t.n33 * t.n41 + t.n14 * t.n31 * t.n43 - t.n11 * t.n34 * t.n43 - t.n13 * t.n31 * t.n44 + t.n11 * t.n33 * t.n44, n.n23 = t.n14 * t.n23 * t.n41 - t.n13 * t.n24 * t.n41 - t.n14 * t.n21 * t.n43 + t.n11 * t.n24 * t.n43 + t.n13 * t.n21 * t.n44 - t.n11 * t.n23 * t.n44, n.n24 = t.n13 * t.n24 * t.n31 - t.n14 * t.n23 * t.n31 + t.n14 * t.n21 * t.n33 - t.n11 * t.n24 * t.n33 - t.n13 * t.n21 * t.n34 + t.n11 * t.n23 * t.n34, n.n31 = t.n22 * t.n34 * t.n41 - t.n24 * t.n32 * t.n41 + t.n24 * t.n31 * t.n42 - t.n21 * t.n34 * t.n42 - t.n22 * t.n31 * t.n44 + t.n21 * t.n32 * t.n44, n.n32 = t.n14 * t.n32 * t.n41 - t.n12 * t.n34 * t.n41 - t.n14 * t.n31 * t.n42 + t.n11 * t.n34 * t.n42 + t.n12 * t.n31 * t.n44 - t.n11 * t.n32 * t.n44, n.n33 = t.n13 * t.n24 * t.n41 - t.n14 * t.n22 * t.n41 + t.n14 * t.n21 * t.n42 - t.n11 * t.n24 * t.n42 - t.n12 * t.n21 * t.n44 + t.n11 * t.n22 * t.n44, n.n34 = t.n14 * t.n22 * t.n31 - t.n12 * t.n24 * t.n31 - t.n14 * t.n21 * t.n32 + t.n11 * t.n24 * t.n32 + t.n12 * t.n21 * t.n34 - t.n11 * t.n22 * t.n34, n.n41 = t.n23 * t.n32 * t.n41 - t.n22 * t.n33 * t.n41 - t.n23 * t.n31 * t.n42 + t.n21 * t.n33 * t.n42 + t.n22 * t.n31 * t.n43 - t.n21 * t.n32 * t.n43, n.n42 = t.n12 * t.n33 * t.n41 - t.n13 * t.n32 * t.n41 + t.n13 * t.n31 * t.n42 - t.n11 * t.n33 * t.n42 - t.n12 * t.n31 * t.n43 + t.n11 * t.n32 * t.n43, n.n43 = t.n13 * t.n22 * t.n41 - t.n12 * t.n23 * t.n41 - t.n13 * t.n21 * t.n42 + t.n11 * t.n23 * t.n42 + t.n12 * t.n21 * t.n43 - t.n11 * t.n22 * t.n43, n.n44 = t.n12 * t.n23 * t.n31 - t.n13 * t.n22 * t.n31 + t.n13 * t.n21 * t.n32 - t.n11 * t.n23 * t.n32 - t.n12 * t.n21 * t.n33 + t.n11 * t.n22 * t.n33, n.multiplyScalar(1 / t.determinant()), n
        }, e.Matrix4.makeInvert3x3 = function (t) {
            var n, i = t.flatten(), o = new e.Matrix3, r = i[10] * i[5] - i[6] * i[9], s = -i[10] * i[1] + i[2] * i[9],
                a = i[6] * i[1] - i[2] * i[5], h = -i[10] * i[4] + i[6] * i[8], l = i[10] * i[0] - i[2] * i[8],
                c = -i[6] * i[0] + i[2] * i[4], u = i[9] * i[4] - i[5] * i[8], f = -i[9] * i[0] + i[1] * i[8],
                m = i[5] * i[0] - i[1] * i[4], p = i[0] * r + i[1] * h + i[2] * u;
            if (0 == p) throw"matrix not invertible";
            return n = 1 / p, o.m[0] = n * r, o.m[1] = n * s, o.m[2] = n * a, o.m[3] = n * h, o.m[4] = n * l, o.m[5] = n * c, o.m[6] = n * u, o.m[7] = n * f, o.m[8] = n * m, o
        }, e.Matrix4.makeFrustum = function (t, n, i, o, r, s) {
            var a, h, l, c, u, f, m;
            return h = 2 * r / (n - t), l = 2 * r / (o - i), c = (n + t) / (n - t), u = (o + i) / (o - i), f = -(s + r) / (s - r), m = -2 * s * r / (s - r), (a = new e.Matrix4).n11 = h, a.n12 = 0, a.n13 = c, a.n14 = 0, a.n21 = 0, a.n22 = l, a.n23 = u, a.n24 = 0, a.n31 = 0, a.n32 = 0, a.n33 = f, a.n34 = m, a.n41 = 0, a.n42 = 0, a.n43 = -1, a.n44 = 0, a
        }, e.Matrix4.makePerspective = function (t, n, i, o) {
            var r, s, a, h;
            return a = (s = -(r = i * Math.tan(t * Math.PI / 360))) * n, h = r * n, e.Matrix4.makeFrustum(a, h, s, r, i, o)
        }, e.Matrix4.makeOrtho = function (t, n, i, o, r, s) {
            var a, h, l, c, u, f, m;
            return a = new e.Matrix4, h = (n + t) / (u = n - t), l = (o + i) / (f = o - i), c = (s + r) / (m = s - r), a.n11 = 2 / u, a.n12 = 0, a.n13 = 0, a.n14 = -h, a.n21 = 0, a.n22 = 2 / f, a.n23 = 0, a.n24 = -l, a.n31 = 0, a.n32 = 0, a.n33 = -2 / m, a.n34 = -c, a.n41 = 0, a.n42 = 0, a.n43 = 0, a.n44 = 1, a
        }, e.Vertex = function (t, n) {
            this.position = t || new e.Vector3, this.positionWorld = new e.Vector3, this.positionScreen = new e.Vector3, this.normal = n || new e.Vector3, this.normalWorld = new e.Vector3, this.normalScreen = new e.Vector3, this.__visible = !0
        }, e.Vertex.prototype = {
            toString: function () {
                return "THREE.Vertex ( position: " + this.position + ", normal: " + this.normal + " )"
            }
        }, e.Face3 = function (t, n, i, o, r) {
            this.a = t, this.b = n, this.c = i, this.centroid = new e.Vector3, this.normal = o instanceof e.Vector3 ? o : new e.Vector3, this.vertexNormals = o instanceof Array ? o : [], this.material = r instanceof Array ? r : [r]
        }, e.Face3.prototype = {
            toString: function () {
                return "THREE.Face3 ( " + this.a + ", " + this.b + ", " + this.c + " )"
            }
        }, e.Face4 = function (t, n, i, o, r, s) {
            this.a = t, this.b = n, this.c = i, this.d = o, this.centroid = new e.Vector3, this.normal = r instanceof e.Vector3 ? r : new e.Vector3, this.vertexNormals = r instanceof Array ? r : [], this.material = s instanceof Array ? s : [s]
        }, e.Face4.prototype = {
            toString: function () {
                return "THREE.Face4 ( " + this.a + ", " + this.b + ", " + this.c + " " + this.d + " )"
            }
        }, e.UV = function (t, n) {
            this.u = t || 0, this.v = n || 0
        }, e.UV.prototype = {
            copy: function (t) {
                this.u = t.u, this.v = t.v
            }, toString: function () {
                return "THREE.UV (" + this.u + ", " + this.v + ")"
            }
        }, e.Geometry = function () {
            this.vertices = [], this.faces = [], this.uvs = []
        }, e.Geometry.prototype = {
            computeCentroids: function () {
                var t, n, i;
                for (t = 0, n = this.faces.length; t < n; t++) (i = this.faces[t]).centroid.set(0, 0, 0), i instanceof e.Face3 ? (i.centroid.addSelf(this.vertices[i.a].position), i.centroid.addSelf(this.vertices[i.b].position), i.centroid.addSelf(this.vertices[i.c].position), i.centroid.divideScalar(3)) : i instanceof e.Face4 && (i.centroid.addSelf(this.vertices[i.a].position), i.centroid.addSelf(this.vertices[i.b].position), i.centroid.addSelf(this.vertices[i.c].position), i.centroid.addSelf(this.vertices[i.d].position), i.centroid.divideScalar(4))
            }, computeNormals: function (t) {
                var n, i, o, r, s, a, h, l, c, u, f = new e.Vector3, m = new e.Vector3;
                for (o = 0, r = this.vertices.length; o < r; o++) this.vertices[o].normal.set(0, 0, 0);
                for (s = 0, a = this.faces.length; s < a; s++) if (h = this.faces[s], t && h.vertexNormals.length) {
                    for (f.set(0, 0, 0), n = 0, i = h.normal.length; n < i; n++) f.addSelf(h.vertexNormals[n]);
                    f.divideScalar(3), f.isZero() || f.normalize(), h.normal.copy(f)
                } else l = this.vertices[h.a], c = this.vertices[h.b], u = this.vertices[h.c], f.sub(u.position, c.position), m.sub(l.position, c.position), f.crossSelf(m), f.isZero() || f.normalize(), h.normal.copy(f)
            }, computeBoundingBox: function () {
                if (this.vertices.length > 0) {
                    this.bbox = {
                        x: [this.vertices[0].position.x, this.vertices[0].position.x],
                        y: [this.vertices[0].position.y, this.vertices[0].position.y],
                        z: [this.vertices[0].position.z, this.vertices[0].position.z]
                    };
                    for (var t = 1, n = this.vertices.length; t < n; t++) vertex = this.vertices[t], vertex.position.x < this.bbox.x[0] ? this.bbox.x[0] = vertex.position.x : vertex.position.x > this.bbox.x[1] && (this.bbox.x[1] = vertex.position.x), vertex.position.y < this.bbox.y[0] ? this.bbox.y[0] = vertex.position.y : vertex.position.y > this.bbox.y[1] && (this.bbox.y[1] = vertex.position.y), vertex.position.z < this.bbox.z[0] ? this.bbox.z[0] = vertex.position.z : vertex.position.z > this.bbox.z[1] && (this.bbox.z[1] = vertex.position.z)
                }
            }, toString: function () {
                return "THREE.Geometry ( vertices: " + this.vertices + ", faces: " + this.faces + " )"
            }
        }, e.Camera = function (t, n, i, o) {
            this.fov = t, this.aspect = n, this.position = new e.Vector3(0, 0, 0), this.target = {position: new e.Vector3(0, 0, 0)}, this.projectionMatrix = e.Matrix4.makePerspective(t, n, i, o), this.up = new e.Vector3(0, 1, 0), this.matrix = new e.Matrix4, this.autoUpdateMatrix = !0, this.updateMatrix = function () {
                this.matrix.lookAt(this.position, this.target.position, this.up)
            }, this.toString = function () {
                return "THREE.Camera ( " + this.position + ", " + this.target.position + " )"
            }
        }, e.Light = function (t) {
            this.color = new e.Color(255 << 24 | t)
        }, e.AmbientLight = function (t) {
            e.Light.call(this, t)
        }, e.AmbientLight.prototype = new e.Light, e.AmbientLight.prototype.constructor = e.AmbientLight, e.DirectionalLight = function (t, n) {
            e.Light.call(this, t), this.position = new e.Vector3(0, 1, 0), this.intensity = n || 1
        }, e.DirectionalLight.prototype = new e.Light, e.DirectionalLight.prototype.constructor = e.DirectionalLight, e.PointLight = function (t, n) {
            e.Light.call(this, t), this.position = new e.Vector3(0, 0, 0), this.intensity = n || 1
        }, e.DirectionalLight.prototype = new e.Light, e.DirectionalLight.prototype.constructor = e.PointLight, e.Object3D = function (t) {
            this.position = new e.Vector3, this.rotation = new e.Vector3, this.scale = new e.Vector3(1, 1, 1), this.matrix = new e.Matrix4, this.matrixTranslation = new e.Matrix4, this.matrixRotation = new e.Matrix4, this.matrixScale = new e.Matrix4, this.screen = new e.Vector3, this.autoUpdateMatrix = !0, this.updateMatrix = function () {
                this.matrixPosition = e.Matrix4.translationMatrix(this.position.x, this.position.y, this.position.z), this.matrixRotation = e.Matrix4.rotationXMatrix(this.rotation.x), this.matrixRotation.multiplySelf(e.Matrix4.rotationYMatrix(this.rotation.y)), this.matrixRotation.multiplySelf(e.Matrix4.rotationZMatrix(this.rotation.z)), this.matrixScale = e.Matrix4.scaleMatrix(this.scale.x, this.scale.y, this.scale.z), this.matrix.copy(this.matrixPosition), this.matrix.multiplySelf(this.matrixRotation), this.matrix.multiplySelf(this.matrixScale)
            }
        }, e.Particle = function (t) {
            e.Object3D.call(this), this.material = t instanceof Array ? t : [t], this.autoUpdateMatrix = !1
        }, e.Particle.prototype = new e.Object3D, e.Particle.prototype.constructor = e.Particle, e.Line = function (t, n) {
            e.Object3D.call(this), this.geometry = t, this.material = n instanceof Array ? n : [n]
        }, e.Line.prototype = new e.Object3D, e.Line.prototype.constructor = e.Line, e.Mesh = function (t, n, i) {
            e.Object3D.call(this), this.geometry = t, this.material = n instanceof Array ? n : [n], this.flipSided = !1, this.doubleSided = !1, this.overdraw = !1, this.materialFaceGroup = {}, this.sortFacesByMaterial(), i && this.normalizeUVs(), this.geometry.computeBoundingBox()
        }, e.Mesh.prototype = new e.Object3D, e.Mesh.prototype.constructor = e.Mesh, e.Mesh.prototype.sortFacesByMaterial = function () {
            var t, n, i, e, o, r;

            function s(i) {
                for (r = [], t = 0, n = i.length; t < n; t++) void 0 == i[t] ? r.push("undefined") : r.push(i[t].toString());
                return r.join("_")
            }

            for (i = 0, e = this.geometry.faces.length; i < e; i++) o = this.geometry.faces[i].material, hash = s(o), void 0 == this.materialFaceGroup[hash] && (this.materialFaceGroup[hash] = {
                faces: [],
                material: o
            }), this.materialFaceGroup[hash].faces.push(i)
        }, e.Mesh.prototype.normalizeUVs = function () {
            var t, n, i, e, o;
            for (t = 0, n = this.geometry.uvs.length; t < n; t++) for (i = 0, e = (o = this.geometry.uvs[t]).length; i < e; i++) 1 != o[i].u && (o[i].u = o[i].u - Math.floor(o[i].u)), 1 != o[i].v && (o[i].v = o[i].v - Math.floor(o[i].v))
        }, e.LineColorMaterial = function (t, n, i) {
            this.lineWidth = i || 1, this.color = new e.Color((n >= 0 ? 255 * n << 24 : 4278190080) | t)
        }, e.LineColorMaterial.prototype = {
            toString: function () {
                return "THREE.LineColorMaterial ( color: " + this.color + ", lineWidth: " + this.lineWidth + " )"
            }
        }, e.MeshPhongMaterial = function (t, n, i, o, r) {
            this.ambient = new e.Color((r >= 0 ? 255 * r << 24 : 4278190080) | t), this.diffuse = new e.Color((r >= 0 ? 255 * r << 24 : 4278190080) | n), this.specular = new e.Color((r >= 0 ? 255 * r << 24 : 4278190080) | i), this.shininess = o, this.opacity = r, this.toString = function () {
                return "THREE.MeshPhongMaterial ( <br/>ambient: " + this.ambient + ", <br/>diffuse: " + this.diffuse + ", <br/>specular: " + this.specular + ", <br/>shininess: " + this.shininess + ", <br/>opacity: " + this.opacity + ")"
            }
        }, e.MeshBitmapMaterial = function (t, n) {
            this.bitmap = t, this.mode = n || e.MeshBitmapMaterialMode.UVMAPPING, this.id = e.MeshBitmapMaterialCounter.value++, this.toString = function () {
                return "THREE.MeshBitmapMaterial ( bitmap: " + this.bitmap + ", mode: " + this.mode + ", id: " + this.id + " )"
            }
        }, e.MeshBitmapMaterialCounter = {value: 0}, e.MeshBitmapMaterialMode = {UVMAPPING: 0}, e.MeshColorFillMaterial = function (t, n) {
            this.color = new e.Color((n >= 0 ? 255 * n << 24 : 4278190080) | t), this.toString = function () {
                return "THREE.MeshColorFillMaterial ( color: " + this.color + " )"
            }
        }, e.MeshColorStrokeMaterial = function (t, n, i) {
            this.lineWidth = i || 1, this.color = new e.Color((n >= 0 ? 255 * n << 24 : 4278190080) | t), this.toString = function () {
                return "THREE.MeshColorStrokeMaterial ( lineWidth: " + this.lineWidth + ", color: " + this.color + " )"
            }
        }, e.MeshFaceMaterial = function () {
            this.toString = function () {
                return "THREE.MeshFaceMaterial"
            }
        }, e.ParticleBitmapMaterial = function (t) {
            this.bitmap = t, this.offset = new e.Vector2, this.toString = function () {
                return "THREE.ParticleBitmapMaterial ( bitmap: " + this.bitmap + " )"
            }
        }, e.ParticleCircleMaterial = function (t, n) {
            this.color = new e.Color((n >= 0 ? 255 * n << 24 : 4278190080) | t), this.toString = function () {
                return "THREE.ParticleCircleMaterial ( color: " + this.color + " )"
            }
        }, e.ParticleDOMMaterial = function (t) {
            this.domElement = t, this.toString = function () {
                return "THREE.ParticleDOMMaterial ( domElement: " + this.domElement + " )"
            }
        }, e.Scene = function () {
            this.objects = [], this.lights = [], this.addObject = function (t) {
                this.objects.push(t)
            }, this.removeObject = function (t) {
                for (var n = 0, i = this.objects.length; n < i; n++) if (t == this.objects[n]) return void this.objects.splice(n, 1)
            }, this.addLight = function (t) {
                this.lights.push(t)
            }, this.removeLight = function (t) {
                for (var n = 0, i = this.lights.length; n < i; n++) if (t == this.lights[n]) return void this.lights.splice(n, 1)
            }, this.add = function (t) {
                this.addObject(t)
            }, this.toString = function () {
                return "THREE.Scene ( " + this.objects + " )"
            }
        }, e.Projector = function () {
            var t, n, i, o, r, s, a, h, l = null, c = [], u = [], f = [], m = [], p = new e.Vector4, g = new e.Matrix4,
                d = new e.Matrix4;
            this.projectScene = function (x, v) {
                var y, b, M, w, S, _, L, z, R, A, P, E, C, V, B, F, T, D, G;
                for (l = [], n = 0, o = 0, s = 0, h = 0, v.autoUpdateMatrix && v.updateMatrix(), g.multiply(v.projectionMatrix, v.matrix), y = 0, b = (L = x.objects).length; y < b; y++) if (R = (z = L[y]).matrix, z.autoUpdateMatrix && z.updateMatrix(), z instanceof e.Mesh) {
                    for (d.multiply(g, R), M = 0, w = (A = z.geometry.vertices).length; M < w; M++) (E = (P = A[M]).positionScreen).copy(P.position), d.transform(E), P.__visible = E.z > 0 && E.z < 1;
                    for (S = 0, _ = (V = z.geometry.faces).length; S < _; S++) (B = V[S]) instanceof e.Face3 ? (F = A[B.a], T = A[B.b], D = A[B.c], F.__visible && T.__visible && D.__visible && (z.doubleSided || z.flipSided != (D.positionScreen.x - F.positionScreen.x) * (T.positionScreen.y - F.positionScreen.y) - (D.positionScreen.y - F.positionScreen.y) * (T.positionScreen.x - F.positionScreen.x) < 0) && ((t = c[n] = c[n] || new e.RenderableFace3).v1.copy(F.positionScreen), t.v2.copy(T.positionScreen), t.v3.copy(D.positionScreen), t.centroidWorld.copy(B.centroid), z.matrix.transform(t.centroidWorld), t.normalWorld.copy(B.normal), z.matrixRotation.transform(t.normalWorld), t.z = Math.max(F.positionScreen.z, Math.max(T.positionScreen.z, D.positionScreen.z)), t.meshMaterial = z.material, t.faceMaterial = B.material, t.overdraw = z.overdraw, t.uvs = z.geometry.uvs[S], t.color = B.color, l.push(t), n++)) : B instanceof e.Face4 && (F = A[B.a], T = A[B.b], D = A[B.c], G = A[B.d], F.__visible && T.__visible && D.__visible && G.__visible && (z.doubleSided || z.flipSided != ((G.positionScreen.x - F.positionScreen.x) * (T.positionScreen.y - F.positionScreen.y) - (G.positionScreen.y - F.positionScreen.y) * (T.positionScreen.x - F.positionScreen.x) < 0 || (T.positionScreen.x - D.positionScreen.x) * (G.positionScreen.y - D.positionScreen.y) - (T.positionScreen.y - D.positionScreen.y) * (G.positionScreen.x - D.positionScreen.x) < 0)) && ((i = u[o] = u[o] || new e.RenderableFace4).v1.copy(F.positionScreen), i.v2.copy(T.positionScreen), i.v3.copy(D.positionScreen), i.v4.copy(G.positionScreen), i.centroidWorld.copy(B.centroid), z.matrix.transform(i.centroidWorld), i.normalWorld.copy(B.normal), z.matrixRotation.transform(i.normalWorld), i.z = Math.max(F.positionScreen.z, Math.max(T.positionScreen.z, Math.max(D.positionScreen.z, G.positionScreen.z))), i.meshMaterial = z.material, i.faceMaterial = B.material, i.overdraw = z.overdraw, i.uvs = z.geometry.uvs[S], i.color = B.color, l.push(i), o++))
                } else if (z instanceof e.Line) for (d.multiply(g, R), M = 0, w = (A = z.geometry.vertices).length; M < w; M++) (E = (P = A[M]).positionScreen).copy(P.position), d.transform(E), P.__visible = E.z > 0 && E.z < 1, M > 0 && (C = z.geometry.vertices[M - 1], P.__visible && C.__visible && ((r = f[s] = f[s] || new e.RenderableLine).v1.copy(P.positionScreen), r.v2.copy(C.positionScreen), r.z = Math.max(P.positionScreen.z, C.positionScreen.z), r.material = z.material, l.push(r), s++)); else z instanceof e.Particle && (p.set(z.position.x, z.position.y, z.position.z, 1), v.matrix.transform(p), v.projectionMatrix.transform(p), z.screen.set(p.x / p.w, p.y / p.w, p.z / p.w), z.screen.z > 0 && z.screen.z < 1 && ((a = m[h] = m[h] || new e.RenderableParticle).x = z.screen.x, a.y = z.screen.y, a.z = z.screen.z, a.rotation = z.rotation.z, a.scale.x = z.scale.x * Math.abs(p.x / p.w - (p.x + v.projectionMatrix.n11) / (p.w + v.projectionMatrix.n14)), a.scale.y = z.scale.y * Math.abs(p.y / p.w - (p.y + v.projectionMatrix.n22) / (p.w + v.projectionMatrix.n24)), a.material = z.material, a.color = z.color, l.push(a), h++));
                return l.sort(function (t, n) {
                    return n.z - t.z
                }), l
            }
        }, e.DOMRenderer = function () {
            e.Renderer.call(this);
            var t, n, i = null, o = new e.Projector, r = document.createElement("div");
            this.domElement = r, this.setSize = function (i, e) {
                t = i / 2, n = e / 2
            }, this.render = function (r, s) {
                var a, h, l, c, u, f, m, p, g;
                for (a = 0, h = (i = o.projectScene(r, s)).length; a < h; a++) if ((u = i[a]) instanceof e.RenderableParticle) for (p = u.x * t + t, g = u.y * n + n, l = 0, c = u.material.length; l < c; l++) (f = u.material[l]) instanceof e.ParticleDOMMaterial && ((m = f.domElement).style.left = p + "px", m.style.top = g + "px")
            }
        }, e.CanvasRenderer = function () {
            var t, n, i, o, r = null, s = new e.Projector, a = document.createElement("canvas"), h = a.getContext("2d"),
                l = new e.Rectangle, c = new e.Rectangle, u = new e.Rectangle, f = !1, m = new e.Color(4294967295),
                p = new e.Color(4294967295), g = new e.Color(4294967295), d = 2 * Math.PI, x = new e.Vector2,
                v = new e.Vector3, y = new e.UV, b = new e.UV, M = new e.UV, w = new e.UV, S = new e.Vector2,
                _ = new e.Vector2;

            function L(t, n, i) {
                var o, r, s;
                for (o = 0, r = t.lights.length; o < r; o++) (s = t.lights[o]) instanceof e.DirectionalLight ? (i.r += s.color.r, i.g += s.color.g, i.b += s.color.b) : s instanceof e.PointLight && (i.r += s.color.r, i.g += s.color.g, i.b += s.color.b)
            }

            function z(t, n, i) {
                var o, r, s, a;
                for (o = 0, r = t.lights.length; o < r; o++) (s = t.lights[o]) instanceof e.DirectionalLight ? (a = n.normalWorld.dot(s.position) * s.intensity) > 0 && (i.r += s.color.r * a, i.g += s.color.g * a, i.b += s.color.b * a) : s instanceof e.PointLight && (v.sub(s.position, n.centroidWorld), v.normalize(), (a = n.normalWorld.dot(v) * s.intensity) > 0 && (i.r += s.color.r * a, i.g += s.color.g * a, i.b += s.color.b * a))
            }

            function R(t, n, r, s, a) {
                var c, x, v, y, b, M, w, S, _;
                if (s instanceof e.ParticleCircleMaterial) {
                    if (f ? (p.copyRGB(g), L(a, 0, p), m.copyRGBA(s.color), m.multiplySelfRGB(p), m.updateStyleString()) : m = s.color, c = r.scale.x * i, x = r.scale.y * o, u.set(t - c, n - x, t + c, n + x), !l.instersects(u)) return;
                    h.save(), h.translate(t, n), h.rotate(-r.rotation), h.scale(c, x), h.beginPath(), h.arc(0, 0, 1, 0, d, !0), h.closePath(), h.fillStyle = m.__styleString, h.fill(), h.restore()
                } else if (s instanceof e.ParticleBitmapMaterial) {
                    if (S = (w = s.bitmap).width / 2, _ = w.height / 2, c = (v = r.scale.x * i) * S, x = (y = r.scale.y * o) * _, b = s.offset.x * v, M = s.offset.y * y, u.set(t + b - c, n + M - x, t + b + c, n + M + x), !l.instersects(u)) return;
                    h.save(), h.translate(t, n), h.rotate(-r.rotation), h.scale(v, -y), h.translate(-S + s.offset.x, -_ - s.offset.y), h.drawImage(w, 0, 0), h.restore()
                }
            }

            function A(t, n, i, o, r, s, a) {
                s instanceof e.LineColorMaterial && (f ? (p.copyRGB(g), L(a, 0, p), m.copyRGBA(s.color), m.multiplySelfRGB(p), m.updateStyleString()) : m = s.color, h.lineWidth = s.lineWidth, h.lineJoin = "round", h.lineCap = "round", h.strokeStyle = m.__styleString, h.stroke(), u.inflate(h.lineWidth))
            }

            function P(t, n, i, o, r, s, a, l, c) {
                var d, x, v;
                l instanceof e.MeshColorFillMaterial ? (f ? (p.copyRGB(g), z(c, a, p), m.copyRGBA(l.color), m.multiplySelfRGB(p), m.updateStyleString()) : m = l.color, h.beginPath(), h.moveTo(t, n), h.lineTo(i, o), h.lineTo(r, s), h.lineTo(t, n), h.closePath(), h.fillStyle = m.__styleString, h.fill()) : l instanceof e.MeshColorStrokeMaterial ? (f ? (p.copyRGB(g), z(c, a, p), m.copyRGBA(l.color), m.multiplySelfRGB(p), m.updateStyleString()) : m = l.color, h.beginPath(), h.moveTo(t, n), h.lineTo(i, o), h.lineTo(r, s), h.lineTo(t, n), h.closePath(), h.lineWidth = l.lineWidth, h.lineJoin = "round", h.lineCap = "round", h.strokeStyle = m.__styleString, h.stroke(), u.inflate(h.lineWidth)) : l instanceof e.MeshBitmapMaterial && (x = (d = l.bitmap).width - 1, v = d.height - 1, y.copy(a.uvs[0]), b.copy(a.uvs[1]), M.copy(a.uvs[2]), y.u *= x, y.v *= v, b.u *= x, b.v *= v, M.u *= x, M.v *= v, C(d, t, n, i, o, r, s, y.u, y.v, b.u, b.v, M.u, M.v))
            }

            function E(t, n, i, o, r, s, a, l, c, d, x, v, S, _, L) {
                var R, A, P;
                _ instanceof e.MeshColorFillMaterial ? (f ? (p.copyRGB(g), z(L, S, p), m.copyRGBA(_.color), m.multiplySelfRGB(p), m.updateStyleString()) : m = _.color, h.beginPath(), h.moveTo(t, n), h.lineTo(i, o), h.lineTo(r, s), h.lineTo(a, l), h.lineTo(t, n), h.closePath(), h.fillStyle = m.__styleString, h.fill()) : _ instanceof e.MeshColorStrokeMaterial ? (f ? (p.copyRGB(g), z(L, S, p), m.copyRGBA(_.color), m.multiplySelfRGB(p), m.updateStyleString()) : m = _.color, h.beginPath(), h.moveTo(t, n), h.lineTo(i, o), h.lineTo(r, s), h.lineTo(a, l), h.lineTo(t, n), h.closePath(), h.lineWidth = _.lineWidth, h.lineJoin = "round", h.lineCap = "round", h.strokeStyle = m.__styleString, h.stroke(), u.inflate(h.lineWidth)) : _ instanceof e.MeshBitmapMaterial && (A = (R = _.bitmap).width - 1, P = R.height - 1, y.copy(S.uvs[0]), b.copy(S.uvs[1]), M.copy(S.uvs[2]), w.copy(S.uvs[3]), y.u *= A, y.v *= P, b.u *= A, b.v *= P, M.u *= A, M.v *= P, w.u *= A, w.v *= P, C(R, t, n, i, o, a, l, y.u, y.v, b.u, b.v, w.u, w.v), C(R, c, d, r, s, x, v, b.u, b.v, M.u, M.v, w.u, w.v))
            }

            function C(t, n, i, e, o, r, s, a, l, c, u, f, m) {
                var p, g, d, x, v, y, b;
                h.beginPath(), h.moveTo(n, i), h.lineTo(e, o), h.lineTo(r, s), h.lineTo(n, i), h.closePath(), h.save(), h.clip(), g = -(l * (r - e) - u * r + m * e + (u - m) * n) / (p = a * (m - u) - c * m + f * u + (c - f) * l), d = (u * s + l * (o - s) - m * o + (m - u) * i) / p, x = (a * (r - e) - c * r + f * e + (c - f) * n) / p, v = -(c * s + a * (o - s) - f * o + (f - c) * i) / p, y = (a * (m * e - u * r) + l * (c * r - f * e) + (f * u - c * m) * n) / p, b = (a * (m * o - u * s) + l * (c * s - f * o) + (f * u - c * m) * i) / p, h.transform(g, d, x, v, y, b), h.drawImage(t, 0, 0), h.restore()
            }

            function V(t, n) {
                x.sub(n, t), x.unit(), x.multiplyScalar(.75), n.addSelf(x), t.subSelf(x)
            }

            this.domElement = a, this.autoClear = !0, this.setSize = function (e, r) {
                i = (t = e) / 2, o = (n = r) / 2, a.width = t, a.height = n, l.set(-i, -o, i, o)
            }, this.clear = function () {
                c.isEmpty() || (c.inflate(1), c.minSelf(l), h.setTransform(1, 0, 0, -1, i, o), h.clearRect(c.getX(), c.getY(), c.getWidth(), c.getHeight()), c.empty())
            }, this.render = function (t, n) {
                var a, m, p, d, x, v, y, b, M, w, L, z, C, B, F, T, D, G, U, k;
                for (this.autoClear && this.clear(), r = s.projectScene(t, n), h.setTransform(1, 0, 0, -1, i, o), (f = t.lights.length > 0) && function (t, n) {
                    var i, o, r;
                    for (n.setRGBA(1, 1, 1, 1), i = 0, o = t.lights.length; i < o; i++) (r = t.lights[i]) instanceof e.AmbientLight && (n.r *= r.color.r, n.g *= r.color.g, n.b *= r.color.b)
                }(t, g), a = 0, m = r.length; a < m; a++) {
                    if (p = r[a], u.empty(), p instanceof e.RenderableParticle) for (M = p.x * i, w = p.y * o, d = 0, x = p.material.length; d < x; d++) R(M, w, p, b = p.material[d], t); else if (p instanceof e.RenderableLine) {
                        if (M = p.v1.x * i, w = p.v1.y * o, L = p.v2.x * i, z = p.v2.y * o, u.addPoint(M, w), u.addPoint(L, z), !l.instersects(u)) continue;
                        for (h.beginPath(), h.moveTo(M, w), h.lineTo(L, z), h.closePath(), d = 0, x = p.material.length; d < x; d++) A(M, w, L, z, p, b = p.material[d], t)
                    } else if (p instanceof e.RenderableFace3) {
                        if (p.v1.x *= i, p.v1.y *= o, p.v2.x *= i, p.v2.y *= o, p.v3.x *= i, p.v3.y *= o, p.overdraw && (V(p.v1, p.v2), V(p.v2, p.v3), V(p.v3, p.v1)), M = p.v1.x, w = p.v1.y, L = p.v2.x, z = p.v2.y, C = p.v3.x, B = p.v3.y, u.addPoint(M, w), u.addPoint(L, z), u.addPoint(C, B), !l.instersects(u)) continue;
                        for (d = 0, x = p.meshMaterial.length; d < x;) if ((b = p.meshMaterial[d++]) instanceof e.MeshFaceMaterial) for (v = 0, y = p.faceMaterial.length; v < y;) P(M, w, L, z, C, B, p, b = p.faceMaterial[v++], t); else P(M, w, L, z, C, B, p, b, t)
                    } else if (p instanceof e.RenderableFace4) {
                        if (p.v1.x *= i, p.v1.y *= o, p.v2.x *= i, p.v2.y *= o, p.v3.x *= i, p.v3.y *= o, p.v4.x *= i, p.v4.y *= o, S.copy(p.v2), _.copy(p.v4), p.overdraw && (V(p.v1, p.v2), V(p.v2, p.v4), V(p.v4, p.v1)), M = p.v1.x, w = p.v1.y, L = p.v2.x, z = p.v2.y, F = p.v4.x, T = p.v4.y, p.overdraw && (V(p.v3, S), V(p.v3, _)), C = p.v3.x, B = p.v3.y, D = S.x, G = S.y, U = _.x, k = _.y, u.addPoint(M, w), u.addPoint(L, z), u.addPoint(C, B), u.addPoint(F, T), !l.instersects(u)) continue;
                        for (d = 0, x = p.meshMaterial.length; d < x;) if ((b = p.meshMaterial[d++]) instanceof e.MeshFaceMaterial) for (v = 0, y = p.faceMaterial.length; v < y;) E(M, w, L, z, C, B, F, T, D, G, U, k, p, b = p.faceMaterial[v++], t); else E(M, w, L, z, C, B, F, T, D, G, U, k, p, b, t)
                    }
                    c.addRectangle(u)
                }
                h.setTransform(1, 0, 0, 1, 0, 0)
            }
        }, e.SVGRenderer = function () {
            var t, n, i, o, r, s, a, h = null, l = new e.Projector,
                c = document.createElementNS("http://www.w3.org/2000/svg", "svg"), u = new e.Rectangle,
                f = new e.Rectangle, m = !1, p = new e.Color(4294967295), g = new e.Color(4294967295),
                d = new e.Color(4294967295), x = new e.Vector3, v = [], y = [], b = 1;

            function M(t, n, i) {
                var o, r, s, a;
                for (o = 0, r = t.lights.length; o < r; o++) (s = t.lights[o]) instanceof e.DirectionalLight ? (a = n.normalWorld.dot(s.position) * s.intensity) > 0 && (i.r += s.color.r * a, i.g += s.color.g * a, i.b += s.color.b * a) : s instanceof e.PointLight && (x.sub(s.position, n.centroidWorld), x.normalize(), (a = n.normalWorld.dot(x) * s.intensity) > 0 && (i.r += s.color.r * a, i.g += s.color.g * a, i.b += s.color.b * a))
            }

            function w(t, n, o, s, h) {
                (r = function (t) {
                    if (null == y[t]) return y[t] = document.createElementNS("http://www.w3.org/2000/svg", "circle"), 0 == b && y[t].setAttribute("shape-rendering", "crispEdges"), y[t];
                    return y[t]
                }(a++)).setAttribute("cx", t), r.setAttribute("cy", n), r.setAttribute("r", o.scale.x * i), s instanceof e.ParticleCircleMaterial && (m ? (g.copyRGB(d), function (t, n, i) {
                    var o, r, s;
                    for (o = 0, r = t.lights.length; o < r; o++) (s = t.lights[o]) instanceof e.DirectionalLight ? (i.r += s.color.r, i.g += s.color.g, i.b += s.color.b) : s instanceof e.PointLight && (i.r += s.color.r, i.g += s.color.g, i.b += s.color.b)
                }(h, 0, g), p.copyRGBA(s.color), p.multiplySelfRGB(g), p.updateStyleString()) : p = s.color, r.setAttribute("style", "fill: " + p.__styleString)), c.appendChild(r)
            }

            function S(t, n, i, o, a, h, l, u, f) {
                (r = L(s++)).setAttribute("d", "M " + t + " " + n + " L " + i + " " + o + " L " + a + "," + h + "z"), u instanceof e.MeshColorFillMaterial ? (m ? (g.copyRGB(d), M(f, l, g), p.copyRGBA(u.color), p.multiplySelfRGB(g), p.updateStyleString()) : p = u.color, r.setAttribute("style", "fill: " + p.__styleString)) : u instanceof e.MeshColorStrokeMaterial && (m ? (g.copyRGB(d), M(f, l, g), p.copyRGBA(u.color), p.multiplySelfRGB(g), p.updateStyleString()) : p = u.color, r.setAttribute("style", "fill: none; stroke: " + p.__styleString + "; stroke-width: " + u.lineWidth + "; stroke-linecap: round; stroke-linejoin: round")), c.appendChild(r)
            }

            function _(t, n, i, o, a, h, l, u, f, x, v) {
                (r = L(s++)).setAttribute("d", "M " + t + " " + n + " L " + i + " " + o + " L " + a + "," + h + " L " + l + "," + u + "z"), x instanceof e.MeshColorFillMaterial ? (m ? (g.copyRGB(d), M(v, f, g), p.copyRGBA(x.color), p.multiplySelfRGB(g), p.updateStyleString()) : p = x.color, r.setAttribute("style", "fill: " + p.__styleString)) : x instanceof e.MeshColorStrokeMaterial && (m ? (g.copyRGB(d), M(v, f, g), p.copyRGBA(x.color), p.multiplySelfRGB(g), p.updateStyleString()) : p = x.color, r.setAttribute("style", "fill: none; stroke: " + p.__styleString + "; stroke-width: " + x.lineWidth + "; stroke-linecap: round; stroke-linejoin: round")), c.appendChild(r)
            }

            function L(t) {
                return null == v[t] ? (v[t] = document.createElementNS("http://www.w3.org/2000/svg", "path"), 0 == b && v[t].setAttribute("shape-rendering", "crispEdges"), v[t]) : v[t]
            }

            this.domElement = c, this.autoClear = !0, this.setQuality = function (t) {
                switch (t) {
                    case"high":
                        b = 1;
                        break;
                    case"low":
                        b = 0
                }
            }, this.setSize = function (e, r) {
                i = (t = e) / 2, o = (n = r) / 2, c.setAttribute("viewBox", -i + " " + -o + " " + t + " " + n), c.setAttribute("width", t), c.setAttribute("height", n), u.set(-i, -o, i, o)
            }, this.clear = function () {
                for (; c.childNodes.length > 0;) c.removeChild(c.childNodes[0])
            }, this.render = function (t, n) {
                var r, c, p, g, x, v, y, b, M, L, z, R, A, P, E, C;
                for (this.autoClear && this.clear(), h = l.projectScene(t, n), s = 0, a = 0, (m = t.lights.length > 0) && function (t, n) {
                    var i, o, r;
                    for (n.setRGBA(1, 1, 1, 1), i = 0, o = t.lights.length; i < o; i++) (r = t.lights[i]) instanceof e.AmbientLight && (n.r *= r.color.r, n.g *= r.color.g, n.b *= r.color.b)
                }(t, d), r = 0, c = h.length; r < c; r++) if (y = h[r], f.empty(), y instanceof e.RenderableParticle) for (M = y.x * i, L = y.y * -o, p = 0, g = y.material.length; p < g; p++) w(M, L, y, b = y.material[p], t); else if (y instanceof e.RenderableFace3) {
                    if (M = y.v1.x * i, L = y.v1.y * -o, z = y.v2.x * i, R = y.v2.y * -o, A = y.v3.x * i, P = y.v3.y * -o, f.addPoint(M, L), f.addPoint(z, R), f.addPoint(A, P), !u.instersects(f)) continue;
                    for (p = 0, g = y.meshMaterial.length; p < g;) if ((b = y.meshMaterial[p++]) instanceof e.MeshFaceMaterial) for (x = 0, v = y.faceMaterial.length; x < v;) S(M, L, z, R, A, P, y, b = y.faceMaterial[x++], t); else S(M, L, z, R, A, P, y, b, t)
                } else if (y instanceof e.RenderableFace4) {
                    if (M = y.v1.x * i, L = y.v1.y * -o, z = y.v2.x * i, R = y.v2.y * -o, A = y.v3.x * i, P = y.v3.y * -o, E = y.v4.x * i, C = y.v4.y * -o, f.addPoint(M, L), f.addPoint(z, R), f.addPoint(A, P), f.addPoint(E, C), !u.instersects(f)) continue;
                    for (p = 0, g = y.meshMaterial.length; p < g;) if ((b = y.meshMaterial[p++]) instanceof e.MeshFaceMaterial) for (x = 0, v = y.faceMaterial.length; x < v;) _(M, L, z, R, A, P, E, C, y, b = y.faceMaterial[x++], t); else _(M, L, z, R, A, P, E, C, y, b, t)
                }
            }
        }, e.WebGLRenderer = function () {
            var t, n, i, o = document.createElement("canvas"), r = new e.Matrix4;

            function s(n, i) {
                var e;
                return "fragment" == n ? e = t.createShader(t.FRAGMENT_SHADER) : "vertex" == n && (e = t.createShader(t.VERTEX_SHADER)), t.shaderSource(e, i), t.compileShader(e), t.getShaderParameter(e, t.COMPILE_STATUS) ? e : (alert(t.getShaderInfoLog(e)), null)
            }

            this.domElement = o, this.autoClear = !0, function () {
                try {
                    t = o.getContext("experimental-webgl", {antialias: !0})
                } catch (t) {
                }
                if (!t) throw alert("WebGL not supported"), "cannot create webgl context";
                t.clearColor(0, 0, 0, 1), t.clearDepth(1), t.enable(t.DEPTH_TEST), t.depthFunc(t.LEQUAL), t.enable(t.BLEND), t.blendFunc(t.ONE, t.ONE_MINUS_SRC_ALPHA), t.clearColor(0, 0, 0, 0)
            }(), function () {
                n = t.createProgram(), t.attachShader(n, s("fragment", ["#ifdef GL_ES", "precision highp float;", "#endif", "uniform sampler2D diffuse;", "uniform vec4 uniformColor;", "varying vec2 vertexUv;", "varying vec3 lightWeighting;", "varying vec3 vNormal;", "uniform int material;", "uniform vec4 mAmbient;", "uniform vec4 mDiffuse;", "uniform vec4 mSpecular;", "uniform float mShininess;", "varying vec3 pLightVectorPoint;", "varying vec3 pLightVectorDirection;", "varying vec3 pViewPosition;", "void main(){", "if(material==3) { ", "vec3 lightVectorPoint = normalize(pLightVectorPoint);", "vec3 lightVectorDir = normalize(pLightVectorDirection);", "vec3 normal = normalize(vNormal);", "vec3 viewPosition = normalize(pViewPosition);", "vec3 halfVectorPoint = normalize(pLightVectorPoint + pViewPosition);", "float dotNormalHalfPoint = dot(normal, halfVectorPoint);", "float ambientCompPoint = 1.0;", "float diffuseCompPoint = max(dot(normal, lightVectorPoint), 0.0);", "float specularCompPoint = pow(dotNormalHalfPoint, mShininess);", "vec4 ambientPoint  = mAmbient * ambientCompPoint;", "vec4 diffusePoint  = mDiffuse * diffuseCompPoint;", "vec4 specularPoint = mSpecular * specularCompPoint;", "vec3 halfVectorDir = normalize(pLightVectorDirection + pViewPosition);", "float dotNormalHalfDir = dot(normal, halfVectorDir);", "float ambientCompDir = 1.0;", "float diffuseCompDir = max(dot(normal, lightVectorDir), 0.0);", "float specularCompDir = pow(dotNormalHalfDir, mShininess);", "vec4 ambientDir  = mAmbient * ambientCompDir;", "vec4 diffuseDir  = mDiffuse * diffuseCompDir;", "vec4 specularDir = mSpecular * specularCompDir;", "vec4 pointLight = ambientPoint + diffusePoint + specularPoint;", "vec4 dirLight = ambientDir + diffuseDir + specularDir;", "gl_FragColor = vec4((pointLight.xyz + dirLight.xyz) * lightWeighting, 1.0);", "} else if(material==2) {", "vec4 texelColor = texture2D(diffuse, vertexUv);", "gl_FragColor = vec4(texelColor.rgb * lightWeighting, texelColor.a);", "} else if(material==1) {", "gl_FragColor = vec4(uniformColor.rgb * lightWeighting, uniformColor.a);", "} else {", "gl_FragColor = vec4(uniformColor.rgb * lightWeighting, uniformColor.a);", "}", "}"].join("\n"))), t.attachShader(n, s("vertex", ["attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "uniform bool enableLighting;", "uniform vec3 ambientColor;", "uniform vec3 directionalColor;", "uniform vec3 lightingDirection;", "uniform vec3 pointColor;", "uniform vec3 pointPosition;", "uniform mat4 objMatrix;", "uniform mat4 viewMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat3 normalMatrix;", "varying vec4 vertexColor;", "varying vec2 vertexUv;", "varying vec3 lightWeighting;", "varying vec3 vNormal;", "varying vec3 pLightVectorPoint;", "varying vec3 pLightVectorDirection;", "varying vec3 pViewPosition;", "uniform vec3 cameraPosition;", "void main(void) {", "vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );", "vec3 transformedNormal = normalize(normalMatrix * normal);", "vec4 lPosition = viewMatrix * vec4( pointPosition, 1.0 );", "vec4 lDirection = viewMatrix * vec4( lightingDirection, 0.0 );", "pLightVectorPoint = normalize(pointPosition.xyz - position.xyz);", "pLightVectorDirection = normalize(lDirection.xyz);", "vec4 mPosition = objMatrix * vec4( position, 1.0 );", "pViewPosition = cameraPosition - mPosition.xyz;", "if(!enableLighting) {", "lightWeighting = vec3(1.0, 1.0, 1.0);", "} else {", "vec3 pointLight = normalize(lPosition.xyz - mvPosition.xyz);", "float directionalLightWeighting = max(dot(transformedNormal, normalize(lDirection.xyz)), 0.0);", "float pointLightWeighting = max(dot(transformedNormal, pointLight), 0.0);", "lightWeighting = ambientColor + directionalColor * directionalLightWeighting + pointColor * pointLightWeighting;", "}", "vNormal = transformedNormal;", "vertexUv = uv;", "gl_Position = projectionMatrix * mvPosition;", "}"].join("\n"))), t.linkProgram(n), t.getProgramParameter(n, t.LINK_STATUS) || alert("Could not initialise shaders");
                t.useProgram(n), n.viewMatrix = t.getUniformLocation(n, "viewMatrix"), n.modelViewMatrix = t.getUniformLocation(n, "modelViewMatrix"), n.projectionMatrix = t.getUniformLocation(n, "projectionMatrix"), n.normalMatrix = t.getUniformLocation(n, "normalMatrix"), n.objMatrix = t.getUniformLocation(n, "objMatrix"), n.enableLighting = t.getUniformLocation(n, "enableLighting"), n.ambientColor = t.getUniformLocation(n, "ambientColor"), n.directionalColor = t.getUniformLocation(n, "directionalColor"), n.lightingDirection = t.getUniformLocation(n, "lightingDirection"), n.pointColor = t.getUniformLocation(n, "pointColor"), n.pointPosition = t.getUniformLocation(n, "pointPosition"), n.material = t.getUniformLocation(n, "material"), n.uniformColor = t.getUniformLocation(n, "uniformColor"), n.mAmbient = t.getUniformLocation(n, "mAmbient"), n.mDiffuse = t.getUniformLocation(n, "mDiffuse"), n.mSpecular = t.getUniformLocation(n, "mSpecular"), n.mShininess = t.getUniformLocation(n, "mShininess"), n.cameraPosition = t.getUniformLocation(n, "cameraPosition"), n.position = t.getAttribLocation(n, "position"), t.enableVertexAttribArray(n.position), n.normal = t.getAttribLocation(n, "normal"), t.enableVertexAttribArray(n.normal), n.uv = t.getAttribLocation(n, "uv"), t.enableVertexAttribArray(n.uv), n.diffuse = t.getUniformLocation(n, "diffuse"), t.uniform1i(n.diffuse, 0), n.viewMatrixArray = new Float32Array(16), n.modelViewMatrixArray = new Float32Array(16), n.projectionMatrixArray = new Float32Array(16)
            }(), this.setSize = function (n, i) {
                o.width = n, o.height = i, t.viewport(0, 0, o.width, o.height)
            }, this.clear = function () {
                t.clear(t.COLOR_BUFFER_BIT | t.DEPTH_BUFFER_BIT)
            }, this.setupLights = function (i) {
                var o, r, s, a, h, l;
                for (t.uniform1i(n.enableLighting, i.lights.length), o = 0, r = i.lights.length; o < r; o++) (l = i.lights[o]) instanceof e.AmbientLight ? (s = l.color, t.uniform3f(n.ambientColor, s.r, s.g, s.b)) : l instanceof e.DirectionalLight ? (s = l.color, a = l.position, h = l.intensity, t.uniform3f(n.lightingDirection, a.x, a.y, a.z), t.uniform3f(n.directionalColor, s.r * h, s.g * h, s.b * h)) : l instanceof e.PointLight && (s = l.color, a = l.position, h = l.intensity, t.uniform3f(n.pointPosition, a.x, a.y, a.z), t.uniform3f(n.pointColor, s.r * h, s.g * h, s.b * h))
            }, this.createBuffers = function (n, i) {
                var o, r, s, a, h, l, c, u, f, m, p, g = n.materialFaceGroup[i], d = [], x = [], v = [], y = [], b = [],
                    M = 0;
                for (o = 0, r = g.faces.length; o < r; o++) s = g.faces[o], h = (a = n.geometry.faces[s]).vertexNormals, l = a.normal, c = n.geometry.uvs[s], a instanceof e.Face3 ? (u = n.geometry.vertices[a.a].position, f = n.geometry.vertices[a.b].position, m = n.geometry.vertices[a.c].position, v.push(u.x, u.y, u.z), v.push(f.x, f.y, f.z), v.push(m.x, m.y, m.z), 3 == h.length ? (y.push(h[0].x, h[0].y, h[0].z), y.push(h[1].x, h[1].y, h[1].z), y.push(h[2].x, h[2].y, h[2].z)) : (y.push(l.x, l.y, l.z), y.push(l.x, l.y, l.z), y.push(l.x, l.y, l.z)), c && (b.push(c[0].u, c[0].v), b.push(c[1].u, c[1].v), b.push(c[2].u, c[2].v)), d.push(M, M + 1, M + 2), x.push(M, M + 1), x.push(M, M + 2), x.push(M + 1, M + 2), M += 3) : a instanceof e.Face4 && (u = n.geometry.vertices[a.a].position, f = n.geometry.vertices[a.b].position, m = n.geometry.vertices[a.c].position, p = n.geometry.vertices[a.d].position, v.push(u.x, u.y, u.z), v.push(f.x, f.y, f.z), v.push(m.x, m.y, m.z), v.push(p.x, p.y, p.z), 4 == h.length ? (y.push(h[0].x, h[0].y, h[0].z), y.push(h[1].x, h[1].y, h[1].z), y.push(h[2].x, h[2].y, h[2].z), y.push(h[3].x, h[3].y, h[3].z)) : (y.push(l.x, l.y, l.z), y.push(l.x, l.y, l.z), y.push(l.x, l.y, l.z), y.push(l.x, l.y, l.z)), c && (b.push(c[0].u, c[0].v), b.push(c[1].u, c[1].v), b.push(c[2].u, c[2].v), b.push(c[3].u, c[3].v)), d.push(M, M + 1, M + 2), d.push(M, M + 2, M + 3), x.push(M, M + 1), x.push(M, M + 2), x.push(M, M + 3), x.push(M + 1, M + 2), x.push(M + 2, M + 3), M += 4);
                v.length && (g.__webGLVertexBuffer = t.createBuffer(), t.bindBuffer(t.ARRAY_BUFFER, g.__webGLVertexBuffer), t.bufferData(t.ARRAY_BUFFER, new Float32Array(v), t.STATIC_DRAW), g.__webGLNormalBuffer = t.createBuffer(), t.bindBuffer(t.ARRAY_BUFFER, g.__webGLNormalBuffer), t.bufferData(t.ARRAY_BUFFER, new Float32Array(y), t.STATIC_DRAW), g.__webGLUVBuffer = t.createBuffer(), t.bindBuffer(t.ARRAY_BUFFER, g.__webGLUVBuffer), t.bufferData(t.ARRAY_BUFFER, new Float32Array(b), t.STATIC_DRAW), g.__webGLFaceBuffer = t.createBuffer(), t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, g.__webGLFaceBuffer), t.bufferData(t.ELEMENT_ARRAY_BUFFER, new Uint16Array(d), t.STATIC_DRAW), g.__webGLLineBuffer = t.createBuffer(), t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, g.__webGLLineBuffer), t.bufferData(t.ELEMENT_ARRAY_BUFFER, new Uint16Array(x), t.STATIC_DRAW), g.__webGLFaceCount = d.length, g.__webGLLineCount = x.length)
            }, this.renderBuffer = function (i, o) {
                i instanceof e.MeshPhongMaterial ? (mAmbient = i.ambient, mDiffuse = i.diffuse, mSpecular = i.specular, t.uniform4f(n.mAmbient, mAmbient.r, mAmbient.g, mAmbient.b, i.opacity), t.uniform4f(n.mDiffuse, mDiffuse.r, mDiffuse.g, mDiffuse.b, i.opacity), t.uniform4f(n.mSpecular, mSpecular.r, mSpecular.g, mSpecular.b, i.opacity), t.uniform1f(n.mShininess, i.shininess), t.uniform1i(n.material, 3)) : i instanceof e.MeshColorFillMaterial ? (color = i.color, t.uniform4f(n.uniformColor, color.r * color.a, color.g * color.a, color.b * color.a, color.a), t.uniform1i(n.material, 0)) : i instanceof e.MeshColorStrokeMaterial ? (lineWidth = i.lineWidth, color = i.color, t.uniform4f(n.uniformColor, color.r * color.a, color.g * color.a, color.b * color.a, color.a), t.uniform1i(n.material, 1)) : i instanceof e.MeshBitmapMaterial && (!i.__webGLTexture && i.loaded && (i.__webGLTexture = t.createTexture(), t.bindTexture(t.TEXTURE_2D, i.__webGLTexture), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, t.RGBA, t.UNSIGNED_BYTE, i.bitmap), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.LINEAR), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR_MIPMAP_LINEAR), t.generateMipmap(t.TEXTURE_2D), t.bindTexture(t.TEXTURE_2D, null)), t.activeTexture(t.TEXTURE0), t.bindTexture(t.TEXTURE_2D, i.__webGLTexture), t.uniform1i(n.diffuse, 0), t.uniform1i(n.material, 2)), t.bindBuffer(t.ARRAY_BUFFER, o.__webGLVertexBuffer), t.vertexAttribPointer(n.position, 3, t.FLOAT, !1, 0, 0), t.bindBuffer(t.ARRAY_BUFFER, o.__webGLNormalBuffer), t.vertexAttribPointer(n.normal, 3, t.FLOAT, !1, 0, 0), i instanceof e.MeshBitmapMaterial ? (t.bindBuffer(t.ARRAY_BUFFER, o.__webGLUVBuffer), t.enableVertexAttribArray(n.uv), t.vertexAttribPointer(n.uv, 2, t.FLOAT, !1, 0, 0)) : t.disableVertexAttribArray(n.uv), i instanceof e.MeshBitmapMaterial || i instanceof e.MeshColorFillMaterial || i instanceof e.MeshPhongMaterial ? (t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, o.__webGLFaceBuffer), t.drawElements(t.TRIANGLES, o.__webGLFaceCount, t.UNSIGNED_SHORT, 0)) : i instanceof e.MeshColorStrokeMaterial && (t.lineWidth(lineWidth), t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, o.__webGLLineBuffer), t.drawElements(t.LINES, o.__webGLLineCount, t.UNSIGNED_SHORT, 0))
            }, this.renderMesh = function (t, n) {
                var i, o, r, s, a, h, l, c;
                for (a in t.materialFaceGroup) for ((c = t.materialFaceGroup[a]).__webGLVertexBuffer || this.createBuffers(t, a), r = 0, s = t.material.length; r < s; r++) if ((l = t.material[r]) instanceof e.MeshFaceMaterial) for (i = 0, o = c.material.length; i < o; i++) h = c.material[i], this.renderBuffer(h, c); else h = l, this.renderBuffer(h, c)
            }, this.setupMatrices = function (o, s) {
                o.autoUpdateMatrix && o.updateMatrix(), r.multiply(s.matrix, o.matrix), n.viewMatrixArray = new Float32Array(s.matrix.flatten()), n.modelViewMatrixArray = new Float32Array(r.flatten()), n.projectionMatrixArray = new Float32Array(s.projectionMatrix.flatten()), i = e.Matrix4.makeInvert3x3(r).transpose(), n.normalMatrixArray = new Float32Array(i.m), t.uniformMatrix4fv(n.viewMatrix, !1, n.viewMatrixArray), t.uniformMatrix4fv(n.modelViewMatrix, !1, n.modelViewMatrixArray), t.uniformMatrix4fv(n.projectionMatrix, !1, n.projectionMatrixArray), t.uniformMatrix3fv(n.normalMatrix, !1, n.normalMatrixArray), t.uniformMatrix4fv(n.objMatrix, !1, new Float32Array(o.matrix.flatten()))
            }, this.render = function (i, o) {
                var r, s, a;
                for (this.autoClear && this.clear(), o.autoUpdateMatrix && o.updateMatrix(), t.uniform3f(n.cameraPosition, o.position.x, o.position.y, o.position.z), this.setupLights(i), r = 0, s = i.objects.length; r < s; r++) a = i.objects[r], this.setupMatrices(a, o), a instanceof e.Mesh ? this.renderMesh(a, o) : a instanceof e.Line || e.Particle
            }
        }, e.RenderableFace3 = function () {
            this.v1 = new e.Vector2, this.v2 = new e.Vector2, this.v3 = new e.Vector2, this.centroidWorld = new e.Vector3, this.normalWorld = new e.Vector3, this.z = null, this.color = null, this.material = null
        }, e.RenderableFace4 = function () {
            this.v1 = new e.Vector2, this.v2 = new e.Vector2, this.v3 = new e.Vector2, this.v4 = new e.Vector2, this.centroidWorld = new e.Vector3, this.normalWorld = new e.Vector3, this.z = null, this.color = null, this.material = null
        }, e.RenderableParticle = function () {
            this.x = null, this.y = null, this.z = null, this.rotation = null, this.scale = new e.Vector2, this.color = null, this.material = null
        }, e.RenderableLine = function () {
            this.v1 = new e.Vector2, this.v2 = new e.Vector2, this.z = null, this.color = null, this.material = null
        }, n.default = e
    }, QPNa: function (t, n, i) {
        t.exports = i.p + "img/login-bg.ddb81d4.png"
    }, XVVD: function (t, n, i) {
        "use strict";
        Object.defineProperty(n, "__esModule", {value: !0});
        var e = i("LyHr"), o = i.n(e), r = {
            render: function () {
                var t = this, n = t.$createElement, e = t._self._c || n;
                return e("div", {staticClass: "login-container"}, [e("transition", {
                    attrs: {
                        name: "form-fade",
                        mode: "in-out"
                    }
                }, [e("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.showLogin,
                        expression: "showLogin"
                    }], staticClass: "login-form"
                }, [e("lang-select", {staticClass: "set-language"}), t._v(" "), e("div", {staticClass: "login-logo"}, [e("img", {attrs: {src: i("4Uwr")}})]), t._v(" "), e("el-form", {
                    ref: "formLogin",
                    attrs: {model: t.formLogin, rules: t.rulesLogin}
                }, [e("el-form-item", {staticClass: "top-links"}, [e("el-button", {
                    staticClass: "left-link",
                    attrs: {type: "text"},
                    on: {
                        click: function (n) {
                            t.getPage("apply-platform-guide")
                        }
                    }
                }, [t._v(t._s(t.$t("入驻平台流程")))]), t._v(" "), e("el-button", {
                    staticClass: "right-link",
                    attrs: {type: "text"},
                    on: {
                        click: function (n) {
                            t.getPage("download-data-guide")
                        }
                    }
                }, [t._v(t._s(t.$t("下载训练数据流程")))])], 1), t._v(" "), t.loginError ? e("el-alert", {
                    staticClass: "top-alert",
                    attrs: {title: t.loginError, type: "error", "show-icon": ""}
                }) : t._e(), t._v(" "), e("el-form-item", {attrs: {prop: "username"}}, [e("el-input", {
                    attrs: {
                        type: "text",
                        "auto-complete": "off",
                        placeholder: t.$t("请输入用户名")
                    }, nativeOn: {
                        keyup: function (n) {
                            if (!("button" in n) && t._k(n.keyCode, "enter", 13, n.key)) return null;
                            t.submitForm("formLogin")
                        }
                    }, model: {
                        value: t.formLogin.username, callback: function (n) {
                            t.$set(t.formLogin, "username", n)
                        }, expression: "formLogin.username"
                    }
                })], 1), t._v(" "), e("el-form-item", {attrs: {prop: "password"}}, [e("el-input", {
                    attrs: {
                        type: "password",
                        "auto-complete": "off",
                        placeholder: t.$t("请输入密码")
                    }, nativeOn: {
                        keyup: function (n) {
                            if (!("button" in n) && t._k(n.keyCode, "enter", 13, n.key)) return null;
                            t.submitForm("formLogin")
                        }
                    }, model: {
                        value: t.formLogin.password, callback: function (n) {
                            t.$set(t.formLogin, "password", n)
                        }, expression: "formLogin.password"
                    }
                })], 1), t._v(" "), e("el-form-item", [e("el-button", {
                    attrs: {type: "primary"},
                    on: {
                        click: function (n) {
                            t.submitForm("formLogin")
                        }
                    }
                }, [t._v(t._s(t.$t("登录")))])], 1)], 1), t._v(" "), e("div", {staticClass: "login-account"}, [t._v("\n        " + t._s(t.$t("还没有账号？")) + "\n        "), e("router-link", {attrs: {to: {path: "/register"}}}, [t._v(t._s(t.$t("去注册")))])], 1)], 1)]), t._v(" "), e("div", {attrs: {id: "loginThree"}}), t._v(" "), e("el-dialog", {
                    attrs: {
                        title: t.page.title,
                        visible: t.dialogPageVisible
                    }, on: {
                        "update:visible": function (n) {
                            t.dialogPageVisible = n
                        }
                    }
                }, ["text" == t.page.content_type ? e("pre", {staticClass: "page-dialog"}, [t._v(t._s(t.page.content))]) : e("div", {
                    staticClass: "page-dialog",
                    domProps: {innerHTML: t._s(t.page.content)}
                }), t._v(" "), e("span", {
                    staticClass: "dialog-footer",
                    attrs: {slot: "footer"},
                    slot: "footer"
                }, [e("el-button", {
                    attrs: {type: "primary"}, on: {
                        click: function (n) {
                            t.dialogPageVisible = !1
                        }
                    }
                }, [t._v(t._s(t.$t("知道了")))])], 1)])], 1)
            }, staticRenderFns: []
        };
        var s = function (t) {
            i("gK30")
        }, a = i("VU/8")(o.a, r, !1, s, "data-v-33777706", null);
        n.default = a.exports
    }, gK30: function (t, n, i) {
        var e = i("j82b");
        "string" == typeof e && (e = [[t.i, e, ""]]), e.locals && (t.exports = e.locals);
        i("rjj0")("18586d00", e, !0)
    }, j82b: function (t, n, i) {
        (t.exports = i("FZ+f")(!1)).push([t.i, "\n.login-container[data-v-33777706] {\n  width: 100%;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  text-align: center;\n  background-color: #141a48;\n  background-image: url(" + i("QPNa") + ");\n  background-repeat: no-repeat;\n  background-size: cover;\n  overflow: hidden;\n}\n.login-container .page-dialog[data-v-33777706] {\n    text-align: left;\n}\n.login-container .set-language[data-v-33777706] {\n    float: right;\n    position: absolute;\n    right: 10px;\n    top: 10px;\n}\n.login-container .top-links[data-v-33777706] {\n    margin-bottom: 5px;\n}\n.login-container .top-links .left-link[data-v-33777706] {\n      float: left;\n}\n.login-container .top-links .right-link[data-v-33777706] {\n      float: right;\n}\n.login-container .top-links a[data-v-33777706] {\n      color: #409EFF;\n}\n.login-container .top-alert[data-v-33777706] {\n    margin-bottom: 10px;\n}\n#loginThree[data-v-33777706] {\n  position: absolute;\n  width: 100%;\n  top: 0;\n  bottom: 0;\n  overflow: hidden;\n}\n.login-form[data-v-33777706] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin: -230px 0 0 -210px;\n  width: 440px;\n  padding: 25px;\n  -webkit-box-shadow: 0 0 100px rgba(0, 0, 0, 0.08);\n          box-shadow: 0 0 100px rgba(0, 0, 0, 0.08);\n  background-color: #fff;\n  border-radius: 4px;\n  z-index: 3;\n}\n.login-form .login-logo[data-v-33777706] {\n    text-align: center;\n    line-height: 40px;\n    cursor: pointer;\n    margin-bottom: 10px;\n}\n.login-form .login-logo img[data-v-33777706] {\n      width: 110px;\n      max-height: 46px;\n      margin-right: 8px;\n}\n.login-form .login-logo span[data-v-33777706] {\n      vertical-align: text-bottom;\n      font-size: 16px;\n      text-transform: uppercase;\n      display: inline-block;\n}\n.login-form .login-account[data-v-33777706] {\n    color: #999;\n    text-align: center;\n    margin-top: -5px;\n    font-size: 14px;\n}\n.login-form .login-account a[data-v-33777706] {\n      color: #409EFF;\n}\n.login-form .login-account span[data-v-33777706] {\n      font-size: 12px;\n}\n.login-form .login-account span[data-v-33777706]:first-child {\n        margin-right: 16px;\n}\n.form-fade-enter-active[data-v-33777706], .form-fade-leave-active[data-v-33777706] {\n  -webkit-transition: all 1s;\n  transition: all 1s;\n}\n.form-fade-enter[data-v-33777706], .form-fade-leave-active[data-v-33777706] {\n  -webkit-transform: translate3d(0, -50px, 0);\n          transform: translate3d(0, -50px, 0);\n  opacity: 0;\n}\n", ""])
    }, ymww: function (t, n, i) {
        "use strict";
        Object.defineProperty(n, "__esModule", {value: !0}), n.init3D = function (t) {
            var n, i, e, o, s, a, h, l = window.innerWidth, c = window.innerHeight, u = 90, f = 50, m = 50, p = 0,
                g = window.innerWidth / 2, d = window.innerHeight / 2;

            function x(t) {
                p = t.clientX - g, t.clientY - d
            }

            function v(t) {
                1 === t.touches.length && (t.preventDefault(), p = t.touches[0].pageX - g, t.touches[0].pageY - d)
            }

            (function () {
                (n = document.createElement("div")).style.position = "relative", n.style.top = "200px", document.getElementById("loginThree").appendChild(n), (s = new r.default.Camera(75, l / c, 1, 1e4)).position.z = 1e3, a = new r.default.Scene, (h = new r.default.CanvasRenderer).setSize(l, c), i = [];
                for (var t = 0, p = new r.default.ParticleCircleMaterial(621531, 1), g = 0; g < f; g++) for (var d = 0; d < m; d++) (e = i[t++] = new r.default.Particle(p)).position.x = g * u - f * u / 2, e.position.z = d * u - m * u / 2, a.add(e);
                o = 0, n.appendChild(h.domElement), document.addEventListener("mousemove", x, !1), document.addEventListener("touchmove", v, !1)
            })(), t.interval = setInterval(function () {
                s.position.x += .05 * (p - s.position.x), s.position.y = 364;
                for (var t = 0, n = 0; n < f; n++) for (var r = 0; r < m; r++) (e = i[t++]).position.y = 50 * Math.sin(.3 * (n + o)) + 50 * Math.sin(.5 * (r + o)), e.scale.x = e.scale.y = 2 * (Math.sin(.3 * (n + o)) + 1) + 2 * (Math.sin(.5 * (r + o)) + 1);
                h.render(a, s), o += .1
            }, 1e3 / 60)
        };
        var e, o = i("O04U"), r = (e = o) && e.__esModule ? e : {default: e}
    }
});