define(["jquery/nyt", "underscore/nyt"], function(t, e) {
     function n(t) {
          return "godzown:" + t
     }
     var r = {},
          o = "https://www.nytimes.com/",
          a = "https://int.nyt.com/";
     r.setHost = function(t) {
          o = t, a = "https://www.nytimes.com/" !== o && "http://www.nytimes.com/" !== o ? "https://int.stg.nyt.com/" : "https://int.nyt.com/"
     }, r.getHost = function() {
          return o
     };
     var i = function(e, n) {
          var r = new t.Deferred;
          return t.ajax({
               type: "GET",
               url: o + "svc/int/godzown/" + e + "/" + n,
               dataType: "json"
          }).done(function(t, e, n) {
               r.resolve(t.contents, t)
          }).fail(function(t, e, n) {
               r.reject(t, e, n)
          }), r
     };
     r.getItem = function(e, r) {
          if (r) return i(e, r);
          var a = new t.Deferred;
          return t.ajax({
               type: "GET",
               url: o + "svc/int/godzown/u/" + e,
               dataType: "json",
               xhrFields: {
                    withCredentials: !0
               }
          }).done(function(t, e, n) {
               a.resolve(t.contents, t)
          }).fail(function(t, r, o) {
               var i, s;
               try {
                    i = JSON.parse(localStorage[n(e)]), s = {}
               } catch (c) {}
               i ? a.resolve(i, s) : a.reject(t, r, o)
          }).always(function() {}), a
     };
     var s = e.throttle(function(e, n, r) {
          return t.ajax({
               type: "POST",
               url: o + "svc/int/godzown/u/" + e,
               contentType: "application/json",
               data: n,
               dataType: "json",
               xhrFields: {
                    withCredentials: !0
               }
          }).done(function() {
               r && r.resolveWith && r.resolveWith(this, arguments)
          }).fail(function() {
               r && r.rejectWith && r.rejectWith(this, arguments)
          })
     }, 2e3);
     return r.setItem = function(e, r) {
          r || (r = {});
          var o = JSON.stringify(r);
          localStorage && (localStorage[n(e)] = o);
          var a = new t.Deferred;
          return s(e, o, a), a
     }, r.readAggregate = function(e, n, r) {
          return r && r.match(/\d\d\d\d-\d\d-\d\d-\d\d-\d\d/) ? t.ajax({
               type: "GET",
               url: a + "data/godzown/" + e + "/" + n + "/" + r + ".js",
               dataType: "json"
          }) : t.ajax({
               type: "GET",
               url: a + "data/godzown/" + e + "/" + n + ".js",
               dataType: "json"
          })
     }, r
});
