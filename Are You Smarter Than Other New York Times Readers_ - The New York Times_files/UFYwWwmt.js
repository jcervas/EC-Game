(function() {
     var l, aa = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
               a != Array.prototype && a != Object.prototype && (a[b] = c.value)
          },
          m = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this,
          ba = function() {
               ba = function() {};
               m.Symbol || (m.Symbol = ca)
          },
          ca = function() {
               var a = 0;
               return function(b) {
                    return "jscomp_symbol_" + (b || "") + a++
               }
          }(),
          p = function() {
               ba();
               var a = m.Symbol.iterator;
               a || (a = m.Symbol.iterator = m.Symbol("iterator"));
               "function" != typeof Array.prototype[a] &&
                    aa(Array.prototype, a, {
                         configurable: !0,
                         writable: !0,
                         value: function() {
                              return da(this)
                         }
                    });
               p = function() {}
          },
          da = function(a) {
               var b = 0;
               return ea(function() {
                    return b < a.length ? {
                         done: !1,
                         value: a[b++]
                    } : {
                         done: !0
                    }
               })
          },
          ea = function(a) {
               p();
               a = {
                    next: a
               };
               a[m.Symbol.iterator] = function() {
                    return this
               };
               return a
          },
          q = function(a) {
               p();
               var b = a[Symbol.iterator];
               return b ? b.call(a) : da(a)
          },
          ha = "function" == typeof Object.create ? Object.create : function(a) {
               var b = function() {};
               b.prototype = a;
               return new b
          },
          ia;
     if ("function" == typeof Object.setPrototypeOf) ia = Object.setPrototypeOf;
     else {
          var ja;
          a: {
               var ka = {
                         Ca: !0
                    },
                    la = {};
               try {
                    la.__proto__ = ka;
                    ja = la.Ca;
                    break a
               } catch (a) {}
               ja = !1
          }
          ia = ja ? function(a, b) {
               a.__proto__ = b;
               if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
               return a
          } : null
     }
     var ma = ia,
          na = function(a, b) {
               a.prototype = ha(b.prototype);
               a.prototype.constructor = a;
               if (ma) ma(a, b);
               else
                    for (var c in b)
                         if ("prototype" != c)
                              if (Object.defineProperties) {
                                   var d = Object.getOwnPropertyDescriptor(b, c);
                                   d && Object.defineProperty(a, c, d)
                              } else a[c] = b[c];
               a.na = b.prototype
          },
          oa = function(a) {
               for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
               return c
          },
          pa = function(a, b) {
               if (b) {
                    var c = m;
                    a = a.split(".");
                    for (var d = 0; d < a.length - 1; d++) {
                         var e = a[d];
                         e in c || (c[e] = {});
                         c = c[e]
                    }
                    a = a[a.length - 1];
                    d = c[a];
                    b = b(d);
                    b != d && null != b &&
                         aa(c, a, {
                              configurable: !0,
                              writable: !0,
                              value: b
                         })
               }
          },
          r = function(a, b) {
               return Object.prototype.hasOwnProperty.call(a, b)
          };
     pa("WeakMap", function(a) {
          function b(a) {
               r(a, d) || aa(a, d, {
                    value: {}
               })
          }

          function c(a) {
               var c = Object[a];
               c && (Object[a] = function(a) {
                    b(a);
                    return c(a)
               })
          }
          if (function() {
                    if (!a || !Object.seal) return !1;
                    try {
                         var b = Object.seal({}),
                              c = Object.seal({}),
                              d = new a([
                                   [b, 2],
                                   [c, 3]
                              ]);
                         if (2 != d.get(b) || 3 != d.get(c)) return !1;
                         d["delete"](b);
                         d.set(c, 4);
                         return !d.has(b) && 4 == d.get(c)
                    } catch (n) {
                         return !1
                    }
               }()) return a;
          var d = "$jscomp_hidden_" + Math.random();
          c("freeze");
          c("preventExtensions");
          c("seal");
          var e = 0,
               f = function(a) {
                    this.U = (e += Math.random() +
                         1).toString();
                    if (a) {
                         ba();
                         p();
                         a = q(a);
                         for (var b; !(b = a.next()).done;) b = b.value, this.set(b[0], b[1])
                    }
               };
          f.prototype.set = function(a, c) {
               b(a);
               if (!r(a, d)) throw Error("WeakMap key fail: " + a);
               a[d][this.U] = c;
               return this
          };
          f.prototype.get = function(a) {
               return r(a, d) ? a[d][this.U] : void 0
          };
          f.prototype.has = function(a) {
               return r(a, d) && r(a[d], this.U)
          };
          f.prototype["delete"] = function(a) {
               return r(a, d) && r(a[d], this.U) ? delete a[d][this.U] : !1
          };
          return f
     });
     pa("Map", function(a) {
          if (function() {
                    if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                    try {
                         var b = Object.seal({
                                   x: 4
                              }),
                              c = new a(q([
                                   [b, "s"]
                              ]));
                         if ("s" != c.get(b) || 1 != c.size || c.get({
                                   x: 4
                              }) || c.set({
                                   x: 4
                              }, "t") != c || 2 != c.size) return !1;
                         var d = c.entries(),
                              e = d.next();
                         if (e.done || e.value[0] != b || "s" != e.value[1]) return !1;
                         e = d.next();
                         return e.done || 4 != e.value[0].x || "t" != e.value[1] || !d.next().done ? !1 : !0
                    } catch (t) {
                         return !1
                    }
               }()) return a;
          ba();
          p();
          var b = new WeakMap,
               c = function(a) {
                    this.S = {};
                    this.g = f();
                    this.size = 0;
                    if (a) {
                         a = q(a);
                         for (var b; !(b = a.next()).done;) b = b.value, this.set(b[0], b[1])
                    }
               };
          c.prototype.set = function(a, b) {
               var c = d(this, a);
               c.list || (c.list = this.S[c.id] = []);
               c.f ? c.f.value = b : (c.f = {
                    next: this.g,
                    w: this.g.w,
                    head: this.g,
                    key: a,
                    value: b
               }, c.list.push(c.f), this.g.w.next = c.f, this.g.w = c.f, this.size++);
               return this
          };
          c.prototype["delete"] = function(a) {
               a = d(this, a);
               return a.f && a.list ? (a.list.splice(a.index, 1), a.list.length || delete this.S[a.id], a.f.w.next = a.f.next, a.f.next.w = a.f.w, a.f.head = null, this.size--,
                    !0) : !1
          };
          c.prototype.clear = function() {
               this.S = {};
               this.g = this.g.w = f();
               this.size = 0
          };
          c.prototype.has = function(a) {
               return !!d(this, a).f
          };
          c.prototype.get = function(a) {
               return (a = d(this, a).f) && a.value
          };
          c.prototype.entries = function() {
               return e(this, function(a) {
                    return [a.key, a.value]
               })
          };
          c.prototype.keys = function() {
               return e(this, function(a) {
                    return a.key
               })
          };
          c.prototype.values = function() {
               return e(this, function(a) {
                    return a.value
               })
          };
          c.prototype.forEach = function(a, b) {
               for (var c = this.entries(), d; !(d = c.next()).done;) d = d.value,
                    a.call(b, d[1], d[0], this)
          };
          c.prototype[Symbol.iterator] = c.prototype.entries;
          var d = function(a, c) {
                    var d = c && typeof c;
                    "object" == d || "function" == d ? b.has(c) ? d = b.get(c) : (d = "" + ++g, b.set(c, d)) : d = "p_" + c;
                    var e = a.S[d];
                    if (e && r(a.S, d))
                         for (a = 0; a < e.length; a++) {
                              var f = e[a];
                              if (c !== c && f.key !== f.key || c === f.key) return {
                                   id: d,
                                   list: e,
                                   index: a,
                                   f: f
                              }
                         }
                    return {
                         id: d,
                         list: e,
                         index: -1,
                         f: void 0
                    }
               },
               e = function(a, b) {
                    var c = a.g;
                    return ea(function() {
                         if (c) {
                              for (; c.head != a.g;) c = c.w;
                              for (; c.next != c.head;) return c = c.next, {
                                   done: !1,
                                   value: b(c)
                              };
                              c = null
                         }
                         return {
                              done: !0,
                              value: void 0
                         }
                    })
               },
               f = function() {
                    var a = {};
                    return a.w = a.next = a.head = a
               },
               g = 0;
          return c
     });
     pa("Number.isFinite", function(a) {
          return a ? a : function(a) {
               return "number" !== typeof a ? !1 : !isNaN(a) && Infinity !== a && -Infinity !== a
          }
     });
     pa("Number.isInteger", function(a) {
          return a ? a : function(a) {
               return Number.isFinite(a) ? a === Math.floor(a) : !1
          }
     });
     var u = this,
          v = function(a) {
               return "string" == typeof a
          },
          w = function(a) {
               return "number" == typeof a
          },
          x = function() {},
          qa = function(a) {
               var b = typeof a;
               if ("object" == b)
                    if (a) {
                         if (a instanceof Array) return "array";
                         if (a instanceof Object) return b;
                         var c = Object.prototype.toString.call(a);
                         if ("[object Window]" == c) return "object";
                         if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
                         if ("[object Function]" ==
                              c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
                    } else return "null";
               else if ("function" == b && "undefined" == typeof a.call) return "object";
               return b
          },
          z = function(a) {
               var b = qa(a);
               return "array" == b || "object" == b && "number" == typeof a.length
          },
          A = function(a) {
               return "function" == qa(a)
          },
          ra = function(a) {
               var b = typeof a;
               return "object" == b && null != a || "function" == b
          },
          sa = function(a, b, c) {
               return a.call.apply(a.bind, arguments)
          },
          ta = function(a, b, c) {
               if (!a) throw Error();
               if (2 < arguments.length) {
                    var d = Array.prototype.slice.call(arguments, 2);
                    return function() {
                         var c = Array.prototype.slice.call(arguments);
                         Array.prototype.unshift.apply(c, d);
                         return a.apply(b, c)
                    }
               }
               return function() {
                    return a.apply(b, arguments)
               }
          },
          ua = function(a, b, c) {
               ua = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? sa : ta;
               return ua.apply(null, arguments)
          },
          va = Date.now || function() {
               return +new Date
          },
          wa = function(a, b) {
               function c() {}
               c.prototype = b.prototype;
               a.na = b.prototype;
               a.prototype =
                    new c;
               a.prototype.constructor = a;
               a.Va = function(a, c, f) {
                    for (var d = Array(arguments.length - 2), e = 2; e < arguments.length; e++) d[e - 2] = arguments[e];
                    return b.prototype[c].apply(a, d)
               }
          };
     var C = function(a) {
          if (Error.captureStackTrace) Error.captureStackTrace(this, C);
          else {
               var b = Error().stack;
               b && (this.stack = b)
          }
          a && (this.message = String(a))
     };
     wa(C, Error);
     C.prototype.name = "CustomError";
     var xa = Array.prototype.indexOf ? function(a, b) {
               return Array.prototype.indexOf.call(a, b, void 0)
          } : function(a, b) {
               if (v(a)) return v(b) && 1 == b.length ? a.indexOf(b, 0) : -1;
               for (var c = 0; c < a.length; c++)
                    if (c in a && a[c] === b) return c;
               return -1
          },
          za = Array.prototype.forEach ? function(a, b, c) {
               Array.prototype.forEach.call(a, b, c)
          } : function(a, b, c) {
               for (var d = a.length, e = v(a) ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
          },
          Ca = function(a) {
               var b = document;
               b = Aa(b.querySelectorAll && b.querySelector ? b.querySelectorAll(".GoogleActiveViewClass") :
                    Ba());
               a: {
                    for (var c = b.length, d = v(b) ? b.split("") : b, e = 0; e < c; e++)
                         if (e in d && a.call(void 0, d[e], e, b)) {
                              a = e;
                              break a
                         } a = -1
               }
               return 0 > a ? null : v(b) ? b.charAt(a) : b[a]
          },
          Da = function(a, b) {
               b = xa(a, b);
               var c;
               (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
               return c
          },
          Ea = function(a) {
               return Array.prototype.concat.apply([], arguments)
          },
          Aa = function(a) {
               var b = a.length;
               if (0 < b) {
                    for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
                    return c
               }
               return []
          };
     var Fa = String.prototype.trim ? function(a) {
               return a.trim()
          } : function(a) {
               return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
          },
          Ga = function(a, b) {
               return a < b ? -1 : a > b ? 1 : 0
          },
          Ha = function() {
               return "opacity".replace(/\-([a-z])/g, function(a, b) {
                    return b.toUpperCase()
               })
          },
          Ia = function(a) {
               var b = v(void 0) ? "undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08") : "\\s";
               return a.replace(new RegExp("(^" + (b ? "|[" + b + "]+" : "") + ")([a-z])", "g"), function(a, b, e) {
                    return b + e.toUpperCase()
               })
          };
     var D;
     a: {
          var Ja = u.navigator;
          if (Ja) {
               var Ka = Ja.userAgent;
               if (Ka) {
                    D = Ka;
                    break a
               }
          }
          D = ""
     }
     var E = function(a) {
          return -1 != D.indexOf(a)
     };
     var La = function(a, b) {
          for (var c in a)
               if (b.call(void 0, a[c], c, a)) return !0;
          return !1
     };
     var Ma = function(a) {
          Ma[" "](a);
          return a
     };
     Ma[" "] = x;
     var Na = function(a, b) {
          try {
               return Ma(a[b]), !0
          } catch (c) {}
          return !1
     };
     var Oa = E("Opera"),
          F = E("Trident") || E("MSIE"),
          Pa = E("Edge"),
          Qa = E("Gecko") && !(-1 != D.toLowerCase().indexOf("webkit") && !E("Edge")) && !(E("Trident") || E("MSIE")) && !E("Edge"),
          Ra = -1 != D.toLowerCase().indexOf("webkit") && !E("Edge"),
          Sa = function() {
               var a = u.document;
               return a ? a.documentMode : void 0
          },
          Ta;
     a: {
          var Ua = "",
               Va = function() {
                    var a = D;
                    if (Qa) return /rv:([^\);]+)(\)|;)/.exec(a);
                    if (Pa) return /Edge\/([\d\.]+)/.exec(a);
                    if (F) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                    if (Ra) return /WebKit\/(\S+)/.exec(a);
                    if (Oa) return /(?:Version)[ \/]?(\S+)/.exec(a)
               }();Va && (Ua = Va ? Va[1] : "");
          if (F) {
               var Wa = Sa();
               if (null != Wa && Wa > parseFloat(Ua)) {
                    Ta = String(Wa);
                    break a
               }
          }
          Ta = Ua
     }
     var Xa = Ta,
          Ya = {},
          Za;
     var $a = u.document;
     Za = $a && F ? Sa() || ("CSS1Compat" == $a.compatMode ? parseInt(Xa, 10) : 5) : void 0;
     var Ba = function() {
               var a, b;
               var c = document;
               if (c.querySelectorAll && c.querySelector) return c.querySelectorAll(".GoogleActiveViewClass");
               if (c.getElementsByClassName) {
                    var d = c.getElementsByClassName("GoogleActiveViewClass");
                    return d
               }
               d = c.getElementsByTagName("*");
               var e = {};
               for (a = b = 0; c = d[a]; a++) {
                    var f = c.className,
                         g;
                    if (g = "function" == typeof f.split) g = 0 <= xa(f.split(/\s+/), "GoogleActiveViewClass");
                    g && (e[b++] = c)
               }
               e.length = b;
               return e
          },
          bb = function(a) {
               return 9 == a.nodeType ? a : a.ownerDocument || a.document
          };
     var cb = function(a, b) {
          this.Ma = 100;
          this.Ea = a;
          this.Qa = b;
          this.aa = 0;
          this.g = null
     };
     cb.prototype.get = function() {
          if (0 < this.aa) {
               this.aa--;
               var a = this.g;
               this.g = a.next;
               a.next = null
          } else a = this.Ea();
          return a
     };
     cb.prototype.put = function(a) {
          this.Qa(a);
          this.aa < this.Ma && (this.aa++, a.next = this.g, this.g = a)
     };
     var db = function(a) {
          var b = !1,
               c;
          return function() {
               b || (c = a(), b = !0);
               return c
          }
     };
     var eb = function(a) {
               u.setTimeout(function() {
                    throw a;
               }, 0)
          },
          fb, gb = function() {
               var a = u.MessageChannel;
               "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !E("Presto") && (a = function() {
                    var a = document.createElement("IFRAME");
                    a.style.display = "none";
                    a.src = "";
                    document.documentElement.appendChild(a);
                    var b = a.contentWindow;
                    a = b.document;
                    a.open();
                    a.write("");
                    a.close();
                    var c = "callImmediate" + Math.random(),
                         d = "file:" == b.location.protocol ? "*" : b.location.protocol + "//" + b.location.host;
                    a = ua(function(a) {
                         if (("*" == d || a.origin == d) && a.data == c) this.port1.onmessage()
                    }, this);
                    b.addEventListener("message", a, !1);
                    this.port1 = {};
                    this.port2 = {
                         postMessage: function() {
                              b.postMessage(c, d)
                         }
                    }
               });
               if ("undefined" !== typeof a && !E("Trident") && !E("MSIE")) {
                    var b = new a,
                         c = {},
                         d = c;
                    b.port1.onmessage = function() {
                         if (void 0 !== c.next) {
                              c = c.next;
                              var a = c.qa;
                              c.qa = null;
                              a()
                         }
                    };
                    return function(a) {
                         d.next = {
                              qa: a
                         };
                         d = d.next;
                         b.port2.postMessage(0)
                    }
               }
               return "undefined" !== typeof document && "onreadystatechange" in document.createElement("SCRIPT") ?
                    function(a) {
                         var b = document.createElement("SCRIPT");
                         b.onreadystatechange = function() {
                              b.onreadystatechange = null;
                              b.parentNode.removeChild(b);
                              b = null;
                              a();
                              a = null
                         };
                         document.documentElement.appendChild(b)
                    } : function(a) {
                         u.setTimeout(a, 0)
                    }
          };
     var hb = function() {
               this.fa = this.O = null
          },
          jb = new cb(function() {
               return new ib
          }, function(a) {
               a.reset()
          });
     hb.prototype.add = function(a, b) {
          var c = jb.get();
          c.set(a, b);
          this.fa ? this.fa.next = c : this.O = c;
          this.fa = c
     };
     hb.prototype.remove = function() {
          var a = null;
          this.O && (a = this.O, this.O = this.O.next, this.O || (this.fa = null), a.next = null);
          return a
     };
     var ib = function() {
          this.next = this.scope = this.ja = null
     };
     ib.prototype.set = function(a, b) {
          this.ja = a;
          this.scope = b;
          this.next = null
     };
     ib.prototype.reset = function() {
          this.next = this.scope = this.ja = null
     };
     var ob = function(a, b) {
               kb || lb();
               mb || (kb(), mb = !0);
               nb.add(a, b)
          },
          kb, lb = function() {
               if (u.Promise && u.Promise.resolve) {
                    var a = u.Promise.resolve(void 0);
                    kb = function() {
                         a.then(pb)
                    }
               } else kb = function() {
                    var a = pb;
                    !A(u.setImmediate) || u.Window && u.Window.prototype && !E("Edge") && u.Window.prototype.setImmediate == u.setImmediate ? (fb || (fb = gb()), fb(a)) : u.setImmediate(a)
               }
          },
          mb = !1,
          nb = new hb,
          pb = function() {
               for (var a; a = nb.remove();) {
                    try {
                         a.ja.call(a.scope)
                    } catch (b) {
                         eb(b)
                    }
                    jb.put(a)
               }
               mb = !1
          };
     var H = function(a) {
               this.u = 0;
               this.wa = void 0;
               this.K = this.A = this.H = null;
               this.$ = this.ia = !1;
               if (a != x) try {
                    var b = this;
                    a.call(void 0, function(a) {
                         G(b, 2, a)
                    }, function(a) {
                         G(b, 3, a)
                    })
               } catch (c) {
                    G(this, 3, c)
               }
          },
          qb = function() {
               this.next = this.context = this.M = this.V = this.D = null;
               this.Z = !1
          };
     qb.prototype.reset = function() {
          this.context = this.M = this.V = this.D = null;
          this.Z = !1
     };
     var rb = new cb(function() {
               return new qb
          }, function(a) {
               a.reset()
          }),
          sb = function(a, b, c) {
               var d = rb.get();
               d.V = a;
               d.M = b;
               d.context = c;
               return d
          };
     H.prototype.then = function(a, b, c) {
          return tb(this, A(a) ? a : null, A(b) ? b : null, c)
     };
     H.prototype.then = H.prototype.then;
     H.prototype.$goog_Thenable = !0;
     H.prototype.cancel = function(a) {
          0 == this.u && ob(function() {
               var b = new I(a);
               ub(this, b)
          }, this)
     };
     var ub = function(a, b) {
               if (0 == a.u)
                    if (a.H) {
                         var c = a.H;
                         if (c.A) {
                              for (var d = 0, e = null, f = null, g = c.A; g && (g.Z || (d++, g.D == a && (e = g), !(e && 1 < d))); g = g.next) e || (f = g);
                              e && (0 == c.u && 1 == d ? ub(c, b) : (f ? (d = f, d.next == c.K && (c.K = d), d.next = d.next.next) : vb(c), wb(c, e, 3, b)))
                         }
                         a.H = null
                    } else G(a, 3, b)
          },
          yb = function(a, b) {
               a.A || 2 != a.u && 3 != a.u || xb(a);
               a.K ? a.K.next = b : a.A = b;
               a.K = b
          },
          tb = function(a, b, c, d) {
               var e = sb(null, null, null);
               e.D = new H(function(a, g) {
                    e.V = b ? function(c) {
                         try {
                              var e = b.call(d, c);
                              a(e)
                         } catch (n) {
                              g(n)
                         }
                    } : a;
                    e.M = c ? function(b) {
                         try {
                              var e = c.call(d,
                                   b);
                              void 0 === e && b instanceof I ? g(b) : a(e)
                         } catch (n) {
                              g(n)
                         }
                    } : g
               });
               e.D.H = a;
               yb(a, e);
               return e.D
          };
     H.prototype.Ta = function(a) {
          this.u = 0;
          G(this, 2, a)
     };
     H.prototype.Ua = function(a) {
          this.u = 0;
          G(this, 3, a)
     };
     var G = function(a, b, c) {
               if (0 == a.u) {
                    a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself"));
                    a.u = 1;
                    a: {
                         var d = c,
                              e = a.Ta,
                              f = a.Ua;
                         if (d instanceof H) {
                              yb(d, sb(e || x, f || null, a));
                              var g = !0
                         } else {
                              if (d) try {
                                   var h = !!d.$goog_Thenable
                              } catch (n) {
                                   h = !1
                              } else h = !1;
                              if (h) d.then(e, f, a), g = !0;
                              else {
                                   if (ra(d)) try {
                                        var k = d.then;
                                        if (A(k)) {
                                             zb(d, k, e, f, a);
                                             g = !0;
                                             break a
                                        }
                                   } catch (n) {
                                        f.call(a, n);
                                        g = !0;
                                        break a
                                   }
                                   g = !1
                              }
                         }
                    }
                    g || (a.wa = c, a.u = b, a.H = null, xb(a), 3 != b || c instanceof I || Ab(a, c))
               }
          },
          zb = function(a, b, c, d, e) {
               var f = !1,
                    g = function(a) {
                         f || (f = !0, c.call(e,
                              a))
                    },
                    h = function(a) {
                         f || (f = !0, d.call(e, a))
                    };
               try {
                    b.call(a, g, h)
               } catch (k) {
                    h(k)
               }
          },
          xb = function(a) {
               a.ia || (a.ia = !0, ob(a.Ia, a))
          },
          vb = function(a) {
               var b = null;
               a.A && (b = a.A, a.A = b.next, b.next = null);
               a.A || (a.K = null);
               return b
          };
     H.prototype.Ia = function() {
          for (var a; a = vb(this);) wb(this, a, this.u, this.wa);
          this.ia = !1
     };
     var wb = function(a, b, c, d) {
               if (3 == c && b.M && !b.Z)
                    for (; a && a.$; a = a.H) a.$ = !1;
               if (b.D) b.D.H = null, Bb(b, c, d);
               else try {
                    b.Z ? b.V.call(b.context) : Bb(b, c, d)
               } catch (e) {
                    Cb.call(null, e)
               }
               rb.put(b)
          },
          Bb = function(a, b, c) {
               2 == b ? a.V.call(a.context, c) : a.M && a.M.call(a.context, c)
          },
          Ab = function(a, b) {
               a.$ = !0;
               ob(function() {
                    a.$ && Cb.call(null, b)
               })
          },
          Cb = eb,
          I = function(a) {
               C.call(this, a)
          };
     wa(I, C);
     I.prototype.name = "cancel";
     var Db = function(a, b, c) {
          this.Oa = a;
          this.resolve = b;
          this.reject = c
     };
     var J = "StopIteration" in u ? u.StopIteration : {
               message: "StopIteration",
               stack: ""
          },
          K = function() {};
     K.prototype.next = function() {
          throw J;
     };
     K.prototype.ga = function() {
          return this
     };
     var Eb = function(a) {
               if (a instanceof K) return a;
               if ("function" == typeof a.ga) return a.ga(!1);
               if (z(a)) {
                    var b = 0,
                         c = new K;
                    c.next = function() {
                         for (;;) {
                              if (b >= a.length) throw J;
                              if (b in a) return a[b++];
                              b++
                         }
                    };
                    return c
               }
               throw Error("Not implemented");
          },
          Fb = function(a, b) {
               if (z(a)) try {
                    za(a, b, void 0)
               } catch (c) {
                    if (c !== J) throw c;
               } else {
                    a = Eb(a);
                    try {
                         for (;;) b.call(void 0, a.next(), void 0, a)
                    } catch (c) {
                         if (c !== J) throw c;
                    }
               }
          },
          Gb = function(a, b) {
               var c = 1;
               Fb(a, function(a) {
                    c = b.call(void 0, c, a)
               });
               return c
          },
          Hb = function(a, b) {
               var c = Eb(a);
               a = new K;
               a.next = function() {
                    var a = c.next();
                    if (b.call(void 0, a, void 0, c)) return a;
                    throw J;
               };
               return a
          };
     var L = function(a, b) {
          this.o = {};
          this.c = [];
          this.Y = this.b = 0;
          var c = arguments.length;
          if (1 < c) {
               if (c % 2) throw Error("Uneven number of arguments");
               for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
          } else a && this.addAll(a)
     };
     l = L.prototype;
     l.v = function() {
          Ib(this);
          for (var a = [], b = 0; b < this.c.length; b++) a.push(this.o[this.c[b]]);
          return a
     };
     l.B = function() {
          Ib(this);
          return this.c.concat()
     };
     l.R = function(a) {
          return M(this.o, a)
     };
     l.clear = function() {
          this.o = {};
          this.Y = this.b = this.c.length = 0
     };
     l.remove = function(a) {
          return M(this.o, a) ? (delete this.o[a], this.b--, this.Y++, this.c.length > 2 * this.b && Ib(this), !0) : !1
     };
     var Ib = function(a) {
          if (a.b != a.c.length) {
               for (var b = 0, c = 0; b < a.c.length;) {
                    var d = a.c[b];
                    M(a.o, d) && (a.c[c++] = d);
                    b++
               }
               a.c.length = c
          }
          if (a.b != a.c.length) {
               var e = {};
               for (c = b = 0; b < a.c.length;) d = a.c[b], M(e, d) || (a.c[c++] = d, e[d] = 1), b++;
               a.c.length = c
          }
     };
     l = L.prototype;
     l.get = function(a, b) {
          return M(this.o, a) ? this.o[a] : b
     };
     l.set = function(a, b) {
          M(this.o, a) || (this.b++, this.c.push(a), this.Y++);
          this.o[a] = b
     };
     l.addAll = function(a) {
          if (a instanceof L)
               for (var b = a.B(), c = 0; c < b.length; c++) this.set(b[c], a.get(b[c]));
          else
               for (b in a) this.set(b, a[b])
     };
     l.forEach = function(a, b) {
          for (var c = this.B(), d = 0; d < c.length; d++) {
               var e = c[d],
                    f = this.get(e);
               a.call(b, f, e, this)
          }
     };
     l.clone = function() {
          return new L(this)
     };
     l.ga = function(a) {
          Ib(this);
          var b = 0,
               c = this.Y,
               d = this,
               e = new K;
          e.next = function() {
               if (c != d.Y) throw Error("The map has changed since the iterator was created");
               if (b >= d.c.length) throw J;
               var e = d.c[b++];
               return a ? e : d.o[e]
          };
          return e
     };
     var M = function(a, b) {
          return Object.prototype.hasOwnProperty.call(a, b)
     };
     var Jb = function(a) {
               if (a.v && "function" == typeof a.v) return a.v();
               if (v(a)) return a.split("");
               if (z(a)) {
                    for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
                    return b
               }
               b = [];
               c = 0;
               for (d in a) b[c++] = a[d];
               return b
          },
          Kb = function(a, b, c) {
               if (a.forEach && "function" == typeof a.forEach) a.forEach(b, c);
               else if (z(a) || v(a)) za(a, b, c);
               else {
                    if (a.B && "function" == typeof a.B) var d = a.B();
                    else if (a.v && "function" == typeof a.v) d = void 0;
                    else if (z(a) || v(a)) {
                         d = [];
                         for (var e = a.length, f = 0; f < e; f++) d.push(f)
                    } else
                         for (f in d = [], e = 0, a) d[e++] = f;
                    e = Jb(a);
                    f = e.length;
                    for (var g = 0; g < f; g++) b.call(c, e[g], d && d[g], a)
               }
          };
     var Lb = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/,
          Mb = function(a, b) {
               if (a) {
                    a = a.split("&");
                    for (var c = 0; c < a.length; c++) {
                         var d = a[c].indexOf("="),
                              e = null;
                         if (0 <= d) {
                              var f = a[c].substring(0, d);
                              e = a[c].substring(d + 1)
                         } else f = a[c];
                         b(f, e ? decodeURIComponent(e.replace(/\+/g, " ")) : "")
                    }
               }
          };
     var N = function(a) {
          this.l = this.I = this.C = "";
          this.N = null;
          this.G = this.j = "";
          this.i = this.Ka = !1;
          if (a instanceof N) {
               this.i = a.i;
               Nb(this, a.C);
               var b = a.I;
               O(this);
               this.I = b;
               b = a.l;
               O(this);
               this.l = b;
               Ob(this, a.N);
               b = a.j;
               O(this);
               this.j = b;
               Pb(this, a.s.clone());
               a = a.G;
               O(this);
               this.G = a
          } else a && (b = String(a).match(Lb)) ? (this.i = !1, Nb(this, b[1] || "", !0), a = b[2] || "", O(this), this.I = Qb(a), a = b[3] || "", O(this), this.l = Qb(a, !0), Ob(this, b[4]), a = b[5] || "", O(this), this.j = Qb(a, !0), Pb(this, b[6] || "", !0), a = b[7] || "", O(this), this.G = Qb(a)) : (this.i = !1, this.s = new P(null, this.i))
     };
     N.prototype.toString = function() {
          var a = [],
               b = this.C;
          b && a.push(Rb(b, Sb, !0), ":");
          var c = this.l;
          if (c || "file" == b) a.push("//"), (b = this.I) && a.push(Rb(b, Sb, !0), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.N, null != c && a.push(":", String(c));
          if (c = this.j) this.l && "/" != c.charAt(0) && a.push("/"), a.push(Rb(c, "/" == c.charAt(0) ? Tb : Ub, !0));
          (c = this.s.toString()) && a.push("?", c);
          (c = this.G) && a.push("#", Rb(c, Vb));
          return a.join("")
     };
     N.prototype.resolve = function(a) {
          var b = this.clone(),
               c = !!a.C;
          c ? Nb(b, a.C) : c = !!a.I;
          if (c) {
               var d = a.I;
               O(b);
               b.I = d
          } else c = !!a.l;
          c ? (d = a.l, O(b), b.l = d) : c = null != a.N;
          d = a.j;
          if (c) Ob(b, a.N);
          else if (c = !!a.j) {
               if ("/" != d.charAt(0))
                    if (this.l && !this.j) d = "/" + d;
                    else {
                         var e = b.j.lastIndexOf("/"); - 1 != e && (d = b.j.substr(0, e + 1) + d)
                    } e = d;
               if (".." == e || "." == e) d = "";
               else if (-1 != e.indexOf("./") || -1 != e.indexOf("/.")) {
                    d = 0 == e.lastIndexOf("/", 0);
                    e = e.split("/");
                    for (var f = [], g = 0; g < e.length;) {
                         var h = e[g++];
                         "." == h ? d && g == e.length && f.push("") : ".." ==
                              h ? ((1 < f.length || 1 == f.length && "" != f[0]) && f.pop(), d && g == e.length && f.push("")) : (f.push(h), d = !0)
                    }
                    d = f.join("/")
               } else d = e
          }
          c ? (O(b), b.j = d) : c = "" !== a.s.toString();
          c ? Pb(b, a.s.clone()) : c = !!a.G;
          c && (a = a.G, O(b), b.G = a);
          return b
     };
     N.prototype.clone = function() {
          return new N(this)
     };
     var Nb = function(a, b, c) {
               O(a);
               a.C = c ? Qb(b, !0) : b;
               a.C && (a.C = a.C.replace(/:$/, ""))
          },
          Ob = function(a, b) {
               O(a);
               if (b) {
                    b = Number(b);
                    if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
                    a.N = b
               } else a.N = null
          },
          Pb = function(a, b, c) {
               O(a);
               b instanceof P ? (a.s = b, a.s.ma(a.i)) : (c || (b = Rb(b, Wb)), a.s = new P(b, a.i))
          },
          Q = function(a, b, c) {
               O(a);
               a.s.set(b, c);
               return a
          };
     N.prototype.removeParameter = function(a) {
          O(this);
          this.s.remove(a);
          return this
     };
     var O = function(a) {
          if (a.Ka) throw Error("Tried to modify a read-only Uri");
     };
     N.prototype.ma = function(a) {
          this.i = a;
          this.s && this.s.ma(a)
     };
     var Qb = function(a, b) {
               return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""
          },
          Rb = function(a, b, c) {
               return v(a) ? (a = encodeURI(a).replace(b, Xb), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null
          },
          Xb = function(a) {
               a = a.charCodeAt(0);
               return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
          },
          Sb = /[#\/\?@]/g,
          Ub = /[#\?:]/g,
          Tb = /[#\?]/g,
          Wb = /[#\?@]/g,
          Vb = /#/g,
          P = function(a, b) {
               this.b = this.a = null;
               this.h = a || null;
               this.i = !!b
          },
          R = function(a) {
               a.a || (a.a = new L, a.b = 0, a.h && Mb(a.h, function(b, c) {
                    a.add(decodeURIComponent(b.replace(/\+/g,
                         " ")), c)
               }))
          };
     l = P.prototype;
     l.add = function(a, b) {
          R(this);
          this.h = null;
          a = S(this, a);
          var c = this.a.get(a);
          c || this.a.set(a, c = []);
          c.push(b);
          this.b += 1;
          return this
     };
     l.remove = function(a) {
          R(this);
          a = S(this, a);
          return this.a.R(a) ? (this.h = null, this.b -= this.a.get(a).length, this.a.remove(a)) : !1
     };
     l.clear = function() {
          this.a = this.h = null;
          this.b = 0
     };
     l.R = function(a) {
          R(this);
          a = S(this, a);
          return this.a.R(a)
     };
     l.forEach = function(a, b) {
          R(this);
          this.a.forEach(function(c, d) {
               za(c, function(c) {
                    a.call(b, c, d, this)
               }, this)
          }, this)
     };
     l.B = function() {
          R(this);
          for (var a = this.a.v(), b = this.a.B(), c = [], d = 0; d < b.length; d++)
               for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
          return c
     };
     l.v = function(a) {
          R(this);
          var b = [];
          if (v(a)) this.R(a) && (b = Ea(b, this.a.get(S(this, a))));
          else {
               a = this.a.v();
               for (var c = 0; c < a.length; c++) b = Ea(b, a[c])
          }
          return b
     };
     l.set = function(a, b) {
          R(this);
          this.h = null;
          a = S(this, a);
          this.R(a) && (this.b -= this.a.get(a).length);
          this.a.set(a, [b]);
          this.b += 1;
          return this
     };
     l.get = function(a, b) {
          if (!a) return b;
          a = this.v(a);
          return 0 < a.length ? String(a[0]) : b
     };
     l.toString = function() {
          if (this.h) return this.h;
          if (!this.a) return "";
          for (var a = [], b = this.a.B(), c = 0; c < b.length; c++) {
               var d = b[c],
                    e = encodeURIComponent(String(d));
               d = this.v(d);
               for (var f = 0; f < d.length; f++) {
                    var g = e;
                    "" !== d[f] && (g += "=" + encodeURIComponent(String(d[f])));
                    a.push(g)
               }
          }
          return this.h = a.join("&")
     };
     l.clone = function() {
          var a = new P;
          a.h = this.h;
          this.a && (a.a = this.a.clone(), a.b = this.b);
          return a
     };
     var S = function(a, b) {
          b = String(b);
          a.i && (b = b.toLowerCase());
          return b
     };
     P.prototype.ma = function(a) {
          a && !this.i && (R(this), this.h = null, this.a.forEach(function(a, c) {
               var b = c.toLowerCase();
               c != b && (this.remove(c), this.remove(b), 0 < a.length && (this.h = null, this.a.set(S(this, b), Aa(a)), this.b += a.length))
          }, this));
          this.i = a
     };
     P.prototype.extend = function(a) {
          for (var b = 0; b < arguments.length; b++) Kb(arguments[b], function(a, b) {
               this.add(b, a)
          }, this)
     };
     var Yb = db(function() {
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

     function Zb(a) {
          return a ? a.passive && Yb() ? a : a.capture || !1 : a
     }
     var $b = function(a, b, c, d) {
               a.addEventListener ? a.addEventListener(b, c, Zb(d)) : a.attachEvent && a.attachEvent("on" + b, c)
          },
          ac = function(a, b, c, d) {
               a.removeEventListener ? a.removeEventListener(b, c, Zb(d)) : a.detachEvent && a.detachEvent("on" + b, c)
          };
     var bc = function(a, b, c) {
          c = void 0 === c ? {} : c;
          this.error = a;
          this.context = b.context;
          this.line = b.line || -1;
          this.msg = b.message || "";
          this.file = b.file || "";
          this.id = b.id || "jserror";
          this.meta = c
     };
     var cc = function(a) {
               try {
                    return !!a && null != a.location.href && Na(a, "foo")
               } catch (b) {
                    return !1
               }
          },
          dc = function(a, b) {
               if (a)
                    for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b.call(void 0, a[c], c, a)
          };
     var ec = /^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/,
          fc = function(a, b) {
               this.za = a;
               this.Aa = b
          },
          gc = function(a, b) {
               this.url = a;
               this.ra = !!b;
               this.depth = w(void 0) ? void 0 : null
          };
     var hc = function(a, b) {
          var c = !1,
               d = !1;
          d = void 0 === d ? !1 : d;
          c = void 0 === c ? !1 : c;
          a.google_image_requests || (a.google_image_requests = []);
          var e = a.document.createElement("img");
          if (c) {
               var f = function() {
                    c && Da(a.google_image_requests, e);
                    ac(e, "load", f);
                    ac(e, "error", f)
               };
               $b(e, "load", f);
               $b(e, "error", f)
          }
          d && (e.referrerPolicy = "no-referrer");
          e.src = b;
          a.google_image_requests.push(e)
     };
     var ic = function() {
               this.sa = 4E3;
               this.W = "&";
               this.Da = ",$";
               this.da = "trn";
               this.Sa = null;
               this.pa = !1;
               this.P = {};
               this.Na = 0;
               this.J = []
          },
          jc = function(a, b) {
               var c = {};
               c[a] = b;
               return [c]
          },
          lc = function(a, b, c, d, e) {
               var f = [];
               dc(a, function(a, h) {
                    (a = kc(a, b, c, d, e)) && f.push(h + "=" + a)
               });
               return f.join(b)
          },
          kc = function(a, b, c, d, e) {
               if (null == a) return "";
               b = b || "&";
               c = c || ",$";
               "string" == typeof c && (c = c.split(""));
               if (a instanceof Array) {
                    if (d = d || 0, d < c.length) {
                         for (var f = [], g = 0; g < a.length; g++) f.push(kc(a[g], b, c, d + 1, e));
                         return f.join(c[d])
                    }
               } else if ("object" ==
                    typeof a) return e = e || 0, 2 > e ? encodeURIComponent(lc(a, b, c, d, e + 1)) : "...";
               return encodeURIComponent(String(a))
          },
          T = function(a, b, c, d) {
               a.J.push(b);
               a.P[b] = jc(c, d)
          },
          nc = function(a, b, c, d) {
               b = b + "//" + c + d;
               var e = mc(a) - d.length;
               if (0 > e) return "";
               a.J.sort(function(a, b) {
                    return a - b
               });
               d = null;
               c = "";
               for (var f = 0; f < a.J.length; f++)
                    for (var g = a.J[f], h = a.P[g], k = 0; k < h.length; k++) {
                         if (!e) {
                              d = null == d ? g : d;
                              break
                         }
                         var n = lc(h[k], a.W, a.Da);
                         if (n) {
                              n = c + n;
                              if (e >= n.length) {
                                   e -= n.length;
                                   b += n;
                                   c = a.W;
                                   break
                              } else a.pa && (c = e, n[c - 1] == a.W && --c, b += n.substr(0,
                                   c), c = a.W, e = 0);
                              d = null == d ? g : d
                         }
                    }
               f = "";
               a.da && null != d && (f = c + a.da + "=" + (a.Sa || d));
               return b + f + ""
          },
          mc = function(a) {
               if (!a.da) return a.sa;
               var b = 1,
                    c;
               for (c in a.P) b = c.length > b ? c.length : b;
               return a.sa - a.da.length - b - a.W.length - 1
          };
     var oc = function(a, b, c, d, e) {
          if ((d ? a.Ra : Math.random()) < (e || a.Fa)) try {
               if (c instanceof ic) var f = c;
               else f = new ic, dc(c, function(a, b) {
                    var c = f,
                         d = c.Na++;
                    a = jc(b, a);
                    c.J.push(d);
                    c.P[d] = a
               });
               var g = nc(f, a.Pa, a.l, a.j + b + "&");
               g && hc(u, g)
          } catch (h) {}
     };
     var pc = null;
     var qc = function() {
               var a = u.performance;
               return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : va()
          },
          rc = function() {
               var a = void 0 === a ? u : a;
               return (a = a.performance) && a.now ? a.now() : null
          };
     var sc = function(a, b, c) {
          this.label = a;
          this.type = b;
          this.value = c;
          this.duration = 0;
          this.uniqueId = this.label + "_" + this.type + "_" + Math.random();
          this.slotId = void 0
     };
     var U = u.performance,
          tc = !!(U && U.mark && U.measure && U.clearMarks),
          uc = db(function() {
               var a;
               if (a = tc) {
                    var b;
                    if (null === pc) {
                         pc = "";
                         try {
                              a = "";
                              try {
                                   a = u.top.location.hash
                              } catch (c) {
                                   a = u.location.hash
                              }
                              a && (pc = (b = a.match(/\bdeid=([\d,]+)/)) ? b[1] : "")
                         } catch (c) {}
                    }
                    b = pc;
                    a = !!b.indexOf && 0 <= b.indexOf("1337")
               }
               return a
          }),
          wc = function() {
               var a = vc;
               this.T = [];
               this.Ja = a || u;
               var b = null;
               a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.T = a.google_js_reporting_queue, b = a.google_measure_js_timing);
               this.L = uc() || (null != b ? b :
                    1 > Math.random())
          };
     wc.prototype.disable = function() {
          this.L = !1;
          this.T != this.Ja.google_js_reporting_queue && (uc() && za(this.T, xc), this.T.length = 0)
     };
     var xc = function(a) {
          a && U && uc() && (U.clearMarks("goog_" + a.uniqueId + "_start"), U.clearMarks("goog_" + a.uniqueId + "_end"))
     };
     wc.prototype.start = function(a, b) {
          if (!this.L) return null;
          var c = rc() || qc();
          a = new sc(a, b, c);
          b = "goog_" + a.uniqueId + "_start";
          U && uc() && U.mark(b);
          return a
     };
     wc.prototype.end = function(a) {
          if (this.L && w(a.value)) {
               var b = rc() || qc();
               a.duration = b - a.value;
               b = "goog_" + a.uniqueId + "_end";
               U && uc() && U.mark(b);
               this.L && this.T.push(a)
          }
     };
     var Ac = function() {
               var a = yc;
               this.va = zc;
               this.Ha = "jserror";
               this.ya = !0;
               this.oa = null;
               this.Ga = this.ta;
               this.ca = void 0 === a ? null : a;
               this.Ba = !1
          },
          Cc = function(a, b) {
               try {
                    if (a.ca && a.ca.L) {
                         var c = a.ca.start((374).toString(), 3);
                         var d = b();
                         a.ca.end(c)
                    } else d = b()
               } catch (f) {
                    b = a.ya;
                    try {
                         xc(c);
                         var e = Bc(f);
                         b = a.Ga.call(a, 374, e, void 0, void 0)
                    } catch (g) {
                         a.ta(217, g)
                    }
                    if (!b) throw f;
               }
               return d
          },
          Ec = function(a) {
               var b = Dc;
               return function(c) {
                    for (var d = [], e = 0; e < arguments.length; ++e) d[e - 0] = arguments[e];
                    return Cc(b, function() {
                         return a.apply(void 0,
                              d)
                    })
               }
          };
     Ac.prototype.ta = function(a, b, c, d, e) {
          e = e || this.Ha;
          try {
               var f = new ic;
               f.pa = !0;
               T(f, 1, "context", a);
               b.error && b.meta && b.id || (b = Bc(b));
               b.msg && T(f, 2, "msg", b.msg.substring(0, 512));
               b.file && T(f, 3, "file", b.file);
               0 < b.line && T(f, 4, "line", b.line);
               var g = b.meta || {};
               if (this.oa) try {
                    this.oa(g)
               } catch (ya) {}
               if (d) try {
                    d(g)
               } catch (ya) {}
               b = [g];
               f.J.push(5);
               f.P[5] = b;
               d = u;
               b = [];
               g = null;
               do {
                    var h = d;
                    if (cc(h)) {
                         var k = h.location.href;
                         g = h.document && h.document.referrer || null
                    } else k = g, g = null;
                    b.push(new gc(k || ""));
                    try {
                         d = h.parent
                    } catch (ya) {
                         d = null
                    }
               } while (d &&
                    h != d);
               k = 0;
               for (var n = b.length - 1; k <= n; ++k) b[k].depth = n - k;
               h = u;
               if (h.location && h.location.ancestorOrigins && h.location.ancestorOrigins.length == b.length - 1)
                    for (n = 1; n < b.length; ++n) {
                         var y = b[n];
                         y.url || (y.url = h.location.ancestorOrigins[n - 1] || "", y.ra = !0)
                    }
               var t = new gc(u.location.href, !1);
               h = null;
               var ab = b.length - 1;
               for (y = ab; 0 <= y; --y) {
                    var B = b[y];
                    !h && ec.test(B.url) && (h = B);
                    if (B.url && !B.ra) {
                         t = B;
                         break
                    }
               }
               B = null;
               var sd = b.length && b[ab].url;
               0 != t.depth && sd && (B = b[ab]);
               var fa = new fc(t, B);
               fa.Aa && T(f, 6, "top", fa.Aa.url || "");
               T(f,
                    7, "url", fa.za.url || "");
               oc(this.va, e, f, this.Ba, c)
          } catch (ya) {
               try {
                    oc(this.va, e, {
                         context: "ecmserr",
                         rctx: a,
                         msg: Fc(ya),
                         url: fa && fa.za.url
                    }, this.Ba, c)
               } catch (Rd) {}
          }
          return this.ya
     };
     var Bc = function(a) {
               return new Gc(Fc(a), a.fileName, a.lineNumber)
          },
          Fc = function(a) {
               var b = a.toString();
               a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
               a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
               if (a.stack) {
                    a = a.stack;
                    var c = b;
                    try {
                         -1 == a.indexOf(c) && (a = c + "\n" + a);
                         for (var d; a != d;) d = a, a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1");
                         b = a.replace(/\n */g, "\n")
                    } catch (e) {
                         b = c
                    }
               }
               return b
          },
          Gc = function(a, b, c) {
               bc.call(this, Error(a), {
                    message: a,
                    file: void 0 === b ? "" : b,
                    line: void 0 === c ? -1 : c
               })
          };
     na(Gc, bc);

     function Hc(a) {
          return Q(Q(Q(new N("//pagead2.googlesyndication.com/pagead/gen_204"), "id", "sodar"), "v", 30), "t", a)
     }
     var V = function(a, b, c, d) {
               var e = Hc(1);
               Q(e, "e", a);
               c && Q(e, "li", c);
               d && Q(e, "cv", d);
               b && Q(e, "bgai", b);
               hc(window, e.toString())
          },
          Ic = function(a, b, c, d, e) {
               c = void 0 === c ? null : c;
               d = void 0 === d ? null : d;
               e = void 0 === e ? null : e;
               "0.01" < Math.random() || (a = Q(Q(Q(Q(Q(new N("//pagead2.googlesyndication.com/pagead/gen_204"), "id", "sodarir"), "v", 30), "d", a ? 1 : 0), "s", b ? 1 : 0), "f", "0.01"), d && Q(a, "li", d), e && Q(a, "cv", e), c && Q(a, "bgai", c), hc(window, a.toString()))
          },
          Lc = function() {
               void 0 === Jc && (Jc = Kc())
          },
          Jc, Mc = function() {
               new Lc;
               return Jc || null
          },
          Kc = function() {
               var a = window.GoogleTyFxhY;
               if (!a) return V(13), null;
               if (0 == a.length) return V(1), null;
               a = a.shift();
               return (a._scs_ || a._cv_) && a._bgu_ && a._bgp_ ? a : (V(2), null)
          },
          Oc = function(a, b) {
               return function() {
                    try {
                         return a.apply(this, arguments)
                    } catch (f) {
                         if (!(1 <= Nc.count)) {
                              var c = f,
                                   d = Hc(3),
                                   e = Mc()._scs_;
                              e && Q(d, "bgai", e);
                              Q(d, "c", b);
                              Q(d, "ex", Fc(c));
                              c = d.toString();
                              2E3 < c.length ? V(11, e) : hc(window, c);
                              Nc.count += 1
                         }
                    }
               }
          },
          Nc = {
               count: 0
          },
          Pc = function(a, b) {
               b = Oc(b, "i:lh");
               $b(a, "load", b, {
                    capture: void 0
               });
               return b
          },
          Qc = function(a,
               b) {
               var c = b;
               var d = Pc(a, function() {
                    if (c) {
                         var b = c;
                         c = null;
                         ac(a, "load", d, {
                              capture: void 0
                         });
                         return b.apply(this, arguments)
                    }
               })
          },
          Rc = function() {
               return Ca(function(a) {
                    return "DIV" == a.tagName && 0 == a.id.lastIndexOf("DfaVisibilityIdentifier_", 0)
               })
          };

     function Sc(a) {
          switch (a) {
               case void 0:
                    return 0;
               case !0:
                    return 1;
               case !1:
                    return 2;
               default:
                    return -1
          }
     };
     var Tc = function(a) {
          return !E("Safari") || (E("Chrome") || E("CriOS")) && !E("Edge") || E("Coast") || E("Opera") || E("Edge") || E("Silk") || E("Android") ? !0 : (a = (a = bb(a)) && (a ? a.parentWindow || a.defaultView : window), !!(a && a.location && a.location.ancestorOrigins && 0 < a.location.ancestorOrigins.length && a.location.origin == a.location.ancestorOrigins[0]))
     };
     var Uc = function(a, b) {
          this.La = b;
          this.xa = null == a;
          this.ua = a
     };
     na(Uc, K);
     Uc.prototype.next = function() {
          if (this.xa) throw J;
          var a = this.ua || null;
          this.xa = null == a;
          var b;
          if (b = a) {
               b = this.La;
               if (Na(a, "parentElement") && null != a.parentElement && a != a.parentElement) var c = a.parentElement;
               else if (b) {
                    var d = void 0 === d ? Tc : d;
                    if (d(a)) try {
                         var e = bb(a),
                              f = e && (e ? e.parentWindow || e.defaultView : window),
                              g = f && f.frameElement;
                         c = null == g ? null : g
                    } catch (h) {
                         c = null
                    } else c = null
               } else c = null;
               b = c
          }
          this.ua = b;
          return a
     };
     var Vc = {};
     var Wc = function(a) {
          var b = 1;
          a = Hb(new Uc(a, !0), function() {
               return 0 < b
          });
          return Gb(a, function(a, d) {
               var c = 1;
               if (Na(d, "style") && d.style) {
                    var f = parseFloat;
                    a: {
                         var g = bb(d);
                         if (g.defaultView && g.defaultView.getComputedStyle && (g = g.defaultView.getComputedStyle(d, null))) {
                              g = g.opacity || g.getPropertyValue("opacity") || "";
                              break a
                         }
                         g = ""
                    }
                    if (!g) {
                         g = d.style[Ha()];
                         if ("undefined" !== typeof g) d = g;
                         else {
                              g = d.style;
                              var h = Vc.opacity;
                              if (!h) {
                                   var k = Ha();
                                   h = k;
                                   void 0 === d.style[k] && (k = (Ra ? "Webkit" : Qa ? "Moz" : F ? "ms" : Oa ? "O" : null) + Ia(k), void 0 !==
                                        d.style[k] && (h = k));
                                   Vc.opacity = h
                              }
                              d = g[h] || ""
                         }
                         g = d
                    }
                    f = f(g);
                    w(f) && !isNaN(f) && (c = f)
               }
               return b = a * c
          })
     };
     var Xc = !F || 9 <= Number(Za),
          Yc = !F || 9 <= Number(Za),
          Zc;
     if (Zc = F) {
          var $c;
          if (Object.prototype.hasOwnProperty.call(Ya, "9")) $c = Ya["9"];
          else {
               for (var ad = 0, bd = Fa(String(Xa)).split("."), cd = Fa("9").split("."), dd = Math.max(bd.length, cd.length), ed = 0; 0 == ad && ed < dd; ed++) {
                    var fd = bd[ed] || "",
                         gd = cd[ed] || "";
                    do {
                         var W = /(\d*)(\D*)(.*)/.exec(fd) || ["", "", "", ""],
                              X = /(\d*)(\D*)(.*)/.exec(gd) || ["", "", "", ""];
                         if (0 == W[0].length && 0 == X[0].length) break;
                         ad = Ga(0 == W[1].length ? 0 : parseInt(W[1], 10), 0 == X[1].length ? 0 : parseInt(X[1], 10)) || Ga(0 == W[2].length, 0 == X[2].length) || Ga(W[2], X[2]);
                         fd = W[3];
                         gd = X[3]
                    } while (0 == ad)
               }
               $c = Ya["9"] = 0 <= ad
          }
          Zc = !$c
     }
     var hd = Zc,
          id = function() {
               if (!u.addEventListener || !Object.defineProperty) return !1;
               var a = !1,
                    b = Object.defineProperty({}, "passive", {
                         get: function() {
                              a = !0
                         }
                    });
               u.addEventListener("test", x, b);
               u.removeEventListener("test", x, b);
               return a
          }();
     var jd = function(a, b) {
          this.type = a;
          this.currentTarget = this.target = b;
          this.defaultPrevented = this.la = !1
     };
     jd.prototype.stopPropagation = function() {
          this.la = !0
     };
     jd.prototype.preventDefault = function() {
          this.defaultPrevented = !0
     };
     var Y = function(a, b) {
          jd.call(this, a ? a.type : "");
          this.relatedTarget = this.currentTarget = this.target = null;
          this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
          this.key = "";
          this.charCode = this.keyCode = 0;
          this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
          this.state = null;
          this.pointerId = 0;
          this.pointerType = "";
          this.F = null;
          if (a) {
               var c = this.type = a.type,
                    d = a.changedTouches ? a.changedTouches[0] : null;
               this.target = a.target || a.srcElement;
               this.currentTarget = b;
               (b = a.relatedTarget) ?
               Qa && (Na(b, "nodeName") || (b = null)): "mouseover" == c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);
               this.relatedTarget = b;
               null === d ? (this.offsetX = Ra || void 0 !== a.offsetX ? a.offsetX : a.layerX, this.offsetY = Ra || void 0 !== a.offsetY ? a.offsetY : a.layerY, this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0) : (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX =
                    d.screenX || 0, this.screenY = d.screenY || 0);
               this.button = a.button;
               this.keyCode = a.keyCode || 0;
               this.key = a.key || "";
               this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
               this.ctrlKey = a.ctrlKey;
               this.altKey = a.altKey;
               this.shiftKey = a.shiftKey;
               this.metaKey = a.metaKey;
               this.pointerId = a.pointerId || 0;
               this.pointerType = v(a.pointerType) ? a.pointerType : kd[a.pointerType] || "";
               this.state = a.state;
               this.F = a;
               a.defaultPrevented && this.preventDefault()
          }
     };
     wa(Y, jd);
     var ld = [1, 4, 2],
          kd = {
               2: "touch",
               3: "pen",
               4: "mouse"
          },
          md = function(a, b) {
               return Xc ? a.F.button == b : "click" == a.type ? 0 == b : !!(a.F.button & ld[b])
          };
     Y.prototype.stopPropagation = function() {
          Y.na.stopPropagation.call(this);
          this.F.stopPropagation ? this.F.stopPropagation() : this.F.cancelBubble = !0
     };
     Y.prototype.preventDefault = function() {
          Y.na.preventDefault.call(this);
          var a = this.F;
          if (a.preventDefault) a.preventDefault();
          else if (a.returnValue = !1, hd) try {
               if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
          } catch (b) {}
     };
     var nd = "closure_listenable_" + (1E6 * Math.random() | 0),
          od = 0;
     var pd = function(a, b, c, d, e) {
               this.listener = a;
               this.ba = null;
               this.src = b;
               this.type = c;
               this.capture = !!d;
               this.ka = e;
               this.key = ++od;
               this.X = this.ha = !1
          },
          qd = function(a) {
               a.X = !0;
               a.listener = null;
               a.ba = null;
               a.src = null;
               a.ka = null
          };
     var rd = function(a) {
          this.src = a;
          this.m = {};
          this.ea = 0
     };
     rd.prototype.add = function(a, b, c, d, e) {
          var f = a.toString();
          a = this.m[f];
          a || (a = this.m[f] = [], this.ea++);
          var g = td(a, b, d, e); - 1 < g ? (b = a[g], c || (b.ha = !1)) : (b = new pd(b, this.src, f, !!d, e), b.ha = c, a.push(b));
          return b
     };
     rd.prototype.remove = function(a, b, c, d) {
          a = a.toString();
          if (!(a in this.m)) return !1;
          var e = this.m[a];
          b = td(e, b, c, d);
          return -1 < b ? (qd(e[b]), Array.prototype.splice.call(e, b, 1), 0 == e.length && (delete this.m[a], this.ea--), !0) : !1
     };
     rd.prototype.hasListener = function(a, b) {
          var c = void 0 !== a,
               d = c ? a.toString() : "",
               e = void 0 !== b;
          return La(this.m, function(a) {
               for (var f = 0; f < a.length; ++f)
                    if (!(c && a[f].type != d || e && a[f].capture != b)) return !0;
               return !1
          })
     };
     var td = function(a, b, c, d) {
          for (var e = 0; e < a.length; ++e) {
               var f = a[e];
               if (!f.X && f.listener == b && f.capture == !!c && f.ka == d) return e
          }
          return -1
     };
     var ud = "closure_lm_" + (1E6 * Math.random() | 0),
          vd = {},
          wd = 0,
          yd = function(a, b, c, d, e) {
               if (d && d.once) xd(a, b, c, d, e);
               else if ("array" == qa(b))
                    for (var f = 0; f < b.length; f++) yd(a, b[f], c, d, e);
               else c = zd(c), a && a[nd] ? a.Wa(b, c, ra(d) ? !!d.capture : !!d, e) : Ad(a, b, c, !1, d, e)
          },
          Ad = function(a, b, c, d, e, f) {
               if (!b) throw Error("Invalid event type");
               var g = ra(e) ? !!e.capture : !!e,
                    h = Bd(a);
               h || (a[ud] = h = new rd(a));
               c = h.add(b, c, d, g, f);
               if (!c.ba) {
                    d = Cd();
                    c.ba = d;
                    d.src = a;
                    d.listener = c;
                    if (a.addEventListener) id || (e = g), void 0 === e && (e = !1), a.addEventListener(b.toString(),
                         d, e);
                    else if (a.attachEvent) a.attachEvent(Dd(b.toString()), d);
                    else if (a.addListener && a.removeListener) a.addListener(d);
                    else throw Error("addEventListener and attachEvent are unavailable.");
                    wd++
               }
          },
          Cd = function() {
               var a = Ed,
                    b = Yc ? function(c) {
                         return a.call(b.src, b.listener, c)
                    } : function(c) {
                         c = a.call(b.src, b.listener, c);
                         if (!c) return c
                    };
               return b
          },
          xd = function(a, b, c, d, e) {
               if ("array" == qa(b))
                    for (var f = 0; f < b.length; f++) xd(a, b[f], c, d, e);
               else c = zd(c), a && a[nd] ? a.Xa(b, c, ra(d) ? !!d.capture : !!d, e) : Ad(a, b, c, !0, d, e)
          },
          Dd = function(a) {
               return a in
                    vd ? vd[a] : vd[a] = "on" + a
          },
          Gd = function(a, b, c, d) {
               var e = !0;
               if (a = Bd(a))
                    if (b = a.m[b.toString()])
                         for (b = b.concat(), a = 0; a < b.length; a++) {
                              var f = b[a];
                              f && f.capture == c && !f.X && (f = Fd(f, d), e = e && !1 !== f)
                         }
               return e
          },
          Fd = function(a, b) {
               var c = a.listener,
                    d = a.ka || a.src;
               if (a.ha && !w(a) && a && !a.X) {
                    var e = a.src;
                    if (e && e[nd]) e.Ya(a);
                    else {
                         var f = a.type,
                              g = a.ba;
                         e.removeEventListener ? e.removeEventListener(f, g, a.capture) : e.detachEvent ? e.detachEvent(Dd(f), g) : e.addListener && e.removeListener && e.removeListener(g);
                         wd--;
                         (f = Bd(e)) ? (g = a.type, g in f.m &&
                              Da(f.m[g], a) && (qd(a), 0 == f.m[g].length && (delete f.m[g], f.ea--)), 0 == f.ea && (f.src = null, e[ud] = null)) : qd(a)
                    }
               }
               return c.call(d, b)
          },
          Ed = function(a, b) {
               if (a.X) return !0;
               if (!Yc) {
                    if (!b) a: {
                         b = ["window", "event"];
                         for (var c = u, d = 0; d < b.length; d++)
                              if (c = c[b[d]], null == c) {
                                   b = null;
                                   break a
                              } b = c
                    }
                    d = b;
                    b = new Y(d, this);
                    c = !0;
                    if (!(0 > d.keyCode || void 0 != d.returnValue)) {
                         a: {
                              var e = !1;
                              if (0 == d.keyCode) try {
                                   d.keyCode = -1;
                                   break a
                              } catch (g) {
                                   e = !0
                              }
                              if (e || void 0 == d.returnValue) d.returnValue = !0
                         }
                         d = [];
                         for (e = b.currentTarget; e; e = e.parentNode) d.push(e);a =
                         a.type;
                         for (e = d.length - 1; !b.la && 0 <= e; e--) {
                              b.currentTarget = d[e];
                              var f = Gd(d[e], a, !0, b);
                              c = c && f
                         }
                         for (e = 0; !b.la && e < d.length; e++) b.currentTarget = d[e],
                         f = Gd(d[e], a, !1, b),
                         c = c && f
                    }
                    return c
               }
               return Fd(a, new Y(b, this))
          },
          Bd = function(a) {
               a = a[ud];
               return a instanceof rd ? a : null
          },
          Hd = "__closure_events_fn_" + (1E9 * Math.random() >>> 0),
          zd = function(a) {
               if (A(a)) return a;
               a[Hd] || (a[Hd] = function(b) {
                    return a.handleEvent(b)
               });
               return a[Hd]
          };
     var Id = function(a) {
          var b = a._scs_,
               c = a._li_,
               d = Rc();
          if (d && d.getBoundingClientRect) {
               var e = 0;
               yd(d, "mouseover", function() {
                    ++e
               });
               yd(d, "mousedown", function(a) {
                    var f = d.getBoundingClientRect(),
                         h = 0;
                    md(a, 0) ? h = 1 : md(a, 2) ? h = 4 : md(a, 1) && (h = 2);
                    h && a.shiftKey && (h |= 8);
                    h && a.altKey && (h |= 16);
                    h && a.ctrlKey && (h |= 32);
                    var k = Math.floor(100 * Wc(d)),
                         n = Math.floor(a.clientX - f.left);
                    f = Math.floor(a.clientY - f.top);
                    var y = e;
                    a = a.isTrusted;
                    var t = document.defaultView && document.defaultView.mozPaintCount;
                    t = void 0 === t ? -1 : w(t) && Number.isInteger(t) ?
                         0 > t ? -3 : t : -2;
                    k = Q(Q(Q(Q(Q(Q(Q(Q(Q(Q(new N("//pagead2.googlesyndication.com/pagead/gen_204"), "id", "sodarde"), "v", 30), "nx", n), "ny", f), "bgai", b), "mb", h), "ox", k), "nm", y), "tr", Sc(a)), "mz", t);
                    c && Q(k, "li", c);
                    hc(window, k.toString())
               })
          }
     };
     var Jd = document,
          Kd = window;
     var Ld = !!window.google_async_iframe_id,
          Z = Ld && window.parent || window;
     var zc, Dc;
     if (Ld && !cc(Z)) {
          var Md = "." + Jd.domain;
          try {
               for (; 2 < Md.split(".").length && !cc(Z);) Jd.domain = Md = Md.substr(Md.indexOf(".") + 1), Z = window.parent
          } catch (a) {}
          cc(Z) || (Z = window)
     }
     var vc = Z,
          yc = new wc;
     zc = new function() {
          var a = void 0 === a ? Kd : a;
          this.Pa = "http:" === a.location.protocol ? "http:" : "https:";
          this.l = "pagead2.googlesyndication.com";
          this.j = "/pagead/gen_204?id=";
          this.Fa = .01;
          this.Ra = Math.random()
     };
     Dc = new Ac;
     "complete" == vc.document.readyState ? vc.google_measure_js_timing || yc.disable() : yc.L && $b(vc, "load", function() {
          vc.google_measure_js_timing || yc.disable()
     });
     var Nd = function() {
          var a, b, c = new H(function(c, e) {
               a = c;
               b = e
          });
          return new Db(c, a, b)
     }();

     function Od(a) {
          a: {
               try {
                    var b;
                    if (!(b = a.contentWindow)) {
                         if (a.contentDocument) {
                              var c = a.contentDocument;
                              var d = c ? c.parentWindow || c.defaultView : window
                         } else d = null;
                         b = d
                    }
                    var e = b;
                    break a
               } catch (f) {}
               e = null
          }
          Nd.resolve([(0 == a.src.indexOf("https:") ? "https" : "http") + "://tpc.googlesyndication.com", e])
     }

     function Pd() {
          var a = document.createElement("IFRAME".toString());
          Qc(a, ua(Od, null, a));
          a.src = "//tpc.googlesyndication.com/sodar/Enqz_20U.html";
          a.width = "0";
          a.height = "0";
          a.style.display = "none";
          document.body.appendChild(a)
     }

     function Qd() {
          Nd.Oa.then(function(a) {
               var b = q(a);
               a = b.next().value;
               b = b.next().value;
               var c = Mc();
               var d = c._scs_;
               var e = c._bgu_,
                    f = c._bgp_,
                    g = c._li_;
               c = c._cv_;
               var h = document.location.origin,
                    k = {};
               d = (k["0"] = "0", k["1"] = d || "", k["2"] = e.split("/").pop().replace(/\.js/g, ""), k["3"] = f, k["4"] = g || "", k["5"] = c || "", k["8"] = h && "null" != h ? h : "*", k);
               b ? b.postMessage(d, a) : V(3)
          })
     };
     (function(a, b, c) {
          for (var d = [], e = 2; e < arguments.length; ++e) d[e - 2] = arguments[e];
          Oc(a, b).apply(null, d instanceof Array ? d : oa(q(d)))
     })(function() {
          var a = !!window.postMessage,
               b = !1,
               c = null,
               d = null,
               e = null,
               f = Mc();
          f && (b = !0, c = f._scs_, d = f._li_, e = f._cv_, a ? (Pd(), Qd()) : V(8, c, d, e), setTimeout(Ec(function() {
               return Id(f)
          }), 0));
          Ic(b, a, c, d, e)
     }, "i:i");
}).call(this);
