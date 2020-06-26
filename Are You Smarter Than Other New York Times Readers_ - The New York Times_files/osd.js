(function(window, document) {
     /*

      Copyright The Closure Library Authors.
      SPDX-License-Identifier: Apache-2.0
     */
     var k;

     function aa(a) {
          var b = 0;
          return function() {
               return b < a.length ? {
                    done: !1,
                    value: a[b++]
               } : {
                    done: !0
               }
          }
     }

     function ba(a) {
          var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
          return b ? b.call(a) : {
               next: aa(a)
          }
     }

     function q(a) {
          if (!(a instanceof Array)) {
               a = ba(a);
               for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
               a = c
          }
          return a
     }
     var ca = "function" == typeof Object.create ? Object.create : function(a) {
               function b() {}
               b.prototype = a;
               return new b
          },
          da;
     if ("function" == typeof Object.setPrototypeOf) da = Object.setPrototypeOf;
     else {
          var ea;
          a: {
               var fa = {
                         Gb: !0
                    },
                    ha = {};
               try {
                    ha.__proto__ = fa;
                    ea = ha.Gb;
                    break a
               } catch (a) {}
               ea = !1
          }
          da = ea ? function(a, b) {
               a.__proto__ = b;
               if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
               return a
          } : null
     }
     var ia = da;

     function t(a, b) {
          a.prototype = ca(b.prototype);
          a.prototype.constructor = a;
          if (ia) ia(a, b);
          else
               for (var c in b)
                    if ("prototype" != c)
                         if (Object.defineProperties) {
                              var d = Object.getOwnPropertyDescriptor(b, c);
                              d && Object.defineProperty(a, c, d)
                         } else a[c] = b[c]
     }
     var ja = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
          a != Array.prototype && a != Object.prototype && (a[b] = c.value)
     };

     function ka(a) {
          a = ["object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global, a];
          for (var b = 0; b < a.length; ++b) {
               var c = a[b];
               if (c && c.Math == Math) return c
          }
          throw Error("Cannot find global object");
     }
     var la = ka(this);

     function ma(a, b) {
          if (b) {
               var c = la;
               a = a.split(".");
               for (var d = 0; d < a.length - 1; d++) {
                    var e = a[d];
                    e in c || (c[e] = {});
                    c = c[e]
               }
               a = a[a.length - 1];
               d = c[a];
               b = b(d);
               b != d && null != b && ja(c, a, {
                    configurable: !0,
                    writable: !0,
                    value: b
               })
          }
     }
     var na = "function" == typeof Object.assign ? Object.assign : function(a, b) {
          for (var c = 1; c < arguments.length; c++) {
               var d = arguments[c];
               if (d)
                    for (var e in d) Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e])
          }
          return a
     };
     ma("Object.assign", function(a) {
          return a || na
     });
     ma("Math.trunc", function(a) {
          return a ? a : function(b) {
               b = Number(b);
               if (isNaN(b) || Infinity === b || -Infinity === b || 0 === b) return b;
               var c = Math.floor(Math.abs(b));
               return 0 > b ? -c : c
          }
     });
     var u = this || self;

     function oa() {}

     function v(a) {
          a.Pa = void 0;
          a.g = function() {
               return a.Pa ? a.Pa : a.Pa = new a
          }
     }

     function pa(a) {
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
     }

     function qa(a) {
          var b = pa(a);
          return "array" == b || "object" == b && "number" == typeof a.length
     }

     function ra(a) {
          return "function" == pa(a)
     }

     function sa(a) {
          var b = typeof a;
          return "object" == b && null != a || "function" == b
     }

     function ta(a, b) {
          var c = Array.prototype.slice.call(arguments, 1);
          return function() {
               var d = c.slice();
               d.push.apply(d, arguments);
               return a.apply(this, d)
          }
     }

     function ua(a, b) {
          a = a.split(".");
          var c = u;
          a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
          for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
     }

     function va(a, b) {
          function c() {}
          c.prototype = b.prototype;
          a.prototype = new c;
          a.prototype.constructor = a
     };
     var wa;

     function xa(a, b) {
          if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
          for (var c = 0; c < a.length; c++)
               if (c in a && a[c] === b) return c;
          return -1
     }

     function w(a, b, c) {
          for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
     }

     function ya(a, b) {
          for (var c = a.length, d = [], e = 0, f = "string" === typeof a ? a.split("") : a, g = 0; g < c; g++)
               if (g in f) {
                    var h = f[g];
                    b.call(void 0, h, g, a) && (d[e++] = h)
               } return d
     }

     function za(a, b) {
          for (var c = a.length, d = Array(c), e = "string" === typeof a ? a.split("") : a, f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
          return d
     }

     function Aa(a, b, c) {
          var d = c;
          w(a, function(e, f) {
               d = b.call(void 0, d, e, f, a)
          });
          return d
     }

     function Ba(a, b) {
          for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
               if (e in d && b.call(void 0, d[e], e, a)) return !0;
          return !1
     }

     function Ca(a, b) {
          var c = 0;
          w(a, function(d, e, f) {
               b.call(void 0, d, e, f) && ++c
          }, void 0);
          return c
     }

     function Da(a, b) {
          b = Ea(a, b, void 0);
          return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
     }

     function Ea(a, b, c) {
          for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++)
               if (f in e && b.call(c, e[f], f, a)) return f;
          return -1
     }

     function Fa(a, b) {
          return 0 <= xa(a, b)
     }

     function Ga(a) {
          return Array.prototype.concat.apply([], arguments)
     }

     function Ha(a) {
          var b = a.length;
          if (0 < b) {
               for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
               return c
          }
          return []
     }

     function Ia(a, b) {
          a.sort(b || Ja)
     }

     function Ja(a, b) {
          return a > b ? 1 : a < b ? -1 : 0
     }

     function Ka(a) {
          if (!arguments.length) return [];
          for (var b = [], c = arguments[0].length, d = 1; d < arguments.length; d++) arguments[d].length < c && (c = arguments[d].length);
          for (d = 0; d < c; d++) {
               for (var e = [], f = 0; f < arguments.length; f++) e.push(arguments[f][d]);
               b.push(e)
          }
          return b
     };

     function La(a) {
          var b = !1,
               c;
          return function() {
               b || (c = a(), b = !0);
               return c
          }
     };

     function Ma(a, b, c) {
          for (var d in a) b.call(c, a[d], d, a)
     }

     function Na(a, b) {
          var c = {},
               d;
          for (d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
          return c
     }

     function Oa(a) {
          var b = Pa,
               c;
          for (c in b)
               if (!a.call(void 0, b[c], c, b)) return !1;
          return !0
     }

     function Qa(a) {
          var b = [],
               c = 0,
               d;
          for (d in a) b[c++] = a[d];
          return b
     }
     var Ra = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

     function x(a, b) {
          for (var c, d, e = 1; e < arguments.length; e++) {
               d = arguments[e];
               for (c in d) a[c] = d[c];
               for (var f = 0; f < Ra.length; f++) c = Ra[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
          }
     };

     function Sa(a) {
          return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
     }
     var Ta = /&/g,
          Ua = /</g,
          Va = />/g,
          Wa = /"/g,
          Xa = /'/g,
          Ya = /\x00/g,
          Za = /[\x00&<>"']/;

     function z(a, b) {
          return -1 != a.toLowerCase().indexOf(b.toLowerCase())
     }

     function $a(a, b) {
          return a < b ? -1 : a > b ? 1 : 0
     };
     var A;
     a: {
          var ab = u.navigator;
          if (ab) {
               var bb = ab.userAgent;
               if (bb) {
                    A = bb;
                    break a
               }
          }
          A = ""
     }

     function B(a) {
          return -1 != A.indexOf(a)
     };

     function cb() {
          return B("Safari") && !(db() || B("Coast") || B("Opera") || B("Edge") || B("Edg/") || B("OPR") || B("Firefox") || B("FxiOS") || B("Silk") || B("Android"))
     }

     function db() {
          return (B("Chrome") || B("CriOS")) && !B("Edge")
     };

     function eb(a) {
          Za.test(a) && (-1 != a.indexOf("&") && (a = a.replace(Ta, "&amp;")), -1 != a.indexOf("<") && (a = a.replace(Ua, "&lt;")), -1 != a.indexOf(">") && (a = a.replace(Va, "&gt;")), -1 != a.indexOf('"') && (a = a.replace(Wa, "&quot;")), -1 != a.indexOf("'") && (a = a.replace(Xa, "&#39;")), -1 != a.indexOf("\x00") && (a = a.replace(Ya, "&#0;")));
          return a
     }

     function fb() {
          return "opacity".replace(/\-([a-z])/g, function(a, b) {
               return b.toUpperCase()
          })
     }

     function gb(a) {
          return String(a).replace(/([A-Z])/g, "-$1").toLowerCase()
     }

     function hb(a) {
          return a.replace(/(^|[\s]+)([a-z])/g, function(b, c, d) {
               return c + d.toUpperCase()
          })
     };

     function ib(a) {
          ib[" "](a);
          return a
     }
     ib[" "] = oa;

     function jb(a, b) {
          try {
               return ib(a[b]), !0
          } catch (c) {}
          return !1
     }

     function kb(a, b) {
          var c = lb;
          return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a)
     };
     var mb = B("Opera"),
          C = B("Trident") || B("MSIE"),
          nb = B("Edge"),
          ob = B("Gecko") && !(z(A, "WebKit") && !B("Edge")) && !(B("Trident") || B("MSIE")) && !B("Edge"),
          pb = z(A, "WebKit") && !B("Edge"),
          qb = pb && B("Mobile");

     function rb() {
          var a = u.document;
          return a ? a.documentMode : void 0
     }
     var sb;
     a: {
          var tb = "",
               ub = function() {
                    var a = A;
                    if (ob) return /rv:([^\);]+)(\)|;)/.exec(a);
                    if (nb) return /Edge\/([\d\.]+)/.exec(a);
                    if (C) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                    if (pb) return /WebKit\/(\S+)/.exec(a);
                    if (mb) return /(?:Version)[ \/]?(\S+)/.exec(a)
               }();ub && (tb = ub ? ub[1] : "");
          if (C) {
               var vb = rb();
               if (null != vb && vb > parseFloat(tb)) {
                    sb = String(vb);
                    break a
               }
          }
          sb = tb
     }
     var wb = sb,
          lb = {};

     function xb(a) {
          return kb(a, function() {
               for (var b = 0, c = Sa(String(wb)).split("."), d = Sa(String(a)).split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
                    var g = c[f] || "",
                         h = d[f] || "";
                    do {
                         g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                         h = /(\d*)(\D*)(.*)/.exec(h) || ["", "", "", ""];
                         if (0 == g[0].length && 0 == h[0].length) break;
                         b = $a(0 == g[1].length ? 0 : parseInt(g[1], 10), 0 == h[1].length ? 0 : parseInt(h[1], 10)) || $a(0 == g[2].length, 0 == h[2].length) || $a(g[2], h[2]);
                         g = g[3];
                         h = h[3]
                    } while (0 == b)
               }
               return 0 <= b
          })
     }
     var yb;
     if (u.document && C) {
          var zb = rb();
          yb = zb ? zb : parseInt(wb, 10) || void 0
     } else yb = void 0;
     var Ab = yb;
     var Bb = {},
          Cb = null;
     var Db = 0,
          Eb = 0;

     function Fb() {
          this.a = []
     }
     Fb.prototype.length = function() {
          return this.a.length
     };

     function Gb(a, b) {
          for (; 127 < b;) a.a.push(b & 127 | 128), b >>>= 7;
          a.a.push(b)
     }

     function Hb(a, b) {
          a.a.push(b >>> 0 & 255);
          a.a.push(b >>> 8 & 255);
          a.a.push(b >>> 16 & 255);
          a.a.push(b >>> 24 & 255)
     };

     function Ib() {
          this.b = [];
          this.a = new Fb
     }

     function Jb(a, b, c) {
          if (null != c) {
               Gb(a.a, 8 * b);
               a = a.a;
               var d = c;
               c = 0 > d;
               d = Math.abs(d);
               b = d >>> 0;
               d = Math.floor((d - b) / 4294967296);
               d >>>= 0;
               c && (d = ~d >>> 0, b = (~b >>> 0) + 1, 4294967295 < b && (b = 0, d++, 4294967295 < d && (d = 0)));
               Db = b;
               Eb = d;
               c = Db;
               for (b = Eb; 0 < b || 127 < c;) a.a.push(c & 127 | 128), c = (c >>> 7 | b << 25) >>> 0, b >>>= 7;
               a.a.push(c)
          }
     };

     function Kb() {}
     var Lb = "function" == typeof Uint8Array,
          Mb = [];

     function Nb(a) {
          var b = a.c + a.f;
          a.a[b] || (a.b = a.a[b] = {})
     }

     function Ob(a, b) {
          if (b < a.c) {
               b += a.f;
               var c = a.a[b];
               return c === Mb ? a.a[b] = [] : c
          }
          if (a.b) return c = a.b[b], c === Mb ? a.b[b] = [] : c
     }

     function Pb(a, b) {
          a = Ob(a, b);
          return null == a ? 0 : a
     }

     function Qb(a, b, c) {
          0 !== c ? b < a.c ? a.a[b + a.f] = c : (Nb(a), a.b[b] = c) : b < a.c ? a.a[b + a.f] = null : (Nb(a), delete a.b[b]);
          return a
     }

     function Rb(a) {
          if (a.h)
               for (var b in a.h) {
                    var c = a.h[b];
                    if ("array" == pa(c))
                         for (var d = 0; d < c.length; d++) c[d] && Rb(c[d]);
                    else c && Rb(c)
               }
     }
     Kb.prototype.toString = function() {
          Rb(this);
          return this.a.toString()
     };
     var Sb;
     Sb = ["av.key", "js", "20200311"].slice(-1)[0];
     var D = document,
          E = window;
     var Tb = La(function() {
          var a = !1;
          try {
               var b = Object.defineProperty({}, "passive", {
                    get: function() {
                         a = !0
                    }
               });
               u.addEventListener("test", null, b)
          } catch (c) {}
          return a
     });

     function Ub(a) {
          return a ? a.passive && Tb() ? a : a.capture || !1 : !1
     }

     function Vb(a, b, c, d) {
          return a.addEventListener ? (a.addEventListener(b, c, Ub(d)), !0) : !1
     }

     function Wb(a, b, c) {
          a.removeEventListener && a.removeEventListener(b, c, Ub(void 0))
     };
     var Xb = !C || 9 <= Number(Ab),
          Yb = C || mb || pb;

     function F(a, b) {
          this.x = void 0 !== a ? a : 0;
          this.y = void 0 !== b ? b : 0
     }
     F.prototype.ceil = function() {
          this.x = Math.ceil(this.x);
          this.y = Math.ceil(this.y);
          return this
     };
     F.prototype.floor = function() {
          this.x = Math.floor(this.x);
          this.y = Math.floor(this.y);
          return this
     };
     F.prototype.round = function() {
          this.x = Math.round(this.x);
          this.y = Math.round(this.y);
          return this
     };

     function G(a, b) {
          this.width = a;
          this.height = b
     }
     G.prototype.aspectRatio = function() {
          return this.width / this.height
     };
     G.prototype.ceil = function() {
          this.width = Math.ceil(this.width);
          this.height = Math.ceil(this.height);
          return this
     };
     G.prototype.floor = function() {
          this.width = Math.floor(this.width);
          this.height = Math.floor(this.height);
          return this
     };
     G.prototype.round = function() {
          this.width = Math.round(this.width);
          this.height = Math.round(this.height);
          return this
     };

     function Zb(a) {
          return a ? new $b(H(a)) : wa || (wa = new $b)
     }

     function ac() {
          var a = document;
          a.getElementsByClassName ? a = a.getElementsByClassName("GoogleActiveViewContainer")[0] : (a = document, a = a.querySelectorAll && a.querySelector ? a.querySelector(".GoogleActiveViewContainer") : bc(a, "*", "GoogleActiveViewContainer", void 0)[0] || null);
          return a || null
     }

     function bc(a, b, c, d) {
          a = d || a;
          b = b && "*" != b ? String(b).toUpperCase() : "";
          if (a.querySelectorAll && a.querySelector && (b || c)) return a.querySelectorAll(b + (c ? "." + c : ""));
          if (c && a.getElementsByClassName) {
               a = a.getElementsByClassName(c);
               if (b) {
                    d = {};
                    for (var e = 0, f = 0, g; g = a[f]; f++) b == g.nodeName && (d[e++] = g);
                    d.length = e;
                    return d
               }
               return a
          }
          a = a.getElementsByTagName(b || "*");
          if (c) {
               d = {};
               for (f = e = 0; g = a[f]; f++) b = g.className, "function" == typeof b.split && Fa(b.split(/\s+/), c) && (d[e++] = g);
               d.length = e;
               return d
          }
          return a
     }

     function cc(a, b) {
          Ma(b, function(c, d) {
               c && "object" == typeof c && c.ic && (c = c.hc());
               "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : dc.hasOwnProperty(d) ? a.setAttribute(dc[d], c) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, c) : a[d] = c
          })
     }
     var dc = {
          cellpadding: "cellPadding",
          cellspacing: "cellSpacing",
          colspan: "colSpan",
          frameborder: "frameBorder",
          height: "height",
          maxlength: "maxLength",
          nonce: "nonce",
          role: "role",
          rowspan: "rowSpan",
          type: "type",
          usemap: "useMap",
          valign: "vAlign",
          width: "width"
     };

     function ec(a) {
          var b = a.scrollingElement ? a.scrollingElement : pb || "CSS1Compat" != a.compatMode ? a.body || a.documentElement : a.documentElement;
          a = a.parentWindow || a.defaultView;
          return C && xb("10") && a.pageYOffset != b.scrollTop ? new F(b.scrollLeft, b.scrollTop) : new F(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
     }

     function fc(a) {
          return a ? a.parentWindow || a.defaultView : window
     }

     function gc(a, b, c) {
          var d = arguments,
               e = document,
               f = String(d[0]),
               g = d[1];
          if (!Xb && g && (g.name || g.type)) {
               f = ["<", f];
               g.name && f.push(' name="', eb(g.name), '"');
               if (g.type) {
                    f.push(' type="', eb(g.type), '"');
                    var h = {};
                    x(h, g);
                    delete h.type;
                    g = h
               }
               f.push(">");
               f = f.join("")
          }
          f = hc(e, f);
          g && ("string" === typeof g ? f.className = g : Array.isArray(g) ? f.className = g.join(" ") : cc(f, g));
          2 < d.length && ic(e, f, d);
          return f
     }

     function ic(a, b, c) {
          function d(g) {
               g && b.appendChild("string" === typeof g ? a.createTextNode(g) : g)
          }
          for (var e = 2; e < c.length; e++) {
               var f = c[e];
               !qa(f) || sa(f) && 0 < f.nodeType ? d(f) : w(jc(f) ? Ha(f) : f, d)
          }
     }

     function hc(a, b) {
          b = String(b);
          "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
          return a.createElement(b)
     }

     function H(a) {
          return 9 == a.nodeType ? a : a.ownerDocument || a.document
     }

     function kc(a) {
          try {
               return a.contentWindow || (a.contentDocument ? fc(a.contentDocument) : null)
          } catch (b) {}
          return null
     }

     function jc(a) {
          if (a && "number" == typeof a.length) {
               if (sa(a)) return "function" == typeof a.item || "string" == typeof a.item;
               if (ra(a)) return "function" == typeof a.item
          }
          return !1
     }

     function lc(a, b) {
          a && (a = a.parentNode);
          for (var c = 0; a;) {
               if (b(a)) return a;
               a = a.parentNode;
               c++
          }
          return null
     }

     function $b(a) {
          this.a = a || u.document || document
     };

     function mc() {
          return B("iPad") || B("Android") && !B("Mobile") || B("Silk")
     };
     var nc = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/\\#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;

     function oc(a) {
          try {
               return !!a && null != a.location.href && jb(a, "foo")
          } catch (b) {
               return !1
          }
     }

     function pc(a, b) {
          if (a)
               for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b.call(void 0, a[c], c, a)
     }

     function qc(a) {
          var b = [];
          pc(a, function(c, d) {
               b.push(d)
          });
          return b
     }

     function rc() {
          var a = sc;
          if (!a) return "";
          var b = /.*[&#?]google_debug(=[^&]*)?(&.*)?$/;
          try {
               var c = b.exec(decodeURIComponent(a));
               if (c) return c[1] && 1 < c[1].length ? c[1].substring(1) : "true"
          } catch (d) {}
          return ""
     };
     var tc = {
          dc: 1,
          fc: 2,
          cc: 3
     };

     function uc(a) {
          this.methodName = a
     }
     var vc = new uc(15),
          wc = new uc(5);

     function xc(a, b) {
          return b[a.methodName] || function() {}
     };

     function yc() {
          this.b = function(a, b) {
               return void 0 === b ? !1 : b
          };
          this.a = function() {}
     }

     function zc(a, b, c) {
          a.b = function(d, e) {
               return xc(wc, b)(d, e, c)
          };
          a.a = function() {
               xc(vc, b)(c)
          }
     }
     v(yc);

     function I(a, b, c, d) {
          this.top = a;
          this.right = b;
          this.bottom = c;
          this.left = d
     }

     function Ac(a) {
          return a.right - a.left
     }

     function Bc(a) {
          return a.bottom - a.top
     }

     function Cc(a) {
          return new I(a.top, a.right, a.bottom, a.left)
     }
     I.prototype.ceil = function() {
          this.top = Math.ceil(this.top);
          this.right = Math.ceil(this.right);
          this.bottom = Math.ceil(this.bottom);
          this.left = Math.ceil(this.left);
          return this
     };
     I.prototype.floor = function() {
          this.top = Math.floor(this.top);
          this.right = Math.floor(this.right);
          this.bottom = Math.floor(this.bottom);
          this.left = Math.floor(this.left);
          return this
     };
     I.prototype.round = function() {
          this.top = Math.round(this.top);
          this.right = Math.round(this.right);
          this.bottom = Math.round(this.bottom);
          this.left = Math.round(this.left);
          return this
     };

     function Dc(a, b, c) {
          b instanceof F ? (a.left += b.x, a.right += b.x, a.top += b.y, a.bottom += b.y) : (a.left += b, a.right += b, "number" === typeof c && (a.top += c, a.bottom += c));
          return a
     };

     function Ec(a) {
          a = void 0 === a ? u : a;
          var b = a.context || a.AMP_CONTEXT_DATA;
          if (!b) try {
               b = a.parent.context || a.parent.AMP_CONTEXT_DATA
          } catch (c) {}
          try {
               if (b && b.pageViewId && b.canonicalUrl) return b
          } catch (c) {}
          return null
     };

     function Fc(a, b, c) {
          a.google_image_requests || (a.google_image_requests = []);
          var d = a.document.createElement("img");
          c && (d.referrerPolicy = "no-referrer");
          d.src = b;
          a.google_image_requests.push(d)
     }

     function Gc(a) {
          if (Hc()) Fc(window, a, !0);
          else {
               var b = u.document;
               if (b.body) {
                    var c = b.getElementById("goog-srcless-iframe");
                    c || (c = hc((new $b(b)).a, "IFRAME"), c.style.display = "none", c.id = "goog-srcless-iframe", b.body.appendChild(c));
                    b = c
               } else b = null;
               b && b.contentWindow && Fc(b.contentWindow, a, !0)
          }
     }
     var Hc = La(function() {
          return "referrerPolicy" in u.document.createElement("img")
     });
     var Ic = {};

     function Jc(a) {
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
          C && a.ownerDocument.body && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
          return b
     }

     function Kc(a, b) {
          var c = new F(0, 0),
               d = fc(H(a));
          if (!jb(d, "parent")) return c;
          do {
               if (d == b) {
                    var e = a,
                         f = H(e);
                    var g = new F(0, 0);
                    var h = f ? H(f) : document;
                    h = !C || 9 <= Number(Ab) || "CSS1Compat" == Zb(h).a.compatMode ? h.documentElement : h.body;
                    e != h && (e = Jc(e), f = ec(Zb(f).a), g.x = e.left + f.x, g.y = e.top + f.y)
               } else g = Jc(a), g = new F(g.left, g.top);
               c.x += g.x;
               c.y += g.y
          } while (d && d != b && d != d.parent && (a = d.frameElement) && (d = d.parent));
          return c
     };

     function Lc(a) {
          return !(!a || !a.call) && "function" === typeof a
     }

     function Mc() {
          var a = D.documentElement,
               b = J();
          try {
               if (D.createEvent) {
                    var c = D.createEvent("CustomEvent");
                    c.initCustomEvent("osd_load", !0, !0, "");
                    a.dispatchEvent(c)
               } else if (Lc(b.CustomEvent)) {
                    var d = new b.CustomEvent("osd_load", {
                         bubbles: !0,
                         cancelable: !0,
                         detail: ""
                    });
                    a.dispatchEvent(d)
               } else if (Lc(b.Event)) {
                    var e = new Event("osd_load", {
                         bubbles: !0,
                         cancelable: !0
                    });
                    a.dispatchEvent(e)
               }
          } catch (f) {}
     }

     function Nc() {
          var a = J();
          return "complete" === a.document.readyState || !!a.google_onload_fired
     }
     var Oc = !!window.google_async_iframe_id,
          Pc = Oc && window.parent || window;

     function J() {
          if (Oc && !oc(Pc)) {
               var a = "." + D.domain;
               try {
                    for (; 2 < a.split(".").length && !oc(Pc);) D.domain = a = a.substr(a.indexOf(".") + 1), Pc = window.parent
               } catch (b) {}
               oc(Pc) || (Pc = window)
          }
          return Pc
     };

     function Qc(a, b, c) {
          try {
               a && (b = b.top);
               var d = void 0;
               var e = b;
               c = void 0 === c ? !1 : c;
               a && null !== e && e != e.top && (e = e.top);
               try {
                    if (void 0 === c ? 0 : c) var f = (new G(e.innerWidth, e.innerHeight)).round();
                    else {
                         var g = (e || window).document,
                              h = "CSS1Compat" == g.compatMode ? g.documentElement : g.body;
                         f = (new G(h.clientWidth, h.clientHeight)).round()
                    }
                    d = f
               } catch (r) {
                    d = new G(-12245933, -12245933)
               }
               a = d;
               var n = ec(Zb(b.document).a);
               if (-12245933 == a.width) {
                    var m = a.width;
                    var l = new I(m, m, m, m)
               } else l = new I(n.y, n.x + a.width, n.y + a.height, n.x);
               return l
          } catch (r) {
               return new I(-12245933, -12245933, -12245933, -12245933)
          }
     };
     var Rc = {
          NONE: 0,
          Sb: 1
     };

     function Sc() {
          this.o = 0;
          this.c = !1;
          this.b = -1;
          this.a = !1;
          this.f = 0
     }
     Sc.prototype.isVisible = function() {
          return this.a ? .3 <= this.o : .5 <= this.o
     };
     var K = {
               Fb: 0,
               Tb: 1
          },
          Tc = {
               Fb: 0,
               Zb: 1,
               $b: 2
          },
          Uc = {
               668123728: 0,
               668123729: 1
          },
          Vc = {
               NONE: 0,
               ac: 1,
               Ub: 2
          },
          Wc = {
               480596784: 0,
               480596785: 1,
               21063355: 2
          },
          Xc = {
               42530339: 0,
               42530340: 1
          };

     function Yc() {
          this.b = null;
          this.c = !1;
          this.a = null
     }

     function L(a) {
          a.c = !0;
          return a
     }

     function Zc(a, b) {
          a.a && w(b, function(c) {
               c = a.a[c];
               void 0 !== c && $c(a, c)
          })
     }

     function ad(a) {
          Yc.call(this);
          this.f = a
     }
     t(ad, Yc);

     function $c(a, b) {
          var c;
          if (!(c = null !== a.b)) {
               a: {
                    c = a.f;
                    for (d in c)
                         if (c[d] == b) {
                              var d = !0;
                              break a
                         } d = !1
               }
               c = !d
          }
          c || (a.b = b)
     };

     function bd() {
          this.a = {};
          this.b = {}
     }

     function M(a, b, c) {
          a.a[b] || (a.a[b] = new ad(c));
          return a.a[b]
     }

     function cd(a, b, c) {
          (a = a.a[b]) && $c(a, c)
     }

     function N(a, b) {
          var c = a.b;
          if (null !== c && b in c) return a.b[b];
          if (a = a.a[b]) return a.b
     }

     function dd(a) {
          var b = {},
               c = Na(a.a, function(d) {
                    return d.c
               });
          Ma(c, function(d, e) {
               d = void 0 !== a.b[e] ? String(a.b[e]) : d.c && null !== d.b ? String(d.b) : "";
               0 < d.length && (b[e] = d)
          }, a);
          return b
     }

     function ed(a, b) {
          b = b.split("&");
          for (var c = b.length - 1; 0 <= c; c--) {
               var d = b[c].split("="),
                    e = d[0];
               d = 1 < d.length ? parseInt(d[1], 10) : 1;
               isNaN(d) || (e = a.a[e]) && $c(e, d)
          }
          return b.join("&")
     }

     function fd(a, b) {
          w(Qa(a.a), function(c) {
               return Zc(c, b)
          })
     }

     function gd(a, b) {
          b && "string" === typeof b && (b = b.match(/[&;?]eid=([^&;]+)/)) && 2 === b.length && (b = decodeURIComponent(b[1]).split(","), b = za(b, function(c) {
               return Number(c)
          }), fd(a, b))
     };
     var hd = !C && !cb();

     function id(a, b) {
          if (/-[a-z]/.test(b)) return null;
          if (hd && a.dataset) {
               if (!(!B("Android") || db() || B("Firefox") || B("FxiOS") || B("Opera") || B("Silk") || b in a.dataset)) return null;
               a = a.dataset[b];
               return void 0 === a ? null : a
          }
          return a.getAttribute("data-" + gb(b))
     }

     function jd(a, b) {
          return /-[a-z]/.test(b) ? !1 : hd && a.dataset ? b in a.dataset : a.hasAttribute ? a.hasAttribute("data-" + gb(b)) : !!a.getAttribute("data-" + gb(b))
     };

     function kd() {
          this.b = this.a = null;
          this.c = "no"
     };

     function ld(a, b) {
          this.b = (void 0 === a ? 0 : a) || 0;
          this.a = (void 0 === b ? "" : b) || ""
     }

     function md(a) {
          return !!a.b || !!a.a
     }
     ld.prototype.toString = function() {
          return this.b + (this.a ? "-" : "") + this.a
     };

     function O() {}
     O.prototype.a = function() {
          return 0
     };
     O.prototype.c = function() {
          return 0
     };
     O.prototype.f = function() {
          return 0
     };
     O.prototype.b = function() {
          return 0
     };

     function nd() {
          if (!od()) throw Error();
     }
     t(nd, O);

     function od() {
          return !(!E || !E.performance)
     }
     nd.prototype.a = function() {
          return od() && E.performance.now ? E.performance.now() : O.prototype.a.call(this)
     };
     nd.prototype.c = function() {
          return od() && E.performance.memory ? E.performance.memory.totalJSHeapSize || 0 : O.prototype.c.call(this)
     };
     nd.prototype.f = function() {
          return od() && E.performance.memory ? E.performance.memory.usedJSHeapSize || 0 : O.prototype.f.call(this)
     };
     nd.prototype.b = function() {
          return od() && E.performance.memory ? E.performance.memory.jsHeapSizeLimit || 0 : O.prototype.b.call(this)
     };

     function pd() {
          return {
               visible: 1,
               hidden: 2,
               prerender: 3,
               preview: 4,
               unloaded: 5
          } [D.visibilityState || D.webkitVisibilityState || D.mozVisibilityState || ""] || 0
     };

     function qd() {}
     qd.prototype.isVisible = function() {
          return 1 === pd()
     };
     var rd = /^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/;

     function sd() {
          var a = u,
               b = [],
               c = null;
          do {
               var d = a;
               if (oc(d)) {
                    var e = d.location.href;
                    c = d.document && d.document.referrer || null
               } else e = c, c = null;
               b.push(new td(e || "", d));
               try {
                    a = d.parent
               } catch (f) {
                    a = null
               }
          } while (a && d != a);
          d = 0;
          for (a = b.length - 1; d <= a; ++d) b[d].depth = a - d;
          d = u;
          if (d.location && d.location.ancestorOrigins && d.location.ancestorOrigins.length == b.length - 1)
               for (a = 1; a < b.length; ++a) e = b[a], e.url || (e.url = d.location.ancestorOrigins[a - 1] || "", e.nb = !0);
          return b
     }

     function ud(a, b) {
          this.a = a;
          this.b = b
     }

     function td(a, b, c) {
          this.url = a;
          this.s = b;
          this.nb = !!c;
          this.depth = null
     };

     function vd() {
          this.c = "&";
          this.f = !1;
          this.b = {};
          this.h = 0;
          this.a = []
     }

     function wd(a, b) {
          var c = {};
          c[a] = b;
          return [c]
     }

     function xd(a, b, c, d, e) {
          var f = [];
          pc(a, function(g, h) {
               (g = yd(g, b, c, d, e)) && f.push(h + "=" + g)
          });
          return f.join(b)
     }

     function yd(a, b, c, d, e) {
          if (null == a) return "";
          b = b || "&";
          c = c || ",$";
          "string" == typeof c && (c = c.split(""));
          if (a instanceof Array) {
               if (d = d || 0, d < c.length) {
                    for (var f = [], g = 0; g < a.length; g++) f.push(yd(a[g], b, c, d + 1, e));
                    return f.join(c[d])
               }
          } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(xd(a, b, c, d, e + 1)) : "...";
          return encodeURIComponent(String(a))
     }

     function zd(a, b, c, d) {
          a.a.push(b);
          a.b[b] = wd(c, d)
     }

     function Ad(a, b, c) {
          b = b + "//pagead2.googlesyndication.com" + c;
          var d = Bd(a) - c.length;
          if (0 > d) return "";
          a.a.sort(function(l, r) {
               return l - r
          });
          c = null;
          for (var e = "", f = 0; f < a.a.length; f++)
               for (var g = a.a[f], h = a.b[g], n = 0; n < h.length; n++) {
                    if (!d) {
                         c = null == c ? g : c;
                         break
                    }
                    var m = xd(h[n], a.c, ",$");
                    if (m) {
                         m = e + m;
                         if (d >= m.length) {
                              d -= m.length;
                              b += m;
                              e = a.c;
                              break
                         }
                         a.f && (e = d, m[e - 1] == a.c && --e, b += m.substr(0, e), e = a.c, d = 0);
                         c = null == c ? g : c
                    }
               }
          a = "";
          null != c && (a = e + "trn=" + c);
          return b + a
     }

     function Bd(a) {
          var b = 1,
               c;
          for (c in a.b) b = c.length > b ? c.length : b;
          return 3997 - b - a.c.length - 1
     };

     function Cd() {
          this.b = new qd;
          this.a = od() ? new nd : new O
     }
     Cd.prototype.setInterval = function(a, b) {
          return E.setInterval(a, b)
     };
     Cd.prototype.clearInterval = function(a) {
          E.clearInterval(a)
     };
     Cd.prototype.setTimeout = function(a, b) {
          return E.setTimeout(a, b)
     };
     Cd.prototype.clearTimeout = function(a) {
          E.clearTimeout(a)
     };

     function Dd(a) {
          P();
          var b = J() || E;
          Fc(b, a, !1)
     }
     v(Cd);

     function Ed() {}

     function P() {
          var a = Ed.g();
          if (!a.a) {
               if (!E) throw Error("Context has not been set and window is undefined.");
               a.a = Cd.g()
          }
          return a.a
     }
     v(Ed);

     function Fd(a) {
          this.h = null;
          a || (a = []);
          this.f = -1;
          this.a = a;
          a: {
               if (a = this.a.length) {
                    --a;
                    var b = this.a[a];
                    if (!(null === b || "object" != typeof b || Array.isArray(b) || Lb && b instanceof Uint8Array)) {
                         this.c = a - -1;
                         this.b = b;
                         break a
                    }
               }
               this.c = Number.MAX_VALUE
          }
     }
     va(Fd, Kb);

     function Gd(a) {
          this.f = a;
          this.a = -1;
          this.b = this.c = 0
     }

     function Hd(a, b) {
          return function(c) {
               for (var d = [], e = 0; e < arguments.length; ++e) d[e] = arguments[e];
               if (-1 < a.a) return b.apply(null, q(d));
               try {
                    return a.a = a.f.a.a(), b.apply(null, q(d))
               } finally {
                    a.c += a.f.a.a() - a.a, a.a = -1, a.b += 1
               }
          }
     };

     function Id(a, b) {
          this.b = a;
          this.c = b;
          this.a = new Gd(a)
     };

     function Q() {
          this.h = void 0;
          this.c = this.m = 0;
          this.i = this.j = -1;
          this.a = new bd;
          L(M(this.a, "mv", Vc)).a = void 0 === Wc ? null : Wc;
          M(this.a, "omid", K);
          L(M(this.a, "epoh", K));
          L(M(this.a, "epph", K));
          L(M(this.a, "umt", K)).a = void 0 === Uc ? null : Uc;
          L(M(this.a, "phel", K));
          L(M(this.a, "phell", K));
          L(M(this.a, "oseid", tc));
          L(M(this.a, "xdi", K));
          L(M(this.a, "amp", K));
          L(M(this.a, "prf", K));
          L(M(this.a, "gtx", K));
          L(M(this.a, "mvp_lv", K));
          M(this.a, "xosd", K);
          this.a.b.xosd = 1;
          this.a.b.mxd = 1;
          L(M(this.a, "msp", K));
          L(M(this.a, "eocm", K));
          L(M(this.a, "pnl", Tc));
          L(M(this.a, "ecs", K)).a = void 0 === Xc ? null : Xc;
          this.l = new Id(P(), this.a);
          this.b = null;
          this.f = !1
     }

     function Jd() {
          return Q.g().l
     }
     v(Q);

     function Kd() {
          var a = "https:";
          E && E.location && "http:" === E.location.protocol && (a = "http:");
          this.b = a;
          this.a = .01
     }

     function Ld(a, b, c, d) {
          if (Math.random() < (d || a.a)) try {
               if (c instanceof vd) var e = c;
               else e = new vd, pc(c, function(g, h) {
                    var n = e,
                         m = n.h++;
                    g = wd(h, g);
                    n.a.push(m);
                    n.b[m] = g
               });
               var f = Ad(e, a.b, "/pagead/gen_204?id=" + b + "&");
               f && Dd(f)
          } catch (g) {}
     };

     function Md(a, b, c) {
          c = void 0 === c ? {} : c;
          this.error = a;
          this.context = b.context;
          this.msg = b.message || "";
          this.id = b.id || "jserror";
          this.meta = c
     };
     var Nd = null;

     function Od() {
          var a = u.performance;
          return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : +new Date
     }

     function Pd() {
          var a = void 0 === a ? u : a;
          return (a = a.performance) && a.now ? a.now() : null
     };

     function Qd(a, b, c) {
          this.label = a;
          this.type = b;
          this.value = c;
          this.duration = 0;
          this.uniqueId = Math.random();
          this.slotId = void 0
     };
     var R = u.performance,
          Rd = !!(R && R.mark && R.measure && R.clearMarks),
          Sd = La(function() {
               var a;
               if (a = Rd) {
                    var b;
                    if (null === Nd) {
                         Nd = "";
                         try {
                              a = "";
                              try {
                                   a = u.top.location.hash
                              } catch (c) {
                                   a = u.location.hash
                              }
                              a && (Nd = (b = a.match(/\bdeid=([\d,]+)/)) ? b[1] : "")
                         } catch (c) {}
                    }
                    b = Nd;
                    a = !!b.indexOf && 0 <= b.indexOf("1337")
               }
               return a
          });

     function Td() {
          var a = J();
          this.b = [];
          this.c = a || u;
          var b = null;
          a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.b = a.google_js_reporting_queue, b = a.google_measure_js_timing);
          this.a = Sd() || (null != b ? b : 1 > Math.random())
     }

     function Ud(a) {
          a && R && Sd() && (R.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_start"), R.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_end"))
     }
     Td.prototype.start = function(a, b) {
          if (!this.a) return null;
          var c = Pd() || Od();
          a = new Qd(a, b, c);
          b = "goog_" + a.label + "_" + a.uniqueId + "_start";
          R && Sd() && R.mark(b);
          return a
     };

     function Vd() {
          var a = Wd;
          this.i = Xd;
          this.h = "jserror";
          this.f = !0;
          this.b = null;
          this.j = this.c;
          this.a = void 0 === a ? null : a
     }

     function Yd(a, b, c) {
          return Hd(Jd().a, function() {
               try {
                    if (a.a && a.a.a) {
                         var d = a.a.start(b.toString(), 3);
                         var e = c();
                         var f = a.a,
                              g = d;
                         if (f.a && "number" === typeof g.value) {
                              var h = Pd() || Od();
                              g.duration = h - g.value;
                              var n = "goog_" + g.label + "_" + g.uniqueId + "_end";
                              R && Sd() && R.mark(n);
                              !f.a || 2048 < f.b.length || f.b.push(g)
                         }
                    } else e = c()
               } catch (m) {
                    f = a.f;
                    try {
                         Ud(d), f = a.j(b, new Zd($d(m)), void 0, void 0)
                    } catch (l) {
                         a.c(217, l)
                    }
                    if (!f) throw m;
               }
               return e
          })()
     }

     function ae(a, b) {
          var c = be;
          return Hd(Jd().a, function(d) {
               for (var e = [], f = 0; f < arguments.length; ++f) e[f] = arguments[f];
               return Yd(c, a, function() {
                    return b.apply(void 0, e)
               })
          })
     }
     Vd.prototype.c = function(a, b, c, d, e) {
          e = e || this.h;
          try {
               var f = new vd;
               f.f = !0;
               zd(f, 1, "context", a);
               b.error && b.meta && b.id || (b = new Zd($d(b)));
               b.msg && zd(f, 2, "msg", b.msg.substring(0, 512));
               var g = b.meta || {};
               if (this.b) try {
                    this.b(g)
               } catch (y) {}
               if (d) try {
                    d(g)
               } catch (y) {}
               b = [g];
               f.a.push(3);
               f.b[3] = b;
               var h = sd(),
                    n = new td(u.location.href, u, !1);
               b = null;
               var m = h.length - 1;
               for (d = m; 0 <= d; --d) {
                    var l = h[d];
                    !b && rd.test(l.url) && (b = l);
                    if (l.url && !l.nb) {
                         n = l;
                         break
                    }
               }
               l = null;
               var r = h.length && h[m].url;
               0 != n.depth && r && (l = h[m]);
               var p = new ud(n, l);
               p.b && zd(f, 4, "top", p.b.url || "");
               zd(f, 5, "url", p.a.url || "");
               Ld(this.i, e, f, c)
          } catch (y) {
               try {
                    Ld(this.i, e, {
                         context: "ecmserr",
                         rctx: a,
                         msg: $d(y),
                         url: p && p.a.url
                    }, c)
               } catch (Eg) {}
          }
          return this.f
     };

     function $d(a) {
          var b = a.toString();
          a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
          a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
          if (a.stack) {
               a = a.stack;
               try {
                    -1 == a.indexOf(b) && (a = b + "\n" + a);
                    for (var c; a != c;) c = a, a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1");
                    b = a.replace(/\n */g, "\n")
               } catch (d) {}
          }
          return b
     }

     function Zd(a) {
          Md.call(this, Error(a), {
               message: a
          })
     }
     t(Zd, Md);
     var Xd, be, Wd = new Td;

     function ce() {
          var a = J();
          a && "undefined" != typeof a.google_measure_js_timing && !a.google_measure_js_timing && (a = Wd, a.a = !1, a.b != a.c.google_js_reporting_queue && (Sd() && w(a.b, Ud), a.b.length = 0))
     }(function() {
          Xd = new Kd;
          be = new Vd;
          var a = J();
          a && a.document && ("complete" == a.document.readyState ? ce() : Wd.a && Vb(a, "load", function() {
               ce()
          }))
     })();

     function de(a) {
          be.b = function(b) {
               w(a, function(c) {
                    c(b)
               })
          }
     }

     function ee(a, b) {
          return Yd(be, a, b)
     }

     function fe(a, b) {
          return ae(a, b)
     }

     function ge(a, b, c, d) {
          be.c(a, b, c, d)
     };
     var he = Date.now(),
          ie = -1,
          je = -1,
          ke = !1;

     function S() {
          return Date.now() - he
     }

     function le() {
          var a = Q.g().h,
               b = 0 <= je ? S() - je : -1,
               c = ke ? S() - ie : -1;
          if (947190542 == a) return 100;
          if (79463069 == a) return 200;
          a = [2E3, 4E3];
          var d = [250, 500, 1E3];
          ge(637, Error(), .001);
          var e = b; - 1 != c && c < b && (e = c);
          for (b = 0; b < a.length; ++b)
               if (e < a[b]) {
                    var f = d[b];
                    break
               } void 0 === f && (f = d[a.length]);
          return f
     };

     function me(a) {
          for (var b = 0, c = a, d = 0; a && a != a.parent;) a = a.parent, d++, oc(a) && (c = a, b = d);
          return {
               s: c,
               level: b
          }
     };
     var Pa = {
          Rb: "addEventListener",
          Vb: "getMaxSize",
          Wb: "getScreenSize",
          Xb: "getState",
          Yb: "getVersion",
          ec: "removeEventListener",
          bc: "isViewable"
     };

     function ne(a) {
          var b = a !== a.top,
               c = a.top === me(a).s,
               d = -1,
               e = 0;
          if (b && c && a.top.mraid) {
               d = 3;
               var f = a.top.mraid
          } else d = (f = a.mraid) ? b ? c ? 2 : 1 : 0 : -1;
          f && (f.IS_GMA_SDK || (e = 2), Oa(function(g) {
               return ra(f[g])
          }) || (e = 1));
          return {
               F: f,
               va: e,
               Ab: d
          }
     };

     function oe(a) {
          a = Ec(a);
          return !(!a || !a.observeIntersection)
     }

     function pe(a) {
          return (a = a.document) && ra(a.elementFromPoint)
     };
     if (D && D.URL) {
          var qe, sc = D.URL;
          qe = !!sc && 0 < rc().length;
          be.f = !qe
     }

     function re(a, b, c, d) {
          var e = void 0 === e ? !1 : e;
          c = ae(d, c);
          Vb(a, b, c, {
               capture: e
          });
          return c
     }

     function se(a) {
          var b = ["IMG", "FRAME", "IFRAME"];
          return Ba(b, function(c) {
               return a.nodeName == String(c)
          }) ? [a] : Aa(b, function(c, d) {
               return c.concat(Ha((a || document).getElementsByTagName(String(d))))
          }, [])
     }

     function te(a, b) {
          if (a) {
               var c = 0,
                    d = null;
               a = se(a);
               for (var e = 0; e < a.length; e++) {
                    var f = !1;
                    d = a[e];
                    switch (d.nodeName) {
                         case "IMG":
                              var g = d;
                              if (g.complete || g.naturalWidth) f = !0;
                              break;
                         case "FRAME":
                         case "IFRAME":
                              g = d;
                              try {
                                   if (g.readyState) f = "complete" == g.readyState;
                                   else {
                                        var h = g.contentWindow || g.contentDocument;
                                        h.document && (h = h.document);
                                        f = h && h.readyState ? "complete" == h.readyState : !1
                                   }
                              } catch (n) {
                                   f = !1
                              }
                    }
                    f || (c++, re(d, "load", function() {
                         c--;
                         c || b(null)
                    }, 130))
               }
               a = d = null;
               !c && b(null)
          }
     };

     function ue(a) {
          var b = [];
          Ma(a, function(c, d) {
               d = encodeURIComponent(d);
               "string" === typeof c && (c = encodeURIComponent(c));
               b.push(d + "=" + c)
          });
          b.push("24=" + Date.now());
          return b.join("\n")
     };
     var ve = 0;

     function we(a) {
          var b = Math.pow(10, 2);
          return Math.floor(a * b) / b
     }

     function xe(a, b) {
          try {
               ve++, b.postMessage(a, "*")
          } catch (c) {}
     }

     function ye(a, b) {
          b && (a(b), b.frames && w(b.frames, function(c) {
               ye(a, c)
          }))
     }

     function ze(a) {
          return new I(a.top, a.right, a.bottom, a.left)
     }

     function Ae() {
          var a = P().b;
          return 0 === pd() ? -1 : a.isVisible() ? 0 : 1
     }

     function Be(a) {
          return [a.top, a.left, a.bottom, a.right].join("-")
     }

     function Ce(a, b, c) {
          if (b && a)
               if (c && 0 < c.length)
                    for (c = ya(c, function(e) {
                              var f = e.parent && e.parent !== e;
                              return e === E.top || f
                         }), a = ba(c), c = a.next(); !c.done; c = a.next()) xe(b, c.value);
               else {
                    c = [];
                    var d = kc(a);
                    d && c.push(d);
                    if (0 === c.length) try {
                         c = za(bc(document, "IFRAME".toString().toLowerCase(), void 0, a), function(e) {
                              return kc(e)
                         })
                    } catch (e) {}
                    a = ba(c);
                    for (c = a.next(); !c.done; c = a.next()) {
                         c = c.value;
                         try {
                              b && ye(ta(xe, b), c)
                         } catch (e) {}
                    }
               }
     }

     function De(a, b, c) {
          try {
               var d = ue(b);
               Ce(a, d, c)
          } catch (e) {}
     };

     function Ee() {
          var a = A;
          return a ? Ba("Android TV;AppleTV;Apple TV;GoogleTV;HbbTV;NetCast.TV;Opera TV;POV_TV;SMART-TV;SmartTV;TV Store;AmazonWebAppPlatform;MiBOX".split(";"), function(b) {
               return z(a, b)
          }) || z(a, "OMI/") && !z(a, "XiaoMi/") ? !0 : z(a, "Presto") && z(a, "Linux") && !z(a, "X11") && !z(a, "Android") && !z(a, "Mobi") : !1
     }

     function Fe() {
          var a = A;
          return z(a, "AppleTV") || z(a, "Apple TV") || z(a, "CFNetwork") || z(a, "tvOS")
     }

     function Ge() {
          var a = A;
          return z(a, "sdk_google_atv_x86") || z(a, "Android TV")
     };

     function T() {
          this.b = !oc(E.top);
          this.w = !this.b || oe(E);
          this.i = mc() || !mc() && (B("iPod") || B("iPhone") || B("Android") || B("IEMobile"));
          var a = sd();
          a = 0 < a.length && null != a[a.length - 1] && null != a[a.length - 1].url ? ((a = a[a.length - 1].url.match(nc)[3] || null) ? decodeURI(a) : a) || "" : "";
          this.domain = a;
          this.a = new I(0, 0, 0, 0);
          this.j = new G(0, 0);
          this.h = new G(0, 0);
          this.c = new I(0, 0, 0, 0);
          this.l = new F(0, 0);
          this.u = this.m = !1;
          this.f = !(!E || !ne(E).F);
          He(this)
     }

     function Ie(a, b) {
          b && b.screen && (a.j = new G(b.screen.width, b.screen.height))
     }

     function Je(a, b) {
          var c = a.a ? new G(Ac(a.a), Bc(a.a)) : new G(0, 0);
          b = void 0 === b ? E : b;
          null !== b && b != b.top && (b = b.top);
          var d = 0,
               e = 0;
          try {
               var f = b.document,
                    g = f.body,
                    h = f.documentElement;
               if ("CSS1Compat" == f.compatMode && h.scrollHeight) d = h.scrollHeight != c.height ? h.scrollHeight : h.offsetHeight, e = h.scrollWidth != c.width ? h.scrollWidth : h.offsetWidth;
               else {
                    var n = h.scrollHeight,
                         m = h.scrollWidth,
                         l = h.offsetHeight,
                         r = h.offsetWidth;
                    h.clientHeight != l && (n = g.scrollHeight, m = g.scrollWidth, l = g.offsetHeight, r = g.offsetWidth);
                    n > c.height ? n > l ? (d = n, e = m) : (d = l, e = r) : n < l ? (d = n, e = m) : (d = l, e = r)
               }
               var p = new G(e, d)
          } catch (y) {
               p = new G(-12245933, -12245933)
          }
          a.h = p
     }

     function He(a) {
          E && E.document && (a.c = Qc(!1, E, a.i), a.a = Qc(!0, E, a.i), Je(a, E), Ie(a, E))
     }

     function Ke() {
          if (T.g().u) return !0;
          var a = P().b.isVisible(),
               b = 0 === pd();
          return a || b
     }
     v(T);
     var Le = new I(0, 0, 0, 0);

     function Me(a, b) {
          b = Ne(b);
          return 0 === b ? 0 : Ne(a) / b
     }

     function Ne(a) {
          return Math.max(a.bottom - a.top, 0) * Math.max(a.right - a.left, 0)
     }

     function Oe(a, b) {
          if (!a || !b) return !1;
          for (var c = 0; null !== a && 100 > c++;) {
               if (a === b) return !0;
               try {
                    a: {
                         var d = void 0;
                         if (Yb && !(C && xb("9") && !xb("10") && u.SVGElement && a instanceof u.SVGElement) && (d = a.parentElement)) {
                              var e = d;
                              break a
                         }
                         d = a.parentNode;e = sa(d) && 1 == d.nodeType ? d : null
                    }
                    if (a = e || a) {
                         var f = H(a),
                              g = f && fc(f),
                              h = g && g.frameElement;
                         h && (a = h)
                    }
               }
               catch (n) {
                    break
               }
          }
          return !1
     }

     function Pe(a, b, c) {
          if (!a || !b) return !1;
          b = Dc(Cc(a), -b.left, -b.top);
          a = (b.left + b.right) / 2;
          b = (b.top + b.bottom) / 2;
          var d = J();
          oc(d.top) && d.top && d.top.document && (d = d.top);
          if (!pe(d)) return !1;
          a = d.document.elementFromPoint(a, b);
          if (!a) return !1;
          b = (b = (b = H(c)) && b.defaultView && b.defaultView.frameElement) && Oe(b, a);
          d = a === c;
          a = !d && a && lc(a, function(e) {
               return e === c
          });
          return !(b || d || a)
     }

     function Qe(a, b, c, d) {
          return T.g().b ? !1 : 0 >= Ac(a) || 0 >= Bc(a) ? !0 : c && d ? ee(208, function() {
               return Pe(a, b, c)
          }) : !1
     };

     function Re(a, b, c) {
          var d = new I(0, 0, 0, 0);
          this.time = a;
          this.volume = null;
          this.c = b;
          this.a = d;
          this.b = c
     };

     function Se(a, b, c, d, e, f, g) {
          this.j = a;
          this.i = b;
          this.c = c;
          this.a = d;
          this.h = e;
          this.b = f;
          this.f = g
     };

     function Te(a) {
          this.c = a;
          this.b = 0;
          this.a = null
     }
     Te.prototype.cancel = function() {
          P().clearTimeout(this.a);
          this.a = null
     };

     function Ue(a) {
          var b = P();
          a.a = b.setTimeout(Hd(Jd().a, fe(143, function() {
               a.b++;
               a.c.zb()
          })), le())
     };

     function U(a, b, c) {
          this.s = a;
          this.N = void 0 === c ? "na" : c;
          this.h = [];
          this.m = !1;
          this.c = new Re(-1, !0, this);
          this.a = this;
          this.i = b;
          this.u = this.l = !1;
          this.G = "uk";
          this.D = !1;
          this.j = !0
     }
     k = U.prototype;
     k.X = function() {
          return !1
     };
     k.Oa = function() {
          return this.m = !0
     };
     k.V = function() {
          return this.a.G
     };
     k.fa = function() {
          return this.a.u
     };

     function Ve(a, b, c) {
          if (!a.u || (void 0 === c ? 0 : c)) a.u = !0, a.G = b, a.i = 0, a.a != a || We(a)
     }
     k.A = function() {
          return this.a.N
     };
     k.K = function() {
          return this.a.hb()
     };
     k.hb = function() {
          return {}
     };
     k.L = function() {
          return this.a.i
     };

     function Xe(a, b) {
          Fa(a.h, b) || (a.h.push(b), b.ea(a.a), b.P(a.c), b.R() && (a.l = !0))
     }
     k.Sa = function() {
          var a = T.g();
          a.a = Qc(!0, this.s, a.i)
     };
     k.Ta = function() {
          Ie(T.g(), this.s)
     };
     k.sb = function() {
          Je(T.g(), this.s)
     };
     k.tb = function() {
          var a = T.g();
          a.c = Qc(!1, this.s, a.i)
     };
     k.Ma = function() {
          return this.c.a
     };

     function Ye(a) {
          a = a.a;
          a.Ta();
          a.Sa();
          a.tb();
          a.sb();
          a.c.a = a.Ma()
     }
     k.zb = function() {};

     function Ze(a) {
          a.l = a.h.length ? Ba(a.h, function(b) {
               return b.R()
          }) : !1
     }

     function $e(a) {
          var b = Ha(a.h);
          w(b, function(c) {
               c.P(a.c)
          })
     }

     function We(a) {
          var b = Ha(a.h);
          w(b, function(c) {
               c.ea(a.a)
          });
          a.a != a || $e(a)
     }
     k.ea = function(a) {
          var b = this.a;
          this.a = a.L() >= this.i ? a : this;
          b !== this.a ? (this.j = this.a.j, We(this)) : this.j !== this.a.j && (this.j = this.a.j, We(this))
     };
     k.P = function(a) {
          if (a.b === this.a) {
               var b = this.c,
                    c = this.l;
               if (c = a && (void 0 === c || !c || b.volume == a.volume) && b.c == a.c) b = b.a, c = a.a, c = b == c ? !0 : b && c ? b.top == c.top && b.right == c.right && b.bottom == c.bottom && b.left == c.left : !1;
               this.c = a;
               !c && $e(this)
          }
     };
     k.R = function() {
          return this.l
     };
     k.B = function() {
          this.D = !0
     };
     k.ga = function() {
          return this.D
     };

     function af(a, b, c, d) {
          this.c = a;
          this.a = new I(0, 0, 0, 0);
          this.l = new I(0, 0, 0, 0);
          this.b = b;
          this.G = c;
          this.D = d;
          this.C = !1;
          this.timestamp = -1;
          this.h = new Se(b.c, this.a, new I(0, 0, 0, 0), 0, 0, S(), 0)
     }
     k = af.prototype;
     k.Aa = function() {
          return !0
     };
     k.S = function() {};
     k.La = function() {
          if (this.c) {
               var a = this.c,
                    b = this.b.a.s;
               try {
                    try {
                         var c = ze(a.getBoundingClientRect())
                    } catch (m) {
                         c = new I(0, 0, 0, 0)
                    }
                    var d = c.right - c.left,
                         e = c.bottom - c.top,
                         f = Kc(a, b),
                         g = f.x,
                         h = f.y;
                    var n = new I(Math.round(h), Math.round(g + d), Math.round(h + e), Math.round(g))
               } catch (m) {
                    n = Cc(Le)
               }
               this.a = n
          }
     };
     k.ab = function() {
          this.l = this.b.c.a
     };
     k.O = function() {
          this.La();
          this.h = new Se(this.b.c, this.a, this.h.c, this.h.a, this.h.h, S(), this.h.f)
     };
     k.B = function() {
          if (!this.ga()) {
               var a = this.b,
                    b = a.h,
                    c = xa(b, this);
               0 <= c && Array.prototype.splice.call(b, c, 1);
               a.l && this.R() && Ze(a);
               this.S();
               this.C = !0
          }
     };
     k.ga = function() {
          return this.C
     };
     k.K = function() {
          return this.b.K()
     };
     k.L = function() {
          return this.b.L()
     };
     k.V = function() {
          return this.b.V()
     };
     k.fa = function() {
          return this.b.fa()
     };
     k.ea = function() {};
     k.P = function() {
          this.O()
     };
     k.R = function() {
          return this.D
     };

     function bf(a) {
          this.h = !1;
          this.a = a;
          this.f = oa
     }
     k = bf.prototype;
     k.L = function() {
          return this.a.L()
     };
     k.V = function() {
          return this.a.V()
     };
     k.fa = function() {
          return this.a.fa()
     };
     k.create = function(a, b, c) {
          var d = null;
          this.a && (d = this.wa(a, b, c), Xe(this.a, d));
          return d
     };
     k.Ra = function() {
          return this.W()
     };
     k.W = function() {
          return !1
     };
     k.lb = function(a) {
          return this.a.Oa() ? (Xe(this.a, this), this.f = a, !0) : !1
     };
     k.ea = function(a) {
          0 == a.L() && this.f(a.V(), this)
     };
     k.P = function() {};
     k.R = function() {
          return !1
     };
     k.B = function() {
          this.h = !0
     };
     k.ga = function() {
          return this.h
     };
     k.K = function() {
          return {}
     };

     function cf(a, b, c) {
          this.c = void 0 === c ? 0 : c;
          this.b = a;
          this.a = null == b ? "" : b
     }

     function df(a) {
          switch (Math.trunc(a.c)) {
               case -16:
                    return -16;
               case -8:
                    return -8;
               case 0:
                    return 0;
               case 8:
                    return 8;
               case 16:
                    return 16;
               default:
                    return 16
          }
     }

     function ef(a, b) {
          return a.c < b.c ? !0 : a.c > b.c ? !1 : a.b < b.b ? !0 : a.b > b.b ? !1 : typeof a.a < typeof b.a ? !0 : typeof a.a > typeof b.a ? !1 : a.a < b.a
     };

     function ff() {
          this.c = 0;
          this.a = [];
          this.b = !1
     }
     ff.prototype.add = function(a, b, c) {
          ++this.c;
          a = new cf(a, b, c);
          this.a.push(new cf(a.b, a.a, a.c + this.c / 4096));
          this.b = !0;
          return this
     };

     function gf(a, b) {
          w(b.a, function(c) {
               a.add(c.b, c.a, df(c))
          })
     }

     function hf(a, b) {
          var c = void 0 === c ? 0 : c;
          var d = void 0 === d ? !0 : d;
          pc(b, function(e, f) {
               d && void 0 === e || a.add(f, e, c)
          })
     }

     function jf(a) {
          var b = kf;
          a.b && (Ia(a.a, function(c, d) {
               return ef(d, c) ? 1 : ef(c, d) ? -1 : 0
          }), a.b = !1);
          return Aa(a.a, function(c, d) {
               d = b(d);
               return "" + c + ("" != c && "" != d ? "&" : "") + d
          }, "")
     };

     function kf(a) {
          var b = a.b;
          a = a.a;
          return "" === a ? b : "boolean" === typeof a ? a ? b : "" : "array" == pa(a) ? 0 === a.length ? b : b + "=" + a.join() : b + "=" + (Fa(["mtos", "tos", "p"], b) ? a : encodeURIComponent(a))
     };

     function lf(a) {
          var b = void 0 === b ? !0 : b;
          this.a = new ff;
          void 0 !== a && gf(this.a, a);
          b && this.a.add("v", Sb, -16)
     }
     lf.prototype.toString = function() {
          var a = "//pagead2.googlesyndication.com//pagead/gen_204",
               b = jf(this.a);
          0 < b.length && (a += "?" + b);
          return a
     };

     function mf(a) {
          var b = [],
               c = [];
          Ma(a, function(d, e) {
               if (!(e in Object.prototype) && "undefined" != typeof d) switch ("array" == pa(d) && (d = d.join(",")), d = [e, "=", d].join(""), e) {
                    case "adk":
                    case "r":
                    case "tt":
                    case "error":
                    case "mtos":
                    case "tos":
                    case "p":
                    case "bs":
                    case "aio":
                    case "nio":
                    case "iem":
                         b.unshift(d);
                         break;
                    case "req":
                    case "url":
                    case "referrer":
                    case "iframe_loc":
                         c.push(d);
                         break;
                    default:
                         b.push(d)
               }
          });
          return b.concat(c)
     }

     function nf() {
          if (Sb && "unreleased" !== Sb) return Sb
     };

     function of () {
          this.a = 0
     }
     v( of );

     function pf(a) {
          this.m = a;
          this.l = !1
     }
     pf.prototype.i = function(a, b) {
          this.a = a;
          this.b = b
     };

     function qf() {
          pf.call(this, "capability")
     }
     t(qf, pf);
     qf.prototype.j = function() {
          return !0
     };
     qf.prototype.h = function() {
          var a = {};
          return a.b_name = this.a.T, a.v_name = this.b.T, a
     };

     function rf() {
          pf.call(this, "diff")
     }
     t(rf, pf);
     rf.prototype.j = function() {
          return !(.02 >= Math.abs(this.b.o - this.a.o))
     };
     rf.prototype.h = function() {
          var a = {};
          return a.b_name = this.a.T, a.v_name = this.b.T, a.b_vp_off = JSON.stringify(this.a.I), a.v_vp_off = JSON.stringify(this.b.I), a.b_vp_sz = JSON.stringify(this.a.Wa), a.v_vp_sz = JSON.stringify(this.b.Wa), a.b_exp = this.a.o, a.v_exp = this.b.o, a.efp_occ = this.a.Db, a.sbv = this.a.ia, a
     };

     function sf() {
          pf.call(this, "capt");
          this.f = [];
          this.c = []
     }
     t(sf, pf);
     sf.prototype.i = function(a, b) {
          pf.prototype.i.call(this, a, b);
          20 <= this.c.length || (this.f.push(a.o), this.c.push(b.o))
     };
     sf.prototype.j = function() {
          return 20 === this.c.length
     };
     sf.prototype.h = function() {
          var a = tf(this.f, this.c),
               b = uf(this.f, this.c),
               c = {};
          return c.b_name = this.a.T, c.v_name = this.b.T, c.b_exp = this.f.join(","), c.v_exp = this.c.join(","), c.diff = a, c.diff_buckets = b, c
     };

     function tf(a, b) {
          return Ca(Ka(a, b), function(c) {
               return c[0] !== c[1]
          })
     }

     function uf(a, b) {
          function c(d) {
               return .25 * Math.floor(d / .25)
          }
          return tf(za(a, c), za(b, c))
     };

     function V() {
          this.Z = this.Z;
          this.sa = this.sa
     }
     V.prototype.Z = !1;
     V.prototype.ga = function() {
          return this.Z
     };
     V.prototype.B = function() {
          this.Z || (this.Z = !0, this.U())
     };
     V.prototype.U = function() {
          if (this.sa)
               for (; this.sa.length;) this.sa.shift()()
     };

     function vf(a, b, c, d, e) {
          e = void 0 === e ? [new qf, new rf, new sf] : e;
          V.call(this);
          this.a = a.wa(b, c, this.R());
          this.a.Aa();
          this.c = e;
          this.b = d
     }
     t(vf, V);
     vf.prototype.U = function() {
          this.a && (this.a.S(), this.a.B())
     };

     function wf(a, b, c) {
          w(a.c, function(d) {
               var e = a.b;
               if (!d.l && (d.i(b, c), d.j())) {
                    d.l = !0;
                    var f = d.h(),
                         g = new ff;
                    g.add("id", "av-js");
                    g.add("type", "verif");
                    g.add("vtype", d.m);
                    d = of .g();
                    g.add("i", d.a++);
                    g.add("adk", e);
                    hf(g, f);
                    e = new lf(g);
                    var h = void 0 === h ? 4E3 : h;
                    e = e.toString();
                    /&v=[^&]+/.test(e) || (e = (f = nf()) ? e + "&v=" + encodeURIComponent(f) : e);
                    e = e.substring(0, h);
                    Dd(e)
               }
          })
     }
     vf.prototype.P = function() {};
     vf.prototype.ea = function() {};
     vf.prototype.R = function() {
          return !1
     };

     function xf() {
          this.a = this.b = this.c = 0
     }

     function yf(a, b, c, d) {
          b && (a.c += c, a.b += c, a.a = Math.max(a.a, a.b));
          if (void 0 === d ? !b : d) a.b = 0
     };
     var zf = [1, .75, .5, .3, 0];

     function Af(a) {
          this.a = a = void 0 === a ? zf : a;
          this.b = za(this.a, function() {
               return new xf
          })
     }

     function Bf(a) {
          return Cf(a, function(b) {
               return b.c
          }, !1)
     }

     function Df(a) {
          return Cf(a, function(b) {
               return b.a
          }, !0)
     }

     function Ef(a, b, c, d, e, f) {
          var g = void 0 === g ? !0 : g;
          c = f ? Math.min(b, c) : c;
          for (f = 0; f < a.a.length; f++) {
               var h = a.a[f],
                    n = 0 < c && c >= h;
               h = !(0 < b && b >= h) || d;
               yf(a.b[f], g && n, e, !g || h)
          }
     }

     function Cf(a, b, c) {
          a = za(a.b, function(d) {
               return b(d)
          });
          return c ? a : Ff(a)
     }

     function Ff(a) {
          return za(a, function(b, c, d) {
               return 0 < c ? d[c] - d[c - 1] : d[c]
          })
     };

     function Gf() {
          this.a = new Af;
          this.c = new xf;
          this.b = -1;
          this.f = new Af([1, .9, .8, .7, .6, .5, .4, .3, .2, .1, 0])
     }

     function W(a) {
          return 1E3 <= a.c.a
     };
     var Hf = new I(0, 0, 0, 0);

     function If(a, b, c) {
          V.call(this);
          this.Qb = Cc(Hf);
          this.c = new Gf;
          this.na = -2;
          this.Cb = -1;
          this.Ha = b;
          this.ma = null;
          this.N = !1;
          this.I = null;
          this.D = -1;
          this.ba = c;
          this.Eb = this.Ia = oa;
          this.a = new kd;
          this.a.a = a;
          this.a.b = a;
          this.m = !1;
          this.i = {
               Ca: null,
               Ba: null
          };
          this.ca = !0;
          this.H = null;
          this.Ga = !1;
          Q.g().m++;
          this.f = new Sc;
          this.Bb = this.ua = -1;
          this.Fa = 0;
          this.$ = -1;
          this.b = null;
          this.Ka = new I(0, 0, 0, 0);
          this.vb = !1;
          a = this.h = new bd;
          M(a, "od", Rc);
          L(M(a, "opac", K));
          L(M(a, "gcm", K));
          M(a, "cm", K);
          a.b.cm = 1;
          L(M(a, "sbeos", K));
          L(M(a, "prf", K));
          L(M(a, "mwt", K));
          L(M(a, "lcs", K));
          M(a, "iogeo", K);
          L(M(a, "osddt", K));
          L(M(a, "nrl", K));
          (a = this.a.a) && a.getAttribute && jd(a, "googleAvInapp") && (T.g().f = !0);
          1 == this.ba ? cd(this.h, "od", 1) : cd(this.h, "od", 0)
     }
     t(If, V);
     k = If.prototype;
     k.U = function() {
          Jf(this);
          this.H && this.H.B();
          this.b && this.b.B();
          delete this.c;
          delete this.Ia;
          delete this.Eb;
          delete this.a.a;
          delete this.a.b;
          delete this.i;
          delete this.H;
          delete this.b;
          delete this.h;
          V.prototype.U.call(this)
     };

     function Kf(a) {
          return a.b ? a.b.a : a.Qb
     }
     k.za = function(a) {
          var b = Q.g();
          "string" === typeof a && 0 != a.length && ed(b.a, a)
     };
     k.rb = function() {
          return !1
     };
     k.Y = function() {
          this.N = !0
     };
     k.ya = function() {
          return this.N
     };
     k.Ua = function() {
          this.f.o = 0
     };

     function Lf(a) {
          return a.b ? a.b.A() : (Q.g(), "ns")
     }

     function Mf(a, b) {
          if (a.b) {
               if (b.A() === a.b.A()) return;
               a.b.B();
               a.b = null
          }
          b = b.create(a.a.b, a.h, a.rb());
          if (b = null != b && b.Aa() ? b : null) a.b = b
     }

     function Nf(a, b, c) {
          if (a.b) {
               a.b.O();
               var d = a.b.h,
                    e = d.j,
                    f = e.a;
               if (null != d.c) {
                    var g = d.i;
                    a.I = new F(g.left - f.left, g.top - f.top);
                    a.Ka = d.c
               }
               f = a.ia() ? Math.max(d.a, d.h) : d.a;
               f = .99 <= f ? 1 : f;
               g = {};
               null !== e.volume && (g.volume = e.volume);
               e = 1 === N(a.h, "osddt");
               "nis" == a.b.A() && (e = !0);
               "gsv" == a.b.A() && (e = !0);
               e ? (a.ma && -1 !== d.b && -1 !== a.ma.b ? (e = d.b - a.ma.b, e = 1E4 < e ? 0 : e) : e = 0, a.ma = d, a.Da(f, b, c, !1, g, e, d.f)) : (-1 == a.Ha ? e = 0 : (e = b - a.Ha || 1, e = 1E4 < e ? 1 : e), a.Da(f, b, c, !1, g, e, d.f))
          }
     }

     function Of(a) {
          if (a.ya() && a.H) {
               var b = 1 == N(a.h, "od"),
                    c = T.g().a,
                    d = a.H,
                    e = Lf(a),
                    f = new G(Ac(c), Bc(c));
               c = a.ia();
               a = {
                    T: e,
                    I: a.I,
                    Wa: f,
                    ia: c,
                    o: a.f.o,
                    Db: b
               };
               if (b = d.a) {
                    b.O();
                    e = b.h;
                    f = e.j.a;
                    var g = null,
                         h = null;
                    null != e.c && f && (g = e.i, g = new F(g.left - f.left, g.top - f.top), h = new G(f.right - f.left, f.bottom - f.top));
                    c = {
                         T: b.A(),
                         I: g,
                         Wa: h,
                         ia: c,
                         Db: !1,
                         o: c ? Math.max(e.a, e.h) : e.a
                    }
               } else c = null;
               c && wf(d, a, c)
          }
     }
     k.Da = function(a, b, c, d, e, f, g) {
          this.m || (this.ya() && (e = new Sc, e.c = c, e.b = Ae(), e.o = 0 === this.D && 1 === N(this.h, "opac") ? 0 : a, e.a = this.ha(), e.f = g, a = this.c, g = this.f, d = d && this.f.o >= (this.ha() ? .3 : .5), a.b = Math.max(a.b, e.o), Ef(a.f, e.f, g.f, e.c, f, d), Ef(a.a, e.o, g.o, e.c, f, d), d = d || g.a != e.a ? g.isVisible() && e.isVisible() : g.isVisible(), g = !e.isVisible() || e.c, yf(a.c, d, f, g), this.Ha = b, 0 < e.o && (-1 === this.ua && (this.ua = b), this.Bb = b), -1 == this.Cb && W(this.c) && (this.Cb = b), -2 == this.na && (this.na = Ne(Kf(this)) ? e.o : -1), this.f = e, c && (this.f.o = 0)), this.Ia(this))
     };
     k.ha = function() {
          return !1
     };
     k.ia = function() {
          return this.vb || this.Ga
     };

     function Pf(a) {
          a.a.b && (a.i.Ca = re(a.a.b, "mouseover", function() {
               a.$ = S()
          }, 149), a.i.Ba = re(a.a.b, "mouseout", function() {
               var b = S(); - 1 == a.$ || b < a.$ || (a.Fa += b - a.$);
               a.$ = -1
          }, 150))
     }

     function Jf(a) {
          a.a.b && (a.i.Ca && (Wb(a.a.b, "mouseover", a.i.Ca), a.i.Ca = null), a.i.Ba && (Wb(a.a.b, "mouseout", a.i.Ba), a.i.Ba = null))
     }

     function Qf(a) {
          a.b && a.b.S()
     };

     function Rf() {
          Sf(this)
     }

     function Sf(a) {
          !a.a && ra(E.Goog_AdSense_getAdAdapterInstance) && (a.a = Goog_AdSense_getAdAdapterInstance());
          !a.b && ra(E.Goog_Common_getAdAdapterInstance) && (a.b = Goog_Common_getAdAdapterInstance());
          !a.c && ac() && (a.c = !0)
     }

     function Tf(a, b, c, d) {
          Sf(a);
          var e = T.g().m;
          a.a && a.a.getNewBlocks(b, e);
          a.b && a.b.getNewBlocks(b, e);
          a.c && !c() && (d(!0), b(ac(), "", 13, !0))
     }

     function Uf(a) {
          Sf(a);
          return (a.a ? a.a.numBlocks() : 0) + (a.b ? a.b.numBlocks() : 0) + (a.c ? 1 : 0)
     }

     function Vf(a) {
          Sf(a);
          return a.a ? a.a.getOseId() : a.b ? a.b.getOseId() : 0
     };

     function Wf(a) {
          return cb() ? (a = (a = H(a)) && fc(a), !!(a && a.location && a.location.ancestorOrigins && 0 < a.location.ancestorOrigins.length && a.location.origin == a.location.ancestorOrigins[0])) : !0
     };
     var Xf = "StopIteration" in u ? u.StopIteration : {
          message: "StopIteration",
          stack: ""
     };

     function Yf() {}
     Yf.prototype.next = function() {
          throw Xf;
     };
     Yf.prototype.Xa = function() {
          return this
     };

     function Zf(a) {
          if (a instanceof Yf) return a;
          if ("function" == typeof a.Xa) return a.Xa(!1);
          if (qa(a)) {
               var b = 0,
                    c = new Yf;
               c.next = function() {
                    for (;;) {
                         if (b >= a.length) throw Xf;
                         if (b in a) return a[b++];
                         b++
                    }
               };
               return c
          }
          throw Error("Not implemented");
     }

     function $f(a, b) {
          if (qa(a)) try {
               w(a, b, void 0)
          } catch (c) {
               if (c !== Xf) throw c;
          } else {
               a = Zf(a);
               try {
                    for (;;) b.call(void 0, a.next(), void 0, a)
               } catch (c) {
                    if (c !== Xf) throw c;
               }
          }
     }

     function ag(a, b) {
          var c = 1;
          $f(a, function(d) {
               c = b.call(void 0, c, d)
          });
          return c
     }

     function bg(a, b) {
          var c = Zf(a);
          a = new Yf;
          a.next = function() {
               var d = c.next();
               if (b.call(void 0, d, void 0, c)) return d;
               throw Xf;
          };
          return a
     }

     function cg(a) {
          var b = Zf(a);
          a = new Yf;
          var c = 100;
          a.next = function() {
               if (0 < c--) return b.next();
               throw Xf;
          };
          return a
     };

     function dg(a, b) {
          this.c = b;
          this.b = null == a;
          this.a = a
     }
     t(dg, Yf);
     dg.prototype.next = function() {
          if (this.b) throw Xf;
          var a = this.a || null;
          this.b = null == a;
          var b;
          if (b = a) {
               b = this.c;
               if (jb(a, "parentElement") && null != a.parentElement && a != a.parentElement) var c = a.parentElement;
               else if (b) {
                    var d = void 0 === d ? Wf : d;
                    if (d(a)) try {
                         var e = H(a),
                              f = e && fc(e),
                              g = f && f.frameElement;
                         c = null == g ? null : g
                    } catch (h) {
                         c = null
                    } else c = null
               } else c = null;
               b = c
          }
          this.a = b;
          return a
     };

     function eg(a) {
          var b = 1;
          a = cg(new dg(a, !0));
          a = bg(a, function() {
               return 0 < b
          });
          return ag(a, function(c, d) {
               var e = 1;
               if (jb(d, "style") && d.style) {
                    var f = parseFloat;
                    a: {
                         var g = H(d);
                         if (g.defaultView && g.defaultView.getComputedStyle && (g = g.defaultView.getComputedStyle(d, null))) {
                              g = g.opacity || g.getPropertyValue("opacity") || "";
                              break a
                         }
                         g = ""
                    }
                    if (!g) {
                         g = d.style[fb()];
                         if ("undefined" !== typeof g) d = g;
                         else {
                              g = d.style;
                              var h = Ic.opacity;
                              if (!h) {
                                   var n = fb();
                                   h = n;
                                   void 0 === d.style[n] && (n = (pb ? "Webkit" : ob ? "Moz" : C ? "ms" : mb ? "O" : null) + hb(n), void 0 !== d.style[n] && (h = n));
                                   Ic.opacity = h
                              }
                              d = g[h] || ""
                         }
                         g = d
                    }
                    f = f(g);
                    "number" !== typeof f || isNaN(f) || (e = f)
               }
               return b = c * e
          })
     };

     function fg(a, b, c, d, e, f, g) {
          f = void 0 === f ? oa : f;
          g = void 0 === g ? [] : g;
          If.call(this, c, d, e);
          this.C = b;
          this.ja = this.j = 0;
          this.ob = null;
          this.kb = this.eb = "";
          this.fb = [];
          this.gb = [];
          this.$a = this.ib = "";
          this.ub = !1;
          this.u = 4;
          this.xb = !1;
          this.aa = [];
          this.J = this.l = "";
          this.wb = this.bb = this.qb = !1;
          this.ka = 0;
          this.da = this.pb = Ae();
          this.qa = 0;
          this.Pb = f;
          this.yb = !1;
          this.oa = this.Ea = this.Ja = this.ta = this.w = -1;
          this.G = {};
          this.ra = g;
          gg(this, this.a.a);
          this.C && "string" === typeof this.C && (a = this.C.match(/fa=([^&;]+)/)) && 2 == a.length && a[1] == (30).toString() && (this.Ga = !0);
          gd(Q.g().a, this.C)
     }
     t(fg, If);

     function hg(a, b, c) {
          return (a = String(a[b] || id(a, c) || "")) ? a.split("|") : []
     }

     function gg(a, b) {
          if (b) {
               if (0 == a.j)
                    if (a.a.a) {
                         var c = a.a.a._adk_;
                         c || (c = (c = id(a.a.a, "googleAvAdk")) && !/[^0-9]/.test(c) ? parseInt(c, 10) : 0)
                    } else c = 0;
               else c = a.j;
               a.j = c;
               "" == a.eb && (a.eb = String(b._avi_ || ""));
               "" == a.kb && (a.kb = b._avihost_ ? String(b._avihost_) : "pagead2.googlesyndication.com");
               a.fb.length || (a.fb = hg(b, "_avicxn_", "googleAvCxn"));
               a.gb.length || (a.gb = hg(b, "_avieoscxn_", "googleEOSAvCxn"));
               "" == a.ib && (a.ib = String(b._aviextcxn_ || id(b, "googleAvExtCxn") || ""));
               "" == a.$a && (a.$a = String(b._cid_ || ""));
               a.ub || (a.ub = !!b._imm_ || jd(b, "googleAvImmediate"));
               "" == a.J && (a.J = String(b._cvu_ || id(b, "googleAvCpmav") || ""));
               "" == a.l && (a.l = String(id(b, "googleAvBtr") || ""));
               a.za(String(b._avm_ || id(b, "googleAvMetadata") || ""))
          }
     }
     k = fg.prototype;
     k.U = function() {
          delete this.aa;
          delete this.ra;
          If.prototype.U.call(this)
     };

     function ig(a, b, c) {
          w(a.ra, function(d) {
               return d.a(a, c, b)
          })
     }
     k.ya = function() {
          return this.N && !(1 == this.qa || 3 == this.qa)
     };
     k.Ua = function() {
          If.prototype.Ua.call(this);
          this.Ka = new I(0, 0, 0, 0)
     };
     k.Y = function() {
          this.N || (this.Ja = Od(), jg(this, !1, this.na), null != this.l && "" != this.l && (Gc(this.l), this.l = ""));
          If.prototype.Y.call(this);
          kg(this)
     };

     function kg(a) {
          if (a.N && u == u.top) {
               var b = u.pageYOffset;
               null != b && (a.oa = Math.max(b, a.oa));
               ig(a, 4, {})
          }
     }

     function lg(a) {
          return new ld(a.j, a.ob)
     }
     k.za = function(a) {
          if ("string" === typeof a && 0 != a.length) {
               var b = new bd,
                    c = Q.g();
               M(b, "omid", K);
               ed(b, a);
               b = N(b, "omid");
               null !== b && (c.a.b.omid = b);
               a = ed(this.h, a);
               c = a.split("&");
               for (b = 0; b < c.length; b++) {
                    var d = c[b];
                    "ts=0" == d ? this.ca = !1 : 0 == d.lastIndexOf("la=", 0) ? (d = d.split("=")[1], "0" == d ? this.ka = 2 : "1" == d && (this.ka = 1)) : 0 == d.lastIndexOf("cr=", 0) ? "1" == d.split("=")[1] && (this.vb = !0) : "adf=1" == d && (this.yb = !0)
               }
               this.f.a = this.ha();
               If.prototype.za.call(this, a)
          }
     };
     k.Da = function(a, b, c, d, e, f, g) {
          var h = W(this.c),
               n = Math.floor(100 * this.f.o);
          this.ka = 242500 <= Ne(Kf(this)) ? 1 : 2;
          If.prototype.Da.call(this, a, b, c, d, e, f, g); - 1 == this.da && -1 != this.f.b ? this.da = this.f.b : 0 == this.da && 1 == this.f.b && (this.da = 1);
          a = W(this.c);
          b = Math.floor(100 * this.f.o);
          (!h && a || b != n) && jg(this, a, b);
          try {
               this.D = eg(this.a.b)
          } catch (m) {}
          kg(this)
     };
     k.ha = function() {
          return qb ? !1 : 1 == this.ka
     };

     function mg(a, b, c, d) {
          d = void 0 === d ? {} : d;
          var e = {},
               f = ng(a);
          d && x(f, d);
          f.adk = a.j;
          a.yb && a.ja && (f.adf = a.ja);
          d = a.m;
          var g = Q.g();
          !c && d && g.b && (c = g.b);
          c && (f.r = c);
          0 === a.D && (f.invis = 1);
          c = mf(f).join("&");
          e[3] = c;
          e[11] = d;
          e[29] = Q.g().c;
          e[0] = b;
          e[7] = a.f.o;
          e[9] = Be(a.Ka);
          e[28] = a.ba;
          e[32] = Lf(a);
          e[5] = W(a.c) && 4 != a.u;
          e[13] = Df(a.c.a).join(",");
          e[18] = 0 == Ne(Kf(a));
          null != a.I && (e[20] = a.I.y, e[21] = a.I.x);
          b = T.g();
          null != b.c && (e[22] = Ac(b.c), e[23] = Bc(b.c));
          null != b.a && (e[30] = Ac(b.a), e[31] = Bc(b.a), e[38] = Be(b.a));
          c = b.l;
          f = Kf(a);
          e[37] = Be(new I(f.top + c.y, f.right + c.x, f.bottom + c.y, f.left + c.x));
          b.h && (b = b.h, e[39] = b.width + "-" + b.height); - 1 != a.D && (e[25] = a.D);
          if (a = lg(a)) a.b && (e[4] = a.b), a.a && (e[12] = a.a);
          return e
     }

     function ng(a) {
          var b = T.g(),
               c = dd(a.h),
               d = b.l,
               e = Kf(a);
          c.p = [e.top + d.y, e.left + d.x, e.bottom + d.y, e.right + d.x];
          d = a.c;
          c.tos = Bf(d.a);
          c.mtos = Df(d.a);
          c.mcvt = d.c.a;
          c.rs = a.ba;
          (e = 5 == a.ba) || (c.ht = a.Fa);
          0 <= a.ua && (c.tfs = a.ua, c.tls = a.Bb);
          c.mc = we(d.b);
          c.lte = we(a.na);
          c.bas = a.pb;
          c.bac = a.da;
          b.b && (c["if"] = a.m ? 0 : 1);
          c.met = a.a.c;
          e && a.C && (c.req = encodeURIComponent(a.C).substring(0, 100));
          a.wb && (c.ci = "1");
          a.ha() && (c.la = "1");
          a.Ga && (c.pa = "1");
          c.avms = Lf(a);
          a.b && x(c, a.b.K());
          0 != a.qa && (c.md = a.qa);
          c.btr = null != a.l && "" != a.l ? 1 : 0;
          c.lm = a.u;
          x(c, og(a));
          return c
     }

     function og(a) {
          var b = a.w;
          var c = a.w;
          c = -1 == c || a.ta < c ? -1 : a.ta - c;
          var d = -1 == a.w || a.Ja < a.w ? -1 : a.Ja - a.w,
               e = pg(a),
               f = {};
          return f.rst = 0 < b ? b : void 0, f.dlt = 0 <= c ? c : void 0, f.rpt = 0 <= d ? d : void 0, f.isd = 0 <= a.Ea ? a.Ea : void 0, f.msd = 0 <= a.oa ? a.oa : void 0, f.ext = e ? e : void 0, f
     }

     function pg(a) {
          return a.G && 0 < qc(a.G).length ? encodeURIComponent(za(qc(a.G), function(b) {
               return b + "=" + a.G[b]
          }).join("&")) : null
     }

     function qg(a, b) {
          b && pc(b, function(c, d) {
               null == c ? delete a.G[d] : a.G[d] = c
          })
     }

     function jg(a, b, c) {
          if (b = a.Pb(b, c)) qg(a, b), ig(a, 3, {})
     }
     k.rb = function() {
          return !1
     };

     function rg(a, b, c, d) {
          af.call(this, a, b, c, d)
     }
     t(rg, af);
     rg.prototype.mb = function(a) {
          return Qe(a, this.l, this.c, 1 == N(this.G, "od"))
     };
     rg.prototype.O = function() {
          var a = this.b.c;
          this.timestamp = -1 === a.time ? S() : a.time;
          this.La();
          this.ab();
          a = this.a;
          var b = this.l;
          a = a.left <= b.right && b.left <= a.right && a.top <= b.bottom && b.top <= a.bottom ? new I(Math.max(a.top, b.top), Math.min(a.right, b.right), Math.min(a.bottom, b.bottom), Math.max(a.left, b.left)) : new I(0, 0, 0, 0);
          b = a.top >= a.bottom || a.left >= a.right ? new I(0, 0, 0, 0) : a;
          a = this.b.c;
          var c = 0,
               d = 0,
               e = 0;
          0 < (this.a.bottom - this.a.top) * (this.a.right - this.a.left) && (this.mb(b) ? b = new I(0, 0, 0, 0) : (c = T.g().j, e = new I(0, c.height, c.width, 0), c = Me(b, this.a), d = Me(b, T.g().a), e = Me(b, e)));
          b = b.top >= b.bottom || b.left >= b.right ? new I(0, 0, 0, 0) : Dc(b, -this.a.left, -this.a.top);
          this.h = new Se(a, this.a, b, c, d, this.timestamp, e)
     };
     rg.prototype.A = function() {
          return this.b.A()
     };

     function sg(a) {
          var b = [];
          tg(new ug, a, b);
          return b.join("")
     }

     function ug() {}

     function tg(a, b, c) {
          if (null == b) c.push("null");
          else {
               if ("object" == typeof b) {
                    if (Array.isArray(b)) {
                         var d = b;
                         b = d.length;
                         c.push("[");
                         for (var e = "", f = 0; f < b; f++) c.push(e), tg(a, d[f], c), e = ",";
                         c.push("]");
                         return
                    }
                    if (b instanceof String || b instanceof Number || b instanceof Boolean) b = b.valueOf();
                    else {
                         c.push("{");
                         e = "";
                         for (d in b) Object.prototype.hasOwnProperty.call(b, d) && (f = b[d], "function" != typeof f && (c.push(e), vg(d, c), c.push(":"), tg(a, f, c), e = ","));
                         c.push("}");
                         return
                    }
               }
               switch (typeof b) {
                    case "string":
                         vg(b, c);
                         break;
                    case "number":
                         c.push(isFinite(b) && !isNaN(b) ? String(b) : "null");
                         break;
                    case "boolean":
                         c.push(String(b));
                         break;
                    case "function":
                         c.push("null");
                         break;
                    default:
                         throw Error("Unknown type: " + typeof b);
               }
          }
     }
     var wg = {
               '"': '\\"',
               "\\": "\\\\",
               "/": "\\/",
               "\b": "\\b",
               "\f": "\\f",
               "\n": "\\n",
               "\r": "\\r",
               "\t": "\\t",
               "\x0B": "\\u000b"
          },
          xg = /\uffff/.test("\uffff") ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g;

     function vg(a, b) {
          b.push('"', a.replace(xg, function(c) {
               var d = wg[c];
               d || (d = "\\u" + (c.charCodeAt(0) | 65536).toString(16).substr(1), wg[c] = d);
               return d
          }), '"')
     };

     function yg() {
          this.key = "goog_adspeed";
          this.c = [3, 4];
          this.b = null
     }
     yg.prototype.a = function(a, b, c) {
          if (!Fa(this.c, c) || !md(lg(a))) return !1;
          c = {};
          c = (c[0] = this.key, c[40] = sg(og(a)), c);
          var d;
          if (d = this.b) a: {
               d = this.b;
               for (var e in d)
                    if (!(e in c) || d[e] !== c[e]) {
                         d = !1;
                         break a
                    } for (var f in c)
                    if (!(f in d)) {
                         d = !1;
                         break a
                    } d = !0
          }
          if (d) return !1;
          this.b = c;
          e = {};
          x(e, c, b);
          return zg(a, {
               Va: {},
               Qa: e
          })
     };

     function Ag() {
          this.key = "goog_update_data";
          this.b = 0;
          this.c = !1
     }
     Ag.prototype.a = function(a, b, c) {
          if (c != this.b || !md(lg(a))) return !1;
          c = 1 == a.u;
          var d = W(a.c),
               e = {},
               f = {};
          b = {
               Qa: (e[0] = this.key, e[40] = sg(og(a)), e),
               Va: Object.assign({}, b, (f.r = b.r, f))
          };
          if (c) return d && !this.c ? (this.c = d, zg(a, b)) : !1;
          this.c = d;
          return zg(a, b)
     };

     function Bg(a) {
          Ag.call(this, a);
          this.key = "goog_image_request";
          this.b = 2
     }
     t(Bg, Ag);

     function Cg(a) {
          Ag.call(this, a);
          this.key = "goog_image_request";
          this.b = 1
     }
     t(Cg, Ag);
     Cg.prototype.a = function(a, b, c) {
          var d = !a.bb;
          if (W(a.c) && a.ca || d) {
               if (b = Ag.prototype.a.call(this, a, b, c))
                    if (W(a.c) || (a.bb = !0), W(a.c) || a.ca) a.ca = !1;
               return b
          }
          return !1
     };

     function Dg() {
          this.b = [];
          this.a = []
     }

     function Fg(a) {
          return Da(X.a, function(b) {
               b = lg(b);
               return a.a || b.a ? a.a == b.a : a.b || b.b ? a.b == b.b : !1
          })
     }

     function Gg(a) {
          var b = X;
          return a ? Da(b.a, function(c) {
               return c.a.a == a
          }) : null
     }

     function Hg(a) {
          return Da(a.a, function() {
               return !1
          })
     }

     function Ig() {
          var a = X;
          return 0 == a.b.length ? a.a : 0 == a.a.length ? a.b : Ga(a.a, a.b)
     }

     function Jg() {
          var a = X;
          a.b = [];
          a.a = []
     }

     function Kg(a, b) {
          a = a.a;
          var c = Ea(a, function(d) {
               return d == b
          });
          return -1 != c ? (a.splice(c, 1), Qf(b), b.B(), !0) : !1
     }

     function Lg(a) {
          var b = X;
          if (Kg(b, a)) {
               a = function() {
                    return null
               };
               a = function() {
                    return Hg(b)
               };
               for (var c = a(); c; c = a()) Kg(b, c)
          }
     }
     v(Dg);
     var X = Dg.g();

     function Mg() {
          this.a = this.b = null
     }

     function Ng(a, b) {
          function c(d, e) {
               b(d, e)
          }
          if (null == a.b) return !1;
          a.a = Da(a.b, function(d) {
               return null != d && d.Ra()
          });
          a.a && (a.a.lb(c) ? Ye(a.a.a) : b(a.a.a.V(), a.a));
          return null != a.a
     }
     v(Mg);

     function Og(a) {
          a = Pg(a);
          bf.call(this, a.length ? a[a.length - 1] : new U(E, 0));
          this.c = a;
          this.b = null
     }
     t(Og, bf);
     k = Og.prototype;
     k.A = function() {
          return (this.b ? this.b : this.a).A()
     };
     k.K = function() {
          return (this.b ? this.b : this.a).K()
     };
     k.L = function() {
          return (this.b ? this.b : this.a).L()
     };
     k.lb = function(a) {
          var b = !1;
          w(this.c, function(c) {
               c.Oa() && (b = !0)
          });
          b && (this.f = a, Xe(this.a, this));
          return b
     };
     k.B = function() {
          w(this.c, function(a) {
               a.B()
          });
          bf.prototype.B.call(this)
     };
     k.Ra = function() {
          return Ba(this.c, function(a) {
               return a.X()
          })
     };
     k.W = function() {
          return Ba(this.c, function(a) {
               return a.X()
          })
     };
     k.wa = function(a, b, c) {
          return new rg(a, this.a, b, c)
     };
     k.P = function(a) {
          this.b = a.b
     };

     function Pg(a) {
          if (!a.length) return [];
          a = ya(a, function(c) {
               return null != c && c.X()
          });
          for (var b = 1; b < a.length; b++) Xe(a[b - 1], a[b]);
          return a
     };

     function Qg(a, b, c, d) {
          af.call(this, a, b, c, d);
          this.u = this.m = null
     }
     t(Qg, rg);
     k = Qg.prototype;
     k.Aa = function() {
          var a = this;
          this.u || (this.u = S());
          if (ee(298, function() {
                    return a.w()
               })) return !0;
          Ve(this.b, "msf");
          return !1
     };

     function Rg(a, b) {
          try {
               if (b.length) {
                    a.m || (a.m = S());
                    var c = Sg(b),
                         d = Kc(a.c, a.b.a.s),
                         e = d.x,
                         f = d.y;
                    a.a = new I(Math.round(f), Math.round(e) + c.boundingClientRect.width, Math.round(f) + c.boundingClientRect.height, Math.round(e));
                    var g = ze(c.intersectionRect);
                    a.l = Dc(g, a.a.left - g.left, a.a.top - g.top)
               }
          } catch (h) {
               a.S(), ge(299, h)
          }
     }

     function Sg(a) {
          return Aa(a, function(b, c) {
               return b.time > c.time ? b : c
          }, a[0])
     }
     k.La = function() {};
     k.mb = function() {
          return !1
     };
     k.ab = function() {};
     k.K = function() {
          var a = {};
          return Object.assign(this.b.K(), (a.niot_obs = this.u, a.niot_cbk = this.m, a))
     };
     var Tg = {
          threshold: [0, .3, .5, .75, 1]
     };

     function Ug(a, b, c, d) {
          Qg.call(this, a, b, c, d);
          this.i = this.j = this.f = null
     }
     t(Ug, Qg);
     Ug.prototype.A = function() {
          return "nio"
     };
     Ug.prototype.S = function() {
          if (this.f && this.c) try {
               this.f.unobserve(this.c), this.j ? (this.j.unobserve(this.c), this.j = null) : this.i && (this.i.disconnect(), this.i = null)
          } catch (a) {}
     };

     function Vg(a) {
          return a.f && a.f.takeRecords ? a.f.takeRecords() : []
     }
     Ug.prototype.w = function() {
          var a = this;
          if (!this.c) return !1;
          var b = this.c,
               c = this.b.a.s,
               d = Jd().a;
          this.f = new c.IntersectionObserver(Hd(d, function(e) {
               return Rg(a, e)
          }), Tg);
          d = Hd(d, function() {
               a.f.unobserve(b);
               a.f.observe(b);
               Rg(a, Vg(a))
          });
          c.ResizeObserver ? (this.j = new c.ResizeObserver(d), this.j.observe(b)) : c.MutationObserver && (this.i = new u.MutationObserver(d), this.i.observe(b, {
               attributes: !0,
               childList: !0,
               characterData: !0,
               subtree: !0
          }));
          this.f.observe(b);
          Rg(this, Vg(this));
          return !0
     };
     Ug.prototype.O = function() {
          var a = Vg(this);
          0 < a.length && Rg(this, a);
          Qg.prototype.O.call(this)
     };

     function Wg(a) {
          a = void 0 === a ? E : a;
          bf.call(this, new U(a, 2))
     }
     t(Wg, bf);
     Wg.prototype.A = function() {
          return "nio"
     };
     Wg.prototype.W = function() {
          var a = A;
          return a && 0 <= a.toLowerCase().indexOf("cobalt") ? !1 : "exc" !== (Q.g(), "ns") && !T.g().f && null != this.a.a.s.IntersectionObserver
     };
     Wg.prototype.wa = function(a, b, c) {
          return new Ug(a, this.a, b, c)
     };

     function Xg() {
          var a = Yg();
          U.call(this, E.top, a, "geo")
     }
     t(Xg, U);
     Xg.prototype.Ma = function() {
          return T.g().a
     };
     Xg.prototype.X = function() {
          var a = Yg();
          this.i !== a && (this.a != this && a > this.a.i && (this.a = this, We(this)), this.i = a);
          return 2 == a
     };

     function Yg() {
          Q.g();
          var a = T.g();
          return a.b || a.f ? 0 : 2
     }
     v(Xg);
     var Zg = {},
          $g = (Zg[1] = function() {
               return new Wg
          }, Zg[2] = function() {
               return new Og([Xg.g()])
          }, Zg);

     function ah() {
          this.a = null;
          this.b = $g
     }

     function bh() {
          var a = ah.g();
          a: {
               var b = N(Q.g().a, "mv");
               if (null != b && (b = a.b[b]) && (b = b()) && b.W()) break a;b = null
          }
          a.a = b
     }
     v(ah);

     function ch() {
          this.done = !1;
          this.a = {
               Za: 0,
               Ya: 0,
               jc: 0,
               cb: 0,
               xa: -1,
               Ib: 0,
               Hb: 0,
               Jb: 0
          };
          this.j = null;
          this.h = this.l = !1;
          this.i = "";
          this.b = null;
          this.m = 0;
          this.c = new Te(this)
     }

     function dh(a) {
          var b = Y;
          if (!b.l) {
               b.l = !0;
               if (a) {
                    a = Ig();
                    for (var c, d = 0; d < a.length; ++d) c = a[d], c.a.b && Pf(c)
               }
               eh(b, function(e) {
                    for (var f = [], g = 0; g < arguments.length; ++g) f[g] = arguments[g];
                    return b.f.apply(b, q(f))
               });
               b.f()
          }
     }
     ch.prototype.zb = function() {
          fh(this, Ig(), !1)
     };

     function gh() {
          var a = ah.g();
          null != a.a && a.a.a && Ye(a.a.a);
          a = Mg.g();
          null != a.a && a.a.a ? Ye(a.a.a) : He(T.g())
     }

     function fh(a, b, c) {
          if (!a.done)
               if (a.c.cancel(), 0 == b.length) a.h = !1;
               else {
                    a.b = null;
                    try {
                         gh();
                         var d = S();
                         Q.g().i = d;
                         if (null != Mg.g().a)
                              for (var e = 0; e < b.length; e++) Nf(b[e], d, c);
                         for (d = 0; d < b.length; d++) Of(b[d]);
                         ++a.a.cb;
                         hh(a)
                    } finally {
                         c ? w(b, function(f) {
                              return f.Ua()
                         }) : Ue(a.c)
                    }
               }
     }

     function eh(a, b) {
          if (!a.j) {
               b = ae(142, b);
               P();
               var c;
               D.visibilityState ? c = "visibilitychange" : D.mozVisibilityState ? c = "mozvisibilitychange" : D.webkitVisibilityState && (c = "webkitvisibilitychange");
               c && Vb(D, c, b, {
                    capture: !1
               }) && (a.j = b)
          }
     }
     ch.prototype.f = function() {
          var a = Ke(),
               b = S();
          a ? (ke || (ie = b, w(X.b, function(c) {
               return c.c.i(b, !c.j())
          })), ke = !0) : (this.m = ih(this, b), ke = !1, w(X.b, function(c) {
               c.ya() && c.c.h(b)
          }));
          this.h = !0;
          fh(this, Ig(), !a)
     };

     function jh(a) {
          return !!(Date && a && a.screen && a.document && a.document.body && a.document.body.getBoundingClientRect)
     }

     function kh(a, b, c) {
          if (!a.b || c) {
               c = b.document;
               var d = 0 <= je ? S() - je : -1,
                    e = S(); - 1 == a.a.xa && (d = e);
               var f = T.g(),
                    g = Q.g(),
                    h = dd(g.a),
                    n = Ig();
               try {
                    if (0 < n.length) {
                         var m = f.a;
                         m && (h.bs = [Ac(m), Bc(m)]);
                         var l = f.h;
                         l && (h.ps = [l.width, l.height]);
                         b.screen && (h.ss = [b.screen.width, b.screen.height])
                    } else h.url = encodeURIComponent(b.location.href.substring(0, 512)), c.referrer && (h.referrer = encodeURIComponent(c.referrer.substring(0, 512)));
                    h.tt = d;
                    h.pt = je;
                    h.bin = g.c;
                    switch (Q.g(), "ns") {
                         case "iem":
                              h.iem = 1;
                              break;
                         case "aio":
                              h.aio = 1;
                              break;
                         case "nio":
                              h.nio = 1
                    }
                    void 0 !== b.google_osd_load_pub_page_exp && (h.olpp = b.google_osd_load_pub_page_exp);
                    h.deb = [1, a.a.Za, a.a.Ya, a.a.cb, a.a.xa, ve, a.c.b, a.a.Ib, a.a.Hb, a.a.Jb].join("-");
                    h.tvt = ih(a, e);
                    f.f && (h.inapp = 1);
                    if (null !== b && b != b.top) {
                         0 < n.length && (h.iframe_loc = encodeURIComponent(b.location.href.substring(0, 512)));
                         var r = f.c;
                         h.is = [Ac(r), Bc(r)]
                    }
               } catch (Eg) {
                    h.error = 1
               }
               a.b = h
          }
          b = a.b;
          a = {};
          for (var p in b) a[p] = b[p];
          p = Jd();
          var y;
          if (1 == N(p.c, "prf")) {
               b = new Fd;
               m = p.a;
               l = 0; - 1 < m.a && (l = m.f.a.a() - m.a);
               b = Qb(b, 1, m.c + l);
               m = p.a;
               b = Qb(b, 5, -1 < m.a ? m.b + 1 : m.b);
               b = Qb(b, 2, p.b.a.f());
               b = Qb(b, 3, p.b.a.c());
               b = Qb(b, 4, p.b.a.b());
               p = {};
               m = new Ib;
               l = Ob(b, 1);
               l = null == l ? l : +l;
               l = null == l ? 0 : l;
               if (0 !== l && (r = l, null != r)) {
                    Gb(m.a, 9);
                    l = m.a;
                    d = r;
                    d = (r = 0 > d ? 1 : 0) ? -d : d;
                    if (0 === d) Eb = 0 < 1 / d ? 0 : 2147483648, Db = 0;
                    else if (isNaN(d)) Eb = 2147483647, Db = 4294967295;
                    else if (1.7976931348623157E308 < d) Eb = (r << 31 | 2146435072) >>> 0, Db = 0;
                    else if (2.2250738585072014E-308 > d) d /= Math.pow(2, -1074), Eb = (r << 31 | d / 4294967296) >>> 0, Db = d >>> 0;
                    else {
                         e = d;
                         c = 0;
                         if (2 <= e)
                              for (; 2 <= e && 1023 > c;) c++, e /= 2;
                         else
                              for (; 1 > e && -1022 < c;) e *= 2, c--;
                         d *= Math.pow(2, -c);
                         Eb = (r << 31 | c + 1023 << 20 | 1048576 * d & 1048575) >>> 0;
                         Db = 4503599627370496 * d >>> 0
                    }
                    Hb(l, Db);
                    Hb(l, Eb)
               }
               l = Pb(b, 2);
               0 !== l && null != l && Jb(m, 2, l);
               l = Pb(b, 3);
               0 !== l && null != l && Jb(m, 3, l);
               l = Pb(b, 4);
               0 !== l && null != l && Jb(m, 4, l);
               l = Pb(b, 5);
               if (0 !== l && null != l && null != l)
                    if (Gb(m.a, 40), b = m.a, 0 <= l) Gb(b, l);
                    else {
                         for (r = 0; 9 > r; r++) b.a.push(l & 127 | 128), l >>= 7;
                         b.a.push(1)
                    } b = new Uint8Array(m.a.length());
               r = m.b;
               c = r.length;
               for (d = l = 0; d < c; d++) e = r[d], b.set(e, l), l += e.length;
               r = m.a;
               c = r.a;
               r.a = [];
               b.set(c, l);
               m.b = [b];
               void 0 === y && (y = 0);
               if (!Cb)
                    for (Cb = {}, m = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), l = ["+/=", "+/", "-_=", "-_.", "-_"], r = 0; 5 > r; r++)
                         for (c = m.concat(l[r].split("")), Bb[r] = c, d = 0; d < c.length; d++) e = c[d], void 0 === Cb[e] && (Cb[e] = d);
               y = Bb[y];
               m = [];
               for (l = 0; l < b.length; l += 3) f = b[l], g = (r = l + 1 < b.length) ? b[l + 1] : 0, e = (c = l + 2 < b.length) ? b[l + 2] : 0, d = f >> 2, f = (f & 3) << 4 | g >> 4, g = (g & 15) << 2 | e >> 6, e &= 63, c || (e = 64, r || (g = 64)), m.push(y[d], y[f], y[g] || "", y[e] || "");
               y = (p.pf = m.join(""), p)
          } else y = {};
          x(a, y);
          return a
     }

     function lh() {
          w(Ig(), function(a) {
               if (a.a.a) {
                    var b = a.j || 0,
                         c = ah.g();
                    if (b = c.a ? new vf(c.a, a.a.b, a.h, b) : null) a.H = b
               }
          })
     }

     function mh() {
          var a = Mg.g();
          if (null != a.a) {
               var b = a.a;
               w(Ig(), function(c) {
                    return Mf(c, b)
               })
          }
     }

     function hh(a) {
          "osd" == a.i && w(X.a, function(b) {
               var c = {};
               ig(b, 0, (c.r = void 0, c))
          })
     }

     function ih(a, b) {
          a = a.m;
          ke && (a += b - ie);
          return a
     }

     function nh(a) {
          return (a = a.match(/[&\?;](?:dc_)?adk=([0-9]+)/)) && 2 == a.length ? parseInt(a[1], 10) : 0
     }

     function oh(a) {
          return (a = a.match(/[&\?;]adf=([0-9]+)/)) && 2 == a.length ? parseInt(a[1], 10) : 0
     }

     function ph() {
          var a = Y;
          var b = void 0 === b ? function() {
               return {}
          } : b;
          be.h = "av-js";
          Xd.a = .01;
          de([function(c) {
               var d = Q.g(),
                    e = {};
               x(c, (e.bin = d.c, e.type = "error", e), dd(d.a), kh(a, E), b());
               if (d = nf()) e = {}, x(c, (e.v = encodeURIComponent(d), e))
          }])
     }

     function qh(a) {
          var b = new rh;
          switch (a) {
               case 0:
               case 5:
                    return [];
               default:
                    return a = 4 === Q.g().c, [new Ag(b), new Cg(b), new Bg(b)].concat(q(a ? [] : [new yg]))
          }
     }
     v(ch);
     var Y = ch.g();

     function rh() {}

     function zg(a, b) {
          var c = b || {};
          b = void 0 === c.Va ? {} : c.Va;
          c = void 0 === c.Qa ? {} : c.Qa;
          var d = c.r,
               e = b[0],
               f = kh(Y, J(), !1),
               g = {};
          x(g, f, b);
          b = {};
          x(b, mg(a, e, d, g), c);
          De(a.a.a, b, a.aa);
          return !0
     };

     function sh(a, b, c, d) {
          Qg.call(this, a, b, c, d);
          this.f = function() {
               return null
          }
     }
     t(sh, Qg);
     sh.prototype.A = function() {
          return "aio"
     };
     sh.prototype.S = function() {
          if (this.f) try {
               this.f()
          } catch (a) {}
     };
     sh.prototype.w = function() {
          var a = this;
          if (!this.c) return !1;
          this.f = Ec(this.b.a.s).observeIntersection(Hd(Jd().a, function(b) {
               return Rg(a, b)
          }));
          return !0
     };

     function th(a) {
          a = void 0 === a ? E : a;
          bf.call(this, new U(a, 2))
     }
     t(th, bf);
     th.prototype.A = function() {
          return "aio"
     };
     th.prototype.Ra = function() {
          return T.g().b && this.W()
     };
     th.prototype.W = function() {
          return !T.g().f && oe(this.a.a.s)
     };
     th.prototype.wa = function(a, b, c) {
          return new sh(a, this.a, b, c)
     };

     function uh() {
          U.call(this, E, 2, "iem")
     }
     t(uh, U);
     k = uh.prototype;
     k.Ma = function() {
          function a(p, y) {
               return !!b.s.document.elementFromPoint(p, y)
          }
          var b = this,
               c = new I(0, this.s.innerWidth || this.s.width, this.s.innerHeight || this.s.height, 0),
               d = ec(document),
               e = Math.floor(c.left - d.x),
               f = Math.floor(c.top - d.y),
               g = Math.floor(c.right - d.x),
               h = Math.floor(c.bottom - d.y);
          c = a(e, f);
          d = a(g, h);
          if (c && d) return new I(f, g, h, e);
          var n = a(g, f),
               m = a(e, h);
          if (c) h = Z(f, h, function(p) {
               return a(e, p)
          }), g = Z(e, g, function(p) {
               return a(p, f)
          });
          else if (n) h = Z(f, h, function(p) {
               return a(g, p)
          }), e = Z(g, e, function(p) {
               return a(p, f)
          });
          else if (m) f = Z(h, f, function(p) {
               return a(e, p)
          }), g = Z(e, g, function(p) {
               return a(p, h)
          });
          else if (d) f = Z(h, f, function(p) {
               return a(g, p)
          }), e = Z(g, e, function(p) {
               return a(p, h)
          });
          else {
               var l = Math.floor((e + g) / 2),
                    r = Math.floor((f + h) / 2);
               if (!a(l, r)) return new I(0, 0, 0, 0);
               f = Z(r, f, function(p) {
                    return a(l, p)
               });
               h = Z(r, h, function(p) {
                    return a(l, p)
               });
               e = Z(l, e, function(p) {
                    return a(p, r)
               });
               g = Z(l, g, function(p) {
                    return a(p, r)
               })
          }
          return new I(f, g, h, e)
     };

     function Z(a, b, c) {
          if (c(b)) return b;
          for (var d = 15; d--;) {
               var e = Math.floor((a + b) / 2);
               if (e == a || e == b) break;
               c(e) ? a = e : b = e
          }
          return a
     }
     k.X = function() {
          return T.g().b && C && xb(8) && pe(this.s)
     };
     k.Sa = function() {};
     k.Ta = function() {};
     k.sb = function() {};
     k.tb = function() {};
     v(uh);

     function vh() {
          U.call(this, E, 2, "mraid");
          this.H = 0;
          this.w = this.C = !1;
          this.f = null;
          this.b = ne(this.s);
          this.c.a = new I(0, 0, 0, 0);
          this.J = !1
     }
     t(vh, U);
     k = vh.prototype;
     k.X = function() {
          return null != this.b.F
     };
     k.hb = function() {
          var a = {};
          this.H && (a.mraid = this.H);
          this.C && (a.mlc = 1);
          a.mtop = this.b.Ab;
          this.f && (a.mse = this.f);
          this.J && (a.msc = 1);
          a.mcp = this.b.va;
          return a
     };
     k.M = function(a, b) {
          for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
          try {
               return this.b.F[a].apply(this.b.F, c)
          } catch (e) {
               ge(538, e, .01, function(f) {
                    f.method = a
               })
          }
     };

     function wh(a, b, c) {
          a.M("addEventListener", b, c)
     }
     k.Oa = function() {
          var a = this;
          if (this.m) return !this.fa();
          this.m = !0;
          if (2 === this.b.va) return this.f = "ng", Ve(this, "w"), !1;
          if (1 === this.b.va) return this.f = "mm", Ve(this, "w"), !1;
          var b;
          if (b = 1 != N(Q.g().a, "mxd")) {
               a: switch (this.b.Ab) {
                    case 0:
                    case 3:
                         b = !0;
                         break a;
                    default:
                         b = !1
               }
               b = !b
          }
          if (b) return this.f = "if", Ve(this, "w"), !1;
          T.g().u = !0;
          this.s.document.readyState && "complete" == this.s.document.readyState ? xh(this) : re(this.s, "load", function() {
               P().setTimeout(fe(292, function() {
                    return xh(a)
               }), 100)
          }, 292);
          return !0
     };

     function xh(a) {
          Q.g().f = !!a.M("isViewable");
          wh(a, "viewableChange", yh);
          "loading" === a.M("getState") ? wh(a, "ready", zh) : Ah(a)
     }

     function Ah(a) {
          "string" === typeof a.b.F.AFMA_LIDAR ? (a.C = !0, Bh(a)) : (a.b.va = 3, a.f = "nc", Ve(a, "w"))
     }

     function Bh(a) {
          a.w = !1;
          var b = 1 == N(Q.g().a, "rmmt"),
               c = !!a.M("isViewable");
          (b ? !c : 1) && P().setTimeout(fe(524, function() {
               a.w || (Ch(a), ge(540, Error()), a.f = "mt", Ve(a, "w"))
          }), 500);
          Dh(a);
          wh(a, a.b.F.AFMA_LIDAR, Eh)
     }

     function Dh(a) {
          var b = 1 == N(Q.g().a, "sneio"),
               c = void 0 !== a.b.F.AFMA_LIDAR_EXP_1,
               d = void 0 !== a.b.F.AFMA_LIDAR_EXP_2;
          (b = b && d) && (a.b.F.AFMA_LIDAR_EXP_2 = !0);
          c && (a.b.F.AFMA_LIDAR_EXP_1 = !b)
     }

     function Ch(a) {
          a.M("removeEventListener", a.b.F.AFMA_LIDAR, Eh);
          a.C = !1
     }
     k.Sa = function() {
          var a = T.g(),
               b = Fh(this, "getMaxSize");
          a.a = new I(0, b.width, b.height, 0)
     };
     k.Ta = function() {
          T.g().j = Fh(this, "getScreenSize")
     };

     function Fh(a, b) {
          if ("loading" === a.M("getState")) return new G(-1, -1);
          b = a.M(b);
          if (!b) return new G(-1, -1);
          a = parseInt(b.width, 10);
          b = parseInt(b.height, 10);
          return isNaN(a) || isNaN(b) ? new G(-1, -1) : new G(a, b)
     }
     k.B = function() {
          Ch(this);
          U.prototype.B.call(this)
     };

     function zh() {
          try {
               var a = vh.g();
               a.M("removeEventListener", "ready", zh);
               Ah(a)
          } catch (b) {
               ge(541, b)
          }
     }

     function Eh(a, b) {
          try {
               var c = vh.g();
               c.w = !0;
               var d = a ? new I(a.y, a.x + a.width, a.y + a.height, a.x) : new I(0, 0, 0, 0);
               var e = S(),
                    f = Ke();
               var g = new Re(e, f, c);
               g.a = d;
               g.volume = b;
               c.P(g)
          } catch (h) {
               ge(542, h)
          }
     }

     function yh(a) {
          var b = Q.g(),
               c = vh.g();
          a && !b.f && (b.f = !0, c.J = !0, 1 == N(Q.g().a, "msp") && c.f && Ve(c, "w", !0))
     }
     v(vh);

     function Gh(a) {
          return (a = /[&\?#]exk=([^& ]+)/.exec(a)) && 2 == a.length ? a[1] : null
     };

     function Hh() {}
     v(Hh);

     function Ih() {}
     v(Ih);
     var Jh = Y.c;

     function Kh() {
          this.b = null;
          this.f = this.i = this.c = this.h = !1;
          Lh(this);
          ph()
     }

     function Mh() {
          var a = void 0,
               b = 4;
          if (void 0 === a) {
               var c = void 0 === c ? u : c;
               a = c.ggeac || (c.ggeac = {})
          }
          b = void 0 === b ? 0 : b;
          Hh.g();
          b = void 0 === b ? 0 : b;
          zc(yc.g(), a, b);
          Ih.g();
          yc.g().a();
          b = Q.g();
          var d = void 0 === d ? !1 : d;
          yc.g().b(160, d) && cd(b.a, "gtx", 1)
     }
     k = Kh.prototype;
     k.Nb = function(a) {
          this.h = a
     };
     k.jb = function() {
          Nh(this);
          P().clearTimeout(this.b);
          this.b = null;
          je = S();
          Oh(this)
     };

     function Nh(a) {
          Q.g().c = 1;
          if (!(0 < je)) {
               try {
                    if (!Ph(a)) return;
                    gh();
                    Qh(a)
               } catch (b) {}
               a.b = P().setTimeout(fe(129, function() {
                    return Nh(a)
               }), 250)
          }
     }
     k.Ob = function(a, b, c, d, e, f, g, h, n) {
          var m = this;
          f = void 0 === f ? !1 : f;
          h = void 0 === h ? -1 : h;
          n = void 0 === n ? -1 : n;
          if (jh(E)) {
               var l = new fg(E, b, a, -1, c, g);
               l.ra = qh(l.u);
               e = Q.g();
               0 < h && -1 == l.w && (l.w = h);
               0 <= n && (l.Ea = n);
               l.Ia = function(r) {
                    for (var p = [], y = 0; y < arguments.length; ++y) p[y] = arguments[y];
                    return m.Kb.apply(m, q(p))
               };
               l.Eb = function(r) {
                    for (var p = [], y = 0; y < arguments.length; ++y) p[y] = arguments[y];
                    return m.Na.apply(m, q(p))
               };
               13 != c && (l.j = nh(b), l.ob = Gh(b), l.ja = oh(b));
               f && (l.wb = !0);
               cd(e.a, "oseid", Vf(this.a));
               X.a.push(l);
               ++Y.a.Ya;
               e.b ? this.Na(l, e.b) : ((b = Mg.g().a) && Mf(l, b), Oh(this), e.b || (d ? (Rh(l), l.Y()) : a && te(a, function() {
                    l.ga() || (Rh(l), l.Y())
               }), Y.h || Y.f()))
          }
     };

     function Qh(a) {
          Sh(a);
          Tf(a.a, function(b) {
               for (var c = [], d = 0; d < arguments.length; ++d) c[d] = arguments[d];
               return a.Ob.apply(a, q(c))
          }, function() {
               return a.h
          }, function(b) {
               for (var c = [], d = 0; d < arguments.length; ++d) c[d] = arguments[d];
               return a.Nb.apply(a, q(c))
          })
     }

     function Th(a) {
          Q.g();
          var b = [uh.g(), vh.g()],
               c = [Xg.g()];
          return [new Og(b), new Wg(a), new th(a), new Og(c)]
     }

     function Oh(a) {
          if (!a.f) {
               a.f = !0;
               try {
                    var b = J(),
                         c = T.g(),
                         d = Q.g();
                    d.h = 947190542;
                    if (Ph(a)) {
                         Y.a.Za = Uf(a.a);
                         c.m = !0;
                         Qh(a);
                         var e;
                         (e = T.g().f || z(A, "CrKey") || z(A, "PlayStation") || z(A, "Roku") || Ee() || z(A, "Xbox") || Fe() || Ge()) || (P(), e = 0 !== pd());
                         if (e) {
                              d.j = S();
                              var f = Mg.g();
                              if (null == f.b) {
                                   var g = Th(b);
                                   f.b = g
                              }
                              Ng(f, function(h) {
                                   return Uh(a, h)
                              }) ? Y.done || (mh(), bh(), lh(), Vh(a), Mc()) : Uh(a, "i")
                         } else Uh(a, "pv")
                    } else Wh(a, "c")
               } catch (h) {
                    throw Uh(a, "x"), Jg(), h;
               }
          }
     }

     function Vh(a) {
          if (-1 == Y.a.xa) {
               J();
               var b = 2 == Vf(a.a);
               dh(b);
               P().setTimeout(fe(131, function() {
                    Wh(a, "t")
               }), 36E5);
               Y.a.xa = S() - je
          }
     }

     function Uh(a, b) {
          Q.g().b = b;
          for (var c = ba(X.a), d = c.next(); !d.done; d = c.next()) d.value.m = !0;
          Wh(a, b, !1)
     }

     function Wh(a, b, c) {
          c = void 0 === c ? !0 : c;
          if (!Y.done) {
               Jh.cancel();
               a.a || (a.a = new Rf);
               if (2 == Vf(a.a) || a.c)
                    for (a = X.a, c && 0 < a.length && fh(Y, a, !0), c = ba(a), a = c.next(); !a.done; a = c.next()) {
                         a = a.value;
                         var d = {};
                         ig(a, 1, (d.r = b, d));
                         Qf(a)
                    }
               Y.done = !0
          }
     }

     function Ph(a) {
          if (!jh(J())) return !1;
          var b = new Rf;
          if (!(b.a || b.b || b.c)) return !1;
          a.a = b;
          return !0
     }
     k.Na = function(a, b) {
          a.m = !0;
          var c = {};
          ig(a, 2, (c.r = b, c));
          Qf(a)
     };
     k.Kb = function(a) {
          a && W(a.c) && (0 >= Ne(Kf(a)) ? 0 : null != a.J && null != a.J.match(/\/pagead\/adview\?.*ai=.*&vt=\d+/i) && !a.qb) && (Gc(a.J), a.qb = !0)
     };

     function Xh(a, b) {
          if (b && b.data && b.source) {
               var c = b.data;
               if ("string" !== typeof c) var d = null;
               else {
                    d = {};
                    c = c.split("\n");
                    for (var e = 0; e != c.length; ++e) {
                         var f = c[e],
                              g = f.indexOf("=");
                         if (!(0 >= g)) {
                              var h = Number(f.substr(0, g));
                              f = f.substr(g + 1);
                              switch (h) {
                                   case 36:
                                   case 26:
                                   case 15:
                                   case 8:
                                   case 11:
                                   case 16:
                                   case 5:
                                   case 18:
                                        f = "true" == f;
                                        break;
                                   case 4:
                                   case 33:
                                   case 6:
                                   case 25:
                                   case 28:
                                   case 29:
                                   case 24:
                                   case 31:
                                   case 30:
                                   case 23:
                                   case 22:
                                   case 7:
                                   case 21:
                                   case 20:
                                        f = Number(f);
                                        break;
                                   case 19:
                                   case 3:
                                        if (ra(decodeURIComponent)) try {
                                             f = decodeURIComponent(f)
                                        } catch (n) {
                                             throw Error("Error: URI malformed: " + f);
                                        }
                              }
                              d[h] = f
                         }
                    }
                    d = d[0] ? d : null
               }
               if (c = d)
                    if (e = c[0], Fa("goog_creative_loaded goog_dom_content_loaded goog_listener_status goog_provide_mode goog_request_monitoring goog_stop_monitoring".split(" "), e) && (d = Fg(new ld(c[4], c[12]))))
                         if (0 < c[33] && -1 == d.ta && (d.ta = c[33]), "goog_stop_monitoring" === e) Lg(d);
                         else if ((c[35] || "goog_creative_loaded" === e) && d.Y(), Fa(d.aa, b.source) || d.aa.push(b.source), "goog_request_monitoring" === e || !d.xb)
                    if (d.xb = !0, void 0 !== c[16] && (d.ca = !!c[16]), c[19] && d.za(c[19]), void 0 !== c[6]) {
                         b = c[6];
                         c = Yh(b, d.u);
                         if (c != d.u) {
                              if (5 == c) {
                                   d.m = !0;
                                   Lg(d);
                                   return
                              }
                              d.u = c;
                              d.ra = qh(c)
                         }
                         4 == b && d.Y();
                         b = T.g();
                         c = mg(d, "goog_acknowledge_monitoring");
                         c[8] = b.b;
                         c[36] = b.w;
                         De(d.a.a, c, d.aa);
                         b = Q.g();
                         d.m && b.b ? (a.Na(d, b.b), Lg(d)) : a.c = !0
                    }
          }
     }

     function Rh(a) {
          if (a && md(lg(a))) {
               var b = mg(a, "goog_get_mode");
               De(a.a.a, b)
          }
     }

     function Sh(a) {
          if (!a.i) {
               re(E, "message", function(c) {
                    return Xh(a, c)
               }, 132);
               var b = Zh().contentWindow;
               b && re(b, "message", function(c) {
                    return Xh(a, c)
               }, 132);
               a.i = !0
          }
     }

     function $h(a) {
          re(J(), "unload", function() {
               Wh(a, "u")
          }, 133)
     }

     function Yh(a, b) {
          return Da([5, 2, 4, 3, 1, 0], function(c) {
               return c === a || c === b
          }) || 0
     }
     k.Lb = function(a, b) {
          b = void 0 === b ? !1 : b;
          if (a = Gg(a)) {
               var c = J();
               Qf(a);
               try {
                    var d = a.a.a;
                    if (null != d.contentWindow && 3 == a.ba) {
                         switch (a.u) {
                              case 2:
                              case 4:
                                   break;
                              default:
                                   return
                         }
                         var e = ng(a);
                         e.adk = a.j;
                         e.adf = a.ja;
                         0 === a.D && (e.invis = 1);
                         e.r = "ac";
                         var f = kh(Y, c, !1);
                         x(e, f);
                         if (b) b = {}, ig(a, 1, (b.r = "ac", b));
                         else try {
                              c.google_image_requests || (c.google_image_requests = []), d.contentWindow.osdsir(c, e, a.m || 0 >= Ne(Kf(a)) ? 2 : W(a.c) ? 4 : 3)
                         } catch (g) {}
                    }
               } finally {
                    Lg(a)
               }
          }
     };
     k.Mb = function(a, b) {
          a && b && sa(a) && 1 == a.nodeType && sa(b) && 1 == b.nodeType && (a = Gg(a)) && (J(), Jf(a), a.a.b = b, Pf(a), gg(a, b), a.b && (a = a.b, a.S(), a.c = b, a.Aa(), a.O()))
     };

     function Zh() {
          var a = gc("IFRAME", {
               id: "google_osd_static_frame_" + Math.floor(1E13 * Math.random()),
               name: "google_osd_static_frame"
          });
          a.style.display = "none";
          a.style.width = "0px";
          a.style.height = "0px";
          E.document.body.appendChild(a);
          return a
     }

     function Lh(a) {
          ua("Goog_Osd_UnloadAdBlock", fe(134, function(b) {
               for (var c = [], d = 0; d < arguments.length; ++d) c[d] = arguments[d];
               return a.Lb.apply(a, q(c))
          }));
          ua("Goog_Osd_UpdateElementToMeasure", fe(135, function(b) {
               for (var c = [], d = 0; d < arguments.length; ++d) c[d] = arguments[d];
               return a.Mb.apply(a, q(c))
          }))
     };
     ee(155, function() {
          Mh();
          var a = new Kh;
          Y.i = "osd";
          $h(a);
          Nc() ? a.jb() : (Nh(a), re(J(), "load", function() {
               P().setTimeout(fe(153, function(b) {
                    for (var c = [], d = 0; d < arguments.length; ++d) c[d] = arguments[d];
                    return a.jb.apply(a, q(c))
               }), 100)
          }, 154))
     });
}).call(this, this, this.document);
