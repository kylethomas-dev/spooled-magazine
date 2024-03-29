/**
 * File Leaflet Geosearch
 */
! function (e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.GeoSearch = t() : e.GeoSearch = t()
}(this, function () {
    return function (e) {
        function t(r) {
            if (n[r]) return n[r].exports;
            var o = n[r] = {
                exports: {},
                id: r,
                loaded: !1
            };
            return e[r].call(o.exports, o, o.exports, t), o.loaded = !0, o.exports
        }
        var n = {};
        return t.m = e, t.c = n, t.p = "", t(0)
    }([function (e, t, n) {
        n(2), e.exports = n(7)
    }, function (e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(2),
            a = (r(i), function () {
                function e(e, t) {
                    for (var n = 0; t.length > n; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function (t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }()),
            u = function () {
                function e() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    o(this, e), this.options = t
                }
                return a(e, [{
                    key: "getParamString",
                    value: function (e) {
                        return Object.keys(e).map(function (t) {
                            return encodeURIComponent(t) + "=" + encodeURIComponent(e[t])
                        }).join("&")
                    }
                }, {
                    key: "search",
                    value: function (e) {
                        return new Promise(function (t, n) {
                            var r, o, i, a, u;
                            return r = e.query, o = ~location.protocol.indexOf("http") ? location.protocol : "https:", i = this.endpoint({
                                query: r,
                                protocol: o
                            }), fetch(i).then(function (e) {
                                return a = e, a.json().then(function (e) {
                                    return u = e, t(this.parse({
                                        data: u
                                    }))
                                }.$asyncbind(this, n), n)
                            }.$asyncbind(this, n), n)
                        }.$asyncbind(this))
                    }
                }]), e
            }();
        t.default = u
    }, function (e, t, n) {
        "use strict";

        function r(e, t) {
            for (var n = "" + t, r = "return " + n, o = n.match(/.*\(([^)]*)\)/)[1], i = /['"]!!!([^'"]*)['"]/g, a = [];;) {
                var u = i.exec(r);
                if (!u) break;
                a.push(u)
            }
            return a.reverse().forEach(function (t) {
                r = r.slice(0, t.index) + e[t[1]] + r.substr(t.index + t[0].length)
            }), r = r.replace(/\/\*[^*]*\*\//g, " ").replace(/\s+/g, " "), Function(o, r)()
        }

        function o(e, t) {
            if (Function.prototype.$asyncspawn || Object.defineProperty(Function.prototype, "$asyncspawn", {
                    value: o,
                    enumerable: !1,
                    configurable: !0,
                    writable: !0
                }), this instanceof Function) {
                var n = this;
                return new e(function (e, r) {
                    function o(t, n) {
                        var a;
                        try {
                            if (a = t.call(i, n), a.done) {
                                if (a.value !== e) {
                                    if (a.value && a.value === a.value.then) return a.value(e, r);
                                    e && e(a.value), e = null
                                }
                                return
                            }
                            a.value.then ? a.value.then(function (e) {
                                o(i.next, e)
                            }, function (e) {
                                o(i.throw, e)
                            }) : o(i.next, a.value)
                        } catch (e) {
                            return r && r(e), void(r = null)
                        }
                    }
                    var i = n.call(t, e, r);
                    o(i.next)
                })
            }
        }
        var i = r({
            zousan: "" + n(16),
            thenable: "" + n(15)
        }, function e(t, n) {
            function r() {
                return o.apply(t, arguments)
            }
            Function.prototype.$asyncbind || Object.defineProperty(Function.prototype, "$asyncbind", {
                value: e,
                enumerable: !1,
                configurable: !0,
                writable: !0
            }), e.trampoline || (e.trampoline = function (e, t, n, r, o) {
                return function i(a) {
                    for (; a;) {
                        if (a.then) return a = a.then(i, r), o ? void 0 : a;
                        try {
                            if (a.pop) {
                                if (a.length) return a.pop() ? t.call(e) : a;
                                a = n
                            } else a = a.call(e)
                        } catch (e) {
                            return r(e)
                        }
                    }
                }
            }), e.LazyThenable || (e.LazyThenable = "!!!thenable" (), e.EagerThenable = e.Thenable = (e.EagerThenableFactory = "!!!zousan")());
            var o = this;
            switch (n) {
                case !0:
                    return new e.Thenable(r);
                case 0:
                    return new e.LazyThenable(r);
                case void 0:
                    return r.then = r, r;
                default:
                    return function () {
                        try {
                            return o.apply(t, arguments)
                        } catch (e) {
                            return n(e)
                        }
                    }
            }
        });
        i(), o(), e.exports = {
            $asyncbind: i,
            $asyncspawn: o
        }
    }, function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = t.createElement = function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                r = document.createElement(e);
            return r.className = t, n && n.appendChild(r), r
        };
        t.createScriptElement = function (e, t) {
            var r = n("script", null, document.body);
            return r.setAttribute("type", "text/javascript"), new Promise(function (n) {
                window[t] = function (e) {
                    r.remove(), delete window[t], n(e)
                }, r.setAttribute("src", e)
            })
        }, t.addClassName = function (e, t) {
            e && !e.classList.contains(t) && e.classList.add(t)
        }, t.removeClassName = function (e, t) {
            e && e.classList.contains(t) && e.classList.remove(t)
        }
    }, function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = t.ENTER_KEY = 13,
            r = t.ESCAPE_KEY = 27,
            o = t.ARROW_DOWN_KEY = 40,
            i = t.ARROW_UP_KEY = 38,
            a = t.ARROW_LEFT_KEY = 37,
            u = t.ARROW_RIGHT_KEY = 39;
        t.SPECIAL_KEYS = [n, r, o, i, a, u]
    }, function (e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(2),
            a = (r(i), function () {
                function e(e, t) {
                    for (var n = 0; t.length > n; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function (t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }()),
            u = n(3),
            s = n(4),
            c = function () {
                function e() {
                    var t = this,
                        n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        r = n.handleSubmit,
                        i = void 0 === r ? function () {} : r,
                        a = n.searchLabel,
                        s = void 0 === a ? "search" : a,
                        c = n.classNames,
                        l = void 0 === c ? {} : c;
                    o(this, e);
                    var f = (0, u.createElement)("div", ["geosearch", l.container].join(" ")),
                        p = (0, u.createElement)("form", ["", l.form].join(" "), f),
                        d = (0, u.createElement)("input", ["glass", l.input].join(" "), p);
                    d.type = "text", d.placeholder = s, d.addEventListener("input", function (e) {
                        t.onInput(e)
                    }, !1), d.addEventListener("keyup", function (e) {
                        t.onKeyUp(e)
                    }, !1), d.addEventListener("keypress", function (e) {
                        t.onKeyPress(e)
                    }, !1), d.addEventListener("focus", function (e) {
                        t.onFocus(e)
                    }, !1), d.addEventListener("blur", function (e) {
                        t.onBlur(e)
                    }, !1), this.elements = {
                        container: f,
                        form: p,
                        input: d
                    }, this.handleSubmit = i
                }
                return a(e, [{
                    key: "onFocus",
                    value: function () {
                        (0, u.addClassName)(this.elements.form, "active")
                    }
                }, {
                    key: "onBlur",
                    value: function () {
                        (0, u.removeClassName)(this.elements.form, "active")
                    }
                }, {
                    key: "onSubmit",
                    value: function (e) {
                        return new Promise(function (t, n) {
                            var r, o, i;
                            return e.preventDefault(), e.stopPropagation(), r = this.elements, o = r.input, i = r.container, (0, u.removeClassName)(i, "error"), (0, u.addClassName)(i, "pending"), this.handleSubmit({
                                query: o.value
                            }).then(function (e) {
                                return (0, u.removeClassName)(i, "pending"), t()
                            }.$asyncbind(this, n), n)
                        }.$asyncbind(this))
                    }
                }, {
                    key: "onInput",
                    value: function () {
                        var e = this.elements.container;
                        this.hasError && ((0, u.removeClassName)(e, "error"), this.hasError = !1)
                    }
                }, {
                    key: "onKeyUp",
                    value: function (e) {
                        var t = this.elements,
                            n = t.container,
                            r = t.input;
                        e.keyCode === s.ESCAPE_KEY && ((0, u.removeClassName)(n, "pending"), (0, u.removeClassName)(n, "active"), r.value = "", document.body.focus(), document.body.blur())
                    }
                }, {
                    key: "onKeyPress",
                    value: function (e) {
                        e.keyCode === s.ENTER_KEY && this.onSubmit(e)
                    }
                }, {
                    key: "setQuery",
                    value: function (e) {
                        var t = this.elements.input;
                        t.value = e
                    }
                }]), e
            }();
        t.default = c
    }, function (e, t) {
        function n() {
            throw Error("setTimeout has not been defined")
        }

        function r() {
            throw Error("clearTimeout has not been defined")
        }

        function o(e) {
            if (l === setTimeout) return setTimeout(e, 0);
            if ((l === n || !l) && setTimeout) return l = setTimeout, setTimeout(e, 0);
            try {
                return l(e, 0)
            } catch (t) {
                try {
                    return l.call(null, e, 0)
                } catch (t) {
                    return l.call(this, e, 0)
                }
            }
        }

        function i(e) {
            if (f === clearTimeout) return clearTimeout(e);
            if ((f === r || !f) && clearTimeout) return f = clearTimeout, clearTimeout(e);
            try {
                return f(e)
            } catch (t) {
                try {
                    return f.call(null, e)
                } catch (t) {
                    return f.call(this, e)
                }
            }
        }

        function a() {
            v && d && (v = !1, d.length ? h = d.concat(h) : m = -1, h.length && u())
        }

        function u() {
            if (!v) {
                var e = o(a);
                v = !0;
                for (var t = h.length; t;) {
                    for (d = h, h = []; ++m < t;) d && d[m].run();
                    m = -1, t = h.length
                }
                d = null, v = !1, i(e)
            }
        }

        function s(e, t) {
            this.fun = e, this.array = t
        }

        function c() {}
        var l, f, p = e.exports = {};
        ! function () {
            try {
                l = "function" == typeof setTimeout ? setTimeout : n
            } catch (e) {
                l = n
            }
            try {
                f = "function" == typeof clearTimeout ? clearTimeout : r
            } catch (e) {
                f = r
            }
        }();
        var d, h = [],
            v = !1,
            m = -1;
        p.nextTick = function (e) {
            var t = Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var n = 1; arguments.length > n; n++) t[n - 1] = arguments[n];
            h.push(new s(e, t)), 1 !== h.length || v || o(u)
        }, s.prototype.run = function () {
            this.fun.apply(null, this.array)
        }, p.title = "browser", p.browser = !0, p.env = {}, p.argv = [], p.version = "", p.versions = {}, p.on = c, p.addListener = c, p.once = c, p.off = c, p.removeListener = c, p.removeAllListeners = c, p.emit = c, p.binding = function (e) {
            throw Error("process.binding is not supported")
        }, p.cwd = function () {
            return "/"
        }, p.chdir = function (e) {
            throw Error("process.chdir is not supported")
        }, p.umask = function () {
            return 0
        }
    }, function (e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = n(8);
        Object.defineProperty(t, "GeoSearchControl", {
            enumerable: !0,
            get: function () {
                return r(o).default
            }
        });
        var i = n(5);
        Object.defineProperty(t, "SearchElement", {
            enumerable: !0,
            get: function () {
                return r(i).default
            }
        });
        var a = n(9);
        Object.defineProperty(t, "BingProvider", {
            enumerable: !0,
            get: function () {
                return r(a).default
            }
        });
        var u = n(10);
        Object.defineProperty(t, "EsriProvider", {
            enumerable: !0,
            get: function () {
                return r(u).default
            }
        });
        var s = n(11);
        Object.defineProperty(t, "GoogleProvider", {
            enumerable: !0,
            get: function () {
                return r(s).default
            }
        });
        var c = n(12);
        Object.defineProperty(t, "OpenStreetMapProvider", {
            enumerable: !0,
            get: function () {
                return r(c).default
            }
        });
        var l = n(1);
        Object.defineProperty(t, "Provider", {
            enumerable: !0,
            get: function () {
                return r(l).default
            }
        })
    }, function (e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function o() {
            if (!L || !L.Control || !L.Control.extend) throw Error("Leaflet must be loaded before instantiating the GeoSearch control");
            for (var e = L.Control.extend(b), t = arguments.length, n = Array(t), r = 0; t > r; r++) n[r] = arguments[r];
            return new(Function.prototype.bind.apply(e, [null].concat(n)))
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(2),
            a = (r(i), Object.assign || function (e) {
                for (var t = 1; arguments.length > t; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            });
        t.default = o;
        var u = n(14),
            s = r(u),
            c = n(5),
            l = r(c),
            f = n(13),
            p = r(f),
            d = n(3),
            h = n(4),
            v = function () {
                return {
                    position: "topleft",
                    style: "button",
                    showMarker: !0,
                    showPopup: !1,
                    popupFormat: function (e) {
                        var t = e.result;
                        return "" + t.label
                    },
                    marker: {
                        icon: new L.Icon.Default,
                        draggable: !1
                    },
                    maxMarkers: 1,
                    retainZoomLevel: !1,
                    animateZoom: !0,
                    searchLabel: "Enter address",
                    notFoundMessage: "Sorry, that address could not be found.",
                    messageHideDelay: 3e3,
                    zoomLevel: 18,
                    classNames: {
                        container: "leaflet-bar leaflet-control leaflet-control-geosearch",
                        button: "leaflet-bar-part leaflet-bar-part-single",
                        resetButton: "reset",
                        msgbox: "leaflet-bar message",
                        form: "",
                        input: ""
                    },
                    autoComplete: !0,
                    autoCompleteDelay: 250,
                    autoClose: !1,
                    keepResult: !1
                }
            },
            m = {},
            y = ["dragging", "touchZoom", "doubleClickZoom", "scrollWheelZoom", "boxZoom", "keyboard"],
            b = {
                initialize: function (e) {
                    var t = this;
                    this.markers = new L.FeatureGroup, this.handlersDisabled = !1, this.options = a({}, v(), e);
                    var n = this.options,
                        r = n.style,
                        o = n.classNames,
                        i = n.searchLabel,
                        u = n.autoComplete,
                        c = n.autoCompleteDelay;
                    "button" !== r && (this.options.classNames.container += " " + e.style), this.searchElement = new l.default(a({}, this.options, {
                        handleSubmit: function (e) {
                            return t.onSubmit(e)
                        }
                    }));
                    var f = this.searchElement.elements,
                        h = f.container,
                        m = f.form,
                        y = f.input,
                        b = (0, d.createElement)("a", o.button, h);
                    b.title = i, b.href = "#", b.addEventListener("click", function (e) {
                        t.onClick(e)
                    }, !1);
                    var g = (0, d.createElement)("a", o.resetButton, m);
                    g.innerHTML = "X", b.href = "#", g.addEventListener("click", function () {
                        t.clearResults(null, !0)
                    }, !1), u && (this.resultList = new p.default({
                        handleClick: function (e) {
                            var n = e.result;
                            y.value = n.label, t.onSubmit({
                                query: n.label
                            })
                        }
                    }), m.appendChild(this.resultList.elements.container), y.addEventListener("keyup", (0, s.default)(function (e) {
                        return t.autoSearch(e)
                    }, c), !0), y.addEventListener("keydown", function (e) {
                        return t.selectResult(e)
                    }, !0), y.addEventListener("keydown", function (e) {
                        return t.clearResults(e, !0)
                    }, !0)), m.addEventListener("mouseenter", function (e) {
                        return t.disableHandlers(e)
                    }, !0), m.addEventListener("mouseleave", function (e) {
                        return t.restoreHandlers(e)
                    }, !0), this.elements = {
                        button: b,
                        resetButton: g
                    }
                },
                onAdd: function (e) {
                    var t = this.options,
                        n = t.showMarker,
                        r = t.style;
                    if (this.map = e, n && this.markers.addTo(e), "bar" === r) {
                        var o = this.searchElement.elements.form,
                            i = e.getContainer().querySelector(".leaflet-control-container"),
                            a = (0, d.createElement)("div", "leaflet-control-geosearch bar");
                        a.appendChild(o), i.appendChild(a), this.elements.container = a
                    }
                    return this.searchElement.elements.container
                },
                onRemove: function () {
                    var e = this.elements.container;
                    return e && e.remove(), this
                },
                onClick: function (e) {
                    e.preventDefault();
                    var t = this.searchElement.elements,
                        n = t.container,
                        r = t.input;
                    n.classList.contains("active") ? ((0, d.removeClassName)(n, "active"), this.clearResults()) : ((0, d.addClassName)(n, "active"), r.focus())
                },
                disableHandlers: function (e) {
                    var t = this,
                        n = this.searchElement.elements.form;
                    this.handlersDisabled || e && e.target !== n || (this.handlersDisabled = !0, y.forEach(function (e) {
                        t.map[e] && (m[e] = t.map[e].enabled(), t.map[e].disable())
                    }))
                },
                restoreHandlers: function (e) {
                    var t = this,
                        n = this.searchElement.elements.form;
                    !this.handlersDisabled || e && e.target !== n || (this.handlersDisabled = !1, y.forEach(function (e) {
                        m[e] && t.map[e].enable()
                    }))
                },
                selectResult: function (e) {
                    if ([h.ENTER_KEY, h.ARROW_DOWN_KEY, h.ARROW_UP_KEY].includes(e.keyCode)) {
                        e.preventDefault();
                        var t = this.searchElement.elements.input;
                        if (e.keyCode === h.ENTER_KEY) return void this.onSubmit({
                            query: t.value
                        });
                        var n = this.resultList,
                            r = n.count() - 1;
                        if (r >= 0) {
                            var o = "ArrowDown" === e.code ? ~~n.selected + 1 : ~~n.selected - 1,
                                i = 0 > o ? r : o > r ? 0 : o,
                                a = n.select(i);
                            t.value = a.label
                        }
                    }
                },
                clearResults: function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    if (!e || e.keyCode === h.ESCAPE_KEY) {
                        var n = this.searchElement.elements.input,
                            r = this.options,
                            o = r.keepResult,
                            i = r.autoComplete;
                        !t && o || (n.value = "", this.markers.clearLayers()), i && this.resultList.clear()
                    }
                },
                autoSearch: function (e) {
                    return new Promise(function (t, n) {
                        function r() {
                            return t()
                        }
                        var o, i, a;
                        return h.SPECIAL_KEYS.includes(e.keyCode) ? t() : (o = e.target.value, i = this.options.provider, o.length ? i.search({
                            query: o
                        }).then(function (e) {
                            return a = e, this.resultList.render(a), r.call(this)
                        }.$asyncbind(this, n), n) : (this.resultList.clear(), r.call(this)))
                    }.$asyncbind(this))
                },
                onSubmit: function (e) {
                    return new Promise(function (t, n) {
                        var r, o;
                        return r = this.options.provider, r.search(e).then(function (n) {
                            return o = n, o && o.length > 0 && this.showResult(o[0], e), t()
                        }.$asyncbind(this, n), n)
                    }.$asyncbind(this))
                },
                showResult: function (e, t) {
                    var n = t.query,
                        r = this.options.autoClose,
                        o = Object.keys(this.markers._layers);
                    this.options.maxMarkers > o.length || this.markers.removeLayer(o[0]);
                    var i = this.addMarker(e, n);
                    this.centerMap(e), this.map.fireEvent("geosearch/showlocation", {
                        location: e,
                        marker: i
                    }), r && this.closeResults()
                },
                closeResults: function () {
                    var e = this.searchElement.elements.container;
                    e.classList.contains("active") && (0, d.removeClassName)(e, "active"), this.restoreHandlers(), this.clearResults()
                },
                addMarker: function (e, t) {
                    var n = this,
                        r = this.options,
                        o = r.marker,
                        i = r.showPopup,
                        a = r.popupFormat,
                        u = new L.Marker([e.y, e.x], o),
                        s = e.label;
                    return "function" == typeof a && (s = a({
                        query: t,
                        result: e
                    })), u.bindPopup(s), this.markers.addLayer(u), i && u.openPopup(), o.draggable && u.on("dragend", function (e) {
                        n.map.fireEvent("geosearch/marker/dragend", {
                            location: u.getLatLng(),
                            event: e
                        })
                    }), u
                },
                centerMap: function (e) {
                    var t = this.options,
                        n = t.retainZoomLevel,
                        r = t.animateZoom,
                        o = new L.LatLngBounds(e.bounds),
                        i = o.isValid() ? o : this.markers.getBounds();
                    !n && o.isValid() ? this.map.fitBounds(i, {
                        animate: r
                    }) : this.map.setView(i.getCenter(), this.getZoom(), {
                        animate: r
                    })
                },
                getZoom: function () {
                    var e = this.options,
                        t = e.retainZoomLevel,
                        n = e.zoomLevel;
                    return t ? this.map.getZoom() : n
                }
            }
    }, function (e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function i(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function a(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var u = n(2),
            s = (r(u), Object.assign || function (e) {
                for (var t = 1; arguments.length > t; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }),
            c = function () {
                function e(e, t) {
                    for (var n = 0; t.length > n; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function (t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            l = n(1),
            f = r(l),
            p = n(3),
            d = function (e) {
                function t() {
                    return o(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
                }
                return a(t, e), c(t, [{
                    key: "endpoint",
                    value: function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = e.query,
                            n = e.protocol,
                            r = e.jsonp,
                            o = this.options.params,
                            i = this.getParamString(s({}, o, {
                                query: t,
                                jsonp: r
                            }));
                        return n + "//dev.virtualearth.net/REST/v1/Locations?" + i
                    }
                }, {
                    key: "parse",
                    value: function (e) {
                        var t = e.data;
                        return 0 === t.resourceSets.length ? [] : t.resourceSets[0].resources.map(function (e) {
                            return {
                                x: e.point.coordinates[1],
                                y: e.point.coordinates[0],
                                label: e.address.formattedAddress,
                                bounds: [[e.bbox[0], e.bbox[1]], [e.bbox[2], e.bbox[3]]],
                                raw: e
                            }
                        })
                    }
                }, {
                    key: "search",
                    value: function (e) {
                        return new Promise(function (t, n) {
                            var r, o, i, a, u;
                            return r = e.query, o = ~location.protocol.indexOf("http") ? location.protocol : "https:", i = "BING_JSONP_CB_" + Date.now(), a = this.endpoint({
                                query: r,
                                protocol: o,
                                jsonp: i
                            }), (0, p.createScriptElement)(a, i).then(function (e) {
                                return u = e, t(this.parse({
                                    data: u
                                }))
                            }.$asyncbind(this, n), n)
                        }.$asyncbind(this))
                    }
                }]), t
            }(f.default);
        t.default = d
    }, function (e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function i(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function a(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var u = Object.assign || function (e) {
                for (var t = 1; arguments.length > t; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            s = function () {
                function e(e, t) {
                    for (var n = 0; t.length > n; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function (t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            c = n(1),
            l = r(c),
            f = function (e) {
                function t() {
                    return o(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
                }
                return a(t, e), s(t, [{
                    key: "endpoint",
                    value: function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = e.query,
                            n = e.protocol,
                            r = this.options.params,
                            o = this.getParamString(u({}, r, {
                                f: "json",
                                text: t
                            }));
                        return n + "//geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/find?" + o
                    }
                }, {
                    key: "parse",
                    value: function (e) {
                        var t = e.data;
                        return t.locations.map(function (e) {
                            return {
                                x: e.feature.geometry.x,
                                y: e.feature.geometry.y,
                                label: e.name,
                                bounds: [[e.extent.ymin, e.extent.xmin], [e.extent.ymax, e.extent.xmax]],
                                raw: e
                            }
                        })
                    }
                }]), t
            }(l.default);
        t.default = f
    }, function (e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function i(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function a(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var u = Object.assign || function (e) {
                for (var t = 1; arguments.length > t; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            s = function () {
                function e(e, t) {
                    for (var n = 0; t.length > n; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function (t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            c = n(1),
            l = r(c),
            f = function (e) {
                function t() {
                    return o(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
                }
                return a(t, e), s(t, [{
                    key: "endpoint",
                    value: function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = e.query,
                            n = e.protocol,
                            r = this.options.params,
                            o = this.getParamString(u({}, r, {
                                address: t
                            })),
                            i = r && r.key ? "https:" : n;
                        return i + "//maps.googleapis.com/maps/api/geocode/json?" + o
                    }
                }, {
                    key: "parse",
                    value: function (e) {
                        var t = e.data;
                        return t.results.map(function (e) {
                            return {
                                x: e.geometry.location.lng,
                                y: e.geometry.location.lat,
                                label: e.formatted_address,
                                bounds: [[e.geometry.viewport.southwest.lat, e.geometry.viewport.southwest.lng], [e.geometry.viewport.northeast.lat, e.geometry.viewport.northeast.lng]],
                                raw: e
                            }
                        })
                    }
                }]), t
            }(l.default);
        t.default = f
    }, function (e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function i(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function a(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var u = Object.assign || function (e) {
                for (var t = 1; arguments.length > t; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            s = function () {
                function e(e, t) {
                    for (var n = 0; t.length > n; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function (t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            c = n(1),
            l = r(c),
            f = function (e) {
                function t() {
                    return o(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
                }
                return a(t, e), s(t, [{
                    key: "endpoint",
                    value: function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = e.query,
                            n = e.protocol,
                            r = this.options.params,
                            o = this.getParamString(u({}, r, {
                                format: "json",
                                q: t
                            }));
                        return n + "//nominatim.openstreetmap.org/search?" + o
                    }
                }, {
                    key: "parse",
                    value: function (e) {
                        var t = e.data;
                        return t.map(function (e) {
                            return {
                                x: e.lon,
                                y: e.lat,
                                label: e.display_name,
                                bounds: [[parseFloat(e.boundingbox[0]), parseFloat(e.boundingbox[2])], [parseFloat(e.boundingbox[1]), parseFloat(e.boundingbox[3])]],
                                raw: e
                            }
                        })
                    }
                }]), t
            }(l.default);
        t.default = f
    }, function (e, t, n) {
        "use strict";

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = function () {
                function e(e, t) {
                    for (var n = 0; t.length > n; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function (t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            i = n(3),
            a = function () {
                for (var e = arguments.length, t = Array(e), n = 0; e > n; n++) t[n] = arguments[n];
                return t.join(" ").trim()
            },
            u = function () {
                function e() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = t.handleClick,
                        o = void 0 === n ? function () {} : n,
                        u = t.classNames,
                        c = void 0 === u ? {} : u;
                    r(this, e), s.call(this), this.props = {
                        handleClick: o,
                        classNames: c
                    }, this.selected = -1;
                    var l = (0, i.createElement)("div", a("results", c.container)),
                        f = (0, i.createElement)("div", a(c.item));
                    l.addEventListener("click", this.onClick, !0), this.elements = {
                        container: l,
                        resultItem: f
                    }
                }
                return o(e, [{
                    key: "render",
                    value: function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                            t = this.elements,
                            n = t.container,
                            r = t.resultItem;
                        this.clear(), e.forEach(function (e, t) {
                            var o = r.cloneNode(!0);
                            o.setAttribute("data-key", t), o.innerHTML = e.label, n.appendChild(o)
                        }), e.length > 0 && (0, i.addClassName)(n, "active"), this.results = e
                    }
                }, {
                    key: "select",
                    value: function (e) {
                        var t = this.elements.container;
                        return Array.from(t.children).forEach(function (t, n) {
                            return n === e ? (0, i.addClassName)(t, "active") : (0, i.removeClassName)(t, "active")
                        }), this.selected = e, this.results[e]
                    }
                }, {
                    key: "count",
                    value: function () {
                        return this.results ? this.results.length : 0
                    }
                }, {
                    key: "clear",
                    value: function () {
                        var e = this.elements.container;
                        for (this.selected = -1; e.lastChild;) e.removeChild(e.lastChild);
                        (0, i.removeClassName)(e, "active")
                    }
                }]), e
            }(),
            s = function () {
                var e = this;
                this.onClick = function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = t.target,
                        r = e.props.handleClick,
                        o = e.elements.container;
                    if (n.parentNode === o && n.hasAttribute("data-key")) {
                        var i = n.getAttribute("data-key"),
                            a = e.results[i];
                        r({
                            result: a
                        })
                    }
                }
            };
        t.default = u
    }, function (e, t) {
        (function (t) {
            function n(e, t, n) {
                function o(t) {
                    var n = v,
                        r = m;
                    return v = m = void 0, O = t, b = e.apply(r, n)
                }

                function i(e) {
                    return O = e, g = setTimeout(l, t), k ? o(e) : b
                }

                function s(e) {
                    var n = e - j,
                        r = e - O,
                        o = t - n;
                    return P ? _(o, y - r) : o
                }

                function c(e) {
                    var n = e - j,
                        r = e - O;
                    return void 0 === j || n >= t || 0 > n || P && r >= y
                }

                function l() {
                    var e = E();
                    return c(e) ? f(e) : void(g = setTimeout(l, s(e)))
                }

                function f(e) {
                    return g = void 0, T && v ? o(e) : (v = m = void 0, b)
                }

                function p() {
                    void 0 !== g && clearTimeout(g), O = 0, v = j = m = g = void 0
                }

                function d() {
                    return void 0 === g ? b : f(E())
                }

                function h() {
                    var e = E(),
                        n = c(e);
                    if (v = arguments, m = this, j = e, n) {
                        if (void 0 === g) return i(j);
                        if (P) return g = setTimeout(l, t), o(j)
                    }
                    return void 0 === g && (g = setTimeout(l, t)), b
                }
                var v, m, y, b, g, j, O = 0,
                    k = !1,
                    P = !1,
                    T = !0;
                if ("function" != typeof e) throw new TypeError(u);
                return t = a(t) || 0, r(n) && (k = !!n.leading, P = "maxWait" in n, y = P ? w(a(n.maxWait) || 0, t) : y, T = "trailing" in n ? !!n.trailing : T), h.cancel = p, h.flush = d, h
            }

            function r(e) {
                var t = typeof e;
                return !!e && ("object" == t || "function" == t)
            }

            function o(e) {
                return !!e && "object" == typeof e
            }

            function i(e) {
                return "symbol" == typeof e || o(e) && g.call(e) == c
            }

            function a(e) {
                if ("number" == typeof e) return e;
                if (i(e)) return s;
                if (r(e)) {
                    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                    e = r(t) ? t + "" : t
                }
                if ("string" != typeof e) return 0 === e ? e : +e;
                e = e.replace(l, "");
                var n = p.test(e);
                return n || d.test(e) ? h(e.slice(2), n ? 2 : 8) : f.test(e) ? s : +e
            }
            var u = "Expected a function",
                s = NaN,
                c = "[object Symbol]",
                l = /^\s+|\s+$/g,
                f = /^[-+]0x[0-9a-f]+$/i,
                p = /^0b[01]+$/i,
                d = /^0o[0-7]+$/i,
                h = parseInt,
                v = "object" == typeof t && t && t.Object === Object && t,
                m = "object" == typeof self && self && self.Object === Object && self,
                y = v || m || Function("return this")(),
                b = Object.prototype,
                g = b.toString,
                w = Math.max,
                _ = Math.min,
                E = function () {
                    return y.Date.now()
                };
            e.exports = n
        }).call(t, function () {
            return this
        }())
    }, function (e, t) {
        e.exports = function () {
            function e(e) {
                return e && e instanceof Object && "function" == typeof e.then
            }

            function t(n, r, o) {
                try {
                    var i = o ? o(r) : r;
                    if (n === i) return n.reject(new TypeError("Promise resolution loop"));
                    e(i) ? i.then(function (e) {
                        t(n, e)
                    }, function (e) {
                        n.reject(e)
                    }) : n.resolve(i)
                } catch (e) {
                    n.reject(e)
                }
            }

            function n() {}

            function r(e) {}

            function o(e, t) {
                this.resolve = e, this.reject = t
            }

            function i(r, o) {
                var i = new n;
                try {
                    this._resolver(function (n) {
                        return e(n) ? n.then(r, o) : t(i, n, r)
                    }, function (e) {
                        t(i, e, o)
                    })
                } catch (e) {
                    t(i, e, o)
                }
                return i
            }

            function a(e) {
                this._resolver = e, this.then = i
            }
            return n.prototype = {
                resolve: r,
                reject: r,
                then: o
            }, a.resolve = function (e) {
                return a.isThenable(e) ? e : {
                    then: function (t) {
                        return t(e)
                    }
                }
            }, a.isThenable = e, a
        }
    }, function (e, t, n) {
        (function (t, n) {
            "use strict";
            e.exports = function (e) {
                function r(e) {
                    if (e) {
                        var t = this;
                        e(function (e) {
                            t.resolve(e)
                        }, function (e) {
                            t.reject(e)
                        })
                    }
                }

                function o(e, t) {
                    if ("function" == typeof e.y) try {
                        var n = e.y.call(void 0, t);
                        e.p.resolve(n)
                    } catch (t) {
                        e.p.reject(t)
                    } else e.p.resolve(t)
                }

                function i(e, t) {
                    if ("function" == typeof e.n) try {
                        var n = e.n.call(void 0, t);
                        e.p.resolve(n)
                    } catch (t) {
                        e.p.reject(t)
                    } else e.p.reject(t)
                }
                e = e || "object" == typeof t && t.nextTick || "function" == typeof n && n || function (e) {
                    setTimeout(e, 0)
                };
                var a = function () {
                    function t() {
                        for (; n.length - r;) {
                            try {
                                n[r]()
                            } catch (e) {}
                            n[r++] = void 0, r === o && (n.splice(0, o), r = 0)
                        }
                    }
                    var n = [],
                        r = 0,
                        o = 1024;
                    return function (o) {
                        n.push(o), n.length - r === 1 && e(t)
                    }
                }();
                return r.prototype = {
                    resolve: function (e) {
                        if (void 0 === this.state) {
                            if (e === this) return this.reject(new TypeError("Attempt to resolve promise with self"));
                            var t = this;
                            if (e && ("function" == typeof e || "object" == typeof e)) try {
                                var n = 0,
                                    r = e.then;
                                if ("function" == typeof r) return void r.call(e, function (e) {
                                    n++ || t.resolve(e)
                                }, function (e) {
                                    n++ || t.reject(e)
                                })
                            } catch (e) {
                                return void(n || this.reject(e))
                            }
                            this.state = o, this.v = e, t.c && a(function () {
                                for (var n = 0, r = t.c.length; r > n; n++) o(t.c[n], e)
                            })
                        }
                    },
                    reject: function (e) {
                        if (void 0 === this.state) {
                            this.state = i, this.v = e;
                            var t = this.c;
                            t && a(function () {
                                for (var n = 0, r = t.length; r > n; n++) i(t[n], e)
                            })
                        }
                    },
                    then: function (e, t) {
                        var n = new r,
                            o = {
                                y: e,
                                n: t,
                                p: n
                            };
                        if (void 0 === this.state) this.c ? this.c.push(o) : this.c = [o];
                        else {
                            var i = this.state,
                                u = this.v;
                            a(function () {
                                i(o, u)
                            })
                        }
                        return n
                    }
                }, r.resolve = function (e) {
                    if (e && e instanceof r) return e;
                    var t = new r;
                    return t.resolve(e), t
                }, r.reject = function (e) {
                    if (e && e instanceof r) return e;
                    var t = new r;
                    return t.reject(e), t
                }, r.version = "2.3.3-nodent", r
            }
        }).call(t, n(6), n(18).setImmediate)
    }, function (e, t, n) {
        (function (e, t) {
            ! function (e, n) {
                "use strict";

                function r(e) {
                    "function" != typeof e && (e = Function("" + e));
                    for (var t = Array(arguments.length - 1), n = 0; t.length > n; n++) t[n] = arguments[n + 1];
                    var r = {
                        callback: e,
                        args: t
                    };
                    return v[h] = r, d(h), h++
                }

                function o(e) {
                    delete v[e]
                }

                function i(e) {
                    var t = e.callback,
                        r = e.args;
                    switch (r.length) {
                        case 0:
                            t();
                            break;
                        case 1:
                            t(r[0]);
                            break;
                        case 2:
                            t(r[0], r[1]);
                            break;
                        case 3:
                            t(r[0], r[1], r[2]);
                            break;
                        default:
                            t.apply(n, r)
                    }
                }

                function a(e) {
                    if (m) setTimeout(a, 0, e);
                    else {
                        var t = v[e];
                        if (t) {
                            m = !0;
                            try {
                                i(t)
                            } finally {
                                o(e), m = !1
                            }
                        }
                    }
                }

                function u() {
                    d = function (e) {
                        t.nextTick(function () {
                            a(e)
                        })
                    }
                }

                function s() {
                    if (e.postMessage && !e.importScripts) {
                        var t = !0,
                            n = e.onmessage;
                        return e.onmessage = function () {
                            t = !1
                        }, e.postMessage("", "*"), e.onmessage = n, t
                    }
                }

                function c() {
                    var t = "setImmediate$" + Math.random() + "$",
                        n = function (n) {
                            n.source === e && "string" == typeof n.data && 0 === n.data.indexOf(t) && a(+n.data.slice(t.length))
                        };
                    e.addEventListener ? e.addEventListener("message", n, !1) : e.attachEvent("onmessage", n), d = function (n) {
                        e.postMessage(t + n, "*")
                    }
                }

                function l() {
                    var e = new MessageChannel;
                    e.port1.onmessage = function (e) {
                        var t = e.data;
                        a(t)
                    }, d = function (t) {
                        e.port2.postMessage(t)
                    }
                }

                function f() {
                    var e = y.documentElement;
                    d = function (t) {
                        var n = y.createElement("script");
                        n.onreadystatechange = function () {
                            a(t), n.onreadystatechange = null, e.removeChild(n), n = null
                        }, e.appendChild(n)
                    }
                }

                function p() {
                    d = function (e) {
                        setTimeout(a, 0, e)
                    }
                }
                if (!e.setImmediate) {
                    var d, h = 1,
                        v = {},
                        m = !1,
                        y = e.document,
                        b = Object.getPrototypeOf && Object.getPrototypeOf(e);
                    b = b && b.setTimeout ? b : e, "[object process]" === {}.toString.call(e.process) ? u() : s() ? c() : e.MessageChannel ? l() : y && "onreadystatechange" in y.createElement("script") ? f() : p(), b.setImmediate = r, b.clearImmediate = o
                }
            }("undefined" == typeof self ? void 0 === e ? this : e : self)
        }).call(t, function () {
            return this
        }(), n(6))
    }, function (e, t, n) {
        function r(e, t) {
            this._id = e, this._clearFn = t
        }
        var o = Function.prototype.apply;
        t.setTimeout = function () {
            return new r(o.call(setTimeout, window, arguments), clearTimeout)
        }, t.setInterval = function () {
            return new r(o.call(setInterval, window, arguments), clearInterval)
        }, t.clearTimeout = t.clearInterval = function (e) {
            e && e.close()
        }, r.prototype.unref = r.prototype.ref = function () {}, r.prototype.close = function () {
            this._clearFn.call(window, this._id)
        }, t.enroll = function (e, t) {
            clearTimeout(e._idleTimeoutId), e._idleTimeout = t
        }, t.unenroll = function (e) {
            clearTimeout(e._idleTimeoutId), e._idleTimeout = -1
        }, t._unrefActive = t.active = function (e) {
            clearTimeout(e._idleTimeoutId);
            var t = e._idleTimeout;
            0 > t || (e._idleTimeoutId = setTimeout(function () {
                e._onTimeout && e._onTimeout()
            }, t))
        }, n(17), t.setImmediate = setImmediate, t.clearImmediate = clearImmediate
    }])
});
