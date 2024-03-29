/*! amazon-dtb-javascript-api - apstag - v7.47.00 - 2020-02-06 18:05:55 */ ! function(e) {
     var t = {};

     function r(n) {
          if (t[n]) return t[n].exports;
          var o = t[n] = {
               i: n,
               l: !1,
               exports: {}
          };
          return e[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports
     }
     r.m = e, r.c = t, r.d = function(e, t, n) {
          r.o(e, t) || Object.defineProperty(e, t, {
               enumerable: !0,
               get: n
          })
     }, r.r = function(e) {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
               value: "Module"
          }), Object.defineProperty(e, "__esModule", {
               value: !0
          })
     }, r.t = function(e, t) {
          if (1 & t && (e = r(e)), 8 & t) return e;
          if (4 & t && "object" == typeof e && e && e.__esModule) return e;
          var n = Object.create(null);
          if (r.r(n), Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: e
               }), 2 & t && "string" != typeof e)
               for (var o in e) r.d(n, o, function(t) {
                    return e[t]
               }.bind(null, o));
          return n
     }, r.n = function(e) {
          var t = e && e.__esModule ? function() {
               return e.default
          } : function() {
               return e
          };
          return r.d(t, "a", t), t
     }, r.o = function(e, t) {
          return Object.prototype.hasOwnProperty.call(e, t)
     }, r.p = "", r(r.s = 21)
}([function(e, t, r) {
     "use strict";
     Object.defineProperty(t, "__esModule", {
          value: !0
     });
     var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
     } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
     };

     function o(e) {
          return "object" === (void 0 === e ? "undefined" : n(e)) && null !== e
     }

     function i() {
          return document.cookie.split("; ").map(function(e) {
               return e.split("=")
          })
     }
     t.shouldSample = function(e) {
          try {
               var t = parseInt(e, 10);
               if (!isNaN(t)) {
                    if (t <= 0) return !1;
                    if (100 <= t) return !0;
                    if (100 * Math.random() <= t) return !0
               }
               return !1
          } catch (e) {
               return !1
          }
     }, t.chunkArray = function(e, t) {
          var r = parseInt(t, 10),
               n = [],
               o = 0;
          if (!Array.isArray(e)) return n;
          if ("number" != typeof r || r < 1) return [e];
          for (var i = e.length; o < i;) n.push(e.slice(o, o += r));
          return n
     }, t.getRand = function() {
          return "" + Math.round(1e12 * Math.random()) + Date.now()
     }, t.getRandString = function(e) {
          for (var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", r = new Array(e), n = 0; n < e; n++) r[n] = t[Math.floor(Math.random() * t.length)];
          return r.join("")
     }, t.isObject = o, t.isArray = function(e) {
          return "[object Array]" === Object.prototype.toString.call(e)
     }, t.safeObjectHasProp = function(e, t) {
          return o(e) && Object.prototype.hasOwnProperty.call(e, t) && void 0 !== e[t] && "" !== e[t]
     }, t.hasLocalStorage = function() {
          var e = "amzn_lsTest";
          try {
               return window.localStorage.setItem(e, e), window.localStorage.removeItem(e), !0
          } catch (e) {
               return !1
          }
     }, t.inArray = function(e, t) {
          return -1 !== e.indexOf(t)
     }, t.getCookieParts = i, t.getCookieValue = function(e) {
          var t = "";
          try {
               t = i().filter(function(t) {
                    return t[0] === e
               })[0][1]
          } catch (t) {}
          return t
     }, t.getUTCStringForDate = function(e) {
          var t = new Date;
          return t.setDate(t.getDate() + e), t.toUTCString()
     }, t.getWindowDimensions = function(e) {
          try {
               return (e.innerWidth || e.document.documentElement.clientWidth || e.document.body.clientWidth) + "x" + (e.innerHeight || e.document.documentElement.clientHeight || e.document.body.clientHeight)
          } catch (e) {}
          return "x"
     }, t.areTwoUrlsTheSame = function(e, t) {
          return decodeURIComponent(e).split("?")[0].split("#")[0] === decodeURIComponent(t).split("?")[0].split("#")[0]
     }
}, function(e, t, r) {
     "use strict";
     Object.defineProperty(t, "__esModule", {
          value: !0
     }), t.DISPLAY_TARGETING_KEYS = ["amznbid", "amzniid", "amznsz", "amznp"], t.VIDEO_TARGETING_KEYS = ["amznbid", "amzniid", "amznp", "r_amznbid", "r_amzniid", "r_amznp"], t.BID_STATES = {
          new: "NEW",
          exposed: "EXPOSED",
          set: "SET",
          rendered: "RENDERED"
     };
     var n, o, i, a = t.RB_AID_COOKIE_KEY = "__aps_f_aid";
     t.RB_HOST_COOKIE_KEY = "__aps_host", t.RB_MAGIC_NUMBER_FOR_AID_PRESENT = 1, t.RB_PAGELOAD_ID_GLOBAL = "apsPageloadID", t.IS_GET_BIDS_URL_PARAM = {
          isgb: 1
     }, t.DEBUG_LOCAL_STORAGE_KEY = "apstagDebug", t.VALID_DEBUG_MODES = ["redux", "fake_bids", "verbose", "console", "console_v2", "errors"], t.DEBUG_CONSOLE_HEIGHT_KEY = "apstagDebugHeight", t.DEBUG_GLOBAL = "apstagDEBUG", t.CFG_LOCAL_STORAGE_KEY = "apstagCfg", t.NO_LOCAL_STORAGE_SUPPORT_MAGIC_NUMBER_FOR_AAX = 0, t.MINIMUM_BID_TIMEOUT = 0, t.MOCKBID = {
          amznbid: "testBid",
          amzniid: "testImpression",
          amznp: "testP",
          crid: "testCrid"
     }, t.MEDIA_TYPES_MAGIC_STRING_FOR_AAX = {
          video: "v"
     }, t.SLOT_STATE_KEYS = ["amznbid", "amznp"], t.FIRST_PARTY_COOKIE_KEYS = (i = {
          urlParam: "aidp"
     }, (o = a) in (n = {
          __apsid: {
               urlParam: "ck"
          },
          __aps_id_p: {
               urlParam: "ckp"
          },
          aps_ext_917: {
               urlParam: "st"
          }
     }) ? Object.defineProperty(n, o, {
          value: i,
          enumerable: !0,
          configurable: !0,
          writable: !0
     }) : n[o] = i, n), t.SLOT_STATES = {
          noRequest: "0",
          bidInFlight: "1",
          noBid: "2"
     }, t.AAX_RESP_REMAP_COOKIE_KEY = "cr", t.SELF_SERVE_PUB_SRC = "600", t.LIBRARY_VERSION = "7.47.00", t.PROTOCOL = "https://", t.HAS_XHR_SUPPORT = "function" == typeof XMLHttpRequest && void 0 !== (new XMLHttpRequest).withCredentials, t.APSTAG_LOADED_VARIABLE = "apstagLOADED"
}, function(e, t, r) {
     "use strict";
     Object.defineProperty(t, "__esModule", {
          value: !0
     }), t.reportError = m, t.wrapFunction = function(e, t) {
          return function() {
               try {
                    return e.apply(null, arguments)
               } catch (e) {
                    return m(e, t), null
               }
          }
     }, t.consoleWarn = function(e) {
          (1 < arguments.length && void 0 !== arguments[1] && arguments[1] || (0, s.isDebugEnabled)("errors")) && window[u][f](e)
     };
     var n = r(0),
          o = r(1),
          i = r(6),
          a = r(3),
          s = r(4),
          c = r(5),
          d = (0, n.shouldSample)(10),
          u = "console",
          l = "error",
          f = "warn",
          p = void 0,
          g = void 0,
          _ = [];

     function m(e, t, r) {
          try {
               (r || (0, s.isDebugEnabled)("errors")) && window[u][l](e);
               var n = {
                    lv: o.LIBRARY_VERSION,
                    ts: Date.now(),
                    url: encodeURIComponent((0, c.getCurrentUrl)(window)),
                    r: encodeURIComponent((0, c.getReferrerUrl)(window)),
                    _type: "apsLibraryError",
                    e: {
                         et: e.name,
                         el: t,
                         msg: e.message
                    }
               };
               if (void 0 === p) {
                    var f = a.store.getState();
                    void 0 !== f && void 0 !== f.config && (p = f.config.isSelfServePub, g = f.config.pubID)
               }
               return void 0 !== p && (p ? (n.src = o.SELF_SERVE_PUB_SRC, n.pubid = g) : n.src = g), _.push(n), a.store.dispatch({
                    type: "LOG_ERROR",
                    error: n
               }), !!d && ((0, i.noBidCacheIdPixel)(n), !0)
          } catch (e) {}
          return !1
     }!0 === (0, s.getDebugValue)("exposeErrors") && (window.apstagErrors = _)
}, function(e, t, r) {
     "use strict";
     Object.defineProperty(t, "__esModule", {
          value: !0
     }), t.store = void 0;
     var n = Object.assign || function(e) {
          for (var t = 1; t < arguments.length; t++) {
               var r = arguments[t];
               for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
     };
     t.reducer = f, t.resetState = function() {
          u = !1, p.dispatch({
               type: "NOOP"
          })
     };
     var o = r(1),
          i = r(5),
          a = r(0),
          s = r(4);

     function c(e, t, r) {
          return t in e ? Object.defineProperty(e, t, {
               value: r,
               enumerable: !0,
               configurable: !0,
               writable: !0
          }) : e[t] = r, e
     }

     function d(e) {
          if (Array.isArray(e)) {
               for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];
               return r
          }
          return Array.from(e)
     }
     var u = void 0,
          l = [];

     function f() {
          var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
               t = arguments[1];
          return {
               AAXReqs: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [],
                         t = arguments[1];
                    switch (t.type) {
                         case "RECORD_AAX_REQUEST":
                              return [].concat(d(e), [n({}, t.data)]);
                         case "RECORD_AAX_REQ_PROP":
                              return e.map(function(e) {
                                   return (e = n({}, e)).bidReqID === t.bidReqID && (e[t.key] = t.value), e
                              });
                         default:
                              return [].concat(d(e))
                    }
               }(e.AAXReqs, t),
               aaxViewabilityEnabled: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0],
                         t = arguments[1];
                    switch (t.type) {
                         case "SET_VIEWABILITY":
                              return t.viewability;
                         default:
                              return e
                    }
               }(e.aaxViewabilityEnabled, t),
               bidConfigs: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                         t = arguments[1];
                    switch (t.type) {
                         case "RECORD_ORIGINAL_BID_CONFIG":
                              return n({}, e, c({}, t.bidConfig.bidReqID, n({}, t.bidConfig)));
                         default:
                              return n({}, e)
                    }
               }(e.bidConfigs, t),
               bidReqs: function() {
                    var e, t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                         r = arguments[1];
                    switch (r.type) {
                         case "ADD_CHUNKED_REQUESTS":
                              return n({}, t, c({}, r.fid, n({}, t[r.fid], {
                                   networkReqs: new Array(r.numChunks)
                              })));
                         case "NEW_FETCH_BID_REQUEST":
                              return n({}, t, c({}, r.fid, {
                                   pto: r.pto,
                                   hasCallbackExecuted: !1
                              }));
                         case "RECORD_CALLBACK":
                              return n({}, t, c({}, r.fid, n({}, t[r.fid], {
                                   hasCallbackExecuted: !0
                              })));
                         case "RECORD_NETWORK_EXCHANGE":
                              return n({}, t, c({}, r.fid, n({}, t[r.fid], {
                                   networkReqs: n([].concat(d(t[r.fid].networkReqs)), c({}, r.networkID, n({}, t[r.fid].networkReqs[r.networkID], (e = {}, c(e, r.exchangeType + "Time", r.timestamp), c(e, "inFlight", "request" === r.exchangeType), e))))
                              })));
                         case "RECORD_TIMEOUT":
                              return n({}, t, c({}, r.fid, n({}, t[r.fid], {
                                   networkReqs: t[r.fid].networkReqs.map(function(e) {
                                        return e.inFlight ? n({}, e, {
                                             timeOut: r.timeOut
                                        }) : e
                                   })
                              })));
                         default:
                              return n({}, t)
                    }
               }(e.bidReqs, t),
               bsPixels: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                         t = arguments[1];
                    switch (t.type) {
                         case "RECORD_BID_INFO_SENT":
                              return n({}, e, c({}, t.bidInfo.iid, t.bidInfo.state));
                         default:
                              return n({}, e)
                    }
               }(e.bsPixels, t),
               cfg: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {
                              CSM_JS: "//c.amazon-adsystem.com/aax2/csm.js.gz",
                              CSM_RTB_COMMUNICATOR_JS: "//c.amazon-adsystem.com/bao-csm/aps-comm/aps_csm.js",
                              DEBUG_APP_HTML: "//c.amazon-adsystem.com/aax2/debugApp.html",
                              DEBUG_APP_HTML_V2: "//c.amazon-adsystem.com/aax2/debug_app_v2.html",
                              DEFAULT_TIMEOUT: 2e3,
                              DTB_PATH: "/e/dtb",
                              PIXEL_PATH: "/x/px/",
                              LATENCY_SAMPLING_RATE: 1,
                              COOKIE_MATCH_DELAY: 0,
                              MAX_SLOTS_PER_REQUEST: 1,
                              CF_ROUTING_RATE: 100,
                              SLOT_RENDER_SAMPLING_RATE: 1
                         },
                         t = arguments[1];
                    switch (t.type) {
                         case "SET_CFG":
                              return n({}, e, t.cfg);
                         default:
                              return n({}, e)
                    }
               }(e.cfg, t),
               cmpFired: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
                    switch (arguments[1].type) {
                         case "CMP_FIRED":
                              return !0;
                         default:
                              return e
                    }
               }(e.cmpFired, t),
               config: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                         t = arguments[1];
                    switch (t.type) {
                         case "SET_CONFIG":
                              return n({}, t.config, {
                                   gdpr: n({
                                        cmpTimeout: t.defaultCmpTimeout
                                   }, t.config.gdpr),
                                   isSelfServePub: t.config.pubID && 5 <= t.config.pubID.length
                              });
                         default:
                              return n({}, e)
                    }
               }(e.config, t),
               displayAdServer: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {
                              noBidSlotIDs: [],
                              shouldSampleRender: !1
                         },
                         t = arguments[1];
                    switch (t.type) {
                         case "SLOT_RENDER_ENDED_SET":
                              return n({}, e, {
                                   slotRenderEndedSet: !0
                              });
                         case "NO_BID_ON_ADSERVER_SLOTS":
                              return n({}, e, {
                                   noBidSlotIDs: e.noBidSlotIDs.concat(t.slotIDs)
                              });
                         case "REQUESTED_BID_FOR_ADSERVER_SLOTS":
                              return n({}, e, {
                                   noBidSlotIDs: e.noBidSlotIDs.filter(function(e) {
                                        return !(0, a.inArray)(t.slotIDs, e)
                                   })
                              });
                         case "SHOULD_SAMPLE_SLOT_RENDER":
                              return n({}, e, {
                                   shouldSampleRender: t.value
                              });
                         default:
                              return n({}, e, {
                                   noBidSlotIDs: [].concat(d(e.noBidSlotIDs))
                              })
                    }
               }(e.displayAdServer, t),
               errors: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [],
                         t = arguments[1];
                    switch (t.type) {
                         case "LOG_ERROR":
                              return [].concat(d(e), [n({}, t.error)]);
                         default:
                              return [].concat(d(e))
                    }
               }(e.errors, t),
               eventLog: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [],
                         t = arguments[1];
                    switch (t.type) {
                         case "LOG_EVENT":
                              return [].concat(d(e), [n({}, t.event)]);
                         default:
                              return [].concat(d(e))
                    }
               }(e.eventLog, t),
               experiments: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                         t = arguments[1];
                    switch (t.type) {
                         case "SHOULD_CHUNK_REQUESTS":
                              return n({
                                   chunkRequests: !0 === e.shouldSampleLatency && t.value
                              }, e);
                         case "SHOULD_CF_ROUTE":
                              return n({}, e, {
                                   shouldCFRoute: t.value
                              });
                         case "SHOULD_SAMPLE_LATENCY":
                              return n({}, e, {
                                   shouldSampleLatency: t.value
                              });
                         default:
                              return n({}, e)
                    }
               }(e.experiments, t),
               gamSlotFetchLog: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [],
                         t = arguments[1];
                    switch (t.type) {
                         case "LOG_GAM_EVENT":
                              return [].concat(d(e), [n({}, t.event)]);
                         default:
                              return [].concat(d(e))
                    }
               }(e.gamSlotFetchLog, t),
               gamSlotRenderPixel: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {
                              aaxReqOffset: 0,
                              gamSlotFetchLogOffset: 0
                         },
                         t = arguments[1];
                    switch (t.type) {
                         case "UPDATE_RENDER_OFFSETS":
                              return n({}, e, t.offsets);
                         default:
                              return n({}, e)
                    }
               }(e.gamSlotRenderPixel, t),
               gdpr: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null,
                         t = arguments[1];
                    switch (t.type) {
                         case "SET_GDPR_CONFIG":
                              return null === t.config ? null : n({}, t.config);
                         default:
                              return null === e ? e : n({}, e)
                    }
               }(e.gdpr, t),
               gdprQue: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [],
                         t = arguments[1];
                    switch (t.type) {
                         case "ADD_GDPR_QUE_ITEM":
                              return [].concat(d(e), [t.func]);
                         case "CLEAR_GDPR_QUE":
                              return [];
                         default:
                              return [].concat(d(e))
                    }
               }(e.gdprQue, t),
               hosts: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {
                              DEFAULT_AAX_BID_HOST: "aax.amazon-adsystem.com",
                              DEFAULT_AAX_PIXEL_HOST: "aax.amazon-adsystem.com"
                         },
                         t = arguments[1];
                    switch (t.type) {
                         case "SET_HOST":
                              return n({}, e, c({}, t.hostName, t.hostValue));
                         default:
                              return n({}, e)
                    }
               }(e.hosts, t),
               Q: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [],
                         t = arguments[1];
                    switch (t.type) {
                         case "SET_Q":
                              return [].concat(d(t.Q));
                         default:
                              return [].concat(d(e))
                    }
               }(e.Q, t),
               slotBids: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                         t = arguments[1];
                    switch (t.type) {
                         case "BID_STATE_CHANGE":
                              return n({}, e, c({}, t.slotID, e[t.slotID].map(function(e) {
                                   var r = {};
                                   return e._targetingSetID === t._targetingSetID && (r.bidState = t.bidState, t.bidState === o.BID_STATES.rendered ? r.renderTime = t.ts : t.bidState === o.BID_STATES.set && (r.setAtTimes = (0, a.safeObjectHasProp)(e, "setAtTimes") ? [].concat(d(e.setAtTimes), [t.ts]) : [t.ts])), n({}, e, r)
                              })));
                         case "UPDATE_BID_INFO_PROP":
                              return void 0 === e[t.slotID] || e[t.slotID].filter(function(e) {
                                   return (0, i.checkAllPossibleBidCacheIds)(e, t.iid, t.dealId)
                              }).length < 1 ? n({}, e) : n({}, e, c({}, t.slotID, e[t.slotID].map(function(e) {
                                   return e = n({}, e), (0, i.checkAllPossibleBidCacheIds)(e, t.iid, t.dealId) && (e[t.key] = t.value), e
                              })));
                         case "UPDATE_SLOT_BIDS":
                              return n({}, e, t.bids.reduce(function(t, r) {
                                   return (0, a.safeObjectHasProp)(t, r.slotID) ? t[r.slotID] = [].concat(d(t[r.slotID]), [n({}, r)]) : (0, a.safeObjectHasProp)(e, r.slotID) ? t[r.slotID] = [].concat(d(e[r.slotID]), [n({}, r)]) : t[r.slotID] = [n({}, r)], t
                              }, {}));
                         default:
                              return n({}, e)
                    }
               }(e.slotBids, t),
               slotIdMap: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [],
                         t = arguments[1];
                    switch (t.type) {
                         case "ADD_SLOT_ID":
                              return e.includes(t.slotID) ? e : [].concat(d(e), [t.slotID]);
                         default:
                              return e
                    }
               }(e.slotIdMap, t),
               sync917: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0],
                         t = arguments[1];
                    switch (t.type) {
                         case "SET_SYNC_917":
                              return t.value;
                         default:
                              return e
                    }
               }(e.sync917, t),
               targetingKeys: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                         t = arguments[1];
                    switch (t.type) {
                         case "UPDATE_SLOT_BIDS":
                              return n({}, e, t.bids.reduce(function(t, r) {
                                   return (0, a.safeObjectHasProp)(e, r.slotID) ? t[r.slotID] = [].concat(d(e[r.slotID]), d((r.targeting ? r.targeting : o.DISPLAY_TARGETING_KEYS).filter(function(t) {
                                        return -1 === e[r.slotID].indexOf(t)
                                   }))) : t[r.slotID] = r.targeting ? r.targeting : o.DISPLAY_TARGETING_KEYS, t
                              }, {}));
                         default:
                              return n({}, e)
                    }
               }(e.targetingKeys, t),
               tests: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                         t = arguments[1];
                    switch (t.type) {
                         case "UPDATE_TEST":
                              return n({}, e, c({}, t.id, {
                                   name: t.name,
                                   status: t.status,
                                   case: t.case
                              }));
                         default:
                              return n({}, e)
                    }
               }(e.tests, t)
          }
     }
     var p = {
          getState: function() {
               return u
          },
          dispatch: function(e) {
               u = f(u, e), l.forEach(function(e) {
                    return e()
               })
          },
          subscribe: function(e) {
               l.push(e)
          }
     };
     (0, s.isDebugEnabled)("redux") && (0, a.hasLocalStorage)() && (0, a.safeObjectHasProp)(window, "__REDUX_DEVTOOLS_EXTENSION__") && (t.store = p = window.__REDUX_DEVTOOLS_EXTENSION__(f)), p.dispatch({
          type: "NOOP"
     }), t.store = p
}, function(e, t, r) {
     "use strict";
     Object.defineProperty(t, "__esModule", {
          value: !0
     }), t.debugPublicApi = function(e, t, r) {
          switch (-1 !== d.indexOf(e) && ((0, c.reportError)("Debug call made: " + e, "__apstag-debug-call-" + e + "__"), d = d.filter(function(t) {
               return t !== e
          })), e) {
               case "getLog":
                    return n.store.getState().eventLog;
               case "getState":
                    return n.store.getState();
               case "enable":
                    return D("fake_bids", !0), "DEBUG MODE ENABLED";
               case "disable":
                    return D("fake_bids", !1), "DEBUG MODE DISABLED";
               case "enableConsole":
                    return g(!1, "command"), "Debug console enabled";
               case "enableConsoleV2":
                    return g(!0, "command"), "Debug console v2 enabled";
               case "disableConsole":
                    return _(), "Debug console disabled";
               case "setDebug":
                    return D(t, r) ? "Set debug mode '" + t + "' to '" + r + "'" : "Failed to set debug mode '" + t + "' to '" + r + "'";
               default:
                    return "unknown debug argument"
          }
     }, t.enableDebugConsole = g, t.disableDebugConsole = _, t.isDebugEnabled = O, t.setDebugMode = D, t.getDebugValue = function(e) {
          var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
          return "undefined" != typeof window && (0, o.safeObjectHasProp)(window, i.DEBUG_GLOBAL) && (0, o.safeObjectHasProp)(window[i.DEBUG_GLOBAL], e) ? window[i.DEBUG_GLOBAL][e] : t
     }, t.pixelDebugModes = I;
     var n = r(3),
          o = r(0),
          i = r(1),
          a = r(7),
          s = r(6),
          c = r(2),
          d = ["getLog", "getState"],
          u = null,
          l = null,
          f = null,
          p = null;

     function g() {
          var e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0],
               t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
          if (D(e ? "console_v2" : "console", !0), null === u) {
               var r = {
                    url: e ? n.store.getState().cfg.DEBUG_APP_HTML_V2 : n.store.getState().cfg.DEBUG_APP_HTML,
                    onload: m,
                    onerror: console.error
               };
               (0, a.xhrGet)(r), setTimeout(function() {
                    var r = {
                              _type: "debugLoad",
                              mode: e ? 2 : 1
                         },
                         o = n.store.getState().config.pubID;
                    void 0 !== o && (r.src = o), null !== t && (r.method = t), (0, s.noBidCacheIdPixel)(r)
               }, 5e3)
          }
     }

     function _() {
          D("console", !1), D("console_v2", !1), null !== u && document.body.removeChild(u), f = l = u = null, (0, o.hasLocalStorage)() && window.localStorage.removeItem(i.DEBUG_CONSOLE_HEIGHT_KEY)
     }

     function m(e) {
          var t = e.responseText;
          u = document.createElement("div"), l = document.createElement("div"), f = document.createElement("iframe");
          var r = 200;
          O("console_v2") && (r = 330), (0, o.hasLocalStorage)() && null !== window.localStorage.getItem(i.DEBUG_CONSOLE_HEIGHT_KEY) && (r = window.localStorage.getItem(i.DEBUG_CONSOLE_HEIGHT_KEY)), r > window.innerHeight && (r = 200), u.style = "background: #eaeded;z-index: 2147483647;bottom: 0;position: fixed !important;display: block !important;left: 0;right: 0;height: " + r + "px;", l.style = "cursor: row-resize;height: 2px;position: absolute;top: 0;left: 0;right: 0;background-color: RGBA(0,0,0,0);", u.appendChild(l), f.frameBorder = 0, f.marginHeight = 0, f.marginWidth = 0, f.topMargin = 0, f.leftMargin = 0, f.scrolling = "no", f.allowTransparency = !0, f.id = "apstag-debug-iframe", f.src = "about:blank", f.style = "display: block; width: 100%; height: " + r + "px;", u.appendChild(f), document.body.appendChild(u), f.contentDocument.open(), f.contentDocument.write(t), f.contentDocument.close(), l.addEventListener("mousedown", y)
     }

     function S(e) {
          var t = window.innerHeight - e.clientY;
          return t < 200 && (t = 200), u.style.height = t + "px", f.style.height = t + "px", t
     }

     function b(e) {
          return e.stopPropagation && e.stopPropagation(), e.preventDefault && e.preventDefault(), e.cancelBubble = !0, e.returnValue = !1
     }

     function y() {
          (p = document.createElement("div")).style = "position: fixed; left: 0; right: 0; top: 0; bottom: 0; z-index: 9999999999;", u.appendChild(p), window.addEventListener("mouseup", v), window.addEventListener("mousemove", h)
     }

     function h(e) {
          return S(e), b(e)
     }

     function v(e) {
          null !== p && (u.removeChild(p), p = null), window.removeEventListener("mousemove", h), window.removeEventListener("mouseup", v);
          var t = S(e);
          return (0, o.hasLocalStorage)() && window.localStorage.setItem(i.DEBUG_CONSOLE_HEIGHT_KEY, t), b(e)
     }

     function E() {
          if (!(0, o.hasLocalStorage)()) return [];
          var e = window.localStorage.getItem(i.DEBUG_LOCAL_STORAGE_KEY);
          null === e || "false" === e ? e = "[]" : "true" === e && (e = '["fake_bids"]');
          var t = void 0;
          try {
               t = JSON.parse(e)
          } catch (e) {}
          return (0, o.isArray)(t) || (t = []), t.filter(function(e) {
               return -1 !== i.VALID_DEBUG_MODES.indexOf(e)
          })
     }

     function O(e) {
          return (0, o.inArray)(E(), e)
     }

     function D(e, t) {
          if (!(0, o.hasLocalStorage)()) return !1;
          if (-1 === i.VALID_DEBUG_MODES.indexOf(e)) return !1;
          var r = E();
          return t && -1 === r.indexOf(e) ? r.push(e) : t || (r = r.filter(function(t) {
               return t !== e
          })), 0 === r.length ? window.localStorage.removeItem(i.DEBUG_LOCAL_STORAGE_KEY) : window.localStorage.setItem(i.DEBUG_LOCAL_STORAGE_KEY, JSON.stringify(r)), I(), !0
     }
     var A = [];

     function I() {
          try {
               E().filter(function(e) {
                    return -1 === A.indexOf(e)
               }).forEach(function(e) {
                    (0, c.reportError)(new Error("Debug method enabled: " + e), "__error-debug-mode-" + e + "__", !0), A.push(e)
               })
          } catch (e) {
               (0, c.reportError)(e, "__error-debug-pixeled__", !0)
          }
     }
}, function(e, t, r) {
     "use strict";
     Object.defineProperty(t, "__esModule", {
          value: !0
     });
     var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
     } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
     };
     t.getAmpAmznBidValue = function(e) {
          return "string" == typeof e ? e.split("_").pop() : ""
     }, t.checkAllPossibleBidCacheIds = function(e, t, r) {
          return e.amzniid === t || e[r + "amzniid"] === t || e.amzniid_sp === t
     }, t.isAAXPunt = function(e) {
          return !(0, i.safeObjectHasProp)(e, "slots")
     }, t.getCurrentUrl = function(e) {
          var t = (0, o.getDebugValue)("url");
          if (null !== t) return encodeURIComponent(t);
          var r = void 0;
          try {
               r = e.top.location.href
          } catch (e) {
               r = null
          }
          if (null === r || !r || void 0 === r) {
               r = "";
               try {
                    e.top !== e.self && (r = e.document.referrer)
               } catch (e) {}
          }
          return encodeURIComponent(r)
     }, t.getReferrerUrl = function(e) {
          var t = "",
               r = void 0;
          try {
               try {
                    r = e.top.document.referrer
               } catch (t) {
                    r = e.document.referrer
               }
               t = encodeURIComponent(r)
          } catch (t) {}
          return t
     }, t.getApsFirstPartyCookies = function() {
          var e = {
               cookiesParams: ""
          };
          return (0, i.getCookieParts)().forEach(function(t) {
               if (t[0] in s.FIRST_PARTY_COOKIE_KEYS) switch (t[0]) {
                    case "aps_ext_917":
                         e.fb = t[1];
                         break;
                    case s.RB_AID_COOKIE_KEY:
                         e.cookiesParams += "&" + s.FIRST_PARTY_COOKIE_KEYS[s.RB_AID_COOKIE_KEY].urlParam + "=" + s.RB_MAGIC_NUMBER_FOR_AID_PRESENT;
                         break;
                    default:
                         e.cookiesParams += "&" + s.FIRST_PARTY_COOKIE_KEYS[t[0]].urlParam + "=" + t[1]
               }
          }), e.fb || c.store.getState().sync917 || c.store.dispatch({
               type: "SET_SYNC_917",
               value: !0
          }), e
     }, t.getBlockedBidders = function(e) {
          var t = c.store.getState().config.blockedBidders;
          return (0, i.safeObjectHasProp)(e, "blockedBidders") && (0, i.isArray)(e.blockedBidders) && (t = e.blockedBidders), (0, i.isArray)(t) && (t = JSON.stringify(t)), t
     }, t.getCfgVersion = function() {
          if (!(0, i.hasLocalStorage)()) return s.NO_LOCAL_STORAGE_SUPPORT_MAGIC_NUMBER_FOR_AAX;
          var e = c.store.getState();
          return (0, i.safeObjectHasProp)(e, "cfg") && (0, i.safeObjectHasProp)(e.cfg, "v") ? e.cfg.v : null
     }, t.getTimeout = function(e, t) {
          var r = d(e.timeout);
          return !1 === r && (r = d(t.config.bidTimeout)), !1 === r && (r = d(t.cfg.DEFAULT_TIMEOUT)), r
     }, t.executeFunctionOnceWithTimeout = function(e, t) {
          var r = !1,
               n = null;

          function o(t) {
               if (!r) try {
                    e(t)
               } catch (t) {
                    (0, a.reportError)(t, "executeFunctionOnceWithTimeout", !0)
               }
               clearTimeout(n), r = !0
          }
          return n = setTimeout(o, t, !0), o.bind(null, !1)
     };
     var o = r(4),
          i = r(0),
          a = r(2),
          s = r(1),
          c = r(3);

     function d(e) {
          if (-1 === ["string", "number"].indexOf(void 0 === e ? "undefined" : n(e))) return !1;
          try {
               var t = Math.floor(Number(e));
               if (t > s.MINIMUM_BID_TIMEOUT) return t
          } catch (e) {
               (0, a.reportError)(e, "__error-getValidMilliseconds__", !0)
          }
          return !1
     }
}, function(e, t, r) {
     "use strict";
     Object.defineProperty(t, "__esModule", {
          value: !0
     }), t.pixels = t.pixelQueue = void 0, t.sendPixel = l, t.noBidCacheIdPixel = function(e) {
          return l(u() + "p/PH/" + d(e))
     }, t.bidCacheIdPixel = function(e, t) {
          return l("" + u() + e + "/" + d(t))
     }, t.sendPixels = function() {
          s || (s = !0, a.forEach(l))
     }, t.resetSendPixels = function() {
          s = !1, t.pixels = c = [], t.pixelQueue = a = []
     };
     var n = r(1),
          o = r(3),
          i = r(4),
          a = t.pixelQueue = [],
          s = !1,
          c = t.pixels = [];

     function d(e) {
          e._tl = "aps-tag";
          var t = JSON.stringify(e);
          return t = t.replace(/\\.{1}/g, ""), encodeURIComponent(t)
     }

     function u() {
          var e = o.store.getState(),
               t = e.cfg.PIXEL_PATH,
               r = e.hosts.DEFAULT_AAX_PIXEL_HOST;
          return "" + n.PROTOCOL + r + t
     }

     function l(e) {
          if (s) {
               var t = new Image;
               return t.src = e, c.push(t), t
          }
          return a.push(e), e
     }!0 === (0, i.getDebugValue)("exposePixels") && (window.apstagPixelQueue = a, window.apstagPixelsSent = c)
}, function(e, t, r) {
     "use strict";
     Object.defineProperty(t, "__esModule", {
          value: !0
     }), t.xhrGet = function(e) {
          var t = e.url,
               r = e.onload,
               o = e.onerror,
               i = void 0 === o ? null : o,
               a = e.ontimeout,
               s = void 0 === a ? null : a,
               c = e.withCredentials,
               d = void 0 === c ? null : c;
          try {
               var u = new window.XMLHttpRequest;
               u.onload = r.bind(null, u), null !== i && (u.onerror = i), null !== s && (u.ontimeout = s), null !== d && (u.withCredentials = d), u.open("GET", t), u.send(null)
          } catch (e) {
               (0, n.reportError)(e, "__xhrGet__")
          }
     }, t.loadScriptTag = function(e, t) {
          var r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
          try {
               if (null === r && (r = document), void 0 === e) return "function" == typeof t && t(!0), !1;
               var i = r.getElementsByTagName("script")[0] || r.body.firstChild,
                    a = r.createElement("script");
               return a.type = "text/javascript", a.async = !0, a.src = e, t && o(a, t), i.parentNode.insertBefore(a, i), !0
          } catch (e) {
               return (0, n.reportError)(e, "__loadScriptTag__", !0), !1
          }
     }, t.addOnLoadFunction = o, t.objToUrlParam = function(e) {
          return encodeURIComponent(JSON.stringify(e))
     };
     var n = r(2);

     function o(e, t) {
          var r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : [];
          try {
               return "function" == typeof t && (e.readyState ? e.onreadystatechange = function() {
                    -1 !== ["loaded", "complete"].indexOf(e.readyState) && (e.onreadystatechange = null, t.apply(null, r))
               } : e.onload = function() {
                    t.apply(null, r)
               }, !0)
          } catch (e) {
               return (0, n.reportError)(e, "__addOnLoadFunction__"), !1
          }
     }
}, function(e, t, r) {
     "use strict";
     Object.defineProperty(t, "__esModule", {
          value: !0
     }), t.GDPR = t.cmpLocalStorageChanged = t.cmpResponseKey = void 0;
     var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
               return typeof e
          } : function(e) {
               return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          },
          o = Object.assign || function(e) {
               for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
               }
               return e
          },
          i = r(0),
          a = r(2);
     Number.isInteger = Number.isInteger || function(e) {
          return "number" == typeof e && isFinite(e) && Math.floor(e) === e
     };
     var s = t.cmpResponseKey = "cmpRTimesA",
          c = t.cmpLocalStorageChanged = "crfgL0cSt0rC";
     t.GDPR = function(e, t) {
          e = o({}, e);
          var r, d, u = void 0,
               l = 50,
               f = [1, 1, 3, 5],
               p = 0,
               g = !1,
               _ = "crfgL0cSt0r",
               m = !1,
               S = "-timeout",
               b = null;
          try {
               t = (0, a.wrapFunction)(t, "GdprCallback");
               var y = function(e) {
                    try {
                         e = o({}, e), Object.keys(e.log).map(function(t) {
                              "string" == typeof e.log[t] && -1 !== e.log[t].indexOf("/") && (e.log[t] = encodeURIComponent(e.log[t]))
                         }), e.log = JSON.stringify(e.log)
                    } catch (e) {
                         (0, a.reportError)(e, "__gdpr_stringify_log__", !0)
                    }
                    t(e)
               };
               "object" === (void 0 === e ? "undefined" : n(e)) && null !== e || (e = {});
               var h = {
                    cmpGlobal: e.cmpGlobal,
                    cmpTimeout: e.cmpTimeout,
                    enabled: e.enabled
               };
               !1 === e.enabled ? h.status = "explicit-no-gdpr" : !0 === e.enabled && (h.status = void 0 !== e.consent ? "explicit-consent-passed" : "explicit-no-consent-passed"), (0, i.hasLocalStorage)() && (m = function() {
                    try {
                         var e = window.localStorage.getItem(_);
                         return null !== e && JSON.parse(e)
                    } catch (e) {
                         return (0, a.reportError)(e, "__gdpr_parse_ls__"), !1
                    }
               }()), !1 !== m && (void 0 === window.document.cookie || -1 === window.document.cookie.indexOf(_ + "=true") ? (m = !1, h.lsStatus = "invalid") : (h.lsStatus = "present", l = 50, S = "-timeout-cfb")), "string" != typeof e.cmpGlobal && (e.cmpGlobal = "__cmp"), "string" != typeof e.cmpGlobalv2 && (e.cmpGlobalv2 = "__tcfapi"), Number.isInteger(e.cmpTimeout) || (e.cmpTimeout = l);
               var v = (d = {
                    log: h
               }, void 0 === (r = e).enabled || (!1 === r.enabled ? d.enabled = 0 : (Number.isInteger(r.enabled) ? d.enabled = r.enabled : d.enabled = 1, "string" == typeof r.consent && (d.consent = r.consent))), d);
               if (void 0 !== v.enabled) return void y(v);
               !1 !== m && (v = o({}, m, v)), !1 === m || m.enabled === v.enabled && m.consent === v.consent || (h.lsStatus = "pub-override"),
                    function e(t, r) {
                         if (b = null, (0, i.safeObjectHasProp)(window, t.cmpGlobalv2) && "function" == typeof window[t.cmpGlobalv2] ? b = "tcfv2" : (0, i.safeObjectHasProp)(window, t.cmpGlobal) && "function" == typeof window[t.cmpGlobal] && (b = "cmp"), null === b) return r({
                              error: "no-cmp"
                         }), void(p < f.length && (setTimeout(e, 1e3 * f[p], t, r), p++));
                         setTimeout(r, t.cmpTimeout, {
                              timeout: !0
                         }, !0), u = Date.now();
                         try {
                              "cmp" === b ? window[t.cmpGlobal]("getConsentData", null, r) : window[t.cmpGlobalv2]("getTCData", 2, r)
                         } catch (e) {
                              r({
                                   error: b + "-internal-error"
                              }), (0, a.reportError)(e, "__gdpr_" + b + "__", !0)
                         }
                    }(e, function(e, t, r) {
                         if (!g || "object" !== (void 0 === t ? "undefined" : n(t)) || null === t || !t.timeout) {
                              g = !0;
                              try {
                                   return "object" === (void 0 === t ? "undefined" : n(t)) && null !== t && void 0 !== t.error ? h.status = t.error : r && "object" === (void 0 === t ? "undefined" : n(t)) && null !== t ? t.timeout ? h.status = "" + b + S : (function(e) {
                                        if ((0, i.hasLocalStorage)()) try {
                                             var t = window.localStorage.getItem(s);
                                             (t = null !== t ? JSON.parse(t) : []).push(e), window.localStorage.setItem(s, JSON.stringify(t))
                                        } catch (e) {
                                             (0, a.reportError)(e, "__gdpr_save_time__")
                                        }
                                   }(Date.now() - u), h.status = b + "-success", (0, i.safeObjectHasProp)(t, "tcString") ? e.consent = t.tcString : (0, i.safeObjectHasProp)(t, "consentData") && (e.consent = t.consentData), e.enabled = t.gdprApplies ? 1 : 0, t.gdprApplies || delete e.consent, function(e) {
                                        try {
                                             if (!(0, i.hasLocalStorage)()) return;
                                             window.localStorage.setItem(c, "0"), !1 !== m && m.enabled === e.enabled && m.consent === e.consent || (window.localStorage.setItem(c, "2"), window.localStorage.setItem(_, JSON.stringify({
                                                  enabled: e.enabled,
                                                  consent: e.consent
                                             })), !1 !== m && (h.lsStatus = b + "-override", window.localStorage.setItem(c, "1"))), window.document.cookie = _ + "=true;max-age=604800"
                                        } catch (e) {
                                             return (0, a.reportError)(e, "__gdpr_save__")
                                        }
                                   }(e)) : h.status = b + "-error", void y(e)
                              } catch (t) {
                                   return (0, a.reportError)(t, "__gdpr_cmp_callback__", !0), h.status = "func-error", void y(e)
                              }
                         }
                    }.bind(null, v))
          } catch (e) {
               g || t({
                    log: '{"status":"global-func-error"}'
               }), g = !0, (0, a.reportError)(e, "__gdpr_global_func__", !0)
          }
     }
}, function(e, t, r) {
     "use strict";
     Object.defineProperty(t, "__esModule", {
          value: !0
     }), t.getMetricFromPerformanceObject = o, t.getResourcePerformanceObject = function(e, t) {
          try {
               var r = i(e, t)[0];
               return void 0 === r ? null : r
          } catch (e) {
               return null
          }
     }, t.getPerformanceResourceObjects = i, t.getWindowPerformanceMetric = function(e, t) {
          try {
               var r = e.performance.timing[t];
               return void 0 === r ? n : r
          } catch (e) {
               return n
          }
     }, t.isResourceCached = function(e) {
          try {
               if (0 === ["redirectStart", "redirectEnd", "domainLookupStart", "domainLookupEnd", "connectStart", "connectEnd", "requestStart", "responseStart", "secureConnectionStart"].reduce(function(t, r) {
                         return t + o(e, r)
                    }, 0)) return null;
               var t = o(e, "fetchStart");
               return ["domainLookupStart", "domainLookupEnd", "connectStart", "connectEnd"].reduce(function(r, n) {
                    return r && o(e, n) === t
               }, !0)
          } catch (e) {
               return null
          }
     }, t.getTimeOrigin = function() {
          try {
               var e = window.performance.timeOrigin;
               return void 0 === e && (e = window.performance.timing.navigationStart), e
          } catch (e) {
               return n
          }
     };
     var n = 0;

     function o(e, t) {
          try {
               return "number" != typeof e[t] ? n : Math.round(e[t])
          } catch (e) {
               return n
          }
     }

     function i(e, t) {
          try {
               return e.performance.getEntriesByType("resource").filter(function(e) {
                    return t.test(e.name)
               })
          } catch (e) {
               return []
          }
     }
}, function(e, t, r) {
     "use strict";
     Object.defineProperty(t, "__esModule", {
          value: !0
     });
     var n = Object.assign || function(e) {
          for (var t = 1; t < arguments.length; t++) {
               var r = arguments[t];
               for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
     };
     t.getDisplayAdServerSlots = function(e) {
          var t = [];
          try {
               e.hasAdServerObjectLoaded() && (t = e.getSlots())
          } catch (e) {
               (0, o.reportError)(e, "getDisplayAdServerSlots")
          }
          return t
     }, t.doesSlotHaveSizes = function(e) {
          return (0, i.safeObjectHasProp)(e, "sizes") && (0, i.isArray)(e.sizes) && 0 !== e.sizes.length
     }, t.isDisplaySlot = function(e) {
          return "video" !== e.mediaType
     }, t.getSlotID = function(e) {
          return e.slotID
     }, t.normalizeSlotsSizeArray = function(e) {
          try {
               return e.map(function(e) {
                    return (0, i.safeObjectHasProp)(e, "sizes") && (0, i.isArray)(e.sizes) && 0 < e.sizes.length && !(0, i.isArray)(e.sizes[0]) ? n({}, e, {
                         sizes: [e.sizes]
                    }) : e
               })
          } catch (e) {
               (0, o.reportError)(e, "__error-adjustSlotArraySizes__", !0)
          }
          return []
     };
     var o = r(2),
          i = r(0)
}, , , function(e, t, r) {
     "use strict";
     Object.defineProperty(t, "__esModule", {
          value: !0
     }), t.displayAdServerGoogletag = void 0, t.constructApsSlotObject = a, t.turnGptSlotsIntoApsSlots = function(e) {
          return e.map(a).filter(o.doesSlotHaveSizes)
     };
     var n = r(0),
          o = r(10),
          i = {
               isSupported: !0,
               needNewBidObject: !1,
               cmdQueuePush: function(e) {
                    googletag.cmd.push(e)
               },
               setTargeting: function(e, t, r) {
                    void 0 === r ? googletag.pubads().setTargeting(e, t) : r.setTargeting(e, t)
               },
               getTargeting: function(e, t) {
                    return void 0 === t ? googletag.pubads().getTargeting(e) : t.getTargeting(e)
               },
               clearTargeting: function(e, t) {
                    void 0 === t ? googletag.pubads().clearTargeting(e) : t.clearTargeting(e)
               },
               slotRenderEndedEvent: function(e) {
                    googletag.pubads().addEventListener("slotRenderEnded", e)
               },
               hasAdServerObjectLoaded: function() {
                    return "undefined" != typeof googletag && (0, n.safeObjectHasProp)(googletag, "apiReady") && !0 === googletag.apiReady
               },
               isCommandQueueDefined: function() {
                    return "undefined" != typeof googletag && void 0 !== googletag.cmd
               },
               getSlotElementId: function(e) {
                    return e.getSlotElementId()
               },
               getSlots: function() {
                    return googletag.pubads().getSlots()
               },
               appendTargeting: function() {}
          };

     function a(e) {
          var t = (0, n.getWindowDimensions)(window).split("x");
          return {
               slotID: e.getSlotElementId(),
               slotName: e.getAdUnitPath(),
               sizes: function(e) {
                    var t = [];
                    try {
                         t = e.filter(function(e) {
                              return "fluid" !== e
                         }).map(function(e) {
                              return [e.getWidth(), e.getHeight()]
                         })
                    } catch (e) {}
                    return t
               }(e.getSizes(Number(t[0]), Number(t[1])))
          }
     }
     t.displayAdServerGoogletag = i
}, function(e, t, r) {
     "use strict";
     Object.defineProperty(t, "__esModule", {
          value: !0
     }), t.IS_RENDER_BIDDING_PAGELOAD = void 0, t.getPageLoadID = function() {
          return d ? window[n.RB_PAGELOAD_ID_GLOBAL] : (0, o.getRandString)(s)
     }, t.setRenderBiddingHosts = function() {
          var e = c(a) ? a : "aax";
          i.store.dispatch({
               type: "SET_HOST",
               hostName: "DEFAULT_AAX_BID_HOST",
               hostValue: e + ".amazon-adsystem.com"
          }), i.store.dispatch({
               type: "SET_HOST",
               hostName: "DEFAULT_AAX_PIXEL_HOST",
               hostValue: e + ".amazon-adsystem.com"
          })
     }, t.isFirstAAXRequest = function(e) {
          return 0 === e.AAXReqs.length
     }, t.isRenderBiddingGetBidsRequest = function(e) {
          return -1 !== e.indexOf(n.IS_GET_BIDS_URL_PARAM)
     }, t.injectCBForGetBids = function(e, t) {
          if (-1 < t.indexOf('"cb":')) return t;
          var r = t.split(/\}\)$/),
               n = e.split("?")[1].split("&").filter(function(e) {
                    return -1 < e.indexOf("cb=")
               })[0].split("=")[1];
          return r[0] + (-1 < t.indexOf("{}") ? "" : ",") + '"cb":"' + n + '"})'
     };
     var n = r(1),
          o = r(0),
          i = r(3),
          a = (0, o.getCookieValue)(n.RB_HOST_COOKIE_KEY),
          s = 13;

     function c(e) {
          return "" !== e
     }
     var d = t.IS_RENDER_BIDDING_PAGELOAD = (0, o.safeObjectHasProp)(window, n.RB_PAGELOAD_ID_GLOBAL) && c(a)
}, function(e, t, r) {
     "use strict";
     Object.defineProperty(t, "__esModule", {
          value: !0
     }), t.displayAdServer = void 0, t.setDisplayAdServer = function(e) {
          switch (e) {
               case "appnexus":
                    t.displayAdServer = n.displayAdServerAppNexus;
                    break;
               case "googletag":
                    t.displayAdServer = o.displayAdServerGoogletag;
                    break;
               case "sas":
                    t.displayAdServer = a.displayAdServerSAS;
                    break;
               default:
                    t.displayAdServer = i.displayAdServerDefault
          }
     };
     var n = r(25),
          o = r(13),
          i = r(26),
          a = r(27);
     t.displayAdServer = i.displayAdServerDefault
}, , , , , , function(e, t, r) {
     e.exports = r(22)
}, function(e, t, r) {
     "use strict";
     var Me = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
               return typeof e
          } : function(e) {
               return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          },
          Ue = Object.assign || function(e) {
               for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
               }
               return e
          },
          ke = r(8),
          qe = r(3),
          Fe = r(5),
          Ke = r(0),
          Xe = r(10),
          Qe = r(4),
          Ve = r(1),
          Ye = r(9),
          We = r(23),
          Je = r(6),
          $e = r(2),
          Ze = r(7),
          et = r(13),
          tt = r(14),
          n = r(24),
          rt = r(15),
          nt = r(28);

     function ot(e, t) {
          var r = {};
          for (var n in e) 0 <= t.indexOf(n) || Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]);
          return r
     }
     try {
          var o = (0, n.isApstagLibrary)(window.apstag);
          o ? (0, $e.reportError)(new Error("apstag has already loaded - preventing duplicate load"), "__error-apstag_duplicate_load__", !0) : ((0, n.hasApstagJsLoaded)(window) && (0, $e.reportError)(new Error("apstag was loaded and then destroyed"), "__error-apstag-destroyed-reloaded__", !0), window[Ve.APSTAG_LOADED_VARIABLE] = !0, function() {
               var n = (0, Ye.getWindowPerformanceMetric)(window, "navigationStart"),
                    a = (0, tt.getPageLoadID)(),
                    e = "ls",
                    t = (0, Qe.isDebugEnabled)("console") || function() {
                         try {
                              return -1 !== window.location.href.indexOf("amzn_debug_console=1") && (e = "url", !0)
                         } catch (e) {
                              return !1
                         }
                    }(),
                    r = (0, Qe.isDebugEnabled)("console_v2") || function() {
                         try {
                              return -1 !== window.location.href.indexOf("amzn_debug_console=2") && (e = "url", !0)
                         } catch (e) {
                              return !1
                         }
                    }();

               function o(e) {
                    e.ts = Date.now(), qe.store.dispatch({
                         type: "LOG_EVENT",
                         event: e
                    })
               }

               function i(e) {
                    function t(e) {
                         if (!qe.store.getState().cmpFired) {
                              qe.store.dispatch({
                                   type: "CMP_FIRED"
                              });
                              var t = document.createElement("iframe");
                              t.style.display = "none", t.src = e, document.body.appendChild(t)
                         }
                    }
                    document.readyState && "loading" === document.readyState ? document.addEventListener ? document.addEventListener("DOMContentLoaded", function() {
                         t(e)
                    }, !1) : document.attachEvent && document.attachEvent("onreadystatechange", function() {
                         "complete" === document.readyState && t(e)
                    }) : t(e)
               }

               function s(e) {
                    try {
                         var t = qe.store.getState().cfg.COOKIE_MATCH_DELAY;
                         setTimeout(function() {
                              try {
                                   e && e.cmp && "" !== e.cmp && void 0 !== e.cmp ? i(e.cmp) : e && e.cmpjs && "" !== e.cmpjs && void 0 !== e.cmpjs && (0, Ze.loadScriptTag)(e.cmpjs)
                              } catch (e) {
                                   (0, $e.reportError)(e, "__error-tryCookieMatch-1__")
                              }
                         }, t)
                    } catch (e) {
                         (0, $e.reportError)(e, "__error-tryCookieMatch-2__")
                    }
               }

               function c(e) {
                    return !qe.store.getState().experiments.chunkRequests || 0 === qe.store.getState().bidReqs[e.split("-")[0]].networkReqs.filter(function(e) {
                         return e.inFlight
                    }).length
               }

               function u(e, t) {
                    !qe.store.getState().bidReqs[e[0]].hasCallbackExecuted && c(e[0]) && (qe.store.dispatch({
                         type: "RECORD_CALLBACK",
                         fid: e[0]
                    }), t())
               }

               function d(e) {
                    qe.store.getState().experiments.chunkRequests && qe.store.dispatch({
                         type: "RECORD_NETWORK_EXCHANGE",
                         fid: e[0],
                         timestamp: Date.now(),
                         exchangeType: "response",
                         networkID: e[1]
                    })
               }

               function l(r, n, e) {
                    var o = e.split("-"),
                         t = {
                              url: r,
                              withCredentials: !0
                         };
                    try {
                         t.onload = function(e) {
                              d(o);
                              var t = e.responseText;
                              (0, tt.isRenderBiddingGetBidsRequest)(r) && (t = (0, tt.injectCBForGetBids)(r, t)), eval(t), u(o, n)
                         }, t.onerror = function() {
                              d(o), u(o, n)
                         }, (0, Ze.xhrGet)(t)
                    } catch (e) {
                         (0, $e.reportError)(e, "__error-xhrBid__", !0), d(o), u(o, n)
                    }
               }

               function f(e) {
                    var t = new Date;
                    return t.setTime(t.getTime() + 1e3 * e), t.toGMTString()
               }

               function p(e) {
                    if (e[Ve.AAX_RESP_REMAP_COOKIE_KEY]) try {
                         e[Ve.AAX_RESP_REMAP_COOKIE_KEY].forEach(function(e) {
                              document.cookie = e.k + "=" + e.v + ";expires=" + (-1 !== e.exp ? f(e.exp) : (0, Ke.getUTCStringForDate)(365)) + ";path=/;"
                         })
                    } catch (e) {
                         (0, $e.reportError)(e, "__error-setFirstPartyCookies__")
                    }
               }

               function g(e) {
                    if ((0, Ke.safeObjectHasProp)(e, "cb")) {
                         qe.store.dispatch({
                              type: "RECORD_AAX_REQ_PROP",
                              bidReqID: e.cb,
                              key: "resTs",
                              value: Date.now()
                         });
                         var t = new RegExp("e/dtb/bid.*cb=" + e.cb);
                         qe.store.dispatch({
                              type: "RECORD_AAX_REQ_PROP",
                              bidReqID: e.cb,
                              key: "perf",
                              value: (0, Ye.getResourcePerformanceObject)(window, t)
                         })
                    }(0, Ke.safeObjectHasProp)(e, "cfg") && qe.store.dispatch({
                         type: "SET_CFG",
                         cfg: e.cfg
                    }), Y(e)
               }

               function _(e) {
                    if (s(e), p(e), (0, Ke.safeObjectHasProp)(e, "cfg") && localStorage.setItem(Ve.CFG_LOCAL_STORAGE_KEY, JSON.stringify(e.cfg)), (0, Ke.safeObjectHasProp)(e, "st") && e.st.includes(917) && qe.store.getState().sync917) {
                         qe.store.dispatch({
                              type: "SET_SYNC_917",
                              value: !1
                         });
                         try {
                              C()
                         } catch (e) {
                              (0, $e.reportError)(e, "__error-doFbSync__")
                         }
                    }
                    m(e), (0, Fe.isAAXPunt)(e) || (0, Je.sendPixels)()
               }

               function m(e) {
                    if ((0, Ke.safeObjectHasProp)(e, "fp")) {
                         var t = e.fp;
                         (0, Ke.safeObjectHasProp)(t, "length") && t.forEach(function(e) {
                              var t = e.d ? e.d : 0;
                              setTimeout(function() {
                                   (0, Je.sendPixel)(e.s)
                              }, t)
                         })
                    }
               }

               function S() {
                    qe.store.getState().Q.forEach(function(e) {
                         "i" === e[0] ? window.apstag.init.apply(null, e[1]) : window.apstag.fetchBids.apply(null, e[1])
                    })
               }

               function b(e) {
                    var t = qe.store.getState().config;
                    return (0, Ke.safeObjectHasProp)(t, "pubID") && (0, Ke.safeObjectHasProp)(e, "pubID") && t.pubID !== e.pubID && (0, $e.reportError)(new Error("`apstag.init` was called multiple times with different pubIDs (" + t.pubID + " then " + e.pubID + ")"), "__error-init-multiple-calls__", !0), qe.store.dispatch({
                         type: "SET_GDPR_CONFIG",
                         config: null
                    }), qe.store.dispatch({
                         type: "SET_CONFIG",
                         config: e,
                         defaultCmpTimeout: qe.store.getState().cfg.GDPR_CMP_TIMEOUT
                    }), "success"
               }

               function y(e) {
                    var t = e.slotID;
                    (0, Ke.safeObjectHasProp)(e, "mediaType") && "video" === e.mediaType || rt.displayAdServer.hasAdServerObjectLoaded() && rt.displayAdServer.isCommandQueueDefined() && (rt.displayAdServer.hasAdServerObjectLoaded() ? h(t) && P(e) : rt.displayAdServer.cmdQueuePush(function() {
                         y(e)
                    }))
               }

               function h(e) {
                    var t;
                    try {
                         t = (0, Xe.getDisplayAdServerSlots)(rt.displayAdServer).filter(function(t) {
                              return rt.displayAdServer.getSlotElementId(t) === e
                         })[0]
                    } catch (t) {
                         (0, $e.reportError)(t, "__error-getAdServerSlot__")
                    }
                    return t
               }

               function v(e) {
                    try {
                         var t = qe.store.getState().targetingKeys[e];
                         if (rt.displayAdServer.hasAdServerObjectLoaded() && (0, Ke.isArray)(t)) {
                              var r = h(e);
                              t.forEach(function(e) {
                                   0 < rt.displayAdServer.getTargeting(e, r).length && rt.displayAdServer.clearTargeting(e, r)
                              })
                         }
                    } catch (e) {
                         (0, $e.reportError)(e, "__error-clearTargetingFromSlot__")
                    }
               }

               function E(e) {
                    try {
                         if ((0, Ke.safeObjectHasProp)(qe.store.getState().slotBids, e)) {
                              var t = qe.store.getState().slotBids[e].filter(function(e) {
                                   return e.bidState === Ve.BID_STATES.set
                              })[0];
                              t && t.bidState === Ve.BID_STATES.set && qe.store.dispatch({
                                   type: "BID_STATE_CHANGE",
                                   slotID: e,
                                   _targetingSetID: t._targetingSetID,
                                   bidState: Ve.BID_STATES.exposed
                              })
                         }
                    } catch (e) {
                         (0, $e.reportError)(e, "__error-clearbidSetOnSlot__")
                    }
               }

               function O(e, t) {
                    return e.map(function(e) {
                         return (0, Ke.inArray)(t, e)
                    }).filter(function(e) {
                         return e
                    }).length === e.length
               }

               function D() {
                    var e = {};
                    try {
                         Object.keys(qe.store.getState().slotBids).forEach(function(t) {
                              var r = qe.store.getState().slotBids[t].filter(nt.isBidEligible);
                              0 < r.length && (e[t] = r.map(function(e) {
                                   var t = qe.store.getState().AAXReqs.filter(function(t) {
                                        return t.bidReqID === e.bidReqID
                                   })[0].rqTs;
                                   return Ue({}, e, {
                                        rqTs: t
                                   })
                              }).reduce(function(e, t) {
                                   return e.rqTs > t.rqTs ? e : t
                              }))
                         })
                    } catch (e) {
                         (0, $e.reportError)(e, "__error-getCurrentSlotBids__")
                    }
                    return e
               }

               function A(e, t) {
                    return (0, Ke.isArray)(qe.store.getState().targetingKeys[e]) ? t ? ["amzniid_sp"] : qe.store.getState().targetingKeys[e].filter(function(e) {
                         return -1 < e.indexOf("amzniid") && e.indexOf("amzniid_sp") < 0
                    }) : ["amzniid"]
               }

               function I(e, t) {
                    var r, n;
                    try {
                         var o = qe.store.getState().slotBids;
                         Object.keys(o).forEach(function(i) {
                              o[i].forEach(function(o) {
                                   A(i, t).forEach(function(t) {
                                        o[t] === e && (r = o, "amzniid_sp" === t ? n = "sp" : "amzniid" !== t && (n = t.substr(0, t.indexOf("amzniid"))))
                                   })
                              })
                         })
                    } catch (e) {
                         (0, $e.reportError)(e, "__error-findSlotBidByBidID__", !0)
                    }
                    return {
                         slotBid: r,
                         dealId: n
                    }
               }

               function T(e, t, r) {
                    var n;
                    return t[r + "amzniid"] === e && (n = r.split("_").pop().trim()), n
               }

               function w(e) {
                    var t = {};
                    return e.slots.forEach(function(e) {
                         "video" !== e.mediaType ? t[e.slotID] = e : (0 <= e.slotID.indexOf("rsv-") && (e = {
                              slotID: e.slotID.substring(4),
                              r_amznbid: e.amznbid,
                              r_amzniid: e.amzniid,
                              r_amznp: e.amznp,
                              mediaType: "video",
                              targeting: ["r_amznbid", "r_amzniid", "r_amznp"]
                         }), t[e.slotID] ? (e.targeting = e.targeting.concat(t[e.slotID].targeting), t[e.slotID] = Ue({}, t[e.slotID], e)) : t[e.slotID] = e)
                    }), Object.keys(t).map(function(e) {
                         return t[e]
                    })
               }

               function R(e) {
                    var t, r = w(e),
                         n = ["host", "ev", "cb", "cmp", "cfe"];
                    try {
                         t = r.map(function(t) {
                              var r = {
                                   bidState: Ve.BID_STATES.new,
                                   _targetingSetID: (0, Ke.getRand)()
                              };
                              return (0, Ke.safeObjectHasProp)(t, "amznsz") || (r.amznsz = t.size), n.forEach(function(t) {
                                   if ((0, Ke.safeObjectHasProp)(e, t)) {
                                        var n = e[t],
                                             o = t;
                                        "cb" === t && (o = "bidReqID"), r[o] = n
                                   }
                              }), Ue({}, t, r)
                         })
                    } catch (t) {
                         (0, $e.reportError)(t, "__error-convertAAXResponse__")
                    }
                    return t
               }

               function P(e) {
                    try {
                         var t, r = e.slotID,
                              n = e._targetingSetID,
                              o = e.targeting ? e.targeting : xe("display");
                         if (e.bidState === Ve.BID_STATES.set) return;
                         (t = h(r)) && (E(r), Object.keys(e).filter(function(e) {
                              return (0, Ke.inArray)(o, e)
                         }).forEach(function(r) {
                              return rt.displayAdServer.setTargeting(r, e[r], t)
                         }), qe.store.dispatch({
                              type: "BID_STATE_CHANGE",
                              slotID: r,
                              _targetingSetID: n,
                              bidState: Ve.BID_STATES.set,
                              ts: Date.now()
                         }))
                    } catch (r) {
                         (0, $e.reportError)(r, "__error-applyTargetingToAdServerSlot__")
                    }
               }

               function z(e) {
                    var t = D();
                    e.forEach(function(e) {
                         t[e] && y(t[e])
                    })
               }

               function L() {
                    var e = D();
                    Object.keys(e).forEach(function(t) {
                         y(e[t])
                    })
               }

               function j(e) {
                    try {
                         e ? z(e) : L(), qe.store.getState().displayAdServer.slotRenderEndedSet || (rt.displayAdServer.cmdQueuePush(function() {
                              rt.displayAdServer.slotRenderEndedEvent(function(e) {
                                   v(rt.displayAdServer.getSlotElementId(e.slot)), E(rt.displayAdServer.getSlotElementId(e.slot))
                              })
                         }), qe.store.dispatch({
                              type: "SLOT_RENDER_ENDED_SET"
                         }))
                    } catch (e) {
                         (0, $e.reportError)(e, "__error-applySlotTargeting__", !0)
                    }
               }

               function C() {
                    var e = 197,
                         t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
                         r = "1881141382166183",
                         n = "https://www.facebook.com/audiencenetwork/token/update";

                    function o(e) {
                         var t = JSON.parse(e),
                              r = t.fbToken,
                              n = new Date(parseInt(t.expAfter, 10)).toUTCString();
                         document.cookie = "aps_ext_917=" + r + "; expires=" + n
                    }

                    function i(r) {
                         ! function(e, t, r) {
                              ! function(e, t) {
                                   var r = {
                                        url: e,
                                        withCredentials: !0
                                   };
                                   try {
                                        r.onload = function(e) {
                                             t(e.responseText)
                                        }, r.onerror = function() {}, (0, Ze.xhrGet)(r)
                                   } catch (e) {
                                        (0, $e.reportError)(e, "__error-fbTokenRequest__")
                                   }
                              }(function(e, t) {
                                   return n + "?partner=" + encodeURIComponent(e) + "&vr_token=" + encodeURIComponent(t)
                              }(e, t), r)
                         }(r, function() {
                              for (var r = "VR_", n = 0; n < e; ++n) r += t.charAt(Math.floor(Math.random() * t.length));
                              return r
                         }(), o)
                    }
                    "complete" === document.readyState ? i(r) : window.addEventListener("load", function() {
                         i(r)
                    })
               }

               function B(e, t) {
                    function r() {
                         if (!n)
                              if (20 <= o++)(0, $e.reportError)({
                                   name: "LoopError",
                                   message: "Too many attempts to append to document.body"
                              }, "__error-safeDocumentBodyAppendChild-loops__", !0);
                              else {
                                   try {
                                        if (e && e.body && null !== e.body && "function" == typeof e.body.appendChild) return e.body.appendChild(t), void(n = !0)
                                   } catch (e) {
                                        (0, $e.reportError)(e, "__error-safeDocumentBodyAppendChild-callback__")
                                   }
                                   setTimeout(r, 100)
                              }
                    }
                    var n = !1,
                         o = 0;
                    try {
                         "complete" === e.readyState || "interactive" === e.readyState ? r() : e.addEventListener ? e.addEventListener("DOMContentLoaded", r) : e.attachEvent("onreadystatechange", function() {
                              "complete" !== e.readyState && "interactive" !== e.readyState || r()
                         })
                    } catch (e) {
                         (0, $e.reportError)(e, "__error-safeDocumentBodyAppendChild-outer__")
                    }
               }

               function x(e) {
                    var t, r;
                    return t = "" + e.host + qe.store.getState().cfg.DTB_PATH + "/imp", r = "" + e.host + qe.store.getState().cfg.DTB_PATH + "/adm", e.cfe || e.isAmp ? r : t
               }

               function N(e) {
                    var t, r = "?b=" + e.bidID + "&rnd=" + (0, Ke.getRand)();
                    return (0, Ke.safeObjectHasProp)(e, "pp") && (r += "&pp=" + e.pp), (0, Ke.safeObjectHasProp)(e, "amznp") && (r += "&p=" + e.amznp), (0, Ke.safeObjectHasProp)(e, "crID") && (r += "&crid=" + e.crID), (0, Ke.safeObjectHasProp)(e, "isSharedPMP") && !0 === e.isSharedPMP && (r += "&sp=true"), t = x(e), "1" === e.fif ? t + "j" + r : t + "i" + r
               }

               function H(e) {
                    var t = e.doc.createElement("iframe");
                    return t.frameBorder = 0, t.marginHeight = 0, t.marginWidth = 0, t.topMargin = 0, t.leftMargin = 0, t.scrolling = "no", t.allowTransparency = !0, t.width = e.sizes[0] + "px", t.height = e.sizes[1] + "px", t
               }

               function G(e) {
                    var t;
                    try {
                         if ((0, Ke.safeObjectHasProp)(e, "bidType")) {
                              var r = e.kvMap;
                              switch (e.bidType) {
                                   case "sharedPMP":
                                        t = {
                                             bidID: r.amzniid_sp[0],
                                             pp: r.amznbid_sp[0],
                                             sizes: r.amznsz_sp[0].split("x"),
                                             amznp: r.amznp_sp[0],
                                             isSharedPMP: e.isSharedPMP
                                        };
                                        break;
                                   case "preferredPMP":
                                        var n = e.amzndeal.split("_").pop().trim();
                                        t = {
                                             bidID: r[e.amzndeal + "amzniid"][0],
                                             sizes: De(n)
                                        };
                                        break;
                                   case "openAuction":
                                        t = (0, Ke.safeObjectHasProp)(e, "kvMap") ? {
                                             bidID: r.amzniid[0],
                                             pp: (0, Fe.getAmpAmznBidValue)(r.amznbid[0]),
                                             amznp: r.amznp[0],
                                             sizes: r.amznsz[0].split("x")
                                        } : {
                                             bidID: e.amzniid,
                                             pp: (0, Fe.getAmpAmznBidValue)(e.amznbid),
                                             amznp: e.amznp,
                                             sizes: e.amznsz.split("x")
                                        };
                                        break;
                                   default:
                                        try {
                                             (0, $e.reportError)({
                                                  name: "Invalid AMP Bid Type: " + e.bidType,
                                                  message: "No valid AMP bid type"
                                             }, "__error-ampBidAuctionTypeSelectionDefaultBlock__")
                                        } catch (e) {
                                             (0, $e.reportError)(e, "__error-ampBidAuctionSwitchStatement__")
                                        }
                              }
                         }
                    } catch (e) {
                         (0, $e.reportError)(e, "__error-getAmpAdData__")
                    }
                    return t
               }

               function M(e, t) {
                    try {
                         var r = {},
                              n = {};
                         if ((0, Ke.safeObjectHasProp)(t, "ampEnv") && t.ampEnv && (r = t, (0, Ke.safeObjectHasProp)(t, "bidType") && "sharedPMP" === t.bidType ? r.isSharedPMP = !0 : r.isSharedPMP = !1, r.document = e), Ee(e) && ((r = e).bidType = "openAuction", r.ampEnv = !0), (0, Ke.safeObjectHasProp)(r, "kvMap") && (r.amznhost = t.kvMap.amznhost[0]), (n = G(r)).doc = r.document, n.host = r.amznhost.replace("http://", "https://"), n.adID = "amznad" + (0, Ke.getRand)(), n.isAmp = r.ampEnv, n.isSf = (0, We.isSafeFrame)(window), qe.store.getState().aaxViewabilityEnabled) return void Te(n, n.doc);
                         k(n)
                    } catch (e) {
                         (0, $e.reportError)(e, "__error-renderAmpImpression__")
                    }
               }

               function U(e) {
                    try {
                         var t = H(e = Ue({
                              hasRendered: !1,
                              hasStartedRender: !1
                         }, e));
                         t.id = "apstag-f-iframe-" + (0, Ke.getRand)(), t.setAttribute("srcdoc", e.html), t.src = 'javascript: window.frameElement.getAttribute("srcdoc");', B(e.doc, t)
                    } catch (e) {
                         (0, $e.reportError)(e, "__error-loadAdIntoFriendlyIframe__", !0)
                    }
               }

               function k(e, t) {
                    try {
                         var r = H(e),
                              n = {};
                         if (r.id = e.adID, r.sandbox = "allow-forms allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation", (0, Qe.isDebugEnabled)("fake_bids")) {
                              var o = '<body style="background-color: #FF9900;">' + (50 < e.sizes[1] ? "<h3>apstag Test Creative</h3>" : "") + "<h4>amzniid - " + e.bidID + " | amznbid: " + e.pp + " | size: " + e.sizes.join("x") + "</h4></body>";
                              r.src = "javascript:'" + o + "'"
                         } else r.src = N(e);
                         e.isAmp ? (n.doc = e.doc, n.amzniid = e.bidID, n.slotID = "amp", e.isSf && (0, We.is1x1Creative)(window) && (0, We.expandSf)(e.sizes, window)) : (n = I(e.bidID, e.isSharedPMP).slotBid).doc = e.doc, B(e.doc, r), e.viewabilityParams = e.viewabilityParams || {
                              states: {}
                         }, (e.viewabilityParams.iframe = r).onload = function() {
                              e.viewabilityParams.states.iframeLoaded = !0, t && t()
                         }
                    } catch (e) {
                         (0, $e.reportError)(e, "__error-loadAdIntoUnfriendlyIframe__", !0)
                    }
               }

               function q(e) {
                    var t, r = e.states,
                         n = e.doc,
                         o = e.bidID,
                         i = e.iframe;
                    be(r) || (r.shouldRunViewability = !1, (0, Ke.safeObjectHasProp)(window, "amzncsm") ? t = window.amzncsm : (0, Ke.safeObjectHasProp)(n.defaultView, "amzncsm") && (t = n.defaultView.amzncsm), t && (0, Ke.safeObjectHasProp)(t, "rmD") && (t.host = (0, Qe.getDebugValue)("host", qe.store.getState().hosts.DEFAULT_AAX_PIXEL_HOST), t.rmD(i, o, n.defaultView, n, qe.store.getState().config.pubID)))
               }

               function F(e, t) {
                    return function(r) {
                         var n = (0, nt.getNewSlotBidsAndExposeForRequestedSlots)(t.slots),
                              o = Object.keys(n),
                              i = [];
                         r && (qe.store.dispatch({
                              type: "RECORD_AAX_REQ_PROP",
                              bidReqID: t.bidReqID,
                              key: "timedOutAt",
                              value: Date.now()
                         }), qe.store.getState().experiments.chunkRequests && qe.store.dispatch({
                              type: "RECORD_TIMEOUT",
                              fid: t.bidReqID,
                              timeOut: Date.now()
                         })), o.forEach(function(e) {
                              if ((0, Ke.safeObjectHasProp)(n, e)) {
                                   var t = n[e],
                                        r = {};
                                   if ((0, nt.isNewBidObjectRequired)(qe.store.getState(), rt.displayAdServer)) t.meta.forEach(function(e) {
                                        r[e] = t[e]
                                   }), r.targeting = {}, t.targeting.forEach(function(e) {
                                        r.targeting[e] = t[e]
                                   }), r.helpers = {
                                        targetingKeys: t.targeting,
                                        qsParams: nt.createBidQsParams.bind(null, t, !1),
                                        encodedQsParams: nt.createBidQsParams.bind(null, t, !0)
                                   };
                                   else if ((0, Ke.safeObjectHasProp)(t, "amznbid")) {
                                        if ((0, Ke.safeObjectHasProp)(t, "amznp") || (t.amznp = ""), r = {
                                                  amzniid: t.amzniid,
                                                  amznbid: t.amznbid,
                                                  amznp: t.amznp,
                                                  slotID: e
                                             }, (0, Ke.safeObjectHasProp)(t, "size") && (r.size = t.size, r.amznsz = t.amznsz), "video" === t.mediaType) {
                                             r.mediaType = "video";
                                             var o = "";
                                             t.amznbid ? o += "&amzniid=" + t.amzniid + "&amznbid=" + t.amznbid + "&amznp=" + t.amznp : (r.amznbid = "", r.amzniid = ""), t.r_amznbid ? (r.r_amznbid = t.r_amznbid, r.r_amzniid = t.r_amzniid, r.r_amznp = t.r_amznp, o += "&r_amzniid=" + t.r_amzniid + "&r_amznbid=" + t.r_amznbid + "&r_amznp=" + t.r_amznp) : (r.r_amznbid = "", r.r_amzniid = "", r.r_amznp = ""), r.qsParams = o, r.encodedQsParams = encodeURIComponent(o)
                                        }
                                   } else r = (0, nt.createPublicStateTrackingBidObject)(t.slotID, Ve.SLOT_STATES.noBid);
                                   i.push(r)
                              }
                         }), rt.displayAdServer.isSupported && (i = (0, nt.addStateTrackingBidsToRealBids)(i, t, r)), rt.displayAdServer.appendTargeting(i), e(i, {
                              fromTimeout: r
                         })
                    }
               }

               function K(e, t) {
                    try {
                         var r;
                         (r = e.defaultView && e.defaultView.frameElement ? e.defaultView.frameElement : window.frameElement).width = t[0], r.height = t[1]
                    } catch (e) {
                         (0, $e.reportError)(e, "__error-resizeIframe__")
                    }
               }

               function X(e) {
                    return e[0] + "x" + e[1]
               }

               function Q(e) {
                    return 1 === e.length ? X(e[0]) : X(e[Math.floor(e.length * Math.random())])
               }

               function V(e, t) {
                    var r, n = (0, Qe.getDebugValue)("host", qe.store.getState().hosts.DEFAULT_AAX_BID_HOST),
                         o = (0, Fe.getCurrentUrl)(window),
                         i = e.bidReqID,
                         a = (0, Ke.getWindowDimensions)(window),
                         s = (0, Qe.getDebugValue)("testBidTimeout", 200);
                    qe.store.dispatch({
                         type: "RECORD_AAX_REQUEST",
                         data: {
                              bidConfig: e,
                              timeout: s,
                              bidReqID: i,
                              ws: a,
                              url: o,
                              rqTs: Date.now()
                         }
                    }), r = e.slots.map(function(e) {
                         var t = {
                              slotID: e.slotID,
                              amzniid: Ve.MOCKBID.amzniid + "-" + (0, Ke.getRand)(),
                              amznbid: Ve.MOCKBID.amznbid,
                              amznp: Ve.MOCKBID.amznp,
                              crid: Ve.MOCKBID.crid + "-" + (0, Ke.getRand)()
                         };
                         if ((0, Ke.safeObjectHasProp)(e, "sizes")) {
                              var r = Q(e.sizes);
                              t.size = r, t.amznsz = r
                         } else "video" === e.mediaType && (t.mediaType = "video", t.amznbid = "v_" + t.amznbid);
                         if ((0, nt.isNewBidObjectRequired)(qe.store.getState(), rt.displayAdServer)) {
                              t.mediaType = "banner", t.meta = ["slotID", "mediaType", "size"], t.amznbid_sp = Ve.MOCKBID.amznbid + "SP", t.amznp_sp = Ve.MOCKBID.amznp + "SP", t.amznsz_sp = t.size;
                              var n = "testDeal" + (0, Ke.getRand)() + "_" + t.size,
                                   o = "testDealImpression-" + (0, Ke.getRand)();
                              t.amzndeal_sp = n, t.amzndeals = [n], t[n + "amzniid"] = o, t.amzniid_sp = o, t.targeting = ["amzniid", "amznbid", "amznp", "amznsz", "amzniid_sp", "amznbid_sp", "amznp_sp", "amznsz_sp", "amzndeal_sp", "amzndeals", n + "amzniid"]
                         }
                         return t
                    }), setTimeout(function() {
                         window.apstag.bids({
                              slots: r,
                              host: n,
                              status: "ok",
                              cb: i
                         }), t(!0)
                    }, s)
               }

               function Y(e) {
                    var t = qe.store.getState().AAXReqs.filter(function(t) {
                         return t.bidReqID === e.cb
                    })[0];
                    if (t && t.bidConfig && t.bidConfig.slots) {
                         var r = t.bidConfig.slots.filter(Xe.isDisplaySlot).map(function(e) {
                                   return e.slotID
                              }),
                              n = (0, Ke.safeObjectHasProp)(e, "slots") ? e.slots.map(function(e) {
                                   return e.slotID
                              }) : [],
                              o = r.filter(function(e) {
                                   return !(0, Ke.inArray)(n, e)
                              });
                         qe.store.dispatch({
                              type: "NO_BID_ON_ADSERVER_SLOTS",
                              slotIDs: o
                         }), rt.displayAdServer.hasAdServerObjectLoaded() ? $() : rt.displayAdServer.isCommandQueueDefined() && rt.displayAdServer.cmdQueuePush(function() {
                              $()
                         })
                    }
               }

               function W(e) {
                    return (0, Ke.inArray)(qe.store.getState().AAXReqs.filter(function(e) {
                         return !e.resTs
                    }).map(function(e) {
                         return e.bidConfig.slots
                    }).reduce(function(e, t) {
                         return e.concat(t)
                    }, []).map(Xe.getSlotID), e)
               }

               function J(e) {
                    var t = rt.displayAdServer.getTargeting("amznbid", e);
                    return 0 < t.length && 2 < t[0].length
               }

               function $() {
                    rt.displayAdServer.hasAdServerObjectLoaded() && "1" === rt.displayAdServer.getTargeting("amznbid")[0] && ee(), (0, Xe.getDisplayAdServerSlots)(rt.displayAdServer).forEach(function(e) {
                         !(0, Ke.inArray)(qe.store.getState().displayAdServer.noBidSlotIDs, rt.displayAdServer.getSlotElementId(e)) || W(rt.displayAdServer.getSlotElementId(e)) || J(e) || "2" === rt.displayAdServer.getTargeting("amznbid", e)[0] || Z("noBid", e)
                    })
               }

               function Z(e, t) {
                    Ve.SLOT_STATE_KEYS.forEach(function(r) {
                         return rt.displayAdServer.setTargeting(r, Ve.SLOT_STATES[e], t)
                    })
               }

               function ee() {
                    Ve.SLOT_STATE_KEYS.forEach(function(e) {
                         return rt.displayAdServer.clearTargeting(e)
                    })
               }

               function te(e) {
                    var t = {
                         _type: "dupePixel",
                         dd: Date.now() - e.renderTime
                    };
                    (0, Je.bidCacheIdPixel)(e.amzniid, t)
               }

               function re() {
                    var e = (0, Ye.getResourcePerformanceObject)(window, new RegExp("aax2/apstag.js")),
                         t = {
                              pid: a,
                              ns: n,
                              fs: (0, Ye.getMetricFromPerformanceObject)(e, "fetchStart"),
                              re: (0, Ye.getMetricFromPerformanceObject)(e, "responseEnd")
                         },
                         r = (0, Ye.isResourceCached)(e);
                    null !== r && (t.c = r ? 1 : 0), setTimeout(Je.noBidCacheIdPixel, 1e3, t)
               }! function() {
                    if ((0, Ke.hasLocalStorage)()) {
                         var e = localStorage.getItem(Ve.CFG_LOCAL_STORAGE_KEY);
                         if (e && "undefined" !== e) {
                              var t = JSON.parse(e);
                              qe.store.dispatch({
                                   type: "SET_CFG",
                                   cfg: t
                              })
                         }
                    }
               }();
               var ne = 0,
                    oe;

               function ie() {
                    (0, Ke.safeObjectHasProp)(window, "googletag") && (0, Ke.safeObjectHasProp)(window.googletag, "cmd") ? et.displayAdServerGoogletag.cmdQueuePush(function() {
                         window.googletag.pubads().addEventListener("slotRequested", function(e) {
                              try {
                                   var t = e.slot;
                                   qe.store.dispatch({
                                        type: "LOG_GAM_EVENT",
                                        event: Ue({}, (0, et.constructApsSlotObject)(t), {
                                             ts: Date.now(),
                                             targeting: t.getTargetingMap()
                                        })
                                   })
                              } catch (e) {
                                   (0, $e.reportError)(e, "__error-latency-parse-event__")
                              }
                         })
                    }): ++ne < 5 && setTimeout(ie, 100)
               }

               function ae(e) {
                    var t = e.AAXReqs.slice(e.gamSlotRenderPixel.aaxReqOffset).reduce(function(e, t) {
                              return e.concat(t.bidConfig.slots)
                         }, []).map(function(e) {
                              return Ue({}, e, {
                                   type: "a"
                              })
                         }).filter(function(e) {
                              return "video" !== e.mediaType
                         }),
                         r = e.gamSlotFetchLog.slice(e.gamSlotRenderPixel.gamSlotFetchLogOffset).map(function(e) {
                              return Ue({}, e, {
                                   type: "g"
                              })
                         }),
                         n = [].concat(t).concat(r).reduce(function(e, t) {
                              return (0, Ke.safeObjectHasProp)(e, t.slotID) || (e[t.slotID] = {
                                   sd: t.slotID,
                                   a: {
                                        c: 0
                                   },
                                   g: {
                                        c: 0
                                   }
                              }), e[t.slotID][t.type].c++, e[t.slotID][t.type].s = t.sizes, e[t.slotID][t.type].sn = t.slotName || "", e
                         }, {});
                    return Object.keys(n).map(function(e) {
                         return n[e]
                    }).filter(function(e) {
                         return 0 !== e.a.c || 0 !== e.g.c
                    })
               }

               function se() {
                    var e = qe.store.getState(),
                         t = ae(e);
                    0 < Object.keys(t).length && ((0, Ke.chunkArray)(t, 5).forEach(function(t) {
                         (0, Je.noBidCacheIdPixel)({
                              slots: t,
                              pid: a,
                              url: (0, Fe.getCurrentUrl)(window).split("?")[0],
                              ws: (0, Ke.getWindowDimensions)(window),
                              pubid: e.config.pubID,
                              _type: "slotRenders"
                         })
                    }), qe.store.dispatch({
                         type: "UPDATE_RENDER_OFFSETS",
                         offsets: {
                              aaxReqOffset: e.AAXReqs.length,
                              gamSlotFetchLogOffset: e.gamSlotFetchLog.length
                         }
                    }))
               }

               function ce() {
                    setInterval(function() {
                         se()
                    }, 5e3)
               }

               function ue() {
                    try {
                         setTimeout(function() {
                              var e = pe().filter(function(e) {
                                   return !(0, Ke.safeObjectHasProp)(qe.store.getState().bsPixels, e.iid) || e.state !== qe.store.getState().bsPixels[e.iid]
                              });
                              e && e.length && 0 < e.length && (e.forEach(function(e) {
                                   var t = e.iid,
                                        r = ot(e, ["iid"]);
                                   (0, Je.bidCacheIdPixel)(t, le(r))
                              }), de(e));
                              var t = {
                                   fetchStart: "a",
                                   domainLookupStart: "b",
                                   domainLookupEnd: "c",
                                   connectStart: "d",
                                   secureConnectionStart: "e",
                                   connectEnd: "f",
                                   requestStart: "g",
                                   responseStart: "h",
                                   responseEnd: "i",
                                   resTs: "j"
                              };
                              Object.keys(qe.store.getState().slotBids).forEach(function(e) {
                                   qe.store.getState().slotBids[e].filter(function(e) {
                                        return void 0 !== e.amzniid
                                   }).forEach(function(r) {
                                        if (!r.pixelSent) {
                                             var n = qe.store.getState().AAXReqs.filter(function(e) {
                                                  return e.bidReqID === r.bidReqID
                                             })[0];
                                             if ("object" === (void 0 === n ? "undefined" : Me(n)) && null !== n) {
                                                  var o = n.rqTs - (0, Ye.getTimeOrigin)(),
                                                       i = {
                                                            pid: a,
                                                            lv: Ve.LIBRARY_VERSION,
                                                            ns: n.bidConfig.slots.length,
                                                            fid: r.bidReqID,
                                                            fbrq: n.rqTs,
                                                            _type: "latencyBd"
                                                       };
                                                  "object" === Me(n.perf) && null !== n.perf && Object.keys(t).forEach(function(e) {
                                                       0 !== (0, Ye.getMetricFromPerformanceObject)(n.perf, e) && (i[t[e]] = (0, Ye.getMetricFromPerformanceObject)(n.perf, e) - o)
                                                  }), i[t.resTs] = n.resTs - n.rqTs, (0, Je.bidCacheIdPixel)(r.amzniid, i), qe.store.dispatch({
                                                       type: "UPDATE_BID_INFO_PROP",
                                                       slotID: e,
                                                       iid: r.amzniid,
                                                       key: "pixelSent",
                                                       value: !0
                                                  })
                                             }
                                        }
                                   })
                              }), ue()
                         }, 5e3)
                    } catch (e) {
                         (0, $e.reportError)(e, "__error-bidSetPixel__")
                    }
               }

               function de(e) {
                    e.forEach(function(e) {
                         return qe.store.dispatch({
                              type: "RECORD_BID_INFO_SENT",
                              bidInfo: e
                         })
                    })
               }

               function le(e) {
                    var t = {};
                    try {
                         var r = fe(e.fid);
                         (t = {
                              status: e.state,
                              pubid: qe.store.getState().config.pubID,
                              lv: Ve.LIBRARY_VERSION,
                              _type: "bidSetPixel"
                         }).toa = (0, Ke.safeObjectHasProp)(r.req, "timedOutAt") ? r.req.timedOutAt : "0", t.fbrq = r.req.rqTs, t.pto = r.req.timeout, t.ns = r.req.bidConfig.slots.length, t.bla = r.req.resTs - r.req.rqTs, t.reqindex = r.index, t.fid = e.fid, qe.store.getState().cfg.CHUNK_BID_REQUESTS_PROPORTION && (t.eid = qe.store.getState().experiments.chunkRequests ? 2 : 1, t.fbindex = r.fbIndex, t.fbns = qe.store.getState().bidConfigs[e.fid.split("-")[0]].slots.length), e.delta && (t.delay = e.delta);
                         try {
                              var n = r.req.perf;
                              void 0 !== n && (t.ul = r.req.urlLength, t.es = (0, Ye.getMetricFromPerformanceObject)(n, "encodedBodySize"))
                         } catch (e) {
                              (0, $e.reportError)(e, "__error-mapBidInfoToPixel-size__")
                         }
                    } catch (e) {
                         (0, $e.reportError)(e, "__error-mapBidInfoToPixel__")
                    }
                    return t
               }

               function fe(e) {
                    var t = {
                         req: qe.store.getState().AAXReqs.filter(function(t) {
                              return t.bidReqID === e
                         })[0]
                    };
                    return t.index = qe.store.getState().AAXReqs.indexOf(t.req) + 1, qe.store.getState().experiments.chunkRequests ? t.fbIndex = qe.store.getState().AAXReqs.filter(function(e) {
                         return -1 === e.bidReqID.indexOf("-") || "0" === e.bidReqID.split("-")[1]
                    }).map(function(e) {
                         return e.bidReqID.split("-")[0]
                    }).indexOf(e.split("-")[0]) + 1 : t.fbIndex = t.index, t
               }

               function pe() {
                    var e = Se(),
                         t = [];
                    return e && Object.keys(qe.store.getState().slotBids).forEach(function(r) {
                         "video" !== qe.store.getState().slotBids[r][0].mediaType && qe.store.getState().slotBids[r].filter(function(e) {
                              return void 0 !== e.amzniid
                         }).forEach(function(n) {
                              var o = {
                                        slotID: r,
                                        iid: n.amzniid,
                                        fid: n.bidReqID
                                   },
                                   i = [],
                                   a = [];
                              if (r in e && (i = e[r].fetchedAt.filter(function(e) {
                                        return e.AAXReqInfo && e.AAXReqInfo.bidReqID === n.bidReqID
                                   }), a = e[r].targetedAt.filter(function(e) {
                                        return e.targeting === n.amzniid
                                   })), 0 < i.length ? 0 < i.length && a.length >= i.length && i.slice(i.length - 1)[0].ts > a.slice(i.length - 1)[0].ts ? 1 === e[r].fetchWithIID.filter(function(e) {
                                        return e === n.amzniid
                                   }).length ? o.state = 1 : o.state = 4 : -1 !== e[r].fetchWithIID.indexOf(n.amzniid) ? o.state = 3 : o.state = 2 : o.state = 0, 1 === o.state || 2 === o.state) {
                                   var s = qe.store.getState().AAXReqs.filter(function(e) {
                                             return e.bidReqID === n.bidReqID
                                        })[0].resTs,
                                        c = ge(s, e[r].fetchedAt, 2 === o.state);
                                   c && (0, Ke.safeObjectHasProp)(c, "ts") && (o.delta = s - c.ts)
                              }
                              t.push(o)
                         })
                    }), t
               }

               function ge(e, t, r) {
                    var n = t.map(function(t) {
                         var n = e - t.ts;
                         return r ? 0 <= n ? n : null : n <= 0 ? -n : null
                    });
                    return t[_e(n)]
               }

               function _e(e) {
                    for (var t, r, n, o = 0; o < e.length; o++) "number" == typeof(t = e[o]) && ("number" != typeof n || t < r) && (n = o, r = t);
                    return n
               }

               function me(e, t) {
                    return qe.store.getState().AAXReqs.filter(function(e) {
                         return -1 < e.bidConfig.slots.map(function(e) {
                              return e.slotID
                         }).indexOf(t)
                    })[e]
               }

               function Se() {
                    if (!rt.displayAdServer.hasAdServerObjectLoaded()) return null;
                    var e = qe.store.getState().gamSlotFetchLog.reduce(function(e, t) {
                         (0, Ke.safeObjectHasProp)(e, t.slotID) || (e[t.slotID] = {
                              fetchedAt: [],
                              targetedAt: []
                         });
                         var r = e[t.slotID];
                         return r.fetchedAt.push({
                              ts: t.ts,
                              AAXReqInfo: me(r.fetchedAt.length, t.slotID)
                         }), (0, Ke.safeObjectHasProp)(t.targeting, "amzniid") && (0, Ke.safeObjectHasProp)(t.targeting.amzniid, 0) ? r.targetedAt.push({
                              ts: t.ts - 1,
                              targeting: t.targeting.amzniid[0]
                         }) : r.targetedAt.push({
                              ts: t.ts - 1,
                              targeting: ""
                         }), e
                    }, {});
                    return Object.keys(e).forEach(function(t) {
                         var r = e[t];
                         r.fetchWithIID = r.fetchedAt.map(function(e) {
                              var t = ge(e.ts, r.targetedAt, !0);
                              return t ? t.targeting : 0
                         }), e[t] = r
                    }), e
               }

               function be(e) {
                    var t = Object.keys(e);
                    return t.map(function(t) {
                         return e[t]
                    }).filter(function(e) {
                         return e
                    }).length === t.length
               }

               function ye() {
                    rt.displayAdServer.hasAdServerObjectLoaded() ? Z("noRequest") : rt.displayAdServer.isCommandQueueDefined() && rt.displayAdServer.cmdQueuePush(function() {
                         Z("noRequest")
                    })
               }

               function he(e) {
                    rt.displayAdServer.isCommandQueueDefined() && (qe.store.dispatch({
                         type: "REQUESTED_BID_FOR_ADSERVER_SLOTS",
                         slotIDs: e
                    }), qe.store.dispatch({
                         type: "REQUESTED_BID_FOR_PMP_ONLY_DFP_SLOTS",
                         slotIDs: e
                    }), rt.displayAdServer.cmdQueuePush(function() {
                         var t = (0, Xe.getDisplayAdServerSlots)(rt.displayAdServer);
                         "0" === rt.displayAdServer.getTargeting("amznbid")[0] && ee(), O(e, t.map(function(e) {
                              return rt.displayAdServer.getSlotElementId(e)
                         })) ? t.forEach(function(t) {
                              (0, Ke.inArray)(e, rt.displayAdServer.getSlotElementId(t)) && !J(t) && Z("bidInFlight", t)
                         }) : rt.displayAdServer.cmdQueuePush(function() {
                              Z("bidInFlight")
                         })
                    }))
               }

               function ve() {
                    return window.AMP_CONTEXT_DATA && "AMP-AD" === window.AMP_CONTEXT_DATA.tagName
               }

               function Ee(e) {
                    return (0, Ke.safeObjectHasProp)(e, "type") && "amp" === e.type && !(e instanceof Document)
               }

               function Oe(e, t) {
                    return (0, Ke.safeObjectHasProp)(t, "ampEnv") && t.ampEnv || Ee(e)
               }

               function De(e) {
                    return e.split("x").map(function(e) {
                         return parseInt(e, 10)
                    })
               }

               function Ae(e, t, r) {
                    try {
                         (0, Je.sendPixels)()
                    } catch (e) {
                         (0, $e.reportError)(e, "__sendPixels-renderImp__")
                    }
                    if (Oe(e, r) && ve()) M(e, r);
                    else {
                         var n = !1;
                         t && "string" == typeof t && 0 === t.indexOf("sp|") && (t = t.substring(3), n = !0);
                         var o, i = t || e.amzniid,
                              a = I(i, n),
                              s = a.slotBid,
                              c = a.dealId;
                         if (o = c && 1 <= c.length ? De("sp" === c ? s.amznsz_sp : T(i, s, c)) : De(s.size), 1 !== arguments.length)
                              if (s) {
                                   s.bidState === Ve.BID_STATES.rendered && te(s), qe.store.dispatch({
                                        type: "BID_STATE_CHANGE",
                                        slotID: s.slotID,
                                        _targetingSetID: s._targetingSetID,
                                        bidState: Ve.BID_STATES.rendered,
                                        dealId: c,
                                        ts: Date.now()
                                   });
                                   var d = s.host,
                                        u = "amznad" + Math.round(1e6 * Math.random()),
                                        l = {
                                             bidID: t,
                                             doc: e,
                                             pp: Ie("amznbid", s, c),
                                             host: d,
                                             adID: u,
                                             sizes: o,
                                             amznp: Ie("amznp", s, c),
                                             crID: Ie("crid", s, c),
                                             fif: !1,
                                             dealId: c,
                                             isSharedPMP: n,
                                             cfe: s.cfe
                                        };
                                   "1" === s.fif ? (l.fif = "1", qe.store.dispatch({
                                        type: "UPDATE_BID_INFO_PROP",
                                        slotID: s.slotID,
                                        iid: t,
                                        key: "doc",
                                        value: e,
                                        dealId: c
                                   }), (0, Ze.loadScriptTag)(N(l), null, document)) : qe.store.getState().aaxViewabilityEnabled ? Te(l, e) : k(l), K(e, o)
                              } else(0, $e.reportError)(new Error("Invalid bid ID tried to render"), "__error-invalid_bid_id_render__");
                         else U({
                              doc: s.doc,
                              bidID: s.amzniid,
                              sizes: o,
                              html: e.html
                         })
                    }
               }

               function Ie(e, t, r) {
                    return r && 1 <= r.length ? "sp" === r ? t[e + "_sp"] : "" : t[e] ? t[e] : ""
               }

               function Te(e, t) {
                    var r = t.createElement("script");
                    r.type = "text/javascript", r.async = !0, e.viewabilityParams = {
                         doc: t,
                         bidID: e.bidID,
                         states: {
                              csmLoaded: !1,
                              iframeLoaded: !1,
                              shouldRunViewability: !0
                         }
                    };
                    var n = q.bind(null, e.viewabilityParams);
                    (0, Ze.addOnLoadFunction)(r, function() {
                         e.viewabilityParams.states.csmLoaded = !0, n()
                    });
                    try {
                         r.onerror = function(e) {
                              return (0, Je.noBidCacheIdPixel)({
                                   _type: "csm_fail",
                                   ts: Date.now(),
                                   msg: e.message
                              })
                         }
                    } catch (e) {
                         (0, $e.reportError)(e, "__error-csm_onerror__")
                    }
                    k(e, n), r.src = qe.store.getState().cfg.CSM_JS, B(t, r)
               }

               function we(e) {
                    (0, nt.mapSlotIDValues)(e), g(e), (0, Ke.safeObjectHasProp)(e, "slots") && (qe.store.dispatch({
                         type: "UPDATE_SLOT_BIDS",
                         bids: R(e)
                    }), (0, Ke.safeObjectHasProp)(e, "ev") && qe.store.dispatch({
                         type: "SET_VIEWABILITY",
                         viewability: e.ev
                    }), (0, Ke.safeObjectHasProp)(e, "cfn") && qe.store.dispatch({
                         type: "SET_CFG",
                         cfg: {
                              CSM_JS: "//" === e.cfn.substring(0, 2) ? e.cfn : "//c.amazon-adsystem.com/" + e.cfn
                         }
                    })), _(e)
               }

               function Re() {
                    return "number" == typeof qe.store.getState().cfg.MAX_SLOTS_PER_REQUEST && 0 < qe.store.getState().cfg.MAX_SLOTS_PER_REQUEST
               }

               function Pe(e, t) {
                    var r = Le.bind(null, e, t);
                    void 0 === qe.store.getState().gdpr || null === qe.store.getState().gdpr ? (qe.store.dispatch({
                         type: "ADD_GDPR_QUE_ITEM",
                         func: r
                    }), 1 === qe.store.getState().gdprQue.length && (0, ke.GDPR)(qe.store.getState().config.gdpr, ze)) : r()
               }

               function ze(e) {
                    qe.store.dispatch({
                         type: "SET_GDPR_CONFIG",
                         config: e
                    }), qe.store.getState().gdprQue.map(function(e) {
                         try {
                              e()
                         } catch (e) {
                              (0, $e.reportError)(e, "__gdpr_que__")
                         }
                    }), qe.store.dispatch({
                         type: "CLEAR_GDPR_QUE"
                    })
               }

               function Le(e, t) {
                    var r = !1;
                    !0 === qe.store.getState().config.simplerGPT && (!(0, Ke.safeObjectHasProp)(e, "slots") || 0 < e.slots.length && !(0, Ke.safeObjectHasProp)(e.slots[0], "slotID")) && (0 === (0, Xe.getDisplayAdServerSlots)(rt.displayAdServer).length ? ((0, $e.reportError)(new Error("fetchBids was called in simplerGPT mode before any slots were defined in GPT"), !0), r = !0, e.slots = []) : (e.slots || (e.slots = (0, Xe.getDisplayAdServerSlots)(rt.displayAdServer)), e.slots = (0, et.turnGptSlotsIntoApsSlots)(e.slots), 0 === e.slots.length && ((0, $e.consoleWarn)(new Error("No GPT slots provided to apstag.fetchBids() had valid sizes"), !0), r = !0)));
                    var n, o, i = (0, Xe.normalizeSlotsSizeArray)(e.slots);
                    i && (e.slots = i);
                    try {
                         n = (0, Fe.getTimeout)(e, qe.store.getState()), "function" != typeof t && (void 0 !== t && (0, $e.reportError)(new Error("Invalid callback function provided to apstag.fetchBids"), "__error-invalid_callback_fetchbids_", !0), t = function() {}), e.bidReqID = "" + qe.store.getState().AAXReqs.length, t = (0, Fe.executeFunctionOnceWithTimeout)(F(t, e), n)
                    } catch (e) {
                         (0, $e.reportError)(e, "__error-fetchBids__", !0)
                    }
                    if (0 === e.slots.length) return !1 === r && (0, $e.reportError)(new Error("No slots provided to apstag.fetchBids"), "__error-no_slots_provided_bid_request__", !0), void setTimeout(t.bind(null, []), 10);
                    if (he(e.slots.filter(Xe.isDisplaySlot).map(Xe.getSlotID)), qe.store.dispatch({
                              type: "NEW_FETCH_BID_REQUEST",
                              fid: e.bidReqID,
                              pto: n
                         }), qe.store.dispatch({
                              type: "RECORD_ORIGINAL_BID_CONFIG",
                              bidConfig: e
                         }), (0, Qe.isDebugEnabled)("fake_bids")) V(e, t);
                    else if (Ve.HAS_XHR_SUPPORT)
                         if (qe.store.dispatch({
                                   type: "SHOULD_CHUNK_REQUESTS",
                                   value: (0, Ke.shouldSample)(qe.store.getState().cfg.CHUNK_BID_REQUESTS_PROPORTION)
                              }), qe.store.getState().experiments.chunkRequests && Re()) {
                              o = je(e);
                              for (var a = 0; a < o.length; a++) o[a].bidReqID = e.bidReqID + "-" + a;
                              qe.store.dispatch({
                                   type: "ADD_CHUNKED_REQUESTS",
                                   fid: e.bidReqID,
                                   numChunks: o.length
                              }), o.forEach(function(e) {
                                   l((0, nt.buildBidUrl)(e, n), t, e.bidReqID)
                              })
                         } else l((0, nt.buildBidUrl)(e, n), t, e.bidReqID);
                    else(0, Ze.loadScriptTag)((0, nt.buildBidUrl)(e, n), t)
               }

               function je(e) {
                    for (var t = Math.ceil(e.slots.length / qe.store.getState().cfg.MAX_SLOTS_PER_REQUEST), r = new Array(t), n = 0; n < t; n++) {
                         var o = n * qe.store.getState().cfg.MAX_SLOTS_PER_REQUEST;
                         r[n] = {
                              slots: e.slots.slice(o, o + qe.store.getState().cfg.MAX_SLOTS_PER_REQUEST)
                         }
                    }
                    return r.map(function(t) {
                         return Ue({}, e, t)
                    })
               }

               function Ce(e) {
                    (0, Ke.safeObjectHasProp)(qe.store.getState().config, "adServer") ? rt.displayAdServer.isSupported ? (j(e), $()) : (0, $e.reportError)(new Error("apstag.setDisplayBids called with unsupported ad server: " + qe.store.getState().config.adServer), "__error-invalid_ad_server_setdisplaybids__", !0): (0, $e.reportError)(new Error("apstag.setDisplayBids called without specifying ad server"), "__error-no_ad_server_setdisplaybids__", !0)
               }

               function Be(e, t) {
                    var r = b(e);
                    (0, rt.setDisplayAdServer)(e.adServer), ye(), "success" === r && "function" == typeof t && t()
               }

               function xe() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "display";
                    switch (e) {
                         case "display":
                              return Ve.DISPLAY_TARGETING_KEYS;
                         case "video":
                              return Ve.VIDEO_TARGETING_KEYS;
                         default:
                              return (0, nt.isNewBidObjectRequired)(qe.store.getState(), rt.displayAdServer) && (0, Ke.isArray)(qe.store.getState().targetingKeys[e]) ? qe.store.getState().targetingKeys[e] : "unknown targeting type " + e
                    }
               }

               function Ne() {
                    return qe.store.getState().AAXReqs.reduce(function(e, t) {
                         return t.bidConfig.slots.reduce(function(e, t) {
                              return e[t.slotID] = t.slotName, e
                         }, e)
                    }, {})
               }

               function He(e, t) {
                    var r = t;
                    return function() {
                         return o({
                              method: e,
                              args: arguments
                         }), r.apply(void 0, arguments)
                    }
               }

               function Ge(e, t) {
                    return function() {
                         try {
                              return e.apply(void 0, arguments)
                         } catch (e) {
                              return (0, $e.reportError)(e, t, !0), null
                         }
                    }
               }
               try {
                    (0, Ke.safeObjectHasProp)(window, "apstag") && (0, Ke.safeObjectHasProp)(window.apstag, "_Q") && 0 < window.apstag._Q.length && qe.store.dispatch({
                         type: "SET_Q",
                         Q: window.apstag._Q
                    })
               } catch (e) {
                    (0, $e.reportError)(e, "__error-storeApstagQ__")
               }
               window.apstag = (oe = {
                         punt: we,
                         init: Be,
                         debug: Qe.debugPublicApi,
                         _getSlotIdToNameMapping: Ne,
                         targetingKeys: xe,
                         fetchBids: Pe,
                         setDisplayBids: Ce,
                         renderImp: Ae,
                         bids: we
                    }, Object.keys(oe).forEach(function(e) {
                         oe[e] = He(e, oe[e])
                    }), r ? (0, Qe.enableDebugConsole)(!0, e) : t && (0, Qe.enableDebugConsole)(!1, e), Object.keys(oe).forEach(function(e) {
                         oe[e] = Ge(oe[e], e)
                    }), !0 === (0, Qe.getDebugValue)("exposeApi") && (oe._api = {
                         _getBidSetInfo: pe,
                         _applyTargetingToGPTSlot: P,
                         dispatch: qe.store.dispatch,
                         _clearTargetingFromGPTSlot: v,
                         _clearbidSetOnSlot: E,
                         _doFbSync: C,
                         _getCurrentSlotBids: D,
                         _creativeURL: N,
                         getSlotFetchCounts: ae,
                         buildBidUrl: nt.buildBidUrl
                    }), oe),
                    function() {
                         try {
                              tt.IS_RENDER_BIDDING_PAGELOAD && (0, tt.setRenderBiddingHosts)(), qe.store.dispatch({
                                   type: "SHOULD_CF_ROUTE",
                                   value: (0, Ke.shouldSample)(qe.store.getState().cfg.CF_ROUTING_RATE)
                              }), qe.store.getState().experiments.shouldCFRoute && !tt.IS_RENDER_BIDDING_PAGELOAD && qe.store.dispatch({
                                   type: "SET_HOST",
                                   hostName: "DEFAULT_AAX_BID_HOST",
                                   hostValue: "c.amazon-adsystem.com"
                              }), qe.store.dispatch({
                                   type: "SHOULD_SAMPLE_LATENCY",
                                   value: (0, Ke.shouldSample)(qe.store.getState().cfg.LATENCY_SAMPLING_RATE)
                              }), qe.store.dispatch({
                                   type: "SHOULD_SAMPLE_SLOT_RENDER",
                                   value: (0, Ke.shouldSample)(qe.store.getState().cfg.SLOT_RENDER_SAMPLING_RATE)
                              });
                              var e = qe.store.getState();
                              (e.experiments.shouldSampleLatency || e.displayAdServer.shouldSampleRender) && ie(), e.displayAdServer.shouldSampleRender && ce(), e.experiments.shouldSampleLatency && (re(), ue())
                         } catch (e) {
                              (0, $e.reportError)(e, "__error-sampleLatency__")
                         }
                         try {
                              S()
                         } catch (e) {
                              (0, $e.reportError)(e, "__error-doLast__")
                         }
                         if (!ve()) try {
                              var t = {};
                              t.url = qe.store.getState().cfg.CSM_RTB_COMMUNICATOR_JS;
                              var r = function(e) {
                                   e && "object" !== (void 0 === e ? "undefined" : Me(e)) || (e = "Request Timeout or Error"), (0, $e.reportError)({
                                        message: "csm-rtb-comm-js loading failed",
                                        name: e
                                   }, "__csm-rtb-comm-js__")
                              };
                              t.onload = function(e) {
                                   e.readyState === XMLHttpRequest.DONE && 200 === e.status ? eval(e.responseText) : r(JSON.stringify({
                                        status: e.statusText,
                                        response: e.responseXML
                                   }))
                              }, t.onerror = r, t.ontimeout = r, (0, Ze.xhrGet)(t)
                         } catch (e) {
                              (0, $e.reportError)(e, "__load-csm-rtb-comm-js__")
                         }(0, Qe.pixelDebugModes)()
                    }()
          }())
     } catch (e) {
          (0, $e.reportError)(e, "__error-global__")
     }
}, function(e, t, r) {
     "use strict";
     Object.defineProperty(t, "__esModule", {
          value: !0
     }), t.isSafeFrame = function(e) {
          return !(!(0, o.safeObjectHasProp)(e, "$sf") || !(0, o.safeObjectHasProp)(e.$sf, "ext"))
     }, t.expandSf = function(e, t) {
          try {
               var r = t.innerWidth,
                    o = t.innerHeight,
                    i = parseInt(e[0], 10),
                    a = parseInt(e[1], 10),
                    s = i - r,
                    c = a - o,
                    d = t.sfAPI || t.$sf.ext;
               d && (r === i && o === a || (d.register(i, a), d.expand({
                    r: s,
                    b: c,
                    push: !0
               })))
          } catch (e) {
               (0, n.reportError)(e, "__error-expandSF__")
          }
     }, t.is1x1Creative = function(e) {
          return 1 === e.innerWidth && 1 === e.innerHeight
     };
     var n = r(2),
          o = r(0)
}, function(e, t, r) {
     "use strict";
     Object.defineProperty(t, "__esModule", {
          value: !0
     }), t.isApstagLibrary = function(e) {
          return void 0 !== e && !!(0, o.isObject)(e) && (0, o.safeObjectHasProp)(e, "debug")
     }, t.hasApstagJsLoaded = function(e) {
          return !!(0, o.safeObjectHasProp)(e, n.APSTAG_LOADED_VARIABLE) && !0 === e[n.APSTAG_LOADED_VARIABLE]
     };
     var n = r(1),
          o = r(0)
}, function(e, t, r) {
     "use strict";
     Object.defineProperty(t, "__esModule", {
          value: !0
     }), t.displayAdServerAppNexus = void 0;
     var n = r(0),
          o = {
               isSupported: !0,
               needNewBidObject: !1,
               cmdQueuePush: function(e) {
                    window.apntag.anq.push(e)
               },
               setTargeting: function(e, t, r) {
                    void 0 === r ? window.apntag.requests.keywords[e] = t : r.keywords[e] = t
               },
               getTargeting: function(e, t) {
                    var r;
                    return void 0 === (r = void 0 === t ? ((0, n.safeObjectHasProp)(window.apntag.requests, "keywords") || (window.apntag.requests.keywords = {}), window.apntag.requests.keywords[e]) : ((0, n.safeObjectHasProp)(t, "keywords") || (t.keywords = {}), t.keywords[e])) ? [] : [r]
               },
               clearTargeting: function(e, t) {
                    void 0 === t ? delete window.apntag.requests.keywords[e] : delete t.keywords[e]
               },
               slotRenderEndedEvent: function(e) {
                    window.apntag.onEvent("adLoaded", e)
               },
               hasAdServerObjectLoaded: function() {
                    return void 0 !== window.apntag && (0, n.safeObjectHasProp)(window.apntag, "loaded") && !0 === window.apntag.loaded
               },
               isCommandQueueDefined: function() {
                    return void 0 !== window.apntag && void 0 !== window.apntag.anq
               },
               getSlotElementId: function(e) {
                    return e.targetId
               },
               getSlots: function() {
                    return Object.keys(window.apntag.requests.tags).map(function(e) {
                         return window.apntag.requests.tags[e]
                    })
               },
               appendTargeting: function() {}
          };
     t.displayAdServerAppNexus = o
}, function(e, t, r) {
     "use strict";
     Object.defineProperty(t, "__esModule", {
          value: !0
     }), t.displayAdServerDefault = {
          isSupported: !1,
          needNewBidObject: !1,
          cmdQueuePush: function() {},
          setToBeginningOfCmdQueue: function() {},
          setTargeting: function() {},
          getTargeting: function() {
               return []
          },
          clearTargeting: function() {},
          slotRenderEndedEvent: function() {},
          hasAdServerObjectLoaded: function() {},
          isCommandQueueDefined: function() {},
          getSlotElementId: function() {},
          getSlots: function() {
               return []
          },
          appendTargeting: function() {}
     }
}, function(e, t, r) {
     "use strict";
     Object.defineProperty(t, "__esModule", {
          value: !0
     }), t.displayAdServerSAS = void 0;
     var n = r(0),
          o = {
               isSupported: !0,
               needNewBidObject: !0,
               cmdQueuePush: function(e) {
                    window.sas.cmd.push(e)
               },
               setTargeting: function() {},
               getTargeting: function() {
                    return []
               },
               clearTargeting: function() {},
               slotRenderEndedEvent: function() {},
               hasAdServerObjectLoaded: function() {
                    return (0, n.safeObjectHasProp)(window, "sas") && (0, n.safeObjectHasProp)(window.sas, "__smartLoaded") && !0 === window.sas.__smartLoaded
               },
               isCommandQueueDefined: function() {
                    return !!(0, n.safeObjectHasProp)(window, "sas") && (0, n.safeObjectHasProp)(window.sas, "cmd")
               },
               getSlotElementId: function() {},
               getSlots: function() {
                    return []
               },
               appendTargeting: function(e) {
                    e.forEach(function(e) {
                         (0, n.safeObjectHasProp)(e, "slotID") && -1 < e.slotID.indexOf("_") && (e.sasTargeting = e.helpers.targetingKeys.reduce(function(t, r) {
                              return 0 < t.length && (t += ";"), t + r + "_" + e.slotID.split("_")[1] + "=" + e.targeting[r]
                         }, ""))
                    })
               }
          };
     t.displayAdServerSAS = o
}, function(e, t, r) {
     "use strict";
     Object.defineProperty(t, "__esModule", {
          value: !0
     });
     var n = Object.assign || function(e) {
          for (var t = 1; t < arguments.length; t++) {
               var r = arguments[t];
               for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
     };
     t.isBidEligible = S, t.buildBidUrl = function(e, t) {
          var r = o.store.getState(),
               g = {},
               _ = (0, i.getDebugValue)("host", r.hosts.DEFAULT_AAX_BID_HOST),
               m = r.cfg.DTB_PATH,
               S = {
                    src: r.config.pubID,
                    u: (0, f.getCurrentUrl)(window),
                    pr: (0, f.getReferrerUrl)(window),
                    pid: (0, l.getPageLoadID)(),
                    cb: e.bidReqID,
                    ws: (0, s.getWindowDimensions)(window),
                    v: a.LIBRARY_VERSION,
                    t: t,
                    slots: function(e) {
                         return (0, c.objToUrlParam)(e.map(function(e) {
                              var t = {};
                              return (0, s.safeObjectHasProp)(e, "mediaType") && "video" === e.mediaType ? (t.id = e.slotID, t.mt = a.MEDIA_TYPES_MAGIC_STRING_FOR_AAX.video) : (0, s.safeObjectHasProp)(e, "sizes") && (t.sd = e.slotID, t.s = e.sizes.filter(s.isArray).map(function(e) {
                                   return e.join("x")
                              }), (0, s.safeObjectHasProp)(e, "slotName") && e.slotName !== e.slotID && (1 < e.slotName.length && (o.store.dispatch({
                                   type: "ADD_SLOT_ID",
                                   slotID: e.slotID
                              }), t.sd = "" + o.store.getState().slotIdMap.indexOf(e.slotID)), t.sn = e.slotName)), (0, s.safeObjectHasProp)(e, "slotParams") && (0, d.isObject)(e.slotParams) && (t.kv = {}, Object.keys(e.slotParams).forEach(function(r) {
                                   ! function e(t) {
                                        return (0, s.isArray)(t) ? t.reduce(function(t, r) {
                                             return t && e(r)
                                        }, !0) : "string" == typeof t && 0 < t.length
                                   }(e.slotParams[r]) || (t.kv[r] = e.slotParams[r])
                              })), 0 === Object.keys(t).length ? ((0, u.reportError)({
                                   name: "Slot Error",
                                   message: "There was an error with the configuration for this slot: " + JSON.stringify(e)
                              }, "InvalidSlotError", !0), n({}, e, {
                                   id: "error"
                              })) : t
                         }).filter(function(e) {
                              return "error" !== e.id
                         }))
                    }(e.slots),
                    pj: function(e, t) {
                         var r = e.config.params,
                              o = t.params;
                         r = (0, d.isObject)(r) ? r : {}, o = (0, d.isObject)(o) ? o : {};
                         var i = n({}, r, o);
                         return 0 === Object.keys(i).length ? null : (0, c.objToUrlParam)(i)
                    }(r, e),
                    cfgv: (0, f.getCfgVersion)(),
                    bb: (0, f.getBlockedBidders)(e)
               };
          if (o.store.dispatch({
                    type: "RECORD_AAX_REQUEST",
                    data: {
                         bidConfig: e,
                         timeout: t,
                         bidReqID: e.bidReqID,
                         ws: S.ws,
                         url: S.u,
                         rqTs: Date.now()
                    }
               }), r.experiments.chunkRequests) {
               var b = e.bidReqID.split("-");
               o.store.dispatch({
                    type: "RECORD_NETWORK_EXCHANGE",
                    fid: b[0],
                    networkID: b[1],
                    timestamp: Date.now(),
                    exchangeType: "request"
               })
          }
          r.config.isSelfServePub && (S.pubid = S.src, S.src = 600);
          var y = (0, f.getApsFirstPartyCookies)();
          y.fb && (g[917] = y.fb, S[a.FIRST_PARTY_COOKIE_KEYS.aps_ext_917.urlParam] = (0, c.objToUrlParam)(g)), l.IS_RENDER_BIDDING_PAGELOAD && (0, l.isFirstAAXRequest)(r) && (S = n({}, S, a.IS_GET_BIDS_URL_PARAM));
          var h = (0, i.getDebugValue)("bidParams");
          if ((0, d.isObject)(h) && (S = n({}, S, h)), (0, d.isObject)(r.gdpr)) {
               S.gdpre = encodeURIComponent(r.gdpr.enabled), S.gdprc = encodeURIComponent(r.gdpr.consent);
               var v = JSON.parse(r.gdpr.log);
               if ((0, s.hasLocalStorage)()) {
                    var E = window.localStorage.getItem(p.cmpResponseKey);
                    try {
                         E = JSON.parse(E)
                    } catch (e) {
                         E = null
                    }
                    window.localStorage.removeItem(p.cmpResponseKey), null !== E && (v.rtimes = E);
                    var O = window.localStorage.getItem(p.cmpLocalStorageChanged);
                    null !== O && (window.localStorage.removeItem(p.cmpLocalStorageChanged), v.cc = O)
               }
               S.gdprl = (0, c.objToUrlParam)(v)
          }
          var D = Object.keys(S).filter(function(e) {
               return (0, s.safeObjectHasProp)(S, e) && "undefined" !== S[e] && "" !== S[e] && null !== S[e]
          }).map(function(e) {
               return e + "=" + S[e]
          }).join("&");
          y.cookiesParams && (D += y.cookiesParams);
          var A = "" + a.PROTOCOL + _ + m + "/bid?" + D;
          return o.store.dispatch({
               type: "RECORD_AAX_REQ_PROP",
               bidReqID: e.bidReqID,
               key: "urlLength",
               value: A.length
          }), A
     }, t.isNewBidObjectRequired = b, t.createBidQsParams = function(e, t) {
          var r = e.targeting.map(function(t) {
               return "&" + t + "=" + e[t]
          }).join("");
          return !0 === t && (r = encodeURIComponent(r)), r
     }, t.createPublicStateTrackingBidObject = y, t.addStateTrackingBidsToRealBids = function(e, t, r) {
          var n, o = e.map(_.getSlotID),
               i = t.slots.filter(_.isDisplaySlot).map(_.getSlotID).filter(function(e) {
                    return !(0, s.inArray)(o, e)
               });
          return n = r ? a.SLOT_STATES.bidInFlight : a.SLOT_STATES.noBid, e.concat(i.map(function(e) {
               return y(e, n)
          }))
     }, t.mapSlotIDValues = function(e) {
          (0, s.safeObjectHasProp)(e, "slots") && e.slots.forEach(function(e) {
               e.slotID = o.store.getState().slotIdMap[e.slotID] || e.slotID
          })
     }, t.getNewSlotBidsAndExposeForRequestedSlots = function(e) {
          var t = e.map(_.getSlotID),
               r = o.store.getState();
          return Object.keys(r.slotBids).filter(function(e) {
               return (0, s.inArray)(t, e)
          }).reduce(function(e, t) {
               var n = r.slotBids[t].filter(function(e) {
                    return e.bidState === a.BID_STATES.new
               }).filter(S);
               if (0 < n.length) {
                    var i = n[n.length - 1];
                    o.store.dispatch({
                         type: "BID_STATE_CHANGE",
                         slotID: t,
                         _targetingSetID: i._targetingSetID,
                         bidState: a.BID_STATES.exposed
                    }), e[t] = i
               }
               return e
          }, {})
     };
     var o = r(3),
          i = r(4),
          a = r(1),
          s = r(0),
          c = r(7),
          d = r(29),
          u = r(2),
          l = r(14),
          f = r(5),
          p = r(8),
          g = r(15),
          _ = r(10),
          m = 24e4;

     function S(e) {
          if (-1 !== o.store.getState().displayAdServer.noBidSlotIDs.indexOf(e.slotID)) return !1;
          var t = o.store.getState().AAXReqs.filter(function(t) {
               return t.bidReqID === e.bidReqID
          })[0];
          return !((0, s.safeObjectHasProp)(t, "rqTs") && Date.now() - t.rqTs > m || (0, s.safeObjectHasProp)(t, "url") && !(0, s.areTwoUrlsTheSame)(t.url, (0, f.getCurrentUrl)(window)) || e.bidState === a.BID_STATES.rendered)
     }

     function b(e, t) {
          return (0, s.safeObjectHasProp)(e, "config") && (0, s.safeObjectHasProp)(e.config, "deals") && !0 === e.config.deals || !0 === t.needNewBidObject
     }

     function y(e, t) {
          var r = "0x0";
          return b(o.store.getState(), g.displayAdServer) ? {
               slotID: e,
               size: r,
               mediaType: "banner",
               targeting: {
                    amznbid: t,
                    amzniid: "",
                    amznp: t,
                    amznsz: r
               },
               helpers: {
                    targetingKeys: ["amznbid", "amzniid", "amznp", "amznsz"]
               }
          } : {
               slotID: e,
               amzniid: "",
               amznbid: t,
               amznp: t,
               amznsz: r,
               size: r
          }
     }
}, function(e, t, r) {
     "use strict";
     (function(e) {
          var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
               } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
               },
               o = Object.getOwnPropertyDescriptors || function(e) {
                    for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) r[t[n]] = Object.getOwnPropertyDescriptor(e, t[n]);
                    return r
               },
               i = /%[sdj%]/g;
          t.format = function(e) {
               if (!b(e)) {
                    for (var t = [], r = 0; r < arguments.length; r++) t.push(c(arguments[r]));
                    return t.join(" ")
               }
               r = 1;
               for (var n = arguments, o = n.length, a = String(e).replace(i, function(e) {
                         if ("%%" === e) return "%";
                         if (o <= r) return e;
                         switch (e) {
                              case "%s":
                                   return String(n[r++]);
                              case "%d":
                                   return Number(n[r++]);
                              case "%j":
                                   try {
                                        return JSON.stringify(n[r++])
                                   } catch (e) {
                                        return "[Circular]"
                                   }
                              default:
                                   return e
                         }
                    }), s = n[r]; r < o; s = n[++r]) m(s) || !v(s) ? a += " " + s : a += " " + c(s);
               return a
          }, t.deprecate = function(r, n) {
               if (void 0 !== e && !0 === e.noDeprecation) return r;
               if (void 0 === e) return function() {
                    return t.deprecate(r, n).apply(this, arguments)
               };
               var o = !1;
               return function() {
                    if (!o) {
                         if (e.throwDeprecation) throw new Error(n);
                         e.traceDeprecation, o = !0
                    }
                    return r.apply(this, arguments)
               }
          };
          var a, s = {};

          function c(e, r) {
               var n = {
                    seen: [],
                    stylize: u
               };
               return 3 <= arguments.length && (n.depth = arguments[2]), 4 <= arguments.length && (n.colors = arguments[3]), _(r) ? n.showHidden = r : r && t._extend(n, r), y(n.showHidden) && (n.showHidden = !1), y(n.depth) && (n.depth = 2), y(n.colors) && (n.colors = !1), y(n.customInspect) && (n.customInspect = !0), n.colors && (n.stylize = d), l(n, e, n.depth)
          }

          function d(e, t) {
               var r = c.styles[t];
               return r ? "[" + c.colors[r][0] + "m" + e + "[" + c.colors[r][1] + "m" : e
          }

          function u(e, t) {
               return e
          }

          function l(e, r, n) {
               if (e.customInspect && r && D(r.inspect) && r.inspect !== t.inspect && (!r.constructor || r.constructor.prototype !== r)) {
                    var o = r.inspect(n, e);
                    return b(o) || (o = l(e, o, n)), o
               }
               var i = function(e, t) {
                    if (y(t)) return e.stylize("undefined", "undefined");
                    if (b(t)) {
                         var r = "'" + JSON.stringify(t).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
                         return e.stylize(r, "string")
                    }
                    return S(t) ? e.stylize("" + t, "number") : _(t) ? e.stylize("" + t, "boolean") : m(t) ? e.stylize("null", "null") : void 0
               }(e, r);
               if (i) return i;
               var a = Object.keys(r),
                    s = function(e) {
                         var t = {};
                         return a.forEach(function(e, r) {
                              t[e] = !0
                         }), t
                    }();
               if (e.showHidden && (a = Object.getOwnPropertyNames(r)), O(r) && (0 <= a.indexOf("message") || 0 <= a.indexOf("description"))) return f(r);
               if (0 === a.length) {
                    if (D(r)) {
                         var c = r.name ? ": " + r.name : "";
                         return e.stylize("[Function" + c + "]", "special")
                    }
                    if (h(r)) return e.stylize(RegExp.prototype.toString.call(r), "regexp");
                    if (E(r)) return e.stylize(Date.prototype.toString.call(r), "date");
                    if (O(r)) return f(r)
               }
               var d, u = "",
                    v = !1,
                    A = ["{", "}"];
               return g(r) && (v = !0, A = ["[", "]"]), D(r) && (u = " [Function" + (r.name ? ": " + r.name : "") + "]"), h(r) && (u = " " + RegExp.prototype.toString.call(r)), E(r) && (u = " " + Date.prototype.toUTCString.call(r)), O(r) && (u = " " + f(r)), 0 !== a.length || v && 0 != r.length ? n < 0 ? h(r) ? e.stylize(RegExp.prototype.toString.call(r), "regexp") : e.stylize("[Object]", "special") : (e.seen.push(r), d = v ? function(e, t, r, n, o) {
                    for (var i = [], a = 0, s = t.length; a < s; ++a) I(t, String(a)) ? i.push(p(e, t, r, n, String(a), !0)) : i.push("");
                    return o.forEach(function(o) {
                         o.match(/^\d+$/) || i.push(p(e, t, r, n, o, !0))
                    }), i
               }(e, r, n, s, a) : a.map(function(t) {
                    return p(e, r, n, s, t, v)
               }), e.seen.pop(), function(e, t, r) {
                    return 60 < e.reduce(function(e, t) {
                         return t.indexOf("\n"), e + t.replace(/\u001b\[\d\d?m/g, "").length + 1
                    }, 0) ? r[0] + ("" === t ? "" : t + "\n ") + " " + e.join(",\n  ") + " " + r[1] : r[0] + t + " " + e.join(", ") + " " + r[1]
               }(d, u, A)) : A[0] + u + A[1]
          }

          function f(e) {
               return "[" + Error.prototype.toString.call(e) + "]"
          }

          function p(e, t, r, n, o, i) {
               var a, s, c;
               if ((c = Object.getOwnPropertyDescriptor(t, o) || {
                         value: t[o]
                    }).get ? s = c.set ? e.stylize("[Getter/Setter]", "special") : e.stylize("[Getter]", "special") : c.set && (s = e.stylize("[Setter]", "special")), I(n, o) || (a = "[" + o + "]"), s || (e.seen.indexOf(c.value) < 0 ? -1 < (s = m(r) ? l(e, c.value, null) : l(e, c.value, r - 1)).indexOf("\n") && (s = i ? s.split("\n").map(function(e) {
                         return "  " + e
                    }).join("\n").substr(2) : "\n" + s.split("\n").map(function(e) {
                         return "   " + e
                    }).join("\n")) : s = e.stylize("[Circular]", "special")), y(a)) {
                    if (i && o.match(/^\d+$/)) return s;
                    a = (a = JSON.stringify("" + o)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (a = a.substr(1, a.length - 2), e.stylize(a, "name")) : (a = a.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), e.stylize(a, "string"))
               }
               return a + ": " + s
          }

          function g(e) {
               return Array.isArray(e)
          }

          function _(e) {
               return "boolean" == typeof e
          }

          function m(e) {
               return null === e
          }

          function S(e) {
               return "number" == typeof e
          }

          function b(e) {
               return "string" == typeof e
          }

          function y(e) {
               return void 0 === e
          }

          function h(e) {
               return v(e) && "[object RegExp]" === A(e)
          }

          function v(e) {
               return "object" === (void 0 === e ? "undefined" : n(e)) && null !== e
          }

          function E(e) {
               return v(e) && "[object Date]" === A(e)
          }

          function O(e) {
               return v(e) && ("[object Error]" === A(e) || e instanceof Error)
          }

          function D(e) {
               return "function" == typeof e
          }

          function A(e) {
               return Object.prototype.toString.call(e)
          }

          function I(e, t) {
               return Object.prototype.hasOwnProperty.call(e, t)
          }
          t.debuglog = function(r) {
               return y(a) && (a = e.env.NODE_DEBUG || ""), r = r.toUpperCase(), s[r] || (new RegExp("\\b" + r + "\\b", "i").test(a) ? (e.pid, s[r] = function() {
                    t.format.apply(t, arguments)
               }) : s[r] = function() {}), s[r]
          }, (t.inspect = c).colors = {
               bold: [1, 22],
               italic: [3, 23],
               underline: [4, 24],
               inverse: [7, 27],
               white: [37, 39],
               grey: [90, 39],
               black: [30, 39],
               blue: [34, 39],
               cyan: [36, 39],
               green: [32, 39],
               magenta: [35, 39],
               red: [31, 39],
               yellow: [33, 39]
          }, c.styles = {
               special: "cyan",
               number: "yellow",
               boolean: "yellow",
               undefined: "grey",
               null: "bold",
               string: "green",
               date: "magenta",
               regexp: "red"
          }, t.isArray = g, t.isBoolean = _, t.isNull = m, t.isNullOrUndefined = function(e) {
               return null == e
          }, t.isNumber = S, t.isString = b, t.isSymbol = function(e) {
               return "symbol" === (void 0 === e ? "undefined" : n(e))
          }, t.isUndefined = y, t.isRegExp = h, t.isObject = v, t.isDate = E, t.isError = O, t.isFunction = D, t.isPrimitive = function(e) {
               return null === e || "boolean" == typeof e || "number" == typeof e || "string" == typeof e || "symbol" === (void 0 === e ? "undefined" : n(e)) || void 0 === e
          }, t.isBuffer = r(31), t.log = function() {}, t.inherits = r(32), t._extend = function(e, t) {
               if (!t || !v(t)) return e;
               for (var r = Object.keys(t), n = r.length; n--;) e[r[n]] = t[r[n]];
               return e
          };
          var T = "undefined" != typeof Symbol ? Symbol("util.promisify.custom") : void 0;

          function w(e, t) {
               if (!e) {
                    var r = new Error("Promise was rejected with a falsy value");
                    r.reason = e, e = r
               }
               return t(e)
          }
          t.promisify = function(e) {
               if ("function" != typeof e) throw new TypeError('The "original" argument must be of type Function');
               if (T && e[T]) {
                    var t;
                    if ("function" != typeof(t = e[T])) throw new TypeError('The "util.promisify.custom" argument must be of type Function');
                    return Object.defineProperty(t, T, {
                         value: t,
                         enumerable: !1,
                         writable: !1,
                         configurable: !0
                    }), t
               }

               function t() {
                    for (var t, r, n = new Promise(function(e, n) {
                              t = e, r = n
                         }), o = [], i = 0; i < arguments.length; i++) o.push(arguments[i]);
                    o.push(function(e, n) {
                         e ? r(e) : t(n)
                    });
                    try {
                         e.apply(this, o)
                    } catch (n) {
                         r(n)
                    }
                    return n
               }
               return Object.setPrototypeOf(t, Object.getPrototypeOf(e)), T && Object.defineProperty(t, T, {
                    value: t,
                    enumerable: !1,
                    writable: !1,
                    configurable: !0
               }), Object.defineProperties(t, o(e))
          }, t.promisify.custom = T, t.callbackify = function(t) {
               if ("function" != typeof t) throw new TypeError('The "original" argument must be of type Function');

               function r() {
                    for (var r = [], n = 0; n < arguments.length; n++) r.push(arguments[n]);
                    var o = r.pop();
                    if ("function" != typeof o) throw new TypeError("The last argument must be of type Function");

                    function i() {
                         return o.apply(a, arguments)
                    }
                    var a = this;
                    t.apply(this, r).then(function(t) {
                         e.nextTick(i, null, t)
                    }, function(t) {
                         e.nextTick(w, t, i)
                    })
               }
               return Object.setPrototypeOf(r, Object.getPrototypeOf(t)), Object.defineProperties(r, o(t)), r
          }
     }).call(this, r(30))
}, function(e, t, r) {
     "use strict";
     var n, o, i = e.exports = {};

     function a() {
          throw new Error("setTimeout has not been defined")
     }

     function s() {
          throw new Error("clearTimeout has not been defined")
     }

     function c(e) {
          if (n === setTimeout) return setTimeout(e, 0);
          if ((n === a || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);
          try {
               return n(e, 0)
          } catch (t) {
               try {
                    return n.call(null, e, 0)
               } catch (t) {
                    return n.call(this, e, 0)
               }
          }
     }! function() {
          try {
               n = "function" == typeof setTimeout ? setTimeout : a
          } catch (e) {
               n = a
          }
          try {
               o = "function" == typeof clearTimeout ? clearTimeout : s
          } catch (e) {
               o = s
          }
     }();
     var d, u = [],
          l = !1,
          f = -1;

     function p() {
          l && d && (l = !1, d.length ? u = d.concat(u) : f = -1, u.length && g())
     }

     function g() {
          if (!l) {
               var e = c(p);
               l = !0;
               for (var t = u.length; t;) {
                    for (d = u, u = []; ++f < t;) d && d[f].run();
                    f = -1, t = u.length
               }
               d = null, l = !1,
                    function(e) {
                         if (o === clearTimeout) return clearTimeout(e);
                         if ((o === s || !o) && clearTimeout) return o = clearTimeout, clearTimeout(e);
                         try {
                              o(e)
                         } catch (t) {
                              try {
                                   return o.call(null, e)
                              } catch (t) {
                                   return o.call(this, e)
                              }
                         }
                    }(e)
          }
     }

     function _(e, t) {
          this.fun = e, this.array = t
     }

     function m() {}
     i.nextTick = function(e) {
          var t = new Array(arguments.length - 1);
          if (1 < arguments.length)
               for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
          u.push(new _(e, t)), 1 !== u.length || l || c(g)
     }, _.prototype.run = function() {
          this.fun.apply(null, this.array)
     }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = m, i.addListener = m, i.once = m, i.off = m, i.removeListener = m, i.removeAllListeners = m, i.emit = m, i.prependListener = m, i.prependOnceListener = m, i.listeners = function(e) {
          return []
     }, i.binding = function(e) {
          throw new Error("process.binding is not supported")
     }, i.cwd = function() {
          return "/"
     }, i.chdir = function(e) {
          throw new Error("process.chdir is not supported")
     }, i.umask = function() {
          return 0
     }
}, function(e, t, r) {
     "use strict";
     var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
     } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
     };
     e.exports = function(e) {
          return e && "object" === (void 0 === e ? "undefined" : n(e)) && "function" == typeof e.copy && "function" == typeof e.fill && "function" == typeof e.readUInt8
     }
}, function(e, t, r) {
     "use strict";
     "function" == typeof Object.create ? e.exports = function(e, t) {
          e.super_ = t, e.prototype = Object.create(t.prototype, {
               constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
               }
          })
     } : e.exports = function(e, t) {
          function r() {}
          e.super_ = t, r.prototype = t.prototype, e.prototype = new r, e.prototype.constructor = e
     }
}]);
//# sourceMappingURL=apstag.js.map
