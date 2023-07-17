/**
 * @Author       : Xiao Xiang Lun
 * @Date         : 2023-07-17 14:04:13
 * @LastEditors  : snowlove xiaoxl@botech.com.cn
 * @LastEditTime : 2023-07-17 14:04:19
 * @FilePath     : /js/ext.js
 * @Environment  : mac node v16.3.0
 * @Description  : 
 * @关注作者请访问 https://snowlove.synology.me:5 
 * @备用地址:https://nas.snowlove.top:5
 */
function waitForKeyElements(t, e, n, i) {
  (o = void 0 === i ? $(t) : $(i).contents().find(t)) && o.length > 0
    ? ((r = !0),
      o.each(function () {
        var t = $(this);
        !t.data("alreadyFound") &&
          (e(t) ? (r = !1) : t.data("alreadyFound", !0));
      }))
    : (r = !1);
  var o,
    r,
    s = waitForKeyElements.controlObj || {},
    a = t.replace(/[^\w]/g, "_"),
    l = s[a];
  r && n && l
    ? (clearInterval(l), delete s[a])
    : l ||
      ((l = setInterval(function () {
        waitForKeyElements(t, e, n, i);
      }, 300)),
      (s[a] = l)),
    (waitForKeyElements.controlObj = s);
}
!(function (t, e) {
  function n(t) {
    return M.isWindow(t)
      ? t
      : 9 === t.nodeType && (t.defaultView || t.parentWindow);
  }
  function i(t) {
    if (!ec[t]) {
      var e = D.body,
        n = M("<" + t + ">").appendTo(e),
        i = n.css("display");
      n.remove(),
        ("none" === i || "" === i) &&
          (es ||
            ((es = D.createElement("iframe")).frameBorder =
              es.width =
              es.height =
                0),
          e.appendChild(es),
          (ea && es.createElement) ||
            ((ea = (es.contentWindow || es.contentDocument).document).write(
              (M.support.boxModel ? "<!doctype html>" : "") + "<html><body>"
            ),
            ea.close()),
          (n = ea.createElement(t)),
          ea.body.appendChild(n),
          (i = M.css(n, "display")),
          e.removeChild(es)),
        (ec[t] = i);
    }
    return ec[t];
  }
  function o(t, e) {
    var n = {};
    return (
      M.each(ef.concat.apply([], ef.slice(0, e)), function () {
        n[this] = t;
      }),
      n
    );
  }
  function r() {
    eu = e;
  }
  function s() {
    return setTimeout(r, 0), (eu = M.now());
  }
  function a() {
    try {
      return new t.ActiveXObject("Microsoft.XMLHTTP");
    } catch (e) {}
  }
  function l() {
    try {
      return new t.XMLHttpRequest();
    } catch (e) {}
  }
  function u(t, n) {
    t.dataFilter && (n = t.dataFilter(n, t.dataType));
    var i,
      o,
      r,
      s,
      a,
      l,
      u,
      c,
      d = t.dataTypes,
      h = {},
      f = d.length,
      p = d[0];
    for (i = 1; i < f; i++) {
      if (1 === i)
        for (o in t.converters)
          "string" == typeof o && (h[o.toLowerCase()] = t.converters[o]);
      if (((s = p), "*" === (p = d[i]))) p = s;
      else if ("*" !== s && s !== p) {
        if (!(l = h[(a = s + " " + p)] || h["* " + p])) {
          for (u in ((c = e), h))
            if (
              ((r = u.split(" "))[0] === s || "*" === r[0]) &&
              (c = h[r[1] + " " + p])
            ) {
              !0 === (u = h[u]) ? (l = c) : !0 === c && (l = u);
              break;
            }
        }
        l || c || M.error("No conversion from " + a.replace(" ", " to ")),
          !0 !== l && (n = l ? l(n) : c(u(n)));
      }
    }
    return n;
  }
  function c(t, n, i) {
    var o,
      r,
      s,
      a,
      l = t.contents,
      u = t.dataTypes,
      c = t.responseFields;
    for (r in c) r in i && (n[c[r]] = i[r]);
    for (; "*" === u[0]; )
      u.shift(),
        o === e && (o = t.mimeType || n.getResponseHeader("content-type"));
    if (o) {
      for (r in l)
        if (l[r] && l[r].test(o)) {
          u.unshift(r);
          break;
        }
    }
    if (u[0] in i) s = u[0];
    else {
      for (r in i) {
        if (!u[0] || t.converters[r + " " + u[0]]) {
          s = r;
          break;
        }
        a || (a = r);
      }
      s = s || a;
    }
    if (s) return s !== u[0] && u.unshift(s), i[s];
  }
  function d(t, e, n, i) {
    if (M.isArray(e))
      M.each(e, function (e, o) {
        n || t5.test(t)
          ? i(t, o)
          : d(t + "[" + ("object" == typeof o ? e : "") + "]", o, n, i);
      });
    else if (n || "object" !== M.type(e)) i(t, e);
    else for (var o in e) d(t + "[" + o + "]", e[o], n, i);
  }
  function h(t, n) {
    var i,
      o,
      r = M.ajaxSettings.flatOptions || {};
    for (i in n) n[i] !== e && ((r[i] ? t : o || (o = {}))[i] = n[i]);
    o && M.extend(!0, t, o);
  }
  function f(t, n, i, o, r, s) {
    (r = r || n.dataTypes[0]), ((s = s || {})[r] = !0);
    for (
      var a, l = t[r], u = 0, c = l ? l.length : 0, d = t === tK;
      u < c && (d || !a);
      u++
    )
      "string" == typeof (a = l[u](n, i, o)) &&
        (!d || s[a]
          ? (a = e)
          : (n.dataTypes.unshift(a), (a = f(t, n, i, o, a, s))));
    return (!d && a) || s["*"] || (a = f(t, n, i, o, "*", s)), a;
  }
  function p(t) {
    return function (e, n) {
      if (("string" != typeof e && ((n = e), (e = "*")), M.isFunction(n)))
        for (
          var i, o, r, s = e.toLowerCase().split(tX), a = 0, l = s.length;
          a < l;
          a++
        )
          (i = s[a]),
            (r = /^\+/.test(i)) && (i = i.substr(1) || "*"),
            (o = t[i] = t[i] || [])[r ? "unshift" : "push"](n);
    };
  }
  function m(t, e, n) {
    var i = "width" === e ? t.offsetWidth : t.offsetHeight,
      o = "width" === e ? 1 : 0,
      r = 4;
    if (i > 0) {
      if ("border" !== n)
        for (; o < r; o += 2)
          n || (i -= parseFloat(M.css(t, "padding" + tD[o])) || 0),
            "margin" === n
              ? (i += parseFloat(M.css(t, n + tD[o])) || 0)
              : (i -= parseFloat(M.css(t, "border" + tD[o] + "Width")) || 0);
      return i + "px";
    }
    if ((((i = tT(t, e)) < 0 || null == i) && (i = t.style[e]), t2.test(i)))
      return i;
    if (((i = parseFloat(i) || 0), n))
      for (; o < r; o += 2)
        (i += parseFloat(M.css(t, "padding" + tD[o])) || 0),
          "padding" !== n &&
            (i += parseFloat(M.css(t, "border" + tD[o] + "Width")) || 0),
          "margin" === n && (i += parseFloat(M.css(t, n + tD[o])) || 0);
    return i + "px";
  }
  function v(t) {
    var e = D.createElement("div");
    return tE.appendChild(e), (e.innerHTML = t.outerHTML), e.firstChild;
  }
  function g(t) {
    var e = (t.nodeName || "").toLowerCase();
    "input" === e
      ? _(t)
      : "script" !== e &&
        void 0 !== t.getElementsByTagName &&
        M.grep(t.getElementsByTagName("input"), _);
  }
  function _(t) {
    ("checkbox" === t.type || "radio" === t.type) &&
      (t.defaultChecked = t.checked);
  }
  function y(t) {
    return void 0 !== t.getElementsByTagName
      ? t.getElementsByTagName("*")
      : void 0 !== t.querySelectorAll
      ? t.querySelectorAll("*")
      : [];
  }
  function b(t, e) {
    var n;
    1 === e.nodeType &&
      (e.clearAttributes && e.clearAttributes(),
      e.mergeAttributes && e.mergeAttributes(t),
      "object" === (n = e.nodeName.toLowerCase())
        ? (e.outerHTML = t.outerHTML)
        : "input" !== n || ("checkbox" !== t.type && "radio" !== t.type)
        ? "option" === n
          ? (e.selected = t.defaultSelected)
          : "input" === n || "textarea" === n
          ? (e.defaultValue = t.defaultValue)
          : "script" === n && e.text !== t.text && (e.text = t.text)
        : (t.checked && (e.defaultChecked = e.checked = t.checked),
          e.value !== t.value && (e.value = t.value)),
      e.removeAttribute(M.expando),
      e.removeAttribute("_submit_attached"),
      e.removeAttribute("_change_attached"));
  }
  function x(t, e) {
    if (1 === e.nodeType && M.hasData(t)) {
      var n,
        i,
        o,
        r = M._data(t),
        s = M._data(e, r),
        a = r.events;
      if (a)
        for (n in (delete s.handle, (s.events = {}), a))
          for (i = 0, o = a[n].length; i < o; i++) M.event.add(e, n, a[n][i]);
      s.data && (s.data = M.extend({}, s.data));
    }
  }
  function w(t, e) {
    return M.nodeName(t, "table")
      ? t.getElementsByTagName("tbody")[0] ||
          t.appendChild(t.ownerDocument.createElement("tbody"))
      : t;
  }
  function C(t) {
    var e = tm.split("|"),
      n = t.createDocumentFragment();
    if (n.createElement) for (; e.length; ) n.createElement(e.pop());
    return n;
  }
  function k(t, e, n) {
    if (((e = e || 0), M.isFunction(e)))
      return M.grep(t, function (t, i) {
        return !!e.call(t, i, t) === n;
      });
    if (e.nodeType)
      return M.grep(t, function (t, i) {
        return (t === e) === n;
      });
    if ("string" == typeof e) {
      var i = M.grep(t, function (t) {
        return 1 === t.nodeType;
      });
      if (td.test(e)) return M.filter(e, i, !n);
      e = M.filter(e, i);
    }
    return M.grep(t, function (t, i) {
      return M.inArray(t, e) >= 0 === n;
    });
  }
  function E(t) {
    return !t || !t.parentNode || 11 === t.parentNode.nodeType;
  }
  function T() {
    return !0;
  }
  function N() {
    return !1;
  }
  function S(t, e, n) {
    var i = e + "defer",
      o = e + "queue",
      r = e + "mark",
      s = M._data(t, i);
    !s ||
      ("queue" !== n && M._data(t, o)) ||
      ("mark" !== n && M._data(t, r)) ||
      setTimeout(function () {
        M._data(t, o) || M._data(t, r) || (M.removeData(t, i, !0), s.fire());
      }, 0);
  }
  function O(t) {
    for (var e in t)
      if (!("data" === e && M.isEmptyObject(t[e])) && "toJSON" !== e) return !1;
    return !0;
  }
  function A(t, n, i) {
    if (i === e && 1 === t.nodeType) {
      var o = "data-" + n.replace(H, "-$1").toLowerCase();
      if ("string" == typeof (i = t.getAttribute(o))) {
        try {
          i =
            "true" === i ||
            ("false" !== i &&
              ("null" === i
                ? null
                : M.isNumeric(i)
                ? +i
                : R.test(i)
                ? M.parseJSON(i)
                : i));
        } catch (r) {}
        M.data(t, n, i);
      } else i = e;
    }
    return i;
  }
  function j(t) {
    var e,
      n,
      i = (F[t] = {});
    for (e = 0, n = (t = t.split(/\s+/)).length; e < n; e++) i[t[e]] = !0;
    return i;
  }
  var D = t.document,
    L = t.navigator,
    I = t.location,
    M = (function () {
      function n() {
        if (!a.isReady) {
          try {
            D.documentElement.doScroll("left");
          } catch (t) {
            setTimeout(n, 1);
            return;
          }
          a.ready();
        }
      }
      var i,
        o,
        r,
        s,
        a = function (t, e) {
          return new a.fn.init(t, e, i);
        },
        l = t.jQuery,
        u = t.$,
        c = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
        d = /\S/,
        h = /^\s+/,
        f = /\s+$/,
        p = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
        m = /^[\],:{}\s]*$/,
        v = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
        g = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        _ = /(?:^|:|,)(?:\s*\[)+/g,
        y = /(webkit)[ \/]([\w.]+)/,
        b = /(opera)(?:.*version)?[ \/]([\w.]+)/,
        x = /(msie) ([\w.]+)/,
        w = /(mozilla)(?:.*? rv:([\w.]+))?/,
        C = /-([a-z]|[0-9])/gi,
        k = /^-ms-/,
        E = function (t, e) {
          return (e + "").toUpperCase();
        },
        T = L.userAgent,
        N = Object.prototype.toString,
        S = Object.prototype.hasOwnProperty,
        O = Array.prototype.push,
        A = Array.prototype.slice,
        j = String.prototype.trim,
        I = Array.prototype.indexOf,
        M = {};
      return (
        (a.fn = a.prototype =
          {
            constructor: a,
            init: function (t, n, i) {
              var o, r, s, l;
              if (!t) return this;
              if (t.nodeType)
                return (this.context = this[0] = t), (this.length = 1), this;
              if ("body" === t && !n && D.body)
                return (
                  (this.context = D),
                  (this[0] = D.body),
                  (this.selector = t),
                  (this.length = 1),
                  this
                );
              if ("string" == typeof t) {
                if (
                  (o =
                    "<" !== t.charAt(0) ||
                    ">" !== t.charAt(t.length - 1) ||
                    t.length < 3
                      ? c.exec(t)
                      : [null, t, null]) &&
                  (o[1] || !n)
                ) {
                  if (o[1])
                    return (
                      (l = (n = n instanceof a ? n[0] : n)
                        ? n.ownerDocument || n
                        : D),
                      (s = p.exec(t))
                        ? a.isPlainObject(n)
                          ? ((t = [D.createElement(s[1])]),
                            a.fn.attr.call(t, n, !0))
                          : (t = [l.createElement(s[1])])
                        : (t = (
                            (s = a.buildFragment([o[1]], [l])).cacheable
                              ? a.clone(s.fragment)
                              : s.fragment
                          ).childNodes),
                      a.merge(this, t)
                    );
                  if ((r = D.getElementById(o[2])) && r.parentNode) {
                    if (r.id !== o[2]) return i.find(t);
                    (this.length = 1), (this[0] = r);
                  }
                  return (this.context = D), (this.selector = t), this;
                }
                return !n || n.jquery
                  ? (n || i).find(t)
                  : this.constructor(n).find(t);
              }
              return a.isFunction(t)
                ? i.ready(t)
                : (t.selector !== e &&
                    ((this.selector = t.selector), (this.context = t.context)),
                  a.makeArray(t, this));
            },
            selector: "",
            jquery: "1.7.2",
            length: 0,
            size: function () {
              return this.length;
            },
            toArray: function () {
              return A.call(this, 0);
            },
            get: function (t) {
              return null == t
                ? this.toArray()
                : t < 0
                ? this[this.length + t]
                : this[t];
            },
            pushStack: function (t, e, n) {
              var i = this.constructor();
              return (
                a.isArray(t) ? O.apply(i, t) : a.merge(i, t),
                (i.prevObject = this),
                (i.context = this.context),
                "find" === e
                  ? (i.selector =
                      this.selector + (this.selector ? " " : "") + n)
                  : e && (i.selector = this.selector + "." + e + "(" + n + ")"),
                i
              );
            },
            each: function (t, e) {
              return a.each(this, t, e);
            },
            ready: function (t) {
              return a.bindReady(), r.add(t), this;
            },
            eq: function (t) {
              return -1 == (t = +t) ? this.slice(t) : this.slice(t, t + 1);
            },
            first: function () {
              return this.eq(0);
            },
            last: function () {
              return this.eq(-1);
            },
            slice: function () {
              return this.pushStack(
                A.apply(this, arguments),
                "slice",
                A.call(arguments).join(",")
              );
            },
            map: function (t) {
              return this.pushStack(
                a.map(this, function (e, n) {
                  return t.call(e, n, e);
                })
              );
            },
            end: function () {
              return this.prevObject || this.constructor(null);
            },
            push: O,
            sort: [].sort,
            splice: [].splice,
          }),
        (a.fn.init.prototype = a.fn),
        (a.extend = a.fn.extend =
          function () {
            var t,
              n,
              i,
              o,
              r,
              s,
              l = arguments[0] || {},
              u = 1,
              c = arguments.length,
              d = !1;
            for (
              "boolean" == typeof l &&
                ((d = l), (l = arguments[1] || {}), (u = 2)),
                "object" == typeof l || a.isFunction(l) || (l = {}),
                c === u && ((l = this), --u);
              u < c;
              u++
            )
              if (null != (t = arguments[u]))
                for (n in t)
                  (i = l[n]),
                    l !== (o = t[n]) &&
                      (d && o && (a.isPlainObject(o) || (r = a.isArray(o)))
                        ? (r
                            ? ((r = !1), (s = i && a.isArray(i) ? i : []))
                            : (s = i && a.isPlainObject(i) ? i : {}),
                          (l[n] = a.extend(d, s, o)))
                        : o !== e && (l[n] = o));
            return l;
          }),
        a.extend({
          noConflict: function (e) {
            return (
              t.$ === a && (t.$ = u), e && t.jQuery === a && (t.jQuery = l), a
            );
          },
          isReady: !1,
          readyWait: 1,
          holdReady: function (t) {
            t ? a.readyWait++ : a.ready(!0);
          },
          ready: function (t) {
            if ((!0 === t && !--a.readyWait) || (!0 !== t && !a.isReady)) {
              if (!D.body) return setTimeout(a.ready, 1);
              (a.isReady = !0),
                !(!0 !== t && --a.readyWait > 0) &&
                  (r.fireWith(D, [a]),
                  a.fn.trigger && a(D).trigger("ready").off("ready"));
            }
          },
          bindReady: function () {
            if (!r) {
              if (
                ((r = a.Callbacks("once memory")), "complete" === D.readyState)
              )
                return setTimeout(a.ready, 1);
              if (D.addEventListener)
                D.addEventListener("DOMContentLoaded", s, !1),
                  t.addEventListener("load", a.ready, !1);
              else if (D.attachEvent) {
                D.attachEvent("onreadystatechange", s),
                  t.attachEvent("onload", a.ready);
                var e = !1;
                try {
                  e = null == t.frameElement;
                } catch (i) {}
                D.documentElement.doScroll && e && n();
              }
            }
          },
          isFunction: function (t) {
            return "function" === a.type(t);
          },
          isArray:
            Array.isArray ||
            function (t) {
              return "array" === a.type(t);
            },
          isWindow: function (t) {
            return null != t && t == t.window;
          },
          isNumeric: function (t) {
            return !isNaN(parseFloat(t)) && isFinite(t);
          },
          type: function (t) {
            return null == t ? String(t) : M[N.call(t)] || "object";
          },
          isPlainObject: function (t) {
            var n;
            if (!t || "object" !== a.type(t) || t.nodeType || a.isWindow(t))
              return !1;
            try {
              if (
                t.constructor &&
                !S.call(t, "constructor") &&
                !S.call(t.constructor.prototype, "isPrototypeOf")
              )
                return !1;
            } catch (i) {
              return !1;
            }
            for (n in t);
            return n === e || S.call(t, n);
          },
          isEmptyObject: function (t) {
            for (var e in t) return !1;
            return !0;
          },
          error: function (t) {
            throw Error(t);
          },
          parseJSON: function (e) {
            return "string" == typeof e && e
              ? ((e = a.trim(e)), t.JSON && t.JSON.parse)
                ? t.JSON.parse(e)
                : m.test(e.replace(v, "@").replace(g, "]").replace(_, ""))
                ? Function("return " + e)()
                : void a.error("Invalid JSON: " + e)
              : null;
          },
          parseXML: function (n) {
            var i, o;
            if ("string" != typeof n || !n) return null;
            try {
              t.DOMParser
                ? (i = (o = new DOMParser()).parseFromString(n, "text/xml"))
                : (((i = new ActiveXObject("Microsoft.XMLDOM")).async =
                    "false"),
                  i.loadXML(n));
            } catch (r) {
              i = e;
            }
            return (
              (i &&
                i.documentElement &&
                !i.getElementsByTagName("parsererror").length) ||
                a.error("Invalid XML: " + n),
              i
            );
          },
          noop: function () {},
          globalEval: function (e) {
            e &&
              d.test(e) &&
              (
                t.execScript ||
                function (e) {
                  t.eval.call(t, e);
                }
              )(e);
          },
          camelCase: function (t) {
            return t.replace(k, "ms-").replace(C, E);
          },
          nodeName: function (t, e) {
            return t.nodeName && t.nodeName.toUpperCase() === e.toUpperCase();
          },
          each: function (t, n, i) {
            var o,
              r = 0,
              s = t.length,
              l = s === e || a.isFunction(t);
            if (i) {
              if (l) {
                for (o in t) if (!1 === n.apply(t[o], i)) break;
              } else for (; r < s && !1 !== n.apply(t[r++], i); );
            } else if (l) {
              for (o in t) if (!1 === n.call(t[o], o, t[o])) break;
            } else for (; r < s && !1 !== n.call(t[r], r, t[r++]); );
            return t;
          },
          trim: j
            ? function (t) {
                return null == t ? "" : j.call(t);
              }
            : function (t) {
                return null == t ? "" : (t + "").replace(h, "").replace(f, "");
              },
          makeArray: function (t, e) {
            var n = e || [];
            if (null != t) {
              var i = a.type(t);
              null == t.length ||
              "string" === i ||
              "function" === i ||
              "regexp" === i ||
              a.isWindow(t)
                ? O.call(n, t)
                : a.merge(n, t);
            }
            return n;
          },
          inArray: function (t, e, n) {
            var i;
            if (e) {
              if (I) return I.call(e, t, n);
              for (
                i = e.length, n = n ? (n < 0 ? Math.max(0, i + n) : n) : 0;
                n < i;
                n++
              )
                if (n in e && e[n] === t) return n;
            }
            return -1;
          },
          merge: function (t, n) {
            var i = t.length,
              o = 0;
            if ("number" == typeof n.length)
              for (var r = n.length; o < r; o++) t[i++] = n[o];
            else for (; n[o] !== e; ) t[i++] = n[o++];
            return (t.length = i), t;
          },
          grep: function (t, e, n) {
            var i,
              o = [];
            n = !!n;
            for (var r = 0, s = t.length; r < s; r++)
              n !== (i = !!e(t[r], r)) && o.push(t[r]);
            return o;
          },
          map: function (t, n, i) {
            var o,
              r,
              s = [],
              l = 0,
              u = t.length;
            if (
              t instanceof a ||
              (u !== e &&
                "number" == typeof u &&
                ((u > 0 && t[0] && t[u - 1]) || 0 === u || a.isArray(t)))
            )
              for (; l < u; l++)
                null != (o = n(t[l], l, i)) && (s[s.length] = o);
            else for (r in t) null != (o = n(t[r], r, i)) && (s[s.length] = o);
            return s.concat.apply([], s);
          },
          guid: 1,
          proxy: function (t, n) {
            if ("string" == typeof n) {
              var i = t[n];
              (n = t), (t = i);
            }
            if (!a.isFunction(t)) return e;
            var o = A.call(arguments, 2),
              r = function () {
                return t.apply(n, o.concat(A.call(arguments)));
              };
            return (r.guid = t.guid = t.guid || r.guid || a.guid++), r;
          },
          access: function (t, n, i, o, r, s, l) {
            var u,
              c = null == i,
              d = 0,
              h = t.length;
            if (i && "object" == typeof i) {
              for (d in i) a.access(t, n, d, i[d], 1, s, o);
              r = 1;
            } else if (o !== e) {
              if (
                ((u = l === e && a.isFunction(o)),
                c &&
                  (u
                    ? ((u = n),
                      (n = function (t, e, n) {
                        return u.call(a(t), n);
                      }))
                    : (n.call(t, o), (n = null))),
                n)
              )
                for (; d < h; d++)
                  n(t[d], i, u ? o.call(t[d], d, n(t[d], i)) : o, l);
              r = 1;
            }
            return r ? t : c ? n.call(t) : h ? n(t[0], i) : s;
          },
          now: function () {
            return new Date().getTime();
          },
          uaMatch: function (t) {
            t = t.toLowerCase();
            var e =
              y.exec(t) ||
              b.exec(t) ||
              x.exec(t) ||
              (0 > t.indexOf("compatible") && w.exec(t)) ||
              [];
            return { browser: e[1] || "", version: e[2] || "0" };
          },
          sub: function () {
            function t(e, n) {
              return new t.fn.init(e, n);
            }
            a.extend(!0, t, this),
              (t.superclass = this),
              (t.fn = t.prototype = this()),
              (t.fn.constructor = t),
              (t.sub = this.sub),
              (t.fn.init = function (n, i) {
                return (
                  i && i instanceof a && !(i instanceof t) && (i = t(i)),
                  a.fn.init.call(this, n, i, e)
                );
              }),
              (t.fn.init.prototype = t.fn);
            var e = t(D);
            return t;
          },
          browser: {},
        }),
        a.each(
          "Boolean Number String Function Array Date RegExp Object".split(" "),
          function (t, e) {
            M["[object " + e + "]"] = e.toLowerCase();
          }
        ),
        (o = a.uaMatch(T)).browser &&
          ((a.browser[o.browser] = !0), (a.browser.version = o.version)),
        a.browser.webkit && (a.browser.safari = !0),
        d.test("\xa0") && ((h = /^[\s\xA0]+/), (f = /[\s\xA0]+$/)),
        (i = a(D)),
        D.addEventListener
          ? (s = function () {
              D.removeEventListener("DOMContentLoaded", s, !1), a.ready();
            })
          : D.attachEvent &&
            (s = function () {
              "complete" === D.readyState &&
                (D.detachEvent("onreadystatechange", s), a.ready());
            }),
        a
      );
    })(),
    F = {};
  M.Callbacks = function (t) {
    t = t ? F[t] || j(t) : {};
    var n,
      i,
      o,
      r,
      s,
      a,
      l = [],
      u = [],
      c = function (e) {
        var n, i, o, r;
        for (n = 0, i = e.length; n < i; n++)
          (o = e[n]),
            "array" === (r = M.type(o))
              ? c(o)
              : "function" !== r || (t.unique && h.has(o)) || l.push(o);
      },
      d = function (e, c) {
        for (
          c = c || [],
            n = !t.memory || [e, c],
            i = !0,
            o = !0,
            a = r || 0,
            r = 0,
            s = l.length;
          l && a < s;
          a++
        )
          if (!1 === l[a].apply(e, c) && t.stopOnFalse) {
            n = !0;
            break;
          }
        (o = !1),
          l &&
            (t.once
              ? !0 === n
                ? h.disable()
                : (l = [])
              : u && u.length && ((n = u.shift()), h.fireWith(n[0], n[1])));
      },
      h = {
        add: function () {
          if (l) {
            var t = l.length;
            c(arguments),
              o ? (s = l.length) : n && !0 !== n && ((r = t), d(n[0], n[1]));
          }
          return this;
        },
        remove: function () {
          if (l)
            for (var e = arguments, n = 0, i = e.length; n < i; n++)
              for (
                var r = 0;
                r < l.length &&
                (e[n] !== l[r] ||
                  (o && r <= s && (s--, r <= a && a--),
                  l.splice(r--, 1),
                  !t.unique));
                r++
              );
          return this;
        },
        has: function (t) {
          if (l) {
            for (var e = 0, n = l.length; e < n; e++) if (t === l[e]) return !0;
          }
          return !1;
        },
        empty: function () {
          return (l = []), this;
        },
        disable: function () {
          return (l = u = n = e), this;
        },
        disabled: function () {
          return !l;
        },
        lock: function () {
          return (u = e), (n && !0 !== n) || h.disable(), this;
        },
        locked: function () {
          return !u;
        },
        fireWith: function (e, i) {
          return (
            u && (o ? t.once || u.push([e, i]) : (t.once && n) || d(e, i)), this
          );
        },
        fire: function () {
          return h.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!i;
        },
      };
    return h;
  };
  var B = [].slice;
  M.extend({
    Deferred: function (t) {
      var e,
        n = M.Callbacks("once memory"),
        i = M.Callbacks("once memory"),
        o = M.Callbacks("memory"),
        r = "pending",
        s = { resolve: n, reject: i, notify: o },
        a = {
          done: n.add,
          fail: i.add,
          progress: o.add,
          state: function () {
            return r;
          },
          iuresolved: n.fired,
          isRejected: i.fired,
          then: function (t, e, n) {
            return l.done(t).fail(e).progress(n), this;
          },
          always: function () {
            return l.done.apply(l, arguments).fail.apply(l, arguments), this;
          },
          pipe: function (t, e, n) {
            return M.Deferred(function (i) {
              M.each(
                {
                  done: [t, "resolve"],
                  fail: [e, "reject"],
                  progress: [n, "notify"],
                },
                function (t, e) {
                  var n,
                    o = e[0],
                    r = e[1];
                  M.isFunction(o)
                    ? l[t](function () {
                        (n = o.apply(this, arguments)),
                          n && M.isFunction(n.promise)
                            ? n.promise().then(i.resolve, i.reject, i.notify)
                            : i[r + "With"](this === l ? i : this, [n]);
                      })
                    : l[t](i[r]);
                }
              );
            }).promise();
          },
          promise: function (t) {
            if (null == t) t = a;
            else for (var e in a) t[e] = a[e];
            return t;
          },
        },
        l = a.promise({});
      for (e in s) (l[e] = s[e].fire), (l[e + "With"] = s[e].fireWith);
      return (
        l
          .done(
            function () {
              r = "resolved";
            },
            i.disable,
            o.lock
          )
          .fail(
            function () {
              r = "rejected";
            },
            n.disable,
            o.lock
          ),
        t && t.call(l, l),
        l
      );
    },
    when: function (t) {
      function e(t) {
        return function (e) {
          (s[t] = arguments.length > 1 ? B.call(arguments, 0) : e),
            l.notifyWith(u, s);
        };
      }
      function n(t) {
        return function (e) {
          (i[t] = arguments.length > 1 ? B.call(arguments, 0) : e),
            --a || l.resolveWith(l, i);
        };
      }
      var i = B.call(arguments, 0),
        o = 0,
        r = i.length,
        s = Array(r),
        a = r,
        l = r <= 1 && t && M.isFunction(t.promise) ? t : M.Deferred(),
        u = l.promise();
      if (r > 1) {
        for (; o < r; o++)
          i[o] && i[o].promise && M.isFunction(i[o].promise)
            ? i[o].promise().then(n(o), l.reject, e(o))
            : --a;
        a || l.resolveWith(l, i);
      } else l !== t && l.resolveWith(l, r ? [t] : []);
      return u;
    },
  }),
    (M.support = (function () {
      var e,
        n,
        i,
        o,
        r,
        s,
        a,
        l,
        u,
        c,
        d,
        h = D.createElement("div");
      if (
        (D.documentElement,
        h.setAttribute("className", "t"),
        (h.innerHTML =
          "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>"),
        (n = h.getElementsByTagName("*")),
        (i = h.getElementsByTagName("a")[0]),
        !n || !n.length || !i)
      )
        return {};
      (r = (o = D.createElement("select")).appendChild(
        D.createElement("option")
      )),
        (s = h.getElementsByTagName("input")[0]),
        (e = {
          leadingWhitespace: 3 === h.firstChild.nodeType,
          tbody: !h.getElementsByTagName("tbody").length,
          htmlSerialize: !!h.getElementsByTagName("link").length,
          style: /top/.test(i.getAttribute("style")),
          hrefNormalized: "/a" === i.getAttribute("href"),
          opacity: /^0.55/.test(i.style.opacity),
          cssFloat: !!i.style.cssFloat,
          checkOn: "on" === s.value,
          optSelected: r.selected,
          getSetAttribute: "t" !== h.className,
          enctype: !!D.createElement("form").enctype,
          html5Clone:
            "<:nav></:nav>" !== D.createElement("nav").cloneNode(!0).outerHTML,
          submitBubbles: !0,
          changeBubbles: !0,
          focusinBubbles: !1,
          deleteExpando: !0,
          noCloneEvent: !0,
          inlineBlockNeedsLayout: !1,
          shrinkWrapBlocks: !1,
          reliableMarginRight: !0,
          pixelMargin: !0,
        }),
        (M.boxModel = e.boxModel = "CSS1Compat" === D.compatMode),
        (s.checked = !0),
        (e.noCloneChecked = s.cloneNode(!0).checked),
        (o.disabled = !0),
        (e.optDisabled = !r.disabled);
      try {
        delete h.test;
      } catch (f) {
        e.deleteExpando = !1;
      }
      if (
        (!h.addEventListener &&
          h.attachEvent &&
          h.fireEvent &&
          (h.attachEvent("onclick", function () {
            e.noCloneEvent = !1;
          }),
          h.cloneNode(!0).fireEvent("onclick")),
        ((s = D.createElement("input")).value = "t"),
        s.setAttribute("type", "radio"),
        (e.radioValue = "t" === s.value),
        s.setAttribute("checked", "checked"),
        s.setAttribute("name", "t"),
        h.appendChild(s),
        (a = D.createDocumentFragment()).appendChild(h.lastChild),
        (e.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (e.appendChecked = s.checked),
        a.removeChild(s),
        a.appendChild(h),
        h.attachEvent)
      )
        for (c in { submit: 1, change: 1, focusin: 1 })
          (d = (u = "on" + c) in h) ||
            (h.setAttribute(u, "return;"), (d = "function" == typeof h[u])),
            (e[c + "Bubbles"] = d);
      return (
        a.removeChild(h),
        (a = o = r = h = s = null),
        M(function () {
          var n,
            i,
            o,
            r,
            s,
            a,
            u,
            c,
            f,
            p,
            m,
            v,
            g = D.getElementsByTagName("body")[0];
          g &&
            ((u = 1),
            (p = "position:absolute;top:0;left:0;width:1px;height:1px;"),
            (m = (v = "padding:0;margin:0;border:") + "0;visibility:hidden;"),
            (f =
              "<div " +
              (c = "style='" + p + v + "5px solid #000;") +
              "display:block;'><div style='" +
              v +
              "0;display:block;overflow:hidden;'></div></div><table " +
              c +
              "' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>"),
            ((n = D.createElement("div")).style.cssText =
              m +
              "width:0;height:0;position:static;top:0;margin-top:" +
              u +
              "px"),
            g.insertBefore(n, g.firstChild),
            (h = D.createElement("div")),
            n.appendChild(h),
            (h.innerHTML =
              "<table><tr><td style='" +
              v +
              "0;display:none'></td><td>t</td></tr></table>"),
            (d = 0 === (l = h.getElementsByTagName("td"))[0].offsetHeight),
            (l[0].style.display = ""),
            (l[1].style.display = "none"),
            (e.reliableHiddenOffsets = d && 0 === l[0].offsetHeight),
            t.getComputedStyle &&
              ((h.innerHTML = ""),
              ((a = D.createElement("div")).style.width = "0"),
              (a.style.marginRight = "0"),
              (h.style.width = "2px"),
              h.appendChild(a),
              (e.reliableMarginRight =
                0 ===
                (parseInt(
                  (t.getComputedStyle(a, null) || { marginRight: 0 })
                    .marginRight,
                  10
                ) || 0))),
            void 0 !== h.style.zoom &&
              ((h.innerHTML = ""),
              (h.style.width = h.style.padding = "1px"),
              (h.style.border = 0),
              (h.style.overflow = "hidden"),
              (h.style.display = "inline"),
              (h.style.zoom = 1),
              (e.inlineBlockNeedsLayout = 3 === h.offsetWidth),
              (h.style.display = "block"),
              (h.style.overflow = "visible"),
              (h.innerHTML = "<div style='width:5px;'></div>"),
              (e.shrinkWrapBlocks = 3 !== h.offsetWidth)),
            (h.style.cssText = p + m),
            (h.innerHTML = f),
            (o = (i = h.firstChild).firstChild),
            (r = i.nextSibling.firstChild.firstChild),
            (s = {
              doesNotAddBorder: 5 !== o.offsetTop,
              doesAddBorderForTableAndCells: 5 === r.offsetTop,
            }),
            (o.style.position = "fixed"),
            (o.style.top = "20px"),
            (s.fixedPosition = 20 === o.offsetTop || 15 === o.offsetTop),
            (o.style.position = o.style.top = ""),
            (i.style.overflow = "hidden"),
            (i.style.position = "relative"),
            (s.subtractsBorderForOverflowNotVisible = -5 === o.offsetTop),
            (s.doesNotIncludeMarginInBodyOffset = g.offsetTop !== u),
            t.getComputedStyle &&
              ((h.style.marginTop = "1%"),
              (e.pixelMargin =
                "1%" !==
                (t.getComputedStyle(h, null) || { marginTop: 0 }).marginTop)),
            void 0 !== n.style.zoom && (n.style.zoom = 1),
            g.removeChild(n),
            (a = h = n = null),
            M.extend(e, s));
        }),
        e
      );
    })());
  var R = /^(?:\{.*\}|\[.*\])$/,
    H = /([A-Z])/g;
  M.extend({
    cache: {},
    uuid: 0,
    expando: "jQuery" + (M.fn.jquery + Math.random()).replace(/\D/g, ""),
    noData: {
      embed: !0,
      object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
      applet: !0,
    },
    hasData: function (t) {
      return !!(t = t.nodeType ? M.cache[t[M.expando]] : t[M.expando]) && !O(t);
    },
    data: function (t, n, i, o) {
      if (M.acceptData(t)) {
        var r,
          s,
          a,
          l = M.expando,
          u = "string" == typeof n,
          c = t.nodeType,
          d = c ? M.cache : t,
          h = c ? t[l] : t[l] && l,
          f = "events" === n;
        if ((h && d[h] && (f || o || d[h].data)) || !u || i !== e)
          return (h || (c ? (t[l] = h = ++M.uuid) : (h = l)),
          d[h] || ((d[h] = {}), c || (d[h].toJSON = M.noop)),
          ("object" == typeof n || "function" == typeof n) &&
            (o
              ? (d[h] = M.extend(d[h], n))
              : (d[h].data = M.extend(d[h].data, n))),
          (r = s = d[h]),
          o || (s.data || (s.data = {}), (s = s.data)),
          i !== e && (s[M.camelCase(n)] = i),
          f && !s[n])
            ? r.events
            : (u ? null == (a = s[n]) && (a = s[M.camelCase(n)]) : (a = s), a);
      }
    },
    removeData: function (t, e, n) {
      if (M.acceptData(t)) {
        var i,
          o,
          r,
          s = M.expando,
          a = t.nodeType,
          l = a ? M.cache : t,
          u = a ? t[s] : s;
        if (l[u]) {
          if (e && (i = n ? l[u] : l[u].data)) {
            for (
              M.isArray(e) ||
                (e =
                  (e in i)
                    ? [e]
                    : ((e = M.camelCase(e)) in i)
                    ? [e]
                    : e.split(" ")),
                o = 0,
                r = e.length;
              o < r;
              o++
            )
              delete i[e[o]];
            if (!(n ? O : M.isEmptyObject)(i)) return;
          }
          if (!n && (delete l[u].data, !O(l[u]))) return;
          M.support.deleteExpando || !l.setInterval
            ? delete l[u]
            : (l[u] = null),
            a &&
              (M.support.deleteExpando
                ? delete t[s]
                : t.removeAttribute
                ? t.removeAttribute(s)
                : (t[s] = null));
        }
      }
    },
    _data: function (t, e, n) {
      return M.data(t, e, n, !0);
    },
    acceptData: function (t) {
      if (t.nodeName) {
        var e = M.noData[t.nodeName.toLowerCase()];
        if (e) return !0 !== e && t.getAttribute("classid") === e;
      }
      return !0;
    },
  }),
    M.fn.extend({
      data: function (t, n) {
        var i,
          o,
          r,
          s,
          a,
          l = this[0],
          u = 0,
          c = null;
        if (t === e) {
          if (
            this.length &&
            ((c = M.data(l)), 1 === l.nodeType && !M._data(l, "parsedAttrs"))
          ) {
            for (a = (r = l.attributes).length; u < a; u++)
              0 === (s = r[u].name).indexOf("data-") &&
                A(l, (s = M.camelCase(s.substring(5))), c[s]);
            M._data(l, "parsedAttrs", !0);
          }
          return c;
        }
        return "object" == typeof t
          ? this.each(function () {
              M.data(this, t);
            })
          : (((i = t.split(".", 2))[1] = i[1] ? "." + i[1] : ""),
            (o = i[1] + "!"),
            M.access(
              this,
              function (n) {
                if (n === e)
                  return (
                    (c = this.triggerHandler("getData" + o, [i[0]])) === e &&
                      l &&
                      ((c = M.data(l, t)), (c = A(l, t, c))),
                    c === e && i[1] ? this.data(i[0]) : c
                  );
                (i[1] = n),
                  this.each(function () {
                    var e = M(this);
                    e.triggerHandler("setData" + o, i),
                      M.data(this, t, n),
                      e.triggerHandler("changeData" + o, i);
                  });
              },
              null,
              n,
              arguments.length > 1,
              null,
              !1
            ));
      },
      removeData: function (t) {
        return this.each(function () {
          M.removeData(this, t);
        });
      },
    }),
    M.extend({
      _mark: function (t, e) {
        t &&
          ((e = (e || "fx") + "mark"), M._data(t, e, (M._data(t, e) || 0) + 1));
      },
      _unmark: function (t, e, n) {
        if ((!0 !== t && ((n = e), (e = t), (t = !1)), e)) {
          var i = (n = n || "fx") + "mark",
            o = t ? 0 : (M._data(e, i) || 1) - 1;
          o ? M._data(e, i, o) : (M.removeData(e, i, !0), S(e, n, "mark"));
        }
      },
      queue: function (t, e, n) {
        var i;
        if (t)
          return (
            (e = (e || "fx") + "queue"),
            (i = M._data(t, e)),
            n &&
              (!i || M.isArray(n)
                ? (i = M._data(t, e, M.makeArray(n)))
                : i.push(n)),
            i || []
          );
      },
      dequeue: function (t, e) {
        e = e || "fx";
        var n = M.queue(t, e),
          i = n.shift(),
          o = {};
        "inprogress" === i && (i = n.shift()),
          i &&
            ("fx" === e && n.unshift("inprogress"),
            M._data(t, e + ".run", o),
            i.call(
              t,
              function () {
                M.dequeue(t, e);
              },
              o
            )),
          n.length ||
            (M.removeData(t, e + "queue " + e + ".run", !0), S(t, e, "queue"));
      },
    }),
    M.fn.extend({
      queue: function (t, n) {
        var i = 2;
        return ("string" != typeof t && ((n = t), (t = "fx"), i--),
        arguments.length < i)
          ? M.queue(this[0], t)
          : n === e
          ? this
          : this.each(function () {
              var e = M.queue(this, t, n);
              "fx" === t && "inprogress" !== e[0] && M.dequeue(this, t);
            });
      },
      dequeue: function (t) {
        return this.each(function () {
          M.dequeue(this, t);
        });
      },
      delay: function (t, e) {
        return (
          (t = (M.fx && M.fx.speeds[t]) || t),
          (e = e || "fx"),
          this.queue(e, function (e, n) {
            var i = setTimeout(e, t);
            n.stop = function () {
              clearTimeout(i);
            };
          })
        );
      },
      clearQueue: function (t) {
        return this.queue(t || "fx", []);
      },
      promise: function (t, n) {
        function i() {
          --l || r.resolveWith(s, [s]);
        }
        "string" != typeof t && ((n = t), (t = e)), (t = t || "fx");
        for (
          var o,
            r = M.Deferred(),
            s = this,
            a = s.length,
            l = 1,
            u = t + "defer",
            c = t + "queue",
            d = t + "mark";
          a--;

        )
          (o =
            M.data(s[a], u, e, !0) ||
            ((M.data(s[a], c, e, !0) || M.data(s[a], d, e, !0)) &&
              M.data(s[a], u, M.Callbacks("once memory"), !0))) &&
            (l++, o.add(i));
        return i(), r.promise(n);
      },
    });
  var P,
    q,
    z,
    W = /[\n\t\r]/g,
    Z = /\s+/,
    X = /\r/g,
    U = /^(?:button|input)$/i,
    V = /^(?:button|input|object|select|textarea)$/i,
    Y = /^a(?:rea)?$/i,
    K =
      /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
    J = M.support.getSetAttribute;
  M.fn.extend({
    attr: function (t, e) {
      return M.access(this, M.attr, t, e, arguments.length > 1);
    },
    removeAttr: function (t) {
      return this.each(function () {
        M.removeAttr(this, t);
      });
    },
    prop: function (t, e) {
      return M.access(this, M.prop, t, e, arguments.length > 1);
    },
    removeProp: function (t) {
      return (
        (t = M.propFix[t] || t),
        this.each(function () {
          try {
            (this[t] = e), delete this[t];
          } catch (n) {}
        })
      );
    },
    addClass: function (t) {
      var e, n, i, o, r, s, a;
      if (M.isFunction(t))
        return this.each(function (e) {
          M(this).addClass(t.call(this, e, this.className));
        });
      if (t && "string" == typeof t) {
        for (n = 0, e = t.split(Z), i = this.length; n < i; n++)
          if (1 === (o = this[n]).nodeType) {
            if (o.className || 1 !== e.length) {
              for (s = 0, r = " " + o.className + " ", a = e.length; s < a; s++)
                ~r.indexOf(" " + e[s] + " ") || (r += e[s] + " ");
              o.className = M.trim(r);
            } else o.className = t;
          }
      }
      return this;
    },
    removeClass: function (t) {
      var n, i, o, r, s, a, l;
      if (M.isFunction(t))
        return this.each(function (e) {
          M(this).removeClass(t.call(this, e, this.className));
        });
      if ((t && "string" == typeof t) || t === e) {
        for (i = 0, n = (t || "").split(Z), o = this.length; i < o; i++)
          if (1 === (r = this[i]).nodeType && r.className) {
            if (t) {
              for (
                a = 0,
                  s = (" " + r.className + " ").replace(W, " "),
                  l = n.length;
                a < l;
                a++
              )
                s = s.replace(" " + n[a] + " ", " ");
              r.className = M.trim(s);
            } else r.className = "";
          }
      }
      return this;
    },
    toggleClass: function (t, e) {
      var n = typeof t,
        i = "boolean" == typeof e;
      return M.isFunction(t)
        ? this.each(function (n) {
            M(this).toggleClass(t.call(this, n, this.className, e), e);
          })
        : this.each(function () {
            if ("string" === n)
              for (
                var o, r = 0, s = M(this), a = e, l = t.split(Z);
                (o = l[r++]);

              )
                s[(a = i ? a : !s.hasClass(o)) ? "addClass" : "removeClass"](o);
            else
              ("undefined" === n || "boolean" === n) &&
                (this.className &&
                  M._data(this, "__className__", this.className),
                (this.className =
                  this.className || !1 === t
                    ? ""
                    : M._data(this, "__className__") || ""));
          });
    },
    hasClass: function (t) {
      for (var e = " " + t + " ", n = 0, i = this.length; n < i; n++)
        if (
          1 === this[n].nodeType &&
          (" " + this[n].className + " ").replace(W, " ").indexOf(e) > -1
        )
          return !0;
      return !1;
    },
    val: function (t) {
      var n,
        i,
        o,
        r = this[0];
      return arguments.length
        ? ((o = M.isFunction(t)),
          this.each(function (i) {
            var r,
              s = M(this);
            1 !== this.nodeType ||
              (null == (r = o ? t.call(this, i, s.val()) : t)
                ? (r = "")
                : "number" == typeof r
                ? (r += "")
                : M.isArray(r) &&
                  (r = M.map(r, function (t) {
                    return null == t ? "" : t + "";
                  })),
              ((n =
                M.valHooks[this.type] ||
                M.valHooks[this.nodeName.toLowerCase()]) &&
                "set" in n &&
                n.set(this, r, "value") !== e) ||
                (this.value = r));
          }))
        : r
        ? (n = M.valHooks[r.type] || M.valHooks[r.nodeName.toLowerCase()]) &&
          "get" in n &&
          (i = n.get(r, "value")) !== e
          ? i
          : "string" == typeof (i = r.value)
          ? i.replace(X, "")
          : null == i
          ? ""
          : i
        : void 0;
    },
  }),
    M.extend({
      valHooks: {
        option: {
          get: function (t) {
            var e = t.attributes.value;
            return !e || e.specified ? t.value : t.text;
          },
        },
        select: {
          get: function (t) {
            var e,
              n,
              i,
              o,
              r = t.selectedIndex,
              s = [],
              a = t.options,
              l = "select-one" === t.type;
            if (r < 0) return null;
            for (n = l ? r : 0, i = l ? r + 1 : a.length; n < i; n++)
              if (
                (o = a[n]).selected &&
                (M.support.optDisabled
                  ? !o.disabled
                  : null === o.getAttribute("disabled")) &&
                (!o.parentNode.disabled ||
                  !M.nodeName(o.parentNode, "optgroup"))
              ) {
                if (((e = M(o).val()), l)) return e;
                s.push(e);
              }
            return l && !s.length && a.length ? M(a[r]).val() : s;
          },
          set: function (t, e) {
            var n = M.makeArray(e);
            return (
              M(t)
                .find("option")
                .each(function () {
                  this.selected = M.inArray(M(this).val(), n) >= 0;
                }),
              n.length || (t.selectedIndex = -1),
              n
            );
          },
        },
      },
      attrFn: {
        val: !0,
        css: !0,
        html: !0,
        text: !0,
        data: !0,
        width: !0,
        height: !0,
        offset: !0,
      },
      attr: function (t, n, i, o) {
        var r,
          s,
          a,
          l = t.nodeType;
        if (t && 3 !== l && 8 !== l && 2 !== l) {
          if (o && n in M.attrFn) return M(t)[n](i);
          if (void 0 === t.getAttribute) return M.prop(t, n, i);
          if (
            ((a = 1 !== l || !M.isXMLDoc(t)) &&
              ((n = n.toLowerCase()),
              (s = M.attrHooks[n] || (K.test(n) ? q : P))),
            i !== e)
          ) {
            if (null === i) {
              M.removeAttr(t, n);
              return;
            }
            return s && "set" in s && a && (r = s.set(t, i, n)) !== e
              ? r
              : (t.setAttribute(n, "" + i), i);
          }
          return s && "get" in s && a && null !== (r = s.get(t, n))
            ? r
            : null === (r = t.getAttribute(n))
            ? e
            : r;
        }
      },
      removeAttr: function (t, e) {
        var n,
          i,
          o,
          r,
          s,
          a = 0;
        if (e && 1 === t.nodeType)
          for (r = (i = e.toLowerCase().split(Z)).length; a < r; a++)
            (o = i[a]) &&
              ((n = M.propFix[o] || o),
              (s = K.test(o)) || M.attr(t, o, ""),
              t.removeAttribute(J ? o : n),
              s && n in t && (t[n] = !1));
      },
      attrHooks: {
        type: {
          set: function (t, e) {
            if (U.test(t.nodeName) && t.parentNode)
              M.error("type property can't be changed");
            else if (
              !M.support.radioValue &&
              "radio" === e &&
              M.nodeName(t, "input")
            ) {
              var n = t.value;
              return t.setAttribute("type", e), n && (t.value = n), e;
            }
          },
        },
        value: {
          get: function (t, e) {
            return P && M.nodeName(t, "button")
              ? P.get(t, e)
              : e in t
              ? t.value
              : null;
          },
          set: function (t, e, n) {
            if (P && M.nodeName(t, "button")) return P.set(t, e, n);
            t.value = e;
          },
        },
      },
      propFix: {
        tabindex: "tabIndex",
        readonly: "readOnly",
        for: "htmlFor",
        class: "className",
        maxlength: "maxLength",
        cellspacing: "cellSpacing",
        cellpadding: "cellPadding",
        rowspan: "rowSpan",
        colspan: "colSpan",
        usemap: "useMap",
        frameborder: "frameBorder",
        contenteditable: "contentEditable",
      },
      prop: function (t, n, i) {
        var o,
          r,
          s,
          a = t.nodeType;
        if (t && 3 !== a && 8 !== a && 2 !== a)
          return (
            (s = 1 !== a || !M.isXMLDoc(t)) &&
              ((n = M.propFix[n] || n), (r = M.propHooks[n])),
            i !== e
              ? r && "set" in r && (o = r.set(t, i, n)) !== e
                ? o
                : (t[n] = i)
              : r && "get" in r && null !== (o = r.get(t, n))
              ? o
              : t[n]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (t) {
            var n = t.getAttributeNode("tabindex");
            return n && n.specified
              ? parseInt(n.value, 10)
              : V.test(t.nodeName) || (Y.test(t.nodeName) && t.href)
              ? 0
              : e;
          },
        },
      },
    }),
    (M.attrHooks.tabindex = M.propHooks.tabIndex),
    (q = {
      get: function (t, n) {
        var i,
          o = M.prop(t, n);
        return !0 === o ||
          ("boolean" != typeof o &&
            (i = t.getAttributeNode(n)) &&
            !1 !== i.nodeValue)
          ? n.toLowerCase()
          : e;
      },
      set: function (t, e, n) {
        var i;
        return (
          !1 === e
            ? M.removeAttr(t, n)
            : ((i = M.propFix[n] || n) in t && (t[i] = !0),
              t.setAttribute(n, n.toLowerCase())),
          n
        );
      },
    }),
    J ||
      ((z = { name: !0, id: !0, coords: !0 }),
      (P = M.valHooks.button =
        {
          get: function (t, n) {
            var i;
            return (i = t.getAttributeNode(n)) &&
              (z[n] ? "" !== i.nodeValue : i.specified)
              ? i.nodeValue
              : e;
          },
          set: function (t, e, n) {
            var i = t.getAttributeNode(n);
            return (
              i || ((i = D.createAttribute(n)), t.setAttributeNode(i)),
              (i.nodeValue = e + "")
            );
          },
        }),
      (M.attrHooks.tabindex.set = P.set),
      M.each(["width", "height"], function (t, e) {
        M.attrHooks[e] = M.extend(M.attrHooks[e], {
          set: function (t, n) {
            if ("" === n) return t.setAttribute(e, "auto"), n;
          },
        });
      }),
      (M.attrHooks.contenteditable = {
        get: P.get,
        set: function (t, e, n) {
          "" === e && (e = "false"), P.set(t, e, n);
        },
      })),
    M.support.hrefNormalized ||
      M.each(["href", "src", "width", "height"], function (t, n) {
        M.attrHooks[n] = M.extend(M.attrHooks[n], {
          get: function (t) {
            var i = t.getAttribute(n, 2);
            return null === i ? e : i;
          },
        });
      }),
    M.support.style ||
      (M.attrHooks.style = {
        get: function (t) {
          return t.style.cssText.toLowerCase() || e;
        },
        set: function (t, e) {
          return (t.style.cssText = "" + e);
        },
      }),
    M.support.optSelected ||
      (M.propHooks.selected = M.extend(M.propHooks.selected, {
        get: function (t) {
          var e = t.parentNode;
          return (
            e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex),
            null
          );
        },
      })),
    M.support.enctype || (M.propFix.enctype = "encoding"),
    M.support.checkOn ||
      M.each(["radio", "checkbox"], function () {
        M.valHooks[this] = {
          get: function (t) {
            return null === t.getAttribute("value") ? "on" : t.value;
          },
        };
      }),
    M.each(["radio", "checkbox"], function () {
      M.valHooks[this] = M.extend(M.valHooks[this], {
        set: function (t, e) {
          if (M.isArray(e)) return (t.checked = M.inArray(M(t).val(), e) >= 0);
        },
      });
    });
  var G = /^(?:textarea|input|select)$/i,
    Q = /^([^\.]*)?(?:\.(.+))?$/,
    tt = /(?:^|\s)hover(\.\S+)?\b/,
    te = /^key/,
    tn = /^(?:mouse|contextmenu)|click/,
    ti = /^(?:focusinfocus|focusoutblur)$/,
    to = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,
    tr = function (t) {
      var e = to.exec(t);
      return (
        e &&
          ((e[1] = (e[1] || "").toLowerCase()),
          (e[3] = e[3] && RegExp("(?:^|\\s)" + e[3] + "(?:\\s|$)"))),
        e
      );
    },
    ts = function (t, e) {
      var n = t.attributes || {};
      return (
        (!e[1] || t.nodeName.toLowerCase() === e[1]) &&
        (!e[2] || (n.id || {}).value === e[2]) &&
        (!e[3] || e[3].test((n.class || {}).value))
      );
    },
    ta = function (t) {
      return M.event.special.hover
        ? t
        : t.replace(tt, "mouseenter$1 mouseleave$1");
    };
  (M.event = {
    add: function (t, n, i, o, r) {
      var s, a, l, u, c, d, h, f, p, m, v;
      if (
        !(3 === t.nodeType || 8 === t.nodeType || !n || !i || !(s = M._data(t)))
      ) {
        for (
          i.handler && ((i = (p = i).handler), (r = p.selector)),
            i.guid || (i.guid = M.guid++),
            (l = s.events) || (s.events = l = {}),
            (a = s.handle) ||
              ((s.handle = a =
                function (t) {
                  return void 0 === M || (t && M.event.triggered === t.type)
                    ? e
                    : M.event.dispatch.apply(a.elem, arguments);
                }),
              (a.elem = t)),
            n = M.trim(ta(n)).split(" "),
            u = 0;
          u < n.length;
          u++
        )
          (d = (c = Q.exec(n[u]) || [])[1]),
            (h = (c[2] || "").split(".").sort()),
            (v = M.event.special[d] || {}),
            (d = (r ? v.delegateType : v.bindType) || d),
            (v = M.event.special[d] || {}),
            (f = M.extend(
              {
                type: d,
                origType: c[1],
                data: o,
                handler: i,
                guid: i.guid,
                selector: r,
                quick: r && tr(r),
                namespace: h.join("."),
              },
              p
            )),
            (m = l[d]) ||
              (((m = l[d] = []).delegateCount = 0),
              (!v.setup || !1 === v.setup.call(t, o, h, a)) &&
                (t.addEventListener
                  ? t.addEventListener(d, a, !1)
                  : t.attachEvent && t.attachEvent("on" + d, a))),
            v.add &&
              (v.add.call(t, f), f.handler.guid || (f.handler.guid = i.guid)),
            r ? m.splice(m.delegateCount++, 0, f) : m.push(f),
            (M.event.global[d] = !0);
        t = null;
      }
    },
    global: {},
    remove: function (t, e, n, i, o) {
      var r,
        s,
        a,
        l,
        u,
        c,
        d,
        h,
        f,
        p,
        m,
        v,
        g = M.hasData(t) && M._data(t);
      if (g && (h = g.events)) {
        for (r = 0, e = M.trim(ta(e || "")).split(" "); r < e.length; r++) {
          if (((a = l = (s = Q.exec(e[r]) || [])[1]), (u = s[2]), !a)) {
            for (a in h) M.event.remove(t, a + e[r], n, i, !0);
            continue;
          }
          for (
            f = M.event.special[a] || {},
              c = (m = h[(a = (i ? f.delegateType : f.bindType) || a)] || [])
                .length,
              u = u
                ? RegExp(
                    "(^|\\.)" +
                      u.split(".").sort().join("\\.(?:.*\\.)?") +
                      "(\\.|$)"
                  )
                : null,
              d = 0;
            d < m.length;
            d++
          )
            (v = m[d]),
              (o || l === v.origType) &&
                (!n || n.guid === v.guid) &&
                (!u || u.test(v.namespace)) &&
                (!i || i === v.selector || ("**" === i && v.selector)) &&
                (m.splice(d--, 1),
                v.selector && m.delegateCount--,
                f.remove && f.remove.call(t, v));
          0 === m.length &&
            c !== m.length &&
            ((f.teardown && !1 !== f.teardown.call(t, u)) ||
              M.removeEvent(t, a, g.handle),
            delete h[a]);
        }
        M.isEmptyObject(h) &&
          ((p = g.handle) && (p.elem = null),
          M.removeData(t, ["events", "handle"], !0));
      }
    },
    customEvent: { getData: !0, setData: !0, changeData: !0 },
    trigger: function (n, i, o, r) {
      if (!o || (3 !== o.nodeType && 8 !== o.nodeType)) {
        var s,
          a,
          l,
          u,
          c,
          d,
          h,
          f,
          p,
          m,
          v = n.type || n,
          g = [];
        if (!ti.test(v + M.event.triggered)) {
          if (
            (v.indexOf("!") >= 0 && ((v = v.slice(0, -1)), (a = !0)),
            v.indexOf(".") >= 0 && ((v = (g = v.split(".")).shift()), g.sort()),
            (o && !M.event.customEvent[v]) || M.event.global[v])
          ) {
            if (
              (((n =
                "object" == typeof n
                  ? n[M.expando]
                    ? n
                    : new M.Event(v, n)
                  : new M.Event(v)).type = v),
              (n.isTrigger = !0),
              (n.exclusive = a),
              (n.namespace = g.join(".")),
              (n.namespace_re = n.namespace
                ? RegExp("(^|\\.)" + g.join("\\.(?:.*\\.)?") + "(\\.|$)")
                : null),
              (d = 0 > v.indexOf(":") ? "on" + v : ""),
              !o)
            ) {
              for (l in (s = M.cache))
                s[l].events &&
                  s[l].events[v] &&
                  M.event.trigger(n, i, s[l].handle.elem, !0);
              return;
            }
            if (
              ((n.result = e),
              n.target || (n.target = o),
              (i = null != i ? M.makeArray(i) : []).unshift(n),
              !(h = M.event.special[v] || {}).trigger ||
                !1 !== h.trigger.apply(o, i))
            ) {
              if (
                ((p = [[o, h.bindType || v]]),
                !r && !h.noBubble && !M.isWindow(o))
              ) {
                for (
                  m = h.delegateType || v,
                    u = ti.test(m + v) ? o : o.parentNode,
                    c = null;
                  u;
                  u = u.parentNode
                )
                  p.push([u, m]), (c = u);
                c &&
                  c === o.ownerDocument &&
                  p.push([c.defaultView || c.parentWindow || t, m]);
              }
              for (l = 0; l < p.length && !n.isPropagationStopped(); l++)
                (u = p[l][0]),
                  (n.type = p[l][1]),
                  (f =
                    (M._data(u, "events") || {})[n.type] &&
                    M._data(u, "handle")) && f.apply(u, i),
                  (f = d && u[d]) &&
                    M.acceptData(u) &&
                    !1 === f.apply(u, i) &&
                    n.preventDefault();
              return (
                (n.type = v),
                !r &&
                  !n.isDefaultPrevented() &&
                  (!h._default ||
                    !1 === h._default.apply(o.ownerDocument, i)) &&
                  ("click" !== v || !M.nodeName(o, "a")) &&
                  M.acceptData(o) &&
                  d &&
                  o[v] &&
                  (("focus" !== v && "blur" !== v) ||
                    0 !== n.target.offsetWidth) &&
                  !M.isWindow(o) &&
                  ((c = o[d]) && (o[d] = null),
                  (M.event.triggered = v),
                  o[v](),
                  (M.event.triggered = e),
                  c && (o[d] = c)),
                n.result
              );
            }
          }
        }
      }
    },
    dispatch: function (n) {
      n = M.event.fix(n || t.event);
      var i,
        o,
        r,
        s,
        a,
        l,
        u,
        c,
        d,
        h,
        f = (M._data(this, "events") || {})[n.type] || [],
        p = f.delegateCount,
        m = [].slice.call(arguments, 0),
        v = !n.exclusive && !n.namespace,
        g = M.event.special[n.type] || {},
        _ = [];
      if (
        ((m[0] = n),
        (n.delegateTarget = this),
        !g.preDispatch || !1 !== g.preDispatch.call(this, n))
      ) {
        if (p && (!n.button || "click" !== n.type)) {
          for (
            (s = M(this)).context = this.ownerDocument || this, r = n.target;
            r != this;
            r = r.parentNode || this
          )
            if (!0 !== r.disabled) {
              for (l = {}, c = [], s[0] = r, i = 0; i < p; i++)
                l[(h = (d = f[i]).selector)] === e &&
                  (l[h] = d.quick ? ts(r, d.quick) : s.is(h)),
                  l[h] && c.push(d);
              c.length && _.push({ elem: r, matches: c });
            }
        }
        for (
          f.length > p && _.push({ elem: this, matches: f.slice(p) }), i = 0;
          i < _.length && !n.isPropagationStopped();
          i++
        )
          for (
            u = _[i], n.currentTarget = u.elem, o = 0;
            o < u.matches.length && !n.isImmediatePropagationStopped();
            o++
          )
            (d = u.matches[o]),
              (v ||
                (!n.namespace && !d.namespace) ||
                (n.namespace_re && n.namespace_re.test(d.namespace))) &&
                ((n.data = d.data),
                (n.handleObj = d),
                (a = (
                  (M.event.special[d.origType] || {}).handle || d.handler
                ).apply(u.elem, m)) !== e &&
                  ((n.result = a),
                  !1 === a && (n.preventDefault(), n.stopPropagation())));
        return g.postDispatch && g.postDispatch.call(this, n), n.result;
      }
    },
    props:
      "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
        " "
      ),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function (t, e) {
        return (
          null == t.which &&
            (t.which = null != e.charCode ? e.charCode : e.keyCode),
          t
        );
      },
    },
    mouseHooks: {
      props:
        "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(
          " "
        ),
      filter: function (t, n) {
        var i,
          o,
          r,
          s = n.button,
          a = n.fromElement;
        return (
          null == t.pageX &&
            null != n.clientX &&
            ((o = (i = t.target.ownerDocument || D).documentElement),
            (r = i.body),
            (t.pageX =
              n.clientX +
              ((o && o.scrollLeft) || (r && r.scrollLeft) || 0) -
              ((o && o.clientLeft) || (r && r.clientLeft) || 0)),
            (t.pageY =
              n.clientY +
              ((o && o.scrollTop) || (r && r.scrollTop) || 0) -
              ((o && o.clientTop) || (r && r.clientTop) || 0))),
          !t.relatedTarget &&
            a &&
            (t.relatedTarget = a === t.target ? n.toElement : a),
          t.which ||
            s === e ||
            (t.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0),
          t
        );
      },
    },
    fix: function (t) {
      if (t[M.expando]) return t;
      var n,
        i,
        o = t,
        r = M.event.fixHooks[t.type] || {},
        s = r.props ? this.props.concat(r.props) : this.props;
      for (t = M.Event(o), n = s.length; n; ) t[(i = s[--n])] = o[i];
      return (
        t.target || (t.target = o.srcElement || D),
        3 === t.target.nodeType && (t.target = t.target.parentNode),
        t.metaKey === e && (t.metaKey = t.ctrlKey),
        r.filter ? r.filter(t, o) : t
      );
    },
    special: {
      ready: { setup: M.bindReady },
      load: { noBubble: !0 },
      focus: { delegateType: "focusin" },
      blur: { delegateType: "focusout" },
      beforeunload: {
        setup: function (t, e, n) {
          M.isWindow(this) && (this.onbeforeunload = n);
        },
        teardown: function (t, e) {
          this.onbeforeunload === e && (this.onbeforeunload = null);
        },
      },
    },
    simulate: function (t, e, n, i) {
      var o = M.extend(new M.Event(), n, {
        type: t,
        isSimulated: !0,
        originalEvent: {},
      });
      i ? M.event.trigger(o, null, e) : M.event.dispatch.call(e, o),
        o.isDefaultPrevented() && n.preventDefault();
    },
  }),
    (M.event.handle = M.event.dispatch),
    (M.removeEvent = D.removeEventListener
      ? function (t, e, n) {
          t.removeEventListener && t.removeEventListener(e, n, !1);
        }
      : function (t, e, n) {
          t.detachEvent && t.detachEvent("on" + e, n);
        }),
    (M.Event = function (t, e) {
      if (!(this instanceof M.Event)) return new M.Event(t, e);
      t && t.type
        ? ((this.originalEvent = t),
          (this.type = t.type),
          (this.isDefaultPrevented =
            t.defaultPrevented ||
            !1 === t.returnValue ||
            (t.getPreventDefault && t.getPreventDefault())
              ? T
              : N))
        : (this.type = t),
        e && M.extend(this, e),
        (this.timeStamp = (t && t.timeStamp) || M.now()),
        (this[M.expando] = !0);
    }),
    (M.Event.prototype = {
      preventDefault: function () {
        this.isDefaultPrevented = T;
        var t = this.originalEvent;
        t && (t.preventDefault ? t.preventDefault() : (t.returnValue = !1));
      },
      stopPropagation: function () {
        this.isPropagationStopped = T;
        var t = this.originalEvent;
        t && (t.stopPropagation && t.stopPropagation(), (t.cancelBubble = !0));
      },
      stopImmediatePropagation: function () {
        (this.isImmediatePropagationStopped = T), this.stopPropagation();
      },
      isDefaultPrevented: N,
      isPropagationStopped: N,
      isImmediatePropagationStopped: N,
    }),
    M.each(
      { mouseenter: "mouseover", mouseleave: "mouseout" },
      function (t, e) {
        M.event.special[t] = {
          delegateType: e,
          bindType: e,
          handle: function (t) {
            var n,
              i = this,
              o = t.relatedTarget,
              r = t.handleObj;
            return (
              r.selector,
              (o && (o === i || M.contains(i, o))) ||
                ((t.type = r.origType),
                (n = r.handler.apply(this, arguments)),
                (t.type = e)),
              n
            );
          },
        };
      }
    ),
    M.support.submitBubbles ||
      (M.event.special.submit = {
        setup: function () {
          if (M.nodeName(this, "form")) return !1;
          M.event.add(this, "click._submit keypress._submit", function (t) {
            var n = t.target,
              i =
                M.nodeName(n, "input") || M.nodeName(n, "button") ? n.form : e;
            i &&
              !i._submit_attached &&
              (M.event.add(i, "submit._submit", function (t) {
                t._submit_bubble = !0;
              }),
              (i._submit_attached = !0));
          });
        },
        postDispatch: function (t) {
          t._submit_bubble &&
            (delete t._submit_bubble,
            this.parentNode &&
              !t.isTrigger &&
              M.event.simulate("submit", this.parentNode, t, !0));
        },
        teardown: function () {
          if (M.nodeName(this, "form")) return !1;
          M.event.remove(this, "._submit");
        },
      }),
    M.support.changeBubbles ||
      (M.event.special.change = {
        setup: function () {
          if (G.test(this.nodeName))
            return (
              ("checkbox" === this.type || "radio" === this.type) &&
                (M.event.add(this, "propertychange._change", function (t) {
                  "checked" === t.originalEvent.propertyName &&
                    (this._just_changed = !0);
                }),
                M.event.add(this, "click._change", function (t) {
                  this._just_changed &&
                    !t.isTrigger &&
                    ((this._just_changed = !1),
                    M.event.simulate("change", this, t, !0));
                })),
              !1
            );
          M.event.add(this, "beforeactivate._change", function (t) {
            var e = t.target;
            G.test(e.nodeName) &&
              !e._change_attached &&
              (M.event.add(e, "change._change", function (t) {
                !this.parentNode ||
                  t.isSimulated ||
                  t.isTrigger ||
                  M.event.simulate("change", this.parentNode, t, !0);
              }),
              (e._change_attached = !0));
          });
        },
        handle: function (t) {
          var e = t.target;
          if (
            this !== e ||
            t.isSimulated ||
            t.isTrigger ||
            ("radio" !== e.type && "checkbox" !== e.type)
          )
            return t.handleObj.handler.apply(this, arguments);
        },
        teardown: function () {
          return M.event.remove(this, "._change"), G.test(this.nodeName);
        },
      }),
    M.support.focusinBubbles ||
      M.each({ focus: "focusin", blur: "focusout" }, function (t, e) {
        var n = 0,
          i = function (t) {
            M.event.simulate(e, t.target, M.event.fix(t), !0);
          };
        M.event.special[e] = {
          setup: function () {
            0 == n++ && D.addEventListener(t, i, !0);
          },
          teardown: function () {
            0 == --n && D.removeEventListener(t, i, !0);
          },
        };
      }),
    M.fn.extend({
      on: function (t, n, i, o, r) {
        var s, a;
        if ("object" == typeof t) {
          for (a in ("string" != typeof n && ((i = i || n), (n = e)), t))
            this.on(a, n, i, t[a], r);
          return this;
        }
        if (
          (null == i && null == o
            ? ((o = n), (i = n = e))
            : null == o &&
              ("string" == typeof n
                ? ((o = i), (i = e))
                : ((o = i), (i = n), (n = e))),
          !1 === o)
        )
          o = N;
        else if (!o) return this;
        return (
          1 === r &&
            ((s = o),
            ((o = function (t) {
              return M().off(t), s.apply(this, arguments);
            }).guid = s.guid || (s.guid = M.guid++))),
          this.each(function () {
            M.event.add(this, t, o, i, n);
          })
        );
      },
      one: function (t, e, n, i) {
        return this.on(t, e, n, i, 1);
      },
      off: function (t, n, i) {
        if (t && t.preventDefault && t.handleObj) {
          var o = t.handleObj;
          return (
            M(t.delegateTarget).off(
              o.namespace ? o.origType + "." + o.namespace : o.origType,
              o.selector,
              o.handler
            ),
            this
          );
        }
        if ("object" == typeof t) {
          for (var r in t) this.off(r, n, t[r]);
          return this;
        }
        return (
          (!1 === n || "function" == typeof n) && ((i = n), (n = e)),
          !1 === i && (i = N),
          this.each(function () {
            M.event.remove(this, t, i, n);
          })
        );
      },
      bind: function (t, e, n) {
        return this.on(t, null, e, n);
      },
      unbind: function (t, e) {
        return this.off(t, null, e);
      },
      live: function (t, e, n) {
        return M(this.context).on(t, this.selector, e, n), this;
      },
      die: function (t, e) {
        return M(this.context).off(t, this.selector || "**", e), this;
      },
      delegate: function (t, e, n, i) {
        return this.on(e, t, n, i);
      },
      undelegate: function (t, e, n) {
        return 1 == arguments.length ? this.off(t, "**") : this.off(e, t, n);
      },
      trigger: function (t, e) {
        return this.each(function () {
          M.event.trigger(t, e, this);
        });
      },
      triggerHandler: function (t, e) {
        if (this[0]) return M.event.trigger(t, e, this[0], !0);
      },
      toggle: function (t) {
        var e = arguments,
          n = t.guid || M.guid++,
          i = 0,
          o = function (n) {
            var o = (M._data(this, "lastToggle" + t.guid) || 0) % i;
            return (
              M._data(this, "lastToggle" + t.guid, o + 1),
              n.preventDefault(),
              e[o].apply(this, arguments) || !1
            );
          };
        for (o.guid = n; i < e.length; ) e[i++].guid = n;
        return this.click(o);
      },
      hover: function (t, e) {
        return this.mouseenter(t).mouseleave(e || t);
      },
    }),
    M.each(
      "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
        " "
      ),
      function (t, e) {
        (M.fn[e] = function (t, n) {
          return (
            null == n && ((n = t), (t = null)),
            arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
          );
        }),
          M.attrFn && (M.attrFn[e] = !0),
          te.test(e) && (M.event.fixHooks[e] = M.event.keyHooks),
          tn.test(e) && (M.event.fixHooks[e] = M.event.mouseHooks);
      }
    ),
    (function () {
      function t(t, e, n, i, o, r) {
        for (var s = 0, a = i.length; s < a; s++) {
          var l = i[s];
          if (l) {
            var u = !1;
            for (l = l[t]; l; ) {
              if (l[c] === n) {
                u = i[l.sizset];
                break;
              }
              if (1 === l.nodeType) {
                if ((r || ((l[c] = n), (l.sizset = s)), "string" != typeof e)) {
                  if (l === e) {
                    u = !0;
                    break;
                  }
                } else if (_.filter(e, [l]).length > 0) {
                  u = l;
                  break;
                }
              }
              l = l[t];
            }
            i[s] = u;
          }
        }
      }
      function n(t, e, n, i, o, r) {
        for (var s = 0, a = i.length; s < a; s++) {
          var l = i[s];
          if (l) {
            var u = !1;
            for (l = l[t]; l; ) {
              if (l[c] === n) {
                u = i[l.sizset];
                break;
              }
              if (
                (1 !== l.nodeType || r || ((l[c] = n), (l.sizset = s)),
                l.nodeName.toLowerCase() === e)
              ) {
                u = l;
                break;
              }
              l = l[t];
            }
            i[s] = u;
          }
        }
      }
      var i,
        o,
        r,
        s,
        a,
        l,
        u =
          /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
        c = "sizcache" + (Math.random() + "").replace(".", ""),
        d = 0,
        h = Object.prototype.toString,
        f = !1,
        p = !0,
        m = /\\/g,
        v = /\r\n/g,
        g = /\W/;
      [0, 0].sort(function () {
        return (p = !1), 0;
      });
      var _ = function (t, e, n, i) {
        n = n || [];
        var o = (e = e || D);
        if (1 !== e.nodeType && 9 !== e.nodeType) return [];
        if (!t || "string" != typeof t) return n;
        var r,
          s,
          a,
          l,
          c,
          d,
          f,
          p,
          m = !0,
          v = _.isXML(e),
          g = [],
          y = t;
        do
          if (
            (u.exec(""), (r = u.exec(y)) && ((y = r[3]), g.push(r[1]), r[2]))
          ) {
            l = r[3];
            break;
          }
        while (r);
        if (g.length > 1 && x.exec(t)) {
          if (2 === g.length && b.relative[g[0]]) s = T(g[0] + g[1], e, i);
          else
            for (s = b.relative[g[0]] ? [e] : _(g.shift(), e); g.length; )
              (t = g.shift()),
                b.relative[t] && (t += g.shift()),
                (s = T(t, s, i));
        } else if (
          (!i &&
            g.length > 1 &&
            9 === e.nodeType &&
            !v &&
            b.match.ID.test(g[0]) &&
            !b.match.ID.test(g[g.length - 1]) &&
            (e = (c = _.find(g.shift(), e, v)).expr
              ? _.filter(c.expr, c.set)[0]
              : c.set[0]),
          e)
        )
          for (
            s = (c = i
              ? { expr: g.pop(), set: k(i) }
              : _.find(
                  g.pop(),
                  1 === g.length &&
                    ("~" === g[0] || "+" === g[0]) &&
                    e.parentNode
                    ? e.parentNode
                    : e,
                  v
                )).expr
              ? _.filter(c.expr, c.set)
              : c.set,
              g.length > 0 ? (a = k(s)) : (m = !1);
            g.length;

          )
            (f = d = g.pop()),
              b.relative[d] ? (f = g.pop()) : (d = ""),
              null == f && (f = e),
              b.relative[d](a, f, v);
        else a = g = [];
        if (
          (a || (a = s), a || _.error(d || t), "[object Array]" === h.call(a))
        ) {
          if (m) {
            if (e && 1 === e.nodeType)
              for (p = 0; null != a[p]; p++)
                a[p] &&
                  (!0 === a[p] ||
                    (1 === a[p].nodeType && _.contains(e, a[p]))) &&
                  n.push(s[p]);
            else
              for (p = 0; null != a[p]; p++)
                a[p] && 1 === a[p].nodeType && n.push(s[p]);
          } else n.push.apply(n, a);
        } else k(a, n);
        return l && (_(l, o, n, i), _.uniqueSort(n)), n;
      };
      (_.uniqueSort = function (t) {
        if (a && ((f = p), t.sort(a), f))
          for (var e = 1; e < t.length; e++)
            t[e] === t[e - 1] && t.splice(e--, 1);
        return t;
      }),
        (_.matches = function (t, e) {
          return _(t, null, null, e);
        }),
        (_.matchesSelector = function (t, e) {
          return _(e, null, null, [t]).length > 0;
        }),
        (_.find = function (t, e, n) {
          var i, o, r, s, a, l;
          if (!t) return [];
          for (o = 0, r = b.order.length; o < r; o++)
            if (
              ((a = b.order[o]),
              (s = b.leftMatch[a].exec(t)) &&
                ((l = s[1]),
                s.splice(1, 1),
                "\\" !== l.substr(l.length - 1) &&
                  ((s[1] = (s[1] || "").replace(m, "")),
                  null != (i = b.find[a](s, e, n)))))
            ) {
              t = t.replace(b.match[a], "");
              break;
            }
          return (
            i ||
              (i =
                void 0 !== e.getElementsByTagName
                  ? e.getElementsByTagName("*")
                  : []),
            { set: i, expr: t }
          );
        }),
        (_.filter = function (t, n, i, o) {
          for (
            var r,
              s,
              a,
              l,
              u,
              c,
              d,
              h,
              f,
              p = t,
              m = [],
              v = n,
              g = n && n[0] && _.isXML(n[0]);
            t && n.length;

          ) {
            for (a in b.filter)
              if (null != (r = b.leftMatch[a].exec(t)) && r[2]) {
                if (
                  ((c = b.filter[a]),
                  (d = r[1]),
                  (s = !1),
                  r.splice(1, 1),
                  "\\" === d.substr(d.length - 1))
                )
                  continue;
                if ((v === m && (m = []), b.preFilter[a])) {
                  if ((r = b.preFilter[a](r, v, i, m, o, g))) {
                    if (!0 === r) continue;
                  } else s = l = !0;
                }
                if (r)
                  for (h = 0; null != (u = v[h]); h++)
                    u &&
                      ((f = o ^ (l = c(u, r, h, v))),
                      i && null != l
                        ? f
                          ? (s = !0)
                          : (v[h] = !1)
                        : f && (m.push(u), (s = !0)));
                if (l !== e) {
                  if ((i || (v = m), (t = t.replace(b.match[a], "")), !s))
                    return [];
                  break;
                }
              }
            if (t === p) {
              if (null == s) _.error(t);
              else break;
            }
            p = t;
          }
          return v;
        }),
        (_.error = function (t) {
          throw Error("Syntax error, unrecognized expression: " + t);
        });
      var y = (_.getText = function (t) {
          var e,
            n,
            i = t.nodeType,
            o = "";
          if (i) {
            if (1 === i || 9 === i || 11 === i) {
              if ("string" == typeof t.textContent) return t.textContent;
              if ("string" == typeof t.innerText)
                return t.innerText.replace(v, "");
              for (t = t.firstChild; t; t = t.nextSibling) o += y(t);
            } else if (3 === i || 4 === i) return t.nodeValue;
          } else for (e = 0; (n = t[e]); e++) 8 !== n.nodeType && (o += y(n));
          return o;
        }),
        b = (_.selectors = {
          order: ["ID", "NAME", "TAG"],
          match: {
            ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
            CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
            NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
            ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
            TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
            CHILD:
              /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
            POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
            PSEUDO:
              /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/,
          },
          leftMatch: {},
          attrMap: { class: "className", for: "htmlFor" },
          attrHandle: {
            href: function (t) {
              return t.getAttribute("href");
            },
            type: function (t) {
              return t.getAttribute("type");
            },
          },
          relative: {
            "+": function (t, e) {
              var n = "string" == typeof e,
                i = n && !g.test(e),
                o = n && !i;
              i && (e = e.toLowerCase());
              for (var r, s = 0, a = t.length; s < a; s++)
                if ((r = t[s])) {
                  for (; (r = r.previousSibling) && 1 !== r.nodeType; );
                  t[s] =
                    o || (r && r.nodeName.toLowerCase() === e)
                      ? r || !1
                      : r === e;
                }
              o && _.filter(e, t, !0);
            },
            ">": function (t, e) {
              var n,
                i = "string" == typeof e,
                o = 0,
                r = t.length;
              if (i && !g.test(e)) {
                for (e = e.toLowerCase(); o < r; o++)
                  if ((n = t[o])) {
                    var s = n.parentNode;
                    t[o] = s.nodeName.toLowerCase() === e && s;
                  }
              } else {
                for (; o < r; o++)
                  (n = t[o]) && (t[o] = i ? n.parentNode : n.parentNode === e);
                i && _.filter(e, t, !0);
              }
            },
            "": function (e, i, o) {
              var r,
                s = d++,
                a = t;
              "string" != typeof i ||
                g.test(i) ||
                ((r = i = i.toLowerCase()), (a = n)),
                a("parentNode", i, s, e, r, o);
            },
            "~": function (e, i, o) {
              var r,
                s = d++,
                a = t;
              "string" != typeof i ||
                g.test(i) ||
                ((r = i = i.toLowerCase()), (a = n)),
                a("previousSibling", i, s, e, r, o);
            },
          },
          find: {
            ID: function (t, e, n) {
              if (void 0 !== e.getElementById && !n) {
                var i = e.getElementById(t[1]);
                return i && i.parentNode ? [i] : [];
              }
            },
            NAME: function (t, e) {
              if (void 0 !== e.getElementsByName) {
                for (
                  var n = [],
                    i = e.getElementsByName(t[1]),
                    o = 0,
                    r = i.length;
                  o < r;
                  o++
                )
                  i[o].getAttribute("name") === t[1] && n.push(i[o]);
                return 0 === n.length ? null : n;
              }
            },
            TAG: function (t, e) {
              if (void 0 !== e.getElementsByTagName)
                return e.getElementsByTagName(t[1]);
            },
          },
          preFilter: {
            CLASS: function (t, e, n, i, o, r) {
              if (((t = " " + t[1].replace(m, "") + " "), r)) return t;
              for (var s, a = 0; null != (s = e[a]); a++)
                s &&
                  (o ^
                  (s.className &&
                    (" " + s.className + " ")
                      .replace(/[\t\n\r]/g, " ")
                      .indexOf(t) >= 0)
                    ? n || i.push(s)
                    : n && (e[a] = !1));
              return !1;
            },
            ID: function (t) {
              return t[1].replace(m, "");
            },
            TAG: function (t, e) {
              return t[1].replace(m, "").toLowerCase();
            },
            CHILD: function (t) {
              if ("nth" === t[1]) {
                t[2] || _.error(t[0]), (t[2] = t[2].replace(/^\+|\s*/g, ""));
                var e = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(
                  ("even" === t[2] && "2n") ||
                    ("odd" === t[2] && "2n+1") ||
                    (!/\D/.test(t[2]) && "0n+" + t[2]) ||
                    t[2]
                );
                (t[2] = e[1] + (e[2] || 1) - 0), (t[3] = e[3] - 0);
              } else t[2] && _.error(t[0]);
              return (t[0] = d++), t;
            },
            ATTR: function (t, e, n, i, o, r) {
              var s = (t[1] = t[1].replace(m, ""));
              return (
                !r && b.attrMap[s] && (t[1] = b.attrMap[s]),
                (t[4] = (t[4] || t[5] || "").replace(m, "")),
                "~=" === t[2] && (t[4] = " " + t[4] + " "),
                t
              );
            },
            PSEUDO: function (t, e, n, i, o) {
              if ("not" === t[1]) {
                if ((u.exec(t[3]) || "").length > 1 || /^\w/.test(t[3]))
                  t[3] = _(t[3], null, null, e);
                else {
                  var r = _.filter(t[3], e, n, !0 ^ o);
                  return n || i.push.apply(i, r), !1;
                }
              } else if (b.match.POS.test(t[0]) || b.match.CHILD.test(t[0]))
                return !0;
              return t;
            },
            POS: function (t) {
              return t.unshift(!0), t;
            },
          },
          filters: {
            enabled: function (t) {
              return !1 === t.disabled && "hidden" !== t.type;
            },
            disabled: function (t) {
              return !0 === t.disabled;
            },
            checked: function (t) {
              return !0 === t.checked;
            },
            selected: function (t) {
              return (
                t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
              );
            },
            parent: function (t) {
              return !!t.firstChild;
            },
            empty: function (t) {
              return !t.firstChild;
            },
            has: function (t, e, n) {
              return !!_(n[3], t).length;
            },
            header: function (t) {
              return /h\d/i.test(t.nodeName);
            },
            text: function (t) {
              var e = t.getAttribute("type"),
                n = t.type;
              return (
                "input" === t.nodeName.toLowerCase() &&
                "text" === n &&
                (e === n || null === e)
              );
            },
            radio: function (t) {
              return "input" === t.nodeName.toLowerCase() && "radio" === t.type;
            },
            checkbox: function (t) {
              return (
                "input" === t.nodeName.toLowerCase() && "checkbox" === t.type
              );
            },
            file: function (t) {
              return "input" === t.nodeName.toLowerCase() && "file" === t.type;
            },
            password: function (t) {
              return (
                "input" === t.nodeName.toLowerCase() && "password" === t.type
              );
            },
            submit: function (t) {
              var e = t.nodeName.toLowerCase();
              return ("input" === e || "button" === e) && "submit" === t.type;
            },
            image: function (t) {
              return "input" === t.nodeName.toLowerCase() && "image" === t.type;
            },
            reset: function (t) {
              var e = t.nodeName.toLowerCase();
              return ("input" === e || "button" === e) && "reset" === t.type;
            },
            button: function (t) {
              var e = t.nodeName.toLowerCase();
              return ("input" === e && "button" === t.type) || "button" === e;
            },
            input: function (t) {
              return /input|select|textarea|button/i.test(t.nodeName);
            },
            focus: function (t) {
              return t === t.ownerDocument.activeElement;
            },
          },
          setFilters: {
            first: function (t, e) {
              return 0 === e;
            },
            last: function (t, e, n, i) {
              return e === i.length - 1;
            },
            even: function (t, e) {
              return e % 2 == 0;
            },
            odd: function (t, e) {
              return e % 2 == 1;
            },
            lt: function (t, e, n) {
              return e < n[3] - 0;
            },
            gt: function (t, e, n) {
              return e > n[3] - 0;
            },
            nth: function (t, e, n) {
              return n[3] - 0 === e;
            },
            eq: function (t, e, n) {
              return n[3] - 0 === e;
            },
          },
          filter: {
            PSEUDO: function (t, e, n, i) {
              var o = e[1],
                r = b.filters[o];
              if (r) return r(t, n, e, i);
              if ("contains" === o)
                return (
                  (t.textContent || t.innerText || y([t]) || "").indexOf(
                    e[3]
                  ) >= 0
                );
              if ("not" === o) {
                for (var s = e[3], a = 0, l = s.length; a < l; a++)
                  if (s[a] === t) return !1;
                return !0;
              }
              _.error(o);
            },
            CHILD: function (t, e) {
              var n,
                i,
                o,
                r,
                s,
                a,
                l = e[1],
                u = t;
              switch (l) {
                case "only":
                case "first":
                  for (; (u = u.previousSibling); )
                    if (1 === u.nodeType) return !1;
                  if ("first" === l) return !0;
                  u = t;
                case "last":
                  for (; (u = u.nextSibling); ) if (1 === u.nodeType) return !1;
                  return !0;
                case "nth":
                  if (((n = e[2]), (i = e[3]), 1 === n && 0 === i)) return !0;
                  if (
                    ((o = e[0]),
                    (r = t.parentNode) && (r[c] !== o || !t.nodeIndex))
                  ) {
                    for (s = 0, u = r.firstChild; u; u = u.nextSibling)
                      1 === u.nodeType && (u.nodeIndex = ++s);
                    r[c] = o;
                  }
                  return (
                    (a = t.nodeIndex - i),
                    0 === n ? 0 === a : a % n == 0 && a / n >= 0
                  );
              }
            },
            ID: function (t, e) {
              return 1 === t.nodeType && t.getAttribute("id") === e;
            },
            TAG: function (t, e) {
              return (
                ("*" === e && 1 === t.nodeType) ||
                (!!t.nodeName && t.nodeName.toLowerCase() === e)
              );
            },
            CLASS: function (t, e) {
              return (
                (" " + (t.className || t.getAttribute("class")) + " ").indexOf(
                  e
                ) > -1
              );
            },
            ATTR: function (t, e) {
              var n = e[1],
                i = _.attr
                  ? _.attr(t, n)
                  : b.attrHandle[n]
                  ? b.attrHandle[n](t)
                  : null != t[n]
                  ? t[n]
                  : t.getAttribute(n),
                o = i + "",
                r = e[2],
                s = e[4];
              return null == i
                ? "!=" === r
                : !r && _.attr
                ? null != i
                : "=" === r
                ? o === s
                : "*=" === r
                ? o.indexOf(s) >= 0
                : "~=" === r
                ? (" " + o + " ").indexOf(s) >= 0
                : s
                ? "!=" === r
                  ? o !== s
                  : "^=" === r
                  ? 0 === o.indexOf(s)
                  : "$=" === r
                  ? o.substr(o.length - s.length) === s
                  : "|=" === r &&
                    (o === s || o.substr(0, s.length + 1) === s + "-")
                : o && !1 !== i;
            },
            POS: function (t, e, n, i) {
              var o = e[2],
                r = b.setFilters[o];
              if (r) return r(t, n, e, i);
            },
          },
        }),
        x = b.match.POS,
        w = function (t, e) {
          return "\\" + (e - 0 + 1);
        };
      for (var C in b.match)
        (b.match[C] = RegExp(
          b.match[C].source + /(?![^\[]*\])(?![^\(]*\))/.source
        )),
          (b.leftMatch[C] = RegExp(
            /(^(?:.|\r|\n)*?)/.source + b.match[C].source.replace(/\\(\d+)/g, w)
          ));
      b.match.globalPOS = x;
      var k = function (t, e) {
        return ((t = Array.prototype.slice.call(t, 0)), e)
          ? (e.push.apply(e, t), e)
          : t;
      };
      try {
        Array.prototype.slice.call(D.documentElement.childNodes, 0)[0].nodeType;
      } catch (E) {
        k = function (t, e) {
          var n = 0,
            i = e || [];
          if ("[object Array]" === h.call(t)) Array.prototype.push.apply(i, t);
          else if ("number" == typeof t.length)
            for (var o = t.length; n < o; n++) i.push(t[n]);
          else for (; t[n]; n++) i.push(t[n]);
          return i;
        };
      }
      D.documentElement.compareDocumentPosition
        ? (a = function (t, e) {
            return t === e
              ? ((f = !0), 0)
              : t.compareDocumentPosition && e.compareDocumentPosition
              ? 4 & t.compareDocumentPosition(e)
                ? -1
                : 1
              : t.compareDocumentPosition
              ? -1
              : 1;
          })
        : ((a = function (t, e) {
            if (t === e) return (f = !0), 0;
            if (t.sourceIndex && e.sourceIndex)
              return t.sourceIndex - e.sourceIndex;
            var n,
              i,
              o = [],
              r = [],
              s = t.parentNode,
              a = e.parentNode,
              u = s;
            if (s === a) return l(t, e);
            if (!s) return -1;
            if (!a) return 1;
            for (; u; ) o.unshift(u), (u = u.parentNode);
            for (u = a; u; ) r.unshift(u), (u = u.parentNode);
            (n = o.length), (i = r.length);
            for (var c = 0; c < n && c < i; c++)
              if (o[c] !== r[c]) return l(o[c], r[c]);
            return c === n ? l(t, r[c], -1) : l(o[c], e, 1);
          }),
          (l = function (t, e, n) {
            if (t === e) return n;
            for (var i = t.nextSibling; i; ) {
              if (i === e) return -1;
              i = i.nextSibling;
            }
            return 1;
          })),
        (i = D.createElement("div")),
        (o = "script" + new Date().getTime()),
        (r = D.documentElement),
        (i.innerHTML = "<a name='" + o + "'/>"),
        r.insertBefore(i, r.firstChild),
        D.getElementById(o) &&
          ((b.find.ID = function (t, n, i) {
            if (void 0 !== n.getElementById && !i) {
              var o = n.getElementById(t[1]);
              return o
                ? o.id === t[1] ||
                  (void 0 !== o.getAttributeNode &&
                    o.getAttributeNode("id").nodeValue === t[1])
                  ? [o]
                  : e
                : [];
            }
          }),
          (b.filter.ID = function (t, e) {
            var n = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
            return 1 === t.nodeType && n && n.nodeValue === e;
          })),
        r.removeChild(i),
        (r = i = null),
        (s = D.createElement("div")).appendChild(D.createComment("")),
        s.getElementsByTagName("*").length > 0 &&
          (b.find.TAG = function (t, e) {
            var n = e.getElementsByTagName(t[1]);
            if ("*" === t[1]) {
              for (var i = [], o = 0; n[o]; o++)
                1 === n[o].nodeType && i.push(n[o]);
              n = i;
            }
            return n;
          }),
        (s.innerHTML = "<a href='#'></a>"),
        s.firstChild &&
          void 0 !== s.firstChild.getAttribute &&
          "#" !== s.firstChild.getAttribute("href") &&
          (b.attrHandle.href = function (t) {
            return t.getAttribute("href", 2);
          }),
        (s = null),
        D.querySelectorAll &&
          (function () {
            var t = _,
              e = D.createElement("div"),
              n = "__sizzle__";
            if (
              ((e.innerHTML = "<p class='TEST'></p>"),
              !e.querySelectorAll || 0 !== e.querySelectorAll(".TEST").length)
            ) {
              for (var i in ((_ = function (e, i, o, r) {
                if (((i = i || D), !r && !_.isXML(i))) {
                  var s = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(e);
                  if (s && (1 === i.nodeType || 9 === i.nodeType)) {
                    if (s[1]) return k(i.getElementsByTagName(e), o);
                    if (s[2] && b.find.CLASS && i.getElementsByClassName)
                      return k(i.getElementsByClassName(s[2]), o);
                  }
                  if (9 === i.nodeType) {
                    if ("body" === e && i.body) return k([i.body], o);
                    if (s && s[3]) {
                      var a = i.getElementById(s[3]);
                      if (!a || !a.parentNode) return k([], o);
                      if (a.id === s[3]) return k([a], o);
                    }
                    try {
                      return k(i.querySelectorAll(e), o);
                    } catch (l) {}
                  } else if (
                    1 === i.nodeType &&
                    "object" !== i.nodeName.toLowerCase()
                  ) {
                    var u = i,
                      c = i.getAttribute("id"),
                      d = c || n,
                      h = i.parentNode,
                      f = /^\s*[+~]/.test(e);
                    c ? (d = d.replace(/'/g, "\\$&")) : i.setAttribute("id", d),
                      f && h && (i = i.parentNode);
                    try {
                      if (!f || h)
                        return k(
                          i.querySelectorAll("[id='" + d + "'] " + e),
                          o
                        );
                    } catch (p) {
                    } finally {
                      c || u.removeAttribute("id");
                    }
                  }
                }
                return t(e, i, o, r);
              }),
              t))
                _[i] = t[i];
              e = null;
            }
          })(),
        (function () {
          var t = D.documentElement,
            e =
              t.matchesSelector ||
              t.mozMatchesSelector ||
              t.webkitMatchesSelector ||
              t.msMatchesSelector;
          if (e) {
            var n = !e.call(D.createElement("div"), "div"),
              i = !1;
            try {
              e.call(D.documentElement, "[test!='']:sizzle");
            } catch (o) {
              i = !0;
            }
            _.matchesSelector = function (t, o) {
              if (
                ((o = o.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']")),
                !_.isXML(t))
              )
                try {
                  if (i || (!b.match.PSEUDO.test(o) && !/!=/.test(o))) {
                    var r = e.call(t, o);
                    if (r || !n || (t.document && 11 !== t.document.nodeType))
                      return r;
                  }
                } catch (s) {}
              return _(o, null, null, [t]).length > 0;
            };
          }
        })(),
        (function () {
          var t = D.createElement("div");
          if (
            ((t.innerHTML =
              "<div class='test e'></div><div class='test'></div>"),
            t.getElementsByClassName &&
              0 !== t.getElementsByClassName("e").length)
          ) {
            if (
              ((t.lastChild.className = "e"),
              1 === t.getElementsByClassName("e").length)
            )
              return;
            b.order.splice(1, 0, "CLASS"),
              (b.find.CLASS = function (t, e, n) {
                if (void 0 !== e.getElementsByClassName && !n)
                  return e.getElementsByClassName(t[1]);
              }),
              (t = null);
          }
        })(),
        D.documentElement.contains
          ? (_.contains = function (t, e) {
              return t !== e && (!t.contains || t.contains(e));
            })
          : D.documentElement.compareDocumentPosition
          ? (_.contains = function (t, e) {
              return !!(16 & t.compareDocumentPosition(e));
            })
          : (_.contains = function () {
              return !1;
            }),
        (_.isXML = function (t) {
          var e = (t ? t.ownerDocument || t : 0).documentElement;
          return !!e && "HTML" !== e.nodeName;
        });
      var T = function (t, e, n) {
        for (
          var i, o = [], r = "", s = e.nodeType ? [e] : e;
          (i = b.match.PSEUDO.exec(t));

        )
          (r += i[0]), (t = t.replace(b.match.PSEUDO, ""));
        t = b.relative[t] ? t + "*" : t;
        for (var a = 0, l = s.length; a < l; a++) _(t, s[a], o, n);
        return _.filter(r, o);
      };
      (_.attr = M.attr),
        (_.selectors.attrMap = {}),
        (M.find = _),
        (M.expr = _.selectors),
        (M.expr[":"] = M.expr.filters),
        (M.unique = _.uniqueSort),
        (M.text = _.getText),
        (M.isXMLDoc = _.isXML),
        (M.contains = _.contains);
    })();
  var tl = /Until$/,
    tu = /^(?:parents|prevUntil|prevAll)/,
    tc = /,/,
    td = /^.[^:#\[\.,]*$/,
    th = Array.prototype.slice,
    tf = M.expr.match.globalPOS,
    tp = { children: !0, contents: !0, next: !0, prev: !0 };
  M.fn.extend({
    find: function (t) {
      var e,
        n,
        i = this;
      if ("string" != typeof t)
        return M(t).filter(function () {
          for (e = 0, n = i.length; e < n; e++)
            if (M.contains(i[e], this)) return !0;
        });
      var o,
        r,
        s,
        a = this.pushStack("", "find", t);
      for (e = 0, n = this.length; e < n; e++)
        if (((o = a.length), M.find(t, this[e], a), e > 0)) {
          for (r = o; r < a.length; r++)
            for (s = 0; s < o; s++)
              if (a[s] === a[r]) {
                a.splice(r--, 1);
                break;
              }
        }
      return a;
    },
    has: function (t) {
      var e = M(t);
      return this.filter(function () {
        for (var t = 0, n = e.length; t < n; t++)
          if (M.contains(this, e[t])) return !0;
      });
    },
    not: function (t) {
      return this.pushStack(k(this, t, !1), "not", t);
    },
    filter: function (t) {
      return this.pushStack(k(this, t, !0), "filter", t);
    },
    is: function (t) {
      return (
        !!t &&
        ("string" == typeof t
          ? tf.test(t)
            ? M(t, this.context).index(this[0]) >= 0
            : M.filter(t, this).length > 0
          : this.filter(t).length > 0)
      );
    },
    closest: function (t, e) {
      var n,
        i,
        o = [],
        r = this[0];
      if (M.isArray(t)) {
        for (var s = 1; r && r.ownerDocument && r !== e; ) {
          for (n = 0; n < t.length; n++)
            M(r).is(t[n]) && o.push({ selector: t[n], elem: r, level: s });
          (r = r.parentNode), s++;
        }
        return o;
      }
      var a = tf.test(t) || "string" != typeof t ? M(t, e || this.context) : 0;
      for (n = 0, i = this.length; n < i; n++)
        for (r = this[n]; r; ) {
          if (a ? a.index(r) > -1 : M.find.matchesSelector(r, t)) {
            o.push(r);
            break;
          }
          if (
            !(r = r.parentNode) ||
            !r.ownerDocument ||
            r === e ||
            11 === r.nodeType
          )
            break;
        }
      return (
        (o = o.length > 1 ? M.unique(o) : o), this.pushStack(o, "closest", t)
      );
    },
    index: function (t) {
      return t
        ? "string" == typeof t
          ? M.inArray(this[0], M(t))
          : M.inArray(t.jquery ? t[0] : t, this)
        : this[0] && this[0].parentNode
        ? this.prevAll().length
        : -1;
    },
    add: function (t, e) {
      var n =
          "string" == typeof t
            ? M(t, e)
            : M.makeArray(t && t.nodeType ? [t] : t),
        i = M.merge(this.get(), n);
      return this.pushStack(E(n[0]) || E(i[0]) ? i : M.unique(i));
    },
    andSelf: function () {
      return this.add(this.prevObject);
    },
  }),
    M.each(
      {
        parent: function (t) {
          var e = t.parentNode;
          return e && 11 !== e.nodeType ? e : null;
        },
        parents: function (t) {
          return M.dir(t, "parentNode");
        },
        parentsUntil: function (t, e, n) {
          return M.dir(t, "parentNode", n);
        },
        next: function (t) {
          return M.nth(t, 2, "nextSibling");
        },
        prev: function (t) {
          return M.nth(t, 2, "previousSibling");
        },
        nextAll: function (t) {
          return M.dir(t, "nextSibling");
        },
        prevAll: function (t) {
          return M.dir(t, "previousSibling");
        },
        nextUntil: function (t, e, n) {
          return M.dir(t, "nextSibling", n);
        },
        prevUntil: function (t, e, n) {
          return M.dir(t, "previousSibling", n);
        },
        siblings: function (t) {
          return M.sibling((t.parentNode || {}).firstChild, t);
        },
        children: function (t) {
          return M.sibling(t.firstChild);
        },
        contents: function (t) {
          return M.nodeName(t, "iframe")
            ? t.contentDocument || t.contentWindow.document
            : M.makeArray(t.childNodes);
        },
      },
      function (t, e) {
        M.fn[t] = function (n, i) {
          var o = M.map(this, e, n);
          return (
            tl.test(t) || (i = n),
            i && "string" == typeof i && (o = M.filter(i, o)),
            (o = this.length > 1 && !tp[t] ? M.unique(o) : o),
            (this.length > 1 || tc.test(i)) && tu.test(t) && (o = o.reverse()),
            this.pushStack(o, t, th.call(arguments).join(","))
          );
        };
      }
    ),
    M.extend({
      filter: function (t, e, n) {
        return (
          n && (t = ":not(" + t + ")"),
          1 === e.length
            ? M.find.matchesSelector(e[0], t)
              ? [e[0]]
              : []
            : M.find.matches(t, e)
        );
      },
      dir: function (t, n, i) {
        for (
          var o = [], r = t[n];
          r && 9 !== r.nodeType && (i === e || 1 !== r.nodeType || !M(r).is(i));

        )
          1 === r.nodeType && o.push(r), (r = r[n]);
        return o;
      },
      nth: function (t, e, n, i) {
        e = e || 1;
        for (var o = 0; t && (1 !== t.nodeType || ++o !== e); t = t[n]);
        return t;
      },
      sibling: function (t, e) {
        for (var n = []; t; t = t.nextSibling)
          1 === t.nodeType && t !== e && n.push(t);
        return n;
      },
    });
  var tm =
      "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
    tv = / jQuery\d+="(?:\d+|null)"/g,
    tg = /^\s+/,
    t$ =
      /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    t_ = /<([\w:]+)/,
    ty = /<tbody/i,
    tb = /<|&#?\w+;/,
    tx = /<(?:script|style)/i,
    tw = /<(?:script|object|embed|option|style)/i,
    t0 = RegExp("<(?:" + tm + ")[\\s/>]", "i"),
    tC = /checked\s*(?:[^=]|=\s*.checked.)/i,
    tk = /\/(java|ecma)script/i,
    t8 = /^\s*<!(?:\[CDATA\[|\-\-)/,
    t3 = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      legend: [1, "<fieldset>", "</fieldset>"],
      thead: [1, "<table>", "</table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
      area: [1, "<map>", "</map>"],
      _default: [0, "", ""],
    },
    tE = C(D);
  (t3.optgroup = t3.option),
    (t3.tbody = t3.tfoot = t3.colgroup = t3.caption = t3.thead),
    (t3.th = t3.td),
    M.support.htmlSerialize || (t3._default = [1, "div<div>", "</div>"]),
    M.fn.extend({
      text: function (t) {
        return M.access(
          this,
          function (t) {
            return t === e
              ? M.text(this)
              : this.empty().append(
                  ((this[0] && this[0].ownerDocument) || D).createTextNode(t)
                );
          },
          null,
          t,
          arguments.length
        );
      },
      wrapAll: function (t) {
        if (M.isFunction(t))
          return this.each(function (e) {
            M(this).wrapAll(t.call(this, e));
          });
        if (this[0]) {
          var e = M(t, this[0].ownerDocument).eq(0).clone(!0);
          this[0].parentNode && e.insertBefore(this[0]),
            e
              .map(function () {
                for (
                  var t = this;
                  t.firstChild && 1 === t.firstChild.nodeType;

                )
                  t = t.firstChild;
                return t;
              })
              .append(this);
        }
        return this;
      },
      wrapInner: function (t) {
        return M.isFunction(t)
          ? this.each(function (e) {
              M(this).wrapInner(t.call(this, e));
            })
          : this.each(function () {
              var e = M(this),
                n = e.contents();
              n.length ? n.wrapAll(t) : e.append(t);
            });
      },
      wrap: function (t) {
        var e = M.isFunction(t);
        return this.each(function (n) {
          M(this).wrapAll(e ? t.call(this, n) : t);
        });
      },
      unwrap: function () {
        return this.parent()
          .each(function () {
            M.nodeName(this, "body") || M(this).replaceWith(this.childNodes);
          })
          .end();
      },
      append: function () {
        return this.domManip(arguments, !0, function (t) {
          1 === this.nodeType && this.appendChild(t);
        });
      },
      prepend: function () {
        return this.domManip(arguments, !0, function (t) {
          1 === this.nodeType && this.insertBefore(t, this.firstChild);
        });
      },
      before: function () {
        if (this[0] && this[0].parentNode)
          return this.domManip(arguments, !1, function (t) {
            this.parentNode.insertBefore(t, this);
          });
        if (arguments.length) {
          var t = M.clean(arguments);
          return (
            t.push.apply(t, this.toArray()),
            this.pushStack(t, "before", arguments)
          );
        }
      },
      after: function () {
        if (this[0] && this[0].parentNode)
          return this.domManip(arguments, !1, function (t) {
            this.parentNode.insertBefore(t, this.nextSibling);
          });
        if (arguments.length) {
          var t = this.pushStack(this, "after", arguments);
          return t.push.apply(t, M.clean(arguments)), t;
        }
      },
      remove: function (t, e) {
        for (var n, i = 0; null != (n = this[i]); i++)
          (!t || M.filter(t, [n]).length) &&
            (e ||
              1 !== n.nodeType ||
              (M.cleanData(n.getElementsByTagName("*")), M.cleanData([n])),
            n.parentNode && n.parentNode.removeChild(n));
        return this;
      },
      empty: function () {
        for (var t, e = 0; null != (t = this[e]); e++)
          for (
            1 === t.nodeType && M.cleanData(t.getElementsByTagName("*"));
            t.firstChild;

          )
            t.removeChild(t.firstChild);
        return this;
      },
      clone: function (t, e) {
        return (
          (t = null != t && t),
          (e = null == e ? t : e),
          this.map(function () {
            return M.clone(this, t, e);
          })
        );
      },
      html: function (t) {
        return M.access(
          this,
          function (t) {
            var n = this[0] || {},
              i = 0,
              o = this.length;
            if (t === e)
              return 1 === n.nodeType ? n.innerHTML.replace(tv, "") : null;
            if (
              "string" == typeof t &&
              !tx.test(t) &&
              (M.support.leadingWhitespace || !tg.test(t)) &&
              !t3[(t_.exec(t) || ["", ""])[1].toLowerCase()]
            ) {
              t = t.replace(t$, "<$1></$2>");
              try {
                for (; i < o; i++)
                  (n = this[i] || {}),
                    1 === n.nodeType &&
                      (M.cleanData(n.getElementsByTagName("*")),
                      (n.innerHTML = t));
                n = 0;
              } catch (r) {}
            }
            n && this.empty().append(t);
          },
          null,
          t,
          arguments.length
        );
      },
      replaceWith: function (t) {
        return this[0] && this[0].parentNode
          ? M.isFunction(t)
            ? this.each(function (e) {
                var n = M(this),
                  i = n.html();
                n.replaceWith(t.call(this, e, i));
              })
            : ("string" != typeof t && (t = M(t).detach()),
              this.each(function () {
                var e = this.nextSibling,
                  n = this.parentNode;
                M(this).remove(), e ? M(e).before(t) : M(n).append(t);
              }))
          : this.length
          ? this.pushStack(M(M.isFunction(t) ? t() : t), "replaceWith", t)
          : this;
      },
      detach: function (t) {
        return this.remove(t, !0);
      },
      domManip: function (t, n, i) {
        var o,
          r,
          s,
          a,
          l = t[0],
          u = [];
        if (
          !M.support.checkClone &&
          3 === arguments.length &&
          "string" == typeof l &&
          tC.test(l)
        )
          return this.each(function () {
            M(this).domManip(t, n, i, !0);
          });
        if (M.isFunction(l))
          return this.each(function (o) {
            var r = M(this);
            (t[0] = l.call(this, o, n ? r.html() : e)), r.domManip(t, n, i);
          });
        if (this[0]) {
          if (
            ((a = l && l.parentNode),
            (r =
              1 ===
              (s = (o =
                M.support.parentNode &&
                a &&
                11 === a.nodeType &&
                a.childNodes.length === this.length
                  ? { fragment: a }
                  : M.buildFragment(t, this, u)).fragment).childNodes.length
                ? (s = s.firstChild)
                : s.firstChild))
          ) {
            n = n && M.nodeName(r, "tr");
            for (var c = 0, d = this.length, h = d - 1; c < d; c++)
              i.call(
                n ? w(this[c], r) : this[c],
                o.cacheable || (d > 1 && c < h) ? M.clone(s, !0, !0) : s
              );
          }
          u.length &&
            M.each(u, function (t, e) {
              e.src
                ? M.ajax({
                    type: "GET",
                    global: !1,
                    url: e.src,
                    async: !1,
                    dataType: "script",
                  })
                : M.globalEval(
                    (e.text || e.textContent || e.innerHTML || "").replace(
                      t8,
                      "/*$0*/"
                    )
                  ),
                e.parentNode && e.parentNode.removeChild(e);
            });
        }
        return this;
      },
    }),
    (M.buildFragment = function (t, e, n) {
      var i,
        o,
        r,
        s,
        a = t[0];
      return (
        e && e[0] && (s = e[0].ownerDocument || e[0]),
        s.createDocumentFragment || (s = D),
        1 === t.length &&
          "string" == typeof a &&
          a.length < 512 &&
          s === D &&
          "<" === a.charAt(0) &&
          !tw.test(a) &&
          (M.support.checkClone || !tC.test(a)) &&
          (M.support.html5Clone || !t0.test(a)) &&
          ((o = !0), (r = M.fragments[a]) && 1 !== r && (i = r)),
        i || ((i = s.createDocumentFragment()), M.clean(t, s, i, n)),
        o && (M.fragments[a] = r ? i : 1),
        { fragment: i, cacheable: o }
      );
    }),
    (M.fragments = {}),
    M.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (t, e) {
        M.fn[t] = function (n) {
          var i = [],
            o = M(n),
            r = 1 === this.length && this[0].parentNode;
          if (
            r &&
            11 === r.nodeType &&
            1 === r.childNodes.length &&
            1 === o.length
          )
            return o[e](this[0]), this;
          for (var s = 0, a = o.length; s < a; s++) {
            var l = (s > 0 ? this.clone(!0) : this).get();
            M(o[s])[e](l), (i = i.concat(l));
          }
          return this.pushStack(i, t, o.selector);
        };
      }
    ),
    M.extend({
      clone: function (t, e, n) {
        var i,
          o,
          r,
          s =
            M.support.html5Clone ||
            M.isXMLDoc(t) ||
            !t0.test("<" + t.nodeName + ">")
              ? t.cloneNode(!0)
              : v(t);
        if (
          (!M.support.noCloneEvent || !M.support.noCloneChecked) &&
          (1 === t.nodeType || 11 === t.nodeType) &&
          !M.isXMLDoc(t)
        )
          for (b(t, s), i = y(t), o = y(s), r = 0; i[r]; ++r)
            o[r] && b(i[r], o[r]);
        if (e && (x(t, s), n))
          for (i = y(t), o = y(s), r = 0; i[r]; ++r) x(i[r], o[r]);
        return (i = o = null), s;
      },
      clean: function (t, e, n, i) {
        var o,
          r,
          s,
          a = [];
        void 0 === (e = e || D).createElement &&
          (e = e.ownerDocument || (e[0] && e[0].ownerDocument) || D);
        for (var l, u = 0; null != (l = t[u]); u++)
          if (("number" == typeof l && (l += ""), l)) {
            if ("string" == typeof l) {
              if (tb.test(l)) {
                l = l.replace(t$, "<$1></$2>");
                var c,
                  d,
                  h = (t_.exec(l) || ["", ""])[1].toLowerCase(),
                  f = t3[h] || t3._default,
                  p = f[0],
                  m = e.createElement("div"),
                  v = tE.childNodes;
                for (
                  e === D ? tE.appendChild(m) : C(e).appendChild(m),
                    m.innerHTML = f[1] + l + f[2];
                  p--;

                )
                  m = m.lastChild;
                if (!M.support.tbody) {
                  var _ = ty.test(l),
                    y =
                      "table" !== h || _
                        ? "<table>" !== f[1] || _
                          ? []
                          : m.childNodes
                        : m.firstChild && m.firstChild.childNodes;
                  for (s = y.length - 1; s >= 0; --s)
                    M.nodeName(y[s], "tbody") &&
                      !y[s].childNodes.length &&
                      y[s].parentNode.removeChild(y[s]);
                }
                !M.support.leadingWhitespace &&
                  tg.test(l) &&
                  m.insertBefore(e.createTextNode(tg.exec(l)[0]), m.firstChild),
                  (l = m.childNodes),
                  m &&
                    (m.parentNode.removeChild(m),
                    v.length > 0 &&
                      (d = v[v.length - 1]) &&
                      d.parentNode &&
                      d.parentNode.removeChild(d));
              } else l = e.createTextNode(l);
            }
            if (!M.support.appendChecked) {
              if (l[0] && "number" == typeof (c = l.length))
                for (s = 0; s < c; s++) g(l[s]);
              else g(l);
            }
            l.nodeType ? a.push(l) : (a = M.merge(a, l));
          }
        if (n)
          for (
            u = 0,
              o = function (t) {
                return !t.type || tk.test(t.type);
              };
            a[u];
            u++
          )
            if (
              ((r = a[u]),
              i && M.nodeName(r, "script") && (!r.type || tk.test(r.type)))
            )
              i.push(r.parentNode ? r.parentNode.removeChild(r) : r);
            else {
              if (1 === r.nodeType) {
                var b = M.grep(r.getElementsByTagName("script"), o);
                a.splice.apply(a, [u + 1, 0].concat(b));
              }
              n.appendChild(r);
            }
        return a;
      },
      cleanData: function (t) {
        for (
          var e,
            n,
            i,
            o = M.cache,
            r = M.event.special,
            s = M.support.deleteExpando,
            a = 0;
          null != (i = t[a]);
          a++
        )
          if (
            (!i.nodeName || !M.noData[i.nodeName.toLowerCase()]) &&
            (n = i[M.expando])
          ) {
            if ((e = o[n]) && e.events) {
              for (var l in e.events)
                r[l] ? M.event.remove(i, l) : M.removeEvent(i, l, e.handle);
              e.handle && (e.handle.elem = null);
            }
            s
              ? delete i[M.expando]
              : i.removeAttribute && i.removeAttribute(M.expando),
              delete o[n];
          }
      },
    });
  var tT,
    t1,
    tN,
    tS = /alpha\([^)]*\)/i,
    t9 = /opacity=([^)]*)/,
    tO = /([A-Z]|^ms)/g,
    t4 = /^[\-+]?(?:\d*\.)?\d+$/i,
    t2 = /^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i,
    tA = /^([\-+])=([\-+.\de]+)/,
    t6 = /^margin/,
    tj = { position: "absolute", visibility: "hidden", display: "block" },
    tD = ["Top", "Right", "Bottom", "Left"];
  (M.fn.css = function (t, n) {
    return M.access(
      this,
      function (t, n, i) {
        return i !== e ? M.style(t, n, i) : M.css(t, n);
      },
      t,
      n,
      arguments.length > 1
    );
  }),
    M.extend({
      cssHooks: {
        opacity: {
          get: function (t, e) {
            if (e) {
              var n = tT(t, "opacity");
              return "" === n ? "1" : n;
            }
            return t.style.opacity;
          },
        },
      },
      cssNumber: {
        fillOpacity: !0,
        fontWeight: !0,
        lineHeight: !0,
        opacity: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
      },
      cssProps: { float: M.support.cssFloat ? "cssFloat" : "styleFloat" },
      style: function (t, n, i, o) {
        if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
          var r,
            s,
            a = M.camelCase(n),
            l = t.style,
            u = M.cssHooks[a];
          if (((n = M.cssProps[a] || a), i === e))
            return u && "get" in u && (r = u.get(t, !1, o)) !== e ? r : l[n];
          if (
            ("string" == (s = typeof i) &&
              (r = tA.exec(i)) &&
              ((i = +(r[1] + 1) * +r[2] + parseFloat(M.css(t, n))),
              (s = "number")),
            !(null == i || ("number" === s && isNaN(i))) &&
              ("number" !== s || M.cssNumber[a] || (i += "px"),
              !u || !("set" in u) || (i = u.set(t, i)) !== e))
          )
            try {
              l[n] = i;
            } catch (c) {}
        }
      },
      css: function (t, n, i) {
        var o, r;
        return ((n = M.camelCase(n)),
        (r = M.cssHooks[n]),
        "cssFloat" === (n = M.cssProps[n] || n) && (n = "float"),
        r && "get" in r && (o = r.get(t, !0, i)) !== e)
          ? o
          : tT
          ? tT(t, n)
          : void 0;
      },
      swap: function (t, e, n) {
        var i,
          o,
          r = {};
        for (o in e) (r[o] = t.style[o]), (t.style[o] = e[o]);
        for (o in ((i = n.call(t)), e)) t.style[o] = r[o];
        return i;
      },
    }),
    (M.curCSS = M.css),
    D.defaultView &&
      D.defaultView.getComputedStyle &&
      (t1 = function (t, e) {
        var n,
          i,
          o,
          r,
          s = t.style;
        return (
          (e = e.replace(tO, "-$1").toLowerCase()),
          (i = t.ownerDocument.defaultView) &&
            (o = i.getComputedStyle(t, null)) &&
            "" === (n = o.getPropertyValue(e)) &&
            !M.contains(t.ownerDocument.documentElement, t) &&
            (n = M.style(t, e)),
          !M.support.pixelMargin &&
            o &&
            t6.test(e) &&
            t2.test(n) &&
            ((r = s.width), (s.width = n), (n = o.width), (s.width = r)),
          n
        );
      }),
    D.documentElement.currentStyle &&
      (tN = function (t, e) {
        var n,
          i,
          o,
          r = t.currentStyle && t.currentStyle[e],
          s = t.style;
        return (
          null == r && s && (o = s[e]) && (r = o),
          t2.test(r) &&
            ((n = s.left),
            (i = t.runtimeStyle && t.runtimeStyle.left) &&
              (t.runtimeStyle.left = t.currentStyle.left),
            (s.left = "fontSize" === e ? "1em" : r),
            (r = s.pixelLeft + "px"),
            (s.left = n),
            i && (t.runtimeStyle.left = i)),
          "" === r ? "auto" : r
        );
      }),
    (tT = t1 || tN),
    M.each(["height", "width"], function (t, e) {
      M.cssHooks[e] = {
        get: function (t, n, i) {
          if (n)
            return 0 !== t.offsetWidth
              ? m(t, e, i)
              : M.swap(t, tj, function () {
                  return m(t, e, i);
                });
        },
        set: function (t, e) {
          return t4.test(e) ? e + "px" : e;
        },
      };
    }),
    M.support.opacity ||
      (M.cssHooks.opacity = {
        get: function (t, e) {
          return t9.test(
            (e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || ""
          )
            ? parseFloat(RegExp.$1) / 100 + ""
            : e
            ? "1"
            : "";
        },
        set: function (t, e) {
          var n = t.style,
            i = t.currentStyle,
            o = M.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "",
            r = (i && i.filter) || n.filter || "";
          (n.zoom = 1),
            (!(e >= 1) ||
              "" !== M.trim(r.replace(tS, "")) ||
              (n.removeAttribute("filter"), !i || i.filter)) &&
              (n.filter = tS.test(r) ? r.replace(tS, o) : r + " " + o);
        },
      }),
    M(function () {
      M.support.reliableMarginRight ||
        (M.cssHooks.marginRight = {
          get: function (t, e) {
            return M.swap(t, { display: "inline-block" }, function () {
              return e ? tT(t, "margin-right") : t.style.marginRight;
            });
          },
        });
    }),
    M.expr &&
      M.expr.filters &&
      ((M.expr.filters.hidden = function (t) {
        var e = t.offsetWidth,
          n = t.offsetHeight;
        return (
          (0 === e && 0 === n) ||
          (!M.support.reliableHiddenOffsets &&
            "none" === ((t.style && t.style.display) || M.css(t, "display")))
        );
      }),
      (M.expr.filters.visible = function (t) {
        return !M.expr.filters.hidden(t);
      })),
    M.each({ margin: "", padding: "", border: "Width" }, function (t, e) {
      M.cssHooks[t + e] = {
        expand: function (n) {
          var i,
            o = "string" == typeof n ? n.split(" ") : [n],
            r = {};
          for (i = 0; i < 4; i++) r[t + tD[i] + e] = o[i] || o[i - 2] || o[0];
          return r;
        },
      };
    });
  var tL,
    t7,
    tI = /%20/g,
    t5 = /\[\]$/,
    tM = /\r?\n/g,
    tF = /#.*$/,
    tB = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
    tR =
      /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
    tH = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
    tP = /^(?:GET|HEAD)$/,
    tq = /^\/\//,
    tz = /\?/,
    tW = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
    tZ = /^(?:select|textarea)/i,
    tX = /\s+/,
    tU = /([?&])_=[^&]*/,
    tV = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,
    tY = M.fn.load,
    tK = {},
    tJ = {},
    tG = "*/*";
  try {
    tL = I.href;
  } catch (tQ) {
    ((tL = D.createElement("a")).href = ""), (tL = tL.href);
  }
  (t7 = tV.exec(tL.toLowerCase()) || []),
    M.fn.extend({
      load: function (t, n, i) {
        if ("string" != typeof t && tY) return tY.apply(this, arguments);
        if (!this.length) return this;
        var o = t.indexOf(" ");
        if (o >= 0) {
          var r = t.slice(o, t.length);
          t = t.slice(0, o);
        }
        var s = "GET";
        n &&
          (M.isFunction(n)
            ? ((i = n), (n = e))
            : "object" == typeof n &&
              ((n = M.param(n, M.ajaxSettings.traditional)), (s = "POST")));
        var a = this;
        return (
          M.ajax({
            url: t,
            type: s,
            dataType: "html",
            data: n,
            complete: function (t, e, n) {
              (n = t.responseText),
                t.iuresolved() &&
                  (t.done(function (t) {
                    n = t;
                  }),
                  a.html(r ? M("<div>").append(n.replace(tW, "")).find(r) : n)),
                i && a.each(i, [n, e, t]);
            },
          }),
          this
        );
      },
      serialize: function () {
        return M.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          return this.elements ? M.makeArray(this.elements) : this;
        })
          .filter(function () {
            return (
              this.name &&
              !this.disabled &&
              (this.checked || tZ.test(this.nodeName) || tR.test(this.type))
            );
          })
          .map(function (t, e) {
            var n = M(this).val();
            return null == n
              ? null
              : M.isArray(n)
              ? M.map(n, function (t, n) {
                  return { name: e.name, value: t.replace(tM, "\r\n") };
                })
              : { name: e.name, value: n.replace(tM, "\r\n") };
          })
          .get();
      },
    }),
    M.each(
      "ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(
        " "
      ),
      function (t, e) {
        M.fn[e] = function (t) {
          return this.on(e, t);
        };
      }
    ),
    M.each(["get", "post"], function (t, n) {
      M[n] = function (t, i, o, r) {
        return (
          M.isFunction(i) && ((r = r || o), (o = i), (i = e)),
          M.ajax({ type: n, url: t, data: i, success: o, dataType: r })
        );
      };
    }),
    M.extend({
      getScript: function (t, n) {
        return M.get(t, e, n, "script");
      },
      getJSON: function (t, e, n) {
        return M.get(t, e, n, "json");
      },
      ajaxSetup: function (t, e) {
        return (
          e ? h(t, M.ajaxSettings) : ((e = t), (t = M.ajaxSettings)), h(t, e), t
        );
      },
      ajaxSettings: {
        url: tL,
        isLocal: tH.test(t7[1]),
        global: !0,
        type: "GET",
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        processData: !0,
        async: !0,
        accepts: {
          xml: "application/xml, text/xml",
          html: "text/html",
          text: "text/plain",
          json: "application/json, text/javascript",
          "*": tG,
        },
        contents: { xml: /xml/, html: /html/, json: /json/ },
        responseFields: { xml: "responseXML", text: "responseText" },
        converters: {
          "* text": t.String,
          "text html": !0,
          "text json": M.parseJSON,
          "text xml": M.parseXML,
        },
        flatOptions: { context: !0, url: !0 },
      },
      ajaxPrefilter: p(tK),
      ajaxTransport: p(tJ),
      ajax: function (t, n) {
        function i(t, n, i, s) {
          if (2 !== C) {
            (C = 2),
              l && clearTimeout(l),
              (a = e),
              (r = s || ""),
              (k.readyState = t > 0 ? 4 : 0);
            var d,
              f,
              p,
              x,
              w,
              E = n,
              T = i ? c(m, k, i) : e;
            if ((t >= 200 && t < 300) || 304 === t) {
              if (
                (m.ifModified &&
                  ((x = k.getResponseHeader("Last-Modified")) &&
                    (M.lastModified[o] = x),
                  (w = k.getResponseHeader("Etag")) && (M.etag[o] = w)),
                304 === t)
              )
                (E = "notmodified"), (d = !0);
              else
                try {
                  (f = u(m, T)), (E = "success"), (d = !0);
                } catch (N) {
                  (E = "parsererror"), (p = N);
                }
            } else (p = E), (!E || t) && ((E = "error"), t < 0 && (t = 0));
            (k.status = t),
              (k.statusText = "" + (n || E)),
              d ? _.resolveWith(v, [f, E, k]) : _.rejectWith(v, [k, E, p]),
              k.statusCode(b),
              (b = e),
              h &&
                g.trigger("ajax" + (d ? "Success" : "Error"), [
                  k,
                  m,
                  d ? f : p,
                ]),
              y.fireWith(v, [k, E]),
              h &&
                (g.trigger("ajaxComplete", [k, m]),
                --M.active || M.event.trigger("ajaxStop"));
          }
        }
        "object" == typeof t && ((n = t), (t = e)), (n = n || {});
        var o,
          r,
          s,
          a,
          l,
          d,
          h,
          p,
          m = M.ajaxSetup({}, n),
          v = m.context || m,
          g = v !== m && (v.nodeType || v instanceof M) ? M(v) : M.event,
          _ = M.Deferred(),
          y = M.Callbacks("once memory"),
          b = m.statusCode || {},
          x = {},
          w = {},
          C = 0,
          k = {
            readyState: 0,
            setRequestHeader: function (t, e) {
              if (!C) {
                var n = t.toLowerCase();
                x[(t = w[n] = w[n] || t)] = e;
              }
              return this;
            },
            getAllResponseHeaders: function () {
              return 2 === C ? r : null;
            },
            getResponseHeader: function (t) {
              var n;
              if (2 === C) {
                if (!s)
                  for (s = {}; (n = tB.exec(r)); ) s[n[1].toLowerCase()] = n[2];
                n = s[t.toLowerCase()];
              }
              return n === e ? null : n;
            },
            overrideMimeType: function (t) {
              return C || (m.mimeType = t), this;
            },
            abort: function (t) {
              return (t = t || "abort"), a && a.abort(t), i(0, t), this;
            },
          };
        if (
          (_.promise(k),
          (k.success = k.done),
          (k.error = k.fail),
          (k.complete = y.add),
          (k.statusCode = function (t) {
            if (t) {
              var e;
              if (C < 2) for (e in t) b[e] = [b[e], t[e]];
              else (e = t[k.status]), k.then(e, e);
            }
            return this;
          }),
          (m.url = ((t || m.url) + "")
            .replace(tF, "")
            .replace(tq, t7[1] + "//")),
          (m.dataTypes = M.trim(m.dataType || "*")
            .toLowerCase()
            .split(tX)),
          null == m.crossDomain &&
            ((d = tV.exec(m.url.toLowerCase())),
            (m.crossDomain = !(
              !d ||
              (d[1] == t7[1] &&
                d[2] == t7[2] &&
                (d[3] || ("http:" === d[1] ? 80 : 443)) ==
                  (t7[3] || ("http:" === t7[1] ? 80 : 443)))
            ))),
          m.data &&
            m.processData &&
            "string" != typeof m.data &&
            (m.data = M.param(m.data, m.traditional)),
          f(tK, m, n, k),
          2 === C)
        )
          return !1;
        if (
          ((h = m.global),
          (m.type = m.type.toUpperCase()),
          (m.hasContent = !tP.test(m.type)),
          h && 0 == M.active++ && M.event.trigger("ajaxStart"),
          !m.hasContent &&
            (m.data &&
              ((m.url += (tz.test(m.url) ? "&" : "?") + m.data), delete m.data),
            (o = m.url),
            !1 === m.cache))
        ) {
          var E = M.now(),
            T = m.url.replace(tU, "$1_=" + E);
          m.url =
            T + (T === m.url ? (tz.test(m.url) ? "&" : "?") + "_=" + E : "");
        }
        for (p in (((m.data && m.hasContent && !1 !== m.contentType) ||
          n.contentType) &&
          k.setRequestHeader("Content-Type", m.contentType),
        m.ifModified &&
          ((o = o || m.url),
          M.lastModified[o] &&
            k.setRequestHeader("If-Modified-Since", M.lastModified[o]),
          M.etag[o] && k.setRequestHeader("If-None-Match", M.etag[o])),
        k.setRequestHeader(
          "Accept",
          m.dataTypes[0] && m.accepts[m.dataTypes[0]]
            ? m.accepts[m.dataTypes[0]] +
                ("*" !== m.dataTypes[0] ? ", " + tG + "; q=0.01" : "")
            : m.accepts["*"]
        ),
        m.headers))
          k.setRequestHeader(p, m.headers[p]);
        if (m.beforeSend && (!1 === m.beforeSend.call(v, k, m) || 2 === C))
          return k.abort(), !1;
        for (p in { success: 1, error: 1, complete: 1 }) k[p](m[p]);
        if ((a = f(tJ, m, n, k))) {
          (k.readyState = 1),
            h && g.trigger("ajaxSend", [k, m]),
            m.async &&
              m.timeout > 0 &&
              (l = setTimeout(function () {
                k.abort("timeout");
              }, m.timeout));
          try {
            (C = 1), a.send(x, i);
          } catch (N) {
            if (C < 2) i(-1, N);
            else throw N;
          }
        } else i(-1, "No Transport");
        return k;
      },
      param: function (t, n) {
        var i = [],
          o = function (t, e) {
            (e = M.isFunction(e) ? e() : e),
              (i[i.length] =
                encodeURIComponent(t) + "=" + encodeURIComponent(e));
          };
        if (
          (n === e && (n = M.ajaxSettings.traditional),
          M.isArray(t) || (t.jquery && !M.isPlainObject(t)))
        )
          M.each(t, function () {
            o(this.name, this.value);
          });
        else for (var r in t) d(r, t[r], n, o);
        return i.join("&").replace(tI, "+");
      },
    }),
    M.extend({ active: 0, lastModified: {}, etag: {} });
  var et = M.now(),
    ee = /(\=)\?(&|$)|\?\?/i;
  M.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      return M.expando + "_" + et++;
    },
  }),
    M.ajaxPrefilter("json jsonp", function (e, n, i) {
      var o =
        "string" == typeof e.data &&
        /^application\/x\-www\-form\-urlencoded/.test(e.contentType);
      if (
        "jsonp" === e.dataTypes[0] ||
        (!1 !== e.jsonp && (ee.test(e.url) || (o && ee.test(e.data))))
      ) {
        var r,
          s = (e.jsonpCallback = M.isFunction(e.jsonpCallback)
            ? e.jsonpCallback()
            : e.jsonpCallback),
          a = t[s],
          l = e.url,
          u = e.data,
          c = "$1" + s + "$2";
        return (
          !1 !== e.jsonp &&
            ((l = l.replace(ee, c)),
            e.url === l &&
              (o && (u = u.replace(ee, c)),
              e.data === u &&
                (l += (/\?/.test(l) ? "&" : "?") + e.jsonp + "=" + s))),
          (e.url = l),
          (e.data = u),
          (t[s] = function (t) {
            r = [t];
          }),
          i.always(function () {
            (t[s] = a), r && M.isFunction(a) && t[s](r[0]);
          }),
          (e.converters["script json"] = function () {
            return r || M.error(s + " was not called"), r[0];
          }),
          (e.dataTypes[0] = "json"),
          "script"
        );
      }
    }),
    M.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /javascript|ecmascript/ },
      converters: {
        "text script": function (t) {
          return M.globalEval(t), t;
        },
      },
    }),
    M.ajaxPrefilter("script", function (t) {
      t.cache === e && (t.cache = !1),
        t.crossDomain && ((t.type = "GET"), (t.global = !1));
    }),
    M.ajaxTransport("script", function (t) {
      if (t.crossDomain) {
        var n,
          i = D.head || D.getElementsByTagName("head")[0] || D.documentElement;
        return {
          send: function (o, r) {
            ((n = D.createElement("script")).async = "async"),
              t.scriptCharset && (n.charset = t.scriptCharset),
              (n.src = t.url),
              (n.onload = n.onreadystatechange =
                function (t, o) {
                  (o ||
                    !n.readyState ||
                    /loaded|complete/.test(n.readyState)) &&
                    ((n.onload = n.onreadystatechange = null),
                    i && n.parentNode && i.removeChild(n),
                    (n = e),
                    o || r(200, "success"));
                }),
              i.insertBefore(n, i.firstChild);
          },
          abort: function () {
            n && n.onload(0, 1);
          },
        };
      }
    });
  var en,
    ei,
    eo =
      !!t.ActiveXObject &&
      function () {
        for (var t in en) en[t](0, 1);
      },
    er = 0;
  (M.ajaxSettings.xhr = t.ActiveXObject
    ? function () {
        return (!this.isLocal && l()) || a();
      }
    : l),
    (ei = M.ajaxSettings.xhr()),
    M.extend(M.support, { ajax: !!ei, cors: !!ei && "withCredentials" in ei }),
    M.support.ajax &&
      M.ajaxTransport(function (n) {
        if (!n.crossDomain || M.support.cors) {
          var i;
          return {
            send: function (o, r) {
              var s,
                a,
                l = n.xhr();
              if (
                (n.username
                  ? l.open(n.type, n.url, n.async, n.username, n.password)
                  : l.open(n.type, n.url, n.async),
                n.xhrFields)
              )
                for (a in n.xhrFields) l[a] = n.xhrFields[a];
              n.mimeType &&
                l.overrideMimeType &&
                l.overrideMimeType(n.mimeType),
                n.crossDomain ||
                  o["X-Requested-With"] ||
                  (o["X-Requested-With"] = "XMLHttpRequest");
              try {
                for (a in o) l.setRequestHeader(a, o[a]);
              } catch (u) {}
              l.send((n.hasContent && n.data) || null),
                (i = function (t, o) {
                  var a, u, c, d, h;
                  try {
                    if (i && (o || 4 === l.readyState)) {
                      if (
                        ((i = e),
                        s &&
                          ((l.onreadystatechange = M.noop), eo && delete en[s]),
                        o)
                      )
                        4 !== l.readyState && l.abort();
                      else {
                        (a = l.status),
                          (c = l.getAllResponseHeaders()),
                          (d = {}),
                          (h = l.responseXML) &&
                            h.documentElement &&
                            (d.xml = h);
                        try {
                          d.text = l.responseText;
                        } catch (f) {}
                        try {
                          u = l.statusText;
                        } catch (p) {
                          u = "";
                        }
                        a || !n.isLocal || n.crossDomain
                          ? 1223 === a && (a = 204)
                          : (a = d.text ? 200 : 404);
                      }
                    }
                  } catch (m) {
                    o || r(-1, m);
                  }
                  d && r(a, u, d, c);
                }),
                n.async && 4 !== l.readyState
                  ? ((s = ++er),
                    eo && (en || ((en = {}), M(t).unload(eo)), (en[s] = i)),
                    (l.onreadystatechange = i))
                  : i();
            },
            abort: function () {
              i && i(0, 1);
            },
          };
        }
      });
  var es,
    ea,
    el,
    eu,
    ec = {},
    ed = /^(?:toggle|show|hide)$/,
    eh = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
    ef = [
      ["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"],
      ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"],
      ["opacity"],
    ];
  M.fn.extend({
    show: function (t, e, n) {
      var r, s;
      if (t || 0 === t) return this.animate(o("show", 3), t, e, n);
      for (var a = 0, l = this.length; a < l; a++)
        (r = this[a]).style &&
          ((s = r.style.display),
          M._data(r, "olddisplay") ||
            "none" !== s ||
            (s = r.style.display = ""),
          (("" !== s || "none" !== M.css(r, "display")) &&
            M.contains(r.ownerDocument.documentElement, r)) ||
            M._data(r, "olddisplay", i(r.nodeName)));
      for (a = 0; a < l; a++)
        (r = this[a]).style &&
          ("" === (s = r.style.display) || "none" === s) &&
          (r.style.display = M._data(r, "olddisplay") || "");
      return this;
    },
    hide: function (t, e, n) {
      if (t || 0 === t) return this.animate(o("hide", 3), t, e, n);
      for (var i, r, s = 0, a = this.length; s < a; s++)
        (i = this[s]).style &&
          "none" !== (r = M.css(i, "display")) &&
          !M._data(i, "olddisplay") &&
          M._data(i, "olddisplay", r);
      for (s = 0; s < a; s++) this[s].style && (this[s].style.display = "none");
      return this;
    },
    _toggle: M.fn.toggle,
    toggle: function (t, e, n) {
      var i = "boolean" == typeof t;
      return (
        M.isFunction(t) && M.isFunction(e)
          ? this._toggle.apply(this, arguments)
          : null == t || i
          ? this.each(function () {
              var e = i ? t : M(this).is(":hidden");
              M(this)[e ? "show" : "hide"]();
            })
          : this.animate(o("toggle", 3), t, e, n),
        this
      );
    },
    fadeTo: function (t, e, n, i) {
      return this.filter(":hidden")
        .css("opacity", 0)
        .show()
        .end()
        .animate({ opacity: e }, t, n, i);
    },
    animate: function (t, e, n, o) {
      function r() {
        !1 === s.queue && M._mark(this);
        var e,
          n,
          o,
          r,
          a,
          l,
          u,
          c,
          d,
          h,
          f,
          p = M.extend({}, s),
          m = 1 === this.nodeType,
          v = m && M(this).is(":hidden");
        for (o in ((p.animatedProperties = {}), t))
          if (
            ((e = M.camelCase(o)),
            o !== e && ((t[e] = t[o]), delete t[o]),
            (a = M.cssHooks[e]) && "expand" in a)
          )
            for (o in ((l = a.expand(t[e])), delete t[e], l))
              o in t || (t[o] = l[o]);
        for (e in t) {
          if (
            ((n = t[e]),
            M.isArray(n)
              ? ((p.animatedProperties[e] = n[1]), (n = t[e] = n[0]))
              : (p.animatedProperties[e] =
                  (p.specialEasing && p.specialEasing[e]) ||
                  p.easing ||
                  "swing"),
            ("hide" === n && v) || ("show" === n && !v))
          )
            return p.complete.call(this);
          m &&
            ("height" === e || "width" === e) &&
            ((p.overflow = [
              this.style.overflow,
              this.style.overflowX,
              this.style.overflowY,
            ]),
            "inline" === M.css(this, "display") &&
              "none" === M.css(this, "float") &&
              (M.support.inlineBlockNeedsLayout && "inline" !== i(this.nodeName)
                ? (this.style.zoom = 1)
                : (this.style.display = "inline-block")));
        }
        for (o in (null != p.overflow && (this.style.overflow = "hidden"), t))
          (r = new M.fx(this, p, o)),
            (n = t[o]),
            ed.test(n)
              ? (f =
                  M._data(this, "toggle" + o) ||
                  ("toggle" === n ? (v ? "show" : "hide") : 0))
                ? (M._data(this, "toggle" + o, "show" === f ? "hide" : "show"),
                  r[f]())
                : r[n]()
              : ((u = eh.exec(n)),
                (c = r.cur()),
                u
                  ? ((d = parseFloat(u[2])),
                    "px" !== (h = u[3] || (M.cssNumber[o] ? "" : "px")) &&
                      (M.style(this, o, (d || 1) + h),
                      (c = ((d || 1) / r.cur()) * c),
                      M.style(this, o, c + h)),
                    u[1] && (d = ("-=" === u[1] ? -1 : 1) * d + c),
                    r.custom(c, d, h))
                  : r.custom(c, n, ""));
        return !0;
      }
      var s = M.speed(e, n, o);
      return M.isEmptyObject(t)
        ? this.each(s.complete, [!1])
        : ((t = M.extend({}, t)),
          !1 === s.queue ? this.each(r) : this.queue(s.queue, r));
    },
    stop: function (t, n, i) {
      return (
        "string" != typeof t && ((i = n), (n = t), (t = e)),
        n && !1 !== t && this.queue(t || "fx", []),
        this.each(function () {
          function e(t, e, n) {
            var o = e[n];
            M.removeData(t, n, !0), o.stop(i);
          }
          var n,
            o = !1,
            r = M.timers,
            s = M._data(this);
          if ((i || M._unmark(!0, this), null == t))
            for (n in s)
              s[n] &&
                s[n].stop &&
                n.indexOf(".run") === n.length - 4 &&
                e(this, s, n);
          else s[(n = t + ".run")] && s[n].stop && e(this, s, n);
          for (n = r.length; n--; )
            r[n].elem === this &&
              (null == t || r[n].queue === t) &&
              (i ? r[n](!0) : r[n].saveState(), (o = !0), r.splice(n, 1));
          (i && o) || M.dequeue(this, t);
        })
      );
    },
  }),
    M.each(
      {
        slideDown: o("show", 1),
        slideUp: o("hide", 1),
        slideToggle: o("toggle", 1),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (t, e) {
        M.fn[t] = function (t, n, i) {
          return this.animate(e, t, n, i);
        };
      }
    ),
    M.extend({
      speed: function (t, e, n) {
        var i =
          t && "object" == typeof t
            ? M.extend({}, t)
            : {
                complete: n || (!n && e) || (M.isFunction(t) && t),
                duration: t,
                easing: (n && e) || (e && !M.isFunction(e) && e),
              };
        return (
          (i.duration = M.fx.off
            ? 0
            : "number" == typeof i.duration
            ? i.duration
            : i.duration in M.fx.speeds
            ? M.fx.speeds[i.duration]
            : M.fx.speeds._default),
          (null == i.queue || !0 === i.queue) && (i.queue = "fx"),
          (i.old = i.complete),
          (i.complete = function (t) {
            M.isFunction(i.old) && i.old.call(this),
              i.queue ? M.dequeue(this, i.queue) : !1 !== t && M._unmark(this);
          }),
          i
        );
      },
      easing: {
        linear: function (t) {
          return t;
        },
        swing: function (t) {
          return -Math.cos(t * Math.PI) / 2 + 0.5;
        },
      },
      timers: [],
      fx: function (t, e, n) {
        (this.options = e),
          (this.elem = t),
          (this.prop = n),
          (e.orig = e.orig || {});
      },
    }),
    (M.fx.prototype = {
      update: function () {
        this.options.step && this.options.step.call(this.elem, this.now, this),
          (M.fx.step[this.prop] || M.fx.step._default)(this);
      },
      cur: function () {
        if (
          null != this.elem[this.prop] &&
          (!this.elem.style || null == this.elem.style[this.prop])
        )
          return this.elem[this.prop];
        var t,
          e = M.css(this.elem, this.prop);
        return isNaN((t = parseFloat(e))) ? (e && "auto" !== e ? e : 0) : t;
      },
      custom: function (t, n, i) {
        function o(t) {
          return r.step(t);
        }
        var r = this,
          a = M.fx;
        (this.startTime = eu || s()),
          (this.end = n),
          (this.now = this.start = t),
          (this.pos = this.state = 0),
          (this.unit = i || this.unit || (M.cssNumber[this.prop] ? "" : "px")),
          (o.queue = this.options.queue),
          (o.elem = this.elem),
          (o.saveState = function () {
            M._data(r.elem, "fxshow" + r.prop) === e &&
              (r.options.hide
                ? M._data(r.elem, "fxshow" + r.prop, r.start)
                : r.options.show && M._data(r.elem, "fxshow" + r.prop, r.end));
          }),
          o() &&
            M.timers.push(o) &&
            !el &&
            (el = setInterval(a.tick, a.interval));
      },
      show: function () {
        var t = M._data(this.elem, "fxshow" + this.prop);
        (this.options.orig[this.prop] = t || M.style(this.elem, this.prop)),
          (this.options.show = !0),
          t !== e
            ? this.custom(this.cur(), t)
            : this.custom(
                "width" === this.prop || "height" === this.prop ? 1 : 0,
                this.cur()
              ),
          M(this.elem).show();
      },
      hide: function () {
        (this.options.orig[this.prop] =
          M._data(this.elem, "fxshow" + this.prop) ||
          M.style(this.elem, this.prop)),
          (this.options.hide = !0),
          this.custom(this.cur(), 0);
      },
      step: function (t) {
        var e,
          n,
          i,
          o = eu || s(),
          r = !0,
          a = this.elem,
          l = this.options;
        if (t || o >= l.duration + this.startTime) {
          for (e in ((this.now = this.end),
          (this.pos = this.state = 1),
          this.update(),
          (l.animatedProperties[this.prop] = !0),
          l.animatedProperties))
            !0 !== l.animatedProperties[e] && (r = !1);
          if (r) {
            if (
              (null == l.overflow ||
                M.support.shrinkWrapBlocks ||
                M.each(["", "X", "Y"], function (t, e) {
                  a.style["overflow" + e] = l.overflow[t];
                }),
              l.hide && M(a).hide(),
              l.hide || l.show)
            )
              for (e in l.animatedProperties)
                M.style(a, e, l.orig[e]),
                  M.removeData(a, "fxshow" + e, !0),
                  M.removeData(a, "toggle" + e, !0);
            (i = l.complete) && ((l.complete = !1), i.call(a));
          }
          return !1;
        }
        return (
          l.duration == 1 / 0
            ? (this.now = o)
            : ((n = o - this.startTime),
              (this.state = n / l.duration),
              (this.pos = M.easing[l.animatedProperties[this.prop]](
                this.state,
                n,
                0,
                1,
                l.duration
              )),
              (this.now = this.start + (this.end - this.start) * this.pos)),
          this.update(),
          !0
        );
      },
    }),
    M.extend(M.fx, {
      tick: function () {
        for (var t, e = M.timers, n = 0; n < e.length; n++)
          (t = e[n])() || e[n] !== t || e.splice(n--, 1);
        e.length || M.fx.stop();
      },
      interval: 13,
      stop: function () {
        clearInterval(el), (el = null);
      },
      speeds: { slow: 600, fast: 200, _default: 400 },
      step: {
        opacity: function (t) {
          M.style(t.elem, "opacity", t.now);
        },
        _default: function (t) {
          t.elem.style && null != t.elem.style[t.prop]
            ? (t.elem.style[t.prop] = t.now + t.unit)
            : (t.elem[t.prop] = t.now);
        },
      },
    }),
    M.each(ef.concat.apply([], ef), function (t, e) {
      e.indexOf("margin") &&
        (M.fx.step[e] = function (t) {
          M.style(t.elem, e, Math.max(0, t.now) + t.unit);
        });
    }),
    M.expr &&
      M.expr.filters &&
      (M.expr.filters.animated = function (t) {
        return M.grep(M.timers, function (e) {
          return t === e.elem;
        }).length;
      });
  var ep,
    em = /^t(?:able|d|h)$/i,
    ev = /^(?:body|html)$/i;
  (ep =
    "getBoundingClientRect" in D.documentElement
      ? function (t, e, i, o) {
          try {
            o = t.getBoundingClientRect();
          } catch (r) {}
          if (!o || !M.contains(i, t))
            return o ? { top: o.top, left: o.left } : { top: 0, left: 0 };
          var s,
            a = e.body,
            l = n(e),
            u = i.clientTop || a.clientTop || 0,
            c = i.clientLeft || a.clientLeft || 0,
            d =
              l.pageYOffset ||
              (M.support.boxModel && i.scrollTop) ||
              a.scrollTop,
            h =
              l.pageXOffset ||
              (M.support.boxModel && i.scrollLeft) ||
              a.scrollLeft;
          return { top: o.top + d - u, left: o.left + h - c };
        }
      : function (t, e, n) {
          for (
            var i,
              o = t.offsetParent,
              r = t,
              s = e.body,
              a = e.defaultView,
              l = a ? a.getComputedStyle(t, null) : t.currentStyle,
              u = t.offsetTop,
              c = t.offsetLeft;
            (t = t.parentNode) &&
            t !== s &&
            t !== n &&
            (!M.support.fixedPosition || "fixed" !== l.position);

          )
            (i = a ? a.getComputedStyle(t, null) : t.currentStyle),
              (u -= t.scrollTop),
              (c -= t.scrollLeft),
              t === o &&
                ((u += t.offsetTop),
                (c += t.offsetLeft),
                !M.support.doesNotAddBorder ||
                  (M.support.doesAddBorderForTableAndCells &&
                    em.test(t.nodeName)) ||
                  ((u += parseFloat(i.borderTopWidth) || 0),
                  (c += parseFloat(i.borderLeftWidth) || 0)),
                (r = o),
                (o = t.offsetParent)),
              M.support.subtractsBorderForOverflowNotVisible &&
                "visible" !== i.overflow &&
                ((u += parseFloat(i.borderTopWidth) || 0),
                (c += parseFloat(i.borderLeftWidth) || 0)),
              (l = i);
          return (
            ("relative" === l.position || "static" === l.position) &&
              ((u += s.offsetTop), (c += s.offsetLeft)),
            M.support.fixedPosition &&
              "fixed" === l.position &&
              ((u += Math.max(n.scrollTop, s.scrollTop)),
              (c += Math.max(n.scrollLeft, s.scrollLeft))),
            { top: u, left: c }
          );
        }),
    (M.fn.offset = function (t) {
      if (arguments.length)
        return t === e
          ? this
          : this.each(function (e) {
              M.offset.setOffset(this, t, e);
            });
      var n = this[0],
        i = n && n.ownerDocument;
      return i
        ? n === i.body
          ? M.offset.bodyOffset(n)
          : ep(n, i, i.documentElement)
        : null;
    }),
    (M.offset = {
      bodyOffset: function (t) {
        var e = t.offsetTop,
          n = t.offsetLeft;
        return (
          M.support.doesNotIncludeMarginInBodyOffset &&
            ((e += parseFloat(M.css(t, "marginTop")) || 0),
            (n += parseFloat(M.css(t, "marginLeft")) || 0)),
          { top: e, left: n }
        );
      },
      setOffset: function (t, e, n) {
        var i = M.css(t, "position");
        "static" === i && (t.style.position = "relative");
        var o,
          r,
          s = M(t),
          a = s.offset(),
          l = M.css(t, "top"),
          u = M.css(t, "left"),
          c =
            ("absolute" === i || "fixed" === i) &&
            M.inArray("auto", [l, u]) > -1,
          d = {},
          h = {};
        c
          ? ((o = (h = s.position()).top), (r = h.left))
          : ((o = parseFloat(l) || 0), (r = parseFloat(u) || 0)),
          M.isFunction(e) && (e = e.call(t, n, a)),
          null != e.top && (d.top = e.top - a.top + o),
          null != e.left && (d.left = e.left - a.left + r),
          "using" in e ? e.using.call(t, d) : s.css(d);
      },
    }),
    M.fn.extend({
      position: function () {
        if (!this[0]) return null;
        var t = this[0],
          e = this.offsetParent(),
          n = this.offset(),
          i = ev.test(e[0].nodeName) ? { top: 0, left: 0 } : e.offset();
        return (
          (n.top -= parseFloat(M.css(t, "marginTop")) || 0),
          (n.left -= parseFloat(M.css(t, "marginLeft")) || 0),
          (i.top += parseFloat(M.css(e[0], "borderTopWidth")) || 0),
          (i.left += parseFloat(M.css(e[0], "borderLeftWidth")) || 0),
          { top: n.top - i.top, left: n.left - i.left }
        );
      },
      offsetParent: function () {
        return this.map(function () {
          for (
            var t = this.offsetParent || D.body;
            t && !ev.test(t.nodeName) && "static" === M.css(t, "position");

          )
            t = t.offsetParent;
          return t;
        });
      },
    }),
    M.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (t, i) {
        var o = /Y/.test(i);
        M.fn[t] = function (r) {
          return M.access(
            this,
            function (t, r, s) {
              var a = n(t);
              if (s === e)
                return a
                  ? i in a
                    ? a[i]
                    : (M.support.boxModel && a.document.documentElement[r]) ||
                      a.document.body[r]
                  : t[r];
              a
                ? a.scrollTo(
                    o ? M(a).scrollLeft() : s,
                    o ? s : M(a).scrollTop()
                  )
                : (t[r] = s);
            },
            t,
            r,
            arguments.length,
            null
          );
        };
      }
    ),
    M.each({ Height: "height", Width: "width" }, function (t, n) {
      var i = "client" + t,
        o = "scroll" + t,
        r = "offset" + t;
      (M.fn["inner" + t] = function () {
        var t = this[0];
        return t
          ? t.style
            ? parseFloat(M.css(t, n, "padding"))
            : this[n]()
          : null;
      }),
        (M.fn["outer" + t] = function (t) {
          var e = this[0];
          return e
            ? e.style
              ? parseFloat(M.css(e, n, t ? "margin" : "border"))
              : this[n]()
            : null;
        }),
        (M.fn[n] = function (t) {
          return M.access(
            this,
            function (t, n, s) {
              var a, l, u, c;
              return M.isWindow(t)
                ? ((l = (a = t.document).documentElement[i]),
                  (M.support.boxModel && l) || (a.body && a.body[i]) || l)
                : 9 === t.nodeType
                ? (a = t.documentElement)[i] >= a[o]
                  ? a[i]
                  : Math.max(t.body[o], a[o], t.body[r], a[r])
                : s === e
                ? ((c = parseFloat((u = M.css(t, n)))), M.isNumeric(c) ? c : u)
                : void M(t).css(n, s);
            },
            n,
            t,
            arguments.length,
            null
          );
        });
    }),
    (t.jQuery = t.$ = M),
    "function" == typeof define &&
      define.amd &&
      define.amd.jQuery &&
      define("jquery", [], function () {
        return M;
      });
})(window),
  (function (t, e) {
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = e())
      : "function" == typeof define && define.amd
      ? define(e)
      : ((t = "undefined" != typeof globalThis ? globalThis : t || self).mdui =
          e());
  })(this, function () {
    "use strict";
    function t(t, e) {
      e = e || { bubbles: !1, cancelable: !1, detail: void 0 };
      var n = document.createEvent("CustomEvent");
      return n.initCustomEvent(t, e.bubbles, e.cancelable, e.detail), n;
    }
    function e(t) {
      var e = this.constructor;
      return this.then(
        function (n) {
          return e.resolve(t()).then(function () {
            return n;
          });
        },
        function (n) {
          return e.resolve(t()).then(function () {
            return e.reject(n);
          });
        }
      );
    }
    function n(t) {
      return new this(function (e, n) {
        if (!t || void 0 === t.length)
          return n(
            TypeError(
              typeof t +
                " " +
                t +
                " is not iterable(cannot read property Symbol(Symbol.iterator))"
            )
          );
        var i = Array.prototype.slice.call(t);
        if (0 === i.length) return e([]);
        var o = i.length;
        function r(t, n) {
          if (n && ("object" == typeof n || "function" == typeof n)) {
            var s = n.then;
            if ("function" == typeof s)
              return void s.call(
                n,
                function (e) {
                  r(t, e);
                },
                function (n) {
                  (i[t] = { status: "rejected", reason: n }), 0 == --o && e(i);
                }
              );
          }
          (i[t] = { status: "fulfilled", value: n }), 0 == --o && e(i);
        }
        for (var s = 0; s < i.length; s++) r(s, i[s]);
      });
    }
    (function () {
      try {
        return new MouseEvent("test");
      } catch (t) {}
      function e(t, e) {
        e = e || { bubbles: !1, cancelable: !1 };
        var n = document.createEvent("MouseEvent");
        return (
          n.initMouseEvent(
            t,
            e.bubbles,
            e.cancelable,
            window,
            0,
            e.screenX || 0,
            e.screenY || 0,
            e.clientX || 0,
            e.clientY || 0,
            e.ctrlKey || !1,
            e.altKey || !1,
            e.shiftKey || !1,
            e.metaKey || !1,
            e.button || 0,
            e.relatedTarget || null
          ),
          n
        );
      }
      (e.prototype = Event.prototype), (window.MouseEvent = e);
    })(),
      "function" != typeof window.CustomEvent &&
        ((t.prototype = window.Event.prototype), (window.CustomEvent = t));
    var i = setTimeout;
    function o(t) {
      return Boolean(t && void 0 !== t.length);
    }
    function r() {}
    function s(t) {
      if (!(this instanceof s))
        throw TypeError("Promises must be constructed via new");
      if ("function" != typeof t) throw TypeError("not a function");
      (this._state = 0),
        (this._handled = !1),
        (this._value = void 0),
        (this._deferreds = []),
        h(t, this);
    }
    function a(t, e) {
      for (; 3 === t._state; ) t = t._value;
      0 !== t._state
        ? ((t._handled = !0),
          s._immediateFn(function () {
            var n,
              i = 1 === t._state ? e.onFulfilled : e.onRejected;
            if (null !== i) {
              try {
                n = i(t._value);
              } catch (o) {
                return void u(e.promise, o);
              }
              l(e.promise, n);
            } else (1 === t._state ? l : u)(e.promise, t._value);
          }))
        : t._deferreds.push(e);
    }
    function l(t, e) {
      try {
        if (e === t)
          throw TypeError("A promise cannot be resolved with itself.");
        if (e && ("object" == typeof e || "function" == typeof e)) {
          var n,
            i,
            o = e.then;
          if (e instanceof s) return (t._state = 3), (t._value = e), void c(t);
          if ("function" == typeof o)
            return void h(
              ((n = o),
              (i = e),
              function () {
                n.apply(i, arguments);
              }),
              t
            );
        }
        (t._state = 1), (t._value = e), c(t);
      } catch (r) {
        u(t, r);
      }
    }
    function u(t, e) {
      (t._state = 2), (t._value = e), c(t);
    }
    function c(t) {
      2 === t._state &&
        0 === t._deferreds.length &&
        s._immediateFn(function () {
          t._handled || s._unhandledRejectionFn(t._value);
        });
      for (var e = 0, n = t._deferreds.length; e < n; e++)
        a(t, t._deferreds[e]);
      t._deferreds = null;
    }
    function d(t, e, n) {
      (this.onFulfilled = "function" == typeof t ? t : null),
        (this.onRejected = "function" == typeof e ? e : null),
        (this.promise = n);
    }
    function h(t, e) {
      var n = !1;
      try {
        t(
          function (t) {
            n || ((n = !0), l(e, t));
          },
          function (t) {
            n || ((n = !0), u(e, t));
          }
        );
      } catch (i) {
        if (n) return;
        (n = !0), u(e, i);
      }
    }
    (s.prototype.catch = function (t) {
      return this.then(null, t);
    }),
      (s.prototype.then = function (t, e) {
        var n = new this.constructor(r);
        return a(this, new d(t, e, n)), n;
      }),
      (s.prototype.finally = e),
      (s.all = function (t) {
        return new s(function (e, n) {
          if (!o(t)) return n(TypeError("Promise.all accepts an array"));
          var i = Array.prototype.slice.call(t);
          if (0 === i.length) return e([]);
          var r = i.length;
          function s(t, o) {
            try {
              if (o && ("object" == typeof o || "function" == typeof o)) {
                var a = o.then;
                if ("function" == typeof a)
                  return void a.call(
                    o,
                    function (e) {
                      s(t, e);
                    },
                    n
                  );
              }
              (i[t] = o), 0 == --r && e(i);
            } catch (l) {
              n(l);
            }
          }
          for (var a = 0; a < i.length; a++) s(a, i[a]);
        });
      }),
      (s.allSettled = n),
      (s.resolve = function (t) {
        return t && "object" == typeof t && t.constructor === s
          ? t
          : new s(function (e) {
              e(t);
            });
      }),
      (s.reject = function (t) {
        return new s(function (e, n) {
          n(t);
        });
      }),
      (s.race = function (t) {
        return new s(function (e, n) {
          if (!o(t)) return n(TypeError("Promise.race accepts an array"));
          for (var i = 0, r = t.length; i < r; i++) s.resolve(t[i]).then(e, n);
        });
      }),
      (s._immediateFn =
        "function" == typeof setImmediate
          ? function (t) {
              setImmediate(t);
            }
          : function (t) {
              i(t, 0);
            }),
      (s._unhandledRejectionFn = function (t) {
        "undefined" != typeof console &&
          console &&
          console.warn("Possible Unhandled Promise Rejection:", t);
      });
    var f = (function () {
      if ("undefined" != typeof self) return self;
      if ("undefined" != typeof window) return window;
      if ("undefined" != typeof global) return global;
      throw Error("unable to locate global object");
    })();
    function p(t) {
      return "function" == typeof t;
    }
    function m(t) {
      return "string" == typeof t;
    }
    function v(t) {
      return "number" == typeof t;
    }
    function g(t) {
      return void 0 === t;
    }
    function _(t) {
      return null === t;
    }
    function y(t) {
      return t instanceof Window;
    }
    function b(t) {
      return t instanceof Document;
    }
    function x(t) {
      return t instanceof Element;
    }
    function w(t) {
      return !p(t) && !y(t) && v(t.length);
    }
    function C(t) {
      return "object" == typeof t && null !== t;
    }
    function k(t) {
      return b(t) ? t.documentElement : t;
    }
    function E(t) {
      return t.replace(/^-ms-/, "ms-").replace(/-([a-z])/g, function (t, e) {
        return e.toUpperCase();
      });
    }
    function T(t) {
      return t.replace(/[A-Z]/g, function (t) {
        return "-" + t.toLowerCase();
      });
    }
    function N(t, e) {
      return window.getComputedStyle(t).getPropertyValue(T(e));
    }
    function S(t) {
      return "border-box" === N(t, "box-sizing");
    }
    function O(t, e, n) {
      var i = "width" === e ? ["Left", "Right"] : ["Top", "Bottom"];
      return [0, 1].reduce(function (e, o, r) {
        var s = n + i[r];
        return "border" === n && (s += "Width"), e + parseFloat(N(t, s) || "0");
      }, 0);
    }
    function A(t, e) {
      if ("width" !== e && "height" !== e) return N(t, e);
      var n = t.getBoundingClientRect()[e];
      return S(t)
        ? n + "px"
        : n - O(t, e, "border") - O(t, e, "padding") + "px";
    }
    function j(t, e) {
      var n = document.createElement(e);
      return (n.innerHTML = t), [].slice.call(n.childNodes);
    }
    function D() {
      return !1;
    }
    "function" != typeof f.Promise
      ? (f.Promise = s)
      : f.Promise.prototype.finally
      ? f.Promise.allSettled || (f.Promise.allSettled = n)
      : (f.Promise.prototype.finally = e);
    var L = [
      "animationIterationCount",
      "columnCount",
      "fillOpacity",
      "flexGrow",
      "flexShrink",
      "fontWeight",
      "gridArea",
      "gridColumn",
      "gridColumnEnd",
      "gridColumnStart",
      "gridRow",
      "gridRowEnd",
      "gridRowStart",
      "lineHeight",
      "opacity",
      "order",
      "orphans",
      "widows",
      "zIndex",
      "zoom",
    ];
    function I(t, e) {
      if (w(t))
        for (var n = 0; n < t.length && !1 !== e.call(t[n], n, t[n]); n += 1);
      else
        for (
          var i = Object.keys(t), o = 0;
          o < i.length && !1 !== e.call(t[i[o]], i[o], t[i[o]]);
          o += 1
        );
      return t;
    }
    function M(t) {
      var e = this;
      return (
        (this.length = 0),
        t &&
          (I(t, function (t, n) {
            e[t] = n;
          }),
          (this.length = t.length)),
        this
      );
    }
    var F,
      B =
        (((F = function (t) {
          if (!t) return new M();
          if (t instanceof M) return t;
          if (p(t))
            return (
              /complete|loaded|interactive/.test(document.readyState) &&
              document.body
                ? t.call(document, F)
                : document.addEventListener(
                    "DOMContentLoaded",
                    function () {
                      return t.call(document, F);
                    },
                    !1
                  ),
              new M([document])
            );
          if (m(t)) {
            var e = t.trim();
            if ("<" === e[0] && ">" === e[e.length - 1]) {
              var n = "div";
              return (
                I(
                  {
                    li: "ul",
                    tr: "tbody",
                    td: "tr",
                    th: "tr",
                    tbody: "table",
                    option: "select",
                  },
                  function (t, i) {
                    if (0 === e.indexOf("<" + t)) return (n = i), !1;
                  }
                ),
                new M(j(e, n))
              );
            }
            if (!("#" === t[0] && !t.match(/[ .<>:~]/)))
              return new M(document.querySelectorAll(t));
            var i = document.getElementById(t.slice(1));
            return i ? new M([i]) : new M();
          }
          return new M(!w(t) || t instanceof Node ? [t] : t);
        }).fn = M.prototype),
        F);
    setTimeout(function () {
      return B("body").addClass(
        "mdui-loaded mdui-theme-layout-dark mdui-theme-accent-light-blue mdui-theme-primary-blu"
      );
    });
    var R = { $: B };
    function H(t, e) {
      return t !== e && k(t).contains(e);
    }
    function P(t, e) {
      return (
        I(e, function (e, n) {
          t.push(n);
        }),
        t
      );
    }
    (B.fn.each = function (t) {
      return I(this, t);
    }),
      (B.fn.get = function (t) {
        return void 0 === t
          ? [].slice.call(this)
          : this[0 <= t ? t : t + this.length];
      }),
      (B.fn.find = function (t) {
        var e = [];
        return (
          this.each(function (n, i) {
            P(e, B(i.querySelectorAll(t)).get());
          }),
          new M(e)
        );
      });
    var q = {},
      z = 1;
    function W(t) {
      var e = "_mduiEventId";
      return t[e] || (t[e] = ++z), t[e];
    }
    function Z(t) {
      var e = t.split(".");
      return { type: e[0], ns: e.slice(1).sort().join(" ") };
    }
    function X(t) {
      return RegExp("(?:^| )" + t.replace(" ", " .* ?") + "(?: |$)");
    }
    function U(t, e, n, i) {
      function o(e) {
        delete r[e.id], t.removeEventListener(e.type, e.proxy, !1);
      }
      var r = q[W(t)] || [];
      e
        ? e.split(" ").forEach(function (e) {
            var r, s, a, l;
            e &&
              ((r = t),
              (s = n),
              (a = i),
              (l = Z(e)),
              (q[W(r)] || []).filter(function (t) {
                return (
                  t &&
                  (!l.type || t.type === l.type) &&
                  (!l.ns || X(l.ns).test(t.ns)) &&
                  (!s || W(t.func) === W(s)) &&
                  (!a || t.selector === a)
                );
              })).forEach(function (t) {
                return o(t);
              });
          })
        : r.forEach(function (t) {
            return o(t);
          });
    }
    function V(t, e) {
      for (var n = [], i = arguments.length - 2; 0 < i--; )
        n[i] = arguments[i + 2];
      return (
        n.unshift(e),
        I(n, function (e, n) {
          I(n, function (e, n) {
            g(n) || (t[e] = n);
          });
        }),
        t
      );
    }
    function Y(t) {
      if (!C(t) && !Array.isArray(t)) return "";
      var e = [];
      function n(t, i) {
        var o;
        C(i)
          ? I(i, function (e, r) {
              n(t + "[" + (o = Array.isArray(i) && !C(r) ? "" : e) + "]", r);
            })
          : ((o = null == i || "" === i ? "=" : "=" + encodeURIComponent(i)),
            e.push(encodeURIComponent(t) + o));
      }
      return (
        Array.isArray(t)
          ? I(t, function () {
              n(this.name, this.value);
            })
          : I(t, n),
        e.join("&")
      );
    }
    B.fn.trigger = function (t, e) {
      var n,
        i = Z(t),
        o = { bubbles: !0, cancelable: !0 };
      return (
        ((n =
          -1 < ["click", "mousedown", "mouseup", "mousemove"].indexOf(i.type)
            ? new MouseEvent(i.type, o)
            : ((o.detail = e), new CustomEvent(i.type, o)))._detail = e),
        (n._ns = i.ns),
        this.each(function () {
          this.dispatchEvent(n);
        })
      );
    };
    var K = {},
      J = {
        ajaxStart: "start.mdui.ajax",
        ajaxSuccess: "success.mdui.ajax",
        ajaxError: "error.mdui.ajax",
        ajaxComplete: "complete.mdui.ajax",
      };
    function G(t) {
      return 0 <= ["GET", "HEAD"].indexOf(t);
    }
    function Q(t, e) {
      return (t + "&" + e).replace(/[&?]{1,2}/, "?");
    }
    (B.ajax = function (t) {
      var e,
        n,
        i,
        o = !1,
        r = {},
        s =
          ((e = t),
          (n = {
            url: "",
            method: "GET",
            data: "",
            processData: !0,
            async: !0,
            cache: !0,
            username: "",
            password: "",
            headers: {},
            xhrFields: {},
            statusCode: {},
            dataType: "text",
            contentType: "application/x-www-form-urlencoded",
            timeout: 0,
            global: !0,
          }),
          I(K, function (t, e) {
            0 >
              [
                "beforeSend",
                "success",
                "error",
                "complete",
                "statusCode",
              ].indexOf(t) &&
              !g(e) &&
              (n[t] = e);
          }),
          V({}, n, e)),
        a = s.url || window.location.toString(),
        l = s.method.toUpperCase(),
        u = s.data,
        c = s.processData,
        d = s.async,
        h = s.cache,
        f = s.username,
        p = s.password,
        v = s.headers,
        _ = s.xhrFields,
        y = s.statusCode,
        b = s.dataType,
        x = s.contentType,
        w = s.timeout,
        C = s.global;
      function k(t, e, n) {
        for (var i, r, a = [], l = arguments.length - 3; 0 < l--; )
          a[l] = arguments[l + 3];
        C && B(document).trigger(t, e),
          n &&
            (n in K && (i = K[n].apply(K, a)),
            s[n] && (r = s[n].apply(s, a)),
            "beforeSend" !== n || (!1 !== i && !1 !== r) || (o = !0));
      }
      return (
        !u ||
          (!G(l) && !c) ||
          m(u) ||
          u instanceof ArrayBuffer ||
          u instanceof Blob ||
          u instanceof Document ||
          u instanceof FormData ||
          (u = Y(u)),
        u && G(l) && ((a = Q(a, u)), (u = null)),
        new Promise(function (t, e) {
          G(l) && !h && (a = Q(a, "_=" + Date.now()));
          var n,
            c = new XMLHttpRequest();
          c.open(l, a, d, f, p),
            (x || (u && !G(l) && !1 !== x)) &&
              c.setRequestHeader("Content-Type", x),
            "json" === b &&
              c.setRequestHeader("Accept", "application/json, text/javascript"),
            v &&
              I(v, function (t, e) {
                g(e) || c.setRequestHeader(t, e + "");
              }),
            (/^([\w-]+:)?\/\/([^/]+)/.test(a) &&
              RegExp.$2 !== window.location.host) ||
              c.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
            _ &&
              I(_, function (t, e) {
                c[t] = e;
              }),
            (r.xhr = c),
            (r.options = s),
            (c.onload = function () {
              n && clearTimeout(n);
              var o,
                s =
                  (200 <= c.status && c.status < 300) ||
                  304 === c.status ||
                  0 === c.status;
              if (s) {
                if (
                  ((i =
                    204 === c.status || "HEAD" === l
                      ? "nocontent"
                      : 304 === c.status
                      ? "notmodified"
                      : "success"),
                  "json" === b)
                ) {
                  try {
                    (o = "HEAD" === l ? void 0 : JSON.parse(c.responseText)),
                      (r.data = o);
                  } catch (a) {
                    k(J.ajaxError, r, "error", c, (i = "parsererror")),
                      e(Error(i));
                  }
                  "parsererror" !== i &&
                    (k(J.ajaxSuccess, r, "success", o, i, c), t(o));
                } else
                  (o =
                    "HEAD" === l
                      ? void 0
                      : "text" === c.responseType || "" === c.responseType
                      ? c.responseText
                      : c.response),
                    (r.data = o),
                    k(J.ajaxSuccess, r, "success", o, i, c),
                    t(o);
              } else k(J.ajaxError, r, (i = "error"), c, i), e(Error(i));
              I([K.statusCode, y], function (t, e) {
                e &&
                  e[c.status] &&
                  (s ? e[c.status](o, i, c) : e[c.status](c, i));
              }),
                k(J.ajaxComplete, r, "complete", c, i);
            }),
            (c.onerror = function () {
              n && clearTimeout(n),
                k(J.ajaxError, r, "error", c, c.statusText),
                k(J.ajaxComplete, r, "complete", c, "error"),
                e(Error(c.statusText));
            }),
            (c.onabort = function () {
              var t = "abort";
              n && ((t = "timeout"), clearTimeout(n)),
                k(J.ajaxError, r, "error", c, t),
                k(J.ajaxComplete, r, "complete", c, t),
                e(Error(t));
            }),
            k(J.ajaxStart, r, "beforeSend", c),
            o
              ? e(Error("cancel"))
              : (0 < w &&
                  (n = setTimeout(function () {
                    c.abort();
                  }, w)),
                c.send(u));
        })
      );
    }),
      (B.ajaxSetup = function (t) {
        return V(K, t);
      }),
      (B.contains = H);
    var tt = "_mduiElementDataStorage";
    function te(t, e) {
      t[tt] || (t[tt] = {}),
        I(e, function (e, n) {
          t[tt][E(e)] = n;
        });
    }
    function tn(t, e, n) {
      var i;
      return C(e)
        ? (te(t, e), e)
        : g(n)
        ? g(e)
          ? t[tt]
            ? t[tt]
            : {}
          : ((e = E(e)), t[tt] && e in t[tt] ? t[tt][e] : void 0)
        : (te(t, (((i = {})[e] = n), i)), n);
    }
    function ti(t, e) {
      var n,
        i,
        o = [];
      return (
        I(t, function (t, n) {
          null != (i = e.call(window, n, t)) && o.push(i);
        }),
        (n = []).concat.apply(n, o)
      );
    }
    function to(t, e) {
      if (t[tt]) {
        var n = function (e) {
          (e = E(e)), t[tt][e] && ((t[tt][e] = null), delete t[tt][e]);
        };
        g(e)
          ? ((t[tt] = null), delete t[tt])
          : m(e)
          ? e
              .split(" ")
              .filter(function (t) {
                return t;
              })
              .forEach(function (t) {
                return n(t);
              })
          : I(e, function (t, e) {
              return n(e);
            });
      }
    }
    function tr(t) {
      var e = [];
      return (
        I(t, function (t, n) {
          -1 === e.indexOf(n) && e.push(n);
        }),
        e
      );
    }
    function ts(t, e, n, i, o) {
      var r,
        s = [];
      return (
        t.each(function (t, a) {
          for (r = a[n]; r && x(r); ) {
            if (2 === e) {
              if (i && B(r).is(i)) break;
              (o && !B(r).is(o)) || s.push(r);
            } else {
              if (0 === e) {
                (i && !B(r).is(i)) || s.push(r);
                break;
              }
              (i && !B(r).is(i)) || s.push(r);
            }
            r = r[n];
          }
        }),
        new M(tr(s))
      );
    }
    (B.data = tn),
      (B.each = I),
      (B.extend = function () {
        for (var t = this, e = [], n = arguments.length; n--; )
          e[n] = arguments[n];
        return 1 === e.length
          ? (I(e[0], function (e, n) {
              t[e] = n;
            }),
            this)
          : V.apply(void 0, [e.shift(), e.shift()].concat(e));
      }),
      (B.map = ti),
      (B.merge = P),
      (B.param = Y),
      (B.removeData = to),
      (B.unique = tr),
      (B.fn.add = function (t) {
        return new M(tr(P(this.get(), B(t).get())));
      }),
      I(["add", "remove", "toggle"], function (t, e) {
        B.fn[e + "Class"] = function (t) {
          return "remove" !== e || arguments.length
            ? this.each(function (n, i) {
                x(i) &&
                  I(
                    (p(t) ? t.call(i, n, i.getAttribute("class") || "") : t)
                      .split(" ")
                      .filter(function (t) {
                        return t;
                      }),
                    function (t, n) {
                      i.classList[e](n);
                    }
                  );
              })
            : this.each(function (t, e) {
                e.setAttribute("class", "");
              });
        };
      }),
      I(["insertBefore", "insertAfter"], function (t, e) {
        B.fn[e] = function (e) {
          var n = t ? B(this.get().reverse()) : this,
            i = B(e),
            o = [];
          return (
            i.each(function (e, i) {
              i.parentNode &&
                n.each(function (n, r) {
                  var s = e ? r.cloneNode(!0) : r,
                    a = t ? i.nextSibling : i;
                  o.push(s), i.parentNode.insertBefore(s, a);
                });
            }),
            B(t ? o.reverse() : o)
          );
        };
      }),
      I(["before", "after"], function (t, e) {
        B.fn[e] = function () {
          for (var e = [], n = arguments.length; n--; ) e[n] = arguments[n];
          return (
            1 === t && (e = e.reverse()),
            this.each(function (n, i) {
              I(p(e[0]) ? [e[0].call(i, n, i.innerHTML)] : e, function (e, o) {
                var r;
                (m((r = o)) && ("<" !== r[0] || ">" !== r[r.length - 1])
                  ? B(j(o, "div"))
                  : n && x(o)
                  ? B(o.cloneNode(!0))
                  : B(o))[t ? "insertAfter" : "insertBefore"](i);
              });
            })
          );
        };
      }),
      (B.fn.off = function (t, e, n) {
        var i = this;
        return C(t)
          ? (I(t, function (t, n) {
              i.off(t, e, n);
            }),
            this)
          : ((!1 === e || p(e)) && ((n = e), (e = void 0)),
            !1 === n && (n = D),
            this.each(function () {
              U(this, t, n, e);
            }));
      }),
      (B.fn.on = function (t, e, n, i, o) {
        var r = this;
        if (C(t))
          return (
            m(e) || ((n = n || e), (e = void 0)),
            I(t, function (t, i) {
              r.on(t, e, n, i, o);
            }),
            this
          );
        if (
          (null == n && null == i
            ? ((i = e), (n = e = void 0))
            : null == i &&
              (m(e)
                ? ((i = n), (n = void 0))
                : ((i = n), (n = e), (e = void 0))),
          !1 === i)
        )
          i = D;
        else if (!i) return this;
        if (o) {
          var s = this,
            a = i;
          i = function (t) {
            return s.off(t.type, e, i), a.apply(this, arguments);
          };
        }
        return this.each(function () {
          var o, r, s, a, l, u, c;
          (o = this),
            (r = t),
            (s = i),
            (a = n),
            (l = e),
            q[(u = W(o))] || (q[u] = []),
            (c = !1),
            C(a) && a.useCapture && (c = !0),
            r.split(" ").forEach(function (t) {
              if (t) {
                var e = Z(t),
                  n = {
                    type: e.type,
                    ns: e.ns,
                    func: s,
                    selector: l,
                    id: q[u].length,
                    proxy: r,
                  };
                q[u].push(n), o.addEventListener(n.type, r, c);
              }
              function i(t, e) {
                !1 ===
                  s.apply(
                    e,
                    void 0 === t._detail ? [t] : [t].concat(t._detail)
                  ) && (t.preventDefault(), t.stopPropagation());
              }
              function r(t) {
                (t._ns && !X(t._ns).test(e.ns)) ||
                  ((t._data = a),
                  l
                    ? B(o)
                        .find(l)
                        .get()
                        .reverse()
                        .forEach(function (e) {
                          (e === t.target || H(e, t.target)) && i(t, e);
                        })
                    : i(t, o));
              }
            });
        });
      }),
      I(J, function (t, e) {
        B.fn[t] = function (t) {
          return this.on(e, function (e, n) {
            t(e, n.xhr, n.options, n.data);
          });
        };
      }),
      (B.fn.map = function (t) {
        return new M(
          ti(this, function (e, n) {
            return t.call(e, n, e);
          })
        );
      }),
      (B.fn.clone = function () {
        return this.map(function () {
          return this.cloneNode(!0);
        });
      }),
      (B.fn.is = function (t) {
        var e = !1;
        if (p(t))
          return (
            this.each(function (n, i) {
              t.call(i, n, i) && (e = !0);
            }),
            e
          );
        if (m(t))
          return (
            this.each(function (n, i) {
              b(i) ||
                y(i) ||
                ((i.matches || i.msMatchesSelector).call(i, t) && (e = !0));
            }),
            e
          );
        var n = B(t);
        return (
          this.each(function (t, i) {
            n.each(function (t, n) {
              i === n && (e = !0);
            });
          }),
          e
        );
      }),
      (B.fn.remove = function (t) {
        return this.each(function (e, n) {
          n.parentNode && (!t || B(n).is(t)) && n.parentNode.removeChild(n);
        });
      }),
      I(["prepend", "append"], function (t, e) {
        B.fn[e] = function () {
          for (var e = [], n = arguments.length; n--; ) e[n] = arguments[n];
          return this.each(function (n, i) {
            var o,
              r = i.childNodes,
              s = r.length,
              a = s ? r[t ? s - 1 : 0] : document.createElement("div");
            s || i.appendChild(a);
            var l = p(e[0]) ? [e[0].call(i, n, i.innerHTML)] : e;
            n &&
              (l = l.map(function (t) {
                return m(t) ? t : B(t).clone();
              })),
              (o = B(a))[t ? "after" : "before"].apply(o, l),
              s || i.removeChild(a);
          });
        };
      }),
      I(["appendTo", "prependTo"], function (t, e) {
        B.fn[e] = function (e) {
          var n = [],
            i = B(e).map(function (e, i) {
              var o = i.childNodes,
                r = o.length;
              if (r) return o[t ? 0 : r - 1];
              var s = document.createElement("div");
              return i.appendChild(s), n.push(s), s;
            }),
            o = this[t ? "insertBefore" : "insertAfter"](i);
          return B(n).remove(), o;
        };
      }),
      I(["attr", "prop", "css"], function (t, e) {
        function n(e, n) {
          switch (t) {
            case 0:
              var i = e.getAttribute(n);
              return _(i) ? void 0 : i;
            case 1:
              return e[n];
            default:
              return A(e, n);
          }
        }
        B.fn[e] = function (i, o) {
          var r = this;
          if (C(i))
            return (
              I(i, function (t, n) {
                r[e](t, n);
              }),
              this
            );
          if (1 !== arguments.length)
            return this.each(function (e, r) {
              !(function (e, n, i) {
                if (!g(i))
                  switch (t) {
                    case 0:
                      _(i) ? e.removeAttribute(n) : e.setAttribute(n, i);
                      break;
                    case 1:
                      e[n] = i;
                      break;
                    default:
                      (n = E(n)),
                        (e.style[n] = v(i)
                          ? i + (-1 < L.indexOf(n) ? "" : "px")
                          : i);
                  }
              })(r, i, p(o) ? o.call(r, e, n(r, i)) : o);
            });
          var s = this[0];
          return x(s) ? n(s, i) : void 0;
        };
      }),
      (B.fn.children = function (t) {
        var e = [];
        return (
          this.each(function (n, i) {
            I(i.childNodes, function (n, i) {
              x(i) && ((t && !B(i).is(t)) || e.push(i));
            });
          }),
          new M(tr(e))
        );
      }),
      (B.fn.slice = function () {
        for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
        return new M([].slice.apply(this, t));
      }),
      (B.fn.eq = function (t) {
        var e = -1 === t ? this.slice(t) : this.slice(t, +t + 1);
        return new M(e);
      }),
      I(["", "s", "sUntil"], function (t, e) {
        B.fn["parent" + e] = function (e, n) {
          return ts(t ? B(this.get().reverse()) : this, t, "parentNode", e, n);
        };
      }),
      (B.fn.closest = function (t) {
        if (this.is(t)) return this;
        var e = [];
        return (
          this.parents().each(function (n, i) {
            if (B(i).is(t)) return e.push(i), !1;
          }),
          new M(e)
        );
      });
    var ta = /^(?:{[\w\W]*\}|\[[\w\W]*\])$/;
    function tl(t, e, n) {
      if (g(n) && 1 === t.nodeType) {
        var i,
          o = "data-" + T(e);
        if (m((n = t.getAttribute(o))))
          try {
            n =
              "true" === (i = n) ||
              ("false" !== i &&
                ("null" === i
                  ? null
                  : i === +i + ""
                  ? +i
                  : ta.test(i)
                  ? JSON.parse(i)
                  : i));
          } catch (r) {}
        else n = void 0;
      }
      return n;
    }
    function tu(t, e, n, i, o, r) {
      function s(n) {
        return O(t, e.toLowerCase(), n) * r;
      }
      return (
        2 === i && o && (n += s("margin")),
        S(t)
          ? (window.document.documentMode &&
              1 === r &&
              ((n += s("border")), (n += s("padding"))),
            0 === i && (n -= s("border")),
            1 === i && ((n -= s("border")), (n -= s("padding"))))
          : (0 === i && (n += s("padding")),
            2 === i && ((n += s("border")), (n += s("padding")))),
        n
      );
    }
    function tc(t, e, n, i) {
      var o = "client" + e,
        r = "scroll" + e,
        s = "offset" + e,
        a = "inner" + e;
      if (y(t)) return 2 === n ? t[a] : k(document)[o];
      if (b(t)) {
        var l = k(t);
        return Math.max(t.body[r], l[r], t.body[s], l[s], l[o]);
      }
      var u = parseFloat(N(t, e.toLowerCase()) || "0");
      return tu(t, e, u, n, i, 1);
    }
    function td(t, e) {
      return parseFloat(t.css(e));
    }
    function th(t) {
      if (!t.getClientRects().length) return { top: 0, left: 0 };
      var e = t.getBoundingClientRect(),
        n = t.ownerDocument.defaultView;
      return { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset };
    }
    (B.fn.data = function (t, e) {
      if (g(t)) {
        if (!this.length) return;
        var n = this[0],
          i = tn(n);
        if (1 !== n.nodeType) return i;
        for (var o = n.attributes, r = o.length; r--; )
          if (o[r]) {
            var s = o[r].name;
            0 === s.indexOf("data-") &&
              (i[(s = E(s.slice(5)))] = tl(n, s, i[s]));
          }
        return i;
      }
      return C(t)
        ? this.each(function () {
            tn(this, t);
          })
        : 2 === arguments.length && g(e)
        ? this
        : g(e)
        ? this.length
          ? tl(this[0], t, tn(this[0], t))
          : void 0
        : this.each(function () {
            tn(this, t, e);
          });
    }),
      (B.fn.empty = function () {
        return this.each(function () {
          this.innerHTML = "";
        });
      }),
      (B.fn.extend = function (t) {
        return (
          I(t, function (t, e) {
            B.fn[t] = e;
          }),
          this
        );
      }),
      (B.fn.filter = function (t) {
        if (p(t))
          return this.map(function (e, n) {
            return t.call(n, e, n) ? n : void 0;
          });
        if (m(t))
          return this.map(function (e, n) {
            return B(n).is(t) ? n : void 0;
          });
        var e = B(t);
        return this.map(function (t, n) {
          return -1 < e.get().indexOf(n) ? n : void 0;
        });
      }),
      (B.fn.first = function () {
        return this.eq(0);
      }),
      (B.fn.has = function (t) {
        var e = m(t) ? this.find(t) : B(t),
          n = e.length;
        return this.map(function () {
          for (var t = 0; t < n; t += 1) if (H(this, e[t])) return this;
        });
      }),
      (B.fn.hasClass = function (t) {
        return this[0].classList.contains(t);
      }),
      I(["Width", "Height"], function (t, e) {
        I(["inner" + e, e.toLowerCase(), "outer" + e], function (t, n) {
          B.fn[n] = function (n, i) {
            var o = arguments.length && (t < 2 || "boolean" != typeof n),
              r = !0 === n || !0 === i;
            return o
              ? this.each(function (i, o) {
                  return (function (t, e, n, i, o, r) {
                    var s = p(r) ? r.call(t, e, tc(t, n, i, o)) : r;
                    if (null != s) {
                      var a = B(t),
                        l = n.toLowerCase();
                      if (-1 < ["auto", "inherit", ""].indexOf(s)) a.css(l, s);
                      else {
                        var u = s.toString().replace(/\b[0-9.]*/, "");
                        (s = tu(t, n, parseFloat(s), i, o, -1) + (u || "px")),
                          a.css(l, s);
                      }
                    }
                  })(o, i, e, t, r, n);
                })
              : this.length
              ? tc(this[0], e, t, r)
              : void 0;
          };
        });
      }),
      (B.fn.hide = function () {
        return this.each(function () {
          this.style.display = "none";
        });
      }),
      I(["val", "html", "text"], function (t, e) {
        var n = { 0: "value", 1: "innerHTML", 2: "textContent" }[t];
        function i(e) {
          if (2 === t)
            return ti(e, function (t) {
              return k(t)[n];
            }).join("");
          if (e.length) {
            var i = e[0];
            return 0 === t && B(i).is("select[multiple]")
              ? ti(B(i).find("option:checked"), function (t) {
                  return t.value;
                })
              : i[n];
          }
        }
        B.fn[e] = function (e) {
          return arguments.length
            ? this.each(function (o, r) {
                var s = p(e) ? e.call(r, o, i(B(r))) : e;
                0 === t && Array.isArray(s)
                  ? B(r).is("select[multiple]")
                    ? ti(B(r).find("option"), function (t) {
                        return (t.selected = -1 < s.indexOf(t.value));
                      })
                    : (r.checked = -1 < s.indexOf(r.value))
                  : (function (e, i) {
                      if (g(i)) {
                        if (0 !== t) return;
                        i = "";
                      }
                      1 === t && x(i) && (i = i.outerHTML), (e[n] = i);
                    })(r, s);
              })
            : i(this);
        };
      }),
      (B.fn.index = function (t) {
        return arguments.length
          ? m(t)
            ? B(t).get().indexOf(this[0])
            : this.get().indexOf(B(t)[0])
          : this.eq(0).parent().children().get().indexOf(this[0]);
      }),
      (B.fn.last = function () {
        return this.eq(-1);
      }),
      I(["", "All", "Until"], function (t, e) {
        B.fn["next" + e] = function (e, n) {
          return ts(this, t, "nextElementSibling", e, n);
        };
      }),
      (B.fn.not = function (t) {
        var e = this.filter(t);
        return this.map(function (t, n) {
          return -1 < e.index(n) ? void 0 : n;
        });
      }),
      (B.fn.offsetParent = function () {
        return this.map(function () {
          for (
            var t = this.offsetParent;
            t && "static" === B(t).css("position");

          )
            t = t.offsetParent;
          return t || document.documentElement;
        });
      }),
      (B.fn.position = function () {
        if (this.length) {
          var t,
            e = this.eq(0),
            n = { left: 0, top: 0 };
          if ("fixed" === e.css("position")) t = e[0].getBoundingClientRect();
          else {
            t = e.offset();
            var i = e.offsetParent();
            ((n = i.offset()).top += td(i, "border-top-width")),
              (n.left += td(i, "border-left-width"));
          }
          return {
            top: t.top - n.top - td(e, "margin-top"),
            left: t.left - n.left - td(e, "margin-left"),
          };
        }
      }),
      (B.fn.offset = function (t) {
        return arguments.length
          ? this.each(function (e) {
              !(function (t, e, n) {
                var i = B(t),
                  o = i.css("position");
                "static" === o && i.css("position", "relative");
                var r,
                  s,
                  a = th(t),
                  l = i.css("top"),
                  u = i.css("left");
                if (
                  ("absolute" === o || "fixed" === o) &&
                  -1 < (l + u).indexOf("auto")
                ) {
                  var c = i.position();
                  (r = c.top), (s = c.left);
                } else (r = parseFloat(l)), (s = parseFloat(u));
                var d = p(e) ? e.call(t, n, V({}, a)) : e;
                i.css({
                  top: null != d.top ? d.top - a.top + r : void 0,
                  left: null != d.left ? d.left - a.left + s : void 0,
                });
              })(this, t, e);
            })
          : this.length
          ? th(this[0])
          : void 0;
      }),
      (B.fn.one = function (t, e, n, i) {
        return this.on(t, e, n, i, !0);
      }),
      I(["", "All", "Until"], function (t, e) {
        B.fn["prev" + e] = function (e, n) {
          return ts(
            t ? B(this.get().reverse()) : this,
            t,
            "previousElementSibling",
            e,
            n
          );
        };
      }),
      (B.fn.removeAttr = function (t) {
        var e = t.split(" ").filter(function (t) {
          return t;
        });
        return this.each(function () {
          var t = this;
          I(e, function (e, n) {
            t.removeAttribute(n);
          });
        });
      }),
      (B.fn.removeData = function (t) {
        return this.each(function () {
          to(this, t);
        });
      }),
      (B.fn.removeProp = function (t) {
        return this.each(function () {
          try {
            delete this[t];
          } catch (e) {}
        });
      }),
      (B.fn.replaceWith = function (t) {
        return (
          this.each(function (e, n) {
            var i = t;
            p(i)
              ? (i = i.call(n, e, n.innerHTML))
              : e && !m(i) && (i = B(i).clone()),
              B(n).before(i);
          }),
          this.remove()
        );
      }),
      (B.fn.replaceAll = function (t) {
        var e = this;
        return B(t).map(function (t, n) {
          return B(n).replaceWith(t ? e.clone() : e), e.get();
        });
      }),
      (B.fn.serializeArray = function () {
        var t = [];
        return (
          this.each(function (e, n) {
            B(n instanceof HTMLFormElement ? n.elements : [n]).each(function (
              e,
              n
            ) {
              var i = B(n),
                o = n.type,
                r = n.nodeName.toLowerCase();
              if (
                "fieldset" !== r &&
                n.name &&
                !n.disabled &&
                -1 < ["input", "select", "textarea", "keygen"].indexOf(r) &&
                -1 ===
                  ["submit", "button", "image", "reset", "file"].indexOf(o) &&
                (-1 === ["radio", "checkbox"].indexOf(o) || n.checked)
              ) {
                var s = i.val();
                (Array.isArray(s) ? s : [s]).forEach(function (e) {
                  t.push({ name: n.name, value: e });
                });
              }
            });
          }),
          t
        );
      }),
      (B.fn.serialize = function () {
        return Y(this.serializeArray());
      });
    var tf = {};
    (B.fn.show = function () {
      return this.each(function () {
        var t, e, n;
        "none" === this.style.display && (this.style.display = ""),
          "none" === A(this, "display") &&
            (this.style.display =
              (tf[(t = this.nodeName)] ||
                ((e = document.createElement(t)),
                document.body.appendChild(e),
                (n = A(e, "display")),
                e.parentNode.removeChild(e),
                "none" === n && (n = "block"),
                (tf[t] = n)),
              tf[t]));
      });
    }),
      (B.fn.siblings = function (t) {
        return this.prevAll(t).add(this.nextAll(t));
      }),
      (B.fn.toggle = function () {
        return this.each(function () {
          "none" === A(this, "display") ? B(this).show() : B(this).hide();
        });
      }),
      (B.fn.reflow = function () {
        return this.each(function () {
          return this.clientLeft;
        });
      }),
      (B.fn.transition = function (t) {
        return (
          v(t) && (t += "ms"),
          this.each(function () {
            (this.style.webkitTransitionDuration = t),
              (this.style.transitionDuration = t);
          })
        );
      }),
      (B.fn.transitionEnd = function (t) {
        var e = this,
          n = ["webkitTransitionEnd", "transitionend"];
        function i(o) {
          o.target === this &&
            (t.call(this, o),
            I(n, function (t, n) {
              e.off(n, i);
            }));
        }
        return (
          I(n, function (t, n) {
            e.on(n, i);
          }),
          this
        );
      }),
      (B.fn.transformOrigin = function (t) {
        return this.each(function () {
          (this.style.webkitTransformOrigin = t),
            (this.style.transformOrigin = t);
        });
      }),
      (B.fn.transform = function (t) {
        return this.each(function () {
          (this.style.webkitTransform = t), (this.style.transform = t);
        });
      });
    var tp = {};
    function tm(t, e, n, i) {
      var o = tn(i, "_mdui_mutation");
      o || tn(i, "_mdui_mutation", (o = [])),
        -1 === o.indexOf(t) && (o.push(t), e.call(i, n, i));
    }
    (B.fn.mutation = function () {
      return this.each(function (t, e) {
        var n = B(e);
        I(tp, function (i, o) {
          n.is(i) && tm(i, o, t, e),
            n.find(i).each(function (t, e) {
              tm(i, o, t, e);
            });
        });
      });
    }),
      (B.showOverlay = function (t) {
        var e = B(".mdui-overlay");
        e.length
          ? (e.data("_overlay_is_deleted", !1), g(t) || e.css("z-index", t))
          : (g(t) && (t = 2e3),
            (e = B('<div class="mdui-overlay">')
              .appendTo(document.body)
              .reflow()
              .css("z-index", t)));
        var n = e.data("_overlay_level") || 0;
        return e.data("_overlay_level", ++n).addClass("mdui-overlay-show");
      }),
      (B.hideOverlay = function (t) {
        void 0 === t && (t = !1);
        var e = B(".mdui-overlay");
        if (e.length) {
          var n = t ? 1 : e.data("_overlay_level");
          1 < n
            ? e.data("_overlay_level", --n)
            : e
                .data("_overlay_level", 0)
                .removeClass("mdui-overlay-show")
                .data("_overlay_is_deleted", !0)
                .transitionEnd(function () {
                  e.data("_overlay_is_deleted") && e.remove();
                });
        }
      }),
      (B.lockScreen = function () {
        var t = B("body"),
          e = t.width(),
          n = t.data("_lockscreen_level") || 0;
        t.addClass("mdui-locked").width(e).data("_lockscreen_level", ++n);
      }),
      (B.unlockScreen = function (t) {
        void 0 === t && (t = !1);
        var e = B("body"),
          n = t ? 1 : e.data("_lockscreen_level");
        1 < n
          ? e.data("_lockscreen_level", --n)
          : e.data("_lockscreen_level", 0).removeClass("mdui-locked").width("");
      }),
      (B.throttle = function (t, e) {
        void 0 === e && (e = 16);
        var n = null;
        return function () {
          for (var i = this, o = [], r = arguments.length; r--; )
            o[r] = arguments[r];
          _(n) &&
            (n = setTimeout(function () {
              t.apply(i, o), (n = null);
            }, e));
        };
      });
    var tv = {};
    function tg(t, e, n, i, o) {
      (o = o || {}).inst = i;
      var r = t + ".mdui." + e;
      "undefined" != typeof jQuery && jQuery(n).trigger(r, o);
      var s = B(n);
      s.trigger(r, o);
      var a = new CustomEvent(r, { bubbles: !0, cancelable: !0, detail: o });
      (a._detail = o), s[0].dispatchEvent(a);
    }
    (B.guid = function (t) {
      if (!g(t) && !g(tv[t])) return tv[t];
      function e() {
        return Math.floor(65536 * (1 + Math.random()))
          .toString(16)
          .substring(1);
      }
      var n =
        "_" +
        e() +
        e() +
        "-" +
        e() +
        "-" +
        e() +
        "-" +
        e() +
        "-" +
        e() +
        e() +
        e();
      return g(t) || (tv[t] = n), n;
    }),
      (R.mutation = function (t, e) {
        g(t) || g(e)
          ? B(document).mutation()
          : ((tp[t] = e),
            B(t).each(function (n, i) {
              return tm(t, e, n, i);
            }));
      });
    var t$ = B(document),
      t_ = B(window);
    function ty(t, e) {
      void 0 === e && (e = {}),
        (this.options = V({}, tb)),
        (this.state = "pinned"),
        (this.isEnable = !1),
        (this.lastScrollY = 0),
        (this.rafId = 0),
        (this.$element = B(t).first()),
        V(this.options, e);
      var n = this.options.tolerance;
      v(n) && (this.options.tolerance = { down: n, up: n }), this.enable();
    }
    B("body");
    var tb = {
      tolerance: 5,
      offset: 0,
      initialClass: "mdui-headroom",
      pinnedClass: "mdui-headroom-pinned-top",
      unpinnedClass: "mdui-headroom-unpinned-top",
    };
    function tx(t, e) {
      var n = B(t).attr(e);
      return n
        ? Function(
            "",
            "var json = " + n + "; return JSON.parse(JSON.stringify(json));"
          )()
        : {};
    }
    (ty.prototype.onScroll = function () {
      var t = this;
      this.rafId = window.requestAnimationFrame(function () {
        var e = window.pageYOffset,
          n = e > t.lastScrollY ? "down" : "up",
          i = t.options.tolerance[n] <= Math.abs(e - t.lastScrollY);
        e > t.lastScrollY && e >= t.options.offset && i
          ? t.unpin()
          : ((e < t.lastScrollY && i) || e <= t.options.offset) && t.pin(),
          (t.lastScrollY = e);
      });
    }),
      (ty.prototype.triggerEvent = function (t) {
        tg(t, "headroom", this.$element, this);
      }),
      (ty.prototype.transitionEnd = function () {
        "pinning" === this.state &&
          ((this.state = "pinned"), this.triggerEvent("pinned")),
          "unpinning" === this.state &&
            ((this.state = "unpinned"), this.triggerEvent("unpinned"));
      }),
      (ty.prototype.pin = function () {
        var t = this;
        "pinning" !== this.state &&
          "pinned" !== this.state &&
          this.$element.hasClass(this.options.initialClass) &&
          (this.triggerEvent("pin"),
          (this.state = "pinning"),
          this.$element
            .removeClass(this.options.unpinnedClass)
            .addClass(this.options.pinnedClass)
            .transitionEnd(function () {
              return t.transitionEnd();
            }));
      }),
      (ty.prototype.unpin = function () {
        var t = this;
        "unpinning" !== this.state &&
          "unpinned" !== this.state &&
          this.$element.hasClass(this.options.initialClass) &&
          (this.triggerEvent("unpin"),
          (this.state = "unpinning"),
          this.$element
            .removeClass(this.options.pinnedClass)
            .addClass(this.options.unpinnedClass)
            .transitionEnd(function () {
              return t.transitionEnd();
            }));
      }),
      (ty.prototype.enable = function () {
        var t = this;
        this.isEnable ||
          ((this.isEnable = !0),
          (this.state = "pinned"),
          this.$element
            .addClass(this.options.initialClass)
            .removeClass(this.options.pinnedClass)
            .removeClass(this.options.unpinnedClass),
          (this.lastScrollY = window.pageYOffset),
          t_.on("scroll", function () {
            return t.onScroll();
          }));
      }),
      (ty.prototype.disable = function () {
        var t = this;
        this.isEnable &&
          ((this.isEnable = !1),
          this.$element
            .removeClass(this.options.initialClass)
            .removeClass(this.options.pinnedClass)
            .removeClass(this.options.unpinnedClass),
          t_.off("scroll", function () {
            return t.onScroll();
          }),
          window.cancelAnimationFrame(this.rafId));
      }),
      (ty.prototype.getState = function () {
        return this.state;
      }),
      (R.Headroom = ty);
    var tw = "mdui-headroom";
    function t0(t, e) {
      void 0 === e && (e = {}), (this.options = V({}, tC));
      var n = "mdui-" + this.getNamespace() + "-item";
      (this.classItem = n),
        (this.classItemOpen = n + "-open"),
        (this.classHeader = n + "-header"),
        (this.classBody = n + "-body"),
        (this.$element = B(t).first()),
        V(this.options, e),
        this.bindEvent();
    }
    B(function () {
      R.mutation("[" + tw + "]", function () {
        new R.Headroom(this, tx(this, tw));
      });
    });
    var tC = { accordion: !1 };
    (t0.prototype.bindEvent = function () {
      var t = this;
      this.$element.on("click", "." + this.classHeader, function () {
        var e = B(this).parent();
        t.getItems().each(function (n, i) {
          e.is(i) && t.toggle(i);
        });
      }),
        this.$element.on(
          "click",
          "[mdui-" + this.getNamespace() + "-item-close]",
          function () {
            var e = B(this)
              .parents("." + t.classItem)
              .first();
            t.close(e);
          }
        );
    }),
      (t0.prototype.isOpen = function (t) {
        return t.hasClass(this.classItemOpen);
      }),
      (t0.prototype.getItems = function () {
        return this.$element.children("." + this.classItem);
      }),
      (t0.prototype.getItem = function (t) {
        return v(t) ? this.getItems().eq(t) : B(t).first();
      }),
      (t0.prototype.triggerEvent = function (t, e) {
        tg(t, this.getNamespace(), e, this);
      }),
      (t0.prototype.transitionEnd = function (t, e) {
        this.isOpen(e)
          ? (t.transition(0).height("auto").reflow().transition(""),
            this.triggerEvent("opened", e))
          : (t.height(""), this.triggerEvent("closed", e));
      }),
      (t0.prototype.open = function (t) {
        var e = this,
          n = this.getItem(t);
        if (!this.isOpen(n)) {
          this.options.accordion &&
            this.$element
              .children("." + this.classItemOpen)
              .each(function (t, i) {
                var o = B(i);
                o.is(n) || e.close(o);
              });
          var i = n.children("." + this.classBody);
          i.height(i[0].scrollHeight).transitionEnd(function () {
            return e.transitionEnd(i, n);
          }),
            this.triggerEvent("open", n),
            n.addClass(this.classItemOpen);
        }
      }),
      (t0.prototype.close = function (t) {
        var e = this,
          n = this.getItem(t);
        if (this.isOpen(n)) {
          var i = n.children("." + this.classBody);
          this.triggerEvent("close", n),
            n.removeClass(this.classItemOpen),
            i
              .transition(0)
              .height(i[0].scrollHeight)
              .reflow()
              .transition("")
              .height("")
              .transitionEnd(function () {
                return e.transitionEnd(i, n);
              });
        }
      }),
      (t0.prototype.toggle = function (t) {
        var e = this.getItem(t);
        this.isOpen(e) ? this.close(e) : this.open(e);
      }),
      (t0.prototype.openAll = function () {
        var t = this;
        this.getItems().each(function (e, n) {
          return t.open(n);
        });
      }),
      (t0.prototype.closeAll = function () {
        var t = this;
        this.getItems().each(function (e, n) {
          return t.close(n);
        });
      });
    var tk = (function (t) {
      function e() {
        t.apply(this, arguments);
      }
      return (
        t && (e.__proto__ = t),
        (((e.prototype = Object.create(t && t.prototype)).constructor =
          e).prototype.getNamespace = function () {
          return "collapse";
        }),
        e
      );
    })(t0);
    R.Collapse = tk;
    var t8 = "mdui-collapse";
    B(function () {
      R.mutation("[" + t8 + "]", function () {
        new R.Collapse(this, tx(this, t8));
      });
    });
    var t3 = (function (t) {
      function e() {
        t.apply(this, arguments);
      }
      return (
        t && (e.__proto__ = t),
        (((e.prototype = Object.create(t && t.prototype)).constructor =
          e).prototype.getNamespace = function () {
          return "panel";
        }),
        e
      );
    })(t0);
    R.Panel = t3;
    var tE = "mdui-panel";
    function tT(t) {
      (this.$thRow = B()),
        (this.$tdRows = B()),
        (this.$thCheckbox = B()),
        (this.$tdCheckboxs = B()),
        (this.selectable = !1),
        (this.selectedRow = 0),
        (this.$element = B(t).first()),
        this.init();
    }
    B(function () {
      R.mutation("[" + tE + "]", function () {
        new R.Panel(this, tx(this, tE));
      });
    }),
      (tT.prototype.init = function () {
        (this.$thRow = this.$element.find("thead tr")),
          (this.$tdRows = this.$element.find("tbody tr")),
          (this.selectable = this.$element.hasClass("mdui-table-selectable")),
          this.updateThCheckbox(),
          this.updateTdCheckbox(),
          this.updateNumericCol();
      }),
      (tT.prototype.createCheckboxHTML = function (t) {
        return (
          "<" +
          t +
          ' class="mdui-table-cell-checkbox"><label class="mdui-checkbox"><input type="checkbox"/><i class="mdui-checkbox-icon"></i></label></' +
          t +
          ">"
        );
      }),
      (tT.prototype.updateThCheckboxStatus = function () {
        var t = this.$thCheckbox[0],
          e = this.selectedRow,
          n = this.$tdRows.length;
        (t.checked = e === n), (t.indeterminate = !!e && e !== n);
      }),
      (tT.prototype.updateTdCheckbox = function () {
        var t = this,
          e = "mdui-table-row-selected";
        this.$tdRows.each(function (n, i) {
          var o = B(i);
          if ((o.find(".mdui-table-cell-checkbox").remove(), t.selectable)) {
            var r = B(t.createCheckboxHTML("td"))
              .prependTo(o)
              .find('input[type="checkbox"]');
            o.hasClass(e) && ((r[0].checked = !0), t.selectedRow++),
              t.updateThCheckboxStatus(),
              r.on("change", function () {
                r[0].checked
                  ? (o.addClass(e), t.selectedRow++)
                  : (o.removeClass(e), t.selectedRow--),
                  t.updateThCheckboxStatus();
              }),
              (t.$tdCheckboxs = t.$tdCheckboxs.add(r));
          }
        });
      }),
      (tT.prototype.updateThCheckbox = function () {
        var t = this;
        this.$thRow.find(".mdui-table-cell-checkbox").remove(),
          this.selectable &&
            (this.$thCheckbox = B(this.createCheckboxHTML("th"))
              .prependTo(this.$thRow)
              .find('input[type="checkbox"]')
              .on("change", function () {
                var e = t.$thCheckbox[0].checked;
                (t.selectedRow = e ? t.$tdRows.length : 0),
                  t.$tdCheckboxs.each(function (t, n) {
                    n.checked = e;
                  }),
                  t.$tdRows.each(function (t, n) {
                    e
                      ? B(n).addClass("mdui-table-row-selected")
                      : B(n).removeClass("mdui-table-row-selected");
                  });
              }));
      }),
      (tT.prototype.updateNumericCol = function () {
        var t = this,
          e = "mdui-table-col-numeric";
        this.$thRow.find("th").each(function (n, i) {
          var o = B(i).hasClass(e);
          t.$tdRows.each(function (t, i) {
            var r = B(i).find("td").eq(n);
            o ? r.addClass(e) : r.removeClass(e);
          });
        });
      });
    var t1 = "_mdui_table";
    B(function () {
      R.mutation(".mdui-table", function () {
        var t = B(this);
        t.data(t1) || t.data(t1, new tT(t));
      });
    }),
      (R.updateTables = function (t) {
        (g(t) ? B(".mdui-table") : B(t)).each(function (t, e) {
          var n = B(e),
            i = n.data(t1);
          i ? i.init() : n.data(t1, new tT(n));
        });
      });
    var tN = "touchstart mousedown",
      tS = "touchmove mousemove",
      t9 = "touchend mouseup",
      tO = "touchcancel mouseleave",
      t4 = "touchend touchmove touchcancel",
      t2 = 0;
    function tA(t) {
      return !(
        t2 &&
        -1 <
          [
            "mousedown",
            "mouseup",
            "mousemove",
            "click",
            "mouseover",
            "mouseout",
            "mouseenter",
            "mouseleave",
          ].indexOf(t.type)
      );
    }
    function t6(t) {
      "touchstart" === t.type
        ? (t2 += 1)
        : -1 < ["touchmove", "touchend", "touchcancel"].indexOf(t.type) &&
          setTimeout(function () {
            t2 && --t2;
          }, 500);
    }
    function tj(t, e) {
      if (!(t instanceof MouseEvent && 2 === t.button)) {
        var n =
            "undefined" != typeof TouchEvent &&
            t instanceof TouchEvent &&
            t.touches.length
              ? t.touches[0]
              : t,
          i = n.pageX,
          o = n.pageY,
          r = e.offset(),
          s = e.innerHeight(),
          a = e.innerWidth(),
          l = i - r.left,
          u = o - r.top,
          c = Math.max(Math.pow(Math.pow(s, 2) + Math.pow(a, 2), 0.5), 48),
          d =
            "translate3d(" +
            (a / 2 - l) +
            "px," +
            (s / 2 - u) +
            "px, 0) scale(1)";
        B(
          '<div class="mdui-ripple-wave" style="width:' +
            c +
            "px;height:" +
            c +
            "px;margin-top:-" +
            c / 2 +
            "px;margin-left:-" +
            c / 2 +
            "px;left:" +
            l +
            "px;top:" +
            u +
            'px;"></div>'
        )
          .data("_ripple_wave_translate", d)
          .prependTo(e)
          .reflow()
          .transform(d);
      }
    }
    function tD() {
      var t = B(this);
      t.children(".mdui-ripple-wave").each(function (t, e) {
        !(function (t) {
          if (t.length && !t.data("_ripple_wave_removed")) {
            t.data("_ripple_wave_removed", !0);
            var e = setTimeout(function () {
                return t.remove();
              }, 400),
              n = t.data("_ripple_wave_translate");
            t.addClass("mdui-ripple-wave-fill")
              .transform(n.replace("scale(1)", "scale(1.01)"))
              .transitionEnd(function () {
                clearTimeout(e),
                  t
                    .addClass("mdui-ripple-wave-out")
                    .transform(n.replace("scale(1)", "scale(1.01)")),
                  (e = setTimeout(function () {
                    return t.remove();
                  }, 700)),
                  setTimeout(function () {
                    t.transitionEnd(function () {
                      clearTimeout(e), t.remove();
                    });
                  }, 0);
              });
          }
        })(B(e));
      }),
        t.off(tS + " " + t9 + " " + tO, tD);
    }
    function tL(t) {
      if (tA(t) && (t6(t), t.target !== document)) {
        var e = B(t.target),
          n = e.hasClass("mdui-ripple") ? e : e.parents(".mdui-ripple").first();
        if (n.length && !n.prop("disabled") && g(n.attr("disabled"))) {
          if ("touchstart" === t.type) {
            var i = !1,
              o = setTimeout(function () {
                (o = 0), tj(t, n);
              }, 200),
              r = function () {
                o && (clearTimeout(o), (o = 0), tj(t, n)),
                  i || ((i = !0), tD.call(n));
              };
            n.on("touchmove", function () {
              o && (clearTimeout(o), (o = 0)), r();
            }).on("touchend touchcancel", r);
          } else tj(t, n), n.on(tS + " " + t9 + " " + tO, tD);
        }
      }
    }
    B(function () {
      t$.on(tN, tL).on(t4, t6);
    });
    var t7 = { reInit: !1, domLoadedEvent: !1 };
    function tI(t, e) {
      void 0 === e && (e = {}), (e = V({}, t7, e));
      var n = t.target,
        i = B(n),
        o = t.type,
        r = i.val();
      if (
        !(
          -1 <
          ["checkbox", "button", "submit", "range", "radio", "image"].indexOf(
            i.attr("type") || ""
          )
        )
      ) {
        var s = i.parent(".mdui-textfield");
        if (
          ("focus" === o && s.addClass("mdui-textfield-focus"),
          "blur" === o && s.removeClass("mdui-textfield-focus"),
          ("blur" !== o && "input" !== o) ||
            (r
              ? s.addClass("mdui-textfield-not-empty")
              : s.removeClass("mdui-textfield-not-empty")),
          n.disabled
            ? s.addClass("mdui-textfield-disabled")
            : s.removeClass("mdui-textfield-disabled"),
          ("input" !== o && "blur" !== o) ||
            e.domLoadedEvent ||
            !n.validity ||
            (n.validity.valid
              ? s.removeClass("mdui-textfield-invalid-html5")
              : s.addClass("mdui-textfield-invalid-html5")),
          i.is("textarea"))
        ) {
          var a = r,
            l = !1;
          "" === a.replace(/[\r\n]/g, "") && (i.val(" " + a), (l = !0)),
            i.outerHeight("");
          var u = i.outerHeight(),
            c = n.scrollHeight;
          u < c && i.outerHeight(c), l && i.val(a);
        }
        e.reInit && s.find(".mdui-textfield-counter").remove();
        var d = i.attr("maxlength");
        d &&
          ((e.reInit || e.domLoadedEvent) &&
            B(
              '<div class="mdui-textfield-counter"><span class="mdui-textfield-counter-inputed"></span> / ' +
                d +
                "</div>"
            ).appendTo(s),
          s.find(".mdui-textfield-counter-inputed").text(r.length.toString())),
          (s.find(".mdui-textfield-helper").length ||
            s.find(".mdui-textfield-error").length ||
            d) &&
            s.addClass("mdui-textfield-has-bottom");
      }
    }
    function t5(t) {
      var e = t.data(),
        n = e._slider_$track,
        i = e._slider_$fill,
        o = e._slider_$thumb,
        r = e._slider_$input,
        s = e._slider_min,
        a = e._slider_max,
        l = e._slider_disabled,
        u = e._slider_discrete,
        c = e._slider_$thumbText,
        d = r.val(),
        h = ((d - s) / (a - s)) * 100;
      i.width(h + "%"),
        n.width(100 - h + "%"),
        l && (i.css("padding-right", "6px"), n.css("padding-left", "6px")),
        o.css("left", h + "%"),
        u && c.text(d),
        0 == h
          ? t.addClass("mdui-slider-zero")
          : t.removeClass("mdui-slider-zero");
    }
    function tM(t) {
      var e = B('<div class="mdui-slider-track"></div>'),
        n = B('<div class="mdui-slider-fill"></div>'),
        i = B('<div class="mdui-slider-thumb"></div>'),
        o = t.find('input[type="range"]'),
        r = o[0].disabled,
        s = t.hasClass("mdui-slider-discrete");
      r
        ? t.addClass("mdui-slider-disabled")
        : t.removeClass("mdui-slider-disabled"),
        t.find(".mdui-slider-track").remove(),
        t.find(".mdui-slider-fill").remove(),
        t.find(".mdui-slider-thumb").remove(),
        t.append(e).append(n).append(i);
      var a = B();
      s && ((a = B("<span></span>")), i.empty().append(a)),
        t.data("_slider_$track", e),
        t.data("_slider_$fill", n),
        t.data("_slider_$thumb", i),
        t.data("_slider_$input", o),
        t.data("_slider_min", o.attr("min")),
        t.data("_slider_max", o.attr("max")),
        t.data("_slider_disabled", r),
        t.data("_slider_discrete", s),
        t.data("_slider_$thumbText", a),
        t5(t);
    }
    B(function () {
      t$.on(
        "input focus blur",
        ".mdui-textfield-input",
        { useCapture: !0 },
        tI
      ),
        t$.on(
          "click",
          ".mdui-textfield-expandable .mdui-textfield-icon",
          function () {
            B(this)
              .parents(".mdui-textfield")
              .addClass("mdui-textfield-expanded")
              .find(".mdui-textfield-input")[0]
              .focus();
          }
        ),
        t$.on(
          "click",
          ".mdui-textfield-expanded .mdui-textfield-close",
          function () {
            B(this)
              .parents(".mdui-textfield")
              .removeClass("mdui-textfield-expanded")
              .find(".mdui-textfield-input")
              .val("");
          }
        ),
        R.mutation(".mdui-textfield", function () {
          B(this)
            .find(".mdui-textfield-input")
            .trigger("input", { domLoadedEvent: !0 });
        });
    }),
      (R.updateTextFields = function (t) {
        (g(t) ? B(".mdui-textfield") : B(t)).each(function (t, e) {
          B(e).find(".mdui-textfield-input").trigger("input", { reInit: !0 });
        });
      });
    var tF = '.mdui-slider input[type="range"]';
    function tB(t, e) {
      var n = this;
      void 0 === e && (e = {}),
        (this.options = V({}, tR)),
        (this.state = "closed"),
        (this.$element = B(t).first()),
        V(this.options, e),
        (this.$btn = this.$element.find(".mdui-fab")),
        (this.$dial = this.$element.find(".mdui-fab-dial")),
        (this.$dialBtns = this.$dial.find(".mdui-fab")),
        "hover" === this.options.trigger &&
          (this.$btn.on("touchstart mouseenter", function () {
            return n.open();
          }),
          this.$element.on("mouseleave", function () {
            return n.close();
          })),
        "click" === this.options.trigger &&
          this.$btn.on(tN, function () {
            return n.open();
          }),
        t$.on(tN, function (t) {
          B(t.target).parents(".mdui-fab-wrapper").length || n.close();
        });
    }
    B(function () {
      t$.on("input change", tF, function () {
        t5(B(this).parent());
      }),
        t$.on(tN, tF, function (t) {
          tA(t) &&
            (t6(t),
            this.disabled || B(this).parent().addClass("mdui-slider-focus"));
        }),
        t$.on(t9, tF, function (t) {
          tA(t) &&
            (this.disabled ||
              B(this).parent().removeClass("mdui-slider-focus"));
        }),
        t$.on(t4, tF, t6),
        R.mutation(".mdui-slider", function () {
          tM(B(this));
        });
    }),
      (R.updateSliders = function (t) {
        (g(t) ? B(".mdui-slider") : B(t)).each(function (t, e) {
          tM(B(e));
        });
      });
    var tR = { trigger: "hover" };
    (tB.prototype.triggerEvent = function (t) {
      tg(t, "fab", this.$element, this);
    }),
      (tB.prototype.isOpen = function () {
        return "opening" === this.state || "opened" === this.state;
      }),
      (tB.prototype.open = function () {
        var t = this;
        this.isOpen() ||
          (this.$dialBtns.each(function (e, n) {
            var i = 15 * (t.$dialBtns.length - e) + "ms";
            (n.style.transitionDelay = i), (n.style.webkitTransitionDelay = i);
          }),
          this.$dial.css("height", "auto").addClass("mdui-fab-dial-show"),
          this.$btn.find(".mdui-fab-opened").length &&
            this.$btn.addClass("mdui-fab-opened"),
          (this.state = "opening"),
          this.triggerEvent("open"),
          this.$dialBtns.first().transitionEnd(function () {
            t.$btn.hasClass("mdui-fab-opened") &&
              ((t.state = "opened"), t.triggerEvent("opened"));
          }));
      }),
      (tB.prototype.close = function () {
        var t = this;
        this.isOpen() &&
          (this.$dialBtns.each(function (t, e) {
            var n = 15 * t + "ms";
            (e.style.transitionDelay = n), (e.style.webkitTransitionDelay = n);
          }),
          this.$dial.removeClass("mdui-fab-dial-show"),
          this.$btn.removeClass("mdui-fab-opened"),
          (this.state = "closing"),
          this.triggerEvent("close"),
          this.$dialBtns.last().transitionEnd(function () {
            t.$btn.hasClass("mdui-fab-opened") ||
              ((t.state = "closed"),
              t.triggerEvent("closed"),
              t.$dial.css("height", 0));
          }));
      }),
      (tB.prototype.toggle = function () {
        this.isOpen() ? this.close() : this.open();
      }),
      (tB.prototype.show = function () {
        this.$element.removeClass("mdui-fab-hide");
      }),
      (tB.prototype.hide = function () {
        this.$element.addClass("mdui-fab-hide");
      }),
      (tB.prototype.getState = function () {
        return this.state;
      }),
      (R.Fab = tB);
    var tH = "mdui-fab";
    function tP(t, e) {
      var n = this;
      void 0 === e && (e = {}),
        (this.$element = B()),
        (this.options = V({}, tq)),
        (this.size = 0),
        (this.$selected = B()),
        (this.$menu = B()),
        (this.$items = B()),
        (this.selectedIndex = 0),
        (this.selectedText = ""),
        (this.selectedValue = ""),
        (this.state = "closed"),
        (this.$native = B(t).first()),
        this.$native.hide(),
        V(this.options, e),
        (this.uniqueID = B.guid()),
        this.handleUpdate(),
        t$.on("click touchstart", function (t) {
          var e = B(t.target);
          !n.isOpen() ||
            e.is(n.$element) ||
            H(n.$element[0], e[0]) ||
            n.close();
        });
    }
    B(function () {
      t$.on("touchstart mousedown mouseover", "[" + tH + "]", function () {
        new R.Fab(this, tx(this, tH));
      });
    });
    var tq = { position: "auto", gutter: 16 };
    (tP.prototype.readjustMenu = function () {
      var t,
        e,
        n = t_.height(),
        i = this.$element.height(),
        o = this.$items.first(),
        r = o.height(),
        s = parseInt(o.css("margin-top")),
        a = this.$element.innerWidth() + 0.01,
        l = r * this.size + 2 * s,
        u = this.$element[0].getBoundingClientRect().top;
      if ("bottom" === this.options.position) (e = i), (t = "0px");
      else if ("top" === this.options.position) (e = -l - 1), (t = "100%");
      else {
        var c = n - 2 * this.options.gutter;
        c < l && (l = c), (e = -(s + this.selectedIndex * r + (r - i) / 2));
        var d = -(s + (this.size - 1) * r + (r - i) / 2);
        e < d && (e = d);
        var h = u + e;
        h < this.options.gutter
          ? (e = -(u - this.options.gutter))
          : h + l + this.options.gutter > n &&
            (e = -(u + l + this.options.gutter - n)),
          (t = this.selectedIndex * r + r / 2 + s + "px");
      }
      this.$element.innerWidth(a),
        this.$menu
          .innerWidth(a)
          .height(l)
          .css({
            "margin-top": e + "px",
            "transform-origin": "center " + t + " 0",
          });
    }),
      (tP.prototype.isOpen = function () {
        return "opening" === this.state || "opened" === this.state;
      }),
      (tP.prototype.handleUpdate = function () {
        var t = this;
        this.isOpen() && this.close(),
          (this.selectedValue = this.$native.val());
        var e = [];
        (this.$items = B()),
          this.$native.find("option").each(function (n, i) {
            var o = i.textContent || "",
              r = i.value,
              s = i.disabled,
              a = t.selectedValue === r;
            e.push({ value: r, text: o, disabled: s, selected: a, index: n }),
              a && ((t.selectedText = o), (t.selectedIndex = n)),
              (t.$items = t.$items.add(
                '<div class="mdui-select-menu-item mdui-ripple"' +
                  (s ? " disabled" : "") +
                  (a ? " selected" : "") +
                  ">" +
                  o +
                  "</div>"
              ));
          }),
          (this.$selected = B(
            '<span class="mdui-select-selected">' +
              this.selectedText +
              "</span>"
          )),
          (this.$element = B(
            '<div class="mdui-select mdui-select-position-' +
              this.options.position +
              '" style="' +
              this.$native.attr("style") +
              '" id="' +
              this.uniqueID +
              '"></div>'
          )
            .show()
            .append(this.$selected)),
          (this.$menu = B('<div class="mdui-select-menu"></div>')
            .appendTo(this.$element)
            .append(this.$items)),
          B("#" + this.uniqueID).remove(),
          this.$native.after(this.$element),
          (this.size = parseInt(this.$native.attr("size") || "0")),
          this.size <= 0 &&
            ((this.size = this.$items.length),
            8 < this.size && (this.size = 8));
        var n = this;
        this.$items.on("click", function () {
          if ("closing" !== n.state) {
            var t = B(this),
              i = e[t.index()];
            i.disabled ||
              (n.$selected.text(i.text),
              n.$native.val(i.value),
              n.$items.removeAttr("selected"),
              t.attr("selected", ""),
              (n.selectedIndex = i.index),
              (n.selectedValue = i.value),
              (n.selectedText = i.text),
              n.$native.trigger("change"),
              n.close());
          }
        }),
          this.$element.on("click", function (e) {
            var n = B(e.target);
            n.is(".mdui-select-menu") ||
              n.is(".mdui-select-menu-item") ||
              t.toggle();
          });
      }),
      (tP.prototype.transitionEnd = function () {
        this.$element.removeClass("mdui-select-closing"),
          "opening" === this.state &&
            ((this.state = "opened"),
            this.triggerEvent("opened"),
            this.$menu.css("overflow-y", "auto")),
          "closing" === this.state &&
            ((this.state = "closed"),
            this.triggerEvent("closed"),
            this.$element.innerWidth(""),
            this.$menu.css({ "margin-top": "", height: "", width: "" }));
      }),
      (tP.prototype.triggerEvent = function (t) {
        tg(t, "select", this.$native, this);
      }),
      (tP.prototype.toggle = function () {
        this.isOpen() ? this.close() : this.open();
      }),
      (tP.prototype.open = function () {
        var t = this;
        this.isOpen() ||
          ((this.state = "opening"),
          this.triggerEvent("open"),
          this.readjustMenu(),
          this.$element.addClass("mdui-select-open"),
          this.$menu.transitionEnd(function () {
            return t.transitionEnd();
          }));
      }),
      (tP.prototype.close = function () {
        var t = this;
        this.isOpen() &&
          ((this.state = "closing"),
          this.triggerEvent("close"),
          this.$menu.css("overflow-y", ""),
          this.$element
            .removeClass("mdui-select-open")
            .addClass("mdui-select-closing"),
          this.$menu.transitionEnd(function () {
            return t.transitionEnd();
          }));
      }),
      (tP.prototype.getState = function () {
        return this.state;
      }),
      (R.Select = tP);
    var tz = "mdui-select";
    function tW(t, e) {
      var n = this;
      void 0 === e && (e = {}),
        (this.options = V({}, tZ)),
        (this.activeIndex = -1),
        (this.$element = B(t).first()),
        V(this.options, e),
        (this.$tabs = this.$element.children("a")),
        (this.$indicator = B('<div class="mdui-tab-indicator"></div>').appendTo(
          this.$element
        ));
      var i = window.location.hash;
      i &&
        this.$tabs.each(function (t, e) {
          return B(e).attr("href") !== i || ((n.activeIndex = t), !1);
        }),
        -1 === this.activeIndex &&
          this.$tabs.each(function (t, e) {
            return (
              !B(e).hasClass("mdui-tab-active") || ((n.activeIndex = t), !1)
            );
          }),
        this.$tabs.length && -1 === this.activeIndex && (this.activeIndex = 0),
        this.setActive(),
        t_.on(
          "resize",
          B.throttle(function () {
            return n.setIndicatorPosition();
          }, 100)
        ),
        this.$tabs.each(function (t, e) {
          n.bindTabEvent(e);
        });
    }
    B(function () {
      R.mutation("[" + tz + "]", function () {
        new R.Select(this, tx(this, tz));
      });
    }),
      B(function () {
        R.mutation(".mdui-appbar-scroll-hide", function () {
          new R.Headroom(this);
        }),
          R.mutation(".mdui-appbar-scroll-toolbar-hide", function () {
            new R.Headroom(this, {
              pinnedClass: "mdui-headroom-pinned-toolbar",
              unpinnedClass: "mdui-headroom-unpinned-toolbar",
            });
          });
      });
    var tZ = { trigger: "click", loop: !1 };
    (tW.prototype.isDisabled = function (t) {
      return void 0 !== t.attr("disabled");
    }),
      (tW.prototype.bindTabEvent = function (t) {
        function e() {
          if (n.isDisabled(i)) return !1;
          (n.activeIndex = n.$tabs.index(t)), n.setActive();
        }
        var n = this,
          i = B(t);
        i.on("click", e),
          "hover" === this.options.trigger && i.on("mouseenter", e),
          i.on("click", function () {
            if (0 === (i.attr("href") || "").indexOf("#")) return !1;
          });
      }),
      (tW.prototype.triggerEvent = function (t, e, n) {
        void 0 === n && (n = {}), tg(t, "tab", e, this, n);
      }),
      (tW.prototype.setActive = function () {
        var t = this;
        this.$tabs.each(function (e, n) {
          var i = B(n),
            o = i.attr("href") || "";
          e !== t.activeIndex || t.isDisabled(i)
            ? (i.removeClass("mdui-tab-active"), B(o).hide())
            : (i.hasClass("mdui-tab-active") ||
                (t.triggerEvent("change", t.$element, {
                  index: t.activeIndex,
                  id: o.substr(1),
                }),
                t.triggerEvent("show", i),
                i.addClass("mdui-tab-active")),
              B(o).show(),
              t.setIndicatorPosition());
        });
      }),
      (tW.prototype.setIndicatorPosition = function () {
        if (-1 !== this.activeIndex) {
          var t = this.$tabs.eq(this.activeIndex);
          if (!this.isDisabled(t)) {
            var e = t.offset();
            this.$indicator.css({
              left:
                e.left +
                this.$element[0].scrollLeft -
                this.$element[0].getBoundingClientRect().left +
                "px",
              width: t.innerWidth() + "px",
            });
          }
        } else this.$indicator.css({ left: 0, width: 0 });
      }),
      (tW.prototype.next = function () {
        -1 !== this.activeIndex &&
          (this.$tabs.length > this.activeIndex + 1
            ? this.activeIndex++
            : this.options.loop && (this.activeIndex = 0),
          this.setActive());
      }),
      (tW.prototype.prev = function () {
        -1 !== this.activeIndex &&
          (0 < this.activeIndex
            ? this.activeIndex--
            : this.options.loop && (this.activeIndex = this.$tabs.length - 1),
          this.setActive());
      }),
      (tW.prototype.show = function (t) {
        var e = this;
        -1 !== this.activeIndex &&
          (v(t)
            ? (this.activeIndex = t)
            : this.$tabs.each(function (n, i) {
                if (i.id === t) return (e.activeIndex = n), !1;
              }),
          this.setActive());
      }),
      (tW.prototype.handleUpdate = function () {
        var t = this,
          e = this.$tabs,
          n = this.$element.children("a"),
          i = e.get(),
          o = n.get();
        if (!n.length)
          return (
            (this.activeIndex = -1),
            (this.$tabs = n),
            void this.setIndicatorPosition()
          );
        n.each(function (e, n) {
          0 > i.indexOf(n) &&
            (t.bindTabEvent(n),
            -1 === t.activeIndex
              ? (t.activeIndex = 0)
              : e <= t.activeIndex && t.activeIndex++);
        }),
          e.each(function (e, n) {
            0 > o.indexOf(n) &&
              (e < t.activeIndex
                ? t.activeIndex--
                : e === t.activeIndex && (t.activeIndex = 0));
          }),
          (this.$tabs = n),
          this.setActive();
      }),
      (R.Tab = tW);
    var tX = "mdui-tab";
    function tU(t, e) {
      var n = this;
      void 0 === e && (e = {}),
        (this.options = V({}, tV)),
        (this.overlay = !1),
        (this.$element = B(t).first()),
        V(this.options, e),
        (this.position = this.$element.hasClass("mdui-drawer-right")
          ? "right"
          : "left"),
        this.$element.hasClass("mdui-drawer-close")
          ? (this.state = "closed")
          : this.$element.hasClass("mdui-drawer-open") || this.isDesktop()
          ? (this.state = "opened")
          : (this.state = "closed"),
        t_.on(
          "resize",
          B.throttle(function () {
            n.isDesktop()
              ? (n.overlay &&
                  !n.options.overlay &&
                  (B.hideOverlay(), (n.overlay = !1), B.unlockScreen()),
                n.$element.hasClass("mdui-drawer-close") ||
                  (n.state = "opened"))
              : n.overlay ||
                "opened" !== n.state ||
                (n.$element.hasClass("mdui-drawer-open")
                  ? (B.showOverlay(),
                    (n.overlay = !0),
                    B.lockScreen(),
                    B(".mdui-overlay").one("click", function () {
                      return n.close();
                    }))
                  : (n.state = "closed"));
          }, 100)
        ),
        this.$element.find("[mdui-drawer-close]").each(function (t, e) {
          B(e).on("click", function () {
            return n.close();
          });
        }),
        this.swipeSupport();
    }
    B(function () {
      R.mutation("[" + tX + "]", function () {
        new R.Tab(this, tx(this, tX));
      });
    });
    var tV = { overlay: !1, swipe: !1 };
    (tU.prototype.isDesktop = function () {
      return 1024 <= t_.width();
    }),
      (tU.prototype.swipeSupport = function () {
        var t,
          e,
          n,
          i,
          o = this,
          r = null,
          s = !1,
          a = B("body"),
          l = 24;
        function u(t) {
          var e =
            "translate(" +
            -1 * ("right" === o.position ? -1 : 1) * t +
            "px, 0) !important;";
          o.$element.css(
            "cssText",
            "transform: " + e + "; transition: initial !important;;"
          );
        }
        function c() {
          (o.$element[0].style.transform = ""),
            (o.$element[0].style.webkitTransform = ""),
            (o.$element[0].style.transition = ""),
            (o.$element[0].style.webkitTransition = "");
        }
        function d() {
          return o.$element.width() + 10;
        }
        function h(t) {
          return Math.min(
            Math.max("closing" === r ? i - t : d() + i - t, 0),
            d()
          );
        }
        function f(t) {
          if (r) {
            var e = t.changedTouches[0].pageX;
            "right" === o.position && (e = a.width() - e);
            var n = h(e) / d();
            s = !1;
            var i = r;
            (r = null),
              "opening" === i
                ? n < 0.92
                  ? (c(), o.open())
                  : c()
                : 0.08 < n
                ? (c(), o.close())
                : c(),
              B.unlockScreen();
          } else s = !1;
          a.off({ touchmove: p, touchend: f, touchcancel: p });
        }
        function p(t) {
          var l = t.touches[0].pageX;
          "right" === o.position && (l = a.width() - l);
          var c = t.touches[0].pageY;
          if (r) u(h(l));
          else if (s) {
            var d = Math.abs(l - e),
              p = Math.abs(c - n);
            8 < d && p <= 8
              ? ((i = l),
                (r = "opened" === o.state ? "closing" : "opening"),
                B.lockScreen(),
                u(h(l)))
              : d <= 8 && 8 < p && f();
          }
        }
        function m(i) {
          (e = i.touches[0].pageX),
            "right" === o.position && (e = a.width() - e),
            (n = i.touches[0].pageY),
            ("opened" !== o.state && (l < e || t !== m)) ||
              ((s = !0), a.on({ touchmove: p, touchend: f, touchcancel: p }));
        }
        this.options.swipe && (t || (a.on("touchstart", m), (t = m)));
      }),
      (tU.prototype.triggerEvent = function (t) {
        tg(t, "drawer", this.$element, this);
      }),
      (tU.prototype.transitionEnd = function () {
        this.$element.hasClass("mdui-drawer-open")
          ? ((this.state = "opened"), this.triggerEvent("opened"))
          : ((this.state = "closed"), this.triggerEvent("closed"));
      }),
      (tU.prototype.isOpen = function () {
        return "opening" === this.state || "opened" === this.state;
      }),
      (tU.prototype.open = function () {
        var t = this;
        this.isOpen() ||
          ((this.state = "opening"),
          this.triggerEvent("open"),
          this.options.overlay ||
            B("body").addClass("mdui-drawer-body-" + this.position),
          this.$element
            .removeClass("mdui-drawer-close")
            .addClass("mdui-drawer-open")
            .transitionEnd(function () {
              return t.transitionEnd();
            }),
          (this.isDesktop() && !this.options.overlay) ||
            ((this.overlay = !0),
            B.showOverlay().one("click", function () {
              return t.close();
            }),
            B.lockScreen()));
      }),
      (tU.prototype.close = function () {
        var t = this;
        this.isOpen() &&
          ((this.state = "closing"),
          this.triggerEvent("close"),
          this.options.overlay ||
            B("body").removeClass("mdui-drawer-body-" + this.position),
          this.$element
            .addClass("mdui-drawer-close")
            .removeClass("mdui-drawer-open")
            .transitionEnd(function () {
              return t.transitionEnd();
            }),
          this.overlay &&
            (B.hideOverlay(), (this.overlay = !1), B.unlockScreen()));
      }),
      (tU.prototype.toggle = function () {
        this.isOpen() ? this.close() : this.open();
      }),
      (tU.prototype.getState = function () {
        return this.state;
      }),
      (R.Drawer = tU);
    var tY = "mdui-drawer";
    B(function () {
      R.mutation("[" + tY + "]", function () {
        var t = B(this),
          e = tx(this, tY),
          n = e.target;
        delete e.target;
        var i = B(n).first(),
          o = new R.Drawer(i, e);
        t.on("click", function () {
          return o.toggle();
        });
      });
    });
    var tK = {};
    function tJ(t, e) {
      if ((g(tK[t]) && (tK[t] = []), g(e))) return tK[t];
      tK[t].push(e);
    }
    function tG(t) {
      g(tK[t]) || (tK[t].length && tK[t].shift()());
    }
    function tQ(t, e) {
      var n = this;
      void 0 === e && (e = {}),
        (this.options = V({}, ee)),
        (this.state = "closed"),
        (this.append = !1),
        (this.$element = B(t).first()),
        H(document.body, this.$element[0]) ||
          ((this.append = !0), B("body").append(this.$element)),
        V(this.options, e),
        this.$element.find("[mdui-dialog-cancel]").each(function (t, e) {
          B(e).on("click", function () {
            n.triggerEvent("cancel"), n.options.closeOnCancel && n.close();
          });
        }),
        this.$element.find("[mdui-dialog-confirm]").each(function (t, e) {
          B(e).on("click", function () {
            n.triggerEvent("confirm"), n.options.closeOnConfirm && n.close();
          });
        }),
        this.$element.find("[mdui-dialog-close]").each(function (t, e) {
          B(e).on("click", function () {
            return n.close();
          });
        });
    }
    var et,
      ee = {
        history: !0,
        overlay: !0,
        modal: !1,
        closeOnEsc: !0,
        closeOnCancel: !0,
        closeOnConfirm: !0,
        destroyOnClosed: !1,
      },
      en = null,
      ei = "_mdui_dialog",
      eo = !1;
    (tQ.prototype.triggerEvent = function (t) {
      tg(t, "dialog", this.$element, this);
    }),
      (tQ.prototype.readjust = function () {
        if (en) {
          var t = en.$element,
            e = t.children(".mdui-dialog-title"),
            n = t.children(".mdui-dialog-content"),
            i = t.children(".mdui-dialog-actions");
          t.height(""), n.height("");
          var o = t.height();
          t.css({ top: (t_.height() - o) / 2 + "px", height: o + "px" }),
            n.innerHeight(o - (e.innerHeight() || 0) - (i.innerHeight() || 0));
        }
      }),
      (tQ.prototype.hashchangeEvent = function () {
        0 > window.location.hash.substring(1).indexOf("mdui-dialog") &&
          en.close(!0);
      }),
      (tQ.prototype.overlayClick = function (t) {
        B(t.target).hasClass("mdui-overlay") && en && en.close();
      }),
      (tQ.prototype.transitionEnd = function () {
        this.$element.hasClass("mdui-dialog-open")
          ? ((this.state = "opened"), this.triggerEvent("opened"))
          : ((this.state = "closed"),
            this.triggerEvent("closed"),
            this.$element.hide(),
            tJ(ei).length || en || !eo || (B.unlockScreen(), (eo = !1)),
            t_.off("resize", B.throttle(this.readjust, 100)),
            this.options.destroyOnClosed && this.destroy());
      }),
      (tQ.prototype.doOpen = function () {
        var t = this;
        if (
          ((en = this),
          eo || (B.lockScreen(), (eo = !0)),
          this.$element.show(),
          this.readjust(),
          t_.on("resize", B.throttle(this.readjust, 100)),
          (this.state = "opening"),
          this.triggerEvent("open"),
          this.$element.addClass("mdui-dialog-open").transitionEnd(function () {
            return t.transitionEnd();
          }),
          (et = et || B.showOverlay(5100)),
          this.options.modal
            ? et.off("click", this.overlayClick)
            : et.on("click", this.overlayClick),
          et.css("opacity", this.options.overlay ? "" : 0),
          this.options.history)
        ) {
          var e = window.location.hash.substring(1);
          -1 < e.indexOf("mdui-dialog") &&
            (e = e.replace(/[&?]?mdui-dialog/g, "")),
            (window.location.hash = e
              ? e + (-1 < e.indexOf("?") ? "&" : "?") + "mdui-dialog"
              : "mdui-dialog"),
            t_.on("hashchange", this.hashchangeEvent);
        }
      }),
      (tQ.prototype.isOpen = function () {
        return "opening" === this.state || "opened" === this.state;
      }),
      (tQ.prototype.open = function () {
        var t = this;
        this.isOpen() ||
          ((en && ("opening" === en.state || "opened" === en.state)) ||
          tJ(ei).length
            ? tJ(ei, function () {
                return t.doOpen();
              })
            : this.doOpen());
      }),
      (tQ.prototype.close = function (t) {
        var e = this;
        void 0 === t && (t = !1),
          setTimeout(function () {
            e.isOpen() &&
              ((en = null),
              (e.state = "closing"),
              e.triggerEvent("close"),
              !tJ(ei).length &&
                et &&
                (B.hideOverlay(),
                (et = null),
                B(".mdui-overlay").css("z-index", 2e3)),
              e.$element
                .removeClass("mdui-dialog-open")
                .transitionEnd(function () {
                  return e.transitionEnd();
                }),
              e.options.history &&
                !tJ(ei).length &&
                (t || window.history.back(),
                t_.off("hashchange", e.hashchangeEvent)),
              setTimeout(function () {
                tG(ei);
              }, 100));
          });
      }),
      (tQ.prototype.toggle = function () {
        this.isOpen() ? this.close() : this.open();
      }),
      (tQ.prototype.getState = function () {
        return this.state;
      }),
      (tQ.prototype.destroy = function () {
        this.append && this.$element.remove(),
          tJ(ei).length ||
            en ||
            (et && (B.hideOverlay(), (et = null)),
            eo && (B.unlockScreen(), (eo = !1)));
      }),
      (tQ.prototype.handleUpdate = function () {
        this.readjust();
      }),
      t$.on("keydown", function (t) {
        en &&
          en.options.closeOnEsc &&
          "opened" === en.state &&
          27 === t.keyCode &&
          en.close();
      }),
      (R.Dialog = tQ);
    var er = "mdui-dialog",
      es = "_mdui_dialog";
    B(function () {
      t$.on("click", "[" + er + "]", function () {
        var t = tx(this, er),
          e = t.target;
        delete t.target;
        var n = B(e).first(),
          i = n.data(es);
        i || ((i = new R.Dialog(n, t)), n.data(es, i)), i.open();
      });
    });
    var ea = { text: "", bold: !1, close: !0, onClick: function () {} },
      el = {
        title: "",
        content: "",
        buttons: [],
        stackedButtons: !1,
        cssClass: "",
        history: !0,
        overlay: !0,
        modal: !1,
        closeOnEsc: !0,
        destroyOnClosed: !0,
        onOpen: function () {},
        onOpened: function () {},
        onClose: function () {},
        onClosed: function () {},
      },
      eu = {
        confirmText: "ok",
        history: !0,
        modal:
          ((R.dialog = function (t) {
            I((t = V({}, el, t)).buttons, function (e, n) {
              t.buttons[e] = V({}, ea, n);
            });
            var e,
              n,
              i = "";
            null !== (e = t.buttons) &&
              void 0 !== e &&
              e.length &&
              ((i =
                '<div class="mdui-dialog-actions' +
                (t.stackedButtons ? " mdui-dialog-actions-stacked" : "") +
                '">'),
              I(t.buttons, function (t, e) {
                i +=
                  '<a href="javascript:void(0)" class="mdui-btn mdui-ripple mdui-text-color-primary ' +
                  (e.bold ? "mdui-btn-bold" : "") +
                  '">' +
                  e.text +
                  "</a>";
              }),
              (i += "</div>"));
            var o =
                '<div class="mdui-dialog ' +
                t.cssClass +
                '">' +
                (t.title
                  ? '<div class="mdui-dialog-title">' + t.title + "</div>"
                  : "") +
                (t.content
                  ? '<div class="mdui-dialog-content">' + t.content + "</div>"
                  : "") +
                i +
                "</div>",
              r = new R.Dialog(o, {
                history: t.history,
                overlay: t.overlay,
                modal: t.modal,
                closeOnEsc: t.closeOnEsc,
                destroyOnClosed: t.destroyOnClosed,
              });
            return (
              null !== (n = t.buttons) &&
                void 0 !== n &&
                n.length &&
                r.$element
                  .find(".mdui-dialog-actions .mdui-btn")
                  .each(function (e, n) {
                    B(n).on("click", function () {
                      t.buttons[e].onClick(r), t.buttons[e].close && r.close();
                    });
                  }),
              r.$element
                .on("open.mdui.dialog", function () {
                  t.onOpen(r);
                })
                .on("opened.mdui.dialog", function () {
                  t.onOpened(r);
                })
                .on("close.mdui.dialog", function () {
                  t.onClose(r);
                })
                .on("closed.mdui.dialog", function () {
                  t.onClosed(r);
                }),
              r.open(),
              r
            );
          }),
          !1),
        closeOnEsc: !0,
        closeOnConfirm: !0,
      },
      ec = {
        confirmText: "ok",
        cancelText: "cancel",
        history: !0,
        modal:
          ((R.alert = function (t, e, n, i) {
            return (
              p(e) && ((i = n), (n = e), (e = "")),
              g(n) && (n = function () {}),
              g(i) && (i = {}),
              (i = V({}, eu, i)),
              R.dialog({
                title: e,
                content: t,
                buttons: [
                  {
                    text: i.confirmText,
                    bold: !1,
                    close: i.closeOnConfirm,
                    onClick: n,
                  },
                ],
                cssClass: "mdui-dialog-alert",
                history: i.history,
                modal: i.modal,
                closeOnEsc: i.closeOnEsc,
              })
            );
          }),
          !1),
        closeOnEsc: !0,
        closeOnCancel: !0,
        closeOnConfirm: !0,
      },
      ed = {
        confirmText: "ok",
        cancelText: "cancel",
        history: !0,
        modal:
          ((R.confirm = function (t, e, n, i, o) {
            return (
              p(e) && ((o = i), (i = n), (n = e), (e = "")),
              g(n) && (n = function () {}),
              g(i) && (i = function () {}),
              g(o) && (o = {}),
              (o = V({}, ec, o)),
              R.dialog({
                title: e,
                content: t,
                buttons: [
                  {
                    text: o.cancelText,
                    bold: !1,
                    close: o.closeOnCancel,
                    onClick: i,
                  },
                  {
                    text: o.confirmText,
                    bold: !1,
                    close: o.closeOnConfirm,
                    onClick: n,
                  },
                ],
                cssClass: "mdui-dialog-confirm",
                history: o.history,
                modal: o.modal,
                closeOnEsc: o.closeOnEsc,
              })
            );
          }),
          !1),
        closeOnEsc: !0,
        closeOnCancel: !0,
        closeOnConfirm: !0,
        type: "text",
        maxlength: 0,
        defaultValue: "",
        confirmOnEnter: !1,
      };
    function eh(t, e) {
      void 0 === e && (e = {}),
        (this.options = V({}, ef)),
        (this.state = "closed"),
        (this.timeoutId = null),
        (this.$target = B(t).first()),
        V(this.options, e),
        (this.$element = B(
          '<div class="mdui-tooltip" id="' +
            B.guid() +
            '">' +
            this.options.content +
            "</div>"
        ).appendTo(document.body));
      var n = this;
      this.$target
        .on("touchstart mouseenter", function (t) {
          n.isDisabled(this) || (tA(t) && (t6(t), n.open()));
        })
        .on("touchend mouseleave", function (t) {
          n.isDisabled(this) || (tA(t) && n.close());
        })
        .on(t4, function (t) {
          n.isDisabled(this) || t6(t);
        });
    }
    R.prompt = function (t, e, n, i, o) {
      p(e) && ((o = i), (i = n), (n = e), (e = "")),
        g(n) && (n = function () {}),
        g(i) && (i = function () {}),
        g(o) && (o = {});
      var r =
        '<div class="mdui-textfield">' +
        (t ? '<label class="mdui-textfield-label">' + t + "</label>" : "") +
        ("text" === (o = V({}, ed, o)).type
          ? '<input class="mdui-textfield-input" type="text" value="' +
            o.defaultValue +
            '" ' +
            (o.maxlength ? 'maxlength="' + o.maxlength + '"' : "") +
            "/>"
          : "") +
        ("textarea" === o.type
          ? '<textarea class="mdui-textfield-input" ' +
            (o.maxlength ? 'maxlength="' + o.maxlength + '"' : "") +
            ">" +
            o.defaultValue +
            "</textarea>"
          : "") +
        "</div>";
      return R.dialog({
        title: e,
        content: r,
        buttons: [
          {
            text: o.cancelText,
            bold: !1,
            close: o.closeOnCancel,
            onClick: function (t) {
              i(t.$element.find(".mdui-textfield-input").val(), t);
            },
          },
          {
            text: o.confirmText,
            bold: !1,
            close: o.closeOnConfirm,
            onClick: function (t) {
              n(t.$element.find(".mdui-textfield-input").val(), t);
            },
          },
        ],
        cssClass: "mdui-dialog-prompt",
        history: o.history,
        modal: o.modal,
        closeOnEsc: o.closeOnEsc,
        onOpen: function (t) {
          var e = t.$element.find(".mdui-textfield-input");
          R.updateTextFields(e),
            e[0].focus(),
            "textarea" !== o.type &&
              !0 === o.confirmOnEnter &&
              e.on("keydown", function (e) {
                if (13 === e.keyCode)
                  return (
                    n(t.$element.find(".mdui-textfield-input").val(), t),
                    o.closeOnConfirm && t.close(),
                    !1
                  );
              }),
            "textarea" === o.type &&
              e.on("input", function () {
                return t.handleUpdate();
              }),
            o.maxlength && t.handleUpdate();
        },
      });
    };
    var ef = { position: "auto", delay: 0, content: "" };
    (eh.prototype.isDisabled = function (t) {
      return t.disabled || void 0 !== B(t).attr("disabled");
    }),
      (eh.prototype.isDesktop = function () {
        return 1024 < t_.width();
      }),
      (eh.prototype.setPosition = function () {
        var t,
          e,
          n = this.$target[0].getBoundingClientRect(),
          i = this.isDesktop() ? 14 : 24,
          o = this.$element[0].offsetWidth,
          r = this.$element[0].offsetHeight,
          s = this.options.position;
        switch (
          ("auto" === s &&
            (s =
              n.top + n.height + i + r + 2 < t_.height()
                ? "bottom"
                : i + r + 2 < n.top
                ? "top"
                : i + o + 2 < n.left
                ? "left"
                : n.width + i + o + 2 < t_.width() - n.left
                ? "right"
                : "bottom"),
          s)
        ) {
          case "bottom":
            (t = -((o / 2) * 1)),
              (e = n.height / 2 + i),
              this.$element.transformOrigin("top center");
            break;
          case "top":
            (t = -((o / 2) * 1)),
              (e = -1 * (r + n.height / 2 + i)),
              this.$element.transformOrigin("bottom center");
            break;
          case "left":
            (t = -1 * (o + n.width / 2 + i)),
              (e = -((r / 2) * 1)),
              this.$element.transformOrigin("center right");
            break;
          case "right":
            (t = n.width / 2 + i),
              (e = -((r / 2) * 1)),
              this.$element.transformOrigin("center left");
        }
        var a = this.$target.offset();
        this.$element.css({
          top: a.top + n.height / 2 + "px",
          left: a.left + n.width / 2 + "px",
          "margin-left": t + "px",
          "margin-top": e + "px",
        });
      }),
      (eh.prototype.triggerEvent = function (t) {
        tg(t, "tooltip", this.$target, this);
      }),
      (eh.prototype.transitionEnd = function () {
        this.$element.hasClass("mdui-tooltip-open")
          ? ((this.state = "opened"), this.triggerEvent("opened"))
          : ((this.state = "closed"), this.triggerEvent("closed"));
      }),
      (eh.prototype.isOpen = function () {
        return "opening" === this.state || "opened" === this.state;
      }),
      (eh.prototype.doOpen = function () {
        var t = this;
        (this.state = "opening"),
          this.triggerEvent("open"),
          this.$element
            .addClass("mdui-tooltip-open")
            .transitionEnd(function () {
              return t.transitionEnd();
            });
      }),
      (eh.prototype.open = function (t) {
        var e = this;
        if (!this.isOpen()) {
          var n = V({}, this.options);
          t && V(this.options, t),
            n.content !== this.options.content &&
              this.$element.html(this.options.content),
            this.setPosition(),
            this.options.delay
              ? (this.timeoutId = setTimeout(function () {
                  return e.doOpen();
                }, this.options.delay))
              : ((this.timeoutId = null), this.doOpen());
        }
      }),
      (eh.prototype.close = function () {
        var t = this;
        this.timeoutId &&
          (clearTimeout(this.timeoutId), (this.timeoutId = null)),
          this.isOpen() &&
            ((this.state = "closing"),
            this.triggerEvent("close"),
            this.$element
              .removeClass("mdui-tooltip-open")
              .transitionEnd(function () {
                return t.transitionEnd();
              }));
      }),
      (eh.prototype.toggle = function () {
        this.isOpen() ? this.close() : this.open();
      }),
      (eh.prototype.getState = function () {
        return this.state;
      }),
      (R.Tooltip = eh);
    var ep = "mdui-tooltip",
      em = "_mdui_tooltip";
    function ev(t) {
      (this.options = V({}, eg)),
        (this.state = "closed"),
        (this.timeoutId = null),
        V(this.options, t);
      var e = "",
        n = "";
      0 === this.options.buttonColor.indexOf("#") ||
      0 === this.options.buttonColor.indexOf("rgb")
        ? (e = 'style="color:' + this.options.buttonColor + '"')
        : "" !== this.options.buttonColor &&
          (n = "mdui-text-color-" + this.options.buttonColor),
        (this.$element = B(
          '<div class="mdui-snackbar"><div class="mdui-snackbar-text">' +
            this.options.message +
            "</div>" +
            (this.options.buttonText
              ? '<a href="javascript:void(0)" class="mdui-snackbar-action mdui-btn mdui-ripple mdui-ripple-white ' +
                n +
                '" ' +
                e +
                ">" +
                this.options.buttonText +
                "</a>"
              : "") +
            "</div>"
        ).appendTo(document.body)),
        this.setPosition("close"),
        this.$element
          .reflow()
          .addClass("mdui-snackbar-" + this.options.position);
    }
    B(function () {
      t$.on("touchstart mouseover", "[" + ep + "]", function () {
        var t = B(this),
          e = t.data(em);
        e || ((e = new R.Tooltip(this, tx(this, ep))), t.data(em, e));
      });
    });
    var eg = {
        message: "",
        timeout: 4e3,
        position: "bottom",
        buttonText: "",
        buttonColor: "",
        closeOnButtonClick: !0,
        closeOnOutsideClick: !0,
        onClick: function () {},
        onButtonClick: function () {},
        onOpen: function () {},
        onOpened: function () {},
        onClose: function () {},
        onClosed: function () {},
      },
      e$ = null,
      e_ = "_mdui_snackbar";
    function ey(t) {
      return (
        void 0 === t && (t = !1),
        '<div class="mdui-spinner-layer ' +
          (t ? "mdui-spinner-layer-" + t : "") +
          '"><div class="mdui-spinner-circle-clipper mdui-spinner-left"><div class="mdui-spinner-circle"></div></div><div class="mdui-spinner-gap-patch"><div class="mdui-spinner-circle"></div></div><div class="mdui-spinner-circle-clipper mdui-spinner-right"><div class="mdui-spinner-circle"></div></div></div>'
      );
    }
    function eb(t) {
      var e = B(t),
        n = e.hasClass("mdui-spinner-colorful")
          ? ey(1) + ey(2) + ey(3) + ey(4)
          : ey();
      e.html(n);
    }
    function ex(t, e, n) {
      var i = this;
      if (
        (void 0 === n && (n = {}),
        (this.options = V({}, ew)),
        (this.state = "closed"),
        (this.$anchor = B(t).first()),
        (this.$element = B(e).first()),
        !this.$anchor.parent().is(this.$element.parent()))
      )
        throw Error("anchorSelector and menuSelector must be siblings");
      V(this.options, n),
        (this.isCascade = this.$element.hasClass("mdui-menu-cascade")),
        (this.isCovered =
          "auto" === this.options.covered
            ? !this.isCascade
            : this.options.covered),
        this.$anchor.on("click", function () {
          return i.toggle();
        }),
        t$.on("click touchstart", function (t) {
          var e = B(t.target);
          !i.isOpen() ||
            e.is(i.$element) ||
            H(i.$element[0], e[0]) ||
            e.is(i.$anchor) ||
            H(i.$anchor[0], e[0]) ||
            i.close();
        });
      var o = this;
      t$.on("click", ".mdui-menu-item", function () {
        var t = B(this);
        t.find(".mdui-menu").length ||
          void 0 !== t.attr("disabled") ||
          o.close();
      }),
        this.bindSubMenuEvent(),
        t_.on(
          "resize",
          B.throttle(function () {
            return i.readjust();
          }, 100)
        );
    }
    (ev.prototype.closeOnOutsideClick = function (t) {
      var e = B(t.target);
      e.hasClass("mdui-snackbar") ||
        e.parents(".mdui-snackbar").length ||
        e$.close();
    }),
      (ev.prototype.setPosition = function (t) {
        var e,
          n,
          i = this.$element[0].clientHeight,
          o = this.options.position;
        (e = "bottom" === o || "top" === o ? "-50%" : "0"),
          "open" === t
            ? (n = "0")
            : ("bottom" === o && (n = i),
              "top" === o && (n = -i),
              ("left-top" !== o && "right-top" !== o) || (n = -i - 24),
              ("left-bottom" !== o && "right-bottom" !== o) || (n = i + 24)),
          this.$element.transform("translate(" + e + "," + n + "px");
      }),
      (ev.prototype.open = function () {
        var t = this;
        "opening" !== this.state &&
          "opened" !== this.state &&
          (e$
            ? tJ(e_, function () {
                return t.open();
              })
            : (((e$ = this).state = "opening"),
              this.options.onOpen(this),
              this.setPosition("open"),
              this.$element.transitionEnd(function () {
                "opening" === t.state &&
                  ((t.state = "opened"),
                  t.options.onOpened(t),
                  t.options.buttonText &&
                    t.$element
                      .find(".mdui-snackbar-action")
                      .on("click", function () {
                        t.options.onButtonClick(t),
                          t.options.closeOnButtonClick && t.close();
                      }),
                  t.$element.on("click", function (e) {
                    B(e.target).hasClass("mdui-snackbar-action") ||
                      t.options.onClick(t);
                  }),
                  t.options.closeOnOutsideClick &&
                    t$.on(tN, t.closeOnOutsideClick),
                  t.options.timeout &&
                    (t.timeoutId = setTimeout(function () {
                      return t.close();
                    }, t.options.timeout)));
              })));
      }),
      (ev.prototype.close = function () {
        var t = this;
        "closing" !== this.state &&
          "closed" !== this.state &&
          (this.timeoutId && clearTimeout(this.timeoutId),
          this.options.closeOnOutsideClick &&
            t$.off(tN, this.closeOnOutsideClick),
          (this.state = "closing"),
          this.options.onClose(this),
          this.setPosition("close"),
          this.$element.transitionEnd(function () {
            "closing" === t.state &&
              ((e$ = null),
              (t.state = "closed"),
              t.options.onClosed(t),
              t.$element.remove(),
              tG(e_));
          }));
      }),
      (R.snackbar = function (t, e) {
        void 0 === e && (e = {}), m(t) ? (e.message = t) : (e = t);
        var n = new ev(e);
        return n.open(), n;
      }),
      B(function () {
        t$.on("click", ".mdui-bottom-nav>a", function () {
          var t = B(this),
            e = t.parent();
          e.children("a").each(function (n, i) {
            var o = t.is(i);
            o && tg("change", "bottomNav", e[0], void 0, { index: n }),
              o
                ? B(i).addClass("mdui-bottom-nav-active")
                : B(i).removeClass("mdui-bottom-nav-active");
          });
        }),
          R.mutation(".mdui-bottom-nav-scroll-hide", function () {
            new R.Headroom(this, {
              pinnedClass: "mdui-headroom-pinned-down",
              unpinnedClass: "mdui-headroom-unpinned-down",
            });
          });
      }),
      B(function () {
        R.mutation(".mdui-spinner", function () {
          eb(this);
        });
      });
    var ew = {
      position: "auto",
      align: "auto",
      gutter: 16,
      fixed:
        ((R.updateSpinners = function (t) {
          (g(t) ? B(".mdui-spinner") : B(t)).each(function () {
            eb(this);
          });
        }),
        !1),
      covered: "auto",
      subMenuTrigger: "hover",
      subMenuDelay: 200,
    };
    (ex.prototype.isOpen = function () {
      return "opening" === this.state || "opened" === this.state;
    }),
      (ex.prototype.triggerEvent = function (t) {
        tg(t, "menu", this.$element, this);
      }),
      (ex.prototype.readjust = function () {
        var t,
          e,
          n,
          i,
          o,
          r,
          s = t_.height(),
          a = t_.width(),
          l = this.options.gutter,
          u = this.isCovered,
          c = this.options.fixed,
          d = this.$element.width(),
          h = this.$element.height(),
          f = this.$anchor[0].getBoundingClientRect(),
          p = f.top,
          m = f.left,
          v = f.height,
          g = f.width,
          _ = s - p - v,
          y = a - m - g,
          b = this.$anchor[0].offsetTop,
          x = this.$anchor[0].offsetLeft;
        if (
          ((n =
            "auto" === this.options.position
              ? h + l < _ + (u ? v : 0)
                ? "bottom"
                : h + l < p + (u ? v : 0)
                ? "top"
                : "center"
              : this.options.position),
          (i =
            "auto" === this.options.align
              ? d + l < y + g
                ? "left"
                : d + l < m + g
                ? "right"
                : "center"
              : this.options.align),
          "bottom" === n)
        )
          (r = "0"), (e = (u ? 0 : v) + (c ? p : b));
        else if ("top" === n)
          (r = "100%"), (e = (u ? v : 0) + (c ? p - h : b - h));
        else {
          r = "50%";
          var w = h;
          this.isCascade ||
            (s < h + 2 * l && ((w = s - 2 * l), this.$element.height(w))),
            (e = (s - w) / 2 + (c ? 0 : b - p));
        }
        if ((this.$element.css("top", e + "px"), "left" === i))
          (o = "0"), (t = c ? m : x);
        else if ("right" === i) (o = "100%"), (t = c ? m + g - d : x + g - d);
        else {
          o = "50%";
          var C = d;
          a < d + 2 * l && ((C = a - 2 * l), this.$element.width(C)),
            (t = (a - C) / 2 + (c ? 0 : x - m));
        }
        this.$element.css("left", t + "px"),
          this.$element.transformOrigin(o + " " + r);
      }),
      (ex.prototype.readjustSubmenu = function (t) {
        var e,
          n,
          i,
          o,
          r,
          s,
          a = t.parent(".mdui-menu-item"),
          l = t_.height(),
          u = t_.width(),
          c = t.width(),
          d = t.height(),
          h = a[0].getBoundingClientRect(),
          f = h.width,
          p = h.height,
          m = h.left,
          v = h.top;
        (o = c < u - m - f ? "left" : c < m ? "right" : "left"),
          "bottom" == (i = d < l - v ? "bottom" : d < v + p ? "top" : "bottom")
            ? (e = s = "0")
            : "top" === i && ((s = "100%"), (e = -d + p)),
          t.css("top", e + "px"),
          "left" === o
            ? ((r = "0"), (n = f))
            : "right" === o && ((r = "100%"), (n = -c)),
          t.css("left", n + "px"),
          t.transformOrigin(r + " " + s);
      }),
      (ex.prototype.openSubMenu = function (t) {
        this.readjustSubmenu(t),
          t
            .addClass("mdui-menu-open")
            .parent(".mdui-menu-item")
            .addClass("mdui-menu-item-active");
      }),
      (ex.prototype.closeSubMenu = function (t) {
        t
          .removeClass("mdui-menu-open")
          .addClass("mdui-menu-closing")
          .transitionEnd(function () {
            return t.removeClass("mdui-menu-closing");
          })
          .parent(".mdui-menu-item")
          .removeClass("mdui-menu-item-active"),
          t.find(".mdui-menu").each(function (t, e) {
            var n = B(e);
            n.removeClass("mdui-menu-open")
              .addClass("mdui-menu-closing")
              .transitionEnd(function () {
                return n.removeClass("mdui-menu-closing");
              })
              .parent(".mdui-menu-item")
              .removeClass("mdui-menu-item-active");
          });
      }),
      (ex.prototype.toggleSubMenu = function (t) {
        t.hasClass("mdui-menu-open")
          ? this.closeSubMenu(t)
          : this.openSubMenu(t);
      }),
      (ex.prototype.bindSubMenuEvent = function () {
        var t = this;
        if (
          (this.$element.on("click", ".mdui-menu-item", function (e) {
            var n = B(this),
              i = B(e.target);
            if (
              void 0 === n.attr("disabled") &&
              !i.is(".mdui-menu") &&
              !i.is(".mdui-divider") &&
              i.parents(".mdui-menu-item").first().is(n)
            ) {
              var o = n.children(".mdui-menu");
              n
                .parent(".mdui-menu")
                .children(".mdui-menu-item")
                .each(function (e, n) {
                  var i = B(n).children(".mdui-menu");
                  !i.length || (o.length && i.is(o)) || t.closeSubMenu(i);
                }),
                o.length && t.toggleSubMenu(o);
            }
          }),
          "hover" === this.options.subMenuTrigger)
        ) {
          var e = null,
            n = null;
          this.$element.on(
            "mouseover mouseout",
            ".mdui-menu-item",
            function (i) {
              var o = B(this),
                r = i.type,
                s = B(i.relatedTarget);
              if (void 0 === o.attr("disabled")) {
                if ("mouseover" === r) {
                  if (!o.is(s) && H(o[0], s[0])) return;
                } else if ("mouseout" === r && (o.is(s) || H(o[0], s[0])))
                  return;
                var a = o.children(".mdui-menu");
                if ("mouseover" === r) {
                  if (a.length) {
                    var l = a.data("timeoutClose.mdui.menu");
                    if ((l && clearTimeout(l), a.hasClass("mdui-menu-open")))
                      return;
                    clearTimeout(n),
                      (e = n =
                        setTimeout(function () {
                          return t.openSubMenu(a);
                        }, t.options.subMenuDelay)),
                      a.data("timeoutOpen.mdui.menu", e);
                  }
                } else if ("mouseout" === r && a.length) {
                  var u = a.data("timeoutOpen.mdui.menu");
                  u && clearTimeout(u),
                    (e = setTimeout(function () {
                      return t.closeSubMenu(a);
                    }, t.options.subMenuDelay)),
                    a.data("timeoutClose.mdui.menu", e);
                }
              }
            }
          );
        }
      }),
      (ex.prototype.transitionEnd = function () {
        this.$element.removeClass("mdui-menu-closing"),
          "opening" === this.state &&
            ((this.state = "opened"), this.triggerEvent("opened")),
          "closing" === this.state &&
            ((this.state = "closed"),
            this.triggerEvent("closed"),
            this.$element.css({
              top: "",
              left: "",
              width: "",
              position: "fixed",
            }));
      }),
      (ex.prototype.toggle = function () {
        this.isOpen() ? this.close() : this.open();
      }),
      (ex.prototype.open = function () {
        var t = this;
        this.isOpen() ||
          ((this.state = "opening"),
          this.triggerEvent("open"),
          this.readjust(),
          this.$element
            .css("position", this.options.fixed ? "fixed" : "absolute")
            .addClass("mdui-menu-open")
            .transitionEnd(function () {
              return t.transitionEnd();
            }));
      }),
      (ex.prototype.close = function () {
        var t = this;
        this.isOpen() &&
          ((this.state = "closing"),
          this.triggerEvent("close"),
          this.$element.find(".mdui-menu").each(function (e, n) {
            t.closeSubMenu(B(n));
          }),
          this.$element
            .removeClass("mdui-menu-open")
            .addClass("mdui-menu-closing")
            .transitionEnd(function () {
              return t.transitionEnd();
            }));
      }),
      (R.Menu = ex);
    var e0 = "mdui-menu",
      eC = "_mdui_menu";
    return (
      B(function () {
        t$.on("click", "[" + e0 + "]", function () {
          var t = B(this),
            e = t.data(eC);
          if (!e) {
            var n = tx(this, e0),
              i = n.target;
            delete n.target,
              (e = new R.Menu(t, i, n)),
              t.data(eC, e),
              e.toggle();
          }
        });
      }),
      R
    );
  }),
  (function (t, e) {
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = e())
      : "function" == typeof define && define.amd
      ? define(e)
      : ((t =
          "undefined" != typeof globalThis ? globalThis : t || self).Danmaku =
          e());
  })(this, function () {
    "use strict";
    !(function () {
      for (
        var t = [
            "oTransform",
            "msTransform",
            "mozTransform",
            "webkitTransform",
            "transform",
          ],
          e = document.createElement("div").style,
          n = 0;
        n < t.length;
        n++
      )
        if (t[n] in e) return t[n];
    })();
    let t = window.devicePixelRatio || 1;
    var e = Object.create(null);
    function n(n, i) {
      if ("function" == typeof n.render) {
        var o = n.render();
        if (o instanceof HTMLCanvasElement)
          return (n.width = o.width), (n.height = o.height), o;
      }
      var r = document.createElement("canvas"),
        s = r.getContext("2d"),
        a = n.style || {};
      (a.font = a.font || "10px sans-serif"),
        (a.textBaseline = a.textBaseline || "bottom");
      var l = 1 * a.lineWidth;
      for (var u in ((l =
        l > 0 && l !== 1 / 0 ? Math.ceil(l) : 1 * !!a.strokeStyle),
      (s.font = a.font),
      (n.width =
        n.width || Math.max(1, Math.ceil(s.measureText(n.text).width) + 2 * l)),
      (n.height =
        n.height ||
        Math.ceil(
          (function (t, n) {
            if (e[t]) return e[t];
            var i = 12,
              o = t.match(
                /(\d+(?:\.\d+)?)(px|%|em|rem)(?:\s*\/\s*(\d+(?:\.\d+)?)(px|%|em|rem)?)?/
              );
            if (o) {
              var r = 1 * o[1] || 10,
                s = o[2],
                a = 1 * o[3] || 1.2,
                l = o[4];
              "%" === s && (r *= n.container / 100),
                "em" === s && (r *= n.container),
                "rem" === s && (r *= n.root),
                "px" === l && (i = a),
                "%" === l && (i = (r * a) / 100),
                "em" === l && (i = r * a),
                "rem" === l && (i = n.root * a),
                void 0 === l && (i = r * a);
            }
            return (e[t] = i), i;
          })(a.font, i)
        ) +
          2 * l),
      (r.width = n.width * t),
      (r.height = n.height * t),
      s.scale(t, t),
      a))
        s[u] = a[u];
      var c = 0;
      switch (a.textBaseline) {
        case "top":
        case "hanging":
          c = l;
          break;
        case "middle":
          c = n.height >> 1;
          break;
        default:
          c = n.height - l;
      }
      return (
        a.strokeStyle && s.strokeText(n.text, l, c), s.fillText(n.text, l, c), r
      );
    }
    function i(t) {
      return (
        1 *
        window
          .getComputedStyle(t, null)
          .getPropertyValue("font-size")
          .match(/(.+)px/)[1]
      );
    }
    var o = {
      name: "canvas",
      init: function (t) {
        var e = document.createElement("canvas");
        return (
          (e.context = e.getContext("2d")),
          (e._fontSize = {
            root: i(document.getElementsByTagName("html")[0]),
            container: i(t),
          }),
          e
        );
      },
      clear: function (t, e) {
        t.context.clearRect(0, 0, t.width, t.height);
        for (var n = 0; n < e.length; n++) e[n].canvas = null;
      },
      resize: function (e, n, i) {
        (e.width = n * t),
          (e.height = i * t),
          (e.style.width = n + "px"),
          (e.style.height = i + "px");
      },
      framing: function (t) {
        t.context.clearRect(0, 0, t.width, t.height);
      },
      setup: function (t, e) {
        for (var i = 0; i < e.length; i++) {
          var o = e[i];
          o.canvas = n(o, t._fontSize);
        }
      },
      render: function (e, n) {
        e.context.drawImage(n.canvas, n.x * t, n.y * t);
      },
      remove: function (t, e) {
        e.canvas = null;
      },
    };
    function r(t) {
      var e = this,
        n = this.media ? this.media.currentTime : Date.now() / 1e3,
        i = this.media ? this.media.playbackRate : 1;
      function o(t, o) {
        if ("top" === o.mode || "bottom" === o.mode)
          return n - t.time < e._.duration;
        var r = ((e._.width + t.width) * (n - t.time) * i) / e._.duration;
        if (t.width > r) return !0;
        var s,
          a = e._.duration + t.time - n,
          l =
            ((e._.width + o.width) * (n - (e.media ? o.time : o._utc)) * i) /
            e._.duration,
          u = e._.width - l;
        return a > (e._.duration * u) / (e._.width + o.width);
      }
      var r = this._.space[t.mode];
      PATCH_FORCE_NO_OCC && (r = this._.space.rtl);
      for (var s = 0, a = 0, l = 1; l < r.length; l++) {
        var u = r[l],
          c = t.height;
        if (
          (("top" === t.mode || "bottom" === t.mode) && (c += u.height),
          u.range - u.height - r[s].range >= c)
        ) {
          a = l;
          break;
        }
        o(u, t) && (s = l);
      }
      var d = r[s].range,
        h = {
          range: d + t.height,
          time: this.media ? t.time : t._utc,
          width: t.width,
          height: t.height,
        };
      return (r.splice(s + 1, a - s - 1, h), "bottom" === t.mode)
        ? this._.height - t.height - (d % this._.height)
        : d % (this._.height - t.height);
    }
    var s =
        window.requestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        function (t) {
          return setTimeout(t, 50 / 3);
        },
      a =
        window.cancelAnimationFrame ||
        window.mozCancelAnimationFrame ||
        window.webkitCancelAnimationFrame ||
        clearTimeout;
    function l(t, e, n) {
      for (var i = 0, o = 0, r = t.length; o < r - 1; )
        n >= t[(i = (o + r) >> 1)][e] ? (o = i) : (r = i);
      return t[o] && n < t[o][e] ? o : r;
    }
    function u(t) {
      return /^(ltr|top|bottom)$/i.test(t) ? t.toLowerCase() : "rtl";
    }
    function c() {
      return [
        {
          range: 0,
          time: -9007199254740991,
          width: 9007199254740991,
          height: 0,
        },
        {
          range: 9007199254740991,
          time: 9007199254740991,
          width: 0,
          height: 0,
        },
      ];
    }
    function d(t) {
      (t.ltr = c()), (t.rtl = c()), (t.top = c()), (t.bottom = c());
    }
    function h() {
      if (!this._.visible || !this._.paused) return this;
      if (((this._.paused = !1), this.media))
        for (var t = 0; t < this._.runningList.length; t++) {
          var e = this._.runningList[t];
          e._utc = Date.now() / 1e3 - (this.media.currentTime - e.time);
        }
      var n,
        i,
        o,
        a,
        l = this,
        u =
          ((n = this._.engine.framing.bind(this)),
          (i = this._.engine.setup.bind(this)),
          (o = this._.engine.render.bind(this)),
          (a = this._.engine.remove.bind(this)),
          function () {
            n(this._.stage);
            var t = Date.now() / 1e3,
              e = this.media ? this.media.currentTime : t,
              s = this.media ? this.media.playbackRate : 1,
              l = null,
              u = 0,
              c = 0;
            for (c = this._.runningList.length - 1; c >= 0; c--)
              (l = this._.runningList[c]),
                e - (u = this.media ? l.time : l._utc) > this._.duration &&
                  (a(this._.stage, l), this._.runningList.splice(c, 1));
            for (
              var d = [];
              this._.position < this.comments.length &&
              ((l = this.comments[this._.position]),
              !((u = this.media ? l.time : l._utc) >= e));

            ) {
              if (e - u > this._.duration) {
                ++this._.position;
                continue;
              }
              this.media && (l._utc = t - (this.media.currentTime - l.time)),
                d.push(l),
                ++this._.position;
            }
            for (i(this._.stage, d), c = 0; c < d.length; c++)
              ((l = d[c]).y = r.call(this, l)), this._.runningList.push(l);
            for (c = 0; c < this._.runningList.length; c++) {
              l = this._.runningList[c];
              var h =
                ((this._.width + l.width) * (t - l._utc) * s) / this._.duration;
              "ltr" === l.mode && (l.x = (h - l.width + 0.5) | 0),
                "rtl" === l.mode && (l.x = (this._.width - h + 0.5) | 0),
                ("top" === l.mode || "bottom" === l.mode) &&
                  (l.x = (this._.width - l.width) >> 1),
                o(this._.stage, l);
            }
          });
      function c() {
        u.call(l), (l._.requestID = s(c));
      }
      return (this._.requestID = s(c)), this;
    }
    function f() {
      return (
        !this._.visible ||
          this._.paused ||
          ((this._.paused = !0), a(this._.requestID), (this._.requestID = 0)),
        this
      );
    }
    function p() {
      if (!this.media) return this;
      this.clear(), d(this._.space);
      var t = l(this.comments, "time", this.media.currentTime);
      return (this._.position = Math.max(0, t - 1)), this;
    }
    function m(t) {
      (t.play = h.bind(this)),
        (t.pause = f.bind(this)),
        (t.seeking = p.bind(this)),
        this.media.addEventListener("play", t.play),
        this.media.addEventListener("pause", t.pause),
        this.media.addEventListener("playing", t.play),
        this.media.addEventListener("waiting", t.pause),
        this.media.addEventListener("seeking", t.seeking);
    }
    function v(t) {
      this.media.removeEventListener("play", t.play),
        this.media.removeEventListener("pause", t.pause),
        this.media.removeEventListener("playing", t.play),
        this.media.removeEventListener("waiting", t.pause),
        this.media.removeEventListener("seeking", t.seeking),
        (t.play = null),
        (t.pause = null),
        (t.seeking = null);
    }
    function g(t) {
      (this._ = {}),
        (this.container = t.container || document.createElement("div")),
        (this.media = t.media),
        (this._.visible = !0),
        (this.engine = "canvas"),
        (this._.engine = o),
        (this._.requestID = 0),
        (this._.speed = Math.max(0, t.speed) || 144),
        (this._.duration = 4),
        (this.comments = t.comments || []),
        this.comments.sort(function (t, e) {
          return t.time - e.time;
        });
      for (var e = 0; e < this.comments.length; e++)
        this.comments[e].mode = u(this.comments[e].mode);
      return (
        (this._.runningList = []),
        (this._.position = 0),
        (this._.paused = !0),
        this.media && ((this._.listener = {}), m.call(this, this._.listener)),
        (this._.stage = this._.engine.init(this.container)),
        (this._.stage.style.cssText +=
          "position:relative;pointer-events:none;"),
        this.resize(),
        this.container.appendChild(this._.stage),
        (this._.space = {}),
        d(this._.space),
        (this.media && this.media.paused) || (p.call(this), h.call(this)),
        this
      );
    }
    function _() {
      if (!this.container) return this;
      for (var t in (f.call(this),
      this.clear(),
      this.container.removeChild(this._.stage),
      this.media && v.call(this, this._.listener),
      this))
        Object.prototype.hasOwnProperty.call(this, t) && (this[t] = null);
      return this;
    }
    var y = ["mode", "time", "text", "render", "style"];
    function b(t) {
      if (!t || "[object Object]" !== Object.prototype.toString.call(t))
        return this;
      for (var e = {}, n = 0; n < y.length; n++)
        void 0 !== t[y[n]] && (e[y[n]] = t[y[n]]);
      if (
        ((e.text = (e.text || "").toString()),
        (e.mode = u(e.mode)),
        (e._utc = Date.now() / 1e3),
        this.media)
      ) {
        var i = 0;
        void 0 === e.time
          ? ((e.time = this.media.currentTime), (i = this._.position))
          : (i = l(this.comments, "time", e.time)) < this._.position &&
            (this._.position += 1),
          this.comments.splice(i, 0, e);
      } else this.comments.push(e);
      return this;
    }
    function x() {
      return (
        this._.visible ||
          ((this._.visible = !0),
          (this.media && this.media.paused) || (p.call(this), h.call(this))),
        this
      );
    }
    function w() {
      return (
        this._.visible && (f.call(this), this.clear(), (this._.visible = !1)),
        this
      );
    }
    function C() {
      return (
        this._.engine.clear(this._.stage, this._.runningList),
        (this._.runningList = []),
        this
      );
    }
    function k() {
      return (
        (this._.width = this.container.offsetWidth),
        (this._.height = this.container.offsetHeight),
        this._.engine.resize(this._.stage, this._.width, this._.height),
        (this._.duration = this._.width / this._.speed),
        this
      );
    }
    function E(t) {
      t && g.call(this, t);
    }
    return (
      (E.prototype.destroy = function () {
        return _.call(this);
      }),
      (E.prototype.emit = function (t) {
        return b.call(this, t);
      }),
      (E.prototype.show = function () {
        return x.call(this);
      }),
      (E.prototype.hide = function () {
        return w.call(this);
      }),
      (E.prototype.clear = function () {
        return C.call(this);
      }),
      (E.prototype.resize = function () {
        return k.call(this);
      }),
      Object.defineProperty(E.prototype, "speed", {
        get: function () {
          return this._.speed;
        },
        set: function (t) {
          return "number" != typeof t || isNaN(t) || !isFinite(t) || t <= 0
            ? this._.speed
            : ((this._.speed = t),
              this._.width && (this._.duration = this._.width / t),
              t);
        },
      }),
      E
    );
  }),
  (function (t, e) {
    "object" == typeof exports && "undefined" != typeof module
      ? e(exports)
      : "function" == typeof define && define.amd
      ? define(["exports"], e)
      : e(
          ((t =
            "undefined" != typeof globalThis ? globalThis : t || self).pako =
            {})
        );
  })(this, function (t) {
    "use strict";
    var e = (t, e, n, i) => {
      let o = (65535 & t) | 0,
        r = ((t >>> 16) & 65535) | 0,
        s = 0;
      for (; 0 !== n; ) {
        (s = n > 2e3 ? 2e3 : n), (n -= s);
        do r = (r + (o = (o + e[i++]) | 0)) | 0;
        while (--s);
        (o %= 65521), (r %= 65521);
      }
      return o | (r << 16) | 0;
    };
    let n = new Uint32Array(
      (() => {
        let t,
          e = [];
        for (var n = 0; n < 256; n++) {
          t = n;
          for (var i = 0; i < 8; i++)
            t = 1 & t ? 3988292384 ^ (t >>> 1) : t >>> 1;
          e[n] = t;
        }
        return e;
      })()
    );
    var i = (t, e, i, o) => {
        let r = n,
          s = o + i;
        t ^= -1;
        for (let a = o; a < s; a++) t = (t >>> 8) ^ r[255 & (t ^ e[a])];
        return -1 ^ t;
      },
      o = function (t, e) {
        let n,
          i,
          o,
          r,
          s,
          a,
          l,
          u,
          c,
          d,
          h,
          f,
          p,
          m,
          v,
          g,
          _,
          y,
          b,
          x,
          w,
          C,
          k,
          E,
          T = t.state;
        (n = t.next_in),
          (k = t.input),
          (i = n + (t.avail_in - 5)),
          (o = t.next_out),
          (E = t.output),
          (r = o - (e - t.avail_out)),
          (s = o + (t.avail_out - 257)),
          (a = T.dmax),
          (l = T.wsize),
          (u = T.whave),
          (c = T.wnext),
          (d = T.window),
          (h = T.hold),
          (f = T.bits),
          (p = T.lencode),
          (m = T.distcode),
          (v = (1 << T.lenbits) - 1),
          (g = (1 << T.distbits) - 1);
        e: do {
          f < 15 &&
            ((h += k[n++] << f), (f += 8), (h += k[n++] << f), (f += 8)),
            (_ = p[h & v]);
          t: for (;;) {
            if (((h >>>= y = _ >>> 24), (f -= y), 0 == (y = (_ >>> 16) & 255)))
              E[o++] = 65535 & _;
            else {
              if (!(16 & y)) {
                if (0 == (64 & y)) {
                  _ = p[(65535 & _) + (h & ((1 << y) - 1))];
                  continue t;
                }
                if (32 & y) {
                  T.mode = 12;
                  break e;
                }
                (t.msg = "invalid literal/length code"), (T.mode = 30);
                break e;
              }
              (b = 65535 & _),
                (y &= 15) &&
                  (f < y && ((h += k[n++] << f), (f += 8)),
                  (b += h & ((1 << y) - 1)),
                  (h >>>= y),
                  (f -= y)),
                f < 15 &&
                  ((h += k[n++] << f), (f += 8), (h += k[n++] << f), (f += 8)),
                (_ = m[h & g]);
              i: for (;;) {
                if (
                  ((h >>>= y = _ >>> 24),
                  (f -= y),
                  !(16 & (y = (_ >>> 16) & 255)))
                ) {
                  if (0 == (64 & y)) {
                    _ = m[(65535 & _) + (h & ((1 << y) - 1))];
                    continue i;
                  }
                  (t.msg = "invalid distance code"), (T.mode = 30);
                  break e;
                }
                if (
                  ((x = 65535 & _),
                  f < (y &= 15) &&
                    ((h += k[n++] << f),
                    (f += 8) < y && ((h += k[n++] << f), (f += 8))),
                  (x += h & ((1 << y) - 1)) > a)
                ) {
                  (t.msg = "invalid distance too far back"), (T.mode = 30);
                  break e;
                }
                if (((h >>>= y), (f -= y), x > (y = o - r))) {
                  if ((y = x - y) > u && T.sane) {
                    (t.msg = "invalid distance too far back"), (T.mode = 30);
                    break e;
                  }
                  if (((w = 0), (C = d), 0 === c)) {
                    if (((w += l - y), y < b)) {
                      b -= y;
                      do E[o++] = d[w++];
                      while (--y);
                      (w = o - x), (C = E);
                    }
                  } else if (c < y) {
                    if (((w += l + c - y), (y -= c) < b)) {
                      b -= y;
                      do E[o++] = d[w++];
                      while (--y);
                      if (((w = 0), c < b)) {
                        b -= y = c;
                        do E[o++] = d[w++];
                        while (--y);
                        (w = o - x), (C = E);
                      }
                    }
                  } else if (((w += c - y), y < b)) {
                    b -= y;
                    do E[o++] = d[w++];
                    while (--y);
                    (w = o - x), (C = E);
                  }
                  for (; b > 2; )
                    (E[o++] = C[w++]),
                      (E[o++] = C[w++]),
                      (E[o++] = C[w++]),
                      (b -= 3);
                  b && ((E[o++] = C[w++]), b > 1 && (E[o++] = C[w++]));
                } else {
                  w = o - x;
                  do
                    (E[o++] = E[w++]),
                      (E[o++] = E[w++]),
                      (E[o++] = E[w++]),
                      (b -= 3);
                  while (b > 2);
                  b && ((E[o++] = E[w++]), b > 1 && (E[o++] = E[w++]));
                }
                break;
              }
            }
            break;
          }
        } while (n < i && o < s);
        (n -= b = f >> 3),
          (f -= b << 3),
          (h &= (1 << f) - 1),
          (t.next_in = n),
          (t.next_out = o),
          (t.avail_in = n < i ? i - n + 5 : 5 - (n - i)),
          (t.avail_out = o < s ? s - o + 257 : 257 - (o - s)),
          (T.hold = h),
          (T.bits = f);
      };
    let r = 15,
      s = new Uint16Array([
        3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59,
        67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0,
      ]),
      a = new Uint8Array([
        16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19,
        19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78,
      ]),
      l = new Uint16Array([
        1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385,
        513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577,
        0, 0,
      ]),
      u = new Uint8Array([
        16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23,
        24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64,
      ]);
    var c = (t, e, n, i, o, c, d, h) => {
        let f = h.bits,
          p,
          m,
          v,
          g,
          _,
          y,
          b = 0,
          x = 0,
          w = 0,
          C = 0,
          k = 0,
          E = 0,
          T = 0,
          N = 0,
          S = 0,
          O = 0,
          A = null,
          j = 0,
          D = new Uint16Array(16),
          L = new Uint16Array(16),
          I,
          M,
          F,
          B = null,
          R = 0;
        for (b = 0; b <= r; b++) D[b] = 0;
        for (x = 0; x < i; x++) D[e[n + x]]++;
        for (k = f, C = r; C >= 1 && 0 === D[C]; C--);
        if ((k > C && (k = C), 0 === C))
          return (o[c++] = 20971520), (o[c++] = 20971520), (h.bits = 1), 0;
        for (w = 1; w < C && 0 === D[w]; w++);
        for (k < w && (k = w), N = 1, b = 1; b <= r; b++)
          if (((N <<= 1), (N -= D[b]) < 0)) return -1;
        if (N > 0 && (0 === t || 1 !== C)) return -1;
        for (L[1] = 0, b = 1; b < r; b++) L[b + 1] = L[b] + D[b];
        for (x = 0; x < i; x++) 0 !== e[n + x] && (d[L[e[n + x]]++] = x);
        if (
          (0 === t
            ? ((A = B = d), (y = 19))
            : 1 === t
            ? ((A = s), (j -= 257), (B = a), (R -= 257), (y = 256))
            : ((A = l), (B = u), (y = -1)),
          (O = 0),
          (x = 0),
          (b = w),
          (_ = c),
          (E = k),
          (T = 0),
          (v = -1),
          (g = (S = 1 << k) - 1),
          (1 === t && S > 852) || (2 === t && S > 592))
        )
          return 1;
        for (;;) {
          (I = b - T),
            d[x] < y
              ? ((M = 0), (F = d[x]))
              : d[x] > y
              ? ((M = B[R + d[x]]), (F = A[j + d[x]]))
              : ((M = 96), (F = 0)),
            (p = 1 << (b - T)),
            (w = m = 1 << E);
          do o[_ + (O >> T) + (m -= p)] = (I << 24) | (M << 16) | F | 0;
          while (0 !== m);
          for (p = 1 << (b - 1); O & p; ) p >>= 1;
          if (
            (0 !== p ? ((O &= p - 1), (O += p)) : (O = 0), x++, 0 == --D[b])
          ) {
            if (b === C) break;
            b = e[n + d[x]];
          }
          if (b > k && (O & g) !== v) {
            for (
              0 === T && (T = k), _ += w, N = 1 << (E = b - T);
              E + T < C && !((N -= D[E + T]) <= 0);

            )
              E++, (N <<= 1);
            if (((S += 1 << E), (1 === t && S > 852) || (2 === t && S > 592)))
              return 1;
            o[(v = O & g)] = (k << 24) | (E << 16) | (_ - c) | 0;
          }
        }
        return (
          0 !== O && (o[_ + O] = ((b - T) << 24) | 4194304), (h.bits = k), 0
        );
      },
      d = {
        Z_NO_FLUSH: 0,
        Z_PARTIAL_FLUSH: 1,
        Z_SYNC_FLUSH: 2,
        Z_FULL_FLUSH: 3,
        Z_FINISH: 4,
        Z_BLOCK: 5,
        Z_TREES: 6,
        Z_OK: 0,
        Z_STREAM_END: 1,
        Z_NEED_DICT: 2,
        Z_ERRNO: -1,
        Z_STREAM_ERROR: -2,
        Z_DATA_ERROR: -3,
        Z_MEM_ERROR: -4,
        Z_BUF_ERROR: -5,
        Z_NO_COMPRESSION: 0,
        Z_BEST_SPEED: 1,
        Z_BEST_COMPRESSION: 9,
        Z_DEFAULT_COMPRESSION: -1,
        Z_FILTERED: 1,
        Z_HUFFMAN_ONLY: 2,
        Z_RLE: 3,
        Z_FIXED: 4,
        Z_DEFAULT_STRATEGY: 0,
        Z_BINARY: 0,
        Z_TEXT: 1,
        Z_UNKNOWN: 2,
        Z_DEFLATED: 8,
      };
    let {
        Z_FINISH: h,
        Z_BLOCK: f,
        Z_TREES: p,
        Z_OK: m,
        Z_STREAM_END: v,
        Z_NEED_DICT: g,
        Z_STREAM_ERROR: _,
        Z_DATA_ERROR: y,
        Z_MEM_ERROR: b,
        Z_BUF_ERROR: x,
        Z_DEFLATED: w,
      } = d,
      C = 12,
      k = 30,
      E = (t) =>
        ((t >>> 24) & 255) +
        ((t >>> 8) & 65280) +
        ((65280 & t) << 8) +
        ((255 & t) << 24);
    function T() {
      (this.mode = 0),
        (this.last = !1),
        (this.wrap = 0),
        (this.havedict = !1),
        (this.flags = 0),
        (this.dmax = 0),
        (this.check = 0),
        (this.total = 0),
        (this.head = null),
        (this.wbits = 0),
        (this.wsize = 0),
        (this.whave = 0),
        (this.wnext = 0),
        (this.window = null),
        (this.hold = 0),
        (this.bits = 0),
        (this.length = 0),
        (this.offset = 0),
        (this.extra = 0),
        (this.lencode = null),
        (this.distcode = null),
        (this.lenbits = 0),
        (this.distbits = 0),
        (this.ncode = 0),
        (this.nlen = 0),
        (this.ndist = 0),
        (this.have = 0),
        (this.next = null),
        (this.lens = new Uint16Array(320)),
        (this.work = new Uint16Array(288)),
        (this.lendyn = null),
        (this.distdyn = null),
        (this.sane = 0),
        (this.back = 0),
        (this.was = 0);
    }
    let N = (t) => {
        if (!t || !t.state) return _;
        let e = t.state;
        return (
          (t.total_in = t.total_out = e.total = 0),
          (t.msg = ""),
          e.wrap && (t.adler = 1 & e.wrap),
          (e.mode = 1),
          (e.last = 0),
          (e.havedict = 0),
          (e.dmax = 32768),
          (e.head = null),
          (e.hold = 0),
          (e.bits = 0),
          (e.lencode = e.lendyn = new Int32Array(852)),
          (e.distcode = e.distdyn = new Int32Array(592)),
          (e.sane = 1),
          (e.back = -1),
          m
        );
      },
      S = (t) => {
        if (!t || !t.state) return _;
        let e = t.state;
        return (e.wsize = 0), (e.whave = 0), (e.wnext = 0), N(t);
      },
      O = (t, e) => {
        let n;
        if (!t || !t.state) return _;
        let i = t.state;
        return (
          e < 0
            ? ((n = 0), (e = -e))
            : ((n = 1 + (e >> 4)), e < 48 && (e &= 15)),
          e && (e < 8 || e > 15)
            ? _
            : (null !== i.window && i.wbits !== e && (i.window = null),
              (i.wrap = n),
              (i.wbits = e),
              S(t))
        );
      },
      A = (t, e) => {
        if (!t) return _;
        let n = new T();
        (t.state = n), (n.window = null);
        let i = O(t, e);
        return i !== m && (t.state = null), i;
      },
      j,
      D,
      L = !0,
      I = (t) => {
        if (L) {
          (j = new Int32Array(512)), (D = new Int32Array(32));
          let e = 0;
          for (; e < 144; ) t.lens[e++] = 8;
          for (; e < 256; ) t.lens[e++] = 9;
          for (; e < 280; ) t.lens[e++] = 7;
          for (; e < 288; ) t.lens[e++] = 8;
          for (c(1, t.lens, 0, 288, j, 0, t.work, { bits: 9 }), e = 0; e < 32; )
            t.lens[e++] = 5;
          c(2, t.lens, 0, 32, D, 0, t.work, { bits: 5 }), (L = !1);
        }
        (t.lencode = j), (t.lenbits = 9), (t.distcode = D), (t.distbits = 5);
      },
      M = (t, e, n, i) => {
        let o,
          r = t.state;
        return (
          null === r.window &&
            ((r.wsize = 1 << r.wbits),
            (r.wnext = 0),
            (r.whave = 0),
            (r.window = new Uint8Array(r.wsize))),
          i >= r.wsize
            ? (r.window.set(e.subarray(n - r.wsize, n), 0),
              (r.wnext = 0),
              (r.whave = r.wsize))
            : ((o = r.wsize - r.wnext) > i && (o = i),
              r.window.set(e.subarray(n - i, n - i + o), r.wnext),
              (i -= o)
                ? (r.window.set(e.subarray(n - i, n), 0),
                  (r.wnext = i),
                  (r.whave = r.wsize))
                : ((r.wnext += o),
                  r.wnext === r.wsize && (r.wnext = 0),
                  r.whave < r.wsize && (r.whave += o))),
          0
        );
      };
    var F = {
      inflateReset: S,
      inflateReset2: O,
      inflateResetKeep: N,
      inflateInit: (t) => A(t, 15),
      inflateInit2: A,
      inflate(t, n) {
        let r,
          s,
          a,
          l,
          u,
          d,
          T,
          N,
          S,
          O,
          A,
          j,
          D,
          L,
          F,
          B,
          R,
          H,
          P,
          q,
          z,
          W,
          Z = 0,
          X = new Uint8Array(4),
          U,
          V,
          Y = new Uint8Array([
            16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15,
          ]);
        if (!t || !t.state || !t.output || (!t.input && 0 !== t.avail_in))
          return _;
        (r = t.state).mode === C && (r.mode = 13),
          (u = t.next_out),
          (a = t.output),
          (T = t.avail_out),
          (l = t.next_in),
          (s = t.input),
          (d = t.avail_in),
          (N = r.hold),
          (S = r.bits),
          (O = d),
          (A = T),
          (W = m);
        e: for (;;)
          switch (r.mode) {
            case 1:
              if (0 === r.wrap) {
                r.mode = 13;
                break;
              }
              for (; S < 16; ) {
                if (0 === d) break e;
                d--, (N += s[l++] << S), (S += 8);
              }
              if (2 & r.wrap && 35615 === N) {
                (r.check = 0),
                  (X[0] = 255 & N),
                  (X[1] = (N >>> 8) & 255),
                  (r.check = i(r.check, X, 2, 0)),
                  (N = 0),
                  (S = 0),
                  (r.mode = 2);
                break;
              }
              if (
                ((r.flags = 0),
                r.head && (r.head.done = !1),
                !(1 & r.wrap) || (((255 & N) << 8) + (N >> 8)) % 31)
              ) {
                (t.msg = "incorrect header check"), (r.mode = k);
                break;
              }
              if ((15 & N) !== w) {
                (t.msg = "unknown compression method"), (r.mode = k);
                break;
              }
              if (((N >>>= 4), (S -= 4), (z = 8 + (15 & N)), 0 === r.wbits))
                r.wbits = z;
              else if (z > r.wbits) {
                (t.msg = "invalid window size"), (r.mode = k);
                break;
              }
              (r.dmax = 1 << r.wbits),
                (t.adler = r.check = 1),
                (r.mode = 512 & N ? 10 : C),
                (N = 0),
                (S = 0);
              break;
            case 2:
              for (; S < 16; ) {
                if (0 === d) break e;
                d--, (N += s[l++] << S), (S += 8);
              }
              if (((r.flags = N), (255 & r.flags) !== w)) {
                (t.msg = "unknown compression method"), (r.mode = k);
                break;
              }
              if (57344 & r.flags) {
                (t.msg = "unknown header flags set"), (r.mode = k);
                break;
              }
              r.head && (r.head.text = (N >> 8) & 1),
                512 & r.flags &&
                  ((X[0] = 255 & N),
                  (X[1] = (N >>> 8) & 255),
                  (r.check = i(r.check, X, 2, 0))),
                (N = 0),
                (S = 0),
                (r.mode = 3);
            case 3:
              for (; S < 32; ) {
                if (0 === d) break e;
                d--, (N += s[l++] << S), (S += 8);
              }
              r.head && (r.head.time = N),
                512 & r.flags &&
                  ((X[0] = 255 & N),
                  (X[1] = (N >>> 8) & 255),
                  (X[2] = (N >>> 16) & 255),
                  (X[3] = (N >>> 24) & 255),
                  (r.check = i(r.check, X, 4, 0))),
                (N = 0),
                (S = 0),
                (r.mode = 4);
            case 4:
              for (; S < 16; ) {
                if (0 === d) break e;
                d--, (N += s[l++] << S), (S += 8);
              }
              r.head && ((r.head.xflags = 255 & N), (r.head.os = N >> 8)),
                512 & r.flags &&
                  ((X[0] = 255 & N),
                  (X[1] = (N >>> 8) & 255),
                  (r.check = i(r.check, X, 2, 0))),
                (N = 0),
                (S = 0),
                (r.mode = 5);
            case 5:
              if (1024 & r.flags) {
                for (; S < 16; ) {
                  if (0 === d) break e;
                  d--, (N += s[l++] << S), (S += 8);
                }
                (r.length = N),
                  r.head && (r.head.extra_len = N),
                  512 & r.flags &&
                    ((X[0] = 255 & N),
                    (X[1] = (N >>> 8) & 255),
                    (r.check = i(r.check, X, 2, 0))),
                  (N = 0),
                  (S = 0);
              } else r.head && (r.head.extra = null);
              r.mode = 6;
            case 6:
              if (
                1024 & r.flags &&
                ((j = r.length) > d && (j = d),
                j &&
                  (r.head &&
                    ((z = r.head.extra_len - r.length),
                    r.head.extra ||
                      (r.head.extra = new Uint8Array(r.head.extra_len)),
                    r.head.extra.set(s.subarray(l, l + j), z)),
                  512 & r.flags && (r.check = i(r.check, s, j, l)),
                  (d -= j),
                  (l += j),
                  (r.length -= j)),
                r.length)
              )
                break e;
              (r.length = 0), (r.mode = 7);
            case 7:
              if (2048 & r.flags) {
                if (0 === d) break e;
                j = 0;
                do
                  (z = s[l + j++]),
                    r.head &&
                      z &&
                      r.length < 65536 &&
                      (r.head.name += String.fromCharCode(z));
                while (z && j < d);
                if (
                  (512 & r.flags && (r.check = i(r.check, s, j, l)),
                  (d -= j),
                  (l += j),
                  z)
                )
                  break e;
              } else r.head && (r.head.name = null);
              (r.length = 0), (r.mode = 8);
            case 8:
              if (4096 & r.flags) {
                if (0 === d) break e;
                j = 0;
                do
                  (z = s[l + j++]),
                    r.head &&
                      z &&
                      r.length < 65536 &&
                      (r.head.comment += String.fromCharCode(z));
                while (z && j < d);
                if (
                  (512 & r.flags && (r.check = i(r.check, s, j, l)),
                  (d -= j),
                  (l += j),
                  z)
                )
                  break e;
              } else r.head && (r.head.comment = null);
              r.mode = 9;
            case 9:
              if (512 & r.flags) {
                for (; S < 16; ) {
                  if (0 === d) break e;
                  d--, (N += s[l++] << S), (S += 8);
                }
                if (N !== (65535 & r.check)) {
                  (t.msg = "header crc mismatch"), (r.mode = k);
                  break;
                }
                (N = 0), (S = 0);
              }
              r.head &&
                ((r.head.hcrc = (r.flags >> 9) & 1), (r.head.done = !0)),
                (t.adler = r.check = 0),
                (r.mode = C);
              break;
            case 10:
              for (; S < 32; ) {
                if (0 === d) break e;
                d--, (N += s[l++] << S), (S += 8);
              }
              (t.adler = r.check = E(N)), (N = 0), (S = 0), (r.mode = 11);
            case 11:
              if (0 === r.havedict)
                return (
                  (t.next_out = u),
                  (t.avail_out = T),
                  (t.next_in = l),
                  (t.avail_in = d),
                  (r.hold = N),
                  (r.bits = S),
                  g
                );
              (t.adler = r.check = 1), (r.mode = C);
            case C:
              if (n === f || n === p) break e;
            case 13:
              if (r.last) {
                (N >>>= 7 & S), (S -= 7 & S), (r.mode = 27);
                break;
              }
              for (; S < 3; ) {
                if (0 === d) break e;
                d--, (N += s[l++] << S), (S += 8);
              }
              switch (((r.last = 1 & N), (S -= 1), 3 & (N >>>= 1))) {
                case 0:
                  r.mode = 14;
                  break;
                case 1:
                  if ((I(r), (r.mode = 20), n === p)) {
                    (N >>>= 2), (S -= 2);
                    break e;
                  }
                  break;
                case 2:
                  r.mode = 17;
                  break;
                case 3:
                  (t.msg = "invalid block type"), (r.mode = k);
              }
              (N >>>= 2), (S -= 2);
              break;
            case 14:
              for (N >>>= 7 & S, S -= 7 & S; S < 32; ) {
                if (0 === d) break e;
                d--, (N += s[l++] << S), (S += 8);
              }
              if ((65535 & N) != ((N >>> 16) ^ 65535)) {
                (t.msg = "invalid stored block lengths"), (r.mode = k);
                break;
              }
              if (
                ((r.length = 65535 & N),
                (N = 0),
                (S = 0),
                (r.mode = 15),
                n === p)
              )
                break e;
            case 15:
              r.mode = 16;
            case 16:
              if ((j = r.length)) {
                if ((j > d && (j = d), j > T && (j = T), 0 === j)) break e;
                a.set(s.subarray(l, l + j), u),
                  (d -= j),
                  (l += j),
                  (T -= j),
                  (u += j),
                  (r.length -= j);
                break;
              }
              r.mode = C;
              break;
            case 17:
              for (; S < 14; ) {
                if (0 === d) break e;
                d--, (N += s[l++] << S), (S += 8);
              }
              if (
                ((r.nlen = 257 + (31 & N)),
                (N >>>= 5),
                (S -= 5),
                (r.ndist = 1 + (31 & N)),
                (N >>>= 5),
                (S -= 5),
                (r.ncode = 4 + (15 & N)),
                (N >>>= 4),
                (S -= 4),
                r.nlen > 286 || r.ndist > 30)
              ) {
                (t.msg = "too many length or distance symbols"), (r.mode = k);
                break;
              }
              (r.have = 0), (r.mode = 18);
            case 18:
              for (; r.have < r.ncode; ) {
                for (; S < 3; ) {
                  if (0 === d) break e;
                  d--, (N += s[l++] << S), (S += 8);
                }
                (r.lens[Y[r.have++]] = 7 & N), (N >>>= 3), (S -= 3);
              }
              for (; r.have < 19; ) r.lens[Y[r.have++]] = 0;
              if (
                ((r.lencode = r.lendyn),
                (r.lenbits = 7),
                (U = { bits: r.lenbits }),
                (W = c(0, r.lens, 0, 19, r.lencode, 0, r.work, U)),
                (r.lenbits = U.bits),
                W)
              ) {
                (t.msg = "invalid code lengths set"), (r.mode = k);
                break;
              }
              (r.have = 0), (r.mode = 19);
            case 19:
              for (; r.have < r.nlen + r.ndist; ) {
                for (
                  ;
                  (F = (Z = r.lencode[N & ((1 << r.lenbits) - 1)]) >>> 24),
                    (B = (Z >>> 16) & 255),
                    (R = 65535 & Z),
                    !(F <= S);

                ) {
                  if (0 === d) break e;
                  d--, (N += s[l++] << S), (S += 8);
                }
                if (R < 16) (N >>>= F), (S -= F), (r.lens[r.have++] = R);
                else {
                  if (16 === R) {
                    for (V = F + 2; S < V; ) {
                      if (0 === d) break e;
                      d--, (N += s[l++] << S), (S += 8);
                    }
                    if (((N >>>= F), (S -= F), 0 === r.have)) {
                      (t.msg = "invalid bit length repeat"), (r.mode = k);
                      break;
                    }
                    (z = r.lens[r.have - 1]),
                      (j = 3 + (3 & N)),
                      (N >>>= 2),
                      (S -= 2);
                  } else if (17 === R) {
                    for (V = F + 3; S < V; ) {
                      if (0 === d) break e;
                      d--, (N += s[l++] << S), (S += 8);
                    }
                    (N >>>= F),
                      (S -= F),
                      (z = 0),
                      (j = 3 + (7 & N)),
                      (N >>>= 3),
                      (S -= 3);
                  } else {
                    for (V = F + 7; S < V; ) {
                      if (0 === d) break e;
                      d--, (N += s[l++] << S), (S += 8);
                    }
                    (N >>>= F),
                      (S -= F),
                      (z = 0),
                      (j = 11 + (127 & N)),
                      (N >>>= 7),
                      (S -= 7);
                  }
                  if (r.have + j > r.nlen + r.ndist) {
                    (t.msg = "invalid bit length repeat"), (r.mode = k);
                    break;
                  }
                  for (; j--; ) r.lens[r.have++] = z;
                }
              }
              if (r.mode === k) break;
              if (0 === r.lens[256]) {
                (t.msg = "invalid code -- missing end-of-block"), (r.mode = k);
                break;
              }
              if (
                ((r.lenbits = 9),
                (U = { bits: r.lenbits }),
                (W = c(1, r.lens, 0, r.nlen, r.lencode, 0, r.work, U)),
                (r.lenbits = U.bits),
                W)
              ) {
                (t.msg = "invalid literal/lengths set"), (r.mode = k);
                break;
              }
              if (
                ((r.distbits = 6),
                (r.distcode = r.distdyn),
                (U = { bits: r.distbits }),
                (W = c(2, r.lens, r.nlen, r.ndist, r.distcode, 0, r.work, U)),
                (r.distbits = U.bits),
                W)
              ) {
                (t.msg = "invalid distances set"), (r.mode = k);
                break;
              }
              if (((r.mode = 20), n === p)) break e;
            case 20:
              r.mode = 21;
            case 21:
              if (d >= 6 && T >= 258) {
                (t.next_out = u),
                  (t.avail_out = T),
                  (t.next_in = l),
                  (t.avail_in = d),
                  (r.hold = N),
                  (r.bits = S),
                  o(t, A),
                  (u = t.next_out),
                  (a = t.output),
                  (T = t.avail_out),
                  (l = t.next_in),
                  (s = t.input),
                  (d = t.avail_in),
                  (N = r.hold),
                  (S = r.bits),
                  r.mode === C && (r.back = -1);
                break;
              }
              for (
                r.back = 0;
                (F = (Z = r.lencode[N & ((1 << r.lenbits) - 1)]) >>> 24),
                  (B = (Z >>> 16) & 255),
                  (R = 65535 & Z),
                  !(F <= S);

              ) {
                if (0 === d) break e;
                d--, (N += s[l++] << S), (S += 8);
              }
              if (B && 0 == (240 & B)) {
                for (
                  H = F, P = B, q = R;
                  (F =
                    (Z = r.lencode[q + ((N & ((1 << (H + P)) - 1)) >> H)]) >>>
                    24),
                    (B = (Z >>> 16) & 255),
                    (R = 65535 & Z),
                    !(H + F <= S);

                ) {
                  if (0 === d) break e;
                  d--, (N += s[l++] << S), (S += 8);
                }
                (N >>>= H), (S -= H), (r.back += H);
              }
              if (
                ((N >>>= F), (S -= F), (r.back += F), (r.length = R), 0 === B)
              ) {
                r.mode = 26;
                break;
              }
              if (32 & B) {
                (r.back = -1), (r.mode = C);
                break;
              }
              if (64 & B) {
                (t.msg = "invalid literal/length code"), (r.mode = k);
                break;
              }
              (r.extra = 15 & B), (r.mode = 22);
            case 22:
              if (r.extra) {
                for (V = r.extra; S < V; ) {
                  if (0 === d) break e;
                  d--, (N += s[l++] << S), (S += 8);
                }
                (r.length += N & ((1 << r.extra) - 1)),
                  (N >>>= r.extra),
                  (S -= r.extra),
                  (r.back += r.extra);
              }
              (r.was = r.length), (r.mode = 23);
            case 23:
              for (
                ;
                (F = (Z = r.distcode[N & ((1 << r.distbits) - 1)]) >>> 24),
                  (B = (Z >>> 16) & 255),
                  (R = 65535 & Z),
                  !(F <= S);

              ) {
                if (0 === d) break e;
                d--, (N += s[l++] << S), (S += 8);
              }
              if (0 == (240 & B)) {
                for (
                  H = F, P = B, q = R;
                  (F =
                    (Z = r.distcode[q + ((N & ((1 << (H + P)) - 1)) >> H)]) >>>
                    24),
                    (B = (Z >>> 16) & 255),
                    (R = 65535 & Z),
                    !(H + F <= S);

                ) {
                  if (0 === d) break e;
                  d--, (N += s[l++] << S), (S += 8);
                }
                (N >>>= H), (S -= H), (r.back += H);
              }
              if (((N >>>= F), (S -= F), (r.back += F), 64 & B)) {
                (t.msg = "invalid distance code"), (r.mode = k);
                break;
              }
              (r.offset = R), (r.extra = 15 & B), (r.mode = 24);
            case 24:
              if (r.extra) {
                for (V = r.extra; S < V; ) {
                  if (0 === d) break e;
                  d--, (N += s[l++] << S), (S += 8);
                }
                (r.offset += N & ((1 << r.extra) - 1)),
                  (N >>>= r.extra),
                  (S -= r.extra),
                  (r.back += r.extra);
              }
              if (r.offset > r.dmax) {
                (t.msg = "invalid distance too far back"), (r.mode = k);
                break;
              }
              r.mode = 25;
            case 25:
              if (0 === T) break e;
              if (((j = A - T), r.offset > j)) {
                if ((j = r.offset - j) > r.whave && r.sane) {
                  (t.msg = "invalid distance too far back"), (r.mode = k);
                  break;
                }
                j > r.wnext
                  ? ((j -= r.wnext), (D = r.wsize - j))
                  : (D = r.wnext - j),
                  j > r.length && (j = r.length),
                  (L = r.window);
              } else (L = a), (D = u - r.offset), (j = r.length);
              j > T && (j = T), (T -= j), (r.length -= j);
              do a[u++] = L[D++];
              while (--j);
              0 === r.length && (r.mode = 21);
              break;
            case 26:
              if (0 === T) break e;
              (a[u++] = r.length), T--, (r.mode = 21);
              break;
            case 27:
              if (r.wrap) {
                for (; S < 32; ) {
                  if (0 === d) break e;
                  d--, (N |= s[l++] << S), (S += 8);
                }
                if (
                  ((A -= T),
                  (t.total_out += A),
                  (r.total += A),
                  A &&
                    (t.adler = r.check =
                      r.flags
                        ? i(r.check, a, A, u - A)
                        : e(r.check, a, A, u - A)),
                  (A = T),
                  (r.flags ? N : E(N)) !== r.check)
                ) {
                  (t.msg = "incorrect data check"), (r.mode = k);
                  break;
                }
                (N = 0), (S = 0);
              }
              r.mode = 28;
            case 28:
              if (r.wrap && r.flags) {
                for (; S < 32; ) {
                  if (0 === d) break e;
                  d--, (N += s[l++] << S), (S += 8);
                }
                if (N !== (4294967295 & r.total)) {
                  (t.msg = "incorrect length check"), (r.mode = k);
                  break;
                }
                (N = 0), (S = 0);
              }
              r.mode = 29;
            case 29:
              W = v;
              break e;
            case k:
              W = y;
              break e;
            case 31:
              return b;
            default:
              return _;
          }
        return (
          (t.next_out = u),
          (t.avail_out = T),
          (t.next_in = l),
          (t.avail_in = d),
          (r.hold = N),
          (r.bits = S),
          (r.wsize ||
            (A !== t.avail_out && r.mode < k && (r.mode < 27 || n !== h))) &&
            M(t, t.output, t.next_out, A - t.avail_out),
          (O -= t.avail_in),
          (A -= t.avail_out),
          (t.total_in += O),
          (t.total_out += A),
          (r.total += A),
          r.wrap &&
            A &&
            (t.adler = r.check =
              r.flags
                ? i(r.check, a, A, t.next_out - A)
                : e(r.check, a, A, t.next_out - A)),
          (t.data_type =
            r.bits +
            (r.last ? 64 : 0) +
            (r.mode === C ? 128 : 0) +
            (20 === r.mode || 15 === r.mode ? 256 : 0)),
          ((0 === O && 0 === A) || n === h) && W === m && (W = x),
          W
        );
      },
      inflateEnd(t) {
        if (!t || !t.state) return _;
        let e = t.state;
        return e.window && (e.window = null), (t.state = null), m;
      },
      inflateGetHeader(t, e) {
        if (!t || !t.state) return _;
        let n = t.state;
        return 0 == (2 & n.wrap) ? _ : ((n.head = e), (e.done = !1), m);
      },
      inflateSetDictionary(t, n) {
        let i = n.length,
          o,
          r,
          s;
        return t && t.state
          ? 0 !== (o = t.state).wrap && 11 !== o.mode
            ? _
            : 11 === o.mode && (r = e((r = 1), n, i, 0)) !== o.check
            ? y
            : (s = M(t, n, i, i))
            ? ((o.mode = 31), b)
            : ((o.havedict = 1), m)
          : _;
      },
      inflateInfo: "pako inflate (from Nodeca project)",
    };
    let B = (t, e) => Object.prototype.hasOwnProperty.call(t, e);
    var R = function (t) {
        let e = Array.prototype.slice.call(arguments, 1);
        for (; e.length; ) {
          let n = e.shift();
          if (n) {
            if ("object" != typeof n) throw TypeError(n + "must be non-object");
            for (let i in n) B(n, i) && (t[i] = n[i]);
          }
        }
        return t;
      },
      H = (t) => {
        let e = 0;
        for (let n = 0, i = t.length; n < i; n++) e += t[n].length;
        let o = new Uint8Array(e);
        for (let r = 0, s = 0, a = t.length; r < a; r++) {
          let l = t[r];
          o.set(l, s), (s += l.length);
        }
        return o;
      };
    let P = !0;
    try {
      String.fromCharCode.apply(null, new Uint8Array(1));
    } catch (q) {
      P = !1;
    }
    let z = new Uint8Array(256);
    for (let W = 0; W < 256; W++)
      z[W] =
        W >= 252
          ? 6
          : W >= 248
          ? 5
          : W >= 240
          ? 4
          : W >= 224
          ? 3
          : W >= 192
          ? 2
          : 1;
    z[254] = z[254] = 1;
    var Z = (t) => {
        if ("function" == typeof TextEncoder && TextEncoder.prototype.encode)
          return new TextEncoder().encode(t);
        let e,
          n,
          i,
          o,
          r,
          s = t.length,
          a = 0;
        for (o = 0; o < s; o++)
          55296 == (64512 & (n = t.charCodeAt(o))) &&
            o + 1 < s &&
            56320 == (64512 & (i = t.charCodeAt(o + 1))) &&
            ((n = 65536 + ((n - 55296) << 10) + (i - 56320)), o++),
            (a += n < 128 ? 1 : n < 2048 ? 2 : n < 65536 ? 3 : 4);
        for (e = new Uint8Array(a), r = 0, o = 0; r < a; o++)
          55296 == (64512 & (n = t.charCodeAt(o))) &&
            o + 1 < s &&
            56320 == (64512 & (i = t.charCodeAt(o + 1))) &&
            ((n = 65536 + ((n - 55296) << 10) + (i - 56320)), o++),
            n < 128
              ? (e[r++] = n)
              : n < 2048
              ? ((e[r++] = 192 | (n >>> 6)), (e[r++] = 128 | (63 & n)))
              : n < 65536
              ? ((e[r++] = 224 | (n >>> 12)),
                (e[r++] = 128 | ((n >>> 6) & 63)),
                (e[r++] = 128 | (63 & n)))
              : ((e[r++] = 240 | (n >>> 18)),
                (e[r++] = 128 | ((n >>> 12) & 63)),
                (e[r++] = 128 | ((n >>> 6) & 63)),
                (e[r++] = 128 | (63 & n)));
        return e;
      },
      X = (t, e) => {
        let n = e || t.length;
        if ("function" == typeof TextDecoder && TextDecoder.prototype.decode)
          return new TextDecoder().decode(t.subarray(0, e));
        let i,
          o,
          r = Array(2 * n);
        for (o = 0, i = 0; i < n; ) {
          let s = t[i++];
          if (s < 128) {
            r[o++] = s;
            continue;
          }
          let a = z[s];
          if (a > 4) (r[o++] = 65533), (i += a - 1);
          else {
            for (s &= 2 === a ? 31 : 3 === a ? 15 : 7; a > 1 && i < n; )
              (s = (s << 6) | (63 & t[i++])), a--;
            a > 1
              ? (r[o++] = 65533)
              : s < 65536
              ? (r[o++] = s)
              : ((s -= 65536),
                (r[o++] = 55296 | ((s >> 10) & 1023)),
                (r[o++] = 56320 | (1023 & s)));
          }
        }
        return ((t, e) => {
          if (e < 65534 && t.subarray && P)
            return String.fromCharCode.apply(
              null,
              t.length === e ? t : t.subarray(0, e)
            );
          let n = "";
          for (let i = 0; i < e; i++) n += String.fromCharCode(t[i]);
          return n;
        })(r, o);
      },
      U = (t, e) => {
        (e = e || t.length) > t.length && (e = t.length);
        let n = e - 1;
        for (; n >= 0 && 128 == (192 & t[n]); ) n--;
        return n < 0 || 0 === n ? e : n + z[t[n]] > e ? n : e;
      },
      V = {
        2: "need dictionary",
        1: "stream end",
        0: "",
        "-1": "file error",
        "-2": "stream error",
        "-3": "data error",
        "-4": "insufficient memory",
        "-5": "buffer error",
        "-6": "incompatible version",
      },
      Y = function () {
        (this.input = null),
          (this.next_in = 0),
          (this.avail_in = 0),
          (this.total_in = 0),
          (this.output = null),
          (this.next_out = 0),
          (this.avail_out = 0),
          (this.total_out = 0),
          (this.msg = ""),
          (this.state = null),
          (this.data_type = 2),
          (this.adler = 0);
      },
      K = function () {
        (this.text = 0),
          (this.time = 0),
          (this.xflags = 0),
          (this.os = 0),
          (this.extra = null),
          (this.extra_len = 0),
          (this.name = ""),
          (this.comment = ""),
          (this.hcrc = 0),
          (this.done = !1);
      };
    let J = Object.prototype.toString,
      {
        Z_NO_FLUSH: G,
        Z_FINISH: Q,
        Z_OK: tt,
        Z_STREAM_END: te,
        Z_NEED_DICT: tn,
        Z_STREAM_ERROR: ti,
        Z_DATA_ERROR: to,
        Z_MEM_ERROR: tr,
      } = d;
    function ts(t) {
      this.options = R({ chunkSize: 65536, windowBits: 15, to: "" }, t || {});
      let e = this.options;
      e.raw &&
        e.windowBits >= 0 &&
        e.windowBits < 16 &&
        ((e.windowBits = -e.windowBits),
        0 === e.windowBits && (e.windowBits = -15)),
        !(e.windowBits >= 0 && e.windowBits < 16) ||
          (t && t.windowBits) ||
          (e.windowBits += 32),
        e.windowBits > 15 &&
          e.windowBits < 48 &&
          0 == (15 & e.windowBits) &&
          (e.windowBits |= 15),
        (this.err = 0),
        (this.msg = ""),
        (this.ended = !1),
        (this.chunks = []),
        (this.strm = new Y()),
        (this.strm.avail_out = 0);
      let n = F.inflateInit2(this.strm, e.windowBits);
      if (
        n !== tt ||
        ((this.header = new K()),
        F.inflateGetHeader(this.strm, this.header),
        e.dictionary &&
          ("string" == typeof e.dictionary
            ? (e.dictionary = Z(e.dictionary))
            : "[object ArrayBuffer]" === J.call(e.dictionary) &&
              (e.dictionary = new Uint8Array(e.dictionary)),
          e.raw &&
            (n = F.inflateSetDictionary(this.strm, e.dictionary)) !== tt))
      )
        throw Error(V[n]);
    }
    function ta(t, e) {
      let n = new ts(e);
      if ((n.push(t), n.err)) throw n.msg || V[n.err];
      return n.result;
    }
    (ts.prototype.push = function (t, e) {
      let n = this.strm,
        i = this.options.chunkSize,
        o = this.options.dictionary,
        r,
        s,
        a;
      if (this.ended) return !1;
      for (
        s = e === ~~e ? e : !0 === e ? Q : G,
          "[object ArrayBuffer]" === J.call(t)
            ? (n.input = new Uint8Array(t))
            : (n.input = t),
          n.next_in = 0,
          n.avail_in = n.input.length;
        ;

      ) {
        for (
          0 === n.avail_out &&
            ((n.output = new Uint8Array(i)),
            (n.next_out = 0),
            (n.avail_out = i)),
            (r = F.inflate(n, s)) === tn &&
              o &&
              ((r = F.inflateSetDictionary(n, o)) === tt
                ? (r = F.inflate(n, s))
                : r === to && (r = tn));
          n.avail_in > 0 && r === te && n.state.wrap > 0 && 0 !== t[n.next_in];

        )
          F.inflateReset(n), (r = F.inflate(n, s));
        switch (r) {
          case ti:
          case to:
          case tn:
          case tr:
            return this.onEnd(r), (this.ended = !0), !1;
        }
        if (
          ((a = n.avail_out), n.next_out && (0 === n.avail_out || r === te))
        ) {
          if ("string" === this.options.to) {
            let l = U(n.output, n.next_out),
              u = n.next_out - l,
              c = X(n.output, l);
            (n.next_out = u),
              (n.avail_out = i - u),
              u && n.output.set(n.output.subarray(l, l + u), 0),
              this.onData(c);
          } else
            this.onData(
              n.output.length === n.next_out
                ? n.output
                : n.output.subarray(0, n.next_out)
            );
        }
        if (r !== tt || 0 !== a) {
          if (r === te)
            return (
              (r = F.inflateEnd(this.strm)),
              this.onEnd(r),
              (this.ended = !0),
              !0
            );
          if (0 === n.avail_in) break;
        }
      }
      return !0;
    }),
      (ts.prototype.onData = function (t) {
        this.chunks.push(t);
      }),
      (ts.prototype.onEnd = function (t) {
        t === tt &&
          ("string" === this.options.to
            ? (this.result = this.chunks.join(""))
            : (this.result = H(this.chunks))),
          (this.chunks = []),
          (this.err = t),
          (this.msg = this.strm.msg);
      });
    var tl = ts,
      tu = ta,
      tc = function (t, e) {
        return ((e = e || {}).raw = !0), ta(t, e);
      },
      td = ta,
      th = d,
      tf = {
        Inflate: tl,
        inflate: tu,
        inflateRaw: tc,
        ungzip: td,
        constants: th,
      };
    (t.Inflate = tl),
      (t.constants = th),
      (t.default = tf),
      (t.inflate = tu),
      (t.inflateRaw = tc),
      (t.ungzip = td),
      Object.defineProperty(t, "__esModule", { value: !0 });
  });
var $jscomp = $jscomp || {};
($jscomp.scope = {}),
  ($jscomp.arrayIteratorImpl = function (t) {
    var e = 0;
    return function () {
      return e < t.length ? { done: !1, value: t[e++] } : { done: !0 };
    };
  }),
  ($jscomp.arrayIterator = function (t) {
    return { next: $jscomp.arrayIteratorImpl(t) };
  }),
  ($jscomp.makeIterator = function (t) {
    var e =
      "undefined" != typeof Symbol && Symbol.iterator && t[Symbol.iterator];
    return e ? e.call(t) : $jscomp.arrayIterator(t);
  }),
  ($jscomp.arrayFromIterator = function (t) {
    for (var e, n = []; !(e = t.next()).done; ) n.push(e.value);
    return n;
  }),
  ($jscomp.arrayFromIterable = function (t) {
    return t instanceof Array
      ? t
      : $jscomp.arrayFromIterator($jscomp.makeIterator(t));
  });
var txml = (function () {
  function t(t, n) {
    function o(e) {
      for (var n = []; t[l]; )
        if (60 == t.charCodeAt(l)) {
          if (47 === t.charCodeAt(l + 1)) {
            var i = l + 2;
            if (((l = t.indexOf(">", l)), -1 == t.substring(i, l).indexOf(e)))
              throw Error(
                "Unexpected close tag\nLine: " +
                  ((e = t.substring(0, l).split("\n")).length - 1) +
                  "\nColumn: " +
                  (e[e.length - 1].length + 1) +
                  "\nChar: " +
                  t[l]
              );
            l + 1 && (l += 1);
            break;
          }
          if (33 === t.charCodeAt(l + 1)) {
            if (45 == t.charCodeAt(l + 2)) {
              for (
                i = l;
                -1 !== l &&
                (62 !== t.charCodeAt(l) ||
                  45 != t.charCodeAt(l - 1) ||
                  45 != t.charCodeAt(l - 2) ||
                  -1 == l);

              )
                l = t.indexOf(">", l + 1);
              -1 === l && (l = t.length), u && n.push(t.substring(i, l + 1));
            } else if (
              91 === t.charCodeAt(l + 2) &&
              91 === t.charCodeAt(l + 8) &&
              "cdata" === t.substr(l + 3, 5).toLowerCase()
            ) {
              -1 == (i = t.indexOf("]]>", l))
                ? (n.push(t.substr(l + 9)), (l = t.length))
                : (n.push(t.substring(l + 9, i)), (l = i + 3));
              continue;
            } else {
              (i = l + 1), (l += 2);
              for (var o = !1; (62 !== t.charCodeAt(l) || !0 === o) && t[l]; )
                91 === t.charCodeAt(l)
                  ? (o = !0)
                  : !0 === o && 93 === t.charCodeAt(l) && (o = !1),
                  l++;
              n.push(t.substring(i, l));
            }
            l++;
            continue;
          }
          (i = s()),
            n.push(i),
            "?" === i.tagName[0] &&
              (n.push.apply(n, $jscomp.arrayFromIterable(i.children)),
              (i.children = []));
        } else
          (i = l),
            -2 == (l = t.indexOf("<", l) - 1) && (l = t.length),
            (i = t.slice(i, l + 1)),
            (c || 0 < i.trim().length) && n.push(i),
            l++;
      return n;
    }
    function r() {
      for (var e = l; -1 === d.indexOf(t[l]) && t[l]; ) l++;
      return t.slice(e, l);
    }
    function s() {
      l++;
      for (var e = r(), n = {}, i = []; 62 !== t.charCodeAt(l) && t[l]; ) {
        var s = t.charCodeAt(l);
        if ((64 < s && 91 > s) || (96 < s && 123 > s)) {
          s = r();
          for (
            var a = t.charCodeAt(l);
            a &&
            39 !== a &&
            34 !== a &&
            !((64 < a && 91 > a) || (96 < a && 123 > a)) &&
            62 !== a;

          )
            l++, (a = t.charCodeAt(l));
          if (39 === a || 34 === a) {
            if (
              ((a = l + 1),
              (l = t.indexOf(t[l], a)),
              (a = t.slice(a, l)),
              -1 === l)
            )
              return { tagName: e, attributes: n, children: i };
          } else (a = null), l--;
          n[s] = a;
        }
        l++;
      }
      return (
        47 !== t.charCodeAt(l - 1)
          ? "script" == e
            ? ((i = l + 1),
              (l = t.indexOf("</script>", l)),
              (i = [t.slice(i, l)]),
              (l += 9))
            : "style" == e
            ? ((i = l + 1),
              (l = t.indexOf("</style>", l)),
              (i = [t.slice(i, l)]),
              (l += 8))
            : -1 === h.indexOf(e)
            ? (l++, (i = o(e)))
            : l++
          : l++,
        { tagName: e, attributes: n, children: i }
      );
    }
    function a() {
      var e = RegExp(
        "\\s" + n.attrName + "\\s*=['\"]" + n.attrValue + "['\"]"
      ).exec(t);
      return e ? e.index : -1;
    }
    var l = (n = n || {}).pos || 0,
      u = !!n.keepComments,
      c = !!n.keepWhitespace,
      d = "\r\n	>/= ",
      h = n.noChildNodes || "img br input meta link hr".split(" "),
      f = null;
    if (void 0 !== n.attrValue)
      for (n.attrName = n.attrName || "id", f = []; -1 !== (l = a()); )
        -1 !== (l = t.lastIndexOf("<", l)) && f.push(s()),
          (t = t.substr(l)),
          (l = 0);
    else f = n.parseNode ? s() : o("");
    return (n.filter && (f = i(f, n.filter)), n.simplify)
      ? e(Array.isArray(f) ? f : [f])
      : (n.setPos && (f.pos = l), f);
  }
  function e(t) {
    var n = {};
    if (!t.length) return "";
    if (1 === t.length && "string" == typeof t[0]) return t[0];
    for (var i in (t.forEach(function (t) {
      if ("object" == typeof t) {
        n[t.tagName] || (n[t.tagName] = []);
        var i = e(t.children);
        n[t.tagName].push(i),
          Object.keys(t.attributes).length && (i._attributes = t.attributes);
      }
    }),
    n))
      1 == n[i].length && (n[i] = n[i][0]);
    return n;
  }
  function n(t, e) {
    e = void 0 === e ? {} : e;
    var i = {};
    return t.length
      ? 1 === t.length && "string" == typeof t[0]
        ? Object.keys(e).length
          ? { _attributes: e, value: t[0] }
          : t[0]
        : (t.forEach(function (t) {
            if ("object" == typeof t) {
              i[t.tagName] || (i[t.tagName] = []);
              var e = n(t.children || [], t.attributes);
              i[t.tagName].push(e),
                Object.keys(t.attributes).length &&
                  (e._attributes = t.attributes);
            }
          }),
          i)
      : i;
  }
  function i(t, e, n, o) {
    (n = void 0 === n ? 0 : n), (o = void 0 === o ? "" : o);
    var r = [];
    return (
      t.forEach(function (t, s) {
        if (("object" == typeof t && e(t, s, n, o) && r.push(t), t.children)) {
          var a = i(
            t.children,
            e,
            n + 1,
            (o ? o + "." : "") + s + "." + t.tagName
          );
          r = r.concat(a);
        }
      }),
      r
    );
  }
  function o(t) {
    if (Array.isArray(t)) {
      var e = "";
      return (
        t.forEach(function (t) {
          (e += " " + o(t)), (e = e.trim());
        }),
        e
      );
    }
    return "object" == typeof t ? o(t.children) : " " + t;
  }
  return {
    parse: t,
    simplify: e,
    simplifyLostLess: n,
    filter: i,
    stringify: function (t) {
      function e(t) {
        if (t)
          for (var i = 0; i < t.length; i++)
            if ("string" == typeof t[i]) n += t[i].trim();
            else {
              var o = void 0,
                r = t[i];
              for (o in ((n += "<" + r.tagName), r.attributes))
                n =
                  null === r.attributes[o]
                    ? n + " " + o
                    : -1 === r.attributes[o].indexOf('"')
                    ? n + (" " + o + '="') + r.attributes[o].trim() + '"'
                    : n + (" " + o + "='") + r.attributes[o].trim() + "'";
              "?" === r.tagName[0]
                ? (n += "?>")
                : ((n += ">"), e(r.children), (n += "</" + r.tagName + ">"));
            }
      }
      var n = "";
      return e(t), n;
    },
    toContentString: o,
    getElementById: function (e, n, i) {
      return (e = t(e, { attrValue: n })), i ? tXml.simplify(e) : e[0];
    },
    getElementsByClassName: function (e, n, i) {
      return (
        (e = t(e, {
          attrName: "class",
          attrValue: "[a-zA-Z0-9- ]*" + n + "[a-zA-Z0-9- ]*",
        })),
        i ? tXml.simplify(e) : e
      );
    },
  };
})();
!(function () {
  "use strict";
  var ERROR = "input is invalid type",
    WINDOW = "object" == typeof window,
    root = WINDOW ? window : {};
  root.JS_MD5_NO_WINDOW && (WINDOW = !1);
  var WEB_WORKER = !WINDOW && "object" == typeof self,
    NODE_JS =
      !root.JS_MD5_NO_NODE_JS &&
      "object" == typeof process &&
      process.versions &&
      process.versions.node;
  NODE_JS ? (root = global) : WEB_WORKER && (root = self);
  var buffer8,
    COMMON_JS =
      !root.JS_MD5_NO_COMMON_JS && "object" == typeof module && module.exports,
    AMD = "function" == typeof define && define.amd,
    ARRAY_BUFFER =
      !root.JS_MD5_NO_ARRAY_BUFFER && "undefined" != typeof ArrayBuffer,
    HEX_CHARS = "0123456789abcdef".split(""),
    EXTRA = [128, 32768, 8388608, -2147483648],
    SHIFT = [0, 8, 16, 24],
    OUTPUT_TYPES = [
      "hex",
      "array",
      "digest",
      "buffer",
      "arrayBuffer",
      "base64",
    ],
    BASE64_ENCODE_CHAR =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(
        ""
      ),
    blocks = [];
  if (ARRAY_BUFFER) {
    var buffer = new ArrayBuffer(68);
    (buffer8 = new Uint8Array(buffer)), (blocks = new Uint32Array(buffer));
  }
  (!root.JS_MD5_NO_NODE_JS && Array.isArray) ||
    (Array.isArray = function (t) {
      return "[object Array]" === Object.prototype.toString.call(t);
    }),
    ARRAY_BUFFER &&
      (root.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView) &&
      (ArrayBuffer.isView = function (t) {
        return (
          "object" == typeof t &&
          t.buffer &&
          t.buffer.constructor === ArrayBuffer
        );
      });
  var createOutputMethod = function (t) {
      return function (e) {
        return new Md5(!0).update(e)[t]();
      };
    },
    createMethod = function () {
      var t = createOutputMethod("hex");
      NODE_JS && (t = nodeWrap(t)),
        (t.create = function () {
          return new Md5();
        }),
        (t.update = function (e) {
          return t.create().update(e);
        });
      for (var e = 0; e < OUTPUT_TYPES.length; ++e) {
        var n = OUTPUT_TYPES[e];
        t[n] = createOutputMethod(n);
      }
      return t;
    },
    nodeWrap = function (method) {
      var nodeMethod,
        crypto = eval("require('crypto')"),
        Buffer = eval("require('buffer').Buffer");
      return function (t) {
        if ("string" == typeof t)
          return crypto.createHash("md5").update(t, "utf8").digest("hex");
        if (null == t) throw ERROR;
        return (
          t.constructor === ArrayBuffer && (t = new Uint8Array(t)),
          Array.isArray(t) || ArrayBuffer.isView(t) || t.constructor === Buffer
            ? crypto.createHash("md5").update(new Buffer(t)).digest("hex")
            : method(t)
        );
      };
    };
  function Md5(t) {
    if (t)
      (blocks[0] =
        blocks[16] =
        blocks[1] =
        blocks[2] =
        blocks[3] =
        blocks[4] =
        blocks[5] =
        blocks[6] =
        blocks[7] =
        blocks[8] =
        blocks[9] =
        blocks[10] =
        blocks[11] =
        blocks[12] =
        blocks[13] =
        blocks[14] =
        blocks[15] =
          0),
        (this.blocks = blocks),
        (this.buffer8 = buffer8);
    else if (ARRAY_BUFFER) {
      var e = new ArrayBuffer(68);
      (this.buffer8 = new Uint8Array(e)), (this.blocks = new Uint32Array(e));
    } else this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    (this.h0 =
      this.h1 =
      this.h2 =
      this.h3 =
      this.start =
      this.bytes =
      this.hBytes =
        0),
      (this.finalized = this.hashed = !1),
      (this.first = !0);
  }
  (Md5.prototype.update = function (t) {
    if (!this.finalized) {
      var e,
        n = typeof t;
      if ("string" !== n) {
        if ("object" !== n || null === t) throw ERROR;
        if (ARRAY_BUFFER && t.constructor === ArrayBuffer)
          t = new Uint8Array(t);
        else if (!(Array.isArray(t) || (ARRAY_BUFFER && ArrayBuffer.isView(t))))
          throw ERROR;
        e = !0;
      }
      for (
        var i, o, r = 0, s = t.length, a = this.blocks, l = this.buffer8;
        r < s;

      ) {
        if (
          (this.hashed &&
            ((this.hashed = !1),
            (a[0] = a[16]),
            (a[16] =
              a[1] =
              a[2] =
              a[3] =
              a[4] =
              a[5] =
              a[6] =
              a[7] =
              a[8] =
              a[9] =
              a[10] =
              a[11] =
              a[12] =
              a[13] =
              a[14] =
              a[15] =
                0)),
          e)
        ) {
          if (ARRAY_BUFFER)
            for (o = this.start; r < s && o < 64; ++r) l[o++] = t[r];
          else
            for (o = this.start; r < s && o < 64; ++r)
              a[o >> 2] |= t[r] << SHIFT[3 & o++];
        } else if (ARRAY_BUFFER)
          for (o = this.start; r < s && o < 64; ++r)
            (i = t.charCodeAt(r)) < 128
              ? (l[o++] = i)
              : (i < 2048
                  ? (l[o++] = 192 | (i >> 6))
                  : (i < 55296 || 57344 <= i
                      ? (l[o++] = 224 | (i >> 12))
                      : ((i =
                          65536 +
                          (((1023 & i) << 10) | (1023 & t.charCodeAt(++r)))),
                        (l[o++] = 240 | (i >> 18)),
                        (l[o++] = 128 | ((i >> 12) & 63))),
                    (l[o++] = 128 | ((i >> 6) & 63))),
                (l[o++] = 128 | (63 & i)));
        else
          for (o = this.start; r < s && o < 64; ++r)
            (i = t.charCodeAt(r)) < 128
              ? (a[o >> 2] |= i << SHIFT[3 & o++])
              : (i < 2048
                  ? (a[o >> 2] |= (192 | (i >> 6)) << SHIFT[3 & o++])
                  : (i < 55296 || 57344 <= i
                      ? (a[o >> 2] |= (224 | (i >> 12)) << SHIFT[3 & o++])
                      : ((i =
                          65536 +
                          (((1023 & i) << 10) | (1023 & t.charCodeAt(++r)))),
                        (a[o >> 2] |= (240 | (i >> 18)) << SHIFT[3 & o++]),
                        (a[o >> 2] |=
                          (128 | ((i >> 12) & 63)) << SHIFT[3 & o++])),
                    (a[o >> 2] |= (128 | ((i >> 6) & 63)) << SHIFT[3 & o++])),
                (a[o >> 2] |= (128 | (63 & i)) << SHIFT[3 & o++]));
        (this.lastByteIndex = o),
          (this.bytes += o - this.start),
          64 <= o
            ? ((this.start = o - 64), this.hash(), (this.hashed = !0))
            : (this.start = o);
      }
      return (
        4294967295 < this.bytes &&
          ((this.hBytes += (this.bytes / 4294967296) << 0),
          (this.bytes = this.bytes % 4294967296)),
        this
      );
    }
  }),
    (Md5.prototype.finalize = function () {
      if (!this.finalized) {
        this.finalized = !0;
        var t = this.blocks,
          e = this.lastByteIndex;
        (t[e >> 2] |= EXTRA[3 & e]),
          56 <= e &&
            (this.hashed || this.hash(),
            (t[0] = t[16]),
            (t[16] =
              t[1] =
              t[2] =
              t[3] =
              t[4] =
              t[5] =
              t[6] =
              t[7] =
              t[8] =
              t[9] =
              t[10] =
              t[11] =
              t[12] =
              t[13] =
              t[14] =
              t[15] =
                0)),
          (t[14] = this.bytes << 3),
          (t[15] = (this.hBytes << 3) | (this.bytes >>> 29)),
          this.hash();
      }
    }),
    (Md5.prototype.hash = function () {
      var t,
        e,
        n,
        i,
        o,
        r,
        s = this.blocks;
      this.first
        ? (e =
            ((((e =
              ((t =
                ((((t = s[0] - 680876937) << 7) | (t >>> 25)) - 271733879) <<
                0) ^
                ((n =
                  ((((n =
                    (-271733879 ^
                      ((i =
                        ((((i =
                          (-1732584194 ^ (2004318071 & t)) +
                          s[1] -
                          117830708) <<
                          12) |
                          (i >>> 20)) +
                          t) <<
                        0) &
                        (-271733879 ^ t))) +
                    s[2] -
                    1126478375) <<
                    17) |
                    (n >>> 15)) +
                    i) <<
                  0) &
                  (i ^ t))) +
              s[3] -
              1316259209) <<
              22) |
              (e >>> 10)) +
              n) <<
            0)
        : ((t = this.h0),
          (e = this.h1),
          (n = this.h2),
          (e =
            ((((e +=
              ((t =
                ((((t += ((i = this.h3) ^ (e & (n ^ i))) + s[0] - 680876936) <<
                  7) |
                  (t >>> 25)) +
                  e) <<
                0) ^
                ((n =
                  ((((n +=
                    (e ^
                      ((i =
                        ((((i += (n ^ (t & (e ^ n))) + s[1] - 389564586) <<
                          12) |
                          (i >>> 20)) +
                          t) <<
                        0) &
                        (t ^ e))) +
                    s[2] +
                    606105819) <<
                    17) |
                    (n >>> 15)) +
                    i) <<
                  0) &
                  (i ^ t))) +
              s[3] -
              1044525330) <<
              22) |
              (e >>> 10)) +
              n) <<
            0)),
        (e =
          ((((e +=
            ((t =
              ((((t += (i ^ (e & (n ^ i))) + s[4] - 176418897) << 7) |
                (t >>> 25)) +
                e) <<
              0) ^
              ((n =
                ((((n +=
                  (e ^
                    ((i =
                      ((((i += (n ^ (t & (e ^ n))) + s[5] + 1200080426) << 12) |
                        (i >>> 20)) +
                        t) <<
                      0) &
                      (t ^ e))) +
                  s[6] -
                  1473231341) <<
                  17) |
                  (n >>> 15)) +
                  i) <<
                0) &
                (i ^ t))) +
            s[7] -
            45705983) <<
            22) |
            (e >>> 10)) +
            n) <<
          0),
        (e =
          ((((e +=
            ((t =
              ((((t += (i ^ (e & (n ^ i))) + s[8] + 1770035416) << 7) |
                (t >>> 25)) +
                e) <<
              0) ^
              ((n =
                ((((n +=
                  (e ^
                    ((i =
                      ((((i += (n ^ (t & (e ^ n))) + s[9] - 1958414417) << 12) |
                        (i >>> 20)) +
                        t) <<
                      0) &
                      (t ^ e))) +
                  s[10] -
                  42063) <<
                  17) |
                  (n >>> 15)) +
                  i) <<
                0) &
                (i ^ t))) +
            s[11] -
            1990404162) <<
            22) |
            (e >>> 10)) +
            n) <<
          0),
        (e =
          ((((e +=
            ((t =
              ((((t += (i ^ (e & (n ^ i))) + s[12] + 1804603682) << 7) |
                (t >>> 25)) +
                e) <<
              0) ^
              ((n =
                ((((n +=
                  (e ^
                    ((i =
                      ((((i += (n ^ (t & (e ^ n))) + s[13] - 40341101) << 12) |
                        (i >>> 20)) +
                        t) <<
                      0) &
                      (t ^ e))) +
                  s[14] -
                  1502002290) <<
                  17) |
                  (n >>> 15)) +
                  i) <<
                0) &
                (i ^ t))) +
            s[15] +
            1236535329) <<
            22) |
            (e >>> 10)) +
            n) <<
          0),
        (e =
          ((((e +=
            ((i =
              ((((i +=
                (e ^
                  (n &
                    ((t =
                      ((((t += (n ^ (i & (e ^ n))) + s[1] - 165796510) << 5) |
                        (t >>> 27)) +
                        e) <<
                      0) ^
                      e))) +
                s[6] -
                1069501632) <<
                9) |
                (i >>> 23)) +
                t) <<
              0) ^
              (t &
                ((n =
                  ((((n += (t ^ (e & (i ^ t))) + s[11] + 643717713) << 14) |
                    (n >>> 18)) +
                    i) <<
                  0) ^
                  i))) +
            s[0] -
            373897302) <<
            20) |
            (e >>> 12)) +
            n) <<
          0),
        (e =
          ((((e +=
            ((i =
              ((((i +=
                (e ^
                  (n &
                    ((t =
                      ((((t += (n ^ (i & (e ^ n))) + s[5] - 701558691) << 5) |
                        (t >>> 27)) +
                        e) <<
                      0) ^
                      e))) +
                s[10] +
                38016083) <<
                9) |
                (i >>> 23)) +
                t) <<
              0) ^
              (t &
                ((n =
                  ((((n += (t ^ (e & (i ^ t))) + s[15] - 660478335) << 14) |
                    (n >>> 18)) +
                    i) <<
                  0) ^
                  i))) +
            s[4] -
            405537848) <<
            20) |
            (e >>> 12)) +
            n) <<
          0),
        (e =
          ((((e +=
            ((i =
              ((((i +=
                (e ^
                  (n &
                    ((t =
                      ((((t += (n ^ (i & (e ^ n))) + s[9] + 568446438) << 5) |
                        (t >>> 27)) +
                        e) <<
                      0) ^
                      e))) +
                s[14] -
                1019803690) <<
                9) |
                (i >>> 23)) +
                t) <<
              0) ^
              (t &
                ((n =
                  ((((n += (t ^ (e & (i ^ t))) + s[3] - 187363961) << 14) |
                    (n >>> 18)) +
                    i) <<
                  0) ^
                  i))) +
            s[8] +
            1163531501) <<
            20) |
            (e >>> 12)) +
            n) <<
          0),
        (e =
          ((((e +=
            ((i =
              ((((i +=
                (e ^
                  (n &
                    ((t =
                      ((((t += (n ^ (i & (e ^ n))) + s[13] - 1444681467) << 5) |
                        (t >>> 27)) +
                        e) <<
                      0) ^
                      e))) +
                s[2] -
                51403784) <<
                9) |
                (i >>> 23)) +
                t) <<
              0) ^
              (t &
                ((n =
                  ((((n += (t ^ (e & (i ^ t))) + s[7] + 1735328473) << 14) |
                    (n >>> 18)) +
                    i) <<
                  0) ^
                  i))) +
            s[12] -
            1926607734) <<
            20) |
            (e >>> 12)) +
            n) <<
          0),
        (e =
          ((((e +=
            ((r =
              (i =
                ((((i +=
                  ((o = e ^ n) ^
                    (t =
                      ((((t += (o ^ i) + s[5] - 378558) << 4) | (t >>> 28)) +
                        e) <<
                      0)) +
                  s[8] -
                  2022574463) <<
                  11) |
                  (i >>> 21)) +
                  t) <<
                0) ^ t) ^
              (n =
                ((((n += (r ^ e) + s[11] + 1839030562) << 16) | (n >>> 16)) +
                  i) <<
                0)) +
            s[14] -
            35309556) <<
            23) |
            (e >>> 9)) +
            n) <<
          0),
        (e =
          ((((e +=
            ((r =
              (i =
                ((((i +=
                  ((o = e ^ n) ^
                    (t =
                      ((((t += (o ^ i) + s[1] - 1530992060) << 4) |
                        (t >>> 28)) +
                        e) <<
                      0)) +
                  s[4] +
                  1272893353) <<
                  11) |
                  (i >>> 21)) +
                  t) <<
                0) ^ t) ^
              (n =
                ((((n += (r ^ e) + s[7] - 155497632) << 16) | (n >>> 16)) +
                  i) <<
                0)) +
            s[10] -
            1094730640) <<
            23) |
            (e >>> 9)) +
            n) <<
          0),
        (e =
          ((((e +=
            ((r =
              (i =
                ((((i +=
                  ((o = e ^ n) ^
                    (t =
                      ((((t += (o ^ i) + s[13] + 681279174) << 4) |
                        (t >>> 28)) +
                        e) <<
                      0)) +
                  s[0] -
                  358537222) <<
                  11) |
                  (i >>> 21)) +
                  t) <<
                0) ^ t) ^
              (n =
                ((((n += (r ^ e) + s[3] - 722521979) << 16) | (n >>> 16)) +
                  i) <<
                0)) +
            s[6] +
            76029189) <<
            23) |
            (e >>> 9)) +
            n) <<
          0),
        (e =
          ((((e +=
            ((r =
              (i =
                ((((i +=
                  ((o = e ^ n) ^
                    (t =
                      ((((t += (o ^ i) + s[9] - 640364487) << 4) | (t >>> 28)) +
                        e) <<
                      0)) +
                  s[12] -
                  421815835) <<
                  11) |
                  (i >>> 21)) +
                  t) <<
                0) ^ t) ^
              (n =
                ((((n += (r ^ e) + s[15] + 530742520) << 16) | (n >>> 16)) +
                  i) <<
                0)) +
            s[2] -
            995338651) <<
            23) |
            (e >>> 9)) +
            n) <<
          0),
        (e =
          ((((e +=
            ((i =
              ((((i +=
                (e ^
                  ((t =
                    ((((t += (n ^ (e | ~i)) + s[0] - 198630844) << 6) |
                      (t >>> 26)) +
                      e) <<
                    0) |
                    ~n)) +
                s[7] +
                1126891415) <<
                10) |
                (i >>> 22)) +
                t) <<
              0) ^
              ((n =
                ((((n += (t ^ (i | ~e)) + s[14] - 1416354905) << 15) |
                  (n >>> 17)) +
                  i) <<
                0) |
                ~t)) +
            s[5] -
            57434055) <<
            21) |
            (e >>> 11)) +
            n) <<
          0),
        (e =
          ((((e +=
            ((i =
              ((((i +=
                (e ^
                  ((t =
                    ((((t += (n ^ (e | ~i)) + s[12] + 1700485571) << 6) |
                      (t >>> 26)) +
                      e) <<
                    0) |
                    ~n)) +
                s[3] -
                1894986606) <<
                10) |
                (i >>> 22)) +
                t) <<
              0) ^
              ((n =
                ((((n += (t ^ (i | ~e)) + s[10] - 1051523) << 15) |
                  (n >>> 17)) +
                  i) <<
                0) |
                ~t)) +
            s[1] -
            2054922799) <<
            21) |
            (e >>> 11)) +
            n) <<
          0),
        (e =
          ((((e +=
            ((i =
              ((((i +=
                (e ^
                  ((t =
                    ((((t += (n ^ (e | ~i)) + s[8] + 1873313359) << 6) |
                      (t >>> 26)) +
                      e) <<
                    0) |
                    ~n)) +
                s[15] -
                30611744) <<
                10) |
                (i >>> 22)) +
                t) <<
              0) ^
              ((n =
                ((((n += (t ^ (i | ~e)) + s[6] - 1560198380) << 15) |
                  (n >>> 17)) +
                  i) <<
                0) |
                ~t)) +
            s[13] +
            1309151649) <<
            21) |
            (e >>> 11)) +
            n) <<
          0),
        (e =
          ((((e +=
            ((i =
              ((((i +=
                (e ^
                  ((t =
                    ((((t += (n ^ (e | ~i)) + s[4] - 145523070) << 6) |
                      (t >>> 26)) +
                      e) <<
                    0) |
                    ~n)) +
                s[11] -
                1120210379) <<
                10) |
                (i >>> 22)) +
                t) <<
              0) ^
              ((n =
                ((((n += (t ^ (i | ~e)) + s[2] + 718787259) << 15) |
                  (n >>> 17)) +
                  i) <<
                0) |
                ~t)) +
            s[9] -
            343485551) <<
            21) |
            (e >>> 11)) +
            n) <<
          0),
        this.first
          ? ((this.h0 = (t + 1732584193) << 0),
            (this.h1 = (e - 271733879) << 0),
            (this.h2 = (n - 1732584194) << 0),
            (this.h3 = (i + 271733878) << 0),
            (this.first = !1))
          : ((this.h0 = (this.h0 + t) << 0),
            (this.h1 = (this.h1 + e) << 0),
            (this.h2 = (this.h2 + n) << 0),
            (this.h3 = (this.h3 + i) << 0));
    }),
    (Md5.prototype.hex = function () {
      this.finalize();
      var t = this.h0,
        e = this.h1,
        n = this.h2,
        i = this.h3;
      return (
        HEX_CHARS[(t >> 4) & 15] +
        HEX_CHARS[15 & t] +
        HEX_CHARS[(t >> 12) & 15] +
        HEX_CHARS[(t >> 8) & 15] +
        HEX_CHARS[(t >> 20) & 15] +
        HEX_CHARS[(t >> 16) & 15] +
        HEX_CHARS[(t >> 28) & 15] +
        HEX_CHARS[(t >> 24) & 15] +
        HEX_CHARS[(e >> 4) & 15] +
        HEX_CHARS[15 & e] +
        HEX_CHARS[(e >> 12) & 15] +
        HEX_CHARS[(e >> 8) & 15] +
        HEX_CHARS[(e >> 20) & 15] +
        HEX_CHARS[(e >> 16) & 15] +
        HEX_CHARS[(e >> 28) & 15] +
        HEX_CHARS[(e >> 24) & 15] +
        HEX_CHARS[(n >> 4) & 15] +
        HEX_CHARS[15 & n] +
        HEX_CHARS[(n >> 12) & 15] +
        HEX_CHARS[(n >> 8) & 15] +
        HEX_CHARS[(n >> 20) & 15] +
        HEX_CHARS[(n >> 16) & 15] +
        HEX_CHARS[(n >> 28) & 15] +
        HEX_CHARS[(n >> 24) & 15] +
        HEX_CHARS[(i >> 4) & 15] +
        HEX_CHARS[15 & i] +
        HEX_CHARS[(i >> 12) & 15] +
        HEX_CHARS[(i >> 8) & 15] +
        HEX_CHARS[(i >> 20) & 15] +
        HEX_CHARS[(i >> 16) & 15] +
        HEX_CHARS[(i >> 28) & 15] +
        HEX_CHARS[(i >> 24) & 15]
      );
    }),
    (Md5.prototype.toString = Md5.prototype.hex),
    (Md5.prototype.digest = function () {
      this.finalize();
      var t = this.h0,
        e = this.h1,
        n = this.h2,
        i = this.h3;
      return [
        255 & t,
        (t >> 8) & 255,
        (t >> 16) & 255,
        (t >> 24) & 255,
        255 & e,
        (e >> 8) & 255,
        (e >> 16) & 255,
        (e >> 24) & 255,
        255 & n,
        (n >> 8) & 255,
        (n >> 16) & 255,
        (n >> 24) & 255,
        255 & i,
        (i >> 8) & 255,
        (i >> 16) & 255,
        (i >> 24) & 255,
      ];
    }),
    (Md5.prototype.array = Md5.prototype.digest),
    (Md5.prototype.arrayBuffer = function () {
      this.finalize();
      var t = new ArrayBuffer(16),
        e = new Uint32Array(t);
      return (
        (e[0] = this.h0),
        (e[1] = this.h1),
        (e[2] = this.h2),
        (e[3] = this.h3),
        t
      );
    }),
    (Md5.prototype.buffer = Md5.prototype.arrayBuffer),
    (Md5.prototype.base64 = function () {
      for (var t, e, n, i = "", o = this.array(), r = 0; r < 15; )
        (t = o[r++]),
          (e = o[r++]),
          (n = o[r++]),
          (i +=
            BASE64_ENCODE_CHAR[t >>> 2] +
            BASE64_ENCODE_CHAR[63 & ((t << 4) | (e >>> 4))] +
            BASE64_ENCODE_CHAR[63 & ((e << 2) | (n >>> 6))] +
            BASE64_ENCODE_CHAR[63 & n]);
      return (
        i +
        (BASE64_ENCODE_CHAR[(t = o[r]) >>> 2] +
          BASE64_ENCODE_CHAR[(t << 4) & 63] +
          "==")
      );
    });
  var exports = createMethod();
  COMMON_JS
    ? (module.exports = exports)
    : ((root.md5 = exports),
      AMD &&
        define(function () {
          return exports;
        }));
})();
const _0x5ea0 = [
  "FwHDgcKUJ8OEOFrCsMOPw6AzSsKPw50FZcOxw6TDgnw+e2zCmkgSw60uwoY=",
  "F3kT",
  "D8OuCcKFNgtr",
  "RnHCnhXCuwI=",
  "5bW755q65b6J",
  "FzYlwroWwpo2",
  "BsOzDsKD",
  "WcK7w5DDow==",
  "KsKtG1sTIEPCqMO1F1RL",
  "ah0zwoldw5Y=",
  "ax8vwohXw5Viw6PDocOC",
  "w4zDsXzCgcKHw7g=",
  "woBUfMKxUQ==",
  "wrdFbcKxecK7wofDncKEPAPDgsKjwonDmA==",
  "wqjDhD7DuB7CuMOi",
  "Gw8Nw60ewpY=",
  "wrYxOTzCjMOb",
  "w4LDvG3CisKDw7nDsQ==",
  "XMKzw4vDhmBvHizDjgU=",
  "bBMOwplAw5JCw6U=",
  "w4lIeMKnQcO3wpfDgcKrNRM=",
  "aMOvwpVNXcObwofDosKiwpM=",
  "w5jCj20twrvCkA==",
  "FhTCoRnCsMOZZA==",
  "w6HCvMKYHMOLKsO6",
  "wr/DjmPDh8K7XEBswonDjMKdcsOnK2s=",
  "w6lQKRnDjMOo",
  "K8KEfgMNwqk+wpcv",
  "f8OgwpBVXQ==",
  "GHgNaUTDk8KJw53Cvjs=",
  "bBklwplxw5RCw7bDqcOJw6k=",
  "OhnDosOfw6A5w54=",
  "YGg6VWw=",
  "w4bCssKCDcOiJcO9w4HCqHvDj8K8w5ELw7A=",
  "wp7DmEPDh8KzR10=",
  "wovChWg0w7rClwbChMKwwqd2wpTCs0Udw6YZwpjCvmPDlnfDh8KOJkLConxlwo/Dv8O4w49iwohYwpzDmcKiO8KwwobDpDwlQHXCkcO9E8ODwozDvmrlv6Plubzor7vnvp7Du8OdwoE2TsOOZsOJLXEzw5TCjSYMI8OwwpPCpTdyI2/CncKbWcO1wpPCkRnCncKAw4B1W8KbXcKsaHXDnsKPTcOsw4fDkcKSW2FGeUM5BQlew5XCjTY/AMK8w6HDiMKlLWPCqcKfI8KcVFnDosKrTGHDncOyTcK7w6F4wpfChMOtbcODwqLDgQ7CpcKYw5QewrQ8w6fCm0UeYcKWVyXDisKXFBs8wqPCjEN0ZX4fwofDoW/DvTlSRm3CpMKFD8K+BBHDsRgWVcK1woHCk8Oiw6Y0MnIrw7kDw6PCvsKAw5LCuMO4C8OPwpdIImfChkFLwrPDgUvDi8O4NHzChsK3DAZxLcKrXS5JfsKswrBjfMKNw412I8ORSlRqw4bDm8OHf2xYDAM+F0LDpl3ClA/Dpmw7w6XCjcKmIXdBw7TDinnCsk12w5nDoHgYwq7CkkbCmsOswoBVwq8YacO9woMw5b+65bq55oq15bGIw4Q9wpV/chdAAcOFw7TDjAXCo8KYwoPCqA0UE8KrV8Osw59+asOxwo03KsKSw5ZlWhNlw6tkwovDpMKHw4bCs1TCqcOSecKwa8OdesOhwrPniIfmnp/ljL3vvKAycQRRQ8OLST8OwrEMe2LDlMO2wrY2WhRswrMowqIIwrTDs8K9w7tewoDCky0UCcOEwqFNdH3DnjLDvUkHwrdoV2vDhSDDlR7Do8O7wrtHw5N7wrzCoTXCr31QMMKmUjnCu8KlWEHCmcOpEcOVwojCvsKkw7piTcOhwpHCo31TSuW+meW6pOW9peWHq8Oz",
  "Vyc0wrBQwph9wozCvsK8HMKkw40=",
  "w7PCpsKTGsOXF8Orw5nCi33Dj8Kww4s=",
  "EcOMDcKCw7rCrD19Ag==",
  "wonDg8OWFg==",
  "esOYwoPDkMK4wpY=",
  "TsKNCiTDh8Ojw6QcDT8Hbg==",
  "ChMbw6c=",
  "w5LCmWQh",
  "Slp/w40=",
  "DhMBw6QTwp9QI07DngN9",
  "wqpqwqXCnxIT",
  "w6LCjMKrw7kARcO0R8OCwoPCmGI=",
  "dWbDqkJFwo01AcKOw5bCmMKrwoTCoTwEE8Ofw6XDnjdZwrtEHsO+D8KOw5PCjj7CqBt2ecOJwoZLTG3CjcKL",
  "MRPDtcOqw6UHw4/Ds8KJOzo8",
  "w6TDqTk=",
  "LAnDs8O5w7AHw57DsMKeOSk2w4U=",
  "w7vDqAXDmA==",
  "Tlx5w5ARdmvDhgfDnMKHw5I=",
  "Q3rDncOSeUI=",
  "P8OEwq4pWcKC",
  "J8OWwq8j",
  "wr85KA==",
  "w43DujrCicKsEMK3Xw==",
  "wrA9Pj/CkcOZ",
  "w57Cj28nwqjCvD7CqMKP",
  "w5LCk3MtwqjCtwXCgcKm",
  "w5/CgHIq",
  "wobDg8OWCsK3AgkNwpJHw5nDu8Oqw5UYHMKSw6UbbF7CjsKwdE7DqCfDjsOcwoPCtgrDsWjDi8ONZi3DgcO8I8K9bBvDk0Q3w57CpG9VHcKWegwkw4XCgMKRwpzDusOowqwAWMKvIcOfFw==",
  "AxnDhsKDOsOMPlrCtMOfw6dhHw==",
  "w7LCv8KXEcO+JcOpw5DCp3DDncKwwoRGwrpjwpZs",
  "ZsKow4tn",
  "wpdFd8K5VMKxwoHDusKqNgA=",
  "dMOsLRYgw65tw4Bmw7Nj",
  "GBMBw685wptUGGDDkAB9",
  "c1XCpA==",
  "fsOaOw==",
  "w55EPwjDrMOsVhnCscKnwrdewpV0w69g",
  "w6HDsUnDkl8zwrFewqvDp2jDh8Ol",
  "dHzDt0Zyw5Z0SsKOw4jCvcOqwoHCqSReJcOcwr7DnGgYw7Yd",
  "w6HCpsKEGsOLKsO6w6HCh3PDng==",
  "dSMtZlsSCmU=",
  "w7zDrBTDhsK2w7zDhsOSwpoGw6bCucKuwpojw6EEQyvDmgc+w47Dj8KhPy1ZUMK1F2HChMKXw7Y9wqvDp8KbwpDDnyXDo8ObTC3CgHPDoMOLBhR8RMK2woVMw4zCvwtjwojCrFLDtlzCg8ONJcKTw5XCn8Odw54sK8Olw4EVw6fDimQgfDcXQsK3wq7Ds8OKwo/CtXNbJcOzGybCglMQSMOWwr3DmcO3SifCglU5woJRwpcec8OIw47DuFbDukEScsOO",
  "w7lKJgDDhcOjUR4=",
  "wobDnFDDkMKz",
  "w7lNLg7Di8OoQQ==",
  "VXzClQPCoA==",
  "bHXDmcOa",
  "wox0dcKawrIk",
  "DsO3RjwsZ8KGFkR4wqRCwrLDq8K1LcKmwoASw6bCh8Oj5b2v5bmEwpcHw6bDvMK/55Wl5byx5b++B8K1wpERWMOH5b6o5peC5bqD5Y2C5o+j5LyX77+q5LyG55eF5Y+Y6YOL5byx5bmv562x5Yqx6IOg5pax77y06K6c6YGX5ayW5biR5Y6J55qH5YaJ6Ke25Yuv44KJw6DDkXPDiw==",
  "BB/CvD3CocOP",
  "woXDmsOTB8O2Tnwbwpc=",
  "bnfDqnNCw4NoR8KNw5PChcOg",
  "TUJkw5AR",
  "w73DqT/DmsKhw4XCqw==",
  "ecOjLRczw4haw6VP",
  "TVxkw5IgU2/DhzfDksKEw5I=",
  "WcKzw5LCrHdoFyjDij8Nw7jCkkhfwr5fbMKEwpxaw73Cn0XCrX5nCRHDq8KYYG0nbMKMZ8Oew69Lw5HDt8OwB3bCh23ClCAadGvDk2zDtWnDg8K0UhrCjxfClTE8AGtXOBHDrMO1CEdvWcKzaGwPWsOC",
  "fMOiIBMtw5N6w4dxw7FvCw==",
  "PcOEwrM+QcKAKi8=",
  "w7DDuRTDlw==",
  "TgPDk8KFKsOwNRbCp8Odw797CMOfwo9DasKnw77Dg3U0SHTCnlVJ",
  "woBQYMK4UA==",
  "QMK9RSAsasOd",
  "w4rDmsObF8OyU2Yawp9hwpbDpMOrw44FZcKfw7gWZQ==",
  "w6XDilXDuHkvwoVfwo3Duk/DhA==",
  "w4vCiBp/",
  "w4PDu2zCkMOIwqLCtRQyw5jCsRzDk8KHVcKbwoDCi8OGJcOWRMOVw5jDtUwXb8OSw7rCkAMCZkjDn8Opw7luJMKeVMOMEsKqwrQzEMKmwocMGMOVEMKPw6nCvELDtEzDvsKfwqhswpbDqcOHw6Ngw6F2L8Kzw4LDvcKFWj1T",
  "wrxqwqXCnxwQwoUedjdW",
  "NsOgJ0d8",
  "YMOCwp/DucKjwrrCvHcN",
  "QcKtVz85e8ORRAw=",
  "Ghg8wohUCT/CgA==",
  "P8K5EE0LHXXCsMOxAFVXEA==",
  "cioqbl4OI2QwwqNX",
  "SFzDuH3DqcO+TMOxw4TCrEzDlSElw5LCvxVxKUhAF2/DmkVIWGrChsKew4XCuTQjEAV2w4PDl8K2OcOCdMK/c8Oyw75Uw7DCnGxqb8KqwrAVw7RCOsOcw6XDvCQBwqQ+wqdhEl3DphIYw6wmwoEVGFV9GnZZw57DrC8yw40UdsKCamsJd2d+w7Mpw4TDkWQ0GMO5Encpwqo4w6DDsSY1D8OpMMO0wr9Jwq8vZEvCoXPDosOxeVQgASEew6/CmljDrcKIKhnCisO3EXQyFFQ+wq0jw4LCjcKlwoM/acOnwo/DrEVCcn/DpcKUDcKew4nCqEDDpMOiUFvCgnjDiUBMw55pw4UYIUg+w77DlUQKwpMFM8O5w7oxwq3CgcKBEyUTw5TChGx7OAQMZsKqwrkKa8O8w4Rnw5XDqMKOEgTDqD84E8KhwrbDsHYjwp1Hw6ItLcKVVV1Vw5TCjsO9ccKCw7h1QV/DlsK0woDClUwFwqfCpMKIw71MwqvDv3lMZwgow6TCuFvDgMKqHcK3w6Fuw4cvN8ODY8K8wrZUdMKCO8ONDcKtBA4KwprDhTR3wrTCuCLDj8OhBcOJZsOEJQ/Ci1J3wqkDMMKrHg8/w59HKltKw4omAiNFwozCvsK3a09ww73Dt2hUwo/CpcKAY8OVZcOPwr5nw5Yyw6XCjXQfeBDDlMOTwrRGwqnDk8OtGUjDgMKpF8OaMlDCjRd9woTDt8O7wqoUw4vCn8KbX8KGw6/DisK7SQ1nwrXCusKowqDCusKMw47DtcOKw7AyTigZw4PChFbDi8OhwobDnMOzL8OZw57CncORw7hkw7cPwp/CrjDDnsKiw7RAwrbCvVXDqFt2w5M0O8KXQm1Owrx0B23DuE/DlzrDicODwpvCtEJNw7kxw4QBwoQ0wqhlBn5ow78Aw5rDn8Ojw4BpwqgYwr7CrBxzfMOlLE1UQjvDsEDCswsFD1gqw5XDhGPDjFQwwo8pAjrDggvCjcKiCMOZwpHCr8Oiw6TCrxcrwqTCqEQ4wr/Cr8OLcEtSOkLCtMKYehPCr8K3w7PDgmQtH8Okw7E+w7oswoodw5MHwo4Ywq/DvlQ7wrxcPMO7w6szKAbCsMK8UMOoF1gEVDPDlsOYwoAdwoDCssKkFsK4wojDjDwQWCIIwpbDisOsZMKmw7DCuWbCm8OewqbDtx11wrXChMKtw6fDoCh6fMO7BETDu8Ozwp7Dm8Osw6DDqjdhw5QQw7guw4/Cu8Otw6haw5PDtMO1XsO/EMOTw6bDvMKfw7t1S8OweTwXwrpVw6UDNXXDj3TCkGLCqATDimnDjkhRwrPDpMKASRrDqMKhwo/DlyLCplE+wo5Bw7LCnMKDw7XDicOVOlFNMQ7DqVhVwoDDjMObORzCnA8rVD7CmcKew7jCk8KNbsK3w6rDisKbCMKjb8KZAhplwq7CjsO+w5cOw7TDqAPCuUfDuMOzBVUDXXbDh1nDjMKfw4jCn8K5CgAeYSceY2Rpw6LDqMOff8OCw4LDthHCicOIwobCnDzDtVfDtnnCoU8sCcO8b2PCkMO1wpfDog7CtsOQw7HDvcKLX2JMHkU3AMO2JMK9w7cJIVDDrBUyw5Y9C8OHWSsKwrYCw4tmw6UfCkfDg8OeCQA1w6XClsOhVxfDkcOyKRp1J8KkHGNLOEchLMKGezHDtUnDij4FfsKww5nCiRzDu8O5w4pIdmtsw4LCpAhZZD96dDc0WMK3JcO4LV3Cl0HCuHHDn8OVw6vDscOjw6pYD1N5wqM8w6oARsOdw5bDvMOZRjEXwp3CnwZjYsKMUmgueMO9wrzDl8OywpJiwp9Vw5PCtMOpcsOrPMKDwofClCB3EMOmNsKjP2V0w7YZVsKgw4LCncKoJcKkeDU2cMK+G8K+w6TCncKOQMKawoI6w4vCtnPClyPCrsKSwpNYQzzDi8O9RMKRBHzDkcKiJsOrWMOgL8OPLsOMccONw7zDhBVzwpTCucKFfR8Cwq8/w5pCPFFZw6wgb3vDjlrCvyUZRyNGworDjxA8VWTDokhtFMONw4LCucOHCg0Xw51kwpXDk8KZTQvCiWY0w6rDt8KYLWUdwrDClcOjw5nDh8Kew7APPUUPT8Ofw6nDrcKIw5Bpw5w9ZF3Cmgd7w7vDtl7DqhgXFz3CrzFgw4vCkxXDgcKYHCpPbsKfwrIfw7R6XCxaw45te8OuK8O+w4nCrMO9w5nDlF8uMDPDvsK/w7w4GsK9w4xTw4TDs8KkwpJSSmzDi8KKwppaLcK3MMO4w6TCgEQ2w4cICcOwwqM1YcKSOVHDinfCkcOtw5LDhm3CgcK3A30nw5IbU0w5dTXDs8KSJHYVw78Uw7IqKMOmQ1ohwogkDR9XDcOowrdbL8Kkwp52w6x6wrRxw74vBlDDlMOoaMOrEsK9ZcOzHMOTw5LCi2LCimJKGcO3AsOMw47DoMKdw43CocKLw4HCvn99wpHDqcKaDhx8wo5Jw7rCqMOqLhzDmcOffsK4w6oGWsOEw6Iuw5TCl8KpSMOWw4DDhMKzw7TCh8OdKQ03w4nCssOwwp7DgcK6wo1twpDDkMKYw6rCqsKywrpBw7fDqE4ALGrDgsKbwot+egpOwpjDhsK7woR4ZMKqSMK2AMO3wq4Lw6IHF8KbwpLDrMO7D8K3CMKGw5XDq8OKXx/Dtg19IEvDosOCwoY6PcKAw7Mpw6XCiHfCg2fCohnDv10Hw4Ycwq5mWkktw5rDvmN6KsOmW2REw6/Dl8O2DMKAwojDncKSfSw1wrDDmlhdw7hPW23CuVoWJQnCsFbCm8Odb8O9d09rDxLCscKHwohgw7zCn8K0DsKRcz3CsMKdwpodfjJxABEqw55uw7IpTsKGX2kaLGYVC8KxP8O+K1NhL0vCiwLCt3AAwq5mwowGVUXCl8KnQMOyw5rCicOKw4rDshXCqh/CsMOCTmA4NWxlw4PDnFdIw63CqFhJwozDmsK4WMKrKsOEc207wpvCicO0w63DpljCvQB7wpITa8KrDsOhJWfCkmXCjRYQw5jCicKTC8OOQcKGwrsUYkDCvyttw7/DhcKVc29zeGDDicKvwpF9Pn4CaMKBw7lrwpTCk8K1wopmM0hRw5nDpsKWw4NUw7/DmB/Cvnw2wptdwoBZcUTDuRTDkcOHWMKgw7lZAWY0McKyWsOSwoFSwqDCu8OiwrBNTSx7MsKPdcKCw4HCqErCnVXDuMKlwojDjcOIf39Kw6DCim3DuMOxw5nDt8KGwqfDuMOxISlYA8KJHjjDmcKxDgfDjsKxA3Vdw7UQwpDCjnBdwq/DgBLCtUhAI8OdwrUWFzTDqsK7w77Cgw==",
  "dScha00=",
  "w7tLIgDDhcO+",
  "LMKSaAEjwqAowpw=",
  "wrl7wrvClxQdwqgFeDFWw6FXwozCncOU",
  "w5zDu8KtNsKOGcKlwp3DjjXDoMKBwpkzwr9gwpR+wrXDuhTDtMOlwqU=",
  "wrQqNz3CoMOTM1XCp8OQNcO2wog=",
  "KmQreksJAGVp",
  "wpvDiFbDgsKiXEFr",
  "QsOeAl8Ow4FLw7g=",
  "GSohwqsL",
  "bw7Ds8Oi",
  "w7dAPwXDj8Op",
  "UHHCnhXCtQEgH2FFUmY=",
  "RF5uw5E=",
  "wqrDlC/DgxPCjsOqW1HDu1jCu2E=",
  "dxbDpsOrTMOGLcKAHkcqUMKrw4B4ZDM9wpfCiH5Nw4TDqBQLIUPDo1/DksKpCcO4w4ZxC8Oyw4fCo8K9NQ/CmcORwpxKw7jDoMOhOioRw7cNbWU=",
  "wppKd8KxR8KSwqDDpMKO",
  "HA4aw7YVwp4=",
  "R2XCkxLCsRwA",
  "5Y+j6YOZ5oil5YuT",
  "TcK7w5bDsWQ=",
  "OcOKwpM5RMKGNiw=",
  "w6jCscKswqsU",
  "wpxRwqfDhMKPBsO+DMO2HcO6aQ==",
  "Q0d4w4sMSXc=",
  "EB/CsTXCosOVZ8OTw6k=",
  "SSplRMKp",
  "ecONwoPDr8K0",
  "wqdzfcKJwrUuwrLCv3cIJgsF",
  "wptQbcKkRsOgw5vChsKmOBnDjMKqwofDiTxRHxzDr8KbKcK7w4zDqMOIwp57bAR+dTPCjHrDvWI7w704",
  "wr9uwr/CsgkbwqQ=",
  "6Yu25p6Q5YyZ6IKV6L2p5p2b776C6K2C6YSj5pau55uA5b6K",
  "w4xRwrTDkcKKOsOkQ8OyHcOxecKnw5DDi2TCu0I=",
  "w63CpcKswqsMacOawp8cw6XCnsKxB8Kiw4g=",
  "dcOjIAA4w7B6",
  "w6fCvcKVB8OKIQ==",
  "fMOTwrYmQsOHwo8tbkVSaA==",
  "TAfDoMOtWsKOcQ==",
  "QyNkTMKvQQ==",
  "HgPDgMKQL8OML1nCo8Odw7Rr",
  "eQ7DvcO0TQ==",
  "wpXDmcOXAcOub0wFwp5SwoPDucO8",
  "w5XChsK9w7kmRMOuHsOzwpTCnA==",
  "wpl3Z8K1wqAnwp4=",
  "MMOfwr0iTcO/wp4m",
  "WR8+wohBw4h4w63Dp8OCw7M=",
  "wp/Dn8Kswq0GR8OhGcOlw4fDimpCPcK1wo3DgMOqRgLChcOtLUzDj3YyDsOYwobDgsO2wpXDk2F8w4FcwrEVKGvDszA8X3RJd8KDw44neSTCiFvDrAfDjBnCpjkTMMOrw6zDshQ6w7ErwpjDrDHCqFTDghXCiMOgw6xEw7TDpOitvOitlOW8r+WHncKdw5TDplouw7dMZcKWwrTCkcOUw7MndMKEwoY1wqTDuBkVw6YcfWPCsX58w5QHd8ODw61nwrsow4Vmw7pNBB/Dg3sGUsKabmHDoSUpKh3DgMK1DsOQwpLDoU7DixDCs0fDnCkpNnZOaETCq8OMwrQ3wrxmQ8O/",
  "cRI5wohKw7RK",
  "w54dw7xtwq5nZ8K6w68lwq16w4BBZ07CtsO2wpnCi3kpwrhJ",
  "YcOJwrA1V8OHwp4ueUdBYkE=",
  "wotiY8KQwr0hwpLCr3oVLVccw69aJQ==",
  "wqA9KyDCjMOSJFU=",
  "FMOiFsKUOg1JGiEiLQ4aLSVQc2zDmsORcEojw6HDlyY3SUUDYcOnITxucATCgsK4GMOeCTZkwrU=",
  "w5IIw6Z5wrwzBMO6w6wtwq0=",
  "6YGx5oqvfsOlHcKcb8KMw6M=",
  "PAzDpsOnw7A=",
  "wp5kWsKY",
  "bMOcwpjDr8K+wpbCjW4ow7kYwo0=",
  "wpvDklTDisKz",
  "wqzDlHvDlF3CsMO9UVLDolrCvXEIwo4=",
  "wq/DhDLDhSnCssOhQ1HDtlg=",
  "wojDicOcFMOjVA==",
  "XmPCnx8=",
  "MnwuBQ==",
  "AQ/DkcKUJsOxFVfCvMOZ",
  "WEtnw5oAT1XDlhjDnMKTw4QkwrYoRStBcVjCmSjCs8KEwrRTwoN8G1pWwptXYl/CtMOQDcK4wrohwrl+w7nCv8OYVw==",
  "woLDuzLCisKtPcKXLyo=",
  "w5vChG8lwq7CnA==",
  "w4Maw61vw7A=",
  "RsK9Rjg=",
  "asOEwpjDsMK1woDCjVQ=",
  "w7IIw7x4wpE8O8Ohw4onwqByw5JZdwQ=",
  "wrlnwqnCjhA3wq0=",
  "wrrDjS/Dgx4=",
  "fg7Dt8OpSw==",
  "HCcqwrQewoU6w7DCuMK6HcKiw5Q=",
  "YMOLclEvwqI6woooJ8Kew4vClsO1cwo1w6tOAiLCl18mw7/CvMKZw7rCnsOcwqLCksOWFsOjacKhbDPDplRhworDv0vChMOqHBw+S8Kyw49Ew6/DhMKqwqAfwqvCjDjCmsONKVRGekZJw5TDpwDDtMOiwqHDmBfpmbXmjpblvJbluIXlvrflhqDCuzzCmU7DlAxEw7tMDhtED2tEw41yMsKRwpxeEV3DuxjCp3XCv8KgdMKtw4E1BQ7CkDXCgsK1wqEHwrTDs8Kdw7ImAU3Ci8OkwocyfsOzw67DsMOswqjDkcODXSnCqsO4CcOcwonDisOXJcKVURPDtDUrecKbZCVuSA==",
  "wpXDkU3DkMKz",
  "wrEwPTPCiA==",
  "w7HDuDjDmw==",
  "AB/Ctj/CoMOZ",
  "C8OuFMKUDhB2DSU=",
  "X3XCiQ==",
  "J3csAShZw5rCm8KqwpfDrQ==",
  "GXd5w6t3",
  "w4Ycw7t1",
  "w4VzY8KVw7s0w4HDtHEbLR8Dw7FcZA==",
  "wpDDnsOHFg==",
  "JsKlBksdPGk=",
  "w5cZw7hxwqQ=",
  "CcKTwoHDhcOywqArwrzCocK7Bg==",
  "WH9pwpc+ZsOH",
  "w7HCtsKCIcOaIcOj",
  "wqtuwr/CsgkbwqQ=",
  "EHgNcGTDscKFw4fCpg==",
  "DGUBdg==",
  "w6XCgsKxw6gpSsOzHsOXwpnCi2JVO8K5w4Q=",
  "EyM9",
  "fBgtwoFTw4JNw6zDqMOVw7JPb8K/w5k=",
  "w5/CiHI2wrXChhM=",
  "ZFNMwpcTSsO3",
  "w4HCvMKYHMOLKsO6wpjCumfDi8K6",
  "woLDmFc=",
  "esOJwoPDqsK0woDCi0gkw6kRwobCncKVNcOpC8K4",
  "RMOgwpJVWcOjwq/DssKqwoTDo1EX",
  "DGUBdm/DpsKNw4w=",
  "AB/CsjnCqsOZ",
  "QWPClQPClQgWBXQ=",
  "wq/DqTTDmcKpw5DCq8OCDw==",
  "QHvDkMOGPA/Dk8KUw6/CvzkSwqLCq8KRdBDDu8OEU8KHwoPDgiJuR8KXCxs9TxooE8KHw5PCl8OPw73DocOQBMK5WC7CsyEVHWfCm27CjnXDmH7Cs8K9w7nDq8Knw5/DucK7LsKTa8K9woPDh8ObwoVZUArCinRpwqtGw77DqC3DkcKhwrd1dlfDuzoXHF7Ct8K+w4Fkw6XDlcO4woTDrTN0PB/CplZmw5M9wppRw6rDtcOQwoXDigHCjSNwbsKc",
  "OMOow41rH2whdsO4XHtvDsK9SQ==",
  "LMOVw7UkQsO1wogxIQZYaR5CFXzDisOvN8Ovwp3CmMO4woglSMOfVMOgeUjDr8Obw6nDiMKCdmsIUVAjw4NDw5vClA==",
  "wprDkkHDgsK6ZlpqwojDmcKIdg==",
  "bGfDu0BPw6R/QsKKw4XChcOqwpQ=",
  "U3XChCXCvQIW",
  "w7fDnULDoQ==",
  "W8K2Wyk/QcOsZyc=",
  "Y8O4IBEkw7N9",
  "G8OOE8KZw63CtgJHCEvDoFRN",
  "Wltuw40aaGvDmRHDnsKUw5hr",
  "YsK1w4BzKHAvasKFDzBu",
  "wpxRwqM=",
  "woDDjcOcHsO2V1w6wpJLwpI=",
  "6Kyr5ZOvw7pt6L+v5YyA6IKl5bGN5a6q6IWi5oGZ55iI6K6H5aS56KOA5bCw56aQ",
  "DsK3RTgkZsOWCh19wqFBw6nDtsKrf8O2wp5Bwr/Cm8K4NWXDkiLCiA==",
  "w6TCoMKowqQF",
  "BMOvH8KSMhx2",
  "ZT82ZVQFPH8uwqZc",
  "OsKpDUs=",
  "w4fDuGfChsKa",
  "K8OED8Kbw63CqgU=",
  "w7DDnUjDo181wodfwqvDsU7Dj8O2EwrCtSAC",
  "CHnCngHCoRtTH3lBQijCgcOBw5krwpIXIAbDnWTCjsKXwqksNsKSfRzCo3xIRU8LwqjClUjCqSzCpsOdJMOEwrwdw6jDt8KpTsKY",
  "w4QIw6Z5wrIw",
  "wo/DsC/Cm8KtGsK6",
  "fMOsMAYUw7Bqw4l3w7Vs",
  "C8OoGcKQNSpmFj8iORg=",
  "KcKpAXYGK30=",
  "wpJIfMKmQQ==",
  "T0d9w6QHWnrDlFnDicKZw4d8wqxiVzdMOUTDkSvCpcKDw6cu",
  "w5jDhcKSEMO7XVoaw4YTwprDssO7w4lcQsKBw6UOY1nDhMO3ekXDs2zDncKEw4XCvljCoiDCisODdC3Dg8OiIcKybBvDk1Rmw57CuHBYGsKTehM4wp/Cj8KdwpvDu8Oow64cRMO4PcOBSnZkLloPEMOzwoIhVRx9w7rDrGTDqj3Dv8KSdMKww7vDl8KMAGvCiB86JzBcHcKyTsKswozDjcOEMcOfw7oXw6Eoa15Vw6dcwp/DrsK2bF4oKsKVwq7DhhTDjQRMw5XDqHxLKsOxUFLDpMK+wpnDkjPDhsKTP1oOeCbDh8OSwo3CqAbDhcK1dxjDnsOXFsOuwqbDvydqw6p/w4JLezUKw6tr5omF5YiY5pK857a6fHXCmB7Cj1wNbnVBwoooUMOPXcOfw7rDog4awpZ7wofDiSRFPg==",
  "SXtxwqsvTMOM",
  "HMOFDcKBw6nCoRd2H03DtlFMXcK4",
  "G3kAfQ==",
  "Oykqwq0awoA7wo7CicKtCcKi",
  "w5EMw7xUwqk4JQ==",
  "5oC45L6w5LiC5Z6B6LOD6K235b+35buk5omb5bG156uW5bmX",
  "SEZqw5EEXi7Dgx3DmcKFw5g=",
  "wrxqwqXClhwVwrwiYTtdwqo=",
  "w7BWJAM=",
  "GgAaw6M=",
  "wr89LDjCjMOY",
  "KsKtAV4=",
  "LMOpKgRhw6Niw4lww6M1TMKDw5/DnTzDrxkDw4vCi8KvwpfCkjjCnRZcdcOPcsO+w5x7TcOfwo9UWcOWT8KeO23DhsOowoR8w79awrBTwrHlv7fluY/pgYnlu63Ci8OFw5XCoRLCi2bClU0sw4PCqcKBbl7CjMODw6kOfMOrXMO2WVnDoMK8YHoLwrzClsKHw5B5JcKew70pw48ZL2TCkkVUw5xwwqDDqWkqw4PDl8O1w67CusKlwp3DrMOLw5PClMOuwr4HQwdMQcOQwrtPG8KtHsOHHQ/Cm2PDiwvCk3VRwpzDgsKPwobClMOjwo8Ew5kpB1LCvQLCtsOwHCDDqcO4KwXDmwnDmsKsYsKowrEWwoPClsO+DTpRw4bDiiTCgWQZHcKEWA7ChELDmg==",
  "GcOTD8KMw7HCmgN+HVrDqw==",
  "V3/CnB7Cpg==",
  "w7DDsRbCmMKzwq/CjcKYwpQqw7bCuMKfwoZ5w6MCSmPDmEgmw5HCgsKtPjQEW8K4CjLDn8Ktw7Y+wrzCq8KIwpTCkiQ=",
  "CsOmDsKSMQ==",
  "TT9+TsKXTBnDtDzDuw==",
  "awgkwoFX",
  "Di8gwrwQwrUsw4/CvMKnCsO6woHCoULDh8KHdMK/fcOpworCq8Kqd8OzdUPClQbDncKAURPDmBwDwps7w4XCscOvwoHDu8KBwr8=",
  "FATCsCLCvcOvbMOaw6jCgRjDqgE=",
  "wqzCpcKfDMOLK8OBw4bCik7DmsKtw5wAw6Adw5Yjw7LDhA==",
  "OMKjw4ZoVThuOMOmQHQ3A8KiAcKKJ8Oa",
  "wrQxPTzCh8OP",
  "w4DCisKqw4kERcOtC8O9wo8=",
  "wozDhcOBB8O4TlA=",
  "PsOQwqI+QsKdMSUx",
  "wq86SMOMw7l7wq7DsTo=",
  "XjNvWcKiehLDvy3DsBpJwoo=",
  "w6DDrhPDk8K3wq/CjMKO",
  "wrcqKj/CkcO/OFTCkg==",
  "AsO1CMKeKzR3Cj4iORg=",
  "w7jCtMK5wrUUQ8Oewp0dw7TChcK3EQ==",
  "woJbwrfDjMKZPMOkBA==",
  "wrXDkkzDl8KzW1oowq7DgcKfdg==",
  "wpRXwrLCi8KVPMOuBsOrM8OuaMKAwoLCnSDDthFmfsOlwrwgEcKGw4/DpcOLfcOjEsOLOR8HMcOTcGbDtgnCiw==",
  "f33Duks=",
  "wrjDiS/DkgHCuMOr",
  "NyLClH3Ci8O9TMOm",
  "w6XCrsK/wqYBQ8OPwp4Kw7bClsK9",
  "CMKCwobDm8O8wq87wpw=",
  "wpvDpzPCn8K6B8K3GznDgsO5UcOHwpbDvw==",
  "w4fDpmfChMKrw7TDtAIYw4HDuw8=",
  "HxnDl8KQN8O2NFg=",
  "QcOqHsOEZA==",
  "woNFbMKnUA==",
  "GGYUaFg=",
  "A8OmFMKcOBJnFiMOPw5M",
  "woBQa8K9W8K9wp3Dj8K7",
  "O3fDpkJfw4V/XcOS",
  "w6rDllTDsEgPwrBgwoI=",
  "bw7Ds8OiXcKdYcOEKEcwWA==",
  "w6bCssKYDMOPKsOCw5rCiXfDlQ==",
  "CsKXwpvDocOnwq4z",
  "b3Vxwrcpeg==",
  "w6vDkUnDoVU1wp0=",
  "Y8OZwqEOWsOxwpY=",
  "w5HCjm82wonCnRDCgA==",
  "RnXCgB3CtQwW",
  "Q2TDhMOTZQ==",
  "w653KG7Dn8KTM1nCgcKBYMOow4I=",
  "w4Ibw714",
  "wprDmEzDhMKiXQ==",
  "w5NawqXDi8KONMOhFsOQGcOleA==",
  "V8O5woE=",
  "IsOLwoMhX8KMMw==",
  "BhnCvDzCoMOObMOY",
  "QDZrSMKyXQ4=",
  "WEtnw5oAT2vDkT3Dk8KEw5Jh",
  "O3o0ch9NXnsvw6oaw6lOa8OxIcKxw71xw6bDh35Iw5V+LVdnTcKTwqjChVAgQsKnDErCpMKxwrLCm2UUHTrDhsKPw7XDkDHDiTJVwpJPaAw=",
  "G8KaGwvDjQ==",
  "DsKawobDhMO3wrk7woE=",
  "STRlRsKYQRbDoQvDvApD",
  "w5Aew6TChcODdcK2TMOgFcOrMsOi",
  "VMKdEgbDhsKz6IW45YuR5b2G5bieGmPDqsK3wrISw4QgXsKZfxnCo8Onw73CsVzDvMKkw6t3woh5w7ocYcOWw7/DmcOrKCHDpl7Dn8OIwp5Hc8Khw6UHCuW9nuW6ueW9meWGtMK5wrA1CcKrwonDgMKFHC3CiQVlw7w+UsKew4XDkMOmwqXCvWIHYB/CmMKJw6jDv8O7cTfCq8KkwoIpUEkNd0tow6TDn8OQZMOdw7DCvcKnGcKQHsK5esKRChfDlsOZw6vCuMOjeMOTTDTDrx4xwofDkMO8b8KCw7ZewoDDoynDhsKRK8Ouw6LCpHkcw6RVO8ORw6o=",
  "GSgtwrQawp0=",
  "w4LCjMKrw7kARcO0",
  "AMKHERPDh8O/w6s=",
  "wrM0PSLClw==",
  "SEZiw5MHSWvDmw==",
  "w5rChGwGwrvCmgfChMKowqE=",
  "DcKcEAjDmsOAw7cKDCpdOg==",
  "wozDsCjCu8K2GMKm",
  "wrc1OjXCh8OnNFzClsOML8Klw5tRw4nCoSRObWdXwpEJw7MRwoTCtsOqFhU=",
  "T0tow40aS3o=",
  "w75owqPCuBIQwr8UYyoFw74=",
  "w5bCkXEuwrPClwvCkcKqwrslwpnCtFIHw6E=",
  "5p+95Yqf5Zqs6KCO56Wi5qy35L+155WL5b695bip5p6Q5Yqt",
  "D8KVwoLChsOnwr0=",
  "AnfDnMOaf1rClsKU",
  "QxLCvRPCq8OSf8OTw7/CllHCtQ==",
  "OMKYdQU=",
  "EX8XcE7DtcKZ",
  "aMOAwpTDrsKl",
  "csKuBx9dcOWIlumYmuWSmeemkxs=",
  "NcKDwpXDtcKnw4w=",
  "LsKFdBclwqI+wrA2e8Obw4M=",
  "w6DDsRTDmsKg",
  "CColwqAdwo8sw4jCj8K1DcKi",
  "wqbCoMKswq5CZsKJw54cw7LCk8KtBA==",
  "ZMOFwqUi",
  "w54Aw7tpwrIvMQ==",
  "w6fDvRLDgMKgwrQ=",
  "wq/CpMKkwrcEYsOewoJF",
  "UXHDmsOb",
  "c8OaNlxhwowewr4SVMKcw7bCp8OCVm4FwrxsMxjDkl9iwrHDvg==",
  "XsK2w4HDo3M=",
  "T3XDgMOcdA==",
  "K8ODwqYrUMKJ",
  "LcKkEFwZK3Q=",
  "PcOQwrMl",
  "wrrDjyPDnA/Crg==",
  "YcKqw417D0MtdMKnEyc2QMKmB8OCKsKMb3DDvMObPC1Sw6B8w4V5VQ==",
  "NsKDbwE/w7R0w5Y/e8OSw4vCk8Orbwkrw7NRHyTDkRkowrPCssKHwrHCj8KWwr/DlMKERcKrbMKuMTPDsho0w5fDvlHDjw==",
  "DMOEDsKZ",
  "YHQnEDh/wpLDjcO9w4LCrgg+fWfCu8KwaMKhw4DCvHrDqkkDScOf",
  "w6QkwrvDhV1e",
  "55mk5by35oqC5YiE",
  "w7rCpMKowo4ZdcOW",
  "w6bCssKYDMOPKsOdw4HCj2rDjsKs",
  "PMOQwqU/T8K8PSczw7XChcOjSw==",
  "Kmo9AT1Iw5vCksK+wpPDuF0=",
  "w4fDvWTChcK7w6jDrBw+",
  "UcOdwoDDmMOnwqIxwoHDtw==",
  "wqMtPSLCmsOvMlzCksOcKMO3wo4=",
  "wrDns7fln4fCkw==",
  "VnR5wrsyTMOM",
  "w7PDvRTDv8KxwqPChA==",
  "wpXDgCfDlA==",
  "w4TClUwjwqo=",
  "QsK5Rz8o",
  "G8OEFMKB",
  "bcOIwoHDsMKwwovCiVQlw78bwoHCjcKKZw==",
  "wqPDq8O8woYDMMOewoMKw7jCg8O4DMK3wpjCnsOEWUw7QcKhVVDCp8KhwrZRPWDCuHjCrnnDrHsxdnFMwpMywrg=",
  "FHcQZ0k=",
  "enfDqntCw5J3",
  "P8KHax0lwq06wo0ydcOSwonCmMOzdUk=",
  "VmXChAXCuwEA",
  "BgPDsMKFMcO2NVE=",
  "XsK3Vi0hWsOMRRl9wqpR",
  "w7JRPx3Dk8K3CkLClMKlwrpWwodsw78qKsOWw7PDosOhcFDCnMOWwrk9TcKgbBhlwpbCjVbCkcO4w6V1IQ==",
  "L8K8BVMbLXHCqMO9DE8XCGMXwow=",
  "BgMmwpJOfkDDsVTDrcKyw75Pw5ARZH5jGXLDkWnDu8OKw60=",
  "DMOQwrQlWcKdMTE3w6LCmMOjVw==",
  "fA3DvsO0TQ==",
  "aMOlwphlTsOqwoDDosKCwp/DtVYBw7BNPg==",
  "bXPDrEFT",
  "wp3DiyEDwrTDlA/Cl8Kxwrs5wpbCsUILw7pGwonCtGnCgnLDm8KSKl7Dp2ItwoPDs8KuwptzwoVXwpzDi8O8bcK0wo3Dvw==",
  "wqnCjhLCk8KJ",
  "RXHDgMOrdVzClg==",
  "wqDDnFvDu1cmwo9YwprDsFPDlQ==",
  "fg4ywoBxw5NNw7DDj8OIw7lD",
  "w7rCpMKywqM=",
  "JTUrw4w5wrZ7Pn4=",
  "wrzDhD7DuB7CuMOi",
  "aXPDrFVTw4NzSsOSwo7Dn8Kvw48=",
  "J2k7EiU=",
  "Z8Kvw4ZyD2ordg==",
  "wp7CjxBsCg==",
  "VnRzwrs4S8O+U8OA",
  "wrY8KDzCgsOFNl7Ck8ONM8OxwphKwoo=",
  "NXA9AzRow5w=",
  "w4fDmU7DsHYmwpdZwojDsF/DgsOqHw8=",
  "MRPDsQ==",
  "EMOIDsKZw6fCqg8=",
  "bMOewoPDs8KjwrHCh14k",
  "w6hAOwHDgcOuQA==",
  "aB0pwoU=",
  "wpLDjcOeBsOy",
  "cX3DuQ==",
  "w5nCrsKwwq4OaQ==",
  "XE5QwqJa",
  "PcKJJsOdwqXDoSsyUg==",
  "NcOfwoHDvcK/w4zohILlipLlvbjlu5hUw5TDhsKPJMOkFsK1JsO6w6ZJNsKULMK+LsK1R8OVwqXDj1PDjMKzeRLDrMK6w6/ClBhVW8OlHWfDsUlpSSY/5b2G5bqM5b2A5YSDw77ChzdZw5B4HsOkd8Kpw40ZwqsBwoM8Ig/DvDx1UMOWF2B/wr3CqcKHG15Kw4bCrMKaIV8OUxo+WcKEUGM5TzPDqsOCwpbCs1bDqsKyw6rDmMKzwrcYfkVYdB89GsOvwoE6dcKzEcOYEi3CmcONA1law6XClMKDw5LDs8OiMS3CvjPCrcOPw7TCtCYyXRonwqM=",
  "w43CjMKmw6wJeMO0BcOkwpvCj2I=",
  "WcK7w4rDr2BqBh7DgB4aw7nCog==",
  "WH9pwoojbsOP",
  "O8K/EE1f",
  "ccKKwrMoWsKKOz9o",
  "w5nDvw3DjcKtw4vCoMOYQVTCr8K5KiLCmw==",
  "HX8XdEDDs8KDw4HClyjCvHnDhw==",
  "wovChWg0w7rClwbChMKwwqd2wpTCs0Udw6YZwonCvnrCgCjCksKIcA7lvrnluJfmmafnp5HCqsKhwocyw5oFwovDg8OpOcK+wo7DsCZ7DzjCi8K7WMKWw4nCrjvCtgQ9woPDqsOGw4s7TMKaNsKe5b2i5biE5pSg6YW3w5B6FyrDrMOCwq0jeWtgw5LClBjDrMKTw48Swp3Dk8KYZFvDgA7Co21ww4jCjlDCo8OOw4DCjh8/SXhOLFUEVcOSwp05JAbCo8K5w4jDrHhkwqPCgCHDhhtdw77CtQF7wpfDtFjCpcO1J8Kaw4TDp2/DhcKuw44CwrXCi8KbFcKjO8Ovw5RFDAXDngV6wpXCjRADB8OzwotOYXMlC8KHwqx4w7w1Dxgnw7zDl0/CvglDwr0JWVzCocKQwoPCo8K4bX92Z8O3GsOzw6bCgA==",
  "5p2o5YuQ5Zq96KO756WF5q+e5L2255ae5b605bq35p2h5Yik",
  "VMK0w4DDp3lOFQ==",
  "w6HDl17DrBp5w4RJwqfDowXDjMOmDwLDtDdYUAjDiMO7wrHDlcOdZ0vCpMOLwoYxYBDDm8KJX3/DoW3Cg8OIScKvJxzCtsKawo9vw7wdwovDmMOvwpsbwqnCr1hIBMKaYcOnZkXDl2gqwr1Dw73ChMORw4NILgRVwq0RRQ1eScO0NWIjwpfCg8OJU8KHDsO5LcOJw5LCi1XCrcKdXMK2wrnCsMKOwoVXG8KvwokLOWFPwqvDjcKxw7fDuVXDs8KKA8O7w5UxVClEClAQJBlmwrLDuBk=",
  "wqbDsnHDtw==",
  "w6HDuSnDm8K5w7HCq8OdV0PCqcK3LA==",
  "fH7Du0BC",
  "YMOdwqUiXMK5wpIhc0oYb0ZfAnzDisOiNsOnwo7ClcO+",
  "w4bCssKCDcOiJcO9w4HCr33DmMK6w4odw7Et",
  "KMK+GlIxJnHCrsOXDEVd",
  "w7PDlFvDrFgmwodGwpzDtF/DhA==",
  "GcKbwoLDjQ==",
  "cAgpwp1BwoEDwq3DqMOGw7NLasKiwp9EQ28Kw5DCmzfCqg4fVMKPdxfChsObwobDpyfDuygHwoZhf3g7UwfCksO6w6ZvwrbCg3cdw7HCpRgVw6MVbMOqw43DvsOPwoLDhcORw6ZAG8O/AcKjGF5Pw69faMOJPy0=",
  "55mJ5b6N5aSE6LWp",
  "XHXCkRXCsR0A",
  "6K+D5YWY6I2H5Y6n5b+t5bi6",
  "bMOzwo5PSsOCwovDpcK9wpfDoUc=",
  "GMKPEBTDjQ==",
  "56Os6K235Yme55WT5ZKjfg==",
  "HXMHdljDt8KU",
  "ImQwBDB1w7zCicKtwobDqks=",
  "GsKWbxQAwq8owo0df8OIw4XCmsOlfg==",
  "WsK5RiQ=",
  "ZcODwpLDvcK9wqHCnFUzw6wTwo0=",
  "w5HDtXrCmsKN",
  "asODwp3Ds8Kj",
  "cXfDsFVCw58=",
  "woLDknHDl8KkXEBi",
  "ZcK1w51/Elo7fsKgBSY=",
  "YCIgb1A7DGc2wrlKw6RZM8KpbMOwwrpow7rCgiBIw4E/dwIlXcOSw6fDgkUNEsOZSFjCqMO4w6XDhzBXFkc=",
  "YVPDpcO7w6g6woXCoMOUPjQvwonCpmHCgmLCnsKbw7VXw68ZOwjDnUrCgsOQwrpzw6TDh8OMK8Oxwr7Cnl4uwr1XP8K0wo/ClkjCrx7CuRBnw65XAMKQJ8KdI0Vkw7ttw6xuwp7CuFB8wp7DsjfDjH3DpQbCjEExw51lfMKewo1+w7w2En1D",
  "w6jCscKswqIDdMO4wpkRw7vClQ==",
  "5YuA55eV5ZGv56aXwpI=",
  "HcOMH8KIw6zCgxV0GkzDqgUPRsO7axkQw5rCqcOGwoMFOGQYcH9awq4=",
  "w63CoMKywqMMfsO3wp4fw77Cnw==",
  "woDDnE7DlsKz",
  "w6DDtzPDgsK3wq/Ch8Ka",
  "VsK9Rjg/ZsOB",
  "w7jDtwPDl8KpwpXCncKSwokEw6LCuQ==",
  "UMK3UTVtN8KYTgJqw6NCw6XCrsO+YcKyw5JXwqLDmcK7OnTDj2vDksOcw60xa8KzTsKKwpNdQsKIw4TCicKdw5wdw7zChx7CiCfCrmlIU21yKUwOTMOqIRYRwo5Twp/DpcK5wowjw4vDr03Djh0SwplTXmxwQy7DpcOeUsOSw4MMw7krwoh/HMKvDDbDkFPDl8K6B8K9wowSw7nDqcOaw6g7XcOYwqzCg1PCiSgOJH0jwrY8SGp7I8KGRDDDmQ4LKsOoMcKkE8KEwpVvemXDnsO7w7zDmGvCvBDCuHfCpsOpwodAwq02w7wVwrgnTsOSwrc0wpPDm8OZcGtDVld4w7NaIxMqeUDCtMKHZWrDryRIwrQnEV0tLT/DlgdXw7jCtsO3fcOifn5pwr0ddnLDmMKRw53CkMOBwoHCr0TCtnrDvsO2w5YBDCvDuknDosOqUQrCvsKnVQt5bcOcHcOnT17CtcKHcBtmw6YOfsOVeRLCsMKqwrrDpWbDi8O4JMKrP0PClQ3Cq8KdR8OYw7jCosOQV8ObwrXCsgYGPMOvbDE5dcObw54RNmUSaClfw4ZPEDYlJmRew6k7dnrCh1thw5daBmfCo35ed8K/VVfDjB0dYcOLI8K6F8OCVMOXccKxXQ4FwpBWwq/Dq8OywqoUfcK6w6YZFhDDh03CixE8WXXDosKycMOGwqHCncOPwq7Co8K7ZFwvHxNBIjZtbRfCpcOwOS7CtwATworCisOawqTCvsOXw7hew7M/wq/CrMK8w6McwqfCiMOralBya8OGw6DDtcOZworDvcKsGsK+wrJ7wrvDn8OKw5jDp1fCmQnDuMKrw5vCk8OdeGfCqsOtw6XCvQDCqsKzw5NuOUHDiEDCmMKWwrU8w7fDnRMEw683w5LDm8OcNj0ibkx/w7fDq2nCoMOOYRfCvcK/Jw/DpcOmYhlyfMORwpLChX1jw5hx",
  "wr7CusKYGMObMMKuw4HCl27DnsOiwpsNw7wsw5w8w7zDjjLDtsKYwrdkXsO6wocXw4XDpGMFw6MyPMOtw4sSw7BKRG7DsMOpE8OuHcOSw7XDgzVZbXTDtVvCgjE=",
  "wqQxPDXCjMOnNFzClsOML8Klw5tUw43CumVObWdXwpEpw7MRwoTCtsOqESXCucOuecKOCsKrUsOBw4jDgQU8BBhnw7Y=",
  "5YiJ55av5ZCF56SZw5I=",
  "HsKGwp3DgcO9wqw3wonCsA==",
  "wrjDjifDnA/Cs8O7RA==",
  "wpnCmxlrFncXUcKgWsKhdsKZ",
  "CcOUGMKfw7HCixN0HlzDrVda",
  "JsK4AU8BdD/Ds8OwAk9VA3sNw4zDvlzCkl4DYMKDwqzDiH7DgS5aUBA=",
  "fcODwqLDqMKjwpvChl0=",
  "GcKXwpzDnA==",
  "wodvwq7CjRQdwqw4dWw=",
  "w5sMw7x1wrI5",
  "w63CoMKywqoMe8OOwqIRw63ClA==",
  "w6fDvRTDv8KxwqPChA==",
  "wpHCl2gmw6c=",
  "C8KCBwbDmg==",
  "G8KbABPDhMOo",
  "AsK/w5zDsmhzFj7CmA==",
  "VH9k",
  "Q8KtUD40WsOdRg5/wrlbw74=",
  "w6hEJQnDj8Og",
  "WMK3w4bDp2VaECHDhAMNwqHDt0pbwrwdd8OAwpVew7vCoUrCo2l2CVnDmg==",
  "I8OmDsKUFRhhDQsmKh5Pbyw=",
  "N3A7EihIw4rCkcKpwpHDq1d8",
  "fRE0wpk=",
  "C3MUaEDDpMKF",
  "w7rDuQ3Dkw==",
  "GncHbETDgsKYw5nCuyzCuGPDmsOUVjzCs2XDhg==",
  "VMOdwqEiYsO1wog2WkFBbltOEg==",
  "EyJjXcO7ShvDsjvDoFMEwpV1wqXDj8Kgwq/Cj3N4w58ww5ZSFgkpw6TDksOsw5LDh8O0w7DDpsKZJcOhwqLCigDCj3BJwqLDkGBOd0pww5UF5rGe5Yej5b2E5b+NwqcLGnjCr8KC6LW05Y+0Y2ZTN8OMw6sKMgHCu8OmKgAOw6QkwpPDhMOxwqHCkVfDtsO/RsOYIcKKwowlenAfZMK1w5jDjhbDqRNqZHwjUsKSSwQhwpTCpsKBwrxOMMOYM2/CpmgkNiM7wrY/YlpNIMOwCcOswpzCjMKySsKdw5XDvC1owp7DjcOLw6oPRErCs8OEwpFdwp3DucODH8OxAmR+wrPCmws6w5kUF8OVw4pewovDlQsYw7hxwrpre0zCiX18w7RTUcKlw5dUwpBXb0bDm8KBc3AUAGxnwqMrwpjDsx7Cn0Llvrvlv4/DrcKuwpTCv8OnTueUo+aIqOWTncKHw4snU8Obwr9NwrjDk13Dhj3Cg8OhwpzDnFHCh8KsNGjCj3Y5ViQLwpnDiBMPw7XChhnCvw50w5bCpcODw4gEI8KHw7TDrMK+eMOLw7dkL2XDusKTNGHDhjkHBMK3Q8OGIEHDmxPClMOjO1PCicOrwqTDgMO7UcKMAUAbwoRKS8OAYsKEw6JtWsKow652w5HCqjMbP8O5eMKiw5rCtFEdwpgPwpjDnxwBw4TDtcOIAzPDhjlWOcK4ScK+R1Atw45Pw6zClcKmcsOnwqTDqMK2VsKfwrd5VsKxw5LDgXhWwqnDvcKmw47CsRPDkgzCm8Kuw4FfNDfCq2DCgEIQw7TCoiYB5b2u5b6Qwq/DqFTDnVbDkuWtu+eivkANGiPCvcKEw5jCpUZcw6ALfDZDw5bClz3CqcO0Xx7ClcOdwokzwq7Dg8O2w53Dng3CvhUlEsKywp4hw6ZCDgVPfMK8w47DomQbwpVoNcKWw5vCsRs+R3rCksKLw5bDlwR1bCYnwooVwrLDuMOcw4rDpsKNwoQ5NzfDlVvCsknDuh9zYMO5Y8OXw7LDolTCgU7CqsO5w4dWwqHDgSnDlEIbVmLCsCDCgDtGw53CusORIFcfXUFSd1F3w7QdBhbCliQgw59UEMOFwpc9b8OTw5/DkzjCvcOKw77DrFl5wqfCsxzDpg4VwrDDhsKVB8O7SnR/YUE0ImsvFmFmwq0+55SM5a686YO756+y5Z6C5Z2Sw4nDhw4eVcKewrDDicKtw7Fvw53CkMO6w4Jhw6DDhcK6wpZRRMKTHMOnB8OYMsOTbz7CvMKnwplsdMONIcKzLMKpwqxXwpUuw4/CkcOET8KqY0YIEj4+w4DDqWtAw6vCgsKTT3nDsy4Hwrs3wp4qwrgUw6LDjsK6LFPDocOIw5sfJcOWw5AiE3Mvw7XDncKaccKRU3DCo8KAWiPpg4PnrZLmo7nlvY3plKTorpfDqcKWwpUUwpgPw6Yrwqo9U0YbwpbDt8OBfsO5WcKrw6DDmMKzUQ==",
  "wpRfwrDDhA==",
  "wqTDrMOxw6pAUsO+wrYxw5nDkcKINsKWwrfCosO1C2IaOMOoDQ/Do8Oiwpw4AErClDLCm0XDj3IpZnpTwpMaw69wexHDpAxswqstw4/DusOqaMO0w7kNw5DCsMKaw5N7LQTClsKJw5zCqwwFd8KFIgImNUtjQjzCiHbDhcKIw7FoYyBqQzZ6EcOSCjpEXcO6Q8OUGnfDqcOnCMO0wpsXw4fChB/Dp23CsH/DncKzw5IyHcKSEMOQworDvXLCuGQZDibDuy00NFJkBA5XwoPDrQzCkinCiMOBLsOWwqFMwprDv8OFWsOyB8KawoTDhg7DnQ3DvcKaw77DhCdzC8O+QMKZw6YYSn3CrRzCtsKlw7fDv3dVw6/CvC9wdcK7w67Chi/DnMKEWsKrHQrCrwfCosKrwpHCtGt1cQrDrCrDu8ODw484w6nCusKgJnrCp8KqA2gmw4HDkwDCtMKPEn5PUgpXw6rDpFbDkcKXwoXCh8KPwqZNExgEw6VowoNBwpjDmWDCgsOFw7HCsMKuwrxAwo1ue8OGVzVrwpoKTcOBwqlqw6ASFsOpw4YrwrTDsiAdw60KSlfCtMO9fSrDgmjDm8KBTcO0wqdQL19mw7nCsS/Dk3phaDpsw73ChsOfwrfClsO6wpUXw7EVw79zwqHCh0YfwrvCtFPDh8OHwoZHP1bDh8KHw4PCjzUmwoB+w50LwqjCmcKrDkTCtAzDosO8w4vCp8K+w5LCrDLDoykbH8OSRmXChzvDjyTDq8OOKknCnUtIwrQ8BHbDrTPCtXUGO8OiKSo7wo3DtyF6wqTCq2HDqsOsw486wqbDnsOZDDjDoy3DkT3DosOCYsO/w5jCrcOyMmpKwplWYVnDqTc4wojDnAzCoMOFAg==",
  "ZC4oZV4E",
  "bh0xwphX",
  "woTCgR94A3cGUsK3WMKyfA==",
  "SEJuw54R",
  "wrVqwrs=",
  "MQjDpA==",
  "Wy9nTg==",
  "wpxbwqrDgsKXPQ==",
  "wphzfcKYwrsv",
  "B8KAIQvDgcOuw7k=",
  "DsOAEcKYw60=",
  "KiJkaVMBHHhqw6hUwr1TMsK+bsOyw6xsw7/CkypKw4Q/Yko+HsOQw6bDhwJmEcOvSU7CtcO/w7bDmApFQWrCm8KWw67CkXTDkCUbw4JDd1UW",
  "WMKow5bDrXNMFj7DlhEZw7k=",
  "UcKwUC8m",
  "6Zav6K6GwrI9",
  "eMO5NwIywrohwodnw7FmA8KPw5DDnXvCrwQaw5XDjMK/w4DCkX7CikZWNsOYM8KiwpI8QcOJwplVW8OQUMKbZXrDkcKgw4NhwqAIwrEKw6rDsw==",
  "MsKYeBAgwp0vwpYpe8Obw4M=",
  "V8OADcKEwqfCrkQ3F1DDvlFGBMO5eFoDw4Q=",
  "6ZaD6K+KcU3CnMOvV03Dn8O6",
  "w5UGw6Rywq8=",
  "LMKSax0twq0+",
  "Fw8Aw6cIwrthJ28=",
  "wrPDiDnDhQXCr8O2",
  "5oK15Lyu5LuQ5Zya6LC16K2i5byj5bm75oqG5bOz56u65biK",
  "aww4wohW",
  "w4x/d8OJw6k=",
  "wofDkTFyw6rDhA==",
  "wq1lwq/CnhsXwqcUdQ==",
  "axI8wo5Zw5lNw7A=",
  "ci80Zl4ZDmUzwrhWwrAaLcOu",
  "wo7CgsK1w6RKXcKyRcO1wpXChWpDJsKowo8=",
  "aMKiw4F5H3A=",
  "dMOsLR8gw6t7w4dtw51pHcKF",
  "5oOQ55uC5p2J5Ym45ZiX5ou46K+x5aak5Lun5L6r55WR55mD5pqJ6Z6X5Lic5LiQ6ISB5bu45p+b5Yq45Zuk77+p5bSp6KGt6ZmG5Yq85L2v55SZ6YGd5Ymt5Yit6ICL44C25aeE5py05oOn5baE6KSa6Zir5bKt56WE776P6KyT5oCg5bK76Ky355iK5byN44CLwrYgY1zDn3DlprnmnbTmgqjku5jmm4PmnojlibTlm6jnr5XnkILlkKXvvafnnrbliqHovo3mn6rmt5jmgbDvvbLoranlkKzmgqDnm5bnrJfnkILlkqflrr3msKflu7jliKfjgYQ=",
  "wqDDjcOGFsObXVodwrpSwpTDs8O9w5MUVQ==",
  "w5MHw6tywrk4",
  "w4LCkmQwwpTClQfCgA==",
  "GikgwqA=",
  "bAfDpsOaS8KIcMOGGFMwWA==",
  "aMKow4x/B0s6d8K0ATNu",
  "FMOOHsKMw6TCiwJ3CV7Dvl0=",
  "X0tzw4sgVGDDgRHDk8KU",
  "BsOrH8KDLQ==",
  "AsKcworDmsOhwqQs",
  "GnoLd0Q=",
  "KGQzBQ==",
  "T3HDh8OMfVbClg==",
  "R3XCggfCsR0QGWVVQnvDl8OLw5AiwoJP",
  "wp3DvDg=",
  "wp7ClMKsw7kNecOlBsO3wo7CjWMbPMKuw5XDlg==",
  "VsK5QS0=",
  "TsKuw5bDhmBvPjjDrhUH",
  "bcOFwofCssK3wp7CjUJvw6gZworCkMORIMOkGsO4K8K1w6ZBMMKUMsKwPsK6VMOJwrrCninCj8K/ZR/CpcKsw7bCrg9EXMKrUUvCtk5mXnRxE8KKLBnCuMOceWjCkH4Cw7QywrLDmxrCqhHDlT4oGcOsO35bw4tHYC7Ds8Kowp4GSU7ClcK0wps7dEtVETx3wo8AemQ=",
  "D8KLFjPDgcOgw7c=",
  "DMKeworDmsOn",
  "d2HDsVw=",
  "QiN5WMK6ThI=",
  "EAPDh8KIY8Khe1LCuMOKwr1jCcKXw4ReLMOuw6zDinY2BW3Cn0QewrJtwrJzZVDDuDPCsGfCgTDDlU8SVjIAAMOiezPCkMKJw5jCtklnwqIEw5IuJXnDq8KiwoDDlMKvQnYoF8O0woXDlBccw6NAPMKcwo/CvQ1wWcKJw6DCr8OQRMO5w7Jewp/CqWx/c8Onw5DCkcOSw6vDr8KJDEzCuVhlw4cDwrMCw64+w5vCl8O/w4EUwo7DpEZzw4haw73DmCbDjcOIwonCkcKPEC3Cjw==",
  "XMK2w4HDsHU=",
  "fBkuwplAw5RV",
  "w6PDqTjDoMK0w4fCow==",
  "wpHDmFbDt8K/WEs=",
  "bMKuw5xqBGo3",
  "Mmou",
  "6K+Q5ZCjwrI96LyE5Y6y6IK15bKT5a236Iaw5oGr55qT6Kyf5aSt6KK55bGh56Wa",
  "P8KTfzQ6wqs1wo0Xc8OPw5LCl8Ouf1U=",
  "UHXDmsObc1w=",
  "e8OkwoxMWcOswos=",
  "NWAqKSV+w4I=",
  "AhTCoRnCsMOZZA==",
  "TSgoa0wTUiwhwqNdwrwRFMKuZcOIwqV1w7LCgmhl",
  "fMOoLRU1w6g=",
  "PcK9wrzDvA==",
  "w6PDuD7DgMKuw4XCp8OXSw==",
  "ccOjKh8kw5Rnw5xvw7U=",
  "worCgRhgTxpSWcKsT8O7b8KCDwBzw7jDmkDCsAlUw53ComcVw67DlANBEsK+w6BQY11pw6AHY8K6JxzDsD/DmFNRw7bDugIsUMOkw7hXUExuwojClCbDt8KvYsKKFChADsKABEPDozLCpgsHw60Iw45PwpV0wqfDknRLwo/CqXoAQcKMEUjCi3LDmMOZY8KXZ0TCtsOLDsONwq01G8ORwptjKMK9w6J1w7Y5MVthw65wEiLDrcOQL8OtRk3CiMKIw5vCjVzDuEF9wpbClHxAKGTDgsK6w7xqC2MRJlDCosKxwoFMwr3DmXjDvcKbQ2rDsD1mfxPCrsO7VyPDkmcfMMOIDRgfKjlWTANXw4zDksOPw6UTSMKaF0DCgwHDmFoPw7LDg8Omw5rDtsOkwpzDgsKdBsKUdTLDvsOvUMKQwqrDhHJ5w6rCocOIGcOzw6xqVMOsw6rDojJswrzDi29zYxpRe8KHw4bDtsKwTMOuM3nDmlIpeMKjGsKgw5ETw4YewqPCrE1jIh9ZKwXDv8KCwpnCssK7w6HCqsKycm0qw6AKw73CrcK4BQ0cwrXClzQ6HXrDnMOTD2lCw53Dp8ODwr7Cikt+wqTDjV5mw7LDusO5DMOWw7bDpMKkXRHClMKgW0gtwpN/w6HClsKTfAjCrnQpY8OJw5ElwpPCtywvdEBow7FDwrVvw7vCnlVZRMKbwrrCkhDDl8OHAMKYw5TCq2zDpcK1F8OAAsKlcG9Ow5fDlMOOw44cczt5w6odw4QgIhHDqibCrcKWwqZcDsOAwqwqYR1JIcKRwp8IRyt6wpDDiCk3MlTDmsOXdcO+RcK7wqdswq8gwrZ9L8Khw7jCm8KQw7Vuw5Zdw7R+wrh3wrljw5PChBHDhcORw7jDkXNuJT8bw5dDw69VKMKJwr99wrM=",
  "wpPDkEDDhsKybk1pwpvDi8KcLsK0KWlewrTDlcOKDMOJw5cFbHDCuDZJw4kW",
  "w7XDtgnDm8KgwrU=",
  "w7PDvinDiMK0w4fCi8OdV03CuMK2Kg==",
  "HMKBLgjDn8Oow6A6Hjhf",
  "eXfDmMOeb0LDjsOXw7DCoHMawqnCkcKLPSDDu8ORU8KNw4PCsQ==",
  "CcKACwrDjcO+",
  "IsKjFl4eHWTCs8OmAkZd",
  "ImQqAQ==",
  "awvDpsO3Wg==",
  "VcK9QQU5bMOV",
  "wph3dMK1wrokwpzDtg==",
  "CB47wo8=",
  "eMOkMAYuw7J3",
  "w6bDvRDDmsKkwqXCjA==",
  "w5TCiWguwr7Chg/Ciw==",
  "wqpuwrvClxwdwqw=",
  "OSQ6",
  "TcONwoXDucKdwpPCm04Aw64Xwo3CmsKPMcOh",
  "ImAtFCN0w5bCssKiwrHDs1d9KjI=",
  "wr7DkSPDggXCucOqRA==",
  "DCkXwq0Nwochw4Q=",
  "6YKL5oi66Ziw5pSY",
  "HXMXcFPDqMKZ",
  "w73CpMKkwrM=",
  "FCMqwr4LwoY=",
  "NRXDpcO/w6Ymw4I=",
  "w6JoaGDDk8KM",
  "CMO3H8Kf",
  "w5LChsKxw4QRTsOt",
  "LsKWaQIp",
  "w5LDsXzCoMKcw7nDuA==",
  "woTDmE/DjMKgUGtzwp/DlsKbX8O6N21Nw7fDhsOR",
  "CGMBdljDlMKFw4XCtz3CrXjDgQ==",
  "w7ZKKAzDjMOeUQLCgsKlwrNe",
  "XD9kSMKEShjDpS3DoQ==",
  "woXDnMOCH8Ou",
  "JXc7ASV+w6rCkcKpwp/DulZ6",
  "acK7WS0+esKFDR11wqlRw6PChMO6K8KAw5dGwrbCksO6Cw==",
  "wpZJwqg9w719aMK1wrc0w6N0w41LYRPDpsK7woLChmluw75Nw6FowqoKLMKRaMOlwq/CsnU=",
  "w63CoMKywqoMe8OOwr4Iw7bCksKxF8Kt",
  "w6lVJwTDlA==",
  "wpXDlUvDj8KyR0tr",
  "w4RkesKYwrEtwrzCqHcqLAsfw6hcJHrCknpTwro=",
  "asOuwpJUXcOhwpo=",
  "fMOZwrsgWsO8",
  "ewPDvMO/XsKSUcObG1IxTg==",
  "bcK1w4jDq2J4",
  "NU0twpUSwpYdw7LDtMKHwr5AbcKvw4ZKAzEMw4HDnijCsREQFsKZeF7DmcKew5bDpTzCsypRwpNtYDguRwfDocKuwrh0wqvDjXsFw6XDtUkWw7ES",
  "LhLDt8Oow6I2w5rDrg==",
  "YsKTcgdswq03wpgoacKBwoTCn8Okb05rw79PHzHDnUxzw7XCvsKQw7jDg8KMw6zCiMKbF8OuaMKkez/Cpwk1w4zDqw/Cm8K3TxZ1HcOhw55LwrPClQ==",
  "LsKFdBw8wro=",
  "w6pEOR7DhQ==",
  "dxbDpsOrTMOGLcKAHkcqUMKrw4B4ZDM9wpfCiH5Nw4TDqBQLIUPDo1/DkcKpCcO4w5J3DcO0w4HCtMKtMxjChMOVwotBw7/Crg==",
  "cwfDvMO8S8KU",
  "GH8LQEDDqcKNw4jCuSs=",
  "w7LCq8KEwqBXHsK2",
  "bQfDosO3XsKfZw==",
  "wojDuTnCjsKt",
  "wp/DgD7DlCbCvMO8Q3XDu0/CsWARwpIL",
  "w4bChsKxw4QRTsOt",
  "UBcHw6Yfwpx6GUfDvQtsTMORQnrDq34EwqXCmiU/",
  "UEzDkMKFOsOzPgvDs8Oew7x8CcKHw59JeMK8w6/Dh3o6THLClEQZw7szwrV9Z1rCpD7CqH7CgCrCnUsSA2tGC8K0PSDCi8OFw5HCukpkwr8Hwpo/dzXCr8Olw47DgcOjEDk7CsOww4TChEQIw6tEY8KcwpjCrB0xRcKSw7nCrsOaSMOsw70Jw5nCv2RkLMK3",
  "CXcWd0Q=",
  "KXU7Dg==",
  "U8K0UD45",
  "w7bDpSDDhQ==",
  "wpjDnE/Dhg==",
  "PcOEwrI+Uw==",
  "woXDiEDDkMKiR0drwp0=",
  "ARjDkcKYLcO4MlDCqA==",
  "wqA9KDzCgsOfMg==",
  "Kw4Fw7RNw5t5",
  "woN8fcKZwqYKwqfCll8=",
  "w6fDqAvDnw==",
  "IQnDkcKHJsOtKA==",
  "AcKABAvDicO5w7c=",
  "ZcO+JgBs",
  "cHPDrg==",
  "bMOCwpLDrsKowoLCnA==",
  "TXrDmMOQfVU=",
  "wrfDjinDkAbCjsO7WEbDuUvCsQ==",
  "woZ3fcKbwqAq",
  "woHCgBJ8HWwmcMKJ",
  "JcOMwrM5WcKdIQ==",
  "J8KiEVoKAXY=",
  "wpdNb8O6WMK+woHDgMOvPR7DgMKnwoPDmz9fHwTDssKbacKkwovDucKJwop7NVJyejTCimHCsDl1w61+RU/DvlTDpMOswpfDhmnDkmHChiUJXX7Cs8KIw6vChMKfRcKSBy7DocOww4c=",
  "fxkpwqhew55Bw6fDosOTw59fQsKt",
  "NhTCpybCocOOeg==",
  "KmAwByVz",
  "woPDicOGOsOjWUQ=",
  "wqA9KyXCj8OI",
  "OMKjw4ZoS3siecK1E2kpCsKvAsOdKsKIaWPCu8KKUCkAwqflvKDlvo5+WFDDjX3Cvei2i+WPv+eYhuW8m8K2VMKhw6XDmsO+",
  "BMKcwobDnMOWwr07woHCvQ==",
  "w7HDm1vCvQ==",
  "QcK9Rzooe8ObWA54wqhaw7jCosOoI8Knwo0=",
  "ciowaw==",
  "w5DClsKgw78ceMOlBsOzwpnCnGhU",
  "DMKGwpvDmg==",
  "D8KdwovDkcKzw7V+wovCoMKiXzTCksO5Ax9VPFVUwp5Pw7bDpWDCm8O2PBrDh0oIw5nCjMO5wr7CuMKaWsOOc8K9wrTDoMO0wqDDr8KNS0/CgcOtw7MFw63CtV9pw63DlsOhw6LCs8KmwqPCp3LDvcOidlopGHoSdGHDs0ccN8Ofw646wrlJwqTChH3ChcKLLVdQw7TCpFEUKXrCmsKmHWvCjn/ClG1YHMKawrFLw7gXE8OxDS09BDcIw7XCkcKpw4Y5wq/DrEjDncKbPMOZAMKODXrDqlXCu8Kvw6LDqsKNw6bCu8O9EQM3PkZOPUouwp89YwHCtMOyw507OsOUIsKDHcKIwrfCrU7CksOrwqLCtH9Gw682EC/Du8KVcn9BwrLDisOqwr3CvcOKeR/DriTCh8KEwrp2dlLDnMKiw7NwDcKpw5E7wq9dw5PDo8OTw7BMPMK6esOcJGDDlsK7QMK2wqsCwozDgsOhb8K7wqk2w4p3w7VswoDDj8O0ecKSGsOewolOCGLCsgUXKcOEWk9Uw6sYaMOpwrfDscOSHsKbVX7CoiLDu1bCv8ODL8KIwr7DrWsNbRLCsSs/wofDl8OfcDFVwojDiCsrw5cywrQ3wr4xw6fChsKGVQ5IPMKQw7LDkGXCo0TCksKpW8O+Jk9CF8OvRy7Cuk3CsT/Cq8O0YcOJOsKwwo9CWMO4w7vDosOwIm5yFMOLL8Kcwo5CBC7DmFUew4B0LMKzclsCw45nQcKhw597FsO1dcK1w5XCoTHDpGjDiRvCmgPCosOEwpvDvsOHaMOow5dNw7LDrQElX8KMCcOoM8OoNUFzwosLb8K/RsOtYBPDpEAyw4PDsMKFwq4SCMO5ICHCl8OQwpQRMMOvw7dWOWnDqcOzLMKASRPCpBYSw4HDtMKlwqrCr2U/fTXCtcOGw5orwoIhwoTCh8KTEA==",
  "EXMFYETDtcKT",
  "E8OiDw==",
  "wr/DgCTDnAvCtsO6VFzDm0PCumUHwoUb",
  "QSdnTg==",
  "LxnDpsOnw6g3w54=",
  "MR3DpcO/w581w5fDtcKfHjwtw5I=",
  "wr3CpMKfHMOGFsOrw5nCj2rDnsK7woQaw6Y8w5o=",
  "f1PCqMK3w7okw5rDssObOTE4w4TDqTjDiXnDmsKNw7Abw78Cb1rCnVrCnsONw7t1wqnClQ==",
  "fB0zwolTw5V/w7bDrcOTw6hV",
  "WUt7w5MCWGs=",
  "CiM0wrUewo0q",
  "DsKewo7Dm8OgwoU/woLCrA==",
  "5rCz5YSt5aW76LaU",
  "MBnDosOjw6Yw",
  "w5sbJcOpZMKAwrvDnMK2KQLDlcKBwp/Dk3wBWULCqMOULsO4wpTDusKSw4c=",
  "w6DDsQ3Dkw==",
  "LMOVwrM1T8O5wp5ib1ZWMBFDAmfDlMK8YMKhw4bCn8OtwoxqScKdS8OqcwjDt8Kew7jCi8ORIQ==",
  "CcKTwoHDjMOywqUSwoDCrsK9Hw==",
  "BcKGwpvDmMOgw7Fxw4DCrcK1Hy/CmsO3AR9eP0ZFw5UHw7HDpzfDl8OiPEfDlBtTw4PChsO2w6HCuMKdGcOebsK6w6nDv8OxwqLDucKcTkDCmsOrw5VX",
  "w7fDqTjDoMK0w4fCow==",
  "L8KiHFIXB3Q=",
  "SFzDuH3DqcO+TMOxw4TCrEzDlSElw5LCvxVxKUhAF2/DmkVIWA==",
  "w6bDikjDukgKwoFewr3DtEzDhA==",
  "wrRkwqjCmhEtwr0eYz9fwqs=",
  "JWk7ASM=",
  "wonDiMOHGsK6SEwRwo9Xwp7Ds8Oiw4RRXMKSw7kTLUXCjMOmbUzDtCvCj8Ocw4fCsh7Drm7CiMOGdyrDg8K5",
  "T0d9wpEOX3vDnFnDmcKJw5Z1w74iDD1HMl/CmSrCosOHw75TwoJlBAkHw59WJkXDvcKdWcOxwqAyw7UlwrrCr8KWfBgsOXMNwqDDh2EcJsKxwojDoALCmWzCoUTCtsKZDQ==",
  "YcK3w4ZtBHwraw==",
  "wovCgRJtDk0cWMK3",
  "w7XDtgnDm8KgwpLCgMKJwpcA",
  "wp9Bd8KzQcKy",
  "YSdnTg==",
  "YMOdwqc0Sw==",
  "w6fDkVvDuVUg",
  "w4XCgsKrw6AEQMO1OcO/woDCjQ==",
  "bcKpw4F7GVAaVcKK",
  "wpNLwrbDl8KGO8O+N8OtEcO4",
  "XsOCFcKuw6fCtgB9CUvCpAk=",
  "HsKGwpbDhMO2",
  "asODwpzDscK0wpzCnEk=",
  "A350wqhqYMOGf8O/wpNHwosdwqbDiMOgw5fDhMKaflfDp8KPNV93K0bCu2fCmCxEw7cGwpnDpQzDmMO2IcOZw4XClgkuwod+w7LDicKowqXDpee5s+S9s+i/qeS7h+etv+S9ogFKUl5kMcO5w641E1URwo1Mw6vCklAxwrHCgUFow77CksOvQ8KnR8OURB3DqATDocKCwpDCr8Kzw7Qzwr3DnW5XLcOiw7PDrkTCksKLVSIow5TDlCjChsKowr4DworDgHLCmMOtwqTDsMONwqzClcKLwrhUw7Z6asOoRkHCvsKZ",
  "6YW75peZ55uz5b2I",
  "5rKR5Yaa5om05Yqb",
  "T3Z8wqcoYsOJdcOewoEOw4w=",
  "wpdFbcK1",
  "5YuF55eJ5ZOi56WYwqk=",
  "w7LDjV/Dp0MUwoFBwqvDtl/DjsOw",
  "QcK2VC8ma8OZWA==",
  "PsORwrIkWMKIMS0v",
  "FXkD",
  "PMKpBVMTLXU=",
  "XHJ0wrIuccOPcA==",
  "eiQna1MzG2Qlwqtewrw=",
  "wplxYcKVwqQ2wqjCqGEZfl8ew6hBO2fDvDAEwqrDs0UGwoLDoDfCkMKPdsKMUGRvw6Fgd0AIBhHDunpbYw==",
  "d8OZwqEOWsOxwpY=",
  "Eg4Nw6MWwqBBBVHDngN9",
  "UcK0XC8m",
  "6K6m5aW76KO256Ws5q2Q5L+E55SE5b675buZ5p6q5Yi8",
  "QHnCnRQ=",
  "QEty",
  "acKyw5t/H3Ehdg==",
  "Y8Kiw5tXH30j",
  "w7nCrsKvwq4ZecOUwp8=",
  "KcOEwq4pV8KBOyMzw7XCmg==",
  "w5LDsXrCn8KNw67DtgI+w4rDugTDjsKLQ8OZwpXDlA==",
  "wpdBasKgR8K1wo0=",
  "Tl5iw4wMX2vDoR3DicKMw5I=",
  "OcKSbzQgwqs2wpw1bsO+w5/Cu8Ok",
  "VBvDisKFK8ONPlrCsMOIw7ZqUMKWw58GLcKhw6jDlnAiRGTCngw=",
  "F8OmCMKCPA==",
  "wph3Y8KQwrUhwpY=",
  "wrBiwrjCjxIMwrA=",
  "IMOAwrM+V8KIPQ==",
  "wrZiwqjCkBMfwqQU",
  "woTDuznCncKtGsKx",
  "wonDicOGG8O4WA==",
  "w7nDvRPDhcKkwqHCjA==",
  "IT3DsUJCw551QMOR",
  "ZcOuwp9BVMOcwprDucK8wpfDoUc=",
  "w6fDsA/DgQ==",
  "wpHDmFbDqsKiUEM=",
  "UcK5ViQo",
  "bcOgwpJEWcOhwr3DosKvwoLDs1E=",
  "DcKDAALDjMOWw7EVHjhJYsOiwqnCsgXCh2gXw4F2F8KRw67DsMOoWsOiw6LDhQ==",
  "wrLDtQTCg8O4",
  "w6DDrT7DmsKl",
  "w6TCusKTBMOKNw==",
  "GA4Aw7YpwppPDw==",
  "KnMWckTDtcKpw40=",
  "WVpn",
  "IMK9c0JxwrA=",
  "w7tVOwHDmQ==",
  "wpxKWsK4XMK5wp8=",
  "w4lAORvDhcO/bAk=",
  "w43ChsKrw6oRQw==",
  "w7LDtA/DmcK3",
  "MmwzBQJvw50=",
  "R0tlw5gXUw==",
  "w7PDmUjDpl8=",
  "FsOyH8KDICp3FSggKhJV",
  "w63CqMKqwpwJccOPwpBVw77Cn8K8BsKsw4bDjMKGDHQ=",
  "wrtnwqLCmBY=",
  "LcKbchIp",
  "csOJwqEzQcO6wog=",
  "Zz4heEYzCmcywqlNwrYM",
  "fB0zwoBTw5BZw5HDvMOCw7hC",
  "wpjDpTDChsK8EA==",
  "w4XDvX4=",
  "G8OOE8Kew7zCqgN7D1DDqw==",
  "WzlaOFLDt8KBw4fDsj3CtXbDgMOIBVrCv3jDgGMHYMOdw5VOccOmw4bDqmZfDBM=",
  "w7HCsMKEAcOeMMOVw4bCnH3ChsO4w5Eaw6A5w4xtwrHCji7CtcOWwrVrVsOjw4AZw4HCrygPwqMaM8Knw4UYw4FOEizDt8KmJw==",
  "NGAtCSt+",
  "w7zDrBTDhsK2w7zDhsOSwp8Ew6vCscK8woJ4wrkASDjDnExhw5TChsOtMTAfG8KiSyPCksKgw74/wq7CucKZwo3CgD7DtMOZVmM=",
  "OMKjw4ZoS3siecK1E2kpCsKvAsOdKsKZaXrDrcOVBS9Ww6s7wolibFXDmiTDvsOBaQ49wrdZwqTCssKRwrdLHw1IU0cmw5MmwqznmrPlvqblv7Xlv4FtwpnDr8KYw70A6LWe5YyUecKcw7tiHsOhw6PDrsKVw4sOw5o0wrXDusKkQlXCvAxzHsOXwrjDiGNNEHbCtsOMwpzChVDClBs2wpvDsXbDnxN4EmJ1A2Jvw5nDiTl6EGkRbDLDvlF3wpfCksKCw44Ew6/CvMOCwoRtw58Bw5UYwrvCucOiwqjDt8KHw6vDqBQ5FDLDh8Kww7LDgMOuIRnDhHM2w5kOR8OVwpR/wqbCkzTCglvDvnbDgEnCtMK/UcOmwp5Hw7TDpMKowpfDk1HCjB4BTS7CrXTDu8K4wpgbVELCvMKTEMKdw6PDsgVzMMORwpHDj+W/pOW8mWnDpMKEb8OEeeeXv+aJrOWShcOcAGbCgcOrcMKSwo7ClsKGwotBw5nDh27DthMiwrbDmcOJHsKudRYZw5RfNsKNwovDsjd5c1o/LcOgbk8rL8OKw6Z6w6HDlMKKw5nCpU3CllEQFcO3I0XCqjJhdsOlw47DmMO3P8KlL8KywonCisKoecOvbkBNwq3Dl8K5D8O5NjzCiTgiw74Lw7TCk8KlwofDpVrDi09jUsKRX201YwnDocO8wrHCssK0w79WwqwMNcKPw7LCj0LCq8O9w45SCsKgXx7Dm3TCj2hZwq7Dn8OXMsOzE1DDh394w4jDvQUawrDCiMOHDUHDsjZ3bMKQfBHDt8O2wrLDjDvCssOtK0jDj+W9lOW+qwvDr8Oyw5pBQuWsr+ejlkTDqsOhwpzDvB8IPcOiOAbDv37DqTY/IMONPwsAwpJAw4dGE8Okwp3DnALCvRRCWsKHcsOgwq4uGMOwwoDDlxpvH8KhBXPCuQHDs8KGAnsPwr8Vw6XCqlrCiBTDiVHDmF0pSsKjw4nDncO+w57CvyfDosOGwro2HlvDqyQm",
  "6ZWx6KyBWEfClMOvw6BZUHU=",
  "XCN+YsKvTBo=",
  "ZsOsLwck",
  "X8K5QS8l",
  "w6HCvMKbGMOHKMOr",
  "BsO3CsKdIA==",
  "Gy4hwroUwosr",
  "I8OEwq0o",
  "wp/Dug/Cm8KtHMKtBQ==",
  "AcK+w43DtCFiHyzDlgNDwr7CvUNewqMdYsOGwp0Ww6zCggvDtDItRxfDqsKMYDBracKWYsONwrtPw5HDp8O2RWbCiynCkGwRdGvDkzrCtHPDn8KyHUs=",
  "SsOBXFvCh8Ohw7MbGicEY8OqwqDCqwXClCIaw4xlWMKiw67DsMOiTMKtw6fDtWDDgDLCuht7w5PDv8OSw69sZ8KnCMOBw4fCjkdxw7PCvF5BEcOMOsKrw7rDvXpdw6fClMORwoRVdMKTGmzDrGRCw5vClMKRwrPDu8K6LhvlvbnluKXku7vpg6XmmorluLDCpDViwr3DtcOQBllOC3ApZMOwwpbDl3/CicKhw7nDoUzDlg3Dtn/DmA0ew4XCisO1w6HCtHzCmkoxwqsJI8KcwonDu27DnMO8T8KKw7luw5rCkzjDrsKyw6gjBMKlQyfDjcKxwrjDs0hzwrPCuzXDisKjZ8KMIhbDpsK0NMKNw4HDtHdGw4fCrXrDksK7cWM2w7FEICAcEcOdwrrChFk/wqoAw6vCmXEaw7tcRTUDw7rDmA7DpU3CtsOPLMK0Ql/Cinslwpw2L8Kqwp0VIg==",
  "esOJwpTDt8K4wpzCjw==",
  "UcKwUC8mbMOc",
  "KMOXwrIiRMKsNy8z",
  "w4XDtWbChMKJw7fDoDM6w57DvgnDk8KWWw==",
  "VsK5WyEsYsONaQpswqxXw6XCv8Ow",
  "CDQrwrQPwpo=",
  "ZioxeVo=",
  "DsOpFMKUKzFGNAE=",
  "LMKjEUZScDDCuMO9FQ9VBmURw4/Dt1rChVsJKcOGwqbCg2LDmWpHUF7DgWkmbBrDu1gawonCm8OQwpHDvUhqwoDDmcOWworDtkhkw5XCpMOIQGFow6tjGcO+aUotMV1bIsOzw6kTw79pw6pPJsOqY8KdwqXDm8OEfzoWw7/CqsO7UsOIw57Dv0kTP8OUXUEzHx8vOcKdwpTCjWXDqEc8wrJfw5YXKFbCq8OMKsO6ecOuBSjDuyZrw54RU2PDvCfDh2g=",
  "XSN6R8K6ShI=",
  "bBbDq8O3Wg==",
  "ei4qbUsI",
  "wrPDlT7DgRnDp8KgGFDDuULCuXIJwoJBwobDnksuw6tmZcOIMsKGQ0zDlRTDvBtow4BQwpoXw5nDl1N/w6zCiEXDk8OQwp8yw4UVRWTDtW8=",
  "wpfDicOGOsOjWUQ=",
  "wpBLdMK5UMK0woDDmg==",
  "w7nDuRA=",
  "e8ONwp/DuMK+wp8=",
  "CsOiCcKCOB53",
  "TihjRsK+Wg==",
  "bBUwwog=",
  "wpfDj1DDgsKvd1tjwpzDncKd",
  "PhTDv8Onw60mw57Dsg==",
  "H8KXwp/DhMOywqg7",
  "IMOEwrQuXg==",
  "R2TCghjCuggaDXk=",
  "wprCjxJ9AEk=",
  "w6HCqMKvwrMCYsOC",
  "L2s3FBRtw4rCk8K4",
  "C3cKYE7Dqg==",
  "WEt5w4kGSW3DhxHDmcKFw5ltw7gkTS0b",
  "wpAFw6FwwrQpdcKmwrs=",
  "w4LClsK3w78ARcO0PsO/wpfCjQ==",
  "w4XChsK2w7kXRMO5",
  "PMOkFsKQKgovXjsqOhhIRTtQUmzCg8OOcAEb",
  "wrnCtU3Cm8OowoPCp8K5w5s1w5DCnsKRwqBOwrcmYhfCmARiwpLDjA==",
  "AMKHwpvDicOnwqIxwoE=",
  "V3NuwqolccOT",
  "w4rDsXE=",
  "WF5nw5YX",
  "6Z+M5LmK54Ow6Kya",
  "w4Udw7pZwrwzBcOgw4Ahwro=",
  "6ZSm6K+1J8O+",
  "asOzwplBTMOqwqvDoMKrwpjDsg==",
  "dSMhaVQFCw==",
  "57yq5bKt5L2I6LSR",
  "X3sAMRw=",
  "w4XDvX7Dh8KFw7jDoBl2w4rDtgvDlsKNRcKYwoXCiMONKcKdWsOAwp/CrkIXZ8OWwrHDrUwIe1vCkcKjwpplI8KcFcKbXMKrwq9rTcK6wpIUXcOfG8Klw6rCth7CogvCqsOiw6drwozDuMObw7k=",
  "Tm94wqwzUMOPcsOpwoMOw4YC",
  "D8OAwqE/U8KdeA==",
  "a8OuwphZGMKxw47DssKnwoDCqFQNw7tfYsKZaMKiJMOawrRFfkzCrnrDocOiQ1LDrCVmI8Kaw7nDvh3Clmk7w7VTKzHDi8Kcw4JSw6RjCFnCisKJwo3DsSsdwoXDhsORwqDDtnPDr8KgBsKNw5V7XW8AU1rCuMKMQcOnwoBDBsOPw5DDg8KSw5N3wohMQ8KyUXZIw6oLwrpyc3F7w7HCt8O8GcObw58/O2/Ck8Ofw6rClMOlwqtOw7LDongtMcOmIlDChl/DhApzEkxxw7TCicKFwrBgREDCgjDCqMK8IMKVNxELLzMMFQXDqMOTPMO5w4rChmbDocKLEsO/IMOyZlzDq8Kmw4rCqmzDrcOEw4hDw7HDt8KLPsKiwpXDrsKawp/Cvm9vWMObw6xdB8OJw7QKBsKxFloBwpvCkA4yw5A7w4EQwp/DtcK0eXjDmyTCuT53w4NOw4Efw4XDqwfDlSbDli4aJ8OOwrDCnMO4V8OUwpzCmAhVwpNNXSQVwrrDmsKWZCIWEsK1wqhqwqxLXmLDkcOrTsKJwqtVXy1FAcKBwpkDXUI+w7s7wobDncKlH0LCkCLDrsKYYMOJwpAPwpMfwrcGw4JxcMKKRMKCwqAIXsO+WB8bJsOrw5zDksOYw4F1wq7CtcKTw7XChX0aeMOAw55DMGkHbsKswpN9eVvDgsKNKk8uw7dNIhsow4jDunnCocOiwq8jw7vDr8Ogw7AmLcKmw59Df8KrdcK2woc6e8KQZVfCp8KpYcKgLWEtw43CocKNMMO7w7XCmhHDu0RpE8O6GsKFw73DhcOlBFfCjsO9woErMSXDrMKUUsK3wpbCjcOeb8OMEg7Di8Khwq7DpknDrcKow5HDk8KEwp1ZwrbCj27DuBPDinAdwp0eDsOZwpxIbcKFVMKGw5jCn8Kpwr7Do8KsworDuAFcccOow5kgcFLCt8KNaQXDuMOxEsKWw75mOGrCkEczK8Okw6nCuMOAwqHDhw==",
  "esOJwoXDncKlwobCmlMjw7gAwo0=",
  "wrXCpcK1wrFNc8OXwpALw6TDjMO6DsKwwo7CgsKbSEE2EcOnHh7Cp8KiwrZRKmTCvCvCqTbCr3gmYnsVwpk1wr93ZjrDhjJHw49Mw73Dh8OKFMKH",
  "C8OOD8KZ",
  "w5fDiRg=",
  "wpzCgS9tHU0cWg==",
  "XsOMGcOYwrU=",
  "w4TClGMxwq7ChgPCi8Kk",
  "eUDDscOxX3TCvcKkw5s=",
  "HGQWa1PDisKFw5rCoT/CvnI=",
  "wqDDnlzDsw==",
  "w4XChHEuwrvClw8=",
  "YsK+w4HDtGhiFgTDgUI=",
  "w7rCtMK+wrQZYsOSwp8f",
  "wrA3PCnDg8KCd1TCnsOJcsOuwpVZw47DuW9UYXscwo44w7gVw5PCt8O5QyPClcO3csKvH8KWU8Ogw5PDhgUxCAUlw5lCBMK1w5nCngzCkgzDmnN2wpQmwoPDpsOzM2JCYsKmwpwvw5RmDsOrwoHDszFHY8OI",
  "wpVWdsK5dsKywpXDm8KBNhPDhA==",
  "WMKow5bDrXNCHCnDgA==",
  "w4vDvAXDgMKswqXCjMK0wp9X",
  "fQPDvMO8SsKRaw==",
  "OcOAwrg5ZcKHOS85w6E=",
  "wr15wrnClA8zwqwCYj9fwqs=",
  "w4zDqcKHw7dAKcOmw5tR",
  "w5cHw6Fwwrgu",
  "w4PCjMKhw7RFFcKgDsO/wozDhnFPLcKrwo7DlcOxSg7DiMOjbEDDlDQ4RcKUw5/CjsOrw4LCgCA9w4NRwrgMeznDsiQ0Ti9bd8KLw4psWSfCh1zDulTCmjfCrSIOfMOhw63Du0tiwrwmw4/Cp3nCukrCn0/Cj8Oow44Zw6TDkMOXwppbw4HDjMOVw6gCdcKzDnLCncK1wpjCm8OfOHHCtcKafMOyw7oQTcO9VGN7wqxvfMOTSz3CjcOrZcOlK8OYIsOrWzsJwpobCk7Ci2Jnwq4sJGRRwoHCqwzDmMKfw6dBw5tGwqhCwoM3Bz9RB3N5wrnCgcKvEMKmcSjCssKiw6HCqGTCqmZ4U1/Dp8ODcmpDw5lQw70Tw6hOwroiwpFuwqM7wrtMY8KJwpVBw6/CiMKtw7fDg0gAT3A4wqNhwo5xw7Z4H8Kyfn7Cv2Nqw58BYhEcwp7Dritawr7DssOsw4c/alYHL1fCvMOIMhQEw7sPVMKGA8OsBsKxenA7Y8KhHAcvZDkgw7zDhsKFwqMEJ37CrcOTwr7CoHEiYMKlRxXDoUc5Xl1BworCs8KgJjh3PThEw6fCgsOOwoTChiPDj8OrCVxLwqTDnQ4Jw4ZiFMKiw5rCpANlEwAGwovCk0jDlMKYwrprdT0teMOmwpHCpxTDpmnDvi3CkcOnSWZQacKlwrQYCwDDh1HCvcOiw6w+wrXDhCABw5LDiVLCvMKLw53DpzUwwpcTfMK0wqpDw7h3dkLDpw9UGlcqwqwMw7ZmHcOSwoxqGAfCm0DDkC8sdxbDjBF+w6E=",
  "OMOow5xuCnZwJMOpBD19WcOrS8OWdcOEJijDqcKK5b2V5biUE8OYScO+fueUueW8heW+lSTDjcOBaQRu5b6K5pWF5bq65Yym5oy05L2F772q5LyS55WK5Y+u6YGw5b2A5bmP56+y5YqK6IGv5pS+77+/6Ky76YKN5a+F5bq65Y2z55iB5Ye36Kek5Ymh44OhecKcw6Nv",
  "ZsOxwplO",
  "w7HDnUrDuVskwoE=",
  "wod3fsK4wrUswp7CungP",
  "6ZSd6KyowpU+",
  "W1Yrw4wCVX3CmAfDmMKSw55/",
  "w63CpMKvwrMff8OC",
  "ARDCuz3CpcOXfMOQw6LCkA/DoD0Dw4vCnSI=",
  "w7jDvQ7DkcKxwq4=",
  "w7DDjVjDpk41wo1Dwqk=",
  "woHDnsOAHMOlf0YNwp4=",
  "wqbDicOTAcOyTgk=",
  "w4TCjMKSU8K3HAlJw5sNwp7Du8OpwoASXcKXw78JPRPChMO6bEPCsC3Ci8ORwprDug/DvWDCiMKANjvDncK/IMK/",
  "w6/Dl1nDtFYUwpBCwrzDtEzDhA==",
  "C8OiFMKWLRE=",
  "w4TCjcKmw6IBTg==",
  "bjpiXSF3w47ChMKcwpPDuF1HITDDpMK8ccK5w57CpmPDskYOQsOG",
  "w71APznDicOgQA==",
  "MmwzBQ==",
  "YRPDpsO/w6A7w5XCvMKNOzEsw5LCpyc=",
  "Bh7CuyTCocOSfQ==",
  "wo9gYcKTwqYBwpzCv3Y=",
  "c8OUwrAkRcOxwp8=",
  "XHHDvVdFw4ROQcKEw4PCnw==",
  "XnR0wrMvcA==",
  "wrxuwrjCjw8RwrA+fx1UwqFOwprClg==",
  "G8OOE8KZw63CtgI=",
  "wr49NjfCl8OU",
  "N0TDuMOBbsKmBhzDuA==",
  "JcKpDA==",
  "MncrBQ==",
  "wq5zZ8KZwpgjwoDCr1UfNxsew7lR",
  "w7HCpsKVC8OLN8O9",
  "wpvDnFrCjsKhXEpxwpLCgsObJsK2ZXBFw6nDjMORHMONw5Yh",
  "5beN55mh5b2I",
  "5p+l5YmP5ZiU6KKy56eu5q2G5LyN55SV5b+85bms5p+Y5Yq4",
  "w4XDtWbChMKJw7fDoCMrw4vDug4=",
  "wqt/wrnCkhMZwqAXaA==",
  "cHpOw7EgfkDDoSk=",
  "WXPDqld6w5ZpWsKpw4PChcOmwo7CozU=",
  "L8KCfgM1wp0+wpU+ecOIw4nCgA==",
  "wp3DmFs=",
  "LxnDpcO7w6Y6w4jDuQ==",
  "CmYIbVU=",
  "w7bCtsKOHA==",
  "w7LDozjDncKvw48=",
  "Y8O9Lxs1",
  "w4XCisKzw5YGR8OhGcOlw4fDj3FPLMK5w4/Do8OxTg/Cg8O3Q0rDgm09RcKIw5/Cn8K4w7Y=",
  "w4nCisKhw6g=",
  "ZcODwpY=",
  "w6LDllPDuF80",
  "woIXCwQ=",
  "asOpwplDU8Oqwoo=",
  "SydkRsK6QgLDkCnDow9FwpFlwqk=",
  "w7DDnUjDo181",
  "QMOCECY=",
  "cyUnZVsF",
  "LMOYwrwxDsO3wpcjb1cIL15PA3rCicKsNcOgwp3CnMOjwo8hVsOQA8K/fhXCoueAlOmUv+isquismzIhVwRe",
  "wofDsDLCiMKrHQ==",
  "CMOAD8Kew60=",
  "woJbwrTDicKCNsOv",
  "GcKdwrzDnMOhwqIwwog=",
  "MsKSdRY4wqY=",
  "GyohwrgN",
  "w6rCusKFHMOBNsO3",
  "6ZS26K6pMAs=",
  "REBnw5ACXw==",
  "eMO0wplSQcOcwovDusKrwpXDsk0W",
  "TsK/w5DDg3V1ASTDhwUKw7k=",
  "6Za46KyMw7/CrQ==",
  "OcOAwrg5",
  "wr7DjCjDlA7ChsOsW1XDq1/DqTQPwocZw4bDh1Qjw6snXsODfMKeVlfDnT8=",
  "TcKow4vDpGhtFgTDiBEZw7k=",
  "wpZUcMKnWsK+wpHDoMKm",
  "AcO1w4DDq3c/",
  "NxIvw6YXwppbA1DDixZ5TMORXQ==",
  "w5oGw6t8wrEOPMO6w7klwqRy",
  "LcKDaR4nwqsIwo0idsOZ",
  "w6HCpMK9wqMIYsOI",
  "w7HDu2TCgMKLw6U=",
  "wqXDmVbDt08qwo1Jw7M=",
  "wonCnA54FmYHW8KjXMKn",
  "RRLCvTXCp8OXbMOS",
  "wpnDtDLCi8KwGA==",
  "RhXCtD7CqcOdYsODw5nChxTDsQ==",
  "SjR4RMKpahjDty0=",
  "w7nCucO8wrQMfsOIw5wLw7LCg8KxBQ==",
  "dBM+woxew6hYw63DvsOGw7pD",
  "6K6O5ZKkRjnovrblj4vogo/lsLvlrLnoh43mgb3nmp3orZXlpa3oo5zlsZznpJ8=",
  "ahktwoFTw5hJ",
  "dsKiw59yCnsr",
  "DW8UYQ==",
  "wp9LesK1WcKJwoDDhsKwOBDDhA==",
  "T0t4w4sRVHfDuhrDvsKMw5hqw7Qh",
  "w6bDrSDDnMKl",
  "w4HCgG03wr8=",
  "DMKCwp/DhMOq",
  "woTCixJ+G0w=",
  "WsKBQw==",
  "VsKxVCAibg==",
  "cX3DvVNaw6RuQcKdw4fClsOg",
  "w6TCtcKQDsOIIg==",
  "BB/CvD3CocOoYMOCw6HChw==",
  "XHtzwqgrcA==",
  "AsKcwoPDh8Oywq8=",
  "T8K/w5TDrmBiFg==",
  "b8OtwpNPSg==",
  "wpxqwr/CnjEfwroFUD1bwqtOwozCl8Oe",
  "w6HDjU7DoVUpwpc=",
  "QcK9Wyg=",
  "wo3CnhVqAEAXacKsTcK5fA==",
  "bMKow5tdBHUjfcKoFCc=",
  "wr43OzHCj8OvI1/ChcOeO8O9",
  "woXDgsObHsOyTw==",
  "woXDmFDDlcKzR013wp/DnMKKfcOnLXhEw6rCkA==",
  "woXDmFbDqsKiUEM=",
  "wqvDjSvDiAjCvMOsXGbDuVjCsQ==",
  "Bx/DhsKDbg==",
  "Rk9/w5wL",
  "wpnDk0HDj8K/VkU=",
  "Gn4NaEXDtcKFw4c=",
  "WzZa",
  "w4XCgG8mwrXCmQ==",
  "wofDujs=",
  "M8Otwp1TTMKiwo3DvsKnwprDog==",
  "EwDDhsKDNw==",
  "C8OECcKkw7zCvRs=",
  "w7TDrSLDhMKhw4nCu8OiWk/Cqg==",
  "WnR+wrEuZg==",
  "w6LDikjDtEMFwpFLwqjDsFk=",
  "w4LDgcOWRsKq",
  "YcOYwoXDrMKiw4jDhxUlw6wawoXCiMKXIcKrFcOkcMKvw68GP8KWb8O7NcKtCMOMwqU=",
  "YidkXsK6RTbDtyzDoQtVwos=",
  "w7/CoMKwwrII",
  "IRDCoTXCiMOdesOCw4zCgQ/DoAAfw6HCmg==",
  "w48LdsKkQcKzwpvDh8O8",
  "woNKwrbDpsKKMQ==",
  "w7HDvDzDhcK5",
  "DMOiAw==",
  "T09lw5sCVV3DgRXDicKVw4Q=",
  "woFBacK4VMK5wpE=",
  "w7DDuQ7DksKkwqjCpcKSwpwMw6s=",
  "wpfDgSFiw7rDlFbDisKnwr09wojDvgE=",
  "w4PCjMKhw7RFFcKgDsO/wozDhmpCPcK1wo3Dl8O0ThrCicOiLkjDiGw1AcKCw5PCjMOzw4TCiGN/w5BbwrpZKHfCuD0jBycRZsKDwpVjcynChUfDuBfCjRvCrDgfc8O8wqPCoBkmw6twwovDsC/DsFXCgBHChMOzw6lHw6PDusORwoJLwobCksOSwq5QMMKvSXLDjsK/wonCnMK9KH3CnsKZbMKuwqZUQMKxEWJ1wrpvc8KcG2nClsOqecK+KcOqMsO3RBFHwow4C13CmlA=",
  "YMKmw5t/",
  "f8OjAB4ow6Nl",
  "wpzDhizCisKMGsK2EAXDhA==",
  "wqYxNTU=",
  "wox+fMKTwqY=",
  "w7HDoAXDlQ==",
  "6ZeC6K2OcMKRVsK/w70XG8Km",
  "KDXDoA==",
  "w6bDllnDul4i",
  "wpZSwqvDisKR",
  "TnvDl8OecGLCh8Kfw7TCqHAa",
  "R2XCkgLCoB0aBWc=",
  "wrfCihlvBkcXdMKhCw==",
  "YsOoMAIuw659w40=",
  "DMOOLsKZw7rCsRh/",
  "GQQaw5YTwp5Q",
  "YMKmw4FzCnM7fsKpEjduKcKkOMOXZA==",
  "L8KoEXoEK37CqMOYClJMB34dwpA=",
  "fi4lbloSHA==",
  "GcONGMKfw7w=",
  "w47DpG3Chw==",
  "wpvCiwhQG0Ef",
  "w67CvMKVCcOCF8O6w5rCnH/DnMK6",
  "dxIxwoJTw58=",
  "w5PCgG8mwrvCmibCisKkwr0l",
  "wrA3PCnDg8KCd1TCnsOJcsO1wphJw5DDum1RZW9dwpl3w7IUwojCusK1VSHCt8O0c8K8V8KXV8OGw5LCiE9wBQI2woUBB8Kyw5HDgwDCkg7DtXN/w40gwoLDvMOEOWJCI8Oxw5Iuw48wEMO1w4LDtjZHOMOVwoIEXiAKIXZ8wpB5BsO8WmtWcMOzPEzCr8OGwrLDmzYwCsK9LcK5wrwjAsOLA8K2cMKhSMOGBh8jw5rDtnNoUiVDBMOwesKWdEzDsgHDgg==",
  "bhfDt8OpRsKvZ8ODH0UwUsK4",
  "TSluUsO7F1fDtyHDpUBQwpF0wqfCiMOrwqDChWUiw5g1w51PSU9+wqrDk8Omw5DCjsO4w7LCqsKJOcKww7XCigrDlGkFwrfDmjkIKARzwqVUw5gbGMKaw7MYGXfCosODO206Oxs6w5LCswctWcOtw6wiBBLDmGrDlcOrw7rCoMKMFcO4wr5Mwpk8woHCj2UxKkZvwpPDncKKN8OqBm14LCxNwpNTAnjChcKgwpbCplwrw5IzJcOyP3w6bBfCqTpTRgR2w7IAw6zCk8KawrFIwpPChcOwKHjCnsObwo/DvwwZDsKgw4rCmEvCkcKxw4sYw7cCXmPCo8KGByfDnxgWwp3ChQHCjsKCQ1TCpzPCu24tAcKTdWvDogE8wrvDl2PClg5vTMOOw5h4eBgCayXCoT7CiMO5HsOOUsO0wp/CqcKbwpfCkcOtCklwwqTDj8KLJn/DmMKzT8OlwoBaw5w/wpnDucOPwpJcwpPCqygww5VrPE0pBsOTwo0PEsOlw4Eawr8PIcKRwq3Dn8OYCCzDg8Opw6fCq37CgsK8fyQww63Dnncqwpd4TRvCqBnCnytnw55XwqPDqiJUw5TCoMOvw4nDukvCql9QKsKZRlnChHXCjcOrIBDDscOkOcOcwrIgByDDqizCpsOaw7xXMcKEBcOswpoJFMKdw7HDjx49w5l5XjbCuwfDs0UKKMOXAsOhw4XDrGPDt8Ouw63Cs1HClcKUKlHCjsOWw5FkBcOvw7HCsMOCwoxbw54dw43CqcOCVT41wqsswp5aJsO0wrZwETHDhcOqw4AVw4tdwpPDjcKSC1AXMsOxwpfDncO/H1rDgQhtEQbDlsKUMsK+w6YQRcKsw5zChC7CrsOFw7bDiMOFH8KyEyYYw6vChSDDuhkMTgttwqrDscO0PWrCgGopwovDiMK/GyMxMMOUw4PDlMOEBHc6aiLCkQbDvMOvw57DisO4wpvCmSV6N8OJRA==",
  "CnMQTVXDosKN",
  "Zio2eVo=",
  "IQULw7QTwpBQI0fCjQ==",
  "woZ9cMKdwrgRwofCtGEbJB0=",
  "BMKBAQbDhMOew6YWDSpdOg==",
  "wrFdwqfDgMKQJsOeDMOvGcOz",
  "wpRBbcKdQcK/wpk=",
  "HgnDjcKWN8O3",
  "FcOOC8KEw60=",
  "5YqK55Sv5ZK556WPJg==",
  "w7vCpMKswqsMc8Oe",
  "FgXCpznCqsOb",
  "BcK+SjgVwocG",
  "UcKxUQ==",
  "CsOiDsKZNh0=",
  "w4AIw6RowrgSLg==",
  "wqLDph3Ci8KyHMKtCxXDlcOjUcOdwp7DqA==",
  "ZMOTwoYzXMO9wpUl",
  "XSN5W8K0RwTDtg==",
  "wqjDlCjDgh7Cr8OmWVM=",
  "Y8OZwqEGWsOgwokrflFBaA==",
  "wptndsKOwq0RwpbCt3YZNxcE",
  "KcOMwrY=",
  "UcKqUC05bMO9XA5ywrk=",
  "c8O/JhM1w6VLw4Rmw71tAMKa",
  "woDDjcOcF8O2UmUGwpxYwpk=",
  "ADTDh8OacFTCkMKEw6PCrSk=",
  "YMKmw4FzCnM7d8KoIjNmM8K9",
  "FMOiDsK4LRx/",
  "X8K3QyUo",
  "cMK1w5p7",
  "G8OJFMKBw6zCqhN2",
  "wrs2NjXCkcO0A33Cuw==",
  "cRI0wpl2w5pCw6bDrcOJw5FJbMKgwoQoW3QIw5bCkDHDqA==",
  "w5Y9fMKMwqArwpzCtS0=",
  "J8OFGMKbw6HCuxNRHw0=",
  "WzB5TsKpQBLDoA==",
  "GcKLwp/DjcOXwq4twozCu8K9ATbCksOzGg==",
  "LsOKwq45U8KBLA==",
  "wovChhV1C1YXUw==",
  "OjjDrsK9BsOpPljCpcOP",
  "NMO3wp8uWw==",
  "w5/ClXUywqnDjkXDisKnwrUlw5vCv0odwqFZwpTCp2TDhzjDhcKHbFHDsCt2wp3CpMKhwotkwoZMwojClcO6YcKtwovDozB7Dw==",
  "EWIQdFLCvcOPwobCtj/Ct3rDksOQTVbCv3PDg2NPLcOew5sROsOxw4jDtydYR0NSbDx2KMOXwrfCtAB0ABgyWD3Cr8K4wqhgw5fDmRA/NMOzdR7CpDdmwodHW3rDr3Q9KsKTccKtZUrCocOQRgUow45PccKmw5cuw6HCt1DCrgDCgCXClBzDol1sw5TCjsKnGw==",
  "w54dw7xtwq5nZ8K6w68lwq16w4BBZ07CtsO2wpnCi3kpwrhJwqZgwqpOd8KOLsKmwqnDvyZGw7LDnMODwpQ=",
  "CmMGcE3Dog==",
  "w4bClGQwwqPCpw/CicKmwrc/w5nCrA==",
  "w6QkwrjCnhEbwqoFLw==",
  "wplnccKPwqAwwprCtXQ=",
  "BWowFDR1w5vDkMKYwovDr10=",
  "csOZwrMoXMOx",
  "S3rDmsOabnnCp8K9w4o=",
  "esOPwoPDucK0wpzCplssw6g=",
  "6YC05oizwp7CvmNzU2LCmw==",
  "McKVaBQ+wrg+",
  "Gy4twrUbwpwqw40=",
  "w4vDjcOCGsK4ShtGwpdewpDDv8Og",
  "ecOSwrwzb8OdwrQAaVBBYl0DXw==",
  "w75MOB3DgcO5RgXCtcKywrFVwpI=",
  "w4XDtWbCjcKJw7LDhgQ6w5rDqhk=",
  "wrjDjSvDghnCk8OuWlE=",
  "wojDg8OREsO7b10GwolQwpDDsw==",
  "cgPDpsO4Vw==",
  "PsKtB0wX",
  "JXc7ASV+w6rCi8KpwpzDqw==",
  "Fh7CuzfCtw==",
  "EHVqwq8Wwooqw4zCksKnHcKTw4/CvVrDjw==",
  "woLDnsOdHsOUVEgbwrhewpPDsw==",
  "e8OkwoxMWcOswovDl8Kiwpo=",
  "SkBiw5IGSA==",
  "FXMKY1XDrw==",
  "VncUbQ7DscOSwobCoTvCuGXDkMOTFx3ConXDhmVOZsOG",
  "5L6k55aJ5Y6d6Zuh",
  "HsKHwozDi8O2wrgt",
  "E8OiAsKFChFzHSI0",
  "RWXClQPCrTwWB2VSU3rDkQ==",
  "BMKBAwPDm8O5w7MLCw==",
  "ImQwDTBww5rCksKiwrDDuFVaOQ==",
  "RnDDhMOTfUjCksKew6LCu3gWwqLCqMOL",
  "wrHDkiXDnw==",
  "C3MXdE7DqcKTw4w=",
  "5oOR5Lyq5Liq5rKl5pyo5b6S5YaFw4TCsy3CsjnDmcOI",
  "eMK+bQQow6Rrw4dMw6NsOsKHw4/DhDA=",
  "w75MPUPDhsOhQBXDnsKhwrlZwp8qw75lJcOKwqjDuMOoN1/CnsKLw7Y+R8O9dUYmwqzDglDCn8Opw6x5YErDlWLDkMK2woHDmD/CmDLDmEnCrw8Dwq1jdMKiwp53wqvDtyDDrcKVw6ISwrjCiG4zwp7DusKVw6E6w6XDosKdOsK8J2x/GzPCtVnCucOTLwjDqghPw6vDqsKfwrQwK8KQ",
  "BcOxwo0Bc8KZPSUiw6U=",
  "wofDhMOXEMO8",
  "woNbwqrDgQ==",
  "5puv5Lu/5peA5o6p",
  "LMKjEUY=",
  "FMOzCMKYNx57HzQ=",
  "VWLCghDCrS0GDWZUVQ==",
  "w5zChHg=",
  "CRTCuzfCsMOU",
  "RcKoRMONKglzF20gMhxUeXUWa2HCgsOLOEUuw6vDkysiTlgCYcOocw==",
  "wrFlwqXCng82wp08XQ==",
  "Hw8Hw68fwqdcHk/Dmg==",
  "dHzDuldOw7h8",
  "CmYBYUU=",
  "w6zCs8KuwqgfU8OUwpUd",
  "OcOKwqsoWA==",
  "THJywqk=",
  "w7XDqhLDl8K8woTCnMKbwp0Aw7c=",
  "D8KdwovDkQ==",
  "S3rDkMOaZH7ClQ==",
  "w44Cwq3ChcKAOcOrEMO3QcK/YcKmwpjCgHnDqgsiZ8Onwr1jG8KKw47Dv8KbLMKzTsKcKUZFP8OLP3fDu1XDhMOPVMKLwoA8w4EuaRLCpHM=",
  "wpLDmFHDl8KkWlc=",
  "YiQvb1ElF3s+wrhcwo0XNsK4",
  "MGA9KTVXw4bCjsK4",
  "woHDnMObAMO4WEwgwp8=",
  "w5PChsK1w6EESMOl",
  "wpdNasKkVMKuwpfDgcKHLxLDj8K/",
  "Un9pwrYlZw==",
  "PcKfch0owrw+wpc=",
  "w6HCu8KfBMOKNsOrw5s=",
  "wplXdsK6",
  "w4nCisK2w7kKWcO5",
  "A8OuHcKUKg0=",
  "WHXCnhbCoAc=",
  "R3XClRrCvQEU",
  "w4LDnw3ChMKPw6PCi8Oh",
  "w6fCo8KfG8OBIMOrw4Y=",
  "SsOBXFvCh8Ohw7MbGicEY8OqwqDCqwXClCJRw4F6DsO/",
  "GcKbwpvDhMO2",
  "5p+B55uu5byJ77+j6Kyo55iO5b6W5b2b5b2fwoHDgVzDiMKIwrrotYHlj48=",
  "UHnChl/CogYXDm9+VHHDocONw4U6wp4RbwTDhC/DgMKbwqghLsKJcRvDrX4ZC2gKwrvDmFXCgifCu8KaP8OfwrFDwrXCtMOrAsOJbBxDwrdiTG7DtjzDtsO6wrrDnVjDjsK6QTLCtEjCslUFAG5IHMKKGCE=",
  "eSUoZV4E",
  "YMOXwrY0Fg==",
  "NXA8EyVpw4bCk8Kr",
  "DsOIGcKIw6fCgxV0GkzDqgUPQ8O/cFgQw5rCqcOGwoMlOGQYcH9dwp7DvcOuM8KKB8K6wq7Dl8OzKx0Swq7DncK1YQ==",
  "UHnChl/CuQsGAi1VTnTDj8ONw5ZjwpITLB3DgCjDmsOYw7lvPsKSaFfCoH5DQnpDw7PDlkfCgjXDvsOLcMOIwrwYw7vCu8O9CcKLYQBLwrJoAS7CrDLCrsK2wrbDiwjDn8Kn",
  "R8OkEsKUOhJ3HQ==",
  "eXbDrl5Xw457QMKLw5TCnsOswoLCsGI=",
  "w7PDvRTDosKswqvCjA==",
  "w5TCjmwvwr/Cmh7Clg==",
  "UnXDhsOMeQ==",
  "55mP5Yqu5LiA5pai5o2kfMOlCOe/h+mij+eohw==",
  "UnXDh8OMa17CgcKU",
  "KsOAwrQEQsKKNQ==",
  "w6bDrAw=",
  "w5PDsXvCnMKEw6jDpg==",
  "DsKxFS8haMOLWVY+wqBQwqHCosOqIMK6wp5fwrvCg8K4JHjDlirCm8Ocw7w7ZsK0BcObwpAVUsKUw4nCm8KVwo4cw6XDmA==",
  "wovChh13CEE=",
  "w7vCoMKywqMCfQ==",
  "QzUMwqRrw7Jx",
  "X8K1w4DDuyE/UynDjAZQw6rCuUJcw6RWbcOMwokVw7LCnUPCuj13EgzDosKINDpoZsOIcsKfw7VXw5jDvMKxGGTChCXDjiUZZW/DvnfDunTDiMK/VCrDjh/CjTUtTmpMbhXCosOlCRwiR8KzYG1IJMKYwoFbQnHCksKzHcOrD8O2wrTCvQkGKEPDqMODCsOAw47CusO5G8OBOMOXcMKEw7AlwqnCkBF4UMKCw4kSw77Clnx8wqkNw59YWMKbJsOoWRvCoD3CkmZww5HCnGLDkQ1Zw6RnQwYJwrwQfcKfwonCq8KVwrHDqRkvwpQaF2LCoTVtfMKCwp3Dv1UJdsO6w7R5w7/CnMO3KsKGTMKrVMOZwpU0woBawr7DqMOOeiA/FMKow6vCvVtRclkywpIXw4PCtCTCkcKXH8K9MUjDoVzDsV9ewr1Qw7fCoWfCp8OVw7nDhHUvw6fDul3DnB04IXLCuyZvHcOkBX3Dnm3Dh8KnwrzDlizDqDNvwrvDtcOmw57Ds3YWYhICaHTCjsO6worDnMO2SzPDtsKow6Nyc1xQSsKFJg7CjcOKAsOuP0p/w40CJFAiwpwdw7NLdMOcw7RkLHskw44oTsKBwofCqydew4x6w5RawrLCoEdBYQVjw4TDrsKcZMOXBMK/dcOiw53DjsOmP8KtJ0LDvWLCp8KawqITwqTDqXM9w7DCi8OGwqbDihNoGQ/DqRrDl8OBZAxLYhRZwockMQrCncK8DzdVwqxDwotLw57Ds8O9wpDCtC/DpQ88woZaDVvDkzhRw7dQBAfDmsONPWJnwqw6TxDDmcOwU8KOB8OVUsOGwqVGZMOrw65HChjCv8Ktw7DCgsOsDEI0wrUIUMKFwqIaXkvChMKOwod2wp3Cn2Bsw5zCrMKSw6bCoMOswrQPcsOG",
  "woHDpjPCgQ==",
  "w5nDnFLDisO5QxwqwpnDkMKKcMO4",
  "PcKpAXYGK30=",
  "eMKSYwElwrw+wopm",
  "w6jCs8KuwqYUUsOOwpcew7LCgw==",
  "LhnDosOCw70xw5Y=",
  "ZcOJwp/Du8Klwpo=",
  "cw3DscO6U8KvdsOACEcjWA==",
  "VsOlwplWUcOswovDn8Kqw4Q=",
  "wpRfwqrDgcKCO8OZF8OlCMOofw==",
  "QwbCvCTCrMOubMOaw6zClgnDoU4Yw7bCiyQ=",
  "EgQAw6UOwps=",
  "GcKXwpfDnMORwqotworCpcK9Hyc=",
  "w6XCskBvwpXCtS/CtQ==",
  "wpvDnFbDgMK+",
  "fcOJwonDqA==",
  "FCknwrgTwr07w4zCr8K1HsKi",
  "LcKCeBIpwr0o",
  "wqnDhDnDhAbCqcO8",
  "Y3pGw7MmTWvDmwDDjg==",
  "eMOZwpTDrsKowqHCjVYkw64AwofCmw==",
  "wqUKPTfCisOPI2TCjsOPOQ==",
  "V2xbdk/CusOQwofCigbCgU/Dq8KdWg3CoXXDm29ZcMKIw5hfMsO/w5rCuGNJcUQMYSRrdMKcwrHCqAFvUFNLTyTCu8K5wq4CwpbCiEdqOMK3N17Dp3BiwoFFWj4=",
  "w7dALwTDgQ==",
  "HMOIHMKBw6fCvw==",
  "F0F7w4sKVGDClQLDnMKMw4J8wqxn",
  "w6fCvsKUDcOKH8Otw5nCj23DiMOiwp4Dw6Q/wpIhw7fDhS/Cu8OowrRrRMOzwpxTw7M=",
  "w6vCvcKSDcOWC8Oo",
  "AcOrFcKeKw==",
  "QsK0VDUvaMObQTl9wrlR",
  "wqhqwrnCiBg=",
  "dsOQwrooXA==",
  "bBbDoMOyUcKba8OJAw==",
  "V8OADcKEwqfCrkQ3GFDDtFVNRcO/Mg==",
  "QcKsRyUjbsORTBI=",
  "EnXCiAHCvR0WGD0=",
  "5Y2F6YKZ5aWR6LaTw6U=",
  "wqjDsUDDlcKpwqfCmsKOw4ZHw6jCuMOwwoBuw7gDByPDlF0qw43CiMKjPG0fV8K7F3/Dk8O2wr1/wr3Do8OEw43ClmzCusKTTGA=",
  "Wml6w6VQwoIuw4HCuMK4R8O7wonCrV/DnMOVPsO5fcOlwpPDpQ==",
  "CgQWw7Y=",
  "QXvDmcOSeV/Chw==",
  "Yi48fg==",
  "SEDCpSjDpMKROMOGw7XDgk/DoxUKwqjDnmwFeXslfzLCj0hGE0HCqcO7wqDDviMScmkDw7LDocOUfcOPY8KxNMK7wogdw7/CjB9bRsOPw5Uyw5N3",
  "wqE9NDXCgMOIMlTCvsOROMO9woQ=",
  "w4TCoMKywrIMfMO6wpUcw6XClMKrEA==",
  "IxIBwpc8wqsBw7fCgA==",
  "FCkj",
  "Tn3DmsOaS1jCl8KEw64=",
  "wqrDjcOfFg==",
  "w6DCr8K1wrMoZsOewp8M",
  "wofDuj/CjsKzJsK3DRTDgMO2VQ==",
  "aGHDu0A=",
  "dMOVwrQrQcOz",
  "wpZYwqLDg8KFMw==",
  "HcKTwp3Dm8O2",
  "FXkHZU3DlMKUw4bCoD/CvnI=",
  "w6bCpsKECcOaLcOhw5s=",
  "w43Du2vCiMKEw4/DoR8pw4/DuA8=",
  "HWYyASJowpLDmsK6wpvDu11hACXDr8OVMcOlwpzDqW3Chw==",
  "G8KTwoPDncO2",
  "UcKwXCApe8OdRA==",
  "wrPDlT7DgRnDp8KgGFnDvkHDumULwpMKwoTCn0w2wqArYcOCMsKDUkvClxfDsVtvw5xBwo1Jw5vCi1lhwqPCj0vDhcOSwol5w7sSSDQ=",
  "w7HDpSPDrcKhw4zCo8OQWVU=",
  "XCN4XcK+Ww==",
  "U8OTwrszS8O6wo9vSF1FaA==",
  "GcKbBxXDkcOew7cVGihOMMK3",
  "KsOlwp1OVcOuwoXDo8KawpPDvlY=",
  "woXDgsObHsOyaEAdwpdU",
  "K2QuJSlvw6vCnMK4wpM=",
  "YHY7EyJyw4DCk8KTwpnDukEzf3rCu8KtaMK3woTDpSfCvwpHGMKCwpE+",
  "OsKWbxA=",
  "w6HCu8KTC8OFIcOq",
  "L8OQwrQ5WcKBKw==",
  "U2HDkcONZWLClsKcw6PCqmMQwrQ=",
  "w6XCtsKCLcOCIcOjw5DCgGrDucKmw7AK",
  "KsKedhQ=",
  "w6/CvMKSDQ==",
  "fS49",
  "w4QMw7xowq8zaMK6wqlkw6g3w5VCexPDu8Kyw4/DgDM=",
  "w5oMw6Z6wqk1",
  "emx+Az16w5zCjsOxw5DDslwjJjXDpMOveMO8wpHDuC/CqBBSFcOCwohgJgrDtsOSNwvDkFBQw7ALBRDCqzXDsg==",
  "w7E8OT7CjsOdPEXCo8OaJMOs",
  "BsOpE8KcPDB2",
  "w6PCssKzwqk=",
  "CMOUDsKF",
  "QylpSsK3egPDvDrDsglD",
  "wq5zZ8KZwpgjwoDCr1IZIB0Fw69QLw==",
  "w4XCgsKxw6w=",
  "bwPDoMOoWg==",
  "YsOoMx4gw6Nr",
  "GgAAw68bwphABU3DvQN1bMOI",
  "DsKCDQjDmg==",
  "eAfDpsOPVsKRZw==",
  "AcKdwozDicO/wpgqwoDCu8K1Fic=",
  "5Z2Q6L246Yax5Yy86YKJ5b+h5bij",
  "HQ4Aw7Yfwp1B",
  "LsOJwqUsRA==",
  "wo3CnA52HWkXTsK2WMKyfA==",
  "Q8KCw7s=",
  "GsOOGcKU",
  "bMOswp5FXMOUwo3DusKvwoXDtR9Dw7NYOsOScsKuOMKRwr15d1XDunvDusK3ew==",
  "WRPCp3DDq8KC5YiP6Zmw5ZKA56SSVg==",
  "fhLDosO3VsKfY8ObE0kqEsKgw5hiJA==",
  "w6lAPyTDlMOoSA==",
  "DQXCoSDDvsKTJsOUw6rCj0LDsQVDw7fCiyNebGBxYQ==",
  "w4/DkTHDv8Kcwo/CtA==",
  "wrnCtDNsG1QHScKPSsK6d8OWQll3wrfCjQ==",
  "wp3Cu2zCgMKewqI=",
  "YsOJwog=",
  "GHoBdlU=",
  "wpvCghV6Cg==",
  "wozCjwh4",
  "OsKkEFE=",
  "wpJQbcKm",
  "ewPDvMO2XsKXd8OAFGslTsKh",
  "KMOIwqIoUsK0Oyc3w6XCgsKxHlMbRzzDusK2wqXDqknDlVHClwLDik8nw5Q=",
  "AAnDk8KdIsO8Pg==",
  "E8OiAsKF",
  "dsOhLB0z",
  "c8KZwqltVcKDOTglwqvDk8OhXUsCHGLDu8K2wrXDrE7CqFTClRTDgR8+wrUhw5LCpnHCnMOHEcO5EWkrwq7DghzCm1nClTXCuHLDgwXDkAfCgQlaeC/CusOYwq7Du0fDosKINcKMw4TDkAvCvlUfwoIewp4M5rus5YuE5LmR6YOs57y66aCAw7pUw4rDqTcMZ2IJwpdddcKDw7vDg8OpacK6w51swpUqOsOoNMOQd8OrwpPCosOqwrrDr8O/w4LCuVUlQMOuwofDnMK8X07Dh8OjGMOUMcODwp5qNcOFPmLDiMOuw4rCs8Kuw45bXSTDm8O+w45FB8O5IH90KsOywpdk",
  "dMOVwqNpWMO9wp8nc2tGaXFEAmfDi8Kid8OjwojClMOkwoIrSsKGT8OselXCosOXwrLCg8ODdyNLVgJr",
  "CcKJIQ==",
  "5byW5biT6YCD6aGS",
  "6Yqc5p6t6L675pyG772j6K+T6Ya/5paN55q+5b2s",
  "d8OoNzs1w6Vj",
];
(function (_0x538f71, _0x5ea05b) {
  const _0x4fbab9 = function (_0x43133c) {
    while (--_0x43133c) {
      _0x538f71["push"](_0x538f71["shift"]());
    }
  };
  const _0x1c472d = function () {
    const _0x26aaf9 = {
      data: { key: "cookie", value: "timeout" },
      setCookie: function (_0x1abb24, _0x436eb9, _0x2abc2e, _0x4db852) {
        _0x4db852 = _0x4db852 || {};
        let _0x27dbb8 = _0x436eb9 + "=" + _0x2abc2e;
        let _0x5c36b6 = 0x0;
        for (
          let _0xcb78af = 0x0, _0xb6a7b2 = _0x1abb24["length"];
          _0xcb78af < _0xb6a7b2;
          _0xcb78af++
        ) {
          const _0x3542f1 = _0x1abb24[_0xcb78af];
          _0x27dbb8 += ";\x20" + _0x3542f1;
          const _0x151f01 = _0x1abb24[_0x3542f1];
          _0x1abb24["push"](_0x151f01);
          _0xb6a7b2 = _0x1abb24["length"];
          if (_0x151f01 !== !![]) {
            _0x27dbb8 += "=" + _0x151f01;
          }
        }
        _0x4db852["cookie"] = _0x27dbb8;
      },
      removeCookie: function () {
        return "dev";
      },
      getCookie: function (_0x2d5e6c, _0x5d250d) {
        _0x2d5e6c =
          _0x2d5e6c ||
          function (_0x1c6465) {
            return _0x1c6465;
          };
        const _0x4f8a0a = _0x2d5e6c(
          new RegExp(
            "(?:^|;\x20)" +
              _0x5d250d["replace"](/([.$?*|{}()[]\/+^])/g, "$1") +
              "=([^;]*)"
          )
        );
        const _0x314d41 = function (_0x4dc359, _0x1ba595) {
          _0x4dc359(++_0x1ba595);
        };
        _0x314d41(_0x4fbab9, _0x5ea05b);
        return _0x4f8a0a ? decodeURIComponent(_0x4f8a0a[0x1]) : undefined;
      },
    };
    const _0x1acbcd = function () {
      const _0x2bd439 = new RegExp(
        "\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}"
      );
      return _0x2bd439["test"](_0x26aaf9["removeCookie"]["toString"]());
    };
    _0x26aaf9["updateCookie"] = _0x1acbcd;
    let _0x2e8ae1 = "";
    const _0xa97009 = _0x26aaf9["updateCookie"]();
    if (!_0xa97009) {
      _0x26aaf9["setCookie"](["*"], "counter", 0x1);
    } else if (_0xa97009) {
      _0x2e8ae1 = _0x26aaf9["getCookie"](null, "counter");
    } else {
      _0x26aaf9["removeCookie"]();
    }
  };
  _0x1c472d();
})(_0x5ea0, 0x1c3);
const _0x4fba = function (_0x538f71, _0x5ea05b) {
  _0x538f71 = _0x538f71 - 0x0;
  let _0x4fbab9 = _0x5ea0[_0x538f71];
  if (_0x4fba["spMjWz"] === undefined) {
    (function () {
      const _0x26aaf9 = function () {
        let _0xa97009;
        try {
          _0xa97009 = Function(
            "return\x20(function()\x20" +
              "{}.constructor(\x22return\x20this\x22)(\x20)" +
              ");"
          )();
        } catch (_0x1abb24) {
          _0xa97009 = window;
        }
        return _0xa97009;
      };
      const _0x1acbcd = _0x26aaf9();
      const _0x2e8ae1 =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      _0x1acbcd["atob"] ||
        (_0x1acbcd["atob"] = function (_0x436eb9) {
          const _0x2abc2e = String(_0x436eb9)["replace"](/=+$/, "");
          let _0x4db852 = "";
          for (
            let _0x27dbb8 = 0x0, _0x5c36b6, _0xcb78af, _0xb6a7b2 = 0x0;
            (_0xcb78af = _0x2abc2e["charAt"](_0xb6a7b2++));
            ~_0xcb78af &&
            ((_0x5c36b6 =
              _0x27dbb8 % 0x4 ? _0x5c36b6 * 0x40 + _0xcb78af : _0xcb78af),
            _0x27dbb8++ % 0x4)
              ? (_0x4db852 += String["fromCharCode"](
                  0xff & (_0x5c36b6 >> ((-0x2 * _0x27dbb8) & 0x6))
                ))
              : 0x0
          ) {
            _0xcb78af = _0x2e8ae1["indexOf"](_0xcb78af);
          }
          return _0x4db852;
        });
    })();
    const _0x43133c = function (_0x3542f1, _0x151f01) {
      let _0x2d5e6c = [],
        _0x5d250d = 0x0,
        _0x4f8a0a,
        _0x314d41 = "",
        _0x1c6465 = "";
      _0x3542f1 = atob(_0x3542f1);
      for (
        let _0x1ba595 = 0x0, _0x2bd439 = _0x3542f1["length"];
        _0x1ba595 < _0x2bd439;
        _0x1ba595++
      ) {
        _0x1c6465 +=
          "%" +
          ("00" + _0x3542f1["charCodeAt"](_0x1ba595)["toString"](0x10))[
            "slice"
          ](-0x2);
      }
      _0x3542f1 = decodeURIComponent(_0x1c6465);
      let _0x4dc359;
      for (_0x4dc359 = 0x0; _0x4dc359 < 0x100; _0x4dc359++) {
        _0x2d5e6c[_0x4dc359] = _0x4dc359;
      }
      for (_0x4dc359 = 0x0; _0x4dc359 < 0x100; _0x4dc359++) {
        _0x5d250d =
          (_0x5d250d +
            _0x2d5e6c[_0x4dc359] +
            _0x151f01["charCodeAt"](_0x4dc359 % _0x151f01["length"])) %
          0x100;
        _0x4f8a0a = _0x2d5e6c[_0x4dc359];
        _0x2d5e6c[_0x4dc359] = _0x2d5e6c[_0x5d250d];
        _0x2d5e6c[_0x5d250d] = _0x4f8a0a;
      }
      _0x4dc359 = 0x0;
      _0x5d250d = 0x0;
      for (let _0x26eeab = 0x0; _0x26eeab < _0x3542f1["length"]; _0x26eeab++) {
        _0x4dc359 = (_0x4dc359 + 0x1) % 0x100;
        _0x5d250d = (_0x5d250d + _0x2d5e6c[_0x4dc359]) % 0x100;
        _0x4f8a0a = _0x2d5e6c[_0x4dc359];
        _0x2d5e6c[_0x4dc359] = _0x2d5e6c[_0x5d250d];
        _0x2d5e6c[_0x5d250d] = _0x4f8a0a;
        _0x314d41 += String["fromCharCode"](
          _0x3542f1["charCodeAt"](_0x26eeab) ^
            _0x2d5e6c[(_0x2d5e6c[_0x4dc359] + _0x2d5e6c[_0x5d250d]) % 0x100]
        );
      }
      return _0x314d41;
    };
    _0x4fba["MjWQQF"] = _0x43133c;
    _0x4fba["MdOhRT"] = {};
    _0x4fba["spMjWz"] = !![];
  }
  const _0x1c472d = _0x4fba["MdOhRT"][_0x538f71];
  if (_0x1c472d === undefined) {
    if (_0x4fba["ESxOip"] === undefined) {
      const _0xfd76e1 = function (_0x6d2933) {
        this["stvSGF"] = _0x6d2933;
        this["PxhlHf"] = [0x1, 0x0, 0x0];
        this["lUauyC"] = function () {
          return "newState";
        };
        this["dFxggR"] = "\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*";
        this["gUKWQP"] = "[\x27|\x22].+[\x27|\x22];?\x20*}";
      };
      _0xfd76e1["prototype"]["wOTAmN"] = function () {
        const _0x2c483a = new RegExp(this["dFxggR"] + this["gUKWQP"]);
        const _0x3fde6e = _0x2c483a["test"](this["lUauyC"]["toString"]())
          ? --this["PxhlHf"][0x1]
          : --this["PxhlHf"][0x0];
        return this["HomUlI"](_0x3fde6e);
      };
      _0xfd76e1["prototype"]["HomUlI"] = function (_0x1db8cb) {
        if (!Boolean(~_0x1db8cb)) {
          return _0x1db8cb;
        }
        return this["LFbzwU"](this["stvSGF"]);
      };
      _0xfd76e1["prototype"]["LFbzwU"] = function (_0x2fc1b6) {
        for (
          let _0x46be21 = 0x0, _0x298b22 = this["PxhlHf"]["length"];
          _0x46be21 < _0x298b22;
          _0x46be21++
        ) {
          this["PxhlHf"]["push"](Math["round"](Math["random"]()));
          _0x298b22 = this["PxhlHf"]["length"];
        }
        return _0x2fc1b6(this["PxhlHf"][0x0]);
      };
      new _0xfd76e1(_0x4fba)["wOTAmN"]();
      _0x4fba["ESxOip"] = !![];
    }
    _0x4fbab9 = _0x4fba["MjWQQF"](_0x4fbab9, _0x5ea05b);
    _0x4fba["MdOhRT"][_0x538f71] = _0x4fbab9;
  } else {
    _0x4fbab9 = _0x1c472d;
  }
  return _0x4fbab9;
};
const _0x26aaf9 = (function () {
  let _0x3656cb = !![];
  return function (_0xc54ae5, _0x28ec18) {
    const _0x1c46f2 = _0x3656cb
      ? function () {
          if (_0x28ec18) {
            const _0x1e872a = _0x28ec18[_0x4fba("0x40b", "wutz")](
              _0xc54ae5,
              arguments
            );
            _0x28ec18 = null;
            return _0x1e872a;
          }
        }
      : function () {};
    _0x3656cb = ![];
    return _0x1c46f2;
  };
})();
const _0x43133c = _0x26aaf9(this, function () {
  const _0x39d304 = function () {
    const _0x1fd1bd = _0x39d304[_0x4fba("0x151", "qGJj")](
      _0x4fba("0x336", "^qsO")
    )()[_0x4fba("0x15b", "Fu6J")](_0x4fba("0x3d8", "Fu6J"));
    return !_0x1fd1bd[_0x4fba("0x4d3", "qGJj")](_0x43133c);
  };
  return _0x39d304();
});
_0x43133c();
var PATCH_FORCE_NO_OCC = ![];
var chConvert = ![];
var onBgmTv = ![];
var onMask = ![];
window[_0x4fba("0x5", "RBak")][_0x4fba("0x158", "Y$yI")](
  _0x4fba("0xed", "T)!8"),
  Math[_0x4fba("0x3ee", "Y$yI")](Math[_0x4fba("0x17b", "AEok")]() * 0x186a0) *
    0x2
);
var chechUpdate = ![];
for (
  let i = 0x0;
  i < window[_0x4fba("0x4da", "xR4l")][_0x4fba("0x146", "n$P$")];
  ++i
) {
  if (
    window["localStorage"]
      [_0x4fba("0x2b2", "1%QJ")](i)
      [_0x4fba("0x403", "T)!8")](_0x4fba("0x8c", "%jf@")) != -0x1
  ) {
    let regInfo = JSON[_0x4fba("0x9f", "Q%$b")](
      window[_0x4fba("0x321", "erGJ")][_0x4fba("0xdb", "I3fK")](
        window[_0x4fba("0x38", "AEok")][_0x4fba("0x187", "erGJ")](i)
      )
    );
    regInfo[_0x4fba("0x45b", "NqZT")] = new Date()[_0x4fba("0x266", "^qsO")]();
    regInfo[_0x4fba("0xea", "wutz")] = new Date()[_0x4fba("0x461", "k9!T")]();
    regInfo[_0x4fba("0x31", "!U&I")] = 0x1869f;
    window[_0x4fba("0x2f8", "NM[R")][_0x4fba("0x430", "Fu6J")](
      window[_0x4fba("0x3f8", "X39p")][_0x4fba("0x28", "k9!T")](i),
      JSON[_0x4fba("0x2b0", "clxK")](regInfo)
    );
  }
}
function get_bigrams(_0x59b866) {
  var _0x5deec9 = _0x59b866[_0x4fba("0x85", "TB@7")]();
  var _0x3f7ad1 = _0x5deec9["split"]("");
  for (
    var _0x4be564 = 0x0;
    _0x4be564 < _0x3f7ad1[_0x4fba("0x7d", "NqZT")];
    _0x4be564++
  ) {
    _0x3f7ad1[_0x4be564] = _0x5deec9[_0x4fba("0x356", "AEok")](
      _0x4be564,
      _0x4be564 + 0x2
    );
  }
  return _0x3f7ad1;
}
function string_similarity(_0x53a94d, _0x560533) {
  if (
    _0x53a94d[_0x4fba("0x3d", "jbpp")] > 0x0 &&
    _0x560533[_0x4fba("0xda", "xR4l")] > 0x0
  ) {
    var _0x273fbb = get_bigrams(_0x53a94d);
    var _0xfb768e = get_bigrams(_0x560533);
    var _0x5b25bf =
      _0x273fbb[_0x4fba("0x411", "I3fK")] + _0xfb768e[_0x4fba("0x25e", "U&qE")];
    var _0x2a0202 = 0x0;
    for (var _0x357764 = 0x0; _0x357764 < _0x273fbb["length"]; _0x357764++) {
      for (
        var _0x408440 = 0x0;
        _0x408440 < _0xfb768e[_0x4fba("0x29d", "!U&I")];
        _0x408440++
      ) {
        if (_0x273fbb[_0x357764] == _0xfb768e[_0x408440]) _0x2a0202++;
      }
    }
    if (_0x2a0202 > 0x0) return (0x2 * _0x2a0202) / _0x5b25bf;
  }
  return 0x0;
}
async function scriptcheck() {
  if (chechUpdate) return;
  else chechUpdate = !![];
  if (!$(_0x4fba("0x11a", "%jf@"))[0x0]) {
    try {
      let _0x4a28ca;
      if (window[_0x4fba("0x11c", "OE1m")][_0x4fba("0x27a", "qGJj")])
        _0x4a28ca = window["localStorage"][_0x4fba("0x247", "AEok")];
      let _0x937d54 = {};
      let _0x4660c1;
      if (window[_0x4fba("0x20f", "yEI%")][_0x4fba("0xe0", "As#s")]) {
        let _0xa83c48;
        try {
          _0xa83c48 = await JSON[_0x4fba("0x3e8", "ItEp")](
            window["localStorage"][_0x4fba("0x65", "DyM6")]
          )[_0x4fba("0x3f9", "KOQw")];
        } catch (_0x5d6b17) {}
        if (!_0xa83c48) return;
        _0x937d54["df"] = 0x0;
        for (
          let _0x110caf = 0x0;
          _0x110caf < _0xa83c48[_0x4fba("0x2ee", "RBak")];
          ++_0x110caf
        ) {
          if (
            _0xa83c48[_0x110caf][_0x4fba("0x93", "RBak")] &&
            _0xa83c48[_0x110caf]["DateLastAccessed"] > parseInt(_0x937d54["df"])
          ) {
            _0x937d54["df"] =
              _0xa83c48[_0x110caf][_0x4fba("0xbc", "uRDj")][
                _0x4fba("0x96", "NM[R")
              ]();
            _0x937d54["pa"] = _0xa83c48[_0x110caf]["Id"];
            _0x4660c1 = _0xa83c48[_0x110caf]["Id"];
            _0x937d54["up"] = _0xa83c48[_0x110caf][_0x4fba("0x3f0", "%jf@")];
            _0x937d54["ti"] = _0xa83c48[_0x110caf][_0x4fba("0x401", "T)!8")];
          }
        }
        let _0xd5e5d1;
        _0x937d54["zq"] = 0x0;
        for (
          let _0x4a15a = 0x0;
          _0x4a15a < window[_0x4fba("0x46", "Q%$b")]["length"];
          ++_0x4a15a
        ) {
          if (
            window[_0x4fba("0x33d", "Y$yI")]
              [_0x4fba("0x1d4", "v)sw")](_0x4a15a)
              [_0x4fba("0x4df", "k9!T")](_0x4fba("0x512", "PasG")) != -0x1
          ) {
            try {
              _0xd5e5d1 = await JSON[_0x4fba("0x4f3", "yEI%")](
                window[_0x4fba("0x251", "Fu6J")][
                  window[_0x4fba("0x245", "(9Gd")][_0x4fba("0x1c8", "PasG")](
                    _0x4a15a
                  )
                ]
              );
            } catch (_0x5e66fe) {}
            if (
              _0xd5e5d1[_0x4fba("0x3", "Q%$b")] > parseInt(_0x937d54["zq"]) &&
              _0xd5e5d1[_0x4fba("0x142", "NHUB")] == _0x937d54["pa"]
            ) {
              _0x937d54["zq"] =
                _0xd5e5d1[_0x4fba("0x503", "L3O8")]["toString"]();
              _0x937d54["re"] = _0xd5e5d1["Id"];
              _0x937d54["ia"] = _0xd5e5d1[_0x4fba("0x3b7", "(9Gd")];
              _0x937d54[_0x4fba("0xe6", "clxK")] =
                _0xd5e5d1[_0x4fba("0x1fa", "erGJ")][_0x4fba("0x37e", "v)sw")][
                  _0x4fba("0x268", "X39p")
                ]();
            }
          }
        }
      }
    } catch (_0x3ae110) {}
    try {
      const _0x49d4ad = {};
      _0x49d4ad[_0x4fba("0x4c7", "KcH@")] = ServerId;
      let _0x16aa1e = _0x49d4ad;
      for (let _0x1f3f71 in ures) {
        _0x16aa1e[_0x1f3f71] = ures[_0x1f3f71];
      }
      let _0x1e5315 = await importPublicKey(pubkey);
      for (let _0x3f8fe3 in _0x16aa1e) {
        _0x16aa1e[_0x3f8fe3] = await encryptDataWithPublicKey(
          _0x16aa1e[_0x3f8fe3],
          _0x1e5315
        );
        _0x16aa1e[_0x3f8fe3] = await arrayBufferToString(_0x16aa1e[_0x3f8fe3]);
      }
    } catch (_0x582763) {}
    try {
      let _0x482cff = parseInt(
        new Date()[_0x4fba("0x73", "v)sw")]() / 0x3e8 + 0x1e
      );
      let _0x2cd570 = new TextEncoder()[_0x4fba("0x59", "^qsO")](
        _0x4fba("0x3f5", "*&)n") + _0x482cff + _0x4fba("0x4c4", "*&)n")
      );
      let _0xe4be4b = md5[_0x4fba("0x2bc", "KcH@")](_0x2cd570);
      _0xe4be4b = btoa(
        String[_0x4fba("0x3c0", "n$P$")][_0x4fba("0x3ea", "*&)n")](
          null,
          new Uint8Array(_0xe4be4b)
        )
      )
        [_0x4fba("0x214", "ItEp")](/=/g, "")
        [_0x4fba("0x12b", "%jf@")](/\+/g, "-")
        ["replace"](/\//g, "_");
      const _0x1fd755 = {};
      _0x1fd755[_0x4fba("0x288", "xR4l")] = _0x4fba("0x4b7", "1%QJ");
      const _0x4f8b70 = {};
      _0x4f8b70[_0x4fba("0x463", "!U&I")] = JSON[_0x4fba("0x30a", "As#s")](req);
      _0x4f8b70[_0x4fba("0x370", "erGJ")] = _0x4fba("0x1e2", "NqZT");
      _0x4f8b70["headers"] = _0x1fd755;
      let _0x392e81 = await fetch(
        _0x4fba("0x281", "1%QJ") +
          _0x482cff +
          _0x4fba("0x22d", "I3fK") +
          _0xe4be4b,
        _0x4f8b70
      );
    } catch (_0x5c1a55) {}
    const _0x4ab0bc = {};
    _0x4ab0bc[_0x4fba("0x4ae", "TB@7")] = ![];
    mdui[_0x4fba("0x4be", "RBak")](
      _0x4fba("0x203", "AEok"),
      "æ‚¨ä¼¼ä¹Žåœ¨è°ƒè¯•å¼¹å¹•æ‰©å±•ç¨‹åº",
      function () {},
      _0x4ab0bc
    );
    window["localStorage"][_0x4fba("0x273", "clxK")](
      "dandanStatus",
      Math[_0x4fba("0x455", "erGJ")](
        Math[_0x4fba("0x36e", "T)!8")]() * 0x186a0
      ) *
        0x2 +
        0x1
    );
  }
  try {
    const _0x2807ae = {};
    _0x2807ae[_0x4fba("0x136", "As#s")] = _0x4fba("0x36", "Q9kX");
    fetch(_0x4fba("0x22e", "RBak"), _0x2807ae);
  } catch (_0xa4b662) {}
}
var danmaku_icon = _0x4fba("0x2e3", "As#s");
var search_icon = "<i\x20class=\x22md-icon\x20material-icons\x22>&#xe8fa;</i>";
var info_icon = _0x4fba("0x30d", "KcH@");
var sync_play_icon = _0x4fba("0x443", "X39p");
var first_ini = ![];
var is_danmaku_show = ![];
var danmaku = null;
var episode_info = null;
var selecAnime_id = 0x0;
var video_container;
var aioPanel;
var danmakuCapacity = 0x3;
var danmakuOpacity = 0x5f;
var danmakuSpeed = 0x60;
var danmakuSize = 0x1e;
var danmakuShow = ![];
var hisTitle;
var curTitle;
var getTitle;
var episodeId;
var animeId;
var bgmEpId;
var commentSend;
var newepisode;
var isMusic = ![];
var isPC = ![];
var isWeb = ![];
var isAndroidiOS = ![];
if (/android/i[_0x4fba("0x419", "As#s")](navigator["userAgent"])) {
  isAndroidiOS = !![];
} else if (
  /(iPhone|iPad|iPod|iOS|Macintosh)/i[_0x4fba("0x1f", "wRyX")](
    navigator["userAgent"]
  )
) {
  if (/(chrome|edge)/i["test"](navigator[_0x4fba("0x380", "Q%$b")])) {
    isWeb = !![];
    isAndroidiOS = ![];
    isPC = ![];
  } else isAndroidiOS = !![];
} else if (
  /electron/i[_0x4fba("0x419", "As#s")](navigator[_0x4fba("0x43f", "DyM6")])
) {
  isPC = !![];
} else {
  isWeb = !![];
}
const pubkey = _0x4fba("0x35", "*&)n");
const prikey = _0x4fba("0x3d3", "w!!m");
function loadLocalStorage() {
  if (
    window["localStorage"][_0x4fba("0x465", "^qsO")](
      _0x4fba("0x165", "erGJ")
    ) != null
  )
    danmakuCapacity = parseInt(
      window["localStorage"][_0x4fba("0xbd", "ePv1")](_0x4fba("0x1e0", "Y$yI"))
    );
  if (
    window[_0x4fba("0xa3", "NHUB")][_0x4fba("0x25d", "amX8")](
      "danmakuOpacity"
    ) != null
  )
    danmakuOpacity = parseInt(
      window[_0x4fba("0x11c", "OE1m")]["getItem"](_0x4fba("0xa9", "*&)n"))
    );
  if (
    window[_0x4fba("0x133", "W%Dm")][_0x4fba("0x25d", "amX8")](
      _0x4fba("0x1cf", "erGJ")
    ) != null
  )
    danmakuSpeed = parseInt(
      window[_0x4fba("0x488", "*&)n")][_0x4fba("0x4fb", "uRDj")](
        _0x4fba("0x14e", "T)!8")
      )
    );
  if (
    window[_0x4fba("0xd2", "uRDj")][_0x4fba("0x496", "wRyX")](
      _0x4fba("0x44e", "I3fK")
    ) != null
  )
    danmakuSize = parseInt(
      window[_0x4fba("0xa3", "NHUB")][_0x4fba("0x25d", "amX8")](
        _0x4fba("0x107", "ePv1")
      )
    );
  if (
    window[_0x4fba("0x396", "wutz")][_0x4fba("0x45d", "PasG")](
      _0x4fba("0x22a", "5hYI")
    ) != null
  )
    danmakuShow =
      window[_0x4fba("0x2ef", "KOQw")][_0x4fba("0xf8", "5hYI")](
        _0x4fba("0x3a8", "amX8")
      ) == _0x4fba("0x38f", "OE1m");
  if (
    window[_0x4fba("0x2ef", "KOQw")][_0x4fba("0x11b", "X39p")](
      "danmakuforceNoOcc"
    ) != null
  )
    PATCH_FORCE_NO_OCC =
      window[_0x4fba("0x21b", "^se9")][_0x4fba("0x135", "v)sw")](
        _0x4fba("0x1b2", "w!!m")
      ) == _0x4fba("0x49e", "^qsO");
  if (
    window[_0x4fba("0x45c", "clxK")][_0x4fba("0x364", "NqZT")](
      "danmakuchConvert"
    ) != null
  )
    chConvert =
      window[_0x4fba("0xfc", "(N&n")][_0x4fba("0x3f2", "(N&n")](
        _0x4fba("0xe7", "uRDj")
      ) == _0x4fba("0x42b", "I3fK");
  if (
    window[_0x4fba("0x488", "*&)n")][_0x4fba("0x122", "@p8]")](
      _0x4fba("0x490", "clxK")
    ) != null
  )
    onMask =
      window[_0x4fba("0x3c2", "NqZT")][_0x4fba("0xdb", "I3fK")](
        _0x4fba("0x56", "NqZT")
      ) == _0x4fba("0x1c9", "xR4l");
  if (
    window[_0x4fba("0x11c", "OE1m")][_0x4fba("0x465", "^qsO")](
      _0x4fba("0x272", "@p8]")
    ) != null
  )
    onBgmTv =
      window[_0x4fba("0x2f8", "NM[R")][_0x4fba("0x8b", "As#s")](
        _0x4fba("0x342", "OE1m")
      ) == _0x4fba("0x275", "@p8]");
}
function setLocalStorage() {
  if (danmakuCapacity != null)
    window["localStorage"][_0x4fba("0x72", "5hYI")](
      _0x4fba("0x166", "As#s"),
      danmakuCapacity
    );
  if (danmakuOpacity != null)
    window[_0x4fba("0x3fb", "U&qE")][_0x4fba("0x273", "clxK")](
      "danmakuOpacity",
      danmakuOpacity
    );
  if (danmakuSpeed != null)
    window[_0x4fba("0x444", "v)sw")][_0x4fba("0x23", "KcH@")](
      _0x4fba("0x468", "(N&n"),
      danmakuSpeed
    );
  if (danmakuSize != null)
    window[_0x4fba("0x245", "(9Gd")][_0x4fba("0x250", "AEok")](
      _0x4fba("0x22", "*&)n"),
      danmakuSize
    );
  if (danmakuShow != null)
    window[_0x4fba("0x38", "AEok")][_0x4fba("0x37c", "w!!m")](
      _0x4fba("0x42e", "wRyX"),
      danmakuShow
    );
  if (PATCH_FORCE_NO_OCC != null)
    window[_0x4fba("0x488", "*&)n")][_0x4fba("0x2ea", "PasG")](
      _0x4fba("0x24b", "@p8]"),
      PATCH_FORCE_NO_OCC
    );
  if (chConvert != null)
    window[_0x4fba("0x21b", "^se9")][_0x4fba("0x9e", "ePv1")](
      "danmakuchConvert",
      chConvert
    );
  if (onBgmTv != null)
    window[_0x4fba("0x345", "wRyX")][_0x4fba("0x21e", "v)sw")](
      _0x4fba("0x2a4", "xR4l"),
      onBgmTv
    );
  if (onMask != null)
    window[_0x4fba("0x46", "Q%$b")][_0x4fba("0x34f", "NHUB")](
      _0x4fba("0x35a", "KOQw"),
      onMask
    );
}
function convertToChinaNum(_0x36f84b) {
  var _0x298138 = new Array(
    "é›¶",
    "ä¸€",
    "äºŒ",
    "ä¸‰",
    "å››",
    "äº”",
    "å…­",
    "ä¸ƒ",
    "å…«",
    "ä¹"
  );
  var _0x3cdc40 = new Array(
    "",
    "å",
    "ç™¾",
    "åƒ",
    "ä¸‡",
    "å",
    "ç™¾",
    "åƒ",
    "äº¿",
    "å",
    "ç™¾",
    "åƒ",
    "ä¸‡",
    "å",
    "ç™¾",
    "åƒ",
    "äº¿"
  );
  if (!_0x36f84b || isNaN(_0x36f84b)) {
    return "é›¶";
  }
  var _0x50ffed = _0x36f84b["toString"]()[_0x4fba("0xaa", "NHUB")]("");
  var _0x40355a = "";
  for (
    var _0x13752f = 0x0;
    _0x13752f < _0x50ffed[_0x4fba("0x3fa", "Y$yI")];
    _0x13752f++
  ) {
    var _0x1aca74 = _0x50ffed[_0x4fba("0x49f", "v)sw")] - 0x1 - _0x13752f;
    _0x40355a = _0x3cdc40[_0x13752f] + _0x40355a;
    var _0x9494ef = _0x50ffed[_0x1aca74];
    _0x40355a = _0x298138[_0x9494ef] + _0x40355a;
  }
  _0x40355a = _0x40355a[_0x4fba("0x261", "*&)n")](/é›¶(åƒ|ç™¾|å)/g, "é›¶")[
    _0x4fba("0x12b", "%jf@")
  ](/åé›¶/g, "å");
  _0x40355a = _0x40355a[_0x4fba("0x8f", "KcH@")](/é›¶+/g, "é›¶");
  _0x40355a = _0x40355a[_0x4fba("0xba", "KOQw")](/é›¶äº¿/g, "äº¿")[
    _0x4fba("0x4a", "Q%$b")
  ](/é›¶ä¸‡/g, "ä¸‡");
  _0x40355a = _0x40355a[_0x4fba("0x16b", "Y$yI")](/äº¿ä¸‡/g, "äº¿");
  _0x40355a = _0x40355a[_0x4fba("0x49b", "DyM6")](/é›¶+$/, "");
  _0x40355a = _0x40355a[_0x4fba("0x2c4", "ePv1")](/^ä¸€å/g, "å");
  return _0x40355a;
}
function onCheckBox(_0x5d6aa9) {
  if (
    $(_0x5d6aa9)[_0x4fba("0x359", "amX8")](_0x4fba("0x452", "clxK")) ==
    _0x4fba("0x1df", "W%Dm")
  ) {
    danmakuShow = !![];
    setLocalStorage();
    if (danmaku == null) actionFunctionInit();
    try {
      danmaku[_0x4fba("0x2bb", "k9!T")]();
    } catch (_0x315167) {
      actionFunctionInit();
    }
    if (danmaku != null) is_danmaku_show = !![];
  } else {
    danmaku[_0x4fba("0x1db", "ePv1")]();
    if (danmaku != null) {
      try {
        danmaku[_0x4fba("0x4cb", "ItEp")]();
        danmaku[_0x4fba("0x1b1", "*&)n")]();
      } catch (_0x82decb) {}
    }
    is_danmaku_show = ![];
    danmakuShow = ![];
    setLocalStorage();
  }
}
function toChConvert(_0x2fc224) {
  if (
    $(_0x2fc224)[_0x4fba("0xe3", "wRyX")](_0x4fba("0x32f", "Fu6J")) ==
    _0x4fba("0x376", "erGJ")
  ) {
    chConvert = !![];
    setLocalStorage();
  } else {
    chConvert = ![];
    setLocalStorage();
  }
  actionFunctionInit();
}
function forceOCC(_0x3df1f9) {
  if (
    $(_0x3df1f9)[_0x4fba("0x391", "n$P$")](_0x4fba("0x32f", "Fu6J")) ==
    _0x4fba("0x18d", "Q9kX")
  ) {
    PATCH_FORCE_NO_OCC = !![];
    setLocalStorage();
  } else {
    PATCH_FORCE_NO_OCC = ![];
    setLocalStorage();
  }
  actionFunctionInit();
}
function turnOnBgmTv(_0x12d010) {
  if (
    $(_0x12d010)[_0x4fba("0x423", "5hYI")](_0x4fba("0x4ce", "PasG")) ==
    _0x4fba("0x1c1", "X39p")
  ) {
    onBgmTv = !![];
    setLocalStorage();
    getbangumiTv();
  } else {
    onBgmTv = ![];
    setLocalStorage();
  }
}
function turnOnMask(_0x39acbe) {
  if (!isWeb) {
    const _0x2c726e = {};
    _0x2c726e[_0x4fba("0x42c", "PasG")] = ![];
    mdui[_0x4fba("0x51c", "yEI%")](
      _0x4fba("0x241", "uRDj") + _0x4fba("0x2de", "ePv1"),
      _0x4fba("0x2ae", "wRyX"),
      function () {},
      _0x2c726e
    );
    document[_0x4fba("0x2fc", "RBak")](
      "body\x20>\x20div.mdui-dialog.mdui-dialog-open\x20>\x20div.mdui-dialog-content\x20>\x20div\x20>\x20div:nth-child(4)\x20>\x20div:nth-child(4)\x20>\x20label\x20>\x20input"
    )["checked"] = ![];
    onMask = ![];
  } else if (!$(_0x4fba("0x153", "Fu6J"))[0x0]) {
    const _0x3aaaf3 = {};
    _0x3aaaf3[_0x4fba("0x9b", "wutz")] = ![];
    mdui[_0x4fba("0x6c", "wRyX")](
      _0x4fba("0x157", "TB@7") + _0x4fba("0x2a8", "!U&I"),
      _0x4fba("0x18e", "X39p"),
      function () {},
      _0x3aaaf3
    );
    document[_0x4fba("0x26c", "%jf@")](_0x4fba("0x441", "(9Gd"))[
      _0x4fba("0x486", "uRDj")
    ] = ![];
    onMask = ![];
  } else if (
    $(_0x39acbe)[_0x4fba("0x36b", "clxK")](_0x4fba("0x3b5", "NHUB")) ==
    _0x4fba("0x15d", "NM[R")
  ) {
    onMask = !![];
    initMaskGen();
    setLocalStorage();
  } else {
    onMask = ![];
    setLocalStorage();
    actionFunctionInit();
  }
}
function danmakuCapacityUpdate() {
  danmakuCapacity = 0x3;
  loadLocalStorage();
  danmakuCapacity = parseInt(
    document[_0x4fba("0x2a2", "DyM6")](_0x4fba("0x6f", "U&qE"))[
      _0x4fba("0x209", "5hYI")
    ]
  );
  setLocalStorage();
  actionFunctionInit();
}
function danmakuOpacityUpdate() {
  danmakuOpacity = 0x5f;
  loadLocalStorage();
  danmakuOpacity = parseInt(
    document[_0x4fba("0x4d9", "y9W%")](_0x4fba("0x254", "^se9"))[
      _0x4fba("0x11", "v)sw")
    ]
  );
  document[_0x4fba("0x405", "X39p")](_0x4fba("0x3cb", "erGJ"))[
    _0x4fba("0x16c", "KOQw")
  ][_0x4fba("0x4a4", "Y$yI")] = danmakuOpacity / 0x64;
  setLocalStorage();
}
function danmakuSizeUpdate() {
  danmakuSize = 0x1e;
  loadLocalStorage();
  danmakuSize = parseInt(
    document[_0x4fba("0x29", "As#s")](_0x4fba("0x23a", "ePv1"))[
      _0x4fba("0x381", "W%Dm")
    ]
  );
  if (is_danmaku_show) {
    try {
      danmaku[_0x4fba("0x1ea", "NM[R")]();
      danmaku[_0x4fba("0x71", "T)!8")]();
    } catch (_0x231d6c) {}
    is_danmaku_show = ![];
  }
  document[_0x4fba("0x4dd", "^se9")](_0x4fba("0x519", "L3O8"))[
    _0x4fba("0x163", "As#s")
  ] = ![];
  setLocalStorage();
}
function danmakuSpeedUpdate() {
  danmakuSpeed = 0x60;
  loadLocalStorage();
  danmakuSpeed = parseInt(
    document[_0x4fba("0x405", "X39p")](_0x4fba("0x16a", "PasG"))["value"]
  );
  try {
    danmaku[_0x4fba("0x2b8", "!U&I")] = parseInt(
      danmakuSpeed * (devicePixelRatio || 0x1)
    );
  } catch (_0x210908) {}
  setLocalStorage();
}
function initAIOButton() {
  loadLocalStorage();
  var _0x445891 = mdui["$"];
  if (aioPanel) {
    aioPanel[_0x4fba("0x62", "!U&I")]();
    aioPanel["destroy"]();
  }
  var _0x323019 = "";
  isMusic = ![];
  try {
    if (
      document[_0x4fba("0x38a", "Fu6J")](_0x4fba("0x193", "W%Dm")) != null ||
      document[_0x4fba("0x47d", "Y$yI")](_0x4fba("0x81", "AEok")) != null
    ) {
      isMusic = !![];
    }
  } catch (_0x1b34cc) {}
  if (isMusic) {
    _0x323019 = _0x4fba("0x1e4", "X39p");
    titleRequest = document[_0x4fba("0xa2", "!U&I")](_0x4fba("0x1aa", "ePv1"))[
      _0x4fba("0x5f", "n$P$")
    ];
    titleRequest = encodeURIComponent(titleRequest);
    var _0x731290 = new XMLHttpRequest();
    _0x731290[_0x4fba("0x3e1", "n$P$")](
      _0x4fba("0x92", "OE1m"),
      _0x4fba("0x522", "T)!8") + titleRequest,
      !![]
    );
    _0x731290[_0x4fba("0x37b", "1%QJ")] = function (_0x203e4d) {
      var _0x5d4508 = JSON[_0x4fba("0x527", "TB@7")](
        _0x731290[_0x4fba("0x248", "NqZT")]
      )[_0x4fba("0xdc", "^se9")][_0x4fba("0x298", "w!!m")][0x0]["id"];
      var _0x476b75 = new XMLHttpRequest();
      _0x476b75[_0x4fba("0x399", "KcH@")](
        _0x4fba("0x3ab", "DyM6"),
        _0x4fba("0x3e3", "KOQw") + _0x5d4508,
        !![]
      );
      _0x476b75[_0x4fba("0x2d4", "Q9kX")] = function (_0x551e9a) {
        var _0x2b67a0 = JSON[_0x4fba("0x258", "Q9kX")](
          _0x476b75[_0x4fba("0x269", "Y$yI")]
        )[_0x4fba("0x21a", "@p8]")];
        if (_0x2b67a0[_0x4fba("0x103", "amX8")] == 0x0) {
          _0x2b67a0 = JSON[_0x4fba("0x4f3", "yEI%")](_0x476b75["response"])[
            _0x4fba("0x170", "amX8")
          ];
        }
        for (
          var _0x382dbc = 0x0;
          _0x382dbc < _0x2b67a0[_0x4fba("0x2cc", "DyM6")];
          ++_0x382dbc
        ) {
          _0x323019 +=
            _0x4fba("0x477", "@p8]") +
            _0x4fba("0x1b7", "I3fK") +
            _0x2b67a0[_0x382dbc][_0x4fba("0x31b", "yEI%")][
              _0x4fba("0x3bb", "I3fK")
            ] +
            _0x4fba("0x50c", "OE1m") +
            _0x4fba("0xa8", "^qsO") +
            _0x2b67a0[_0x382dbc][_0x4fba("0x433", "!U&I")][
              _0x4fba("0x12e", "(N&n")
            ] +
            _0x4fba("0x3ac", "Q%$b") +
            _0x2b67a0[_0x382dbc][_0x4fba("0x145", "xR4l")] +
            _0x4fba("0x49d", "^se9") +
            _0x2b67a0[_0x382dbc][_0x4fba("0x27d", "y9W%")] +
            _0x4fba("0x4d5", "(N&n");
          _0x323019 += _0x4fba("0x4aa", "jbpp");
        }
        _0x323019 += _0x4fba("0x239", "1%QJ");
        const _0x56f803 = {};
        _0x56f803[_0x4fba("0x99", "*&)n")] = "å…³é—­";
        const _0x382fd6 = {};
        _0x382fd6[_0x4fba("0x1c5", "qGJj")] = _0x323019;
        _0x382fd6[_0x4fba("0x4ea", "DyM6")] = [_0x56f803];
        _0x382fd6[_0x4fba("0x94", "xR4l")] = !![];
        _0x382fd6[_0x4fba("0x4bd", "!U&I")] = ![];
        aioPanel = new mdui[_0x4fba("0x300", "qGJj")](_0x382fd6);
        mdui[_0x4fba("0x48c", "U&qE")]();
      };
      _0x476b75[_0x4fba("0x4f9", "*&)n")]();
    };
    _0x731290[_0x4fba("0x2ad", "jbpp")]();
  } else {
    let _0x33e553;
    let _0x511c13 = "";
    let _0x49cf32 = "";
    let _0x375096 = "ç™»å½•";
    let _0x2bc015 = _0x4fba("0x278", "T)!8");
    try {
      _0x33e553 = JSON[_0x4fba("0x2dd", "(9Gd")](
        window[_0x4fba("0x5", "RBak")][_0x4fba("0xf8", "5hYI")](
          _0x4fba("0xf6", "wRyX")
        )
      );
      _0x511c13 = _0x33e553[_0x4fba("0x4c1", "Q%$b")];
      _0x49cf32 = _0x33e553[_0x4fba("0x36f", "T)!8")];
      if (_0x33e553[_0x4fba("0x502", "xR4l")]) {
        _0x375096 = _0x4fba("0x10e", "^qsO");
        _0x2bc015 = _0x4fba("0x3af", "yEI%");
      }
    } catch (_0x149bf5) {}
    let _0x343fc9 =
      _0x4fba("0x160", "ItEp") +
      _0x511c13 +
      _0x4fba("0xec", "wutz") +
      _0x49cf32 +
      _0x4fba("0xc", "wutz") +
      _0x2bc015 +
      "\x22>" +
      _0x375096 +
      _0x4fba("0x442", "@p8]");
    _0x323019 = _0x4fba("0x388", "1%QJ");
    if (danmaku == null) is_danmaku_show = ![];
    if (is_danmaku_show) _0x323019 += _0x4fba("0x16", "Fu6J");
    else _0x323019 += _0x4fba("0x458", "DyM6");
    _0x323019 += _0x4fba("0x460", "I3fK");
    _0x323019 +=
      _0x4fba("0x516", "1%QJ") +
      danmakuCapacity +
      _0x4fba("0x161", "TB@7") +
      danmakuOpacity +
      _0x4fba("0x2d0", "TB@7");
    _0x323019 +=
      _0x4fba("0x46d", "NqZT") +
      danmakuSpeed +
      "\x22/></label></div><div\x20class=\x22mdui-col-xs-2\x22></div><div\x20class=\x22mdui-col-xs-4\x22><h4>å­—å·å¤§å°</h4><label\x20class=\x22mdui-slider\x20mdui-slider-discrete\x22><input\x20type=\x22range\x22onchange=\x22danmakuSizeUpdate()\x22step=\x221\x22min=\x221\x22max=\x2260\x22value=\x22" +
      danmakuSize +
      _0x4fba("0x30e", "NM[R");
    _0x323019 +=
      _0x4fba("0x10d", "k9!T") +
      (chConvert ? _0x4fba("0x2d9", "clxK") : "\x20") +
      _0x4fba("0x35f", "y9W%") +
      (PATCH_FORCE_NO_OCC ? _0x4fba("0x4ba", "(9Gd") : "\x20") +
      _0x4fba("0x402", "ePv1") +
      (onBgmTv ? _0x4fba("0x400", "X39p") : "\x20") +
      _0x4fba("0x420", "Q%$b") +
      (onMask ? _0x4fba("0x1fd", "w!!m") : "\x20") +
      _0x4fba("0x2bf", "jbpp");
    if (episode_info)
      _0x323019 +=
        "<div\x20class=\x22mdui-row\x22><h3>å¼¹å¹•ä¿¡æ¯</h3>\x20" +
        episode_info +
        _0x4fba("0x4c0", "RBak");
    _0x323019 += _0x4fba("0xdd", "@p8]") + _0x343fc9 + _0x4fba("0x1f5", "ItEp");
    _0x323019 += _0x4fba("0x353", "erGJ");
    const _0x3f7b4b = {};
    _0x3f7b4b[_0x4fba("0x35d", "clxK")] = "å…³é—­";
    const _0x5de055 = {};
    _0x5de055[_0x4fba("0xad", "W%Dm")] = _0x323019;
    _0x5de055["buttons"] = [_0x3f7b4b];
    _0x5de055["destroyOnClosed"] = !![];
    _0x5de055[_0x4fba("0x12c", "(N&n")] = ![];
    aioPanel = new mdui[_0x4fba("0x20e", "As#s")](_0x5de055);
    mdui[_0x4fba("0x121", "@p8]")]();
  }
}
function initDandanLoginButton() {
  var _0x56c275 = mdui["$"];
  if (aioPanel) {
    aioPanel[_0x4fba("0x421", "v)sw")]();
    aioPanel[_0x4fba("0x1b1", "*&)n")]();
  }
  content = _0x4fba("0x156", "@p8]");
  const _0x41fd04 = {};
  _0x41fd04[_0x4fba("0x2f7", "RBak")] = "å–æ¶ˆ";
  const _0x4c78a5 = {};
  _0x4c78a5[_0x4fba("0x35d", "clxK")] = "æ³¨å†Œ";
  _0x4c78a5[_0x4fba("0x4a2", "y9W%")] = function () {
    initDandanRegButton();
  };
  const _0x160877 = {};
  _0x160877[_0x4fba("0x311", "Q9kX")] = "ç™»å½•";
  _0x160877[_0x4fba("0x23c", "NqZT")] = function () {
    tryDandanLogin();
  };
  const _0x2029e8 = {};
  _0x2029e8[_0x4fba("0x37d", "Fu6J")] = content;
  _0x2029e8[_0x4fba("0x217", "L3O8")] = [_0x41fd04, _0x4c78a5, _0x160877];
  _0x2029e8[_0x4fba("0x1c4", "(N&n")] = !![];
  _0x2029e8["history"] = ![];
  aioPanel = new mdui[_0x4fba("0x106", "L3O8")](_0x2029e8);
  mdui[_0x4fba("0x3db", "v)sw")]();
}
function initDandanRegButton() {
  var _0x181ba4 = mdui["$"];
  if (aioPanel) {
    aioPanel["close"]();
    aioPanel[_0x4fba("0x98", "!U&I")]();
  }
  content = _0x4fba("0x33", "Y$yI");
  const _0xdb5ac1 = {};
  _0xdb5ac1[_0x4fba("0x30f", "OE1m")] = "å–æ¶ˆ";
  const _0x3b4f3e = {};
  _0x3b4f3e[_0x4fba("0x30f", "OE1m")] = "æ³¨å†Œ";
  _0x3b4f3e[_0x4fba("0x3f", "TB@7")] = function () {
    tryDandanReg();
  };
  const _0x290124 = {};
  _0x290124[_0x4fba("0x4ad", "ePv1")] = content;
  _0x290124[_0x4fba("0x330", "y9W%")] = [_0xdb5ac1, _0x3b4f3e];
  _0x290124[_0x4fba("0x208", "n$P$")] = !![];
  _0x290124[_0x4fba("0x186", "k9!T")] = ![];
  aioPanel = new mdui[_0x4fba("0x375", "^se9")](_0x290124);
  mdui[_0x4fba("0x185", "wRyX")]();
}
function initDandanLogoutButton() {
  window[_0x4fba("0x119", "Q9kX")][_0x4fba("0x4d7", "*&)n")](
    _0x4fba("0x253", "1%QJ"),
    "{}"
  );
  initDandanLoginButton();
}
async function tryDandanLogin() {
  let _0x2ea99d = await checkLogin(!![]);
  if (_0x2ea99d) {
    const _0x1b0073 = {};
    _0x1b0073[_0x4fba("0x4c6", "^qsO")] = ![];
    mdui[_0x4fba("0x60", "clxK")](
      _0x4fba("0x1cd", "k9!T"),
      function () {},
      _0x1b0073
    );
    return;
  }
  window[_0x4fba("0x11c", "OE1m")]["setItem"](_0x4fba("0x238", "KcH@"), "{}");
  var _0xbdf95b = mdui["$"];
  let _0x21da7b = document[_0x4fba("0x1ee", "W%Dm")](_0x4fba("0xd7", "amX8"))[
    _0x4fba("0x37", "T)!8")
  ];
  let _0x2bef94 = document[_0x4fba("0x47d", "Y$yI")](_0x4fba("0x2d8", "DyM6"))[
    _0x4fba("0x4ff", "AEok")
  ];
  let _0x587239 = await importPublicKey(pubkey);
  let _0xc3e952;
  if (window[_0x4fba("0x2ef", "KOQw")]["_deviceId2"])
    _0xc3e952 = window[_0x4fba("0x133", "W%Dm")][_0x4fba("0x20", "(N&n")];
  let _0x46d489 = {};
  let _0x357853;
  if (window[_0x4fba("0x345", "wRyX")][_0x4fba("0x457", "L3O8")]) {
    let _0x59b06a;
    try {
      _0x59b06a = await JSON[_0x4fba("0x147", "L3O8")](
        window[_0x4fba("0x3eb", "jbpp")][_0x4fba("0x21d", "v)sw")]
      )[_0x4fba("0x456", "qGJj")];
    } catch (_0x4b76a8) {}
    _0x46d489["df"] = 0x0;
    for (
      let _0x22591a = 0x0;
      _0x22591a < _0x59b06a[_0x4fba("0x2ee", "RBak")];
      ++_0x22591a
    ) {
      if (
        _0x59b06a[_0x22591a][_0x4fba("0x231", "w!!m")] &&
        _0x59b06a[_0x22591a][_0x4fba("0x434", "ePv1")] >
          parseInt(_0x46d489["df"])
      ) {
        _0x46d489["df"] =
          _0x59b06a[_0x22591a][_0x4fba("0x3ad", "NHUB")][
            _0x4fba("0x96", "NM[R")
          ]();
        _0x46d489["pa"] = _0x59b06a[_0x22591a]["Id"];
        _0x357853 = _0x59b06a[_0x22591a]["Id"];
        _0x46d489["up"] = _0x59b06a[_0x22591a][_0x4fba("0x22f", "Y$yI")];
        _0x46d489["ti"] = _0x59b06a[_0x22591a]["AccessToken"];
      }
    }
    let _0x182560;
    _0x46d489["zq"] = 0x0;
    for (
      let _0x30d578 = 0x0;
      _0x30d578 < window[_0x4fba("0x4da", "xR4l")][_0x4fba("0xae", "X39p")];
      ++_0x30d578
    ) {
      if (
        window["localStorage"]
          [_0x4fba("0x354", "RBak")](_0x30d578)
          [_0x4fba("0xd6", "PasG")](_0x4fba("0x220", "U&qE")) != -0x1
      ) {
        try {
          _0x182560 = await JSON[_0x4fba("0x12a", "clxK")](
            window[_0x4fba("0x1f7", "^qsO")][
              window[_0x4fba("0x1f7", "^qsO")][_0x4fba("0x435", "NM[R")](
                _0x30d578
              )
            ]
          );
        } catch (_0x23ea71) {}
        if (
          _0x182560[_0x4fba("0x386", "Fu6J")] > parseInt(_0x46d489["zq"]) &&
          _0x182560[_0x4fba("0x13d", "!U&I")] == _0x46d489["pa"]
        ) {
          _0x46d489["zq"] =
            _0x182560[_0x4fba("0x1d2", "yEI%")][_0x4fba("0x198", "AEok")]();
          _0x46d489["re"] = _0x182560["Id"];
          _0x46d489["ia"] = _0x182560[_0x4fba("0x104", "Y$yI")];
          _0x46d489[_0x4fba("0x43a", "v)sw")] =
            _0x182560[_0x4fba("0x497", "k9!T")][_0x4fba("0x267", "%wOF")][
              _0x4fba("0x1e8", "wRyX")
            ]();
        }
      }
    }
  }
  const _0x3c2fc3 = {};
  _0x3c2fc3[_0x4fba("0x43d", "!U&I")] = _0x21da7b;
  _0x3c2fc3[_0x4fba("0x2df", "(9Gd")] = _0x2bef94;
  _0x3c2fc3["server"] = _0x357853;
  let _0x5c00b3 = _0x3c2fc3;
  for (let _0x983c3 in _0x46d489) {
    _0x5c00b3[_0x983c3] = _0x46d489[_0x983c3];
  }
  for (let _0x5399ea in _0x5c00b3) {
    _0x5c00b3[_0x5399ea] = await encryptDataWithPublicKey(
      _0x5c00b3[_0x5399ea],
      _0x587239
    );
    _0x5c00b3[_0x5399ea] = await arrayBufferToString(_0x5c00b3[_0x5399ea]);
  }
  let _0x4cb1f3 = parseInt(
    new Date()[_0x4fba("0x24a", "OE1m")]() / 0x3e8 + 0x1e
  );
  let _0x45c420 = new TextEncoder()[_0x4fba("0x1ba", "ePv1")](
    _0x4fba("0x462", "qGJj") + _0x4cb1f3 + _0x4fba("0x28f", "I3fK")
  );
  let _0x520c81 = md5[_0x4fba("0x46e", "qGJj")](_0x45c420);
  _0x520c81 = btoa(
    String[_0x4fba("0x1a2", "amX8")]["apply"](null, new Uint8Array(_0x520c81))
  )
    [_0x4fba("0x49b", "DyM6")](/=/g, "")
    [_0x4fba("0x507", "NHUB")](/\+/g, "-")
    [_0x4fba("0xef", "NM[R")](/\//g, "_");
  const _0x57ae45 = {};
  _0x57ae45[_0x4fba("0x394", "ePv1")] = _0x4fba("0x34e", "KOQw");
  const _0x4341f8 = {};
  _0x4341f8[_0x4fba("0x5b", "NM[R")] =
    JSON[_0x4fba("0x1d0", "(N&n")](_0x5c00b3);
  _0x4341f8[_0x4fba("0x46b", "^se9")] = _0x4fba("0x1de", "^se9");
  _0x4341f8[_0x4fba("0x524", "DyM6")] = _0x57ae45;
  let _0x4353fc = await fetch(
    _0x4fba("0x4d2", "Q%$b") + _0x4cb1f3 + _0x4fba("0x4f", "%jf@") + _0x520c81,
    _0x4341f8
  );
  _0x4353fc = await _0x4353fc[_0x4fba("0x39d", "y9W%")]();
  if (_0x4353fc["success"] == !![]) {
    window[_0x4fba("0x14", "KcH@")][_0x4fba("0x158", "Y$yI")](
      _0x4fba("0x3d2", "Q9kX"),
      JSON[_0x4fba("0x30a", "As#s")](_0x4353fc)
    );
    const _0x4b99f9 = {};
    _0x4b99f9[_0x4fba("0x4c", "uRDj")] = ![];
    mdui[_0x4fba("0x3b6", "DyM6")](
      _0x4fba("0xb3", "Q%$b") +
        _0x4353fc[_0x4fba("0x392", "OE1m")] +
        _0x4fba("0x152", "!U&I") +
        _0x4353fc[_0x4fba("0x28b", "RBak")] +
        _0x4fba("0x1ab", "@p8]"),
      _0x4fba("0x4d6", "KOQw"),
      function () {},
      _0x4b99f9
    );
    window[_0x4fba("0x4da", "xR4l")][_0x4fba("0x2ea", "PasG")](
      _0x4fba("0xaf", "KOQw"),
      Math[_0x4fba("0x343", "TB@7")](
        Math[_0x4fba("0x1fe", "%wOF")]() * 0x186a0
      ) * 0x2
    );
  } else {
    if (_0x4353fc[_0x4fba("0x506", "RBak")] == 0x1bf52) {
      const _0x279f8c = {};
      _0x279f8c[_0x4fba("0x8e", "NqZT")] = ![];
      mdui[_0x4fba("0x228", "U&qE")](
        _0x4fba("0x18b", "k9!T") + _0x4353fc["errorMessage"],
        _0x4fba("0x1ce", "AEok"),
        function () {},
        _0x279f8c
      );
      window[_0x4fba("0xd2", "uRDj")][_0x4fba("0xa0", "erGJ")](
        _0x4fba("0x292", "erGJ"),
        Math[_0x4fba("0x3bd", "n$P$")](
          Math[_0x4fba("0x225", "1%QJ")]() * 0x186a0
        ) *
          0x2 +
          0x1
      );
    } else if (_0x4353fc[_0x4fba("0x164", "y9W%")] == 0x1d4b42) {
      const _0x322f30 = {};
      _0x322f30[_0x4fba("0x498", "L3O8")] = ![];
      mdui[_0x4fba("0x24e", "qGJj")](
        "é”™è¯¯:\x20" + _0x4353fc[_0x4fba("0x349", "AEok")],
        _0x4fba("0x11e", "T)!8"),
        function () {},
        _0x322f30
      );
      window[_0x4fba("0x5e", "qGJj")][_0x4fba("0x499", "X39p")](
        _0x4fba("0x36d", "PasG"),
        Math[_0x4fba("0x343", "TB@7")](
          Math[_0x4fba("0x393", "(N&n")]() * 0x186a0
        ) *
          0x2 +
          0x1
      );
    } else {
      const _0x3b7b18 = {};
      _0x3b7b18[_0x4fba("0x8e", "NqZT")] = ![];
      mdui[_0x4fba("0x4af", "^se9")](
        "é”™è¯¯" +
          _0x4353fc[_0x4fba("0x1a3", "ItEp")] +
          ":\x20" +
          _0x4353fc[_0x4fba("0x1a7", "(N&n")],
        _0x4fba("0x523", "As#s"),
        function () {},
        _0x3b7b18
      );
    }
    window["localStorage"][_0x4fba("0x16f", "I3fK")](
      _0x4fba("0x3cc", "(N&n"),
      "{}"
    );
  }
}
async function tryDandanReg() {
  let _0x60b941 = await checkLogin(!![]);
  if (_0x60b941) {
    const _0x3d5406 = {};
    _0x3d5406[_0x4fba("0xd5", "y9W%")] = ![];
    mdui[_0x4fba("0x70", "ItEp")](
      _0x4fba("0x369", "*&)n"),
      function () {},
      _0x3d5406
    );
    return;
  }
  window[_0x4fba("0x25b", "TB@7")][_0x4fba("0x229", "qGJj")](
    "dandanLogin",
    "{}"
  );
  var _0xeae66e = mdui["$"];
  let _0x35314d = document[_0x4fba("0x1b", "AEok")](
    "div.mdui-dialog-content\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div:nth-child(1)\x20>\x20input"
  )[_0x4fba("0x159", "NqZT")];
  let _0x1b63a2 = document[_0x4fba("0x1c", "qGJj")](_0x4fba("0xff", "n$P$"))[
    _0x4fba("0x323", "wRyX")
  ];
  let _0x42fb91 = document[_0x4fba("0x331", "(9Gd")](_0x4fba("0x190", "erGJ"))[
    _0x4fba("0x159", "NqZT")
  ];
  let _0x46ebf3 = await importPublicKey(pubkey);
  let _0x59f5cb;
  if (window[_0x4fba("0x31a", "%wOF")][_0x4fba("0x19f", "ItEp")])
    _0x59f5cb = window[_0x4fba("0x3eb", "jbpp")][_0x4fba("0x2f0", "W%Dm")];
  let _0x4bcc4f = {};
  let _0x4c253e;
  if (window[_0x4fba("0x345", "wRyX")]["servercredentials3"]) {
    let _0x4729cd;
    try {
      _0x4729cd = await JSON[_0x4fba("0x306", "(N&n")](
        window[_0x4fba("0x14", "KcH@")][_0x4fba("0x43b", "RBak")]
      )[_0x4fba("0xcc", "U&qE")];
    } catch (_0x3d864a) {}
    _0x4bcc4f["df"] = 0x0;
    for (
      let _0x506f2c = 0x0;
      _0x506f2c < _0x4729cd[_0x4fba("0x1b3", "KcH@")];
      ++_0x506f2c
    ) {
      if (
        _0x4729cd[_0x506f2c][_0x4fba("0x51e", "Fu6J")] &&
        _0x4729cd[_0x506f2c][_0x4fba("0x33e", "%jf@")] >
          parseInt(_0x4bcc4f["df"])
      ) {
        _0x4bcc4f["df"] =
          _0x4729cd[_0x506f2c][_0x4fba("0x216", "(N&n")][
            _0x4fba("0x249", "qGJj")
          ]();
        _0x4bcc4f["pa"] = _0x4729cd[_0x506f2c]["Id"];
        _0x4c253e = _0x4729cd[_0x506f2c]["Id"];
        _0x4bcc4f["up"] = _0x4729cd[_0x506f2c][_0x4fba("0x314", "*&)n")];
        _0x4bcc4f["ti"] = _0x4729cd[_0x506f2c][_0x4fba("0x25c", "jbpp")];
      }
    }
    let _0x50cf19;
    _0x4bcc4f["zq"] = 0x0;
    for (
      let _0x17ed3e = 0x0;
      _0x17ed3e < window["localStorage"][_0x4fba("0x1e9", "Q%$b")];
      ++_0x17ed3e
    ) {
      if (
        window[_0x4fba("0x31f", "!U&I")]
          [_0x4fba("0x235", "clxK")](_0x17ed3e)
          [_0x4fba("0xd6", "PasG")](_0x4fba("0x418", "^qsO")) != -0x1
      ) {
        try {
          _0x50cf19 = await JSON[_0x4fba("0x3b4", "v)sw")](
            window[_0x4fba("0x25a", "%jf@")][
              window[_0x4fba("0x488", "*&)n")][_0x4fba("0x335", "Q9kX")](
                _0x17ed3e
              )
            ]
          );
        } catch (_0xb4af07) {}
        if (
          _0x50cf19[_0x4fba("0x2c", "clxK")] > parseInt(_0x4bcc4f["zq"]) &&
          _0x50cf19["ServerId"] == _0x4bcc4f["pa"]
        ) {
          _0x4bcc4f["zq"] =
            _0x50cf19[_0x4fba("0x1ca", "%jf@")][_0x4fba("0x9", "v)sw")]();
          _0x4bcc4f["re"] = _0x50cf19["Id"];
          _0x4bcc4f["ia"] = _0x50cf19[_0x4fba("0x318", "I3fK")];
          _0x4bcc4f[_0x4fba("0x397", "5hYI")] =
            _0x50cf19[_0x4fba("0xb0", "ItEp")][_0x4fba("0x514", "5hYI")][
              _0x4fba("0x4eb", "U&qE")
            ]();
        }
      }
    }
  }
  const _0x1b6bf9 = {};
  _0x1b6bf9[_0x4fba("0x5a", "1%QJ")] = _0x35314d;
  _0x1b6bf9[_0x4fba("0x3c3", "y9W%")] = _0x1b63a2;
  _0x1b6bf9["email"] = _0x42fb91;
  _0x1b6bf9[_0x4fba("0x1e1", "L3O8")] = _0x4c253e;
  let _0x4a937b = _0x1b6bf9;
  for (let _0x3b33af in _0x4bcc4f) {
    _0x4a937b[_0x3b33af] = _0x4bcc4f[_0x3b33af];
  }
  for (let _0x2dbbd9 in _0x4a937b) {
    _0x4a937b[_0x2dbbd9] = await encryptDataWithPublicKey(
      _0x4a937b[_0x2dbbd9],
      _0x46ebf3
    );
    _0x4a937b[_0x2dbbd9] = await arrayBufferToString(_0x4a937b[_0x2dbbd9]);
  }
  let _0x571b08 = parseInt(
    new Date()[_0x4fba("0x446", "DyM6")]() / 0x3e8 + 0x1e
  );
  let _0x347b59 = new TextEncoder()[_0x4fba("0x22b", "k9!T")](
    _0x4fba("0x53", "Q9kX") + _0x571b08 + "/api/v2/register"
  );
  let _0x2ac71e = md5[_0x4fba("0x427", "xR4l")](_0x347b59);
  _0x2ac71e = btoa(
    String[_0x4fba("0x4a9", "Y$yI")][_0x4fba("0x20b", "wRyX")](
      null,
      new Uint8Array(_0x2ac71e)
    )
  )
    [_0x4fba("0x2f", "!U&I")](/=/g, "")
    [_0x4fba("0x16b", "Y$yI")](/\+/g, "-")
    [_0x4fba("0x237", "amX8")](/\//g, "_");
  const _0x466de7 = {};
  _0x466de7[_0x4fba("0x464", "NM[R")] = _0x4fba("0x3d7", "(N&n");
  const _0x2921c9 = {};
  _0x2921c9[_0x4fba("0x2af", "PasG")] = JSON["stringify"](_0x4a937b);
  _0x2921c9[_0x4fba("0x265", "clxK")] = _0x4fba("0x7e", "wRyX");
  _0x2921c9[_0x4fba("0x387", "v)sw")] = _0x466de7;
  let _0x56b8fc = await fetch(
    _0x4fba("0xb6", "KOQw") + _0x571b08 + _0x4fba("0x139", "KcH@") + _0x2ac71e,
    _0x2921c9
  );
  _0x56b8fc = await _0x56b8fc[_0x4fba("0x2e8", "%wOF")]();
  if (_0x56b8fc[_0x4fba("0x2a0", "wRyX")] == !![]) {
    window[_0x4fba("0x3f8", "X39p")][_0x4fba("0x373", "uRDj")](
      _0x4fba("0x495", "Fu6J"),
      JSON[_0x4fba("0x491", "amX8")](_0x56b8fc)
    );
    const _0x5db9b3 = {};
    _0x5db9b3[_0x4fba("0x437", "1%QJ")] = ![];
    mdui[_0x4fba("0x41d", "uRDj")](
      _0x4fba("0x195", "*&)n") +
        _0x56b8fc[_0x4fba("0x1f3", "ItEp")] +
        _0x4fba("0x2b4", "clxK") +
        _0x56b8fc[_0x4fba("0x414", "U&qE")] +
        _0x4fba("0x3b9", "As#s"),
      _0x4fba("0x10f", "!U&I"),
      function () {},
      _0x5db9b3
    );
    window[_0x4fba("0x88", "PasG")][_0x4fba("0x431", "(N&n")](
      _0x4fba("0x236", "n$P$"),
      Math[_0x4fba("0x215", "W%Dm")](
        Math[_0x4fba("0x2a", "NHUB")]() * 0x186a0
      ) * 0x2
    );
  } else {
    if (_0x56b8fc[_0x4fba("0x3a2", "1%QJ")] == 0x1bf52) {
      const _0x42afdc = {};
      _0x42afdc[_0x4fba("0x1eb", "Fu6J")] = ![];
      mdui[_0x4fba("0x41e", "KOQw")](
        _0x4fba("0x1ec", "Y$yI") + _0x56b8fc[_0x4fba("0x42", "ItEp")],
        _0x4fba("0x4b8", "jbpp"),
        function () {},
        _0x42afdc
      );
      window[_0x4fba("0x202", "T)!8")][_0x4fba("0x499", "X39p")](
        _0x4fba("0x236", "n$P$"),
        Math["floor"](Math[_0x4fba("0x2e5", "*&)n")]() * 0x186a0) * 0x2 + 0x1
      );
    } else if (_0x56b8fc[_0x4fba("0x1c0", "%jf@")] == 0x1d4b42) {
      const _0x5c0688 = {};
      _0x5c0688[_0x4fba("0x9b", "wutz")] = ![];
      mdui["alert"](
        _0x4fba("0x1f0", "ePv1") + _0x56b8fc[_0x4fba("0x4b2", "TB@7")],
        "è®¾å¤‡è¢«ç¦æ­¢ä½¿ç”¨å¼¹å¹•æœåŠ¡",
        function () {},
        _0x5c0688
      );
      window[_0x4fba("0x294", "I3fK")]["setItem"](
        "dandanStatus",
        Math[_0x4fba("0x3fc", "KOQw")](
          Math[_0x4fba("0x78", "(9Gd")]() * 0x186a0
        ) *
          0x2 +
          0x1
      );
    } else {
      const _0x553fb4 = {};
      _0x553fb4[_0x4fba("0x3ec", "n$P$")] = ![];
      mdui[_0x4fba("0x60", "clxK")](
        "é”™è¯¯" +
          _0x56b8fc[_0x4fba("0x1b5", "I3fK")] +
          ":\x20" +
          _0x56b8fc[_0x4fba("0x480", "clxK")],
        _0x4fba("0xf1", "uRDj"),
        function () {},
        _0x553fb4
      );
    }
    window[_0x4fba("0x133", "W%Dm")][_0x4fba("0x23", "KcH@")](
      _0x4fba("0x409", "^qsO"),
      "{}"
    );
  }
}
function initSenderButton() {
  var _0x49d958 = mdui["$"];
  if (document["getElementById"](_0x4fba("0x41f", "NM[R")) != undefined) return;
  var _0x4ec25b = document[_0x4fba("0x26f", "NqZT")](_0x4fba("0x26d", "y9W%"));
  _0x4ec25b[_0x4fba("0xf0", "wRyX")] = _0x4fba("0xfe", "I3fK");
  _0x4ec25b[_0x4fba("0x194", "RBak")](
    _0x4fba("0x10b", "wRyX"),
    _0x4fba("0x1cc", "v)sw")
  );
  _0x4ec25b[_0x4fba("0x194", "RBak")]("id", _0x4fba("0x510", "ItEp"));
  _0x4ec25b[_0x4fba("0x169", "clxK")] =
    "<button\x20class=\x22mdui-textfield-icon\x20mdui-btn\x20mdui-btn-icon\x22><i\x20class=\x22md-icon\x20\x20material-icons\x22\x20onclick=\x22checkLogin()\x22\x20>send</i></button>\x20<input\x20class=\x22mdui-textfield-input\x22\x20id=\x22danmakuText\x22\x20type=\x22text\x22\x20placeholder=\x22\x20\x20åœ¨è¿™é‡Œå‘é€å¼¹å¹•\x22/>\x20<button\x20class=\x22mdui-textfield-close\x20mdui-btn\x20mdui-btn-icon\x22\x20onclick=\x22trySendDanmaku()\x22\x20style=\x22margin-right:42px!important\x22><i\x20class=\x22md-icon\x20\x20material-icons\x22>check</i></button>\x20\x20<button\x20class=\x22mdui-textfield-close\x20mdui-btn\x20mdui-btn-icon\x22><i\x20class=\x22md-icon\x20\x20material-icons\x22>close</i></button>";
  _0x49d958(_0x4fba("0x484", "jbpp"))
    [_0x4fba("0x177", "wutz")](_0x4fba("0x379", "amX8"))[0x0]
    [_0x4fba("0x289", "X39p")](_0x4ec25b);
  document["querySelector"](_0x4fba("0x4a0", "jbpp"))[_0x4fba("0x4f2", "W%Dm")](
    _0x4fba("0x2e4", "AEok"),
    updateCommentSend
  );
  var _0x49d958 = mdui["$"];
  _0x49d958(_0x4fba("0x4f7", "L3O8"))["on"](
    _0x4fba("0x11d", "As#s"),
    function () {
      mdui[_0x4fba("0xb4", "Q%$b")](
        _0x4fba("0x346", "qGJj"),
        function (_0x32a463) {
          document[_0x4fba("0x445", "yEI%")](_0x4fba("0x339", "^se9"))[
            _0x4fba("0x509", "I3fK")
          ] = _0x32a463;
          commentSend = _0x32a463;
          trySendDanmaku();
        },
        function (_0x32b307) {},
        {
          history: ![],
          confirmText: "å‘é€",
          cancelText: "å–æ¶ˆ",
          defaultValue:
            document[_0x4fba("0x3d1", "PasG")]("#danmakuText")[
              _0x4fba("0x381", "W%Dm")
            ],
        }
      );
    }
  );
}
function updateCommentSend() {
  if (
    document["querySelector"](_0x4fba("0x32a", "W%Dm"))[_0x4fba("0x40", "qGJj")]
  )
    commentSend = document[_0x4fba("0x2d", "xR4l")](_0x4fba("0x1ff", "w!!m"))[
      _0x4fba("0x230", "*&)n")
    ];
}
async function trySendDanmaku() {
  let _0x5b438b = await checkLogin(!![]);
  if (_0x5b438b) if (!_0x5b438b) return;
  if (!episodeId) {
    const _0x530739 = {};
    _0x530739[_0x4fba("0x64", "(9Gd")] = _0x4fba("0x525", "DyM6");
    mdui[_0x4fba("0x114", "As#s")](_0x530739);
    return;
  }
  var _0x1afa69 = mdui["$"];
  let _0x280e58 = commentSend;
  if (commentSend == "") return;
  if (isWeb)
    video_container = document[_0x4fba("0x113", "L3O8")](
      _0x4fba("0x474", "NM[R")
    );
  if (isPC)
    video_container = document[_0x4fba("0x445", "yEI%")](
      _0x4fba("0x4b4", "^se9")
    );
  let _0xf7f9d2 = document[_0x4fba("0x3fd", "I3fK")](_0x4fba("0xac", "%jf@"))[
    _0x4fba("0x500", "k9!T")
  ][_0x4fba("0x1d9", "NqZT")](":");
  let _0x31dc5e = 0x0;
  for (
    let _0x1f8c61 = 0x0;
    _0x1f8c61 < _0xf7f9d2[_0x4fba("0x9a", "NM[R")];
    ++_0x1f8c61
  ) {
    _0x31dc5e +=
      0x3c ** _0x1f8c61 *
      parseInt(_0xf7f9d2[_0xf7f9d2[_0x4fba("0x8", "yEI%")] - _0x1f8c61 - 0x1]);
  }
  const _0x2372a9 = {};
  _0x2372a9[_0x4fba("0x333", "Q%$b")] = _0x31dc5e;
  _0x2372a9[_0x4fba("0x38c", "I3fK")] = "0";
  _0x2372a9[_0x4fba("0x7", "RBak")] = "0";
  _0x2372a9[_0x4fba("0x310", "(9Gd")] = _0x280e58;
  let _0xf058d2 = _0x2372a9;
  let _0x14f03c = await importPublicKey(pubkey);
  for (let _0xe36684 in _0xf058d2) {
    _0xf058d2[_0xe36684] = await encryptDataWithPublicKey(
      _0xf058d2[_0xe36684],
      _0x14f03c
    );
    _0xf058d2[_0xe36684] = await arrayBufferToString(_0xf058d2[_0xe36684]);
  }
  let _0xdff545 = JSON[_0x4fba("0x105", "X39p")](
    window[_0x4fba("0x207", "amX8")][_0x4fba("0x364", "NqZT")](
      _0x4fba("0x10", "*&)n")
    )
  );
  let _0x2ab9e1 = _0x4fba("0x54", "ePv1") + episodeId;
  let _0x37dd20 = parseInt(new Date()["getTime"]() / 0x3e8 + 0x1e);
  let _0x73471b = new TextEncoder()[_0x4fba("0x374", "OE1m")](
    _0x4fba("0x462", "qGJj") + _0x37dd20 + _0x2ab9e1
  );
  let _0x2d0a40 = md5[_0x4fba("0x1fc", "AEok")](_0x73471b);
  _0x2d0a40 = btoa(
    String[_0x4fba("0x44c", "@p8]")][_0x4fba("0x234", "5hYI")](
      null,
      new Uint8Array(_0x2d0a40)
    )
  )
    ["replace"](/=/g, "")
    [_0x4fba("0x178", "wRyX")](/\+/g, "-")
    [_0x4fba("0x91", "(N&n")](/\//g, "_");
  const _0x101336 = {};
  _0x101336[_0x4fba("0x483", "v)sw")] = _0x4fba("0x4e9", "Q%$b");
  _0x101336["Authorization"] = _0x4fba("0x1b6", "I3fK") + _0xdff545["token"];
  const _0x5bdef0 = {};
  _0x5bdef0[_0x4fba("0x34b", "qGJj")] =
    JSON[_0x4fba("0x7f", "5hYI")](_0xf058d2);
  _0x5bdef0[_0x4fba("0xf2", "wutz")] = _0x4fba("0xdf", "erGJ");
  _0x5bdef0[_0x4fba("0x1f9", "*&)n")] = _0x101336;
  let _0x11ac49 = await fetch(
    _0x4fba("0x404", "^qsO") +
      _0x2ab9e1 +
      _0x4fba("0x440", "5hYI") +
      _0x37dd20 +
      _0x4fba("0x3cd", "NqZT") +
      _0x2d0a40,
    _0x5bdef0
  );
  _0x11ac49 = await _0x11ac49[_0x4fba("0x2c9", "amX8")]();
  if (_0x11ac49[_0x4fba("0x449", "NqZT")] == !![]) {
    const _0x50b6f3 = {};
    _0x50b6f3[_0x4fba("0x6e", "Y$yI")] = _0x4fba("0x3e7", "As#s");
    mdui[_0x4fba("0xb2", "wutz")](_0x50b6f3);
    const _0x349ff2 = {};
    _0x349ff2[_0x4fba("0x13c", "OE1m")] = danmakuSize + "px";
    _0x349ff2[_0x4fba("0x4bc", "Q%$b")] =
      danmakuSize + _0x4fba("0x1b0", "n$P$");
    _0x349ff2[_0x4fba("0x1a6", "y9W%")] = _0x4fba("0x312", "w!!m");
    _0x349ff2[_0x4fba("0x2f4", "wRyX")] = _0x4fba("0x1d8", "5hYI");
    _0x349ff2[_0x4fba("0x4db", "erGJ")] = "#000";
    _0x349ff2[_0x4fba("0x453", "Q9kX")] = _0x4fba("0x3ca", "AEok");
    _0x349ff2[_0x4fba("0x425", "clxK")] = 0x2;
    const _0x48c957 = {};
    _0x48c957[_0x4fba("0x1f1", "y9W%")] = commentSend;
    _0x48c957[_0x4fba("0x334", "Fu6J")] = _0x4fba("0x13e", "n$P$");
    _0x48c957[_0x4fba("0x4a7", "TB@7")] = _0x349ff2;
    danmaku = danmaku[_0x4fba("0x2e", "T)!8")](_0x48c957);
    danmaku[_0x4fba("0x134", "KcH@")]();
    commentSend = "";
    document["querySelector"](_0x4fba("0x4f7", "L3O8"))[
      _0x4fba("0x20a", "1%QJ")
    ] = "";
  } else {
    const _0x1b85df = {};
    _0x1b85df[_0x4fba("0x173", "clxK")] =
      _0x4fba("0x30c", "KcH@") + _0x11ac49[_0x4fba("0x526", "W%Dm")];
    mdui[_0x4fba("0x52", "T)!8")](_0x1b85df);
  }
}
async function checkLogin(_0x46f0a8 = ![]) {
  let _0x1f5ce7 = null;
  try {
    _0x1f5ce7 = JSON["parse"](
      window[_0x4fba("0x50f", "ePv1")][_0x4fba("0x42f", "k9!T")](
        _0x4fba("0x270", "I3fK")
      )
    );
  } catch (_0x57c44e) {}
  if (!_0x1f5ce7 || !_0x1f5ce7[_0x4fba("0x2f9", "Q%$b")]) {
    const _0x48dd9e = {};
    _0x48dd9e[_0x4fba("0x367", "clxK")] = ![];
    if (!_0x46f0a8)
      mdui["alert"](
        _0x4fba("0x2d2", "%wOF"),
        function () {
          initDandanLoginButton();
        },
        _0x48dd9e
      );
    return ![];
  }
  let _0x4647a1 = new Date(_0x1f5ce7[_0x4fba("0x2c1", "Q9kX")])[
    _0x4fba("0x511", "k9!T")
  ]();
  if (_0x4647a1 < Date[_0x4fba("0x366", "!U&I")]()) {
    const _0x4b6dfa = {};
    _0x4b6dfa[_0x4fba("0x74", "@p8]")] = ![];
    if (!_0x46f0a8)
      mdui["alert"](
        _0x4fba("0x363", "AEok"),
        function () {
          initDandanLoginButton();
        },
        _0x4b6dfa
      );
    return ![];
  }
  try {
    let _0x11e92d = parseInt(
      new Date()[_0x4fba("0x2db", "KcH@")]() / 0x3e8 + 0x1e
    );
    let _0x473c29 = new TextEncoder()["encode"](
      "ddplayandroidv3" + _0x11e92d + _0x4fba("0x47", "qGJj")
    );
    let _0x5103f9 = md5[_0x4fba("0x46e", "qGJj")](_0x473c29);
    _0x5103f9 = btoa(
      String[_0x4fba("0x3aa", "OE1m")][_0x4fba("0x48f", "!U&I")](
        null,
        new Uint8Array(_0x5103f9)
      )
    )
      [_0x4fba("0xee", "n$P$")](/=/g, "")
      [_0x4fba("0x8f", "KcH@")](/\+/g, "-")
      [_0x4fba("0xee", "n$P$")](/\//g, "_");
    const _0xf31f02 = {};
    _0xf31f02[_0x4fba("0x439", "Fu6J")] = _0x4fba("0x4ee", "PasG");
    _0xf31f02[_0x4fba("0x4f0", "y9W%")] =
      _0x4fba("0x192", "y9W%") + _0x1f5ce7[_0x4fba("0x2ba", "y9W%")];
    const _0x8aeb99 = {};
    _0x8aeb99[_0x4fba("0x2c6", "k9!T")] = _0x4fba("0x361", "PasG");
    _0x8aeb99[_0x4fba("0xe5", "!U&I")] = _0xf31f02;
    let _0x135f7c = await fetch(
      "https://danmaku.movie.kg/api/v2/login/renew?expires=" +
        _0x11e92d +
        "&md5=" +
        _0x5103f9,
      _0x8aeb99
    );
    _0x135f7c = await _0x135f7c[_0x4fba("0x469", "NHUB")]();
    if (_0x135f7c["success"] == !![]) {
      window[_0x4fba("0x3eb", "jbpp")][_0x4fba("0x3ff", "%jf@")](
        _0x4fba("0x238", "KcH@"),
        JSON[_0x4fba("0x17a", "DyM6")](_0x135f7c)
      );
    } else {
      const _0x4d2ffe = {};
      _0x4d2ffe[_0x4fba("0xd5", "y9W%")] = ![];
      if (!_0x46f0a8)
        mdui[_0x4fba("0x228", "U&qE")](
          _0x4fba("0x3f3", "Fu6J"),
          function () {
            initDandanLoginButton();
          },
          _0x4d2ffe
        );
      return ![];
    }
  } catch (_0x415ca6) {}
  return !![];
}
function initButton() {
  var _0x39dadc = mdui["$"];
  if (document[_0x4fba("0xd8", "T)!8")](_0x4fba("0x479", "ePv1")) != undefined)
    return;
  var _0x346e44 = document[_0x4fba("0x405", "X39p")](_0x4fba("0xbe", "OE1m"))[
    _0x4fba("0xab", "v)sw")
  ][0x0][_0x4fba("0x28e", "NM[R")][0x0];
  try {
    if (
      document[_0x4fba("0x113", "L3O8")](_0x4fba("0x15", "As#s")) != null ||
      document[_0x4fba("0x481", "*&)n")](_0x4fba("0x2e7", "ItEp")) != null
    ) {
      isMusic = !![];
    }
  } catch (_0xc01fc6) {}
  var _0x2d178a = document[_0x4fba("0x84", "5hYI")]("button");
  _0x2d178a[_0x4fba("0x293", "uRDj")] =
    "btnGuide\x20paper-icon-button-light\x20icon-button-conditionalfocuscolor";
  _0x2d178a[_0x4fba("0x26b", "X39p")]("is", _0x4fba("0x51d", "X39p"));
  if (!isMusic)
    _0x2d178a[_0x4fba("0x3bc", "yEI%")](
      _0x4fba("0x2d1", "wRyX"),
      _0x4fba("0x362", "Y$yI")
    );
  if (isMusic)
    _0x2d178a[_0x4fba("0x5c", "KOQw")](
      _0x4fba("0x8a", "KOQw"),
      _0x4fba("0x189", "k9!T")
    );
  _0x2d178a[_0x4fba("0x194", "RBak")]("id", _0x4fba("0x326", "5hYI"));
  _0x2d178a[_0x4fba("0x1ef", "ItEp")](
    _0x4fba("0x222", "v)sw"),
    _0x4fba("0x290", "X39p")
  );
  if (isMusic) _0x2d178a[_0x4fba("0x3ce", "RBak")] = _0x4fba("0x338", "xR4l");
  let _0x14246b = document[_0x4fba("0xa6", "xR4l")](_0x4fba("0x150", "erGJ"));
  if (danmakuShow)
    _0x14246b[_0x4fba("0x4b", "OE1m")] = _0x4fba("0x50e", "RBak");
  else _0x14246b[_0x4fba("0xd4", "AEok")] = _0x4fba("0x4ab", "TB@7");
  if (!isMusic) _0x2d178a[_0x4fba("0x2b5", "(N&n")] = _0x4fba("0x41", "Q9kX");
  if (isMusic) _0x346e44[_0x4fba("0xd", "*&)n")](_0x2d178a);
  if (!isMusic)
    _0x39dadc(_0x4fba("0x470", "KcH@"))
      [_0x4fba("0x4a3", "w!!m")](":last-child")[0x0]
      [_0x4fba("0x289", "X39p")](_0x14246b);
  if (!isMusic)
    _0x39dadc(_0x4fba("0x360", "X39p"))
      [_0x4fba("0x2c7", "Q%$b")](_0x4fba("0x227", "W%Dm"))[0x0]
      [_0x4fba("0x3a0", "^se9")](_0x2d178a);
  if (!isMusic) {
    initSenderButton();
  }
}
function message(_0x4026de) {
  var _0x247b7d = document[_0x4fba("0x18c", "W%Dm")]("HTMLEvents");
  _0x247b7d[_0x4fba("0x319", "*&)n")](_0x4fba("0x2a3", "TB@7"), !![], !![]);
  var _0x57768c = document[_0x4fba("0x297", "xR4l")](_0x4fba("0x2fb", "n$P$"));
  _0x57768c[_0x4fba("0xde", "wRyX")](_0x4fba("0x162", "RBak"), !![], !![]);
  var _0x270d93 = document[_0x4fba("0x297", "xR4l")](_0x4fba("0x2ab", "y9W%"));
  _0x270d93[_0x4fba("0x17d", "xR4l")](_0x4fba("0x48e", "amX8"), !![], !![]);
  var _0x2a4a93 = document[_0x4fba("0x26e", "As#s")](_0x4fba("0x27f", "U&qE"));
  _0x2a4a93[_0x4fba("0x432", "!U&I")](_0x4fba("0x3de", "KOQw"), !![], !![]);
  if (
    _0x4026de[_0x4fba("0x357", "AEok")][_0x4fba("0x413", "xR4l")] ==
    _0x4fba("0x48a", "%wOF")
  ) {
    switch (
      _0x4026de[_0x4fba("0x111", "amX8")][_0x4fba("0x23b", "@p8]")][
        _0x4fba("0x30", "KcH@")
      ]
    ) {
      case "time-pos":
        document[_0x4fba("0x475", "w!!m")](_0x4fba("0x82", "v)sw"))[
          _0x4fba("0x181", "ePv1")
        ] =
          _0x4026de[_0x4fba("0x34", "jbpp")][_0x4fba("0x46c", "PasG")][
            _0x4fba("0x159", "NqZT")
          ];
        break;
      case _0x4fba("0x4e", "T)!8"):
        document[_0x4fba("0x4dd", "^se9")](_0x4fba("0x34c", "W%Dm"))[
          _0x4fba("0x21f", "uRDj")
        ] =
          _0x4026de[_0x4fba("0x68", "As#s")][_0x4fba("0x33f", "ePv1")]["value"];
        break;
      case _0x4fba("0x508", "T)!8"):
        if (danmaku != null) {
          try {
            danmaku[_0x4fba("0xbb", "%wOF")]();
            danmaku["destroy"]();
          } catch (_0x1be45c) {}
          is_danmaku_show = ![];
        }
      case _0x4fba("0x2cd", "DyM6"):
        document[_0x4fba("0x1ee", "W%Dm")](
          "embed[class=\x27mpv-videoPlayer\x27]"
        )[_0x4fba("0x291", "NHUB")](_0x57768c);
        break;
      case _0x4fba("0x168", "Q9kX"):
        if (
          _0x4026de[_0x4fba("0x3c4", "KcH@")][_0x4fba("0x32e", "Q%$b")]["value"]
        )
          document[_0x4fba("0x1d3", "Q%$b")](_0x4fba("0x2b", "ItEp"))[
            _0x4fba("0x515", "!U&I")
          ](_0x270d93);
        else
          document[_0x4fba("0x113", "L3O8")](_0x4fba("0x138", "TB@7"))[
            _0x4fba("0x2c5", "amX8")
          ](_0x2a4a93);
        break;
    }
  }
}
function actionFunction() {
  if (
    isAndroidiOS &&
    typeof document[_0x4fba("0x520", "L3O8")] == _0x4fba("0x51", "(N&n")
  )
    document["playbackRate"] = 0x1;
  loadLocalStorage();
  if (danmaku != null) {
    try {
      danmaku[_0x4fba("0x348", "y9W%")]();
      danmaku[_0x4fba("0x45a", "%wOF")]();
    } catch (_0x2a25fd) {}
    is_danmaku_show = ![];
  }
  var _0x4ef44e = ![];
  danmaku = null;
  episode_info = null;
  selecAnime_id = 0x0;
  if (
    document[_0x4fba("0x128", "Q%$b")](_0x4fba("0xb8", "!U&I")) == undefined
  ) {
    initButton();
  }
  if (isWeb)
    video_container = document[_0x4fba("0xe2", "ePv1")](
      _0x4fba("0x2d7", "qGJj")
    );
  if (isPC) {
    video_container = document[_0x4fba("0x3e2", "uRDj")](
      _0x4fba("0x365", "U&qE")
    );
    document[_0x4fba("0xa2", "!U&I")](_0x4fba("0x35b", "y9W%"))[
      _0x4fba("0x305", "As#s")
    ] = 0x1;
    document[_0x4fba("0x255", "KOQw")](_0x4fba("0xf", "qGJj"))[
      _0x4fba("0x3b0", "Fu6J")
    ] = 0x0;
    try {
      video_container[_0x4fba("0xa1", "v)sw")](
        _0x4fba("0x131", "KcH@"),
        message
      );
    } catch (_0x2689dc) {}
    video_container[_0x4fba("0x77", "Q%$b")](_0x4fba("0x3be", "5hYI"), message);
  }
  if (isAndroidiOS) video_container = document;
  var _0x669d65 = document[_0x4fba("0x3d1", "PasG")](_0x4fba("0x3c8", "I3fK"))[
    _0x4fba("0x493", "L3O8")
  ];
  var _0x42860f = _0x669d65;
  if (_0x669d65) {
    _0x42860f = _0x669d65;
  }
  selecAnime_id = 0x0;
  mdui[_0x4fba("0x167", "NM[R")](
    _0x4fba("0x0", "Fu6J"),
    function (_0x29c0ac) {
      _0x42860f = _0x29c0ac;
      let _0x2ba95a = document[_0x4fba("0x148", "clxK")](
        _0x4fba("0x183", "clxK")
      );
      if (_0x2ba95a) {
        _0x2ba95a = _0x2ba95a[_0x4fba("0x448", "As#s")];
        newepisode = _0x2ba95a[_0x4fba("0x471", "clxK")](
          new RegExp(_0x4fba("0x50d", "qGJj"))
        );
        if (newepisode != null) {
          newepisode = newepisode[0x0];
          newepisode = newepisode[_0x4fba("0x47b", "y9W%")](0x1);
        }
      } else {
        newepisode = _0x4fba("0x274", "As#s");
      }
      var _0x3288c5;
      let _0x27a976 = parseInt(
        new Date()[_0x4fba("0x6b", "TB@7")]() / 0x3e8 + 0x1e
      );
      let _0x1901df = new TextEncoder()[_0x4fba("0x243", "L3O8")](
        _0x4fba("0x501", "^se9") + _0x27a976 + _0x4fba("0x29e", "!U&I")
      );
      let _0x5c0dc0 = md5[_0x4fba("0x22c", "L3O8")](_0x1901df);
      _0x5c0dc0 = btoa(
        String[_0x4fba("0x3c9", "L3O8")][_0x4fba("0x49c", "(9Gd")](
          null,
          new Uint8Array(_0x5c0dc0)
        )
      )
        ["replace"](/=/g, "")
        [_0x4fba("0x2f", "!U&I")](/\+/g, "-")
        [_0x4fba("0x35c", "U&qE")](/\//g, "_");
      if (!_0x4ef44e) {
        _0x3288c5 = _0x3288c5 =
          _0x4fba("0x16e", "uRDj") +
          _0x42860f +
          _0x4fba("0x2f2", "w!!m") +
          _0x4fba("0x2eb", "Q%$b") +
          _0x27a976 +
          _0x4fba("0x428", "k9!T") +
          _0x5c0dc0;
      } else {
        _0x3288c5 =
          _0x4fba("0xf7", "wRyX") +
          _0x42860f +
          _0x4fba("0x129", "U&qE") +
          newepisode +
          _0x4fba("0x4c8", "*&)n") +
          _0x27a976 +
          _0x4fba("0x385", "xR4l") +
          _0x5c0dc0;
      }
      var _0x145df9 = new XMLHttpRequest();
      _0x145df9[_0x4fba("0xc1", "xR4l")]("GET", _0x3288c5, !![]);
      _0x145df9[_0x4fba("0x252", "T)!8")] = function (_0x17a437) {
        var _0x2f38c8 = JSON[_0x4fba("0x13a", "5hYI")](
          _0x145df9[_0x4fba("0x407", "^se9")]
        );
        var _0x3ab346 = list2string(_0x2f38c8);
        const _0x21c616 = {};
        _0x21c616[_0x4fba("0x1d7", "Fu6J")] = "å–æ¶ˆ";
        animeSelect = new mdui[_0x4fba("0x20e", "As#s")]({
          history: ![],
          title: "é€‰æ‹©ç‰‡å",
          content: _0x4fba("0x40a", "NM[R") + _0x3ab346,
          buttons: [
            _0x21c616,
            {
              text: "ç¡®è®¤",
              onClick: function () {
                selecAnime_id = document[_0x4fba("0x2a2", "DyM6")](
                  _0x4fba("0x408", "clxK")
                )[_0x4fba("0x4a5", "n$P$")];
                let _0x5edba5 = document[_0x4fba("0x1d3", "Q%$b")](
                  _0x4fba("0xa7", "As#s")
                );
                if (_0x5edba5) {
                  _0x5edba5 = _0x5edba5[_0x4fba("0x28a", "(9Gd")];
                  newepisode = _0x5edba5[_0x4fba("0x295", "KOQw")](
                    new RegExp(_0x4fba("0x1c7", "U&qE"))
                  );
                  if (newepisode != null) {
                    newepisode = newepisode[0x0];
                    newepisode = newepisode[_0x4fba("0x1b4", "L3O8")](0x1);
                  }
                } else {
                  newepisode = _0x4fba("0x25f", "qGJj");
                }
                newepisode_lists_str = ep2string(
                  _0x2f38c8[_0x4fba("0x21c", "I3fK")][selecAnime_id][
                    _0x4fba("0x100", "@p8]")
                  ],
                  parseInt(newepisode)
                );
                const _0x353064 = {};
                _0x353064[_0x4fba("0x447", "L3O8")] = "å–æ¶ˆ";
                const _0x147246 = {};
                _0x147246[_0x4fba("0x30f", "OE1m")] = "ç¡®è®¤";
                _0x147246[_0x4fba("0x141", "amX8")] = function () {
                  animeSelect[_0x4fba("0x2c0", "v)sw")]();
                  newepisode = document[_0x4fba("0x191", "k9!T")](
                    _0x4fba("0x415", "n$P$")
                  )[_0x4fba("0x313", "^se9")];
                  newepisode = parseInt(newepisode);
                  episodeId =
                    _0x2f38c8[_0x4fba("0x174", "Y$yI")][selecAnime_id][
                      _0x4fba("0x489", "wRyX")
                    ][newepisode][_0x4fba("0x1f4", "amX8")];
                  animeId =
                    _0x2f38c8[_0x4fba("0x4d0", "uRDj")][selecAnime_id][
                      _0x4fba("0x33a", "clxK")
                    ];
                  getbangumiTv();
                  if (
                    _0x2f38c8[_0x4fba("0x87", "TB@7")][selecAnime_id][
                      _0x4fba("0x4c5", "X39p")
                    ] == _0x4fba("0x27b", "Y$yI")
                  ) {
                    episode_info =
                      _0x4fba("0x112", "wRyX") +
                      _0x2f38c8[_0x4fba("0x1dd", "L3O8")][selecAnime_id][
                        _0x4fba("0x102", "KcH@")
                      ] +
                      _0x4fba("0x34d", "w!!m") +
                      _0x2f38c8["animes"][selecAnime_id][
                        _0x4fba("0x95", "uRDj")
                      ][newepisode][_0x4fba("0x127", "n$P$")];
                  } else {
                    episode_info =
                      _0x4fba("0x260", "(9Gd") +
                      _0x2f38c8[_0x4fba("0x29c", "n$P$")][selecAnime_id][
                        _0x4fba("0x2b6", "OE1m")
                      ];
                  }
                  var _0x53388f = document[_0x4fba("0x26c", "%jf@")](
                    "[class=\x27videoOsdTitle\x27]"
                  );
                  if (_0x53388f) {
                    _0x53388f = _0x53388f[_0x4fba("0x416", "%wOF")];
                    var _0x5e29fe = 0x0;
                    try {
                      _0x5e29fe = /S([0-9]*)/gi[_0x4fba("0x240", "KcH@")](
                        _0x53388f
                      );
                    } catch (_0x4ac111) {}
                    if (_0x5e29fe != null) {
                      _0x5e29fe = _0x5e29fe[0x0];
                      _0x5e29fe = _0x5e29fe[_0x4fba("0x19a", "1%QJ")](0x1);
                    }
                    _0x5e29fe = parseInt(_0x5e29fe, 0xa);
                  }
                  let _0x4fcb61 = _0x669d65[_0x4fba("0x205", "@p8]")](
                    /ã€.*ã€‘/g,
                    ""
                  );
                  if (_0x5e29fe) _0x4fcb61 += _0x5e29fe;
                  let _0x1ac362 = {};
                  try {
                    _0x1ac362 = window["localStorage"][
                      _0x4fba("0x4e8", "yEI%")
                    ](_0x4fba("0x1ae", "%jf@"));
                    _0x1ac362 = JSON[_0x4fba("0xc0", "!U&I")](_0x1ac362);
                  } catch (_0x591149) {
                    _0x1ac362 = {};
                  }
                  if (!_0x1ac362) _0x1ac362 = {};
                  try {
                    _0x1ac362[_0x4fcb61] = _0x2f38c8[_0x4fba("0x3ba", "w!!m")][
                      selecAnime_id
                    ][_0x4fba("0x80", "NqZT")][_0x4fba("0xba", "KOQw")](
                      /ã€.*ã€‘/g,
                      ""
                    );
                    _0x1ac362 = JSON[_0x4fba("0x308", "KOQw")](_0x1ac362);
                    window[_0x4fba("0x488", "*&)n")][_0x4fba("0x257", "!U&I")](
                      "memDanmaku",
                      _0x1ac362
                    );
                  } catch (_0x4d11ad) {}
                  var _0x26694e = new XMLHttpRequest();
                  let _0x38b199 = "/api/v2/comment/" + episodeId;
                  let _0x148fc4 = parseInt(
                    new Date()[_0x4fba("0x384", "wutz")]() / 0x3e8 + 0x1e
                  );
                  let _0x1e7b0f = new TextEncoder()[_0x4fba("0x1e3", "Q9kX")](
                    "ddplayandroidv3" + _0x148fc4 + _0x38b199
                  );
                  let _0x300c45 = md5[_0x4fba("0x2ec", "*&)n")](_0x1e7b0f);
                  _0x300c45 = btoa(
                    String[_0x4fba("0x48b", "erGJ")][_0x4fba("0x15c", "clxK")](
                      null,
                      new Uint8Array(_0x300c45)
                    )
                  )
                    [_0x4fba("0x341", "NqZT")](/=/g, "")
                    [_0x4fba("0x91", "(N&n")](/\+/g, "-")
                    ["replace"](/\//g, "_");
                  let _0x657cb = !![];
                  try {
                    if (
                      episodeId[_0x4fba("0x518", "ItEp")](
                        _0x4fba("0x1d1", "n$P$")
                      ) != -0x1
                    ) {
                      try {
                        _0x657cb = ![];
                        goGetTencent(
                          episodeId[_0x4fba("0x204", "T)!8")](
                            _0x4fba("0x4fa", "OE1m"),
                            ""
                          )
                        );
                      } catch (_0xc4f0fc) {
                        _0x657cb = !![];
                      }
                    } else if (
                      episodeId[_0x4fba("0x2b7", "yEI%")](
                        _0x4fba("0x351", "KcH@")
                      ) != -0x1
                    ) {
                      try {
                        _0x657cb = ![];
                        goGetIqiyi(
                          episodeId["replace"](_0x4fba("0x2e6", "T)!8"), "")
                        );
                      } catch (_0x124366) {
                        _0x657cb = !![];
                      }
                    }
                  } catch (_0x4986f3) {
                    _0x657cb = !![];
                  }
                  if (_0x657cb) {
                    _0x26694e[_0x4fba("0x9d", "clxK")](
                      _0x4fba("0x34a", "@p8]"),
                      _0x4fba("0x3f1", "amX8") +
                        episodeId +
                        _0x4fba("0xeb", "Fu6J") +
                        (chConvert
                          ? _0x4fba("0x38e", "TB@7")
                          : _0x4fba("0x4bb", "w!!m")) +
                        _0x4fba("0x492", "yEI%") +
                        _0x148fc4 +
                        "&md5=" +
                        _0x300c45,
                      !![]
                    );
                    _0x26694e[_0x4fba("0xd1", "(9Gd")] = function (_0x1df107) {
                      var _0x3b85fd = JSON[_0x4fba("0xc5", "y9W%")](
                        _0x26694e[_0x4fba("0x1d5", "wutz")]
                      )[_0x4fba("0x1a", "uRDj")];
                      danmakuMaker(_0x3b85fd);
                    };
                    _0x26694e["send"]();
                  }
                };
                const _0x1e2389 = {};
                _0x1e2389["history"] = ![];
                _0x1e2389[_0x4fba("0x4c2", "KcH@")] = _0x4fba("0x97", "Fu6J");
                _0x1e2389[_0x4fba("0x1bf", "w!!m")] =
                  _0x4fba("0x28c", "ItEp") + newepisode_lists_str;
                _0x1e2389[_0x4fba("0x14c", "X39p")] = [_0x353064, _0x147246];
                episodeSelect = new mdui[_0x4fba("0x31c", "X39p")](_0x1e2389);
              },
            },
          ],
        });
      };
      _0x145df9[_0x4fba("0x61", "wRyX")] = function () {
        console[_0x4fba("0x226", "%wOF")](_0x4fba("0x4e6", "*&)n"));
      };
      _0x145df9[_0x4fba("0x218", "As#s")]();
    },
    function () {},
    { defaultValue: _0x42860f, destroyOnClosed: ![], history: ![] }
  );
}
async function actionFunctionInit() {
  loadLocalStorage();
  if (!danmakuShow) return;
  if (
    window[_0x4fba("0x5d", "@p8]")][_0x4fba("0x7b", "w!!m")]("dandanStatus")
  ) {
    if (
      window["localStorage"][_0x4fba("0x42f", "k9!T")]("dandanStatus") % 0x4 ==
      0x1
    ) {
      const _0x513529 = {};
      _0x513529[_0x4fba("0x2ca", "ePv1")] = ![];
      mdui[_0x4fba("0x4fd", "xR4l")](
        _0x4fba("0x48", "NHUB") + _0x4fba("0x57", "NM[R"),
        _0x4fba("0x29f", "uRDj"),
        function () {},
        _0x513529
      );
      window[_0x4fba("0x4ec", "As#s")]["setItem"](
        "dandanStatus",
        Math[_0x4fba("0x307", "X39p")](
          Math[_0x4fba("0x17e", "!U&I")]() * 0x186a0
        ) *
          0x2 +
          0x1
      );
      return;
    }
  }
  if (
    !window[_0x4fba("0x119", "Q9kX")][_0x4fba("0x2e0", "y9W%")](
      _0x4fba("0x137", "W%Dm")
    )
  ) {
    if (
      Math[_0x4fba("0x215", "W%Dm")](Math[_0x4fba("0x172", "RBak")]() * 0x14) <=
      0x2
    ) {
      let _0x23eff8;
      if (window[_0x4fba("0x202", "T)!8")][_0x4fba("0x1a4", "KcH@")])
        _0x23eff8 = window[_0x4fba("0x14", "KcH@")][_0x4fba("0x259", "OE1m")];
      let _0x2b768b = {};
      let _0x13631a;
      if (window[_0x4fba("0x4ec", "As#s")][_0x4fba("0x125", "erGJ")]) {
        let _0x1906f0;
        try {
          _0x1906f0 = await JSON["parse"](
            window[_0x4fba("0xfc", "(N&n")][_0x4fba("0x17f", "n$P$")]
          )[_0x4fba("0xd9", "w!!m")];
        } catch (_0x3fc4c1) {}
        _0x2b768b["df"] = 0x0;
        for (
          let _0x2f38fb = 0x0;
          _0x2f38fb < _0x1906f0[_0x4fba("0x1b9", "clxK")];
          ++_0x2f38fb
        ) {
          if (
            _0x1906f0[_0x2f38fb][_0x4fba("0x58", "I3fK")] &&
            _0x1906f0[_0x2f38fb]["DateLastAccessed"] > parseInt(_0x2b768b["df"])
          ) {
            _0x2b768b["df"] =
              _0x1906f0[_0x2f38fb][_0x4fba("0x41b", "^qsO")][
                _0x4fba("0x378", "T)!8")
              ]();
            _0x2b768b["pa"] = _0x1906f0[_0x2f38fb]["Id"];
            _0x13631a = _0x1906f0[_0x2f38fb]["Id"];
            _0x2b768b["up"] = _0x1906f0[_0x2f38fb][_0x4fba("0x43c", "W%Dm")];
            _0x2b768b["ti"] = _0x1906f0[_0x2f38fb][_0x4fba("0x1c2", "yEI%")];
          }
        }
        let _0x15a913;
        _0x2b768b["zq"] = 0x0;
        for (
          let _0x3bf2ab = 0x0;
          _0x3bf2ab <
          window[_0x4fba("0x31f", "!U&I")][_0x4fba("0x2cc", "DyM6")];
          ++_0x3bf2ab
        ) {
          if (
            window[_0x4fba("0xd2", "uRDj")]
              [_0x4fba("0x120", "n$P$")](_0x3bf2ab)
              ["indexOf"](_0x4fba("0xce", "NqZT")) != -0x1
          ) {
            try {
              _0x15a913 = await JSON[_0x4fba("0xb5", "NHUB")](
                window[_0x4fba("0x4ec", "As#s")][
                  window["localStorage"][_0x4fba("0x426", "DyM6")](_0x3bf2ab)
                ]
              );
            } catch (_0xaed43f) {}
            if (
              _0x15a913[_0x4fba("0x372", "amX8")] > parseInt(_0x2b768b["zq"]) &&
              _0x15a913[_0x4fba("0x13d", "!U&I")] == _0x2b768b["pa"]
            ) {
              _0x2b768b["zq"] =
                _0x15a913[_0x4fba("0x32", "X39p")][_0x4fba("0x249", "qGJj")]();
              _0x2b768b["re"] = _0x15a913["Id"];
              _0x2b768b["ia"] = _0x15a913[_0x4fba("0x4e1", "uRDj")];
              _0x2b768b["teu"] =
                _0x15a913[_0x4fba("0x50b", "*&)n")][_0x4fba("0x1f6", "OE1m")][
                  "toString"
                ]();
            }
          }
        }
      }
      const _0x16118e = {};
      _0x16118e[_0x4fba("0x327", "Y$yI")] = _0x13631a;
      let _0x212bf2 = _0x16118e;
      for (let _0x2ad3c4 in _0x2b768b) {
        _0x212bf2[_0x2ad3c4] = _0x2b768b[_0x2ad3c4];
      }
      let _0xc443de = await importPublicKey(pubkey);
      for (let _0x45c59f in _0x212bf2) {
        _0x212bf2[_0x45c59f] = await encryptDataWithPublicKey(
          _0x212bf2[_0x45c59f],
          _0xc443de
        );
        _0x212bf2[_0x45c59f] = await arrayBufferToString(_0x212bf2[_0x45c59f]);
      }
      let _0x32ce64 = parseInt(
        new Date()[_0x4fba("0x1bc", "NHUB")]() / 0x3e8 + 0x1e
      );
      let _0x2fc2ac = new TextEncoder()[_0x4fba("0x424", "w!!m")](
        _0x4fba("0x501", "^se9") + _0x32ce64 + _0x4fba("0x2e9", "v)sw")
      );
      let _0x5ed913 = md5[_0x4fba("0x22c", "L3O8")](_0x2fc2ac);
      _0x5ed913 = btoa(
        String[_0x4fba("0x4f8", "T)!8")][_0x4fba("0x42d", "^qsO")](
          null,
          new Uint8Array(_0x5ed913)
        )
      )
        [_0x4fba("0x16b", "Y$yI")](/=/g, "")
        [_0x4fba("0x117", "PasG")](/\+/g, "-")
        [_0x4fba("0x117", "PasG")](/\//g, "_");
      const _0x5283eb = {};
      _0x5283eb[_0x4fba("0x328", "X39p")] = _0x4fba("0x406", "%jf@");
      const _0xf078a5 = {};
      _0xf078a5[_0x4fba("0x3a7", "@p8]")] =
        JSON[_0x4fba("0x19", "wRyX")](_0x212bf2);
      _0xf078a5["method"] = _0x4fba("0x51a", "v)sw");
      _0xf078a5[_0x4fba("0x24d", "Q9kX")] = _0x5283eb;
      let _0x24a1ec = await fetch(
        _0x4fba("0x155", "KcH@") +
          _0x32ce64 +
          _0x4fba("0x48d", "clxK") +
          _0x5ed913,
        _0xf078a5
      );
      _0x24a1ec = await _0x24a1ec[_0x4fba("0x2a6", "uRDj")]();
      _0x2fc2ac = new TextEncoder()["encode"](
        _0x4fba("0x2a5", "(9Gd") +
          _0x24a1ec[_0x4fba("0x175", "T)!8")][_0x4fba("0x12", "KcH@")]() +
          _0x4fba("0x389", "NM[R") +
          _0x24a1ec[_0x4fba("0x3e6", "DyM6")][_0x4fba("0x268", "X39p")]() +
          _0x24a1ec[_0x4fba("0x47f", "^se9")][_0x4fba("0x1e8", "wRyX")]()
      );
      const _0x4bc6fe = {};
      _0x4bc6fe[_0x4fba("0x15e", "y9W%")] = _0x4fba("0x242", "w!!m");
      _0x5ed913 = await crypto[_0x4fba("0x37f", "NHUB")][
        _0x4fba("0x2cb", "clxK")
      ](_0x4bc6fe, _0x2fc2ac);
      _0x5ed913 = btoa(
        String[_0x4fba("0x51f", "PasG")][_0x4fba("0x3ea", "*&)n")](
          null,
          new Uint8Array(_0x5ed913)
        )
      )
        [_0x4fba("0x19e", "1%QJ")](/=/g, "")
        [_0x4fba("0xe9", "wutz")](/\+/g, "-")
        [_0x4fba("0x1ad", "L3O8")](/\//g, "_");
      if (
        _0x24a1ec[_0x4fba("0x1cb", "Fu6J")] == !![] &&
        _0x5ed913 == _0x24a1ec[_0x4fba("0x43", "As#s")] &&
        _0x24a1ec[_0x4fba("0x1bd", "xR4l")] < _0x32ce64
      ) {
        window[_0x4fba("0x4ec", "As#s")][_0x4fba("0x250", "AEok")](
          _0x4fba("0x124", "y9W%"),
          JSON[_0x4fba("0xc7", "U&qE")](_0x24a1ec)
        );
        window[_0x4fba("0x1b8", "L3O8")][_0x4fba("0x23", "KcH@")](
          _0x4fba("0x2f1", "jbpp"),
          Math[_0x4fba("0x35e", "NqZT")](
            Math[_0x4fba("0x17e", "!U&I")]() * 0x186a0
          ) * 0x2
        );
      } else {
        if (
          _0x5ed913 &&
          _0x24a1ec[_0x4fba("0x2ac", "I3fK")] &&
          _0x24a1ec[_0x4fba("0x422", "^se9")] != _0x5ed913
        ) {
          const _0x101c92 = {};
          _0x101c92["history"] = ![];
          mdui[_0x4fba("0x45e", "amX8")](
            _0x4fba("0x44f", "y9W%"),
            _0x4fba("0x4d", "yEI%"),
            function () {},
            _0x101c92
          );
          window[_0x4fba("0x21b", "^se9")][_0x4fba("0x273", "clxK")](
            _0x4fba("0x2", "xR4l"),
            Math[_0x4fba("0x244", "jbpp")](
              Math[_0x4fba("0x39c", "y9W%")]() * 0x186a0
            ) *
              0x2 +
              0x1
          );
        }
        if (_0x24a1ec[_0x4fba("0x3c", "Y$yI")] > _0x32ce64) {
          const _0x2d48f9 = {};
          _0x2d48f9[_0x4fba("0x4ae", "TB@7")] = ![];
          mdui[_0x4fba("0x3dd", "NM[R")](
            _0x4fba("0x76", "^qsO"),
            _0x4fba("0x466", "5hYI"),
            function () {},
            _0x2d48f9
          );
        }
        if (_0x24a1ec[_0x4fba("0x2b9", "*&)n")] == 0x1bf52) {
          const _0x14c3d8 = {};
          _0x14c3d8[_0x4fba("0x47a", "I3fK")] = ![];
          mdui[_0x4fba("0x355", "!U&I")](
            _0x4fba("0x1af", "@p8]") + _0x24a1ec[_0x4fba("0x19c", "!U&I")],
            _0x4fba("0x517", "w!!m"),
            function () {},
            _0x14c3d8
          );
          window[_0x4fba("0xfc", "(N&n")][_0x4fba("0x4d7", "*&)n")](
            _0x4fba("0x4d8", "Fu6J"),
            Math[_0x4fba("0x304", "clxK")](
              Math[_0x4fba("0x3e", "%jf@")]() * 0x186a0
            ) *
              0x2 +
              0x1
          );
        } else if (_0x24a1ec[_0x4fba("0x1b5", "I3fK")] == 0x1d4b42) {
          const _0x2b7e92 = {};
          _0x2b7e92[_0x4fba("0x17c", "*&)n")] = ![];
          mdui[_0x4fba("0x60", "clxK")](
            _0x4fba("0x44", "^qsO") + _0x24a1ec[_0x4fba("0xfb", "L3O8")],
            "è®¾å¤‡è¢«ç¦æ­¢ä½¿ç”¨å¼¹å¹•æœåŠ¡",
            function () {},
            _0x2b7e92
          );
          window[_0x4fba("0xa3", "NHUB")][_0x4fba("0x2ed", "wutz")](
            _0x4fba("0x3e0", "DyM6"),
            Math[_0x4fba("0x23f", "%jf@")](
              Math[_0x4fba("0x368", "DyM6")]() * 0x186a0
            ) *
              0x2 +
              0x1
          );
        } else {
          const _0x4d0d56 = {};
          _0x4d0d56[_0x4fba("0x505", "qGJj")] = ![];
          mdui[_0x4fba("0xc2", "As#s")](
            "é”™è¯¯" +
              _0x24a1ec[_0x4fba("0x200", "Y$yI")] +
              ":\x20" +
              _0x24a1ec[_0x4fba("0x39a", "n$P$")],
            "ç™»å½•å¤±è´¥",
            function () {},
            _0x4d0d56
          );
        }
        window[_0x4fba("0xa3", "NHUB")][_0x4fba("0x7a", "xR4l")](
          _0x4fba("0x3a9", "NqZT"),
          "{}"
        );
        return;
      }
    }
  }
  if (
    isAndroidiOS &&
    typeof document[_0x4fba("0x110", "k9!T")] == _0x4fba("0x3ed", "w!!m")
  )
    document[_0x4fba("0x494", "KOQw")] = 0x1;
  if (danmaku != null) {
    try {
      danmaku[_0x4fba("0x39", "n$P$")]();
      danmaku[_0x4fba("0x182", "ePv1")]();
    } catch (_0xfcc60d) {}
    is_danmaku_show = ![];
  }
  danmaku = null;
  episode_info = null;
  selecAnime_id = 0x0;
  if (
    document[_0x4fba("0x332", "Fu6J")](_0x4fba("0x377", "ItEp")) == undefined
  ) {
    initButton();
  }
  if (isWeb)
    video_container = document[_0x4fba("0x2d", "xR4l")](_0x4fba("0xb", "Q9kX"));
  if (isPC) {
    video_container = document[_0x4fba("0x329", "TB@7")](
      _0x4fba("0x1f2", "uRDj")
    );
    document[_0x4fba("0x44b", "n$P$")](_0x4fba("0x4d1", "@p8]"))[
      _0x4fba("0x4c3", "NM[R")
    ] = 0x1;
    document[_0x4fba("0x3d1", "PasG")]("embed[class=\x27mpv-videoPlayer\x27]")[
      _0x4fba("0x109", "jbpp")
    ] = 0x0;
    try {
      video_container[_0x4fba("0xa1", "v)sw")](
        _0x4fba("0x12d", "y9W%"),
        message
      );
    } catch (_0x3c7c37) {}
    video_container[_0x4fba("0x24c", "PasG")](_0x4fba("0x6e", "Y$yI"), message);
  }
  if (isAndroidiOS) video_container = document;
  var _0x249cb6 = document[_0x4fba("0x51b", "5hYI")](_0x4fba("0x476", "Fu6J"))[
    _0x4fba("0x3bf", "NqZT")
  ];
  var _0xf518be = _0x249cb6;
  if (_0x249cb6) {
    _0xf518be = _0x249cb6;
  }
  if (_0xf518be != _0x249cb6) {
    _0x249cb6 = _0xf518be;
  }
  var _0x1b5b68 = document[_0x4fba("0x331", "(9Gd")](_0x4fba("0x86", "(9Gd"));
  if (_0x1b5b68) {
    _0x1b5b68 = _0x1b5b68[_0x4fba("0x3e4", "amX8")];
    var _0x209406 = 0x0;
    try {
      _0x209406 = /S([0-9]*)/gi[_0x4fba("0x390", "1%QJ")](_0x1b5b68);
    } catch (_0x13a70a) {}
    if (_0x209406 != null) {
      _0x209406 = _0x209406[0x0];
      _0x209406 = _0x209406[_0x4fba("0x287", "%jf@")](0x1);
    }
    _0x209406 = parseInt(_0x209406, 0xa);
    if (
      _0x209406 != 0x0 &&
      _0x209406 != NaN &&
      _0x209406 != null &&
      _0x209406 != 0x1
    ) {
      _0xf518be =
        _0x249cb6 + "\x20ç¬¬" + convertToChinaNum(parseInt(_0x209406, 0xa));
      _0x249cb6 = _0xf518be;
    }
  }
  let _0x4ec370 = _0x249cb6;
  let _0x52f14e = {};
  try {
    _0x52f14e = window[_0x4fba("0x11c", "OE1m")][_0x4fba("0x4e0", "KcH@")](
      _0x4fba("0x4b1", "1%QJ")
    );
    _0x52f14e = JSON[_0x4fba("0x31e", "wRyX")](_0x52f14e);
  } catch (_0x3f142b) {
    _0x52f14e = {};
  }
  if (!_0x52f14e) _0x52f14e = {};
  try {
    _0xf518be = _0x52f14e[_0x4ec370][_0x4fba("0xee", "n$P$")](/ã€.*ã€‘/g, "");
  } catch (_0xadcdf3) {
    _0xf518be = _0x249cb6;
  }
  if (!_0xf518be) _0xf518be = _0x249cb6;
  let _0xdcc8c1 = document[_0x4fba("0x3fd", "I3fK")](_0x4fba("0x7c", "Q9kX"));
  if (_0xdcc8c1) {
    _0xdcc8c1 = _0xdcc8c1[_0x4fba("0x277", "^se9")];
    newepisode = _0xdcc8c1[_0x4fba("0x4e7", "!U&I")](
      new RegExp(_0x4fba("0x1a8", "*&)n"))
    );
    if (newepisode != null) {
      newepisode = newepisode[0x0];
      newepisode = newepisode[_0x4fba("0x246", "DyM6")](0x1);
    }
  } else {
    newepisode = _0x4fba("0x40e", "v)sw");
  }
  var _0x92b71f;
  let _0x207dd3 = parseInt(
    new Date()[_0x4fba("0x344", "KOQw")]() / 0x3e8 + 0x1e
  );
  let _0x5d92a8 = new TextEncoder()["encode"](
    _0x4fba("0x436", "T)!8") + _0x207dd3 + "/api/v2/search/episodes"
  );
  let _0x9b8c22 = md5[_0x4fba("0x176", "v)sw")](_0x5d92a8);
  _0x9b8c22 = btoa(
    String[_0x4fba("0x29a", "I3fK")]["apply"](null, new Uint8Array(_0x9b8c22))
  )
    ["replace"](/=/g, "")
    [_0x4fba("0x1e7", "jbpp")](/\+/g, "-")
    [_0x4fba("0x79", "W%Dm")](/\//g, "_");
  _0x92b71f =
    _0x4fba("0x45", "NqZT") +
    _0xf518be +
    "&withRelated=true&episode=" +
    newepisode +
    _0x4fba("0x30b", "DyM6") +
    _0x207dd3 +
    _0x4fba("0x18f", "!U&I") +
    _0x9b8c22;
  var _0x2ede15 = new XMLHttpRequest();
  _0x2ede15[_0x4fba("0x1ac", "W%Dm")]("GET", _0x92b71f, !![]);
  _0x2ede15[_0x4fba("0x213", "wRyX")] = function (_0x361c62) {
    var _0x1ffd5f = JSON[_0x4fba("0x340", "KOQw")](
      _0x2ede15[_0x4fba("0x3d6", "Q%$b")]
    );
    newepisode = 0x0;
    let _0x1cc645 = 0x0;
    for (
      let _0x17a18e = 0x0;
      _0x17a18e < _0x1ffd5f[_0x4fba("0x1c3", "k9!T")][_0x4fba("0x1b3", "KcH@")];
      ++_0x17a18e
    ) {
      let _0x149e2c = string_similarity(
        _0x1ffd5f[_0x4fba("0x83", "KcH@")][_0x17a18e][_0x4fba("0x382", "!U&I")][
          _0x4fba("0xc8", "^se9")
        ](),
        _0xf518be
      );
      if (_0x149e2c > _0x1cc645) {
        _0x1cc645 = _0x149e2c;
        selecAnime_id = _0x17a18e;
      }
    }
    episodeId =
      _0x1ffd5f[_0x4fba("0x3d5", "NHUB")][selecAnime_id][
        _0x4fba("0x2cf", "Fu6J")
      ][newepisode][_0x4fba("0x2c3", "I3fK")];
    animeId =
      _0x1ffd5f[_0x4fba("0x4ac", "NM[R")][selecAnime_id][
        _0x4fba("0xf9", "PasG")
      ];
    getbangumiTv();
    if (
      _0x1ffd5f[_0x4fba("0x1a9", "^qsO")][selecAnime_id][
        _0x4fba("0x206", "!U&I")
      ] == _0x4fba("0x47e", "KcH@")
    ) {
      episode_info =
        _0x4fba("0x18", "erGJ") +
        _0x1ffd5f[_0x4fba("0x83", "KcH@")][selecAnime_id][
          _0x4fba("0x211", "w!!m")
        ] +
        _0x4fba("0x4bf", "PasG") +
        _0x1ffd5f[_0x4fba("0x39b", "(9Gd")][selecAnime_id][
          _0x4fba("0x95", "uRDj")
        ][newepisode][_0x4fba("0x40d", "RBak")];
    } else {
      episode_info =
        _0x4fba("0xe", "TB@7") +
        _0x1ffd5f[_0x4fba("0x4ac", "NM[R")][selecAnime_id][
          _0x4fba("0x32b", "I3fK")
        ];
    }
    var _0x16691d = new XMLHttpRequest();
    let _0x27124a = _0x4fba("0x309", "qGJj") + episodeId;
    let _0x2f68a4 = parseInt(
      new Date()[_0x4fba("0x4b3", "%wOF")]() / 0x3e8 + 0x1e
    );
    let _0xc46fbe = new TextEncoder()[_0x4fba("0x3f7", "Fu6J")](
      _0x4fba("0x2da", "yEI%") + _0x2f68a4 + _0x27124a
    );
    let _0x180f6b = md5[_0x4fba("0xa", "@p8]")](_0xc46fbe);
    _0x180f6b = btoa(
      String["fromCharCode"][_0x4fba("0xa5", "I3fK")](
        null,
        new Uint8Array(_0x180f6b)
      )
    )
      [_0x4fba("0xe9", "wutz")](/=/g, "")
      [_0x4fba("0x49b", "DyM6")](/\+/g, "-")
      [_0x4fba("0xba", "KOQw")](/\//g, "_");
    try {
      if (
        episodeId[_0x4fba("0x2be", "(9Gd")](_0x4fba("0x19b", "(9Gd")) != -0x1
      ) {
        try {
          failedOffline = ![];
          goGetTencent(
            episodeId[_0x4fba("0x79", "W%Dm")](_0x4fba("0x315", "NM[R"), "")
          );
        } catch (_0x19d7b3) {
          failedOffline = !![];
        }
      } else if (
        episodeId[_0x4fba("0x303", "Fu6J")](_0x4fba("0x438", "k9!T")) != -0x1
      ) {
        try {
          failedOffline = ![];
          goGetIqiyi(
            episodeId[_0x4fba("0x49b", "DyM6")](_0x4fba("0x263", "Q%$b"), "")
          );
        } catch (_0x1cf0f6) {
          failedOffline = !![];
        }
      }
    } catch (_0x2c9afd) {
      failedOffline = !![];
    }
    if (failedOffline) {
      _0x16691d[_0x4fba("0x24f", "erGJ")](
        _0x4fba("0x4a1", "X39p"),
        _0x4fba("0x283", "^qsO") +
          episodeId +
          _0x4fba("0x67", "ePv1") +
          (chConvert ? _0x4fba("0x10a", "qGJj") : _0x4fba("0x4b6", "(N&n")) +
          _0x4fba("0x492", "yEI%") +
          _0x2f68a4 +
          _0x4fba("0x48d", "clxK") +
          _0x180f6b,
        !![]
      );
      _0x16691d[_0x4fba("0x1ed", "n$P$")] = function (_0x47bd68) {
        var _0x5ada25 = JSON[_0x4fba("0x6", "erGJ")](
          _0x16691d[_0x4fba("0x2a7", "!U&I")]
        )[_0x4fba("0x2dc", "1%QJ")];
        danmakuMaker(_0x5ada25);
      };
      _0x16691d[_0x4fba("0x4c9", "(9Gd")]();
    }
  };
  _0x2ede15[_0x4fba("0x12f", "%wOF")] = function () {
    console["log"](_0x4fba("0x4f4", "1%QJ"));
  };
  _0x2ede15["send"]();
}
function danmakuMaker(_0x2c08c) {
  var _0x27ce0c = bilibiliParser(_0x2c08c);
  var _0x3d943b = document["querySelector"](_0x4fba("0x45f", "n$P$"));
  var _0x27e3d0;
  if (isWeb)
    _0x27e3d0 = document[_0x4fba("0x1c", "qGJj")](_0x4fba("0x17", "^se9"));
  if (isPC)
    _0x27e3d0 = document[_0x4fba("0x26c", "%jf@")](_0x4fba("0x302", "Fu6J"));
  if (isAndroidiOS) _0x27e3d0 = document;
  if (danmaku != null) {
    try {
      danmaku[_0x4fba("0x3d4", "Q9kX")]();
      danmaku[_0x4fba("0x13", "As#s")]();
    } catch (_0x2ed8ba) {}
    is_danmaku_show = ![];
    danmaku = null;
    episode_info = null;
    selecAnime_id = 0x0;
  }
  danmaku = createDanmaku(_0x3d943b, _0x27e3d0, _0x27ce0c);
  document[_0x4fba("0xe2", "ePv1")](_0x4fba("0x1a1", "^se9"))[
    _0x4fba("0x473", "T)!8")
  ][_0x4fba("0x36a", "NM[R")] = danmakuOpacity / 0x64;
  var _0x1842c5 = document[_0x4fba("0x398", "wutz")](_0x4fba("0x1da", "ePv1"));
  new ResizeObserver(() => {
    console[_0x4fba("0x50a", "yEI%")](_0x4fba("0x482", "jbpp"));
    danmaku[_0x4fba("0x154", "xR4l")]();
  })[_0x4fba("0x28d", "Q%$b")](_0x1842c5);
}
async function getbangumiTv() {
  if (onBgmTv) {
    if (animeId) {
      let _0x4b5c79 = parseInt(
        new Date()[_0x4fba("0x4f6", "(9Gd")]() / 0x3e8 + 0x1e
      );
      let _0x1a66b6 = new TextEncoder()["encode"](
        _0x4fba("0x4e5", "RBak") +
          _0x4b5c79 +
          _0x4fba("0x42a", "%jf@") +
          animeId
      );
      let _0x3d7ba6 = md5[_0x4fba("0x2b1", "DyM6")](_0x1a66b6);
      _0x3d7ba6 = btoa(
        String[_0x4fba("0x3aa", "OE1m")][_0x4fba("0x140", "NHUB")](
          null,
          new Uint8Array(_0x3d7ba6)
        )
      )
        [_0x4fba("0x178", "wRyX")](/=/g, "")
        [_0x4fba("0x8f", "KcH@")](/\+/g, "-")
        [_0x4fba("0x3c7", "As#s")](/\//g, "_");
      let _0x477abf = await fetch(
        _0x4fba("0x4ed", "NHUB") +
          animeId +
          _0x4fba("0x27", "ItEp") +
          _0x4b5c79 +
          _0x4fba("0x199", "qGJj") +
          _0x3d7ba6
      );
      _0x477abf = await _0x477abf[_0x4fba("0x412", "DyM6")]();
      let _0x10818c = _0x477abf[_0x4fba("0x1a5", "KOQw")]["bangumiUrl"][
        _0x4fba("0x117", "PasG")
      ](_0x4fba("0x350", "w!!m"), "");
      let _0x4a5cb3 = document[_0x4fba("0x1ee", "W%Dm")](
        _0x4fba("0x322", "xR4l")
      );
      if (_0x4a5cb3) {
        _0x4a5cb3 = _0x4a5cb3[_0x4fba("0x108", "@p8]")];
        _0x4a5cb3 = _0x4a5cb3[_0x4fba("0x2f6", "v)sw")](
          new RegExp(_0x4fba("0x47c", "%jf@"))
        );
        if (_0x4a5cb3 != null) {
          _0x4a5cb3 = _0x4a5cb3[0x0];
          _0x4a5cb3 = _0x4a5cb3[_0x4fba("0x1a0", "*&)n")](0x1);
        }
      } else {
        _0x4a5cb3 = null;
      }
      let _0x53b0d1 = _0x4a5cb3 ? _0x4a5cb3 - 0x1 : 0x0;
      let _0x46d4a4 = await fetch(
        _0x4fba("0x395", "yEI%") +
          _0x10818c +
          _0x4fba("0x39f", "%wOF") +
          (_0x4a5cb3 ? _0x4a5cb3 - 0x1 : 0x0) +
          _0x4fba("0x180", "^qsO")
      );
      _0x46d4a4 = await _0x46d4a4[_0x4fba("0x6d", "yEI%")]();
      bgmEpId = _0x46d4a4[_0x4fba("0x46a", "OE1m")][0x0]["id"];
      for (
        let _0x5ae526 = 0x0;
        _0x5ae526 <
        _0x46d4a4[_0x4fba("0x36c", "ItEp")][_0x4fba("0x1e9", "Q%$b")];
        ++_0x5ae526
      ) {
        if (_0x46d4a4[_0x4fba("0xe1", "Q9kX")][_0x5ae526]["ep"] == _0x4a5cb3)
          bgmEpId = _0x46d4a4[_0x4fba("0x89", "xR4l")][_0x5ae526]["id"];
      }
      document[_0x4fba("0x1c", "qGJj")](_0x4fba("0x6a", "RBak"))["innerHTML"] =
        "bgm.tv";
      waitForKeyElements(_0x4fba("0x149", "*&)n"), bangumiTv);
    }
  }
}
function bangumiTv() {
  if (
    document[_0x4fba("0x1b", "AEok")](_0x4fba("0x2aa", "NHUB"))[
      _0x4fba("0x3a1", "1%QJ")
    ] == _0x4fba("0x4b9", "wRyX") &&
    episodeId
  ) {
    if (
      document["querySelector"](_0x4fba("0x3c1", "ItEp"))[
        _0x4fba("0xca", "%jf@")
      ]
    ) {
      document[_0x4fba("0x3a5", "U&qE")](_0x4fba("0x2d3", "DyM6"))[
        _0x4fba("0x277", "^se9")
      ] = _0x4fba("0xf5", "X39p") + bgmEpId + _0x4fba("0xbf", "U&qE");
    }
  }
}
function searchDanmaku() {
  if (danmaku != null) {
    try {
      danmaku[_0x4fba("0xfd", "xR4l")]();
      danmaku[_0x4fba("0x126", "amX8")]();
    } catch (_0x13b760) {}
    is_danmaku_show = ![];
  }
  document[_0x4fba("0x285", "1%QJ")](_0x4fba("0x3a4", "I3fK"))[
    _0x4fba("0x14a", "(N&n")
  ]();
  actionFunction();
}
function createDanmaku(_0x3eb125, _0x598b33, _0x46bf3e) {
  if (danmaku != null) {
    try {
      danmaku[_0x4fba("0x25", "TB@7")]();
      danmaku[_0x4fba("0x182", "ePv1")]();
    } catch (_0x1bcc1c) {}
    is_danmaku_show = ![];
  }
  var _0x4a097a = _0x46bf3e;
  _0x4a097a[_0x4fba("0x196", "qGJj")](function (_0x4b80d3, _0x16666a) {
    return (
      _0x4b80d3[_0x4fba("0x11f", "DyM6")] - _0x16666a[_0x4fba("0x23e", "^se9")]
    );
  });
  var _0x5e5fef = _0x4a097a[_0x4fba("0x20c", "AEok")];
  const _0x5c7529 = Array(_0x5e5fef)
    [_0x4fba("0xc3", "5hYI")]()
    [_0x4fba("0x39e", "^se9")]((_0x212830, _0x1ad8db) => _0x1ad8db + 0x1);
  _0x5c7529["sort"](() => Math[_0x4fba("0x459", "^qsO")]() - 0.5);
  var _0x15fc8c = 0x0;
  for (
    var _0x2d185c = 0x1;
    _0x2d185c < _0x4a097a[_0x4fba("0x55", "@p8]")];
    ++_0x2d185c
  ) {
    _0x15fc8c++;
    var _0x11751a =
      Math["abs"](
        _0x4a097a[_0x2d185c][_0x4fba("0x521", "wRyX")] -
          _0x4a097a[_0x2d185c - 0x1]["time"]
      ) + 0.1;
    if (
      (_0x5c7529[_0x15fc8c] / _0x5e5fef) * 1.5 * _0x11751a * danmakuCapacity <
      0x1
    ) {
      _0x4a097a[_0x4fba("0x14f", "%wOF")](_0x2d185c, 0x1);
      _0x2d185c--;
    }
  }
  console[_0x4fba("0x116", "!U&I")](_0x4a097a[_0x4fba("0xb7", "KOQw")]);
  is_danmaku_show = !![];
  const _0x1a3df5 = {};
  _0x1a3df5[_0x4fba("0x101", "AEok")] = _0x3eb125;
  _0x1a3df5[_0x4fba("0x2ff", "NHUB")] = _0x598b33;
  _0x1a3df5[_0x4fba("0x10c", "RBak")] = _0x4a097a;
  _0x1a3df5[_0x4fba("0x43e", "w!!m")] = _0x4fba("0x212", "k9!T");
  _0x1a3df5[_0x4fba("0x371", "amX8")] =
    danmakuSpeed * (devicePixelRatio || 0x1);
  return new Danmaku(_0x1a3df5);
}
function bilibiliParser(_0x7b4602) {
  return _0x7b4602[_0x4fba("0x3a", "(N&n")]((_0x450ef5) => {
    const _0x517cfc = _0x450ef5["p"];
    const _0x5c353c = _0x517cfc[_0x4fba("0x188", "n$P$")](",");
    const _0x10658c = {};
    _0x10658c["6"] = _0x4fba("0x3b", "wutz");
    _0x10658c["1"] = _0x4fba("0x2e1", "KcH@");
    _0x10658c["5"] = _0x4fba("0x75", "xR4l");
    _0x10658c["4"] = _0x4fba("0x3e5", "OE1m");
    const _0x610b45 = _0x10658c[_0x5c353c[0x1]];
    if (!_0x610b45) return null;
    const _0x4a2578 = danmakuSize;
    if (Number(_0x5c353c[0x2]) == 0xff0000)
      _0x5c353c[0x2] = _0x4fba("0x3d0", "n$P$");
    const _0x1ffdce = (_0x4fba("0x9c", "^se9") +
      Number(_0x5c353c[0x2])["toString"](0x10))[_0x4fba("0x14b", "Q%$b")](-0x6);
    const _0x43b349 = {};
    _0x43b349[_0x4fba("0x49a", "1%QJ")] = _0x4a2578 + "px";
    _0x43b349[_0x4fba("0x46f", "DyM6")] = "#" + _0x1ffdce;
    _0x43b349[_0x4fba("0x2a1", "clxK")] =
      _0x1ffdce === _0x4fba("0x280", "@p8]")
        ? _0x4fba("0xb1", "T)!8")
        : _0x4fba("0x4a6", "Q9kX");
    _0x43b349["font"] = _0x4a2578 + _0x4fba("0x201", "*&)n");
    _0x43b349["fillStyle"] = "#" + _0x1ffdce;
    _0x43b349[_0x4fba("0x1f8", "Q%$b")] =
      _0x1ffdce === _0x4fba("0x13f", "NqZT")
        ? _0x4fba("0x19d", "L3O8")
        : _0x4fba("0x8d", "n$P$");
    _0x43b349[_0x4fba("0x317", "(9Gd")] = 0x2;
    const _0x400c9f = {};
    _0x400c9f["text"] = _0x450ef5["m"];
    _0x400c9f["mode"] = _0x610b45;
    _0x400c9f[_0x4fba("0xf4", "KcH@")] = _0x5c353c[0x0] * 0x1;
    _0x400c9f[_0x4fba("0x3c6", "amX8")] = _0x43b349;
    return _0x400c9f;
  })["filter"]((_0x5965d6) => _0x5965d6);
}
function list2string(_0x38a898) {
  const _0x2b2996 = _0x38a898[_0x4fba("0x3d5", "NHUB")];
  var _0x53b199 = _0x2b2996[_0x4fba("0xcf", "yEI%")]((_0x20d686) => {
    return (
      _0x20d686[_0x4fba("0x37a", "W%Dm")] +
      _0x4fba("0x4de", "5hYI") +
      _0x20d686[_0x4fba("0x27c", "wRyX")]
    );
  });
  var _0xc31647 =
    _0x4fba("0x450", "As#s") + _0x53b199[0x0] + _0x4fba("0x4dc", "wRyX");
  for (
    var _0x5ce3bc = 0x1;
    _0x5ce3bc < _0x53b199[_0x4fba("0x1b9", "clxK")];
    _0x5ce3bc++
  ) {
    _0xc31647 =
      _0xc31647 +
      _0x4fba("0x1be", "wutz") +
      _0x5ce3bc[_0x4fba("0x15f", "%wOF")]() +
      _0x4fba("0x20d", "qGJj") +
      _0x53b199[_0x5ce3bc] +
      "</option>";
  }
  return (
    "<select\x20class=\x22mdui-select\x20anime-list-select\x22>" +
    _0xc31647 +
    _0x4fba("0x286", "(N&n")
  );
}
function ep2string(_0x1601ea, _0x7dace8) {
  const _0x4689b6 = _0x1601ea;
  var _0x2c9970 = _0x4689b6[_0x4fba("0x171", "KcH@")]((_0x2846bb) => {
    return _0x2846bb[_0x4fba("0x219", "AEok")];
  });
  var _0x429670 =
    _0x4fba("0x3f4", "jbpp") + _0x2c9970[0x0] + _0x4fba("0x3da", "Q9kX");
  if (_0x7dace8 == 0x1) {
    _0x429670 =
      _0x4fba("0x3c5", "U&qE") + _0x2c9970[0x0] + _0x4fba("0x279", "%jf@");
  }
  for (
    var _0xd12661 = 0x1;
    _0xd12661 < _0x2c9970[_0x4fba("0x9a", "NM[R")];
    _0xd12661++
  ) {
    if (_0x7dace8 == _0xd12661 + 0x1)
      _0x429670 =
        _0x429670 +
        _0x4fba("0x301", "n$P$") +
        _0xd12661[_0x4fba("0x378", "T)!8")]() +
        _0x4fba("0x271", "(9Gd") +
        _0x2c9970[_0xd12661] +
        _0x4fba("0x232", "amX8");
    else
      _0x429670 =
        _0x429670 +
        "<option\x20value=\x22" +
        _0xd12661[_0x4fba("0x3e9", "y9W%")]() +
        _0x4fba("0x224", "!U&I") +
        _0x2c9970[_0xd12661] +
        _0x4fba("0x132", "yEI%");
  }
  return (
    "<select\x20class=\x22mdui-select\x20episode-list-select\x22>" +
    _0x429670 +
    _0x4fba("0x513", "y9W%")
  );
}
function wait1() {
  scriptcheck();
  danmaku = null;
  episode_info = null;
  selecAnime_id = 0x0;
  loadLocalStorage();
  initButton();
  try {
    hisTitle = document[_0x4fba("0x51b", "5hYI")](_0x4fba("0x2a9", "NqZT"))[
      _0x4fba("0x410", "uRDj")
    ];
  } catch (_0x52014c) {}
  try {
    curTitle =
      document[_0x4fba("0x29", "As#s")]("h3.videoOsdTitle")[
        _0x4fba("0x383", "T)!8")
      ];
  } catch (_0x46c116) {}
  getTitle = setInterval(function () {
    try {
      curTitle = document[_0x4fba("0x14d", "Q9kX")](_0x4fba("0x299", "NM[R"))[
        _0x4fba("0x3fe", "ePv1")
      ];
    } catch (_0x41e6fd) {}
    if (curTitle != hisTitle) {
      console["log"](_0x4fba("0x467", "n$P$"));
      isMusic = ![];
      try {
        if (
          document[_0x4fba("0x3a5", "U&qE")](_0x4fba("0x256", "Y$yI")) !=
            null ||
          document[_0x4fba("0xe2", "ePv1")](_0x4fba("0xe4", "wRyX")) != null
        ) {
          isMusic = !![];
        }
      } catch (_0x129339) {}
      if (!isMusic) actionFunctionInit();
      else initButton();
      hisTitle = curTitle;
    }
  }, 0x12c);
}
(function () {
  "use strict";
  waitForKeyElements("[class=\x27videoOsdTitle\x27]", wait1);
  waitForKeyElements(
    "h3[class=\x27videoOsdParentTitle\x20videoOsdParentTitle-small\x27]",
    wait1
  );
})();
function stringToArrayBuffer(_0x1f2bef) {
  if (!_0x1f2bef) return;
  try {
    var _0xe433d5 = new ArrayBuffer(_0x1f2bef[_0x4fba("0x2b3", "w!!m")]);
    var _0x180951 = new Uint8Array(_0xe433d5);
    for (
      var _0x447965 = 0x0, _0x562272 = _0x1f2bef["length"];
      _0x447965 < _0x562272;
      _0x447965++
    ) {
      _0x180951[_0x447965] = _0x1f2bef["charCodeAt"](_0x447965);
    }
    return _0xe433d5;
  } catch (_0x241486) {}
}
function arrayBufferToString(_0x1acf41) {
  try {
    var _0x47524e = new Uint8Array(_0x1acf41);
    var _0xb8707c = "";
    for (
      var _0x3b030b = 0x0;
      _0x3b030b < _0x47524e[_0x4fba("0x472", "Y$yI")];
      _0x3b030b++
    ) {
      _0xb8707c += String[_0x4fba("0x3d9", "^se9")](_0x47524e[_0x3b030b]);
    }
    return _0xb8707c;
  } catch (_0x5e7cf4) {}
}
function importPrivateKey(_0x25b7dc) {
  const _0x206243 = _0x4fba("0xfa", "w!!m");
  const _0x38bf43 = _0x4fba("0x4ef", "n$P$");
  const _0x355fa4 = _0x25b7dc[_0x4fba("0x26a", "uRDj")](
    _0x206243[_0x4fba("0x1c6", "^se9")],
    _0x25b7dc["length"] - _0x38bf43[_0x4fba("0x337", "^qsO")]
  );
  const _0x383870 = atob(_0x355fa4);
  const _0x100c4f = stringToArrayBuffer(_0x383870);
  const _0x3817c5 = {};
  _0x3817c5[_0x4fba("0xe8", "Y$yI")] = _0x4fba("0x2f5", "1%QJ");
  _0x3817c5[_0x4fba("0x3a3", "1%QJ")] = _0x4fba("0xc9", "NM[R");
  return crypto[_0x4fba("0x284", "!U&I")][_0x4fba("0x38b", "qGJj")](
    _0x4fba("0x2d5", "X39p"),
    _0x100c4f,
    _0x3817c5,
    !![],
    [_0x4fba("0x4b5", "n$P$")]
  );
}
function importPublicKey(_0x56dcd5) {
  const _0x5a9bf5 = _0x4fba("0x4ca", "Q%$b");
  const _0x844b4a = _0x4fba("0x184", "KcH@");
  const _0x3133fb = _0x56dcd5[_0x4fba("0x2d6", "xR4l")](
    _0x5a9bf5[_0x4fba("0x49f", "v)sw")],
    _0x56dcd5[_0x4fba("0x16d", "Q9kX")] - _0x844b4a["length"]
  );
  const _0x52456a = atob(_0x3133fb);
  const _0x4e25e0 = stringToArrayBuffer(_0x52456a);
  const _0x21e483 = {};
  _0x21e483[_0x4fba("0x63", "xR4l")] = _0x4fba("0x2ce", "5hYI");
  _0x21e483[_0x4fba("0x4", "As#s")] = _0x4fba("0xb9", "ePv1");
  return crypto["subtle"]["importKey"](
    _0x4fba("0xcb", "KcH@"),
    _0x4e25e0,
    _0x21e483,
    !![],
    [_0x4fba("0xd0", "RBak")]
  );
}
function encryptDataWithPublicKey(_0x5695d8, _0x4489b0) {
  try {
    _0x5695d8 = stringToArrayBuffer(_0x5695d8);
    const _0x609b1 = {};
    _0x609b1["name"] = _0x4fba("0x3dc", "NqZT");
    return crypto[_0x4fba("0x26", "TB@7")][_0x4fba("0x3f6", "NqZT")](
      _0x609b1,
      _0x4489b0,
      _0x5695d8
    );
  } catch (_0x161359) {}
}
function decryptDataWithPrivateKey(_0xdcb91b, _0xb71775) {
  _0xdcb91b = stringToArrayBuffer(_0xdcb91b);
  const _0x5654dc = {};
  _0x5654dc[_0x4fba("0xc4", "v)sw")] = _0x4fba("0x487", "w!!m");
  return crypto["subtle"][_0x4fba("0x1", "!U&I")](
    _0x5654dc,
    _0xb71775,
    _0xdcb91b
  );
}
async function goGetIqiyi(_0x1a74ce) {
  let _0x50ac30 = [];
  const _0x35b26b = {};
  _0x35b26b[_0x4fba("0x485", "yEI%")] = null;
  _0x35b26b[_0x4fba("0x3df", "NHUB")] = _0x4fba("0x34a", "@p8]");
  let _0x1397dd = await fetch(_0x4fba("0x1d", "PasG") + _0x1a74ce, _0x35b26b);
  _0x1397dd = await _0x1397dd[_0x4fba("0x454", "PasG")]();
  try {
    _0x1397dd = _0x1397dd[_0x4fba("0x221", "n$P$")](
      new RegExp(_0x4fba("0x1bb", "xR4l"))
    )[0x0];
  } catch (_0x2b6e14) {
    _0x1397dd = _0x1397dd[_0x4fba("0x4cc", "(9Gd")](
      new RegExp(_0x4fba("0x3a6", "Fu6J"))
    )[0x0];
    _0x1397dd = _0x1397dd[_0x4fba("0x287", "%jf@")](
      0xd,
      _0x1397dd[_0x4fba("0x1e9", "Q%$b")] - 0x1
    );
  }
  _0x1397dd = JSON[_0x4fba("0x4e3", "As#s")](_0x1397dd);
  let _0x473f12 = _0x1397dd[_0x4fba("0x320", "Fu6J")];
  let _0x543f26 = _0x1397dd[_0x4fba("0x41c", "(N&n")];
  let _0x322852 =
    _0x1397dd[_0x4fba("0x40c", "%jf@")][_0x4fba("0x1e", "RBak")]();
  let _0x445497 = _0x1397dd[_0x4fba("0x264", "As#s")];
  console[_0x4fba("0x44d", "jbpp")](_0x322852);
  _0x473f12 = _0x473f12[_0x4fba("0x1d6", "!U&I")](":");
  if (_0x473f12["length"] == 0x1) _0x473f12 = _0x473f12[0x0];
  if (_0x473f12["length"] == 0x2)
    _0x473f12 = parseInt(_0x473f12[0x0]) * 0x3c + parseInt(_0x473f12[0x1]);
  if (_0x473f12[_0x4fba("0xd3", "%jf@")] == 0x3)
    _0x473f12 =
      parseInt(_0x473f12[0x0]) * 0xe10 +
      parseInt(_0x473f12[0x1]) * 0x3c +
      parseInt(_0x473f12[0x2]);
  count = Math[_0x4fba("0x144", "KcH@")](_0x473f12 / 0x12c) + 0x1;
  console[_0x4fba("0x1dc", "RBak")](count);
  let _0x21cdb1 = [];
  for (let _0x59ce97 = 0x0; _0x59ce97 < count; ++_0x59ce97) {
    try {
      _0x21cdb1["push"](
        fetch(
          "https://cmts.iqiyi.com/bullet/" +
            _0x322852[_0x4fba("0x3cf", "As#s")](
              _0x322852[_0x4fba("0x3fa", "Y$yI")] - 0x4,
              _0x322852[_0x4fba("0x25e", "U&qE")] - 0x2
            ) +
            "/" +
            _0x322852[_0x4fba("0xc6", "v)sw")](
              _0x322852[_0x4fba("0x417", "1%QJ")] - 0x2,
              _0x322852["length"]
            ) +
            "/" +
            _0x322852 +
            _0x4fba("0x4f5", "v)sw") +
            (_0x59ce97 + 0x1) +
            _0x4fba("0x2fe", "!U&I") +
            _0x322852 +
            _0x4fba("0x1fb", "L3O8") +
            _0x543f26 +
            "&categoryid=" +
            _0x445497 +
            _0x4fba("0x4d4", "xR4l")
        )[_0x4fba("0x358", "PasG")]((_0x4e8386) =>
          _0x4e8386[_0x4fba("0x2bc", "KcH@")]()
        )
      );
    } catch (_0x348b34) {}
  }
  for (let _0x24c1cb = 0x0; _0x24c1cb < count; ++_0x24c1cb) {
    let _0x200f81;
    if (!_0x200f81) {
      try {
        _0x200f81 = await _0x21cdb1[_0x24c1cb];
        if (!_0x200f81) {
          continue;
        }
        _0x200f81 = new Uint8Array(_0x200f81);
        const _0x190a84 = {};
        _0x190a84["to"] = _0x4fba("0x262", "w!!m");
        _0x200f81 = await pako[_0x4fba("0xcd", "TB@7")](_0x200f81, _0x190a84);
        _0x200f81 = await txml[_0x4fba("0x3ef", "RBak")](_0x200f81);
        _0x200f81 = await _0x200f81[0x1]["children"][0x1][
          _0x4fba("0x276", "qGJj")
        ];
      } catch (_0x368c04) {}
      if (!_0x200f81) {
        continue;
      }
    }
    let _0x2c17fd = 0x1;
    for (
      let _0x47ddcc = 0x0;
      _0x47ddcc < _0x200f81[_0x4fba("0x2f3", "OE1m")];
      _0x47ddcc++
    ) {
      try {
        for (
          let _0x57fc9d = 0x0;
          _0x57fc9d < _0x200f81[_0x47ddcc][_0x4fba("0x324", "As#s")]["length"];
          _0x57fc9d++
        ) {
          for (let _0x4f9662 = 0x0; _0x4f9662 < 0x1; _0x4f9662 += _0x2c17fd) {
            try {
              let _0x4f2f3a = _0x4fba("0x4cd", "y9W%");
              try {
                _0x4f2f3a =
                  _0x200f81[_0x47ddcc][_0x4fba("0x4b0", "n$P$")][_0x57fc9d][
                    "children"
                  ][_0x4f9662][_0x4fba("0xab", "v)sw")][0x5][
                    _0x4fba("0x90", "1%QJ")
                  ][0x0];
                _0x4f2f3a = _0x4f2f3a[_0x4fba("0x4f1", "KOQw")];
              } catch (_0x5eb25b) {
                _0x4f2f3a = _0x4fba("0x210", "Fu6J");
                pos = 0x0;
              }
              _0x4f2f3a = parseInt("0x" + (_0x4f2f3a || "ffffff"));
              const _0x3034a1 = {};
              _0x3034a1["p"] =
                _0x200f81[_0x47ddcc][_0x4fba("0x4a8", "wRyX")][_0x57fc9d][
                  _0x4fba("0x3b1", "Q9kX")
                ][_0x4f9662][_0x4fba("0x41a", "RBak")][0x3][
                  _0x4fba("0x90", "1%QJ")
                ][0x0] +
                "," +
                (_0x200f81[_0x47ddcc][_0x4fba("0x4fe", "@p8]")][_0x57fc9d][
                  _0x4fba("0x27e", "AEok")
                ][_0x4f9662][_0x4fba("0x324", "As#s")][0x7][
                  _0x4fba("0x118", "k9!T")
                ][0x0] != "0"
                  ? 0x5
                  : 0x1) +
                "," +
                _0x4f2f3a;
              _0x3034a1["m"] =
                _0x200f81[_0x47ddcc][_0x4fba("0x2c8", "Fu6J")][_0x57fc9d][
                  "children"
                ][_0x4f9662]["children"][0x1][_0x4fba("0x223", "!U&I")][0x0];
              _0x50ac30[_0x4fba("0x429", "^qsO")](_0x3034a1);
            } catch (_0x469fc0) {}
          }
        }
      } catch (_0x1728ac) {}
    }
  }
  danmakuMaker(_0x50ac30);
}
async function goGetTencent(_0x57f391) {
  let _0x38ec2f = [];
  const _0x26c704 = {};
  _0x26c704[_0x4fba("0x2bd", "wRyX")] = null;
  _0x26c704[_0x4fba("0x130", "I3fK")] = _0x4fba("0x197", "5hYI");
  let _0xce2f3 = await fetch(_0x4fba("0x282", "!U&I") + _0x57f391, _0x26c704);
  _0xce2f3 = await _0xce2f3["text"]();
  try {
    _0xce2f3 = _0xce2f3[_0x4fba("0x4e7", "!U&I")](
      new RegExp(_0x4fba("0xf3", "amX8"))
    )[0x0];
  } catch (_0x6e1eaf) {
    _0xce2f3 = _0xce2f3[_0x4fba("0x15a", "As#s")](
      new RegExp(_0x4fba("0x352", "AEok"))
    )[0x0];
    _0xce2f3 = _0xce2f3[_0x4fba("0x3cf", "As#s")](
      0xd,
      _0xce2f3[_0x4fba("0x143", "ePv1")] - 0x1
    );
  }
  _0xce2f3 = JSON[_0x4fba("0x13a", "5hYI")](_0xce2f3);
  console[_0x4fba("0x44d", "jbpp")](_0xce2f3);
  cover =
    _0xce2f3[_0x4fba("0x2fa", "uRDj")][0x0][_0x4fba("0x13b", "Fu6J")][
      _0x4fba("0xa4", "Y$yI")
    ];
  _0xce2f3 =
    _0xce2f3[_0x4fba("0x2e2", "erGJ")][0x0][_0x4fba("0x478", "^se9")][
      "duration"
    ];
  console[_0x4fba("0x316", "NM[R")](_0xce2f3);
  _0xce2f3 = Math[_0x4fba("0x455", "erGJ")](_0xce2f3 / 0x1e) + 0x1;
  const _0x15a419 = {};
  _0x15a419[_0x4fba("0x233", "jbpp")] = _0x4fba("0x40f", "uRDj");
  _0x15a419[_0x4fba("0x38d", "RBak")] = "";
  const _0x100f3c = {};
  _0x100f3c[_0x4fba("0x66", "%wOF")] = _0x15a419;
  const _0x4a9454 = {};
  _0x4a9454[_0x4fba("0x2fd", "^se9")] = 0x2;
  _0x4a9454[_0x4fba("0x2c2", "xR4l")] = [_0x57f391];
  _0x4a9454[_0x4fba("0x23d", "%wOF")] = 0x0;
  _0x4a9454[_0x4fba("0x3ae", "L3O8")] = 0x1;
  _0x4a9454[_0x4fba("0x32c", "xR4l")] = _0x100f3c;
  const _0xebf57b = {};
  _0xebf57b["body"] = JSON[_0x4fba("0x115", "y9W%")](_0x4a9454);
  _0xebf57b[_0x4fba("0x21", "^qsO")] = "POST";
  let _0x1ccd59 = await fetch(_0x4fba("0x3b2", "KcH@"), _0xebf57b);
  _0x1ccd59 = await _0x1ccd59[_0x4fba("0x33b", "*&)n")]();
  try {
    _0x1ccd59 = _0x1ccd59[_0x4fba("0x68", "As#s")]["stMap"][_0x57f391][
      _0x4fba("0x69", "ItEp")
    ][_0x4fba("0x451", "*&)n")](new RegExp("(?<=targetid=)(.*)"))[0x0];
  } catch (_0x21d6ea) {
    _0x1ccd59 = _0x1ccd59[_0x4fba("0x357", "AEok")][_0x4fba("0x4e2", "1%QJ")][
      _0x57f391
    ][_0x4fba("0x18a", "^qsO")][_0x4fba("0x179", "y9W%")](
      new RegExp(_0x4fba("0x4fc", "yEI%"))
    )[0x0];
    _0x1ccd59 = _0x1ccd59[_0x4fba("0x3cf", "As#s")](
      0x9,
      _0x1ccd59[_0x4fba("0x25e", "U&qE")]
    );
  }
  console[_0x4fba("0x504", "wutz")](_0x1ccd59);
  let _0x2f5178 = [];
  for (let _0x2fa305 = 0x0; _0x2fa305 < _0xce2f3; ++_0x2fa305) {
    try {
      _0x2f5178[_0x4fba("0x33c", "qGJj")](
        fetch(
          _0x4fba("0x325", "uRDj") +
            _0x1ccd59 +
            _0x4fba("0x24", "1%QJ") +
            _0x57f391 +
            _0x4fba("0x32d", "xR4l") +
            _0x2fa305 * 0x1e
        )["then"]((_0x28f2f3) => _0x28f2f3[_0x4fba("0x99", "*&)n")]())
      );
    } catch (_0x8005) {}
  }
  for (let _0x29e5ed = 0x0; _0x29e5ed < _0xce2f3; ++_0x29e5ed) {
    let _0x1bc12a;
    try {
      _0x1bc12a = await _0x2f5178[_0x29e5ed];
      _0x1bc12a[_0x4fba("0x29b", "W%Dm")]("\x09", "");
      _0x1bc12a = await JSON[_0x4fba("0x296", "PasG")](_0x1bc12a);
      _0x1bc12a = _0x1bc12a[_0x4fba("0x3b3", "NHUB")];
    } catch (_0x25c76d) {}
    if (!_0x1bc12a) {
      continue;
    }
    let _0x489a62 = Math[_0x4fba("0x4e4", "qGJj")](
      _0x1bc12a[_0x4fba("0x1e5", "%wOF")] / 0x32
    );
    for (
      let _0x1ef80d = 0x0;
      _0x1ef80d < _0x1bc12a[_0x4fba("0x20c", "AEok")];
      _0x1ef80d += _0x489a62
    ) {
      let _0x263abf = _0x4fba("0x31d", "jbpp");
      let _0x5e6589 = 0x0;
      try {
        _0x263abf = await JSON[_0x4fba("0x1e6", "qGJj")](
          _0x1bc12a[_0x1ef80d][_0x4fba("0x44a", "qGJj")]
        );
        _0x5e6589 = _0x263abf[_0x4fba("0x123", "*&)n")];
        _0x263abf = _0x263abf[_0x4fba("0x49", "^qsO")];
        if (_0x263abf == _0x4fba("0x50", "1%QJ")) _0x263abf == "ffffff";
      } catch (_0x10f302) {
        _0x263abf = _0x4fba("0x210", "Fu6J");
        _0x5e6589 = 0x0;
      }
      _0x263abf = parseInt("0x" + (_0x263abf || _0x4fba("0x3b8", "%jf@")));
      const _0x25118b = {};
      _0x25118b["p"] =
        _0x1bc12a[_0x1ef80d]["timepoint"] +
        "," +
        (_0x5e6589 == 0x1 ? 0x5 : 0x1) +
        "," +
        _0x263abf;
      _0x25118b["m"] = _0x1bc12a[_0x1ef80d][_0x4fba("0x347", "OE1m")];
      _0x38ec2f[_0x4fba("0x4cf", "y9W%")](_0x25118b);
    }
  }
  danmakuMaker(_0x38ec2f);
}
