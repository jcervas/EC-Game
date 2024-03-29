(function(_) {
     /*

      Copyright The Closure Library Authors.
      SPDX-License-Identifier: Apache-2.0
     */
     var da, ea, ia, ja, ka, ma, sa, ta, va, wa, Ba, Ca, Ga, Fa, Ea, Pa, Ma, Na, Qa, Ra, Ta;
     _.ba = function(a) {
          return function() {
               return _.aa[a].apply(this, arguments)
          }
     };
     da = function(a) {
          return a ? a.passive && ca() ? a : a.capture || !1 : !1
     };
     ea = function(a) {
          a = _.p(a.split(/\s+/), function(b) {
               return (b = /^(-?\d+)(px|%)$/.exec(b)) ? {
                    value: parseFloat(b[1]),
                    type: b[2]
               } : {
                    value: 0,
                    type: "px"
               }
          });
          a[1] = a[1] || a[0];
          a[2] = a[2] || a[0];
          a[3] = a[3] || a[1];
          return a
     };
     ia = function(a) {
          if (!a) return [0];
          a = "number" === typeof a ? [a] : a;
          a = _.q(a, function(b) {
               return "number" === typeof b && 0 <= b && 1 >= b ? !0 : !1
          });
          _.fa(a);
          ha(a, function(b, c) {
               return b - c
          });
          return a
     };
     ja = function(a) {
          try {
               var b = a.getBoundingClientRect()
          } catch (c) {}
          return b ? {
               top: b.top,
               right: b.right,
               bottom: b.bottom,
               left: b.left,
               width: b.width || b.right - b.left,
               height: b.height || b.bottom - b.top
          } : {
               top: 0,
               right: 0,
               bottom: 0,
               left: 0,
               width: 0,
               height: 0
          }
     };
     ka = function(a, b, c, d, e) {
          c = void 0 === c ? "" : c;
          d = void 0 === d ? function(l) {
               return !!l
          } : d;
          e = void 0 === e ? "," : e;
          var f = [],
               g = !1;
          a = _.r(a);
          for (var h = a.next(); !h.done; h = a.next()) {
               h = b(h.value);
               var k = d(h);
               g = g || k;
               f.push(String(k ? h : c))
          }
          return g ? f.join(e) : null
     };
     ma = function(a, b) {
          var c = b || function() {
               return !0
          };
          a = la(a);
          var d = [];
          _.u(a, function(e, f) {
               e = _.q(e, function(h) {
                    return c(h, f)
               });
               if (e.length) {
                    e = _.p(e, encodeURIComponent);
                    var g = encodeURIComponent(f);
                    d.push(g + "=" + e.join())
               }
          });
          return d
     };
     sa = function() {
          na("pubadsReady", !0);
          if (_.x(206)) {
               var a = 0;
               Object.defineProperty(_.oa(), "pubadsReady", {
                    get: function() {
                         5 > a && _.pa("gpt_pubads_ready", function(b) {
                              ++a;
                              _.qa(b);
                              var c = Error("pubadsReady");
                              _.y(b, "stack", ra(c.stack, c.message))
                         }, {
                              Ga: .1
                         });
                         return !0
                    },
                    configurable: !0,
                    enumerable: !0
               })
          }
     };
     _.aa = [];
     ta = function(a) {
          var b = 0;
          return function() {
               return b < a.length ? {
                    done: !1,
                    value: a[b++]
               } : {
                    done: !0
               }
          }
     };
     _.r = function(a) {
          var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
          return b ? b.call(a) : {
               next: ta(a)
          }
     };
     _.ua = function(a) {
          if (!(a instanceof Array)) {
               a = _.r(a);
               for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
               a = c
          }
          return a
     };
     va = "function" == typeof Object.create ? Object.create : function(a) {
          var b = function() {};
          b.prototype = a;
          return new b
     };
     if ("function" == typeof Object.setPrototypeOf) wa = Object.setPrototypeOf;
     else {
          var xa;
          a: {
               var ya = {
                         a: !0
                    },
                    Aa = {};
               try {
                    Aa.__proto__ = ya;
                    xa = Aa.a;
                    break a
               } catch (a) {}
               xa = !1
          }
          wa = xa ? function(a, b) {
               a.__proto__ = b;
               if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
               return a
          } : null
     }
     Ba = wa;
     _.z = function(a, b) {
          a.prototype = va(b.prototype);
          a.prototype.constructor = a;
          if (Ba) Ba(a, b);
          else
               for (var c in b)
                    if ("prototype" != c)
                         if (Object.defineProperties) {
                              var d = Object.getOwnPropertyDescriptor(b, c);
                              d && Object.defineProperty(a, c, d)
                         } else a[c] = b[c]
     };
     Ca = function(a) {
          a = ["object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global, a];
          for (var b = 0; b < a.length; ++b) {
               var c = a[b];
               if (c && c.Math == Math) return c
          }
          throw Error("Cannot find global object");
     };
     _.Da = Ca(this);
     _.A = this || self;
     Ga = function() {
          if (null === Ea) a: {
               var a = _.A.document;
               if ((a = a.querySelector && a.querySelector("script[nonce]")) && (a = a.nonce || a.getAttribute("nonce")) && Fa.test(a)) {
                    Ea = a;
                    break a
               }
               Ea = ""
          }
          return Ea
     };
     Fa = /^[\w+/_-]+[=]{0,2}$/;
     Ea = null;
     _.Ha = function() {};
     _.Ia = function(a) {
          a.Ua = void 0;
          a.B = function() {
               return a.Ua ? a.Ua : a.Ua = new a
          }
     };
     _.Ja = function(a) {
          var b = typeof a;
          if ("object" == b)
               if (a) {
                    if (a instanceof Array) return "array";
                    if (a instanceof Object) return b;
                    var c = Object.prototype.toString.call(a);
                    if ("[object Window]" == c) return "object";
                    if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
                    if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
               } else return "null";
          else if ("function" == b && "undefined" == typeof a.call) return "object";
          return b
     };
     _.B = function(a) {
          return "array" == _.Ja(a)
     };
     _.Ka = function(a) {
          var b = _.Ja(a);
          return "array" == b || "object" == b && "number" == typeof a.length
     };
     _.La = function(a) {
          return "function" == _.Ja(a)
     };
     _.C = function(a) {
          var b = typeof a;
          return "object" == b && null != a || "function" == b
     };
     Pa = function(a) {
          return Object.prototype.hasOwnProperty.call(a, Ma) && a[Ma] || (a[Ma] = ++Na)
     };
     Ma = "closure_uid_" + (1E9 * Math.random() >>> 0);
     Na = 0;
     Qa = function(a, b, c) {
          return a.call.apply(a.bind, arguments)
     };
     Ra = function(a, b, c) {
          if (!a) throw Error();
          if (2 < arguments.length) {
               var d = Array.prototype.slice.call(arguments, 2);
               return function() {
                    var e = Array.prototype.slice.call(arguments);
                    Array.prototype.unshift.apply(e, d);
                    return a.apply(b, e)
               }
          }
          return function() {
               return a.apply(b, arguments)
          }
     };
     _.D = function(a, b, c) {
          Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? _.D = Qa : _.D = Ra;
          return _.D.apply(null, arguments)
     };
     _.Sa = function(a, b) {
          var c = Array.prototype.slice.call(arguments, 1);
          return function() {
               var d = c.slice();
               d.push.apply(d, arguments);
               return a.apply(this, d)
          }
     };
     Ta = function() {
          return +new Date
     };
     _.G = function(a, b) {
          function c() {}
          c.prototype = b.prototype;
          a.prototype = new c;
          a.prototype.constructor = a
     };
     var Ua = function(a) {
               return a + 'Correlator has been deprecated. Please see the Google Ad Manager help page on "Pageviews in GPT" for more information: https://support.google.com/admanager/answer/183281?hl=en'
          },
          Va = {
               ic: 0,
               Kd: 1,
               kc: 2
          };
     _.Wa = [];
     var Xa = function(a) {
          if (Error.captureStackTrace) Error.captureStackTrace(this, Xa);
          else {
               var b = Error().stack;
               b && (this.stack = b)
          }
          a && (this.message = String(a))
     };
     _.G(Xa, Error);
     Xa.prototype.name = "CustomError";
     var Ya;
     var $a, bb, cb, eb, gb, jb, lb, ha, nb, mb, ob, qb, rb;
     _.Za = function(a, b) {
          if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
          for (var c = 0; c < a.length; c++)
               if (c in a && a[c] === b) return c;
          return -1
     };
     _.H = function(a, b, c) {
          for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
     };
     _.q = function(a, b) {
          for (var c = a.length, d = [], e = 0, f = "string" === typeof a ? a.split("") : a, g = 0; g < c; g++)
               if (g in f) {
                    var h = f[g];
                    b.call(void 0, h, g, a) && (d[e++] = h)
               } return d
     };
     _.p = function(a, b) {
          for (var c = a.length, d = Array(c), e = "string" === typeof a ? a.split("") : a, f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
          return d
     };
     $a = function(a, b) {
          var c = 0;
          _.H(a, function(d, e) {
               c = b.call(void 0, c, d, e, a)
          });
          return c
     };
     _.ab = function(a, b) {
          for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
               if (e in d && b.call(void 0, d[e], e, a)) return !0;
          return !1
     };
     bb = function(a, b) {
          for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
               if (e in d && !b.call(void 0, d[e], e, a)) return !1;
          return !0
     };
     cb = function(a, b) {
          var c = 0;
          _.H(a, function(d, e, f) {
               b.call(void 0, d, e, f) && ++c
          }, void 0);
          return c
     };
     eb = function(a, b) {
          b = _.db(a, b, void 0);
          return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
     };
     _.db = function(a, b, c) {
          for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++)
               if (f in e && b.call(c, e[f], f, a)) return f;
          return -1
     };
     _.fb = function(a, b) {
          return 0 <= _.Za(a, b)
     };
     gb = function(a, b) {
          _.fb(a, b) || a.push(b)
     };
     _.ib = function(a, b) {
          b = _.Za(a, b);
          0 <= b && _.hb(a, b)
     };
     _.hb = function(a, b) {
          return 1 == Array.prototype.splice.call(a, b, 1).length
     };
     jb = function(a) {
          return Array.prototype.concat.apply([], arguments)
     };
     _.kb = function(a) {
          var b = a.length;
          if (0 < b) {
               for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
               return c
          }
          return []
     };
     lb = function(a, b, c) {
          return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
     };
     _.fa = function(a) {
          for (var b = {}, c = 0, d = 0; d < a.length;) {
               var e = a[d++];
               var f = e;
               f = _.C(f) ? "o" + Pa(f) : (typeof f).charAt(0) + f;
               Object.prototype.hasOwnProperty.call(b, f) || (b[f] = !0, a[c++] = e)
          }
          a.length = c
     };
     ha = function(a, b) {
          a.sort(b || mb)
     };
     nb = function(a, b) {
          for (var c = Array(a.length), d = 0; d < a.length; d++) c[d] = {
               index: d,
               value: a[d]
          };
          var e = b || mb;
          ha(c, function(f, g) {
               return e(f.value, g.value) || f.index - g.index
          });
          for (d = 0; d < a.length; d++) a[d] = c[d].value
     };
     _.pb = function(a, b) {
          if (!_.Ka(a) || !_.Ka(b) || a.length != b.length) return !1;
          for (var c = a.length, d = ob, e = 0; e < c; e++)
               if (!d(a[e], b[e])) return !1;
          return !0
     };
     mb = function(a, b) {
          return a > b ? 1 : a < b ? -1 : 0
     };
     ob = function(a, b) {
          return a === b
     };
     qb = function(a, b) {
          for (var c = {}, d = 0; d < a.length; d++) {
               var e = a[d],
                    f = b.call(void 0, e, d, a);
               void 0 !== f && (c[f] || (c[f] = [])).push(e)
          }
          return c
     };
     rb = function(a) {
          for (var b = [], c = 0; c < arguments.length; c++) {
               var d = arguments[c];
               if (Array.isArray(d))
                    for (var e = 0; e < d.length; e += 8192)
                         for (var f = rb.apply(null, lb(d, e, e + 8192)), g = 0; g < f.length; g++) b.push(f[g]);
               else b.push(d)
          }
          return b
     };
     var sb, ub;
     sb = function(a) {
          var b = !1,
               c;
          return function() {
               b || (c = a(), b = !0);
               return c
          }
     };
     _.tb = function(a) {
          var b = a;
          return function() {
               if (b) {
                    var c = b;
                    b = null;
                    c()
               }
          }
     };
     ub = function(a, b, c) {
          var d = 0,
               e = !1,
               f = [],
               g = function() {
                    d = 0;
                    e && (e = !1, h())
               },
               h = function() {
                    d = _.A.setTimeout(g, b);
                    a.apply(c, f)
               };
          return function(k) {
               f = arguments;
               d ? e = !0 : h()
          }
     };
     var vb, wb, xb, yb, zb, Ab, Bb, Cb, Db, Eb;
     vb = function(a) {
          return /^[\s\xa0]*$/.test(a)
     };
     wb = function(a) {
          return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
     };
     xb = /&/g;
     yb = /</g;
     zb = />/g;
     Ab = /"/g;
     Bb = /'/g;
     Cb = /\x00/g;
     Db = /[\x00&<>"']/;
     _.Fb = function(a, b) {
          var c = 0;
          a = wb(String(a)).split(".");
          b = wb(String(b)).split(".");
          for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
               var f = a[e] || "",
                    g = b[e] || "";
               do {
                    f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                    g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                    if (0 == f[0].length && 0 == g[0].length) break;
                    c = Eb(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) || Eb(0 == f[2].length, 0 == g[2].length) || Eb(f[2], g[2]);
                    f = f[3];
                    g = g[3]
               } while (0 == c)
          }
          return c
     };
     Eb = function(a, b) {
          return a < b ? -1 : a > b ? 1 : 0
     };
     a: {
          var Hb = _.A.navigator;
          if (Hb) {
               var Ib = Hb.userAgent;
               if (Ib) {
                    _.Gb = Ib;
                    break a
               }
          }
          _.Gb = ""
     }
     var I = function(a) {
               return -1 != _.Gb.indexOf(a)
          },
          Jb = function(a) {
               for (var b = /(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g, c = [], d; d = b.exec(a);) c.push([d[1], d[2], d[3] || void 0]);
               return c
          };
     var Lb, Mb, Nb, Ob, Pb, Qb;
     _.Kb = function(a, b) {
          for (var c in a) b.call(void 0, a[c], c, a)
     };
     Lb = function(a, b) {
          var c = {},
               d;
          for (d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
          return c
     };
     Mb = function(a, b) {
          for (var c in a)
               if (b.call(void 0, a[c], c, a)) return !0;
          return !1
     };
     Nb = function(a, b) {
          return null !== a && b in a
     };
     Ob = function(a, b) {
          for (var c in a)
               if (a[c] == b) return !0;
          return !1
     };
     Pb = function(a, b) {
          for (var c in a)
               if (b.call(void 0, a[c], c, a)) return c
     };
     Qb = function(a) {
          var b = arguments.length;
          if (1 == b && Array.isArray(arguments[0])) return Qb.apply(null, arguments[0]);
          for (var c = {}, d = 0; d < b; d++) c[arguments[d]] = !0;
          return c
     };
     var Ub, Tb, Vb;
     _.Rb = function() {
          return I("Trident") || I("MSIE")
     };
     _.Sb = function() {
          return I("Firefox") || I("FxiOS")
     };
     Ub = function() {
          return I("Safari") && !(Tb() || I("Coast") || I("Opera") || I("Edge") || I("Edg/") || I("OPR") || _.Sb() || I("Silk") || I("Android"))
     };
     Tb = function() {
          return (I("Chrome") || I("CriOS")) && !I("Edge")
     };
     _.Wb = function() {
          function a(e) {
               e = eb(e, d);
               return c[e] || ""
          }
          var b = _.Gb;
          if (_.Rb()) return Vb(b);
          b = Jb(b);
          var c = {};
          _.H(b, function(e) {
               c[e[0]] = e[1]
          });
          var d = _.Sa(Nb, c);
          return I("Opera") ? a(["Version", "Opera"]) : I("Edge") ? a(["Edge"]) : I("Edg/") ? a(["Edg"]) : Tb() ? a(["Chrome", "CriOS", "HeadlessChrome"]) : (b = b[2]) && b[1] || ""
     };
     Vb = function(a) {
          var b = /rv: *([\d\.]*)/.exec(a);
          if (b && b[1]) return b[1];
          b = "";
          var c = /MSIE +([\d\.]+)/.exec(a);
          if (c && c[1])
               if (a = /Trident\/(\d.\d)/.exec(a), "7.0" == c[1])
                    if (a && a[1]) switch (a[1]) {
                         case "4.0":
                              b = "8.0";
                              break;
                         case "5.0":
                              b = "9.0";
                              break;
                         case "6.0":
                              b = "10.0";
                              break;
                         case "7.0":
                              b = "11.0"
                    } else b = "7.0";
                    else b = c[1];
          return b
     };
     var Yb, Xb, bc;
     _.Zb = function(a, b) {
          this.j = a === Xb && b || "";
          this.l = Yb
     };
     _.Zb.prototype.bb = !0;
     _.Zb.prototype.Aa = function() {
          return this.j
     };
     _.$b = function(a) {
          return a instanceof _.Zb && a.constructor === _.Zb && a.l === Yb ? a.j : "type_error:Const"
     };
     _.ac = function(a) {
          return new _.Zb(Xb, a)
     };
     Yb = {};
     Xb = {};
     bc = _.ac("");
     var ec = function(a, b) {
               this.j = a === cc && b || "";
               this.l = dc
          },
          jc, fc, gc, lc, dc, ic, cc;
     ec.prototype.bb = !0;
     ec.prototype.Aa = function() {
          return this.j.toString()
     };
     jc = function(a, b) {
          a = fc(a).toString();
          a = gc.exec(a);
          var c = a[3] || "";
          return _.hc(a[1] + ic("?", a[2] || "", b) + ic("#", c, void 0))
     };
     fc = function(a) {
          if (a instanceof ec && a.constructor === ec && a.l === dc) return a.j;
          _.Ja(a);
          return "type_error:TrustedResourceUrl"
     };
     gc = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/;
     lc = function() {
          for (var a = [kc, _.ac("/tag/js/fetch_frame_"), _.ac("2020030501"), _.ac(".html")], b = "", c = 0; c < a.length; c++) b += _.$b(a[c]);
          return _.hc(b)
     };
     dc = {};
     _.hc = function(a) {
          return new ec(cc, a)
     };
     ic = function(a, b, c) {
          if (null == c) return b;
          if ("string" === typeof c) return c ? a + encodeURIComponent(c) : "";
          for (var d in c) {
               var e = c[d];
               e = Array.isArray(e) ? e : [e];
               for (var f = 0; f < e.length; f++) {
                    var g = e[f];
                    null != g && (b || (b = a), b += (b.length > a.length ? "&" : "") + encodeURIComponent(d) + "=" + encodeURIComponent(String(g)))
               }
          }
          return b
     };
     cc = {};
     var qc, nc, mc;
     _.oc = function(a, b) {
          this.j = a === mc && b || "";
          this.l = nc
     };
     _.oc.prototype.bb = !0;
     _.oc.prototype.Aa = function() {
          return this.j.toString()
     };
     _.pc = function(a) {
          if (a instanceof _.oc && a.constructor === _.oc && a.l === nc) return a.j;
          _.Ja(a);
          return "type_error:SafeUrl"
     };
     qc = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
     _.rc = function(a) {
          if (a instanceof _.oc) return a;
          a = "object" == typeof a && a.bb ? a.Aa() : String(a);
          qc.test(a) || (a = "about:invalid#zClosurez");
          return new _.oc(mc, a)
     };
     nc = {};
     mc = {};
     var tc = function() {
               this.j = "";
               this.l = sc
          },
          sc;
     tc.prototype.bb = !0;
     tc.prototype.Aa = function() {
          return this.j.toString()
     };
     _.uc = function(a) {
          if (a instanceof tc && a.constructor === tc && a.l === sc) return a.j;
          _.Ja(a);
          return "type_error:SafeHtml"
     };
     sc = {};
     _.vc = function(a) {
          var b = new tc;
          b.j = a;
          return b
     };
     _.vc("<!DOCTYPE html>");
     var wc = _.vc("");
     _.vc("<br>");
     _.xc = function(a, b) {
          a.src = fc(b).toString()
     };
     _.yc = function(a, b) {
          a.src = fc(b);
          (b = Ga()) && a.setAttribute("nonce", b)
     };
     var Ac, Bc;
     _.zc = function(a) {
          Db.test(a) && (-1 != a.indexOf("&") && (a = a.replace(xb, "&amp;")), -1 != a.indexOf("<") && (a = a.replace(yb, "&lt;")), -1 != a.indexOf(">") && (a = a.replace(zb, "&gt;")), -1 != a.indexOf('"') && (a = a.replace(Ab, "&quot;")), -1 != a.indexOf("'") && (a = a.replace(Bb, "&#39;")), -1 != a.indexOf("\x00") && (a = a.replace(Cb, "&#0;")));
          return a
     };
     Ac = String.prototype.repeat ? function(a, b) {
          return a.repeat(b)
     } : function(a, b) {
          return Array(b + 1).join(a)
     };
     Bc = function(a) {
          a = String(a);
          var b = a.indexOf("."); - 1 == b && (b = a.length);
          return Ac("0", Math.max(0, 2 - b)) + a
     };
     _.Cc = function() {
          return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ Ta()).toString(36)
     };
     var Dc = function() {
          return I("iPhone") && !I("iPod") && !I("iPad")
     };
     var Ec = function(a) {
          Ec[" "](a);
          return a
     };
     Ec[" "] = _.Ha;
     var Fc = function(a, b) {
               try {
                    return Ec(a[b]), !0
               } catch (c) {}
               return !1
          },
          Hc = function(a, b) {
               var c = Gc;
               return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a)
          };
     var Kc, Lc, Qc, Rc, Sc, Tc, Uc, Yc, Gc, $c;
     _.Ic = I("Opera");
     _.Jc = _.Rb();
     Kc = I("Edge");
     Lc = Kc || _.Jc;
     _.Mc = I("Gecko") && !(-1 != _.Gb.toLowerCase().indexOf("webkit") && !I("Edge")) && !(I("Trident") || I("MSIE")) && !I("Edge");
     _.Nc = -1 != _.Gb.toLowerCase().indexOf("webkit") && !I("Edge");
     _.Oc = _.Nc && I("Mobile");
     _.Pc = I("Android");
     Qc = Dc();
     Rc = I("iPad");
     Sc = I("iPod");
     Tc = function() {
          var a = _.A.document;
          return a ? a.documentMode : void 0
     };
     a: {
          var Vc = "",
               Wc = function() {
                    var a = _.Gb;
                    if (_.Mc) return /rv:([^\);]+)(\)|;)/.exec(a);
                    if (Kc) return /Edge\/([\d\.]+)/.exec(a);
                    if (_.Jc) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                    if (_.Nc) return /WebKit\/(\S+)/.exec(a);
                    if (_.Ic) return /(?:Version)[ \/]?(\S+)/.exec(a)
               }();Wc && (Vc = Wc ? Wc[1] : "");
          if (_.Jc) {
               var Xc = Tc();
               if (null != Xc && Xc > parseFloat(Vc)) {
                    Uc = String(Xc);
                    break a
               }
          }
          Uc = Vc
     }
     Yc = Uc;
     Gc = {};
     _.Zc = function(a) {
          return Hc(a, function() {
               return 0 <= _.Fb(Yc, a)
          })
     };
     if (_.A.document && _.Jc) {
          var ad = Tc();
          $c = ad ? ad : parseInt(Yc, 10) || void 0
     } else $c = void 0;
     _.bd = $c;
     var cd = Tb(),
          dd = Ub() && !(Dc() || I("iPad") || I("iPod"));
     var ed, fd, gd;
     ed = {};
     fd = null;
     gd = _.Mc || _.Nc && !dd || _.Ic || "function" == typeof _.A.btoa;
     _.hd = function(a, b) {
          void 0 === b && (b = 0);
          if (!fd) {
               fd = {};
               for (var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), d = ["+/=", "+/", "-_=", "-_.", "-_"], e = 0; 5 > e; e++) {
                    var f = c.concat(d[e].split(""));
                    ed[e] = f;
                    for (var g = 0; g < f.length; g++) {
                         var h = f[g];
                         void 0 === fd[h] && (fd[h] = g)
                    }
               }
          }
          b = ed[b];
          c = [];
          for (d = 0; d < a.length; d += 3) {
               var k = a[d],
                    l = (e = d + 1 < a.length) ? a[d + 1] : 0;
               h = (f = d + 2 < a.length) ? a[d + 2] : 0;
               g = k >> 2;
               k = (k & 3) << 4 | l >> 4;
               l = (l & 15) << 2 | h >> 6;
               h &= 63;
               f || (h = 64, e || (l = 64));
               c.push(b[g], b[k], b[l] || "", b[h] || "")
          }
          return c.join("")
     };
     var id = 0,
          jd = 0;
     var kd = function() {
          this.j = []
     };
     kd.prototype.length = function() {
          return this.j.length
     };
     var ld = function(a) {
               var b = a.j;
               a.j = [];
               return b
          },
          md = function(a, b) {
               for (; 127 < b;) a.j.push(b & 127 | 128), b >>>= 7;
               a.j.push(b)
          };
     var nd = function() {
          this.l = [];
          this.m = 0;
          this.j = new kd
     };
     nd.prototype.reset = function() {
          this.l = [];
          ld(this.j);
          this.m = 0
     };
     var od = function(a, b, c) {
          if (null != c) {
               md(a.j, 8 * b);
               a = a.j;
               var d = c;
               c = 0 > d;
               d = Math.abs(d);
               b = d >>> 0;
               d = Math.floor((d - b) / 4294967296);
               d >>>= 0;
               c && (d = ~d >>> 0, b = (~b >>> 0) + 1, 4294967295 < b && (b = 0, d++, 4294967295 < d && (d = 0)));
               id = b;
               jd = d;
               c = id;
               for (b = jd; 0 < b || 127 < c;) a.j.push(c & 127 | 128), c = (c >>> 7 | b << 25) >>> 0, b >>>= 7;
               a.j.push(c)
          }
     };
     var qd, vd, sd, xd, Ad, Cd;
     _.J = function() {};
     _.pd = "function" == typeof Uint8Array;
     _.K = function(a, b, c, d) {
          a.j = null;
          b || (b = []);
          a.D = void 0;
          a.v = -1;
          a.l = b;
          a: {
               if (b = a.l.length) {
                    --b;
                    var e = a.l[b];
                    if (!(null === e || "object" != typeof e || Array.isArray(e) || _.pd && e instanceof Uint8Array)) {
                         a.o = b - a.v;
                         a.m = e;
                         break a
                    }
               }
               a.o = Number.MAX_VALUE
          }
          a.C = {};
          if (c)
               for (b = 0; b < c.length; b++) e = c[b], e < a.o ? (e += a.v, a.l[e] = a.l[e] || qd) : (_.rd(a), a.m[e] = a.m[e] || qd);
          if (d && d.length)
               for (b = 0; b < d.length; b++) sd(a, d[b])
     };
     qd = [];
     _.rd = function(a) {
          var b = a.o + a.v;
          a.l[b] || (a.m = a.l[b] = {})
     };
     _.L = function(a, b) {
          if (b < a.o) {
               b += a.v;
               var c = a.l[b];
               return c === qd ? a.l[b] = [] : c
          }
          if (a.m) return c = a.m[b], c === qd ? a.m[b] = [] : c
     };
     _.td = function(a, b) {
          a = _.L(a, b);
          return null == a ? a : +a
     };
     _.M = function(a, b) {
          a = _.L(a, b);
          return null == a ? a : !!a
     };
     _.ud = function(a, b, c) {
          a = _.L(a, b);
          return null == a ? c : a
     };
     _.N = function(a, b, c) {
          b < a.o ? a.l[b + a.v] = c : (_.rd(a), a.m[b] = c);
          return a
     };
     vd = function(a, b, c) {
          _.L(a, b).push(c)
     };
     _.wd = function(a, b, c, d) {
          (c = sd(a, c)) && c !== b && void 0 !== d && (a.j && c in a.j && (a.j[c] = void 0), _.N(a, c, void 0));
          _.N(a, b, d)
     };
     sd = function(a, b) {
          for (var c, d, e = 0; e < b.length; e++) {
               var f = b[e],
                    g = _.L(a, f);
               null != g && (c = f, d = g, _.N(a, f, void 0))
          }
          return c ? (_.N(a, c, d), c) : 0
     };
     _.O = function(a, b, c) {
          a.j || (a.j = {});
          if (!a.j[c]) {
               var d = _.L(a, c);
               d && (a.j[c] = new b(d))
          }
          return a.j[c]
     };
     _.P = function(a, b, c) {
          xd(a, b, c);
          b = a.j[c];
          b == qd && (b = a.j[c] = []);
          return b
     };
     xd = function(a, b, c) {
          a.j || (a.j = {});
          if (!a.j[c]) {
               for (var d = _.L(a, c), e = [], f = 0; f < d.length; f++) e[f] = new b(d[f]);
               a.j[c] = e
          }
     };
     _.zd = function(a, b, c) {
          a.j || (a.j = {});
          var d = c ? _.yd(c) : c;
          a.j[b] = c;
          return _.N(a, b, d)
     };
     Ad = function(a, b, c) {
          a.j || (a.j = {});
          c = c || [];
          for (var d = [], e = 0; e < c.length; e++) d[e] = _.yd(c[e]);
          a.j[b] = c;
          return _.N(a, b, d)
     };
     Cd = function(a, b, c) {
          var d = Bd;
          xd(a, d, b);
          var e = a.j[b];
          e || (e = a.j[b] = []);
          c = c ? c : new d;
          a = _.L(a, b);
          e.push(c);
          a.push(_.yd(c))
     };
     _.yd = function(a) {
          if (a.j)
               for (var b in a.j) {
                    var c = a.j[b];
                    if (_.B(c))
                         for (var d = 0; d < c.length; d++) c[d] && _.yd(c[d]);
                    else c && _.yd(c)
               }
          return a.l
     };
     _.J.prototype.A = _.pd ? function() {
          var a = Uint8Array.prototype.toJSON;
          Uint8Array.prototype.toJSON = function() {
               return _.hd(this)
          };
          try {
               return JSON.stringify(this.l && _.yd(this), Dd)
          } finally {
               Uint8Array.prototype.toJSON = a
          }
     } : function() {
          return JSON.stringify(this.l && _.yd(this), Dd)
     };
     var Dd = function(a, b) {
               return "number" !== typeof b || !isNaN(b) && Infinity !== b && -Infinity !== b ? b : String(b)
          },
          Ed = function(a) {
               if (Array.isArray(a)) {
                    for (var b = Array(a.length), c = 0; c < a.length; c++) {
                         var d = a[c];
                         null != d && (b[c] = "object" == typeof d ? Ed(d) : d)
                    }
                    return b
               }
               if (_.pd && a instanceof Uint8Array) return new Uint8Array(a);
               b = {};
               for (c in a) d = a[c], null != d && (b[c] = "object" == typeof d ? Ed(d) : d);
               return b
          };
     _.Fd = function(a) {
          _.K(this, a, null, null)
     };
     _.G(_.Fd, _.J);
     var Gd = document,
          Hd = window;
     var Jd = function(a) {
          _.K(this, a, null, Id)
     };
     _.G(Jd, _.J);
     var Kd = function(a) {
          _.K(this, a, null, null)
     };
     _.G(Kd, _.J);
     var Id = [
          [3, 4, 5]
     ];
     var Ld = function(a) {
          this.j = a || {
               cookie: ""
          }
     };
     Ld.prototype.set = function(a, b, c) {
          var d = !1;
          if ("object" === typeof c) {
               var e = c.$d;
               d = c.ae || !1;
               var f = c.domain || void 0;
               var g = c.path || void 0;
               var h = c.Zd
          }
          if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
          if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
          void 0 === h && (h = -1);
          c = f ? ";domain=" + f : "";
          g = g ? ";path=" + g : "";
          d = d ? ";secure" : "";
          h = 0 > h ? "" : 0 == h ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Ta() + 1E3 * h)).toUTCString();
          this.j.cookie = a + "=" + b + c + g + h + d + (null != e ? ";samesite=" + e : "")
     };
     Ld.prototype.get = function(a, b) {
          for (var c = a + "=", d = (this.j.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
               f = wb(d[e]);
               if (0 == f.lastIndexOf(c, 0)) return f.substr(c.length);
               if (f == a) return ""
          }
          return b
     };
     var Md = function(a) {
               return (a = (new Ld(a)).get("DATA_USE_CONSENT", "")) ? a : null
          },
          Nd = function(a) {
               var b = (b = (new Ld(a)).get("FCCDCF", "")) ? b : null;
               try {
                    var c = b ? new Jd(b ? JSON.parse(b) : null) : null
               } catch (d) {
                    c = null
               }
               if (!c) return Md(a);
               c = _.O(c, Kd, 3);
               if (!c || null == _.L(c, 1)) return Md(a);
               a = _.L(c, 2);
               b = Date.now();
               if (a) {
                    if (b < a || b > a + 33696E6) return null
               } else return null;
               return _.L(c, 1)
          };
     var Pd = function(a) {
          _.K(this, a, Od, null)
     };
     _.G(Pd, _.J);
     var Od = [1, 2, 3, 4];
     var Qd = function() {
          return I("iPad") || I("Android") && !I("Mobile") || I("Silk")
     };
     var ca;
     ca = sb(function() {
          var a = !1;
          try {
               var b = Object.defineProperty({}, "passive", {
                    get: function() {
                         a = !0
                    }
               });
               _.A.addEventListener("test", null, b)
          } catch (c) {}
          return a
     });
     _.Q = function(a, b, c, d) {
          return a.addEventListener ? (a.addEventListener(b, c, da(d)), !0) : !1
     };
     _.R = function(a, b, c, d) {
          return a.removeEventListener ? (a.removeEventListener(b, c, da(d)), !0) : !1
     };
     var Td = function(a, b, c) {
               "number" === typeof a ? (this.j = Rd(a, b || 0, c || 1), Sd(this, c || 1)) : _.C(a) ? (this.j = Rd(a.getFullYear(), a.getMonth(), a.getDate()), Sd(this, a.getDate())) : (this.j = new Date(Ta()), a = this.j.getDate(), this.j.setHours(0), this.j.setMinutes(0), this.j.setSeconds(0), this.j.setMilliseconds(0), Sd(this, a))
          },
          Rd = function(a, b, c) {
               b = new Date(a, b, c);
               0 <= a && 100 > a && b.setFullYear(b.getFullYear() - 1900);
               return b
          };
     _.n = Td.prototype;
     _.n.getFullYear = function() {
          return this.j.getFullYear()
     };
     _.n.getMonth = function() {
          return this.j.getMonth()
     };
     _.n.getDate = function() {
          return this.j.getDate()
     };
     _.n.getTime = function() {
          return this.j.getTime()
     };
     _.n.set = function(a) {
          this.j = new Date(a.getFullYear(), a.getMonth(), a.getDate())
     };
     _.n.add = function(a) {
          if (a.A || a.v) {
               var b = this.getMonth() + a.v + 12 * a.A,
                    c = this.getFullYear() + Math.floor(b / 12);
               b %= 12;
               0 > b && (b += 12);
               a: {
                    switch (b) {
                         case 1:
                              var d = 0 != c % 4 || 0 == c % 100 && 0 != c % 400 ? 28 : 29;
                              break a;
                         case 5:
                         case 8:
                         case 10:
                         case 3:
                              d = 30;
                              break a
                    }
                    d = 31
               }
               d = Math.min(d, this.getDate());
               this.j.setDate(1);
               this.j.setFullYear(c);
               this.j.setMonth(b);
               this.j.setDate(d)
          }
          a.j && (a = new Date((new Date(this.getFullYear(), this.getMonth(), this.getDate(), 12)).getTime() + 864E5 * a.j), this.j.setDate(1), this.j.setFullYear(a.getFullYear()), this.j.setMonth(a.getMonth()), this.j.setDate(a.getDate()), Sd(this, a.getDate()))
     };
     _.n.kb = function(a) {
          return [this.getFullYear(), Bc(this.getMonth() + 1), Bc(this.getDate())].join(a ? "-" : "")
     };
     _.n.toString = function() {
          return this.kb()
     };
     var Sd = function(a, b) {
          a.getDate() != b && a.j.setUTCHours(a.j.getUTCHours() + (a.getDate() < b ? 1 : -1))
     };
     Td.prototype.valueOf = function() {
          return this.j.valueOf()
     };
     var Ud = function(a, b, c, d, e, f, g) {
          this.j = "number" === typeof a ? new Date(a, b || 0, c || 1, d || 0, e || 0, f || 0, g || 0) : new Date(a && a.getTime ? a.getTime() : Ta())
     };
     _.G(Ud, Td);
     Ud.prototype.add = function(a) {
          Td.prototype.add.call(this, a);
          a.l && this.j.setUTCHours(this.j.getUTCHours() + a.l);
          a.m && this.j.setUTCMinutes(this.j.getUTCMinutes() + a.m);
          a.o && this.j.setUTCSeconds(this.j.getUTCSeconds() + a.o)
     };
     Ud.prototype.kb = function(a) {
          var b = Td.prototype.kb.call(this, a);
          return a ? b + "T" + Bc(this.j.getHours()) + ":" + Bc(this.j.getMinutes()) + ":" + Bc(this.j.getSeconds()) : b + "T" + Bc(this.j.getHours()) + Bc(this.j.getMinutes()) + Bc(this.j.getSeconds())
     };
     Ud.prototype.toString = function() {
          return this.kb()
     };
     _.Vd = !_.Jc || 9 <= Number(_.bd);
     _.Wd = _.Jc || _.Ic || _.Nc;
     _.Xd = function(a, b) {
          this.x = void 0 !== a ? a : 0;
          this.y = void 0 !== b ? b : 0
     };
     _.Xd.prototype.ceil = function() {
          this.x = Math.ceil(this.x);
          this.y = Math.ceil(this.y);
          return this
     };
     _.Xd.prototype.floor = function() {
          this.x = Math.floor(this.x);
          this.y = Math.floor(this.y);
          return this
     };
     _.Xd.prototype.round = function() {
          this.x = Math.round(this.x);
          this.y = Math.round(this.y);
          return this
     };
     _.Yd = function(a, b) {
          this.width = a;
          this.height = b
     };
     _.Yd.prototype.aspectRatio = function() {
          return this.width / this.height
     };
     _.Yd.prototype.ceil = function() {
          this.width = Math.ceil(this.width);
          this.height = Math.ceil(this.height);
          return this
     };
     _.Yd.prototype.floor = function() {
          this.width = Math.floor(this.width);
          this.height = Math.floor(this.height);
          return this
     };
     _.Yd.prototype.round = function() {
          this.width = Math.round(this.width);
          this.height = Math.round(this.height);
          return this
     };
     _.ae = function(a) {
          return a ? new _.Zd(_.$d(a)) : Ya || (Ya = new _.Zd)
     };
     _.ce = function(a) {
          a = a.document;
          a = _.be(a) ? a.documentElement : a.body;
          return new _.Yd(a.clientWidth, a.clientHeight)
     };
     _.de = function(a) {
          return a.scrollingElement ? a.scrollingElement : !_.Nc && _.be(a) ? a.documentElement : a.body || a.documentElement
     };
     _.ee = function(a) {
          return a ? a.parentWindow || a.defaultView : window
     };
     _.fe = function(a, b) {
          b = String(b);
          "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
          return a.createElement(b)
     };
     _.be = function(a) {
          return "CSS1Compat" == a.compatMode
     };
     _.ge = function(a) {
          return a && a.parentNode ? a.parentNode.removeChild(a) : null
     };
     _.$d = function(a) {
          return 9 == a.nodeType ? a : a.ownerDocument || a.document
     };
     _.he = function(a, b) {
          if (9 == a.nodeType) var c = [a.documentElement];
          else
               for (c = [], a = a.lastElementChild; a; a = a.previousElementSibling) c.push(a);
          for (; 0 < c.length;) {
               a = c.pop();
               if (b(a)) return a;
               for (a = a.lastElementChild; a; a = a.previousElementSibling) c.push(a)
          }
          return null
     };
     _.Zd = function(a) {
          this.j = a || _.A.document || document
     };
     _.Zd.prototype.getElementsByTagName = function(a, b) {
          return (b || this.j).getElementsByTagName(String(a))
     };
     _.Zd.prototype.l = _.ba(22);
     _.ie = function(a, b) {
          return _.fe(a.j, b)
     };
     var ke = function(a) {
               je();
               return _.hc(a)
          },
          je = _.Ha;
     var me, ne, oe, pe;
     _.le = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/\\#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
     me = function(a) {
          return a ? decodeURI(a) : a
     };
     ne = function(a, b, c) {
          if (Array.isArray(b))
               for (var d = 0; d < b.length; d++) ne(a, String(b[d]), c);
          else null != b && c.push(a + ("" === b ? "" : "=" + encodeURIComponent(String(b))))
     };
     oe = /#|$/;
     pe = function(a, b) {
          var c = a.search(oe);
          a: {
               var d = 0;
               for (var e = b.length; 0 <= (d = a.indexOf(b, d)) && d < c;) {
                    var f = a.charCodeAt(d - 1);
                    if (38 == f || 63 == f)
                         if (f = a.charCodeAt(d + e), !f || 61 == f || 38 == f || 35 == f) break a;
                    d += e + 1
               }
               d = -1
          }
          if (0 > d) return null;
          e = a.indexOf("&", d);
          if (0 > e || e > c) e = c;
          d += b.length + 1;
          return decodeURIComponent(a.substr(d, e - d).replace(/\+/g, " "))
     };
     var qe, se, te, re, ue, ze, ye, Be, Ee, xe, Fe, Ge, Ie, Je, Le, Me, Ne, Oe, Pe, Qe, Re, We, Xe, Ye, Ze, af, bf;
     qe = function(a) {
          try {
               return !!a && null != a.location.href && Fc(a, "foo")
          } catch (b) {
               return !1
          }
     };
     se = function(a) {
          for (var b = _.A, c = 0; b && 40 > c++ && (!qe(b) || !a(b));) b = re(b)
     };
     te = function() {
          var a = _.A;
          se(function(b) {
               a = b;
               return !1
          });
          return a
     };
     re = function(a) {
          try {
               var b = a.parent;
               if (b && b != a) return b
          } catch (c) {}
          return null
     };
     ue = function(a) {
          return qe(a.top) ? a.top : null
     };
     _.ve = function(a, b) {
          var c = a.createElement("script");
          _.yc(c, ke(b));
          return (a = a.getElementsByTagName("script")[0]) && a.parentNode ? (a.parentNode.insertBefore(c, a), c) : null
     };
     _.we = function(a, b) {
          return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
     };
     ze = function(a, b) {
          if (!xe()) {
               var c = Math.random();
               if (c < b) return c = ye(), a[Math.floor(c * a.length)]
          }
          return null
     };
     ye = function() {
          if (!_.A.crypto) return Math.random();
          try {
               var a = new Uint32Array(1);
               _.A.crypto.getRandomValues(a);
               return a[0] / 65536 / 65536
          } catch (b) {
               return Math.random()
          }
     };
     _.u = function(a, b, c) {
          if (a)
               for (var d in a) Object.prototype.hasOwnProperty.call(a, d) && b.call(c, a[d], d, a)
     };
     _.Ae = function(a) {
          for (var b in a)
               if (Object.prototype.hasOwnProperty.call(a, b)) return !1;
          return !0
     };
     Be = function(a) {
          var b = [];
          _.u(a, function(c, d) {
               b.push(d)
          });
          return b
     };
     _.Ce = function(a) {
          var b = [];
          _.u(a, function(c) {
               b.push(c)
          });
          return b
     };
     _.De = function(a, b) {
          return Pb(a, function(c, d) {
               return Object.prototype.hasOwnProperty.call(a, d) && b(c, d)
          })
     };
     Ee = function(a) {
          var b = a.length;
          if (0 == b) return 0;
          for (var c = 305419896, d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
          return 0 < c ? c : 4294967296 + c
     };
     xe = sb(function() {
          return _.ab(["Google Web Preview", "Mediapartners-Google", "Google-Read-Aloud", "Google-Adwords"], Fe) || 1E-4 > Math.random()
     });
     Fe = function(a) {
          return -1 != _.Gb.indexOf(a)
     };
     Ge = /^(-?[0-9.]{1,30})$/;
     _.He = function(a, b) {
          return Ge.test(a) && (a = Number(a), !isNaN(a)) ? a : void 0 == b ? null : b
     };
     Ie = function() {
          return /^true$/.test("false")
     };
     Je = function(a, b) {
          b = void 0 === b ? !0 : b;
          try {
               for (var c = null; c != a; c = a, a = a.parent) switch (a.location.protocol) {
                    case "https:":
                         return !0;
                    case "file:":
                         return b;
                    case "http:":
                         return !1
               }
          } catch (d) {}
          return !0
     };
     _.Ke = function(a) {
          if (!a) return "";
          var b = /.*[&#?]google_debug(=[^&]*)?(&.*)?$/;
          try {
               var c = b.exec(decodeURIComponent(a));
               if (c) return c[1] && 1 < c[1].length ? c[1].substring(1) : "true"
          } catch (d) {}
          return ""
     };
     Le = {
          ld: "allow-forms",
          md: "allow-modals",
          nd: "allow-orientation-lock",
          od: "allow-pointer-lock",
          pd: "allow-popups",
          qd: "allow-popups-to-escape-sandbox",
          rd: "allow-presentation",
          sd: "allow-same-origin",
          td: "allow-scripts",
          ud: "allow-top-navigation",
          vd: "allow-top-navigation-by-user-activation"
     };
     Me = sb(function() {
          return _.Ce(Le)
     });
     Ne = function(a) {
          var b = Me();
          return a.length ? _.q(b, function(c) {
               return !_.fb(a, c)
          }) : b
     };
     Oe = function() {
          var a = _.fe(document, "IFRAME"),
               b = {};
          _.H(Me(), function(c) {
               a.sandbox && a.sandbox.supports && a.sandbox.supports(c) && (b[c] = !0)
          });
          return b
     };
     Pe = function(a) {
          a = a && a.toString && a.toString();
          return "string" === typeof a && -1 != a.indexOf("[native code]")
     };
     Qe = function(a, b) {
          try {
               return !(!a.frames || !a.frames[b])
          } catch (c) {
               return !1
          }
     };
     Re = function(a, b) {
          for (var c = 0; 50 > c; ++c) {
               if (Qe(a, b)) return a;
               if (!(a = re(a))) break
          }
          return null
     };
     _.Se = sb(function() {
          return !Qd() && (I("iPod") || I("iPhone") || I("Android") || I("IEMobile")) ? 2 : Qd() ? 1 : 0
     });
     _.Te = Object.assign || function(a, b) {
          for (var c = 1; c < arguments.length; c++) {
               var d = arguments[c];
               if (d)
                    for (var e in d) Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e])
          }
          return a
     };
     _.Ue = function(a, b, c) {
          for (c = void 0 === c ? 100 : c; a && c-- && !1 !== b(a);) a = a.parentElement
     };
     _.Ve = function(a) {
          if (!a) return null;
          a = a.transform;
          if (!a) return null;
          a = a.replace(/^.*\(([0-9., -]+)\)$/, "$1").split(/, /);
          return 6 != a.length ? null : _.p(a, parseFloat)
     };
     We = function(a) {
          _.A.console && _.A.console.warn && _.A.console.warn(a)
     };
     Xe = [];
     Ye = function() {
          var a = Xe;
          Xe = [];
          a = _.r(a);
          for (var b = a.next(); !b.done; b = a.next()) {
               b = b.value;
               try {
                    b()
               } catch (c) {}
          }
     };
     Ze = function(a) {
          Xe.push(a);
          1 == Xe.length && (window.Promise ? Promise.resolve().then(Ye) : window.setImmediate ? setImmediate(Ye) : setTimeout(Ye, 0))
     };
     _.$e = function(a) {
          if ("number" !== typeof a.goog_pvsid) try {
               Object.defineProperty(a, "goog_pvsid", {
                    value: Math.floor(Math.random() * Math.pow(2, 52))
               })
          } catch (b) {}
          return Number(a.goog_pvsid) || -1
     };
     af = function(a, b) {
          var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=" + b;
          _.u(a, function(d, e) {
               d && (c += "&" + e + "=" + encodeURIComponent(d))
          });
          window.fetch(c, {
               keepalive: !0,
               credentials: "include",
               redirect: "follow",
               method: "get",
               mode: "no-cors"
          })
     };
     bf = function(a) {
          return 0 === a || "number" === typeof a && isFinite(a) && 0 == a % 1 && 0 < a
     };
     var cf = {
          Hd: 0,
          Bd: 1,
          Ad: 2,
          zd: 3,
          Ld: 4,
          Md: 5,
          Fd: 6,
          Cd: 7
     };
     var df = function() {
               return !!_.A.googlefc || Qe(_.A.top, "googlefcPresent")
          },
          ef = function(a) {
               var b = document;
               try {
                    var c = Nd(b);
                    var d = c ? new Pd(c ? JSON.parse(c) : null) : null
               } catch (e) {
                    d = null
               }
               if (!d) return 0;
               if (_.M(d, 7)) return 4;
               if (6048E5 < Ta() - (_.L(d, 5) || 0)) return 0;
               if (a) {
                    if (_.fb(_.L(d, 3), a)) return 2;
                    if (_.fb(_.L(d, 4), a)) return 3
               }
               return 1
          },
          ff = sb(function() {
               var a = /[?&]fc(consent)?=alwaysshow([&#]|$)/;
               try {
                    return a.test(_.A.top.location.href)
               } catch (b) {
                    return a.test(_.A.location.href)
               }
          }),
          gf = function(a, b) {
               for (var c = Be(cf).length, d = [], e = 0; e < c; e++) d[e] = 0;
               ff() && (a = !0);
               d[0] = a ? 1 : 2;
               e = Qe(_.A.top, "GoogleSetNPA") || Qe(te(), "GoogleSetNPA");
               d[5] = e ? 1 : 2;
               d[4] = 2;
               c = df();
               d[1] = c ? 1 : 2;
               var f = ef(b);
               0 != f ? b = {
                    Pb: f,
                    Qb: 3
               } : (f = _.A.top, b = {
                    Pb: Qe(f, "googlefcInactive") ? 4 : b && Qe(f, "googlefcPA-" + b) ? 2 : Qe(f, "googlefcNPA") ? 3 : 0,
                    Qb: 2
               });
               f = b;
               b = f.Pb;
               d[f.Qb] = b;
               if (!e) a: switch (b) {
                    case 2:
                    case 4:
                         e = !1;
                         break a;
                    case 3:
                         e = !0;
                         break a;
                    case 1:
                         e = a;
                         break a;
                    default:
                         e = (void 0 === c ? !1 : c) && a
               }
               return {
                    ee: b,
                    Lc: e,
                    Sc: 0 == b && a && c,
                    xc: d.join(".")
               }
          },
          hf = function(a, b, c) {
               var d = gf(a, b);
               d.Sc ? _.A.setTimeout(function() {
                    hf(a, b, c)
               }, 1E3) : c(d)
          };
     var jf = Ie();
     var kf = function(a) {
               this.methodName = a
          },
          lf = new kf(1),
          mf = new kf(15),
          nf = new kf(2),
          of = new kf(3),
          pf = new kf(5),
          qf = new kf(6),
          rf = new kf(7),
          sf = new kf(8),
          tf = new kf(14),
          uf = function(a, b, c) {
               return b[a.methodName] || c || function() {}
          };
     var vf = function() {
               this.l = function(a, b) {
                    return void 0 === b ? !1 : b
               };
               this.m = function(a, b) {
                    return void 0 === b ? 0 : b
               };
               this.v = function(a, b) {
                    return void 0 === b ? "" : b
               };
               this.o = function(a, b) {
                    return b = void 0 === b ? [] : b
               };
               this.j = function() {}
          },
          wf = function(a, b, c) {
               a.l = function(d, e) {
                    return uf(pf, b)(d, e, c)
               };
               a.m = function(d, e) {
                    return uf(qf, b)(d, e, c)
               };
               a.v = function(d, e) {
                    return uf(rf, b)(d, e, c)
               };
               a.o = function(d, e) {
                    return uf(sf, b)(d, e, c)
               };
               a.j = function() {
                    uf(mf, b)(c)
               }
          };
     _.Ia(vf);
     _.x = function(a) {
          var b = void 0 === b ? !1 : b;
          return vf.B().l(a, b)
     };
     _.xf = function(a, b) {
          b = void 0 === b ? 0 : b;
          return vf.B().m(a, b)
     };
     _.yf = function(a) {
          var b = void 0 === b ? "" : b;
          return vf.B().v(a, b)
     };
     _.zf = function(a) {
          var b = void 0 === b ? [] : b;
          return vf.B().o(a, b)
     };
     _.Af = function(a, b, c, d) {
          this.left = a;
          this.top = b;
          this.width = c;
          this.height = d
     };
     _.Af.prototype.ceil = function() {
          this.left = Math.ceil(this.left);
          this.top = Math.ceil(this.top);
          this.width = Math.ceil(this.width);
          this.height = Math.ceil(this.height);
          return this
     };
     _.Af.prototype.floor = function() {
          this.left = Math.floor(this.left);
          this.top = Math.floor(this.top);
          this.width = Math.floor(this.width);
          this.height = Math.floor(this.height);
          return this
     };
     _.Af.prototype.round = function() {
          this.left = Math.round(this.left);
          this.top = Math.round(this.top);
          this.width = Math.round(this.width);
          this.height = Math.round(this.height);
          return this
     };
     var Bf = {
               "AMP-CAROUSEL": "ac",
               "AMP-FX-FLYING-CARPET": "fc",
               "AMP-LIGHTBOX": "lb",
               "AMP-STICKY-AD": "sa"
          },
          Cf = function(a) {
               a = void 0 === a ? _.A : a;
               var b = a.context || a.AMP_CONTEXT_DATA;
               if (!b) try {
                    b = a.parent.context || a.parent.AMP_CONTEXT_DATA
               } catch (c) {}
               try {
                    if (b && b.pageViewId && b.canonicalUrl) return b
               } catch (c) {}
               return null
          },
          Df = function() {
               var a = Cf();
               return a && a.mode ? +a.mode.version || null : null
          },
          Ef = function() {
               var a = Cf();
               if (a && a.container) {
                    a = a.container.split(",");
                    for (var b = [], c = 0; c < a.length; c++) b.push(Bf[a[c]] || "x");
                    return b.join()
               }
               return null
          },
          Ff = function() {
               var a = Cf();
               return a && a.initialIntersection
          },
          Gf = function() {
               var a = Cf();
               var b;
               return (a = a && (b = a.initialLayoutRect) && "number" === typeof b.top && "number" === typeof b.left && "number" === typeof b.width && "number" === typeof b.height ? new _.Af(b.left, b.top, b.width, b.height) : null) ? new _.Xd(a.left, a.top) : (b = Ff()) && _.C(b.rootBounds) ? new _.Xd(b.rootBounds.left + b.boundingClientRect.left, b.rootBounds.top + b.boundingClientRect.top) : null
          },
          Hf = function(a) {
               return (a = a || Cf()) ? qe(a.master) ? a.master : null : null
          },
          If = !!Cf() && _.A != _.A.top,
          Jf = function(a) {
               a = Cf(a);
               if (!a || !_.C(a.data) || "string" !== typeof a.data.type) return null;
               a = a.data.type.toLowerCase();
               return "doubleclick" == a || "adsense" == a ? null : a
          };
     _.Kf = function(a, b) {
          a.google_image_requests || (a.google_image_requests = []);
          var c = a.document.createElement("img");
          c.src = b;
          a.google_image_requests.push(c)
     };
     _.Lf = function(a, b) {
          var c = _.$d(a);
          return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : ""
     };
     _.Mf = function(a, b) {
          return _.Lf(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
     };
     _.Nf = function(a) {
          try {
               var b = a.getBoundingClientRect()
          } catch (c) {
               return {
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0
               }
          }
          _.Jc && a.ownerDocument.body && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
          return b
     };
     _.Of = function(a) {
          var b = _.$d(a),
               c = new _.Xd(0, 0);
          var d = b ? _.$d(b) : document;
          d = !_.Jc || 9 <= Number(_.bd) || _.be(_.ae(d).j) ? d.documentElement : d.body;
          if (a == d) return c;
          a = _.Nf(a);
          d = _.ae(b).j;
          b = _.de(d);
          d = d.parentWindow || d.defaultView;
          b = _.Jc && _.Zc("10") && d.pageYOffset != b.scrollTop ? new _.Xd(b.scrollLeft, b.scrollTop) : new _.Xd(d.pageXOffset || b.scrollLeft, d.pageYOffset || b.scrollTop);
          c.x = a.left + b.x;
          c.y = a.top + b.y;
          return c
     };
     _.Pf = function(a) {
          a = _.Nf(a);
          return new _.Xd(a.left, a.top)
     };
     _.Qf = function(a, b) {
          if ("none" != _.Mf(b, "display")) return a(b);
          var c = b.style,
               d = c.display,
               e = c.visibility,
               f = c.position;
          c.visibility = "hidden";
          c.position = "absolute";
          c.display = "inline";
          a = a(b);
          c.display = d;
          c.position = f;
          c.visibility = e;
          return a
     };
     _.Rf = function(a) {
          if (!a.getBoundingClientRect) return null;
          a = _.Qf(_.Nf, a);
          return new _.Yd(a.right - a.left, a.bottom - a.top)
     };
     var Sf, Tf, Uf, Wf, Xf;
     Sf = function() {
          var a = void 0 === a ? Hd : a;
          try {
               return a.history.length
          } catch (b) {
               return 0
          }
     };
     Tf = function() {
          var a = void 0 === a ? Hd : a;
          return "http:" === a.location.protocol
     };
     Uf = function(a) {
          a = Hf(Cf(a)) || a;
          a.google_unique_id ? ++a.google_unique_id : a.google_unique_id = 1
     };
     _.Vf = function(a) {
          a = Hf(Cf(a)) || a;
          a = a.google_unique_id;
          return "number" === typeof a ? a : 0
     };
     Wf = !!window.google_async_iframe_id;
     Xf = Wf && window.parent || window;
     _.Yf = function() {
          if (Wf && !qe(Xf)) {
               var a = "." + Gd.domain;
               try {
                    for (; 2 < a.split(".").length && !qe(Xf);) Gd.domain = a = a.substr(a.indexOf(".") + 1), Xf = window.parent
               } catch (b) {}
               qe(Xf) || (Xf = window)
          }
          return Xf
     };
     _.hc(_.$b(_.ac("//fonts.googleapis.com/css")));
     var Zf = function() {
          var a, b = window.ActiveXObject;
          if (navigator.plugins && navigator.mimeTypes.length) {
               if ((a = navigator.plugins["Shockwave Flash"]) && a.description) return a.description.replace(/([a-zA-Z]|\s)+/, "").replace(/(\s)+r/, ".")
          } else {
               if (navigator.userAgent && 0 <= navigator.userAgent.indexOf("Windows CE")) {
                    var c = 3;
                    for (a = 1; a;) try {
                         a = new b("ShockwaveFlash.ShockwaveFlash." + (c + 1)), c++
                    } catch (d) {
                         a = null
                    }
                    return c.toString()
               }
               if (_.Rb()) {
                    a = null;
                    try {
                         a = new b("ShockwaveFlash.ShockwaveFlash.7")
                    } catch (d) {
                         c = 0;
                         try {
                              a = new b("ShockwaveFlash.ShockwaveFlash.6"), c = 6, a.AllowScriptAccess = "always"
                         } catch (e) {
                              if (6 === c) return c.toString()
                         }
                         try {
                              a = new b("ShockwaveFlash.ShockwaveFlash")
                         } catch (e) {}
                    }
                    if (a) return c = a.GetVariable("$version").split(" ")[1], c.replace(/,/g, ".")
               }
          }
          return "0"
     };
     var $f, bg;
     $f = function(a) {
          return "CSS1Compat" == a.compatMode ? a.documentElement : a.body
     };
     _.ag = function(a) {
          try {
               var b = $f(a.document);
               return new _.Yd(b.clientWidth, b.clientHeight)
          } catch (c) {
               return new _.Yd(-12245933, -12245933)
          }
     };
     bg = function(a, b) {
          b = void 0 === b ? _.A : b;
          a = a.scrollingElement || $f(a);
          return new _.Xd(b.pageXOffset || a.scrollLeft, b.pageYOffset || a.scrollTop)
     };
     _.cg = function(a) {
          try {
               return !(!a || !(a.offsetWidth || a.offsetHeight || a.getClientRects().length))
          } catch (b) {
               return !1
          }
     };
     _.dg = function(a, b, c) {
          a && null !== b && b != b.top && (b = b.top);
          try {
               return (void 0 === c ? 0 : c) ? (new _.Yd(b.innerWidth, b.innerHeight)).round() : _.ce(b || window).round()
          } catch (d) {
               return new _.Yd(-12245933, -12245933)
          }
     };
     var eg = function(a) {
               return !!a && a.top == a
          },
          fg = function(a, b, c, d) {
               c = c || a.google_ad_width;
               d = d || a.google_ad_height;
               if (eg(a)) return !1;
               var e = b.documentElement;
               if (c && d) {
                    var f = 1,
                         g = 1;
                    a.innerHeight ? (f = a.innerWidth, g = a.innerHeight) : e && e.clientHeight ? (f = e.clientWidth, g = e.clientHeight) : b.body && (f = b.body.clientWidth, g = b.body.clientHeight);
                    if (g > 2 * d || f > 2 * c) return !1
               }
               return !0
          };
     var gg = [/^https?:\/\/(secure)?pubads\.g\.doubleclick\.net(:\d+)?($|\/)/i, /^https?:\/\/(googleads|adx)\.g\.doubleclick\.net(:\d+)?($|\/)/i, /^https?:\/\/(?!adx)ad.*\.doubleclick\.net(:\d+)?($|\/)/i, /^https?:\/\/(tpc|pagead2)\.googlesyndication\.com(:\d+)?($|\/)/i, /^https?:\/\/www\.googletagservices\.com(:\d+)?($|\/)/i, /^https?:\/\/adservice\.google\.(com?\.)?[a-z]{2,3}(:\d+)?($|\/)/i],
          hg = function(a) {
               return _.ab(gg, function(b) {
                    return b.test(a)
               })
          },
          ig = function(a) {
               if (a = /[-\w]+\.[-\w]+$/.exec(a)) {
                    a = a[0].toLowerCase();
                    for (var b = 0, c = 0; c < a.length; ++c) b = 31 * b + a.charCodeAt(c) >>> 0;
                    switch (b) {
                         case 1967261364:
                              return 0;
                         case 3147493546:
                              return 1;
                         case 1567346461:
                              return 2;
                         case 2183041838:
                              return 3;
                         case 763236279:
                              return 4;
                         case 1342279801:
                              return 5;
                         case 526831769:
                              return 6;
                         case 352806002:
                              return 7;
                         case 2755048925:
                              return 8;
                         case 3306848407:
                              return 9;
                         case 2207000920:
                              return 10;
                         case 484037040:
                              return 11;
                         case 3506871055:
                              return 12;
                         case 672143848:
                              return 13;
                         case 2528751226:
                              return 14;
                         case 2744854768:
                              return 15;
                         case 3703278665:
                              return 16;
                         case 2014749173:
                              return 17;
                         case 133063824:
                              return 18;
                         case 2749334602:
                              return 19;
                         case 3131239845:
                              return 20;
                         case 2074086763:
                              return 21;
                         case 795772493:
                              return 22;
                         case 290857819:
                              return 23;
                         case 3035947606:
                              return 24;
                         case 2983138003:
                              return 25;
                         case 2197138676:
                              return 26;
                         case 4216016165:
                              return 27;
                         case 239803524:
                              return 28;
                         case 975993579:
                              return 29;
                         case 1794940339:
                              return 30;
                         case 1314429186:
                              return 31;
                         case 1643618937:
                              return 32;
                         case 497159982:
                              return 33;
                         case 3882239661:
                              return 34
                    }
               }
               return -1
          },
          jg = function(a) {
               if (!a.length) return 0;
               for (var b = [], c = 0; 34 >= c; c++) b[c] = 0;
               for (c = a.length - 1; 0 <= c; c--) {
                    var d = ig(a[c]);
                    0 <= d && (b[34 - d] = 1)
               }
               return parseInt(b.join(""), 2)
          };
     _.kg = function(a, b) {
          var c = void 0 === c ? {} : c;
          this.error = a;
          this.context = b.context;
          this.msg = b.message || "";
          this.id = b.id || "jserror";
          this.meta = c
     };
     var lg = /^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/,
          ng = function(a) {
               a = (this.l = a || _.A) || _.A;
               this.m = a.top == a ? 1 : qe(a.top) ? 2 : 3;
               3 != this.m && Date.parse(_.A.top.document.lastModified);
               this.j = mg(this.l)
          },
          og = function(a, b) {
               for (var c = 0, d = (a = a.j[Math.max(a.j.length - 1, 0)].url || null) && me(a.match(_.le)[3] || null), e = Math.min(b.length, 26), f = 0; f < e; f++) a = null != b[f] && me(b[f].match(_.le)[3] || null) || "", c *= 4, a && (d && a == d ? c += 3 : hg(b[f]) ? c += 2 : a && 0 <= ig(a) && (c += 1));
               return c
          },
          mg = function(a) {
               var b = a || _.A,
                    c = [],
                    d = null;
               do {
                    var e = b;
                    if (qe(e)) {
                         var f = e.location.href;
                         d = e.document && e.document.referrer || null
                    } else f = d, d = null;
                    c.push(new pg(f || "", e));
                    try {
                         b = e.parent
                    } catch (g) {
                         b = null
                    }
               } while (b && e != b);
               e = 0;
               for (b = c.length - 1; e <= b; ++e) c[e].depth = b - e;
               e = a || _.A;
               if (e.location && e.location.ancestorOrigins && e.location.ancestorOrigins.length == c.length - 1)
                    for (a = 1; a < c.length; ++a) b = c[a], b.url || (b.url = e.location.ancestorOrigins[a - 1] || "", b.Sb = !0);
               return c
          },
          qg = function(a, b) {
               this.j = a;
               this.l = b
          },
          pg = function(a, b, c) {
               this.url = a;
               this.Ka = b;
               this.Sb = !!c;
               this.depth = null
          };
     var rg = function() {
               this.m = "&";
               this.v = !1;
               this.l = {};
               this.o = 0;
               this.j = []
          },
          sg = function(a, b) {
               var c = {};
               c[a] = b;
               return [c]
          },
          ug = function(a, b, c, d, e) {
               var f = [];
               _.u(a, function(g, h) {
                    (g = tg(g, b, c, d, e)) && f.push(h + "=" + g)
               });
               return f.join(b)
          },
          tg = function(a, b, c, d, e) {
               if (null == a) return "";
               b = b || "&";
               c = c || ",$";
               "string" == typeof c && (c = c.split(""));
               if (a instanceof Array) {
                    if (d = d || 0, d < c.length) {
                         for (var f = [], g = 0; g < a.length; g++) f.push(tg(a[g], b, c, d + 1, e));
                         return f.join(c[d])
                    }
               } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(ug(a, b, c, d, e + 1)) : "...";
               return encodeURIComponent(String(a))
          },
          vg = function(a, b, c, d) {
               a.j.push(b);
               a.l[b] = sg(c, d)
          },
          xg = function(a, b, c) {
               b = b + "//pagead2.googlesyndication.com" + c;
               var d = wg(a) - c.length;
               if (0 > d) return "";
               a.j.sort(function(m, t) {
                    return m - t
               });
               c = null;
               for (var e = "", f = 0; f < a.j.length; f++)
                    for (var g = a.j[f], h = a.l[g], k = 0; k < h.length; k++) {
                         if (!d) {
                              c = null == c ? g : c;
                              break
                         }
                         var l = ug(h[k], a.m, ",$");
                         if (l) {
                              l = e + l;
                              if (d >= l.length) {
                                   d -= l.length;
                                   b += l;
                                   e = a.m;
                                   break
                              }
                              a.v && (e = d, l[e - 1] == a.m && --e, b += l.substr(0, e), e = a.m, d = 0);
                              c = null == c ? g : c
                         }
                    }
               a = "";
               null != c && (a = e + "trn=" + c);
               return b + a
          },
          wg = function(a) {
               var b = 1,
                    c;
               for (c in a.l) b = c.length > b ? c.length : b;
               return 3997 - b - a.m.length - 1
          };
     var Bg;
     _.yg = function(a, b) {
          this.m = a;
          this.l = b;
          this.j = Math.random()
     };
     Bg = function() {
          var a = zg,
               b = Ag.google_srt;
          0 <= b && 1 >= b && (a.j = b)
     };
     _.Cg = function(a, b, c, d, e) {
          if ((d ? a.j : Math.random()) < (e || a.l)) try {
               if (c instanceof rg) var f = c;
               else f = new rg, _.u(c, function(h, k) {
                    var l = f,
                         m = l.o++;
                    h = sg(k, h);
                    l.j.push(m);
                    l.l[m] = h
               });
               var g = xg(f, a.m, "/pagead/gen_204?id=" + b + "&");
               g && _.Kf(_.A, g)
          } catch (h) {}
     };
     var Dg = null,
          Eg = function() {
               if (null === Dg) {
                    Dg = "";
                    try {
                         var a = "";
                         try {
                              a = _.A.top.location.hash
                         } catch (c) {
                              a = _.A.location.hash
                         }
                         if (a) {
                              var b = a.match(/\bdeid=([\d,]+)/);
                              Dg = b ? b[1] : ""
                         }
                    } catch (c) {}
               }
               return Dg
          };
     var Hg;
     _.Fg = function() {
          var a = _.A.performance;
          return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Ta()
     };
     _.Gg = function(a) {
          a = void 0 === a ? _.A : a;
          return (a = a.performance) && a.now ? a.now() : null
     };
     Hg = function(a) {
          var b = _.A.performance;
          return b && b.timing && b.timing[a] || 0
     };
     var Ig = function(a, b, c, d, e) {
          this.label = a;
          this.type = b;
          this.value = c;
          this.duration = void 0 === d ? 0 : d;
          this.uniqueId = Math.random();
          this.slotId = e
     };
     var Jg, Kg, Lg, Mg, Og, Pg;
     Jg = _.A.performance;
     Kg = !!(Jg && Jg.mark && Jg.measure && Jg.clearMarks);
     Lg = sb(function() {
          var a;
          if (a = Kg) a = Eg(), a = !!a.indexOf && 0 <= a.indexOf("1337");
          return a
     });
     Mg = function(a, b) {
          this.events = [];
          this.l = b || _.A;
          var c = null;
          b && (b.google_js_reporting_queue = b.google_js_reporting_queue || [], this.events = b.google_js_reporting_queue, c = b.google_measure_js_timing);
          this.j = Lg() || (null != c ? c : Math.random() < a)
     };
     Og = function(a) {
          a.j = !1;
          a.events != a.l.google_js_reporting_queue && (Lg() && _.H(a.events, _.Ng), a.events.length = 0)
     };
     _.Ng = function(a) {
          a && Jg && Lg() && (Jg.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_start"), Jg.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_end"))
     };
     Pg = function(a, b, c, d, e, f) {
          a.j && (b = new Ig(b, c, d, void 0 === e ? 0 : e, f), !a.j || 2048 < a.events.length || a.events.push(b))
     };
     Mg.prototype.start = function(a, b) {
          if (!this.j) return null;
          var c = _.Gg() || _.Fg();
          a = new Ig(a, b, c);
          b = "goog_" + a.label + "_" + a.uniqueId + "_start";
          Jg && Lg() && Jg.mark(b);
          return a
     };
     _.Qg = function(a, b) {
          if (a.j && "number" === typeof b.value) {
               var c = _.Gg() || _.Fg();
               b.duration = c - b.value;
               c = "goog_" + b.label + "_" + b.uniqueId + "_end";
               Jg && Lg() && Jg.mark(c);
               !a.j || 2048 < a.events.length || a.events.push(b)
          }
     };
     _.Rg = function(a, b, c) {
          var d = _.Gg();
          d && Pg(a, b, 9, d, 0, c)
     };
     var ra;
     _.Tg = function() {
          var a = Sg;
          this.v = zg;
          this.l = null;
          this.o = this.mb;
          this.j = void 0 === a ? null : a;
          this.m = !1
     };
     _.n = _.Tg.prototype;
     _.n.ac = function(a) {
          this.l = a
     };
     _.n.bc = function(a) {
          this.m = a
     };
     _.n.Pa = _.ba(0);
     _.n.ha = _.ba(1);
     _.n.mb = function(a, b, c, d, e) {
          e = e || "jserror";
          try {
               var f = new rg;
               f.v = !0;
               vg(f, 1, "context", a);
               b.error && b.meta && b.id || (b = new _.kg(b, {
                    message: _.Ug(b)
               }));
               b.msg && vg(f, 2, "msg", b.msg.substring(0, 512));
               var g = b.meta || {};
               if (this.l) try {
                    this.l(g)
               } catch (w) {}
               if (d) try {
                    d(g)
               } catch (w) {}
               b = [g];
               f.j.push(3);
               f.l[3] = b;
               var h = mg(),
                    k = new pg(_.A.location.href, _.A, !1);
               b = null;
               var l = h.length - 1;
               for (d = l; 0 <= d; --d) {
                    var m = h[d];
                    !b && lg.test(m.url) && (b = m);
                    if (m.url && !m.Sb) {
                         k = m;
                         break
                    }
               }
               m = null;
               var t = h.length && h[l].url;
               0 != k.depth && t && (m = h[l]);
               var v = new qg(k, m);
               v.l && vg(f, 4, "top", v.l.url || "");
               vg(f, 5, "url", v.j.url || "");
               _.Cg(this.v, e, f, this.m, c)
          } catch (w) {
               try {
                    _.Cg(this.v, e, {
                         context: "ecmserr",
                         rctx: a,
                         msg: _.Ug(w),
                         url: v && v.j.url
                    }, this.m, c)
               } catch (E) {}
          }
          return !0
     };
     _.Ug = function(a) {
          var b = a.toString();
          a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
          a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
          a.stack && (b = ra(a.stack, b));
          return b
     };
     ra = function(a, b) {
          try {
               -1 == a.indexOf(b) && (a = b + "\n" + a);
               for (var c; a != c;) c = a, a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1");
               return a.replace(/\n */g, "\n")
          } catch (d) {
               return b
          }
     };
     var Wg;
     _.Vg = function() {
          this.l = function() {};
          this.m = function() {
               return []
          };
          this.j = function() {
               return []
          }
     };
     Wg = function(a, b, c) {
          a.l = uf(lf, b, function() {});
          a.m = function(d) {
               return uf(nf, b, function() {
                    return []
               })(d, c)
          };
          a.j = function() {
               return uf( of , b, function() {
                    return []
               })(c)
          }
     };
     _.Ia(_.Vg);
     _.Xg = function(a) {
          return _.Vg.B().m(a)
     };
     var Yg = !1,
          Zg = 0,
          $g = function(a, b, c) {
               if (!Yg) {
                    Yg = !0;
                    var d = a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.msRequestAnimationFrame || a.mozRequestAnimationFrame || a.oRequestAnimationFrame;
                    if (Pe(d)) {
                         var e, f, g, h, k = a.requestIdleCallback;
                         k && (h = function(m) {
                              f = m.timeRemaining();
                              g = 0
                         });
                         var l = function(m) {
                              Yg && (b.push(m - e), e = m, k && (c.push(f || 0), g || (f = 0, g = k(h))), d(l))
                         };
                         d(function(m) {
                              e = m;
                              k && (g = k(h));
                              d(l)
                         })
                    }
               }
          },
          ah = function() {
               Yg = !1
          },
          bh = function() {
               Zg && _.A.clearTimeout(Zg);
               Zg = Yg ? _.A.setTimeout(ah, 1E4) : 0
          };
     var ch = function(a) {
          return a._google_rum_ns_ = a._google_rum_ns_ || {}
     };
     var dh = null,
          eh = function() {
               return dh ? dh : Pe(window.Map) ? dh = new Map : null
          },
          fh = {},
          gh = function() {},
          hh = function(a, b) {
               if (a instanceof b) return a;
               if (a instanceof gh) {
                    var c = eh();
                    a = c ? c.get(a) : fh[Pa(a)];
                    if (a instanceof b) return a
               }
               return null
          };
     var na, ih;
     _.oa = function() {
          return _.A.googletag || (_.A.googletag = {})
     };
     na = function(a, b) {
          var c = _.oa();
          c.hasOwnProperty(a) || (c[a] = b)
     };
     ih = function(a, b) {
          a.addEventListener ? a.addEventListener("load", b, !1) : a.attachEvent && a.attachEvent("onload", b)
     };
     var jh = {
               247: "https://securepubads.g.doubleclick.net",
               7: .02,
               13: 1500,
               23: .001,
               37: .01,
               38: .001,
               58: 1,
               150: "",
               211: !1,
               152: [],
               172: null,
               191: "",
               192: "",
               190: "",
               245: {},
               180: null,
               246: [],
               227: {},
               226: [],
               248: 0,
               228: "//www.googletagservices.com/pubconsole/"
          },
          mh, nh, oh, ph;
     jh[6] = Je(window);
     jh[49] = (new Date).getTime();
     jh[36] = Ie();
     jh[148] = jf;
     jh[221] = Ie();
     jh[204] = _.He("-1", -1);
     var kh = function() {
          for (var a in jh) this[a] = jh[a]
     };
     _.Ia(kh);
     _.lh = function(a) {
          return kh.B()[a]
     };
     mh = _.oa();
     nh = kh.B();
     oh = mh._vars_;
     for (ph in oh) nh[ph] = oh[ph];
     mh._vars_ = nh;
     var Bd = function(a) {
          _.K(this, a, qh, null)
     };
     _.G(Bd, _.J);
     var qh = [2],
          rh = function(a) {
               return _.L(a, 1)
          },
          sh = function(a, b) {
               return _.N(a, 1, b)
          },
          th = function(a, b) {
               return _.N(a, 2, b || [])
          };
     _.uh = function(a) {
          _.K(this, a, null, null)
     };
     _.G(_.uh, _.J);
     _.vh = function(a, b) {
          _.N(a, 2, b)
     };
     var wh = function(a) {
          _.K(this, a, null, null)
     };
     _.G(wh, _.J);
     var xh = function(a) {
          _.K(this, a, null, null)
     };
     _.G(xh, _.J);
     _.yh = function(a) {
          _.K(this, a, null, null)
     };
     _.G(_.yh, _.J);
     _.zh = function(a, b) {
          return _.N(a, 3, b)
     };
     var Ch = function(a) {
          _.K(this, a, Ah, Bh)
     };
     _.G(Ch, _.J);
     var Ah = [2, 3, 7, 14],
          Bh = [
               [8, 9]
          ],
          Dh = function(a, b) {
               Ad(a, 2, b)
          };
     var Eh = function(a) {
          _.K(this, a, null, null)
     };
     _.G(Eh, _.J);
     var Fh = function(a, b) {
               return _.N(a, 1, b)
          },
          Gh = function(a, b) {
               return _.N(a, 2, b)
          },
          Hh = function() {
               var a = new Eh;
               return _.N(a, 3, !0)
          };
     var Jh = function(a) {
          _.K(this, a, Ih, null)
     };
     _.G(Jh, _.J);
     var Ih = [2];
     var Lh = function(a) {
          _.K(this, a, Kh, null)
     };
     _.G(Lh, _.J);
     var Kh = [3, 4, 5, 6, 8, 9];
     Lh.prototype.getAdUnitPath = function() {
          return _.L(this, 1)
     };
     var Mh = function(a, b) {
               _.N(a, 2, b)
          },
          Nh = function(a, b) {
               Ad(a, 9, b)
          };
     var Oh = function(a) {
               return _.B(a) && 2 == a.length && bf(a[0]) && bf(a[1]) || "string" === typeof a && "fluid" == a
          },
          Ph = function(a) {
               return _.B(a) ? Gh(Fh(new Eh, a[0]), a[1]) : Hh()
          },
          Rh = function(a) {
               var b = [];
               if (Qh(a)) b.push(Ph(a));
               else if (_.B(a))
                    for (var c = 0; c < a.length; ++c) {
                         var d = a[c];
                         Qh(d) && b.push(Ph(d));
                         _.pb(d, ["fluid"]) && b.push(Hh())
                    }
               return b
          },
          Sh = function(a) {
               var b = null,
                    c = null,
                    d = null,
                    e = null;
               if (a && (_.B(a.fixed) || "fluid" === a.fixed)) {
                    var f = Rh(a.fixed);
                    if (_.B(a.max) && 2 === a.max.length) {
                         var g = _.r(a.max),
                              h = g.next().value;
                         g = g.next().value;
                         "number" === typeof h && "number" === typeof g && 0 < h && 0 < g && (b = Math.floor(h), c = Math.floor(g), _.B(a.min) && 2 === a.min.length && (g = _.r(a.min), h = g.next().value, g = g.next().value, "number" === typeof h && "number" === typeof g && 0 <= h && 0 <= g && (d = Math.floor(h), e = Math.floor(g))))
                    }
               } else f = Rh(a);
               f.length && (!a || !a.max || b && c) || We("Invalid GPT size specification: " + JSON.stringify(a));
               return {
                    vc: f,
                    maxWidth: b,
                    maxHeight: c,
                    minWidth: d,
                    minHeight: e
               }
          },
          Qh = function(a) {
               return _.B(a) && 1 < a.length && "number" === typeof a[0] && "number" === typeof a[1] || "string" === typeof a && "fluid" == a
          };
     var Th = function(a, b) {
               a = eb(a, function(c) {
                    c = _.O(c, Eh, 1);
                    return _.L(c, 1) <= _.L(b, 1) && _.L(c, 2) <= _.L(b, 2)
               });
               return null == a ? null : _.P(a, Eh, 2)
          },
          Uh = function(a) {
               if (!_.B(a) || 2 != a.length) throw Error("Each mapping entry has to be an array of size 2");
               var b = a[0];
               if (!Oh(b) || "fluid" == b) throw Error("Size has to be an array of two non-negative integers");
               b = Gh(Fh(new Eh, b[0]), b[1]);
               if (_.B(a[1]) && 0 == a[1].length) a = [];
               else if (a = Rh(a[1]), 0 == a.length) throw Error("At least one slot size must be present");
               var c = new Jh;
               b = _.zd(c, 1, b);
               return Ad(b, 2, a)
          };
     var Wh, $h;
     _.Vh = function(a, b, c) {
          return "number" === typeof b && "number" === typeof c && 0 < _.P(a, Jh, 6).length ? Th(_.P(a, Jh, 6), Gh(Fh(new Eh, b), c)) : _.P(a, Eh, 5)
     };
     Wh = function(a) {
          return null != _.L(a, 16) && null != _.L(a, 17)
     };
     _.Xh = function(a) {
          var b = window,
               c = null;
          b.top == b && (b = _.dg(!1, b), c = _.Vh(a, b.width, b.height));
          null == c && (c = _.Vh(a));
          return _.p(c, function(d) {
               return _.M(d, 3) ? "fluid" : [_.L(d, 1), _.L(d, 2)]
          })
     };
     _.Yh = function(a) {
          var b = [],
               c = !1;
          a = _.r(_.Xh(a));
          for (var d = a.next(); !d.done; d = a.next()) d = d.value, _.B(d) ? b.push(d.join("x")) : "fluid" == d ? c = !0 : b.push(d);
          c && b.unshift("320x50");
          return b.join("|")
     };
     _.Zh = function(a) {
          return _.fb(_.Xh(a), "fluid")
     };
     $h = function(a, b) {
          b = void 0 === b ? null : b;
          var c = 0,
               d = [];
          a && (d.push(a.getAdUnitPath()), d.push(_.Yh(a)), d.push(_.L(a, 2)));
          if (b) {
               a = [];
               for (var e = 0; b && 25 > e; b = b.parentNode, ++e) 9 === b.nodeType ? a.push("") : a.push(b.id);
               (b = a.join()) && d.push(b)
          }
          0 < d.length && (c = Ee(d.join(":")));
          return c.toString()
     };
     _.ai = function() {
          var a = _.x(85) || _.x(84);
          _.A.google_measure_js_timing = a || _.A.google_measure_js_timing;
          Mg.call(this, a ? 1 : 0, _.A);
          this.m = 0
     };
     _.z(_.ai, Mg);
     _.Ia(_.ai);
     var ci, di, ei, fi, gi, ii, ji, mi, ni, oi, pi, ri, si, ui, vi, wi, yi, zi;
     ci = function(a, b) {
          var c = a.sa;
          if ("" != c) return c;
          a = b[_.S(a)];
          return null != a ? bi(a) : null
     };
     di = function(a) {
          var b = a;
          "about:blank" != a && (b = b.replace(/</g, "%3C").replace(/>/g, "%3E").replace(/"/g, "%22").replace(/'/g, "%27"), /^https?:\/\//.test(b) || (b = "unknown:" + b));
          return b
     };
     ei = /\+/g;
     fi = function() {
          return "https://pagead2.googlesyndication.com"
     };
     gi = function(a) {
          var b = a.document;
          return eg(a) ? b.URL : b.referrer
     };
     _.hi = function(a) {
          try {
               var b = window.top,
                    c = new _.Xd(0, 0),
                    d = _.ee(_.$d(a));
               if (Fc(d, "parent")) {
                    do {
                         var e = d == b ? _.Of(a) : _.Pf(a);
                         c.x += e.x;
                         c.y += e.y
                    } while (d && d != b && d != d.parent && (a = d.frameElement) && (d = d.parent))
               }
               var f = c
          } catch (g) {
               f = new _.Xd(-12245933, -12245933)
          }
          return f
     };
     ii = function(a, b) {
          if (null == b) return a;
          b = a.indexOf("google_preview=", a.lastIndexOf("?"));
          var c = a.indexOf("&", b); - 1 == c && (c = a.length - 1, --b);
          return a.substring(0, b) + a.substring(c + 1, a.length)
     };
     ji = sb(function() {
          return "XMLHttpRequest" in window && "withCredentials" in new XMLHttpRequest
     });
     _.ki = sb(function() {
          return !_.Jc && !Kc
     });
     _.li = sb(function() {
          return !_.Jc && !Kc
     });
     mi = sb(function() {
          return !!_.Ke(_.A.location.href)
     });
     ni = function(a) {
          var b = a.split("/");
          return "/" == a.charAt(0) && 2 <= b.length ? b[1] : "/" != a.charAt(0) && 1 <= b.length ? b[0] : ""
     };
     oi = function(a) {
          var b = [];
          b = _.p(a, function(c) {
               return ni(c.getAdUnitPath())
          });
          _.fa(b);
          return b
     };
     pi = function(a) {
          return a ? (a = _.Rf(a)) && a.floor() : null
     };
     _.qi = function(a) {
          return a ? _.x(54) ? 1 : _.x(71) && _.x(65) ? 2 : 0 : 0
     };
     ri = function(a, b) {
          if (_.x(229)) {
               for (var c = {}, d = _.r(Object.keys(b)), e = d.next(); !e.done; e = d.next()) {
                    e = e.value;
                    var f = b[e];
                    f = new f.constructor(Ed(_.yd(f)));
                    c[e] = f
               }
               return {
                    M: new a.constructor(Ed(_.yd(a))),
                    T: c
               }
          }
          return {
               M: a,
               T: b
          }
     };
     si = function() {
          var a = window.crypto || window.msCrypto;
          if (void 0 !== a) {
               var b = new Uint8Array(16);
               a.getRandomValues(b)
          } else
               for (b = Array(16), a = 0; 16 > a; ++a) b[a] = Math.floor(255 * Math.random());
          a = "";
          b = _.r(b);
          for (var c = b.next(); !c.done; c = b.next()) c = c.value, 15 >= c && (a += "0"), a += c.toString(16);
          return a
     };
     ui = function(a, b) {
          return _.ti(a, b) || _.T(a, b)
     };
     vi = function(a, b) {
          return _.M(b, 6) || a.P ? null : _.T(a)
     };
     wi = function(a, b) {
          var c = a.slot,
               d = a.ba;
          a = null;
          _.B(_.Xh(d)[0]) && (d = _.r(_.Xh(d)[0]), a = d.next().value, d = d.next().value, a = {
               width: a,
               height: d
          });
          a: {
               var e = ui(c, b);b = {
                    cc: a,
                    Lb: !1
               };d = void 0 === b ? {} : b;b = void 0 === d.cc ? null : d.cc;c = void 0 === d.Gc ? 100 : d.Gc;a = void 0 === d.Wc ? 50 : d.Wc;d = void 0 === d.Lb ? !0 : d.Lb;
               for (var f = Ta(), g = !1; e;) {
                    if (!c-- || Ta() - f >= a) {
                         var h = !1;
                         break a
                    }
                    switch (e.nodeType) {
                         case 9:
                              try {
                                   if (h = e.parentWindow || e.defaultView) {
                                        var k = h.frameElement;
                                        if (k && qe(h.parent)) {
                                             e = k;
                                             break
                                        }
                                   }
                              } catch (w) {}
                              e = null;
                              break;
                         case 1:
                              var l = e,
                                   m;
                              if (m = d) {
                                   b: {
                                        try {
                                             if (0 < l.offsetWidth && 0 < l.offsetHeight && l.style && "none" !== l.style.display && "hidden" !== l.style.visibility && (!l.style.opacity || 0 !== Number(l.style.opacity))) {
                                                  var t = l.getBoundingClientRect();
                                                  var v = 0 < t.right && 0 < t.bottom;
                                                  break b
                                             }
                                        } catch (w) {}
                                        v = !1
                                   }
                                   m = !v
                              }
                              if (m) {
                                   h = !1;
                                   break a
                              }
                              g || (/^html|body$/i.test(l.tagName) ? g = null : (g = l.style.position || (_.we(l, window) || {}).position, g = /^fixed/i.test(g) ? l : null), g = !!g && (!b || g.offsetWidth * g.offsetHeight <= 4 * b.width * b.height));
                              e = e.parentNode
                    }
               }
               h = g
          }
          return h
     };
     yi = function(a, b, c, d) {
          var e = c.slot,
               f = c.ba;
          c = _.hi(b);
          if (!c) return c;
          var g = b === _.T(e, a),
               h = sb(function() {
                    return g ? _.xi(e, a) || {} : _.we(b, window) || {}
               });
          f = _.Xh(f)[0];
          var k = !1;
          _.B(f) && (k = d ? g : 0 == c.x && "center" == h()["text-align"]);
          k && (c.x += Math.round(Math.max(0, (g ? b.clientWidth : b.parentElement.clientWidth) - f[0]) / 2));
          g && (c.y += Math.round(Math.min(parseInt(h()["padding-top"], 10) || 0, b.clientHeight)), k || (d = b.clientWidth, c.x += Math.round(Math.min(parseInt(h()["padding-left"], 10) || 0, d))));
          return c
     };
     zi = function() {
          return Math.floor(Math.random() * Math.pow(2, 52))
     };
     _.Ai = function(a, b, c) {
          try {
               var d = bg(top.document, top).y,
                    e = d + b.height * (c + 1);
               return a.y >= d && a.y <= e
          } catch (f) {
               return !0
          }
     };
     _.Bi = function() {
          return "2020030501"
     };
     na("getVersion", _.Bi);
     var Di, Fi;
     _.Ci = function(a, b, c) {
          b = void 0 === b ? "https://pagead2.googlesyndication.com" : b;
          if (null == c || 0 > c || 1 < c) c = _.lh(23);
          this.m = Math.random();
          this.A = this.m < c;
          this.j = a;
          this.o = _.$e(_.A);
          this.v = b;
          this.l = {
               pvsid: this.o
          }
     };
     _.y = function(a, b, c) {
          "string" != typeof c && (c = String(c));
          /^\w+$/.test(b) && c && (a.l[b] = c)
     };
     _.Ei = function(a, b, c) {
          b = void 0 === b ? null : b;
          c = void 0 === c ? !1 : c;
          b = void 0 === b ? null : b;
          c = void 0 === c ? !1 : c;
          if (mi()) b = !0;
          else {
               var d = a.A;
               b && 0 <= b && (d = (c ? a.m : Math.random()) < b);
               b = d && !!a.j
          }
          b && (_.x(305) ? af(a.l, a.j) : (a = Di(a) || "", _.Kf(window, a)))
     };
     Di = function(a) {
          var b = a.v + "/pagead/gen_204?id=" + encodeURIComponent(a.j);
          _.u(a.l, function(c, d) {
               c && (b += "&" + d + "=" + encodeURIComponent(c))
          });
          return b
     };
     Fi = function(a, b) {
          b.length && (3 >= b.length ? _.y(a, "nw_id", b.join()) : (b = lb(b, 0, 3), b.push("__extra__"), _.y(a, "nw_id", b.join())))
     };
     _.qa = function(a, b) {
          b = void 0 === b ? null : b;
          var c = void 0 === c ? document : c;
          _.y(a, "vrg", _.Bi());
          b ? (Fi(a, Gi(b)), _.y(a, "nslots", Hi(b).toString())) : (Fi(a, oi(_.Ii)), _.y(a, "nslots", _.Ii.length.toString()));
          b = _.Vg.B().j();
          b.length && _.y(a, "eid", b.join());
          _.y(a, "pub_url", c.URL)
     };
     _.pa = function(a, b, c) {
          c = void 0 === c ? {} : c;
          var d = c.Yd || "https://pagead2.googlesyndication.com";
          c = c.Ga;
          if (void 0 === c || 0 > c || 1 < c) c = _.lh(23);
          Math.random() < c && (a = new _.Ci(a, d), b(a), _.Ei(a, 1, !0))
     };
     _.Ii = [];
     var Ji, Ki, W, Oi, Ni;
     Ji = _.lh(38);
     Ki = function(a, b) {
          a = {
               methodId: a
          };
          b.name && (a.name = b.name);
          b.message && (a.message = b.message.substring(0, 512));
          b.fileName && (a.fileName = b.fileName);
          b.lineNumber && (a.lineNumber = b.lineNumber);
          b.stack && (a.stack = ra(b.stack, ""));
          return a
     };
     _.Mi = function(a, b, c) {
          c = void 0 === c ? !1 : c;
          _.Li(a, b);
          if (!c) throw b;
     };
     _.Li = function(a, b, c) {
          c = void 0 === c ? Ji : c;
          if (!b.isReported) try {
               b.isReported = !0;
               var d = Ki(a, b),
                    e = new _.Ci("gpt_exception");
               try {
                    _.qa(e)
               } catch (f) {}
               _.u(d, function(f, g) {
                    return _.y(e, g, f)
               });
               _.Ei(e, c)
          } catch (f) {}
     };
     W = function(a, b, c) {
          return _.V(a, b, c, _.x(144))
     };
     _.V = function(a, b, c, d) {
          d = void 0 === d ? !1 : d;
          return function(e) {
               for (var f = [], g = 0; g < arguments.length; ++g) f[g] = arguments[g];
               g = !1;
               var h = null,
                    k = c || _.Mi,
                    l = _.ai.B();
               try {
                    var m = _.x(85);
                    m && l && (h = l.start(a.toString(), 3));
                    var t = b.apply(this, f);
                    g = !0;
                    m && l && _.Qg(l, h)
               } catch (w) {
                    g ? _.Li(110, w) : t = k.call(this, a, w), _.Ng(h)
               }
               if (d) try {
                    var v = Error();
                    _.pa("gpt_api_usage", function(w) {
                         _.y(w, "methodId", a);
                         _.y(w, "args", f.length);
                         _.y(w, "stack", ra(v.stack, v.message));
                         _.qa(w)
                    }, {
                         Ga: 1
                    })
               } catch (w) {}
               return t
          }
     };
     Oi = function() {
          var a, b = window;
          if (a = _.x(86)) b._google_rum_ns_ ? (a = ch(b), a = !(!a.raf || !a.ric)) : a = !1, a = !a;
          if (a) {
               var c = ch(b);
               c.raf = c.raf || [];
               c.ric = c.ric || [];
               a = c.raf;
               c = c.ric;
               $g(b, a, c);
               ih(b, Ni);
               b.setTimeout(ah, 6E4)
          }
     };
     Ni = function() {
          bh()
     };
     var Pi = function(a) {
          this.push = W(76, function(b) {
               return a.push.apply(a, arguments)
          })
     };
     _.z(Pi, gh);
     var Qi = function(a, b) {
          b = void 0 === b ? [] : b;
          this.l = a;
          this.j = b
     };
     Qi.prototype.getMessageId = function() {
          return this.l
     };
     Qi.prototype.getMessageArgs = function() {
          return this.j
     };
     var Ri = function(a, b, c, d, e) {
          this.l = new Date;
          this.A = d && d.l();
          this.o = c && c.l();
          this.v = a;
          this.m = b;
          this.j = e
     };
     _.n = Ri.prototype;
     _.n.getSlot = function() {
          return this.A
     };
     _.n.getService = function() {
          return this.o
     };
     _.n.getLevel = function() {
          return this.v
     };
     _.n.getTimestamp = function() {
          return this.l
     };
     _.n.getMessage = function() {
          return this.m
     };
     _.n.getReference = function() {
          return this.j
     };
     _.n.toString = function() {
          var a = this.l.toTimeString() + ": " + Si[this.v] + ": " + this.m;
          this.j && (a += " Duration: " + (this.l.getTime() - this.j.getTimestamp().getTime()) + "ms.");
          return a
     };
     var Si = ["Debug", "Info", "Warning", "Error", "Fatal"];
     var Ti = null,
          Ui = !1,
          Vi = !1,
          Wi = function() {
               var a = void 0 === a ? _.A : a;
               if (!Vi) {
                    var b = "https:" + _.lh(228) + "loader.js";
                    _.ve(a.document, b);
                    Vi = !0
               }
          },
          Xi = function() {
               var a = void 0 === a ? _.A : a;
               if (_.oa()._pubconsole_disable_) return !1;
               var b = a.document;
               b = void 0 === b ? _.A.document : b;
               b = b.cookie.split("google_pubconsole=");
               if (b = 2 == b.length ? b[1].split(";")[0] : "")
                    if (b = b.split("|"), 0 < b.length && ("1" == b[0] || "0" == b[0])) return !0;
               a = gi(a);
               return null !== pe(a, "google_debug") || null !== pe(a, "dfpdeb") || null !== pe(a, "google_console") || null !== pe(a, "google_force_console") || null !== pe(a, "googfc")
          },
          Zi = _.V(94, function() {
               Xi() && Wi();
               _.Q(_.A, "message", Yi)
          }),
          $i = _.V(93, function() {
               _.oa()._pubconsole_disable_ = !0
          }),
          Yi = function(a) {
               a.source == _.A && "gpt_open_pubconsole" == a.data.type && (a = a.data.slotDomId) && aj(a)
          },
          aj = function(a) {
               a = void 0 === a ? "" : a;
               _.oa && _.oa().console ? _.oa().console.openConsole(a) : (a && (Ti = a), Ui = !0, Wi())
          };
     "complete" === _.A.document.readyState ? Zi() : ih(_.A, Zi);
     na("disablePublisherConsole", $i);
     na("onPubConsoleJsLoad", function() {
          Ui && (_.oa().console.openConsole(Ti), Ti = null, Ui = !1)
     });
     na("openConsole", aj);
     var bj = function() {
               this.j = []
          },
          cj = function(a, b) {
               return _.q(a.j, function(c) {
                    return c.getService() === b
               })
          },
          dj = function(a, b) {
               return _.q(a.j, function(c) {
                    return c.getSlot() === b
               })
          },
          ej = function(a, b) {
               return _.q(a.j, function(c) {
                    return c.getLevel() >= b
               })
          };
     bj.prototype.log = function(a, b, c, d, e) {
          a = new Ri(a, b, void 0 === c ? null : c, void 0 === d ? null : d, void 0 === e ? null : e);
          _.x(47) && !Xi() || this.j.push(a);
          return a
     };
     bj.prototype.info = function(a, b, c, d) {
          return this.log(1, a, b, c, d)
     };
     bj.prototype.H = function(a, b, c, d) {
          return this.log(2, a, b, c, d)
     };
     bj.prototype.error = function(a, b, c, d) {
          return this.log(3, a, b, c, d)
     };
     _.Ia(bj);
     var fj;
     fj = sb(function() {
          var a = _.zf(5),
               b = String;
          var c = void 0 === c ? window : c;
          c = me(c.location.href.match(_.le)[3] || null);
          a = _.Za(a, b(c ? Ee(c) : null));
          a = _.zf(6)[a] || "";
          var d = void 0 === d ? window.document : d;
          a && d.head && (b = document.createElement("meta"), b.httpEquiv = "origin-trial", b.content = a, d.head.appendChild(b))
     });
     _.gj = function(a) {
          var b = void 0 === b ? navigator : b;
          fj();
          b = "scheduling" in b && "isInputPending" in b.scheduling && b.scheduling.isInputPending();
          var c = _.xf(31);
          b && Math.random() < c && setTimeout(function() {
               _.pa("gpt_input_pending", function(d) {
                    _.qa(d);
                    _.y(d, "ctx", a);
                    _.y(d, "corr", _.$e(_.A));
                    var e = Error("inputPending");
                    _.y(d, "stack", ra(e.stack, e.message))
               }, {
                    Ga: 1
               })
          }, 1);
          return b
     };
     var ij = function(a, b) {
               var c = b || hj;
               return function() {
                    var d = this || _.A;
                    d = d.closure_memoize_cache_ || (d.closure_memoize_cache_ = {});
                    var e = c(Pa(a), arguments);
                    return d.hasOwnProperty(e) ? d[e] : d[e] = a.apply(this, arguments)
               }
          },
          hj = function(a, b) {
               a = [a];
               for (var c = b.length - 1; 0 <= c; --c) a.push(typeof b[c], b[c]);
               return a.join("\x0B")
          };
     var jj = function() {};
     jj.prototype.l = function() {
          var a = this.Da(),
               b = eh();
          b ? b.set(a, this) : fh[Pa(a)] = this;
          return a
     };
     var kj = jj.prototype;
     kj.l = ij(kj.l);
     var X, lj, mj, nj, oj, pj, rj, sj, tj, uj, vj, wj, xj, yj, zj, Aj, Bj, Cj, Dj, Ij, Jj, Kj, Lj, Mj, Nj, Oj, Pj, Qj, Rj, Sj, Tj, Uj, Vj, Wj, Xj, Yj, Zj, ak, bk, ck, dk, ek, fk, gk, hk, ik, jk, kk, lk, mk, nk, ok, pk, qk, rk, sk, tk, uk, vk, wk, xk, yk, zk, Ak, Bk, Ck, Dk, Ek, Fk, Gk, Hk, Ik, Jk, Kk, Lk, Mk, Nk, Ok, Pk, Qk, Rk, Sk, Tk;
     X = function(a) {
          return function(b) {
               for (var c = [], d = 0; d < arguments.length; ++d) c[d] = arguments[d];
               return new Qi(a, _.ua(c).concat())
          }
     };
     lj = function(a) {
          return "[" + _.p(a, function(b) {
               return "string" === typeof b ? "'" + b + "'" : _.B(b) ? lj(b) : String(b)
          }).join(", ") + "]"
     };
     mj = function(a, b) {
          b = lj(b);
          b = b.substring(1, b.length - 1);
          return new Qi(96, [a, b])
     };
     nj = X(1);
     oj = X(2);
     pj = X(3);
     _.qj = X(4);
     rj = X(5);
     sj = X(6);
     tj = X(8);
     uj = X(12);
     vj = X(14);
     wj = X(16);
     xj = X(17);
     yj = X(19);
     zj = X(20);
     Aj = X(21);
     Bj = X(22);
     Cj = X(23);
     Dj = X(26);
     Ij = X(27);
     Jj = X(28);
     Kj = X(30);
     Lj = X(31);
     Mj = X(34);
     Nj = X(35);
     Oj = X(36);
     Pj = X(37);
     Qj = X(38);
     Rj = X(40);
     Sj = X(42);
     Tj = X(43);
     Uj = X(44);
     Vj = X(45);
     Wj = X(46);
     Xj = X(47);
     Yj = X(48);
     Zj = X(49);
     ak = X(50);
     bk = X(57);
     ck = X(58);
     dk = X(59);
     ek = X(60);
     fk = X(61);
     gk = X(62);
     hk = X(63);
     ik = X(64);
     jk = X(65);
     kk = X(66);
     lk = X(68);
     mk = X(69);
     nk = X(70);
     ok = X(71);
     pk = X(74);
     qk = X(75);
     rk = X(78);
     sk = X(79);
     tk = X(80);
     uk = X(82);
     vk = X(84);
     wk = X(85);
     xk = X(87);
     yk = X(88);
     zk = X(90);
     Ak = X(92);
     Bk = X(93);
     Ck = X(94);
     Dk = X(95);
     Ek = X(99);
     Fk = X(100);
     Gk = X(101);
     Hk = X(102);
     Ik = X(103);
     Jk = X(104);
     Kk = X(105);
     Lk = X(106);
     Mk = X(107);
     Nk = X(108);
     Ok = X(109);
     Pk = X(110);
     Qk = X(111);
     Rk = X(113);
     Sk = X(114);
     Tk = X(115);
     var Uk = function() {
          this.A = this.j = 0
     };
     _.z(Uk, jj);
     Uk.prototype.Da = function() {
          return new Pi(this)
     };
     Uk.prototype.push = function(a) {
          for (var b = bj.B(), c = 0; c < arguments.length; ++c) try {
               _.La(arguments[c]) && (arguments[c](), this.j++)
          } catch (d) {
               this.A++, window.console && window.console.error && window.console.error("Exception in queued GPT command", d), b.error(Kj(String(d.message)))
          }
          b.info(Lj(String(this.j), String(this.A)));
          return this.j
     };
     var Wk = function() {
          Uk.call(this);
          var a = this;
          this.v = [];
          this.C = !1;
          this.o = this.m = 0;
          this.D = _.V(635, function() {
               a.m = 0;
               Vk(a)
          })
     };
     _.z(Wk, Uk);
     var Xk = function(a) {
               return a.C || !a.v.length ? 0 : _.x(171) ? 1 : _.x(170) ? _.gj(1) ? 1 : 0 : _.x(247) && _.gj(1) ? 2 : 0
          },
          Yk = function(a) {
               a.m || (a.m = setTimeout(a.D, _.xf(23)))
          },
          Vk = function(a) {
               if (a.m) {
                    if (!a.C) return;
                    clearTimeout(a.m);
                    a.m = 0
               }
               for (var b = bj.B(); a.v.length;) {
                    var c = a.v.shift();
                    try {
                         c(), a.j++
                    } catch (e) {
                         a.A++, window.console && window.console.error && window.console.error("Exception in queued GPT command", e), b.error(Kj(String(e.message)))
                    }
                    c = Xk(a);
                    if (1 === c) {
                         Yk(a);
                         break
                    } else 2 === c && (a.o = a.o || _.Fg())
               }
               b.info(Lj(String(a.j), String(a.A)));
               if (a.o) {
                    var d = _.Fg() - a.o;
                    a.o = 0;
                    setTimeout(function() {
                         return void _.pa("gpt_input_pending", function(e) {
                              _.qa(e);
                              _.y(e, "ctx", 4);
                              _.y(e, "corr", _.$e(_.A));
                              _.y(e, "ptr", d)
                         }, {
                              Ga: 1
                         })
                    }, 1)
               }
          },
          Zk = function(a, b) {
               a.v = _.ua(a.v).concat(_.ua(_.q(b, _.La)));
               _.x(173) && 1 === Xk(a) ? Yk(a) : Vk(a)
          };
     Wk.prototype.push = function(a) {
          for (var b = [], c = 0; c < arguments.length; ++c) b[c] = arguments[c];
          this.C = _.x(172);
          Zk(this, b);
          return this.j
     };
     var $k = function() {
          if (_.x(176)) {
               var a = _.oa().cmd;
               if (!a || _.B(a)) {
                    var b = new Wk;
                    _.oa().cmd = b.l();
                    a && 0 < a.length && Zk(b, a)
               }
          } else if (a = _.oa().cmd, !a || _.B(a)) b = new Uk, _.oa().cmd = b.l(), a && 0 < a.length && b.push.apply(b, a)
     };
     $k = _.V(77, $k);
     _.Y = function() {
          this.v = this.v;
          this.G = this.G
     };
     _.Y.prototype.v = !1;
     _.Y.prototype.$a = function() {
          this.v || (this.v = !0, this.l())
     };
     _.Y.prototype.l = function() {
          if (this.G)
               for (; this.G.length;) this.G.shift()()
     };
     _.al = function(a) {
          a && "function" == typeof a.$a && a.$a()
     };
     var bl, dl;
     bl = {};
     _.cl = (bl[3] = "https://s0.2mdn.net/ads/richmedia/studio/mu/templates/hifi/hifi.js", bl);
     dl = {};
     _.el = (dl[3] = "https://s0.2mdn.net/ads/richmedia/studio_canary/mu/templates/hifi/hifi_canary.js", dl);
     var gl, hl;
     _.fl = function(a, b) {
          b = void 0 === b ? {} : b;
          this.root = b.root ? b.root : null;
          this.C = b.rootMargin ? ea(b.rootMargin) : [{
               value: 0,
               type: "px"
          }, {
               value: 0,
               type: "px"
          }, {
               value: 0,
               type: "px"
          }, {
               value: 0,
               type: "px"
          }];
          this.rootMargin = _.p(this.C, function(c) {
               return "" + c.value + c.type
          }).join(" ");
          this.G = ia(b.threshold);
          this.D = a;
          this.j = [];
          this.v = [];
          this.o = !1;
          this.l = null;
          this.m = ub(this.A, 100, this)
     };
     gl = function(a) {
          if (a.root) var b = ja(a.root);
          else {
               var c = _.ce(window);
               b = {
                    top: 0,
                    right: c.width,
                    bottom: c.height,
                    left: 0,
                    width: c.width,
                    height: c.height
               }
          }
          a = _.p(a.C, function(d, e) {
               return "px" == d.type ? d.value : d.value * (e % 2 ? b.width : b.height) / 100
          });
          return {
               top: b.top - a[0],
               right: b.right + a[1],
               bottom: b.bottom + a[2],
               left: b.left - a[3],
               width: b.width + a[1] + a[3],
               height: b.height + a[0] + a[2]
          }
     };
     hl = function(a, b, c) {
          if (!b || b.isIntersecting != c.isIntersecting) return !0;
          var d = b.intersectionRatio,
               e = c.intersectionRatio;
          return d == e ? !1 : _.ab(a.G, function(f) {
               return f < d != f < e
          })
     };
     _.fl.prototype.A = function() {
          var a = this,
               b = gl(this);
          _.H(this.j, function(c) {
               var d = c.target,
                    e = ja(d),
                    f = e.width * e.height;
               var g = Math.max(b.top, e.top);
               var h = Math.min(b.right, e.right),
                    k = Math.min(b.bottom, e.bottom),
                    l = Math.max(b.left, e.left),
                    m = h - l,
                    t = k - g;
               g = 0 <= m && 0 <= t ? {
                    top: g,
                    right: h,
                    bottom: k,
                    left: l,
                    width: m,
                    height: t
               } : null;
               h = !!g;
               k = g ? g.width * g.height : 0;
               l = window.performance;
               d = {
                    boundingClientRect: e,
                    intersectionRatio: f ? k / f : h ? 1 : 0,
                    intersectionRect: g || {
                         top: 0,
                         bottom: 0,
                         left: 0,
                         right: 0,
                         width: 0,
                         height: 0
                    },
                    isIntersecting: h,
                    rootBounds: b,
                    target: d,
                    time: l && l.now ? l.now() : 0
               };
               hl(a, c.Mb, d) && a.v.push(d);
               c.Mb = d
          });
          this.v.length && this.D(il(this), this)
     };
     _.fl.prototype.observe = function(a) {
          _.ab(this.j, function(b) {
               return b.target == a
          }) || (this.j.push({
               target: a,
               Mb: null
          }), this.A(), this.o || (this.o = !0, _.Q(_.A, "scroll", this.m), _.Q(_.A, "resize", this.m), _.A.MutationObserver && !this.l && (this.l = new MutationObserver(this.m), this.l.observe(_.A.document, {
               attributes: !0,
               childList: !0,
               characterData: !0,
               subtree: !0
          }))))
     };
     _.fl.prototype.unobserve = function(a) {
          this.j = _.q(this.j, function(b) {
               return b.target != a
          });
          0 == this.j.length && this.disconnect()
     };
     _.fl.prototype.disconnect = function() {
          this.o = !1;
          this.j.length = 0;
          _.R(_.A, "scroll", this.m);
          _.R(_.A, "resize", this.m);
          this.l && (this.l.disconnect(), this.l = null)
     };
     var il = function(a) {
          var b = _.ua(a.v).concat();
          a.v.length = 0;
          return b
     };
     var kl;
     kl = function() {
          return 0 != _.jl(document)
     };
     _.jl = function(a) {
          return {
               visible: 1,
               hidden: 2,
               prerender: 3,
               preview: 4,
               unloaded: 5
          } [a.visibilityState || a.webkitVisibilityState || a.mozVisibilityState || ""] || 0
     };
     _.ll = function(a) {
          var b;
          a.visibilityState ? b = "visibilitychange" : a.mozVisibilityState ? b = "mozvisibilitychange" : a.webkitVisibilityState && (b = "webkitvisibilitychange");
          return b
     };
     _.ml = function(a) {
          return null != a.hidden ? a.hidden : null != a.mozHidden ? a.mozHidden : null != a.webkitHidden ? a.webkitHidden : null
     };
     var ol, nl;
     ol = function() {
          this.wasPlaTagProcessed = !1;
          this.wasReactiveAdConfigReceived = {};
          this.adCount = {};
          this.wasReactiveAdVisible = {};
          this.stateForType = {};
          this.reactiveTypeEnabledInAsfe = {};
          this.wasReactiveTagRequestSent = !1;
          this.reactiveTypeDisabledByPublisher = {};
          this.tagSpecificState = {};
          this.improveCollisionDetection = 1;
          this.messageValidationEnabled = !1;
          this.floatingAdsStacking = new nl
     };
     _.pl = function(a) {
          a.google_reactive_ads_global_state ? null == a.google_reactive_ads_global_state.floatingAdsStacking && (a.google_reactive_ads_global_state.floatingAdsStacking = new nl) : a.google_reactive_ads_global_state = new ol;
          return a.google_reactive_ads_global_state
     };
     nl = function() {
          this.maxZIndexRestrictions = {};
          this.nextRestrictionId = 0;
          this.maxZIndexListeners = []
     };
     var ql, ul, vl;
     ql = 728 * 1.38;
     _.rl = function(a) {
          return a.innerHeight >= a.innerWidth
     };
     _.tl = function(a) {
          var b = _.sl(a).clientWidth;
          a = a.innerWidth;
          return b && a ? b / a : 0
     };
     ul = function(a) {
          var b = _.sl(_.A).clientWidth;
          return b ? b > (void 0 === a ? 420 : a) ? 32768 : 320 > b ? 65536 : 0 : 16384
     };
     vl = function() {
          var a = _.tl(_.A);
          return a ? 1.05 < a ? 262144 : .95 > a ? 524288 : 0 : 131072
     };
     _.sl = function(a) {
          a = a.document;
          var b = {};
          a && (b = "CSS1Compat" == a.compatMode ? a.documentElement : a.body);
          return b || {}
     };
     var wl, xl;
     wl = function(a) {
          try {
               if (!a.localStorage) return !1;
               a.localStorage.setItem("__storage_test__", "__storage_test__");
               var b = a.localStorage.getItem("__storage_test__");
               a.localStorage.removeItem("__storage_test__");
               return "__storage_test__" == b
          } catch (c) {
               return !1
          }
     };
     _.yl = function(a) {
          try {
               if (!wl(a) || !a.localStorage) return null;
               var b = a.localStorage.getItem("__lsv__");
               if (!b) return [];
               try {
                    var c = JSON.parse(b)
               } catch (d) {}
               return !_.B(c) || _.ab(c, function(d) {
                    return !Number.isInteger(d)
               }) ? (a.localStorage.removeItem("__lsv__"), []) : xl(c)
          } catch (d) {
               return null
          }
     };
     xl = function(a) {
          a = void 0 === a ? [] : a;
          var b = Date.now();
          return _.q(a, function(c) {
               return 36E5 > b - c
          })
     };
     _.zl = function(a) {
          return !!a && 1 > a.length
     };
     var Al = !1,
          Bl = "",
          Cl = function(a) {
               a = a.match(/[\d]+/g);
               if (!a) return "";
               a.length = 3;
               return a.join(".")
          };
     (function() {
          if (navigator.plugins && navigator.plugins.length) {
               var a = navigator.plugins["Shockwave Flash"];
               if (a && (Al = !0, a.description)) {
                    Bl = Cl(a.description);
                    return
               }
               if (navigator.plugins["Shockwave Flash 2.0"]) {
                    Al = !0;
                    Bl = "2.0.0.11";
                    return
               }
          }
          if (navigator.mimeTypes && navigator.mimeTypes.length && (a = navigator.mimeTypes["application/x-shockwave-flash"], Al = !(!a || !a.enabledPlugin))) {
               Bl = Cl(a.enabledPlugin.description);
               return
          }
          if ("undefined" != typeof ActiveXObject) {
               try {
                    var b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
                    Al = !0;
                    Bl = Cl(b.GetVariable("$version"));
                    return
               } catch (c) {}
               try {
                    b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
                    Al = !0;
                    Bl = "6.0.21";
                    return
               } catch (c) {}
               try {
                    b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), Al = !0, Bl = Cl(b.GetVariable("$version"))
               } catch (c) {}
          }
     })();
     _.Dl = Al;
     _.El = Bl;
     _.Fl = function(a, b, c, d, e) {
          var f = c;
          f && (f = "?" + f);
          b = (void 0 === e ? "//tpc.googlesyndication.com" : e) + ("/safeframe/" + b + "/html/container.html" + f);
          e = a;
          for (f = 0; e != e.parent;) f++, e = e.parent;
          (e = f) && (b += (c ? "&" : "?") + "n=" + e);
          (c = d) || (c = Je(a, !1));
          return (c ? "https:" : "http:") + b
     };
     var Gl, Hl, Il;
     Gl = ["allow-modals", "allow-orientation-lock", "allow-presentation"];
     Hl = ["allow-top-navigation"];
     Il = ["allow-same-origin"];
     _.Jl = Ne(_.ua(Gl).concat(_.ua(Hl)));
     _.Kl = Ne(_.ua(Gl).concat(_.ua(Il)));
     _.Ll = Ne(_.ua(Gl).concat(_.ua(Hl), _.ua(Il)));
     var Ml = function(a) {
          _.K(this, a, null, null)
     };
     _.G(Ml, _.J);
     Ml.prototype.getTime = function() {
          return _.L(this, 4)
     };
     var Nl;
     Nl = function(a) {
          this.o = a.time;
          this.C = a.Bc;
          this.A = a.Ac;
          this.j = this.l = -1;
          this.v = this.m = 0
     };
     _.Ol = function(a, b) {
          a.C && a.A ? (a.v += b - a.o, 1E3 <= a.v && (a.l = b), 0 < a.j || (a.m += b - a.o)) : a.v = 0;
          a.o = b
     };
     var Pl, Ql, Rl, Sl, Wl, Yl, Ul, Zl, Xl, Vl;
     Pl = [.05, .1, .2, .5];
     Ql = [0, .5, 1];
     Rl = function(a) {
          a = ue(a);
          if (!a) return -1;
          a = _.ag(a);
          return -12245933 == a.width || -12245933 == a.height ? -1 : a.width * a.height
     };
     Sl = function(a, b) {
          return 0 > a ? [] : _.p(Pl, function(c) {
               return Math.min(a / b * c, 1)
          })
     };
     _.Tl = function() {
          return Math.round(performance.now())
     };
     Wl = function(a) {
          this.l = a.Ka;
          this.m = a.ab;
          this.G = a.Yc;
          this.A = null;
          this.o = a.ua;
          this.C = !1;
          this.v = Ul(this);
          this.F = a.Rc || !1;
          this.D = a.Qc || !1;
          this.j = null;
          this.D && Vl(this)
     };
     Yl = function(a, b) {
          if (a.v) {
               if (null != a.A) {
                    try {
                         Xl(a, _.Tl(), 0, 0, 0, !1)
                    } catch (g) {
                         a.o && a.o(g)
                    }
                    a.v && a.v.unobserve(a.m);
                    a.C = !1;
                    a.j = null
               }
               a.A = b;
               a.v.observe(a.m);
               a.C = !0;
               if (a.D) {
                    b = _.Tl();
                    var c = a.m.getBoundingClientRect(),
                         d = c.width * c.height;
                    a: {
                         var e = 0;
                         if (!_.ml(a.l.document)) {
                              e = ue(a.l);
                              if (!e) {
                                   c = -1;
                                   break a
                              }
                              var f = $f(e.document);
                              e = Math.min(f.clientWidth, c.left + c.width) - Math.max(0, c.left);
                              c = Math.min(f.clientHeight, c.top + c.height) - Math.max(0, c.top);
                              e = 0 < e && 0 < c ? e * c : 0
                         }
                         c = e
                    }
                    a.j = new Nl({
                         time: b,
                         Bc: 0 < d ? c / d > (242500 < d ? .3 : .5) : !1,
                         Ac: 1 == _.jl(a.l.document)
                    })
               }
          }
     };
     Ul = function(a) {
          var b = a.m.offsetWidth * a.m.offsetHeight,
               c = Rl(a.l);
          b = _.ua(Ql).concat(_.ua(Sl(c, b)));
          _.fa(b);
          return _.A.IntersectionObserver ? new _.A.IntersectionObserver(function(d) {
               return Zl(a, d)
          }, {
               threshold: b
          }) : new _.fl(function(d) {
               return Zl(a, d)
          }, {
               threshold: b
          })
     };
     Zl = function(a, b) {
          try {
               var c = Rl(a.l);
               _.H(b, function(d) {
                    var e = Math.round(d.time),
                         f = d.boundingClientRect.width * d.boundingClientRect.height,
                         g = d.intersectionRect.width * d.intersectionRect.height;
                    d = d.isIntersecting;
                    if (a.D && a.j) {
                         var h = a.j,
                              k = 0 < f ? g / f > (242500 < f ? .3 : .5) : !1;
                         _.Ol(h, e);
                         h.C = k
                    }
                    a.F && Xl(a, e, f, g, c, d)
               })
          } catch (d) {
               a.o && a.o(d)
          }
     };
     Xl = function(a, b, c, d, e, f) {
          if (null == a.A) throw Error("Not Attached.");
          var g = new Ml;
          c = _.N(g, 1, c);
          d = _.N(c, 2, d);
          e = _.N(d, 3, e);
          b = _.N(e, 4, b);
          b = _.N(b, 5, f);
          f = new nd;
          e = _.L(b, 4);
          null != e && null != e && od(f, 4, e);
          e = _.L(b, 2);
          null != e && null != e && od(f, 2, e);
          e = _.L(b, 1);
          null != e && null != e && od(f, 1, e);
          e = _.L(b, 3);
          null != e && null != e && od(f, 3, e);
          e = _.L(b, 5);
          null != e && (b = e, null != b && (md(f.j, 40), f.j.j.push(b ? 1 : 0)));
          b = new Uint8Array(f.m + f.j.length());
          d = f.l;
          c = d.length;
          for (g = e = 0; g < c; g++) {
               var h = d[g];
               b.set(h, e);
               e += h.length
          }
          d = ld(f.j);
          b.set(d, e);
          f.l = [b];
          f = _.hd(b, 4);
          Pg(a.G, "1", 10, f, void 0, a.A)
     };
     Vl = function(a) {
          var b = _.ll(a.l.document);
          b && _.Q(a.l.document, b, function() {
               if (a.j) {
                    var c = a.j,
                         d = 1 == _.jl(a.l.document);
                    _.Ol(c, _.Tl());
                    c.A = d
               }
          })
     };
     var $l = function() {
          var a = {};
          return a.adsense_channel_ids = "channel", a.adsense_ad_types = "ad_type", a.adsense_ad_format = "format", a.adsense_background_color = "color_bg", a.adsense_border_color = "color_border", a.adsense_link_color = "color_link", a.adsense_text_color = "color_text", a.adsense_url_color = "color_url", a.page_url = "url", a.adsense_allow_expandable_ads = "ea", a.adsense_content_section = "region", a.adsense_cpm = "cpm", a.adsense_encoding = "oe", a.adsense_family_safe = "adsafe", a.adsense_flash_version = "flash", a.adsense_font_face = "f", a.adsense_font_size = "fs", a.adsense_hints = "hints", a.adsense_host = "host", a.adsense_host_channel = "h_ch", a.adsense_host_tier_id = "ht_id", a.adsense_keyword_type = "kw_type", a.adsense_keywords = "kw", a.adsense_relevant_content = "contents", a.adsense_targeting = "targeting", a.adsense_targeting_types = "targeting", a.adsense_test_mode = "adtest", a.alternate_ad_iframe_color = "alt_color", a.alternate_ad_url = "alternate_ad_url", a.demographic_age = "cust_age", a.demographic_ch = "cust_ch", a.demographic_gender = "cust_gender", a.demographic_interests = "cust_interests", a.demographic_job = "cust_job", a.demographic_l = "cust_l", a.demographic_lh = "cust_lh", a.demographic_u_url = "cust_u_url", a.demographic_unique_id = "cust_id", a.document_language = "hl", a.geography_override_city = "gcs", a.geography_override_country = "gl", a.google_content_recommendation_ad_positions = "ad_pos", a.matched_content_columns_num = "cr_col", a.matched_content_rows_num = "cr_row", a.matched_content_ui_type = "crui", a.matched_content_use_square_imgs = "cr_sq_img", a
     };
     var bm = function(a) {
          var b = this;
          this.addEventListener = W(86, function(c, d) {
               a.addEventListener(c, d);
               return b
          });
          this.getSlots = W(573, function() {
               return _.p(a.m, function(c) {
                    return c.l()
               })
          });
          this.getSlotIdMap = W(574, function() {
               var c = a.I,
                    d = {},
                    e;
               for (e in c) d[e] = c[e].l();
               return d
          });
          this.enable = W(87, function() {
               return am(a)
          }, _.Li);
          this.getName = W(575, function() {
               return a.da()
          })
     };
     _.z(bm, gh);
     var cm, dm, gm;
     cm = "";
     dm = null;
     _.em = function() {
          cm || (cm = _.yf(2) || "1-0-37");
          return cm
     };
     _.fm = function() {
          if (null == dm) {
               if (_.x(246)) var a = si();
               else {
                    a = _.zf(1);
                    for (var b = [], c = 0; c < a.length; c += 2) ne(a[c], a[c + 1], b);
                    a = b.join("&")
               }
               dm = a
          }
          return dm
     };
     gm = function(a) {
          var b = bj.B(),
               c = new _.yh;
          if (!a || !_.C(a)) return null;
          var d = !1;
          _.u(a, function(e, f) {
               switch (f) {
                    case "allowOverlayExpansion":
                         "boolean" === typeof e ? _.N(c, 1, a.allowOverlayExpansion) : (b.error(Gk("allowOverlayExpansion", String(a.allowOverlayExpansion))), d = !0);
                         break;
                    case "allowPushExpansion":
                         "boolean" === typeof e ? _.N(c, 2, a.allowPushExpansion) : (b.error(Gk("allowPushExpansion", String(a.allowPushExpansion))), d = !0);
                         break;
                    case "sandbox":
                         !0 === e ? _.zh(c, a.sandbox) : (b.error(Gk("sandbox", String(a.sandbox))), d = !0);
                         break;
                    default:
                         b.H(Fk(f))
               }
          });
          return d ? null : c
     };
     var hm = function(a, b) {
          this.l = a;
          this.j = b
     };
     hm.prototype.getWidth = function() {
          return this.l
     };
     hm.prototype.getHeight = function() {
          return this.j
     };
     var lm = function(a, b, c) {
          var d = this,
               e = bj.B();
          this.set = W(40, function(f, g) {
               if ("string" !== typeof f || !g || void 0 === $l()[f]) return e.H(mj("Slot.set", [f, g]), null, a), d;
               var h = eb(_.P(c, Bd, 3), function(k) {
                    return rh(k) === f
               });
               h ? th(h, [g]) : (h = sh(new Bd, f), vd(h, 2, g), Cd(c, 3, h));
               return d
          });
          this.get = W(41, function(f) {
               if ("string" !== typeof f) return e.H(mj("Slot.get", [f]), null, a), null;
               var g = eb(_.P(c, Bd, 3), function(h) {
                    return rh(h) === f
               });
               return (g = g && _.L(g, 2)) ? g[0] : null
          });
          this.getAttributeKeys = W(42, function() {
               return _.p(_.P(c, Bd, 3), function(f) {
                    return rh(f)
               })
          });
          this.addService = W(43, function(f) {
               f = hh(f, b);
               a.addService(f);
               return d
          });
          this.defineSizeMapping = W(44, function(f) {
               if (!_.B(f)) throw Error("Size mapping has to be an array");
               f = _.p(f, Uh);
               Ad(c, 6, f);
               return d
          }, function(f, g) {
               _.Li(f, g);
               We("Incorrect usage of googletag.Slot defineSizeMapping: " + g.message);
               return d
          });
          this.setClickUrl = W(45, function(f) {
               if ("string" !== typeof f) return e.H(mj("Slot.setClickUrl", [f]), null, a), d;
               _.N(c, 7, f);
               return d
          });
          this.setCategoryExclusion = W(46, function(f) {
               "string" !== typeof f || vb(f) ? e.H(mj("Slot.setCategoryExclusion", [f]), null, a) : (_.fb(_.L(c, 8), f) || vd(c, 8, f), e.info(vj(f), null, a));
               return d
          });
          this.clearCategoryExclusions = W(47, function() {
               _.N(c, 8, []);
               e.info(wj(), null, a);
               return d
          });
          this.getCategoryExclusions = W(48, function() {
               return _.L(c, 8).slice()
          });
          this.setTargeting = W(49, function(f, g) {
               im(a, c, f, g);
               return d
          });
          this.updateTargetingFromMap = W(649, function(f) {
               jm(a, c, f);
               return d
          });
          this.clearTargeting = W(50, function(f) {
               if (void 0 === f) return Nh(c, []), e.info(yj(a.getAdUnitPath()), null, a), d;
               var g = _.P(c, Bd, 9),
                    h = _.db(g, function(k) {
                         return rh(k) === f
                    });
               if (0 > h) return e.H(Hk(f, a.getAdUnitPath()), null, a), d;
               _.hb(g, h);
               Nh(c, g);
               e.info(Ik(f, a.getAdUnitPath()), null, a);
               return d
          });
          this.getTargeting = W(51, function(f) {
               if ("string" !== typeof f) return e.H(mj("Slot.getTargeting", [f]), null, a), [];
               var g = eb(_.P(c, Bd, 9), function(h) {
                    return rh(h) === f
               });
               return g ? _.L(g, 2).slice() : []
          });
          this.getTargetingKeys = W(52, function() {
               return _.p(_.P(c, Bd, 9), function(f) {
                    return rh(f)
               })
          });
          this.setCollapseEmptyDiv = W(53, function(f, g) {
               g = void 0 === g ? !1 : g;
               if ("boolean" !== typeof f || "boolean" !== typeof g) return e.H(mj("Slot.setCollapseEmptyDiv", [f, g]), null, a), d;
               _.N(c, 10, f);
               _.N(c, 11, f && g);
               _.pa("gpt_ced", function(h) {
                    var k = _.M(c, 11) ? "t" : "f";
                    _.y(h, "sc", k);
                    _.y(h, "level", "slot");
                    _.qa(h)
               });
               g && !f && e.H(zj(a.m.toString()), null, a);
               return d
          });
          this.getAdUnitPath = W(54, function() {
               return a.getAdUnitPath()
          });
          this.getSlotElementId = W(598, function() {
               return a.getSlotElementId()
          });
          this.setForceSafeFrame = W(55, function(f) {
               if ("boolean" !== typeof f) return e.H(pk("Slot.setForceSafeFrame", String(f)), null, a), d;
               _.N(c, 12, f);
               return d
          });
          this.setSafeFrameConfig = W(56, function(f) {
               var g = gm(f);
               if (!g) return e.error(mj("Slot.setSafeFrameConfig", [f]), null, a), d;
               _.zd(c, 13, g);
               return d
          });
          this.getResponseInformation = W(355, function() {
               return a.$
          });
          this.getName = W(170, function() {
               window.console && console.error && console.error("getName on googletag.Slot is deprecated and will be removed. Use getAdUnitPath instead.");
               var f = new _.Ci("slot_get_name");
               _.qa(f);
               _.Ei(f);
               return a.J
          });
          this.getSlotId = W(579, function() {
               return a.m.l()
          });
          this.getServices = W(580, function() {
               return _.p(a.K, function(f) {
                    return f.l()
               })
          });
          this.getSizes = W(581, function(f, g) {
               return (f = _.Vh(c, f, g)) ? _.p(f, function(h) {
                    return _.M(h, 3) ? "fluid" : new hm(_.L(h, 1), _.L(h, 2))
               }) : null
          });
          this.getClickUrl = W(582, function() {
               return null != _.L(c, 7) ? _.L(c, 7) : ""
          });
          this.getTargetingMap = W(583, function() {
               for (var f = {}, g = _.r(_.P(c, Bd, 9)), h = g.next(); !h.done; h = g.next()) h = h.value, f[rh(h)] = _.L(h, 2);
               return f
          });
          this.getOutOfPage = W(584, function() {
               return a.getOutOfPage()
          });
          this.getCollapseEmptyDiv = W(585, function() {
               return null != _.L(c, 10) ? _.M(c, 10) : null
          });
          this.getDivStartsCollapsed = W(586, function() {
               return null != _.L(c, 11) ? _.M(c, 11) : null
          });
          this.getContentUrl = W(587, function() {
               return a.xa()
          });
          this.getFirstLook = W(588, function() {
               We("The getFirstLook method of googletag.Slot is deprecated. Please update your code to no longer call this method.");
               return 0
          });
          this.getEscapedQemQueryId = W(591, function() {
               return _.km(a)
          });
          this.getHtml = W(592, function() {
               return a.getHtml()
          })
     };
     _.z(lm, gh);
     var mm = function(a) {
          this.getId = W(593, function() {
               return a.m
          });
          this.getAdUnitPath = W(594, function() {
               return a.getAdUnitPath()
          });
          this.getName = W(595, function() {
               var b = new _.Ci("slot_id_get_name");
               _.qa(b);
               _.Ei(b);
               return a.v
          });
          this.toString = W(596, function() {
               return a.toString()
          });
          this.getDomId = W(597, function() {
               return a.j
          })
     };
     _.z(mm, gh);
     var nm = function(a) {
               switch (a) {
                    case 1:
                         return 2;
                    case 2:
                         return 1;
                    case 4:
                         return 8;
                    default:
                         return null
               }
          },
          om = sb(function() {
               var a = {
                    REWARDED: 3
               };
               _.x(35) && (a.TOP_ANCHOR = 1, a.BOTTOM_ANCHOR = 2, a.INTERSTITIAL = 4);
               return a
          }),
          pm = function() {
               var a = _.oa();
               if (!a.enums) {
                    var b = om();
                    b && (a.enums = {
                         OutOfPageFormat: b
                    })
               }
          };
     var qm, um;
     qm = {
          Gd: "impressionViewable",
          Nd: "rewardedSlotCanceled",
          Od: "rewardedSlotClosed",
          Pd: "rewardedSlotCompleted",
          Qd: "rewardedSlotGranted",
          Rd: "rewardedSlotReady",
          Sd: "slotAdded",
          Td: "slotOnload",
          Ud: "slotRenderEnded",
          Vd: "slotRequested",
          Wd: "slotResponseReceived",
          Xd: "slotVisibilityChanged"
     };
     _.rm = function(a, b) {
          this.slot = a;
          this.serviceName = b
     };
     _.sm = function(a, b, c) {
          _.rm.call(this, a, c);
          this.isEmpty = b;
          this.slotContentChanged = !0;
          this.sourceAgnosticLineItemId = this.sourceAgnosticCreativeId = this.lineItemId = this.labelIds = this.creativeTemplateId = this.creativeId = this.campaignId = this.advertiserId = this.size = null;
          this.isBackfill = !1;
          this.companyIds = this.yieldGroupIds = null
     };
     _.z(_.sm, _.rm);
     _.tm = function(a, b) {
          a.size = b;
          return a
     };
     um = function(a, b, c) {
          _.rm.call(this, a, b);
          this.inViewPercentage = c
     };
     _.z(um, _.rm);
     var vm = function() {
          _.rm.apply(this, arguments)
     };
     _.z(vm, _.rm);
     var wm = function() {
          _.rm.apply(this, arguments)
     };
     _.z(wm, _.rm);
     var xm = function() {
          _.rm.apply(this, arguments)
     };
     _.z(xm, _.rm);
     var ym = function() {
          this.m = [];
          this.I = {};
          this.j = !1;
          this.C = {};
          this.log = bj.B();
          this.log.info(Nj(this.da()), this)
     };
     _.z(ym, jj);
     ym.prototype.Da = function() {
          return new bm(this)
     };
     ym.prototype.getVersion = function() {
          return "unversioned"
     };
     var am = function(a) {
          a.j || (a.j = !0, a.yb())
     };
     ym.prototype.Hb = function(a) {
          this.m.push(a);
          var b = new wm(a.l(), this.da());
          zm(this, "slotAdded", b);
          this.I[_.S(a)] = a;
          this.log.info(Rj(this.da(), a.getAdUnitPath()), this, a)
     };
     ym.prototype.destroySlots = function(a) {
          var b = this.m,
               c = _.q(b, function(d) {
                    return _.fb(a, d)
               });
          _.H(c, function(d) {
               _.ib(b, d)
          });
          return c
     };
     var Am = function(a, b) {
          _.pa("gpt_callback_usage", function(c) {
               _.qa(c);
               _.y(c, "type", b);
               var d = 0,
                    e = 0;
               _.H(a.m, function(f) {
                    0 < f.F && d++;
                    f.L && e++
               });
               _.y(c, "nfetch", d);
               _.y(c, "nrend", e)
          })
     };
     ym.prototype.addEventListener = function(a, b) {
          if (!_.La(b) || "string" !== typeof a) return a = mj("Service.addEventListener", [a, b]), this.log.H(a, this), this;
          if (!Ob(qm, a)) return this.log.H(Bk(a), this), this;
          _.B(this.C[a]) || (this.C[a] = []);
          this.C[a].push(b);
          Am(this, a);
          return this
     };
     var zm = function(a, b, c) {
          var d = a.C[b];
          _.B(d) && Ze(function() {
               for (var e = _.r(d), f = e.next(); !f.done; f = e.next()) {
                    f = f.value;
                    try {
                         f(c)
                    } catch (k) {
                         f = k && "string" === typeof k.name ? k.name : null;
                         var g = k && "string" === typeof k.message ? k.message : null,
                              h = "";
                         f && g ? h = f + ": " + g : f ? h = f : g && (h = g);
                         a.log.H(Ak(h), a);
                         window.console && console.error && console.error(k)
                    }
               }
          })
     };
     var Bm = function() {
          var a = this;
          this.j = {};
          this.l = bj.B();
          this.v = this.l.info(tj());
          ih(window, function() {
               return _.V(92, a.m)
          })
     };
     Bm.prototype.add = function(a) {
          this.j[a.da()] = a
     };
     Bm.prototype.find = function(a) {
          var b = null;
          a in this.j && (b = this.j[a]);
          return b
     };
     var Cm = function() {
          var a = Bm.B();
          _.Xg(6);
          _.u(a.j, function(b) {
               b.j ? a.l.info(Qj(), b) : am(b)
          })
     };
     Bm.prototype.destroySlots = function(a) {
          _.u(this.j, function(b) {
               return b.destroySlots(a)
          })
     };
     Bm.prototype.m = function() {
          this.l.info(nj(), null, null, this.v)
     };
     _.Ia(Bm);
     Bm.prototype.m = _.V(92, Bm.prototype.m);
     na("enableServices", _.V(91, function() {
          Cm()
     }));
     var Dm = function(a, b, c) {
          this.v = a;
          this.Ua = b;
          this.m = this.v + "_" + this.Ua;
          this.j = c
     };
     _.z(Dm, jj);
     Dm.prototype.getAdUnitPath = function() {
          return this.v
     };
     Dm.prototype.B = function() {
          return this.Ua
     };
     Dm.prototype.toString = function() {
          return this.m
     };
     Dm.prototype.Da = function() {
          return new mm(this)
     };
     Dm.prototype.getInstance = Dm.prototype.B;
     var Gm = function(a, b, c, d, e) {
               var f = this;
               this.C = e;
               this.J = a;
               if (this.C) {
                    Mh(_.N(this.C, 1, a), d);
                    c = Sh(c);
                    e = c.maxWidth;
                    var g = c.maxHeight,
                         h = c.minWidth,
                         k = c.minHeight;
                    Ad(this.C, 5, c.vc);
                    null != e && null != g && (_.N(this.C, 16, e), _.N(this.C, 17, g), _.N(this.C, 18, h), _.N(this.C, 19, k))
               }
               this.m = new Dm(a, b, d);
               this.K = [];
               this.la = null;
               this.v = bj.B();
               this.v.info(oj(this.m.toString()), null, this);
               this.L = this.ya = null;
               this.xa = function() {
                    return ""
               };
               this.Ha = !0;
               this.na = !1;
               this.ea = 0;
               this.P = !1;
               this.sa = "";
               this.I = this.Fa = !1;
               this.O = null;
               this.Ja = ub(function(l) {
                    null !== l && (l = new um(f.l(), "publisher_ads", l), _.Em(f, "slotVisibilityChanged", l))
               }, 200);
               this.A = ni(this.J);
               this.Ya = "";
               this.$ = this.aa = null;
               this.ja = !1;
               this.F = 0;
               this.Ia = this.ma = this.ka = null;
               this.qa = !1;
               this.Z = this.fa = this.va = this.Y = null;
               _.Fm(this);
               this.X = "";
               this.ra = new _.uh;
               this.R = this.wa = this.V = null;
               this.G = 0;
               this.j = null;
               this.ga = this.D = 0;
               this.za = this.Ba = !1;
               this.ta = null
          },
          im, jm, Jm, Km, Lm, Mm, Nm, Om, Um;
     _.z(Gm, jj);
     _.n = Gm.prototype;
     _.n.Da = function() {
          return new lm(this, ym, this.C)
     };
     _.n.addService = function(a) {
          var b = Bm.B();
          if (!Ob(b.j, a)) return this.v.H(Ck(this.m.toString()), null, this), this;
          for (b = 0; b < this.K.length; ++b)
               if (a == this.K[b]) return this.v.H(uj(a.da(), this.m.toString()), a, this), this;
          this.K.push(a);
          a.Hb(this);
          return this
     };
     _.n.getAdUnitPath = function() {
          return this.J
     };
     _.n.B = function() {
          return this.m.B()
     };
     _.n.getSlotElementId = function() {
          return this.m.j
     };
     _.T = function(a, b) {
          b = void 0 === b ? document : b;
          return a.ka || b.getElementById(a.m.j)
     };
     _.S = function(a) {
          return a.J + "_" + a.m.B()
     };
     im = function(a, b, c, d) {
          var e = null;
          _.B(d) ? e = d : _.Ka(d) ? e = _.kb(d) : d ? e = [d] : _.x(262) || (e = []);
          var f = "string" === typeof c && !vb(c),
               g = _.x(262) ? !!e && bb(e, function(h) {
                    return "string" === typeof h
               }) : !0;
          f && g ? (_.x(262) || (e = _.p(e, function(h) {
               return String(h)
          })), (d = eb(_.P(b, Bd, 9), function(h) {
               return rh(h) === c
          })) ? th(d, e) : (d = th(sh(new Bd, c), e), Cd(b, 9, d)), a.v.info(xj(c, e.join(), a.getAdUnitPath()), null, a)) : a.v.H(mj("Slot.setTargeting", [c, d]), null, a)
     };
     jm = function(a, b, c) {
          if (null == c || "object" !== typeof c) a.v.error(mj("Slot.updateTargetingFromMap", [c]), null, a);
          else
               for (var d = _.r(Object.keys(c)), e = d.next(); !e.done; e = d.next()) e = e.value, im(a, b, e, c[e])
     };
     Gm.prototype.getOutOfPage = function() {
          return this.na
     };
     Jm = function(a, b) {
          if (!_.T(a)) return a.v.error(Aj(a.m.toString()), null, a), !1;
          var c = a.m.j,
               d = _.T(a, _.A.document);
          if (!d) return a.v.error(Bj(c, a.m.toString()), null, a), !1;
          c = a.la;
          return "string" === typeof c && 0 < c.length ? (_.Hm(a), d.innerHTML = c, _.Im(a, b), !0) : !1
     };
     Km = function(a, b, c) {
          c = void 0 === c ? null : c;
          if (a.ja && (_.pa("gpt_mult_disp", function(d) {
                    _.y(d, "iu", a.J);
                    _.y(d, "id", a.getSlotElementId());
                    _.y(d, "ac", a.j ? "1" : "0");
                    _.qa(d)
               }), _.x(89))) return;
          a.ka = c;
          a.Ha && !_.T(a) ? a.v.H(Cj(a.J, a.m.j), null, a) : (a.ja = !0, _.H(a.K, function(d) {
               d.j && d.zb(b, a)
          }))
     };
     Lm = function(a) {
          a.ya = a.v.info(pj(a.getAdUnitPath()), null, a);
          Pg(_.ai.B(), "7", 9, a.F - 1, 0, a.o);
          var b = new xm(a.l(), "publisher_ads");
          _.Em(a, "slotRequested", b);
          a.L = null
     };
     Mm = function(a, b) {
          a.xa = b
     };
     _.Hm = function(a) {
          a.L = a.v.info(rj(a.getAdUnitPath()), null, a)
     };
     _.Im = function(a, b) {
          a.v.info(sj(a.getAdUnitPath()), null, a, a.L);
          _.Em(a, "slotRenderEnded", b)
     };
     Gm.prototype.loaded = function() {
          var a = new vm(this.l(), "publisher_ads");
          _.Em(this, "slotOnload", a);
          _.Rg(_.ai.B(), "6", this.o);
          _.x(86) && this.j && _.L(this.j, 4) && bh()
     };
     Nm = function(a) {
          a.I = !1;
          a.O = null;
          a.$ = null;
          a.j = null;
          a.wa = null;
          a.R = null;
          a.X = "";
          a.ta = null;
          a.fa = null;
          a.Z = null
     };
     Om = function(a) {
          var b = a.D ? _.Fg() - a.D : 0;
          return Math.round((a.ga + b) / 1E3)
     };
     _.km = function(a) {
          return a.j && _.L(a.j, 34) || ""
     };
     Gm.prototype.getHtml = function() {
          return _.Pm(this) ? (window.console && console.warn && console.warn("This ad's html cannot be accessed using the getHtml method on googletag.Slot. Returning the empty string instead."), "") : this.j && _.L(this.j, 4) || ""
     };
     _.Pm = function(a) {
          return a.j ? !!_.M(a.j, 9) : null
     };
     _.Em = function(a, b, c) {
          _.H(a.K, function(d) {
               d.da() == c.serviceName && zm(d, b, c)
          })
     };
     Gm.prototype.Ma = function() {
          return this.Fa
     };
     Gm.prototype.Na = function() {
          return this.A
     };
     _.Qm = function(a) {
          return "google_ads_iframe_" + _.S(a)
     };
     _.Rm = function(a) {
          return _.Qm(a) + "__container__"
     };
     _.Fm = function(a, b) {
          b || (b = ++_.ai.B().m);
          a.o = b
     };
     _.Sm = function(a, b) {
          return a.ma ? a.ma : b.getElementById(_.Qm(a))
     };
     _.ti = function(a, b) {
          b = _.T(a, b);
          if (!b) return null;
          var c = _.Rm(a);
          return _.he(b, function(d) {
               return d.id === c
          })
     };
     _.Tm = function(a) {
          if (!a.Y) {
               var b = _.T(a);
               b = b && b.parentElement;
               if (_.x(50)) {
                    if (b = b && b.getBoundingClientRect()) a.Y = (new _.Yd(b.right - b.left, b.bottom - b.top)).floor()
               } else b && b.getBoundingClientRect && (a.Y = pi(b))
          }
          return a.Y
     };
     _.xi = function(a, b) {
          b = void 0 === b ? document : b;
          if (!a.fa) {
               b = _.T(a, b);
               if (!b) return null;
               a.fa = _.we(b, window)
          }
          return a.fa
     };
     Um = function(a, b) {
          var c = _.Tm(a);
          return c ? _.ab(_.Xh(b), function(d) {
               if ("string" === typeof d) return !0;
               var e = Math.floor(d[1]) == c.height;
               return Math.floor(d[0]) != c.width || !e
          }) : !1
     };
     var Wm;
     _.Vm = function() {
          this.l = [];
          this.m = [];
          this.j = {}
     };
     Wm = function(a, b) {
          return a.j[b] || []
     };
     _.Ia(_.Vm);
     var Xm = function() {
               this.l = {};
               this.j = new Ch;
               _.N(this.j, 26, zi());
               _.lh(36) && _.N(this.j, 15, !0)
          },
          Ym = function() {
               return Xm.B().l
          };
     _.Ia(Xm);
     var Zm = function() {
          var a = this;
          this.j = function() {
               return !1
          };
          this.l = "";
          var b = Xm.B(),
               c = {};
          this[3] = (c[19] = function() {
               return !!_.M(b.j, 10)
          }, c[14] = ji, c[13] = function(d) {
               for (var e = [], f = 0; f < arguments.length; ++f) e[f] = arguments[f];
               return _.ab(e, function(g) {
                    return 0 == a.l.lastIndexOf(g, 0)
               })
          }, c[12] = function() {
               return !!_.M(b.j, 6)
          }, c[11] = kl, c[15] = function(d) {
               return a.j(d)
          }, c[7] = function() {
               return !(!_.A.crypto || !_.A.crypto.subtle)
          }, c[1] = function() {
               return 0 == (0, _.Se)()
          }, c);
          this[4] = {};
          this[5] = {}
     };
     _.Ia(Zm);
     var $m = function(a) {
               return !!_.De(om(), function(b) {
                    return b == a
               })
          },
          cn = function(a) {
               return _.fb(oi(an(bn.B())), a)
          },
          dn = _.tb(function() {
               We("GPT does not support passback slots on the top window. Each passback slot should be defined and rendered within an iframe.")
          }),
          en = function(a) {
               var b = _.A != _.A.top ? 512 : 0;
               if (b) return b;
               var c = _.pl(_.A);
               var d = c.adCount ? 1 == a || 2 == a ? !(!c.adCount[1] && !c.adCount[2]) : (d = c.adCount[a]) && 27 != a && 26 != a ? 1 <= d : !1 : !1;
               d && (b |= 64);
               2 != (0, _.Se)() && (b |= 536870912);
               c.improveCollisionDetection = 1;
               switch (a) {
                    case 2:
                    case 1:
                         var e = b;
                         b = 0;
                         try {
                              b |= _.A != _.A.top ? 512 : 0;
                              var f = Math.min(_.A.screen.width || 0, _.A.screen.height || 0);
                              b |= f ? 320 > f ? 8192 : 0 : 2048;
                              var g;
                              if (g = _.A.navigator) {
                                   var h = _.A.navigator.userAgent;
                                   g = /Firefox/.test(h) || /Android 2/.test(h) || /iPhone OS [34]_/.test(h) || /Windows Phone (?:OS )?[67]/.test(h)
                              }
                              b |= g ? 1048576 : 0
                         } catch (t) {
                              b |= 32
                         }
                         f = b;
                         g = 0;
                         try {
                              g |= _.rl(_.A) ? 0 : 8, g |= ul(ql), g |= vl()
                         } catch (t) {
                              g |= 32
                         }
                         if (a = 2 == a) {
                              b = _.A.innerWidth;
                              a = _.pl(_.A).improveCollisionDetection;
                              c = Math.round(_.A.innerWidth / 320 * 50 + 15);
                              h = [];
                              for (d = 0; 3 > d; d++)
                                   for (var k = 0; 3 > k; k++) h.push({
                                        x: k / 2 * b,
                                        y: d / 2 * c
                                   });
                              a: {
                                   for (b = 0; b < h.length; b++) {
                                        b: {
                                             c = _.A;
                                             var l = h[b];d = a;k = c.document;k.elementFromPoint(l.x, l.y);
                                             var m = l.x;l = l.y;k.hasOwnProperty("_goog_efp_called_") || (k._goog_efp_called_ = k.elementFromPoint(m, l));
                                             if (k = k.elementFromPoint(m, l))
                                                  if ("fixed" == _.Mf(k, "position")) c = k;
                                                  else {
                                                       if (1 == d) {
                                                            c: {
                                                                 c = c.document;
                                                                 for (d = k.offsetParent; d && d != c.body; d = d.offsetParent)
                                                                      if ("fixed" == _.Mf(d, "position")) {
                                                                           c = d;
                                                                           break c
                                                                      } c = null
                                                            }
                                                            if (c) break b
                                                       }
                                                       c = null
                                                  }
                                             else c = null
                                        }
                                        if (c) {
                                             a = c;
                                             break a
                                        }
                                   }
                                   a = null
                              }
                              a = null != a
                         }
                         a && !_.x(269) && (g |= 16777216);
                         return e | f | g;
                    case 8:
                         f = b;
                         g = 0;
                         try {
                              g |= _.A != _.A.top ? 512 : 0, g |= _.A.navigator && /Android 2/.test(_.A.navigator.userAgent) ? 1048576 : 0
                         } catch (t) {
                              g |= 32
                         }
                         a = _.x(289);
                         h = 0;
                         try {
                              h |= ul(0 < _.xf(43) ? _.xf(43) : ql), _.x(309) && (e = _.sl(_.A).clientHeight, h |= e ? 320 > e ? -2147483648 : 0 : 1073741824), h |= vl(), a || (h |= _.rl(_.A) ? 0 : 8), !_.zl(_.yl(_.A)) && (h |= 134217728)
                         } catch (t) {
                              h |= 32
                         }
                         return f | g | h;
                    default:
                         return b | 32
               }
          },
          bn = function() {
               this.j = {};
               this.m = {};
               this.l = {};
               this.v = bj.B();
               this.o = [];
               Zm.B().j = cn
          };
     bn.prototype.add = function(a, b, c) {
          var d = void 0 === c ? {} : c;
          c = void 0 === d.ab ? void 0 : d.ab;
          var e = void 0 === d.Xb ? !1 : d.Xb;
          if ("string" !== typeof a || 0 >= a.length || !b) return {};
          d = nm(void 0 === d.format ? 0 : d.format);
          if (null != d) {
               if (en(d)) return {};
               var f = _.pl(window);
               f.adCount = f.adCount || {};
               f.adCount[d] = f.adCount[d] + 1 || 1
          }
          e && window == window.top && dn();
          a in this.j || (this.j[a] = [], this.m[a] = e ? 1 : 0);
          e = this.m[a];
          d = c || "gpt_unit_" + a + "_" + e;
          if (this.l[d]) return this.v.error(Jj(d)), {};
          c = new Lh;
          b = new Gm(a, e, b, d, c);
          e = Xm.B();
          (d = _.L(c, 2)) && !e.l.hasOwnProperty(d) && (e.l[d] = c);
          this.m[a]++;
          this.j[a].push(b);
          this.l[b.m.j] = b;
          _.Ii.push(b);
          return {
               slot: b,
               Ca: c
          }
     };
     var an = function(a) {
               var b = [];
               _.Kb(a.j, function(c) {
                    _.H(c, function(d) {
                         b.push(d)
                    })
               });
               return b
          },
          fn = function(a) {
               var b = [];
               a = Wm(_.Vm.B(), a);
               _.H(a, function(c) {
                    (c = _.Sm(c, document)) && b.push(c.contentWindow)
               });
               return b
          },
          gn = function(a, b) {
               b = _.r(b);
               for (var c = b.next(); !c.done; c = b.next()) {
                    c = c.value;
                    var d = Xm.B(),
                         e = c.getSlotElementId();
                    delete d.l[e];
                    c.Fa = !0;
                    c.v.info(Ek(c.m.toString()), null, c);
                    d = nm(c.ea);
                    if (null != d) {
                         e = _.pl(window);
                         var f = e.adCount && e.adCount[d];
                         f && (e.adCount[d] = f - 1)
                    }
                    d = c.getAdUnitPath();
                    _.ib(a.j[d], c);
                    0 == a.j[d].length && (e = a.j, d in e && delete e[d]);
                    d = a.l;
                    e = c.m.j;
                    e in d && delete d[e];
                    _.ib(_.Ii, c)
               }
          },
          hn = function(a, b) {
               if (b && !_.B(b)) return a.v.H(mj("googletag.destroySlots", [b])), !1;
               b ? (_.fa(b), b = _.q(b, function(c) {
                    return c && !c.Ma()
               })) : b = an(a);
               if (!b || 0 == b.length) return !1;
               Bm.B().destroySlots(b);
               gn(a, b);
               return !0
          },
          jn = function(a, b) {
               return a.l[b] ? a.l[b] : null
          },
          kn = function(a) {
               var b = bn.B(),
                    c = hh(a, Gm);
               return !!c && Mb(b.j, function(d) {
                    return _.fb(d, c)
               })
          },
          ln = function(a, b, c, d) {
               d = void 0 === d ? !1 : d;
               if ("string" === typeof a && (void 0 === c || "string" === typeof c)) {
                    var e = bn.B();
                    return e && e.add(a, b, {
                         ab: c,
                         Xb: d
                    })
               }
               return {}
          },
          mn = function(a, b, c) {
               return (a = ln(a, b, c).slot) && a.l() || null
          },
          nn = function(a) {
               var b = bn.B();
               return b && null == a ? hn(b) : b && _.B(a) ? (a = _.p(a, function(c) {
                    return hh(c, Gm)
               }), hn(b, a)) : !1
          },
          on = function(a, b) {
               if ("string" !== typeof a || !(null == b || "string" === typeof b || "number" === typeof b && $m(b))) return null;
               var c = "number" === typeof b ? b : 0;
               b = "string" === typeof b ? b : void 0;
               if (a = bn.B().add(a, [1, 1], {
                         ab: b,
                         format: c
                    }).slot) a.na = !0, a.ea = c;
               return (c = a || null) && c.l()
          };
     _.Ia(bn);
     mn = _.V(74, mn);
     nn = _.V(75, nn);
     on = _.V(73, on);
     var pn = _.V(95, function(a) {
          var b = bj.B();
          var c = null;
          var d = "";
          if ("string" === typeof a) {
               d = a;
               var e = jn(bn.B(), d)
          } else _.C(a) && 1 == a.nodeType ? (c = a, d = c.id, e = jn(bn.B(), d)) : e = hh(a, Gm);
          e ? (a = Xm.B().j, b = Xm.B(), d = e.getSlotElementId(), b.l[d] && (a = ri(a, Ym()), Km(e, a, c))) : d ? b.error(Ij(String(d))) : b.error(Dj(String(a)))
     });
     var qn = function(a, b) {
          this.m = a;
          this.v = b;
          this.l = 0;
          this.j = null
     };
     qn.prototype.get = function() {
          if (0 < this.l) {
               this.l--;
               var a = this.j;
               this.j = a.next;
               a.next = null
          } else a = this.m();
          return a
     };
     var rn = function(a, b) {
          a.v(b);
          100 > a.l && (a.l++, b.next = a.j, a.j = b)
     };
     var sn = function(a) {
               _.A.setTimeout(function() {
                    throw a;
               }, 0)
          },
          tn, un = function() {
               var a = _.A.MessageChannel;
               "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !I("Presto") && (a = function() {
                    var e = _.fe(document, "IFRAME");
                    e.style.display = "none";
                    _.xc(e, _.hc(_.$b(bc)));
                    document.documentElement.appendChild(e);
                    var f = e.contentWindow;
                    e = f.document;
                    e.open();
                    e.write(_.uc(wc));
                    e.close();
                    var g = "callImmediate" + Math.random(),
                         h = "file:" == f.location.protocol ? "*" : f.location.protocol + "//" + f.location.host;
                    e = (0, _.D)(function(k) {
                         if (("*" == h || k.origin == h) && k.data == g) this.port1.onmessage()
                    }, this);
                    f.addEventListener("message", e, !1);
                    this.port1 = {};
                    this.port2 = {
                         postMessage: function() {
                              f.postMessage(g, h)
                         }
                    }
               });
               if ("undefined" !== typeof a && !_.Rb()) {
                    var b = new a,
                         c = {},
                         d = c;
                    b.port1.onmessage = function() {
                         if (void 0 !== c.next) {
                              c = c.next;
                              var e = c.Kb;
                              c.Kb = null;
                              e()
                         }
                    };
                    return function(e) {
                         d.next = {
                              Kb: e
                         };
                         d = d.next;
                         b.port2.postMessage(0)
                    }
               }
               return function(e) {
                    _.A.setTimeout(e, 0)
               }
          };
     var vn = function() {
               this.l = this.j = null
          },
          xn = new qn(function() {
               return new wn
          }, function(a) {
               a.reset()
          });
     vn.prototype.add = function(a, b) {
          var c = xn.get();
          c.set(a, b);
          this.l ? this.l.next = c : this.j = c;
          this.l = c
     };
     var zn = function() {
               var a = yn,
                    b = null;
               a.j && (b = a.j, a.j = a.j.next, a.j || (a.l = null), b.next = null);
               return b
          },
          wn = function() {
               this.next = this.l = this.j = null
          };
     wn.prototype.set = function(a, b) {
          this.j = a;
          this.l = b;
          this.next = null
     };
     wn.prototype.reset = function() {
          this.next = this.l = this.j = null
     };
     var Dn = function(a, b) {
               An || Bn();
               Cn || (An(), Cn = !0);
               yn.add(a, b)
          },
          An, Bn = function() {
               if (_.A.Promise && _.A.Promise.resolve) {
                    var a = _.A.Promise.resolve(void 0);
                    An = function() {
                         a.then(En)
                    }
               } else An = function() {
                    var b = En;
                    !_.La(_.A.setImmediate) || _.A.Window && _.A.Window.prototype && !I("Edge") && _.A.Window.prototype.setImmediate == _.A.setImmediate ? (tn || (tn = un()), tn(b)) : _.A.setImmediate(b)
               }
          },
          Cn = !1,
          yn = new vn,
          En = function() {
               for (var a; a = zn();) {
                    try {
                         a.j.call(a.l)
                    } catch (b) {
                         sn(b)
                    }
                    rn(xn, a)
               }
               Cn = !1
          };
     var Hn, In, Jn, Mn, Sn, Wn;
     _.Gn = function(a) {
          this.U = 0;
          this.Zb = void 0;
          this.Ra = this.Ea = this.Oa = null;
          this.lb = this.sb = !1;
          if (a != _.Ha) try {
               var b = this;
               a.call(void 0, function(c) {
                    Fn(b, 2, c)
               }, function(c) {
                    Fn(b, 3, c)
               })
          } catch (c) {
               Fn(this, 3, c)
          }
     };
     Hn = function() {
          this.next = this.context = this.l = this.m = this.j = null;
          this.v = !1
     };
     Hn.prototype.reset = function() {
          this.context = this.l = this.m = this.j = null;
          this.v = !1
     };
     In = new qn(function() {
          return new Hn
     }, function(a) {
          a.reset()
     });
     Jn = function(a, b, c) {
          var d = In.get();
          d.m = a;
          d.l = b;
          d.context = c;
          return d
     };
     _.Kn = function(a) {
          if (a instanceof _.Gn) return a;
          var b = new _.Gn(_.Ha);
          Fn(b, 2, a);
          return b
     };
     Mn = function(a, b, c) {
          Ln(a, b, c, null) || Dn(_.Sa(b, a))
     };
     _.Nn = function(a) {
          return new _.Gn(function(b, c) {
               var d = a.length,
                    e = [];
               if (d)
                    for (var f = function(l, m) {
                              d--;
                              e[l] = m;
                              0 == d && b(e)
                         }, g = function(l) {
                              c(l)
                         }, h = 0, k; h < a.length; h++) k = a[h], Mn(k, _.Sa(f, h), g);
               else b(e)
          })
     };
     _.Pn = function() {
          var a, b, c = new _.Gn(function(d, e) {
               a = d;
               b = e
          });
          return new On(c, a, b)
     };
     _.Gn.prototype.then = function(a, b, c) {
          return _.Qn(this, _.La(a) ? a : null, _.La(b) ? b : null, c)
     };
     _.Gn.prototype.$goog_Thenable = !0;
     _.Gn.prototype.cancel = function(a) {
          if (0 == this.U) {
               var b = new Rn(a);
               Dn(function() {
                    Sn(this, b)
               }, this)
          }
     };
     Sn = function(a, b) {
          if (0 == a.U)
               if (a.Oa) {
                    var c = a.Oa;
                    if (c.Ea) {
                         for (var d = 0, e = null, f = null, g = c.Ea; g && (g.v || (d++, g.j == a && (e = g), !(e && 1 < d))); g = g.next) e || (f = g);
                         e && (0 == c.U && 1 == d ? Sn(c, b) : (f ? (d = f, d.next == c.Ra && (c.Ra = d), d.next = d.next.next) : Tn(c), Un(c, e, 3, b)))
                    }
                    a.Oa = null
               } else Fn(a, 3, b)
     };
     Wn = function(a, b) {
          a.Ea || 2 != a.U && 3 != a.U || Vn(a);
          a.Ra ? a.Ra.next = b : a.Ea = b;
          a.Ra = b
     };
     _.Qn = function(a, b, c, d) {
          var e = Jn(null, null, null);
          e.j = new _.Gn(function(f, g) {
               e.m = b ? function(h) {
                    try {
                         var k = b.call(d, h);
                         f(k)
                    } catch (l) {
                         g(l)
                    }
               } : f;
               e.l = c ? function(h) {
                    try {
                         var k = c.call(d, h);
                         void 0 === k && h instanceof Rn ? g(h) : f(k)
                    } catch (l) {
                         g(l)
                    }
               } : g
          });
          e.j.Oa = a;
          Wn(a, e);
          return e.j
     };
     _.Gn.prototype.cd = function(a) {
          this.U = 0;
          Fn(this, 2, a)
     };
     _.Gn.prototype.dd = function(a) {
          this.U = 0;
          Fn(this, 3, a)
     };
     var Fn = function(a, b, c) {
               0 == a.U && (a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself")), a.U = 1, Ln(c, a.cd, a.dd, a) || (a.Zb = c, a.U = b, a.Oa = null, Vn(a), 3 != b || c instanceof Rn || Xn(a, c)))
          },
          Ln = function(a, b, c, d) {
               if (a instanceof _.Gn) return Wn(a, Jn(b || _.Ha, c || null, d)), !0;
               if (a) try {
                    var e = !!a.$goog_Thenable
               } catch (g) {
                    e = !1
               } else e = !1;
               if (e) return a.then(b, c, d), !0;
               if (_.C(a)) try {
                    var f = a.then;
                    if (_.La(f)) return Yn(a, f, b, c, d), !0
               } catch (g) {
                    return c.call(d, g), !0
               }
               return !1
          },
          Yn = function(a, b, c, d, e) {
               var f = !1,
                    g = function(k) {
                         f || (f = !0, c.call(e, k))
                    },
                    h = function(k) {
                         f || (f = !0, d.call(e, k))
                    };
               try {
                    b.call(a, g, h)
               } catch (k) {
                    h(k)
               }
          },
          Vn = function(a) {
               a.sb || (a.sb = !0, Dn(a.rc, a))
          },
          Tn = function(a) {
               var b = null;
               a.Ea && (b = a.Ea, a.Ea = b.next, b.next = null);
               a.Ea || (a.Ra = null);
               return b
          };
     _.Gn.prototype.rc = function() {
          for (var a; a = Tn(this);) Un(this, a, this.U, this.Zb);
          this.sb = !1
     };
     var Un = function(a, b, c, d) {
               if (3 == c && b.l && !b.v)
                    for (; a && a.lb; a = a.Oa) a.lb = !1;
               if (b.j) b.j.Oa = null, Zn(b, c, d);
               else try {
                    b.v ? b.m.call(b.context) : Zn(b, c, d)
               } catch (e) {
                    $n.call(null, e)
               }
               rn(In, b)
          },
          Zn = function(a, b, c) {
               2 == b ? a.m.call(a.context, c) : a.l && a.l.call(a.context, c)
          },
          Xn = function(a, b) {
               a.lb = !0;
               Dn(function() {
                    a.lb && $n.call(null, b)
               })
          },
          $n = sn,
          Rn = function(a) {
               Xa.call(this, a)
          };
     _.G(Rn, Xa);
     Rn.prototype.name = "cancel";
     var On = function(a, b, c) {
          this.j = a;
          this.resolve = b;
          this.reject = c
     };
     var zg, ao, bo, Ag = _.Yf(),
          Sg = new Mg(1, Ag);
     (function() {
          zg = new _.yg(Tf() ? "http:" : "https:", .01);
          "number" !== typeof Ag.google_srt && (Ag.google_srt = Math.random());
          Bg();
          ao = new _.Tg;
          ao.ac(function(b) {
               var c = Hd.jerExpIds;
               if (_.B(c) && 0 !== c.length) {
                    var d = b.eid;
                    d ? (c = _.ua(d.split(",")).concat(_.ua(c)), _.fa(c), b.eid = c.join(",")) : b.eid = c.join(",")
               }
               bo && (b.jc = bo);
               (c = Hd.jerUserAgent) && (b.useragent = c)
          });
          ao.bc(!0);
          "complete" == Ag.document.readyState ? Ag.google_measure_js_timing || Og(Sg) : Sg.j && _.Q(Ag, "load", function() {
               Ag.google_measure_js_timing || Og(Sg)
          });
          var a = Gd.currentScript;
          bo = a ? a.dataset.jc : ""
     })();
     var co = navigator,
          eo = function() {
               try {
                    return co.javaEnabled()
               } catch (a) {
                    return !1
               }
          },
          fo = function(a) {
               var b = 1,
                    c;
               if (void 0 != a && "" != a)
                    for (b = 0, c = a.length - 1; 0 <= c; c--) {
                         var d = a.charCodeAt(c);
                         b = (b << 6 & 268435455) + d + (d << 14);
                         d = b & 266338304;
                         b = 0 != d ? b ^ d >> 21 : b
                    }
               return b
          },
          go = function(a, b) {
               if (!a || "none" == a) return 1;
               a = String(a);
               "auto" == a && (a = b, "www." == a.substring(0, 4) && (a = a.substring(4, a.length)));
               return fo(a.toLowerCase())
          },
          ho = /^\s*_ga=\s*1\.(\d+)[^.]*\.(.*?)\s*$/,
          io = /^[^=]+=\s*GA1\.(\d+)[^.]*\.(.*?)\s*$/,
          jo = /^\s*_ga=\s*()(amp-[\w.-]{22,64})$/;
     _.ko = function(a, b) {
          if (!(window && Math.random && navigator)) return -1;
          if (window.__google_ad_urls) {
               var c = window.__google_ad_urls;
               try {
                    if (c && c.getOseId()) return c.getOseId()
               } catch (e) {}
          }
          if (!window.__google_ad_urls_id) {
               c = window.google_enable_ose;
               if (!0 === c) var d = 2;
               else !1 !== c && (d = ze([0], a), null == d && ((d = ze([2], b)) || (d = 3)));
               if (!d) return 0;
               window.__google_ad_urls_id = d
          }
          return window.__google_ad_urls_id
     };
     var lo = new Mg(1, _.Yf()),
          mo = function() {
               var a = _.Yf();
               a && "undefined" != typeof a.google_measure_js_timing && (a.google_measure_js_timing || Og(lo))
          };
     (function() {
          var a = _.Yf();
          a && a.document && ("complete" == a.document.readyState ? mo() : lo.j && _.Q(a, "load", function() {
               mo()
          }))
     })();
     var oo, po, ro;
     _.no = ["auto", "inherit", "100%"];
     oo = _.no.concat(["none"]);
     po = function(a, b, c, d, e, f) {
          e = void 0 === e ? 10 : e;
          f = void 0 === f ? 10 : f;
          b = b.styleSheets;
          if (!b) return !1;
          var g = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.msMatchesSelector || a.oMatchesSelector;
          e = -1 == e ? Infinity : e;
          f = -1 == f ? Infinity : f;
          for (var h = 0; h < Math.min(b.length, e); ++h) {
               var k = void 0;
               try {
                    var l = b[h],
                         m = null;
                    try {
                         m = l.cssRules || l.rules
                    } catch (Oa) {
                         if (15 == Oa.code) throw Oa.styleSheet = l, Oa;
                    }
                    k = m
               } catch (Oa) {
                    continue
               }
               if (k && 0 < k.length)
                    for (m = 0; m < Math.min(k.length, f); ++m) {
                         var t = k[m],
                              v;
                         if (v = 1 == t.type) {
                              v = t;
                              var w = c;
                              v = g.call(a, v.selectorText) && w(v)
                         }
                         if (!v && (v = d && 4 == t.type)) a: {
                              v = a;w = c;
                              for (var E = f, F = 0; F < Math.min(t.cssRules.length, E); F++) {
                                   var U = t.cssRules[F],
                                        za = w;
                                   if (g.call(v, U.selectorText) && za(U)) {
                                        v = !0;
                                        break a
                                   }
                              }
                              v = !1
                         }
                         if (v) return !0
                    }
          }
          return !1
     };
     ro = function(a, b, c) {
          var d = void 0 === d ? 10 : d;
          var e = void 0 === e ? 10 : e;
          if (!a) return !0;
          var f = !0;
          _.Ue(a, function(g) {
               return f = _.qo(g, b, !1, d, e)
          }, void 0 === c ? 100 : c);
          return f
     };
     _.qo = function(a, b, c, d, e) {
          var f = a.style;
          return f && f.height && !_.fb(_.no, f.height) || f && f.maxHeight && !_.fb(oo, f.maxHeight) || po(a, b.document, function(g) {
               var h = g.style.height;
               g = g.style["max-height"];
               return h && !_.fb(_.no, h) || g && !_.fb(oo, g)
          }, c, d, e) ? !1 : !0
     };
     var so = function(a) {
               a = void 0 === a ? window : a;
               return a._gmptnl ? "afma-gpt-sdk-a" : a.webkit && a.webkit.messageHandlers && a.webkit.messageHandlers._gmptnl ? "afma-gpt-sdk-i" : null
          },
          to = function(a, b) {
               b = void 0 === b ? window : b;
               var c = so(b);
               if (!c) return null;
               var d = null;
               try {
                    "afma-gpt-sdk-a" == c ? d = b._gmptnl.pm("GAM=", a) || "5" : (d = b.__gmptnl_n || "5", b.webkit.messageHandlers._gmptnl.postMessage("GAM="))
               } catch (e) {
                    return "3"
               }
               return "string" === typeof d ? d : "3"
          };
     _.uo = function() {
          this.l = [];
          this.j = -1
     };
     _.uo.prototype.set = function(a, b) {
          b = void 0 === b ? !0 : b;
          0 <= a && 52 > a && 0 === a % 1 && this.l[a] != b && (this.l[a] = b, this.j = -1)
     };
     _.uo.prototype.get = function(a) {
          return !!this.l[a]
     };
     _.vo = function(a) {
          -1 == a.j && (a.j = $a(a.l, function(b, c, d) {
               return c ? b + Math.pow(2, d) : b
          }));
          return a.j
     };
     var wo = function() {
          this.j = function() {}
     };
     _.Ia(wo);
     var xo = function() {
          var a = Zm.B();
          wo.B().j(a)
     };
     var yo = function() {
          var a = void 0,
               b = 2;
          if (void 0 === a) {
               var c = void 0 === c ? _.A : c;
               a = c.ggeac || (c.ggeac = {})
          }
          b = void 0 === b ? 0 : b;
          c = a;
          var d = b;
          d = void 0 === d ? 0 : d;
          Wg(_.Vg.B(), c, d);
          c = a;
          b = void 0 === b ? 0 : b;
          wf(vf.B(), c, b);
          wo.B().j = uf(tf, a);
          vf.B().j()
     };
     var Ao = function() {
               var a = void 0;
               this.l = a = void 0 === a ? document : a;
               this.m = zo(this, "__gads=");
               this.o = !1;
               this.j = null;
               this.v = !1;
               if (!this.m && !this.v) {
                    if (_.x(250)) a = navigator.cookieEnabled;
                    else if (this.l.cookie = "GoogleAdServingTest=Good", a = "Good" === zo(this, "GoogleAdServingTest=")) {
                         var b = this.l,
                              c = new Date;
                         c.setTime((new Date).valueOf() + -1);
                         b.cookie = "GoogleAdServingTest=; expires=" + c.toGMTString()
                    }
                    this.o = a;
                    this.v = !0
               }
          },
          zo = function(a, b) {
               a = a.l.cookie;
               var c = a.indexOf(b);
               if (-1 === c) return "";
               b = c + b.length;
               c = a.indexOf(";", b); - 1 == c && (c = a.length);
               return a.substring(b, c)
          };
     var Bo = sb(function() {
               return !(Rc || Sc || Qc) && (cd || _.Mc || Lc)
          }),
          Co = function(a, b, c, d, e) {
               d = void 0 === d ? "" : d;
               var f = a.createElement("link");
               try {
                    f.rel = c, f.href = -1 != c.toLowerCase().indexOf("stylesheet") ? fc(b).toString() : b instanceof ec ? fc(b).toString() : b instanceof _.oc ? _.pc(b) : _.pc(_.rc(b))
               } catch (g) {
                    return null
               }
               d && "preload" == c && (f.as = d);
               e && f.setAttribute("nonce", e);
               a = a.getElementsByTagName("head")[0];
               if (!a) return null;
               try {
                    a.appendChild(f)
               } catch (g) {}
               return f
          };
     var Do = /^\.google\.(com?\.)?[a-z]{2,3}$/,
          Eo = /\.(cn|com\.bi|do|sl|ba|by|ma|am)$/,
          Fo = _.A,
          Ho = function(a) {
               a = "https://adservice" + (a + "/adsid/integrator.js");
               var b = ["domain=" + encodeURIComponent(_.A.location.hostname)];
               Go[3] >= Ta() && b.push("adsid=" + encodeURIComponent(Go[1]));
               return a + "?" + b.join("&")
          },
          Go, Io, Jo = function() {
               Fo = _.A;
               Go = Fo.googleToken = Fo.googleToken || {};
               var a = Ta();
               Go[1] && Go[3] > a && 0 < Go[2] || (Go[1] = "", Go[2] = -1, Go[3] = -1, Go[4] = "", Go[6] = "");
               Io = Fo.googleIMState = Fo.googleIMState || {};
               a = Io[1];
               Do.test(a) && !Eo.test(a) || (Io[1] = ".google.com");
               _.B(Io[5]) || (Io[5] = []);
               "boolean" !== typeof Io[6] && (Io[6] = !1);
               _.B(Io[7]) || (Io[7] = []);
               "number" !== typeof Io[8] && (Io[8] = 0)
          },
          Ko = {
               ub: function() {
                    return 0 < Io[8]
               },
               Ic: function() {
                    Io[8]++
               },
               Jc: function() {
                    0 < Io[8] && Io[8]--
               },
               Kc: function() {
                    Io[8] = 0
               },
               be: function() {
                    return !1
               },
               Ob: function() {
                    return Io[5]
               },
               Jb: function(a) {
                    try {
                         a()
                    } catch (b) {
                         _.A.setTimeout(function() {
                              throw b;
                         }, 0)
                    }
               },
               Yb: function() {
                    if (!Ko.ub()) {
                         var a = _.A.document,
                              b = function(e) {
                                   e = Ho(e);
                                   a: {
                                        try {
                                             var f = Ga();
                                             break a
                                        } catch (g) {}
                                        f = void 0
                                   }
                                   Co(a, e, "preload", "script", f);
                                   f = a.createElement("script");
                                   f.type = "text/javascript";
                                   f.onerror = function() {
                                        return _.A.processGoogleToken({}, 2)
                                   };
                                   e = ke(e);
                                   _.yc(f, e);
                                   try {
                                        (a.head || a.body || a.documentElement).appendChild(f), Ko.Ic()
                                   } catch (g) {}
                              },
                              c = Io[1];
                         b(c);
                         ".google.com" != c && b(".google.com");
                         b = {};
                         var d = (b.newToken = "FBT", b);
                         _.A.setTimeout(function() {
                              return _.A.processGoogleToken(d, 1)
                         }, 1E3)
                    }
               }
          },
          Lo = function(a) {
               Jo();
               var b = Fo.googleToken[5] || 0;
               a && (0 != b || Go[3] >= Ta() ? Ko.Jb(a) : (Ko.Ob().push(a), Ko.Yb()));
               Go[3] >= Ta() && Go[2] >= Ta() || Ko.Yb()
          },
          Mo = function(a) {
               _.A.processGoogleToken = _.A.processGoogleToken || function(b, c) {
                    var d = b;
                    d = void 0 === d ? {} : d;
                    c = void 0 === c ? 0 : c;
                    b = d.newToken || "";
                    var e = "NT" == b,
                         f = parseInt(d.freshLifetimeSecs || "", 10),
                         g = parseInt(d.validLifetimeSecs || "", 10),
                         h = d["1p_jar"] || "";
                    d = d.pucrd || "";
                    Jo();
                    1 == c ? Ko.Kc() : Ko.Jc();
                    var k = Fo.googleToken = Fo.googleToken || {},
                         l = 0 == c && b && "string" === typeof b && !e && "number" === typeof f && 0 < f && "number" === typeof g && 0 < g && "string" === typeof h;
                    e = e && !Ko.ub() && (!(Go[3] >= Ta()) || "NT" == Go[1]);
                    var m = !(Go[3] >= Ta()) && 0 != c;
                    if (l || e || m) e = Ta(), f = e + 1E3 * f, g = e + 1E3 * g, 1E-5 > Math.random() && _.Kf(_.A, "https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr&err=" + c), k[5] = c, k[1] = b, k[2] = f, k[3] = g, k[4] = h, k[6] = d, Jo();
                    if (l || !Ko.ub()) {
                         c = Ko.Ob();
                         for (b = 0; b < c.length; b++) Ko.Jb(c[b]);
                         c.length = 0
                    }
               };
               Lo(a)
          };
     var No = function(a, b) {
          b = void 0 === b ? 500 : b;
          _.Y.call(this);
          this.m = a;
          this.j = null;
          this.A = {};
          this.C = 0;
          this.D = b;
          this.o = null
     };
     _.z(No, _.Y);
     No.prototype.l = function() {
          this.A = {};
          this.o && (_.R(this.m, "message", this.o), delete this.o);
          delete this.A;
          delete this.m;
          delete this.j;
          _.Y.prototype.l.call(this)
     };
     var Po = function(a) {
               return _.La(a.m.__uspapi) || null != Oo(a)
          },
          Ro = function(a, b) {
               var c = {};
               if (Po(a)) {
                    var d = _.tb(function() {
                         return b(c)
                    });
                    Qo(a, function(e, f) {
                         f && (c = e);
                         d()
                    });
                    setTimeout(d, a.D)
               } else b(c)
          },
          Qo = function(a, b) {
               if (_.La(a.m.__uspapi)) a = a.m.__uspapi, a("getUSPData", 1, b);
               else if (Oo(a)) {
                    So(a);
                    var c = ++a.C;
                    a.A[c] = b;
                    a.j && (b = {}, a.j.postMessage((b.__uspapiCall = {
                         command: "getUSPData",
                         version: 1,
                         callId: c
                    }, b), "*"))
               }
          },
          Oo = function(a) {
               if (a.j) return a.j;
               a.j = Re(a.m, "__uspapiLocator");
               return a.j
          },
          So = function(a) {
               a.o || (a.o = function(b) {
                    try {
                         var c;
                         "string" === typeof b.data ? c = JSON.parse(b.data) : c = b.data;
                         var d = c.__uspapiReturn;
                         a.A[d.callId](d.returnValue, d.success)
                    } catch (e) {}
               }, _.Q(a.m, "message", a.o))
          };
     var To = function(a) {
          _.Y.call(this);
          this.m = a;
          this.j = null;
          this.A = {};
          this.C = 0;
          this.o = null
     };
     _.z(To, _.Y);
     To.prototype.l = function() {
          this.A = {};
          this.o && (_.R(this.m, "message", this.o), delete this.o);
          delete this.A;
          delete this.m;
          delete this.j;
          _.Y.prototype.l.call(this)
     };
     var Vo = function(a, b) {
               var c = {},
                    d = _.tb(function() {
                         return b(c)
                    });
               Uo(a, "addEventListener", function(e, f) {
                    f && (c = e);
                    e = void 0 !== c.tcString && "string" !== typeof c.tcString || void 0 !== c.gdprApplies && "boolean" !== typeof c.gdprApplies || void 0 !== c.listenerId && "number" !== typeof c.listenerId || void 0 !== c.addtlConsent && "string" !== typeof c.addtlConsent || !c.cmpStatus || "error" === c.cmpStatus ? !1 : !0;
                    e && ("loaded" !== c.cmpStatus || "tcloaded" !== c.eventStatus && "useractioncomplete" !== c.eventStatus) || (e || (c.tcString = "tcunavailable"), Uo(a, "removeEventListener", function() {}, c.listenerId), d())
               })
          },
          Uo = function(a, b, c, d) {
               if (_.La(a.m.__tcfapi)) a = a.m.__tcfapi, a(b, 2, c, d);
               else if (Wo(a)) {
                    Xo(a);
                    var e = ++a.C;
                    a.A[e] = c;
                    a.j && (c = {}, a.j.postMessage((c.__tcfapiCall = {
                         command: b,
                         version: 2,
                         callId: e,
                         parameter: d
                    }, c), "*"))
               }
          },
          Wo = function(a) {
               if (a.j) return a.j;
               a.j = Re(a.m, "__tcfapiLocator");
               return a.j
          },
          Xo = function(a) {
               a.o || (a.o = function(b) {
                    try {
                         var c;
                         "string" === typeof b.data ? c = JSON.parse(b.data) : c = b.data;
                         var d = c.__tcfapiReturn;
                         a.A[d.callId](d.returnValue, d.success)
                    } catch (e) {}
               }, _.Q(a.m, "message", a.o))
          };
     var Yo = _.ac("gpt/pubads_impl_"),
          Zo = _.ac("https://securepubads.g.doubleclick.net/"),
          kc = _.ac("https://ff.doubleclick.net");
     var $o = function() {
          var a = window,
               b = a.google_ltobserver;
          b && (b.disconnect(), delete a.google_ltobserver);
          a.google_lt_queue && delete a.google_lt_queue
     };
     var ap = function() {
          var a = _.L(Xm.B().j, 26);
          this.j = null;
          this.l = 0;
          this.m = a
     };
     ap.prototype.getOseId = function() {
          this.l || (this.l = _.ko(0, _.lh(7)));
          return this.l
     };
     var bp = function(a, b) {
               a = void 0 === a ? {} : a;
               b = void 0 === b ? {} : b;
               this.l = a;
               this.j = b
          },
          cp = function(a, b, c, d) {
               if (!(b && b in a.l)) return !1;
               if (void 0 === d || d || !a.j[b]) a.j[b] = c || "";
               return !0
          },
          dp = function(a, b) {
               _.u(b.j, function(c, d) {
                    this.j[d] || (this.j[d] = c)
               }, a)
          },
          bi = function(a) {
               return a.j.page_url
          },
          ep = function(a) {
               var b = {};
               _.u(a.j, function(c, d) {
                    d in a.l && (b[a.l[d]] = c)
               });
               return new bp(a.l, b)
          },
          fp = function(a) {
               var b = [];
               _.u(a.j, function(c, d) {
                    d in a.l && b.push({
                         Va: a.l[d],
                         Wb: c
                    })
               });
               return b
          },
          gp = function(a, b, c, d) {
               var e = [],
                    f = b.j;
               _.u(d, function(g, h) {
                    if (g) {
                         g = {
                              Va: g
                         };
                         var k = f[h],
                              l = [];
                         a.forEach(function(m, t) {
                              (m = c[_.S(m)]) && m.j[h] && (l[t] = m.j[h])
                         });
                         if (l.length || k) l.length && (g.Tc = l), k && (g.Wb = k), e.push(g)
                    }
               });
               return e
          };
     var hp = function() {
               var a = $l();
               this.j = {};
               this.C = a;
               this.l = new bp(a);
               this.m = {};
               this.o = {};
               this.A = {};
               this.v = !1
          },
          ip = function(a, b) {
               var c = _.S(b);
               a.j[c] || (a.j[c] = b)
          },
          kp = function(a) {
               return _.q(jp(a), function(b) {
                    return !b.za
               })
          },
          lp = function(a, b) {
               _.H(b, function(c) {
                    _.S(c) in a.j && Nm(c)
               })
          },
          mp = function(a, b) {
               if (_.x(150) && _.Pm(b)) return !1;
               var c = b.j;
               return (c = c && _.O(c, _.Fd, 50)) && null != _.L(c, 1) ? !1 : !a.A[_.S(b)]
          },
          Hi = function(a) {
               var b = 0;
               _.u(a.j, function() {
                    b++
               });
               return b
          };
     hp.prototype.toString = function() {
          var a = "[AdData:",
               b = [];
          _.u(this.j, function(c) {
               b.push(c.toString())
          });
          a += b.join();
          return a + "]"
     };
     var jp = function(a) {
               var b = [];
               _.u(a.j, function(c) {
                    b.push(c)
               });
               return b
          },
          Gi = function(a) {
               a = jp(a);
               a = _.p(a, function(b) {
                    return b.A
               });
               _.fa(a);
               return a
          },
          np = function(a, b, c, d) {
               var e = b.slot,
                    f = ui(e, c);
               if (!f) return null;
               b = yi(c, f, b, d);
               if (!b) return null;
               if ((f = b && _.cg(f)) && (0 <= b.x || 0 <= b.y)) _.x(301) || (a.o[_.S(e) + "_" + d] = b);
               else if (!f) return new _.Xd(-12245933, -12245933);
               return b
          },
          op = function(a, b) {
               _.H(b, function(c) {
                    if (a.j[_.S(c)]) {
                         var d = a.j;
                         c = _.S(c);
                         c in d && delete d[c]
                    }
               })
          },
          pp = function(a, b, c, d, e) {
               var f = b.document,
                    g = d.slot;
               a = !_.x(301) && a.o[_.S(g) + "_" + e] || np(a, d, f, e);
               if (!a || -12245933 == a.y) return !0;
               b = _.dg(!0, b);
               return _.Ai(a, b, c)
          },
          qp = function(a, b, c, d) {
               for (var e = [], f = b.length - 1; 0 <= f; f--) {
                    var g = b[f],
                         h = d[g.getSlotElementId()];
                    h = {
                         slot: g,
                         ba: h
                    };
                    if (_.T(h.slot) && pp(a, _.A, 2, h, !!_.M(c, 15))) break;
                    else e.unshift(g)
               }
               return e
          };
     var rp = function(a) {
          _.K(this, a, null, null)
     };
     _.G(rp, _.J);
     var sp, tp;
     sp = 0;
     tp = function(a, b) {
          this.ob = a;
          this.N = b;
          this.j = [];
          this.V = !1;
          this.v = NaN;
          this.O = "json_html";
          this.C = "fif";
          this.o = 1;
          this.K = [];
          this.persistentRoadblocksOnly = !1;
          this.videoStreamCorrelator = this.videoPodNumber = this.videoPodPosition = NaN;
          this.G = 0;
          this.P = this.L = this.J = "";
          this.F = [];
          this.D = this.l = 0;
          this.m = [];
          this.I = {};
          this.R = {};
          this.A = new rp
     };
     _.up = function(a, b) {
          b = _.S(b);
          if (!a.I[b]) {
               var c = _.x(253) ? si() : window == window.top ? (++sp).toString(36) : _.Cc();
               a.I[b] = c
          }
          return a.I[b]
     };
     var Dp = function(a, b) {
          bm.call(this, a);
          var c = this;
          this.set = W(576, function(d, e) {
               a.set(d, e);
               return c
          });
          this.get = W(577, function(d) {
               return a.get(d)
          });
          this.getAttributeKeys = W(578, function() {
               return Be(a.G)
          });
          this.display = W(558, function(d, e, f, g) {
               return a.display(d, e, void 0 === f ? "" : f, void 0 === g ? "" : g)
          });
          this.notifyUnfilledSlots = W(69, function(d) {
               if (a.F) {
                    for (var e = a.I, f = [], g = 0; g < d.length; ++g) {
                         var h = d[g];
                         Nb(e, h) ? f.push(e[h]) : a.log.H(Vj(), a)
                    }
                    vp(a, f)
               }
          });
          this.isRoadblockingSupported = W(111, function() {
               return wp(a)
          });
          this.refreshAllSlots = W(60, function() {
               a.F && vp(a, null)
          });
          this.setVideoSession = W(61, function(d, e, f, g) {
               a.L = d;
               a.J = e;
               a.K = f;
               a.o = g
          });
          this.getDisplayAdsCorrelator = W(62, function(d) {
               return xp(a, void 0 === d ? "" : d)
          });
          this.getVideoStreamCorrelator = W(63, function() {
               if (yp().j) {
                    var d = zp(Ap()).F;
                    d = isNaN(d) ? 0 : d
               } else d = 0;
               return d
          });
          this.isSlotAPersistentRoadblock = W(64, function(d) {
               d = hh(d, b);
               return !!d && Bp(a, d)
          });
          this.onImplementationLoaded = W(65, function() {
               a.log.info(Yj("GPT CompanionAds"), a)
          });
          this.fillSlot = W(66, function(d, e, f, g) {
               d = hh(d, b);
               var h;
               if (h = !!d) d && kn(d) && "string" === typeof e && 0 < e.length ? (a.A[d.m.m] = e, null != f && null != g && (a.v[d.m.m] = [f, g]), h = Cp(a, d)) : h = !1;
               return h
          });
          this.slotRenderEnded = W(67, function(d, e, f) {
               d = hh(d, b);
               var g;
               if (g = d) d = new _.sm(d.l(), !1, a.da()), null != e && null != f && _.tm(d, [e, f]), zm(a, "slotRenderEnded", d), g = void 0;
               return g
          });
          this.setRefreshUnfilledSlots = W(59, function(d) {
               "boolean" === typeof d && (a.F = d)
          })
     };
     _.z(Dp, bm);
     var Ep = function() {
          var a = bj.B();
          this.getAllEvents = W(563, function() {
               return Vi ? a.j.slice() : []
          });
          this.getEventsByService = W(564, function(b) {
               return Vi ? cj(a, b).slice() : []
          });
          this.getEventsBySlot = W(565, function(b) {
               return Vi ? dj(a, b).slice() : []
          });
          this.getEventsByLevel = W(566, function(b) {
               return Vi ? ej(a, b).slice() : []
          })
     };
     _.z(Ep, gh);
     var Fp = function(a, b, c) {
          var d = this,
               e = bj.B();
          this.set = W(83, function(f, g) {
               a.set(f, g);
               return d
          });
          this.get = W(84, function(f) {
               return a.get(f)
          });
          this.setClickUrl = W(79, function(f) {
               if ("string" !== typeof f) return e.H(mj("Slot.setClickUrl", [f]), null, a.j), d;
               _.N(c, 7, f);
               return d
          });
          this.setTargeting = W(81, function(f, g) {
               im(a.j, c, f, g);
               return d
          });
          this.updateTargetingFromMap = W(85, function(f) {
               jm(a.j, c, f);
               return d
          });
          this.display = W(78, function() {
               var f = Xm.B().j;
               f = ri(f, Ym());
               a.display(f)
          });
          this.setTagForChildDirectedTreatment = W(80, function(f) {
               if (0 === f || 1 === f) {
                    var g = _.O(b, xh, 25) || new xh;
                    _.N(g, 5, f);
                    _.zd(b, 25, g)
               }
               return d
          });
          this.setForceSafeFrame = W(567, function(f) {
               if ("boolean" !== typeof f) return e.H(pk("PassbackSlot.setForceSafeFrame", String(f)), null, a.j), d;
               _.N(c, 12, f);
               return d
          });
          this.setTagForUnderAgeOfConsent = W(448, function(f) {
               if (0 === f || 1 === f) {
                    var g = _.O(b, xh, 25) || new xh;
                    _.N(g, 6, f);
                    _.zd(b, 25, g)
               }
               return d
          })
     };
     _.z(Fp, gh);
     var Gp = function(a, b) {
               a = _.p(a, function(c) {
                    return hh(c, b)
               });
               return _.q(a, function(c) {
                    return !!c
               })
          },
          Hp = function(a) {
               var b = Zm.B(),
                    c = [];
               a = _.r(a);
               for (var d = a.next(); !d.done; d = a.next()) {
                    d = d.value;
                    b.l = d;
                    var e = _.Xg(9);
                    1 === e.length && (c.push(d), c.push(d + "-" + e[0]))
               }
               return c
          },
          Ip = _.tb(function() {
               return We("google_DisableInitialLoad is deprecated and will be removed. Please use googletag.pubads().isInitialLoadDisabled() instead to check if initial load has been disabled.")
          }),
          Jp = function() {
               Object.defineProperty(window, "google_DisableInitialLoad", {
                    get: function() {
                         Ip();
                         return !0
                    },
                    set: function() {
                         Ip()
                    },
                    configurable: !0
               })
          },
          Rp = function(a, b, c, d) {
               bm.call(this, a);
               var e = this,
                    f = bj.B(),
                    g = !1;
               this.setTargeting = W(1, function(h, k) {
                    var l = null;
                    "string" === typeof k ? l = [k] : _.B(k) ? l = k : _.Ka(k) && (l = _.kb(k));
                    var m = "string" === typeof h && !vb(h);
                    l = _.x(180) ? l : l && rb(l);
                    var t = !!l && bb(l, function(v) {
                         return "string" === typeof v
                    });
                    if (!m || !t) return f.H(mj("PubAdsService.setTargeting", [h, k]), a), e;
                    k = eb(_.P(c, Bd, 2), function(v) {
                         return rh(v) === h
                    });
                    if ("gpt-beta" === h) {
                         if (a.j) return f.H(Lk(l.join())), e;
                         if (k) return f.H(Mk(l.join())), e;
                         l = Hp(l)
                    }
                    k ? th(k, l) : (k = th(sh(new Bd, h), l), Cd(c, 2, k));
                    f.info(yk(h, l.join(), a.da()), a);
                    return e
               });
               this.clearTargeting = W(2, function(h) {
                    if (void 0 === h) return Dh(c, []), f.info(Jk(a.da()), a), e;
                    if ("gpt-beta" === h) return f.H(Nk(h)), e;
                    var k = _.P(c, Bd, 2),
                         l = _.db(k, function(m) {
                              return rh(m) === h
                         });
                    if (0 > l) return f.H(vk(h, a.da()), a), e;
                    _.hb(k, l);
                    Dh(c, k);
                    f.info(uk(h, a.da()), a);
                    return e
               });
               this.getTargeting = W(38, function(h) {
                    if ("string" !== typeof h) return f.H(mj("PubAdsService.getTargeting", [h]), a), [];
                    var k = eb(_.P(c, Bd, 2), function(l) {
                         return rh(l) === h
                    });
                    return k ? _.L(k, 2).slice() : []
               });
               this.getTargetingKeys = W(39, function() {
                    return _.p(_.P(c, Bd, 2), function(h) {
                         return rh(h)
                    })
               });
               this.setCategoryExclusion = W(3, function(h) {
                    if ("string" !== typeof h || vb(h)) return f.H(mj("PubAdsService.setCategoryExclusion", [h]), a), e;
                    _.fb(_.L(c, 3), h) || vd(c, 3, h);
                    f.info(wk(h), a);
                    return e
               });
               this.clearCategoryExclusions = W(4, function() {
                    _.N(c, 3, []);
                    f.info(xk(), a);
                    return e
               });
               this.disableInitialLoad = W(5, function() {
                    a.j ? f.H(fk("disableInitialLoad", "pubads"), a) : (_.N(c, 4, !0), g || (g = !0, Jp()))
               });
               this.enableSingleRequest = W(6, function() {
                    if (a.j && !_.M(c, 6)) return f.H(ek("enableSingleRequest"), a), !1;
                    f.info(hk("single request"), a);
                    _.N(c, 6, !0);
                    return !0
               });
               this.enableAsyncRendering = W(7, function() {
                    return !0
               });
               this.enableSyncRendering = W(8, function() {
                    We("GPT synchronous rendering is no longer supported, ads will be requested and rendered asynchronously. See https://support.google.com/admanager/answer/9212594 for more details.");
                    return !1
               });
               this.enableLazyLoad = W(485, function(h) {
                    var k = new _.uh;
                    _.N(k, 1, 800);
                    _.vh(k, 400);
                    _.N(k, 3, 3);
                    if (_.C(h)) {
                         var l = h.fetchMarginPercent;
                         "number" === typeof l && (0 <= l ? _.N(k, 1, l) : -1 == l && _.N(k, 1, void 0));
                         l = h.renderMarginPercent;
                         "number" === typeof l && (0 <= l ? _.vh(k, l) : -1 == l && _.N(k, 2, void 0));
                         h = h.mobileScaling;
                         "number" === typeof h && (0 < h ? _.N(k, 3, h) : -1 == h && _.N(k, 3, 1))
                    }
                    _.zd(c, 5, k)
               });
               this.setCentering = W(9, function(h) {
                    h = !!h;
                    f.info(ik("centering", String(h)), a);
                    _.N(c, 15, h)
               });
               this.definePassback = W(10, function(h, k) {
                    return (h = Kp(a, h, k)) && h.l()
               });
               this.refresh = W(11, function(h, k) {
                    k = void 0 === k ? {} : k;
                    h && !_.B(h) || !_.C(k) || k.changeCorrelator && "boolean" !== typeof k.changeCorrelator ? f.H(mj("PubAdsService.refresh", _.q([h, k], function(l) {
                         return void 0 !== l
                    })), a) : (k && 0 == k.changeCorrelator || _.N(c, 26, zi()), k = ri(c, d), h ? (h = Gp(h, b), Lp(a, k, h)) : Lp(a, k, h))
               });
               this.enableVideoAds = W(12, function() {
                    _.N(c, 21, !0);
                    Mp(a, c)
               });
               this.setVideoContent = W(13, function(h, k) {
                    _.N(c, 21, !0);
                    _.N(c, 22, String(h || ""));
                    _.N(c, 23, String(k || ""));
                    Mp(a, c)
               });
               this.collapseEmptyDivs = W(14, function(h) {
                    h = void 0 === h ? !1 : h;
                    _.M(c, 11) ? f.H(sk(), a) : a.j ? f.H(ek("collapseEmptyDivs"), a) : (h && _.N(c, 10, !0), _.pa("gpt_ced", function(k) {
                         _.y(k, "sc", h ? "t" : "f");
                         _.y(k, "level", "page");
                         _.qa(k)
                    }), f.info(rk(String(!!h)), a), _.N(c, 11, !0));
                    return !!_.M(c, 11)
               });
               this.clear = W(15, function(h) {
                    _.B(h) && (h = Gp(h, b));
                    return Np(a, c, d, h)
               });
               this.setLocation = W(16, function(h, k, l) {
                    if (void 0 !== k) {
                         if ("number" !== typeof h) return f.H(qk("Latitude")), e;
                         if ("number" !== typeof k) return f.H(qk("Longitude")), e;
                         var m = new wh;
                         h = _.N(m, 1, h);
                         k = _.N(h, 2, k);
                         if (void 0 !== l) {
                              if (isNaN(l)) return f.H(qk("Radius")), e;
                              _.N(k, 3, Math.round(l))
                         }
                         l = Bh[0];
                         c.j || (c.j = {});
                         h = k ? _.yd(k) : k;
                         c.j[9] = k;
                         _.wd(c, 9, l, h);
                         return e
                    }
                    if ("string" !== typeof h) return f.H(qk("Address")), e;
                    _.wd(c, 8, Bh[0], h);
                    return e
               });
               this.setCookieOptions = W(17, function(h) {
                    if (0 !== h && 1 !== h) return f.H(dk(String(h)), a), e;
                    _.N(c, 24, h);
                    return e
               });
               this.setTagForChildDirectedTreatment = W(18, function(h) {
                    if (1 !== h && 0 !== h) return f.H(zk(String(h)), a), e;
                    var k = _.O(c, xh, 25) || new xh;
                    _.N(k, 5, h);
                    _.zd(c, 25, k);
                    return e
               });
               this.clearTagForChildDirectedTreatment = W(19, function() {
                    var h = _.O(c, xh, 25);
                    if (!h) return e;
                    _.N(h, 5, void 0);
                    _.zd(c, 25, h);
                    return e
               });
               this.setPublisherProvidedId = W(20, function(h) {
                    h = String(h);
                    a.j ? f.H(gk("setPublisherProvidedId", h), a) : (f.info(ik("PPID", h), a), _.N(c, 16, h));
                    return e
               });
               this.set = W(21, function(h, k) {
                    if ("string" !== typeof h || !h.length || void 0 === $l()[h] || "string" !== typeof k) return f.H(mj("PubAdsService.set", [h, k]), a), e;
                    var l = eb(_.P(c, Bd, 14), function(m) {
                         return rh(m) === h
                    });
                    l ? th(l, [k]) : (l = sh(new Bd, h), vd(l, 2, k), Cd(c, 14, l));
                    f.info(Oj(h, String(k), a.da()), a);
                    return e
               });
               this.get = W(22, function(h) {
                    if ("string" !== typeof h) return f.H(mj("PubAdsService.get", [h]), a), null;
                    var k = eb(_.P(c, Bd, 14), function(l) {
                         return rh(l) === h
                    });
                    return (k = k && _.L(k, 2)) ? k[0] : null
               });
               this.getAttributeKeys = W(23, function() {
                    return _.p(_.P(c, Bd, 14), function(h) {
                         return rh(h)
                    })
               });
               this.display = W(24, function(h, k, l, m) {
                    return void a.display(h, k, void 0 === l ? "" : l, void 0 === m ? "" : m)
               });
               this.updateCorrelator = W(25, function() {
                    We(Ua("update"));
                    f.H(Tk(), a);
                    _.N(c, 26, zi());
                    return e
               });
               this.defineOutOfPagePassback = W(35, function(h) {
                    if (h = Kp(a, h, [1, 1])) h.j.na = !0;
                    return h && h.l()
               });
               this.setForceSafeFrame = W(36, function(h) {
                    if ("boolean" !== typeof h) return f.H(pk(String(h)), a), e;
                    _.N(c, 13, h);
                    return e
               });
               this.setSafeFrameConfig = W(37, function(h) {
                    var k = gm(h);
                    if (!k) return f.H(mj("PubAdsService.setSafeFrameConfig", [h]), a), e;
                    _.zd(c, 18, k);
                    return e
               });
               this.setRequestNonPersonalizedAds = W(445, function(h) {
                    if (0 !== h && 1 !== h) a.log.H(Ok(String(h)), a);
                    else if (h) {
                         if ((h = te()) && h.frames && !h.frames.GoogleSetNPA) try {
                              var k = h.document,
                                   l = new _.Zd(k),
                                   m = k.body || k.head && k.head.parentElement;
                              if (m) {
                                   var t = _.ie(l, "IFRAME");
                                   t.name = "GoogleSetNPA";
                                   t.id = "GoogleSetNPA";
                                   t.setAttribute("style", "display:none;position:fixed;left:-999px;top:-999px;width:0px;height:0px;");
                                   m.appendChild(t)
                              }
                         } catch (v) {}
                    } else(k = te().document.getElementById("GoogleSetNPA")) && k.parentNode && k.parentNode.removeChild(k);
                    return e
               });
               this.setTagForUnderAgeOfConsent = W(447, function(h) {
                    h = void 0 === h ? 2 : h;
                    if (2 !== h && 0 !== h && 1 !== h) return f.H(Pk(String(h)), a), e;
                    var k = _.O(c, xh, 25) || new xh;
                    _.N(k, 6, h);
                    _.zd(c, 25, k);
                    return e
               });
               this.getCorrelator = W(27, function() {
                    return Op(a, c)
               });
               this.getTagSessionCorrelator = W(631, function() {
                    return zp(Ap()).X
               });
               this.getVideoContent = W(30, function() {
                    return Pp(a, c)
               });
               this.getVersion = W(568, function() {
                    return a.getVersion()
               });
               this.forceExperiment = W(569, function(h) {
                    h = parseInt(h, 10);
                    0 < h && _.Vg.B().l(h)
               });
               this.setCorrelator = W(28, function(h) {
                    We(Ua("set"));
                    f.H(Sk(), a);
                    if (eg(window)) return e;
                    if (!("number" === typeof h && isFinite(h) && 0 == h % 1 && 0 < h)) return f.H(Dk(String(h)), a), e;
                    _.N(c, 26, h);
                    _.N(c, 27, !0);
                    return e
               });
               this.markAsAmp = W(570, function() {
                    return void Qp(a)
               });
               this.isSRA = W(571, function() {
                    return !!_.M(c, 6)
               });
               this.setImaContent = W(328, function(h, k) {
                    null != _.L(c, 22) ? (_.N(c, 21, !0), _.N(c, 22, String(h || "")), _.N(c, 23, String(k || "")), Mp(a, c)) : (_.N(c, 21, !0), Mp(a, c), "string" === typeof h && _.N(c, 19, h), "string" === typeof k && _.N(c, 20, k))
               });
               this.getImaContent = W(329, function() {
                    return null != _.L(c, 22) ? Pp(a, c) : a.j ? {
                         vid: _.L(c, 19) || "",
                         cmsid: _.L(c, 20) || ""
                    } : null
               });
               this.isInitialLoadDisabled = W(572, function() {
                    return !!_.M(c, 4)
               });
               this.addSupportingUrl = W(634, function(h) {
                    if ("string" !== typeof h || !h.match(_.le)[1]) return f.H(mj("PubAdsService.addSupportingUrl", [h]), a), e;
                    _.fb(_.L(c, 7), h) || vd(c, 7, h);
                    return e
               });
               this.setPrivacySettings = W(648, function(h) {
                    if (!_.C(h)) return f.H(mj("PubAdsService.setPrivacySettings", [h]), a), e;
                    var k = _.O(c, xh, 25) || new xh,
                         l = h.restrictDataProcessing,
                         m = h.childDirectedTreatment;
                    h = h.underAgeOfConsent;
                    void 0 !== l && ("boolean" === typeof l ? _.N(k, 1, l) : f.H(pk(String(l)), a));
                    void 0 !== h && (null === h ? _.N(k, 6, 2) : !1 === h ? _.N(k, 6, 0) : !0 === h ? _.N(k, 6, 1) : f.H(Pk(String(h)), a));
                    void 0 !== m && (null === m ? _.N(k, 5, void 0) : !1 === m ? _.N(k, 5, 0) : !0 === m ? _.N(k, 5, 1) : f.H(zk(String(m)), a));
                    _.zd(c, 25, k);
                    return e
               })
          };
     _.z(Rp, bm);
     var Sp = function(a, b) {
               a: {
                    b = b[0];a = a[0];
                    for (var c = mb, d = Math.min(b.length, a.length), e = 0; e < d; e++) {
                         var f = c(b[e], a[e]);
                         if (0 != f) {
                              b = f;
                              break a
                         }
                    }
                    b = mb(b.length, a.length)
               }
               return b
          },
          Tp = function() {
               var a = this,
                    b = [],
                    c = !1,
                    d = bj.B();
               this.addSize = _.V(88, function(e, f) {
                    var g;
                    (g = !Oh(e) || "fluid" === e) || ((g = Oh(f)) || (g = _.B(f) && bb(f, Oh)), g = !g);
                    if (g) return c = !0, d.H(mj("SizeMappingBuilder.addSize", [e, f])), a;
                    b.push([e, f]);
                    return a
               });
               this.build = _.V(89, function() {
                    if (c) return d.H(Mj()), null;
                    nb(b, Sp);
                    return b
               })
          };
     var Vp, Wp, Xp;
     _.Up = function(a) {
          var b = "performance" in window && "now" in performance ? performance.now.bind(performance) : Ta;
          for (a = b() + a; b() < a;);
          b()
     };
     Vp = function(a, b) {
          b >= a.length || (_.Up(a[b]), window.requestAnimationFrame(function() {
               return Vp(a, ++b)
          }))
     };
     Wp = function(a) {
          window.requestAnimationFrame(function() {
               return Vp(a, 0)
          })
     };
     Xp = function() {
          if (_.La(window.requestAnimationFrame)) {
               var a = _.zf(2);
               a.length && (a = a.map(function(b) {
                    return _.He(b, 0)
               }), Wp(a))
          }
     };
     var Yp = 0,
          Zp = function() {
               try {
                    yo();
                    xo();
                    var a = _.lh(152);
                    a && a.length && _.H(a, function() {
                         _.Vg.B().l(a)
                    });
                    _.Xg(13);
                    _.Xg(3)
               } catch (b) {
                    _.Mi(408, b, !0)
               }
          },
          aq = _.V(297, function(a) {
               a = _.kb(a.getElementsByTagName("script"));
               a = _.r(a);
               for (var b = a.next(); !b.done; b = a.next()) {
                    b = b.value;
                    var c = b.src;
                    !c || -1 == c.indexOf("/tag/js/gpt.js") && -1 == c.indexOf("/tag/js/gpt_mobile.js") || !b.innerHTML || b.googletag_executed || (b.googletag_executed = !0, eval(b.innerHTML))
               }
          }, function(a, b) {
               _.Li(a, b);
               window.console && window.console.error && window.console.error(b)
          }),
          bq = function() {
               Yp = _.Fg();
               Zp();
               try {
                    _.x(79) || $o(), Xp(), na("defineOutOfPageSlot", on), na("defineSlot", mn), na("defineUnit", mn), na("destroySlots", nn), na("getWindowsThatCanCommunicateWithHostpageLibrary", fn), na("display", pn), pm(), na("getEventLog", function() {
                         return new Ep
                    }), na("sizeMapping", _.V(90, function() {
                         return new Tp
                    })), na("apiReady", !0), _.oa().fifWin && "complete" != document.readyState ? ih(window, function() {
                         window.setTimeout(function() {
                              $k()
                         }, 0)
                    }) : $k(), aq(document), Oi()
               } catch (a) {
                    _.Mi(106, a)
               }
          };
     var cq = function() {
          var a = void 0 === a ? document : a;
          var b = this.j = {};
          a = a.URL.split("?");
          a = _.r(a[a.length - 1].split("&"));
          for (var c = a.next(); !c.done; c = a.next())
               if (c = c.value.split("="), c[0]) {
                    var d = c[0].toLowerCase();
                    try {
                         if (1 < c.length) {
                              var e = c[1];
                              var f = window.decodeURIComponent ? decodeURIComponent(e.replace(ei, " ")) : unescape(e)
                         } else f = "";
                         b[d] = f
                    } catch (g) {}
               }
     };
     var dq = ij(function(a) {
          return a && a.src ? /^(?:https?:)?\/\/(?:www\.googletagservices\.com|securepubads\.g\.doubleclick\.net)\/tag\/js\/gpt(?:_[a-z]+)*\.js/.test(a.src) ? 0 : 1 : 2
     }, function(a, b) {
          return a + "\x0B" + (b && b[0] && b[0].src)
     });
     var eq = null,
          fq = function(a, b, c, d) {
               try {
                    var e;
                    if (!(e = !b)) {
                         var f;
                         if (!(f = !ro(b, c, void 0 === d ? 100 : d))) {
                              a: {
                                   do {
                                        var g = _.we(b, c);
                                        if (g && "fixed" == g.position) {
                                             var h = !1;
                                             break a
                                        }
                                   } while (b = b.parentElement);h = !0
                              }
                              f = !h
                         }
                         e = f
                    }
                    e && (a.height = -1)
               } catch (k) {
                    a.width = -1, a.height = -1
               }
          },
          la = function(a) {
               for (var b = {}, c = _.r(_.P(a, Bd, 9)), d = c.next(); !d.done; d = c.next()) d = d.value, b[rh(d)] = _.L(d, 2);
               a = _.L(a, 8);
               a.length && null == b.excl_cat && (b.excl_cat = a);
               return b
          },
          gq = function(a, b) {
               var c = {};
               _.u(a, function(d, e) {
                    if (b[e]) {
                         var f = _.q(b[e], function(g) {
                              return -1 < d.indexOf(g)
                         });
                         f.length && (c[e] = f)
                    }
               });
               return c
          },
          hq = function(a) {
               var b = !1,
                    c = _.p(_.P(a, Bd, 2), function(d) {
                         var e = rh(d);
                         b = "excl_cat" === e;
                         d = _.L(d, 2);
                         return encodeURIComponent(e) + "=" + encodeURIComponent(d.join())
                    });
               a = _.L(a, 3);
               !b && a.length && c.push(encodeURIComponent("excl_cat") + "=" + encodeURIComponent(a.join()));
               return c
          },
          iq = function(a, b, c, d, e, f) {
               f = void 0 === f ? !1 : f;
               this.ca = b;
               this.Ca = c;
               this.C = d;
               this.m = a;
               this.o = !f && (a || _.x(139));
               this.j = e;
               this.A = [];
               this.l = "";
               this.I = $l();
               this.v = [];
               this.D = [];
               this.F = Qb(_.zf(7));
               this.G = f ? !_.x(294) : 0 === this.j.D
          },
          lq = function(a) {
               var b = void 0 === b ? window : b;
               var c = a.j.j;
               if (!_.B(c)) return "";
               if (a.m) 0 == c.length && (c = jp(a.ca));
               else {
                    if (0 == c.length) return "";
                    1 < c.length && (c = [c[0]])
               }
               var d = !!vl();
               c = _.q(c, function(e) {
                    return d && 3 == e.ea ? (bj.B().H(Rk(String(e.getAdUnitPath()))), !1) : !0
               });
               if (!c.length) return "";
               30 < c.length && (bj.B().H(Kk("30", String(c.length), String(c.length - 30))), c = lb(c, 0, 30));
               jq(a, c, b);
               kq(a);
               return a.l
          },
          mq = function(a, b) {
               try {
                    var c = b.top;
                    var d = bg(c.document, c)
               } catch (e) {
                    d = new _.Xd(-12245933, -12245933)
               }
               Z(a, "scr_x", Math.round(d.x), {
                    ia: !0
               });
               Z(a, "scr_y", Math.round(d.y), {
                    ia: !0
               })
          },
          nq = function(a) {
               var b = window;
               var c = b.document.domain;
               var d = b.document.cookie,
                    e = b.history.length,
                    f = b.screen,
                    g = b.document.referrer;
               if (Cf()) c = _.Yf().gaGlobal || {};
               else {
                    var h = Math.round((new Date).getTime() / 1E3),
                         k = b.google_analytics_domain_name;
                    c = "undefined" == typeof k ? go("auto", c) : go(k, c);
                    var l = -1 < d.indexOf("__utma=" + c + "."),
                         m = -1 < d.indexOf("__utmb=" + c),
                         t;
                    (t = (Hf() || _.Yf()).gaGlobal) || (t = {}, (Hf() || _.Yf()).gaGlobal = t);
                    var v = !1;
                    if (l) g = d.split("__utma=" + c + ".")[1].split(";")[0].split("."), m ? t.sid = g[3] : t.sid || (t.sid = h + ""), t.vid = g[0] + "." + g[1], t.from_cookie = !0;
                    else {
                         t.sid || (t.sid = h + "");
                         if (!t.vid) {
                              v = !0;
                              m = Math.round(2147483647 * Math.random());
                              l = [co.appName, co.version, co.language ? co.language : co.browserLanguage, co.platform, co.userAgent, eo() ? 1 : 0].join("");
                              f ? l += f.width + "x" + f.height + f.colorDepth : _.A.java && _.A.java.awt && (f = _.A.java.awt.Toolkit.getDefaultToolkit().getScreenSize(), l += f.screen.width + "x" + f.screen.height);
                              l = l + d + (g || "");
                              for (g = l.length; 0 < e;) l += e-- ^ g++;
                              t.vid = (m ^ fo(l) & 2147483647) + "." + h
                         }
                         t.from_cookie = !1
                    }
                    if (!t.cid) {
                         b: for (h = 999, k && (k = 0 == k.indexOf(".") ? k.substr(1) : k, h = k.split(".").length), k = 999, d = d.split(";"), g = 0; g < d.length; g++)
                              if (f = ho.exec(d[g]) || io.exec(d[g]) || jo.exec(d[g])) {
                                   e = f[1] || 0;
                                   if (e == h) {
                                        var w = f[2];
                                        break b
                                   }
                                   e < k && (k = e, w = f[2])
                              }v && w && -1 != w.search(/^\d+\.\d+$/) ? t.vid = w : w != t.vid && (t.cid = w)
                    }
                    t.dh = c;
                    t.hid || (t.hid = Math.round(2147483647 * Math.random()));
                    c = t
               }
               Z(a, "ga_vid", c.vid, {
                    W: !1
               });
               Z(a, "ga_sid", c.sid, {
                    W: !1
               });
               Z(a, "ga_hid", c.hid, {
                    W: !1
               });
               Z(a, "ga_fc", c.from_cookie, {
                    W: !1
               });
               Z(a, "ga_cid", c.cid, {
                    W: !1
               });
               Z(a, "ga_wpids", b.google_analytics_uacct)
          },
          jq = function(a, b, c) {
               c = void 0 === c ? window : c;
               var d = c.document;
               a.G && Uf(c);
               var e = a.j.N.M;
               Z(a, "gdfp_req", 1, {
                    W: !1
               });
               Z(a, "pvsid", a.j.v);
               Z(a, "correlator", _.L(e, 26));
               Z(a, "output", a.j.O, {
                    W: !1
               });
               Z(a, "impl", a.j.C, {
                    W: !1
               });
               _.x(200) || (0 == _.ud(e, 24, 0) && (Z(a, "adsid", a.j.J), Z(a, "pucrd", a.j.P)), Z(a, "jar", a.j.L));
               a.j.persistentRoadblocksOnly && Z(a, "per_only", 1);
               oq(a);
               isNaN(a.j.videoPodNumber) || Z(a, "pod", a.j.videoPodNumber, {
                    W: !1
               });
               isNaN(a.j.videoPodPosition) || Z(a, "ppos", a.j.videoPodPosition, {
                    W: !1
               });
               isNaN(a.j.videoStreamCorrelator) || Z(a, "scor", a.j.videoStreamCorrelator, {
                    W: !1
               });
               pq(a);
               Z(a, "vrg", _.Bi());
               qq(a);
               rq(a);
               sq(a, b[0].A);
               Z(a, "sc", _.lh(6) ? 1 : 0, {
                    ia: !0
               });
               window.postMessage && Z(a, "sfv", _.em());
               Z(a, "ecs", a.j.ob);
               a.o ? (tq(a, b, d), uq(a), vq(a, b)) : (wq(a, b[0], d), uq(a), xq(a, b[0]));
               yq(a, b);
               zq(a, c);
               null != (a.Ca.j.google_preview || null) && Z(a, "gct", a.Ca.j.google_preview || null);
               if (a.ca.v) {
                    Z(a, "is_amp", "1");
                    Z(a, "amp_v", Df());
                    Z(a, "act", Ef());
                    If && !/^https:\/\/d-\d+\.ampproject\.net\/\d+\/frame\.html$/.test(c.location.href) && Z(a, "ati", 1);
                    var f = Jf(c);
                    f && Z(a, "apn", f.substr(0, 10));
                    try {
                         var g = JSON.parse(c.context.cachedFrameName_);
                         g.attributes && g.attributes.useSameDomainRenderingUntilDeprecated && Z(a, "asd", 1)
                    } catch (k) {}
               }(qe(c.top) || Pe(window.IntersectionObserver)) && Z(a, "abxe", 1);
               (f = _.yf(10)) && Z(a, "expflags", f);
               Aq(a, b, c);
               f = {};
               f.u_tz = -(new Date).getTimezoneOffset();
               f.u_his = Sf();
               f.u_java = !!Hd.navigator && "unknown" !== typeof Hd.navigator.javaEnabled && !!Hd.navigator.javaEnabled && Hd.navigator.javaEnabled();
               Hd.screen && (f.u_h = Hd.screen.height, f.u_w = Hd.screen.width, f.u_ah = Hd.screen.availHeight, f.u_aw = Hd.screen.availWidth, f.u_cd = Hd.screen.colorDepth);
               Hd.navigator && Hd.navigator.plugins && (f.u_nplug = Hd.navigator.plugins.length);
               Hd.navigator && Hd.navigator.mimeTypes && (f.u_nmime = Hd.navigator.mimeTypes.length);
               Bq(a, f);
               Cq(a);
               try {
                    var h = Zf()
               } catch (k) {
                    h = "0"
               }
               Z(a, "flash", h, {
                    W: !1,
                    ia: !0
               });
               Dq(a, b, c);
               _.x(2) || Eq(a, c);
               (_.x(82) || _.x(84) || _.ai.B().j) && Z(a, "rumc", a.j.v, {
                    W: !1
               });
               _.x(83) && Z(a, "rume", 1, {
                    W: !1
               });
               Z(a, "vis", _.jl(d), {
                    W: !1
               });
               0 === dq(_.lh(172)) || Z(a, "stss", dq(_.lh(172)));
               !a.ca.v && Fq(c) && Z(a, "arp", 1, {
                    W: !1
               });
               _.A.navigator && _.A.navigator.deviceMemory && Z(a, "dmc", _.A.navigator.deviceMemory);
               mq(a, c);
               Gq(a, b, c);
               Hq(a, b);
               0 < a.j.F.length && Z(a, "psts", a.j.F);
               nq(a);
               _.x(23) && (Z(a, "js", so(c)), Z(a, "ms", to(a.j.v.toString(), c)));
               Iq(a, c, b);
               Jq(a, b, c);
               0 != _.qi(a.m) && 0 != a.j.m.length && (b = _.pb(a.j.m, a.j.j) ? -1 : a.j.m.length, Z(a, "optslots", b));
               e = _.L(e, 7);
               _.x(164) && e.length && Z(a, "supporting_urls", _.p(e, function(k) {
                    return encodeURIComponent(k)
               }))
          },
          Gq = function(a, b, c) {
               var d = a.j.N.T,
                    e = [],
                    f = [],
                    g = _.x(293) || (_.x(292) ? 1 < b.length : a.m);
               _.H(b, function(h) {
                    var k = d[h.getSlotElementId()];
                    a: {
                         if (!h.Z) {
                              var l = (l = _.T(h)) && l.parentElement;
                              if (!l) {
                                   l = null;
                                   break a
                              }
                              h.Z = _.we(l, window)
                         }
                         l = h.Z
                    }
                    if ((l = _.Ve(l)) && (1 != l[0] || 1 != l[3])) e.push("-1x-1"), f.push("-1x-1");
                    else if (g || Um(h, k)) {
                         var m = (k = _.T(h)) && k.parentElement;
                         l = _.Tm(h) || new _.Yd(0, 0);
                         fq(l, m, c);
                         e.push(l.width + "x" + l.height);
                         h.va || (h.va = pi(_.T(h)));
                         h = h.va || new _.Yd(0, 0);
                         fq(h, k, c, 1); - 1 == l.height && (h.height = -1);
                         f.push(h.width + "x" + h.height)
                    }
               });
               Z(a, "psz", e, {
                    pa: "|"
               });
               Z(a, "msz", f, {
                    pa: "|"
               })
          },
          Hq = function(a, b) {
               var c = a.j.N.T;
               b = _.p(b, function(d) {
                    return c[d.getSlotElementId()]
               });
               _.x(252) && b.some(function(d) {
                    return Wh(d)
               }) && (Z(a, "rtgs", _.p(b, function(d) {
                    return Wh(d) ? "1" : "0"
               }), {
                    pa: "!"
               }), Z(a, "max_w", _.p(b, function(d) {
                    return Wh(d) ? _.L(d, 16) : "0"
               }), {
                    pa: "!"
               }), Z(a, "max_h", _.p(b, function(d) {
                    return Wh(d) ? _.L(d, 17) : "0"
               }), {
                    pa: "!"
               }), Z(a, "min_w", _.p(b, function(d) {
                    return Wh(d) ? _.ud(d, 18, 0) : "0"
               }), {
                    pa: "!"
               }), Z(a, "min_h", _.p(b, function(d) {
                    return Wh(d) ? _.ud(d, 19, 0) : "0"
               }), {
                    pa: "!"
               }))
          },
          Iq = function(a, b, c) {
               var d = [],
                    e = [];
               _.H(c, function(f) {
                    var g = new _.uo,
                         h = _.T(f);
                    f = 0;
                    if (h) {
                         var k = _.dg(!0, b).width;
                         if (null !== b && b != b.top) {
                              var l = _.dg(!1, b).width;
                              (-12245933 == k || -12245933 == l || l < k) && g.set(8)
                         }
                         _.x(291) && -12245933 != k && (l = 1 + _.xf(45), k * l < b.document.documentElement.scrollWidth && g.set(10));
                         for (l = 0; h && 100 > l; l++, h = h.parentElement) {
                              var m = _.we(h, b);
                              if (m) {
                                   if (m.overflowY && "visible" != m.overflowY) {
                                        g.set(2);
                                        var t = pi(h);
                                        t && (f = f ? Math.min(f, t.width) : t.width);
                                        if (g.get(9)) break
                                   }
                                   "sticky" != m.position && "fixed" != m.position || g.set(9);
                                   "none" == m.display && g.set(7);
                                   "IFRAME" == h.nodeName && (m = parseInt(m.width, 10), m < k && (g.set(8), f = f ? Math.min(m, f) : m))
                              } else g.set(3)
                         }
                    } else g.set(1);
                    d.push(_.vo(g));
                    e.push(f)
               });
               Z(a, "fws", d);
               Z(a, "ohw", e)
          },
          Lq = function(a, b, c) {
               var d = [],
                    e = [],
                    f = a.j.N,
                    g = f.T,
                    h = !!_.M(f.M, 15);
               if (a.m) _.H(b, function(k) {
                    k = np(a.ca, {
                         slot: k,
                         ba: g[k.getSlotElementId()]
                    }, c, h) || Kq;
                    d.push(Math.round(k.x));
                    e.push(Math.round(k.y))
               });
               else if (b = (a.ca.v ? Gf() : null) || np(a.ca, {
                         slot: b[0],
                         ba: g[b[0].getSlotElementId()]
                    }, c, h)) d.push(Math.round(b.x)), e.push(Math.round(b.y));
               a.o ? (Z(a, "adxs", d), Z(a, "adys", e)) : (Z(a, "adx", d[0], {
                    ia: !0
               }), Z(a, "ady", e[0], {
                    ia: !0
               }))
          },
          Jq = function(a, b, c) {
               if (!a.m) {
                    var d = null,
                         e = null;
                    try {
                         d = bg(c.top.document, c.top).y
                    } catch (h) {
                         return
                    }
                    var f = a.j.N,
                         g = f.T;
                    f = !!_.M(f.M, 15);
                    (b = np(a.ca, {
                         slot: b[0],
                         ba: g[b[0].getSlotElementId()]
                    }, c.document, f)) && (e = Math.round(b.y));
                    c = _.dg(!0, c).height;
                    e && -12245933 !== e && -12245933 !== c && (e < d + c ? Z(a, "btvi", 0, {
                         ia: !0
                    }) : (d = _.lh(248) + 1, kh.B()[248] = d, Z(a, "btvi", d)))
               }
          },
          Nq = function(a, b) {
               var c = a.j.N,
                    d = c.M,
                    e = c.T;
               return _.p(b, a.m ? function(f) {
                    var g = e[f.getSlotElementId()],
                         h;
                    _.x(143) ? h = f.Ya || $h(g, vi(f, d)) : h = $h(g);
                    return f.Ya = h
               } : function(f) {
                    return Mq(a, f)
               }).join(",")
          },
          Mq = function(a, b) {
               var c = a.j.N;
               a = c.M;
               c = c.T[b.getSlotElementId()];
               a = b.Ya || $h(c, vi(b, a));
               return b.Ya = a
          },
          Dq = function(a, b, c) {
               c = void 0 === c ? window : c;
               var d = c.document;
               b = a.m ? bi(a.ca.l) : ci(b[0], a.ca.m) || bi(a.ca.l);
               var e = ii(d.URL, a.Ca.j.google_preview || null),
                    f = ii(d.referrer, a.Ca.j.google_preview || null);
               d = !1;
               if (null != b) {
                    var g = e;
                    eg(c) || (f = "", d = !0)
               } else b = e;
               a.ca.v && (f = (f = Cf()) && f.referrer);
               if (_.x(2)) Z(a, "url", b), Z(a, "ref", f);
               else {
                    e = new ng(c);
                    var h = e.j[0].depth,
                         k = h && 0 < h;
                    if (k && (Z(a, "nhd", h), c.location.ancestorOrigins)) {
                         c = [];
                         h = Math.min(e.j.length, 27);
                         for (var l = 1; l < h; l++) e.j[l] && e.j[l].url && (c[l - 1] = e.j[l].url);
                         c = og(e, c.reverse());
                         Z(a, "iag", c);
                         c = e.j;
                         h = [];
                         for (l = c.length - 1; 0 < l; l--) {
                              var m = c[l];
                              m && null != m.url && h.push(me(m.url.match(_.le)[3] || null))
                         }
                         c = jg(h);
                         0 < c && Z(a, "mdo", c)
                    }
                    Z(a, "url", b);
                    null != g && g != b && Z(a, "loc", g);
                    Z(a, "ref", f);
                    k && (g = e.j[Math.max(e.j.length - 1, 0)].url) && Z(a, "top", d ? me(g.match(_.le)[3] || null) : g)
               }
          },
          Eq = function(a, b) {
               b = void 0 === b ? window : b;
               var c = b.document,
                    d = c.scripts;
               d && Z(a, "dssz", d.length);
               b = new ng(b);
               if (d = b.l.document && b.l.document.scripts ? b.l.document.scripts : []) {
                    for (var e = [], f = d.length - 1; 0 <= f && 26 > e.length;) d[f].src && e.unshift(d[f].src), f--;
                    d = og(b, e)
               } else d = 0;
               Z(a, "icsg", d, {
                    ia: !0
               });
               if (b = b.l.document && b.l.document.scripts ? b.l.document.scripts : []) {
                    d = [];
                    for (e = b.length - 1; 0 <= e; e--)(f = b[e]) && null != f.src && d.push(me(f.src.match(_.le)[3] || null));
                    b = jg(d)
               } else b = 0;
               Z(a, "mso", b);
               b = Error();
               b.stack && (d = b.stack, e = d.split(/\r\n|\r|\n/).length, "Error" == d.slice(0, 5) && e--, d = e - 13, 0 > d && (d = 0, e = new _.Ci("gpt_negative_stack_trace", fi(), _.lh(23)), _.qa(e, a.ca), _.y(e, "stackTrace", b.stack), _.Ei(e)), Z(a, "std", d, {
                    ia: !0
               }));
               c.currentScript && c.currentScript.text && Z(a, "csl", c.currentScript.text.length)
          },
          xq = function(a, b) {
               b = a.j.N.T[b.getSlotElementId()];
               b = ma(b);
               Z(a, "scp", b, {
                    pa: "&"
               })
          },
          Oq = function(a, b) {
               var c = a.j.N.T;
               a = _.p(b, function(d) {
                    d = c[d.getSlotElementId()];
                    return la(d)
               });
               for (b = a.shift() || {}; a.length;) b = gq(b, a.shift());
               return b
          },
          vq = function(a, b) {
               var c = a.j.N.T,
                    d;
               _.x(49) && 1 < b.length ? d = Pq(a, b) : d = _.p(b, function(e) {
                    e = c[e.getSlotElementId()];
                    return ma(e).join("&")
               });
               b = d;
               b.join("|").length == d.length - 1 && (b = null);
               Z(a, "prev_scp", b, {
                    pa: "|"
               })
          },
          Pq = function(a, b) {
               var c = a.j.N.T,
                    d = [],
                    e = Oq(a, b);
               _.H(b, function(g) {
                    g = c[g.getSlotElementId()];
                    g = ma(g, function(h, k) {
                         k = e[k];
                         return !k || -1 == k.indexOf(h)
                    });
                    d.push(g.join("&"))
               });
               var f = [];
               _.u(e, function(g, h) {
                    g = _.p(g, encodeURIComponent);
                    h = encodeURIComponent(h);
                    f.push(h + "=" + g.join())
               });
               f.length && Z(a, "csp", f, {
                    pa: "&"
               });
               return d
          },
          Bq = function(a, b) {
               _.u(b, function(c, d) {
                    Z(a, d, c, {
                         W: !1
                    })
               })
          },
          qq = function(a) {
               var b = a.j.N.M;
               0 != _.ud(b, 24, 0) && Z(a, "co", _.ud(b, 24, 0), {
                    ia: !0
               })
          },
          sq = function(a, b) {
               var c = _.lh(221);
               b = gf(c, b);
               b.Lc && Z(a, "npa", 1);
               b.gd && (Z(a, "gdpr_consent", b.gd), b.wc && Z(a, "addtl_consent", b.wc));
               Z(a, "guci", b.xc)
          },
          rq = function(a) {
               var b = _.O(a.j.N.M, xh, 25) || new xh,
                    c = a.j.A;
               !0 === _.M(b, 1) && Z(a, "rdp", "1");
               var d = _.L(c, 2);
               d && Z(a, "gdpr_consent", d);
               null != _.L(c, 3) && (d = _.M(c, 3), Z(a, "gdpr", d ? "1" : "0", {
                    ia: !0
               }));
               (d = _.L(c, 4)) && Z(a, "addtl_consent", d);
               (c = _.L(c, 1)) && Z(a, "us_privacy", c);
               c = _.ud(b, 6, 2);
               2 !== c && Z(a, "tfua", c, {
                    ia: !0
               });
               null != _.L(b, 5) && (b = _.L(b, 5), Z(a, "tfcd", b, {
                    ia: !0
               }))
          },
          uq = function(a) {
               var b = a.j.N.M;
               1 != _.ud(b, 24, 0) && null != _.L(b, 16) && Z(a, "ppid", _.L(b, 16), {
                    ia: !0
               })
          },
          yq = function(a, b) {
               var c = a.j.N.M,
                    d = 1 != a.j.o,
                    e = b[0].P;
               var f = a.ca.m;
               if (null != bi(a.ca.l)) b = !0;
               else {
                    for (var g = !1, h = 0; h < b.length && !g; h++) g = null != ci(b[h], f);
                    b = g
               }
               c = _.M(c, 27) || !1;
               f = 3 == a.j.o;
               g = new _.uo;
               g.set(0, d);
               g.set(1, e);
               g.set(2, b);
               g.set(3, c);
               g.set(4, f);
               d = _.vo(g);
               0 < d && Z(a, "eri", d)
          },
          zq = function(a, b) {
               var c = a.j.N.M,
                    d = hq(c);
               Z(a, "cust_params", d, {
                    pa: "&"
               });
               a.C && 0 == _.ud(c, 24, 0) && (Z(a, "cookie", zo(a.C, "__gads="), {
                    ia: !0
               }), a.C.o && Z(a, "cookie_enabled", "1", {
                    ia: !0
               }));
               a: {
                    d = "role:1 producer:12";
                    var e = _.O(c, wh, 9),
                         f = _.L(c, 8);
                    if (e || f) {
                         if (e) {
                              f = _.td(e, 1);
                              var g = _.td(e, 2);
                              if (null == f || null == g) {
                                   d = "";
                                   break a
                              }
                              d += " latlng{ latitude_e7: " + Math.round(1E7 * f) + " longitude_e7: " + Math.round(1E7 * g) + "}";
                              null != _.L(e, 3) && (d += " radius:" + _.L(e, 3))
                         } else f && (50 < f.length && (f = f.substring(0, 50)), d += ' loc:"' + f + '"');
                         if (gd) d = _.A.btoa(d);
                         else {
                              e = [];
                              for (g = f = 0; g < d.length; g++) {
                                   var h = d.charCodeAt(g);
                                   255 < h && (e[f++] = h & 255, h >>= 8);
                                   e[f++] = h
                              }
                              d = _.hd(e, void 0)
                         }
                         d = "a " + d
                    } else d = ""
               }
               d && Z(a, "uule", d);
               0 == _.ud(c, 24, 0) && (c = b.document, (b = (bi(a.ca.l) || gi(b)) != c.URL ? c.domain : "") && Z(a, "cdm", b));
               _.x(6) || (b = new _.uo, _.A.SVGElement && _.A.document.createElementNS && b.set(0), c = Oe(), c["allow-top-navigation-by-user-activation"] && b.set(1), c["allow-popups-to-escape-sandbox"] && b.set(2), _.A.crypto && _.A.crypto.subtle && b.set(3), _.A.TextDecoder && _.A.TextEncoder && b.set(4), b = _.vo(b), Z(a, "bc", b))
          },
          Aq = function(a, b, c) {
               var d = c.document;
               0 < navigator.userAgent.indexOf("MSIE ") && cp(a.ca.l, "adsense_encoding", d.charset, !1);
               Z(a, "lmt", (Date.parse(c.document.lastModified) / 1E3).toString());
               var e = _.x(43) ? _.Fg() : (new Date).getTime();
               Z(a, "dt", e, {
                    W: !1
               });
               try {
                    e = Yp;
                    var f = Math.min(Hg("domLoading") || Infinity, Hg("domInteractive") || Infinity);
                    var g = Infinity == f ? Math.max(Hg("responseEnd"), Hg("navigationStart")) : f;
                    0 < g && e >= g && (Z(a, "dlt", g, {
                         W: !1
                    }), Z(a, "idt", e - g, {
                         W: !1
                    }))
               } catch (m) {
                    Z(a, "idt", -9, {
                         W: !1
                    }), _.Li(479, m)
               }
               if (null == eq) {
                    a: {
                         g = c.navigator;f = g.userAgent;e = g.platform;
                         var h = /WebKit\/(\d+)/,
                              k = /rv:(\d+\.\d+)/,
                              l = /rv:1\.8([^.]|\.0)/;
                         if (/Win|Mac|Linux|iPad|iPod|iPhone/.test(e) && !/^Opera/.test(f) && (h = (h.exec(f) || [0, 0])[1], k = (k.exec(f) || [0, 0])[1], /Win/.test(e) && /Trident/.test(f) && 11 <= d.documentMode || !h && "Gecko" === g.product && 27 <= k && !l.test(f) || 536 <= h)) {
                              g = !0;
                              break a
                         }
                         g = !1
                    }
                    f = fg(c, c.document, 500, 300);eq = g && !f
               }
               eq || Z(a, "ea", "0", {
                    ia: !0
               });
               f = g = _.Yf();
               for (e = 0; g && g != g.parent;) g = g.parent, e++, qe(g) && (f = g);
               e = f;
               g = e.location.href;
               e == e.top ? g = {
                    url: g,
                    Tb: !0
               } : (f = !1, (l = e.document) && l.referrer && (g = l.referrer, e.parent == e.top && (f = !0)), (e = e.location.ancestorOrigins) && (e = e[e.length - 1]) && -1 == g.indexOf(e) && (f = !1, g = e), g = {
                    url: g,
                    Tb: f
               });
               f = g;
               g = fg(_.Yf(), d, c.google_ad_width, c.google_ad_height);
               f = f.Tb;
               e = _.Yf();
               e = e.top == e ? 0 : qe(e.top) ? 1 : 2;
               l = 4;
               g || 1 != e ? g || 2 != e ? g && 1 == e ? l = 7 : g && 2 == e && (l = 8) : l = 6 : l = 5;
               f && (l |= 16);
               g = "" + l;
               f = _.Yf();
               if (f != f.top)
                    for (; f && f != f.top && qe(f) && !f.sf_ && !f.$sf && !f.inGptIF && !f.inDapIF; f = f.parent);
               Z(a, "frm", g || null);
               a.ca.v ? g = (g = Ff()) && _.C(g.rootBounds) ? new _.Yd(g.rootBounds.width, g.rootBounds.height) : null : g = _.dg(!0, c, _.x(280) && 0 !== (0, _.Se)());
               g && (Z(a, "biw", g.width), Z(a, "bih", g.height));
               !eg(c) && (g = _.dg(!1, c)) && (Z(a, "isw", g.width), Z(a, "ish", g.height));
               a.j.G && Z(a, "oid", a.j.G);
               Lq(a, b, d);
               a.o ? Z(a, "adks", Nq(a, b)) : Z(a, "adk", Mq(a, b[0]));
               d = 0;
               void 0 === _.A.postMessage && (d |= 1);
               0 < d && Z(a, "osd", d);
               Qq(a);
               g = d = a.ca.l;
               a.o ? g = gp(b, d, a.ca.m, a.I) : ((b = a.ca.m[_.S(b[0])]) && (_.x(162) ? dp(g, b) : dp(ep(b), d)), g = fp(g));
               Z(a, "adsenseParameters", g, {
                    W: !1
               });
               Z(a, "ifi", _.Vf(c));
               null !== c && c != c.top ? (b = [c.document.URL], c.name && b.push(c.name), c = _.dg(!1, c, !1), b.push(c.width.toString()), b.push(c.height.toString()), c = Ee(b.join(""))) : c = 0;
               0 != c && Z(a, "ifk", c.toString())
          },
          Cq = function(a) {
               var b = _.A.devicePixelRatio;
               (b = "number" === typeof b ? +b.toFixed(3) : null) && Z(a, "u_sd", b, {
                    W: !1
               })
          },
          pq = function(a) {
               Z(a, "eid", a.j.K);
               var b = Eg().split(",");
               b && Z(a, "debug_experiment_id", b)
          },
          wq = function(a, b, c) {
               var d = a.j.N,
                    e = d.M;
               d = d.T[b.getSlotElementId()];
               Z(a, "iu", b.getAdUnitPath());
               Z(a, "sz", _.Yh(d));
               3 == b.ea && Z(a, "rbv", "1");
               _.Zh(d) && Z(a, "fluid", "height");
               var f = d && _.M(d, 12);
               e = !!_.M(e, 13);
               (e = (null == f ? e : f) ? 1 : 0) && Z(a, "fsf", e);
               Rq(a, b) && Z(a, "fsb", "1");
               Sq(a, [b]);
               Tq(a, d);
               b.getOutOfPage() && Z(a, "ists", "1");
               e = nm(b.ea);
               Z(a, "fa", e);
               _.x(98) && !e && wi({
                    slot: b,
                    ba: d
               }, c) && Z(a, "pfx", "1");
               b.F - 1 && Z(a, "prevtos", Math.min(Om(b), 3600))
          },
          tq = function(a, b, c) {
               _.H(b, function(k) {
                    Uq(a, k.getAdUnitPath())
               });
               var d = a.j.N,
                    e = d.M,
                    f = d.T;
               Z(a, "iu_parts", a.v);
               Z(a, "enc_prev_ius", a.D);
               Z(a, "prev_iu_szs", _.p(b, function(k) {
                    return _.Yh(f[k.getSlotElementId()])
               }).join());
               _.ab(b, function(k) {
                    return _.Zh(f[k.getSlotElementId()])
               }) && (d = _.p(b, function(k) {
                    return _.Zh(f[k.getSlotElementId()]) ? "height" : "0"
               }), Z(a, "fluid", d));
               Z(a, "fsfs", ka(b, function(k) {
                    k = (k = f[k.getSlotElementId()]) && _.M(k, 12);
                    var l = !!_.M(e, 13);
                    return (null == k ? l : k) ? 1 : 0
               }, 0));
               Z(a, "fsbs", ka(b, function(k) {
                    return Rq(a, k) ? 1 : 0
               }, 0));
               Sq(a, b);
               Tq(a, f[b[0].getSlotElementId()]);
               (d = Vq(b)) && Z(a, "ists", d);
               Z(a, "fas", ka(b, function(k) {
                    return nm(k.ea)
               }));
               (d = Wq(b, function(k) {
                    return 3 == k.ea
               })) && Z(a, "rbvs", d);
               _.x(98) && (d = Wq(b, function(k) {
                    return !nm(k.ea) && wi({
                         slot: k,
                         ba: f[k.getSlotElementId()]
                    }, c)
               })) && Z(a, "pfxs", d);
               d = ka(b, function(k) {
                    k = k.F - 1 ? Om(k) : -1;
                    return Math.min(k, 3600)
               }, 0, function(k) {
                    return 0 <= k
               }, "_");
               Z(a, "prevtoss", d);
               var g = {};
               _.H(b, function(k) {
                    (k = _.L(f[k.getSlotElementId()], 7)) && (g[k] = (g[k] || 0) + 1)
               });
               if (!_.Ae(g)) {
                    b = new _.Ci("gpt_sra_setclickurl");
                    var h = [];
                    _.u(g, function(k, l) {
                         h.push(l.length + ":" + k)
                    });
                    _.y(b, "lenfreqs", h.join());
                    _.qa(b);
                    _.Ei(b, _.lh(58))
               }
          },
          Tq = function(a, b) {
               (_.x(143) ? _.M(a.j.N.M, 6) : a.m) || !_.L(b, 7) || Z(a, "click", _.L(b, 7))
          },
          Rq = function(a, b) {
               var c = a.j.N;
               a = c.M;
               b = c.T[b.getSlotElementId()];
               a = _.O(a, _.yh, 18);
               return (b = b && _.O(b, _.yh, 13)) && null != _.L(b, 3) ? !!_.M(b, 3) : !(!a || !_.M(a, 3))
          },
          Xq = function(a, b) {
               for (var c = 0; c < b.length; c++)
                    if ("" != b[c]) {
                         for (var d = !1, e = 0; e < a.v.length; e++)
                              if (b[c] == a.v[e]) {
                                   d = !0;
                                   break
                              } d || a.v.push(b[c])
                    }
          },
          Yq = function(a, b) {
               for (var c = "", d = 0; d < b.length; d++) {
                    if (0 < d) c += "/";
                    else if ("" == b[0]) continue;
                    for (var e = 0; e < a.v.length; e++)
                         if (b[d] == a.v[e]) {
                              c += e;
                              break
                         }
               }
               return c
          },
          Uq = function(a, b) {
               var c = "";
               "" != b && (b = _.p(b.split("/"), function(d) {
                    return d.replace(/,/g, ":")
               }), Xq(a, b), c = Yq(a, b));
               a.D.push(c)
          },
          Vq = function(a) {
               return Wq(a, function(b) {
                    return b.getOutOfPage()
               })
          },
          Wq = function(a, b) {
               var c = new _.uo;
               _.H(a, function(d, e) {
                    c.set(a.length - e - 1, b(d))
               });
               return _.vo(c)
          },
          Qq = function(a) {
               if (a.o) {
                    var b = _.p(a.j.j, function(c) {
                         return _.up(a.j, c)
                    });
                    Z(a, "ucis", b, {
                         pa: "|"
                    })
               } else 0 < a.j.j.length && Z(a, "uci", _.up(a.j, a.j.j[0]))
          },
          oq = function(a) {
               var b = a.j.N.M;
               _.M(b, 21) && (Z(a, "hxva", 1, {
                    W: !1
               }), Z(a, "cmsid", _.L(b, 23)), Z(a, "vid", _.L(b, 22)))
          },
          Sq = function(a, b) {
               b = ka(b, function(c) {
                    a.G && c.F++;
                    return c.F - 1
               }, 0);
               Z(a, a.o ? "rcs" : "rc", b)
          },
          Z = function(a, b, c, d) {
               d = void 0 === d ? {} : d;
               a.F[b] || void 0 === c || null === c || a.A.push({
                    Va: b,
                    value: c,
                    options: d
               })
          },
          kq = function(a) {
               a.l = "" + _.lh(247) + "/gampad/ads?";
               for (var b = 0; b < a.A.length; b++) {
                    var c = a.A[b];
                    if ("adsenseParameters" === c.Va) Zq(a, c);
                    else {
                         var d = $q(c);
                         if (ar(a, b, c, d)) break
                    }
               }
          },
          $q = function(a) {
               var b = a.value,
                    c = a.options,
                    d = void 0 === c.W ? !0 : c.W;
               a = void 0 === c.pa ? "," : c.pa;
               c = void 0 === c.ia ? !1 : c.ia;
               return _.C(b) ? _.B(b) && b.length ? _.p(b, function(e) {
                    return br(e, d)
               }).join(br(a, d)) : null : null == b || !c && 0 == b ? null : br(b, d)
          },
          ar = function(a, b, c, d) {
               if (!d) return !1;
               var e = c.Va,
                    f = c.value;
               c = c.options;
               c = void 0 === c.W ? !0 : c.W;
               d = e + "=" + d;
               if (_.x(168) && 15352 <= a.l.length + d.length) {
                    if ("supporting_urls" == e)
                         for (d = 0; d < f.length; d++) {
                              var g = (d ? br(",", c) : "&" + e + "=") + br(f[d], c);
                              if (15352 < a.l.length + g.length) break;
                              a.l += g
                         }
                    _.pa("gpt_url_trunc", function(h) {
                         _.y(h, "lps", _.q(a.A.slice(b), function(k) {
                              return !!$q(k)
                         }).map(function(k) {
                              return k.Va
                         }).join());
                         _.qa(h)
                    });
                    a.l += "&trunc=1";
                    return !0
               }
               "?" !== a.l[a.l.length - 1] && (a.l += "&");
               a.l += d;
               return !1
          },
          Zq = function(a, b) {
               var c = [],
                    d = [];
               b = _.B(b.value) ? b.value : [];
               b = _.r(b);
               for (var e = b.next(); !e.done; e = b.next()) {
                    var f = e.value;
                    e = f.Va;
                    var g = f.Wb,
                         h = f.Tc;
                    f = g ? encodeURIComponent(g.toString()) : "";
                    h ? (g = _.p(h, function(k) {
                         return k ? encodeURIComponent(encodeURIComponent(k)) : ""
                    }).join(","), d.push(e + "," + encodeURIComponent(f) + "," + g)) : g && "url" != e && c.push(e + "=" + f)
               }
               c.length && (a.l += "&" + c.join("&"));
               d.length && (a.l += "&sps=" + d.join("|"))
          },
          Fq = function(a) {
               a = qe(a.top) ? a.top : a;
               return _.C(a.AMP) && !!_.De(a.AMP, function(b, c) {
                    return !/^inabox/i.test(c)
               })
          },
          br = function(a, b) {
               a = a.toString();
               return b ? encodeURIComponent(a) : a
          },
          Kq = new _.Xd(-9, -9);
     var cr = null,
          er = function() {
               var a = this;
               this.j = {};
               this.l = _.ai.B();
               _.Q(_.A, "DOMContentLoaded", _.V(334, function() {
                    return dr(a)
               }))
          },
          fr = function() {
               return cr ? cr : window.performance && Pe(window.performance.now) ? cr = new er : null
          },
          hr = function(a, b) {
               var c = b.m.j;
               gr(a, b) ? delete a.j[c] : a.j[c] = b
          },
          ir = function(a, b) {
               var c = b.R;
               null != c ? Yl(c, b.o) : hr(a, b)
          },
          gr = function(a, b) {
               var c = _.T(b, _.A.document);
               if (c && "DIV" == c.nodeName) {
                    var d = _.x(87),
                         e = _.x(64);
                    a = new Wl({
                         Ka: _.A,
                         Yc: a.l,
                         ab: c,
                         ua: function(f) {
                              _.Li(336, f, 1)
                         },
                         Rc: d,
                         Qc: e
                    });
                    if (a.v) return Yl(a, b.o), b.R = a, !0
               }
               return !1
          },
          dr = function(a) {
               _.Ae(a.j) || (a.j = Lb(a.j, function(b) {
                    return !gr(a, b)
               }))
          };
     var jr = function(a) {
          _.K(this, a, null, null)
     };
     _.G(jr, _.J);
     var kr = function(a) {
          var b = new jr;
          return _.N(b, 1, a)
     };
     var lr;
     lr = function(a) {
          a && (a.style.display = "none")
     };
     _.mr = function(a, b, c, d, e) {
          a = _.ie(new _.Zd(a), "DIV");
          a.id = c;
          a.name = c;
          c = a.style;
          c.border = "0pt none";
          d && (c.margin = "auto", c.textAlign = "center");
          e && (d = _.B(e), c.width = d ? e[0] + "px" : "100%", c.height = d ? e[1] + "px" : "0%");
          b.appendChild(a);
          return a
     };
     var nr = function(a) {
          var b = _.xf(8, -1);
          return -1 != b ? b : null != _.L(a, 1) ? null != _.L(a, 3) && 0 != (0, _.Se)() ? _.L(a, 1) * _.td(a, 3) : _.L(a, 1) : null
     };
     var or;
     or = function(a) {
          this.id = a
     };
     _.pr = new or(1);
     _.qr = new or(2);
     _.rr = new or(3);
     _.sr = function() {
          this.j = {}
     };
     _.tr = function(a, b, c) {
          a = _.r(a.j[b.id] || []);
          for (b = a.next(); !b.done; b = a.next()) b = b.value, b(c)
     };
     _.ur = function(a, b, c) {
          var d = _.sr.B(),
               e = a.id,
               f = _.V(b, c, function(g, h) {
                    _.Mi(g, h, !0)
               });
          d.j[e] ? d.j[e].push(f) : d.j[e] = [f];
          return function() {
               var g = d.j[e];
               g && (_.ib(g, f), g.length || delete d.j[e])
          }
     };
     _.Ia(_.sr);
     var vr, wr, zr;
     vr = {};
     wr = (vr[1] = {
          Ab: "rendering"
     }, vr[2] = {
          Ab: "floating",
          rb: [1]
     }, vr[3] = {
          Ab: "interstitial",
          rb: [1]
     }, vr);
     _.xr = function() {
          this.l = {};
          this.j = wr
     };
     _.yr = function(a, b) {
          a.l[b] || (a.l[b] = _.Pn());
          return a.l[b]
     };
     zr = function(a, b) {
          var c = "_gpt_js_load_" + b + "_",
               d = _.V(340, function(e) {
                    if (a.j[b] && _.La(e)) {
                         var f = a.j[b];
                         f = _.p(void 0 === f.rb ? [] : f.rb, function(g) {
                              return _.yr(a, g).j
                         });
                         _.Nn(f).then(function() {
                              e.call(_.A, _)
                         })
                    }
               });
          Object.defineProperty(_.oa(), c, {
               value: function(e) {
                    if (d) {
                         var f = d;
                         d = null;
                         f(e)
                    }
               },
               writable: !1,
               enumerable: !1
          })
     };
     _.xr.prototype.load = function(a) {
          var b = _.yr(this, a),
               c = this.j[a].Ab,
               d = Zo.Aa(),
               e = Yo.Aa(),
               f = _.Bi();
          var g = _.xf(25);
          c = d + e + c + "_" + f + ".js";
          g && (c += "?" + g);
          g = c;
          zr(this, a);
          _.ve(document, g);
          return b.j
     };
     _.Ia(_.xr);
     _.xr.prototype.load = ij(_.xr.prototype.load);
     _.Ar = function() {
          this.j = {}
     };
     _.Ia(_.Ar);
     var Br;
     Br = function(a, b, c) {
          this.v = a;
          this.A = b;
          this.o = c;
          this.l = "";
          this.m = -1;
          this.U = 1;
          this.j = ""
     };
     _.Cr = function(a, b) {
          a.U = 4;
          try {
               a.A(b)
          } catch (c) {}
     };
     var Dr = function() {
               this.j = {}
          },
          Fr = function(a) {
               var b = Dr.B(),
                    c = window,
                    d;
               a && (d = "//" + a + ".safeframe.googlesyndication.com");
               a = _.Fl(c, _.em(), _.fm(), !0, d);
               b.j[a] || (b.j[a] = 1, Bo() ? Er(b, a) : _.oa().fifWin || (c = c.document, b = _.ie(new _.Zd(c), "IFRAME"), b.src = a, b.style.visibility = "hidden", b.style.display = "none", c = c.getElementsByTagName("script"), 0 < c.length && (c = c[c.length - 1], c.parentNode && c.parentNode.insertBefore(b, c.nextSibling))))
          },
          Er = function(a, b) {
               var c = Co(document, b, "prefetch", "");
               c && _.Q(c, "load", function() {
                    a.j[b] = 3;
                    c && _.ge(c)
               })
          };
     _.Ia(Dr);
     _.Gr = "3rd party ad content";
     na("setAdIframeTitle", function(a) {
          _.Gr = a
     });
     var Hr = function(a) {
          _.K(this, a, null, null)
     };
     _.G(Hr, _.J);
     Hr.prototype.getHtml = function() {
          return _.L(this, 3)
     };
     Hr.prototype.getError = function() {
          return _.L(this, 4)
     };
     var Ir = function(a, b) {
               if (a.getAttribute("data-ready")) b();
               else {
                    var c = _.tb(b),
                         d = function() {
                              c();
                              _.R(a, "load", d);
                              _.R(window, "message", e)
                         };
                    var e = function(f) {
                         "ready" === f.data && f.source === a.contentWindow && (c(), _.R(a, "load", d), _.R(window, "message", e))
                    };
                    _.Q(a, "load", d);
                    _.Q(window, "message", e)
               }
          },
          Jr = function(a) {
               a = void 0 === a ? lc() : a;
               var b = _.fe(document, "IFRAME");
               b.style.display = "none";
               b.name = "gpt_fetch_frame";
               var c = _.xf(24);
               a = c ? jc(a, String(c)) : a;
               _.xc(b, a);
               document.documentElement.appendChild(b);
               Ir(b, function() {
                    b.setAttribute("data-ready", "true")
               });
               return b
          },
          Lr = function(a) {
               var b = {},
                    c = void 0 === b.origin ? kc.Aa() : b.origin,
                    d = void 0 === b.url ? lc() : b.url;
               b = _.x(307);
               var e = _.x(306);
               if (b || e)
                    if (d = Kr() || Jr(d), b) Ir(d, a);
                    else {
                         var f = d.contentWindow,
                              g = new MessageChannel;
                         g.port1.onmessage = function(k) {
                              "ack" === k.data && (a(), g.port1.close())
                         };
                         var h = [g.port2];
                         Ir(d, function() {
                              f.postMessage("ack", c, h)
                         })
                    }
               else a()
          },
          Mr = function(a, b, c, d) {
               var e = {},
                    f = void 0 === e.origin ? kc.Aa() : e.origin;
               e = void 0 === e.url ? lc() : e.url;
               e = Kr() || Jr(e);
               var g = e.contentWindow,
                    h = new MessageChannel;
               h.port1.onmessage = function(l) {
                    try {
                         var m = l.data;
                         if ("complete" === m) c(), h.port1.close();
                         else if ("string" === typeof m) {
                              var t = JSON.parse(m),
                                   v = new Hr(t);
                              b(v)
                         }
                    } catch (w) {
                         d(w)
                    }
               };
               var k = [h.port2];
               Ir(e, function() {
                    g.postMessage(a.A(), f, k)
               })
          },
          Kr = function() {
               var a = document.getElementsByName("gpt_fetch_frame");
               return a.length ? a[0] : null
          };
     var Or;
     _.Nr = function(a, b) {
          this.A = a;
          this.j = b;
          this.v = !1;
          this.o = 0;
          this.m = !1
     };
     Or = function(a) {
          if (!a.v) {
               a.v = !0;
               var b = new XMLHttpRequest;
               b.open("GET", a.A);
               b.withCredentials = !0;
               b.onreadystatechange = function() {
                    _.Wa.push({
                         gb: a,
                         Ta: 17,
                         Qa: [!1, b]
                    })
               };
               b.onload = function() {
                    _.Wa.push({
                         gb: a,
                         Ta: 17,
                         Qa: [!0, b]
                    })
               };
               b.onerror = function(c) {
                    return _.Cr(a.j, c)
               };
               b.send()
          }
     };
     _.Nr.prototype.l = _.ba(18);
     var Pr, Qr, Rr, Sr, Tr, Ur, Vr, Wr, Xr, cs, fs, is, gs, hs, ks, Zr, ms, ns, as, js, qs, rs, ws, us, ys, xs, zs, os, vs, As, ts, ss, Bs, ls, Cs;
     Pr = function() {
          if (_.x(200)) return !1;
          if (Ub()) {
               if (_.x(109) && 0 <= _.Fb(_.Wb(), 12)) return !1;
               if (0 <= _.Fb(_.Wb(), 11)) return !0
          } else if (_.Sb() && _.x(112) && 0 <= _.Fb(_.Wb(), 65)) return !0;
          return !1
     };
     Qr = function(a, b) {
          Pr() ? Mo(_.V(a, b)) : b()
     };
     Rr = function(a, b) {
          var c = _.lh(221);
          hf(c, a.j[0] && a.j[0].Na ? a.j[0].A : "", _.V(451, b))
     };
     Sr = function(a, b, c) {
          b = new To(_.ee(b));
          _.x(274) && (_.La(b.m.__tcfapi) || null != Wo(b)) ? Vo(b, _.V(661, function(d) {
               var e = a.A;
               _.N(e, 2, d.tcString);
               void 0 != d.gdprApplies && _.N(e, 3, d.gdprApplies);
               d.addtlConsent && _.N(e, 4, d.addtlConsent);
               c()
          })) : c()
     };
     Tr = function(a, b, c) {
          _.x(258) ? Ro(new No(_.ee(b)), _.V(660, function(d) {
               d && "string" === typeof d.uspString && _.N(a.A, 1, d.uspString);
               c()
          })) : c()
     };
     Ur = function(a) {
          if (_.x(168) || 15360 >= a.length) return a;
          var b = _.x(164) && /&supporting_urls=/.test(a),
               c = a;
          if (15360 < c.length) {
               var d = b ? -1 : c.lastIndexOf("&", 15352); - 1 !== d ? c = c.substring(0, d) : (c = c.substring(0, 15352), c = c.replace(/%\w?$/, ""), b && (c = c.replace(/&[^=]*=?$/, "")));
               c += "&trunc=1"
          }
          b = c;
          Pg(_.ai.B(), (9).toString(), 9, a.length - b.length + 8);
          return b
     };
     Vr = function(a) {
          a.length && (a = a[0], _.Rg(_.ai.B(), "3", a.o))
     };
     Wr = function(a) {
          _.Mi(289, Error(a && a.message || "strm_err"), !0)
     };
     Xr = function(a, b) {
          if (_.x(177)) return !1;
          a = _.M(a, 11);
          null == a && (a = _.M(b, 10));
          return !!a
     };
     _.$r = function(a, b) {
          Yr || (Yr = new Ao);
          var c = Yr;
          var d = this;
          this.j = a;
          this.C = b;
          this.J = c;
          this.R = _.Vm.B();
          this.o = {};
          this.L = ij(this.L);
          this.A = _.V(291, this.A);
          this.O = null != (this.C.j.google_nofetch || null);
          this.ga = null != (this.C.j.google_norender || null);
          this.F = NaN;
          this.l = new ap;
          this.fa = 0;
          this.X = _.$e(_.A);
          this.m = {};
          this.aa = this.$ = NaN;
          this.Y = !1;
          this.v = {};
          this.D = 0;
          this.Z = {};
          this.G = {};
          this.K = _.V(643, this.K);
          _.ur(_.pr, 614, function(e) {
               var f = Xm.B().j;
               f = ri(f, Ym());
               Zr(d, [e], {}, f)
          })
     };
     _.bs = function(a, b, c, d, e) {
          var f = c.slot;
          c = c.ba;
          if (mp(a.j, f)) {
               if (d) {
                    var g = {};
                    g[f.getSlotElementId()] = c;
                    as(a, [f], e, g)
               }
               if (d || !_.Sm(f, b)) a = _.M(c, 10), null == a && (a = _.M(e, 11)), a && lr(_.T(f, b))
          }
     };
     _.$r.prototype.L = function(a, b) {
          var c = this;
          b = void 0 === b ? !1 : b;
          return _.A.IntersectionObserver ? new _.A.IntersectionObserver(function(d, e) {
               return c.A(d, e, b)
          }, {
               rootMargin: a
          }) : new _.fl(function(d, e) {
               return c.A(d, e, b)
          }, {
               rootMargin: a
          })
     };
     _.$r.prototype.A = function(a, b, c) {
          var d = this;
          c = void 0 === c ? !1 : c;
          _.H(a, function(e) {
               if (c || !(0 >= e.intersectionRatio)) {
                    b.unobserve(e.target);
                    e = e.target.id;
                    var f = d.o[e];
                    f && (f.call(d), delete d.o[e])
               }
          })
     };
     _.$r.prototype.V = _.ba(19);
     cs = function(a, b) {
          if (!b.length) return [];
          var c = bn.B().o,
               d = b[0].A;
          a = _.q(jp(a.j), function(e) {
               return e.A == d && !!e.X && !_.fb(b, e)
          });
          a = _.p(a, function(e) {
               return e.X
          });
          return jb(c, a)
     };
     _.es = function(a, b, c, d, e) {
          e = void 0 === e ? 0 : e;
          var f = new Ud;
          f = f.j.getUTCFullYear() + Bc(f.j.getUTCMonth() + 1) + Bc(f.j.getUTCDate());
          f = new tp(f, d);
          f.O = "ldjh";
          d = _.ds(d.M) ? "fifs" : "fif";
          f.C = d;
          f.v = a.X;
          f.o = c;
          f.j = b;
          f.D = e;
          a = _.r(b);
          for (b = a.next(); !b.done; b = a.next()) b = b.value, f.R[_.S(b)] = b.o;
          return f
     };
     fs = function(a, b) {
          b.K = _.Vg.B().j();
          b.G = a.l.getOseId();
          _.x(200) || (Jo(), b.J = Go[1], Jo(), b.L = Go[4], Jo(), b.P = Go[6]);
          b.persistentRoadblocksOnly = a.Y;
          b.videoPodNumber = a.$;
          b.videoPodPosition = a.aa;
          b.videoStreamCorrelator = a.F;
          b.F = cs(a, b.j)
     };
     is = function(a, b) {
          var c = gs(a, b);
          if ("boolean" === typeof c) c || hs(a, b);
          else return c.then(function() {
               hs(a, b)
          })
     };
     gs = function(a, b) {
          var c = b.j,
               d = b.N,
               e = d.M,
               f = d.T;
          d = _.O(e, _.uh, 5) || new _.uh;
          for (var g = _.r(c), h = g.next(); !h.done; h = g.next()) h.value.ra = d;
          g = _.x(296);
          d = nr(d);
          if (null == d) return g ? _.Kn() : !1;
          var k = Math.max(d / 100, 0);
          if (!bb(c, function(w) {
                    var E = f[w.getSlotElementId()];
                    return _.cg(_.T(w)) && !pp(a.j, window, k, {
                         slot: w,
                         ba: E
                    }, !!_.M(e, 15))
               })) return g ? _.Kn() : !1;
          d = a.L(d + "%");
          var l = g || _.x(275),
               m = _.Pn();
          g = function() {
               l ? m.resolve() : hs(a, b)
          };
          c = _.r(c);
          for (h = c.next(); !h.done; h = c.next()) {
               h = h.value;
               var t = h.getSlotElementId(),
                    v = _.T(h);
               v && (a.o[t] = g, d.observe(v), h.V = d)
          }
          return l ? m.j : !0
     };
     hs = function(a, b) {
          var c = b.j;
          null != c[0].V && _.H(c, function(d) {
               var e = d.getSlotElementId();
               js(a, _.T(d), e, d)
          });
          ks(a, b)
     };
     ks = function(a, b) {
          var c = ++a.fa;
          b.l = c;
          a.m[c] = b.j;
          _.Xg(2);
          fs(a, b);
          c = _.ds(b.N.M);
          c = new iq(c, a.j, a.C, a.J, b, !1);
          c = lq(c);
          ls(a, c, b);
          b.V = !0;
          a = b.j;
          _.xr.B().load(1);
          var d = _.x(298);
          c = _.x(287);
          var e = _.x(242),
               f = _.x(303);
          if (d && (c || e))
               if (f) Fr("constant");
               else
                    for (d = _.r(b.j), f = d.next(); !f.done; f = d.next()) Fr(_.up(b, f.value));
          c && e || Fr();
          if (1 !== a[0].G)
               for (b = _.Fg(), a = _.r(a), c = a.next(); !c.done; c = a.next()) c.value.Ia = b
     };
     Zr = function(a, b, c, d) {
          b = _.q(b, function(g) {
               return !g.qa
          });
          if (b.length) {
               for (var e = _.r(b), f = e.next(); !f.done; f = e.next()) f.value.qa = !0;
               ms(a, b, c, d)
          }
     };
     ms = function(a, b, c, d) {
          var e = _.Fg();
          b = qb(b, function(h) {
               h = h.Ia;
               return null == h ? 0 : Math.max(0, Math.round((1E3 - (e - h)) / 1E3))
          });
          var f = b[0] || [],
               g = bj.B();
          _.u(b, function(h, k) {
               var l = parseInt(k, 10);
               !l || 0 > l || (_.H(h, function(m) {
                    g.H(Qk(String(l), m.getAdUnitPath()))
               }), _.A.setTimeout(_.V(375, function() {
                    Qr(347, function() {
                         return ns(a, h, c, d)
                    })
               }), 1E3 * l))
          });
          f.length && Qr(347, function() {
               return ns(a, f, c, d)
          })
     };
     ns = function(a, b, c, d) {
          var e = d.M,
               f = d.T;
          _.H(b, function(l) {
               l.qa = !1
          });
          b = qb(b, function(l) {
               return 0 != _.Xh(f[l.getSlotElementId()]).length
          });
          if (b[!1])
               for (var g = _.r(b[!1]), h = g.next(); !h.done; h = g.next()) h = h.value, _.bs(a, document, {
                    slot: h,
                    ba: d.T[h.getSlotElementId()]
               }, !0, e);
          if (b = b[!0]) {
               var k = c.isVideoRefresh ? 3 : 2;
               _.H(b, function(l) {
                    _.Fm(l)
               });
               void 0 !== c.videoStreamCorrelator && (a.F = c.videoStreamCorrelator);
               a.$ = c.videoPodNumber || NaN;
               a.aa = c.videoPodPosition || NaN;
               a.Y = c.persistentRoadblocksOnly || !1;
               lp(a.j, b);
               if (!a.O)
                    if (_.ds(d.M))
                         for (c = os(a, b, b[0].A, d), c = _.r(c), e = c.next(); !e.done; e = c.next()) _.ps(a, _.es(a, e.value, k, d));
                    else _.H(b, function(l) {
                         _.ps(a, _.es(a, [l], k, d))
                    })
          }
     };
     as = function(a, b, c, d) {
          var e = _.Ar.B();
          _.ab(b, function(l) {
               l = (e.j[_.S(l)] || {}).vb || null;
               return !!l && !!l.j.length
          }) && _.Wa.push({
               Ta: 14,
               Qa: [b]
          });
          b = _.r(b);
          for (var f = b.next(); !f.done; f = b.next()) {
               f = f.value;
               var g = _.T(f),
                    h = _.S(f),
                    k = a.v[h];
               k ? (_.al(k), delete a.v[h]) : g && (g.innerHTML = "", g.removeAttribute("data-google-query-id"));
               Xr(d[f.getSlotElementId()], c) && lr(g);
               h = f.getSlotElementId();
               js(a, g, h, f);
               Nm(f)
          }
          return !0
     };
     js = function(a, b, c, d) {
          if (b && a.o[c]) {
               var e = d.V;
               e && (d.V = null, e.unobserve(b));
               delete a.o[c]
          }
     };
     qs = function(a, b) {
          (a = _.T(a, b)) && _.tr(_.sr.B(), _.qr, a)
     };
     _.ps = function(a, b, c) {
          c = void 0 === c ? document : c;
          a.D += b.j.length;
          for (var d = _.r(b.j), e = d.next(); !e.done; e = d.next()) e.value.za = !0;
          d = function() {
               Rr(b, function() {
                    Sr(b, c, function() {
                         Tr(b, c, function() {
                              return rs(a, b, c)
                         })
                    })
               })
          };
          var f = function(g) {
               Qe(_.A.top, "googlefcLoaded") ? g() : _.A.setTimeout(function() {
                    f(_.V(678, g))
               }, 500)
          };
          df() && _.x(302) ? f(d) : d()
     };
     rs = function(a, b, c) {
          c = void 0 === c ? document : c;
          var d = b.N,
               e = d.M,
               f = d.T,
               g = _.r(b.j);
          for (d = g.next(); !d.done; d = g.next()) ss(c, d.value, b.N);
          if (a = is(a, b)) a.then(function() {
               for (var h = _.r(b.j), k = h.next(); !k.done; k = h.next()) k = k.value, ts(k, e, f[k.getSlotElementId()])
          });
          else
               for (a = _.r(b.j), d = a.next(); !d.done; d = a.next()) c = d.value, ts(c, e, f[c.getSlotElementId()])
     };
     ws = function(a, b, c) {
          var d = void 0 === d ? document : d;
          Qr(348, function() {
               var e = _.x(275);
               if (e && (a.O || _.M(b.M, 4))) ts(c, b.M, b.T[c.getSlotElementId()]);
               else {
                    if (_.ds(b.M)) us(a, b, c, d);
                    else {
                         var f = b.T[c.getSlotElementId()];
                         0 != _.Xh(f).length ? vs(a, b, [
                              [c]
                         ], d) : _.bs(a, document, {
                              slot: c,
                              ba: f
                         }, !0, b.M)
                    }
                    e || ts(c, b.M, b.T[c.getSlotElementId()])
               }
          })
     };
     us = function(a, b, c, d) {
          qs(c, d);
          var e = _.V(632, function() {
               var f = xs(a, b, c.A, d);
               vs(a, b, f, d)
          });
          ys(a) ? _.A.setTimeout(e, 0) : e()
     };
     ys = function(a) {
          return !_.x(143) || 2 > a.D || !eg(_.A) ? !1 : !0
     };
     xs = function(a, b, c, d) {
          var e = kp(a.j),
               f = b.M,
               g = b.T;
          if (_.x(143) && !_.M(f, 6)) {
               var h = 0;
               e = _.q(e, function(k) {
                    if (!k.ja || !_.T(k, d) || _.L(g[k.getSlotElementId()], 7) && 0 < h) return !1;
                    ++h;
                    return !0
               })
          }
          return (e = zs(a, f, g, e)) ? os(a, e, c, b) : null
     };
     zs = function(a, b, c, d) {
          d = qb(d, function(e) {
               return 0 != _.Xh(c[e.getSlotElementId()]).length
          });
          d[!1] && As(a, b, c, d[!1]);
          return d[!0] || null
     };
     os = function(a, b, c, d) {
          var e = [];
          b = qb(b, function(f) {
               return f.A
          });
          _.u(b, function(f, g) {
               f = _.x(65) ? Bs(a, f, d) : f;
               g == c ? (g = _.xf(41) - a.D, e.unshift.apply(e, _.ua(0 >= g || g >= f.length ? [f.slice()] : [f.slice(0, g), f.slice(g)]))) : e.push(f)
          });
          return e
     };
     vs = function(a, b, c, d) {
          if (c) {
               var e = b.M,
                    f = b.T;
               if (_.x(275) || !a.O && !_.M(e, 4)) {
                    c = _.r(c);
                    for (var g = c.next(); !g.done; g = c.next()) {
                         var h = g.value;
                         g = void 0;
                         if (_.x(129)) {
                              g = _.q(h, function(w) {
                                   return !w.Ba
                              });
                              if (!g.length) break;
                              Cs(g, !0)
                         } else g = h;
                         var k = g.length,
                              l = g,
                              m = Va,
                              t = _.qi(_.ds(e));
                         h = t == m.ic ? [] : qp(a.j, g, e, f);
                         var v = h.length;
                         t == m.kc && v && v < k && (l = lb(g, 0, k - v));
                         g = _.es(a, l, 1, b);
                         g.m = h;
                         _.ps(a, g, d)
                    }
               }
          }
     };
     As = function(a, b, c, d) {
          d = _.r(d);
          for (var e = d.next(); !e.done; e = d.next()) {
               e = e.value;
               var f = c[e.getSlotElementId()];
               0 != _.Xh(f).length || _.bs(a, document, {
                    slot: e,
                    ba: f
               }, !0, b)
          }
     };
     ts = function(a, b, c) {
          var d = !!a.j;
          Xr(c, b) && !d && lr(_.T(a))
     };
     ss = function(a, b, c) {
          if (!_.ti(b, a)) {
               var d = _.T(b, a);
               if (d) {
                    var e = c.M,
                         f = c.T[b.getSlotElementId()];
                    c = _.Rm(b);
                    e = !!_.M(e, 15);
                    var g = _.Xh(f);
                    if (0 == g.length) f = null;
                    else if (f = g[0], 1 < g.length) {
                         b: if ((b = _.T(b, a)) && b.style.height && b.style.width)
                              for (b = [b.style.width, b.style.height], g = 0; g < b.length; ++g)
                                   if (2 < b[g].length && "px" == b[g].substring(b[g].length - 2)) b[g] = parseInt(b[g], 10);
                                   else {
                                        b = null;
                                        break b
                                   }
                         else b = null;f = b || f
                    }
                    _.mr(a, d, c, e, f)
               }
          }
     };
     Bs = function(a, b, c) {
          var d = c.M,
               e = c.T,
               f = [];
          _.H(b, function(g) {
               if (!g.getOutOfPage()) {
                    var h = e[g.getSlotElementId()];
                    h = np(a.j, {
                         slot: g,
                         ba: h
                    }, document, !!_.M(d, 15)) || {};
                    f.push({
                         Ib: void 0 === h.y ? Infinity : h.y,
                         slot: g
                    })
               }
          });
          nb(f, function(g, h) {
               return mb(g.Ib, h.Ib)
          });
          return _.p(b, function(g) {
               return g.getOutOfPage() ? g : f.shift().slot
          })
     };
     ls = function(a, b, c) {
          var d = void 0 === d ? _.A.document : d;
          var e = void 0 === e ? Wr : e;
          var f = c.j,
               g = c.N;
          a.G[c.l] = f.slice();
          var h = _.V(646, function(t, v, w) {
                    _.Wa.push({
                         gb: a,
                         Ta: 18,
                         Qa: [c, t, v, w, d]
                    })
               }),
               k = _.V(647, function() {
                    _.Wa.push({
                         gb: a,
                         Ta: 19,
                         Qa: [c]
                    })
               }),
               l = _.V(289, e),
               m = di(Ur(b));
          Vr(f);
          _.x(245) ? (b = kr(m), e = _.x(257), _.N(b, 2, e), Mr(b, function(t) {
               if (null != _.L(t, 4)) _.Li(652, Error(t.getError()));
               else {
                    var v = _.L(t, 1),
                         w = _.L(t, 2) || "";
                    t = t.getHtml() || "";
                    null != v && h(v, w, t)
               }
          }, k, l)) : Lr(_.V(323, function() {
               Or(new _.Nr(m, new Br(h, l, k)))
          }));
          b = _.r(f);
          for (e = b.next(); !e.done; e = b.next()) e = e.value, Lm(e), a.K(e, m, g);
          _.x(129) && Cs(f, !1);
          _.xr.B().load(1)
     };
     _.$r.prototype.K = function(a, b, c) {
          if (_.x(139) || _.ds(c.M)) {
               c = _.es(this, [a], 1, c);
               fs(this, c);
               c.C = "fif";
               var d = new iq(!1, this.j, this.C, this.J, c, !0);
               Mm(a, sb(function() {
                    return Ur(lq(d))
               }))
          } else Mm(a, function() {
               return b
          })
     };
     _.$r.prototype.I = _.ba(20);
     _.$r.prototype.P = _.ba(21);
     _.ds = function(a) {
          return !!_.M(a, 6) || _.x(143)
     };
     Cs = function(a, b) {
          a = _.r(a);
          for (var c = a.next(); !c.done; c = a.next()) c.value.Ba = b
     };
     var Ds = function() {
               this.m = this.j = this.l = null
          },
          Es = function(a) {
               null == a.l && (a.l = new hp);
               return a.l
          },
          zp = function(a) {
               if (a.j) return a.j;
               var b = Es(a);
               null == a.m && (a.m = new cq);
               a.j = new _.$r(b, a.m);
               return a.j
          },
          Yr = null,
          Fs = null,
          Ap = function() {
               Fs || (Fs = new Ds);
               return Fs
          };
     var Gs = function(a, b, c, d) {
          this.m = c;
          this.o = d;
          this.j = a;
          this.j.P = !0;
          this.j.addService(b);
          this.v = b
     };
     _.z(Gs, jj);
     Gs.prototype.Da = function() {
          return new Fp(this, this.m, this.o)
     };
     Gs.prototype.display = function(a) {
          var b = this.j.getSlotElementId();
          document.write('<div id="' + _.zc(b) + '"></div>');
          _.T(this.j) ? Hs(this.v, a, this.j) : _.pa("gpt_pb_write", function(c) {
               _.qa(c)
          })
     };
     Gs.prototype.set = function(a, b) {
          if ("string" !== typeof a || !b || "page_url" != a) return this;
          a = this.j;
          a.P && (a.sa = b);
          return this
     };
     Gs.prototype.get = function(a) {
          return "string" !== typeof a || "page_url" != a ? null : this.j.sa
     };
     var Is = function(a, b) {
               this.j = a;
               this.l = b
          },
          Js = function() {
               ym.call(this);
               this.G = !1;
               this.o = [];
               this.F = {};
               this.D = !1;
               this.v = _.x(87) || _.x(64) ? fr() : null;
               this.A = {}
          };
     _.z(Js, ym);
     _.n = Js.prototype;
     _.n.Da = function() {
          var a = Xm.B().j;
          return new Rp(this, Gm, a, Ym())
     };
     _.n.display = function(a, b, c, d) {
          c = void 0 === c ? "" : c;
          d = void 0 === d ? "" : d;
          var e = "";
          if (c)
               if (_.C(c) && 1 == c.nodeType) {
                    var f = c;
                    e = f.id
               } else e = c;
          am(this);
          b = ln(a, b, e);
          a = b.slot;
          b = b.Ca;
          a && b && (f && !e && (f.id = a.m.j), a.addService(this), _.N(b, 7, d), pn(f || a.m.j))
     };
     _.n.yb = function() {
          var a = Xm.B().j;
          if (_.M(a, 6)) {
               Ks(this, a);
               for (var b = _.r(this.m), c = b.next(); !c.done; c = b.next()) Ls(this, c.value)
          }
          Mp(this, a);
          this.D && Qp(this);
          sa()
     };
     _.n.da = function() {
          return "publisher_ads"
     };
     _.n.Hb = function(a) {
          0 != a.ea && (a.Ha = !1);
          a.P || Ls(this, a);
          this.v && hr(this.v, a);
          ym.prototype.Hb.call(this, a)
     };
     _.n.zb = function(a, b) {
          am(this);
          Ks(this, a.M);
          Ls(this, b);
          this.log.info(ak());
          var c = Ap(),
               d = zp(c);
          c = Es(c);
          var e = null != b.j && !_.ds(a.M);
          c.j[_.S(b)] && !e && ws(d, a, b);
          this.F[b.getAdUnitPath()] = !0;
          if (this.j)
               for (a = 0; a < this.o.length; ++a) b = this.o[a], this.F[b.j[0].getAdUnitPath()] && (Ms(this, b.j, b.l), _.hb(this.o, a--));
          else this.log.error(Zj(), this)
     };
     var Ls = function(a, b) {
               a.j && ip(Es(Ap()), b);
               if (a.j) {
                    var c = Xm.B();
                    var d = b.getSlotElementId();
                    if (d = c.l[d] || null) {
                         c = Es(Ap());
                         d = _.P(d, Bd, 3);
                         d = _.r(d);
                         for (var e = d.next(); !e.done; e = d.next()) {
                              var f = e.value;
                              e = _.L(f, 2);
                              if ((f = rh(f)) && e && e.length) {
                                   var g;
                                   if (g = !!c.j[_.S(b)]) {
                                        g = e[0];
                                        var h = _.S(b);
                                        null == c.m[h] && (c.m[h] = new bp(c.C));
                                        g = cp(c.m[h], f, g)
                                   }
                                   g || a.log.H(ck(f, e[0], b.getAdUnitPath()), a, b)
                              }
                         }
                    }
               }
          },
          Ks = function(a, b) {
               if ((_.x(148) || !a.G) && a.j) {
                    a.G = !0;
                    var c = _.P(b, Bd, 14);
                    b = Es(Ap());
                    c = _.r(c);
                    for (var d = c.next(); !d.done; d = c.next()) {
                         var e = d.value;
                         d = _.L(e, 2);
                         (e = rh(e)) && d && d.length && (cp(b.l, e, d[0]) || a.log.H(bk(e, d[0]), a))
                    }
               }
          },
          Kp = function(a, b, c) {
               if ("string" !== typeof b || 0 >= b.length || !c) return a.log.error(mj("PubAdsService.definePassback", [b, c])), null;
               c = ln(b, c, void 0, !0);
               b = c.slot;
               c = c.Ca;
               var d = Xm.B().j;
               return b && c ? new Gs(b, a, d, c) : null
          },
          Hs = function(a, b, c) {
               am(a);
               a = Ap();
               ip(Es(a), c);
               c.ja = !0;
               ws(zp(a), b, c)
          },
          Lp = function(a, b, c) {
               var d = null;
               if (c && (d = Ns(a, c), !d.length)) {
                    a.log.H(mj("PubAdsService.refresh", _.q([c], function(e) {
                         return void 0 !== e
                    })), a);
                    return
               }
               Ms(a, d, b)
          },
          Ms = function(a, b, c) {
               if (_.x(104)) am(a), _.H(b || [], function(d) {
                    d.addService(a)
               });
               else if (!a.j) {
                    _.M(c.M, 6) ? (a.log.info(mk(), a), b ? gb(a.o, new Is(b, c)) : gb(a.o, new Is(a.m, c))) : a.log.H(kk(), a);
                    return
               }
               a.log.info(nk(), a);
               if ((b = Os(a, b, {}, c)) && a.v)
                    for (b = _.r(b), c = b.next(); !c.done; c = b.next()) ir(a.v, c.value)
          },
          Os = function(a, b, c, d) {
               var e = Ap(),
                    f = zp(e),
                    g = Es(e);
               b = null != b ? _.q(b, function(l) {
                    return !!g.j[_.S(l)]
               }) : jp(g);
               var h = cb(b, function(l) {
                    return !!a.A[_.S(l)]
               });
               0 < h && _.pa("gpt_cbr", function(l) {
                    _.y(l, "num", h);
                    _.qa(l)
               });
               e = _.r(b);
               for (var k = e.next(); !k.done; k = e.next()) delete a.A[_.S(k.value)];
               e = _.q(b, function(l) {
                    return mp(g, l)
               });
               if (!e.length) return null;
               Zr(f, e, c, d);
               return b
          },
          Ps = function(a, b, c, d) {
               if (b && !_.B(b) || c.videoStreamCorrelator && "number" !== typeof c.videoStreamCorrelator || c.videoPodNumber && "number" !== typeof c.videoPodNumber || c.videoPodPosition && "number" !== typeof c.videoPodPosition || c.persistentRoadblocksOnly && "boolean" !== typeof c.persistentRoadblocksOnly) a.log.H(mj("PubAdsService.videoRefresh", _.q([b], function(f) {
                    return void 0 !== f
               })), a);
               else if (a.j) {
                    var e = null;
                    if (b && (e = Ns(a, b), !e.length)) {
                         a.log.error(jk("videoRefresh"), a);
                         return
                    }
                    a.log.info(nk(), a);
                    if ((b = Os(a, e, c, d)) && a.v)
                         for (b = _.r(b), c = b.next(); !c.done; c = b.next()) ir(a.v, c.value)
               } else a.log.H(kk(), a)
          },
          Pp = function(a, b) {
               return a.j ? {
                    vid: _.L(b, 22) || "",
                    cmsid: _.L(b, 23) || ""
               } : null
          },
          Mp = function(a, b) {
               _.M(b, 21) && a.j && (zp(Ap()).F = zi())
          },
          Op = function(a, b) {
               if (!_.x(297)) {
                    if (0 == a.m.length) return "not_available";
                    if (!a.j) return "not_loaded"
               }
               return _.L(b, 26) + ""
          },
          Qs = function(a, b, c, d) {
               var e = Ap(),
                    f = zp(e);
               e = Es(e);
               b = b ? Ns(a, b) : jp(e);
               e = {};
               for (var g = _.r(b), h = g.next(); !h.done; e = {
                         Xa: e.Xa
                    }, h = g.next()) e.Xa = _.S(h.value), a.A[e.Xa] || (a.A[e.Xa] = !0, setTimeout(function(k) {
                    return function() {
                         delete a.A[k.Xa]
                    }
               }(e), 0));
               return as(f, b, c, d)
          },
          Np = function(a, b, c, d) {
               if (!a.j) return a.log.H(lk(), a), !1;
               var e = null;
               if (d && (e = Ns(a, d), 0 == e.length)) return a.log.H(mj("PubAdsService.clear", _.q([d], function(f) {
                    return void 0 !== f
               })), a), !1;
               a.log.info(ok(), a);
               return Qs(a, e, b, c)
          };
     Js.prototype.getVersion = function() {
          if (this.j) return _.Bi()
     };
     var Ns = function(a, b) {
               var c = [];
               if (!_.B(b)) return c;
               _.H(b, function(d, e) {
                    (d = hh(d, Gm)) && !d.Ma() ? c.push(d) : a.log.H(tk(String(e)), a)
               });
               return c
          },
          Qp = function(a) {
               a.D = !0;
               if (a.j) {
                    a = Es(Ap());
                    a.v = !0;
                    var b = new _.Ci("gpt_markAsAmp", fi(), _.lh(23));
                    _.qa(b, a);
                    try {
                         var c = Jf(_.A);
                         c && _.y(b, "ntype", c);
                         var d = _.p(_.A.location.ancestorOrigins, function(e) {
                              return ((/^(?:https?:\/\/)?([^\/\?:#]+)/i.exec(e) || [])[1] || e).substr(0, 20)
                         });
                         _.y(b, "ost", d.slice(0, 10).join())
                    } catch (e) {}
                    _.Ei(b)
               }
          };
     Js.prototype.destroySlots = function(a) {
          var b = ym.prototype.destroySlots.call(this, a);
          if (!b.length) return b;
          if (this.j) {
               var c = Xm.B().j;
               Qs(this, a, c, Ym());
               op(Es(Ap()), a)
          }
          return b
     };
     var yp = _.V(26, function() {
          var a = Bm.B(),
               b = a.find("publisher_ads");
          b || (b = new Js, a.add(b));
          return b
     });
     na("pubads", function() {
          return yp().l()
     });
     var Rs = function() {
          ym.call(this);
          this.F = !1;
          this.L = 0;
          this.K = this.J = void 0;
          this.P = !1;
          this.A = {};
          this.v = {};
          this.o = !1;
          this.G = {};
          this.O = !1
     };
     _.z(Rs, ym);
     _.n = Rs.prototype;
     _.n.Da = function() {
          return new Dp(this, Gm)
     };
     _.n.set = function(a, b) {
          "string" === typeof a && 0 < a.length ? (this.G[a] = b, this.log.info(Oj(a, String(b), this.da()), this, null)) : this.log.H(Pj(String(a), String(b), this.da()), this, null);
          return this
     };
     _.n.get = function(a) {
          return this.G[a]
     };
     _.n.display = function(a, b, c, d) {
          c = void 0 === c ? "" : c;
          d = void 0 === d ? "" : d;
          am(this);
          b = ln(a, b, c);
          a = b.slot;
          b = b.Ca;
          a.addService(this);
          _.N(b, 7, d);
          pn(a.m.j)
     };
     _.n.yb = function() {
          this.D()
     };
     var wp = function(a) {
               var b = yp();
               if (!b.j) return !1;
               b = b.m;
               a = a.m;
               if (b.length != a.length) return !1;
               for (var c = 0; c < a.length; ++c) {
                    for (var d = !1, e = 0; e < b.length; ++e)
                         if (a[c] === b[e]) {
                              d = !0;
                              break
                         } if (!d) return !1
               }
               return !0
          },
          xp = function(a, b) {
               (b = void 0 === b ? "" : b) && !a.O && _.pa("ima_sdk_v", function(e) {
                    a.O = !0;
                    _.y(e, "v", b)
               });
               var c = yp(),
                    d = Xm.B().j;
               return Op(c, d)
          },
          vp = function(a, b) {
               var c = yp(),
                    d = Xm.B().j,
                    e = Ym();
               if (c.j) {
                    if (a.o) {
                         if (!wp(a)) {
                              a.log.H(Sj());
                              return
                         }
                         Qs(c, null, d, e)
                    }
                    var f = {
                         isVideoRefresh: !0
                    };
                    void 0 !== a.L && (f.videoStreamCorrelator = a.L);
                    a.J && (f.videoPodNumber = a.J);
                    a.K && (f.videoPodPosition = a.K);
                    a.o && (f.persistentRoadblocksOnly = a.o);
                    a = ri(d, e);
                    Ps(c, b, f, a)
               } else a.log.error(Tj("PubAds", "refresh"))
          },
          Bp = function(a, b) {
               if (yp().j && kn(b)) return a = b.j, !!a && !!_.M(a, 11);
               a.log.error(Uj());
               return !1
          };
     Rs.prototype.da = function() {
          return "companion_ads"
     };
     Rs.prototype.D = function() {
          if (!this.P) {
               var a = document;
               this.log.info(Wj("GPT CompanionAds"), this);
               _.ve(a, "https://pagead2.googlesyndication.com/pagead/show_companion_ad.js");
               this.P = !0
          }
     };
     Rs.prototype.R = function(a, b) {
          _.Li(a, b);
          this.log.error(Xj("GPT CompanionAds"), this)
     };
     var Cp = function(a, b) {
          var c = b && b.m.m;
          if (c && c in a.A && _.T(b) && a.j && !Bp(a, b)) {
               b.la = a.A[c];
               var d = new _.sm(b.l(), !1, a.da());
               if (a.v.hasOwnProperty(c)) {
                    var e = a.v[c];
                    delete a.v[c];
                    _.tm(d, e)
               }
               return Jm(b, d)
          }
          return !1
     };
     Rs.prototype.zb = function(a, b) {
          Cp(this, b)
     };
     var Ss = Rs.prototype;
     Ss.D = _.V(70, Ss.D, Ss.R);
     var Ts = _.V(57, function() {
          var a = Bm.B(),
               b = a.find("companion_ads");
          b || (b = new Rs, a.add(b));
          return b
     });
     na("companionAds", function() {
          return Ts().l()
     });
     var Vs = function(a, b) {
          bm.call(this, a);
          var c = this;
          this.setContent = W(72, function(d, e) {
               d = hh(d, b);
               var f;
               if (f = d) kn(d) && "string" === typeof e && 0 < e.length && (a.v[d.m.m] = e, Us(a, d)), f = void 0;
               return f
          });
          this.set = W(559, function(d, e) {
               a.set(d, e);
               return c
          });
          this.get = W(560, function(d) {
               return a.get(d)
          });
          this.getAttributeKeys = W(561, function() {
               return Be(a.o)
          });
          this.display = W(562, function(d, e, f, g) {
               return a.display(d, e, void 0 === f ? "" : f, void 0 === g ? "" : g)
          })
     };
     _.z(Vs, bm);
     var Ws = function() {
          ym.call(this);
          this.o = {};
          this.v = {}
     };
     _.z(Ws, ym);
     _.n = Ws.prototype;
     _.n.Da = function() {
          return new Vs(this, Gm)
     };
     _.n.da = function() {
          return "content"
     };
     _.n.set = function(a, b) {
          "string" === typeof a && 0 < a.length ? (this.o[a] = b, this.log.info(Oj(a, String(b), this.da()), this, null)) : this.log.H(Pj(String(a), String(b), this.da()), this, null);
          return this
     };
     _.n.get = function(a) {
          return this.o[a]
     };
     _.n.display = function(a, b, c, d) {
          c = void 0 === c ? "" : c;
          d = void 0 === d ? "" : d;
          am(this);
          b = ln(a, b, c);
          a = b.slot;
          b = b.Ca;
          a.addService(this);
          _.N(b, 7, d);
          pn(a.m.j)
     };
     var Us = function(a, b) {
          var c = b && b.m.m;
          c in a.v && a.j && _.T(b) && !b.L && (b.la = a.v[c], a = new _.sm(b.l(), !1, a.da()), Jm(b, a))
     };
     Ws.prototype.yb = function() {};
     Ws.prototype.zb = function(a, b) {
          Us(this, b)
     };
     var Xs = _.V(71, function() {
          var a = Bm.B(),
               b = a.find("content");
          b || (b = new Ws, a.add(b));
          return b
     });
     na("content", function() {
          return Xs().l()
     });
     if (window.googletag.evalScripts) window.googletag.evalScripts();
     else {
          var Ys = window,
               Zs = _.Gg(Ys);
          if (Zs) {
               var $s = {
                         label: "2",
                         type: 9,
                         value: Zs
                    },
                    at = Ys.google_js_reporting_queue = Ys.google_js_reporting_queue || [];
               2048 > at.length && at.push($s)
          }
          na("evalScripts", function() {
               aq(document)
          });
          bq()
     };
}).call(this, {});
