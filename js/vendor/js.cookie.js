! function(e) {
    var n, o, t = !1;
    "function" == typeof define && define.amd && (define(e), t = !0), "object" == typeof exports && (module.exports = e(), t = !0), t || (n = window.Cookies, (o = window.Cookies = e()).noConflict = function() {
        return window.Cookies = n, o
    })
}(function() {
    function l() {
        for (var e = 0, n = {}; e < arguments.length; e++) {
            var o, t = arguments[e];
            for (o in t) n[o] = t[o]
        }
        return n
    }
    return function e(f) {
        function u(e, n, o) {
            var t, i;
            if ("undefined" != typeof document) {
                if (1 < arguments.length) {
                    "number" == typeof(o = l({
                        path: "/"
                    }, u.defaults, o)).expires && ((i = new Date).setMilliseconds(i.getMilliseconds() + 864e5 * o.expires), o.expires = i);
                    try {
                        t = JSON.stringify(n), /^[\{\[]/.test(t) && (n = t)
                    } catch (e) {}
                    return n = f.write ? f.write(n, e) : encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), e = (e = (e = encodeURIComponent(String(e))).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)).replace(/[\(\)]/g, escape), document.cookie = [e, "=", n, o.expires ? "; expires=" + o.expires.toUTCString() : "", o.path ? "; path=" + o.path : "", o.domain ? "; domain=" + o.domain : "", o.secure ? "; secure" : ""].join("")
                }
                e || (t = {});
                for (var r = document.cookie ? document.cookie.split("; ") : [], c = /(%[0-9A-Z]{2})+/g, a = 0; a < r.length; a++) {
                    var p = r[a].split("=");
                    '"' === (d = p.slice(1).join("=")).charAt(0) && (d = d.slice(1, -1));
                    try {
                        var s = p[0].replace(c, decodeURIComponent),
                            d = f.read ? f.read(d, s) : f(d, s) || d.replace(c, decodeURIComponent);
                        if (this.json) try {
                            d = JSON.parse(d)
                        } catch (e) {}
                        if (e === s) {
                            t = d;
                            break
                        }
                        e || (t[s] = d)
                    } catch (e) {}
                }
                return t
            }
        }
        return (u.set = u).get = function(e) {
            return u.call(u, e)
        }, u.getJSON = function() {
            return u.apply({
                json: !0
            }, [].slice.call(arguments))
        }, u.defaults = {}, u.remove = function(e, n) {
            u(e, "", l(n, {
                expires: -1
            }))
        }, u.withConverter = e, u
    }(function() {})
});