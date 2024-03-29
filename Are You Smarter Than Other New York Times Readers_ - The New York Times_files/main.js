/*!
 * jQuery JavaScript Library v2.1.4
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2015-04-28T16:01Z
 */

/*!
 * Sizzle CSS Selector Engine v2.2.0-pre
 * http://sizzlejs.com/
 *
 * Copyright 2008, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-12-16
 */

//     Underscore.js 1.8.3
//     http://underscorejs.org
//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.

//     (c) 2010-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Backbone may be freely distributed under the MIT license.
//     For all details and documentation:
//     http://backbonejs.org

/*! Hammer.JS - v1.0.6 - 2014-01-02
 * http://eightmedia.github.com/hammer.js
 *
 * Copyright (c) 2014 Jorik Tangelder <j.tangelder@gmail.com>;
 * Licensed under the MIT license */

/* SockJS client, version 0.3.4.12.gb154, http://sockjs.org, MIT License

Copyright (c) 2011-2012 VMware, Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

/*
 * ***** BEGIN LICENSE BLOCK *****
 * Copyright (c) 2011-2012 VMware, Inc.
 *
 * For the license see COPYING.
 * ***** END LICENSE BLOCK *****
 */

// MIT license

! function(e, t) {
     "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
          if (!e.document) throw new Error("jQuery requires a window with a document");
          return t(e)
     } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
     function n(e) {
          var t = "length" in e && e.length,
               n = Q.type(e);
          return "function" !== n && !Q.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e))
     }

     function i(e, t, n) {
          if (Q.isFunction(t)) return Q.grep(e, function(e, i) {
               return !!t.call(e, i, e) !== n
          });
          if (t.nodeType) return Q.grep(e, function(e) {
               return e === t !== n
          });
          if ("string" == typeof t) {
               if (se.test(t)) return Q.filter(t, e, n);
               t = Q.filter(t, e)
          }
          return Q.grep(e, function(e) {
               return X.call(t, e) >= 0 !== n
          })
     }

     function r(e, t) {
          for (;
               (e = e[t]) && 1 !== e.nodeType;);
          return e
     }

     function o(e) {
          var t = he[e] = {};
          return Q.each(e.match(fe) || [], function(e, n) {
               t[n] = !0
          }), t
     }

     function s() {
          K.removeEventListener("DOMContentLoaded", s, !1), e.removeEventListener("load", s, !1), Q.ready()
     }

     function a() {
          Object.defineProperty(this.cache = {}, 0, {
               get: function() {
                    return {}
               }
          }), this.expando = Q.expando + a.uid++
     }

     function u(e, t, n) {
          var i;
          if (void 0 === n && 1 === e.nodeType)
               if (i = "data-" + t.replace(ye, "-$1").toLowerCase(), "string" == typeof(n = e.getAttribute(i))) {
                    try {
                         n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : ve.test(n) ? Q.parseJSON(n) : n)
                    } catch (e) {}
                    me.set(e, t, n)
               } else n = void 0;
          return n
     }

     function c() {
          return !0
     }

     function l() {
          return !1
     }

     function f() {
          try {
               return K.activeElement
          } catch (e) {}
     }

     function h(e, t) {
          return Q.nodeName(e, "table") && Q.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
     }

     function d(e) {
          return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
     }

     function p(e) {
          var t = Re.exec(e.type);
          return t ? e.type = t[1] : e.removeAttribute("type"), e
     }

     function g(e, t) {
          for (var n = 0, i = e.length; n < i; n++) ge.set(e[n], "globalEval", !t || ge.get(t[n], "globalEval"))
     }

     function m(e, t) {
          var n, i, r, o, s, a, u, c;
          if (1 === t.nodeType) {
               if (ge.hasData(e) && (o = ge.access(e), s = ge.set(t, o), c = o.events)) {
                    delete s.handle, s.events = {};
                    for (r in c)
                         for (n = 0, i = c[r].length; n < i; n++) Q.event.add(t, r, c[r][n])
               }
               me.hasData(e) && (a = me.access(e), u = Q.extend({}, a), me.set(t, u))
          }
     }

     function v(e, t) {
          var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
          return void 0 === t || t && Q.nodeName(e, t) ? Q.merge([e], n) : n
     }

     function y(e, t) {
          var n = t.nodeName.toLowerCase();
          "input" === n && _e.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
     }

     function b(t, n) {
          var i, r = Q(n.createElement(t)).appendTo(n.body),
               o = e.getDefaultComputedStyle && (i = e.getDefaultComputedStyle(r[0])) ? i.display : Q.css(r[0], "display");
          return r.detach(), o
     }

     function w(e) {
          var t = K,
               n = Ie[e];
          return n || (n = b(e, t), "none" !== n && n || (He = (He || Q("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = He[0].contentDocument, t.write(), t.close(), n = b(e, t), He.detach()), Ie[e] = n), n
     }

     function x(e, t, n) {
          var i, r, o, s, a = e.style;
          return n = n || Fe(e), n && (s = n.getPropertyValue(t) || n[t]), n && ("" !== s || Q.contains(e.ownerDocument, e) || (s = Q.style(e, t)), qe.test(s) && Le.test(t) && (i = a.width, r = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = r, a.maxWidth = o)), void 0 !== s ? s + "" : s
     }

     function _(e, t) {
          return {
               get: function() {
                    return e() ? void delete this.get : (this.get = t).apply(this, arguments)
               }
          }
     }

     function E(e, t) {
          if (t in e) return t;
          for (var n = t[0].toUpperCase() + t.slice(1), i = t, r = Xe.length; r--;)
               if ((t = Xe[r] + n) in e) return t;
          return i
     }

     function T(e, t, n) {
          var i = Ue.exec(t);
          return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
     }

     function S(e, t, n, i, r) {
          for (var o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; o < 4; o += 2) "margin" === n && (s += Q.css(e, n + we[o], !0, r)), i ? ("content" === n && (s -= Q.css(e, "padding" + we[o], !0, r)), "margin" !== n && (s -= Q.css(e, "border" + we[o] + "Width", !0, r))) : (s += Q.css(e, "padding" + we[o], !0, r), "padding" !== n && (s += Q.css(e, "border" + we[o] + "Width", !0, r)));
          return s
     }

     function k(e, t, n) {
          var i = !0,
               r = "width" === t ? e.offsetWidth : e.offsetHeight,
               o = Fe(e),
               s = "border-box" === Q.css(e, "boxSizing", !1, o);
          if (r <= 0 || null == r) {
               if (r = x(e, t, o), (r < 0 || null == r) && (r = e.style[t]), qe.test(r)) return r;
               i = s && (G.boxSizingReliable() || r === e.style[t]), r = parseFloat(r) || 0
          }
          return r + S(e, t, n || (s ? "border" : "content"), i, o) + "px"
     }

     function N(e, t) {
          for (var n, i, r, o = [], s = 0, a = e.length; s < a; s++) i = e[s], i.style && (o[s] = ge.get(i, "olddisplay"), n = i.style.display, t ? (o[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && xe(i) && (o[s] = ge.access(i, "olddisplay", w(i.nodeName)))) : (r = xe(i), "none" === n && r || ge.set(i, "olddisplay", r ? n : Q.css(i, "display"))));
          for (s = 0; s < a; s++) i = e[s], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? o[s] || "" : "none"));
          return e
     }

     function C(e, t, n, i, r) {
          return new C.prototype.init(e, t, n, i, r)
     }

     function O() {
          return setTimeout(function() {
               ze = void 0
          }), ze = Q.now()
     }

     function D(e, t) {
          var n, i = 0,
               r = {
                    height: e
               };
          for (t = t ? 1 : 0; i < 4; i += 2 - t) n = we[i], r["margin" + n] = r["padding" + n] = e;
          return t && (r.opacity = r.width = e), r
     }

     function j(e, t, n) {
          for (var i, r = (Ze[t] || []).concat(Ze["*"]), o = 0, s = r.length; o < s; o++)
               if (i = r[o].call(n, t, e)) return i
     }

     function A(e, t, n) {
          var i, r, o, s, a, u, c, l = this,
               f = {},
               h = e.style,
               d = e.nodeType && xe(e),
               p = ge.get(e, "fxshow");
          n.queue || (a = Q._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, u = a.empty.fire, a.empty.fire = function() {
               a.unqueued || u()
          }), a.unqueued++, l.always(function() {
               l.always(function() {
                    a.unqueued--, Q.queue(e, "fx").length || a.empty.fire()
               })
          })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [h.overflow, h.overflowX, h.overflowY], c = Q.css(e, "display"), "inline" === ("none" === c ? ge.get(e, "olddisplay") || w(e.nodeName) : c) && "none" === Q.css(e, "float") && (h.display = "inline-block")), n.overflow && (h.overflow = "hidden", l.always(function() {
               h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
          }));
          for (i in t)
               if (r = t[i], Ye.exec(r)) {
                    if (delete t[i], o = o || "toggle" === r, r === (d ? "hide" : "show")) {
                         if ("show" !== r || !p || void 0 === p[i]) continue;
                         d = !0
                    }
                    f[i] = p && p[i] || Q.style(e, i)
               } else c = void 0;
          if (Q.isEmptyObject(f)) "inline" === ("none" === c ? w(e.nodeName) : c) && (h.display = c);
          else {
               p ? "hidden" in p && (d = p.hidden) : p = ge.access(e, "fxshow", {}), o && (p.hidden = !d), d ? Q(e).show() : l.done(function() {
                    Q(e).hide()
               }), l.done(function() {
                    var t;
                    ge.remove(e, "fxshow");
                    for (t in f) Q.style(e, t, f[t])
               });
               for (i in f) s = j(d ? p[i] : 0, i, l), i in p || (p[i] = s.start, d && (s.end = s.start, s.start = "width" === i || "height" === i ? 1 : 0))
          }
     }

     function R(e, t) {
          var n, i, r, o, s;
          for (n in e)
               if (i = Q.camelCase(n), r = t[i], o = e[n], Q.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), (s = Q.cssHooks[i]) && "expand" in s) {
                    o = s.expand(o), delete e[i];
                    for (n in o) n in e || (e[n] = o[n], t[n] = r)
               } else t[i] = r
     }

     function M(e, t, n) {
          var i, r, o = 0,
               s = Qe.length,
               a = Q.Deferred().always(function() {
                    delete u.elem
               }),
               u = function() {
                    if (r) return !1;
                    for (var t = ze || O(), n = Math.max(0, c.startTime + c.duration - t), i = n / c.duration || 0, o = 1 - i, s = 0, u = c.tweens.length; s < u; s++) c.tweens[s].run(o);
                    return a.notifyWith(e, [c, o, n]), o < 1 && u ? n : (a.resolveWith(e, [c]), !1)
               },
               c = a.promise({
                    elem: e,
                    props: Q.extend({}, t),
                    opts: Q.extend(!0, {
                         specialEasing: {}
                    }, n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: ze || O(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(t, n) {
                         var i = Q.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                         return c.tweens.push(i), i
                    },
                    stop: function(t) {
                         var n = 0,
                              i = t ? c.tweens.length : 0;
                         if (r) return this;
                         for (r = !0; n < i; n++) c.tweens[n].run(1);
                         return t ? a.resolveWith(e, [c, t]) : a.rejectWith(e, [c, t]), this
                    }
               }),
               l = c.props;
          for (R(l, c.opts.specialEasing); o < s; o++)
               if (i = Qe[o].call(c, e, l, c.opts)) return i;
          return Q.map(l, j, c), Q.isFunction(c.opts.start) && c.opts.start.call(e, c), Q.fx.timer(Q.extend(u, {
               elem: e,
               anim: c,
               queue: c.opts.queue
          })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
     }

     function P(e) {
          return function(t, n) {
               "string" != typeof t && (n = t, t = "*");
               var i, r = 0,
                    o = t.toLowerCase().match(fe) || [];
               if (Q.isFunction(n))
                    for (; i = o[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
          }
     }

     function H(e, t, n, i) {
          function r(a) {
               var u;
               return o[a] = !0, Q.each(e[a] || [], function(e, a) {
                    var c = a(t, n, i);
                    return "string" != typeof c || s || o[c] ? s ? !(u = c) : void 0 : (t.dataTypes.unshift(c), r(c), !1)
               }), u
          }
          var o = {},
               s = e === gt;
          return r(t.dataTypes[0]) || !o["*"] && r("*")
     }

     function I(e, t) {
          var n, i, r = Q.ajaxSettings.flatOptions || {};
          for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
          return i && Q.extend(!0, e, i), e
     }

     function L(e, t, n) {
          for (var i, r, o, s, a = e.contents, u = e.dataTypes;
               "*" === u[0];) u.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
          if (i)
               for (r in a)
                    if (a[r] && a[r].test(i)) {
                         u.unshift(r);
                         break
                    } if (u[0] in n) o = u[0];
          else {
               for (r in n) {
                    if (!u[0] || e.converters[r + " " + u[0]]) {
                         o = r;
                         break
                    }
                    s || (s = r)
               }
               o = o || s
          }
          if (o) return o !== u[0] && u.unshift(o), n[o]
     }

     function q(e, t, n, i) {
          var r, o, s, a, u, c = {},
               l = e.dataTypes.slice();
          if (l[1])
               for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
          for (o = l.shift(); o;)
               if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = l.shift())
                    if ("*" === o) o = u;
                    else if ("*" !== u && u !== o) {
               if (!(s = c[u + " " + o] || c["* " + o]))
                    for (r in c)
                         if (a = r.split(" "), a[1] === o && (s = c[u + " " + a[0]] || c["* " + a[0]])) {
                              !0 === s ? s = c[r] : !0 !== c[r] && (o = a[0], l.unshift(a[1]));
                              break
                         } if (!0 !== s)
                    if (s && e.throws) t = s(t);
                    else try {
                         t = s(t)
                    } catch (e) {
                         return {
                              state: "parsererror",
                              error: s ? e : "No conversion from " + u + " to " + o
                         }
                    }
          }
          return {
               state: "success",
               data: t
          }
     }

     function F(e, t, n, i) {
          var r;
          if (Q.isArray(t)) Q.each(t, function(t, r) {
               n || wt.test(e) ? i(e, r) : F(e + "[" + ("object" == typeof r ? t : "") + "]", r, n, i)
          });
          else if (n || "object" !== Q.type(t)) i(e, t);
          else
               for (r in t) F(e + "[" + r + "]", t[r], n, i)
     }

     function $(e) {
          return Q.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
     }
     var U = [],
          B = U.slice,
          V = U.concat,
          W = U.push,
          X = U.indexOf,
          z = {},
          J = z.toString,
          Y = z.hasOwnProperty,
          G = {},
          K = e.document,
          Q = function(e, t) {
               return new Q.fn.init(e, t)
          },
          Z = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
          ee = /^-ms-/,
          te = /-([\da-z])/gi,
          ne = function(e, t) {
               return t.toUpperCase()
          };
     Q.fn = Q.prototype = {
          jquery: "2.1.4",
          constructor: Q,
          selector: "",
          length: 0,
          toArray: function() {
               return B.call(this)
          },
          get: function(e) {
               return null != e ? e < 0 ? this[e + this.length] : this[e] : B.call(this)
          },
          pushStack: function(e) {
               var t = Q.merge(this.constructor(), e);
               return t.prevObject = this, t.context = this.context, t
          },
          each: function(e, t) {
               return Q.each(this, e, t)
          },
          map: function(e) {
               return this.pushStack(Q.map(this, function(t, n) {
                    return e.call(t, n, t)
               }))
          },
          slice: function() {
               return this.pushStack(B.apply(this, arguments))
          },
          first: function() {
               return this.eq(0)
          },
          last: function() {
               return this.eq(-1)
          },
          eq: function(e) {
               var t = this.length,
                    n = +e + (e < 0 ? t : 0);
               return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
          },
          end: function() {
               return this.prevObject || this.constructor(null)
          },
          push: W,
          sort: U.sort,
          splice: U.splice
     }, Q.extend = Q.fn.extend = function() {
          var e, t, n, i, r, o, s = arguments[0] || {},
               a = 1,
               u = arguments.length,
               c = !1;
          for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || Q.isFunction(s) || (s = {}), a === u && (s = this, a--); a < u; a++)
               if (null != (e = arguments[a]))
                    for (t in e) n = s[t], i = e[t], s !== i && (c && i && (Q.isPlainObject(i) || (r = Q.isArray(i))) ? (r ? (r = !1, o = n && Q.isArray(n) ? n : []) : o = n && Q.isPlainObject(n) ? n : {}, s[t] = Q.extend(c, o, i)) : void 0 !== i && (s[t] = i));
          return s
     }, Q.extend({
          expando: "jQuery" + ("2.1.4" + Math.random()).replace(/\D/g, ""),
          isReady: !0,
          error: function(e) {
               throw new Error(e)
          },
          noop: function() {},
          isFunction: function(e) {
               return "function" === Q.type(e)
          },
          isArray: Array.isArray,
          isWindow: function(e) {
               return null != e && e === e.window
          },
          isNumeric: function(e) {
               return !Q.isArray(e) && e - parseFloat(e) + 1 >= 0
          },
          isPlainObject: function(e) {
               return "object" === Q.type(e) && !e.nodeType && !Q.isWindow(e) && !(e.constructor && !Y.call(e.constructor.prototype, "isPrototypeOf"))
          },
          isEmptyObject: function(e) {
               var t;
               for (t in e) return !1;
               return !0
          },
          type: function(e) {
               return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? z[J.call(e)] || "object" : typeof e
          },
          globalEval: function(e) {
               var t, n = eval;
               (e = Q.trim(e)) && (1 === e.indexOf("use strict") ? (t = K.createElement("script"), t.text = e, K.head.appendChild(t).parentNode.removeChild(t)) : n(e))
          },
          camelCase: function(e) {
               return e.replace(ee, "ms-").replace(te, ne)
          },
          nodeName: function(e, t) {
               return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
          },
          each: function(e, t, i) {
               var r = 0,
                    o = e.length,
                    s = n(e);
               if (i) {
                    if (s)
                         for (; r < o && !1 !== t.apply(e[r], i); r++);
                    else
                         for (r in e)
                              if (!1 === t.apply(e[r], i)) break
               } else if (s)
                    for (; r < o && !1 !== t.call(e[r], r, e[r]); r++);
               else
                    for (r in e)
                         if (!1 === t.call(e[r], r, e[r])) break;
               return e
          },
          trim: function(e) {
               return null == e ? "" : (e + "").replace(Z, "")
          },
          makeArray: function(e, t) {
               var i = t || [];
               return null != e && (n(Object(e)) ? Q.merge(i, "string" == typeof e ? [e] : e) : W.call(i, e)), i
          },
          inArray: function(e, t, n) {
               return null == t ? -1 : X.call(t, e, n)
          },
          merge: function(e, t) {
               for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i];
               return e.length = r, e
          },
          grep: function(e, t, n) {
               for (var i = [], r = 0, o = e.length, s = !n; r < o; r++) !t(e[r], r) !== s && i.push(e[r]);
               return i
          },
          map: function(e, t, i) {
               var r, o = 0,
                    s = e.length,
                    a = n(e),
                    u = [];
               if (a)
                    for (; o < s; o++) null != (r = t(e[o], o, i)) && u.push(r);
               else
                    for (o in e) null != (r = t(e[o], o, i)) && u.push(r);
               return V.apply([], u)
          },
          guid: 1,
          proxy: function(e, t) {
               var n, i, r;
               if ("string" == typeof t && (n = e[t], t = e, e = n), Q.isFunction(e)) return i = B.call(arguments, 2), r = function() {
                    return e.apply(t || this, i.concat(B.call(arguments)))
               }, r.guid = e.guid = e.guid || Q.guid++, r
          },
          now: Date.now,
          support: G
     }), Q.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
          z["[object " + t + "]"] = t.toLowerCase()
     });
     var ie = function(e) {
          function t(e, t, n, i) {
               var r, o, s, a, c, f, h, d, p, g;
               if ((t ? t.ownerDocument || t : L) !== D && O(t), t = t || D, n = n || [], a = t.nodeType, "string" != typeof e || !e || 1 !== a && 9 !== a && 11 !== a) return n;
               if (!i && A) {
                    if (11 !== a && (r = me.exec(e)))
                         if (s = r[1]) {
                              if (9 === a) {
                                   if (!(o = t.getElementById(s)) || !o.parentNode) return n;
                                   if (o.id === s) return n.push(o), n
                              } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(s)) && H(t, o) && o.id === s) return n.push(o), n
                         } else {
                              if (r[2]) return G.apply(n, t.getElementsByTagName(e)), n;
                              if ((s = r[3]) && b.getElementsByClassName) return G.apply(n, t.getElementsByClassName(s)), n
                         } if (b.qsa && (!R || !R.test(e))) {
                         if (d = h = I, p = t, g = 1 !== a && e, 1 === a && "object" !== t.nodeName.toLowerCase()) {
                              for (f = E(e), (h = t.getAttribute("id")) ? d = h.replace(ye, "\\$&") : t.setAttribute("id", d), d = "[id='" + d + "'] ", c = f.length; c--;) f[c] = d + l(f[c]);
                              p = ve.test(e) && u(t.parentNode) || t, g = f.join(",")
                         }
                         if (g) try {
                              return G.apply(n, p.querySelectorAll(g)), n
                         } catch (e) {} finally {
                              h || t.removeAttribute("id")
                         }
                    }
               }
               return S(e.replace(se, "$1"), t, n, i)
          }

          function n() {
               function e(n, i) {
                    return t.push(n + " ") > w.cacheLength && delete e[t.shift()], e[n + " "] = i
               }
               var t = [];
               return e
          }

          function i(e) {
               return e[I] = !0, e
          }

          function r(e) {
               var t = D.createElement("div");
               try {
                    return !!e(t)
               } catch (e) {
                    return !1
               } finally {
                    t.parentNode && t.parentNode.removeChild(t), t = null
               }
          }

          function o(e, t) {
               for (var n = e.split("|"), i = e.length; i--;) w.attrHandle[n[i]] = t
          }

          function s(e, t) {
               var n = t && e,
                    i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || W) - (~e.sourceIndex || W);
               if (i) return i;
               if (n)
                    for (; n = n.nextSibling;)
                         if (n === t) return -1;
               return e ? 1 : -1
          }

          function a(e) {
               return i(function(t) {
                    return t = +t, i(function(n, i) {
                         for (var r, o = e([], n.length, t), s = o.length; s--;) n[r = o[s]] && (n[r] = !(i[r] = n[r]))
                    })
               })
          }

          function u(e) {
               return e && void 0 !== e.getElementsByTagName && e
          }

          function c() {}

          function l(e) {
               for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
               return i
          }

          function f(e, t, n) {
               var i = t.dir,
                    r = n && "parentNode" === i,
                    o = F++;
               return t.first ? function(t, n, o) {
                    for (; t = t[i];)
                         if (1 === t.nodeType || r) return e(t, n, o)
               } : function(t, n, s) {
                    var a, u, c = [q, o];
                    if (s) {
                         for (; t = t[i];)
                              if ((1 === t.nodeType || r) && e(t, n, s)) return !0
                    } else
                         for (; t = t[i];)
                              if (1 === t.nodeType || r) {
                                   if (u = t[I] || (t[I] = {}), (a = u[i]) && a[0] === q && a[1] === o) return c[2] = a[2];
                                   if (u[i] = c, c[2] = e(t, n, s)) return !0
                              }
               }
          }

          function h(e) {
               return e.length > 1 ? function(t, n, i) {
                    for (var r = e.length; r--;)
                         if (!e[r](t, n, i)) return !1;
                    return !0
               } : e[0]
          }

          function d(e, n, i) {
               for (var r = 0, o = n.length; r < o; r++) t(e, n[r], i);
               return i
          }

          function p(e, t, n, i, r) {
               for (var o, s = [], a = 0, u = e.length, c = null != t; a < u; a++)(o = e[a]) && (n && !n(o, i, r) || (s.push(o), c && t.push(a)));
               return s
          }

          function g(e, t, n, r, o, s) {
               return r && !r[I] && (r = g(r)), o && !o[I] && (o = g(o, s)), i(function(i, s, a, u) {
                    var c, l, f, h = [],
                         g = [],
                         m = s.length,
                         v = i || d(t || "*", a.nodeType ? [a] : a, []),
                         y = !e || !i && t ? v : p(v, h, e, a, u),
                         b = n ? o || (i ? e : m || r) ? [] : s : y;
                    if (n && n(y, b, a, u), r)
                         for (c = p(b, g), r(c, [], a, u), l = c.length; l--;)(f = c[l]) && (b[g[l]] = !(y[g[l]] = f));
                    if (i) {
                         if (o || e) {
                              if (o) {
                                   for (c = [], l = b.length; l--;)(f = b[l]) && c.push(y[l] = f);
                                   o(null, b = [], c, u)
                              }
                              for (l = b.length; l--;)(f = b[l]) && (c = o ? Q(i, f) : h[l]) > -1 && (i[c] = !(s[c] = f))
                         }
                    } else b = p(b === s ? b.splice(m, b.length) : b), o ? o(null, s, b, u) : G.apply(s, b)
               })
          }

          function m(e) {
               for (var t, n, i, r = e.length, o = w.relative[e[0].type], s = o || w.relative[" "], a = o ? 1 : 0, u = f(function(e) {
                         return e === t
                    }, s, !0), c = f(function(e) {
                         return Q(t, e) > -1
                    }, s, !0), d = [function(e, n, i) {
                         var r = !o && (i || n !== k) || ((t = n).nodeType ? u(e, n, i) : c(e, n, i));
                         return t = null, r
                    }]; a < r; a++)
                    if (n = w.relative[e[a].type]) d = [f(h(d), n)];
                    else {
                         if (n = w.filter[e[a].type].apply(null, e[a].matches), n[I]) {
                              for (i = ++a; i < r && !w.relative[e[i].type]; i++);
                              return g(a > 1 && h(d), a > 1 && l(e.slice(0, a - 1).concat({
                                   value: " " === e[a - 2].type ? "*" : ""
                              })).replace(se, "$1"), n, a < i && m(e.slice(a, i)), i < r && m(e = e.slice(i)), i < r && l(e))
                         }
                         d.push(n)
                    } return h(d)
          }

          function v(e, n) {
               var r = n.length > 0,
                    o = e.length > 0,
                    s = function(i, s, a, u, c) {
                         var l, f, h, d = 0,
                              g = "0",
                              m = i && [],
                              v = [],
                              y = k,
                              b = i || o && w.find.TAG("*", c),
                              x = q += null == y ? 1 : Math.random() || .1,
                              _ = b.length;
                         for (c && (k = s !== D && s); g !== _ && null != (l = b[g]); g++) {
                              if (o && l) {
                                   for (f = 0; h = e[f++];)
                                        if (h(l, s, a)) {
                                             u.push(l);
                                             break
                                        } c && (q = x)
                              }
                              r && ((l = !h && l) && d--, i && m.push(l))
                         }
                         if (d += g, r && g !== d) {
                              for (f = 0; h = n[f++];) h(m, v, s, a);
                              if (i) {
                                   if (d > 0)
                                        for (; g--;) m[g] || v[g] || (v[g] = J.call(u));
                                   v = p(v)
                              }
                              G.apply(u, v), c && !i && v.length > 0 && d + n.length > 1 && t.uniqueSort(u)
                         }
                         return c && (q = x, k = y), m
                    };
               return r ? i(s) : s
          }
          var y, b, w, x, _, E, T, S, k, N, C, O, D, j, A, R, M, P, H, I = "sizzle" + 1 * new Date,
               L = e.document,
               q = 0,
               F = 0,
               $ = n(),
               U = n(),
               B = n(),
               V = function(e, t) {
                    return e === t && (C = !0), 0
               },
               W = 1 << 31,
               X = {}.hasOwnProperty,
               z = [],
               J = z.pop,
               Y = z.push,
               G = z.push,
               K = z.slice,
               Q = function(e, t) {
                    for (var n = 0, i = e.length; n < i; n++)
                         if (e[n] === t) return n;
                    return -1
               },
               Z = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
               ee = "[\\x20\\t\\r\\n\\f]",
               te = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
               ne = te.replace("w", "w#"),
               ie = "\\[" + ee + "*(" + te + ")(?:" + ee + "*([*^$|!~]?=)" + ee + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ne + "))|)" + ee + "*\\]",
               re = ":(" + te + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ie + ")*)|.*)\\)|)",
               oe = new RegExp(ee + "+", "g"),
               se = new RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$", "g"),
               ae = new RegExp("^" + ee + "*," + ee + "*"),
               ue = new RegExp("^" + ee + "*([>+~]|" + ee + ")" + ee + "*"),
               ce = new RegExp("=" + ee + "*([^\\]'\"]*?)" + ee + "*\\]", "g"),
               le = new RegExp(re),
               fe = new RegExp("^" + ne + "$"),
               he = {
                    ID: new RegExp("^#(" + te + ")"),
                    CLASS: new RegExp("^\\.(" + te + ")"),
                    TAG: new RegExp("^(" + te.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + ie),
                    PSEUDO: new RegExp("^" + re),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + Z + ")$", "i"),
                    needsContext: new RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)", "i")
               },
               de = /^(?:input|select|textarea|button)$/i,
               pe = /^h\d$/i,
               ge = /^[^{]+\{\s*\[native \w/,
               me = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
               ve = /[+~]/,
               ye = /'|\\/g,
               be = new RegExp("\\\\([\\da-f]{1,6}" + ee + "?|(" + ee + ")|.)", "ig"),
               we = function(e, t, n) {
                    var i = "0x" + t - 65536;
                    return i !== i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
               },
               xe = function() {
                    O()
               };
          try {
               G.apply(z = K.call(L.childNodes), L.childNodes), z[L.childNodes.length].nodeType
          } catch (e) {
               G = {
                    apply: z.length ? function(e, t) {
                         Y.apply(e, K.call(t))
                    } : function(e, t) {
                         for (var n = e.length, i = 0; e[n++] = t[i++];);
                         e.length = n - 1
                    }
               }
          }
          b = t.support = {}, _ = t.isXML = function(e) {
               var t = e && (e.ownerDocument || e).documentElement;
               return !!t && "HTML" !== t.nodeName
          }, O = t.setDocument = function(e) {
               var t, n, i = e ? e.ownerDocument || e : L;
               return i !== D && 9 === i.nodeType && i.documentElement ? (D = i, j = i.documentElement, n = i.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", xe, !1) : n.attachEvent && n.attachEvent("onunload", xe)), A = !_(i), b.attributes = r(function(e) {
                    return e.className = "i", !e.getAttribute("className")
               }), b.getElementsByTagName = r(function(e) {
                    return e.appendChild(i.createComment("")), !e.getElementsByTagName("*").length
               }), b.getElementsByClassName = ge.test(i.getElementsByClassName), b.getById = r(function(e) {
                    return j.appendChild(e).id = I, !i.getElementsByName || !i.getElementsByName(I).length
               }), b.getById ? (w.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && A) {
                         var n = t.getElementById(e);
                         return n && n.parentNode ? [n] : []
                    }
               }, w.filter.ID = function(e) {
                    var t = e.replace(be, we);
                    return function(e) {
                         return e.getAttribute("id") === t
                    }
               }) : (delete w.find.ID, w.filter.ID = function(e) {
                    var t = e.replace(be, we);
                    return function(e) {
                         var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                         return n && n.value === t
                    }
               }), w.find.TAG = b.getElementsByTagName ? function(e, t) {
                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : b.qsa ? t.querySelectorAll(e) : void 0
               } : function(e, t) {
                    var n, i = [],
                         r = 0,
                         o = t.getElementsByTagName(e);
                    if ("*" === e) {
                         for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                         return i
                    }
                    return o
               }, w.find.CLASS = b.getElementsByClassName && function(e, t) {
                    if (A) return t.getElementsByClassName(e)
               }, M = [], R = [], (b.qsa = ge.test(i.querySelectorAll)) && (r(function(e) {
                    j.appendChild(e).innerHTML = "<a id='" + I + "'></a><select id='" + I + "-\f]' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && R.push("[*^$]=" + ee + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || R.push("\\[" + ee + "*(?:value|" + Z + ")"), e.querySelectorAll("[id~=" + I + "-]").length || R.push("~="), e.querySelectorAll(":checked").length || R.push(":checked"), e.querySelectorAll("a#" + I + "+*").length || R.push(".#.+[+~]")
               }), r(function(e) {
                    var t = i.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && R.push("name" + ee + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || R.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), R.push(",.*:")
               })), (b.matchesSelector = ge.test(P = j.matches || j.webkitMatchesSelector || j.mozMatchesSelector || j.oMatchesSelector || j.msMatchesSelector)) && r(function(e) {
                    b.disconnectedMatch = P.call(e, "div"), P.call(e, "[s!='']:x"), M.push("!=", re)
               }), R = R.length && new RegExp(R.join("|")), M = M.length && new RegExp(M.join("|")), t = ge.test(j.compareDocumentPosition), H = t || ge.test(j.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                         i = t && t.parentNode;
                    return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
               } : function(e, t) {
                    if (t)
                         for (; t = t.parentNode;)
                              if (t === e) return !0;
                    return !1
               }, V = t ? function(e, t) {
                    if (e === t) return C = !0, 0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n || (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !b.sortDetached && t.compareDocumentPosition(e) === n ? e === i || e.ownerDocument === L && H(L, e) ? -1 : t === i || t.ownerDocument === L && H(L, t) ? 1 : N ? Q(N, e) - Q(N, t) : 0 : 4 & n ? -1 : 1)
               } : function(e, t) {
                    if (e === t) return C = !0, 0;
                    var n, r = 0,
                         o = e.parentNode,
                         a = t.parentNode,
                         u = [e],
                         c = [t];
                    if (!o || !a) return e === i ? -1 : t === i ? 1 : o ? -1 : a ? 1 : N ? Q(N, e) - Q(N, t) : 0;
                    if (o === a) return s(e, t);
                    for (n = e; n = n.parentNode;) u.unshift(n);
                    for (n = t; n = n.parentNode;) c.unshift(n);
                    for (; u[r] === c[r];) r++;
                    return r ? s(u[r], c[r]) : u[r] === L ? -1 : c[r] === L ? 1 : 0
               }, i) : D
          }, t.matches = function(e, n) {
               return t(e, null, null, n)
          }, t.matchesSelector = function(e, n) {
               if ((e.ownerDocument || e) !== D && O(e), n = n.replace(ce, "='$1']"), b.matchesSelector && A && (!M || !M.test(n)) && (!R || !R.test(n))) try {
                    var i = P.call(e, n);
                    if (i || b.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
               } catch (e) {}
               return t(n, D, null, [e]).length > 0
          }, t.contains = function(e, t) {
               return (e.ownerDocument || e) !== D && O(e), H(e, t)
          }, t.attr = function(e, t) {
               (e.ownerDocument || e) !== D && O(e);
               var n = w.attrHandle[t.toLowerCase()],
                    i = n && X.call(w.attrHandle, t.toLowerCase()) ? n(e, t, !A) : void 0;
               return void 0 !== i ? i : b.attributes || !A ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
          }, t.error = function(e) {
               throw new Error("Syntax error, unrecognized expression: " + e)
          }, t.uniqueSort = function(e) {
               var t, n = [],
                    i = 0,
                    r = 0;
               if (C = !b.detectDuplicates, N = !b.sortStable && e.slice(0), e.sort(V), C) {
                    for (; t = e[r++];) t === e[r] && (i = n.push(r));
                    for (; i--;) e.splice(n[i], 1)
               }
               return N = null, e
          }, x = t.getText = function(e) {
               var t, n = "",
                    i = 0,
                    r = e.nodeType;
               if (r) {
                    if (1 === r || 9 === r || 11 === r) {
                         if ("string" == typeof e.textContent) return e.textContent;
                         for (e = e.firstChild; e; e = e.nextSibling) n += x(e)
                    } else if (3 === r || 4 === r) return e.nodeValue
               } else
                    for (; t = e[i++];) n += x(t);
               return n
          }, w = t.selectors = {
               cacheLength: 50,
               createPseudo: i,
               match: he,
               attrHandle: {},
               find: {},
               relative: {
                    ">": {
                         dir: "parentNode",
                         first: !0
                    },
                    " ": {
                         dir: "parentNode"
                    },
                    "+": {
                         dir: "previousSibling",
                         first: !0
                    },
                    "~": {
                         dir: "previousSibling"
                    }
               },
               preFilter: {
                    ATTR: function(e) {
                         return e[1] = e[1].replace(be, we), e[3] = (e[3] || e[4] || e[5] || "").replace(be, we), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                         return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                         var t, n = !e[6] && e[2];
                         return he.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && le.test(n) && (t = E(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
               },
               filter: {
                    TAG: function(e) {
                         var t = e.replace(be, we).toLowerCase();
                         return "*" === e ? function() {
                              return !0
                         } : function(e) {
                              return e.nodeName && e.nodeName.toLowerCase() === t
                         }
                    },
                    CLASS: function(e) {
                         var t = $[e + " "];
                         return t || (t = new RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) && $(e, function(e) {
                              return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                         })
                    },
                    ATTR: function(e, n, i) {
                         return function(r) {
                              var o = t.attr(r, e);
                              return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o.replace(oe, " ") + " ").indexOf(i) > -1 : "|=" === n && (o === i || o.slice(0, i.length + 1) === i + "-"))
                         }
                    },
                    CHILD: function(e, t, n, i, r) {
                         var o = "nth" !== e.slice(0, 3),
                              s = "last" !== e.slice(-4),
                              a = "of-type" === t;
                         return 1 === i && 0 === r ? function(e) {
                              return !!e.parentNode
                         } : function(t, n, u) {
                              var c, l, f, h, d, p, g = o !== s ? "nextSibling" : "previousSibling",
                                   m = t.parentNode,
                                   v = a && t.nodeName.toLowerCase(),
                                   y = !u && !a;
                              if (m) {
                                   if (o) {
                                        for (; g;) {
                                             for (f = t; f = f[g];)
                                                  if (a ? f.nodeName.toLowerCase() === v : 1 === f.nodeType) return !1;
                                             p = g = "only" === e && !p && "nextSibling"
                                        }
                                        return !0
                                   }
                                   if (p = [s ? m.firstChild : m.lastChild], s && y) {
                                        for (l = m[I] || (m[I] = {}), c = l[e] || [], d = c[0] === q && c[1], h = c[0] === q && c[2], f = d && m.childNodes[d]; f = ++d && f && f[g] || (h = d = 0) || p.pop();)
                                             if (1 === f.nodeType && ++h && f === t) {
                                                  l[e] = [q, d, h];
                                                  break
                                             }
                                   } else if (y && (c = (t[I] || (t[I] = {}))[e]) && c[0] === q) h = c[1];
                                   else
                                        for (;
                                             (f = ++d && f && f[g] || (h = d = 0) || p.pop()) && ((a ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++h || (y && ((f[I] || (f[I] = {}))[e] = [q, h]), f !== t)););
                                   return (h -= r) === i || h % i == 0 && h / i >= 0
                              }
                         }
                    },
                    PSEUDO: function(e, n) {
                         var r, o = w.pseudos[e] || w.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                         return o[I] ? o(n) : o.length > 1 ? (r = [e, e, "", n], w.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) {
                              for (var i, r = o(e, n), s = r.length; s--;) i = Q(e, r[s]), e[i] = !(t[i] = r[s])
                         }) : function(e) {
                              return o(e, 0, r)
                         }) : o
                    }
               },
               pseudos: {
                    not: i(function(e) {
                         var t = [],
                              n = [],
                              r = T(e.replace(se, "$1"));
                         return r[I] ? i(function(e, t, n, i) {
                              for (var o, s = r(e, null, i, []), a = e.length; a--;)(o = s[a]) && (e[a] = !(t[a] = o))
                         }) : function(e, i, o) {
                              return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop()
                         }
                    }),
                    has: i(function(e) {
                         return function(n) {
                              return t(e, n).length > 0
                         }
                    }),
                    contains: i(function(e) {
                         return e = e.replace(be, we),
                              function(t) {
                                   return (t.textContent || t.innerText || x(t)).indexOf(e) > -1
                              }
                    }),
                    lang: i(function(e) {
                         return fe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(be, we).toLowerCase(),
                              function(t) {
                                   var n;
                                   do {
                                        if (n = A ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                   } while ((t = t.parentNode) && 1 === t.nodeType);
                                   return !1
                              }
                    }),
                    target: function(t) {
                         var n = e.location && e.location.hash;
                         return n && n.slice(1) === t.id
                    },
                    root: function(e) {
                         return e === j
                    },
                    focus: function(e) {
                         return e === D.activeElement && (!D.hasFocus || D.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: function(e) {
                         return !1 === e.disabled
                    },
                    disabled: function(e) {
                         return !0 === e.disabled
                    },
                    checked: function(e) {
                         var t = e.nodeName.toLowerCase();
                         return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                         return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function(e) {
                         for (e = e.firstChild; e; e = e.nextSibling)
                              if (e.nodeType < 6) return !1;
                         return !0
                    },
                    parent: function(e) {
                         return !w.pseudos.empty(e)
                    },
                    header: function(e) {
                         return pe.test(e.nodeName)
                    },
                    input: function(e) {
                         return de.test(e.nodeName)
                    },
                    button: function(e) {
                         var t = e.nodeName.toLowerCase();
                         return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                         var t;
                         return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: a(function() {
                         return [0]
                    }),
                    last: a(function(e, t) {
                         return [t - 1]
                    }),
                    eq: a(function(e, t, n) {
                         return [n < 0 ? n + t : n]
                    }),
                    even: a(function(e, t) {
                         for (var n = 0; n < t; n += 2) e.push(n);
                         return e
                    }),
                    odd: a(function(e, t) {
                         for (var n = 1; n < t; n += 2) e.push(n);
                         return e
                    }),
                    lt: a(function(e, t, n) {
                         for (var i = n < 0 ? n + t : n; --i >= 0;) e.push(i);
                         return e
                    }),
                    gt: a(function(e, t, n) {
                         for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                         return e
                    })
               }
          }, w.pseudos.nth = w.pseudos.eq;
          for (y in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
               }) w.pseudos[y] = function(e) {
               return function(t) {
                    return "input" === t.nodeName.toLowerCase() && t.type === e
               }
          }(y);
          for (y in {
                    submit: !0,
                    reset: !0
               }) w.pseudos[y] = function(e) {
               return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
               }
          }(y);
          return c.prototype = w.filters = w.pseudos, w.setFilters = new c, E = t.tokenize = function(e, n) {
               var i, r, o, s, a, u, c, l = U[e + " "];
               if (l) return n ? 0 : l.slice(0);
               for (a = e, u = [], c = w.preFilter; a;) {
                    i && !(r = ae.exec(a)) || (r && (a = a.slice(r[0].length) || a), u.push(o = [])), i = !1, (r = ue.exec(a)) && (i = r.shift(), o.push({
                         value: i,
                         type: r[0].replace(se, " ")
                    }), a = a.slice(i.length));
                    for (s in w.filter) !(r = he[s].exec(a)) || c[s] && !(r = c[s](r)) || (i = r.shift(), o.push({
                         value: i,
                         type: s,
                         matches: r
                    }), a = a.slice(i.length));
                    if (!i) break
               }
               return n ? a.length : a ? t.error(e) : U(e, u).slice(0)
          }, T = t.compile = function(e, t) {
               var n, i = [],
                    r = [],
                    o = B[e + " "];
               if (!o) {
                    for (t || (t = E(e)), n = t.length; n--;) o = m(t[n]), o[I] ? i.push(o) : r.push(o);
                    o = B(e, v(r, i)), o.selector = e
               }
               return o
          }, S = t.select = function(e, t, n, i) {
               var r, o, s, a, c, f = "function" == typeof e && e,
                    h = !i && E(e = f.selector || e);
               if (n = n || [], 1 === h.length) {
                    if (o = h[0] = h[0].slice(0), o.length > 2 && "ID" === (s = o[0]).type && b.getById && 9 === t.nodeType && A && w.relative[o[1].type]) {
                         if (!(t = (w.find.ID(s.matches[0].replace(be, we), t) || [])[0])) return n;
                         f && (t = t.parentNode), e = e.slice(o.shift().value.length)
                    }
                    for (r = he.needsContext.test(e) ? 0 : o.length; r-- && (s = o[r], !w.relative[a = s.type]);)
                         if ((c = w.find[a]) && (i = c(s.matches[0].replace(be, we), ve.test(o[0].type) && u(t.parentNode) || t))) {
                              if (o.splice(r, 1), !(e = i.length && l(o))) return G.apply(n, i), n;
                              break
                         }
               }
               return (f || T(e, h))(i, t, !A, n, ve.test(e) && u(t.parentNode) || t), n
          }, b.sortStable = I.split("").sort(V).join("") === I, b.detectDuplicates = !!C, O(), b.sortDetached = r(function(e) {
               return 1 & e.compareDocumentPosition(D.createElement("div"))
          }), r(function(e) {
               return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
          }) || o("type|href|height|width", function(e, t, n) {
               if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
          }), b.attributes && r(function(e) {
               return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
          }) || o("value", function(e, t, n) {
               if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
          }), r(function(e) {
               return null == e.getAttribute("disabled")
          }) || o(Z, function(e, t, n) {
               var i;
               if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
          }), t
     }(e);
     Q.find = ie, Q.expr = ie.selectors, Q.expr[":"] = Q.expr.pseudos, Q.unique = ie.uniqueSort, Q.text = ie.getText, Q.isXMLDoc = ie.isXML, Q.contains = ie.contains;
     var re = Q.expr.match.needsContext,
          oe = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
          se = /^.[^:#\[\.,]*$/;
     Q.filter = function(e, t, n) {
          var i = t[0];
          return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? Q.find.matchesSelector(i, e) ? [i] : [] : Q.find.matches(e, Q.grep(t, function(e) {
               return 1 === e.nodeType
          }))
     }, Q.fn.extend({
          find: function(e) {
               var t, n = this.length,
                    i = [],
                    r = this;
               if ("string" != typeof e) return this.pushStack(Q(e).filter(function() {
                    for (t = 0; t < n; t++)
                         if (Q.contains(r[t], this)) return !0
               }));
               for (t = 0; t < n; t++) Q.find(e, r[t], i);
               return i = this.pushStack(n > 1 ? Q.unique(i) : i), i.selector = this.selector ? this.selector + " " + e : e, i
          },
          filter: function(e) {
               return this.pushStack(i(this, e || [], !1))
          },
          not: function(e) {
               return this.pushStack(i(this, e || [], !0))
          },
          is: function(e) {
               return !!i(this, "string" == typeof e && re.test(e) ? Q(e) : e || [], !1).length
          }
     });
     var ae, ue = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
     (Q.fn.init = function(e, t) {
          var n, i;
          if (!e) return this;
          if ("string" == typeof e) {
               if (!(n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : ue.exec(e)) || !n[1] && t) return !t || t.jquery ? (t || ae).find(e) : this.constructor(t).find(e);
               if (n[1]) {
                    if (t = t instanceof Q ? t[0] : t, Q.merge(this, Q.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : K, !0)), oe.test(n[1]) && Q.isPlainObject(t))
                         for (n in t) Q.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                    return this
               }
               return i = K.getElementById(n[2]), i && i.parentNode && (this.length = 1, this[0] = i), this.context = K, this.selector = e, this
          }
          return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : Q.isFunction(e) ? void 0 !== ae.ready ? ae.ready(e) : e(Q) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), Q.makeArray(e, this))
     }).prototype = Q.fn, ae = Q(K);
     var ce = /^(?:parents|prev(?:Until|All))/,
          le = {
               children: !0,
               contents: !0,
               next: !0,
               prev: !0
          };
     Q.extend({
          dir: function(e, t, n) {
               for (var i = [], r = void 0 !== n;
                    (e = e[t]) && 9 !== e.nodeType;)
                    if (1 === e.nodeType) {
                         if (r && Q(e).is(n)) break;
                         i.push(e)
                    } return i
          },
          sibling: function(e, t) {
               for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
               return n
          }
     }), Q.fn.extend({
          has: function(e) {
               var t = Q(e, this),
                    n = t.length;
               return this.filter(function() {
                    for (var e = 0; e < n; e++)
                         if (Q.contains(this, t[e])) return !0
               })
          },
          closest: function(e, t) {
               for (var n, i = 0, r = this.length, o = [], s = re.test(e) || "string" != typeof e ? Q(e, t || this.context) : 0; i < r; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                         if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && Q.find.matchesSelector(n, e))) {
                              o.push(n);
                              break
                         } return this.pushStack(o.length > 1 ? Q.unique(o) : o)
          },
          index: function(e) {
               return e ? "string" == typeof e ? X.call(Q(e), this[0]) : X.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
          },
          add: function(e, t) {
               return this.pushStack(Q.unique(Q.merge(this.get(), Q(e, t))))
          },
          addBack: function(e) {
               return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
          }
     }), Q.each({
          parent: function(e) {
               var t = e.parentNode;
               return t && 11 !== t.nodeType ? t : null
          },
          parents: function(e) {
               return Q.dir(e, "parentNode")
          },
          parentsUntil: function(e, t, n) {
               return Q.dir(e, "parentNode", n)
          },
          next: function(e) {
               return r(e, "nextSibling")
          },
          prev: function(e) {
               return r(e, "previousSibling")
          },
          nextAll: function(e) {
               return Q.dir(e, "nextSibling")
          },
          prevAll: function(e) {
               return Q.dir(e, "previousSibling")
          },
          nextUntil: function(e, t, n) {
               return Q.dir(e, "nextSibling", n)
          },
          prevUntil: function(e, t, n) {
               return Q.dir(e, "previousSibling", n)
          },
          siblings: function(e) {
               return Q.sibling((e.parentNode || {}).firstChild, e)
          },
          children: function(e) {
               return Q.sibling(e.firstChild)
          },
          contents: function(e) {
               return e.contentDocument || Q.merge([], e.childNodes)
          }
     }, function(e, t) {
          Q.fn[e] = function(n, i) {
               var r = Q.map(this, t, n);
               return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = Q.filter(i, r)), this.length > 1 && (le[e] || Q.unique(r), ce.test(e) && r.reverse()), this.pushStack(r)
          }
     });
     var fe = /\S+/g,
          he = {};
     Q.Callbacks = function(e) {
          e = "string" == typeof e ? he[e] || o(e) : Q.extend({}, e);
          var t, n, i, r, s, a, u = [],
               c = !e.once && [],
               l = function(o) {
                    for (t = e.memory && o, n = !0, a = r || 0, r = 0, s = u.length, i = !0; u && a < s; a++)
                         if (!1 === u[a].apply(o[0], o[1]) && e.stopOnFalse) {
                              t = !1;
                              break
                         } i = !1, u && (c ? c.length && l(c.shift()) : t ? u = [] : f.disable())
               },
               f = {
                    add: function() {
                         if (u) {
                              var n = u.length;
                              ! function t(n) {
                                   Q.each(n, function(n, i) {
                                        var r = Q.type(i);
                                        "function" === r ? e.unique && f.has(i) || u.push(i) : i && i.length && "string" !== r && t(i)
                                   })
                              }(arguments), i ? s = u.length : t && (r = n, l(t))
                         }
                         return this
                    },
                    remove: function() {
                         return u && Q.each(arguments, function(e, t) {
                              for (var n;
                                   (n = Q.inArray(t, u, n)) > -1;) u.splice(n, 1), i && (n <= s && s--, n <= a && a--)
                         }), this
                    },
                    has: function(e) {
                         return e ? Q.inArray(e, u) > -1 : !(!u || !u.length)
                    },
                    empty: function() {
                         return u = [], s = 0, this
                    },
                    disable: function() {
                         return u = c = t = void 0, this
                    },
                    disabled: function() {
                         return !u
                    },
                    lock: function() {
                         return c = void 0, t || f.disable(), this
                    },
                    locked: function() {
                         return !c
                    },
                    fireWith: function(e, t) {
                         return !u || n && !c || (t = t || [], t = [e, t.slice ? t.slice() : t], i ? c.push(t) : l(t)), this
                    },
                    fire: function() {
                         return f.fireWith(this, arguments), this
                    },
                    fired: function() {
                         return !!n
                    }
               };
          return f
     }, Q.extend({
          Deferred: function(e) {
               var t = [
                         ["resolve", "done", Q.Callbacks("once memory"), "resolved"],
                         ["reject", "fail", Q.Callbacks("once memory"), "rejected"],
                         ["notify", "progress", Q.Callbacks("memory")]
                    ],
                    n = "pending",
                    i = {
                         state: function() {
                              return n
                         },
                         always: function() {
                              return r.done(arguments).fail(arguments), this
                         },
                         then: function() {
                              var e = arguments;
                              return Q.Deferred(function(n) {
                                   Q.each(t, function(t, o) {
                                        var s = Q.isFunction(e[t]) && e[t];
                                        r[o[1]](function() {
                                             var e = s && s.apply(this, arguments);
                                             e && Q.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === i ? n.promise() : this, s ? [e] : arguments)
                                        })
                                   }), e = null
                              }).promise()
                         },
                         promise: function(e) {
                              return null != e ? Q.extend(e, i) : i
                         }
                    },
                    r = {};
               return i.pipe = i.then, Q.each(t, function(e, o) {
                    var s = o[2],
                         a = o[3];
                    i[o[1]] = s.add, a && s.add(function() {
                         n = a
                    }, t[1 ^ e][2].disable, t[2][2].lock), r[o[0]] = function() {
                         return r[o[0] + "With"](this === r ? i : this, arguments), this
                    }, r[o[0] + "With"] = s.fireWith
               }), i.promise(r), e && e.call(r, r), r
          },
          when: function(e) {
               var t, n, i, r = 0,
                    o = B.call(arguments),
                    s = o.length,
                    a = 1 !== s || e && Q.isFunction(e.promise) ? s : 0,
                    u = 1 === a ? e : Q.Deferred(),
                    c = function(e, n, i) {
                         return function(r) {
                              n[e] = this, i[e] = arguments.length > 1 ? B.call(arguments) : r, i === t ? u.notifyWith(n, i) : --a || u.resolveWith(n, i)
                         }
                    };
               if (s > 1)
                    for (t = new Array(s), n = new Array(s), i = new Array(s); r < s; r++) o[r] && Q.isFunction(o[r].promise) ? o[r].promise().done(c(r, i, o)).fail(u.reject).progress(c(r, n, t)) : --a;
               return a || u.resolveWith(i, o), u.promise()
          }
     });
     var de;
     Q.fn.ready = function(e) {
          return Q.ready.promise().done(e), this
     }, Q.extend({
          isReady: !1,
          readyWait: 1,
          holdReady: function(e) {
               e ? Q.readyWait++ : Q.ready(!0)
          },
          ready: function(e) {
               (!0 === e ? --Q.readyWait : Q.isReady) || (Q.isReady = !0, !0 !== e && --Q.readyWait > 0 || (de.resolveWith(K, [Q]), Q.fn.triggerHandler && (Q(K).triggerHandler("ready"), Q(K).off("ready"))))
          }
     }), Q.ready.promise = function(t) {
          return de || (de = Q.Deferred(), "complete" === K.readyState ? setTimeout(Q.ready) : (K.addEventListener("DOMContentLoaded", s, !1), e.addEventListener("load", s, !1))), de.promise(t)
     }, Q.ready.promise();
     var pe = Q.access = function(e, t, n, i, r, o, s) {
          var a = 0,
               u = e.length,
               c = null == n;
          if ("object" === Q.type(n)) {
               r = !0;
               for (a in n) Q.access(e, t, a, n[a], !0, o, s)
          } else if (void 0 !== i && (r = !0, Q.isFunction(i) || (s = !0), c && (s ? (t.call(e, i), t = null) : (c = t, t = function(e, t, n) {
                    return c.call(Q(e), n)
               })), t))
               for (; a < u; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
          return r ? e : c ? t.call(e) : u ? t(e[0], n) : o
     };
     Q.acceptData = function(e) {
          return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
     }, a.uid = 1, a.accepts = Q.acceptData, a.prototype = {
          key: function(e) {
               if (!a.accepts(e)) return 0;
               var t = {},
                    n = e[this.expando];
               if (!n) {
                    n = a.uid++;
                    try {
                         t[this.expando] = {
                              value: n
                         }, Object.defineProperties(e, t)
                    } catch (i) {
                         t[this.expando] = n, Q.extend(e, t)
                    }
               }
               return this.cache[n] || (this.cache[n] = {}), n
          },
          set: function(e, t, n) {
               var i, r = this.key(e),
                    o = this.cache[r];
               if ("string" == typeof t) o[t] = n;
               else if (Q.isEmptyObject(o)) Q.extend(this.cache[r], t);
               else
                    for (i in t) o[i] = t[i];
               return o
          },
          get: function(e, t) {
               var n = this.cache[this.key(e)];
               return void 0 === t ? n : n[t]
          },
          access: function(e, t, n) {
               var i;
               return void 0 === t || t && "string" == typeof t && void 0 === n ? (i = this.get(e, t), void 0 !== i ? i : this.get(e, Q.camelCase(t))) : (this.set(e, t, n), void 0 !== n ? n : t)
          },
          remove: function(e, t) {
               var n, i, r, o = this.key(e),
                    s = this.cache[o];
               if (void 0 === t) this.cache[o] = {};
               else {
                    Q.isArray(t) ? i = t.concat(t.map(Q.camelCase)) : (r = Q.camelCase(t), t in s ? i = [t, r] : (i = r, i = i in s ? [i] : i.match(fe) || [])), n = i.length;
                    for (; n--;) delete s[i[n]]
               }
          },
          hasData: function(e) {
               return !Q.isEmptyObject(this.cache[e[this.expando]] || {})
          },
          discard: function(e) {
               e[this.expando] && delete this.cache[e[this.expando]]
          }
     };
     var ge = new a,
          me = new a,
          ve = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
          ye = /([A-Z])/g;
     Q.extend({
          hasData: function(e) {
               return me.hasData(e) || ge.hasData(e)
          },
          data: function(e, t, n) {
               return me.access(e, t, n)
          },
          removeData: function(e, t) {
               me.remove(e, t)
          },
          _data: function(e, t, n) {
               return ge.access(e, t, n)
          },
          _removeData: function(e, t) {
               ge.remove(e, t)
          }
     }), Q.fn.extend({
          data: function(e, t) {
               var n, i, r, o = this[0],
                    s = o && o.attributes;
               if (void 0 === e) {
                    if (this.length && (r = me.get(o), 1 === o.nodeType && !ge.get(o, "hasDataAttrs"))) {
                         for (n = s.length; n--;) s[n] && (i = s[n].name, 0 === i.indexOf("data-") && (i = Q.camelCase(i.slice(5)), u(o, i, r[i])));
                         ge.set(o, "hasDataAttrs", !0)
                    }
                    return r
               }
               return "object" == typeof e ? this.each(function() {
                    me.set(this, e)
               }) : pe(this, function(t) {
                    var n, i = Q.camelCase(e);
                    if (o && void 0 === t) {
                         if (void 0 !== (n = me.get(o, e))) return n;
                         if (void 0 !== (n = me.get(o, i))) return n;
                         if (void 0 !== (n = u(o, i, void 0))) return n
                    } else this.each(function() {
                         var n = me.get(this, i);
                         me.set(this, i, t), -1 !== e.indexOf("-") && void 0 !== n && me.set(this, e, t)
                    })
               }, null, t, arguments.length > 1, null, !0)
          },
          removeData: function(e) {
               return this.each(function() {
                    me.remove(this, e)
               })
          }
     }), Q.extend({
          queue: function(e, t, n) {
               var i;
               if (e) return t = (t || "fx") + "queue", i = ge.get(e, t), n && (!i || Q.isArray(n) ? i = ge.access(e, t, Q.makeArray(n)) : i.push(n)), i || []
          },
          dequeue: function(e, t) {
               t = t || "fx";
               var n = Q.queue(e, t),
                    i = n.length,
                    r = n.shift(),
                    o = Q._queueHooks(e, t),
                    s = function() {
                         Q.dequeue(e, t)
                    };
               "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, s, o)), !i && o && o.empty.fire()
          },
          _queueHooks: function(e, t) {
               var n = t + "queueHooks";
               return ge.get(e, n) || ge.access(e, n, {
                    empty: Q.Callbacks("once memory").add(function() {
                         ge.remove(e, [t + "queue", n])
                    })
               })
          }
     }), Q.fn.extend({
          queue: function(e, t) {
               var n = 2;
               return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? Q.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                    var n = Q.queue(this, e, t);
                    Q._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && Q.dequeue(this, e)
               })
          },
          dequeue: function(e) {
               return this.each(function() {
                    Q.dequeue(this, e)
               })
          },
          clearQueue: function(e) {
               return this.queue(e || "fx", [])
          },
          promise: function(e, t) {
               var n, i = 1,
                    r = Q.Deferred(),
                    o = this,
                    s = this.length,
                    a = function() {
                         --i || r.resolveWith(o, [o])
                    };
               for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;)(n = ge.get(o[s], e + "queueHooks")) && n.empty && (i++, n.empty.add(a));
               return a(), r.promise(t)
          }
     });
     var be = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
          we = ["Top", "Right", "Bottom", "Left"],
          xe = function(e, t) {
               return e = t || e, "none" === Q.css(e, "display") || !Q.contains(e.ownerDocument, e)
          },
          _e = /^(?:checkbox|radio)$/i;
     ! function() {
          var e = K.createDocumentFragment(),
               t = e.appendChild(K.createElement("div")),
               n = K.createElement("input");
          n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), G.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", G.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
     }();
     G.focusinBubbles = "onfocusin" in e;
     var Ee = /^key/,
          Te = /^(?:mouse|pointer|contextmenu)|click/,
          Se = /^(?:focusinfocus|focusoutblur)$/,
          ke = /^([^.]*)(?:\.(.+)|)$/;
     Q.event = {
          global: {},
          add: function(e, t, n, i, r) {
               var o, s, a, u, c, l, f, h, d, p, g, m = ge.get(e);
               if (m)
                    for (n.handler && (o = n, n = o.handler, r = o.selector), n.guid || (n.guid = Q.guid++), (u = m.events) || (u = m.events = {}), (s = m.handle) || (s = m.handle = function(t) {
                              return void 0 !== Q && Q.event.triggered !== t.type ? Q.event.dispatch.apply(e, arguments) : void 0
                         }), t = (t || "").match(fe) || [""], c = t.length; c--;) a = ke.exec(t[c]) || [], d = g = a[1], p = (a[2] || "").split(".").sort(), d && (f = Q.event.special[d] || {}, d = (r ? f.delegateType : f.bindType) || d, f = Q.event.special[d] || {}, l = Q.extend({
                         type: d,
                         origType: g,
                         data: i,
                         handler: n,
                         guid: n.guid,
                         selector: r,
                         needsContext: r && Q.expr.match.needsContext.test(r),
                         namespace: p.join(".")
                    }, o), (h = u[d]) || (h = u[d] = [], h.delegateCount = 0, f.setup && !1 !== f.setup.call(e, i, p, s) || e.addEventListener && e.addEventListener(d, s, !1)), f.add && (f.add.call(e, l), l.handler.guid || (l.handler.guid = n.guid)), r ? h.splice(h.delegateCount++, 0, l) : h.push(l), Q.event.global[d] = !0)
          },
          remove: function(e, t, n, i, r) {
               var o, s, a, u, c, l, f, h, d, p, g, m = ge.hasData(e) && ge.get(e);
               if (m && (u = m.events)) {
                    for (t = (t || "").match(fe) || [""], c = t.length; c--;)
                         if (a = ke.exec(t[c]) || [], d = g = a[1], p = (a[2] || "").split(".").sort(), d) {
                              for (f = Q.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, h = u[d] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = h.length; o--;) l = h[o], !r && g !== l.origType || n && n.guid !== l.guid || a && !a.test(l.namespace) || i && i !== l.selector && ("**" !== i || !l.selector) || (h.splice(o, 1), l.selector && h.delegateCount--, f.remove && f.remove.call(e, l));
                              s && !h.length && (f.teardown && !1 !== f.teardown.call(e, p, m.handle) || Q.removeEvent(e, d, m.handle), delete u[d])
                         } else
                              for (d in u) Q.event.remove(e, d + t[c], n, i, !0);
                    Q.isEmptyObject(u) && (delete m.handle, ge.remove(e, "events"))
               }
          },
          trigger: function(t, n, i, r) {
               var o, s, a, u, c, l, f, h = [i || K],
                    d = Y.call(t, "type") ? t.type : t,
                    p = Y.call(t, "namespace") ? t.namespace.split(".") : [];
               if (s = a = i = i || K, 3 !== i.nodeType && 8 !== i.nodeType && !Se.test(d + Q.event.triggered) && (d.indexOf(".") >= 0 && (p = d.split("."), d = p.shift(), p.sort()), c = d.indexOf(":") < 0 && "on" + d, t = t[Q.expando] ? t : new Q.Event(d, "object" == typeof t && t), t.isTrigger = r ? 2 : 3, t.namespace = p.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : Q.makeArray(n, [t]), f = Q.event.special[d] || {}, r || !f.trigger || !1 !== f.trigger.apply(i, n))) {
                    if (!r && !f.noBubble && !Q.isWindow(i)) {
                         for (u = f.delegateType || d, Se.test(u + d) || (s = s.parentNode); s; s = s.parentNode) h.push(s), a = s;
                         a === (i.ownerDocument || K) && h.push(a.defaultView || a.parentWindow || e)
                    }
                    for (o = 0;
                         (s = h[o++]) && !t.isPropagationStopped();) t.type = o > 1 ? u : f.bindType || d, l = (ge.get(s, "events") || {})[t.type] && ge.get(s, "handle"), l && l.apply(s, n), (l = c && s[c]) && l.apply && Q.acceptData(s) && (t.result = l.apply(s, n), !1 === t.result && t.preventDefault());
                    return t.type = d, r || t.isDefaultPrevented() || f._default && !1 !== f._default.apply(h.pop(), n) || !Q.acceptData(i) || c && Q.isFunction(i[d]) && !Q.isWindow(i) && (a = i[c], a && (i[c] = null), Q.event.triggered = d, i[d](), Q.event.triggered = void 0, a && (i[c] = a)), t.result
               }
          },
          dispatch: function(e) {
               e = Q.event.fix(e);
               var t, n, i, r, o, s = [],
                    a = B.call(arguments),
                    u = (ge.get(this, "events") || {})[e.type] || [],
                    c = Q.event.special[e.type] || {};
               if (a[0] = e, e.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, e)) {
                    for (s = Q.event.handlers.call(this, e, u), t = 0;
                         (r = s[t++]) && !e.isPropagationStopped();)
                         for (e.currentTarget = r.elem, n = 0;
                              (o = r.handlers[n++]) && !e.isImmediatePropagationStopped();) e.namespace_re && !e.namespace_re.test(o.namespace) || (e.handleObj = o, e.data = o.data, void 0 !== (i = ((Q.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, a)) && !1 === (e.result = i) && (e.preventDefault(), e.stopPropagation()));
                    return c.postDispatch && c.postDispatch.call(this, e), e.result
               }
          },
          handlers: function(e, t) {
               var n, i, r, o, s = [],
                    a = t.delegateCount,
                    u = e.target;
               if (a && u.nodeType && (!e.button || "click" !== e.type))
                    for (; u !== this; u = u.parentNode || this)
                         if (!0 !== u.disabled || "click" !== e.type) {
                              for (i = [], n = 0; n < a; n++) o = t[n], r = o.selector + " ", void 0 === i[r] && (i[r] = o.needsContext ? Q(r, this).index(u) >= 0 : Q.find(r, this, null, [u]).length), i[r] && i.push(o);
                              i.length && s.push({
                                   elem: u,
                                   handlers: i
                              })
                         } return a < t.length && s.push({
                    elem: this,
                    handlers: t.slice(a)
               }), s
          },
          props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
          fixHooks: {},
          keyHooks: {
               props: "char charCode key keyCode".split(" "),
               filter: function(e, t) {
                    return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
               }
          },
          mouseHooks: {
               props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
               filter: function(e, t) {
                    var n, i, r, o = t.button;
                    return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || K, i = n.documentElement, r = n.body, e.pageX = t.clientX + (i && i.scrollLeft || r && r.scrollLeft || 0) - (i && i.clientLeft || r && r.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || r && r.scrollTop || 0) - (i && i.clientTop || r && r.clientTop || 0)), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
               }
          },
          fix: function(e) {
               if (e[Q.expando]) return e;
               var t, n, i, r = e.type,
                    o = e,
                    s = this.fixHooks[r];
               for (s || (this.fixHooks[r] = s = Te.test(r) ? this.mouseHooks : Ee.test(r) ? this.keyHooks : {}), i = s.props ? this.props.concat(s.props) : this.props, e = new Q.Event(o), t = i.length; t--;) n = i[t], e[n] = o[n];
               return e.target || (e.target = K), 3 === e.target.nodeType && (e.target = e.target.parentNode), s.filter ? s.filter(e, o) : e
          },
          special: {
               load: {
                    noBubble: !0
               },
               focus: {
                    trigger: function() {
                         if (this !== f() && this.focus) return this.focus(), !1
                    },
                    delegateType: "focusin"
               },
               blur: {
                    trigger: function() {
                         if (this === f() && this.blur) return this.blur(), !1
                    },
                    delegateType: "focusout"
               },
               click: {
                    trigger: function() {
                         if ("checkbox" === this.type && this.click && Q.nodeName(this, "input")) return this.click(), !1
                    },
                    _default: function(e) {
                         return Q.nodeName(e.target, "a")
                    }
               },
               beforeunload: {
                    postDispatch: function(e) {
                         void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                    }
               }
          },
          simulate: function(e, t, n, i) {
               var r = Q.extend(new Q.Event, n, {
                    type: e,
                    isSimulated: !0,
                    originalEvent: {}
               });
               i ? Q.event.trigger(r, null, t) : Q.event.dispatch.call(t, r), r.isDefaultPrevented() && n.preventDefault()
          }
     }, Q.removeEvent = function(e, t, n) {
          e.removeEventListener && e.removeEventListener(t, n, !1)
     }, Q.Event = function(e, t) {
          if (!(this instanceof Q.Event)) return new Q.Event(e, t);
          e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? c : l) : this.type = e, t && Q.extend(this, t), this.timeStamp = e && e.timeStamp || Q.now(), this[Q.expando] = !0
     }, Q.Event.prototype = {
          isDefaultPrevented: l,
          isPropagationStopped: l,
          isImmediatePropagationStopped: l,
          preventDefault: function() {
               var e = this.originalEvent;
               this.isDefaultPrevented = c, e && e.preventDefault && e.preventDefault()
          },
          stopPropagation: function() {
               var e = this.originalEvent;
               this.isPropagationStopped = c, e && e.stopPropagation && e.stopPropagation()
          },
          stopImmediatePropagation: function() {
               var e = this.originalEvent;
               this.isImmediatePropagationStopped = c, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
          }
     }, Q.each({
          mouseenter: "mouseover",
          mouseleave: "mouseout",
          pointerenter: "pointerover",
          pointerleave: "pointerout"
     }, function(e, t) {
          Q.event.special[e] = {
               delegateType: t,
               bindType: t,
               handle: function(e) {
                    var n, i = this,
                         r = e.relatedTarget,
                         o = e.handleObj;
                    return r && (r === i || Q.contains(i, r)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
               }
          }
     }), G.focusinBubbles || Q.each({
          focus: "focusin",
          blur: "focusout"
     }, function(e, t) {
          var n = function(e) {
               Q.event.simulate(t, e.target, Q.event.fix(e), !0)
          };
          Q.event.special[t] = {
               setup: function() {
                    var i = this.ownerDocument || this,
                         r = ge.access(i, t);
                    r || i.addEventListener(e, n, !0), ge.access(i, t, (r || 0) + 1)
               },
               teardown: function() {
                    var i = this.ownerDocument || this,
                         r = ge.access(i, t) - 1;
                    r ? ge.access(i, t, r) : (i.removeEventListener(e, n, !0), ge.remove(i, t))
               }
          }
     }), Q.fn.extend({
          on: function(e, t, n, i, r) {
               var o, s;
               if ("object" == typeof e) {
                    "string" != typeof t && (n = n || t, t = void 0);
                    for (s in e) this.on(s, t, n, e[s], r);
                    return this
               }
               if (null == n && null == i ? (i = t, n = t = void 0) : null == i && ("string" == typeof t ? (i = n, n = void 0) : (i = n, n = t, t = void 0)), !1 === i) i = l;
               else if (!i) return this;
               return 1 === r && (o = i, i = function(e) {
                    return Q().off(e), o.apply(this, arguments)
               }, i.guid = o.guid || (o.guid = Q.guid++)), this.each(function() {
                    Q.event.add(this, e, i, n, t)
               })
          },
          one: function(e, t, n, i) {
               return this.on(e, t, n, i, 1)
          },
          off: function(e, t, n) {
               var i, r;
               if (e && e.preventDefault && e.handleObj) return i = e.handleObj, Q(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
               if ("object" == typeof e) {
                    for (r in e) this.off(r, t, e[r]);
                    return this
               }
               return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = l), this.each(function() {
                    Q.event.remove(this, e, n, t)
               })
          },
          trigger: function(e, t) {
               return this.each(function() {
                    Q.event.trigger(e, t, this)
               })
          },
          triggerHandler: function(e, t) {
               var n = this[0];
               if (n) return Q.event.trigger(e, t, n, !0)
          }
     });
     var Ne = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
          Ce = /<([\w:]+)/,
          Oe = /<|&#?\w+;/,
          De = /<(?:script|style|link)/i,
          je = /checked\s*(?:[^=]|=\s*.checked.)/i,
          Ae = /^$|\/(?:java|ecma)script/i,
          Re = /^true\/(.*)/,
          Me = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
          Pe = {
               option: [1, "<select multiple='multiple'>", "</select>"],
               thead: [1, "<table>", "</table>"],
               col: [2, "<table><colgroup>", "</colgroup></table>"],
               tr: [2, "<table><tbody>", "</tbody></table>"],
               td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
               _default: [0, "", ""]
          };
     Pe.optgroup = Pe.option, Pe.tbody = Pe.tfoot = Pe.colgroup = Pe.caption = Pe.thead, Pe.th = Pe.td, Q.extend({
          clone: function(e, t, n) {
               var i, r, o, s, a = e.cloneNode(!0),
                    u = Q.contains(e.ownerDocument, e);
               if (!(G.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || Q.isXMLDoc(e)))
                    for (s = v(a), o = v(e), i = 0, r = o.length; i < r; i++) y(o[i], s[i]);
               if (t)
                    if (n)
                         for (o = o || v(e), s = s || v(a), i = 0, r = o.length; i < r; i++) m(o[i], s[i]);
                    else m(e, a);
               return s = v(a, "script"), s.length > 0 && g(s, !u && v(e, "script")), a
          },
          buildFragment: function(e, t, n, i) {
               for (var r, o, s, a, u, c, l = t.createDocumentFragment(), f = [], h = 0, d = e.length; h < d; h++)
                    if ((r = e[h]) || 0 === r)
                         if ("object" === Q.type(r)) Q.merge(f, r.nodeType ? [r] : r);
                         else if (Oe.test(r)) {
                    for (o = o || l.appendChild(t.createElement("div")), s = (Ce.exec(r) || ["", ""])[1].toLowerCase(), a = Pe[s] || Pe._default, o.innerHTML = a[1] + r.replace(Ne, "<$1></$2>") + a[2], c = a[0]; c--;) o = o.lastChild;
                    Q.merge(f, o.childNodes), o = l.firstChild, o.textContent = ""
               } else f.push(t.createTextNode(r));
               for (l.textContent = "", h = 0; r = f[h++];)
                    if ((!i || -1 === Q.inArray(r, i)) && (u = Q.contains(r.ownerDocument, r), o = v(l.appendChild(r), "script"), u && g(o), n))
                         for (c = 0; r = o[c++];) Ae.test(r.type || "") && n.push(r);
               return l
          },
          cleanData: function(e) {
               for (var t, n, i, r, o = Q.event.special, s = 0; void 0 !== (n = e[s]); s++) {
                    if (Q.acceptData(n) && (r = n[ge.expando]) && (t = ge.cache[r])) {
                         if (t.events)
                              for (i in t.events) o[i] ? Q.event.remove(n, i) : Q.removeEvent(n, i, t.handle);
                         ge.cache[r] && delete ge.cache[r]
                    }
                    delete me.cache[n[me.expando]]
               }
          }
     }), Q.fn.extend({
          text: function(e) {
               return pe(this, function(e) {
                    return void 0 === e ? Q.text(this) : this.empty().each(function() {
                         1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                    })
               }, null, e, arguments.length)
          },
          append: function() {
               return this.domManip(arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                         h(this, e).appendChild(e)
                    }
               })
          },
          prepend: function() {
               return this.domManip(arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                         var t = h(this, e);
                         t.insertBefore(e, t.firstChild)
                    }
               })
          },
          before: function() {
               return this.domManip(arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
               })
          },
          after: function() {
               return this.domManip(arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
               })
          },
          remove: function(e, t) {
               for (var n, i = e ? Q.filter(e, this) : this, r = 0; null != (n = i[r]); r++) t || 1 !== n.nodeType || Q.cleanData(v(n)), n.parentNode && (t && Q.contains(n.ownerDocument, n) && g(v(n, "script")), n.parentNode.removeChild(n));
               return this
          },
          empty: function() {
               for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (Q.cleanData(v(e, !1)), e.textContent = "");
               return this
          },
          clone: function(e, t) {
               return e = null != e && e, t = null == t ? e : t, this.map(function() {
                    return Q.clone(this, e, t)
               })
          },
          html: function(e) {
               return pe(this, function(e) {
                    var t = this[0] || {},
                         n = 0,
                         i = this.length;
                    if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                    if ("string" == typeof e && !De.test(e) && !Pe[(Ce.exec(e) || ["", ""])[1].toLowerCase()]) {
                         e = e.replace(Ne, "<$1></$2>");
                         try {
                              for (; n < i; n++) t = this[n] || {}, 1 === t.nodeType && (Q.cleanData(v(t, !1)), t.innerHTML = e);
                              t = 0
                         } catch (e) {}
                    }
                    t && this.empty().append(e)
               }, null, e, arguments.length)
          },
          replaceWith: function() {
               var e = arguments[0];
               return this.domManip(arguments, function(t) {
                    e = this.parentNode, Q.cleanData(v(this)), e && e.replaceChild(t, this)
               }), e && (e.length || e.nodeType) ? this : this.remove()
          },
          detach: function(e) {
               return this.remove(e, !0)
          },
          domManip: function(e, t) {
               e = V.apply([], e);
               var n, i, r, o, s, a, u = 0,
                    c = this.length,
                    l = this,
                    f = c - 1,
                    h = e[0],
                    g = Q.isFunction(h);
               if (g || c > 1 && "string" == typeof h && !G.checkClone && je.test(h)) return this.each(function(n) {
                    var i = l.eq(n);
                    g && (e[0] = h.call(this, n, i.html())), i.domManip(e, t)
               });
               if (c && (n = Q.buildFragment(e, this[0].ownerDocument, !1, this), i = n.firstChild, 1 === n.childNodes.length && (n = i), i)) {
                    for (r = Q.map(v(n, "script"), d), o = r.length; u < c; u++) s = n, u !== f && (s = Q.clone(s, !0, !0), o && Q.merge(r, v(s, "script"))), t.call(this[u], s, u);
                    if (o)
                         for (a = r[r.length - 1].ownerDocument, Q.map(r, p), u = 0; u < o; u++) s = r[u], Ae.test(s.type || "") && !ge.access(s, "globalEval") && Q.contains(a, s) && (s.src ? Q._evalUrl && Q._evalUrl(s.src) : Q.globalEval(s.textContent.replace(Me, "")))
               }
               return this
          }
     }), Q.each({
          appendTo: "append",
          prependTo: "prepend",
          insertBefore: "before",
          insertAfter: "after",
          replaceAll: "replaceWith"
     }, function(e, t) {
          Q.fn[e] = function(e) {
               for (var n, i = [], r = Q(e), o = r.length - 1, s = 0; s <= o; s++) n = s === o ? this : this.clone(!0), Q(r[s])[t](n), W.apply(i, n.get());
               return this.pushStack(i)
          }
     });
     var He, Ie = {},
          Le = /^margin/,
          qe = new RegExp("^(" + be + ")(?!px)[a-z%]+$", "i"),
          Fe = function(t) {
               return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : e.getComputedStyle(t, null)
          };
     ! function() {
          function t() {
               s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", s.innerHTML = "", r.appendChild(o);
               var t = e.getComputedStyle(s, null);
               n = "1%" !== t.top, i = "4px" === t.width, r.removeChild(o)
          }
          var n, i, r = K.documentElement,
               o = K.createElement("div"),
               s = K.createElement("div");
          s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", G.clearCloneStyle = "content-box" === s.style.backgroundClip, o.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", o.appendChild(s), e.getComputedStyle && Q.extend(G, {
               pixelPosition: function() {
                    return t(), n
               },
               boxSizingReliable: function() {
                    return null == i && t(), i
               },
               reliableMarginRight: function() {
                    var t, n = s.appendChild(K.createElement("div"));
                    return n.style.cssText = s.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", s.style.width = "1px", r.appendChild(o), t = !parseFloat(e.getComputedStyle(n, null).marginRight), r.removeChild(o), s.removeChild(n), t
               }
          }))
     }(), Q.swap = function(e, t, n, i) {
          var r, o, s = {};
          for (o in t) s[o] = e.style[o], e.style[o] = t[o];
          r = n.apply(e, i || []);
          for (o in t) e.style[o] = s[o];
          return r
     };
     var $e = /^(none|table(?!-c[ea]).+)/,
          Ue = new RegExp("^(" + be + ")(.*)$", "i"),
          Be = new RegExp("^([+-])=(" + be + ")", "i"),
          Ve = {
               position: "absolute",
               visibility: "hidden",
               display: "block"
          },
          We = {
               letterSpacing: "0",
               fontWeight: "400"
          },
          Xe = ["Webkit", "O", "Moz", "ms"];
     Q.extend({
          cssHooks: {
               opacity: {
                    get: function(e, t) {
                         if (t) {
                              var n = x(e, "opacity");
                              return "" === n ? "1" : n
                         }
                    }
               }
          },
          cssNumber: {
               columnCount: !0,
               fillOpacity: !0,
               flexGrow: !0,
               flexShrink: !0,
               fontWeight: !0,
               lineHeight: !0,
               opacity: !0,
               order: !0,
               orphans: !0,
               widows: !0,
               zIndex: !0,
               zoom: !0
          },
          cssProps: {
               float: "cssFloat"
          },
          style: function(e, t, n, i) {
               if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var r, o, s, a = Q.camelCase(t),
                         u = e.style;
                    if (t = Q.cssProps[a] || (Q.cssProps[a] = E(u, a)), s = Q.cssHooks[t] || Q.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (r = s.get(e, !1, i)) ? r : u[t];
                    o = typeof n, "string" === o && (r = Be.exec(n)) && (n = (r[1] + 1) * r[2] + parseFloat(Q.css(e, t)), o = "number"), null != n && n === n && ("number" !== o || Q.cssNumber[a] || (n += "px"), G.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, i)) || (u[t] = n))
               }
          },
          css: function(e, t, n, i) {
               var r, o, s, a = Q.camelCase(t);
               return t = Q.cssProps[a] || (Q.cssProps[a] = E(e.style, a)), s = Q.cssHooks[t] || Q.cssHooks[a], s && "get" in s && (r = s.get(e, !0, n)), void 0 === r && (r = x(e, t, i)), "normal" === r && t in We && (r = We[t]), "" === n || n ? (o = parseFloat(r), !0 === n || Q.isNumeric(o) ? o || 0 : r) : r
          }
     }), Q.each(["height", "width"], function(e, t) {
          Q.cssHooks[t] = {
               get: function(e, n, i) {
                    if (n) return $e.test(Q.css(e, "display")) && 0 === e.offsetWidth ? Q.swap(e, Ve, function() {
                         return k(e, t, i)
                    }) : k(e, t, i)
               },
               set: function(e, n, i) {
                    var r = i && Fe(e);
                    return T(e, n, i ? S(e, t, i, "border-box" === Q.css(e, "boxSizing", !1, r), r) : 0)
               }
          }
     }), Q.cssHooks.marginRight = _(G.reliableMarginRight, function(e, t) {
          if (t) return Q.swap(e, {
               display: "inline-block"
          }, x, [e, "marginRight"])
     }), Q.each({
          margin: "",
          padding: "",
          border: "Width"
     }, function(e, t) {
          Q.cssHooks[e + t] = {
               expand: function(n) {
                    for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[e + we[i] + t] = o[i] || o[i - 2] || o[0];
                    return r
               }
          }, Le.test(e) || (Q.cssHooks[e + t].set = T)
     }), Q.fn.extend({
          css: function(e, t) {
               return pe(this, function(e, t, n) {
                    var i, r, o = {},
                         s = 0;
                    if (Q.isArray(t)) {
                         for (i = Fe(e), r = t.length; s < r; s++) o[t[s]] = Q.css(e, t[s], !1, i);
                         return o
                    }
                    return void 0 !== n ? Q.style(e, t, n) : Q.css(e, t)
               }, e, t, arguments.length > 1)
          },
          show: function() {
               return N(this, !0)
          },
          hide: function() {
               return N(this)
          },
          toggle: function(e) {
               return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                    xe(this) ? Q(this).show() : Q(this).hide()
               })
          }
     }), Q.Tween = C, C.prototype = {
          constructor: C,
          init: function(e, t, n, i, r, o) {
               this.elem = e, this.prop = n, this.easing = r || "swing", this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (Q.cssNumber[n] ? "" : "px")
          },
          cur: function() {
               var e = C.propHooks[this.prop];
               return e && e.get ? e.get(this) : C.propHooks._default.get(this)
          },
          run: function(e) {
               var t, n = C.propHooks[this.prop];
               return this.options.duration ? this.pos = t = Q.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : C.propHooks._default.set(this), this
          }
     }, C.prototype.init.prototype = C.prototype, C.propHooks = {
          _default: {
               get: function(e) {
                    var t;
                    return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = Q.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
               },
               set: function(e) {
                    Q.fx.step[e.prop] ? Q.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[Q.cssProps[e.prop]] || Q.cssHooks[e.prop]) ? Q.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
               }
          }
     }, C.propHooks.scrollTop = C.propHooks.scrollLeft = {
          set: function(e) {
               e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
          }
     }, Q.easing = {
          linear: function(e) {
               return e
          },
          swing: function(e) {
               return .5 - Math.cos(e * Math.PI) / 2
          }
     }, Q.fx = C.prototype.init, Q.fx.step = {};
     var ze, Je, Ye = /^(?:toggle|show|hide)$/,
          Ge = new RegExp("^(?:([+-])=|)(" + be + ")([a-z%]*)$", "i"),
          Ke = /queueHooks$/,
          Qe = [A],
          Ze = {
               "*": [function(e, t) {
                    var n = this.createTween(e, t),
                         i = n.cur(),
                         r = Ge.exec(t),
                         o = r && r[3] || (Q.cssNumber[e] ? "" : "px"),
                         s = (Q.cssNumber[e] || "px" !== o && +i) && Ge.exec(Q.css(n.elem, e)),
                         a = 1,
                         u = 20;
                    if (s && s[3] !== o) {
                         o = o || s[3], r = r || [], s = +i || 1;
                         do {
                              a = a || ".5", s /= a, Q.style(n.elem, e, s + o)
                         } while (a !== (a = n.cur() / i) && 1 !== a && --u)
                    }
                    return r && (s = n.start = +s || +i || 0, n.unit = o, n.end = r[1] ? s + (r[1] + 1) * r[2] : +r[2]), n
               }]
          };
     Q.Animation = Q.extend(M, {
               tweener: function(e, t) {
                    Q.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                    for (var n, i = 0, r = e.length; i < r; i++) n = e[i], Ze[n] = Ze[n] || [], Ze[n].unshift(t)
               },
               prefilter: function(e, t) {
                    t ? Qe.unshift(e) : Qe.push(e)
               }
          }), Q.speed = function(e, t, n) {
               var i = e && "object" == typeof e ? Q.extend({}, e) : {
                    complete: n || !n && t || Q.isFunction(e) && e,
                    duration: e,
                    easing: n && t || t && !Q.isFunction(t) && t
               };
               return i.duration = Q.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in Q.fx.speeds ? Q.fx.speeds[i.duration] : Q.fx.speeds._default, null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                    Q.isFunction(i.old) && i.old.call(this), i.queue && Q.dequeue(this, i.queue)
               }, i
          }, Q.fn.extend({
               fadeTo: function(e, t, n, i) {
                    return this.filter(xe).css("opacity", 0).show().end().animate({
                         opacity: t
                    }, e, n, i)
               },
               animate: function(e, t, n, i) {
                    var r = Q.isEmptyObject(e),
                         o = Q.speed(t, n, i),
                         s = function() {
                              var t = M(this, Q.extend({}, e), o);
                              (r || ge.get(this, "finish")) && t.stop(!0)
                         };
                    return s.finish = s, r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
               },
               stop: function(e, t, n) {
                    var i = function(e) {
                         var t = e.stop;
                         delete e.stop, t(n)
                    };
                    return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function() {
                         var t = !0,
                              r = null != e && e + "queueHooks",
                              o = Q.timers,
                              s = ge.get(this);
                         if (r) s[r] && s[r].stop && i(s[r]);
                         else
                              for (r in s) s[r] && s[r].stop && Ke.test(r) && i(s[r]);
                         for (r = o.length; r--;) o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n), t = !1, o.splice(r, 1));
                         !t && n || Q.dequeue(this, e)
                    })
               },
               finish: function(e) {
                    return !1 !== e && (e = e || "fx"), this.each(function() {
                         var t, n = ge.get(this),
                              i = n[e + "queue"],
                              r = n[e + "queueHooks"],
                              o = Q.timers,
                              s = i ? i.length : 0;
                         for (n.finish = !0, Q.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                         for (t = 0; t < s; t++) i[t] && i[t].finish && i[t].finish.call(this);
                         delete n.finish
                    })
               }
          }),
          Q.each(["toggle", "show", "hide"], function(e, t) {
               var n = Q.fn[t];
               Q.fn[t] = function(e, i, r) {
                    return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(D(t, !0), e, i, r)
               }
          }), Q.each({
               slideDown: D("show"),
               slideUp: D("hide"),
               slideToggle: D("toggle"),
               fadeIn: {
                    opacity: "show"
               },
               fadeOut: {
                    opacity: "hide"
               },
               fadeToggle: {
                    opacity: "toggle"
               }
          }, function(e, t) {
               Q.fn[e] = function(e, n, i) {
                    return this.animate(t, e, n, i)
               }
          }), Q.timers = [], Q.fx.tick = function() {
               var e, t = 0,
                    n = Q.timers;
               for (ze = Q.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
               n.length || Q.fx.stop(), ze = void 0
          }, Q.fx.timer = function(e) {
               Q.timers.push(e), e() ? Q.fx.start() : Q.timers.pop()
          }, Q.fx.interval = 13, Q.fx.start = function() {
               Je || (Je = setInterval(Q.fx.tick, Q.fx.interval))
          }, Q.fx.stop = function() {
               clearInterval(Je), Je = null
          }, Q.fx.speeds = {
               slow: 600,
               fast: 200,
               _default: 400
          }, Q.fn.delay = function(e, t) {
               return e = Q.fx ? Q.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                    var i = setTimeout(t, e);
                    n.stop = function() {
                         clearTimeout(i)
                    }
               })
          },
          function() {
               var e = K.createElement("input"),
                    t = K.createElement("select"),
                    n = t.appendChild(K.createElement("option"));
               e.type = "checkbox", G.checkOn = "" !== e.value, G.optSelected = n.selected, t.disabled = !0, G.optDisabled = !n.disabled, e = K.createElement("input"), e.value = "t", e.type = "radio", G.radioValue = "t" === e.value
          }();
     var et, tt = Q.expr.attrHandle;
     Q.fn.extend({
          attr: function(e, t) {
               return pe(this, Q.attr, e, t, arguments.length > 1)
          },
          removeAttr: function(e) {
               return this.each(function() {
                    Q.removeAttr(this, e)
               })
          }
     }), Q.extend({
          attr: function(e, t, n) {
               var i, r, o = e.nodeType;
               if (e && 3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? Q.prop(e, t, n) : (1 === o && Q.isXMLDoc(e) || (t = t.toLowerCase(), i = Q.attrHooks[t] || (Q.expr.match.bool.test(t) ? et : void 0)), void 0 === n ? i && "get" in i && null !== (r = i.get(e, t)) ? r : (r = Q.find.attr(e, t), null == r ? void 0 : r) : null !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : void Q.removeAttr(e, t))
          },
          removeAttr: function(e, t) {
               var n, i, r = 0,
                    o = t && t.match(fe);
               if (o && 1 === e.nodeType)
                    for (; n = o[r++];) i = Q.propFix[n] || n, Q.expr.match.bool.test(n) && (e[i] = !1), e.removeAttribute(n)
          },
          attrHooks: {
               type: {
                    set: function(e, t) {
                         if (!G.radioValue && "radio" === t && Q.nodeName(e, "input")) {
                              var n = e.value;
                              return e.setAttribute("type", t), n && (e.value = n), t
                         }
                    }
               }
          }
     }), et = {
          set: function(e, t, n) {
               return !1 === t ? Q.removeAttr(e, n) : e.setAttribute(n, n), n
          }
     }, Q.each(Q.expr.match.bool.source.match(/\w+/g), function(e, t) {
          var n = tt[t] || Q.find.attr;
          tt[t] = function(e, t, i) {
               var r, o;
               return i || (o = tt[t], tt[t] = r, r = null != n(e, t, i) ? t.toLowerCase() : null, tt[t] = o), r
          }
     });
     var nt = /^(?:input|select|textarea|button)$/i;
     Q.fn.extend({
          prop: function(e, t) {
               return pe(this, Q.prop, e, t, arguments.length > 1)
          },
          removeProp: function(e) {
               return this.each(function() {
                    delete this[Q.propFix[e] || e]
               })
          }
     }), Q.extend({
          propFix: {
               for: "htmlFor",
               class: "className"
          },
          prop: function(e, t, n) {
               var i, r, o, s = e.nodeType;
               if (e && 3 !== s && 8 !== s && 2 !== s) return o = 1 !== s || !Q.isXMLDoc(e), o && (t = Q.propFix[t] || t, r = Q.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
          },
          propHooks: {
               tabIndex: {
                    get: function(e) {
                         return e.hasAttribute("tabindex") || nt.test(e.nodeName) || e.href ? e.tabIndex : -1
                    }
               }
          }
     }), G.optSelected || (Q.propHooks.selected = {
          get: function(e) {
               var t = e.parentNode;
               return t && t.parentNode && t.parentNode.selectedIndex, null
          }
     }), Q.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
          Q.propFix[this.toLowerCase()] = this
     });
     var it = /[\t\r\n\f]/g;
     Q.fn.extend({
          addClass: function(e) {
               var t, n, i, r, o, s, a = "string" == typeof e && e,
                    u = 0,
                    c = this.length;
               if (Q.isFunction(e)) return this.each(function(t) {
                    Q(this).addClass(e.call(this, t, this.className))
               });
               if (a)
                    for (t = (e || "").match(fe) || []; u < c; u++)
                         if (n = this[u], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(it, " ") : " ")) {
                              for (o = 0; r = t[o++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                              s = Q.trim(i), n.className !== s && (n.className = s)
                         } return this
          },
          removeClass: function(e) {
               var t, n, i, r, o, s, a = 0 === arguments.length || "string" == typeof e && e,
                    u = 0,
                    c = this.length;
               if (Q.isFunction(e)) return this.each(function(t) {
                    Q(this).removeClass(e.call(this, t, this.className))
               });
               if (a)
                    for (t = (e || "").match(fe) || []; u < c; u++)
                         if (n = this[u], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(it, " ") : "")) {
                              for (o = 0; r = t[o++];)
                                   for (; i.indexOf(" " + r + " ") >= 0;) i = i.replace(" " + r + " ", " ");
                              s = e ? Q.trim(i) : "", n.className !== s && (n.className = s)
                         } return this
          },
          toggleClass: function(e, t) {
               var n = typeof e;
               return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : Q.isFunction(e) ? this.each(function(n) {
                    Q(this).toggleClass(e.call(this, n, this.className, t), t)
               }) : this.each(function() {
                    if ("string" === n)
                         for (var t, i = 0, r = Q(this), o = e.match(fe) || []; t = o[i++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                    else "undefined" !== n && "boolean" !== n || (this.className && ge.set(this, "__className__", this.className), this.className = this.className || !1 === e ? "" : ge.get(this, "__className__") || "")
               })
          },
          hasClass: function(e) {
               for (var t = " " + e + " ", n = 0, i = this.length; n < i; n++)
                    if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(it, " ").indexOf(t) >= 0) return !0;
               return !1
          }
     });
     var rt = /\r/g;
     Q.fn.extend({
          val: function(e) {
               var t, n, i, r = this[0]; {
                    if (arguments.length) return i = Q.isFunction(e), this.each(function(n) {
                         var r;
                         1 === this.nodeType && (r = i ? e.call(this, n, Q(this).val()) : e, null == r ? r = "" : "number" == typeof r ? r += "" : Q.isArray(r) && (r = Q.map(r, function(e) {
                              return null == e ? "" : e + ""
                         })), (t = Q.valHooks[this.type] || Q.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
                    });
                    if (r) return (t = Q.valHooks[r.type] || Q.valHooks[r.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : (n = r.value, "string" == typeof n ? n.replace(rt, "") : null == n ? "" : n)
               }
          }
     }), Q.extend({
          valHooks: {
               option: {
                    get: function(e) {
                         var t = Q.find.attr(e, "value");
                         return null != t ? t : Q.trim(Q.text(e))
                    }
               },
               select: {
                    get: function(e) {
                         for (var t, n, i = e.options, r = e.selectedIndex, o = "select-one" === e.type || r < 0, s = o ? null : [], a = o ? r + 1 : i.length, u = r < 0 ? a : o ? r : 0; u < a; u++)
                              if (n = i[u], (n.selected || u === r) && (G.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !Q.nodeName(n.parentNode, "optgroup"))) {
                                   if (t = Q(n).val(), o) return t;
                                   s.push(t)
                              } return s
                    },
                    set: function(e, t) {
                         for (var n, i, r = e.options, o = Q.makeArray(t), s = r.length; s--;) i = r[s], (i.selected = Q.inArray(i.value, o) >= 0) && (n = !0);
                         return n || (e.selectedIndex = -1), o
                    }
               }
          }
     }), Q.each(["radio", "checkbox"], function() {
          Q.valHooks[this] = {
               set: function(e, t) {
                    if (Q.isArray(t)) return e.checked = Q.inArray(Q(e).val(), t) >= 0
               }
          }, G.checkOn || (Q.valHooks[this].get = function(e) {
               return null === e.getAttribute("value") ? "on" : e.value
          })
     }), Q.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
          Q.fn[t] = function(e, n) {
               return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
          }
     }), Q.fn.extend({
          hover: function(e, t) {
               return this.mouseenter(e).mouseleave(t || e)
          },
          bind: function(e, t, n) {
               return this.on(e, null, t, n)
          },
          unbind: function(e, t) {
               return this.off(e, null, t)
          },
          delegate: function(e, t, n, i) {
               return this.on(t, e, n, i)
          },
          undelegate: function(e, t, n) {
               return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
          }
     });
     var ot = Q.now(),
          st = /\?/;
     Q.parseJSON = function(e) {
          return JSON.parse(e + "")
     }, Q.parseXML = function(e) {
          var t, n;
          if (!e || "string" != typeof e) return null;
          try {
               n = new DOMParser, t = n.parseFromString(e, "text/xml")
          } catch (e) {
               t = void 0
          }
          return t && !t.getElementsByTagName("parsererror").length || Q.error("Invalid XML: " + e), t
     };
     var at = /#.*$/,
          ut = /([?&])_=[^&]*/,
          ct = /^(.*?):[ \t]*([^\r\n]*)$/gm,
          lt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
          ft = /^(?:GET|HEAD)$/,
          ht = /^\/\//,
          dt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
          pt = {},
          gt = {},
          mt = "*/".concat("*"),
          vt = e.location.href,
          yt = dt.exec(vt.toLowerCase()) || [];
     Q.extend({
          active: 0,
          lastModified: {},
          etag: {},
          ajaxSettings: {
               url: vt,
               type: "GET",
               isLocal: lt.test(yt[1]),
               global: !0,
               processData: !0,
               async: !0,
               contentType: "application/x-www-form-urlencoded; charset=UTF-8",
               accepts: {
                    "*": mt,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
               },
               contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
               },
               responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
               },
               converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": Q.parseJSON,
                    "text xml": Q.parseXML
               },
               flatOptions: {
                    url: !0,
                    context: !0
               }
          },
          ajaxSetup: function(e, t) {
               return t ? I(I(e, Q.ajaxSettings), t) : I(Q.ajaxSettings, e)
          },
          ajaxPrefilter: P(pt),
          ajaxTransport: P(gt),
          ajax: function(e, t) {
               function n(e, t, n, s) {
                    var u, l, v, y, w, _ = t;
                    2 !== b && (b = 2, a && clearTimeout(a), i = void 0, o = s || "", x.readyState = e > 0 ? 4 : 0, u = e >= 200 && e < 300 || 304 === e, n && (y = L(f, x, n)), y = q(f, y, x, u), u ? (f.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (Q.lastModified[r] = w), (w = x.getResponseHeader("etag")) && (Q.etag[r] = w)), 204 === e || "HEAD" === f.type ? _ = "nocontent" : 304 === e ? _ = "notmodified" : (_ = y.state, l = y.data, v = y.error, u = !v)) : (v = _, !e && _ || (_ = "error", e < 0 && (e = 0))), x.status = e, x.statusText = (t || _) + "", u ? p.resolveWith(h, [l, _, x]) : p.rejectWith(h, [x, _, v]), x.statusCode(m), m = void 0, c && d.trigger(u ? "ajaxSuccess" : "ajaxError", [x, f, u ? l : v]), g.fireWith(h, [x, _]), c && (d.trigger("ajaxComplete", [x, f]), --Q.active || Q.event.trigger("ajaxStop")))
               }
               "object" == typeof e && (t = e, e = void 0), t = t || {};
               var i, r, o, s, a, u, c, l, f = Q.ajaxSetup({}, t),
                    h = f.context || f,
                    d = f.context && (h.nodeType || h.jquery) ? Q(h) : Q.event,
                    p = Q.Deferred(),
                    g = Q.Callbacks("once memory"),
                    m = f.statusCode || {},
                    v = {},
                    y = {},
                    b = 0,
                    w = "canceled",
                    x = {
                         readyState: 0,
                         getResponseHeader: function(e) {
                              var t;
                              if (2 === b) {
                                   if (!s)
                                        for (s = {}; t = ct.exec(o);) s[t[1].toLowerCase()] = t[2];
                                   t = s[e.toLowerCase()]
                              }
                              return null == t ? null : t
                         },
                         getAllResponseHeaders: function() {
                              return 2 === b ? o : null
                         },
                         setRequestHeader: function(e, t) {
                              var n = e.toLowerCase();
                              return b || (e = y[n] = y[n] || e, v[e] = t), this
                         },
                         overrideMimeType: function(e) {
                              return b || (f.mimeType = e), this
                         },
                         statusCode: function(e) {
                              var t;
                              if (e)
                                   if (b < 2)
                                        for (t in e) m[t] = [m[t], e[t]];
                                   else x.always(e[x.status]);
                              return this
                         },
                         abort: function(e) {
                              var t = e || w;
                              return i && i.abort(t), n(0, t), this
                         }
                    };
               if (p.promise(x).complete = g.add, x.success = x.done, x.error = x.fail, f.url = ((e || f.url || vt) + "").replace(at, "").replace(ht, yt[1] + "//"), f.type = t.method || t.type || f.method || f.type, f.dataTypes = Q.trim(f.dataType || "*").toLowerCase().match(fe) || [""], null == f.crossDomain && (u = dt.exec(f.url.toLowerCase()), f.crossDomain = !(!u || u[1] === yt[1] && u[2] === yt[2] && (u[3] || ("http:" === u[1] ? "80" : "443")) === (yt[3] || ("http:" === yt[1] ? "80" : "443")))), f.data && f.processData && "string" != typeof f.data && (f.data = Q.param(f.data, f.traditional)), H(pt, f, t, x), 2 === b) return x;
               c = Q.event && f.global, c && 0 == Q.active++ && Q.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !ft.test(f.type), r = f.url, f.hasContent || (f.data && (r = f.url += (st.test(r) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (f.url = ut.test(r) ? r.replace(ut, "$1_=" + ot++) : r + (st.test(r) ? "&" : "?") + "_=" + ot++)), f.ifModified && (Q.lastModified[r] && x.setRequestHeader("If-Modified-Since", Q.lastModified[r]), Q.etag[r] && x.setRequestHeader("If-None-Match", Q.etag[r])), (f.data && f.hasContent && !1 !== f.contentType || t.contentType) && x.setRequestHeader("Content-Type", f.contentType), x.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + mt + "; q=0.01" : "") : f.accepts["*"]);
               for (l in f.headers) x.setRequestHeader(l, f.headers[l]);
               if (f.beforeSend && (!1 === f.beforeSend.call(h, x, f) || 2 === b)) return x.abort();
               w = "abort";
               for (l in {
                         success: 1,
                         error: 1,
                         complete: 1
                    }) x[l](f[l]);
               if (i = H(gt, f, t, x)) {
                    x.readyState = 1, c && d.trigger("ajaxSend", [x, f]), f.async && f.timeout > 0 && (a = setTimeout(function() {
                         x.abort("timeout")
                    }, f.timeout));
                    try {
                         b = 1, i.send(v, n)
                    } catch (e) {
                         if (!(b < 2)) throw e;
                         n(-1, e)
                    }
               } else n(-1, "No Transport");
               return x
          },
          getJSON: function(e, t, n) {
               return Q.get(e, t, n, "json")
          },
          getScript: function(e, t) {
               return Q.get(e, void 0, t, "script")
          }
     }), Q.each(["get", "post"], function(e, t) {
          Q[t] = function(e, n, i, r) {
               return Q.isFunction(n) && (r = r || i, i = n, n = void 0), Q.ajax({
                    url: e,
                    type: t,
                    dataType: r,
                    data: n,
                    success: i
               })
          }
     }), Q._evalUrl = function(e) {
          return Q.ajax({
               url: e,
               type: "GET",
               dataType: "script",
               async: !1,
               global: !1,
               throws: !0
          })
     }, Q.fn.extend({
          wrapAll: function(e) {
               var t;
               return Q.isFunction(e) ? this.each(function(t) {
                    Q(this).wrapAll(e.call(this, t))
               }) : (this[0] && (t = Q(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                    return e
               }).append(this)), this)
          },
          wrapInner: function(e) {
               return Q.isFunction(e) ? this.each(function(t) {
                    Q(this).wrapInner(e.call(this, t))
               }) : this.each(function() {
                    var t = Q(this),
                         n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
               })
          },
          wrap: function(e) {
               var t = Q.isFunction(e);
               return this.each(function(n) {
                    Q(this).wrapAll(t ? e.call(this, n) : e)
               })
          },
          unwrap: function() {
               return this.parent().each(function() {
                    Q.nodeName(this, "body") || Q(this).replaceWith(this.childNodes)
               }).end()
          }
     }), Q.expr.filters.hidden = function(e) {
          return e.offsetWidth <= 0 && e.offsetHeight <= 0
     }, Q.expr.filters.visible = function(e) {
          return !Q.expr.filters.hidden(e)
     };
     var bt = /%20/g,
          wt = /\[\]$/,
          xt = /\r?\n/g,
          _t = /^(?:submit|button|image|reset|file)$/i,
          Et = /^(?:input|select|textarea|keygen)/i;
     Q.param = function(e, t) {
          var n, i = [],
               r = function(e, t) {
                    t = Q.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
               };
          if (void 0 === t && (t = Q.ajaxSettings && Q.ajaxSettings.traditional), Q.isArray(e) || e.jquery && !Q.isPlainObject(e)) Q.each(e, function() {
               r(this.name, this.value)
          });
          else
               for (n in e) F(n, e[n], t, r);
          return i.join("&").replace(bt, "+")
     }, Q.fn.extend({
          serialize: function() {
               return Q.param(this.serializeArray())
          },
          serializeArray: function() {
               return this.map(function() {
                    var e = Q.prop(this, "elements");
                    return e ? Q.makeArray(e) : this
               }).filter(function() {
                    var e = this.type;
                    return this.name && !Q(this).is(":disabled") && Et.test(this.nodeName) && !_t.test(e) && (this.checked || !_e.test(e))
               }).map(function(e, t) {
                    var n = Q(this).val();
                    return null == n ? null : Q.isArray(n) ? Q.map(n, function(e) {
                         return {
                              name: t.name,
                              value: e.replace(xt, "\r\n")
                         }
                    }) : {
                         name: t.name,
                         value: n.replace(xt, "\r\n")
                    }
               }).get()
          }
     }), Q.ajaxSettings.xhr = function() {
          try {
               return new XMLHttpRequest
          } catch (e) {}
     };
     var Tt = 0,
          St = {},
          kt = {
               0: 200,
               1223: 204
          },
          Nt = Q.ajaxSettings.xhr();
     e.attachEvent && e.attachEvent("onunload", function() {
          for (var e in St) St[e]()
     }), G.cors = !!Nt && "withCredentials" in Nt, G.ajax = Nt = !!Nt, Q.ajaxTransport(function(e) {
          var t;
          if (G.cors || Nt && !e.crossDomain) return {
               send: function(n, i) {
                    var r, o = e.xhr(),
                         s = ++Tt;
                    if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                         for (r in e.xhrFields) o[r] = e.xhrFields[r];
                    e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                    for (r in n) o.setRequestHeader(r, n[r]);
                    t = function(e) {
                         return function() {
                              t && (delete St[s], t = o.onload = o.onerror = null, "abort" === e ? o.abort() : "error" === e ? i(o.status, o.statusText) : i(kt[o.status] || o.status, o.statusText, "string" == typeof o.responseText ? {
                                   text: o.responseText
                              } : void 0, o.getAllResponseHeaders()))
                         }
                    }, o.onload = t(), o.onerror = t("error"), t = St[s] = t("abort");
                    try {
                         o.send(e.hasContent && e.data || null)
                    } catch (e) {
                         if (t) throw e
                    }
               },
               abort: function() {
                    t && t()
               }
          }
     }), Q.ajaxSetup({
          accepts: {
               script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
          },
          contents: {
               script: /(?:java|ecma)script/
          },
          converters: {
               "text script": function(e) {
                    return Q.globalEval(e), e
               }
          }
     }), Q.ajaxPrefilter("script", function(e) {
          void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
     }), Q.ajaxTransport("script", function(e) {
          if (e.crossDomain) {
               var t, n;
               return {
                    send: function(i, r) {
                         t = Q("<script>").prop({
                              async: !0,
                              charset: e.scriptCharset,
                              src: e.url
                         }).on("load error", n = function(e) {
                              t.remove(), n = null, e && r("error" === e.type ? 404 : 200, e.type)
                         }), K.head.appendChild(t[0])
                    },
                    abort: function() {
                         n && n()
                    }
               }
          }
     });
     var Ct = [],
          Ot = /(=)\?(?=&|$)|\?\?/;
     Q.ajaxSetup({
          jsonp: "callback",
          jsonpCallback: function() {
               var e = Ct.pop() || Q.expando + "_" + ot++;
               return this[e] = !0, e
          }
     }), Q.ajaxPrefilter("json jsonp", function(t, n, i) {
          var r, o, s, a = !1 !== t.jsonp && (Ot.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && Ot.test(t.data) && "data");
          if (a || "jsonp" === t.dataTypes[0]) return r = t.jsonpCallback = Q.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Ot, "$1" + r) : !1 !== t.jsonp && (t.url += (st.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function() {
               return s || Q.error(r + " was not called"), s[0]
          }, t.dataTypes[0] = "json", o = e[r], e[r] = function() {
               s = arguments
          }, i.always(function() {
               e[r] = o, t[r] && (t.jsonpCallback = n.jsonpCallback, Ct.push(r)), s && Q.isFunction(o) && o(s[0]), s = o = void 0
          }), "script"
     }), Q.parseHTML = function(e, t, n) {
          if (!e || "string" != typeof e) return null;
          "boolean" == typeof t && (n = t, t = !1), t = t || K;
          var i = oe.exec(e),
               r = !n && [];
          return i ? [t.createElement(i[1])] : (i = Q.buildFragment([e], t, r), r && r.length && Q(r).remove(), Q.merge([], i.childNodes))
     };
     var Dt = Q.fn.load;
     Q.fn.load = function(e, t, n) {
          if ("string" != typeof e && Dt) return Dt.apply(this, arguments);
          var i, r, o, s = this,
               a = e.indexOf(" ");
          return a >= 0 && (i = Q.trim(e.slice(a)), e = e.slice(0, a)), Q.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), s.length > 0 && Q.ajax({
               url: e,
               type: r,
               dataType: "html",
               data: t
          }).done(function(e) {
               o = arguments, s.html(i ? Q("<div>").append(Q.parseHTML(e)).find(i) : e)
          }).complete(n && function(e, t) {
               s.each(n, o || [e.responseText, t, e])
          }), this
     }, Q.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
          Q.fn[t] = function(e) {
               return this.on(t, e)
          }
     }), Q.expr.filters.animated = function(e) {
          return Q.grep(Q.timers, function(t) {
               return e === t.elem
          }).length
     };
     var jt = e.document.documentElement;
     Q.offset = {
          setOffset: function(e, t, n) {
               var i, r, o, s, a, u, c, l = Q.css(e, "position"),
                    f = Q(e),
                    h = {};
               "static" === l && (e.style.position = "relative"), a = f.offset(), o = Q.css(e, "top"), u = Q.css(e, "left"), c = ("absolute" === l || "fixed" === l) && (o + u).indexOf("auto") > -1, c ? (i = f.position(), s = i.top, r = i.left) : (s = parseFloat(o) || 0, r = parseFloat(u) || 0), Q.isFunction(t) && (t = t.call(e, n, a)), null != t.top && (h.top = t.top - a.top + s), null != t.left && (h.left = t.left - a.left + r), "using" in t ? t.using.call(e, h) : f.css(h)
          }
     }, Q.fn.extend({
          offset: function(e) {
               if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                    Q.offset.setOffset(this, e, t)
               });
               var t, n, i = this[0],
                    r = {
                         top: 0,
                         left: 0
                    },
                    o = i && i.ownerDocument;
               if (o) return t = o.documentElement, Q.contains(t, i) ? (void 0 !== i.getBoundingClientRect && (r = i.getBoundingClientRect()), n = $(o), {
                    top: r.top + n.pageYOffset - t.clientTop,
                    left: r.left + n.pageXOffset - t.clientLeft
               }) : r
          },
          position: function() {
               if (this[0]) {
                    var e, t, n = this[0],
                         i = {
                              top: 0,
                              left: 0
                         };
                    return "fixed" === Q.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), Q.nodeName(e[0], "html") || (i = e.offset()), i.top += Q.css(e[0], "borderTopWidth", !0), i.left += Q.css(e[0], "borderLeftWidth", !0)), {
                         top: t.top - i.top - Q.css(n, "marginTop", !0),
                         left: t.left - i.left - Q.css(n, "marginLeft", !0)
                    }
               }
          },
          offsetParent: function() {
               return this.map(function() {
                    for (var e = this.offsetParent || jt; e && !Q.nodeName(e, "html") && "static" === Q.css(e, "position");) e = e.offsetParent;
                    return e || jt
               })
          }
     }), Q.each({
          scrollLeft: "pageXOffset",
          scrollTop: "pageYOffset"
     }, function(t, n) {
          var i = "pageYOffset" === n;
          Q.fn[t] = function(r) {
               return pe(this, function(t, r, o) {
                    var s = $(t);
                    if (void 0 === o) return s ? s[n] : t[r];
                    s ? s.scrollTo(i ? e.pageXOffset : o, i ? o : e.pageYOffset) : t[r] = o
               }, t, r, arguments.length, null)
          }
     }), Q.each(["top", "left"], function(e, t) {
          Q.cssHooks[t] = _(G.pixelPosition, function(e, n) {
               if (n) return n = x(e, t), qe.test(n) ? Q(e).position()[t] + "px" : n
          })
     }), Q.each({
          Height: "height",
          Width: "width"
     }, function(e, t) {
          Q.each({
               padding: "inner" + e,
               content: t,
               "": "outer" + e
          }, function(n, i) {
               Q.fn[i] = function(i, r) {
                    var o = arguments.length && (n || "boolean" != typeof i),
                         s = n || (!0 === i || !0 === r ? "margin" : "border");
                    return pe(this, function(t, n, i) {
                         var r;
                         return Q.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === i ? Q.css(t, n, s) : Q.style(t, n, i, s)
                    }, t, o ? i : void 0, o, null)
               }
          })
     }), Q.fn.size = function() {
          return this.length
     }, Q.fn.andSelf = Q.fn.addBack, "function" == typeof define && define.amd && define("foundation/lib/jquery/2.1.4", [], function() {
          return Q.noConflict(!0)
     });
     var At = e.jQuery,
          Rt = e.$;
     return Q.noConflict = function(t) {
          return e.$ === Q && (e.$ = Rt), t && e.jQuery === Q && (e.jQuery = At), Q
     }, void 0 === t && (e.jQuery = e.$ = Q), Q
}), define("foundation/consolefix", ["jquery/nyt"], function(e) {
          "use strict";
          for (var t, n = ["assert", "clear", "count", "debug", "dir", "dirxml", "error", "exception", "group", "groupCollapsed", "groupEnd", "info", "log", "markTimeline", "profile", "profileEnd", "table", "time", "timeEnd", "timeStamp", "trace", "warn"], i = n.length, r = window.console = window.console || {}; i--;) t = n[i], r[t] || (r[t] = e.noop)
     }), define("foundation/cookies", ["jquery/nyt"], function(e) {
          "use strict";
          var t = {
                    expires: 365,
                    domain: ".nytimes.com",
                    path: "/",
                    secure: !1
               },
               n = function(e) {
                    var t, n, i, r = document.cookie.split("; ");
                    for (t = 0, n = r.length; t < n; ++t)
                         if (i = r[t].split("="), i.shift() === e) return i.join("=");
                    return null
               },
               i = function(n, i, r) {
                    var o, s;
                    r = e.extend({}, t, r), null === i && (r.expires = -1), e.isNumeric(r.expires) && (o = r.expires, s = new Date, s.setDate(s.getDate() + o), r.expires = s), document.cookie = [n, "=", i, "; expires=" + r.expires.toUTCString(), "; path=" + r.path, "; domain=" + r.domain, r.secure ? "; secure" : ""].join("")
               };
          return {
               readCookie: n,
               writeCookie: i,
               deleteCookie: function(e, t) {
                    null !== n(e) && i(e, null, t)
               },
               cookiesEnabled: function() {
                    var e = "NYTCookiesEnabled",
                         t = new Date,
                         n = !1;
                    return t.setTime(t.getTime() + 1e4), document.cookie = e + "=test; expires=" + t.toGMTString(), n = -1 !== document.cookie.indexOf(e), n && (t = new Date, t.setTime(t.getTime() - 1e4), document.cookie = e + "=test; expires=" + t.toGMTString()), n
               }
          }
     }), define("foundation/browser", [], function() {
          "use strict";
          return {
               getDocument: function() {
                    return document
               },
               getWindow: function() {
                    return window
               }
          }
     }), define("foundation/framebuster", ["foundation/cookies", "foundation/browser"], function(e, t) {
          "use strict";
          var n, i = t.getDocument().referrer,
               r = t.getWindow().top,
               o = t.getWindow().location,
               s = /^https?:\/\/(?:[^?\/]+\.)?(?:localhost|(?:nytimes|nytlabs|insightexpress|stumbleupon|starbucks)\.com|(?:newsdev|nyt)\.net|(?:nytimes3xbfgragh|graylady3jvrrxbe)\.onion)(?:\:[1-9][0-9]*)?\//;
          return window.self === r || o.pathname.match(/^\/portals/) && "www.nytimes.com" === o.hostname || i.match(s) || r.location.href.match(s) || (n = new Date, n.setTime(n.getTime() + 6e4), e.writeCookie({
               name: "FramesetReferrer",
               value: i,
               options: {
                    expires: new Date(n)
               }
          }), r.location.replace(o.pathname)), s
     }), define("foundation/hosts", [], function() {
          "use strict";
          var e = 0 === window.location.protocol.indexOf("https"),
               t = "//www.nytimes.com";
          return {
               ADDCollectionHost: "https://www.nytimes.com",
               ADXHost: "https://www.nytimes.com",
               communityApiHost: "https://www.nytimes.com",
               DUHost: "https://www.nytimes.com",
               fabrikConnectHost: "wss://core.fabrik.nytimes.com",
               fabrikEndpointsHost: "https://core.fabrik.nytimes.com",
               followApiHost: "http://www.nytimes.com",
               marketsApiHost: "https://markets.on.nytimes.com",
               messagingHost: "https://messaging-notifications.api.nytimes.com",
               myaccountHost: "https://myaccount.nytimes.com",
               personalizationHost: "https://www.nytimes.com",
               personasApiHost: "https://ugc-personas.api.nytimes.com",
               profileImageHost: "https://s3.amazonaws.com/pimage.timespeople.nytimes.com",
               readingListApiHost: "https://reading-list.api.nytimes.com",
               s1Host: "https://s1.nyt.com",
               shortenHost: "https://www.nytimes.com",
               staticHost: "https://static01.nyt.com",
               tagxHost: "https://tagx.nytimes.com",
               tokenHost: "https://www.nytimes.com",
               userInfoHost: "https://www.nytimes.com",
               videoApiHost: "https://www.nytimes.com",
               weatherApiHost: "https://content.api.nytimes.com",
               personalizationAppspotHost: "https://nyt-per-prd.appspot.com",
               contentApiHost: "https://content.api.nytimes.com",
               static01Host: "https://static01.nytimes.com",
               helixApiHost: "https://mes-user.api.nytimes.com",
               wwwDomain: t.replace(/^(https?:)?\/\//, ""),
               image: e ? "https://static.nytimes.com" : "http://static01.nyt.com",
               js: e ? "https://static.nytimes.com" : "http://static01.nyt.com",
               css: e ? "https://static.nytimes.com" : "http://static01.nyt.com",
               json: e ? "https://static.nytimes.com" : "http://json8.nytimes.com",
               www: t,
               international: "//international.nytimes.com",
               adx: "//www.nytimes.com",
               myaccount: "https://myaccount.nytimes.com",
               meterSvc: "//meter-svc.nytimes.com",
               profileImage: "//s3.amazonaws.com/pimage.timespeople.nytimes.com",
               tagx: "https://tagx.nytimes.com",
               msg: "http://www.nytimes.com",
               msgSocket: "http://core.fabrik.nytimes.com",
               community: "//www.nytimes.com",
               du: "http://www.nytimes.com",
               comscorePvc: "//www.nytimes.com",
               s1: "//s1.nyt.com",
               mobileWeb: "//mobile.nytimes.com",
               search: "//query.nytimes.com",
               add: "http://www.nytimes.com",
               addNew: "https://www.nytimes.com/svc/collections/v1/publish/www.nytimes.com/",
               realestate: "https://service-nytimes.gabriels.net",
               realestateBasicSearch: "https://static-nytimes-production-gabriels.akamaized.net/JSONSuggestService.aspx",
               realestateSmartSearch: "https://service-nytimes.gabriels.net/v1.1/SmartSearchResults.aspx",
               realestateResults: "http://realestate.nytimes.com",
               realestatePostAdLink: "https://nytimesads.gtspayments.com/",
               realestateJsonHost: "https://nyt-services.gabriels.net",
               realestateGtsHost: "https://gts-nytimes.gabrielstechnology.com",
               realestateSimilarListings: "https://nyt-services.gabriels.net/Listings/v1.0/NYT.Listings.svc/getSimilarListings",
               followApi: "http://www.nytimes.com/svc/pushmobile/follow/v0",
               followableList: "http://s1.nyt.com/messaging/follow",
               dfpHost: "/29390238/NYT/",
               scoopTool: "https://cms.em.nytimes.com",
               personalization: "http://www.nytimes.com",
               addSearchHost: "http://search-add-api.prd.use1.nytimes.com",
               readingListHost: "http://reading-list.api.nytimes.com",
               communityPersonasHost: "https://ugc-personas.api.nytimes.com",
               recommendationApiHost: "https://per.api.nytimes.com",
               smsGatewayHost: "https://www.nytimes.com",
               emailApiHost: "https://mes.api.nytimes.com"
          }
     }),
     function() {
          function e(e) {
               function t(t, n, i, r, o, s) {
                    for (; o >= 0 && o < s; o += e) {
                         var a = r ? r[o] : o;
                         i = n(i, t[a], a, t)
                    }
                    return i
               }
               return function(n, i, r, o) {
                    i = b(i, o, 4);
                    var s = !k(n) && y.keys(n),
                         a = (s || n).length,
                         u = e > 0 ? 0 : a - 1;
                    return arguments.length < 3 && (r = n[s ? s[u] : u], u += e), t(n, i, r, s, u, a)
               }
          }

          function t(e) {
               return function(t, n, i) {
                    n = w(n, i);
                    for (var r = S(t), o = e > 0 ? 0 : r - 1; o >= 0 && o < r; o += e)
                         if (n(t[o], o, t)) return o;
                    return -1
               }
          }

          function n(e, t, n) {
               return function(i, r, o) {
                    var s = 0,
                         a = S(i);
                    if ("number" == typeof o) e > 0 ? s = o >= 0 ? o : Math.max(o + a, s) : a = o >= 0 ? Math.min(o + 1, a) : o + a + 1;
                    else if (n && o && a) return o = n(i, r), i[o] === r ? o : -1;
                    if (r !== r) return o = t(l.call(i, s, a), y.isNaN), o >= 0 ? o + s : -1;
                    for (o = e > 0 ? s : a - 1; o >= 0 && o < a; o += e)
                         if (i[o] === r) return o;
                    return -1
               }
          }

          function i(e, t) {
               var n = j.length,
                    i = e.constructor,
                    r = y.isFunction(i) && i.prototype || a,
                    o = "constructor";
               for (y.has(e, o) && !y.contains(t, o) && t.push(o); n--;)(o = j[n]) in e && e[o] !== r[o] && !y.contains(t, o) && t.push(o)
          }
          var r = this,
               o = r._,
               s = Array.prototype,
               a = Object.prototype,
               u = Function.prototype,
               c = s.push,
               l = s.slice,
               f = a.toString,
               h = a.hasOwnProperty,
               d = Array.isArray,
               p = Object.keys,
               g = u.bind,
               m = Object.create,
               v = function() {},
               y = function(e) {
                    return e instanceof y ? e : this instanceof y ? void(this._wrapped = e) : new y(e)
               };
          "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = y), exports._ = y) : r._ = y, y.VERSION = "1.8.3";
          var b = function(e, t, n) {
                    if (void 0 === t) return e;
                    switch (null == n ? 3 : n) {
                         case 1:
                              return function(n) {
                                   return e.call(t, n)
                              };
                         case 2:
                              return function(n, i) {
                                   return e.call(t, n, i)
                              };
                         case 3:
                              return function(n, i, r) {
                                   return e.call(t, n, i, r)
                              };
                         case 4:
                              return function(n, i, r, o) {
                                   return e.call(t, n, i, r, o)
                              }
                    }
                    return function() {
                         return e.apply(t, arguments)
                    }
               },
               w = function(e, t, n) {
                    return null == e ? y.identity : y.isFunction(e) ? b(e, t, n) : y.isObject(e) ? y.matcher(e) : y.property(e)
               };
          y.iteratee = function(e, t) {
               return w(e, t, 1 / 0)
          };
          var x = function(e, t) {
                    return function(n) {
                         var i = arguments.length;
                         if (i < 2 || null == n) return n;
                         for (var r = 1; r < i; r++)
                              for (var o = arguments[r], s = e(o), a = s.length, u = 0; u < a; u++) {
                                   var c = s[u];
                                   t && void 0 !== n[c] || (n[c] = o[c])
                              }
                         return n
                    }
               },
               _ = function(e) {
                    if (!y.isObject(e)) return {};
                    if (m) return m(e);
                    v.prototype = e;
                    var t = new v;
                    return v.prototype = null, t
               },
               E = function(e) {
                    return function(t) {
                         return null == t ? void 0 : t[e]
                    }
               },
               T = Math.pow(2, 53) - 1,
               S = E("length"),
               k = function(e) {
                    var t = S(e);
                    return "number" == typeof t && t >= 0 && t <= T
               };
          y.each = y.forEach = function(e, t, n) {
               t = b(t, n);
               var i, r;
               if (k(e))
                    for (i = 0, r = e.length; i < r; i++) t(e[i], i, e);
               else {
                    var o = y.keys(e);
                    for (i = 0, r = o.length; i < r; i++) t(e[o[i]], o[i], e)
               }
               return e
          }, y.map = y.collect = function(e, t, n) {
               t = w(t, n);
               for (var i = !k(e) && y.keys(e), r = (i || e).length, o = Array(r), s = 0; s < r; s++) {
                    var a = i ? i[s] : s;
                    o[s] = t(e[a], a, e)
               }
               return o
          }, y.reduce = y.foldl = y.inject = e(1), y.reduceRight = y.foldr = e(-1), y.find = y.detect = function(e, t, n) {
               var i;
               if (void 0 !== (i = k(e) ? y.findIndex(e, t, n) : y.findKey(e, t, n)) && -1 !== i) return e[i]
          }, y.filter = y.select = function(e, t, n) {
               var i = [];
               return t = w(t, n), y.each(e, function(e, n, r) {
                    t(e, n, r) && i.push(e)
               }), i
          }, y.reject = function(e, t, n) {
               return y.filter(e, y.negate(w(t)), n)
          }, y.every = y.all = function(e, t, n) {
               t = w(t, n);
               for (var i = !k(e) && y.keys(e), r = (i || e).length, o = 0; o < r; o++) {
                    var s = i ? i[o] : o;
                    if (!t(e[s], s, e)) return !1
               }
               return !0
          }, y.some = y.any = function(e, t, n) {
               t = w(t, n);
               for (var i = !k(e) && y.keys(e), r = (i || e).length, o = 0; o < r; o++) {
                    var s = i ? i[o] : o;
                    if (t(e[s], s, e)) return !0
               }
               return !1
          }, y.contains = y.includes = y.include = function(e, t, n, i) {
               return k(e) || (e = y.values(e)), ("number" != typeof n || i) && (n = 0), y.indexOf(e, t, n) >= 0
          }, y.invoke = function(e, t) {
               var n = l.call(arguments, 2),
                    i = y.isFunction(t);
               return y.map(e, function(e) {
                    var r = i ? t : e[t];
                    return null == r ? r : r.apply(e, n)
               })
          }, y.pluck = function(e, t) {
               return y.map(e, y.property(t))
          }, y.where = function(e, t) {
               return y.filter(e, y.matcher(t))
          }, y.findWhere = function(e, t) {
               return y.find(e, y.matcher(t))
          }, y.max = function(e, t, n) {
               var i, r, o = -1 / 0,
                    s = -1 / 0;
               if (null == t && null != e) {
                    e = k(e) ? e : y.values(e);
                    for (var a = 0, u = e.length; a < u; a++)(i = e[a]) > o && (o = i)
               } else t = w(t, n), y.each(e, function(e, n, i) {
                    ((r = t(e, n, i)) > s || r === -1 / 0 && o === -1 / 0) && (o = e, s = r)
               });
               return o
          }, y.min = function(e, t, n) {
               var i, r, o = 1 / 0,
                    s = 1 / 0;
               if (null == t && null != e) {
                    e = k(e) ? e : y.values(e);
                    for (var a = 0, u = e.length; a < u; a++)(i = e[a]) < o && (o = i)
               } else t = w(t, n), y.each(e, function(e, n, i) {
                    ((r = t(e, n, i)) < s || r === 1 / 0 && o === 1 / 0) && (o = e, s = r)
               });
               return o
          }, y.shuffle = function(e) {
               for (var t, n = k(e) ? e : y.values(e), i = n.length, r = Array(i), o = 0; o < i; o++) t = y.random(0, o), t !== o && (r[o] = r[t]), r[t] = n[o];
               return r
          }, y.sample = function(e, t, n) {
               return null == t || n ? (k(e) || (e = y.values(e)), e[y.random(e.length - 1)]) : y.shuffle(e).slice(0, Math.max(0, t))
          }, y.sortBy = function(e, t, n) {
               return t = w(t, n), y.pluck(y.map(e, function(e, n, i) {
                    return {
                         value: e,
                         index: n,
                         criteria: t(e, n, i)
                    }
               }).sort(function(e, t) {
                    var n = e.criteria,
                         i = t.criteria;
                    if (n !== i) {
                         if (n > i || void 0 === n) return 1;
                         if (n < i || void 0 === i) return -1
                    }
                    return e.index - t.index
               }), "value")
          };
          var N = function(e) {
               return function(t, n, i) {
                    var r = {};
                    return n = w(n, i), y.each(t, function(i, o) {
                         var s = n(i, o, t);
                         e(r, i, s)
                    }), r
               }
          };
          y.groupBy = N(function(e, t, n) {
               y.has(e, n) ? e[n].push(t) : e[n] = [t]
          }), y.indexBy = N(function(e, t, n) {
               e[n] = t
          }), y.countBy = N(function(e, t, n) {
               y.has(e, n) ? e[n]++ : e[n] = 1
          }), y.toArray = function(e) {
               return e ? y.isArray(e) ? l.call(e) : k(e) ? y.map(e, y.identity) : y.values(e) : []
          }, y.size = function(e) {
               return null == e ? 0 : k(e) ? e.length : y.keys(e).length
          }, y.partition = function(e, t, n) {
               t = w(t, n);
               var i = [],
                    r = [];
               return y.each(e, function(e, n, o) {
                    (t(e, n, o) ? i : r).push(e)
               }), [i, r]
          }, y.first = y.head = y.take = function(e, t, n) {
               if (null != e) return null == t || n ? e[0] : y.initial(e, e.length - t)
          }, y.initial = function(e, t, n) {
               return l.call(e, 0, Math.max(0, e.length - (null == t || n ? 1 : t)))
          }, y.last = function(e, t, n) {
               if (null != e) return null == t || n ? e[e.length - 1] : y.rest(e, Math.max(0, e.length - t))
          }, y.rest = y.tail = y.drop = function(e, t, n) {
               return l.call(e, null == t || n ? 1 : t)
          }, y.compact = function(e) {
               return y.filter(e, y.identity)
          };
          var C = function(e, t, n, i) {
               for (var r = [], o = 0, s = i || 0, a = S(e); s < a; s++) {
                    var u = e[s];
                    if (k(u) && (y.isArray(u) || y.isArguments(u))) {
                         t || (u = C(u, t, n));
                         var c = 0,
                              l = u.length;
                         for (r.length += l; c < l;) r[o++] = u[c++]
                    } else n || (r[o++] = u)
               }
               return r
          };
          y.flatten = function(e, t) {
               return C(e, t, !1)
          }, y.without = function(e) {
               return y.difference(e, l.call(arguments, 1))
          }, y.uniq = y.unique = function(e, t, n, i) {
               y.isBoolean(t) || (i = n, n = t, t = !1), null != n && (n = w(n, i));
               for (var r = [], o = [], s = 0, a = S(e); s < a; s++) {
                    var u = e[s],
                         c = n ? n(u, s, e) : u;
                    t ? (s && o === c || r.push(u), o = c) : n ? y.contains(o, c) || (o.push(c), r.push(u)) : y.contains(r, u) || r.push(u)
               }
               return r
          }, y.union = function() {
               return y.uniq(C(arguments, !0, !0))
          }, y.intersection = function(e) {
               for (var t = [], n = arguments.length, i = 0, r = S(e); i < r; i++) {
                    var o = e[i];
                    if (!y.contains(t, o)) {
                         for (var s = 1; s < n && y.contains(arguments[s], o); s++);
                         s === n && t.push(o)
                    }
               }
               return t
          }, y.difference = function(e) {
               var t = C(arguments, !0, !0, 1);
               return y.filter(e, function(e) {
                    return !y.contains(t, e)
               })
          }, y.zip = function() {
               return y.unzip(arguments)
          }, y.unzip = function(e) {
               for (var t = e && y.max(e, S).length || 0, n = Array(t), i = 0; i < t; i++) n[i] = y.pluck(e, i);
               return n
          }, y.object = function(e, t) {
               for (var n = {}, i = 0, r = S(e); i < r; i++) t ? n[e[i]] = t[i] : n[e[i][0]] = e[i][1];
               return n
          }, y.findIndex = t(1), y.findLastIndex = t(-1), y.sortedIndex = function(e, t, n, i) {
               n = w(n, i, 1);
               for (var r = n(t), o = 0, s = S(e); o < s;) {
                    var a = Math.floor((o + s) / 2);
                    n(e[a]) < r ? o = a + 1 : s = a
               }
               return o
          }, y.indexOf = n(1, y.findIndex, y.sortedIndex), y.lastIndexOf = n(-1, y.findLastIndex), y.range = function(e, t, n) {
               null == t && (t = e || 0, e = 0), n = n || 1;
               for (var i = Math.max(Math.ceil((t - e) / n), 0), r = Array(i), o = 0; o < i; o++, e += n) r[o] = e;
               return r
          };
          var O = function(e, t, n, i, r) {
               if (!(i instanceof t)) return e.apply(n, r);
               var o = _(e.prototype),
                    s = e.apply(o, r);
               return y.isObject(s) ? s : o
          };
          y.bind = function(e, t) {
               if (g && e.bind === g) return g.apply(e, l.call(arguments, 1));
               if (!y.isFunction(e)) throw new TypeError("Bind must be called on a function");
               var n = l.call(arguments, 2),
                    i = function() {
                         return O(e, i, t, this, n.concat(l.call(arguments)))
                    };
               return i
          }, y.partial = function(e) {
               var t = l.call(arguments, 1),
                    n = function() {
                         for (var i = 0, r = t.length, o = Array(r), s = 0; s < r; s++) o[s] = t[s] === y ? arguments[i++] : t[s];
                         for (; i < arguments.length;) o.push(arguments[i++]);
                         return O(e, n, this, this, o)
                    };
               return n
          }, y.bindAll = function(e) {
               var t, n, i = arguments.length;
               if (i <= 1) throw new Error("bindAll must be passed function names");
               for (t = 1; t < i; t++) n = arguments[t], e[n] = y.bind(e[n], e);
               return e
          }, y.memoize = function(e, t) {
               var n = function(i) {
                    var r = n.cache,
                         o = "" + (t ? t.apply(this, arguments) : i);
                    return y.has(r, o) || (r[o] = e.apply(this, arguments)), r[o]
               };
               return n.cache = {}, n
          }, y.delay = function(e, t) {
               var n = l.call(arguments, 2);
               return setTimeout(function() {
                    return e.apply(null, n)
               }, t)
          }, y.defer = y.partial(y.delay, y, 1), y.throttle = function(e, t, n) {
               var i, r, o, s = null,
                    a = 0;
               n || (n = {});
               var u = function() {
                    a = !1 === n.leading ? 0 : y.now(), s = null, o = e.apply(i, r), s || (i = r = null)
               };
               return function() {
                    var c = y.now();
                    a || !1 !== n.leading || (a = c);
                    var l = t - (c - a);
                    return i = this, r = arguments, l <= 0 || l > t ? (s && (clearTimeout(s), s = null), a = c, o = e.apply(i, r), s || (i = r = null)) : s || !1 === n.trailing || (s = setTimeout(u, l)), o
               }
          }, y.debounce = function(e, t, n) {
               var i, r, o, s, a, u = function() {
                    var c = y.now() - s;
                    c < t && c >= 0 ? i = setTimeout(u, t - c) : (i = null, n || (a = e.apply(o, r), i || (o = r = null)))
               };
               return function() {
                    o = this, r = arguments, s = y.now();
                    var c = n && !i;
                    return i || (i = setTimeout(u, t)), c && (a = e.apply(o, r), o = r = null), a
               }
          }, y.wrap = function(e, t) {
               return y.partial(t, e)
          }, y.negate = function(e) {
               return function() {
                    return !e.apply(this, arguments)
               }
          }, y.compose = function() {
               var e = arguments,
                    t = e.length - 1;
               return function() {
                    for (var n = t, i = e[t].apply(this, arguments); n--;) i = e[n].call(this, i);
                    return i
               }
          }, y.after = function(e, t) {
               return function() {
                    if (--e < 1) return t.apply(this, arguments)
               }
          }, y.before = function(e, t) {
               var n;
               return function() {
                    return --e > 0 && (n = t.apply(this, arguments)), e <= 1 && (t = null), n
               }
          }, y.once = y.partial(y.before, 2);
          var D = !{
                    toString: null
               }.propertyIsEnumerable("toString"),
               j = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
          y.keys = function(e) {
               if (!y.isObject(e)) return [];
               if (p) return p(e);
               var t = [];
               for (var n in e) y.has(e, n) && t.push(n);
               return D && i(e, t), t
          }, y.allKeys = function(e) {
               if (!y.isObject(e)) return [];
               var t = [];
               for (var n in e) t.push(n);
               return D && i(e, t), t
          }, y.values = function(e) {
               for (var t = y.keys(e), n = t.length, i = Array(n), r = 0; r < n; r++) i[r] = e[t[r]];
               return i
          }, y.mapObject = function(e, t, n) {
               t = w(t, n);
               for (var i, r = y.keys(e), o = r.length, s = {}, a = 0; a < o; a++) i = r[a], s[i] = t(e[i], i, e);
               return s
          }, y.pairs = function(e) {
               for (var t = y.keys(e), n = t.length, i = Array(n), r = 0; r < n; r++) i[r] = [t[r], e[t[r]]];
               return i
          }, y.invert = function(e) {
               for (var t = {}, n = y.keys(e), i = 0, r = n.length; i < r; i++) t[e[n[i]]] = n[i];
               return t
          }, y.functions = y.methods = function(e) {
               var t = [];
               for (var n in e) y.isFunction(e[n]) && t.push(n);
               return t.sort()
          }, y.extend = x(y.allKeys), y.extendOwn = y.assign = x(y.keys), y.findKey = function(e, t, n) {
               t = w(t, n);
               for (var i, r = y.keys(e), o = 0, s = r.length; o < s; o++)
                    if (i = r[o], t(e[i], i, e)) return i
          }, y.pick = function(e, t, n) {
               var i, r, o = {},
                    s = e;
               if (null == s) return o;
               y.isFunction(t) ? (r = y.allKeys(s), i = b(t, n)) : (r = C(arguments, !1, !1, 1), i = function(e, t, n) {
                    return t in n
               }, s = Object(s));
               for (var a = 0, u = r.length; a < u; a++) {
                    var c = r[a],
                         l = s[c];
                    i(l, c, s) && (o[c] = l)
               }
               return o
          }, y.omit = function(e, t, n) {
               if (y.isFunction(t)) t = y.negate(t);
               else {
                    var i = y.map(C(arguments, !1, !1, 1), String);
                    t = function(e, t) {
                         return !y.contains(i, t)
                    }
               }
               return y.pick(e, t, n)
          }, y.defaults = x(y.allKeys, !0), y.create = function(e, t) {
               var n = _(e);
               return t && y.extendOwn(n, t), n
          }, y.clone = function(e) {
               return y.isObject(e) ? y.isArray(e) ? e.slice() : y.extend({}, e) : e
          }, y.tap = function(e, t) {
               return t(e), e
          }, y.isMatch = function(e, t) {
               var n = y.keys(t),
                    i = n.length;
               if (null == e) return !i;
               for (var r = Object(e), o = 0; o < i; o++) {
                    var s = n[o];
                    if (t[s] !== r[s] || !(s in r)) return !1
               }
               return !0
          };
          var A = function(e, t, n, i) {
               if (e === t) return 0 !== e || 1 / e == 1 / t;
               if (null == e || null == t) return e === t;
               e instanceof y && (e = e._wrapped), t instanceof y && (t = t._wrapped);
               var r = f.call(e);
               if (r !== f.call(t)) return !1;
               switch (r) {
                    case "[object RegExp]":
                    case "[object String]":
                         return "" + e == "" + t;
                    case "[object Number]":
                         return +e != +e ? +t != +t : 0 == +e ? 1 / +e == 1 / t : +e == +t;
                    case "[object Date]":
                    case "[object Boolean]":
                         return +e == +t
               }
               var o = "[object Array]" === r;
               if (!o) {
                    if ("object" != typeof e || "object" != typeof t) return !1;
                    var s = e.constructor,
                         a = t.constructor;
                    if (s !== a && !(y.isFunction(s) && s instanceof s && y.isFunction(a) && a instanceof a) && "constructor" in e && "constructor" in t) return !1
               }
               n = n || [], i = i || [];
               for (var u = n.length; u--;)
                    if (n[u] === e) return i[u] === t;
               if (n.push(e), i.push(t), o) {
                    if ((u = e.length) !== t.length) return !1;
                    for (; u--;)
                         if (!A(e[u], t[u], n, i)) return !1
               } else {
                    var c, l = y.keys(e);
                    if (u = l.length, y.keys(t).length !== u) return !1;
                    for (; u--;)
                         if (c = l[u], !y.has(t, c) || !A(e[c], t[c], n, i)) return !1
               }
               return n.pop(), i.pop(), !0
          };
          y.isEqual = function(e, t) {
               return A(e, t)
          }, y.isEmpty = function(e) {
               return null == e || (k(e) && (y.isArray(e) || y.isString(e) || y.isArguments(e)) ? 0 === e.length : 0 === y.keys(e).length)
          }, y.isElement = function(e) {
               return !(!e || 1 !== e.nodeType)
          }, y.isArray = d || function(e) {
               return "[object Array]" === f.call(e)
          }, y.isObject = function(e) {
               var t = typeof e;
               return "function" === t || "object" === t && !!e
          }, y.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function(e) {
               y["is" + e] = function(t) {
                    return f.call(t) === "[object " + e + "]"
               }
          }), y.isArguments(arguments) || (y.isArguments = function(e) {
               return y.has(e, "callee")
          }), "function" != typeof /./ && "object" != typeof Int8Array && (y.isFunction = function(e) {
               return "function" == typeof e || !1
          }), y.isFinite = function(e) {
               return isFinite(e) && !isNaN(parseFloat(e))
          }, y.isNaN = function(e) {
               return y.isNumber(e) && e !== +e
          }, y.isBoolean = function(e) {
               return !0 === e || !1 === e || "[object Boolean]" === f.call(e)
          }, y.isNull = function(e) {
               return null === e
          }, y.isUndefined = function(e) {
               return void 0 === e
          }, y.has = function(e, t) {
               return null != e && h.call(e, t)
          }, y.noConflict = function() {
               return r._ = o, this
          }, y.identity = function(e) {
               return e
          }, y.constant = function(e) {
               return function() {
                    return e
               }
          }, y.noop = function() {}, y.property = E, y.propertyOf = function(e) {
               return null == e ? function() {} : function(t) {
                    return e[t]
               }
          }, y.matcher = y.matches = function(e) {
               return e = y.extendOwn({}, e),
                    function(t) {
                         return y.isMatch(t, e)
                    }
          }, y.times = function(e, t, n) {
               var i = Array(Math.max(0, e));
               t = b(t, n, 1);
               for (var r = 0; r < e; r++) i[r] = t(r);
               return i
          }, y.random = function(e, t) {
               return null == t && (t = e, e = 0), e + Math.floor(Math.random() * (t - e + 1))
          }, y.now = Date.now || function() {
               return (new Date).getTime()
          };
          var R = {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#x27;",
                    "`": "&#x60;"
               },
               M = y.invert(R),
               P = function(e) {
                    var t = function(t) {
                              return e[t]
                         },
                         n = "(?:" + y.keys(e).join("|") + ")",
                         i = RegExp(n),
                         r = RegExp(n, "g");
                    return function(e) {
                         return e = null == e ? "" : "" + e, i.test(e) ? e.replace(r, t) : e
                    }
               };
          y.escape = P(R), y.unescape = P(M), y.result = function(e, t, n) {
               var i = null == e ? void 0 : e[t];
               return void 0 === i && (i = n), y.isFunction(i) ? i.call(e) : i
          };
          var H = 0;
          y.uniqueId = function(e) {
               var t = ++H + "";
               return e ? e + t : t
          }, y.templateSettings = {
               evaluate: /<%([\s\S]+?)%>/g,
               interpolate: /<%=([\s\S]+?)%>/g,
               escape: /<%-([\s\S]+?)%>/g
          };
          var I = /(.)^/,
               L = {
                    "'": "'",
                    "\\": "\\",
                    "\r": "r",
                    "\n": "n",
                    "\u2028": "u2028",
                    "\u2029": "u2029"
               },
               q = /\\|'|\r|\n|\u2028|\u2029/g,
               F = function(e) {
                    return "\\" + L[e]
               };
          y.template = function(e, t, n) {
               !t && n && (t = n), t = y.defaults({}, t, y.templateSettings);
               var i = RegExp([(t.escape || I).source, (t.interpolate || I).source, (t.evaluate || I).source].join("|") + "|$", "g"),
                    r = 0,
                    o = "__p+='";
               e.replace(i, function(t, n, i, s, a) {
                    return o += e.slice(r, a).replace(q, F), r = a + t.length, n ? o += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : i ? o += "'+\n((__t=(" + i + "))==null?'':__t)+\n'" : s && (o += "';\n" + s + "\n__p+='"), t
               }), o += "';\n", t.variable || (o = "with(obj||{}){\n" + o + "}\n"), o = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + o + "return __p;\n";
               try {
                    var s = new Function(t.variable || "obj", "_", o)
               } catch (e) {
                    throw e.source = o, e
               }
               var a = function(e) {
                    return s.call(this, e, y)
               };
               return a.source = "function(" + (t.variable || "obj") + "){\n" + o + "}", a
          }, y.chain = function(e) {
               var t = y(e);
               return t._chain = !0, t
          };
          var $ = function(e, t) {
               return e._chain ? y(t).chain() : t
          };
          y.mixin = function(e) {
               y.each(y.functions(e), function(t) {
                    var n = y[t] = e[t];
                    y.prototype[t] = function() {
                         var e = [this._wrapped];
                         return c.apply(e, arguments), $(this, n.apply(y, e))
                    }
               })
          }, y.mixin(y), y.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(e) {
               var t = s[e];
               y.prototype[e] = function() {
                    var n = this._wrapped;
                    return t.apply(n, arguments), "shift" !== e && "splice" !== e || 0 !== n.length || delete n[0], $(this, n)
               }
          }), y.each(["concat", "join", "slice"], function(e) {
               var t = s[e];
               y.prototype[e] = function() {
                    return $(this, t.apply(this._wrapped, arguments))
               }
          }), y.prototype.value = function() {
               return this._wrapped
          }, y.prototype.valueOf = y.prototype.toJSON = y.prototype.value, y.prototype.toString = function() {
               return "" + this._wrapped
          }, "function" == typeof define && define.amd && define("foundation/lib/underscore/1.8.3", [], function() {
               return y
          })
     }.call(this),
     function(e, t) {
          if ("function" == typeof define && define.amd) define("foundation/lib/backbone/1.1.2", ["underscore/nyt", "jquery/nyt", "exports"], function(n, i, r) {
               e.Backbone = t(e, r, n, i)
          });
          else if ("undefined" != typeof exports) {
               var n = require("underscore/nyt");
               t(e, exports, n)
          } else e.Backbone = t(e, {}, e._, e.jQuery || e.Zepto || e.ender || e.$)
     }(this, function(e, t, n, i) {
          var r = e.Backbone,
               o = [],
               s = o.slice;
          t.VERSION = "1.1.2", t.$ = i, t.noConflict = function() {
               return e.Backbone = r, this
          }, t.emulateHTTP = !1, t.emulateJSON = !1;
          var a = t.Events = {
                    on: function(e, t, n) {
                         return c(this, "on", e, [t, n]) && t ? (this._events || (this._events = {}), (this._events[e] || (this._events[e] = [])).push({
                              callback: t,
                              context: n,
                              ctx: n || this
                         }), this) : this
                    },
                    once: function(e, t, i) {
                         if (!c(this, "once", e, [t, i]) || !t) return this;
                         var r = this,
                              o = n.once(function() {
                                   r.off(e, o), t.apply(this, arguments)
                              });
                         return o._callback = t, this.on(e, o, i)
                    },
                    off: function(e, t, i) {
                         var r, o, s, a, u, l, f, h;
                         if (!this._events || !c(this, "off", e, [t, i])) return this;
                         if (!e && !t && !i) return this._events = void 0, this;
                         for (a = e ? [e] : n.keys(this._events), u = 0, l = a.length; u < l; u++)
                              if (e = a[u], s = this._events[e]) {
                                   if (this._events[e] = r = [], t || i)
                                        for (f = 0, h = s.length; f < h; f++) o = s[f], (t && t !== o.callback && t !== o.callback._callback || i && i !== o.context) && r.push(o);
                                   r.length || delete this._events[e]
                              } return this
                    },
                    trigger: function(e) {
                         if (!this._events) return this;
                         var t = s.call(arguments, 1);
                         if (!c(this, "trigger", e, t)) return this;
                         var n = this._events[e],
                              i = this._events.all;
                         return n && l(n, t), i && l(i, arguments), this
                    },
                    stopListening: function(e, t, i) {
                         var r = this._listeningTo;
                         if (!r) return this;
                         var o = !t && !i;
                         i || "object" != typeof t || (i = this), e && ((r = {})[e._listenId] = e);
                         for (var s in r) e = r[s], e.off(t, i, this), (o || n.isEmpty(e._events)) && delete this._listeningTo[s];
                         return this
                    }
               },
               u = /\s+/,
               c = function(e, t, n, i) {
                    if (!n) return !0;
                    if ("object" == typeof n) {
                         for (var r in n) e[t].apply(e, [r, n[r]].concat(i));
                         return !1
                    }
                    if (u.test(n)) {
                         for (var o = n.split(u), s = 0, a = o.length; s < a; s++) e[t].apply(e, [o[s]].concat(i));
                         return !1
                    }
                    return !0
               },
               l = function(e, t) {
                    var n, i = -1,
                         r = e.length,
                         o = t[0],
                         s = t[1],
                         a = t[2];
                    switch (t.length) {
                         case 0:
                              for (; ++i < r;)(n = e[i]).callback.call(n.ctx);
                              return;
                         case 1:
                              for (; ++i < r;)(n = e[i]).callback.call(n.ctx, o);
                              return;
                         case 2:
                              for (; ++i < r;)(n = e[i]).callback.call(n.ctx, o, s);
                              return;
                         case 3:
                              for (; ++i < r;)(n = e[i]).callback.call(n.ctx, o, s, a);
                              return;
                         default:
                              for (; ++i < r;)(n = e[i]).callback.apply(n.ctx, t);
                              return
                    }
               },
               f = {
                    listenTo: "on",
                    listenToOnce: "once"
               };
          n.each(f, function(e, t) {
               a[t] = function(t, i, r) {
                    return (this._listeningTo || (this._listeningTo = {}))[t._listenId || (t._listenId = n.uniqueId("l"))] = t, r || "object" != typeof i || (r = this), t[e](i, r, this), this
               }
          }), a.bind = a.on, a.unbind = a.off, n.extend(t, a);
          var h = t.Model = function(e, t) {
               var i = e || {};
               t || (t = {}), this.cid = n.uniqueId("c"), this.attributes = {}, t.collection && (this.collection = t.collection), t.parse && (i = this.parse(i, t) || {}), i = n.defaults({}, i, n.result(this, "defaults")), this.set(i, t), this.changed = {}, this.initialize.apply(this, arguments)
          };
          n.extend(h.prototype, a, {
               changed: null,
               validationError: null,
               idAttribute: "id",
               initialize: function() {},
               toJSON: function(e) {
                    return n.clone(this.attributes)
               },
               sync: function() {
                    return t.sync.apply(this, arguments)
               },
               get: function(e) {
                    return this.attributes[e]
               },
               escape: function(e) {
                    return n.escape(this.get(e))
               },
               has: function(e) {
                    return null != this.get(e)
               },
               set: function(e, t, i) {
                    var r, o, s, a, u, c, l, f;
                    if (null == e) return this;
                    if ("object" == typeof e ? (o = e, i = t) : (o = {})[e] = t, i || (i = {}), !this._validate(o, i)) return !1;
                    s = i.unset, u = i.silent, a = [], c = this._changing, this._changing = !0, c || (this._previousAttributes = n.clone(this.attributes), this.changed = {}), f = this.attributes, l = this._previousAttributes, this.idAttribute in o && (this.id = o[this.idAttribute]);
                    for (r in o) t = o[r], n.isEqual(f[r], t) || a.push(r), n.isEqual(l[r], t) ? delete this.changed[r] : this.changed[r] = t, s ? delete f[r] : f[r] = t;
                    if (!u) {
                         a.length && (this._pending = i);
                         for (var h = 0, d = a.length; h < d; h++) this.trigger("change:" + a[h], this, f[a[h]], i)
                    }
                    if (c) return this;
                    if (!u)
                         for (; this._pending;) i = this._pending, this._pending = !1, this.trigger("change", this, i);
                    return this._pending = !1, this._changing = !1, this
               },
               unset: function(e, t) {
                    return this.set(e, void 0, n.extend({}, t, {
                         unset: !0
                    }))
               },
               clear: function(e) {
                    var t = {};
                    for (var i in this.attributes) t[i] = void 0;
                    return this.set(t, n.extend({}, e, {
                         unset: !0
                    }))
               },
               hasChanged: function(e) {
                    return null == e ? !n.isEmpty(this.changed) : n.has(this.changed, e)
               },
               changedAttributes: function(e) {
                    if (!e) return !!this.hasChanged() && n.clone(this.changed);
                    var t, i = !1,
                         r = this._changing ? this._previousAttributes : this.attributes;
                    for (var o in e) n.isEqual(r[o], t = e[o]) || ((i || (i = {}))[o] = t);
                    return i
               },
               previous: function(e) {
                    return null != e && this._previousAttributes ? this._previousAttributes[e] : null
               },
               previousAttributes: function() {
                    return n.clone(this._previousAttributes)
               },
               fetch: function(e) {
                    e = e ? n.clone(e) : {}, void 0 === e.parse && (e.parse = !0);
                    var t = this,
                         i = e.success;
                    return e.success = function(n) {
                         if (!t.set(t.parse(n, e), e)) return !1;
                         i && i(t, n, e), t.trigger("sync", t, n, e)
                    }, I(this, e), this.sync("read", this, e)
               },
               save: function(e, t, i) {
                    var r, o, s, a = this.attributes;
                    if (null == e || "object" == typeof e ? (r = e, i = t) : (r = {})[e] = t, i = n.extend({
                              validate: !0
                         }, i), r && !i.wait) {
                         if (!this.set(r, i)) return !1
                    } else if (!this._validate(r, i)) return !1;
                    r && i.wait && (this.attributes = n.extend({}, a, r)), void 0 === i.parse && (i.parse = !0);
                    var u = this,
                         c = i.success;
                    return i.success = function(e) {
                         u.attributes = a;
                         var t = u.parse(e, i);
                         if (i.wait && (t = n.extend(r || {}, t)), n.isObject(t) && !u.set(t, i)) return !1;
                         c && c(u, e, i), u.trigger("sync", u, e, i)
                    }, I(this, i), o = this.isNew() ? "create" : i.patch ? "patch" : "update", "patch" === o && (i.attrs = r), s = this.sync(o, this, i), r && i.wait && (this.attributes = a), s
               },
               destroy: function(e) {
                    e = e ? n.clone(e) : {};
                    var t = this,
                         i = e.success,
                         r = function() {
                              t.trigger("destroy", t, t.collection, e)
                         };
                    if (e.success = function(n) {
                              (e.wait || t.isNew()) && r(), i && i(t, n, e), t.isNew() || t.trigger("sync", t, n, e)
                         }, this.isNew()) return e.success(), !1;
                    I(this, e);
                    var o = this.sync("delete", this, e);
                    return e.wait || r(), o
               },
               url: function() {
                    var e = n.result(this, "urlRoot") || n.result(this.collection, "url") || H();
                    return this.isNew() ? e : e.replace(/([^\/])$/, "$1/") + encodeURIComponent(this.id)
               },
               parse: function(e, t) {
                    return e
               },
               clone: function() {
                    return new this.constructor(this.attributes)
               },
               isNew: function() {
                    return !this.has(this.idAttribute)
               },
               isValid: function(e) {
                    return this._validate({}, n.extend(e || {}, {
                         validate: !0
                    }))
               },
               _validate: function(e, t) {
                    if (!t.validate || !this.validate) return !0;
                    e = n.extend({}, this.attributes, e);
                    var i = this.validationError = this.validate(e, t) || null;
                    return !i || (this.trigger("invalid", this, i, n.extend(t, {
                         validationError: i
                    })), !1)
               }
          });
          var d = ["keys", "values", "pairs", "invert", "pick", "omit"];
          n.each(d, function(e) {
               h.prototype[e] = function() {
                    var t = s.call(arguments);
                    return t.unshift(this.attributes), n[e].apply(n, t)
               }
          });
          var p = t.Collection = function(e, t) {
                    t || (t = {}), t.model && (this.model = t.model), void 0 !== t.comparator && (this.comparator = t.comparator), this._reset(), this.initialize.apply(this, arguments), e && this.reset(e, n.extend({
                         silent: !0
                    }, t))
               },
               g = {
                    add: !0,
                    remove: !0,
                    merge: !0
               },
               m = {
                    add: !0,
                    remove: !1
               };
          n.extend(p.prototype, a, {
               model: h,
               initialize: function() {},
               toJSON: function(e) {
                    return this.map(function(t) {
                         return t.toJSON(e)
                    })
               },
               sync: function() {
                    return t.sync.apply(this, arguments)
               },
               add: function(e, t) {
                    return this.set(e, n.extend({
                         merge: !1
                    }, t, m))
               },
               remove: function(e, t) {
                    var i = !n.isArray(e);
                    e = i ? [e] : n.clone(e), t || (t = {});
                    var r, o, s, a;
                    for (r = 0, o = e.length; r < o; r++)(a = e[r] = this.get(e[r])) && (delete this._byId[a.id], delete this._byId[a.cid], s = this.indexOf(a), this.models.splice(s, 1), this.length--, t.silent || (t.index = s, a.trigger("remove", a, this, t)), this._removeReference(a, t));
                    return i ? e[0] : e
               },
               set: function(e, t) {
                    t = n.defaults({}, t, g), t.parse && (e = this.parse(e, t));
                    var i = !n.isArray(e);
                    e = i ? e ? [e] : [] : n.clone(e);
                    var r, o, s, a, u, c, l, f = t.at,
                         d = this.model,
                         p = this.comparator && null == f && !1 !== t.sort,
                         m = n.isString(this.comparator) ? this.comparator : null,
                         v = [],
                         y = [],
                         b = {},
                         w = t.add,
                         x = t.merge,
                         _ = t.remove,
                         E = !(p || !w || !_) && [];
                    for (r = 0, o = e.length; r < o; r++) {
                         if (u = e[r] || {}, s = u instanceof h ? a = u : u[d.prototype.idAttribute || "id"], c = this.get(s)) _ && (b[c.cid] = !0), x && (u = u === a ? a.attributes : u, t.parse && (u = c.parse(u, t)), c.set(u, t), p && !l && c.hasChanged(m) && (l = !0)), e[r] = c;
                         else if (w) {
                              if (!(a = e[r] = this._prepareModel(u, t))) continue;
                              v.push(a), this._addReference(a, t)
                         }
                         a = c || a, !E || !a.isNew() && b[a.id] || E.push(a), b[a.id] = !0
                    }
                    if (_) {
                         for (r = 0, o = this.length; r < o; ++r) b[(a = this.models[r]).cid] || y.push(a);
                         y.length && this.remove(y, t)
                    }
                    if (v.length || E && E.length)
                         if (p && (l = !0), this.length += v.length, null != f)
                              for (r = 0, o = v.length; r < o; r++) this.models.splice(f + r, 0, v[r]);
                         else {
                              E && (this.models.length = 0);
                              var T = E || v;
                              for (r = 0, o = T.length; r < o; r++) this.models.push(T[r])
                         } if (l && this.sort({
                              silent: !0
                         }), !t.silent) {
                         for (r = 0, o = v.length; r < o; r++)(a = v[r]).trigger("add", a, this, t);
                         (l || E && E.length) && this.trigger("sort", this, t)
                    }
                    return i ? e[0] : e
               },
               reset: function(e, t) {
                    t || (t = {});
                    for (var i = 0, r = this.models.length; i < r; i++) this._removeReference(this.models[i], t);
                    return t.previousModels = this.models, this._reset(), e = this.add(e, n.extend({
                         silent: !0
                    }, t)), t.silent || this.trigger("reset", this, t), e
               },
               push: function(e, t) {
                    return this.add(e, n.extend({
                         at: this.length
                    }, t))
               },
               pop: function(e) {
                    var t = this.at(this.length - 1);
                    return this.remove(t, e), t
               },
               unshift: function(e, t) {
                    return this.add(e, n.extend({
                         at: 0
                    }, t))
               },
               shift: function(e) {
                    var t = this.at(0);
                    return this.remove(t, e), t
               },
               slice: function() {
                    return s.apply(this.models, arguments)
               },
               get: function(e) {
                    if (null != e) return this._byId[e] || this._byId[e.id] || this._byId[e.cid]
               },
               at: function(e) {
                    return this.models[e]
               },
               where: function(e, t) {
                    return n.isEmpty(e) ? t ? void 0 : [] : this[t ? "find" : "filter"](function(t) {
                         for (var n in e)
                              if (e[n] !== t.get(n)) return !1;
                         return !0
                    })
               },
               findWhere: function(e) {
                    return this.where(e, !0)
               },
               sort: function(e) {
                    if (!this.comparator) throw new Error("Cannot sort a set without a comparator");
                    return e || (e = {}), n.isString(this.comparator) || 1 === this.comparator.length ? this.models = this.sortBy(this.comparator, this) : this.models.sort(n.bind(this.comparator, this)), e.silent || this.trigger("sort", this, e), this
               },
               pluck: function(e) {
                    return n.invoke(this.models, "get", e)
               },
               fetch: function(e) {
                    e = e ? n.clone(e) : {}, void 0 === e.parse && (e.parse = !0);
                    var t = e.success,
                         i = this;
                    return e.success = function(n) {
                         var r = e.reset ? "reset" : "set";
                         i[r](n, e), t && t(i, n, e), i.trigger("sync", i, n, e)
                    }, I(this, e), this.sync("read", this, e)
               },
               create: function(e, t) {
                    if (t = t ? n.clone(t) : {}, !(e = this._prepareModel(e, t))) return !1;
                    t.wait || this.add(e, t);
                    var i = this,
                         r = t.success;
                    return t.success = function(e, n) {
                         t.wait && i.add(e, t), r && r(e, n, t)
                    }, e.save(null, t), e
               },
               parse: function(e, t) {
                    return e
               },
               clone: function() {
                    return new this.constructor(this.models)
               },
               _reset: function() {
                    this.length = 0, this.models = [], this._byId = {}
               },
               _prepareModel: function(e, t) {
                    if (e instanceof h) return e;
                    t = t ? n.clone(t) : {}, t.collection = this;
                    var i = new this.model(e, t);
                    return i.validationError ? (this.trigger("invalid", this, i.validationError, t), !1) : i
               },
               _addReference: function(e, t) {
                    this._byId[e.cid] = e, null != e.id && (this._byId[e.id] = e), e.collection || (e.collection = this), e.on("all", this._onModelEvent, this)
               },
               _removeReference: function(e, t) {
                    this === e.collection && delete e.collection, e.off("all", this._onModelEvent, this)
               },
               _onModelEvent: function(e, t, n, i) {
                    ("add" !== e && "remove" !== e || n === this) && ("destroy" === e && this.remove(t, i), t && e === "change:" + t.idAttribute && (delete this._byId[t.previous(t.idAttribute)], null != t.id && (this._byId[t.id] = t)), this.trigger.apply(this, arguments))
               }
          });
          var v = ["forEach", "each", "map", "collect", "reduce", "foldl", "inject", "reduceRight", "foldr", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "toArray", "size", "first", "head", "take", "initial", "rest", "tail", "drop", "last", "without", "difference", "indexOf", "shuffle", "lastIndexOf", "isEmpty", "chain", "sample"];
          n.each(v, function(e) {
               p.prototype[e] = function() {
                    var t = s.call(arguments);
                    return t.unshift(this.models), n[e].apply(n, t)
               }
          });
          var y = ["groupBy", "countBy", "sortBy", "indexBy"];
          n.each(y, function(e) {
               p.prototype[e] = function(t, i) {
                    var r = n.isFunction(t) ? t : function(e) {
                         return e.get(t)
                    };
                    return n[e](this.models, r, i)
               }
          });
          var b = t.View = function(e) {
                    this.cid = n.uniqueId("view"), e || (e = {}), n.extend(this, n.pick(e, x)), this._ensureElement(), this.initialize.apply(this, arguments), this.delegateEvents()
               },
               w = /^(\S+)\s*(.*)$/,
               x = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
          n.extend(b.prototype, a, {
               tagName: "div",
               $: function(e) {
                    return this.$el.find(e)
               },
               initialize: function() {},
               render: function() {
                    return this
               },
               remove: function() {
                    return this.$el.remove(), this.stopListening(), this
               },
               setElement: function(e, n) {
                    return this.$el && this.undelegateEvents(), this.$el = e instanceof t.$ ? e : t.$(e), this.el = this.$el[0], !1 !== n && this.delegateEvents(), this
               },
               delegateEvents: function(e) {
                    if (!e && !(e = n.result(this, "events"))) return this;
                    this.undelegateEvents();
                    for (var t in e) {
                         var i = e[t];
                         if (n.isFunction(i) || (i = this[e[t]]), i) {
                              var r = t.match(w),
                                   o = r[1],
                                   s = r[2];
                              i = n.bind(i, this), o += ".delegateEvents" + this.cid, "" === s ? this.$el.on(o, i) : this.$el.on(o, s, i)
                         }
                    }
                    return this
               },
               undelegateEvents: function() {
                    return this.$el.off(".delegateEvents" + this.cid), this
               },
               _ensureElement: function() {
                    if (this.el) this.setElement(n.result(this, "el"), !1);
                    else {
                         var e = n.extend({}, n.result(this, "attributes"));
                         this.id && (e.id = n.result(this, "id")), this.className && (e.class = n.result(this, "className"));
                         var i = t.$("<" + n.result(this, "tagName") + ">").attr(e);
                         this.setElement(i, !1)
                    }
               }
          }), t.sync = function(e, i, r) {
               var o = E[e];
               n.defaults(r || (r = {}), {
                    emulateHTTP: t.emulateHTTP,
                    emulateJSON: t.emulateJSON
               });
               var s = {
                    type: o,
                    dataType: "json"
               };
               if (r.url || (s.url = n.result(i, "url") || H()), null != r.data || !i || "create" !== e && "update" !== e && "patch" !== e || (s.contentType = "application/json", s.data = JSON.stringify(r.attrs || i.toJSON(r))), r.emulateJSON && (s.contentType = "application/x-www-form-urlencoded", s.data = s.data ? {
                         model: s.data
                    } : {}), r.emulateHTTP && ("PUT" === o || "DELETE" === o || "PATCH" === o)) {
                    s.type = "POST", r.emulateJSON && (s.data._method = o);
                    var a = r.beforeSend;
                    r.beforeSend = function(e) {
                         if (e.setRequestHeader("X-HTTP-Method-Override", o), a) return a.apply(this, arguments)
                    }
               }
               "GET" === s.type || r.emulateJSON || (s.processData = !1), "PATCH" === s.type && _ && (s.xhr = function() {
                    return new ActiveXObject("Microsoft.XMLHTTP")
               });
               var u = r.xhr = t.ajax(n.extend(s, r));
               return i.trigger("request", i, u, r), u
          };
          var _ = !("undefined" == typeof window || !window.ActiveXObject || window.XMLHttpRequest && (new XMLHttpRequest).dispatchEvent),
               E = {
                    create: "POST",
                    update: "PUT",
                    patch: "PATCH",
                    delete: "DELETE",
                    read: "GET"
               };
          t.ajax = function() {
               return t.$.ajax.apply(t.$, arguments)
          };
          var T = t.Router = function(e) {
                    e || (e = {}), e.routes && (this.routes = e.routes), this._bindRoutes(), this.initialize.apply(this, arguments)
               },
               S = /\((.*?)\)/g,
               k = /(\(\?)?:\w+/g,
               N = /\*\w+/g,
               C = /[\-{}\[\]+?.,\\\^$|#\s]/g;
          n.extend(T.prototype, a, {
               initialize: function() {},
               route: function(e, i, r) {
                    n.isRegExp(e) || (e = this._routeToRegExp(e)), n.isFunction(i) && (r = i, i = ""), r || (r = this[i]);
                    var o = this;
                    return t.history.route(e, function(n) {
                         var s = o._extractParameters(e, n);
                         o.execute(r, s), o.trigger.apply(o, ["route:" + i].concat(s)), o.trigger("route", i, s), t.history.trigger("route", o, i, s)
                    }), this
               },
               execute: function(e, t) {
                    e && e.apply(this, t)
               },
               navigate: function(e, n) {
                    return t.history.navigate(e, n), this
               },
               _bindRoutes: function() {
                    if (this.routes) {
                         this.routes = n.result(this, "routes");
                         for (var e, t = n.keys(this.routes); null != (e = t.pop());) this.route(e, this.routes[e])
                    }
               },
               _routeToRegExp: function(e) {
                    return e = e.replace(C, "\\$&").replace(S, "(?:$1)?").replace(k, function(e, t) {
                         return t ? e : "([^/?]+)"
                    }).replace(N, "([^?]*?)"), new RegExp("^" + e + "(?:\\?([\\s\\S]*))?$")
               },
               _extractParameters: function(e, t) {
                    var i = e.exec(t).slice(1);
                    return n.map(i, function(e, t) {
                         return t === i.length - 1 ? e || null : e ? decodeURIComponent(e) : null
                    })
               }
          });
          var O = t.History = function() {
                    this.handlers = [], n.bindAll(this, "checkUrl"), "undefined" != typeof window && (this.location = window.location, this.history = window.history)
               },
               D = /^[#\/]|\s+$/g,
               j = /^\/+|\/+$/g,
               A = /msie [\w.]+/,
               R = /\/$/,
               M = /#.*$/;
          O.started = !1, n.extend(O.prototype, a, {
               interval: 50,
               atRoot: function() {
                    return this.location.pathname.replace(/[^\/]$/, "$&/") === this.root
               },
               getHash: function(e) {
                    var t = (e || this).location.href.match(/#(.*)$/);
                    return t ? t[1] : ""
               },
               getFragment: function(e, t) {
                    if (null == e)
                         if (this._hasPushState || !this._wantsHashChange || t) {
                              e = decodeURI(this.location.pathname + this.location.search);
                              var n = this.root.replace(R, "");
                              e.indexOf(n) || (e = e.slice(n.length))
                         } else e = this.getHash();
                    return e.replace(D, "")
               },
               start: function(e) {
                    if (O.started) throw new Error("Backbone.history has already been started");
                    O.started = !0, this.options = n.extend({
                         root: "/"
                    }, this.options, e), this.root = this.options.root, this._wantsHashChange = !1 !== this.options.hashChange, this._wantsPushState = !!this.options.pushState, this._hasPushState = !!(this.options.pushState && this.history && this.history.pushState);
                    var i = this.getFragment(),
                         r = document.documentMode,
                         o = A.exec(navigator.userAgent.toLowerCase()) && (!r || r <= 7);
                    if (this.root = ("/" + this.root + "/").replace(j, "/"), o && this._wantsHashChange) {
                         var s = t.$('<iframe src="javascript:0" tabindex="-1">');
                         this.iframe = s.hide().appendTo("body")[0].contentWindow, this.navigate(i)
                    }
                    this._hasPushState ? t.$(window).on("popstate", this.checkUrl) : this._wantsHashChange && "onhashchange" in window && !o ? t.$(window).on("hashchange", this.checkUrl) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)), this.fragment = i;
                    var a = this.location;
                    if (this._wantsHashChange && this._wantsPushState) {
                         if (!this._hasPushState && !this.atRoot()) return this.fragment = this.getFragment(null, !0), this.location.replace(this.root + "#" + this.fragment), !0;
                         this._hasPushState && this.atRoot() && a.hash && (this.fragment = this.getHash().replace(D, ""), this.history.replaceState({}, document.title, this.root + this.fragment))
                    }
                    if (!this.options.silent) return this.loadUrl()
               },
               stop: function() {
                    t.$(window).off("popstate", this.checkUrl).off("hashchange", this.checkUrl), this._checkUrlInterval && clearInterval(this._checkUrlInterval), O.started = !1
               },
               route: function(e, t) {
                    this.handlers.unshift({
                         route: e,
                         callback: t
                    })
               },
               checkUrl: function(e) {
                    var t = this.getFragment();
                    if (t === this.fragment && this.iframe && (t = this.getFragment(this.getHash(this.iframe))), t === this.fragment) return !1;
                    this.iframe && this.navigate(t), this.loadUrl()
               },
               loadUrl: function(e) {
                    return e = this.fragment = this.getFragment(e), n.any(this.handlers, function(t) {
                         if (t.route.test(e)) return t.callback(e), !0
                    })
               },
               navigate: function(e, t) {
                    if (!O.started) return !1;
                    t && !0 !== t || (t = {
                         trigger: !!t
                    });
                    var n = this.root + (e = this.getFragment(e || ""));
                    if (e = e.replace(M, ""), this.fragment !== e) {
                         if (this.fragment = e, "" === e && "/" !== n && (n = n.slice(0, -1)), this._hasPushState) this.history[t.replace ? "replaceState" : "pushState"]({}, document.title, n);
                         else {
                              if (!this._wantsHashChange) return this.location.assign(n);
                              this._updateHash(this.location, e, t.replace), this.iframe && e !== this.getFragment(this.getHash(this.iframe)) && (t.replace || this.iframe.document.open().close(), this._updateHash(this.iframe.location, e, t.replace))
                         }
                         return t.trigger ? this.loadUrl(e) : void 0
                    }
               },
               _updateHash: function(e, t, n) {
                    if (n) {
                         var i = e.href.replace(/(javascript:|#).*$/, "");
                         e.replace(i + "#" + t)
                    } else e.hash = "#" + t
               }
          }), t.history = new O;
          var P = function(e, t) {
               var i, r = this;
               i = e && n.has(e, "constructor") ? e.constructor : function() {
                    return r.apply(this, arguments)
               }, n.extend(i, r, t);
               var o = function() {
                    this.constructor = i
               };
               return o.prototype = r.prototype, i.prototype = new o, e && n.extend(i.prototype, e), i.__super__ = r.prototype, i
          };
          h.extend = p.extend = T.extend = b.extend = O.extend = P;
          var H = function() {
                    throw new Error('A "url" property or function must be specified')
               },
               I = function(e, t) {
                    var n = t.error;
                    t.error = function(i) {
                         n && n(e, i, t), e.trigger("error", e, i, t)
                    }
               };
          return t
     }),
     function(e, t) {
          "use strict";

          function n() {
               i.READY || (i.event.determineEventTypes(), i.utils.each(i.gestures, function(e) {
                    i.detection.register(e)
               }), i.event.onTouch(i.DOCUMENT, i.EVENT_MOVE, i.detection.detect), i.event.onTouch(i.DOCUMENT, i.EVENT_END, i.detection.detect), i.READY = !0)
          }
          var i = function(e, t) {
               return new i.Instance(e, t || {})
          };
          i.defaults = {
               stop_browser_behavior: {
                    userSelect: "none",
                    touchAction: "none",
                    touchCallout: "none",
                    contentZooming: "none",
                    userDrag: "none",
                    tapHighlightColor: "rgba(0,0,0,0)"
               }
          }, i.HAS_POINTEREVENTS = e.navigator.pointerEnabled || e.navigator.msPointerEnabled, i.HAS_TOUCHEVENTS = "ontouchstart" in e, i.MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android|silk/i, i.NO_MOUSEEVENTS = i.HAS_TOUCHEVENTS && e.navigator.userAgent.match(i.MOBILE_REGEX), i.EVENT_TYPES = {}, i.DIRECTION_DOWN = "down", i.DIRECTION_LEFT = "left", i.DIRECTION_UP = "up", i.DIRECTION_RIGHT = "right", i.POINTER_MOUSE = "mouse", i.POINTER_TOUCH = "touch", i.POINTER_PEN = "pen", i.EVENT_START = "start", i.EVENT_MOVE = "move", i.EVENT_END = "end", i.DOCUMENT = e.document, i.plugins = i.plugins || {}, i.gestures = i.gestures || {}, i.READY = !1, i.utils = {
               extend: function(e, t, n) {
                    for (var i in t) void 0 !== e[i] && n || (e[i] = t[i]);
                    return e
               },
               each: function(e, t, n) {
                    var i, r;
                    if ("forEach" in e) e.forEach(t, n);
                    else if (void 0 !== e.length) {
                         for (i = 0, r = e.length; i < r; i++)
                              if (!1 === t.call(n, e[i], i, e)) return
                    } else
                         for (i in e)
                              if (e.hasOwnProperty(i) && !1 === t.call(n, e[i], i, e)) return
               },
               hasParent: function(e, t) {
                    for (; e;) {
                         if (e == t) return !0;
                         e = e.parentNode
                    }
                    return !1
               },
               getCenter: function(e) {
                    var t = [],
                         n = [];
                    return i.utils.each(e, function(e) {
                         t.push(void 0 !== e.clientX ? e.clientX : e.pageX), n.push(void 0 !== e.clientY ? e.clientY : e.pageY)
                    }), {
                         pageX: (Math.min.apply(Math, t) + Math.max.apply(Math, t)) / 2,
                         pageY: (Math.min.apply(Math, n) + Math.max.apply(Math, n)) / 2
                    }
               },
               getVelocity: function(e, t, n) {
                    return {
                         x: Math.abs(t / e) || 0,
                         y: Math.abs(n / e) || 0
                    }
               },
               getAngle: function(e, t) {
                    var n = t.pageY - e.pageY,
                         i = t.pageX - e.pageX;
                    return 180 * Math.atan2(n, i) / Math.PI
               },
               getDirection: function(e, t) {
                    return Math.abs(e.pageX - t.pageX) >= Math.abs(e.pageY - t.pageY) ? e.pageX - t.pageX > 0 ? i.DIRECTION_LEFT : i.DIRECTION_RIGHT : e.pageY - t.pageY > 0 ? i.DIRECTION_UP : i.DIRECTION_DOWN
               },
               getDistance: function(e, t) {
                    var n = t.pageX - e.pageX,
                         i = t.pageY - e.pageY;
                    return Math.sqrt(n * n + i * i)
               },
               getScale: function(e, t) {
                    return e.length >= 2 && t.length >= 2 ? this.getDistance(t[0], t[1]) / this.getDistance(e[0], e[1]) : 1
               },
               getRotation: function(e, t) {
                    return e.length >= 2 && t.length >= 2 ? this.getAngle(t[1], t[0]) - this.getAngle(e[1], e[0]) : 0
               },
               isVertical: function(e) {
                    return e == i.DIRECTION_UP || e == i.DIRECTION_DOWN
               },
               stopDefaultBrowserBehavior: function(e, t) {
                    t && e && e.style && (i.utils.each(["webkit", "khtml", "moz", "Moz", "ms", "o", ""], function(n) {
                         i.utils.each(t, function(t) {
                              n && (t = n + t.substring(0, 1).toUpperCase() + t.substring(1)), t in e.style && (e.style[t] = t)
                         })
                    }), "none" == t.userSelect && (e.onselectstart = function() {
                         return !1
                    }), "none" == t.userDrag && (e.ondragstart = function() {
                         return !1
                    }))
               }
          }, i.Instance = function(e, t) {
               var r = this;
               return n(), this.element = e, this.enabled = !0, this.options = i.utils.extend(i.utils.extend({}, i.defaults), t || {}), this.options.stop_browser_behavior && i.utils.stopDefaultBrowserBehavior(this.element, this.options.stop_browser_behavior),
                    i.event.onTouch(e, i.EVENT_START, function(e) {
                         r.enabled && i.detection.startDetect(r, e)
                    }), this
          }, i.Instance.prototype = {
               on: function(e, t) {
                    var n = e.split(" ");
                    return i.utils.each(n, function(e) {
                         this.element.addEventListener(e, t, !1)
                    }, this), this
               },
               off: function(e, t) {
                    var n = e.split(" ");
                    return i.utils.each(n, function(e) {
                         this.element.removeEventListener(e, t, !1)
                    }, this), this
               },
               trigger: function(e, t) {
                    t || (t = {});
                    var n = i.DOCUMENT.createEvent("Event");
                    n.initEvent(e, !0, !0), n.gesture = t;
                    var r = this.element;
                    return i.utils.hasParent(t.target, r) && (r = t.target), r.dispatchEvent(n), this
               },
               enable: function(e) {
                    return this.enabled = e, this
               }
          };
          var r = null,
               o = !1,
               s = !1;
          i.event = {
               bindDom: function(e, t, n) {
                    var r = t.split(" ");
                    i.utils.each(r, function(t) {
                         e.addEventListener(t, n, !1)
                    })
               },
               onTouch: function(e, t, n) {
                    var a = this;
                    this.bindDom(e, i.EVENT_TYPES[t], function(u) {
                         var c = u.type.toLowerCase();
                         if (!c.match(/mouse/) || !s) {
                              c.match(/touch/) || c.match(/pointerdown/) || c.match(/mouse/) && 1 === u.which ? o = !0 : c.match(/mouse/) && !u.which && (o = !1), c.match(/touch|pointer/) && (s = !0);
                              var l = 0;
                              o && (i.HAS_POINTEREVENTS && t != i.EVENT_END ? l = i.PointerEvent.updatePointer(t, u) : c.match(/touch/) ? l = u.touches.length : s || (l = c.match(/up/) ? 0 : 1), l > 0 && t == i.EVENT_END ? t = i.EVENT_MOVE : l || (t = i.EVENT_END), (l || null === r) && (r = u), n.call(i.detection, a.collectEventData(e, t, a.getTouchList(r, t), u)), i.HAS_POINTEREVENTS && t == i.EVENT_END && (l = i.PointerEvent.updatePointer(t, u))), l || (r = null, o = !1, s = !1, i.PointerEvent.reset())
                         }
                    })
               },
               determineEventTypes: function() {
                    var e;
                    e = i.HAS_POINTEREVENTS ? i.PointerEvent.getEvents() : i.NO_MOUSEEVENTS ? ["touchstart", "touchmove", "touchend touchcancel"] : ["touchstart mousedown", "touchmove mousemove", "touchend touchcancel mouseup"], i.EVENT_TYPES[i.EVENT_START] = e[0], i.EVENT_TYPES[i.EVENT_MOVE] = e[1], i.EVENT_TYPES[i.EVENT_END] = e[2]
               },
               getTouchList: function(e) {
                    return i.HAS_POINTEREVENTS ? i.PointerEvent.getTouchList() : e.touches ? e.touches : (e.identifier = 1, [e])
               },
               collectEventData: function(e, t, n, r) {
                    var o = i.POINTER_TOUCH;
                    return (r.type.match(/mouse/) || i.PointerEvent.matchType(i.POINTER_MOUSE, r)) && (o = i.POINTER_MOUSE), {
                         center: i.utils.getCenter(n),
                         timeStamp: (new Date).getTime(),
                         target: r.target,
                         touches: n,
                         eventType: t,
                         pointerType: o,
                         srcEvent: r,
                         preventDefault: function() {
                              this.srcEvent.preventManipulation && this.srcEvent.preventManipulation(), this.srcEvent.preventDefault && this.srcEvent.preventDefault()
                         },
                         stopPropagation: function() {
                              this.srcEvent.stopPropagation()
                         },
                         stopDetect: function() {
                              return i.detection.stopDetect()
                         }
                    }
               }
          }, i.PointerEvent = {
               pointers: {},
               getTouchList: function() {
                    var e = this,
                         t = [];
                    return i.utils.each(e.pointers, function(e) {
                         t.push(e)
                    }), t
               },
               updatePointer: function(e, t) {
                    return e == i.EVENT_END ? this.pointers = {} : (t.identifier = t.pointerId, this.pointers[t.pointerId] = t), Object.keys(this.pointers).length
               },
               matchType: function(e, t) {
                    if (!t.pointerType) return !1;
                    var n = t.pointerType,
                         r = {};
                    return r[i.POINTER_MOUSE] = n === t.MSPOINTER_TYPE_MOUSE || n === i.POINTER_MOUSE, r[i.POINTER_TOUCH] = n === t.MSPOINTER_TYPE_TOUCH || n === i.POINTER_TOUCH, r[i.POINTER_PEN] = n === t.MSPOINTER_TYPE_PEN || n === i.POINTER_PEN, r[e]
               },
               getEvents: function() {
                    return ["pointerdown MSPointerDown", "pointermove MSPointerMove", "pointerup pointercancel MSPointerUp MSPointerCancel"]
               },
               reset: function() {
                    this.pointers = {}
               }
          }, i.detection = {
               gestures: [],
               current: null,
               previous: null,
               stopped: !1,
               startDetect: function(e, t) {
                    this.current || (this.stopped = !1, this.current = {
                         inst: e,
                         startEvent: i.utils.extend({}, t),
                         lastEvent: !1,
                         name: ""
                    }, this.detect(t))
               },
               detect: function(e) {
                    if (this.current && !this.stopped) {
                         e = this.extendEventData(e);
                         var t = this.current.inst.options;
                         return i.utils.each(this.gestures, function(n) {
                              if (!this.stopped && !1 !== t[n.name] && !1 === n.handler.call(n, e, this.current.inst)) return this.stopDetect(), !1
                         }, this), this.current && (this.current.lastEvent = e), e.eventType == i.EVENT_END && !e.touches.length - 1 && this.stopDetect(), e
                    }
               },
               stopDetect: function() {
                    this.previous = i.utils.extend({}, this.current), this.current = null, this.stopped = !0
               },
               extendEventData: function(e) {
                    var t = this.current.startEvent;
                    !t || e.touches.length == t.touches.length && e.touches !== t.touches || (t.touches = [], i.utils.each(e.touches, function(e) {
                         t.touches.push(i.utils.extend({}, e))
                    }));
                    var n, r, o = e.timeStamp - t.timeStamp,
                         s = e.center.pageX - t.center.pageX,
                         a = e.center.pageY - t.center.pageY,
                         u = i.utils.getVelocity(o, s, a);
                    return "end" === e.eventType ? (n = this.current.lastEvent && this.current.lastEvent.interimAngle, r = this.current.lastEvent && this.current.lastEvent.interimDirection) : (n = this.current.lastEvent && i.utils.getAngle(this.current.lastEvent.center, e.center), r = this.current.lastEvent && i.utils.getDirection(this.current.lastEvent.center, e.center)), i.utils.extend(e, {
                         deltaTime: o,
                         deltaX: s,
                         deltaY: a,
                         velocityX: u.x,
                         velocityY: u.y,
                         distance: i.utils.getDistance(t.center, e.center),
                         angle: i.utils.getAngle(t.center, e.center),
                         interimAngle: n,
                         direction: i.utils.getDirection(t.center, e.center),
                         interimDirection: r,
                         scale: i.utils.getScale(t.touches, e.touches),
                         rotation: i.utils.getRotation(t.touches, e.touches),
                         startEvent: t
                    }), e
               },
               register: function(e) {
                    var t = e.defaults || {};
                    return void 0 === t[e.name] && (t[e.name] = !0), i.utils.extend(i.defaults, t, !0), e.index = e.index || 1e3, this.gestures.push(e), this.gestures.sort(function(e, t) {
                         return e.index < t.index ? -1 : e.index > t.index ? 1 : 0
                    }), this.gestures
               }
          }, i.gestures.Drag = {
               name: "drag",
               index: 50,
               defaults: {
                    drag_min_distance: 10,
                    correct_for_drag_min_distance: !0,
                    drag_max_touches: 1,
                    drag_block_horizontal: !1,
                    drag_block_vertical: !1,
                    drag_lock_to_axis: !1,
                    drag_lock_min_distance: 25
               },
               triggered: !1,
               handler: function(e, t) {
                    if (i.detection.current.name != this.name && this.triggered) return t.trigger(this.name + "end", e), void(this.triggered = !1);
                    if (!(t.options.drag_max_touches > 0 && e.touches.length > t.options.drag_max_touches)) switch (e.eventType) {
                         case i.EVENT_START:
                              this.triggered = !1;
                              break;
                         case i.EVENT_MOVE:
                              if (e.distance < t.options.drag_min_distance && i.detection.current.name != this.name) return;
                              if (i.detection.current.name != this.name && (i.detection.current.name = this.name, t.options.correct_for_drag_min_distance && e.distance > 0)) {
                                   var n = Math.abs(t.options.drag_min_distance / e.distance);
                                   i.detection.current.startEvent.center.pageX += e.deltaX * n, i.detection.current.startEvent.center.pageY += e.deltaY * n, e = i.detection.extendEventData(e)
                              }(i.detection.current.lastEvent.drag_locked_to_axis || t.options.drag_lock_to_axis && t.options.drag_lock_min_distance <= e.distance) && (e.drag_locked_to_axis = !0);
                              var r = i.detection.current.lastEvent.direction;
                              e.drag_locked_to_axis && r !== e.direction && (i.utils.isVertical(r) ? e.direction = e.deltaY < 0 ? i.DIRECTION_UP : i.DIRECTION_DOWN : e.direction = e.deltaX < 0 ? i.DIRECTION_LEFT : i.DIRECTION_RIGHT), this.triggered || (t.trigger(this.name + "start", e), this.triggered = !0), t.trigger(this.name, e), t.trigger(this.name + e.direction, e), (t.options.drag_block_vertical && i.utils.isVertical(e.direction) || t.options.drag_block_horizontal && !i.utils.isVertical(e.direction)) && e.preventDefault();
                              break;
                         case i.EVENT_END:
                              this.triggered && t.trigger(this.name + "end", e), this.triggered = !1
                    }
               }
          }, i.gestures.Hold = {
               name: "hold",
               index: 10,
               defaults: {
                    hold_timeout: 500,
                    hold_threshold: 1
               },
               timer: null,
               handler: function(e, t) {
                    switch (e.eventType) {
                         case i.EVENT_START:
                              clearTimeout(this.timer), i.detection.current.name = this.name, this.timer = setTimeout(function() {
                                   "hold" == i.detection.current.name && t.trigger("hold", e)
                              }, t.options.hold_timeout);
                              break;
                         case i.EVENT_MOVE:
                              e.distance > t.options.hold_threshold && clearTimeout(this.timer);
                              break;
                         case i.EVENT_END:
                              clearTimeout(this.timer)
                    }
               }
          }, i.gestures.Release = {
               name: "release",
               index: 1 / 0,
               handler: function(e, t) {
                    e.eventType == i.EVENT_END && t.trigger(this.name, e)
               }
          }, i.gestures.Swipe = {
               name: "swipe",
               index: 40,
               defaults: {
                    swipe_min_touches: 1,
                    swipe_max_touches: 1,
                    swipe_velocity: .7
               },
               handler: function(e, t) {
                    if (e.eventType == i.EVENT_END) {
                         if (t.options.swipe_max_touches > 0 && e.touches.length < t.options.swipe_min_touches && e.touches.length > t.options.swipe_max_touches) return;
                         (e.velocityX > t.options.swipe_velocity || e.velocityY > t.options.swipe_velocity) && (t.trigger(this.name, e), t.trigger(this.name + e.direction, e))
                    }
               }
          }, i.gestures.Tap = {
               name: "tap",
               index: 100,
               defaults: {
                    tap_max_touchtime: 250,
                    tap_max_distance: 10,
                    tap_always: !0,
                    doubletap_distance: 20,
                    doubletap_interval: 300
               },
               handler: function(e, t) {
                    if (e.eventType == i.EVENT_END && "touchcancel" != e.srcEvent.type) {
                         var n = i.detection.previous,
                              r = !1;
                         if (e.deltaTime > t.options.tap_max_touchtime || e.distance > t.options.tap_max_distance) return;
                         n && "tap" == n.name && e.timeStamp - n.lastEvent.timeStamp < t.options.doubletap_interval && e.distance < t.options.doubletap_distance && (t.trigger("doubletap", e), r = !0), r && !t.options.tap_always || (i.detection.current.name = "tap", t.trigger(i.detection.current.name, e))
                    }
               }
          }, i.gestures.Touch = {
               name: "touch",
               index: -1 / 0,
               defaults: {
                    prevent_default: !1,
                    prevent_mouseevents: !1
               },
               handler: function(e, t) {
                    if (t.options.prevent_mouseevents && e.pointerType == i.POINTER_MOUSE) return void e.stopDetect();
                    t.options.prevent_default && e.preventDefault(), e.eventType == i.EVENT_START && t.trigger(this.name, e)
               }
          }, i.gestures.Transform = {
               name: "transform",
               index: 45,
               defaults: {
                    transform_min_scale: .01,
                    transform_min_rotation: 1,
                    transform_always_block: !1
               },
               triggered: !1,
               handler: function(e, t) {
                    if (i.detection.current.name != this.name && this.triggered) return t.trigger(this.name + "end", e), void(this.triggered = !1);
                    if (!(e.touches.length < 2)) switch (t.options.transform_always_block && e.preventDefault(), e.eventType) {
                         case i.EVENT_START:
                              this.triggered = !1;
                              break;
                         case i.EVENT_MOVE:
                              var n = Math.abs(1 - e.scale),
                                   r = Math.abs(e.rotation);
                              if (n < t.options.transform_min_scale && r < t.options.transform_min_rotation) return;
                              i.detection.current.name = this.name, this.triggered || (t.trigger(this.name + "start", e), this.triggered = !0), t.trigger(this.name, e), r > t.options.transform_min_rotation && t.trigger("rotate", e), n > t.options.transform_min_scale && (t.trigger("pinch", e), t.trigger("pinch" + (e.scale < 1 ? "in" : "out"), e));
                              break;
                         case i.EVENT_END:
                              this.triggered && t.trigger(this.name + "end", e), this.triggered = !1
                    }
               }
          }, "function" == typeof define && "object" == typeof define.amd && define.amd ? define("foundation/lib/hammer/1.0.6", [], function() {
               return i
          }) : "object" == typeof module && "object" == typeof module.exports ? module.exports = i : e.Hammer = i
     }(this);
var JSON;
JSON || (JSON = {}),
     function() {
          function str(e, t) {
               var n, i, r, o, s, a = gap,
                    u = t[e];
               switch (u && "object" == typeof u && "function" == typeof u.toJSON && (u = u.toJSON(e)), "function" == typeof rep && (u = rep.call(t, e, u)), typeof u) {
                    case "string":
                         return quote(u);
                    case "number":
                         return isFinite(u) ? String(u) : "null";
                    case "boolean":
                    case "null":
                         return String(u);
                    case "object":
                         if (!u) return "null";
                         if (gap += indent, s = [], "[object Array]" === Object.prototype.toString.apply(u)) {
                              for (o = u.length, n = 0; n < o; n += 1) s[n] = str(n, u) || "null";
                              return r = 0 === s.length ? "[]" : gap ? "[\n" + gap + s.join(",\n" + gap) + "\n" + a + "]" : "[" + s.join(",") + "]", gap = a, r
                         }
                         if (rep && "object" == typeof rep)
                              for (o = rep.length, n = 0; n < o; n += 1) "string" == typeof rep[n] && (i = rep[n], (r = str(i, u)) && s.push(quote(i) + (gap ? ": " : ":") + r));
                         else
                              for (i in u) Object.prototype.hasOwnProperty.call(u, i) && (r = str(i, u)) && s.push(quote(i) + (gap ? ": " : ":") + r);
                         return r = 0 === s.length ? "{}" : gap ? "{\n" + gap + s.join(",\n" + gap) + "\n" + a + "}" : "{" + s.join(",") + "}", gap = a, r
               }
          }

          function quote(e) {
               return escapable.lastIndex = 0, escapable.test(e) ? '"' + e.replace(escapable, function(e) {
                    var t = meta[e];
                    return "string" == typeof t ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
               }) + '"' : '"' + e + '"'
          }

          function f(e) {
               return e < 10 ? "0" + e : e
          }
          "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function(e) {
               return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
          }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function(e) {
               return this.valueOf()
          });
          var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
               escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
               gap, indent, meta = {
                    "\b": "\\b",
                    "\t": "\\t",
                    "\n": "\\n",
                    "\f": "\\f",
                    "\r": "\\r",
                    '"': '\\"',
                    "\\": "\\\\"
               },
               rep;
          "function" != typeof JSON.stringify && (JSON.stringify = function(e, t, n) {
               var i;
               if (gap = "", indent = "", "number" == typeof n)
                    for (i = 0; i < n; i += 1) indent += " ";
               else "string" == typeof n && (indent = n);
               if (rep = t, !t || "function" == typeof t || "object" == typeof t && "number" == typeof t.length) return str("", {
                    "": e
               });
               throw new Error("JSON.stringify")
          }), "function" != typeof JSON.parse && (JSON.parse = function(text, reviver) {
               function walk(e, t) {
                    var n, i, r = e[t];
                    if (r && "object" == typeof r)
                         for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (i = walk(r, n), void 0 !== i ? r[n] = i : delete r[n]);
                    return reviver.call(e, t, r)
               }
               var j;
               if (text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function(e) {
                         return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
                    })), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({
                    "": j
               }, "") : j;
               throw new SyntaxError("JSON.parse")
          })
     }(), SockJS = function() {
          var e = document,
               t = window,
               n = {},
               i = function() {};
          i.prototype.addEventListener = function(e, t) {
               this._listeners || (this._listeners = {}), e in this._listeners || (this._listeners[e] = []);
               var i = this._listeners[e]; - 1 === n.arrIndexOf(i, t) && i.push(t)
          }, i.prototype.removeEventListener = function(e, t) {
               if (this._listeners && e in this._listeners) {
                    var i = this._listeners[e],
                         r = n.arrIndexOf(i, t);
                    return -1 !== r ? void(i.length > 1 ? this._listeners[e] = i.slice(0, r).concat(i.slice(r + 1)) : delete this._listeners[e]) : void 0
               }
          }, i.prototype.dispatchEvent = function(e) {
               var t = e.type,
                    n = Array.prototype.slice.call(arguments, 0);
               if (this["on" + t] && this["on" + t].apply(this, n), this._listeners && t in this._listeners)
                    for (var i = 0; i < this._listeners[t].length; i++) this._listeners[t][i].apply(this, n)
          };
          var r = function(e, t) {
               if (this.type = e, void 0 !== t)
                    for (var n in t) t.hasOwnProperty(n) && (this[n] = t[n])
          };
          r.prototype.toString = function() {
               var e = [];
               for (var t in this)
                    if (this.hasOwnProperty(t)) {
                         var n = this[t];
                         "function" == typeof n && (n = "[function]"), e.push(t + "=" + n)
                    } return "SimpleEvent(" + e.join(", ") + ")"
          };
          var o = function(e) {
               var t = this;
               t._events = e || [], t._listeners = {}
          };
          o.prototype.emit = function(e) {
               var t = this;
               if (t._verifyType(e), !t._nuked) {
                    var n = Array.prototype.slice.call(arguments, 1);
                    if (t["on" + e] && t["on" + e].apply(t, n), e in t._listeners)
                         for (var i = 0; i < t._listeners[e].length; i++) t._listeners[e][i].apply(t, n)
               }
          }, o.prototype.on = function(e, t) {
               var n = this;
               n._verifyType(e), n._nuked || (e in n._listeners || (n._listeners[e] = []), n._listeners[e].push(t))
          }, o.prototype._verifyType = function(e) {
               var t = this; - 1 === n.arrIndexOf(t._events, e) && n.log("Event " + JSON.stringify(e) + " not listed " + JSON.stringify(t._events) + " in " + t)
          }, o.prototype.nuke = function() {
               var e = this;
               e._nuked = !0;
               for (var t = 0; t < e._events.length; t++) delete e[e._events[t]];
               e._listeners = {}
          };
          var s = "abcdefghijklmnopqrstuvwxyz0123456789_";
          n.random_string = function(e, t) {
               t = t || s.length;
               var n, i = [];
               for (n = 0; n < e; n++) i.push(s.substr(Math.floor(Math.random() * t), 1));
               return i.join("")
          }, n.random_number = function(e) {
               return Math.floor(Math.random() * e)
          }, n.random_number_string = function(e) {
               var t = ("" + (e - 1)).length;
               return (Array(t + 1).join("0") + n.random_number(e)).slice(-t)
          }, n.getOrigin = function(e) {
               return e += "/", e.split("/").slice(0, 3).join("/")
          }, n.isSameOriginUrl = function(e, n) {
               return n || (n = t.location.href), e.split("/").slice(0, 3).join("/") === n.split("/").slice(0, 3).join("/")
          }, n.getParentDomain = function(e) {
               return /^[0-9.]*$/.test(e) ? e : /^\[/.test(e) ? e : /[.]/.test(e) ? e.split(".").slice(1).join(".") : e
          }, n.objectExtend = function(e, t) {
               for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
               return e
          };
          n.polluteGlobalNamespace = function() {
               "_jp" in t || (t._jp = {})
          }, n.closeFrame = function(e, t) {
               return "c" + JSON.stringify([e, t])
          }, n.userSetCode = function(e) {
               return 1e3 === e || e >= 3e3 && e <= 4999
          }, n.countRTO = function(e) {
               return e > 100 ? 3 * e : e + 200
          }, n.log = function() {}, n.bind = function(e, t) {
               return e.bind ? e.bind(t) : function() {
                    return e.apply(t, arguments)
               }
          }, n.flatUrl = function(e) {
               return -1 === e.indexOf("?") && -1 === e.indexOf("#")
          }, n.amendUrl = function(t) {
               var i = e.location;
               if (!t) throw new Error("Wrong url for SockJS");
               if (!n.flatUrl(t)) throw new Error("Only basic urls are supported in SockJS");
               0 === t.indexOf("//") && (t = i.protocol + t), 0 === t.indexOf("/") && (t = i.protocol + "//" + i.host + t), t = t.replace(/[\/]+$/, "");
               var r = t.split("/");
               return ("http:" === r[0] && /:80$/.test(r[2]) || "https:" === r[0] && /:443$/.test(r[2])) && (r[2] = r[2].replace(/:(80|443)$/, "")), t = r.join("/")
          }, n.arrIndexOf = function(e, t) {
               for (var n = 0; n < e.length; n++)
                    if (e[n] === t) return n;
               return -1
          }, n.arrSkip = function(e, t) {
               var i = n.arrIndexOf(e, t);
               return -1 === i ? e.slice() : e.slice(0, i).concat(e.slice(i + 1))
          }, n.isArray = Array.isArray || function(e) {
               return {}.toString.call(e).indexOf("Array") >= 0
          }, n.delay = function(e, t) {
               return "function" == typeof e && (t = e, e = 0), setTimeout(t, e)
          };
          var a, u = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
               c = {},
               l = /[\x00-\x1f\ud800-\udfff\ufffe\uffff\u0300-\u0333\u033d-\u0346\u034a-\u034c\u0350-\u0352\u0357-\u0358\u035c-\u0362\u0374\u037e\u0387\u0591-\u05af\u05c4\u0610-\u0617\u0653-\u0654\u0657-\u065b\u065d-\u065e\u06df-\u06e2\u06eb-\u06ec\u0730\u0732-\u0733\u0735-\u0736\u073a\u073d\u073f-\u0741\u0743\u0745\u0747\u07eb-\u07f1\u0951\u0958-\u095f\u09dc-\u09dd\u09df\u0a33\u0a36\u0a59-\u0a5b\u0a5e\u0b5c-\u0b5d\u0e38-\u0e39\u0f43\u0f4d\u0f52\u0f57\u0f5c\u0f69\u0f72-\u0f76\u0f78\u0f80-\u0f83\u0f93\u0f9d\u0fa2\u0fa7\u0fac\u0fb9\u1939-\u193a\u1a17\u1b6b\u1cda-\u1cdb\u1dc0-\u1dcf\u1dfc\u1dfe\u1f71\u1f73\u1f75\u1f77\u1f79\u1f7b\u1f7d\u1fbb\u1fbe\u1fc9\u1fcb\u1fd3\u1fdb\u1fe3\u1feb\u1fee-\u1fef\u1ff9\u1ffb\u1ffd\u2000-\u2001\u20d0-\u20d1\u20d4-\u20d7\u20e7-\u20e9\u2126\u212a-\u212b\u2329-\u232a\u2adc\u302b-\u302c\uaab2-\uaab3\uf900-\ufa0d\ufa10\ufa12\ufa15-\ufa1e\ufa20\ufa22\ufa25-\ufa26\ufa2a-\ufa2d\ufa30-\ufa6d\ufa70-\ufad9\ufb1d\ufb1f\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufb4e\ufff0-\uffff]/g,
               f = JSON && JSON.stringify || function(e) {
                    return u.lastIndex = 0, u.test(e) && (e = e.replace(u, function(e) {
                         return c[e]
                    })), '"' + e + '"'
               },
               h = function(e) {
                    var t, n = {},
                         i = [];
                    for (t = 0; t < 65536; t++) i.push(String.fromCharCode(t));
                    return e.lastIndex = 0, i.join("").replace(e, function(e) {
                         return n[e] = "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4), ""
                    }), e.lastIndex = 0, n
               };
          n.quote = function(e) {
               var t = f(e);
               return l.lastIndex = 0, l.test(t) ? (a || (a = h(l)), t.replace(l, function(e) {
                    return a[e]
               })) : t
          };
          var d = ["websocket", "xdr-streaming", "xhr-streaming", "iframe-eventsource", "iframe-htmlfile", "xdr-polling", "xhr-polling", "iframe-xhr-polling", "jsonp-polling"];
          n.probeProtocols = function() {
               for (var e = {}, t = 0; t < d.length; t++) {
                    var n = d[t];
                    e[n] = x[n] && x[n].enabled()
               }
               return e
          }, n.detectProtocols = function(e, t, n) {
               var i = {},
                    r = [];
               t || (t = d);
               for (var o = 0; o < t.length; o++) {
                    var s = t[o];
                    i[s] = e[s]
               }
               var a = function(e) {
                    var t = e.shift();
                    i[t] ? r.push(t) : e.length > 0 && a(e)
               };
               return !1 !== n.websocket && a(["websocket"]), i["xhr-streaming"] && !n.null_origin ? r.push("xhr-streaming") : !i["xdr-streaming"] || n.cookie_needed || n.null_origin ? a(["iframe-eventsource", "iframe-htmlfile"]) : r.push("xdr-streaming"), i["xhr-polling"] && !n.null_origin ? r.push("xhr-polling") : !i["xdr-polling"] || n.cookie_needed || n.null_origin ? a(["iframe-xhr-polling", "jsonp-polling"]) : r.push("xdr-polling"), r
          };
          var p = "_sockjs_global";
          n.createHook = function() {
               var e = "a" + n.random_string(8);
               if (!(p in t)) {
                    var i = {};
                    t[p] = function(e) {
                         return e in i || (i[e] = {
                              id: e,
                              del: function() {
                                   delete i[e]
                              }
                         }), i[e]
                    }
               }
               return t[p](e)
          }, n.attachMessage = function(e) {
               n.attachEvent("message", e)
          }, n.attachEvent = function(n, i) {
               void 0 !== t.addEventListener ? t.addEventListener(n, i, !1) : (e.attachEvent("on" + n, i), t.attachEvent("on" + n, i))
          }, n.detachMessage = function(e) {
               n.detachEvent("message", e)
          }, n.detachEvent = function(n, i) {
               void 0 !== t.addEventListener ? t.removeEventListener(n, i, !1) : (e.detachEvent("on" + n, i), t.detachEvent("on" + n, i))
          };
          var g = {},
               m = !1,
               v = function() {
                    for (var e in g) g[e](), delete g[e]
               },
               y = function() {
                    m || (m = !0, v())
               };
          n.attachEvent("unload", y), n.unload_add = function(e) {
               var t = n.random_string(8);
               return g[t] = e, m && n.delay(v), t
          }, n.unload_del = function(e) {
               e in g && delete g[e]
          }, n.createIframe = function(t, i) {
               var r, o, s = e.createElement("iframe"),
                    a = function() {
                         clearTimeout(r);
                         try {
                              s.onload = null
                         } catch (e) {}
                         s.onerror = null
                    },
                    u = function() {
                         s && (a(), setTimeout(function() {
                              s && s.parentNode.removeChild(s), s = null
                         }, 0), n.unload_del(o))
                    },
                    c = function(e) {
                         s && (u(), i(e))
                    },
                    l = function(e, t) {
                         try {
                              s && s.contentWindow && s.contentWindow.postMessage(e, t)
                         } catch (e) {}
                    };
               return s.src = t, s.style.display = "none", s.style.position = "absolute", s.onerror = function() {
                    c("onerror")
               }, s.onload = function() {
                    clearTimeout(r), r = setTimeout(function() {
                         c("onload timeout")
                    }, 2e3)
               }, e.body.appendChild(s), r = setTimeout(function() {
                    c("timeout")
               }, 15e3), o = n.unload_add(u), {
                    post: l,
                    cleanup: u,
                    loaded: a
               }
          }, n.createHtmlfile = function(e, i) {
               var r, o, s, a = new ActiveXObject("htmlfile"),
                    u = function() {
                         clearTimeout(r)
                    },
                    c = function() {
                         a && (u(), n.unload_del(o), s.parentNode.removeChild(s), s = a = null, CollectGarbage())
                    },
                    l = function(e) {
                         a && (c(), i(e))
                    },
                    f = function(e, t) {
                         try {
                              s && s.contentWindow && s.contentWindow.postMessage(e, t)
                         } catch (e) {}
                    };
               a.open(), a.write('<html><script>document.domain="' + document.domain + '";<\/script></html>'), a.close(), a.parentWindow._jp = t._jp;
               var h = a.createElement("div");
               return a.body.appendChild(h), s = a.createElement("iframe"), h.appendChild(s), s.src = e, r = setTimeout(function() {
                    l("timeout")
               }, 15e3), o = n.unload_add(c), {
                    post: f,
                    cleanup: c,
                    loaded: u
               }
          };
          var b = function() {};
          b.prototype = new o(["chunk", "finish"]), b.prototype._start = function(e, i, r, o) {
               var s = this;
               try {
                    s.xhr = new XMLHttpRequest
               } catch (e) {}
               if (!s.xhr) try {
                    s.xhr = new t.ActiveXObject("Microsoft.XMLHTTP")
               } catch (e) {}(t.ActiveXObject || t.XDomainRequest) && (i += (-1 === i.indexOf("?") ? "?" : "&") + "t=" + +new Date), s.unload_ref = n.unload_add(function() {
                    s._cleanup(!0)
               });
               try {
                    s.xhr.open(e, i, !0)
               } catch (e) {
                    return s.emit("finish", 0, ""), void s._cleanup()
               }
               if (o && o.no_credentials || (s.xhr.withCredentials = "true"), o && o.headers)
                    for (var a in o.headers) s.xhr.setRequestHeader(a, o.headers[a]);
               s.xhr.onreadystatechange = function() {
                    if (s.xhr) {
                         var e = s.xhr;
                         switch (e.readyState) {
                              case 3:
                                   try {
                                        var t = e.status,
                                             n = e.responseText
                                   } catch (e) {}
                                   1223 === t && (t = 204), n && n.length > 0 && s.emit("chunk", t, n);
                                   break;
                              case 4:
                                   var t = e.status;
                                   1223 === t && (t = 204), s.emit("finish", t, e.responseText), s._cleanup(!1)
                         }
                    }
               }, s.xhr.send(r)
          }, b.prototype._cleanup = function(e) {
               var t = this;
               if (t.xhr) {
                    if (n.unload_del(t.unload_ref), t.xhr.onreadystatechange = function() {}, e) try {
                         t.xhr.abort()
                    } catch (e) {}
                    t.unload_ref = t.xhr = null
               }
          }, b.prototype.close = function() {
               var e = this;
               e.nuke(), e._cleanup(!0)
          }, (n.XHRCorsObject = function() {
               var e = this,
                    t = arguments;
               n.delay(function() {
                    e._start.apply(e, t)
               })
          }).prototype = new b, (n.XHRLocalObject = function(e, t, i) {
               var r = this;
               n.delay(function() {
                    r._start(e, t, i, {
                         no_credentials: !0
                    })
               })
          }).prototype = new b;
          var w = n.XDRObject = function(e, t, i) {
               var r = this;
               n.delay(function() {
                    r._start(e, t, i)
               })
          };
          w.prototype = new o(["chunk", "finish"]), w.prototype._start = function(e, t, i) {
               var r = this,
                    o = new XDomainRequest;
               t += (-1 === t.indexOf("?") ? "?" : "&") + "t=" + +new Date;
               var s = o.ontimeout = o.onerror = function() {
                    r.emit("finish", 0, ""), r._cleanup(!1)
               };
               o.onprogress = function() {
                    r.emit("chunk", 200, o.responseText)
               }, o.onload = function() {
                    r.emit("finish", 200, o.responseText), r._cleanup(!1)
               }, r.xdr = o, r.unload_ref = n.unload_add(function() {
                    r._cleanup(!0)
               });
               try {
                    r.xdr.open(e, t), r.xdr.send(i)
               } catch (e) {
                    s()
               }
          }, w.prototype._cleanup = function(e) {
               var t = this;
               if (t.xdr) {
                    if (n.unload_del(t.unload_ref), t.xdr.ontimeout = t.xdr.onerror = t.xdr.onprogress = t.xdr.onload = null, e) try {
                         t.xdr.abort()
                    } catch (e) {}
                    t.unload_ref = t.xdr = null
               }
          }, w.prototype.close = function() {
               var e = this;
               e.nuke(), e._cleanup(!0)
          }, n.isXHRCorsCapable = function() {
               return t.XMLHttpRequest && "withCredentials" in new XMLHttpRequest ? 1 : t.XDomainRequest && e.domain ? 2 : M.enabled() ? 3 : 4
          };
          var x = function(e, t, i) {
               if (!(this instanceof x)) return new x(e, t, i);
               var r, o = this;
               o._options = {
                    devel: !1,
                    debug: !1,
                    protocols_whitelist: [],
                    info: void 0,
                    rtt: void 0
               }, i && n.objectExtend(o._options, i), o._base_url = n.amendUrl(e), o._server = o._options.server || n.random_number_string(1e3), o._options.protocols_whitelist && o._options.protocols_whitelist.length ? r = o._options.protocols_whitelist : (r = "string" == typeof t && t.length > 0 ? [t] : n.isArray(t) ? t : null) && o._debug('Deprecated API: Use "protocols_whitelist" option instead of supplying protocol list as a second parameter to SockJS constructor.'), o._protocols = [], o.protocol = null, o.readyState = x.CONNECTING, o._ir = $(o._base_url), o._ir.onfinish = function(e, t) {
                    o._ir = null, e ? (o._options.info && (e = n.objectExtend(e, o._options.info)), o._options.rtt && (t = o._options.rtt), o._applyInfo(e, t, r), o._didClose()) : o._didClose(1002, "Can't connect to server", !0)
               }
          };
          x.prototype = new i, x.version = "0.3.4.12.gb154", x.CONNECTING = 0, x.OPEN = 1, x.CLOSING = 2, x.CLOSED = 3, x.prototype._debug = function() {
               this._options.debug && n.log.apply(n, arguments)
          }, x.prototype._dispatchOpen = function() {
               var e = this;
               e.readyState === x.CONNECTING ? (e._transport_tref && (clearTimeout(e._transport_tref), e._transport_tref = null), e.readyState = x.OPEN, e.dispatchEvent(new r("open"))) : e._didClose(1006, "Server lost session")
          }, x.prototype._dispatchMessage = function(e) {
               var t = this;
               t.readyState === x.OPEN && t.dispatchEvent(new r("message", {
                    data: e
               }))
          }, x.prototype._dispatchHeartbeat = function(e) {
               var t = this;
               t.readyState === x.OPEN && t.dispatchEvent(new r("heartbeat", {}))
          }, x.prototype._didClose = function(e, t, i) {
               var o = this;
               if (o.readyState !== x.CONNECTING && o.readyState !== x.OPEN && o.readyState !== x.CLOSING) throw new Error("INVALID_STATE_ERR");
               o._ir && (o._ir.nuke(), o._ir = null), o._transport && (o._transport.doCleanup(), o._transport = null);
               var s = new r("close", {
                    code: e,
                    reason: t,
                    wasClean: n.userSetCode(e)
               });
               if (!n.userSetCode(e) && o.readyState === x.CONNECTING && !i) {
                    if (o._try_next_protocol(s)) return;
                    s = new r("close", {
                         code: 2e3,
                         reason: "All transports failed",
                         wasClean: !1,
                         last_event: s
                    })
               }
               o.readyState = x.CLOSED, n.delay(function() {
                    o.dispatchEvent(s)
               })
          }, x.prototype._didMessage = function(e) {
               var t = this;
               switch (e.slice(0, 1)) {
                    case "o":
                         t._dispatchOpen();
                         break;
                    case "a":
                         for (var n = JSON.parse(e.slice(1) || "[]"), i = 0; i < n.length; i++) t._dispatchMessage(n[i]);
                         break;
                    case "m":
                         var n = JSON.parse(e.slice(1) || "null");
                         t._dispatchMessage(n);
                         break;
                    case "c":
                         var n = JSON.parse(e.slice(1) || "[]");
                         t._didClose(n[0], n[1]);
                         break;
                    case "h":
                         t._dispatchHeartbeat()
               }
          }, x.prototype._try_next_protocol = function(t) {
               var i = this;
               for (i.protocol && (i._debug("Closed transport:", i.protocol, "" + t), i.protocol = null), i._transport_tref && (clearTimeout(i._transport_tref), i._transport_tref = null);;) {
                    var r = i.protocol = i._protocols.shift();
                    if (!r) return !1;
                    if (x[r] && !0 === x[r].need_body && (!e.body || void 0 !== e.readyState && "complete" !== e.readyState)) return i._protocols.unshift(r), i.protocol = "waiting-for-load", n.attachEvent("load", function() {
                         i._try_next_protocol()
                    }), !0;
                    if (x[r] && x[r].enabled(i._options)) {
                         var o = x[r].roundTrips || 1,
                              s = (i._options.rto || 0) * o || 5e3;
                         i._transport_tref = n.delay(s, function() {
                              i.readyState === x.CONNECTING && i._didClose(2007, "Transport timeouted")
                         });
                         var a = n.random_string(8),
                              u = i._base_url + "/" + i._server + "/" + a;
                         return i._debug("Opening transport:", r, " url:" + u, " RTO:" + i._options.rto), i._transport = new x[r](i, u, i._base_url), !0
                    }
                    i._debug("Skipping transport:", r)
               }
          }, x.prototype.close = function(e, t) {
               var i = this;
               if (e && !n.userSetCode(e)) throw new Error("INVALID_ACCESS_ERR");
               return (i.readyState === x.CONNECTING || i.readyState === x.OPEN) && (i.readyState = x.CLOSING, i._didClose(e || 1e3, t || "Normal closure"), !0)
          }, x.prototype.send = function(e) {
               var t = this;
               if (t.readyState === x.CONNECTING) throw new Error("INVALID_STATE_ERR");
               return t.readyState === x.OPEN && t._transport.doSend(n.quote("" + e)), !0
          }, x.prototype._applyInfo = function(t, i, r) {
               var o = this;
               o._options.info = t, o._options.rtt = i, o._options.rto = n.countRTO(i), o._options.info.null_origin = !e.domain;
               var s = n.probeProtocols();
               o._protocols = n.detectProtocols(s, r, t)
          };
          var _ = x.websocket = function(e, i) {
               var r = this,
                    o = i + "/websocket";
               o = "https" === o.slice(0, 5) ? "wss" + o.slice(5) : "ws" + o.slice(4), r.ri = e, r.url = o;
               var s = t.WebSocket || t.MozWebSocket;
               r.ws = new s(r.url), r.ws.onmessage = function(e) {
                    r.ri._didMessage(e.data)
               }, r.unload_ref = n.unload_add(function() {
                    r.ws.close()
               }), r.ws.onclose = function() {
                    r.ri._didMessage(n.closeFrame(1006, "WebSocket connection broken"))
               }
          };
          _.prototype.doSend = function(e) {
               this.ws.send("[" + e + "]")
          }, _.prototype.doCleanup = function() {
               var e = this,
                    t = e.ws;
               t && (t.onmessage = t.onclose = null, t.close(), n.unload_del(e.unload_ref), e.unload_ref = e.ri = e.ws = null)
          }, _.enabled = function() {
               return !(!t.WebSocket && !t.MozWebSocket)
          }, _.roundTrips = 2;
          var E = function() {};
          E.prototype.send_constructor = function(e) {
               var t = this;
               t.send_buffer = [], t.sender = e
          }, E.prototype.doSend = function(e) {
               var t = this;
               t.send_buffer.push(e), t.send_stop || t.send_schedule()
          }, E.prototype.send_schedule_wait = function() {
               var e, t = this;
               t.send_stop = function() {
                    t.send_stop = null, clearTimeout(e)
               }, e = n.delay(25, function() {
                    t.send_stop = null, t.send_schedule()
               })
          }, E.prototype.send_schedule = function() {
               var e = this;
               if (e.send_buffer.length > 0) {
                    var t = "[" + e.send_buffer.join(",") + "]";
                    e.send_stop = e.sender(e.trans_url, t, function(t, n) {
                         e.send_stop = null, !1 === t ? e.ri._didClose(1006, "Sending error " + n) : e.send_schedule_wait()
                    }), e.send_buffer = []
               }
          }, E.prototype.send_destructor = function() {
               var e = this;
               e._send_stop && e._send_stop(), e._send_stop = null
          };
          var T = function(t, i, r) {
                    var o = this;
                    if (!("_send_form" in o)) {
                         var s = o._send_form = e.createElement("form"),
                              a = o._send_area = e.createElement("textarea");
                         a.name = "d", s.style.display = "none", s.style.position = "absolute", s.method = "POST", s.enctype = "application/x-www-form-urlencoded", s.acceptCharset = "UTF-8", s.appendChild(a), e.body.appendChild(s)
                    }
                    var s = o._send_form,
                         a = o._send_area,
                         u = "a" + n.random_string(8);
                    s.target = u, s.action = t + "/jsonp_send?i=" + u;
                    var c;
                    try {
                         c = e.createElement('<iframe name="' + u + '">')
                    } catch (t) {
                         c = e.createElement("iframe"), c.name = u
                    }
                    c.id = u, s.appendChild(c), c.style.display = "none";
                    try {
                         a.value = i
                    } catch (e) {
                         n.log("Your browser is seriously broken. Go home! " + e.message)
                    }
                    s.submit();
                    var l = function(e) {
                         c.onerror && (c.onreadystatechange = c.onerror = c.onload = null, n.delay(500, function() {
                              c.parentNode.removeChild(c), c = null
                         }), a.value = "", r(!0))
                    };
                    return c.onerror = c.onload = l, c.onreadystatechange = function(e) {
                         "complete" == c.readyState && l()
                    }, l
               },
               S = function(e) {
                    return function(t, n, i) {
                         return new e("POST", t + "/xhr_send", n).onfinish = function(e, t) {
                                   i(200 === e || 204 === e, "http status " + e)
                              },
                              function(e) {
                                   i(!1, e)
                              }
                    }
               },
               k = function(t, i) {
                    var r, o, s = e.createElement("script"),
                         a = function(e) {
                              o && (o.parentNode.removeChild(o), o = null), s && (clearTimeout(r), s.parentNode.removeChild(s), s.onreadystatechange = s.onerror = s.onload = s.onclick = null, s = null, i(e), i = null)
                         },
                         u = !1,
                         c = null;
                    if (s.id = "a" + n.random_string(8), s.src = t, s.type = "text/javascript", s.charset = "UTF-8", s.onerror = function(e) {
                              c || (c = setTimeout(function() {
                                   u || a(n.closeFrame(1006, "JSONP script loaded abnormally (onerror)"))
                              }, 1e3))
                         }, s.onload = function(e) {
                              a(n.closeFrame(1006, "JSONP script loaded abnormally (onload)"))
                         }, s.onreadystatechange = function(e) {
                              if (/loaded|closed/.test(s.readyState)) {
                                   if (s && s.htmlFor && s.onclick) {
                                        u = !0;
                                        try {
                                             s.onclick()
                                        } catch (e) {}
                                   }
                                   s && a(n.closeFrame(1006, "JSONP script loaded abnormally (onreadystatechange)"))
                              }
                         }, void 0 === s.async && e.attachEvent)
                         if (/opera/i.test(navigator.userAgent)) o = e.createElement("script"), o.text = "try{var a = document.getElementById('" + s.id + "'); if(a)a.onerror();}catch(x){};", s.async = o.async = !1;
                         else {
                              try {
                                   s.htmlFor = s.id, s.event = "onclick"
                              } catch (e) {}
                              s.async = !0
                         } void 0 !== s.async && (s.async = !0), r = setTimeout(function() {
                         a(n.closeFrame(1006, "JSONP script loaded abnormally (timeout)"))
                    }, 35e3);
                    var l = e.getElementsByTagName("head")[0];
                    return l.insertBefore(s, l.firstChild), o && l.insertBefore(o, l.firstChild), a
               },
               N = x["jsonp-polling"] = function(e, t) {
                    n.polluteGlobalNamespace();
                    var i = this;
                    i.ri = e, i.trans_url = t, i.send_constructor(T), i._schedule_recv()
               };
          N.prototype = new E, N.prototype._schedule_recv = function() {
               var e = this,
                    t = function(t) {
                         e._recv_stop = null, t && (e._is_closing || e.ri._didMessage(t)), e._is_closing || e._schedule_recv()
                    };
               e._recv_stop = C(e.trans_url + "/jsonp", k, t)
          }, N.enabled = function() {
               return !0
          }, N.need_body = !0, N.prototype.doCleanup = function() {
               var e = this;
               e._is_closing = !0, e._recv_stop && e._recv_stop(), e.ri = e._recv_stop = null, e.send_destructor()
          };
          var C = function(e, i, r) {
                    var o = "a" + n.random_string(6),
                         s = e + "?c=" + escape("_jp." + o),
                         a = 0,
                         u = function(e) {
                              switch (a) {
                                   case 0:
                                        delete t._jp[o], r(e);
                                        break;
                                   case 1:
                                        r(e), a = 2;
                                        break;
                                   case 2:
                                        delete t._jp[o]
                              }
                         },
                         c = i(s, u);
                    return t._jp[o] = c,
                         function() {
                              t._jp[o] && (a = 1,
                                   t._jp[o](n.closeFrame(1e3, "JSONP user aborted read")))
                         }
               },
               O = function() {};
          O.prototype = new E, O.prototype.run = function(e, t, n, i, r) {
               var o = this;
               o.ri = e, o.trans_url = t, o.send_constructor(S(r)), o.poll = new W(e, i, t + n, r)
          }, O.prototype.doCleanup = function() {
               var e = this;
               e.poll && (e.poll.abort(), e.poll = null)
          };
          var D = x["xhr-streaming"] = function(e, t) {
               this.run(e, t, "/xhr_streaming", G, n.XHRCorsObject)
          };
          D.prototype = new O, D.enabled = function() {
               return t.XMLHttpRequest && "withCredentials" in new XMLHttpRequest && !/opera/i.test(navigator.userAgent)
          }, D.roundTrips = 2, D.need_body = !0;
          var j = x["xdr-streaming"] = function(e, t) {
               this.run(e, t, "/xhr_streaming", G, n.XDRObject)
          };
          j.prototype = new O, j.enabled = function() {
               return !!t.XDomainRequest
          }, j.roundTrips = 2;
          var A = x["xhr-polling"] = function(e, t) {
               this.run(e, t, "/xhr", G, n.XHRCorsObject)
          };
          A.prototype = new O, A.enabled = D.enabled, A.roundTrips = 2;
          var R = x["xdr-polling"] = function(e, t) {
               this.run(e, t, "/xhr", G, n.XDRObject)
          };
          R.prototype = new O, R.enabled = j.enabled, R.roundTrips = 2;
          var M = function() {};
          M.prototype.i_constructor = function(e, t, i) {
               var r = this;
               r.ri = e, r.origin = n.getOrigin(i), r.base_url = i, r.trans_url = t;
               var o = i + "/iframe.html";
               r.ri._options.devel && (o += "?t=" + +new Date), r.window_id = n.random_string(8), o += "#" + r.window_id, r.iframeObj = n.createIframe(o, function(e) {
                    r.ri._didClose(1006, "Unable to load an iframe (" + e + ")")
               }), r.onmessage_cb = n.bind(r.onmessage, r), n.attachMessage(r.onmessage_cb)
          }, M.prototype.doCleanup = function() {
               var e = this;
               if (e.iframeObj) {
                    n.detachMessage(e.onmessage_cb);
                    try {
                         e.iframeObj.iframe.contentWindow && e.postMessage("c")
                    } catch (e) {}
                    e.iframeObj.cleanup(), e.iframeObj = null, e.onmessage_cb = e.iframeObj = null
               }
          }, M.prototype.onmessage = function(e) {
               var t = this;
               if (e.origin === t.origin) {
                    var n = e.data.slice(0, 8),
                         i = e.data.slice(8, 9),
                         r = e.data.slice(9);
                    if (n === t.window_id) switch (i) {
                         case "s":
                              t.iframeObj.loaded(), t.postMessage("s", JSON.stringify([x.version, t.protocol, t.trans_url, t.base_url]));
                              break;
                         case "t":
                              t.ri._didMessage(r)
                    }
               }
          }, M.prototype.postMessage = function(e, t) {
               var n = this;
               n.iframeObj.post(n.window_id + e + (t || ""), n.origin)
          }, M.prototype.doSend = function(e) {
               this.postMessage("m", e)
          }, M.enabled = function() {
               var e = navigator && navigator.userAgent && -1 !== navigator.userAgent.indexOf("Konqueror");
               return ("function" == typeof t.postMessage || "object" == typeof t.postMessage) && !e
          };
          var P, H = function(e, i) {
                    parent !== t ? parent.postMessage(P + e + (i || ""), "*") : n.log("Can't postMessage, no parent window.", e, i)
               },
               I = function() {};
          I.prototype._didClose = function(e, t) {
               H("t", n.closeFrame(e, t))
          }, I.prototype._didMessage = function(e) {
               H("t", e)
          }, I.prototype._doSend = function(e) {
               this._transport.doSend(e)
          }, I.prototype._doCleanup = function() {
               this._transport.doCleanup()
          }, n.parent_origin = void 0, x.bootstrap_iframe = function() {
               var i;
               P = e.location.hash.slice(1);
               var r = function(e) {
                    if (e.source === parent && (void 0 === n.parent_origin && (n.parent_origin = e.origin), e.origin === n.parent_origin)) {
                         var r = e.data.slice(0, 8),
                              o = e.data.slice(8, 9),
                              s = e.data.slice(9);
                         if (r === P) switch (o) {
                              case "s":
                                   var a = JSON.parse(s),
                                        u = a[0],
                                        c = a[1],
                                        l = a[2],
                                        f = a[3];
                                   if (u !== x.version && n.log('Incompatibile SockJS! Main site uses: "' + u + '", the iframe: "' + x.version + '".'), !n.flatUrl(l) || !n.flatUrl(f)) return void n.log("Only basic urls are supported in SockJS");
                                   if (!n.isSameOriginUrl(l) || !n.isSameOriginUrl(f)) return void n.log("Can't connect to different domain from within an iframe. (" + JSON.stringify([t.location.href, l, f]) + ")");
                                   i = new I, i._transport = new I[c](i, l, f);
                                   break;
                              case "m":
                                   i._doSend(s);
                                   break;
                              case "c":
                                   i && i._doCleanup(), i = null
                         }
                    }
               };
               n.attachMessage(r), H("s")
          };
          var L = function(e, t) {
               var i = this;
               n.delay(function() {
                    i.doXhr(e, t)
               })
          };
          L.prototype = new o(["finish"]), L.prototype.doXhr = function(e, t) {
               var i = this,
                    r = (new Date).getTime(),
                    o = new t("GET", e + "/info"),
                    s = n.delay(8e3, function() {
                         o.ontimeout()
                    });
               o.onfinish = function(e, t) {
                    if (clearTimeout(s), s = null, 200 === e) {
                         var n = (new Date).getTime() - r,
                              o = JSON.parse(t);
                         "object" != typeof o && (o = {}), i.emit("finish", o, n)
                    } else i.emit("finish")
               }, o.ontimeout = function() {
                    o.close(), i.emit("finish")
               }
          };
          var q = function(t) {
               var i = this,
                    r = function() {
                         var e = new M;
                         e.protocol = "w-iframe-info-receiver";
                         var n = function(t) {
                                   if ("string" == typeof t && "m" === t.substr(0, 1)) {
                                        var n = JSON.parse(t.substr(1)),
                                             r = n[0],
                                             o = n[1];
                                        i.emit("finish", r, o)
                                   } else i.emit("finish");
                                   e.doCleanup(), e = null
                              },
                              r = {
                                   _options: {},
                                   _didClose: n,
                                   _didMessage: n
                              };
                         e.i_constructor(r, t, t)
                    };
               e.body ? r() : n.attachEvent("load", r)
          };
          q.prototype = new o(["finish"]);
          var F = function() {
               var e = this;
               n.delay(function() {
                    e.emit("finish", {}, 2e3)
               })
          };
          F.prototype = new o(["finish"]);
          var $ = function(e) {
               if (n.isSameOriginUrl(e)) return new L(e, n.XHRLocalObject);
               switch (n.isXHRCorsCapable()) {
                    case 1:
                         return new L(e, n.XHRLocalObject);
                    case 2:
                         return new L(e, n.XDRObject);
                    case 3:
                         return new q(e);
                    default:
                         return new F
               }
          };
          (I["w-iframe-info-receiver"] = function(e, t, i) {
               new L(i, n.XHRLocalObject).onfinish = function(t, n) {
                    e._didMessage("m" + JSON.stringify([t, n])), e._didClose()
               }
          }).prototype.doCleanup = function() {};
          var U = x["iframe-eventsource"] = function() {
               var e = this;
               e.protocol = "w-iframe-eventsource", e.i_constructor.apply(e, arguments)
          };
          U.prototype = new M, U.enabled = function() {
               return "EventSource" in t && M.enabled()
          }, U.need_body = !0, U.roundTrips = 3, (I["w-iframe-eventsource"] = function(e, t) {
               this.run(e, t, "/eventsource", X, n.XHRLocalObject)
          }).prototype = new O;
          var B = x["iframe-xhr-polling"] = function() {
               var e = this;
               e.protocol = "w-iframe-xhr-polling", e.i_constructor.apply(e, arguments)
          };
          B.prototype = new M, B.enabled = function() {
               return t.XMLHttpRequest && M.enabled()
          }, B.need_body = !0, B.roundTrips = 3, (I["w-iframe-xhr-polling"] = function(e, t) {
               this.run(e, t, "/xhr", G, n.XHRLocalObject)
          }).prototype = new O;
          var V = x["iframe-htmlfile"] = function() {
               var e = this;
               e.protocol = "w-iframe-htmlfile", e.i_constructor.apply(e, arguments)
          };
          V.prototype = new M, V.enabled = function() {
               return M.enabled()
          }, V.need_body = !0, V.roundTrips = 3, (I["w-iframe-htmlfile"] = function(e, t) {
               this.run(e, t, "/htmlfile", Y, n.XHRLocalObject)
          }).prototype = new O;
          var W = function(e, t, n, i) {
               var r = this;
               r.ri = e, r.Receiver = t, r.recv_url = n, r.AjaxObject = i, r._scheduleRecv()
          };
          W.prototype._scheduleRecv = function() {
               var e = this,
                    t = e.poll = new e.Receiver(e.recv_url, e.AjaxObject),
                    n = 0;
               t.onmessage = function(t) {
                    n += 1, e.ri._didMessage(t.data)
               }, t.onclose = function(n) {
                    e.poll = t = t.onmessage = t.onclose = null, e.poll_is_closing || ("permanent" === n.reason ? e.ri._didClose(1006, "Polling error (" + n.reason + ")") : e._scheduleRecv())
               }
          }, W.prototype.abort = function() {
               var e = this;
               e.poll_is_closing = !0, e.poll && e.poll.abort()
          };
          var X = function(e) {
               var t = this,
                    i = new EventSource(e);
               i.onmessage = function(e) {
                    t.dispatchEvent(new r("message", {
                         data: unescape(e.data)
                    }))
               }, t.es_close = i.onerror = function(e, o) {
                    var s = o ? "user" : 2 !== i.readyState ? "network" : "permanent";
                    t.es_close = i.onmessage = i.onerror = null, i.close(), i = null, n.delay(200, function() {
                         t.dispatchEvent(new r("close", {
                              reason: s
                         }))
                    })
               }
          };
          X.prototype = new i, X.prototype.abort = function() {
               var e = this;
               e.es_close && e.es_close({}, !0)
          };
          var z, J = function() {
                    if (void 0 === z)
                         if ("ActiveXObject" in t) try {
                              z = !!new ActiveXObject("htmlfile")
                         } catch (e) {} else z = !1;
                    return z
               },
               Y = function(e) {
                    var i = this;
                    n.polluteGlobalNamespace(), i.id = "a" + n.random_string(6, 26), e += (-1 === e.indexOf("?") ? "?" : "&") + "c=" + escape("_jp." + i.id);
                    var o, s = J() ? n.createHtmlfile : n.createIframe;
                    t._jp[i.id] = {
                         start: function() {
                              o.loaded()
                         },
                         message: function(e) {
                              i.dispatchEvent(new r("message", {
                                   data: e
                              }))
                         },
                         stop: function() {
                              i.iframe_close({}, "network")
                         }
                    }, i.iframe_close = function(e, n) {
                         o.cleanup(), i.iframe_close = o = null, delete t._jp[i.id], i.dispatchEvent(new r("close", {
                              reason: n
                         }))
                    }, o = s(e, function(e) {
                         i.iframe_close({}, "permanent")
                    })
               };
          Y.prototype = new i, Y.prototype.abort = function() {
               var e = this;
               e.iframe_close && e.iframe_close({}, "user")
          };
          var G = function(e, t) {
               var n = this,
                    i = 0;
               n.xo = new t("POST", e, null), n.xo.onchunk = function(e, t) {
                    if (200 === e)
                         for (;;) {
                              var o = t.slice(i),
                                   s = o.indexOf("\n");
                              if (-1 === s) break;
                              i += s + 1;
                              var a = o.slice(0, s);
                              n.dispatchEvent(new r("message", {
                                   data: a
                              }))
                         }
               }, n.xo.onfinish = function(e, t) {
                    n.xo.onchunk(e, t), n.xo = null;
                    var i = 200 === e ? "network" : "permanent";
                    n.dispatchEvent(new r("close", {
                         reason: i
                    }))
               }
          };
          return G.prototype = new i, G.prototype.abort = function() {
               var e = this;
               e.xo && (e.xo.close(), e.dispatchEvent(new r("close", {
                    reason: "user"
               })), e.xo = null)
          }, x.getUtils = function() {
               return n
          }, x.getIframeTransport = function() {
               return M
          }, x
     }(), "_sockjs_onload" in window && setTimeout(_sockjs_onload, 1), "function" == typeof define && define.amd && define("foundation/lib/sockjs", [], function() {
          return SockJS
     }), define("foundation/views/page-manager", ["jquery/nyt", "underscore/nyt", "backbone/nyt", "foundation/cookies"], function(e, t, n, i) {
          "use strict";
          return new(n.View.extend({
               el: e(window),
               $document: e(document),
               $window: e(window),
               $html: e("html"),
               $body: e("body"),
               $shell: e("#shell"),
               $dom: {},
               disabledComponents: [],
               cachedViewport: {},
               metaTagStore: {},
               urlParamStore: {},
               edition: "us",
               furniture: {
                    mediaViewerOpen: !1
               },
               pageReferrer: document.referrer,
               KEYS: {
                    ENTER: 13,
                    ESC: 27,
                    LEFT: 37,
                    UP: 38,
                    RIGHT: 39,
                    DOWN: 40,
                    SPACE: 32,
                    PAGE_UP: 33,
                    PAGE_DOWN: 34,
                    TAB: 9
               },
               trackingEventQueue: [],
               trackingQueueEmptied: !1,
               navigationKeysEnabled: !0,
               a11yEnabled: !1,
               adBlockDetectionPromise: new e.Deferred,
               router: new n.Router,
               initialize: function() {
                    var n = this;
                    this.setPageViewId(), t.bindAll(this, "handleBreakpoint", "handleKeyDown", "handleOrientation", "handlePageReady", "handleResizeDebounce", "handleResizeThrottle", "handleScrollDebounce", "handleScrollThrottle", "handleScrollUnthrottled", "handleHashChange", "handleSkipTo", "handleContentFocus", "handleUserActivity", "handleOnFocus", "handleBlur"), e.ajaxSetup({
                         cache: !0
                    }), this.isReady = !1, this.initEdition(), this.initMetaTags(), this.initComponentToggle(), this.initUrlParams(window.location.search), this.$document.ready(this.handlePageReady), this.initCanonical(), this.currentlyHasFocus = document.hasFocus(), "undefined" == typeof blockAdBlock ? this.adBlockDetectionPromise.reject() : (window.blockAdBlock.check(), window.blockAdBlock.onDetected(function() {
                         n.adBlockDetectionPromise.resolve()
                    }), window.blockAdBlock.onNotDetected(function() {
                         n.adBlockDetectionPromise.reject()
                    }))
               },
               handlePageReady: function() {
                    this.isReady = !0, this.$body = e("body"), this.$shell = e("#shell"), this.$masthead = e("#masthead"), this.trigger("nyt:page-ready"), this.listenTo(this, "nyt:page-viewportchange", this.setViewport), this.listenTo(this, "nyt:app-swipe", this.handleSwipe), this.listenTo(this, "nyt:app-drag", this.handleDrag), this.$el.on("scroll", this.handleScrollThrottle), this.$el.on("scroll", this.handleScrollDebounce), this.$el.on("scroll", this.handleScrollUnthrottled), this.$el.on("resize", this.handleResizeThrottle), this.$el.on("resize", this.handleResizeDebounce), this.$el.on("hashchange", this.handleHashChange), this.$body.on("click", ".skip-button", this.handleSkipTo), this.$window.on("scroll", this.handleUserActivity), this.$window.on("focus", this.handleOnFocus), this.$window.on("focusout", this.handleBlur), this.$document.on("keydown mousedown mouseenter", this.handleUserActivity), this.$document.on("keydown", this.handleKeyDown), window.magnum.on("breakPoint", this.handleBreakpoint), window.magnum.on("orientationChange", this.handleOrientation), this.listenTo(this.router, "route", function(e, t) {
                         this.trigger("nyt:route:" + e, t)
                    }), n.history.start(), this.handlePageViewId()
               },
               handleBreakpoint: function() {
                    var e = Array.prototype.slice.call(arguments, 0);
                    e.unshift("nyt:page-breakpoint"), this.trigger.apply(this, e)
               },
               handleOrientation: function() {
                    var e = Array.prototype.slice.call(arguments, 0);
                    e.unshift("nyt:page-orientation"), this.trigger.apply(this, e)
               },
               handleScroll: function() {
                    this.trigger("nyt:page-scroll"), this.trigger("nyt:page-viewportchange")
               },
               handleScrollThrottle: t.throttle(function() {
                    this.handleScroll()
               }, 100),
               handleScrollUnthrottled: t.throttle(function() {
                    this.trigger("nyt:page-scroll-unthrottled")
               }, 17),
               handleScrollDebounce: t.debounce(function() {
                    this.handleScroll(), this.trigger("nyt:page-scroll-after")
               }, 100),
               handleResize: function() {
                    this.trigger("nyt:page-resize"), this.trigger("nyt:page-viewportchange")
               },
               handleResizeThrottle: t.throttle(function() {
                    this.handleResize()
               }, 100),
               handleResizeDebounce: t.debounce(function() {
                    this.handleResize(), this.trigger("nyt:page-resize-after")
               }, 100),
               handleSwipe: function(e) {
                    this.trigger("nyt:page-swipe", e)
               },
               handleDrag: function(e, t) {
                    this.trigger("nyt:page-drag", e, t)
               },
               enableNavigationKeys: function() {
                    this.navigationKeysEnabled = !0
               },
               disableNavigationKeys: function() {
                    this.navigationKeysEnabled = !1
               },
               handleKeyDown: function(t) {
                    var n = t.keyCode,
                         i = e(t.target),
                         r = i.is("input, textarea"),
                         o = t.shiftKey || t.altKey || t.ctrlKey || t.metaKey,
                         s = this.getMeta("mediaviewer_isVisible") || !1,
                         a = this.getMeta("commentspanel_isOpen") || !1,
                         u = this.getMeta("applicationName");
                    switch (!this.a11yEnabled && i.is(".enable-a11y") && this.toggleA11y(!0), n) {
                         case this.KEYS.UP:
                              this.a11yEnabled && this.trigger("nyt:page-key-up-a11y", t);
                              break;
                         case this.KEYS.DOWN:
                              this.a11yEnabled && this.trigger("nyt:page-key-down-a11y", t);
                              break;
                         case this.KEYS.LEFT:
                              if (this.a11yEnabled) {
                                   this.trigger("nyt:page-key-left-a11y", t);
                                   break
                              }
                              if (!this.navigationKeysEnabled || a) break;
                              "slideshow" === u && this.trigger("nyt:slideshow-left", t), s && !o ? this.trigger("nyt:mediaviewer-left") : r || o || this.trigger("nyt:ribbon-left");
                              break;
                         case this.KEYS.RIGHT:
                              if (this.a11yEnabled) {
                                   this.trigger("nyt:page-key-right-a11y", t);
                                   break
                              }
                              if (!this.navigationKeysEnabled || a) break;
                              "slideshow" === u && this.trigger("nyt:slideshow-right", t), s && !o ? this.trigger("nyt:mediaviewer-right") : r || o || this.trigger("nyt:ribbon-right");
                              break;
                         case this.KEYS.ESC:
                              this.a11yEnabled ? this.trigger("nyt:page-key-esc-a11y", t) : this.trigger("nyt:page-key-esc", t);
                              break;
                         case this.KEYS.TAB:
                              this.trigger("nyt:page-key-tab", t);
                              break;
                         case this.KEYS.ENTER:
                              this.trigger("nyt:page-key-enter", t);
                              break;
                         case this.KEYS.PAGE_UP:
                         case this.KEYS.PAGE_DOWN:
                              if (o) break;
                         case this.KEYS.SPACE:
                              i.is("body") && !this.$body.attr("contenteditable") && (t.preventDefault(), this.adjustScrollDepth(n, t.shiftKey))
                    }
               },
               handleHashChange: function() {
                    this.trigger("nyt:page-hashchange", this.getUrlHash())
               },
               handleSkipTo: function(e) {
                    this.trigger("nyt:page-skipto", e), e.target.blur(), t.defer(this.handleContentFocus)
               },
               handleContentFocus: function() {
                    var e = document.getElementById(this.getUrlHash());
                    e && (/^(?:a|select|input|button|textarea)$/i.test(e.tagName) || (e.tabIndex = -1), e.focus())
               },
               handleOnFocus: function() {
                    this.currentlyHasFocus = !0, this.trigger("nyt:on-focus")
               },
               handleBlur: function() {
                    this.currentlyHasFocus = !1, this.trigger("nyt:blur")
               },
               handleUserActivity: function() {
                    this.currentlyHasFocus = !0, this.trigger("nyt:user-activity")
               },
               adjustScrollDepth: function(t, n) {
                    var i, r = this,
                         o = this.getViewport(),
                         s = this.$masthead.outerHeight() || 0,
                         a = 1,
                         u = 0,
                         c = e("#ribbon");
                    !0 !== this.isScrolling && ((t === this.KEYS.PAGE_UP || t === this.KEYS.SPACE && n) && (a = -1), this.isComponentVisible(c) && (u = c.outerHeight()), i = o.top + a * (o.height - s - u - 40), i < 0 && (i = 0), this.isScrolling = !0, e("html, body").animate({
                         scrollTop: i
                    }, this.scrollAnimateTime, function() {
                         r.isScrolling = !1
                    })), this.scrollAnimateTime = 0, this.resetScrollAnimateTime()
               },
               resetScrollAnimateTime: t.debounce(function() {
                    this.scrollAnimateTime = 200
               }, 300),
               isDomReady: function() {
                    return this.isReady
               },
               setViewport: function() {
                    var e = this.$el.width(),
                         t = this.$el.height(),
                         n = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop,
                         i = t + n;
                    this.cachedViewport = {
                         width: e,
                         height: t,
                         top: n,
                         bottom: i
                    }
               },
               getApplicationName: function() {
                    return e("#applicationName").attr("content")
               },
               getViewport: function() {
                    return void 0 === this.cachedViewport.width && this.setViewport(), this.cachedViewport
               },
               getCurrentBreakpoint: function() {
                    return window.magnum.getViewportInteger()
               },
               getDevice: function() {
                    return window.magnum.device
               },
               isDesktop: function() {
                    return "desktop" === this.getDevice()
               },
               isMobile: function() {
                    return "mobile" === this.getDevice()
               },
               initCanonical: function() {
                    this.canonical = this.$html.find("head link[rel=canonical]").attr("href")
               },
               initMetaTags: function() {
                    var t = this;
                    e("meta").each(function() {
                         var n = e(this),
                              i = n.attr("name") || n.attr("property"),
                              r = n.attr("content") || n.attr("value");
                         i && t.setMeta(i, r, !1)
                    })
               },
               getMeta: function(e) {
                    return this.metaTagStore[e]
               },
               setMeta: function(e, t, n) {
                    this.metaTagStore[e] && !1 === n ? "string" == typeof this.metaTagStore[e] ? (this.metaTagStore[e] = [this.metaTagStore[e]], this.metaTagStore[e].push(t)) : this.metaTagStore[e] && this.metaTagStore[e].push(t) : this.metaTagStore[e] = t
               },
               initUrlParams: function(e) {
                    var t, n, i, r, o = {};
                    if (!e || 0 === e.length) return !1;
                    for (r = e.substring(1).split("&"), t = 0, i = r.length; t < i; t += 1) n = r[t].split("="), n[1] && n[1].indexOf(",") >= 0 ? o[n[0]] = n[1].split(",") : o[n[0]] = n[1] || "";
                    this.urlParamStore = o
               },
               getUrlParam: function(e) {
                    return this.urlParamStore[e]
               },
               getUrlHash: function() {
                    return (window.location.hash || "").replace("#", "")
               },
               setUrlHash: function(e) {
                    "string" != typeof e && "number" != typeof e || (window.location.hash = e)
               },
               initComponentToggle: function() {
                    var t, n, i, r = e("#display_overrides")[0];
                    if (r) {
                         try {
                              i = JSON.parse(r.innerHTML)
                         } catch (e) {
                              return
                         }
                         for (t = 0; t < i.length; t += 1) n = i[t], n = n.replace("HIDE_", "").toLowerCase(), this.disabledComponents.push(n)
                    }
               },
               isDisabled: function(e) {
                    return t.indexOf(this.disabledComponents, e) > -1
               },
               flag: function(e) {
                    return t.indexOf(window.magnum.getFlags(), e) > -1
               },
               initEdition: function() {
                    var e = i.readCookie("NYT-Edition") || "edition|US";
                    e = e.match(/\w+$/)[0].toLowerCase(), "us" !== e && "global" !== e && "spanish" !== e && (i.deleteCookie("NYT-Edition"), e = "us"), window.location.host.indexOf("international") > -1 && (e = "global", this.setEdition(e)), this.edition = e, window.magnum.addEditionClass(e)
               },
               setEdition: function(e) {
                    "us" === e ? (i.writeCookie("NYT-Edition", "edition|US"), this.edition = e) : "global" === e ? (i.writeCookie("NYT-Edition", "edition|GLOBAL"), this.edition = e) : "spanish" === e && (i.writeCookie("NYT-Edition", "edition|SPANISH"), this.edition = e)
               },
               getEdition: function() {
                    return this.edition
               },
               isDomesticEdition: function() {
                    return "us" === this.edition
               },
               isInternationalEdition: function() {
                    return "global" === this.edition
               },
               hasAdBlock: function() {
                    return this.adBlockDetectionPromise.promise()
               },
               isComponentVisible: function(e) {
                    var t;
                    return !(!e || e && 0 === e.length || !e.is(":visible")) && (t = e.get(0).getBoundingClientRect(), t.top + e.height() >= 0 && t.left + e.width() >= 0 && t.bottom - e.height() <= this.$el.height() && t.right - e.width() <= this.$el.width())
               },
               getCanonical: function() {
                    return this.canonical
               },
               isInteractive: function() {
                    return e(".page-interactive").length > 0
               },
               hasEmbeddedInteractive: function() {
                    return e(".interactive-embedded").length > 0
               },
               getSection: function() {
                    return this.getMeta("article:top-level-section")
               },
               isReferrerArticle: function(e) {
                    var t = /nytimes\.com\/(aponline|reuters)?\/?[0-9]{4}\/[0-9]{2}\/[0-9]{2}/,
                         n = e || this.pageReferrer;
                    return t.test(n)
               },
               isReferrerHomepage: function(e) {
                    var t = /nytimes\.com\/(\?.*)?$/,
                         n = e || this.pageReferrer;
                    return t.test(n)
               },
               isReferrerSlideshow: function(e) {
                    var t = /nytimes\.com\/slideshow\/?[0-9]{4}\/[0-9]{2}\/[0-9]{2}/,
                         n = e || this.pageReferrer;
                    return t.test(n)
               },
               isReferrerInteractive: function(e) {
                    var t = /nytimes\.com\/interactive\/?[0-9]{4}\/[0-9]{2}\/[0-9]{2}/,
                         n = e || this.pageReferrer;
                    return t.test(n)
               },
               isReferrerNytimes: function(e) {
                    var t, n, i;
                    return t = (e || this.pageReferrer).split(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/), n = t[4], i = /nytimes\.com/, i.test(n)
               },
               toggleA11y: function(e) {
                    this.a11yEnabled = "boolean" == typeof e && e, this.trigger("nyt:a11y-" + (this.a11yEnabled ? "en" : "dis") + "abled")
               },
               trackingAddToEventQueue: function(e) {
                    this.trackingQueueEmptied || this.trackingEventQueue.push(e)
               },
               trackingFireEventQueue: function() {
                    var e, t, n;
                    for (e = 0, t = this.trackingEventQueue.length; e < t; ++e) n = this.trackingEventQueue[e], this.trackingTriggerEvent(n.action, n.data, n.type);
                    this.trackingQueueEmptied = !0
               },
               trackingTriggerEvent: function(e, t, n) {
                    if (window.TAGX && window.TAGX.EventProxy && window.TAGX.EventProxy.trigger) {
                         try {
                              window.TAGX.EventProxy.trigger(e, t, n)
                         } catch (e) {}
                         return !0
                    }
                    return !1
               },
               addRoute: function(t, n) {
                    this.router.route(t, n, e.noop)
               },
               checkRoute: t.once(function() {
                    n.History.started && n.history.loadUrl()
               }),
               navigateRoute: function(e, t) {
                    this.router.navigate(e, t || {})
               },
               clearRoute: function() {
                    var t = e(document).scrollTop();
                    this.router.navigate("", {
                         trigger: !1,
                         replace: !0
                    }), window.scrollTo(0, t)
               },
               setPageViewId: function() {
                    this.pageViewId = this.generatePageViewId()
               },
               getPageViewId: function() {
                    return this.pageViewId
               },
               generatePageViewId: function() {
                    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
                         var t = 16 * Math.random() | 0;
                         return ("x" == e ? t : 3 & t | 8).toString(16)
                    })
               },
               handlePageViewId: function() {
                    var e = {
                              module: "page",
                              priority: !0,
                              page_view_id: this.getPageViewId()
                         },
                         t = {
                              action: "load",
                              data: e,
                              type: "interaction"
                         };
                    this.trackingAddToEventQueue(t)
               }
          }))
     }), define("foundation/base-mixin", ["jquery/nyt", "underscore/nyt", "foundation/views/page-manager"], function(e, t, n) {
          "use strict";
          return {
               pageManager: n,
               dateHelper: {
                    days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                    monthsShort: ["Jan.", "Feb.", "March", "April", "May", "June", "July", "Aug.", "Sept.", "Oct.", "Nov.", "Dec."],
                    getDayName: function(e) {
                         return this.days[e]
                    },
                    getMonthName: function(e) {
                         return this.months[e]
                    },
                    getMonthShortName: function(e) {
                         return this.monthsShort[e]
                    }
               },
               flag: function(e) {
                    return n.flag(e)
               },
               broadcast: function() {
                    n.trigger.apply(n, arguments)
               },
               local: function(e) {
                    var t = Array.prototype.slice.call(arguments, 0);
                    t.shift(), e.trigger.apply(e, t)
               },
               subscribe: function() {
                    this.subscribeHelper("listenTo", arguments)
               },
               subscribeOnce: function() {
                    this.subscribeHelper("listenToOnce", arguments)
               },
               stopSubscribing: function() {
                    this.subscribeHelper("stopListening", arguments)
               },
               subscribeHelper: function(e, i) {
                    t.isString(i[0]) ? this[e](n, i[0], i[1]) : this[e](i[0], i[1], i[2])
               },
               createAnchor: function(e) {
                    var t = document.createElement("a");
                    return t.href = e, t
               }
          }
     }), define("foundation/helpers/utils", ["foundation/views/page-manager", "foundation/hosts", "foundation/browser"], function(e, t, n) {
          "use strict";
          return {
               appendQueryParams: function(e, t) {
                    var n, i, r, o, s = [],
                         a = document.createElement("a");
                    if (t = t || {}, a.href = e, "mailto:" === a.protocol) return e;
                    r = a.search;
                    for (n in t) o = encodeURIComponent(n), o += "" !== t[n] ? "=" : "", s.push(o + encodeURIComponent(t[n])), -1 !== r.indexOf(o) && (r = r.replace(new RegExp("&?" + o + "[^&]*"), ""));
                    return r = 1 === r.length && 0 === r.indexOf("?") ? "" : r, i = r.length > 0 && 0 === r.indexOf("?") ? "&" : "?", e = [":" !== a.protocol ? a.protocol + "//" : "http://", "" !== a.hostname ? a.hostname : "", "/", a.pathname.replace(/^\//, ""), r, i, s.join("&"), a.hash].join("")
               },
               getHostBasedOnEdition: function() {
                    return e.isInternationalEdition() && n.getWindow().location.host.indexOf("international") >= 0 ? t.international : t.www
               }
          }
     }), define("foundation/tracking/tracking-mixin", ["jquery/nyt", "underscore/nyt", "foundation/helpers/utils", "foundation/views/page-manager", "foundation/hosts", "foundation/cookies"], function(e, t, n, i, r, o) {
          "use strict";
          return {
               trackingBaseData: {},
               trackingCombineData: function(e) {
                    e = e || {};
                    try {
                         return t.extend({}, this.trackingBaseData, e, {
                              pgtype: this.pageManager.getMeta("PT")
                         })
                    } catch (e) {}
               },
               trackingTrigger: function(e, t) {
                    t = this.trackingCombineData(t), this.trackingTriggerRaw(e, t, "interaction")
               },
               trackingTriggerImpression: function(e, t) {
                    t = this.trackingCombineData(t), this.trackingTriggerRaw(e, t, "impression")
               },
               trackingTriggerRaw: function(e, t, n) {
                    i.trackingTriggerEvent(e, t, n) || i.trackingAddToEventQueue({
                         action: e,
                         data: t,
                         type: n
                    })
               },
               trackingAppendParams: function(e, t) {
                    return n.appendQueryParams(e, this.trackingCombineData(t))
               },
               writeTrackingParamsCookie: function(e) {
                    var t = new Date,
                         n = "qry" + Math.ceil(1e3 * Math.random());
                    return t.setMinutes(t.getMinutes() + 2), o.writeCookie(n, e, {
                         expires: t
                    }), null === o.readCookie(n) && (e = "alxcookie=0&" + e), e
               },
               trackingComscorePVC: function(e) {
                    (new Image).src = r.comscorePvc + "/svc/comscore/pvc.html", e && this.trackingTriggerRaw("comscore-pageview-candidate", e, "other")
               }
          }
     }), define("foundation/models/base-model", ["jquery/nyt", "underscore/nyt", "backbone/nyt", "foundation/base-mixin"], function(e, t, n, i) {
          "use strict";
          return n.Model.extend(t.extend({}, i))
     }), define("foundation/helpers/model-mixin", [], function() {
          "use strict";
          return {
               hasSynced: !1,
               ready: function(e) {
                    e && this.hasSynced ? e() : e && this.subscribeOnce(this.eventName, e)
               },
               isReady: function() {
                    return this.hasSynced
               }
          }
     }), define("foundation/models/user-data", ["jquery/nyt", "underscore/nyt", "backbone/nyt", "foundation/models/base-model", "foundation/helpers/model-mixin", "foundation/cookies", "foundation/hosts"], function(e, t, n, i, r, o, s) {
          "use strict";
          return new(i.extend(r).extend({
               defaults: {
                    id: "",
                    name: "Account",
                    profileImage: "",
                    subscription: [],
                    demographics: {},
                    geo: {}
               },
               eventName: "nyt:user-ready",
               initialize: function() {
                    var e = this;
                    this.subscribeOnce(this, "sync error", this.loadProfileImage), this.subscribeOnce(this, "sync error", function() {
                         e.hasSynced = !0, e.broadcast(this.eventName)
                    }), this.subscribeOnce("nyt:masthead-user-modal-open", this.fetchUserName), this.loadData()
               },
               loadData: function() {
                    var t = e("#user-info-data").text();
                    t ? (this.set(e.parseJSON(t).data), this.trigger("sync")) : this.fetch()
               },
               sync: function(e, t, i) {
                    return i.url = s.userInfoHost + "/svc/web-products/userinfo-v3.jsonp", i.cache = !1, i.dataType = "jsonp", i.jsonpCallback = "userInfoCallback", i.data = {
                         cookie: o.readCookie("NYT-S") || ""
                    }, n.sync(e, t, i)
               },
               parse: function(e) {
                    return e.data && e.data.id > 0 && t.isEmpty(e.data.name) && (e.data.name = this.defaults.name), e.data
               },
               hasEntitlement: function(e) {
                    return t.indexOf(this.get("subscription"), e) > -1
               },
               isLoggedIn: function() {
                    var e = this.get("id");
                    return e.length > 0 && "0" !== e
               },
               getUserId: function() {
                    return this.get("id")
               },
               getUserName: function() {
                    return this.get("name")
               },
               fetchUserName: function() {
                    var n = this;
                    if (this.getUserName() === this.defaults.name) return e.ajax(s.myaccountHost + "/svc/auth/v1/profileinfo", {
                         headers: {
                              Authorization: "Bearer " + o.readCookie("NYT-S") || "",
                              client_id: "nyt5"
                         }
                    }).done(function(e) {
                         !t.isUndefined(e) && e.display_name && n.set("name", e.display_name)
                    })
               },
               getTruncatedUserName: function(e) {
                    var n = this.getUserName();
                    return t.isNumber(e) && n.length > e && (n = n.substring(0, e - 1) + "..."), n
               },
               getImageUrl: function() {
                    return this.get("profileImage")
               },
               isWebSubscriber: function() {
                    return this.hasEntitlement("MM")
               },
               isMobileSubscriber: function() {
                    return this.hasEntitlement("MTD") && this.hasEntitlement("MSD")
               },
               isTabletSubscriber: function() {
                    return this.hasEntitlement("MTD")
               },
               isSmartphoneSubscriber: function() {
                    return this.hasEntitlement("MSD")
               },
               isCrosswordsSubscriber: function() {
                    return this.hasEntitlement("XWD")
               },
               isHomeDeliverySubscriber: function() {
                    return !(!(this.getBundleSubscriptions() && this.getBundleSubscriptions().length > 0 && this.getBundleSubscriptions()[0].bundle) || "H" !== this.getBundleSubscriptions()[0].bundle && "E" !== this.getBundleSubscriptions()[0].bundle)
               },
               isCookingSubscriber: function() {
                    return this.hasEntitlement("COO")
               },
               isOpinionSubscriber: function() {
                    return this.hasEntitlement("OPI")
               },
               isPremierSubscriber: function() {
                    return this.hasEntitlement("TPR")
               },
               getImageSource: function(e) {
                    return s.profileImageHost + "/" + e.substring(4, 0) + "/" + e.substring(4) + "/cropped-" + e + ".jpg"
               },
               loadProfileImage: function() {
                    var e, t, n, i;
                    this.isLoggedIn() && (e = this, t = new Image, n = e.getUserId(), i = e.getImageSource(n), n.length > 0 && (t.onload = function() {
                         e.set("profileImage", i), e.local(e, "nyt:user-image-loaded")
                    }, t.src = i))
               },
               getPostalCode: function() {
                    return this.get("demographics").postal_code
               },
               getIncomeRange: function() {
                    return this.get("demographics").income_range
               },
               getJobTitle: function() {
                    return this.get("demographics").job_title
               },
               getJobIndustry: function() {
                    return this.get("demographics").job_industry
               },
               getGender: function() {
                    return this.get("demographics").gender
               },
               getCountryCode: function() {
                    return this.get("demographics").country_code
               },
               getWat: function() {
                    return this.get("demographics").wat
               },
               getCompanySize: function() {
                    return this.get("demographics").company_size
               },
               getEmailSubscriptions: function() {
                    return this.get("demographics").email_subscriptions
               },
               getBundleSubscriptions: function() {
                    return this.get("demographics").bundle_subscriptions
               },
               getCountry: function() {
                    return this.get("geo").country
               }
          }))
     }), define("foundation/models/page-storage", ["jquery/nyt", "underscore/nyt", "backbone/nyt", "foundation/models/base-model", "foundation/helpers/model-mixin", "foundation/hosts"], function(e, t, n, i, r, o) {
          "use strict";
          var s = i.extend(r).extend({
               storageKey: "nyt:site-storage",
               serviceUrl: o.www + "/svc/web/localstorage.html",
               eventName: "nyt:storage-ready",
               initialize: function() {
                    t.bindAll(this, "handleFrameLoad", "handleMessage"), this.isXDomain() ? this.setupXDomain() : this.syncData(window.localStorage.getItem(this.storageKey) || "{}")
               },
               syncData: function(e) {
                    try {
                         this.clear().set(JSON.parse(e))
                    } catch (e) {}
                    this.hasSynced = !0, this.broadcast(this.eventName), this.listenTo(this, "change", this.handleDataChange)
               },
               handleDataChange: function() {
                    var e = JSON.stringify(this.toJSON());
                    this.isXDomain() ? this.sendMessage(e) : window.localStorage.setItem(this.storageKey, e)
               },
               isXDomain: function() {
                    return window.location.host.indexOf("www") < 0
               },
               setupXDomain: function() {
                    this.iframe = document.createElement("iframe"), this.iframe.style.cssText = "position:absolute;width:1px;height:1px;left:-9999px;", document.body.appendChild(this.iframe), window.addEventListener ? (this.iframe.addEventListener("load", this.handleFrameLoad, !1), window.addEventListener("message", this.handleMessage, !1)) : this.iframe.attachEvent && (this.iframe.attachEvent("onload", this.handleFrameLoad, !1), window.attachEvent("onmessage", this.handleMessage)), this.iframe.src = this.serviceUrl
               },
               sendMessage: function(e) {
                    var t = {
                         key: this.storageKey
                    };
                    e && (t.value = e), this.iframe.contentWindow.postMessage(JSON.stringify(t), window.location.protocol + o.www)
               },
               handleFrameLoad: function() {
                    this.sendMessage()
               },
               handleMessage: function(e) {
                    var t = "",
                         n = e.origin || "";
                    e && "string" == typeof e.data && (t = e.data), /\.nytimes\.com$/.test(n) && 0 === t.indexOf("localstorage:") && this.syncData(t.replace("localstorage:", ""))
               }
          });
          return window.Modernizr.localstorage && window.Modernizr.postmessage || (s = n.Model.extend({
               ready: e.noop
          })), new s
     }), define("foundation/views/base-view", ["jquery/nyt", "underscore/nyt", "backbone/nyt", "hammer/nyt", "foundation/views/page-manager", "foundation/base-mixin", "foundation/tracking/tracking-mixin", "foundation/models/user-data", "foundation/models/page-storage"], function(e, t, n, i, r, o, s, a, u) {
          "use strict";
          var c = n.View.prototype.delegateEvents,
               l = n.View.prototype.undelegateEvents,
               f = n.View.extend(t.extend({}, o, s, {
                    magnum: window.magnum,
                    hammer: i,
                    $window: r.$window,
                    $document: r.$document,
                    $html: r.$html,
                    $body: r.$body,
                    $shell: r.$shell,
                    hammerEvents: ["hold", "tap", "doubletap", "drag", "dragstart", "dragend", "dragup", "dragdown", "dragleft", "dragright", "swipe", "swipeup", "swipedown", "swipeleft", "swiperight", "transform", "transformstart", "transformend", "rotate", "pinch", "pinchin", "pinchout", "touch", "release"],
                    truncateText: function(e, t, n) {
                         var i, r, o = [],
                              s = [],
                              a = n ? '<span class="ellipsis">…</span>' : "...",
                              u = e.html().replace(/<\/?\w+((\s+\w+(\s*=\s*(?:".*?"|'.*?'|[^'">\s]+))?)+\s*|\s*)\/?>/gi, function(e) {
                                   return " " + e.replace(/ /g, "%%%") + " "
                              });
                         if (u = u.replace(/ {2}/g, " ").split(" "), !(t < 0)) {
                              for (; e.height() > t && (0 === u[u.length - 1].indexOf("<img") ? u.pop() : 0 === u[u.length - 1].indexOf("<") ? s.push(u.pop()) : o.push(u.pop()), i = u.join(" "), n || (i = i.replace(/[\,:,;]$/, "")), i = i + a + s.join(""), e.html(i.replace(/\%\%\%/g, " ")), 0 !== u.length););
                              n && o.length && (o.reverse(), r = o.join(" "), e.after('<span class="visually-hidden">' + r + "</span>"), e.find(".ellipsis").attr("title", r))
                         }
                    },
                    prettyDate: function(e, t, n, i) {
                         var r = i || (new Date).getTime(),
                              o = "number" == typeof e ? new Date(e) : new Date((e || "").replace(/-/g, "/").replace(/[TZ]/g, " ")),
                              s = (r - o.getTime()) / 1e3,
                              a = o.getDate(),
                              u = Math.floor(s / 86400),
                              c = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                              l = c[o.getMonth()],
                              f = o.getFullYear(),
                              h = t ? "m" : " minutes",
                              d = t ? "m" : " minute",
                              p = t ? "h" : " hours",
                              g = t ? "h" : " hour",
                              m = t ? "d" : " day",
                              v = t ? "d" : " days";
                         if (isNaN(u) || u < 0) return !1;
                         if ("function" == typeof n && n(s)) return !1;
                         if (0 === u) {
                              if (s < 60) return "Just now";
                              if (s < 120) return "1" + d + " ago";
                              if (s < 3600) return Math.floor(s / 60) + h + " ago";
                              if (s < 7200) return "1" + g + " ago";
                              if (s < 86400) return Math.floor(s / 3600) + p + " ago"
                         } else {
                              if (1 === u) return u + m + " ago";
                              if (u < 3) return u + v + " ago";
                              if (u >= 3) return l + " " + a + ", " + f
                         }
                         return !1
                    },
                    isElementInViewport: function(t) {
                         var n;
                         return !(!t || t && 0 === t.length) && (n = t.get(0).getBoundingClientRect(), n.top + t.height() >= 0 && n.left + t.width() >= 0 && n.bottom - t.height() <= e(window).height() && n.right - t.width() <= e(window).width())
                    },
                    durationFromMilliseconds: function(e) {
                         var t, n, i;
                         return "number" != typeof e || isNaN(e) ? "0:00" : (t = e / 1e3, n = Math.floor(t / 60), i = Math.floor(t % 60), i < 10 && (i = "0" + i), n + ":" + i)
                    },
                    toggleNytEvents: function(e) {
                         var t;
                         if (this.nytEvents)
                              for (t in this.nytEvents) this[e](r, t, this[this.nytEvents[t]])
                    },
                    proxyHammer: function(e) {
                         var n, r, o, s = t.extend({}, e),
                              a = this,
                              u = this.hammerEvents,
                              c = this.hammerSettings || {};
                         return t.each(s, function(e, l) {
                              n = l.match(/^(\S+)\s*(.*)$/), r = n[1], o = n[2], t.isFunction(e) || (e = a[s[l]]), e = t.bind(e, a), t.indexOf(u, r) > -1 && (delete s[l], "" === o ? a.$el[0] && i(a.$el[0], c).on(r, e) : a.$(o).each(function() {
                                   i(this, c).on(r, e)
                              }))
                         }), s
                    },
                    hasDomDelegated: !1,
                    hasLocalStorageDelegated: !1,
                    hasUserDelegated: !1,
                    delegateEvents: function() {
                         var e = t.result(this, "events"),
                              n = Modernizr.touch ? this.proxyHammer(e) : e;
                         return c.call(this, n), this.toggleNytEvents("listenTo"), this.handleDomReady && !this.hasDomDelegated && (this.hasDomDelegated = !0, r.isDomReady() ? (t.bindAll(this, "handleDomReady"), t.defer(this.handleDomReady)) : this.listenToOnce(r, "nyt:page-ready", this.handleDomReady)), this.handleLocalStorageReady && !this.hasLocalStorageDelegated && (this.hasLocalStorageDelegated = !0, "function" == typeof u.isReady && (u.isReady() ? (t.bindAll(this, "handleLocalStorageReady"), t.defer(this.handleLocalStorageReady)) : this.listenToOnce(r, "nyt:storage-ready", this.handleLocalStorageReady))), this.handleUserReady && !this.hasUserDelegated && (this.hasUserDelegated = !0, a.isReady() ? (t.bindAll(this, "handleUserReady"), t.defer(this.handleUserReady)) : this.listenToOnce(r, "nyt:user-ready", this.handleUserReady)), this
                    },
                    undelegateEvents: function() {
                         return l.apply(this, arguments), this.toggleNytEvents("stopListening"), this
                    }
               }));
          return f.registerView = function(e) {
               var t = function() {
                    return t
               };
               return t.extend = t, e && r.isDisabled(e) ? t : f
          }, f
     }), define("foundation/collections/base-collection", ["jquery/nyt", "underscore/nyt", "backbone/nyt", "foundation/views/page-manager", "foundation/base-mixin"], function(e, t, n, i, r) {
          "use strict";
          return n.Collection.extend(t.extend({}, r))
     }), define("foundation/models/group-name", ["jquery/nyt", "underscore/nyt", "backbone/nyt", "foundation/models/base-model", "foundation/helpers/model-mixin", "foundation/hosts", "foundation/models/user-data"], function(e, t, n, i, r, o, s) {
          "use strict";
          return new(i.extend(r).extend({
               defaults: {
                    groupAccountName: ""
               },
               eventName: "nyt:regiGroup-ready",
               initialize: function() {
                    this.subscribe(this, "sync", this.handleSyncComplete), s.isReady() ? this.loadData() : this.subscribeOnce("nyt:user-ready", this.loadData)
               },
               handleSyncComplete: function() {
                    this.hasSynced = !0, this.broadcast(this.eventName)
               },
               loadData: function() {
                    this.flag("myAccountGroupName") && s.isWebSubscriber() && "7" === s.getUserId().substr(-1) ? this.fetch() : this.handleSyncComplete()
               },
               sync: function(e, t, i) {
                    return i.url = o.myaccountHost + "/svc/group-accounts/v1/group-name?" + s.getUserId(), i.cache = !0, i.xhrFields = {
                         withCredentials: !0
                    }, n.sync(e, t, i)
               },
               parse: function(e) {
                    return e.data
               },
               isGroupAccountMember: function() {
                    return this.get("groupAccountMember") || !1
               },
               getGroupName: function() {
                    return this.get("groupAccountName")
               }
          }))
     }), define("foundation/views/user-data", ["underscore/nyt", "jquery/nyt", "foundation/models/user-data", "foundation/views/base-view"], function(e, t, n, i) {
          "use strict";
          return new(i.extend({
               handleUserReady: function() {
                    this.addUserCapabilities()
               },
               addUserCapabilities: function() {
                    n.isLoggedIn() && this.$html.addClass("user-logged-in"), n.isPremierSubscriber() && this.$html.addClass("user-times-premier"), n.isOpinionSubscriber() && !n.isWebSubscriber() && this.$html.addClass("user-opinion"), n.isCookingSubscriber() && !n.isWebSubscriber() && this.$html.addClass("user-cooking"), n.isCrosswordsSubscriber() && this.$html.addClass("user-crosswords"), n.isWebSubscriber() && this.$html.addClass("user-web")
               }
          }))
     }), define("foundation/views/websockets-transport", ["jquery/nyt", "underscore/nyt", "backbone/nyt", "foundation/lib/sockjs", "foundation/views/base-view", "foundation/hosts"], function(e, t, n, i, r, o) {
          "use strict";
          return new(r.extend({
               url: "",
               apps: {},
               states: {
                    notConnected: 0,
                    connecting: 1,
                    connected: 2,
                    stopConnecting: 3
               },
               sockjsOptions: {
                    protocols_whitelist: ["websocket"]
               },
               reconnectAttempt: 0,
               maxReconnects: 5,
               initialize: function() {
                    this.infoUrl = o.fabrikEndpointsHost + "/endpoints.json", this.state = this.states.notConnected, this.subscribe(this, "nyt:fabrik-client-connected", this.login)
               },
               registerClient: function(e) {
                    var t, n, i = this.apps;
                    if (e.name && e.fabrikApp && e.handleMessage && e.collection) {
                         t = e.name, i[t] = {};
                         for (n in e) e.hasOwnProperty(n) && (i[t][n] = e[n]);
                         i[t].connected = !1, this.connectOrLogin(i[t])
                    }
               },
               connectOrLogin: function(e) {
                    switch (this.state) {
                         case this.states.notConnected:
                              this.state = this.states.connecting, this.prepareToConnect();
                              break;
                         case this.states.connected:
                              this.login(this);
                              break;
                         case this.states.stopConnecting:
                              e.handleFailover && e.handleFailover(e.collection);
                              break;
                         default:
                              return !1
                    }
               },
               prepareToConnect: function() {
                    this.pageManager.isDomReady() ? this.getWebSocketsUrl() : this.subscribe(this.pageManager, "nyt:page-ready", this.getWebSocketsUrl)
               },
               getWebSocketsUrl: function() {
                    var t = this;
                    this.state !== this.states.connecting && (this.state = this.states.connecting), this.flag("fabrikDirectConnect") ? (this.url = o.fabrikConnectHost, this.initWebSockets()) : e.ajax({
                         dataType: "json",
                         url: this.infoUrl,
                         success: function(e) {
                              e.wss_url && (t.url = e.wss_url, t.initWebSockets())
                         },
                         error: function() {
                              t.initiateFailOver(t)
                         }
                    })
               },
               initWebSockets: function() {
                    var e = this;
                    if (this.url && this.state !== this.states.connected && this.state !== this.states.stopConnecting) {
                         if (this.webSocket = null, Modernizr.websockets && (this.webSocket = new WebSocket(this.url, ["fabrik"])), null === this.webSocket) return void this.initiateFailOver(e);
                         this.webSocket.onopen = function() {
                              e.state = e.states.connected, e.local(e, "nyt:fabrik-client-connected", e)
                         }, this.webSocket.onmessage = function(t) {
                              e.reconnectAttempt = 0, e.onMessage(t, e)
                         }, this.webSocket.onclose = function(t) {
                              e.updateAppStatus(!1, e), e.reconnect(t, e)
                         }, this.webSocket.onerror = function(t) {
                              e.updateAppStatus(!1, e), e.onError(t, e)
                         }
                    }
               },
               publish: function(e) {
                    this.webSocket && this.webSocket.readyState === WebSocket.OPEN && this.webSocket.send(JSON.stringify(e))
               },
               login: function(e) {
                    var t, n, i = e.apps;
                    for (t in i) i.hasOwnProperty(t) && (n = i[t], n.connected || (n.connected = !0, e.publish({
                         action: "login",
                         client_app: n.fabrikApp,
                         cookies: n.cookies
                    })))
               },
               onMessage: function(e, t) {
                    var n, i, r, o = t.apps,
                         s = JSON.parse(e.data);
                    if (s && "start" !== s.type && "finish" !== s.type) {
                         r = s.product + "." + s.project;
                         for (n in o) o.hasOwnProperty(n) && (i = o[n], i.fabrikApp === r && i.handleMessage(s, i.collection))
                    }
               },
               onError: function(e, t) {
                    var n, i = t.apps;
                    for (n in i) i.hasOwnProperty(n) && i[n].notifyOnError()
               },
               updateAppStatus: function(e, t) {
                    var n, i = t.apps;
                    for (n in i) i.hasOwnProperty(n) && (i[n].connected = e)
               },
               reconnect: function(e, t) {
                    e.wasClean ? (t.state = t.states.connecting, t.initWebSockets()) : (t.reconnectAttempt += 1, t.reconnectAttempt > t.maxReconnects ? (t.state = t.states.stopConnecting, t.initiateFailOver(t)) : window.setTimeout(function() {
                         t.getWebSocketsUrl()
                    }, 3e3))
               },
               initiateFailOver: function(e) {
                    var t, n, i = e.apps;
                    for (t in i) i.hasOwnProperty(t) && (n = i[t], n.handleFailover(n.collection))
               }
          }))
     }), define("foundation/lib/auth/userauth", ["jquery/nyt", "foundation/hosts"], function(e, t) {
          "use strict";
          var n = (Math.round((new Date).getTime() / 1e3), t.myaccountHost),
               i = function(e) {
                    s()
               },
               r = function(e) {
                    s()
               },
               o = function(e, t, i) {
                    return n + "/oauth/" + t + "-link?type=login&URI=" + e + (i ? "&view=popup" : "") + "&flow=HPLI"
               },
               s = function() {
                    var t, n = window.location,
                         i = {
                              URI: n.protocol + "//" + n.hostname + "/" + n.pathname.replace(/^\//, "")
                         };
                    return n.search.length > 1 && (t = n.search.substr(1), t = t.replace(/(\?|&)?gwh=([^&]+)/g, ""), t = t.replace(/(\?|&)?gwt=([^&]+)/g, ""), t = t.replace(/%/g, "Q"), i.OQ = t), e.param(i)
               };
          return {
               register: i,
               login: r,
               getSocialLinkUrl: o
          }
     }), define("foundation/lib/polyfills/placeholder", ["jquery/nyt"], function(e) {
          return window.Modernizr.input.placeholder ? e.noop : function(t) {
               (t ? t.find("[placeholder]") : e("[placeholder]")).each(function() {
                    var t, n = e(this);
                    if (n.is("input[type=text]") || n.is("input[type=password]") || n.is("input[type=email]")) t = e('<input type="text" />');
                    else {
                         if (!n.is("textarea")) return;
                         t = e("<textarea></textarea>")
                    }
                    if (n.is(".withPlaceholder")) return n.hide(), n.siblings(".faux").show().val(n.attr("placeholder")), !0;
                    t.attr({
                         value: n.attr("placeholder"),
                         class: n.attr("class"),
                         style: n.attr("style")
                    }).addClass("faux"), t.is("textarea") && t.text(n.attr("placeholder")), n.addClass("withPlaceholder").after(t).hide(), t.show().focus(function() {
                         t.hide(), n.show().focus()
                    }), n.blur(function() {
                         "" === n.val() && (n.hide(), t.show())
                    })
               })
          }
     }), define("foundation/lib/polyfills/balancetext", ["foundation/views/page-manager", "backbone/nyt", "jquery/nyt"], function(e, t, n) {
          "use strict";

          function i() {
               this.reset()
          }

          function r() {
               f(n("body").find(".balance-text"))
          }
          var o;
          i.prototype.reset = function() {
               this.index = 0, this.width = 0
          };
          var s = function(e, t) {
                    var n, i = /\s(?![^<]*>)/g;
                    if (!o)
                         for (o = []; null !== (n = i.exec(e));) o.push(n.index);
                    return -1 !== o.indexOf(t)
               },
               a = function(e) {
                    e.removeAttr("style"), e.find('br[data-owner="balance-text"]').replaceWith(" ");
                    var t = e.find('span[data-owner="balance-text"]');
                    if (t.length > 0) {
                         var i = "";
                         t.each(function() {
                              i += n(this).text(), n(this).remove()
                         }), e.html(i)
                    }
               },
               u = function(e, t) {
                    return 0 === t || t === e.length || s(e, t - 1) && !s(e, t)
               },
               c = function(e, t, n, i, r, o, s) {
                    for (var a;;) {
                         for (; !u(t, o);) o += r;
                         if (e.html(t.substr(0, o)), a = e.width(), r < 0 ? a <= i || a <= 0 || 0 === o : i <= a || n <= a || o === t.length) break;
                         o += r
                    }
                    s.index = o, s.width = a
               },
               l = function(e, t) {
                    var n = document.createElement("div");
                    n.style.display = "block", n.style.position = "absolute", n.style.bottom = "0", n.style.right = "0", n.style.width = "0px", n.style.height = "0px", n.style.margin = "0", n.style.padding = "0", n.style.visibility = "hidden", n.style.overflow = "hidden";
                    var i = document.createElement("span");
                    i.style.fontSize = "2000px", i.innerHTML = "&nbsp;", n.appendChild(i), e.append(n);
                    var r = i.getBoundingClientRect();
                    return n.parentNode.removeChild(n), t / (r.height / r.width)
               },
               f = function(e) {
                    e.each(function() {
                         var e = n(this);
                         a(e);
                         e.css("line-height", "normal");
                         var t = e.width(),
                              r = e.height(),
                              s = e.css("white-space"),
                              u = e.css("float"),
                              f = e.css("display"),
                              h = e.css("position");
                         "flex" === e.parent().css("display") ? e.css({
                              "white-space": "nowrap",
                              float: "none",
                              display: "inline",
                              position: "absolute"
                         }) : e.css({
                              "white-space": "nowrap",
                              float: "none",
                              display: "inline",
                              position: "static"
                         });
                         var d = e.width(),
                              p = e.height(),
                              g = "pre-wrap" === s ? 0 : l(e, p);
                         if (t > 0 && d > t && d < 5e3) {
                              for (var m = e.html(), v = "", y = "", b = Math.round(r / p), w = b; w > 1;) {
                                   o = null;
                                   var x = Math.round((d + g) / w - g),
                                        _ = Math.round((m.length + 1) / w) - 1,
                                        E = new i;
                                   c(e, m, t, x, -1, _, E);
                                   var T = new i;
                                   _ = E.index, c(e, m, t, x, 1, _, T), E.reset(), _ = T.index, c(e, m, t, x, -1, _, E);
                                   var S;
                                   S = 0 === E.index ? T.index : t < T.width || E.index === T.index ? E.index : Math.abs(x - E.width) < Math.abs(T.width - x) ? E.index : T.index, y = m.substr(0, S), v += y.replace(/\s$/, ""), v += '<br data-owner="balance-text" />', m = m.substr(S), w--, e.html(m), d = e.width()
                              }
                              e.html(v + m)
                         }
                         e.css({
                              position: h,
                              display: f,
                              float: u,
                              "white-space": s,
                              "line-height": ""
                         })
                    })
               };
          n(document).ready(r), t.Events.listenTo(e, "nyt:page-resize-after", r)
     }), define("foundation/lib/polyfills/requestAnimationFrame", [], function() {
          for (var e = 0, t = ["ms", "moz", "webkit", "o"], n = 0; n < t.length && !window.requestAnimationFrame; ++n) window.requestAnimationFrame = window[t[n] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[t[n] + "CancelAnimationFrame"] || window[t[n] + "CancelRequestAnimationFrame"];
          window.requestAnimationFrame || (window.requestAnimationFrame = function(t, n) {
               var i = (new Date).getTime(),
                    r = Math.max(0, 16 - (i - e)),
                    o = window.setTimeout(function() {
                         t(i + r)
                    }, r);
               return e = i + r, o
          }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(e) {
               clearTimeout(e)
          })
     }), require(["foundation/consolefix", "foundation/framebuster", "foundation/hosts", "jquery/nyt", "underscore/nyt", "backbone/nyt", "hammer/nyt", "foundation/lib/sockjs", "foundation/cookies", "foundation/views/page-manager", "foundation/views/base-view", "foundation/models/base-model", "foundation/collections/base-collection", "foundation/models/user-data", "foundation/models/group-name", "foundation/views/user-data", "foundation/models/page-storage", "foundation/views/websockets-transport", "foundation/lib/auth/userauth", "foundation/lib/polyfills/placeholder", "foundation/lib/polyfills/balancetext", "foundation/lib/polyfills/requestAnimationFrame"]), define("foundation/main_includes", [], function() {}), require.config({
          map: {
               "*": {
                    "jquery/nyt": "foundation/lib/jquery/2.1.4",
                    "jquery/2.1": "foundation/lib/jquery/2.1.4",
                    "jquery/2.0": "foundation/lib/jquery/2.0.3",
                    "jquery/1.11": "foundation/lib/jquery/1.11.3",
                    "jquery/1.10": "foundation/lib/jquery/1.10.2",
                    "jquery/1.9": "foundation/lib/jquery/1.9.1",
                    "underscore/nyt": "foundation/lib/underscore/1.8.3",
                    "underscore/1.8": "foundation/lib/underscore/1.8.3",
                    "underscore/1.6": "foundation/lib/underscore/1.6.0",
                    "underscore/1.5": "foundation/lib/underscore/1.5.2",
                    "underscore/1.4": "foundation/lib/underscore/1.4.4",
                    "backbone/nyt": "foundation/lib/backbone/1.1.2",
                    "hammer/nyt": "foundation/lib/hammer/1.0.6",
                    "d3/3": "foundation/lib/d3/3.4.11",
                    "topojson/1": "foundation/lib/topojson/1.6.15",
                    "queue/1": "foundation/lib/queue/1.0.7"
               }
          }
     }), require(["foundation/main_includes"]), define("foundation/main", function() {});
