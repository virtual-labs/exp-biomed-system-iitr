(function () {
  const c = document.createElement("link").relList;
  if (c && c.supports && c.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const v of o)
      if (v.type === "childList")
        for (const m of v.addedNodes)
          m.tagName === "LINK" && m.rel === "modulepreload" && r(m);
  }).observe(document, { childList: !0, subtree: !0 });
  function s(o) {
    const v = {};
    return (
      o.integrity && (v.integrity = o.integrity),
      o.referrerPolicy && (v.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (v.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (v.credentials = "omit")
        : (v.credentials = "same-origin"),
      v
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const v = s(o);
    fetch(o.href, v);
  }
})();
function x0(u) {
  return u && u.__esModule && Object.prototype.hasOwnProperty.call(u, "default")
    ? u.default
    : u;
}
var cc = { exports: {} },
  ai = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Yh;
function up() {
  if (Yh) return ai;
  Yh = 1;
  var u = Symbol.for("react.transitional.element"),
    c = Symbol.for("react.fragment");
  function s(r, o, v) {
    var m = null;
    if (
      (v !== void 0 && (m = "" + v),
      o.key !== void 0 && (m = "" + o.key),
      "key" in o)
    ) {
      v = {};
      for (var p in o) p !== "key" && (v[p] = o[p]);
    } else v = o;
    return (
      (o = v.ref),
      { $$typeof: u, type: r, key: m, ref: o !== void 0 ? o : null, props: v }
    );
  }
  return (ai.Fragment = c), (ai.jsx = s), (ai.jsxs = s), ai;
}
var Xh;
function rp() {
  return Xh || ((Xh = 1), (cc.exports = up())), cc.exports;
}
var T = rp(),
  fc = { exports: {} },
  se = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Zh;
function sp() {
  if (Zh) return se;
  Zh = 1;
  var u = Symbol.for("react.transitional.element"),
    c = Symbol.for("react.portal"),
    s = Symbol.for("react.fragment"),
    r = Symbol.for("react.strict_mode"),
    o = Symbol.for("react.profiler"),
    v = Symbol.for("react.consumer"),
    m = Symbol.for("react.context"),
    p = Symbol.for("react.forward_ref"),
    y = Symbol.for("react.suspense"),
    h = Symbol.for("react.memo"),
    g = Symbol.for("react.lazy"),
    E = Symbol.iterator;
  function R(b) {
    return b === null || typeof b != "object"
      ? null
      : ((b = (E && b[E]) || b["@@iterator"]),
        typeof b == "function" ? b : null);
  }
  var z = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    Z = Object.assign,
    M = {};
  function $(b, C, H) {
    (this.props = b),
      (this.context = C),
      (this.refs = M),
      (this.updater = H || z);
  }
  ($.prototype.isReactComponent = {}),
    ($.prototype.setState = function (b, C) {
      if (typeof b != "object" && typeof b != "function" && b != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, b, C, "setState");
    }),
    ($.prototype.forceUpdate = function (b) {
      this.updater.enqueueForceUpdate(this, b, "forceUpdate");
    });
  function J() {}
  J.prototype = $.prototype;
  function ie(b, C, H) {
    (this.props = b),
      (this.context = C),
      (this.refs = M),
      (this.updater = H || z);
  }
  var F = (ie.prototype = new J());
  (F.constructor = ie), Z(F, $.prototype), (F.isPureReactComponent = !0);
  var fe = Array.isArray,
    Q = { H: null, A: null, T: null, S: null, V: null },
    re = Object.prototype.hasOwnProperty;
  function he(b, C, H, B, K, te) {
    return (
      (H = te.ref),
      { $$typeof: u, type: b, key: C, ref: H !== void 0 ? H : null, props: te }
    );
  }
  function W(b, C) {
    return he(b.type, C, void 0, void 0, void 0, b.props);
  }
  function Be(b) {
    return typeof b == "object" && b !== null && b.$$typeof === u;
  }
  function qt(b) {
    var C = { "=": "=0", ":": "=2" };
    return (
      "$" +
      b.replace(/[=:]/g, function (H) {
        return C[H];
      })
    );
  }
  var it = /\/+/g;
  function we(b, C) {
    return typeof b == "object" && b !== null && b.key != null
      ? qt("" + b.key)
      : C.toString(36);
  }
  function Nt() {}
  function k(b) {
    switch (b.status) {
      case "fulfilled":
        return b.value;
      case "rejected":
        throw b.reason;
      default:
        switch (
          (typeof b.status == "string"
            ? b.then(Nt, Nt)
            : ((b.status = "pending"),
              b.then(
                function (C) {
                  b.status === "pending" &&
                    ((b.status = "fulfilled"), (b.value = C));
                },
                function (C) {
                  b.status === "pending" &&
                    ((b.status = "rejected"), (b.reason = C));
                }
              )),
          b.status)
        ) {
          case "fulfilled":
            return b.value;
          case "rejected":
            throw b.reason;
        }
    }
    throw b;
  }
  function Y(b, C, H, B, K) {
    var te = typeof b;
    (te === "undefined" || te === "boolean") && (b = null);
    var le = !1;
    if (b === null) le = !0;
    else
      switch (te) {
        case "bigint":
        case "string":
        case "number":
          le = !0;
          break;
        case "object":
          switch (b.$$typeof) {
            case u:
            case c:
              le = !0;
              break;
            case g:
              return (le = b._init), Y(le(b._payload), C, H, B, K);
          }
      }
    if (le)
      return (
        (K = K(b)),
        (le = B === "" ? "." + we(b, 0) : B),
        fe(K)
          ? ((H = ""),
            le != null && (H = le.replace(it, "$&/") + "/"),
            Y(K, C, H, "", function (da) {
              return da;
            }))
          : K != null &&
            (Be(K) &&
              (K = W(
                K,
                H +
                  (K.key == null || (b && b.key === K.key)
                    ? ""
                    : ("" + K.key).replace(it, "$&/") + "/") +
                  le
              )),
            C.push(K)),
        1
      );
    le = 0;
    var ut = B === "" ? "." : B + ":";
    if (fe(b))
      for (var _e = 0; _e < b.length; _e++)
        (B = b[_e]), (te = ut + we(B, _e)), (le += Y(B, C, H, te, K));
    else if (((_e = R(b)), typeof _e == "function"))
      for (b = _e.call(b), _e = 0; !(B = b.next()).done; )
        (B = B.value), (te = ut + we(B, _e++)), (le += Y(B, C, H, te, K));
    else if (te === "object") {
      if (typeof b.then == "function") return Y(k(b), C, H, B, K);
      throw (
        ((C = String(b)),
        Error(
          "Objects are not valid as a React child (found: " +
            (C === "[object Object]"
              ? "object with keys {" + Object.keys(b).join(", ") + "}"
              : C) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    }
    return le;
  }
  function O(b, C, H) {
    if (b == null) return b;
    var B = [],
      K = 0;
    return (
      Y(b, B, "", "", function (te) {
        return C.call(H, te, K++);
      }),
      B
    );
  }
  function w(b) {
    if (b._status === -1) {
      var C = b._result;
      (C = C()),
        C.then(
          function (H) {
            (b._status === 0 || b._status === -1) &&
              ((b._status = 1), (b._result = H));
          },
          function (H) {
            (b._status === 0 || b._status === -1) &&
              ((b._status = 2), (b._result = H));
          }
        ),
        b._status === -1 && ((b._status = 0), (b._result = C));
    }
    if (b._status === 1) return b._result.default;
    throw b._result;
  }
  var G =
    typeof reportError == "function"
      ? reportError
      : function (b) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var C = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof b == "object" &&
                b !== null &&
                typeof b.message == "string"
                  ? String(b.message)
                  : String(b),
              error: b,
            });
            if (!window.dispatchEvent(C)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", b);
            return;
          }
          console.error(b);
        };
  function V() {}
  return (
    (se.Children = {
      map: O,
      forEach: function (b, C, H) {
        O(
          b,
          function () {
            C.apply(this, arguments);
          },
          H
        );
      },
      count: function (b) {
        var C = 0;
        return (
          O(b, function () {
            C++;
          }),
          C
        );
      },
      toArray: function (b) {
        return (
          O(b, function (C) {
            return C;
          }) || []
        );
      },
      only: function (b) {
        if (!Be(b))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return b;
      },
    }),
    (se.Component = $),
    (se.Fragment = s),
    (se.Profiler = o),
    (se.PureComponent = ie),
    (se.StrictMode = r),
    (se.Suspense = y),
    (se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Q),
    (se.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (b) {
        return Q.H.useMemoCache(b);
      },
    }),
    (se.cache = function (b) {
      return function () {
        return b.apply(null, arguments);
      };
    }),
    (se.cloneElement = function (b, C, H) {
      if (b == null)
        throw Error(
          "The argument must be a React element, but you passed " + b + "."
        );
      var B = Z({}, b.props),
        K = b.key,
        te = void 0;
      if (C != null)
        for (le in (C.ref !== void 0 && (te = void 0),
        C.key !== void 0 && (K = "" + C.key),
        C))
          !re.call(C, le) ||
            le === "key" ||
            le === "__self" ||
            le === "__source" ||
            (le === "ref" && C.ref === void 0) ||
            (B[le] = C[le]);
      var le = arguments.length - 2;
      if (le === 1) B.children = H;
      else if (1 < le) {
        for (var ut = Array(le), _e = 0; _e < le; _e++)
          ut[_e] = arguments[_e + 2];
        B.children = ut;
      }
      return he(b.type, K, void 0, void 0, te, B);
    }),
    (se.createContext = function (b) {
      return (
        (b = {
          $$typeof: m,
          _currentValue: b,
          _currentValue2: b,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (b.Provider = b),
        (b.Consumer = { $$typeof: v, _context: b }),
        b
      );
    }),
    (se.createElement = function (b, C, H) {
      var B,
        K = {},
        te = null;
      if (C != null)
        for (B in (C.key !== void 0 && (te = "" + C.key), C))
          re.call(C, B) &&
            B !== "key" &&
            B !== "__self" &&
            B !== "__source" &&
            (K[B] = C[B]);
      var le = arguments.length - 2;
      if (le === 1) K.children = H;
      else if (1 < le) {
        for (var ut = Array(le), _e = 0; _e < le; _e++)
          ut[_e] = arguments[_e + 2];
        K.children = ut;
      }
      if (b && b.defaultProps)
        for (B in ((le = b.defaultProps), le))
          K[B] === void 0 && (K[B] = le[B]);
      return he(b, te, void 0, void 0, null, K);
    }),
    (se.createRef = function () {
      return { current: null };
    }),
    (se.forwardRef = function (b) {
      return { $$typeof: p, render: b };
    }),
    (se.isValidElement = Be),
    (se.lazy = function (b) {
      return { $$typeof: g, _payload: { _status: -1, _result: b }, _init: w };
    }),
    (se.memo = function (b, C) {
      return { $$typeof: h, type: b, compare: C === void 0 ? null : C };
    }),
    (se.startTransition = function (b) {
      var C = Q.T,
        H = {};
      Q.T = H;
      try {
        var B = b(),
          K = Q.S;
        K !== null && K(H, B),
          typeof B == "object" &&
            B !== null &&
            typeof B.then == "function" &&
            B.then(V, G);
      } catch (te) {
        G(te);
      } finally {
        Q.T = C;
      }
    }),
    (se.unstable_useCacheRefresh = function () {
      return Q.H.useCacheRefresh();
    }),
    (se.use = function (b) {
      return Q.H.use(b);
    }),
    (se.useActionState = function (b, C, H) {
      return Q.H.useActionState(b, C, H);
    }),
    (se.useCallback = function (b, C) {
      return Q.H.useCallback(b, C);
    }),
    (se.useContext = function (b) {
      return Q.H.useContext(b);
    }),
    (se.useDebugValue = function () {}),
    (se.useDeferredValue = function (b, C) {
      return Q.H.useDeferredValue(b, C);
    }),
    (se.useEffect = function (b, C, H) {
      var B = Q.H;
      if (typeof H == "function")
        throw Error(
          "useEffect CRUD overload is not enabled in this build of React."
        );
      return B.useEffect(b, C);
    }),
    (se.useId = function () {
      return Q.H.useId();
    }),
    (se.useImperativeHandle = function (b, C, H) {
      return Q.H.useImperativeHandle(b, C, H);
    }),
    (se.useInsertionEffect = function (b, C) {
      return Q.H.useInsertionEffect(b, C);
    }),
    (se.useLayoutEffect = function (b, C) {
      return Q.H.useLayoutEffect(b, C);
    }),
    (se.useMemo = function (b, C) {
      return Q.H.useMemo(b, C);
    }),
    (se.useOptimistic = function (b, C) {
      return Q.H.useOptimistic(b, C);
    }),
    (se.useReducer = function (b, C, H) {
      return Q.H.useReducer(b, C, H);
    }),
    (se.useRef = function (b) {
      return Q.H.useRef(b);
    }),
    (se.useState = function (b) {
      return Q.H.useState(b);
    }),
    (se.useSyncExternalStore = function (b, C, H) {
      return Q.H.useSyncExternalStore(b, C, H);
    }),
    (se.useTransition = function () {
      return Q.H.useTransition();
    }),
    (se.version = "19.1.1"),
    se
  );
}
var Vh;
function zf() {
  return Vh || ((Vh = 1), (fc.exports = sp())), fc.exports;
}
var Ge = zf();
const O0 = x0(Ge);
var oc = { exports: {} },
  li = {},
  dc = { exports: {} },
  mc = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Qh;
function cp() {
  return (
    Qh ||
      ((Qh = 1),
      (function (u) {
        function c(O, w) {
          var G = O.length;
          O.push(w);
          e: for (; 0 < G; ) {
            var V = (G - 1) >>> 1,
              b = O[V];
            if (0 < o(b, w)) (O[V] = w), (O[G] = b), (G = V);
            else break e;
          }
        }
        function s(O) {
          return O.length === 0 ? null : O[0];
        }
        function r(O) {
          if (O.length === 0) return null;
          var w = O[0],
            G = O.pop();
          if (G !== w) {
            O[0] = G;
            e: for (var V = 0, b = O.length, C = b >>> 1; V < C; ) {
              var H = 2 * (V + 1) - 1,
                B = O[H],
                K = H + 1,
                te = O[K];
              if (0 > o(B, G))
                K < b && 0 > o(te, B)
                  ? ((O[V] = te), (O[K] = G), (V = K))
                  : ((O[V] = B), (O[H] = G), (V = H));
              else if (K < b && 0 > o(te, G)) (O[V] = te), (O[K] = G), (V = K);
              else break e;
            }
          }
          return w;
        }
        function o(O, w) {
          var G = O.sortIndex - w.sortIndex;
          return G !== 0 ? G : O.id - w.id;
        }
        if (
          ((u.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var v = performance;
          u.unstable_now = function () {
            return v.now();
          };
        } else {
          var m = Date,
            p = m.now();
          u.unstable_now = function () {
            return m.now() - p;
          };
        }
        var y = [],
          h = [],
          g = 1,
          E = null,
          R = 3,
          z = !1,
          Z = !1,
          M = !1,
          $ = !1,
          J = typeof setTimeout == "function" ? setTimeout : null,
          ie = typeof clearTimeout == "function" ? clearTimeout : null,
          F = typeof setImmediate < "u" ? setImmediate : null;
        function fe(O) {
          for (var w = s(h); w !== null; ) {
            if (w.callback === null) r(h);
            else if (w.startTime <= O)
              r(h), (w.sortIndex = w.expirationTime), c(y, w);
            else break;
            w = s(h);
          }
        }
        function Q(O) {
          if (((M = !1), fe(O), !Z))
            if (s(y) !== null) (Z = !0), re || ((re = !0), we());
            else {
              var w = s(h);
              w !== null && Y(Q, w.startTime - O);
            }
        }
        var re = !1,
          he = -1,
          W = 5,
          Be = -1;
        function qt() {
          return $ ? !0 : !(u.unstable_now() - Be < W);
        }
        function it() {
          if ((($ = !1), re)) {
            var O = u.unstable_now();
            Be = O;
            var w = !0;
            try {
              e: {
                (Z = !1), M && ((M = !1), ie(he), (he = -1)), (z = !0);
                var G = R;
                try {
                  t: {
                    for (
                      fe(O), E = s(y);
                      E !== null && !(E.expirationTime > O && qt());

                    ) {
                      var V = E.callback;
                      if (typeof V == "function") {
                        (E.callback = null), (R = E.priorityLevel);
                        var b = V(E.expirationTime <= O);
                        if (((O = u.unstable_now()), typeof b == "function")) {
                          (E.callback = b), fe(O), (w = !0);
                          break t;
                        }
                        E === s(y) && r(y), fe(O);
                      } else r(y);
                      E = s(y);
                    }
                    if (E !== null) w = !0;
                    else {
                      var C = s(h);
                      C !== null && Y(Q, C.startTime - O), (w = !1);
                    }
                  }
                  break e;
                } finally {
                  (E = null), (R = G), (z = !1);
                }
                w = void 0;
              }
            } finally {
              w ? we() : (re = !1);
            }
          }
        }
        var we;
        if (typeof F == "function")
          we = function () {
            F(it);
          };
        else if (typeof MessageChannel < "u") {
          var Nt = new MessageChannel(),
            k = Nt.port2;
          (Nt.port1.onmessage = it),
            (we = function () {
              k.postMessage(null);
            });
        } else
          we = function () {
            J(it, 0);
          };
        function Y(O, w) {
          he = J(function () {
            O(u.unstable_now());
          }, w);
        }
        (u.unstable_IdlePriority = 5),
          (u.unstable_ImmediatePriority = 1),
          (u.unstable_LowPriority = 4),
          (u.unstable_NormalPriority = 3),
          (u.unstable_Profiling = null),
          (u.unstable_UserBlockingPriority = 2),
          (u.unstable_cancelCallback = function (O) {
            O.callback = null;
          }),
          (u.unstable_forceFrameRate = function (O) {
            0 > O || 125 < O
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (W = 0 < O ? Math.floor(1e3 / O) : 5);
          }),
          (u.unstable_getCurrentPriorityLevel = function () {
            return R;
          }),
          (u.unstable_next = function (O) {
            switch (R) {
              case 1:
              case 2:
              case 3:
                var w = 3;
                break;
              default:
                w = R;
            }
            var G = R;
            R = w;
            try {
              return O();
            } finally {
              R = G;
            }
          }),
          (u.unstable_requestPaint = function () {
            $ = !0;
          }),
          (u.unstable_runWithPriority = function (O, w) {
            switch (O) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                O = 3;
            }
            var G = R;
            R = O;
            try {
              return w();
            } finally {
              R = G;
            }
          }),
          (u.unstable_scheduleCallback = function (O, w, G) {
            var V = u.unstable_now();
            switch (
              (typeof G == "object" && G !== null
                ? ((G = G.delay),
                  (G = typeof G == "number" && 0 < G ? V + G : V))
                : (G = V),
              O)
            ) {
              case 1:
                var b = -1;
                break;
              case 2:
                b = 250;
                break;
              case 5:
                b = 1073741823;
                break;
              case 4:
                b = 1e4;
                break;
              default:
                b = 5e3;
            }
            return (
              (b = G + b),
              (O = {
                id: g++,
                callback: w,
                priorityLevel: O,
                startTime: G,
                expirationTime: b,
                sortIndex: -1,
              }),
              G > V
                ? ((O.sortIndex = G),
                  c(h, O),
                  s(y) === null &&
                    O === s(h) &&
                    (M ? (ie(he), (he = -1)) : (M = !0), Y(Q, G - V)))
                : ((O.sortIndex = b),
                  c(y, O),
                  Z || z || ((Z = !0), re || ((re = !0), we()))),
              O
            );
          }),
          (u.unstable_shouldYield = qt),
          (u.unstable_wrapCallback = function (O) {
            var w = R;
            return function () {
              var G = R;
              R = w;
              try {
                return O.apply(this, arguments);
              } finally {
                R = G;
              }
            };
          });
      })(mc)),
    mc
  );
}
var $h;
function fp() {
  return $h || (($h = 1), (dc.exports = cp())), dc.exports;
}
var hc = { exports: {} },
  Fe = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var kh;
function op() {
  if (kh) return Fe;
  kh = 1;
  var u = zf();
  function c(y) {
    var h = "https://react.dev/errors/" + y;
    if (1 < arguments.length) {
      h += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var g = 2; g < arguments.length; g++)
        h += "&args[]=" + encodeURIComponent(arguments[g]);
    }
    return (
      "Minified React error #" +
      y +
      "; visit " +
      h +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function s() {}
  var r = {
      d: {
        f: s,
        r: function () {
          throw Error(c(522));
        },
        D: s,
        C: s,
        L: s,
        m: s,
        X: s,
        S: s,
        M: s,
      },
      p: 0,
      findDOMNode: null,
    },
    o = Symbol.for("react.portal");
  function v(y, h, g) {
    var E =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: o,
      key: E == null ? null : "" + E,
      children: y,
      containerInfo: h,
      implementation: g,
    };
  }
  var m = u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function p(y, h) {
    if (y === "font") return "";
    if (typeof h == "string") return h === "use-credentials" ? h : "";
  }
  return (
    (Fe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r),
    (Fe.createPortal = function (y, h) {
      var g =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!h || (h.nodeType !== 1 && h.nodeType !== 9 && h.nodeType !== 11))
        throw Error(c(299));
      return v(y, h, null, g);
    }),
    (Fe.flushSync = function (y) {
      var h = m.T,
        g = r.p;
      try {
        if (((m.T = null), (r.p = 2), y)) return y();
      } finally {
        (m.T = h), (r.p = g), r.d.f();
      }
    }),
    (Fe.preconnect = function (y, h) {
      typeof y == "string" &&
        (h
          ? ((h = h.crossOrigin),
            (h =
              typeof h == "string"
                ? h === "use-credentials"
                  ? h
                  : ""
                : void 0))
          : (h = null),
        r.d.C(y, h));
    }),
    (Fe.prefetchDNS = function (y) {
      typeof y == "string" && r.d.D(y);
    }),
    (Fe.preinit = function (y, h) {
      if (typeof y == "string" && h && typeof h.as == "string") {
        var g = h.as,
          E = p(g, h.crossOrigin),
          R = typeof h.integrity == "string" ? h.integrity : void 0,
          z = typeof h.fetchPriority == "string" ? h.fetchPriority : void 0;
        g === "style"
          ? r.d.S(y, typeof h.precedence == "string" ? h.precedence : void 0, {
              crossOrigin: E,
              integrity: R,
              fetchPriority: z,
            })
          : g === "script" &&
            r.d.X(y, {
              crossOrigin: E,
              integrity: R,
              fetchPriority: z,
              nonce: typeof h.nonce == "string" ? h.nonce : void 0,
            });
      }
    }),
    (Fe.preinitModule = function (y, h) {
      if (typeof y == "string")
        if (typeof h == "object" && h !== null) {
          if (h.as == null || h.as === "script") {
            var g = p(h.as, h.crossOrigin);
            r.d.M(y, {
              crossOrigin: g,
              integrity: typeof h.integrity == "string" ? h.integrity : void 0,
              nonce: typeof h.nonce == "string" ? h.nonce : void 0,
            });
          }
        } else h == null && r.d.M(y);
    }),
    (Fe.preload = function (y, h) {
      if (
        typeof y == "string" &&
        typeof h == "object" &&
        h !== null &&
        typeof h.as == "string"
      ) {
        var g = h.as,
          E = p(g, h.crossOrigin);
        r.d.L(y, g, {
          crossOrigin: E,
          integrity: typeof h.integrity == "string" ? h.integrity : void 0,
          nonce: typeof h.nonce == "string" ? h.nonce : void 0,
          type: typeof h.type == "string" ? h.type : void 0,
          fetchPriority:
            typeof h.fetchPriority == "string" ? h.fetchPriority : void 0,
          referrerPolicy:
            typeof h.referrerPolicy == "string" ? h.referrerPolicy : void 0,
          imageSrcSet:
            typeof h.imageSrcSet == "string" ? h.imageSrcSet : void 0,
          imageSizes: typeof h.imageSizes == "string" ? h.imageSizes : void 0,
          media: typeof h.media == "string" ? h.media : void 0,
        });
      }
    }),
    (Fe.preloadModule = function (y, h) {
      if (typeof y == "string")
        if (h) {
          var g = p(h.as, h.crossOrigin);
          r.d.m(y, {
            as: typeof h.as == "string" && h.as !== "script" ? h.as : void 0,
            crossOrigin: g,
            integrity: typeof h.integrity == "string" ? h.integrity : void 0,
          });
        } else r.d.m(y);
    }),
    (Fe.requestFormReset = function (y) {
      r.d.r(y);
    }),
    (Fe.unstable_batchedUpdates = function (y, h) {
      return y(h);
    }),
    (Fe.useFormState = function (y, h, g) {
      return m.H.useFormState(y, h, g);
    }),
    (Fe.useFormStatus = function () {
      return m.H.useHostTransitionStatus();
    }),
    (Fe.version = "19.1.1"),
    Fe
  );
}
var Kh;
function dp() {
  if (Kh) return hc.exports;
  Kh = 1;
  function u() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
      } catch (c) {
        console.error(c);
      }
  }
  return u(), (hc.exports = op()), hc.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ih;
function mp() {
  if (Ih) return li;
  Ih = 1;
  var u = fp(),
    c = zf(),
    s = dp();
  function r(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++)
        t += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function o(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function v(e) {
    var t = e,
      a = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), (t.flags & 4098) !== 0 && (a = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? a : null;
  }
  function m(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function p(e) {
    if (v(e) !== e) throw Error(r(188));
  }
  function y(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = v(e)), t === null)) throw Error(r(188));
      return t !== e ? null : e;
    }
    for (var a = e, l = t; ; ) {
      var n = a.return;
      if (n === null) break;
      var i = n.alternate;
      if (i === null) {
        if (((l = n.return), l !== null)) {
          a = l;
          continue;
        }
        break;
      }
      if (n.child === i.child) {
        for (i = n.child; i; ) {
          if (i === a) return p(n), e;
          if (i === l) return p(n), t;
          i = i.sibling;
        }
        throw Error(r(188));
      }
      if (a.return !== l.return) (a = n), (l = i);
      else {
        for (var f = !1, d = n.child; d; ) {
          if (d === a) {
            (f = !0), (a = n), (l = i);
            break;
          }
          if (d === l) {
            (f = !0), (l = n), (a = i);
            break;
          }
          d = d.sibling;
        }
        if (!f) {
          for (d = i.child; d; ) {
            if (d === a) {
              (f = !0), (a = i), (l = n);
              break;
            }
            if (d === l) {
              (f = !0), (l = i), (a = n);
              break;
            }
            d = d.sibling;
          }
          if (!f) throw Error(r(189));
        }
      }
      if (a.alternate !== l) throw Error(r(190));
    }
    if (a.tag !== 3) throw Error(r(188));
    return a.stateNode.current === a ? e : t;
  }
  function h(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (((t = h(e)), t !== null)) return t;
      e = e.sibling;
    }
    return null;
  }
  var g = Object.assign,
    E = Symbol.for("react.element"),
    R = Symbol.for("react.transitional.element"),
    z = Symbol.for("react.portal"),
    Z = Symbol.for("react.fragment"),
    M = Symbol.for("react.strict_mode"),
    $ = Symbol.for("react.profiler"),
    J = Symbol.for("react.provider"),
    ie = Symbol.for("react.consumer"),
    F = Symbol.for("react.context"),
    fe = Symbol.for("react.forward_ref"),
    Q = Symbol.for("react.suspense"),
    re = Symbol.for("react.suspense_list"),
    he = Symbol.for("react.memo"),
    W = Symbol.for("react.lazy"),
    Be = Symbol.for("react.activity"),
    qt = Symbol.for("react.memo_cache_sentinel"),
    it = Symbol.iterator;
  function we(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (it && e[it]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var Nt = Symbol.for("react.client.reference");
  function k(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === Nt ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case Z:
        return "Fragment";
      case $:
        return "Profiler";
      case M:
        return "StrictMode";
      case Q:
        return "Suspense";
      case re:
        return "SuspenseList";
      case Be:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case z:
          return "Portal";
        case F:
          return (e.displayName || "Context") + ".Provider";
        case ie:
          return (e._context.displayName || "Context") + ".Consumer";
        case fe:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case he:
          return (
            (t = e.displayName || null), t !== null ? t : k(e.type) || "Memo"
          );
        case W:
          (t = e._payload), (e = e._init);
          try {
            return k(e(t));
          } catch {}
      }
    return null;
  }
  var Y = Array.isArray,
    O = c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    w = s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    G = { pending: !1, data: null, method: null, action: null },
    V = [],
    b = -1;
  function C(e) {
    return { current: e };
  }
  function H(e) {
    0 > b || ((e.current = V[b]), (V[b] = null), b--);
  }
  function B(e, t) {
    b++, (V[b] = e.current), (e.current = t);
  }
  var K = C(null),
    te = C(null),
    le = C(null),
    ut = C(null);
  function _e(e, t) {
    switch ((B(le, t), B(te, e), B(K, null), t.nodeType)) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? vh(e) : 0;
        break;
      default:
        if (((e = t.tagName), (t = t.namespaceURI)))
          (t = vh(t)), (e = gh(t, e));
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    H(K), B(K, e);
  }
  function da() {
    H(K), H(te), H(le);
  }
  function Ku(e) {
    e.memoizedState !== null && B(ut, e);
    var t = K.current,
      a = gh(t, e.type);
    t !== a && (B(te, e), B(K, a));
  }
  function mi(e) {
    te.current === e && (H(K), H(te)),
      ut.current === e && (H(ut), (Jn._currentValue = G));
  }
  var Iu = Object.prototype.hasOwnProperty,
    Fu = u.unstable_scheduleCallback,
    Ju = u.unstable_cancelCallback,
    Hg = u.unstable_shouldYield,
    Gg = u.unstable_requestPaint,
    Ht = u.unstable_now,
    Bg = u.unstable_getCurrentPriorityLevel,
    Kf = u.unstable_ImmediatePriority,
    If = u.unstable_UserBlockingPriority,
    hi = u.unstable_NormalPriority,
    Yg = u.unstable_LowPriority,
    Ff = u.unstable_IdlePriority,
    Xg = u.log,
    Zg = u.unstable_setDisableYieldValue,
    nn = null,
    rt = null;
  function ma(e) {
    if (
      (typeof Xg == "function" && Zg(e),
      rt && typeof rt.setStrictMode == "function")
    )
      try {
        rt.setStrictMode(nn, e);
      } catch {}
  }
  var st = Math.clz32 ? Math.clz32 : $g,
    Vg = Math.log,
    Qg = Math.LN2;
  function $g(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((Vg(e) / Qg) | 0)) | 0;
  }
  var vi = 256,
    gi = 4194304;
  function Xa(e) {
    var t = e & 42;
    if (t !== 0) return t;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function yi(e, t, a) {
    var l = e.pendingLanes;
    if (l === 0) return 0;
    var n = 0,
      i = e.suspendedLanes,
      f = e.pingedLanes;
    e = e.warmLanes;
    var d = l & 134217727;
    return (
      d !== 0
        ? ((l = d & ~i),
          l !== 0
            ? (n = Xa(l))
            : ((f &= d),
              f !== 0
                ? (n = Xa(f))
                : a || ((a = d & ~e), a !== 0 && (n = Xa(a)))))
        : ((d = l & ~i),
          d !== 0
            ? (n = Xa(d))
            : f !== 0
            ? (n = Xa(f))
            : a || ((a = l & ~e), a !== 0 && (n = Xa(a)))),
      n === 0
        ? 0
        : t !== 0 &&
          t !== n &&
          (t & i) === 0 &&
          ((i = n & -n),
          (a = t & -t),
          i >= a || (i === 32 && (a & 4194048) !== 0))
        ? t
        : n
    );
  }
  function un(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function kg(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Jf() {
    var e = vi;
    return (vi <<= 1), (vi & 4194048) === 0 && (vi = 256), e;
  }
  function Wf() {
    var e = gi;
    return (gi <<= 1), (gi & 62914560) === 0 && (gi = 4194304), e;
  }
  function Wu(e) {
    for (var t = [], a = 0; 31 > a; a++) t.push(e);
    return t;
  }
  function rn(e, t) {
    (e.pendingLanes |= t),
      t !== 268435456 &&
        ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0));
  }
  function Kg(e, t, a, l, n, i) {
    var f = e.pendingLanes;
    (e.pendingLanes = a),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= a),
      (e.entangledLanes &= a),
      (e.errorRecoveryDisabledLanes &= a),
      (e.shellSuspendCounter = 0);
    var d = e.entanglements,
      S = e.expirationTimes,
      N = e.hiddenUpdates;
    for (a = f & ~a; 0 < a; ) {
      var L = 31 - st(a),
        q = 1 << L;
      (d[L] = 0), (S[L] = -1);
      var j = N[L];
      if (j !== null)
        for (N[L] = null, L = 0; L < j.length; L++) {
          var D = j[L];
          D !== null && (D.lane &= -536870913);
        }
      a &= ~q;
    }
    l !== 0 && Pf(e, l, 0),
      i !== 0 && n === 0 && e.tag !== 0 && (e.suspendedLanes |= i & ~(f & ~t));
  }
  function Pf(e, t, a) {
    (e.pendingLanes |= t), (e.suspendedLanes &= ~t);
    var l = 31 - st(t);
    (e.entangledLanes |= t),
      (e.entanglements[l] = e.entanglements[l] | 1073741824 | (a & 4194090));
  }
  function eo(e, t) {
    var a = (e.entangledLanes |= t);
    for (e = e.entanglements; a; ) {
      var l = 31 - st(a),
        n = 1 << l;
      (n & t) | (e[l] & t) && (e[l] |= t), (a &= ~n);
    }
  }
  function Pu(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function er(e) {
    return (
      (e &= -e),
      2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function to() {
    var e = w.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : Lh(e.type));
  }
  function Ig(e, t) {
    var a = w.p;
    try {
      return (w.p = e), t();
    } finally {
      w.p = a;
    }
  }
  var ha = Math.random().toString(36).slice(2),
    Ke = "__reactFiber$" + ha,
    et = "__reactProps$" + ha,
    fl = "__reactContainer$" + ha,
    tr = "__reactEvents$" + ha,
    Fg = "__reactListeners$" + ha,
    Jg = "__reactHandles$" + ha,
    ao = "__reactResources$" + ha,
    sn = "__reactMarker$" + ha;
  function ar(e) {
    delete e[Ke], delete e[et], delete e[tr], delete e[Fg], delete e[Jg];
  }
  function ol(e) {
    var t = e[Ke];
    if (t) return t;
    for (var a = e.parentNode; a; ) {
      if ((t = a[fl] || a[Ke])) {
        if (
          ((a = t.alternate),
          t.child !== null || (a !== null && a.child !== null))
        )
          for (e = Sh(e); e !== null; ) {
            if ((a = e[Ke])) return a;
            e = Sh(e);
          }
        return t;
      }
      (e = a), (a = e.parentNode);
    }
    return null;
  }
  function dl(e) {
    if ((e = e[Ke] || e[fl])) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function cn(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(r(33));
  }
  function ml(e) {
    var t = e[ao];
    return (
      t ||
        (t = e[ao] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      t
    );
  }
  function Ye(e) {
    e[sn] = !0;
  }
  var lo = new Set(),
    no = {};
  function Za(e, t) {
    hl(e, t), hl(e + "Capture", t);
  }
  function hl(e, t) {
    for (no[e] = t, e = 0; e < t.length; e++) lo.add(t[e]);
  }
  var Wg = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    io = {},
    uo = {};
  function Pg(e) {
    return Iu.call(uo, e)
      ? !0
      : Iu.call(io, e)
      ? !1
      : Wg.test(e)
      ? (uo[e] = !0)
      : ((io[e] = !0), !1);
  }
  function pi(e, t, a) {
    if (Pg(t))
      if (a === null) e.removeAttribute(t);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var l = t.toLowerCase().slice(0, 5);
            if (l !== "data-" && l !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + a);
      }
  }
  function bi(e, t, a) {
    if (a === null) e.removeAttribute(t);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, "" + a);
    }
  }
  function Qt(e, t, a, l) {
    if (l === null) e.removeAttribute(a);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(a);
          return;
      }
      e.setAttributeNS(t, a, "" + l);
    }
  }
  var lr, ro;
  function vl(e) {
    if (lr === void 0)
      try {
        throw Error();
      } catch (a) {
        var t = a.stack.trim().match(/\n( *(at )?)/);
        (lr = (t && t[1]) || ""),
          (ro =
            -1 <
            a.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < a.stack.indexOf("@")
              ? "@unknown:0:0"
              : "");
      }
    return (
      `
` +
      lr +
      e +
      ro
    );
  }
  var nr = !1;
  function ir(e, t) {
    if (!e || nr) return "";
    nr = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var q = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(q.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(q, []);
                } catch (D) {
                  var j = D;
                }
                Reflect.construct(e, [], q);
              } else {
                try {
                  q.call();
                } catch (D) {
                  j = D;
                }
                e.call(q.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (D) {
                j = D;
              }
              (q = e()) &&
                typeof q.catch == "function" &&
                q.catch(function () {});
            }
          } catch (D) {
            if (D && j && typeof D.stack == "string") return [D.stack, j.stack];
          }
          return [null, null];
        },
      };
      l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var n = Object.getOwnPropertyDescriptor(
        l.DetermineComponentFrameRoot,
        "name"
      );
      n &&
        n.configurable &&
        Object.defineProperty(l.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var i = l.DetermineComponentFrameRoot(),
        f = i[0],
        d = i[1];
      if (f && d) {
        var S = f.split(`
`),
          N = d.split(`
`);
        for (
          n = l = 0;
          l < S.length && !S[l].includes("DetermineComponentFrameRoot");

        )
          l++;
        for (; n < N.length && !N[n].includes("DetermineComponentFrameRoot"); )
          n++;
        if (l === S.length || n === N.length)
          for (
            l = S.length - 1, n = N.length - 1;
            1 <= l && 0 <= n && S[l] !== N[n];

          )
            n--;
        for (; 1 <= l && 0 <= n; l--, n--)
          if (S[l] !== N[n]) {
            if (l !== 1 || n !== 1)
              do
                if ((l--, n--, 0 > n || S[l] !== N[n])) {
                  var L =
                    `
` + S[l].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      L.includes("<anonymous>") &&
                      (L = L.replace("<anonymous>", e.displayName)),
                    L
                  );
                }
              while (1 <= l && 0 <= n);
            break;
          }
      }
    } finally {
      (nr = !1), (Error.prepareStackTrace = a);
    }
    return (a = e ? e.displayName || e.name : "") ? vl(a) : "";
  }
  function e1(e) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return vl(e.type);
      case 16:
        return vl("Lazy");
      case 13:
        return vl("Suspense");
      case 19:
        return vl("SuspenseList");
      case 0:
      case 15:
        return ir(e.type, !1);
      case 11:
        return ir(e.type.render, !1);
      case 1:
        return ir(e.type, !0);
      case 31:
        return vl("Activity");
      default:
        return "";
    }
  }
  function so(e) {
    try {
      var t = "";
      do (t += e1(e)), (e = e.return);
      while (e);
      return t;
    } catch (a) {
      return (
        `
Error generating stack: ` +
        a.message +
        `
` +
        a.stack
      );
    }
  }
  function pt(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function co(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function t1(e) {
    var t = co(e) ? "checked" : "value",
      a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      l = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof a < "u" &&
      typeof a.get == "function" &&
      typeof a.set == "function"
    ) {
      var n = a.get,
        i = a.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return n.call(this);
          },
          set: function (f) {
            (l = "" + f), i.call(this, f);
          },
        }),
        Object.defineProperty(e, t, { enumerable: a.enumerable }),
        {
          getValue: function () {
            return l;
          },
          setValue: function (f) {
            l = "" + f;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function Si(e) {
    e._valueTracker || (e._valueTracker = t1(e));
  }
  function fo(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var a = t.getValue(),
      l = "";
    return (
      e && (l = co(e) ? (e.checked ? "true" : "false") : e.value),
      (e = l),
      e !== a ? (t.setValue(e), !0) : !1
    );
  }
  function Ei(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var a1 = /[\n"\\]/g;
  function bt(e) {
    return e.replace(a1, function (t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function ur(e, t, a, l, n, i, f, d) {
    (e.name = ""),
      f != null &&
      typeof f != "function" &&
      typeof f != "symbol" &&
      typeof f != "boolean"
        ? (e.type = f)
        : e.removeAttribute("type"),
      t != null
        ? f === "number"
          ? ((t === 0 && e.value === "") || e.value != t) &&
            (e.value = "" + pt(t))
          : e.value !== "" + pt(t) && (e.value = "" + pt(t))
        : (f !== "submit" && f !== "reset") || e.removeAttribute("value"),
      t != null
        ? rr(e, f, pt(t))
        : a != null
        ? rr(e, f, pt(a))
        : l != null && e.removeAttribute("value"),
      n == null && i != null && (e.defaultChecked = !!i),
      n != null &&
        (e.checked = n && typeof n != "function" && typeof n != "symbol"),
      d != null &&
      typeof d != "function" &&
      typeof d != "symbol" &&
      typeof d != "boolean"
        ? (e.name = "" + pt(d))
        : e.removeAttribute("name");
  }
  function oo(e, t, a, l, n, i, f, d) {
    if (
      (i != null &&
        typeof i != "function" &&
        typeof i != "symbol" &&
        typeof i != "boolean" &&
        (e.type = i),
      t != null || a != null)
    ) {
      if (!((i !== "submit" && i !== "reset") || t != null)) return;
      (a = a != null ? "" + pt(a) : ""),
        (t = t != null ? "" + pt(t) : a),
        d || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    (l = l ?? n),
      (l = typeof l != "function" && typeof l != "symbol" && !!l),
      (e.checked = d ? e.checked : !!l),
      (e.defaultChecked = !!l),
      f != null &&
        typeof f != "function" &&
        typeof f != "symbol" &&
        typeof f != "boolean" &&
        (e.name = f);
  }
  function rr(e, t, a) {
    (t === "number" && Ei(e.ownerDocument) === e) ||
      e.defaultValue === "" + a ||
      (e.defaultValue = "" + a);
  }
  function gl(e, t, a, l) {
    if (((e = e.options), t)) {
      t = {};
      for (var n = 0; n < a.length; n++) t["$" + a[n]] = !0;
      for (a = 0; a < e.length; a++)
        (n = t.hasOwnProperty("$" + e[a].value)),
          e[a].selected !== n && (e[a].selected = n),
          n && l && (e[a].defaultSelected = !0);
    } else {
      for (a = "" + pt(a), t = null, n = 0; n < e.length; n++) {
        if (e[n].value === a) {
          (e[n].selected = !0), l && (e[n].defaultSelected = !0);
          return;
        }
        t !== null || e[n].disabled || (t = e[n]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function mo(e, t, a) {
    if (
      t != null &&
      ((t = "" + pt(t)), t !== e.value && (e.value = t), a == null)
    ) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = a != null ? "" + pt(a) : "";
  }
  function ho(e, t, a, l) {
    if (t == null) {
      if (l != null) {
        if (a != null) throw Error(r(92));
        if (Y(l)) {
          if (1 < l.length) throw Error(r(93));
          l = l[0];
        }
        a = l;
      }
      a == null && (a = ""), (t = a);
    }
    (a = pt(t)),
      (e.defaultValue = a),
      (l = e.textContent),
      l === a && l !== "" && l !== null && (e.value = l);
  }
  function yl(e, t) {
    if (t) {
      var a = e.firstChild;
      if (a && a === e.lastChild && a.nodeType === 3) {
        a.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var l1 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function vo(e, t, a) {
    var l = t.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === ""
      ? l
        ? e.setProperty(t, "")
        : t === "float"
        ? (e.cssFloat = "")
        : (e[t] = "")
      : l
      ? e.setProperty(t, a)
      : typeof a != "number" || a === 0 || l1.has(t)
      ? t === "float"
        ? (e.cssFloat = a)
        : (e[t] = ("" + a).trim())
      : (e[t] = a + "px");
  }
  function go(e, t, a) {
    if (t != null && typeof t != "object") throw Error(r(62));
    if (((e = e.style), a != null)) {
      for (var l in a)
        !a.hasOwnProperty(l) ||
          (t != null && t.hasOwnProperty(l)) ||
          (l.indexOf("--") === 0
            ? e.setProperty(l, "")
            : l === "float"
            ? (e.cssFloat = "")
            : (e[l] = ""));
      for (var n in t)
        (l = t[n]), t.hasOwnProperty(n) && a[n] !== l && vo(e, n, l);
    } else for (var i in t) t.hasOwnProperty(i) && vo(e, i, t[i]);
  }
  function sr(e) {
    if (e.indexOf("-") === -1) return !1;
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var n1 = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    i1 =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Ai(e) {
    return i1.test("" + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  var cr = null;
  function fr(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var pl = null,
    bl = null;
  function yo(e) {
    var t = dl(e);
    if (t && (e = t.stateNode)) {
      var a = e[et] || null;
      e: switch (((e = t.stateNode), t.type)) {
        case "input":
          if (
            (ur(
              e,
              a.value,
              a.defaultValue,
              a.defaultValue,
              a.checked,
              a.defaultChecked,
              a.type,
              a.name
            ),
            (t = a.name),
            a.type === "radio" && t != null)
          ) {
            for (a = e; a.parentNode; ) a = a.parentNode;
            for (
              a = a.querySelectorAll(
                'input[name="' + bt("" + t) + '"][type="radio"]'
              ),
                t = 0;
              t < a.length;
              t++
            ) {
              var l = a[t];
              if (l !== e && l.form === e.form) {
                var n = l[et] || null;
                if (!n) throw Error(r(90));
                ur(
                  l,
                  n.value,
                  n.defaultValue,
                  n.defaultValue,
                  n.checked,
                  n.defaultChecked,
                  n.type,
                  n.name
                );
              }
            }
            for (t = 0; t < a.length; t++)
              (l = a[t]), l.form === e.form && fo(l);
          }
          break e;
        case "textarea":
          mo(e, a.value, a.defaultValue);
          break e;
        case "select":
          (t = a.value), t != null && gl(e, !!a.multiple, t, !1);
      }
    }
  }
  var or = !1;
  function po(e, t, a) {
    if (or) return e(t, a);
    or = !0;
    try {
      var l = e(t);
      return l;
    } finally {
      if (
        ((or = !1),
        (pl !== null || bl !== null) &&
          (ru(), pl && ((t = pl), (e = bl), (bl = pl = null), yo(t), e)))
      )
        for (t = 0; t < e.length; t++) yo(e[t]);
    }
  }
  function fn(e, t) {
    var a = e.stateNode;
    if (a === null) return null;
    var l = a[et] || null;
    if (l === null) return null;
    a = l[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (l = !l.disabled) ||
          ((e = e.type),
          (l = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !l);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (a && typeof a != "function") throw Error(r(231, t, typeof a));
    return a;
  }
  var $t = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    dr = !1;
  if ($t)
    try {
      var on = {};
      Object.defineProperty(on, "passive", {
        get: function () {
          dr = !0;
        },
      }),
        window.addEventListener("test", on, on),
        window.removeEventListener("test", on, on);
    } catch {
      dr = !1;
    }
  var va = null,
    mr = null,
    Ti = null;
  function bo() {
    if (Ti) return Ti;
    var e,
      t = mr,
      a = t.length,
      l,
      n = "value" in va ? va.value : va.textContent,
      i = n.length;
    for (e = 0; e < a && t[e] === n[e]; e++);
    var f = a - e;
    for (l = 1; l <= f && t[a - l] === n[i - l]; l++);
    return (Ti = n.slice(e, 1 < l ? 1 - l : void 0));
  }
  function xi(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Oi() {
    return !0;
  }
  function So() {
    return !1;
  }
  function tt(e) {
    function t(a, l, n, i, f) {
      (this._reactName = a),
        (this._targetInst = n),
        (this.type = l),
        (this.nativeEvent = i),
        (this.target = f),
        (this.currentTarget = null);
      for (var d in e)
        e.hasOwnProperty(d) && ((a = e[d]), (this[d] = a ? a(i) : i[d]));
      return (
        (this.isDefaultPrevented = (
          i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
        )
          ? Oi
          : So),
        (this.isPropagationStopped = So),
        this
      );
    }
    return (
      g(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a &&
            (a.preventDefault
              ? a.preventDefault()
              : typeof a.returnValue != "unknown" && (a.returnValue = !1),
            (this.isDefaultPrevented = Oi));
        },
        stopPropagation: function () {
          var a = this.nativeEvent;
          a &&
            (a.stopPropagation
              ? a.stopPropagation()
              : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0),
            (this.isPropagationStopped = Oi));
        },
        persist: function () {},
        isPersistent: Oi,
      }),
      t
    );
  }
  var Va = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Ri = tt(Va),
    dn = g({}, Va, { view: 0, detail: 0 }),
    u1 = tt(dn),
    hr,
    vr,
    mn,
    _i = g({}, dn, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: yr,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== mn &&
              (mn && e.type === "mousemove"
                ? ((hr = e.screenX - mn.screenX), (vr = e.screenY - mn.screenY))
                : (vr = hr = 0),
              (mn = e)),
            hr);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : vr;
      },
    }),
    Eo = tt(_i),
    r1 = g({}, _i, { dataTransfer: 0 }),
    s1 = tt(r1),
    c1 = g({}, dn, { relatedTarget: 0 }),
    gr = tt(c1),
    f1 = g({}, Va, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    o1 = tt(f1),
    d1 = g({}, Va, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    m1 = tt(d1),
    h1 = g({}, Va, { data: 0 }),
    Ao = tt(h1),
    v1 = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    g1 = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    y1 = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function p1(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = y1[e])
      ? !!t[e]
      : !1;
  }
  function yr() {
    return p1;
  }
  var b1 = g({}, dn, {
      key: function (e) {
        if (e.key) {
          var t = v1[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = xi(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
          ? g1[e.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: yr,
      charCode: function (e) {
        return e.type === "keypress" ? xi(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? xi(e)
          : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
      },
    }),
    S1 = tt(b1),
    E1 = g({}, _i, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    To = tt(E1),
    A1 = g({}, dn, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: yr,
    }),
    T1 = tt(A1),
    x1 = g({}, Va, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    O1 = tt(x1),
    R1 = g({}, _i, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
          ? -e.wheelDeltaX
          : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
          ? -e.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    _1 = tt(R1),
    N1 = g({}, Va, { newState: 0, oldState: 0 }),
    j1 = tt(N1),
    z1 = [9, 13, 27, 32],
    pr = $t && "CompositionEvent" in window,
    hn = null;
  $t && "documentMode" in document && (hn = document.documentMode);
  var D1 = $t && "TextEvent" in window && !hn,
    xo = $t && (!pr || (hn && 8 < hn && 11 >= hn)),
    Oo = " ",
    Ro = !1;
  function _o(e, t) {
    switch (e) {
      case "keyup":
        return z1.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function No(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var Sl = !1;
  function C1(e, t) {
    switch (e) {
      case "compositionend":
        return No(t);
      case "keypress":
        return t.which !== 32 ? null : ((Ro = !0), Oo);
      case "textInput":
        return (e = t.data), e === Oo && Ro ? null : e;
      default:
        return null;
    }
  }
  function M1(e, t) {
    if (Sl)
      return e === "compositionend" || (!pr && _o(e, t))
        ? ((e = bo()), (Ti = mr = va = null), (Sl = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return xo && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var w1 = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function jo(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!w1[e.type] : t === "textarea";
  }
  function zo(e, t, a, l) {
    pl ? (bl ? bl.push(l) : (bl = [l])) : (pl = l),
      (t = mu(t, "onChange")),
      0 < t.length &&
        ((a = new Ri("onChange", "change", null, a, l)),
        e.push({ event: a, listeners: t }));
  }
  var vn = null,
    gn = null;
  function L1(e) {
    fh(e, 0);
  }
  function Ni(e) {
    var t = cn(e);
    if (fo(t)) return e;
  }
  function Do(e, t) {
    if (e === "change") return t;
  }
  var Co = !1;
  if ($t) {
    var br;
    if ($t) {
      var Sr = "oninput" in document;
      if (!Sr) {
        var Mo = document.createElement("div");
        Mo.setAttribute("oninput", "return;"),
          (Sr = typeof Mo.oninput == "function");
      }
      br = Sr;
    } else br = !1;
    Co = br && (!document.documentMode || 9 < document.documentMode);
  }
  function wo() {
    vn && (vn.detachEvent("onpropertychange", Lo), (gn = vn = null));
  }
  function Lo(e) {
    if (e.propertyName === "value" && Ni(gn)) {
      var t = [];
      zo(t, gn, e, fr(e)), po(L1, t);
    }
  }
  function U1(e, t, a) {
    e === "focusin"
      ? (wo(), (vn = t), (gn = a), vn.attachEvent("onpropertychange", Lo))
      : e === "focusout" && wo();
  }
  function q1(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Ni(gn);
  }
  function H1(e, t) {
    if (e === "click") return Ni(t);
  }
  function G1(e, t) {
    if (e === "input" || e === "change") return Ni(t);
  }
  function B1(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var ct = typeof Object.is == "function" ? Object.is : B1;
  function yn(e, t) {
    if (ct(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var a = Object.keys(e),
      l = Object.keys(t);
    if (a.length !== l.length) return !1;
    for (l = 0; l < a.length; l++) {
      var n = a[l];
      if (!Iu.call(t, n) || !ct(e[n], t[n])) return !1;
    }
    return !0;
  }
  function Uo(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function qo(e, t) {
    var a = Uo(e);
    e = 0;
    for (var l; a; ) {
      if (a.nodeType === 3) {
        if (((l = e + a.textContent.length), e <= t && l >= t))
          return { node: a, offset: t - e };
        e = l;
      }
      e: {
        for (; a; ) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break e;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = Uo(a);
    }
  }
  function Ho(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? Ho(e, t.parentNode)
        : "contains" in e
        ? e.contains(t)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(t) & 16)
        : !1
      : !1;
  }
  function Go(e) {
    e =
      e != null &&
      e.ownerDocument != null &&
      e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window;
    for (var t = Ei(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var a = typeof t.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) e = t.contentWindow;
      else break;
      t = Ei(e.document);
    }
    return t;
  }
  function Er(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  var Y1 = $t && "documentMode" in document && 11 >= document.documentMode,
    El = null,
    Ar = null,
    pn = null,
    Tr = !1;
  function Bo(e, t, a) {
    var l =
      a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    Tr ||
      El == null ||
      El !== Ei(l) ||
      ((l = El),
      "selectionStart" in l && Er(l)
        ? (l = { start: l.selectionStart, end: l.selectionEnd })
        : ((l = (
            (l.ownerDocument && l.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (l = {
            anchorNode: l.anchorNode,
            anchorOffset: l.anchorOffset,
            focusNode: l.focusNode,
            focusOffset: l.focusOffset,
          })),
      (pn && yn(pn, l)) ||
        ((pn = l),
        (l = mu(Ar, "onSelect")),
        0 < l.length &&
          ((t = new Ri("onSelect", "select", null, t, a)),
          e.push({ event: t, listeners: l }),
          (t.target = El))));
  }
  function Qa(e, t) {
    var a = {};
    return (
      (a[e.toLowerCase()] = t.toLowerCase()),
      (a["Webkit" + e] = "webkit" + t),
      (a["Moz" + e] = "moz" + t),
      a
    );
  }
  var Al = {
      animationend: Qa("Animation", "AnimationEnd"),
      animationiteration: Qa("Animation", "AnimationIteration"),
      animationstart: Qa("Animation", "AnimationStart"),
      transitionrun: Qa("Transition", "TransitionRun"),
      transitionstart: Qa("Transition", "TransitionStart"),
      transitioncancel: Qa("Transition", "TransitionCancel"),
      transitionend: Qa("Transition", "TransitionEnd"),
    },
    xr = {},
    Yo = {};
  $t &&
    ((Yo = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Al.animationend.animation,
      delete Al.animationiteration.animation,
      delete Al.animationstart.animation),
    "TransitionEvent" in window || delete Al.transitionend.transition);
  function $a(e) {
    if (xr[e]) return xr[e];
    if (!Al[e]) return e;
    var t = Al[e],
      a;
    for (a in t) if (t.hasOwnProperty(a) && a in Yo) return (xr[e] = t[a]);
    return e;
  }
  var Xo = $a("animationend"),
    Zo = $a("animationiteration"),
    Vo = $a("animationstart"),
    X1 = $a("transitionrun"),
    Z1 = $a("transitionstart"),
    V1 = $a("transitioncancel"),
    Qo = $a("transitionend"),
    $o = new Map(),
    Or =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  Or.push("scrollEnd");
  function jt(e, t) {
    $o.set(e, t), Za(t, [e]);
  }
  var ko = new WeakMap();
  function St(e, t) {
    if (typeof e == "object" && e !== null) {
      var a = ko.get(e);
      return a !== void 0
        ? a
        : ((t = { value: e, source: t, stack: so(t) }), ko.set(e, t), t);
    }
    return { value: e, source: t, stack: so(t) };
  }
  var Et = [],
    Tl = 0,
    Rr = 0;
  function ji() {
    for (var e = Tl, t = (Rr = Tl = 0); t < e; ) {
      var a = Et[t];
      Et[t++] = null;
      var l = Et[t];
      Et[t++] = null;
      var n = Et[t];
      Et[t++] = null;
      var i = Et[t];
      if (((Et[t++] = null), l !== null && n !== null)) {
        var f = l.pending;
        f === null ? (n.next = n) : ((n.next = f.next), (f.next = n)),
          (l.pending = n);
      }
      i !== 0 && Ko(a, n, i);
    }
  }
  function zi(e, t, a, l) {
    (Et[Tl++] = e),
      (Et[Tl++] = t),
      (Et[Tl++] = a),
      (Et[Tl++] = l),
      (Rr |= l),
      (e.lanes |= l),
      (e = e.alternate),
      e !== null && (e.lanes |= l);
  }
  function _r(e, t, a, l) {
    return zi(e, t, a, l), Di(e);
  }
  function xl(e, t) {
    return zi(e, null, null, t), Di(e);
  }
  function Ko(e, t, a) {
    e.lanes |= a;
    var l = e.alternate;
    l !== null && (l.lanes |= a);
    for (var n = !1, i = e.return; i !== null; )
      (i.childLanes |= a),
        (l = i.alternate),
        l !== null && (l.childLanes |= a),
        i.tag === 22 &&
          ((e = i.stateNode), e === null || e._visibility & 1 || (n = !0)),
        (e = i),
        (i = i.return);
    return e.tag === 3
      ? ((i = e.stateNode),
        n &&
          t !== null &&
          ((n = 31 - st(a)),
          (e = i.hiddenUpdates),
          (l = e[n]),
          l === null ? (e[n] = [t]) : l.push(t),
          (t.lane = a | 536870912)),
        i)
      : null;
  }
  function Di(e) {
    if (50 < Zn) throw ((Zn = 0), (Ms = null), Error(r(185)));
    for (var t = e.return; t !== null; ) (e = t), (t = e.return);
    return e.tag === 3 ? e.stateNode : null;
  }
  var Ol = {};
  function Q1(e, t, a, l) {
    (this.tag = e),
      (this.key = a),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = l),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function ft(e, t, a, l) {
    return new Q1(e, t, a, l);
  }
  function Nr(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function kt(e, t) {
    var a = e.alternate;
    return (
      a === null
        ? ((a = ft(e.tag, t, e.key, e.mode)),
          (a.elementType = e.elementType),
          (a.type = e.type),
          (a.stateNode = e.stateNode),
          (a.alternate = e),
          (e.alternate = a))
        : ((a.pendingProps = t),
          (a.type = e.type),
          (a.flags = 0),
          (a.subtreeFlags = 0),
          (a.deletions = null)),
      (a.flags = e.flags & 65011712),
      (a.childLanes = e.childLanes),
      (a.lanes = e.lanes),
      (a.child = e.child),
      (a.memoizedProps = e.memoizedProps),
      (a.memoizedState = e.memoizedState),
      (a.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (a.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (a.sibling = e.sibling),
      (a.index = e.index),
      (a.ref = e.ref),
      (a.refCleanup = e.refCleanup),
      a
    );
  }
  function Io(e, t) {
    e.flags &= 65011714;
    var a = e.alternate;
    return (
      a === null
        ? ((e.childLanes = 0),
          (e.lanes = t),
          (e.child = null),
          (e.subtreeFlags = 0),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.updateQueue = null),
          (e.dependencies = null),
          (e.stateNode = null))
        : ((e.childLanes = a.childLanes),
          (e.lanes = a.lanes),
          (e.child = a.child),
          (e.subtreeFlags = 0),
          (e.deletions = null),
          (e.memoizedProps = a.memoizedProps),
          (e.memoizedState = a.memoizedState),
          (e.updateQueue = a.updateQueue),
          (e.type = a.type),
          (t = a.dependencies),
          (e.dependencies =
            t === null
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext })),
      e
    );
  }
  function Ci(e, t, a, l, n, i) {
    var f = 0;
    if (((l = e), typeof e == "function")) Nr(e) && (f = 1);
    else if (typeof e == "string")
      f = ky(e, a, K.current)
        ? 26
        : e === "html" || e === "head" || e === "body"
        ? 27
        : 5;
    else
      e: switch (e) {
        case Be:
          return (e = ft(31, a, t, n)), (e.elementType = Be), (e.lanes = i), e;
        case Z:
          return ka(a.children, n, i, t);
        case M:
          (f = 8), (n |= 24);
          break;
        case $:
          return (
            (e = ft(12, a, t, n | 2)), (e.elementType = $), (e.lanes = i), e
          );
        case Q:
          return (e = ft(13, a, t, n)), (e.elementType = Q), (e.lanes = i), e;
        case re:
          return (e = ft(19, a, t, n)), (e.elementType = re), (e.lanes = i), e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case J:
              case F:
                f = 10;
                break e;
              case ie:
                f = 9;
                break e;
              case fe:
                f = 11;
                break e;
              case he:
                f = 14;
                break e;
              case W:
                (f = 16), (l = null);
                break e;
            }
          (f = 29),
            (a = Error(r(130, e === null ? "null" : typeof e, ""))),
            (l = null);
      }
    return (
      (t = ft(f, a, t, n)), (t.elementType = e), (t.type = l), (t.lanes = i), t
    );
  }
  function ka(e, t, a, l) {
    return (e = ft(7, e, l, t)), (e.lanes = a), e;
  }
  function jr(e, t, a) {
    return (e = ft(6, e, null, t)), (e.lanes = a), e;
  }
  function zr(e, t, a) {
    return (
      (t = ft(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = a),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  var Rl = [],
    _l = 0,
    Mi = null,
    wi = 0,
    At = [],
    Tt = 0,
    Ka = null,
    Kt = 1,
    It = "";
  function Ia(e, t) {
    (Rl[_l++] = wi), (Rl[_l++] = Mi), (Mi = e), (wi = t);
  }
  function Fo(e, t, a) {
    (At[Tt++] = Kt), (At[Tt++] = It), (At[Tt++] = Ka), (Ka = e);
    var l = Kt;
    e = It;
    var n = 32 - st(l) - 1;
    (l &= ~(1 << n)), (a += 1);
    var i = 32 - st(t) + n;
    if (30 < i) {
      var f = n - (n % 5);
      (i = (l & ((1 << f) - 1)).toString(32)),
        (l >>= f),
        (n -= f),
        (Kt = (1 << (32 - st(t) + n)) | (a << n) | l),
        (It = i + e);
    } else (Kt = (1 << i) | (a << n) | l), (It = e);
  }
  function Dr(e) {
    e.return !== null && (Ia(e, 1), Fo(e, 1, 0));
  }
  function Cr(e) {
    for (; e === Mi; )
      (Mi = Rl[--_l]), (Rl[_l] = null), (wi = Rl[--_l]), (Rl[_l] = null);
    for (; e === Ka; )
      (Ka = At[--Tt]),
        (At[Tt] = null),
        (It = At[--Tt]),
        (At[Tt] = null),
        (Kt = At[--Tt]),
        (At[Tt] = null);
  }
  var We = null,
    ze = null,
    pe = !1,
    Fa = null,
    Gt = !1,
    Mr = Error(r(519));
  function Ja(e) {
    var t = Error(r(418, ""));
    throw (En(St(t, e)), Mr);
  }
  function Jo(e) {
    var t = e.stateNode,
      a = e.type,
      l = e.memoizedProps;
    switch (((t[Ke] = e), (t[et] = l), a)) {
      case "dialog":
        me("cancel", t), me("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        me("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < Qn.length; a++) me(Qn[a], t);
        break;
      case "source":
        me("error", t);
        break;
      case "img":
      case "image":
      case "link":
        me("error", t), me("load", t);
        break;
      case "details":
        me("toggle", t);
        break;
      case "input":
        me("invalid", t),
          oo(
            t,
            l.value,
            l.defaultValue,
            l.checked,
            l.defaultChecked,
            l.type,
            l.name,
            !0
          ),
          Si(t);
        break;
      case "select":
        me("invalid", t);
        break;
      case "textarea":
        me("invalid", t), ho(t, l.value, l.defaultValue, l.children), Si(t);
    }
    (a = l.children),
      (typeof a != "string" && typeof a != "number" && typeof a != "bigint") ||
      t.textContent === "" + a ||
      l.suppressHydrationWarning === !0 ||
      hh(t.textContent, a)
        ? (l.popover != null && (me("beforetoggle", t), me("toggle", t)),
          l.onScroll != null && me("scroll", t),
          l.onScrollEnd != null && me("scrollend", t),
          l.onClick != null && (t.onclick = hu),
          (t = !0))
        : (t = !1),
      t || Ja(e);
  }
  function Wo(e) {
    for (We = e.return; We; )
      switch (We.tag) {
        case 5:
        case 13:
          Gt = !1;
          return;
        case 27:
        case 3:
          Gt = !0;
          return;
        default:
          We = We.return;
      }
  }
  function bn(e) {
    if (e !== We) return !1;
    if (!pe) return Wo(e), (pe = !0), !1;
    var t = e.tag,
      a;
    if (
      ((a = t !== 3 && t !== 27) &&
        ((a = t === 5) &&
          ((a = e.type),
          (a =
            !(a !== "form" && a !== "button") || Is(e.type, e.memoizedProps))),
        (a = !a)),
      a && ze && Ja(e),
      Wo(e),
      t === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(r(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8)
            if (((a = e.data), a === "/$")) {
              if (t === 0) {
                ze = Dt(e.nextSibling);
                break e;
              }
              t--;
            } else (a !== "$" && a !== "$!" && a !== "$?") || t++;
          e = e.nextSibling;
        }
        ze = null;
      }
    } else
      t === 27
        ? ((t = ze), Da(e.type) ? ((e = Ps), (Ps = null), (ze = e)) : (ze = t))
        : (ze = We ? Dt(e.stateNode.nextSibling) : null);
    return !0;
  }
  function Sn() {
    (ze = We = null), (pe = !1);
  }
  function Po() {
    var e = Fa;
    return (
      e !== null &&
        (nt === null ? (nt = e) : nt.push.apply(nt, e), (Fa = null)),
      e
    );
  }
  function En(e) {
    Fa === null ? (Fa = [e]) : Fa.push(e);
  }
  var wr = C(null),
    Wa = null,
    Ft = null;
  function ga(e, t, a) {
    B(wr, t._currentValue), (t._currentValue = a);
  }
  function Jt(e) {
    (e._currentValue = wr.current), H(wr);
  }
  function Lr(e, t, a) {
    for (; e !== null; ) {
      var l = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), l !== null && (l.childLanes |= t))
          : l !== null && (l.childLanes & t) !== t && (l.childLanes |= t),
        e === a)
      )
        break;
      e = e.return;
    }
  }
  function Ur(e, t, a, l) {
    var n = e.child;
    for (n !== null && (n.return = e); n !== null; ) {
      var i = n.dependencies;
      if (i !== null) {
        var f = n.child;
        i = i.firstContext;
        e: for (; i !== null; ) {
          var d = i;
          i = n;
          for (var S = 0; S < t.length; S++)
            if (d.context === t[S]) {
              (i.lanes |= a),
                (d = i.alternate),
                d !== null && (d.lanes |= a),
                Lr(i.return, a, e),
                l || (f = null);
              break e;
            }
          i = d.next;
        }
      } else if (n.tag === 18) {
        if (((f = n.return), f === null)) throw Error(r(341));
        (f.lanes |= a),
          (i = f.alternate),
          i !== null && (i.lanes |= a),
          Lr(f, a, e),
          (f = null);
      } else f = n.child;
      if (f !== null) f.return = n;
      else
        for (f = n; f !== null; ) {
          if (f === e) {
            f = null;
            break;
          }
          if (((n = f.sibling), n !== null)) {
            (n.return = f.return), (f = n);
            break;
          }
          f = f.return;
        }
      n = f;
    }
  }
  function An(e, t, a, l) {
    e = null;
    for (var n = t, i = !1; n !== null; ) {
      if (!i) {
        if ((n.flags & 524288) !== 0) i = !0;
        else if ((n.flags & 262144) !== 0) break;
      }
      if (n.tag === 10) {
        var f = n.alternate;
        if (f === null) throw Error(r(387));
        if (((f = f.memoizedProps), f !== null)) {
          var d = n.type;
          ct(n.pendingProps.value, f.value) ||
            (e !== null ? e.push(d) : (e = [d]));
        }
      } else if (n === ut.current) {
        if (((f = n.alternate), f === null)) throw Error(r(387));
        f.memoizedState.memoizedState !== n.memoizedState.memoizedState &&
          (e !== null ? e.push(Jn) : (e = [Jn]));
      }
      n = n.return;
    }
    e !== null && Ur(t, e, a, l), (t.flags |= 262144);
  }
  function Li(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!ct(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function Pa(e) {
    (Wa = e),
      (Ft = null),
      (e = e.dependencies),
      e !== null && (e.firstContext = null);
  }
  function Ie(e) {
    return ed(Wa, e);
  }
  function Ui(e, t) {
    return Wa === null && Pa(e), ed(e, t);
  }
  function ed(e, t) {
    var a = t._currentValue;
    if (((t = { context: t, memoizedValue: a, next: null }), Ft === null)) {
      if (e === null) throw Error(r(308));
      (Ft = t),
        (e.dependencies = { lanes: 0, firstContext: t }),
        (e.flags |= 524288);
    } else Ft = Ft.next = t;
    return a;
  }
  var $1 =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var e = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (a, l) {
                  e.push(l);
                },
              });
            this.abort = function () {
              (t.aborted = !0),
                e.forEach(function (a) {
                  return a();
                });
            };
          },
    k1 = u.unstable_scheduleCallback,
    K1 = u.unstable_NormalPriority,
    qe = {
      $$typeof: F,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function qr() {
    return { controller: new $1(), data: new Map(), refCount: 0 };
  }
  function Tn(e) {
    e.refCount--,
      e.refCount === 0 &&
        k1(K1, function () {
          e.controller.abort();
        });
  }
  var xn = null,
    Hr = 0,
    Nl = 0,
    jl = null;
  function I1(e, t) {
    if (xn === null) {
      var a = (xn = []);
      (Hr = 0),
        (Nl = Bs()),
        (jl = {
          status: "pending",
          value: void 0,
          then: function (l) {
            a.push(l);
          },
        });
    }
    return Hr++, t.then(td, td), t;
  }
  function td() {
    if (--Hr === 0 && xn !== null) {
      jl !== null && (jl.status = "fulfilled");
      var e = xn;
      (xn = null), (Nl = 0), (jl = null);
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function F1(e, t) {
    var a = [],
      l = {
        status: "pending",
        value: null,
        reason: null,
        then: function (n) {
          a.push(n);
        },
      };
    return (
      e.then(
        function () {
          (l.status = "fulfilled"), (l.value = t);
          for (var n = 0; n < a.length; n++) (0, a[n])(t);
        },
        function (n) {
          for (l.status = "rejected", l.reason = n, n = 0; n < a.length; n++)
            (0, a[n])(void 0);
        }
      ),
      l
    );
  }
  var ad = O.S;
  O.S = function (e, t) {
    typeof t == "object" &&
      t !== null &&
      typeof t.then == "function" &&
      I1(e, t),
      ad !== null && ad(e, t);
  };
  var el = C(null);
  function Gr() {
    var e = el.current;
    return e !== null ? e : Oe.pooledCache;
  }
  function qi(e, t) {
    t === null ? B(el, el.current) : B(el, t.pool);
  }
  function ld() {
    var e = Gr();
    return e === null ? null : { parent: qe._currentValue, pool: e };
  }
  var On = Error(r(460)),
    nd = Error(r(474)),
    Hi = Error(r(542)),
    Br = { then: function () {} };
  function id(e) {
    return (e = e.status), e === "fulfilled" || e === "rejected";
  }
  function Gi() {}
  function ud(e, t, a) {
    switch (
      ((a = e[a]),
      a === void 0 ? e.push(t) : a !== t && (t.then(Gi, Gi), (t = a)),
      t.status)
    ) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw ((e = t.reason), sd(e), e);
      default:
        if (typeof t.status == "string") t.then(Gi, Gi);
        else {
          if (((e = Oe), e !== null && 100 < e.shellSuspendCounter))
            throw Error(r(482));
          (e = t),
            (e.status = "pending"),
            e.then(
              function (l) {
                if (t.status === "pending") {
                  var n = t;
                  (n.status = "fulfilled"), (n.value = l);
                }
              },
              function (l) {
                if (t.status === "pending") {
                  var n = t;
                  (n.status = "rejected"), (n.reason = l);
                }
              }
            );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw ((e = t.reason), sd(e), e);
        }
        throw ((Rn = t), On);
    }
  }
  var Rn = null;
  function rd() {
    if (Rn === null) throw Error(r(459));
    var e = Rn;
    return (Rn = null), e;
  }
  function sd(e) {
    if (e === On || e === Hi) throw Error(r(483));
  }
  var ya = !1;
  function Yr(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Xr(e, t) {
    (e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          callbacks: null,
        });
  }
  function pa(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function ba(e, t, a) {
    var l = e.updateQueue;
    if (l === null) return null;
    if (((l = l.shared), (be & 2) !== 0)) {
      var n = l.pending;
      return (
        n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
        (l.pending = t),
        (t = Di(e)),
        Ko(e, null, a),
        t
      );
    }
    return zi(e, l, t, a), Di(e);
  }
  function _n(e, t, a) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (a & 4194048) !== 0))
    ) {
      var l = t.lanes;
      (l &= e.pendingLanes), (a |= l), (t.lanes = a), eo(e, a);
    }
  }
  function Zr(e, t) {
    var a = e.updateQueue,
      l = e.alternate;
    if (l !== null && ((l = l.updateQueue), a === l)) {
      var n = null,
        i = null;
      if (((a = a.firstBaseUpdate), a !== null)) {
        do {
          var f = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null,
          };
          i === null ? (n = i = f) : (i = i.next = f), (a = a.next);
        } while (a !== null);
        i === null ? (n = i = t) : (i = i.next = t);
      } else n = i = t;
      (a = {
        baseState: l.baseState,
        firstBaseUpdate: n,
        lastBaseUpdate: i,
        shared: l.shared,
        callbacks: l.callbacks,
      }),
        (e.updateQueue = a);
      return;
    }
    (e = a.lastBaseUpdate),
      e === null ? (a.firstBaseUpdate = t) : (e.next = t),
      (a.lastBaseUpdate = t);
  }
  var Vr = !1;
  function Nn() {
    if (Vr) {
      var e = jl;
      if (e !== null) throw e;
    }
  }
  function jn(e, t, a, l) {
    Vr = !1;
    var n = e.updateQueue;
    ya = !1;
    var i = n.firstBaseUpdate,
      f = n.lastBaseUpdate,
      d = n.shared.pending;
    if (d !== null) {
      n.shared.pending = null;
      var S = d,
        N = S.next;
      (S.next = null), f === null ? (i = N) : (f.next = N), (f = S);
      var L = e.alternate;
      L !== null &&
        ((L = L.updateQueue),
        (d = L.lastBaseUpdate),
        d !== f &&
          (d === null ? (L.firstBaseUpdate = N) : (d.next = N),
          (L.lastBaseUpdate = S)));
    }
    if (i !== null) {
      var q = n.baseState;
      (f = 0), (L = N = S = null), (d = i);
      do {
        var j = d.lane & -536870913,
          D = j !== d.lane;
        if (D ? (ge & j) === j : (l & j) === j) {
          j !== 0 && j === Nl && (Vr = !0),
            L !== null &&
              (L = L.next =
                {
                  lane: 0,
                  tag: d.tag,
                  payload: d.payload,
                  callback: null,
                  next: null,
                });
          e: {
            var ue = e,
              ae = d;
            j = t;
            var Te = a;
            switch (ae.tag) {
              case 1:
                if (((ue = ae.payload), typeof ue == "function")) {
                  q = ue.call(Te, q, j);
                  break e;
                }
                q = ue;
                break e;
              case 3:
                ue.flags = (ue.flags & -65537) | 128;
              case 0:
                if (
                  ((ue = ae.payload),
                  (j = typeof ue == "function" ? ue.call(Te, q, j) : ue),
                  j == null)
                )
                  break e;
                q = g({}, q, j);
                break e;
              case 2:
                ya = !0;
            }
          }
          (j = d.callback),
            j !== null &&
              ((e.flags |= 64),
              D && (e.flags |= 8192),
              (D = n.callbacks),
              D === null ? (n.callbacks = [j]) : D.push(j));
        } else
          (D = {
            lane: j,
            tag: d.tag,
            payload: d.payload,
            callback: d.callback,
            next: null,
          }),
            L === null ? ((N = L = D), (S = q)) : (L = L.next = D),
            (f |= j);
        if (((d = d.next), d === null)) {
          if (((d = n.shared.pending), d === null)) break;
          (D = d),
            (d = D.next),
            (D.next = null),
            (n.lastBaseUpdate = D),
            (n.shared.pending = null);
        }
      } while (!0);
      L === null && (S = q),
        (n.baseState = S),
        (n.firstBaseUpdate = N),
        (n.lastBaseUpdate = L),
        i === null && (n.shared.lanes = 0),
        (_a |= f),
        (e.lanes = f),
        (e.memoizedState = q);
    }
  }
  function cd(e, t) {
    if (typeof e != "function") throw Error(r(191, e));
    e.call(t);
  }
  function fd(e, t) {
    var a = e.callbacks;
    if (a !== null)
      for (e.callbacks = null, e = 0; e < a.length; e++) cd(a[e], t);
  }
  var zl = C(null),
    Bi = C(0);
  function od(e, t) {
    (e = na), B(Bi, e), B(zl, t), (na = e | t.baseLanes);
  }
  function Qr() {
    B(Bi, na), B(zl, zl.current);
  }
  function $r() {
    (na = Bi.current), H(zl), H(Bi);
  }
  var Sa = 0,
    ce = null,
    Ee = null,
    Le = null,
    Yi = !1,
    Dl = !1,
    tl = !1,
    Xi = 0,
    zn = 0,
    Cl = null,
    J1 = 0;
  function Ce() {
    throw Error(r(321));
  }
  function kr(e, t) {
    if (t === null) return !1;
    for (var a = 0; a < t.length && a < e.length; a++)
      if (!ct(e[a], t[a])) return !1;
    return !0;
  }
  function Kr(e, t, a, l, n, i) {
    return (
      (Sa = i),
      (ce = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (O.H = e === null || e.memoizedState === null ? Kd : Id),
      (tl = !1),
      (i = a(l, n)),
      (tl = !1),
      Dl && (i = md(t, a, l, n)),
      dd(e),
      i
    );
  }
  function dd(e) {
    O.H = Ki;
    var t = Ee !== null && Ee.next !== null;
    if (((Sa = 0), (Le = Ee = ce = null), (Yi = !1), (zn = 0), (Cl = null), t))
      throw Error(r(300));
    e === null ||
      Xe ||
      ((e = e.dependencies), e !== null && Li(e) && (Xe = !0));
  }
  function md(e, t, a, l) {
    ce = e;
    var n = 0;
    do {
      if ((Dl && (Cl = null), (zn = 0), (Dl = !1), 25 <= n))
        throw Error(r(301));
      if (((n += 1), (Le = Ee = null), e.updateQueue != null)) {
        var i = e.updateQueue;
        (i.lastEffect = null),
          (i.events = null),
          (i.stores = null),
          i.memoCache != null && (i.memoCache.index = 0);
      }
      (O.H = ny), (i = t(a, l));
    } while (Dl);
    return i;
  }
  function W1() {
    var e = O.H,
      t = e.useState()[0];
    return (
      (t = typeof t.then == "function" ? Dn(t) : t),
      (e = e.useState()[0]),
      (Ee !== null ? Ee.memoizedState : null) !== e && (ce.flags |= 1024),
      t
    );
  }
  function Ir() {
    var e = Xi !== 0;
    return (Xi = 0), e;
  }
  function Fr(e, t, a) {
    (t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~a);
  }
  function Jr(e) {
    if (Yi) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), (e = e.next);
      }
      Yi = !1;
    }
    (Sa = 0), (Le = Ee = ce = null), (Dl = !1), (zn = Xi = 0), (Cl = null);
  }
  function at() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Le === null ? (ce.memoizedState = Le = e) : (Le = Le.next = e), Le;
  }
  function Ue() {
    if (Ee === null) {
      var e = ce.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ee.next;
    var t = Le === null ? ce.memoizedState : Le.next;
    if (t !== null) (Le = t), (Ee = e);
    else {
      if (e === null)
        throw ce.alternate === null ? Error(r(467)) : Error(r(310));
      (Ee = e),
        (e = {
          memoizedState: Ee.memoizedState,
          baseState: Ee.baseState,
          baseQueue: Ee.baseQueue,
          queue: Ee.queue,
          next: null,
        }),
        Le === null ? (ce.memoizedState = Le = e) : (Le = Le.next = e);
    }
    return Le;
  }
  function Wr() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Dn(e) {
    var t = zn;
    return (
      (zn += 1),
      Cl === null && (Cl = []),
      (e = ud(Cl, e, t)),
      (t = ce),
      (Le === null ? t.memoizedState : Le.next) === null &&
        ((t = t.alternate),
        (O.H = t === null || t.memoizedState === null ? Kd : Id)),
      e
    );
  }
  function Zi(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Dn(e);
      if (e.$$typeof === F) return Ie(e);
    }
    throw Error(r(438, String(e)));
  }
  function Pr(e) {
    var t = null,
      a = ce.updateQueue;
    if ((a !== null && (t = a.memoCache), t == null)) {
      var l = ce.alternate;
      l !== null &&
        ((l = l.updateQueue),
        l !== null &&
          ((l = l.memoCache),
          l != null &&
            (t = {
              data: l.data.map(function (n) {
                return n.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      a === null && ((a = Wr()), (ce.updateQueue = a)),
      (a.memoCache = t),
      (a = t.data[t.index]),
      a === void 0)
    )
      for (a = t.data[t.index] = Array(e), l = 0; l < e; l++) a[l] = qt;
    return t.index++, a;
  }
  function Wt(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Vi(e) {
    var t = Ue();
    return es(t, Ee, e);
  }
  function es(e, t, a) {
    var l = e.queue;
    if (l === null) throw Error(r(311));
    l.lastRenderedReducer = a;
    var n = e.baseQueue,
      i = l.pending;
    if (i !== null) {
      if (n !== null) {
        var f = n.next;
        (n.next = i.next), (i.next = f);
      }
      (t.baseQueue = n = i), (l.pending = null);
    }
    if (((i = e.baseState), n === null)) e.memoizedState = i;
    else {
      t = n.next;
      var d = (f = null),
        S = null,
        N = t,
        L = !1;
      do {
        var q = N.lane & -536870913;
        if (q !== N.lane ? (ge & q) === q : (Sa & q) === q) {
          var j = N.revertLane;
          if (j === 0)
            S !== null &&
              (S = S.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: N.action,
                  hasEagerState: N.hasEagerState,
                  eagerState: N.eagerState,
                  next: null,
                }),
              q === Nl && (L = !0);
          else if ((Sa & j) === j) {
            (N = N.next), j === Nl && (L = !0);
            continue;
          } else
            (q = {
              lane: 0,
              revertLane: N.revertLane,
              action: N.action,
              hasEagerState: N.hasEagerState,
              eagerState: N.eagerState,
              next: null,
            }),
              S === null ? ((d = S = q), (f = i)) : (S = S.next = q),
              (ce.lanes |= j),
              (_a |= j);
          (q = N.action),
            tl && a(i, q),
            (i = N.hasEagerState ? N.eagerState : a(i, q));
        } else
          (j = {
            lane: q,
            revertLane: N.revertLane,
            action: N.action,
            hasEagerState: N.hasEagerState,
            eagerState: N.eagerState,
            next: null,
          }),
            S === null ? ((d = S = j), (f = i)) : (S = S.next = j),
            (ce.lanes |= q),
            (_a |= q);
        N = N.next;
      } while (N !== null && N !== t);
      if (
        (S === null ? (f = i) : (S.next = d),
        !ct(i, e.memoizedState) && ((Xe = !0), L && ((a = jl), a !== null)))
      )
        throw a;
      (e.memoizedState = i),
        (e.baseState = f),
        (e.baseQueue = S),
        (l.lastRenderedState = i);
    }
    return n === null && (l.lanes = 0), [e.memoizedState, l.dispatch];
  }
  function ts(e) {
    var t = Ue(),
      a = t.queue;
    if (a === null) throw Error(r(311));
    a.lastRenderedReducer = e;
    var l = a.dispatch,
      n = a.pending,
      i = t.memoizedState;
    if (n !== null) {
      a.pending = null;
      var f = (n = n.next);
      do (i = e(i, f.action)), (f = f.next);
      while (f !== n);
      ct(i, t.memoizedState) || (Xe = !0),
        (t.memoizedState = i),
        t.baseQueue === null && (t.baseState = i),
        (a.lastRenderedState = i);
    }
    return [i, l];
  }
  function hd(e, t, a) {
    var l = ce,
      n = Ue(),
      i = pe;
    if (i) {
      if (a === void 0) throw Error(r(407));
      a = a();
    } else a = t();
    var f = !ct((Ee || n).memoizedState, a);
    f && ((n.memoizedState = a), (Xe = !0)), (n = n.queue);
    var d = yd.bind(null, l, n, e);
    if (
      (Cn(2048, 8, d, [e]),
      n.getSnapshot !== t || f || (Le !== null && Le.memoizedState.tag & 1))
    ) {
      if (
        ((l.flags |= 2048),
        Ml(9, Qi(), gd.bind(null, l, n, a, t), null),
        Oe === null)
      )
        throw Error(r(349));
      i || (Sa & 124) !== 0 || vd(l, t, a);
    }
    return a;
  }
  function vd(e, t, a) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: a }),
      (t = ce.updateQueue),
      t === null
        ? ((t = Wr()), (ce.updateQueue = t), (t.stores = [e]))
        : ((a = t.stores), a === null ? (t.stores = [e]) : a.push(e));
  }
  function gd(e, t, a, l) {
    (t.value = a), (t.getSnapshot = l), pd(t) && bd(e);
  }
  function yd(e, t, a) {
    return a(function () {
      pd(t) && bd(e);
    });
  }
  function pd(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var a = t();
      return !ct(e, a);
    } catch {
      return !0;
    }
  }
  function bd(e) {
    var t = xl(e, 2);
    t !== null && vt(t, e, 2);
  }
  function as(e) {
    var t = at();
    if (typeof e == "function") {
      var a = e;
      if (((e = a()), tl)) {
        ma(!0);
        try {
          a();
        } finally {
          ma(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = e),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Wt,
        lastRenderedState: e,
      }),
      t
    );
  }
  function Sd(e, t, a, l) {
    return (e.baseState = a), es(e, Ee, typeof l == "function" ? l : Wt);
  }
  function P1(e, t, a, l, n) {
    if (ki(e)) throw Error(r(485));
    if (((e = t.action), e !== null)) {
      var i = {
        payload: n,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (f) {
          i.listeners.push(f);
        },
      };
      O.T !== null ? a(!0) : (i.isTransition = !1),
        l(i),
        (a = t.pending),
        a === null
          ? ((i.next = t.pending = i), Ed(t, i))
          : ((i.next = a.next), (t.pending = a.next = i));
    }
  }
  function Ed(e, t) {
    var a = t.action,
      l = t.payload,
      n = e.state;
    if (t.isTransition) {
      var i = O.T,
        f = {};
      O.T = f;
      try {
        var d = a(n, l),
          S = O.S;
        S !== null && S(f, d), Ad(e, t, d);
      } catch (N) {
        ls(e, t, N);
      } finally {
        O.T = i;
      }
    } else
      try {
        (i = a(n, l)), Ad(e, t, i);
      } catch (N) {
        ls(e, t, N);
      }
  }
  function Ad(e, t, a) {
    a !== null && typeof a == "object" && typeof a.then == "function"
      ? a.then(
          function (l) {
            Td(e, t, l);
          },
          function (l) {
            return ls(e, t, l);
          }
        )
      : Td(e, t, a);
  }
  function Td(e, t, a) {
    (t.status = "fulfilled"),
      (t.value = a),
      xd(t),
      (e.state = a),
      (t = e.pending),
      t !== null &&
        ((a = t.next),
        a === t ? (e.pending = null) : ((a = a.next), (t.next = a), Ed(e, a)));
  }
  function ls(e, t, a) {
    var l = e.pending;
    if (((e.pending = null), l !== null)) {
      l = l.next;
      do (t.status = "rejected"), (t.reason = a), xd(t), (t = t.next);
      while (t !== l);
    }
    e.action = null;
  }
  function xd(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function Od(e, t) {
    return t;
  }
  function Rd(e, t) {
    if (pe) {
      var a = Oe.formState;
      if (a !== null) {
        e: {
          var l = ce;
          if (pe) {
            if (ze) {
              t: {
                for (var n = ze, i = Gt; n.nodeType !== 8; ) {
                  if (!i) {
                    n = null;
                    break t;
                  }
                  if (((n = Dt(n.nextSibling)), n === null)) {
                    n = null;
                    break t;
                  }
                }
                (i = n.data), (n = i === "F!" || i === "F" ? n : null);
              }
              if (n) {
                (ze = Dt(n.nextSibling)), (l = n.data === "F!");
                break e;
              }
            }
            Ja(l);
          }
          l = !1;
        }
        l && (t = a[0]);
      }
    }
    return (
      (a = at()),
      (a.memoizedState = a.baseState = t),
      (l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Od,
        lastRenderedState: t,
      }),
      (a.queue = l),
      (a = Qd.bind(null, ce, l)),
      (l.dispatch = a),
      (l = as(!1)),
      (i = ss.bind(null, ce, !1, l.queue)),
      (l = at()),
      (n = { state: t, dispatch: null, action: e, pending: null }),
      (l.queue = n),
      (a = P1.bind(null, ce, n, i, a)),
      (n.dispatch = a),
      (l.memoizedState = e),
      [t, a, !1]
    );
  }
  function _d(e) {
    var t = Ue();
    return Nd(t, Ee, e);
  }
  function Nd(e, t, a) {
    if (
      ((t = es(e, t, Od)[0]),
      (e = Vi(Wt)[0]),
      typeof t == "object" && t !== null && typeof t.then == "function")
    )
      try {
        var l = Dn(t);
      } catch (f) {
        throw f === On ? Hi : f;
      }
    else l = t;
    t = Ue();
    var n = t.queue,
      i = n.dispatch;
    return (
      a !== t.memoizedState &&
        ((ce.flags |= 2048), Ml(9, Qi(), ey.bind(null, n, a), null)),
      [l, i, e]
    );
  }
  function ey(e, t) {
    e.action = t;
  }
  function jd(e) {
    var t = Ue(),
      a = Ee;
    if (a !== null) return Nd(t, a, e);
    Ue(), (t = t.memoizedState), (a = Ue());
    var l = a.queue.dispatch;
    return (a.memoizedState = e), [t, l, !1];
  }
  function Ml(e, t, a, l) {
    return (
      (e = { tag: e, create: a, deps: l, inst: t, next: null }),
      (t = ce.updateQueue),
      t === null && ((t = Wr()), (ce.updateQueue = t)),
      (a = t.lastEffect),
      a === null
        ? (t.lastEffect = e.next = e)
        : ((l = a.next), (a.next = e), (e.next = l), (t.lastEffect = e)),
      e
    );
  }
  function Qi() {
    return { destroy: void 0, resource: void 0 };
  }
  function zd() {
    return Ue().memoizedState;
  }
  function $i(e, t, a, l) {
    var n = at();
    (l = l === void 0 ? null : l),
      (ce.flags |= e),
      (n.memoizedState = Ml(1 | t, Qi(), a, l));
  }
  function Cn(e, t, a, l) {
    var n = Ue();
    l = l === void 0 ? null : l;
    var i = n.memoizedState.inst;
    Ee !== null && l !== null && kr(l, Ee.memoizedState.deps)
      ? (n.memoizedState = Ml(t, i, a, l))
      : ((ce.flags |= e), (n.memoizedState = Ml(1 | t, i, a, l)));
  }
  function Dd(e, t) {
    $i(8390656, 8, e, t);
  }
  function Cd(e, t) {
    Cn(2048, 8, e, t);
  }
  function Md(e, t) {
    return Cn(4, 2, e, t);
  }
  function wd(e, t) {
    return Cn(4, 4, e, t);
  }
  function Ld(e, t) {
    if (typeof t == "function") {
      e = e();
      var a = t(e);
      return function () {
        typeof a == "function" ? a() : t(null);
      };
    }
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function Ud(e, t, a) {
    (a = a != null ? a.concat([e]) : null), Cn(4, 4, Ld.bind(null, t, e), a);
  }
  function ns() {}
  function qd(e, t) {
    var a = Ue();
    t = t === void 0 ? null : t;
    var l = a.memoizedState;
    return t !== null && kr(t, l[1]) ? l[0] : ((a.memoizedState = [e, t]), e);
  }
  function Hd(e, t) {
    var a = Ue();
    t = t === void 0 ? null : t;
    var l = a.memoizedState;
    if (t !== null && kr(t, l[1])) return l[0];
    if (((l = e()), tl)) {
      ma(!0);
      try {
        e();
      } finally {
        ma(!1);
      }
    }
    return (a.memoizedState = [l, t]), l;
  }
  function is(e, t, a) {
    return a === void 0 || (Sa & 1073741824) !== 0
      ? (e.memoizedState = t)
      : ((e.memoizedState = a), (e = Ym()), (ce.lanes |= e), (_a |= e), a);
  }
  function Gd(e, t, a, l) {
    return ct(a, t)
      ? a
      : zl.current !== null
      ? ((e = is(e, a, l)), ct(e, t) || (Xe = !0), e)
      : (Sa & 42) === 0
      ? ((Xe = !0), (e.memoizedState = a))
      : ((e = Ym()), (ce.lanes |= e), (_a |= e), t);
  }
  function Bd(e, t, a, l, n) {
    var i = w.p;
    w.p = i !== 0 && 8 > i ? i : 8;
    var f = O.T,
      d = {};
    (O.T = d), ss(e, !1, t, a);
    try {
      var S = n(),
        N = O.S;
      if (
        (N !== null && N(d, S),
        S !== null && typeof S == "object" && typeof S.then == "function")
      ) {
        var L = F1(S, l);
        Mn(e, t, L, ht(e));
      } else Mn(e, t, l, ht(e));
    } catch (q) {
      Mn(e, t, { then: function () {}, status: "rejected", reason: q }, ht());
    } finally {
      (w.p = i), (O.T = f);
    }
  }
  function ty() {}
  function us(e, t, a, l) {
    if (e.tag !== 5) throw Error(r(476));
    var n = Yd(e).queue;
    Bd(
      e,
      n,
      t,
      G,
      a === null
        ? ty
        : function () {
            return Xd(e), a(l);
          }
    );
  }
  function Yd(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: G,
      baseState: G,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Wt,
        lastRenderedState: G,
      },
      next: null,
    };
    var a = {};
    return (
      (t.next = {
        memoizedState: a,
        baseState: a,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Wt,
          lastRenderedState: a,
        },
        next: null,
      }),
      (e.memoizedState = t),
      (e = e.alternate),
      e !== null && (e.memoizedState = t),
      t
    );
  }
  function Xd(e) {
    var t = Yd(e).next.queue;
    Mn(e, t, {}, ht());
  }
  function rs() {
    return Ie(Jn);
  }
  function Zd() {
    return Ue().memoizedState;
  }
  function Vd() {
    return Ue().memoizedState;
  }
  function ay(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var a = ht();
          e = pa(a);
          var l = ba(t, e, a);
          l !== null && (vt(l, t, a), _n(l, t, a)),
            (t = { cache: qr() }),
            (e.payload = t);
          return;
      }
      t = t.return;
    }
  }
  function ly(e, t, a) {
    var l = ht();
    (a = {
      lane: l,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      ki(e)
        ? $d(t, a)
        : ((a = _r(e, t, a, l)), a !== null && (vt(a, e, l), kd(a, t, l)));
  }
  function Qd(e, t, a) {
    var l = ht();
    Mn(e, t, a, l);
  }
  function Mn(e, t, a, l) {
    var n = {
      lane: l,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (ki(e)) $d(t, n);
    else {
      var i = e.alternate;
      if (
        e.lanes === 0 &&
        (i === null || i.lanes === 0) &&
        ((i = t.lastRenderedReducer), i !== null)
      )
        try {
          var f = t.lastRenderedState,
            d = i(f, a);
          if (((n.hasEagerState = !0), (n.eagerState = d), ct(d, f)))
            return zi(e, t, n, 0), Oe === null && ji(), !1;
        } catch {
        } finally {
        }
      if (((a = _r(e, t, n, l)), a !== null))
        return vt(a, e, l), kd(a, t, l), !0;
    }
    return !1;
  }
  function ss(e, t, a, l) {
    if (
      ((l = {
        lane: 2,
        revertLane: Bs(),
        action: l,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      ki(e))
    ) {
      if (t) throw Error(r(479));
    } else (t = _r(e, a, l, 2)), t !== null && vt(t, e, 2);
  }
  function ki(e) {
    var t = e.alternate;
    return e === ce || (t !== null && t === ce);
  }
  function $d(e, t) {
    Dl = Yi = !0;
    var a = e.pending;
    a === null ? (t.next = t) : ((t.next = a.next), (a.next = t)),
      (e.pending = t);
  }
  function kd(e, t, a) {
    if ((a & 4194048) !== 0) {
      var l = t.lanes;
      (l &= e.pendingLanes), (a |= l), (t.lanes = a), eo(e, a);
    }
  }
  var Ki = {
      readContext: Ie,
      use: Zi,
      useCallback: Ce,
      useContext: Ce,
      useEffect: Ce,
      useImperativeHandle: Ce,
      useLayoutEffect: Ce,
      useInsertionEffect: Ce,
      useMemo: Ce,
      useReducer: Ce,
      useRef: Ce,
      useState: Ce,
      useDebugValue: Ce,
      useDeferredValue: Ce,
      useTransition: Ce,
      useSyncExternalStore: Ce,
      useId: Ce,
      useHostTransitionStatus: Ce,
      useFormState: Ce,
      useActionState: Ce,
      useOptimistic: Ce,
      useMemoCache: Ce,
      useCacheRefresh: Ce,
    },
    Kd = {
      readContext: Ie,
      use: Zi,
      useCallback: function (e, t) {
        return (at().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: Ie,
      useEffect: Dd,
      useImperativeHandle: function (e, t, a) {
        (a = a != null ? a.concat([e]) : null),
          $i(4194308, 4, Ld.bind(null, t, e), a);
      },
      useLayoutEffect: function (e, t) {
        return $i(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        $i(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var a = at();
        t = t === void 0 ? null : t;
        var l = e();
        if (tl) {
          ma(!0);
          try {
            e();
          } finally {
            ma(!1);
          }
        }
        return (a.memoizedState = [l, t]), l;
      },
      useReducer: function (e, t, a) {
        var l = at();
        if (a !== void 0) {
          var n = a(t);
          if (tl) {
            ma(!0);
            try {
              a(t);
            } finally {
              ma(!1);
            }
          }
        } else n = t;
        return (
          (l.memoizedState = l.baseState = n),
          (e = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: n,
          }),
          (l.queue = e),
          (e = e.dispatch = ly.bind(null, ce, e)),
          [l.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = at();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: function (e) {
        e = as(e);
        var t = e.queue,
          a = Qd.bind(null, ce, t);
        return (t.dispatch = a), [e.memoizedState, a];
      },
      useDebugValue: ns,
      useDeferredValue: function (e, t) {
        var a = at();
        return is(a, e, t);
      },
      useTransition: function () {
        var e = as(!1);
        return (
          (e = Bd.bind(null, ce, e.queue, !0, !1)),
          (at().memoizedState = e),
          [!1, e]
        );
      },
      useSyncExternalStore: function (e, t, a) {
        var l = ce,
          n = at();
        if (pe) {
          if (a === void 0) throw Error(r(407));
          a = a();
        } else {
          if (((a = t()), Oe === null)) throw Error(r(349));
          (ge & 124) !== 0 || vd(l, t, a);
        }
        n.memoizedState = a;
        var i = { value: a, getSnapshot: t };
        return (
          (n.queue = i),
          Dd(yd.bind(null, l, i, e), [e]),
          (l.flags |= 2048),
          Ml(9, Qi(), gd.bind(null, l, i, a, t), null),
          a
        );
      },
      useId: function () {
        var e = at(),
          t = Oe.identifierPrefix;
        if (pe) {
          var a = It,
            l = Kt;
          (a = (l & ~(1 << (32 - st(l) - 1))).toString(32) + a),
            (t = "«" + t + "R" + a),
            (a = Xi++),
            0 < a && (t += "H" + a.toString(32)),
            (t += "»");
        } else (a = J1++), (t = "«" + t + "r" + a.toString(32) + "»");
        return (e.memoizedState = t);
      },
      useHostTransitionStatus: rs,
      useFormState: Rd,
      useActionState: Rd,
      useOptimistic: function (e) {
        var t = at();
        t.memoizedState = t.baseState = e;
        var a = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (t.queue = a),
          (t = ss.bind(null, ce, !0, a)),
          (a.dispatch = t),
          [e, t]
        );
      },
      useMemoCache: Pr,
      useCacheRefresh: function () {
        return (at().memoizedState = ay.bind(null, ce));
      },
    },
    Id = {
      readContext: Ie,
      use: Zi,
      useCallback: qd,
      useContext: Ie,
      useEffect: Cd,
      useImperativeHandle: Ud,
      useInsertionEffect: Md,
      useLayoutEffect: wd,
      useMemo: Hd,
      useReducer: Vi,
      useRef: zd,
      useState: function () {
        return Vi(Wt);
      },
      useDebugValue: ns,
      useDeferredValue: function (e, t) {
        var a = Ue();
        return Gd(a, Ee.memoizedState, e, t);
      },
      useTransition: function () {
        var e = Vi(Wt)[0],
          t = Ue().memoizedState;
        return [typeof e == "boolean" ? e : Dn(e), t];
      },
      useSyncExternalStore: hd,
      useId: Zd,
      useHostTransitionStatus: rs,
      useFormState: _d,
      useActionState: _d,
      useOptimistic: function (e, t) {
        var a = Ue();
        return Sd(a, Ee, e, t);
      },
      useMemoCache: Pr,
      useCacheRefresh: Vd,
    },
    ny = {
      readContext: Ie,
      use: Zi,
      useCallback: qd,
      useContext: Ie,
      useEffect: Cd,
      useImperativeHandle: Ud,
      useInsertionEffect: Md,
      useLayoutEffect: wd,
      useMemo: Hd,
      useReducer: ts,
      useRef: zd,
      useState: function () {
        return ts(Wt);
      },
      useDebugValue: ns,
      useDeferredValue: function (e, t) {
        var a = Ue();
        return Ee === null ? is(a, e, t) : Gd(a, Ee.memoizedState, e, t);
      },
      useTransition: function () {
        var e = ts(Wt)[0],
          t = Ue().memoizedState;
        return [typeof e == "boolean" ? e : Dn(e), t];
      },
      useSyncExternalStore: hd,
      useId: Zd,
      useHostTransitionStatus: rs,
      useFormState: jd,
      useActionState: jd,
      useOptimistic: function (e, t) {
        var a = Ue();
        return Ee !== null
          ? Sd(a, Ee, e, t)
          : ((a.baseState = e), [e, a.queue.dispatch]);
      },
      useMemoCache: Pr,
      useCacheRefresh: Vd,
    },
    wl = null,
    wn = 0;
  function Ii(e) {
    var t = wn;
    return (wn += 1), wl === null && (wl = []), ud(wl, e, t);
  }
  function Ln(e, t) {
    (t = t.props.ref), (e.ref = t !== void 0 ? t : null);
  }
  function Fi(e, t) {
    throw t.$$typeof === E
      ? Error(r(525))
      : ((e = Object.prototype.toString.call(t)),
        Error(
          r(
            31,
            e === "[object Object]"
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : e
          )
        ));
  }
  function Fd(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Jd(e) {
    function t(x, A) {
      if (e) {
        var _ = x.deletions;
        _ === null ? ((x.deletions = [A]), (x.flags |= 16)) : _.push(A);
      }
    }
    function a(x, A) {
      if (!e) return null;
      for (; A !== null; ) t(x, A), (A = A.sibling);
      return null;
    }
    function l(x) {
      for (var A = new Map(); x !== null; )
        x.key !== null ? A.set(x.key, x) : A.set(x.index, x), (x = x.sibling);
      return A;
    }
    function n(x, A) {
      return (x = kt(x, A)), (x.index = 0), (x.sibling = null), x;
    }
    function i(x, A, _) {
      return (
        (x.index = _),
        e
          ? ((_ = x.alternate),
            _ !== null
              ? ((_ = _.index), _ < A ? ((x.flags |= 67108866), A) : _)
              : ((x.flags |= 67108866), A))
          : ((x.flags |= 1048576), A)
      );
    }
    function f(x) {
      return e && x.alternate === null && (x.flags |= 67108866), x;
    }
    function d(x, A, _, U) {
      return A === null || A.tag !== 6
        ? ((A = jr(_, x.mode, U)), (A.return = x), A)
        : ((A = n(A, _)), (A.return = x), A);
    }
    function S(x, A, _, U) {
      var I = _.type;
      return I === Z
        ? L(x, A, _.props.children, U, _.key)
        : A !== null &&
          (A.elementType === I ||
            (typeof I == "object" &&
              I !== null &&
              I.$$typeof === W &&
              Fd(I) === A.type))
        ? ((A = n(A, _.props)), Ln(A, _), (A.return = x), A)
        : ((A = Ci(_.type, _.key, _.props, null, x.mode, U)),
          Ln(A, _),
          (A.return = x),
          A);
    }
    function N(x, A, _, U) {
      return A === null ||
        A.tag !== 4 ||
        A.stateNode.containerInfo !== _.containerInfo ||
        A.stateNode.implementation !== _.implementation
        ? ((A = zr(_, x.mode, U)), (A.return = x), A)
        : ((A = n(A, _.children || [])), (A.return = x), A);
    }
    function L(x, A, _, U, I) {
      return A === null || A.tag !== 7
        ? ((A = ka(_, x.mode, U, I)), (A.return = x), A)
        : ((A = n(A, _)), (A.return = x), A);
    }
    function q(x, A, _) {
      if (
        (typeof A == "string" && A !== "") ||
        typeof A == "number" ||
        typeof A == "bigint"
      )
        return (A = jr("" + A, x.mode, _)), (A.return = x), A;
      if (typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case R:
            return (
              (_ = Ci(A.type, A.key, A.props, null, x.mode, _)),
              Ln(_, A),
              (_.return = x),
              _
            );
          case z:
            return (A = zr(A, x.mode, _)), (A.return = x), A;
          case W:
            var U = A._init;
            return (A = U(A._payload)), q(x, A, _);
        }
        if (Y(A) || we(A))
          return (A = ka(A, x.mode, _, null)), (A.return = x), A;
        if (typeof A.then == "function") return q(x, Ii(A), _);
        if (A.$$typeof === F) return q(x, Ui(x, A), _);
        Fi(x, A);
      }
      return null;
    }
    function j(x, A, _, U) {
      var I = A !== null ? A.key : null;
      if (
        (typeof _ == "string" && _ !== "") ||
        typeof _ == "number" ||
        typeof _ == "bigint"
      )
        return I !== null ? null : d(x, A, "" + _, U);
      if (typeof _ == "object" && _ !== null) {
        switch (_.$$typeof) {
          case R:
            return _.key === I ? S(x, A, _, U) : null;
          case z:
            return _.key === I ? N(x, A, _, U) : null;
          case W:
            return (I = _._init), (_ = I(_._payload)), j(x, A, _, U);
        }
        if (Y(_) || we(_)) return I !== null ? null : L(x, A, _, U, null);
        if (typeof _.then == "function") return j(x, A, Ii(_), U);
        if (_.$$typeof === F) return j(x, A, Ui(x, _), U);
        Fi(x, _);
      }
      return null;
    }
    function D(x, A, _, U, I) {
      if (
        (typeof U == "string" && U !== "") ||
        typeof U == "number" ||
        typeof U == "bigint"
      )
        return (x = x.get(_) || null), d(A, x, "" + U, I);
      if (typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case R:
            return (
              (x = x.get(U.key === null ? _ : U.key) || null), S(A, x, U, I)
            );
          case z:
            return (
              (x = x.get(U.key === null ? _ : U.key) || null), N(A, x, U, I)
            );
          case W:
            var oe = U._init;
            return (U = oe(U._payload)), D(x, A, _, U, I);
        }
        if (Y(U) || we(U)) return (x = x.get(_) || null), L(A, x, U, I, null);
        if (typeof U.then == "function") return D(x, A, _, Ii(U), I);
        if (U.$$typeof === F) return D(x, A, _, Ui(A, U), I);
        Fi(A, U);
      }
      return null;
    }
    function ue(x, A, _, U) {
      for (
        var I = null, oe = null, P = A, ne = (A = 0), Ve = null;
        P !== null && ne < _.length;
        ne++
      ) {
        P.index > ne ? ((Ve = P), (P = null)) : (Ve = P.sibling);
        var ye = j(x, P, _[ne], U);
        if (ye === null) {
          P === null && (P = Ve);
          break;
        }
        e && P && ye.alternate === null && t(x, P),
          (A = i(ye, A, ne)),
          oe === null ? (I = ye) : (oe.sibling = ye),
          (oe = ye),
          (P = Ve);
      }
      if (ne === _.length) return a(x, P), pe && Ia(x, ne), I;
      if (P === null) {
        for (; ne < _.length; ne++)
          (P = q(x, _[ne], U)),
            P !== null &&
              ((A = i(P, A, ne)),
              oe === null ? (I = P) : (oe.sibling = P),
              (oe = P));
        return pe && Ia(x, ne), I;
      }
      for (P = l(P); ne < _.length; ne++)
        (Ve = D(P, x, ne, _[ne], U)),
          Ve !== null &&
            (e &&
              Ve.alternate !== null &&
              P.delete(Ve.key === null ? ne : Ve.key),
            (A = i(Ve, A, ne)),
            oe === null ? (I = Ve) : (oe.sibling = Ve),
            (oe = Ve));
      return (
        e &&
          P.forEach(function (Ua) {
            return t(x, Ua);
          }),
        pe && Ia(x, ne),
        I
      );
    }
    function ae(x, A, _, U) {
      if (_ == null) throw Error(r(151));
      for (
        var I = null, oe = null, P = A, ne = (A = 0), Ve = null, ye = _.next();
        P !== null && !ye.done;
        ne++, ye = _.next()
      ) {
        P.index > ne ? ((Ve = P), (P = null)) : (Ve = P.sibling);
        var Ua = j(x, P, ye.value, U);
        if (Ua === null) {
          P === null && (P = Ve);
          break;
        }
        e && P && Ua.alternate === null && t(x, P),
          (A = i(Ua, A, ne)),
          oe === null ? (I = Ua) : (oe.sibling = Ua),
          (oe = Ua),
          (P = Ve);
      }
      if (ye.done) return a(x, P), pe && Ia(x, ne), I;
      if (P === null) {
        for (; !ye.done; ne++, ye = _.next())
          (ye = q(x, ye.value, U)),
            ye !== null &&
              ((A = i(ye, A, ne)),
              oe === null ? (I = ye) : (oe.sibling = ye),
              (oe = ye));
        return pe && Ia(x, ne), I;
      }
      for (P = l(P); !ye.done; ne++, ye = _.next())
        (ye = D(P, x, ne, ye.value, U)),
          ye !== null &&
            (e &&
              ye.alternate !== null &&
              P.delete(ye.key === null ? ne : ye.key),
            (A = i(ye, A, ne)),
            oe === null ? (I = ye) : (oe.sibling = ye),
            (oe = ye));
      return (
        e &&
          P.forEach(function (ip) {
            return t(x, ip);
          }),
        pe && Ia(x, ne),
        I
      );
    }
    function Te(x, A, _, U) {
      if (
        (typeof _ == "object" &&
          _ !== null &&
          _.type === Z &&
          _.key === null &&
          (_ = _.props.children),
        typeof _ == "object" && _ !== null)
      ) {
        switch (_.$$typeof) {
          case R:
            e: {
              for (var I = _.key; A !== null; ) {
                if (A.key === I) {
                  if (((I = _.type), I === Z)) {
                    if (A.tag === 7) {
                      a(x, A.sibling),
                        (U = n(A, _.props.children)),
                        (U.return = x),
                        (x = U);
                      break e;
                    }
                  } else if (
                    A.elementType === I ||
                    (typeof I == "object" &&
                      I !== null &&
                      I.$$typeof === W &&
                      Fd(I) === A.type)
                  ) {
                    a(x, A.sibling),
                      (U = n(A, _.props)),
                      Ln(U, _),
                      (U.return = x),
                      (x = U);
                    break e;
                  }
                  a(x, A);
                  break;
                } else t(x, A);
                A = A.sibling;
              }
              _.type === Z
                ? ((U = ka(_.props.children, x.mode, U, _.key)),
                  (U.return = x),
                  (x = U))
                : ((U = Ci(_.type, _.key, _.props, null, x.mode, U)),
                  Ln(U, _),
                  (U.return = x),
                  (x = U));
            }
            return f(x);
          case z:
            e: {
              for (I = _.key; A !== null; ) {
                if (A.key === I)
                  if (
                    A.tag === 4 &&
                    A.stateNode.containerInfo === _.containerInfo &&
                    A.stateNode.implementation === _.implementation
                  ) {
                    a(x, A.sibling),
                      (U = n(A, _.children || [])),
                      (U.return = x),
                      (x = U);
                    break e;
                  } else {
                    a(x, A);
                    break;
                  }
                else t(x, A);
                A = A.sibling;
              }
              (U = zr(_, x.mode, U)), (U.return = x), (x = U);
            }
            return f(x);
          case W:
            return (I = _._init), (_ = I(_._payload)), Te(x, A, _, U);
        }
        if (Y(_)) return ue(x, A, _, U);
        if (we(_)) {
          if (((I = we(_)), typeof I != "function")) throw Error(r(150));
          return (_ = I.call(_)), ae(x, A, _, U);
        }
        if (typeof _.then == "function") return Te(x, A, Ii(_), U);
        if (_.$$typeof === F) return Te(x, A, Ui(x, _), U);
        Fi(x, _);
      }
      return (typeof _ == "string" && _ !== "") ||
        typeof _ == "number" ||
        typeof _ == "bigint"
        ? ((_ = "" + _),
          A !== null && A.tag === 6
            ? (a(x, A.sibling), (U = n(A, _)), (U.return = x), (x = U))
            : (a(x, A), (U = jr(_, x.mode, U)), (U.return = x), (x = U)),
          f(x))
        : a(x, A);
    }
    return function (x, A, _, U) {
      try {
        wn = 0;
        var I = Te(x, A, _, U);
        return (wl = null), I;
      } catch (P) {
        if (P === On || P === Hi) throw P;
        var oe = ft(29, P, null, x.mode);
        return (oe.lanes = U), (oe.return = x), oe;
      } finally {
      }
    };
  }
  var Ll = Jd(!0),
    Wd = Jd(!1),
    xt = C(null),
    Bt = null;
  function Ea(e) {
    var t = e.alternate;
    B(He, He.current & 1),
      B(xt, e),
      Bt === null &&
        (t === null || zl.current !== null || t.memoizedState !== null) &&
        (Bt = e);
  }
  function Pd(e) {
    if (e.tag === 22) {
      if ((B(He, He.current), B(xt, e), Bt === null)) {
        var t = e.alternate;
        t !== null && t.memoizedState !== null && (Bt = e);
      }
    } else Aa();
  }
  function Aa() {
    B(He, He.current), B(xt, xt.current);
  }
  function Pt(e) {
    H(xt), Bt === e && (Bt = null), H(He);
  }
  var He = C(0);
  function Ji(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var a = t.memoizedState;
        if (
          a !== null &&
          ((a = a.dehydrated), a === null || a.data === "$?" || Ws(a))
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  function cs(e, t, a, l) {
    (t = e.memoizedState),
      (a = a(l, t)),
      (a = a == null ? t : g({}, t, a)),
      (e.memoizedState = a),
      e.lanes === 0 && (e.updateQueue.baseState = a);
  }
  var fs = {
    enqueueSetState: function (e, t, a) {
      e = e._reactInternals;
      var l = ht(),
        n = pa(l);
      (n.payload = t),
        a != null && (n.callback = a),
        (t = ba(e, n, l)),
        t !== null && (vt(t, e, l), _n(t, e, l));
    },
    enqueueReplaceState: function (e, t, a) {
      e = e._reactInternals;
      var l = ht(),
        n = pa(l);
      (n.tag = 1),
        (n.payload = t),
        a != null && (n.callback = a),
        (t = ba(e, n, l)),
        t !== null && (vt(t, e, l), _n(t, e, l));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var a = ht(),
        l = pa(a);
      (l.tag = 2),
        t != null && (l.callback = t),
        (t = ba(e, l, a)),
        t !== null && (vt(t, e, a), _n(t, e, a));
    },
  };
  function em(e, t, a, l, n, i, f) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(l, i, f)
        : t.prototype && t.prototype.isPureReactComponent
        ? !yn(a, l) || !yn(n, i)
        : !0
    );
  }
  function tm(e, t, a, l) {
    (e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(a, l),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(a, l),
      t.state !== e && fs.enqueueReplaceState(t, t.state, null);
  }
  function al(e, t) {
    var a = t;
    if ("ref" in t) {
      a = {};
      for (var l in t) l !== "ref" && (a[l] = t[l]);
    }
    if ((e = e.defaultProps)) {
      a === t && (a = g({}, a));
      for (var n in e) a[n] === void 0 && (a[n] = e[n]);
    }
    return a;
  }
  var Wi =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var t = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof e == "object" &&
                e !== null &&
                typeof e.message == "string"
                  ? String(e.message)
                  : String(e),
              error: e,
            });
            if (!window.dispatchEvent(t)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", e);
            return;
          }
          console.error(e);
        };
  function am(e) {
    Wi(e);
  }
  function lm(e) {
    console.error(e);
  }
  function nm(e) {
    Wi(e);
  }
  function Pi(e, t) {
    try {
      var a = e.onUncaughtError;
      a(t.value, { componentStack: t.stack });
    } catch (l) {
      setTimeout(function () {
        throw l;
      });
    }
  }
  function im(e, t, a) {
    try {
      var l = e.onCaughtError;
      l(a.value, {
        componentStack: a.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null,
      });
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  function os(e, t, a) {
    return (
      (a = pa(a)),
      (a.tag = 3),
      (a.payload = { element: null }),
      (a.callback = function () {
        Pi(e, t);
      }),
      a
    );
  }
  function um(e) {
    return (e = pa(e)), (e.tag = 3), e;
  }
  function rm(e, t, a, l) {
    var n = a.type.getDerivedStateFromError;
    if (typeof n == "function") {
      var i = l.value;
      (e.payload = function () {
        return n(i);
      }),
        (e.callback = function () {
          im(t, a, l);
        });
    }
    var f = a.stateNode;
    f !== null &&
      typeof f.componentDidCatch == "function" &&
      (e.callback = function () {
        im(t, a, l),
          typeof n != "function" &&
            (Na === null ? (Na = new Set([this])) : Na.add(this));
        var d = l.stack;
        this.componentDidCatch(l.value, {
          componentStack: d !== null ? d : "",
        });
      });
  }
  function iy(e, t, a, l, n) {
    if (
      ((a.flags |= 32768),
      l !== null && typeof l == "object" && typeof l.then == "function")
    ) {
      if (
        ((t = a.alternate),
        t !== null && An(t, a, n, !0),
        (a = xt.current),
        a !== null)
      ) {
        switch (a.tag) {
          case 13:
            return (
              Bt === null ? Ls() : a.alternate === null && De === 0 && (De = 3),
              (a.flags &= -257),
              (a.flags |= 65536),
              (a.lanes = n),
              l === Br
                ? (a.flags |= 16384)
                : ((t = a.updateQueue),
                  t === null ? (a.updateQueue = new Set([l])) : t.add(l),
                  qs(e, l, n)),
              !1
            );
          case 22:
            return (
              (a.flags |= 65536),
              l === Br
                ? (a.flags |= 16384)
                : ((t = a.updateQueue),
                  t === null
                    ? ((t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([l]),
                      }),
                      (a.updateQueue = t))
                    : ((a = t.retryQueue),
                      a === null ? (t.retryQueue = new Set([l])) : a.add(l)),
                  qs(e, l, n)),
              !1
            );
        }
        throw Error(r(435, a.tag));
      }
      return qs(e, l, n), Ls(), !1;
    }
    if (pe)
      return (
        (t = xt.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = n),
            l !== Mr && ((e = Error(r(422), { cause: l })), En(St(e, a))))
          : (l !== Mr && ((t = Error(r(423), { cause: l })), En(St(t, a))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (n &= -n),
            (e.lanes |= n),
            (l = St(l, a)),
            (n = os(e.stateNode, l, n)),
            Zr(e, n),
            De !== 4 && (De = 2)),
        !1
      );
    var i = Error(r(520), { cause: l });
    if (
      ((i = St(i, a)),
      Xn === null ? (Xn = [i]) : Xn.push(i),
      De !== 4 && (De = 2),
      t === null)
    )
      return !0;
    (l = St(l, a)), (a = t);
    do {
      switch (a.tag) {
        case 3:
          return (
            (a.flags |= 65536),
            (e = n & -n),
            (a.lanes |= e),
            (e = os(a.stateNode, l, e)),
            Zr(a, e),
            !1
          );
        case 1:
          if (
            ((t = a.type),
            (i = a.stateNode),
            (a.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == "function" ||
                (i !== null &&
                  typeof i.componentDidCatch == "function" &&
                  (Na === null || !Na.has(i)))))
          )
            return (
              (a.flags |= 65536),
              (n &= -n),
              (a.lanes |= n),
              (n = um(n)),
              rm(n, e, a, l),
              Zr(a, n),
              !1
            );
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var sm = Error(r(461)),
    Xe = !1;
  function Qe(e, t, a, l) {
    t.child = e === null ? Wd(t, null, a, l) : Ll(t, e.child, a, l);
  }
  function cm(e, t, a, l, n) {
    a = a.render;
    var i = t.ref;
    if ("ref" in l) {
      var f = {};
      for (var d in l) d !== "ref" && (f[d] = l[d]);
    } else f = l;
    return (
      Pa(t),
      (l = Kr(e, t, a, f, i, n)),
      (d = Ir()),
      e !== null && !Xe
        ? (Fr(e, t, n), ea(e, t, n))
        : (pe && d && Dr(t), (t.flags |= 1), Qe(e, t, l, n), t.child)
    );
  }
  function fm(e, t, a, l, n) {
    if (e === null) {
      var i = a.type;
      return typeof i == "function" &&
        !Nr(i) &&
        i.defaultProps === void 0 &&
        a.compare === null
        ? ((t.tag = 15), (t.type = i), om(e, t, i, l, n))
        : ((e = Ci(a.type, null, l, t, t.mode, n)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((i = e.child), !bs(e, n))) {
      var f = i.memoizedProps;
      if (
        ((a = a.compare), (a = a !== null ? a : yn), a(f, l) && e.ref === t.ref)
      )
        return ea(e, t, n);
    }
    return (
      (t.flags |= 1),
      (e = kt(i, l)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function om(e, t, a, l, n) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (yn(i, l) && e.ref === t.ref)
        if (((Xe = !1), (t.pendingProps = l = i), bs(e, n)))
          (e.flags & 131072) !== 0 && (Xe = !0);
        else return (t.lanes = e.lanes), ea(e, t, n);
    }
    return ds(e, t, a, l, n);
  }
  function dm(e, t, a) {
    var l = t.pendingProps,
      n = l.children,
      i = e !== null ? e.memoizedState : null;
    if (l.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (((l = i !== null ? i.baseLanes | a : a), e !== null)) {
          for (n = t.child = e.child, i = 0; n !== null; )
            (i = i | n.lanes | n.childLanes), (n = n.sibling);
          t.childLanes = i & ~l;
        } else (t.childLanes = 0), (t.child = null);
        return mm(e, t, l, a);
      }
      if ((a & 536870912) !== 0)
        (t.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && qi(t, i !== null ? i.cachePool : null),
          i !== null ? od(t, i) : Qr(),
          Pd(t);
      else
        return (
          (t.lanes = t.childLanes = 536870912),
          mm(e, t, i !== null ? i.baseLanes | a : a, a)
        );
    } else
      i !== null
        ? (qi(t, i.cachePool), od(t, i), Aa(), (t.memoizedState = null))
        : (e !== null && qi(t, null), Qr(), Aa());
    return Qe(e, t, n, a), t.child;
  }
  function mm(e, t, a, l) {
    var n = Gr();
    return (
      (n = n === null ? null : { parent: qe._currentValue, pool: n }),
      (t.memoizedState = { baseLanes: a, cachePool: n }),
      e !== null && qi(t, null),
      Qr(),
      Pd(t),
      e !== null && An(e, t, l, !0),
      null
    );
  }
  function eu(e, t) {
    var a = t.ref;
    if (a === null) e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object") throw Error(r(284));
      (e === null || e.ref !== a) && (t.flags |= 4194816);
    }
  }
  function ds(e, t, a, l, n) {
    return (
      Pa(t),
      (a = Kr(e, t, a, l, void 0, n)),
      (l = Ir()),
      e !== null && !Xe
        ? (Fr(e, t, n), ea(e, t, n))
        : (pe && l && Dr(t), (t.flags |= 1), Qe(e, t, a, n), t.child)
    );
  }
  function hm(e, t, a, l, n, i) {
    return (
      Pa(t),
      (t.updateQueue = null),
      (a = md(t, l, a, n)),
      dd(e),
      (l = Ir()),
      e !== null && !Xe
        ? (Fr(e, t, i), ea(e, t, i))
        : (pe && l && Dr(t), (t.flags |= 1), Qe(e, t, a, i), t.child)
    );
  }
  function vm(e, t, a, l, n) {
    if ((Pa(t), t.stateNode === null)) {
      var i = Ol,
        f = a.contextType;
      typeof f == "object" && f !== null && (i = Ie(f)),
        (i = new a(l, i)),
        (t.memoizedState =
          i.state !== null && i.state !== void 0 ? i.state : null),
        (i.updater = fs),
        (t.stateNode = i),
        (i._reactInternals = t),
        (i = t.stateNode),
        (i.props = l),
        (i.state = t.memoizedState),
        (i.refs = {}),
        Yr(t),
        (f = a.contextType),
        (i.context = typeof f == "object" && f !== null ? Ie(f) : Ol),
        (i.state = t.memoizedState),
        (f = a.getDerivedStateFromProps),
        typeof f == "function" && (cs(t, a, f, l), (i.state = t.memoizedState)),
        typeof a.getDerivedStateFromProps == "function" ||
          typeof i.getSnapshotBeforeUpdate == "function" ||
          (typeof i.UNSAFE_componentWillMount != "function" &&
            typeof i.componentWillMount != "function") ||
          ((f = i.state),
          typeof i.componentWillMount == "function" && i.componentWillMount(),
          typeof i.UNSAFE_componentWillMount == "function" &&
            i.UNSAFE_componentWillMount(),
          f !== i.state && fs.enqueueReplaceState(i, i.state, null),
          jn(t, l, i, n),
          Nn(),
          (i.state = t.memoizedState)),
        typeof i.componentDidMount == "function" && (t.flags |= 4194308),
        (l = !0);
    } else if (e === null) {
      i = t.stateNode;
      var d = t.memoizedProps,
        S = al(a, d);
      i.props = S;
      var N = i.context,
        L = a.contextType;
      (f = Ol), typeof L == "object" && L !== null && (f = Ie(L));
      var q = a.getDerivedStateFromProps;
      (L =
        typeof q == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function"),
        (d = t.pendingProps !== d),
        L ||
          (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
            typeof i.componentWillReceiveProps != "function") ||
          ((d || N !== f) && tm(t, i, l, f)),
        (ya = !1);
      var j = t.memoizedState;
      (i.state = j),
        jn(t, l, i, n),
        Nn(),
        (N = t.memoizedState),
        d || j !== N || ya
          ? (typeof q == "function" && (cs(t, a, q, l), (N = t.memoizedState)),
            (S = ya || em(t, a, S, l, j, N, f))
              ? (L ||
                  (typeof i.UNSAFE_componentWillMount != "function" &&
                    typeof i.componentWillMount != "function") ||
                  (typeof i.componentWillMount == "function" &&
                    i.componentWillMount(),
                  typeof i.UNSAFE_componentWillMount == "function" &&
                    i.UNSAFE_componentWillMount()),
                typeof i.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof i.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = l),
                (t.memoizedState = N)),
            (i.props = l),
            (i.state = N),
            (i.context = f),
            (l = S))
          : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
            (l = !1));
    } else {
      (i = t.stateNode),
        Xr(e, t),
        (f = t.memoizedProps),
        (L = al(a, f)),
        (i.props = L),
        (q = t.pendingProps),
        (j = i.context),
        (N = a.contextType),
        (S = Ol),
        typeof N == "object" && N !== null && (S = Ie(N)),
        (d = a.getDerivedStateFromProps),
        (N =
          typeof d == "function" ||
          typeof i.getSnapshotBeforeUpdate == "function") ||
          (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
            typeof i.componentWillReceiveProps != "function") ||
          ((f !== q || j !== S) && tm(t, i, l, S)),
        (ya = !1),
        (j = t.memoizedState),
        (i.state = j),
        jn(t, l, i, n),
        Nn();
      var D = t.memoizedState;
      f !== q ||
      j !== D ||
      ya ||
      (e !== null && e.dependencies !== null && Li(e.dependencies))
        ? (typeof d == "function" && (cs(t, a, d, l), (D = t.memoizedState)),
          (L =
            ya ||
            em(t, a, L, l, j, D, S) ||
            (e !== null && e.dependencies !== null && Li(e.dependencies)))
            ? (N ||
                (typeof i.UNSAFE_componentWillUpdate != "function" &&
                  typeof i.componentWillUpdate != "function") ||
                (typeof i.componentWillUpdate == "function" &&
                  i.componentWillUpdate(l, D, S),
                typeof i.UNSAFE_componentWillUpdate == "function" &&
                  i.UNSAFE_componentWillUpdate(l, D, S)),
              typeof i.componentDidUpdate == "function" && (t.flags |= 4),
              typeof i.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof i.componentDidUpdate != "function" ||
                (f === e.memoizedProps && j === e.memoizedState) ||
                (t.flags |= 4),
              typeof i.getSnapshotBeforeUpdate != "function" ||
                (f === e.memoizedProps && j === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = l),
              (t.memoizedState = D)),
          (i.props = l),
          (i.state = D),
          (i.context = S),
          (l = L))
        : (typeof i.componentDidUpdate != "function" ||
            (f === e.memoizedProps && j === e.memoizedState) ||
            (t.flags |= 4),
          typeof i.getSnapshotBeforeUpdate != "function" ||
            (f === e.memoizedProps && j === e.memoizedState) ||
            (t.flags |= 1024),
          (l = !1));
    }
    return (
      (i = l),
      eu(e, t),
      (l = (t.flags & 128) !== 0),
      i || l
        ? ((i = t.stateNode),
          (a =
            l && typeof a.getDerivedStateFromError != "function"
              ? null
              : i.render()),
          (t.flags |= 1),
          e !== null && l
            ? ((t.child = Ll(t, e.child, null, n)),
              (t.child = Ll(t, null, a, n)))
            : Qe(e, t, a, n),
          (t.memoizedState = i.state),
          (e = t.child))
        : (e = ea(e, t, n)),
      e
    );
  }
  function gm(e, t, a, l) {
    return Sn(), (t.flags |= 256), Qe(e, t, a, l), t.child;
  }
  var ms = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function hs(e) {
    return { baseLanes: e, cachePool: ld() };
  }
  function vs(e, t, a) {
    return (e = e !== null ? e.childLanes & ~a : 0), t && (e |= Ot), e;
  }
  function ym(e, t, a) {
    var l = t.pendingProps,
      n = !1,
      i = (t.flags & 128) !== 0,
      f;
    if (
      ((f = i) ||
        (f =
          e !== null && e.memoizedState === null ? !1 : (He.current & 2) !== 0),
      f && ((n = !0), (t.flags &= -129)),
      (f = (t.flags & 32) !== 0),
      (t.flags &= -33),
      e === null)
    ) {
      if (pe) {
        if ((n ? Ea(t) : Aa(), pe)) {
          var d = ze,
            S;
          if ((S = d)) {
            e: {
              for (S = d, d = Gt; S.nodeType !== 8; ) {
                if (!d) {
                  d = null;
                  break e;
                }
                if (((S = Dt(S.nextSibling)), S === null)) {
                  d = null;
                  break e;
                }
              }
              d = S;
            }
            d !== null
              ? ((t.memoizedState = {
                  dehydrated: d,
                  treeContext: Ka !== null ? { id: Kt, overflow: It } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (S = ft(18, null, null, 0)),
                (S.stateNode = d),
                (S.return = t),
                (t.child = S),
                (We = t),
                (ze = null),
                (S = !0))
              : (S = !1);
          }
          S || Ja(t);
        }
        if (
          ((d = t.memoizedState),
          d !== null && ((d = d.dehydrated), d !== null))
        )
          return Ws(d) ? (t.lanes = 32) : (t.lanes = 536870912), null;
        Pt(t);
      }
      return (
        (d = l.children),
        (l = l.fallback),
        n
          ? (Aa(),
            (n = t.mode),
            (d = tu({ mode: "hidden", children: d }, n)),
            (l = ka(l, n, a, null)),
            (d.return = t),
            (l.return = t),
            (d.sibling = l),
            (t.child = d),
            (n = t.child),
            (n.memoizedState = hs(a)),
            (n.childLanes = vs(e, f, a)),
            (t.memoizedState = ms),
            l)
          : (Ea(t), gs(t, d))
      );
    }
    if (
      ((S = e.memoizedState), S !== null && ((d = S.dehydrated), d !== null))
    ) {
      if (i)
        t.flags & 256
          ? (Ea(t), (t.flags &= -257), (t = ys(e, t, a)))
          : t.memoizedState !== null
          ? (Aa(), (t.child = e.child), (t.flags |= 128), (t = null))
          : (Aa(),
            (n = l.fallback),
            (d = t.mode),
            (l = tu({ mode: "visible", children: l.children }, d)),
            (n = ka(n, d, a, null)),
            (n.flags |= 2),
            (l.return = t),
            (n.return = t),
            (l.sibling = n),
            (t.child = l),
            Ll(t, e.child, null, a),
            (l = t.child),
            (l.memoizedState = hs(a)),
            (l.childLanes = vs(e, f, a)),
            (t.memoizedState = ms),
            (t = n));
      else if ((Ea(t), Ws(d))) {
        if (((f = d.nextSibling && d.nextSibling.dataset), f)) var N = f.dgst;
        (f = N),
          (l = Error(r(419))),
          (l.stack = ""),
          (l.digest = f),
          En({ value: l, source: null, stack: null }),
          (t = ys(e, t, a));
      } else if (
        (Xe || An(e, t, a, !1), (f = (a & e.childLanes) !== 0), Xe || f)
      ) {
        if (
          ((f = Oe),
          f !== null &&
            ((l = a & -a),
            (l = (l & 42) !== 0 ? 1 : Pu(l)),
            (l = (l & (f.suspendedLanes | a)) !== 0 ? 0 : l),
            l !== 0 && l !== S.retryLane))
        )
          throw ((S.retryLane = l), xl(e, l), vt(f, e, l), sm);
        d.data === "$?" || Ls(), (t = ys(e, t, a));
      } else
        d.data === "$?"
          ? ((t.flags |= 192), (t.child = e.child), (t = null))
          : ((e = S.treeContext),
            (ze = Dt(d.nextSibling)),
            (We = t),
            (pe = !0),
            (Fa = null),
            (Gt = !1),
            e !== null &&
              ((At[Tt++] = Kt),
              (At[Tt++] = It),
              (At[Tt++] = Ka),
              (Kt = e.id),
              (It = e.overflow),
              (Ka = t)),
            (t = gs(t, l.children)),
            (t.flags |= 4096));
      return t;
    }
    return n
      ? (Aa(),
        (n = l.fallback),
        (d = t.mode),
        (S = e.child),
        (N = S.sibling),
        (l = kt(S, { mode: "hidden", children: l.children })),
        (l.subtreeFlags = S.subtreeFlags & 65011712),
        N !== null ? (n = kt(N, n)) : ((n = ka(n, d, a, null)), (n.flags |= 2)),
        (n.return = t),
        (l.return = t),
        (l.sibling = n),
        (t.child = l),
        (l = n),
        (n = t.child),
        (d = e.child.memoizedState),
        d === null
          ? (d = hs(a))
          : ((S = d.cachePool),
            S !== null
              ? ((N = qe._currentValue),
                (S = S.parent !== N ? { parent: N, pool: N } : S))
              : (S = ld()),
            (d = { baseLanes: d.baseLanes | a, cachePool: S })),
        (n.memoizedState = d),
        (n.childLanes = vs(e, f, a)),
        (t.memoizedState = ms),
        l)
      : (Ea(t),
        (a = e.child),
        (e = a.sibling),
        (a = kt(a, { mode: "visible", children: l.children })),
        (a.return = t),
        (a.sibling = null),
        e !== null &&
          ((f = t.deletions),
          f === null ? ((t.deletions = [e]), (t.flags |= 16)) : f.push(e)),
        (t.child = a),
        (t.memoizedState = null),
        a);
  }
  function gs(e, t) {
    return (
      (t = tu({ mode: "visible", children: t }, e.mode)),
      (t.return = e),
      (e.child = t)
    );
  }
  function tu(e, t) {
    return (
      (e = ft(22, e, null, t)),
      (e.lanes = 0),
      (e.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null,
      }),
      e
    );
  }
  function ys(e, t, a) {
    return (
      Ll(t, e.child, null, a),
      (e = gs(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function pm(e, t, a) {
    e.lanes |= t;
    var l = e.alternate;
    l !== null && (l.lanes |= t), Lr(e.return, t, a);
  }
  function ps(e, t, a, l, n) {
    var i = e.memoizedState;
    i === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: l,
          tail: a,
          tailMode: n,
        })
      : ((i.isBackwards = t),
        (i.rendering = null),
        (i.renderingStartTime = 0),
        (i.last = l),
        (i.tail = a),
        (i.tailMode = n));
  }
  function bm(e, t, a) {
    var l = t.pendingProps,
      n = l.revealOrder,
      i = l.tail;
    if ((Qe(e, t, l.children, a), (l = He.current), (l & 2) !== 0))
      (l = (l & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && pm(e, a, t);
          else if (e.tag === 19) pm(e, a, t);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      l &= 1;
    }
    switch ((B(He, l), n)) {
      case "forwards":
        for (a = t.child, n = null; a !== null; )
          (e = a.alternate),
            e !== null && Ji(e) === null && (n = a),
            (a = a.sibling);
        (a = n),
          a === null
            ? ((n = t.child), (t.child = null))
            : ((n = a.sibling), (a.sibling = null)),
          ps(t, !1, n, a, i);
        break;
      case "backwards":
        for (a = null, n = t.child, t.child = null; n !== null; ) {
          if (((e = n.alternate), e !== null && Ji(e) === null)) {
            t.child = n;
            break;
          }
          (e = n.sibling), (n.sibling = a), (a = n), (n = e);
        }
        ps(t, !0, a, null, i);
        break;
      case "together":
        ps(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function ea(e, t, a) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (_a |= t.lanes),
      (a & t.childLanes) === 0)
    )
      if (e !== null) {
        if ((An(e, t, a, !1), (a & t.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && t.child !== e.child) throw Error(r(153));
    if (t.child !== null) {
      for (
        e = t.child, a = kt(e, e.pendingProps), t.child = a, a.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (a = a.sibling = kt(e, e.pendingProps)),
          (a.return = t);
      a.sibling = null;
    }
    return t.child;
  }
  function bs(e, t) {
    return (e.lanes & t) !== 0
      ? !0
      : ((e = e.dependencies), !!(e !== null && Li(e)));
  }
  function uy(e, t, a) {
    switch (t.tag) {
      case 3:
        _e(t, t.stateNode.containerInfo),
          ga(t, qe, e.memoizedState.cache),
          Sn();
        break;
      case 27:
      case 5:
        Ku(t);
        break;
      case 4:
        _e(t, t.stateNode.containerInfo);
        break;
      case 10:
        ga(t, t.type, t.memoizedProps.value);
        break;
      case 13:
        var l = t.memoizedState;
        if (l !== null)
          return l.dehydrated !== null
            ? (Ea(t), (t.flags |= 128), null)
            : (a & t.child.childLanes) !== 0
            ? ym(e, t, a)
            : (Ea(t), (e = ea(e, t, a)), e !== null ? e.sibling : null);
        Ea(t);
        break;
      case 19:
        var n = (e.flags & 128) !== 0;
        if (
          ((l = (a & t.childLanes) !== 0),
          l || (An(e, t, a, !1), (l = (a & t.childLanes) !== 0)),
          n)
        ) {
          if (l) return bm(e, t, a);
          t.flags |= 128;
        }
        if (
          ((n = t.memoizedState),
          n !== null &&
            ((n.rendering = null), (n.tail = null), (n.lastEffect = null)),
          B(He, He.current),
          l)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), dm(e, t, a);
      case 24:
        ga(t, qe, e.memoizedState.cache);
    }
    return ea(e, t, a);
  }
  function Sm(e, t, a) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps) Xe = !0;
      else {
        if (!bs(e, a) && (t.flags & 128) === 0) return (Xe = !1), uy(e, t, a);
        Xe = (e.flags & 131072) !== 0;
      }
    else (Xe = !1), pe && (t.flags & 1048576) !== 0 && Fo(t, wi, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        e: {
          e = t.pendingProps;
          var l = t.elementType,
            n = l._init;
          if (((l = n(l._payload)), (t.type = l), typeof l == "function"))
            Nr(l)
              ? ((e = al(l, e)), (t.tag = 1), (t = vm(null, t, l, e, a)))
              : ((t.tag = 0), (t = ds(null, t, l, e, a)));
          else {
            if (l != null) {
              if (((n = l.$$typeof), n === fe)) {
                (t.tag = 11), (t = cm(null, t, l, e, a));
                break e;
              } else if (n === he) {
                (t.tag = 14), (t = fm(null, t, l, e, a));
                break e;
              }
            }
            throw ((t = k(l) || l), Error(r(306, t, "")));
          }
        }
        return t;
      case 0:
        return ds(e, t, t.type, t.pendingProps, a);
      case 1:
        return (l = t.type), (n = al(l, t.pendingProps)), vm(e, t, l, n, a);
      case 3:
        e: {
          if ((_e(t, t.stateNode.containerInfo), e === null))
            throw Error(r(387));
          l = t.pendingProps;
          var i = t.memoizedState;
          (n = i.element), Xr(e, t), jn(t, l, null, a);
          var f = t.memoizedState;
          if (
            ((l = f.cache),
            ga(t, qe, l),
            l !== i.cache && Ur(t, [qe], a, !0),
            Nn(),
            (l = f.element),
            i.isDehydrated)
          )
            if (
              ((i = { element: l, isDehydrated: !1, cache: f.cache }),
              (t.updateQueue.baseState = i),
              (t.memoizedState = i),
              t.flags & 256)
            ) {
              t = gm(e, t, l, a);
              break e;
            } else if (l !== n) {
              (n = St(Error(r(424)), t)), En(n), (t = gm(e, t, l, a));
              break e;
            } else {
              switch (((e = t.stateNode.containerInfo), e.nodeType)) {
                case 9:
                  e = e.body;
                  break;
                default:
                  e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
              }
              for (
                ze = Dt(e.firstChild),
                  We = t,
                  pe = !0,
                  Fa = null,
                  Gt = !0,
                  a = Wd(t, null, l, a),
                  t.child = a;
                a;

              )
                (a.flags = (a.flags & -3) | 4096), (a = a.sibling);
            }
          else {
            if ((Sn(), l === n)) {
              t = ea(e, t, a);
              break e;
            }
            Qe(e, t, l, a);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          eu(e, t),
          e === null
            ? (a = xh(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = a)
              : pe ||
                ((a = t.type),
                (e = t.pendingProps),
                (l = vu(le.current).createElement(a)),
                (l[Ke] = t),
                (l[et] = e),
                ke(l, a, e),
                Ye(l),
                (t.stateNode = l))
            : (t.memoizedState = xh(
                t.type,
                e.memoizedProps,
                t.pendingProps,
                e.memoizedState
              )),
          null
        );
      case 27:
        return (
          Ku(t),
          e === null &&
            pe &&
            ((l = t.stateNode = Eh(t.type, t.pendingProps, le.current)),
            (We = t),
            (Gt = !0),
            (n = ze),
            Da(t.type) ? ((Ps = n), (ze = Dt(l.firstChild))) : (ze = n)),
          Qe(e, t, t.pendingProps.children, a),
          eu(e, t),
          e === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          e === null &&
            pe &&
            ((n = l = ze) &&
              ((l = wy(l, t.type, t.pendingProps, Gt)),
              l !== null
                ? ((t.stateNode = l),
                  (We = t),
                  (ze = Dt(l.firstChild)),
                  (Gt = !1),
                  (n = !0))
                : (n = !1)),
            n || Ja(t)),
          Ku(t),
          (n = t.type),
          (i = t.pendingProps),
          (f = e !== null ? e.memoizedProps : null),
          (l = i.children),
          Is(n, i) ? (l = null) : f !== null && Is(n, f) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((n = Kr(e, t, W1, null, null, a)), (Jn._currentValue = n)),
          eu(e, t),
          Qe(e, t, l, a),
          t.child
        );
      case 6:
        return (
          e === null &&
            pe &&
            ((e = a = ze) &&
              ((a = Ly(a, t.pendingProps, Gt)),
              a !== null
                ? ((t.stateNode = a), (We = t), (ze = null), (e = !0))
                : (e = !1)),
            e || Ja(t)),
          null
        );
      case 13:
        return ym(e, t, a);
      case 4:
        return (
          _e(t, t.stateNode.containerInfo),
          (l = t.pendingProps),
          e === null ? (t.child = Ll(t, null, l, a)) : Qe(e, t, l, a),
          t.child
        );
      case 11:
        return cm(e, t, t.type, t.pendingProps, a);
      case 7:
        return Qe(e, t, t.pendingProps, a), t.child;
      case 8:
        return Qe(e, t, t.pendingProps.children, a), t.child;
      case 12:
        return Qe(e, t, t.pendingProps.children, a), t.child;
      case 10:
        return (
          (l = t.pendingProps),
          ga(t, t.type, l.value),
          Qe(e, t, l.children, a),
          t.child
        );
      case 9:
        return (
          (n = t.type._context),
          (l = t.pendingProps.children),
          Pa(t),
          (n = Ie(n)),
          (l = l(n)),
          (t.flags |= 1),
          Qe(e, t, l, a),
          t.child
        );
      case 14:
        return fm(e, t, t.type, t.pendingProps, a);
      case 15:
        return om(e, t, t.type, t.pendingProps, a);
      case 19:
        return bm(e, t, a);
      case 31:
        return (
          (l = t.pendingProps),
          (a = t.mode),
          (l = { mode: l.mode, children: l.children }),
          e === null
            ? ((a = tu(l, a)),
              (a.ref = t.ref),
              (t.child = a),
              (a.return = t),
              (t = a))
            : ((a = kt(e.child, l)),
              (a.ref = t.ref),
              (t.child = a),
              (a.return = t),
              (t = a)),
          t
        );
      case 22:
        return dm(e, t, a);
      case 24:
        return (
          Pa(t),
          (l = Ie(qe)),
          e === null
            ? ((n = Gr()),
              n === null &&
                ((n = Oe),
                (i = qr()),
                (n.pooledCache = i),
                i.refCount++,
                i !== null && (n.pooledCacheLanes |= a),
                (n = i)),
              (t.memoizedState = { parent: l, cache: n }),
              Yr(t),
              ga(t, qe, n))
            : ((e.lanes & a) !== 0 && (Xr(e, t), jn(t, null, null, a), Nn()),
              (n = e.memoizedState),
              (i = t.memoizedState),
              n.parent !== l
                ? ((n = { parent: l, cache: l }),
                  (t.memoizedState = n),
                  t.lanes === 0 &&
                    (t.memoizedState = t.updateQueue.baseState = n),
                  ga(t, qe, l))
                : ((l = i.cache),
                  ga(t, qe, l),
                  l !== n.cache && Ur(t, [qe], a, !0))),
          Qe(e, t, t.pendingProps.children, a),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(r(156, t.tag));
  }
  function ta(e) {
    e.flags |= 4;
  }
  function Em(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (((e.flags |= 16777216), !jh(t))) {
      if (
        ((t = xt.current),
        t !== null &&
          ((ge & 4194048) === ge
            ? Bt !== null
            : ((ge & 62914560) !== ge && (ge & 536870912) === 0) || t !== Bt))
      )
        throw ((Rn = Br), nd);
      e.flags |= 8192;
    }
  }
  function au(e, t) {
    t !== null && (e.flags |= 4),
      e.flags & 16384 &&
        ((t = e.tag !== 22 ? Wf() : 536870912), (e.lanes |= t), (Gl |= t));
  }
  function Un(e, t) {
    if (!pe)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var a = null; t !== null; )
            t.alternate !== null && (a = t), (t = t.sibling);
          a === null ? (e.tail = null) : (a.sibling = null);
          break;
        case "collapsed":
          a = e.tail;
          for (var l = null; a !== null; )
            a.alternate !== null && (l = a), (a = a.sibling);
          l === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (l.sibling = null);
      }
  }
  function je(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      a = 0,
      l = 0;
    if (t)
      for (var n = e.child; n !== null; )
        (a |= n.lanes | n.childLanes),
          (l |= n.subtreeFlags & 65011712),
          (l |= n.flags & 65011712),
          (n.return = e),
          (n = n.sibling);
    else
      for (n = e.child; n !== null; )
        (a |= n.lanes | n.childLanes),
          (l |= n.subtreeFlags),
          (l |= n.flags),
          (n.return = e),
          (n = n.sibling);
    return (e.subtreeFlags |= l), (e.childLanes = a), t;
  }
  function ry(e, t, a) {
    var l = t.pendingProps;
    switch ((Cr(t), t.tag)) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return je(t), null;
      case 1:
        return je(t), null;
      case 3:
        return (
          (a = t.stateNode),
          (l = null),
          e !== null && (l = e.memoizedState.cache),
          t.memoizedState.cache !== l && (t.flags |= 2048),
          Jt(qe),
          da(),
          a.pendingContext &&
            ((a.context = a.pendingContext), (a.pendingContext = null)),
          (e === null || e.child === null) &&
            (bn(t)
              ? ta(t)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), Po())),
          je(t),
          null
        );
      case 26:
        return (
          (a = t.memoizedState),
          e === null
            ? (ta(t),
              a !== null ? (je(t), Em(t, a)) : (je(t), (t.flags &= -16777217)))
            : a
            ? a !== e.memoizedState
              ? (ta(t), je(t), Em(t, a))
              : (je(t), (t.flags &= -16777217))
            : (e.memoizedProps !== l && ta(t), je(t), (t.flags &= -16777217)),
          null
        );
      case 27:
        mi(t), (a = le.current);
        var n = t.type;
        if (e !== null && t.stateNode != null) e.memoizedProps !== l && ta(t);
        else {
          if (!l) {
            if (t.stateNode === null) throw Error(r(166));
            return je(t), null;
          }
          (e = K.current),
            bn(t) ? Jo(t) : ((e = Eh(n, l, a)), (t.stateNode = e), ta(t));
        }
        return je(t), null;
      case 5:
        if ((mi(t), (a = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== l && ta(t);
        else {
          if (!l) {
            if (t.stateNode === null) throw Error(r(166));
            return je(t), null;
          }
          if (((e = K.current), bn(t))) Jo(t);
          else {
            switch (((n = vu(le.current)), e)) {
              case 1:
                e = n.createElementNS("http://www.w3.org/2000/svg", a);
                break;
              case 2:
                e = n.createElementNS("http://www.w3.org/1998/Math/MathML", a);
                break;
              default:
                switch (a) {
                  case "svg":
                    e = n.createElementNS("http://www.w3.org/2000/svg", a);
                    break;
                  case "math":
                    e = n.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      a
                    );
                    break;
                  case "script":
                    (e = n.createElement("div")),
                      (e.innerHTML = "<script></script>"),
                      (e = e.removeChild(e.firstChild));
                    break;
                  case "select":
                    (e =
                      typeof l.is == "string"
                        ? n.createElement("select", { is: l.is })
                        : n.createElement("select")),
                      l.multiple
                        ? (e.multiple = !0)
                        : l.size && (e.size = l.size);
                    break;
                  default:
                    e =
                      typeof l.is == "string"
                        ? n.createElement(a, { is: l.is })
                        : n.createElement(a);
                }
            }
            (e[Ke] = t), (e[et] = l);
            e: for (n = t.child; n !== null; ) {
              if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
              else if (n.tag !== 4 && n.tag !== 27 && n.child !== null) {
                (n.child.return = n), (n = n.child);
                continue;
              }
              if (n === t) break e;
              for (; n.sibling === null; ) {
                if (n.return === null || n.return === t) break e;
                n = n.return;
              }
              (n.sibling.return = n.return), (n = n.sibling);
            }
            t.stateNode = e;
            e: switch ((ke(e, a, l), a)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                e = !!l.autoFocus;
                break e;
              case "img":
                e = !0;
                break e;
              default:
                e = !1;
            }
            e && ta(t);
          }
        }
        return je(t), (t.flags &= -16777217), null;
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== l && ta(t);
        else {
          if (typeof l != "string" && t.stateNode === null) throw Error(r(166));
          if (((e = le.current), bn(t))) {
            if (
              ((e = t.stateNode),
              (a = t.memoizedProps),
              (l = null),
              (n = We),
              n !== null)
            )
              switch (n.tag) {
                case 27:
                case 5:
                  l = n.memoizedProps;
              }
            (e[Ke] = t),
              (e = !!(
                e.nodeValue === a ||
                (l !== null && l.suppressHydrationWarning === !0) ||
                hh(e.nodeValue, a)
              )),
              e || Ja(t);
          } else (e = vu(e).createTextNode(l)), (e[Ke] = t), (t.stateNode = e);
        }
        return je(t), null;
      case 13:
        if (
          ((l = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((n = bn(t)), l !== null && l.dehydrated !== null)) {
            if (e === null) {
              if (!n) throw Error(r(318));
              if (
                ((n = t.memoizedState),
                (n = n !== null ? n.dehydrated : null),
                !n)
              )
                throw Error(r(317));
              n[Ke] = t;
            } else
              Sn(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4);
            je(t), (n = !1);
          } else
            (n = Po()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = n),
              (n = !0);
          if (!n) return t.flags & 256 ? (Pt(t), t) : (Pt(t), null);
        }
        if ((Pt(t), (t.flags & 128) !== 0)) return (t.lanes = a), t;
        if (
          ((a = l !== null), (e = e !== null && e.memoizedState !== null), a)
        ) {
          (l = t.child),
            (n = null),
            l.alternate !== null &&
              l.alternate.memoizedState !== null &&
              l.alternate.memoizedState.cachePool !== null &&
              (n = l.alternate.memoizedState.cachePool.pool);
          var i = null;
          l.memoizedState !== null &&
            l.memoizedState.cachePool !== null &&
            (i = l.memoizedState.cachePool.pool),
            i !== n && (l.flags |= 2048);
        }
        return (
          a !== e && a && (t.child.flags |= 8192),
          au(t, t.updateQueue),
          je(t),
          null
        );
      case 4:
        return da(), e === null && Vs(t.stateNode.containerInfo), je(t), null;
      case 10:
        return Jt(t.type), je(t), null;
      case 19:
        if ((H(He), (n = t.memoizedState), n === null)) return je(t), null;
        if (((l = (t.flags & 128) !== 0), (i = n.rendering), i === null))
          if (l) Un(n, !1);
          else {
            if (De !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((i = Ji(e)), i !== null)) {
                  for (
                    t.flags |= 128,
                      Un(n, !1),
                      e = i.updateQueue,
                      t.updateQueue = e,
                      au(t, e),
                      t.subtreeFlags = 0,
                      e = a,
                      a = t.child;
                    a !== null;

                  )
                    Io(a, e), (a = a.sibling);
                  return B(He, (He.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            n.tail !== null &&
              Ht() > iu &&
              ((t.flags |= 128), (l = !0), Un(n, !1), (t.lanes = 4194304));
          }
        else {
          if (!l)
            if (((e = Ji(i)), e !== null)) {
              if (
                ((t.flags |= 128),
                (l = !0),
                (e = e.updateQueue),
                (t.updateQueue = e),
                au(t, e),
                Un(n, !0),
                n.tail === null &&
                  n.tailMode === "hidden" &&
                  !i.alternate &&
                  !pe)
              )
                return je(t), null;
            } else
              2 * Ht() - n.renderingStartTime > iu &&
                a !== 536870912 &&
                ((t.flags |= 128), (l = !0), Un(n, !1), (t.lanes = 4194304));
          n.isBackwards
            ? ((i.sibling = t.child), (t.child = i))
            : ((e = n.last),
              e !== null ? (e.sibling = i) : (t.child = i),
              (n.last = i));
        }
        return n.tail !== null
          ? ((t = n.tail),
            (n.rendering = t),
            (n.tail = t.sibling),
            (n.renderingStartTime = Ht()),
            (t.sibling = null),
            (e = He.current),
            B(He, l ? (e & 1) | 2 : e & 1),
            t)
          : (je(t), null);
      case 22:
      case 23:
        return (
          Pt(t),
          $r(),
          (l = t.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== l && (t.flags |= 8192)
            : l && (t.flags |= 8192),
          l
            ? (a & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (je(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : je(t),
          (a = t.updateQueue),
          a !== null && au(t, a.retryQueue),
          (a = null),
          e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (a = e.memoizedState.cachePool.pool),
          (l = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (l = t.memoizedState.cachePool.pool),
          l !== a && (t.flags |= 2048),
          e !== null && H(el),
          null
        );
      case 24:
        return (
          (a = null),
          e !== null && (a = e.memoizedState.cache),
          t.memoizedState.cache !== a && (t.flags |= 2048),
          Jt(qe),
          je(t),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(r(156, t.tag));
  }
  function sy(e, t) {
    switch ((Cr(t), t.tag)) {
      case 1:
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Jt(qe),
          da(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        );
      case 26:
      case 27:
      case 5:
        return mi(t), null;
      case 13:
        if (
          (Pt(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(r(340));
          Sn();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return H(He), null;
      case 4:
        return da(), null;
      case 10:
        return Jt(t.type), null;
      case 22:
      case 23:
        return (
          Pt(t),
          $r(),
          e !== null && H(el),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 24:
        return Jt(qe), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Am(e, t) {
    switch ((Cr(t), t.tag)) {
      case 3:
        Jt(qe), da();
        break;
      case 26:
      case 27:
      case 5:
        mi(t);
        break;
      case 4:
        da();
        break;
      case 13:
        Pt(t);
        break;
      case 19:
        H(He);
        break;
      case 10:
        Jt(t.type);
        break;
      case 22:
      case 23:
        Pt(t), $r(), e !== null && H(el);
        break;
      case 24:
        Jt(qe);
    }
  }
  function qn(e, t) {
    try {
      var a = t.updateQueue,
        l = a !== null ? a.lastEffect : null;
      if (l !== null) {
        var n = l.next;
        a = n;
        do {
          if ((a.tag & e) === e) {
            l = void 0;
            var i = a.create,
              f = a.inst;
            (l = i()), (f.destroy = l);
          }
          a = a.next;
        } while (a !== n);
      }
    } catch (d) {
      xe(t, t.return, d);
    }
  }
  function Ta(e, t, a) {
    try {
      var l = t.updateQueue,
        n = l !== null ? l.lastEffect : null;
      if (n !== null) {
        var i = n.next;
        l = i;
        do {
          if ((l.tag & e) === e) {
            var f = l.inst,
              d = f.destroy;
            if (d !== void 0) {
              (f.destroy = void 0), (n = t);
              var S = a,
                N = d;
              try {
                N();
              } catch (L) {
                xe(n, S, L);
              }
            }
          }
          l = l.next;
        } while (l !== i);
      }
    } catch (L) {
      xe(t, t.return, L);
    }
  }
  function Tm(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var a = e.stateNode;
      try {
        fd(t, a);
      } catch (l) {
        xe(e, e.return, l);
      }
    }
  }
  function xm(e, t, a) {
    (a.props = al(e.type, e.memoizedProps)), (a.state = e.memoizedState);
    try {
      a.componentWillUnmount();
    } catch (l) {
      xe(e, t, l);
    }
  }
  function Hn(e, t) {
    try {
      var a = e.ref;
      if (a !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var l = e.stateNode;
            break;
          case 30:
            l = e.stateNode;
            break;
          default:
            l = e.stateNode;
        }
        typeof a == "function" ? (e.refCleanup = a(l)) : (a.current = l);
      }
    } catch (n) {
      xe(e, t, n);
    }
  }
  function Yt(e, t) {
    var a = e.ref,
      l = e.refCleanup;
    if (a !== null)
      if (typeof l == "function")
        try {
          l();
        } catch (n) {
          xe(e, t, n);
        } finally {
          (e.refCleanup = null),
            (e = e.alternate),
            e != null && (e.refCleanup = null);
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (n) {
          xe(e, t, n);
        }
      else a.current = null;
  }
  function Om(e) {
    var t = e.type,
      a = e.memoizedProps,
      l = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && l.focus();
          break e;
        case "img":
          a.src ? (l.src = a.src) : a.srcSet && (l.srcset = a.srcSet);
      }
    } catch (n) {
      xe(e, e.return, n);
    }
  }
  function Ss(e, t, a) {
    try {
      var l = e.stateNode;
      jy(l, e.type, a, t), (l[et] = t);
    } catch (n) {
      xe(e, e.return, n);
    }
  }
  function Rm(e) {
    return (
      e.tag === 5 ||
      e.tag === 3 ||
      e.tag === 26 ||
      (e.tag === 27 && Da(e.type)) ||
      e.tag === 4
    );
  }
  function Es(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Rm(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (
          (e.tag === 27 && Da(e.type)) ||
          e.flags & 2 ||
          e.child === null ||
          e.tag === 4
        )
          continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function As(e, t, a) {
    var l = e.tag;
    if (l === 5 || l === 6)
      (e = e.stateNode),
        t
          ? (a.nodeType === 9
              ? a.body
              : a.nodeName === "HTML"
              ? a.ownerDocument.body
              : a
            ).insertBefore(e, t)
          : ((t =
              a.nodeType === 9
                ? a.body
                : a.nodeName === "HTML"
                ? a.ownerDocument.body
                : a),
            t.appendChild(e),
            (a = a._reactRootContainer),
            a != null || t.onclick !== null || (t.onclick = hu));
    else if (
      l !== 4 &&
      (l === 27 && Da(e.type) && ((a = e.stateNode), (t = null)),
      (e = e.child),
      e !== null)
    )
      for (As(e, t, a), e = e.sibling; e !== null; )
        As(e, t, a), (e = e.sibling);
  }
  function lu(e, t, a) {
    var l = e.tag;
    if (l === 5 || l === 6)
      (e = e.stateNode), t ? a.insertBefore(e, t) : a.appendChild(e);
    else if (
      l !== 4 &&
      (l === 27 && Da(e.type) && (a = e.stateNode), (e = e.child), e !== null)
    )
      for (lu(e, t, a), e = e.sibling; e !== null; )
        lu(e, t, a), (e = e.sibling);
  }
  function _m(e) {
    var t = e.stateNode,
      a = e.memoizedProps;
    try {
      for (var l = e.type, n = t.attributes; n.length; )
        t.removeAttributeNode(n[0]);
      ke(t, l, a), (t[Ke] = e), (t[et] = a);
    } catch (i) {
      xe(e, e.return, i);
    }
  }
  var aa = !1,
    Me = !1,
    Ts = !1,
    Nm = typeof WeakSet == "function" ? WeakSet : Set,
    Ze = null;
  function cy(e, t) {
    if (((e = e.containerInfo), (ks = Eu), (e = Go(e)), Er(e))) {
      if ("selectionStart" in e)
        var a = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          a = ((a = e.ownerDocument) && a.defaultView) || window;
          var l = a.getSelection && a.getSelection();
          if (l && l.rangeCount !== 0) {
            a = l.anchorNode;
            var n = l.anchorOffset,
              i = l.focusNode;
            l = l.focusOffset;
            try {
              a.nodeType, i.nodeType;
            } catch {
              a = null;
              break e;
            }
            var f = 0,
              d = -1,
              S = -1,
              N = 0,
              L = 0,
              q = e,
              j = null;
            t: for (;;) {
              for (
                var D;
                q !== a || (n !== 0 && q.nodeType !== 3) || (d = f + n),
                  q !== i || (l !== 0 && q.nodeType !== 3) || (S = f + l),
                  q.nodeType === 3 && (f += q.nodeValue.length),
                  (D = q.firstChild) !== null;

              )
                (j = q), (q = D);
              for (;;) {
                if (q === e) break t;
                if (
                  (j === a && ++N === n && (d = f),
                  j === i && ++L === l && (S = f),
                  (D = q.nextSibling) !== null)
                )
                  break;
                (q = j), (j = q.parentNode);
              }
              q = D;
            }
            a = d === -1 || S === -1 ? null : { start: d, end: S };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (
      Ks = { focusedElem: e, selectionRange: a }, Eu = !1, Ze = t;
      Ze !== null;

    )
      if (
        ((t = Ze), (e = t.child), (t.subtreeFlags & 1024) !== 0 && e !== null)
      )
        (e.return = t), (Ze = e);
      else
        for (; Ze !== null; ) {
          switch (((t = Ze), (i = t.alternate), (e = t.flags), t.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && i !== null) {
                (e = void 0),
                  (a = t),
                  (n = i.memoizedProps),
                  (i = i.memoizedState),
                  (l = a.stateNode);
                try {
                  var ue = al(a.type, n, a.elementType === a.type);
                  (e = l.getSnapshotBeforeUpdate(ue, i)),
                    (l.__reactInternalSnapshotBeforeUpdate = e);
                } catch (ae) {
                  xe(a, a.return, ae);
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (
                  ((e = t.stateNode.containerInfo), (a = e.nodeType), a === 9)
                )
                  Js(e);
                else if (a === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Js(e);
                      break;
                    default:
                      e.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((e & 1024) !== 0) throw Error(r(163));
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (Ze = e);
            break;
          }
          Ze = t.return;
        }
  }
  function jm(e, t, a) {
    var l = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        xa(e, a), l & 4 && qn(5, a);
        break;
      case 1:
        if ((xa(e, a), l & 4))
          if (((e = a.stateNode), t === null))
            try {
              e.componentDidMount();
            } catch (f) {
              xe(a, a.return, f);
            }
          else {
            var n = al(a.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              e.componentDidUpdate(n, t, e.__reactInternalSnapshotBeforeUpdate);
            } catch (f) {
              xe(a, a.return, f);
            }
          }
        l & 64 && Tm(a), l & 512 && Hn(a, a.return);
        break;
      case 3:
        if ((xa(e, a), l & 64 && ((e = a.updateQueue), e !== null))) {
          if (((t = null), a.child !== null))
            switch (a.child.tag) {
              case 27:
              case 5:
                t = a.child.stateNode;
                break;
              case 1:
                t = a.child.stateNode;
            }
          try {
            fd(e, t);
          } catch (f) {
            xe(a, a.return, f);
          }
        }
        break;
      case 27:
        t === null && l & 4 && _m(a);
      case 26:
      case 5:
        xa(e, a), t === null && l & 4 && Om(a), l & 512 && Hn(a, a.return);
        break;
      case 12:
        xa(e, a);
        break;
      case 13:
        xa(e, a),
          l & 4 && Cm(e, a),
          l & 64 &&
            ((e = a.memoizedState),
            e !== null &&
              ((e = e.dehydrated),
              e !== null && ((a = py.bind(null, a)), Uy(e, a))));
        break;
      case 22:
        if (((l = a.memoizedState !== null || aa), !l)) {
          (t = (t !== null && t.memoizedState !== null) || Me), (n = aa);
          var i = Me;
          (aa = l),
            (Me = t) && !i ? Oa(e, a, (a.subtreeFlags & 8772) !== 0) : xa(e, a),
            (aa = n),
            (Me = i);
        }
        break;
      case 30:
        break;
      default:
        xa(e, a);
    }
  }
  function zm(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), zm(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((t = e.stateNode), t !== null && ar(t)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  var Ne = null,
    lt = !1;
  function la(e, t, a) {
    for (a = a.child; a !== null; ) Dm(e, t, a), (a = a.sibling);
  }
  function Dm(e, t, a) {
    if (rt && typeof rt.onCommitFiberUnmount == "function")
      try {
        rt.onCommitFiberUnmount(nn, a);
      } catch {}
    switch (a.tag) {
      case 26:
        Me || Yt(a, t),
          la(e, t, a),
          a.memoizedState
            ? a.memoizedState.count--
            : a.stateNode && ((a = a.stateNode), a.parentNode.removeChild(a));
        break;
      case 27:
        Me || Yt(a, t);
        var l = Ne,
          n = lt;
        Da(a.type) && ((Ne = a.stateNode), (lt = !1)),
          la(e, t, a),
          kn(a.stateNode),
          (Ne = l),
          (lt = n);
        break;
      case 5:
        Me || Yt(a, t);
      case 6:
        if (
          ((l = Ne),
          (n = lt),
          (Ne = null),
          la(e, t, a),
          (Ne = l),
          (lt = n),
          Ne !== null)
        )
          if (lt)
            try {
              (Ne.nodeType === 9
                ? Ne.body
                : Ne.nodeName === "HTML"
                ? Ne.ownerDocument.body
                : Ne
              ).removeChild(a.stateNode);
            } catch (i) {
              xe(a, t, i);
            }
          else
            try {
              Ne.removeChild(a.stateNode);
            } catch (i) {
              xe(a, t, i);
            }
        break;
      case 18:
        Ne !== null &&
          (lt
            ? ((e = Ne),
              bh(
                e.nodeType === 9
                  ? e.body
                  : e.nodeName === "HTML"
                  ? e.ownerDocument.body
                  : e,
                a.stateNode
              ),
              ti(e))
            : bh(Ne, a.stateNode));
        break;
      case 4:
        (l = Ne),
          (n = lt),
          (Ne = a.stateNode.containerInfo),
          (lt = !0),
          la(e, t, a),
          (Ne = l),
          (lt = n);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Me || Ta(2, a, t), Me || Ta(4, a, t), la(e, t, a);
        break;
      case 1:
        Me ||
          (Yt(a, t),
          (l = a.stateNode),
          typeof l.componentWillUnmount == "function" && xm(a, t, l)),
          la(e, t, a);
        break;
      case 21:
        la(e, t, a);
        break;
      case 22:
        (Me = (l = Me) || a.memoizedState !== null), la(e, t, a), (Me = l);
        break;
      default:
        la(e, t, a);
    }
  }
  function Cm(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate),
      e !== null &&
        ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        ti(e);
      } catch (a) {
        xe(t, t.return, a);
      }
  }
  function fy(e) {
    switch (e.tag) {
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new Nm()), t;
      case 22:
        return (
          (e = e.stateNode),
          (t = e._retryCache),
          t === null && (t = e._retryCache = new Nm()),
          t
        );
      default:
        throw Error(r(435, e.tag));
    }
  }
  function xs(e, t) {
    var a = fy(e);
    t.forEach(function (l) {
      var n = by.bind(null, e, l);
      a.has(l) || (a.add(l), l.then(n, n));
    });
  }
  function ot(e, t) {
    var a = t.deletions;
    if (a !== null)
      for (var l = 0; l < a.length; l++) {
        var n = a[l],
          i = e,
          f = t,
          d = f;
        e: for (; d !== null; ) {
          switch (d.tag) {
            case 27:
              if (Da(d.type)) {
                (Ne = d.stateNode), (lt = !1);
                break e;
              }
              break;
            case 5:
              (Ne = d.stateNode), (lt = !1);
              break e;
            case 3:
            case 4:
              (Ne = d.stateNode.containerInfo), (lt = !0);
              break e;
          }
          d = d.return;
        }
        if (Ne === null) throw Error(r(160));
        Dm(i, f, n),
          (Ne = null),
          (lt = !1),
          (i = n.alternate),
          i !== null && (i.return = null),
          (n.return = null);
      }
    if (t.subtreeFlags & 13878)
      for (t = t.child; t !== null; ) Mm(t, e), (t = t.sibling);
  }
  var zt = null;
  function Mm(e, t) {
    var a = e.alternate,
      l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        ot(t, e),
          dt(e),
          l & 4 && (Ta(3, e, e.return), qn(3, e), Ta(5, e, e.return));
        break;
      case 1:
        ot(t, e),
          dt(e),
          l & 512 && (Me || a === null || Yt(a, a.return)),
          l & 64 &&
            aa &&
            ((e = e.updateQueue),
            e !== null &&
              ((l = e.callbacks),
              l !== null &&
                ((a = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = a === null ? l : a.concat(l)))));
        break;
      case 26:
        var n = zt;
        if (
          (ot(t, e),
          dt(e),
          l & 512 && (Me || a === null || Yt(a, a.return)),
          l & 4)
        ) {
          var i = a !== null ? a.memoizedState : null;
          if (((l = e.memoizedState), a === null))
            if (l === null)
              if (e.stateNode === null) {
                e: {
                  (l = e.type),
                    (a = e.memoizedProps),
                    (n = n.ownerDocument || n);
                  t: switch (l) {
                    case "title":
                      (i = n.getElementsByTagName("title")[0]),
                        (!i ||
                          i[sn] ||
                          i[Ke] ||
                          i.namespaceURI === "http://www.w3.org/2000/svg" ||
                          i.hasAttribute("itemprop")) &&
                          ((i = n.createElement(l)),
                          n.head.insertBefore(
                            i,
                            n.querySelector("head > title")
                          )),
                        ke(i, l, a),
                        (i[Ke] = e),
                        Ye(i),
                        (l = i);
                      break e;
                    case "link":
                      var f = _h("link", "href", n).get(l + (a.href || ""));
                      if (f) {
                        for (var d = 0; d < f.length; d++)
                          if (
                            ((i = f[d]),
                            i.getAttribute("href") ===
                              (a.href == null || a.href === ""
                                ? null
                                : a.href) &&
                              i.getAttribute("rel") ===
                                (a.rel == null ? null : a.rel) &&
                              i.getAttribute("title") ===
                                (a.title == null ? null : a.title) &&
                              i.getAttribute("crossorigin") ===
                                (a.crossOrigin == null ? null : a.crossOrigin))
                          ) {
                            f.splice(d, 1);
                            break t;
                          }
                      }
                      (i = n.createElement(l)),
                        ke(i, l, a),
                        n.head.appendChild(i);
                      break;
                    case "meta":
                      if (
                        (f = _h("meta", "content", n).get(
                          l + (a.content || "")
                        ))
                      ) {
                        for (d = 0; d < f.length; d++)
                          if (
                            ((i = f[d]),
                            i.getAttribute("content") ===
                              (a.content == null ? null : "" + a.content) &&
                              i.getAttribute("name") ===
                                (a.name == null ? null : a.name) &&
                              i.getAttribute("property") ===
                                (a.property == null ? null : a.property) &&
                              i.getAttribute("http-equiv") ===
                                (a.httpEquiv == null ? null : a.httpEquiv) &&
                              i.getAttribute("charset") ===
                                (a.charSet == null ? null : a.charSet))
                          ) {
                            f.splice(d, 1);
                            break t;
                          }
                      }
                      (i = n.createElement(l)),
                        ke(i, l, a),
                        n.head.appendChild(i);
                      break;
                    default:
                      throw Error(r(468, l));
                  }
                  (i[Ke] = e), Ye(i), (l = i);
                }
                e.stateNode = l;
              } else Nh(n, e.type, e.stateNode);
            else e.stateNode = Rh(n, l, e.memoizedProps);
          else
            i !== l
              ? (i === null
                  ? a.stateNode !== null &&
                    ((a = a.stateNode), a.parentNode.removeChild(a))
                  : i.count--,
                l === null
                  ? Nh(n, e.type, e.stateNode)
                  : Rh(n, l, e.memoizedProps))
              : l === null &&
                e.stateNode !== null &&
                Ss(e, e.memoizedProps, a.memoizedProps);
        }
        break;
      case 27:
        ot(t, e),
          dt(e),
          l & 512 && (Me || a === null || Yt(a, a.return)),
          a !== null && l & 4 && Ss(e, e.memoizedProps, a.memoizedProps);
        break;
      case 5:
        if (
          (ot(t, e),
          dt(e),
          l & 512 && (Me || a === null || Yt(a, a.return)),
          e.flags & 32)
        ) {
          n = e.stateNode;
          try {
            yl(n, "");
          } catch (D) {
            xe(e, e.return, D);
          }
        }
        l & 4 &&
          e.stateNode != null &&
          ((n = e.memoizedProps), Ss(e, n, a !== null ? a.memoizedProps : n)),
          l & 1024 && (Ts = !0);
        break;
      case 6:
        if ((ot(t, e), dt(e), l & 4)) {
          if (e.stateNode === null) throw Error(r(162));
          (l = e.memoizedProps), (a = e.stateNode);
          try {
            a.nodeValue = l;
          } catch (D) {
            xe(e, e.return, D);
          }
        }
        break;
      case 3:
        if (
          ((pu = null),
          (n = zt),
          (zt = gu(t.containerInfo)),
          ot(t, e),
          (zt = n),
          dt(e),
          l & 4 && a !== null && a.memoizedState.isDehydrated)
        )
          try {
            ti(t.containerInfo);
          } catch (D) {
            xe(e, e.return, D);
          }
        Ts && ((Ts = !1), wm(e));
        break;
      case 4:
        (l = zt),
          (zt = gu(e.stateNode.containerInfo)),
          ot(t, e),
          dt(e),
          (zt = l);
        break;
      case 12:
        ot(t, e), dt(e);
        break;
      case 13:
        ot(t, e),
          dt(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) !=
              (a !== null && a.memoizedState !== null) &&
            (zs = Ht()),
          l & 4 &&
            ((l = e.updateQueue),
            l !== null && ((e.updateQueue = null), xs(e, l)));
        break;
      case 22:
        n = e.memoizedState !== null;
        var S = a !== null && a.memoizedState !== null,
          N = aa,
          L = Me;
        if (
          ((aa = N || n),
          (Me = L || S),
          ot(t, e),
          (Me = L),
          (aa = N),
          dt(e),
          l & 8192)
        )
          e: for (
            t = e.stateNode,
              t._visibility = n ? t._visibility & -2 : t._visibility | 1,
              n && (a === null || S || aa || Me || ll(e)),
              a = null,
              t = e;
            ;

          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (a === null) {
                S = a = t;
                try {
                  if (((i = S.stateNode), n))
                    (f = i.style),
                      typeof f.setProperty == "function"
                        ? f.setProperty("display", "none", "important")
                        : (f.display = "none");
                  else {
                    d = S.stateNode;
                    var q = S.memoizedProps.style,
                      j =
                        q != null && q.hasOwnProperty("display")
                          ? q.display
                          : null;
                    d.style.display =
                      j == null || typeof j == "boolean" ? "" : ("" + j).trim();
                  }
                } catch (D) {
                  xe(S, S.return, D);
                }
              }
            } else if (t.tag === 6) {
              if (a === null) {
                S = t;
                try {
                  S.stateNode.nodeValue = n ? "" : S.memoizedProps;
                } catch (D) {
                  xe(S, S.return, D);
                }
              }
            } else if (
              ((t.tag !== 22 && t.tag !== 23) ||
                t.memoizedState === null ||
                t === e) &&
              t.child !== null
            ) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              a === t && (a = null), (t = t.return);
            }
            a === t && (a = null),
              (t.sibling.return = t.return),
              (t = t.sibling);
          }
        l & 4 &&
          ((l = e.updateQueue),
          l !== null &&
            ((a = l.retryQueue),
            a !== null && ((l.retryQueue = null), xs(e, a))));
        break;
      case 19:
        ot(t, e),
          dt(e),
          l & 4 &&
            ((l = e.updateQueue),
            l !== null && ((e.updateQueue = null), xs(e, l)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        ot(t, e), dt(e);
    }
  }
  function dt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var a, l = e.return; l !== null; ) {
          if (Rm(l)) {
            a = l;
            break;
          }
          l = l.return;
        }
        if (a == null) throw Error(r(160));
        switch (a.tag) {
          case 27:
            var n = a.stateNode,
              i = Es(e);
            lu(e, i, n);
            break;
          case 5:
            var f = a.stateNode;
            a.flags & 32 && (yl(f, ""), (a.flags &= -33));
            var d = Es(e);
            lu(e, d, f);
            break;
          case 3:
          case 4:
            var S = a.stateNode.containerInfo,
              N = Es(e);
            As(e, N, S);
            break;
          default:
            throw Error(r(161));
        }
      } catch (L) {
        xe(e, e.return, L);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function wm(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        wm(t),
          t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
          (e = e.sibling);
      }
  }
  function xa(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) jm(e, t.alternate, t), (t = t.sibling);
  }
  function ll(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Ta(4, t, t.return), ll(t);
          break;
        case 1:
          Yt(t, t.return);
          var a = t.stateNode;
          typeof a.componentWillUnmount == "function" && xm(t, t.return, a),
            ll(t);
          break;
        case 27:
          kn(t.stateNode);
        case 26:
        case 5:
          Yt(t, t.return), ll(t);
          break;
        case 22:
          t.memoizedState === null && ll(t);
          break;
        case 30:
          ll(t);
          break;
        default:
          ll(t);
      }
      e = e.sibling;
    }
  }
  function Oa(e, t, a) {
    for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var l = t.alternate,
        n = e,
        i = t,
        f = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          Oa(n, i, a), qn(4, i);
          break;
        case 1:
          if (
            (Oa(n, i, a),
            (l = i),
            (n = l.stateNode),
            typeof n.componentDidMount == "function")
          )
            try {
              n.componentDidMount();
            } catch (N) {
              xe(l, l.return, N);
            }
          if (((l = i), (n = l.updateQueue), n !== null)) {
            var d = l.stateNode;
            try {
              var S = n.shared.hiddenCallbacks;
              if (S !== null)
                for (n.shared.hiddenCallbacks = null, n = 0; n < S.length; n++)
                  cd(S[n], d);
            } catch (N) {
              xe(l, l.return, N);
            }
          }
          a && f & 64 && Tm(i), Hn(i, i.return);
          break;
        case 27:
          _m(i);
        case 26:
        case 5:
          Oa(n, i, a), a && l === null && f & 4 && Om(i), Hn(i, i.return);
          break;
        case 12:
          Oa(n, i, a);
          break;
        case 13:
          Oa(n, i, a), a && f & 4 && Cm(n, i);
          break;
        case 22:
          i.memoizedState === null && Oa(n, i, a), Hn(i, i.return);
          break;
        case 30:
          break;
        default:
          Oa(n, i, a);
      }
      t = t.sibling;
    }
  }
  function Os(e, t) {
    var a = null;
    e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (a = e.memoizedState.cachePool.pool),
      (e = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (e = t.memoizedState.cachePool.pool),
      e !== a && (e != null && e.refCount++, a != null && Tn(a));
  }
  function Rs(e, t) {
    (e = null),
      t.alternate !== null && (e = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== e && (t.refCount++, e != null && Tn(e));
  }
  function Xt(e, t, a, l) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) Lm(e, t, a, l), (t = t.sibling);
  }
  function Lm(e, t, a, l) {
    var n = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Xt(e, t, a, l), n & 2048 && qn(9, t);
        break;
      case 1:
        Xt(e, t, a, l);
        break;
      case 3:
        Xt(e, t, a, l),
          n & 2048 &&
            ((e = null),
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== e && (t.refCount++, e != null && Tn(e)));
        break;
      case 12:
        if (n & 2048) {
          Xt(e, t, a, l), (e = t.stateNode);
          try {
            var i = t.memoizedProps,
              f = i.id,
              d = i.onPostCommit;
            typeof d == "function" &&
              d(
                f,
                t.alternate === null ? "mount" : "update",
                e.passiveEffectDuration,
                -0
              );
          } catch (S) {
            xe(t, t.return, S);
          }
        } else Xt(e, t, a, l);
        break;
      case 13:
        Xt(e, t, a, l);
        break;
      case 23:
        break;
      case 22:
        (i = t.stateNode),
          (f = t.alternate),
          t.memoizedState !== null
            ? i._visibility & 2
              ? Xt(e, t, a, l)
              : Gn(e, t)
            : i._visibility & 2
            ? Xt(e, t, a, l)
            : ((i._visibility |= 2),
              Ul(e, t, a, l, (t.subtreeFlags & 10256) !== 0)),
          n & 2048 && Os(f, t);
        break;
      case 24:
        Xt(e, t, a, l), n & 2048 && Rs(t.alternate, t);
        break;
      default:
        Xt(e, t, a, l);
    }
  }
  function Ul(e, t, a, l, n) {
    for (n = n && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
      var i = e,
        f = t,
        d = a,
        S = l,
        N = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          Ul(i, f, d, S, n), qn(8, f);
          break;
        case 23:
          break;
        case 22:
          var L = f.stateNode;
          f.memoizedState !== null
            ? L._visibility & 2
              ? Ul(i, f, d, S, n)
              : Gn(i, f)
            : ((L._visibility |= 2), Ul(i, f, d, S, n)),
            n && N & 2048 && Os(f.alternate, f);
          break;
        case 24:
          Ul(i, f, d, S, n), n && N & 2048 && Rs(f.alternate, f);
          break;
        default:
          Ul(i, f, d, S, n);
      }
      t = t.sibling;
    }
  }
  function Gn(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var a = e,
          l = t,
          n = l.flags;
        switch (l.tag) {
          case 22:
            Gn(a, l), n & 2048 && Os(l.alternate, l);
            break;
          case 24:
            Gn(a, l), n & 2048 && Rs(l.alternate, l);
            break;
          default:
            Gn(a, l);
        }
        t = t.sibling;
      }
  }
  var Bn = 8192;
  function ql(e) {
    if (e.subtreeFlags & Bn)
      for (e = e.child; e !== null; ) Um(e), (e = e.sibling);
  }
  function Um(e) {
    switch (e.tag) {
      case 26:
        ql(e),
          e.flags & Bn &&
            e.memoizedState !== null &&
            Iy(zt, e.memoizedState, e.memoizedProps);
        break;
      case 5:
        ql(e);
        break;
      case 3:
      case 4:
        var t = zt;
        (zt = gu(e.stateNode.containerInfo)), ql(e), (zt = t);
        break;
      case 22:
        e.memoizedState === null &&
          ((t = e.alternate),
          t !== null && t.memoizedState !== null
            ? ((t = Bn), (Bn = 16777216), ql(e), (Bn = t))
            : ql(e));
        break;
      default:
        ql(e);
    }
  }
  function qm(e) {
    var t = e.alternate;
    if (t !== null && ((e = t.child), e !== null)) {
      t.child = null;
      do (t = e.sibling), (e.sibling = null), (e = t);
      while (e !== null);
    }
  }
  function Yn(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var l = t[a];
          (Ze = l), Gm(l, e);
        }
      qm(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) Hm(e), (e = e.sibling);
  }
  function Hm(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Yn(e), e.flags & 2048 && Ta(9, e, e.return);
        break;
      case 3:
        Yn(e);
        break;
      case 12:
        Yn(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null &&
        t._visibility & 2 &&
        (e.return === null || e.return.tag !== 13)
          ? ((t._visibility &= -3), nu(e))
          : Yn(e);
        break;
      default:
        Yn(e);
    }
  }
  function nu(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var l = t[a];
          (Ze = l), Gm(l, e);
        }
      qm(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((t = e), t.tag)) {
        case 0:
        case 11:
        case 15:
          Ta(8, t, t.return), nu(t);
          break;
        case 22:
          (a = t.stateNode),
            a._visibility & 2 && ((a._visibility &= -3), nu(t));
          break;
        default:
          nu(t);
      }
      e = e.sibling;
    }
  }
  function Gm(e, t) {
    for (; Ze !== null; ) {
      var a = Ze;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          Ta(8, a, t);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var l = a.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          Tn(a.memoizedState.cache);
      }
      if (((l = a.child), l !== null)) (l.return = a), (Ze = l);
      else
        e: for (a = e; Ze !== null; ) {
          l = Ze;
          var n = l.sibling,
            i = l.return;
          if ((zm(l), l === a)) {
            Ze = null;
            break e;
          }
          if (n !== null) {
            (n.return = i), (Ze = n);
            break e;
          }
          Ze = i;
        }
    }
  }
  var oy = {
      getCacheForType: function (e) {
        var t = Ie(qe),
          a = t.data.get(e);
        return a === void 0 && ((a = e()), t.data.set(e, a)), a;
      },
    },
    dy = typeof WeakMap == "function" ? WeakMap : Map,
    be = 0,
    Oe = null,
    de = null,
    ge = 0,
    Se = 0,
    mt = null,
    Ra = !1,
    Hl = !1,
    _s = !1,
    na = 0,
    De = 0,
    _a = 0,
    nl = 0,
    Ns = 0,
    Ot = 0,
    Gl = 0,
    Xn = null,
    nt = null,
    js = !1,
    zs = 0,
    iu = 1 / 0,
    uu = null,
    Na = null,
    $e = 0,
    ja = null,
    Bl = null,
    Yl = 0,
    Ds = 0,
    Cs = null,
    Bm = null,
    Zn = 0,
    Ms = null;
  function ht() {
    if ((be & 2) !== 0 && ge !== 0) return ge & -ge;
    if (O.T !== null) {
      var e = Nl;
      return e !== 0 ? e : Bs();
    }
    return to();
  }
  function Ym() {
    Ot === 0 && (Ot = (ge & 536870912) === 0 || pe ? Jf() : 536870912);
    var e = xt.current;
    return e !== null && (e.flags |= 32), Ot;
  }
  function vt(e, t, a) {
    ((e === Oe && (Se === 2 || Se === 9)) || e.cancelPendingCommit !== null) &&
      (Xl(e, 0), za(e, ge, Ot, !1)),
      rn(e, a),
      ((be & 2) === 0 || e !== Oe) &&
        (e === Oe &&
          ((be & 2) === 0 && (nl |= a), De === 4 && za(e, ge, Ot, !1)),
        Zt(e));
  }
  function Xm(e, t, a) {
    if ((be & 6) !== 0) throw Error(r(327));
    var l = (!a && (t & 124) === 0 && (t & e.expiredLanes) === 0) || un(e, t),
      n = l ? vy(e, t) : Us(e, t, !0),
      i = l;
    do {
      if (n === 0) {
        Hl && !l && za(e, t, 0, !1);
        break;
      } else {
        if (((a = e.current.alternate), i && !my(a))) {
          (n = Us(e, t, !1)), (i = !1);
          continue;
        }
        if (n === 2) {
          if (((i = t), e.errorRecoveryDisabledLanes & i)) var f = 0;
          else
            (f = e.pendingLanes & -536870913),
              (f = f !== 0 ? f : f & 536870912 ? 536870912 : 0);
          if (f !== 0) {
            t = f;
            e: {
              var d = e;
              n = Xn;
              var S = d.current.memoizedState.isDehydrated;
              if ((S && (Xl(d, f).flags |= 256), (f = Us(d, f, !1)), f !== 2)) {
                if (_s && !S) {
                  (d.errorRecoveryDisabledLanes |= i), (nl |= i), (n = 4);
                  break e;
                }
                (i = nt),
                  (nt = n),
                  i !== null && (nt === null ? (nt = i) : nt.push.apply(nt, i));
              }
              n = f;
            }
            if (((i = !1), n !== 2)) continue;
          }
        }
        if (n === 1) {
          Xl(e, 0), za(e, t, 0, !0);
          break;
        }
        e: {
          switch (((l = e), (i = n), i)) {
            case 0:
            case 1:
              throw Error(r(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              za(l, t, Ot, !Ra);
              break e;
            case 2:
              nt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(r(329));
          }
          if ((t & 62914560) === t && ((n = zs + 300 - Ht()), 10 < n)) {
            if ((za(l, t, Ot, !Ra), yi(l, 0, !0) !== 0)) break e;
            l.timeoutHandle = yh(
              Zm.bind(null, l, a, nt, uu, js, t, Ot, nl, Gl, Ra, i, 2, -0, 0),
              n
            );
            break e;
          }
          Zm(l, a, nt, uu, js, t, Ot, nl, Gl, Ra, i, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    Zt(e);
  }
  function Zm(e, t, a, l, n, i, f, d, S, N, L, q, j, D) {
    if (
      ((e.timeoutHandle = -1),
      (q = t.subtreeFlags),
      (q & 8192 || (q & 16785408) === 16785408) &&
        ((Fn = { stylesheets: null, count: 0, unsuspend: Ky }),
        Um(t),
        (q = Fy()),
        q !== null))
    ) {
      (e.cancelPendingCommit = q(
        Fm.bind(null, e, t, i, a, l, n, f, d, S, L, 1, j, D)
      )),
        za(e, i, f, !N);
      return;
    }
    Fm(e, t, i, a, l, n, f, d, S);
  }
  function my(e) {
    for (var t = e; ; ) {
      var a = t.tag;
      if (
        (a === 0 || a === 11 || a === 15) &&
        t.flags & 16384 &&
        ((a = t.updateQueue), a !== null && ((a = a.stores), a !== null))
      )
        for (var l = 0; l < a.length; l++) {
          var n = a[l],
            i = n.getSnapshot;
          n = n.value;
          try {
            if (!ct(i(), n)) return !1;
          } catch {
            return !1;
          }
        }
      if (((a = t.child), t.subtreeFlags & 16384 && a !== null))
        (a.return = t), (t = a);
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function za(e, t, a, l) {
    (t &= ~Ns),
      (t &= ~nl),
      (e.suspendedLanes |= t),
      (e.pingedLanes &= ~t),
      l && (e.warmLanes |= t),
      (l = e.expirationTimes);
    for (var n = t; 0 < n; ) {
      var i = 31 - st(n),
        f = 1 << i;
      (l[i] = -1), (n &= ~f);
    }
    a !== 0 && Pf(e, a, t);
  }
  function ru() {
    return (be & 6) === 0 ? (Vn(0), !1) : !0;
  }
  function ws() {
    if (de !== null) {
      if (Se === 0) var e = de.return;
      else (e = de), (Ft = Wa = null), Jr(e), (wl = null), (wn = 0), (e = de);
      for (; e !== null; ) Am(e.alternate, e), (e = e.return);
      de = null;
    }
  }
  function Xl(e, t) {
    var a = e.timeoutHandle;
    a !== -1 && ((e.timeoutHandle = -1), Dy(a)),
      (a = e.cancelPendingCommit),
      a !== null && ((e.cancelPendingCommit = null), a()),
      ws(),
      (Oe = e),
      (de = a = kt(e.current, null)),
      (ge = t),
      (Se = 0),
      (mt = null),
      (Ra = !1),
      (Hl = un(e, t)),
      (_s = !1),
      (Gl = Ot = Ns = nl = _a = De = 0),
      (nt = Xn = null),
      (js = !1),
      (t & 8) !== 0 && (t |= t & 32);
    var l = e.entangledLanes;
    if (l !== 0)
      for (e = e.entanglements, l &= t; 0 < l; ) {
        var n = 31 - st(l),
          i = 1 << n;
        (t |= e[n]), (l &= ~i);
      }
    return (na = t), ji(), a;
  }
  function Vm(e, t) {
    (ce = null),
      (O.H = Ki),
      t === On || t === Hi
        ? ((t = rd()), (Se = 3))
        : t === nd
        ? ((t = rd()), (Se = 4))
        : (Se =
            t === sm
              ? 8
              : t !== null &&
                typeof t == "object" &&
                typeof t.then == "function"
              ? 6
              : 1),
      (mt = t),
      de === null && ((De = 1), Pi(e, St(t, e.current)));
  }
  function Qm() {
    var e = O.H;
    return (O.H = Ki), e === null ? Ki : e;
  }
  function $m() {
    var e = O.A;
    return (O.A = oy), e;
  }
  function Ls() {
    (De = 4),
      Ra || ((ge & 4194048) !== ge && xt.current !== null) || (Hl = !0),
      ((_a & 134217727) === 0 && (nl & 134217727) === 0) ||
        Oe === null ||
        za(Oe, ge, Ot, !1);
  }
  function Us(e, t, a) {
    var l = be;
    be |= 2;
    var n = Qm(),
      i = $m();
    (Oe !== e || ge !== t) && ((uu = null), Xl(e, t)), (t = !1);
    var f = De;
    e: do
      try {
        if (Se !== 0 && de !== null) {
          var d = de,
            S = mt;
          switch (Se) {
            case 8:
              ws(), (f = 6);
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              xt.current === null && (t = !0);
              var N = Se;
              if (((Se = 0), (mt = null), Zl(e, d, S, N), a && Hl)) {
                f = 0;
                break e;
              }
              break;
            default:
              (N = Se), (Se = 0), (mt = null), Zl(e, d, S, N);
          }
        }
        hy(), (f = De);
        break;
      } catch (L) {
        Vm(e, L);
      }
    while (!0);
    return (
      t && e.shellSuspendCounter++,
      (Ft = Wa = null),
      (be = l),
      (O.H = n),
      (O.A = i),
      de === null && ((Oe = null), (ge = 0), ji()),
      f
    );
  }
  function hy() {
    for (; de !== null; ) km(de);
  }
  function vy(e, t) {
    var a = be;
    be |= 2;
    var l = Qm(),
      n = $m();
    Oe !== e || ge !== t
      ? ((uu = null), (iu = Ht() + 500), Xl(e, t))
      : (Hl = un(e, t));
    e: do
      try {
        if (Se !== 0 && de !== null) {
          t = de;
          var i = mt;
          t: switch (Se) {
            case 1:
              (Se = 0), (mt = null), Zl(e, t, i, 1);
              break;
            case 2:
            case 9:
              if (id(i)) {
                (Se = 0), (mt = null), Km(t);
                break;
              }
              (t = function () {
                (Se !== 2 && Se !== 9) || Oe !== e || (Se = 7), Zt(e);
              }),
                i.then(t, t);
              break e;
            case 3:
              Se = 7;
              break e;
            case 4:
              Se = 5;
              break e;
            case 7:
              id(i)
                ? ((Se = 0), (mt = null), Km(t))
                : ((Se = 0), (mt = null), Zl(e, t, i, 7));
              break;
            case 5:
              var f = null;
              switch (de.tag) {
                case 26:
                  f = de.memoizedState;
                case 5:
                case 27:
                  var d = de;
                  if (!f || jh(f)) {
                    (Se = 0), (mt = null);
                    var S = d.sibling;
                    if (S !== null) de = S;
                    else {
                      var N = d.return;
                      N !== null ? ((de = N), su(N)) : (de = null);
                    }
                    break t;
                  }
              }
              (Se = 0), (mt = null), Zl(e, t, i, 5);
              break;
            case 6:
              (Se = 0), (mt = null), Zl(e, t, i, 6);
              break;
            case 8:
              ws(), (De = 6);
              break e;
            default:
              throw Error(r(462));
          }
        }
        gy();
        break;
      } catch (L) {
        Vm(e, L);
      }
    while (!0);
    return (
      (Ft = Wa = null),
      (O.H = l),
      (O.A = n),
      (be = a),
      de !== null ? 0 : ((Oe = null), (ge = 0), ji(), De)
    );
  }
  function gy() {
    for (; de !== null && !Hg(); ) km(de);
  }
  function km(e) {
    var t = Sm(e.alternate, e, na);
    (e.memoizedProps = e.pendingProps), t === null ? su(e) : (de = t);
  }
  function Km(e) {
    var t = e,
      a = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = hm(a, t, t.pendingProps, t.type, void 0, ge);
        break;
      case 11:
        t = hm(a, t, t.pendingProps, t.type.render, t.ref, ge);
        break;
      case 5:
        Jr(t);
      default:
        Am(a, t), (t = de = Io(t, na)), (t = Sm(a, t, na));
    }
    (e.memoizedProps = e.pendingProps), t === null ? su(e) : (de = t);
  }
  function Zl(e, t, a, l) {
    (Ft = Wa = null), Jr(t), (wl = null), (wn = 0);
    var n = t.return;
    try {
      if (iy(e, n, t, a, ge)) {
        (De = 1), Pi(e, St(a, e.current)), (de = null);
        return;
      }
    } catch (i) {
      if (n !== null) throw ((de = n), i);
      (De = 1), Pi(e, St(a, e.current)), (de = null);
      return;
    }
    t.flags & 32768
      ? (pe || l === 1
          ? (e = !0)
          : Hl || (ge & 536870912) !== 0
          ? (e = !1)
          : ((Ra = e = !0),
            (l === 2 || l === 9 || l === 3 || l === 6) &&
              ((l = xt.current),
              l !== null && l.tag === 13 && (l.flags |= 16384))),
        Im(t, e))
      : su(t);
  }
  function su(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        Im(t, Ra);
        return;
      }
      e = t.return;
      var a = ry(t.alternate, t, na);
      if (a !== null) {
        de = a;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        de = t;
        return;
      }
      de = t = e;
    } while (t !== null);
    De === 0 && (De = 5);
  }
  function Im(e, t) {
    do {
      var a = sy(e.alternate, e);
      if (a !== null) {
        (a.flags &= 32767), (de = a);
        return;
      }
      if (
        ((a = e.return),
        a !== null &&
          ((a.flags |= 32768), (a.subtreeFlags = 0), (a.deletions = null)),
        !t && ((e = e.sibling), e !== null))
      ) {
        de = e;
        return;
      }
      de = e = a;
    } while (e !== null);
    (De = 6), (de = null);
  }
  function Fm(e, t, a, l, n, i, f, d, S) {
    e.cancelPendingCommit = null;
    do cu();
    while ($e !== 0);
    if ((be & 6) !== 0) throw Error(r(327));
    if (t !== null) {
      if (t === e.current) throw Error(r(177));
      if (
        ((i = t.lanes | t.childLanes),
        (i |= Rr),
        Kg(e, a, i, f, d, S),
        e === Oe && ((de = Oe = null), (ge = 0)),
        (Bl = t),
        (ja = e),
        (Yl = a),
        (Ds = i),
        (Cs = n),
        (Bm = l),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((e.callbackNode = null),
            (e.callbackPriority = 0),
            Sy(hi, function () {
              return th(), null;
            }))
          : ((e.callbackNode = null), (e.callbackPriority = 0)),
        (l = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || l)
      ) {
        (l = O.T), (O.T = null), (n = w.p), (w.p = 2), (f = be), (be |= 4);
        try {
          cy(e, t, a);
        } finally {
          (be = f), (w.p = n), (O.T = l);
        }
      }
      ($e = 1), Jm(), Wm(), Pm();
    }
  }
  function Jm() {
    if ($e === 1) {
      $e = 0;
      var e = ja,
        t = Bl,
        a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        (a = O.T), (O.T = null);
        var l = w.p;
        w.p = 2;
        var n = be;
        be |= 4;
        try {
          Mm(t, e);
          var i = Ks,
            f = Go(e.containerInfo),
            d = i.focusedElem,
            S = i.selectionRange;
          if (
            f !== d &&
            d &&
            d.ownerDocument &&
            Ho(d.ownerDocument.documentElement, d)
          ) {
            if (S !== null && Er(d)) {
              var N = S.start,
                L = S.end;
              if ((L === void 0 && (L = N), "selectionStart" in d))
                (d.selectionStart = N),
                  (d.selectionEnd = Math.min(L, d.value.length));
              else {
                var q = d.ownerDocument || document,
                  j = (q && q.defaultView) || window;
                if (j.getSelection) {
                  var D = j.getSelection(),
                    ue = d.textContent.length,
                    ae = Math.min(S.start, ue),
                    Te = S.end === void 0 ? ae : Math.min(S.end, ue);
                  !D.extend && ae > Te && ((f = Te), (Te = ae), (ae = f));
                  var x = qo(d, ae),
                    A = qo(d, Te);
                  if (
                    x &&
                    A &&
                    (D.rangeCount !== 1 ||
                      D.anchorNode !== x.node ||
                      D.anchorOffset !== x.offset ||
                      D.focusNode !== A.node ||
                      D.focusOffset !== A.offset)
                  ) {
                    var _ = q.createRange();
                    _.setStart(x.node, x.offset),
                      D.removeAllRanges(),
                      ae > Te
                        ? (D.addRange(_), D.extend(A.node, A.offset))
                        : (_.setEnd(A.node, A.offset), D.addRange(_));
                  }
                }
              }
            }
            for (q = [], D = d; (D = D.parentNode); )
              D.nodeType === 1 &&
                q.push({ element: D, left: D.scrollLeft, top: D.scrollTop });
            for (
              typeof d.focus == "function" && d.focus(), d = 0;
              d < q.length;
              d++
            ) {
              var U = q[d];
              (U.element.scrollLeft = U.left), (U.element.scrollTop = U.top);
            }
          }
          (Eu = !!ks), (Ks = ks = null);
        } finally {
          (be = n), (w.p = l), (O.T = a);
        }
      }
      (e.current = t), ($e = 2);
    }
  }
  function Wm() {
    if ($e === 2) {
      $e = 0;
      var e = ja,
        t = Bl,
        a = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || a) {
        (a = O.T), (O.T = null);
        var l = w.p;
        w.p = 2;
        var n = be;
        be |= 4;
        try {
          jm(e, t.alternate, t);
        } finally {
          (be = n), (w.p = l), (O.T = a);
        }
      }
      $e = 3;
    }
  }
  function Pm() {
    if ($e === 4 || $e === 3) {
      ($e = 0), Gg();
      var e = ja,
        t = Bl,
        a = Yl,
        l = Bm;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? ($e = 5)
        : (($e = 0), (Bl = ja = null), eh(e, e.pendingLanes));
      var n = e.pendingLanes;
      if (
        (n === 0 && (Na = null),
        er(a),
        (t = t.stateNode),
        rt && typeof rt.onCommitFiberRoot == "function")
      )
        try {
          rt.onCommitFiberRoot(nn, t, void 0, (t.current.flags & 128) === 128);
        } catch {}
      if (l !== null) {
        (t = O.T), (n = w.p), (w.p = 2), (O.T = null);
        try {
          for (var i = e.onRecoverableError, f = 0; f < l.length; f++) {
            var d = l[f];
            i(d.value, { componentStack: d.stack });
          }
        } finally {
          (O.T = t), (w.p = n);
        }
      }
      (Yl & 3) !== 0 && cu(),
        Zt(e),
        (n = e.pendingLanes),
        (a & 4194090) !== 0 && (n & 42) !== 0
          ? e === Ms
            ? Zn++
            : ((Zn = 0), (Ms = e))
          : (Zn = 0),
        Vn(0);
    }
  }
  function eh(e, t) {
    (e.pooledCacheLanes &= t) === 0 &&
      ((t = e.pooledCache), t != null && ((e.pooledCache = null), Tn(t)));
  }
  function cu(e) {
    return Jm(), Wm(), Pm(), th();
  }
  function th() {
    if ($e !== 5) return !1;
    var e = ja,
      t = Ds;
    Ds = 0;
    var a = er(Yl),
      l = O.T,
      n = w.p;
    try {
      (w.p = 32 > a ? 32 : a), (O.T = null), (a = Cs), (Cs = null);
      var i = ja,
        f = Yl;
      if ((($e = 0), (Bl = ja = null), (Yl = 0), (be & 6) !== 0))
        throw Error(r(331));
      var d = be;
      if (
        ((be |= 4),
        Hm(i.current),
        Lm(i, i.current, f, a),
        (be = d),
        Vn(0, !1),
        rt && typeof rt.onPostCommitFiberRoot == "function")
      )
        try {
          rt.onPostCommitFiberRoot(nn, i);
        } catch {}
      return !0;
    } finally {
      (w.p = n), (O.T = l), eh(e, t);
    }
  }
  function ah(e, t, a) {
    (t = St(a, t)),
      (t = os(e.stateNode, t, 2)),
      (e = ba(e, t, 2)),
      e !== null && (rn(e, 2), Zt(e));
  }
  function xe(e, t, a) {
    if (e.tag === 3) ah(e, e, a);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          ah(t, e, a);
          break;
        } else if (t.tag === 1) {
          var l = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof l.componentDidCatch == "function" &&
              (Na === null || !Na.has(l)))
          ) {
            (e = St(a, e)),
              (a = um(2)),
              (l = ba(t, a, 2)),
              l !== null && (rm(a, l, t, e), rn(l, 2), Zt(l));
            break;
          }
        }
        t = t.return;
      }
  }
  function qs(e, t, a) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new dy();
      var n = new Set();
      l.set(t, n);
    } else (n = l.get(t)), n === void 0 && ((n = new Set()), l.set(t, n));
    n.has(a) ||
      ((_s = !0), n.add(a), (e = yy.bind(null, e, t, a)), t.then(e, e));
  }
  function yy(e, t, a) {
    var l = e.pingCache;
    l !== null && l.delete(t),
      (e.pingedLanes |= e.suspendedLanes & a),
      (e.warmLanes &= ~a),
      Oe === e &&
        (ge & a) === a &&
        (De === 4 || (De === 3 && (ge & 62914560) === ge && 300 > Ht() - zs)
          ? (be & 2) === 0 && Xl(e, 0)
          : (Ns |= a),
        Gl === ge && (Gl = 0)),
      Zt(e);
  }
  function lh(e, t) {
    t === 0 && (t = Wf()), (e = xl(e, t)), e !== null && (rn(e, t), Zt(e));
  }
  function py(e) {
    var t = e.memoizedState,
      a = 0;
    t !== null && (a = t.retryLane), lh(e, a);
  }
  function by(e, t) {
    var a = 0;
    switch (e.tag) {
      case 13:
        var l = e.stateNode,
          n = e.memoizedState;
        n !== null && (a = n.retryLane);
        break;
      case 19:
        l = e.stateNode;
        break;
      case 22:
        l = e.stateNode._retryCache;
        break;
      default:
        throw Error(r(314));
    }
    l !== null && l.delete(t), lh(e, a);
  }
  function Sy(e, t) {
    return Fu(e, t);
  }
  var fu = null,
    Vl = null,
    Hs = !1,
    ou = !1,
    Gs = !1,
    il = 0;
  function Zt(e) {
    e !== Vl &&
      e.next === null &&
      (Vl === null ? (fu = Vl = e) : (Vl = Vl.next = e)),
      (ou = !0),
      Hs || ((Hs = !0), Ay());
  }
  function Vn(e, t) {
    if (!Gs && ou) {
      Gs = !0;
      do
        for (var a = !1, l = fu; l !== null; ) {
          if (e !== 0) {
            var n = l.pendingLanes;
            if (n === 0) var i = 0;
            else {
              var f = l.suspendedLanes,
                d = l.pingedLanes;
              (i = (1 << (31 - st(42 | e) + 1)) - 1),
                (i &= n & ~(f & ~d)),
                (i = i & 201326741 ? (i & 201326741) | 1 : i ? i | 2 : 0);
            }
            i !== 0 && ((a = !0), rh(l, i));
          } else
            (i = ge),
              (i = yi(
                l,
                l === Oe ? i : 0,
                l.cancelPendingCommit !== null || l.timeoutHandle !== -1
              )),
              (i & 3) === 0 || un(l, i) || ((a = !0), rh(l, i));
          l = l.next;
        }
      while (a);
      Gs = !1;
    }
  }
  function Ey() {
    nh();
  }
  function nh() {
    ou = Hs = !1;
    var e = 0;
    il !== 0 && (zy() && (e = il), (il = 0));
    for (var t = Ht(), a = null, l = fu; l !== null; ) {
      var n = l.next,
        i = ih(l, t);
      i === 0
        ? ((l.next = null),
          a === null ? (fu = n) : (a.next = n),
          n === null && (Vl = a))
        : ((a = l), (e !== 0 || (i & 3) !== 0) && (ou = !0)),
        (l = n);
    }
    Vn(e);
  }
  function ih(e, t) {
    for (
      var a = e.suspendedLanes,
        l = e.pingedLanes,
        n = e.expirationTimes,
        i = e.pendingLanes & -62914561;
      0 < i;

    ) {
      var f = 31 - st(i),
        d = 1 << f,
        S = n[f];
      S === -1
        ? ((d & a) === 0 || (d & l) !== 0) && (n[f] = kg(d, t))
        : S <= t && (e.expiredLanes |= d),
        (i &= ~d);
    }
    if (
      ((t = Oe),
      (a = ge),
      (a = yi(
        e,
        e === t ? a : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1
      )),
      (l = e.callbackNode),
      a === 0 ||
        (e === t && (Se === 2 || Se === 9)) ||
        e.cancelPendingCommit !== null)
    )
      return (
        l !== null && l !== null && Ju(l),
        (e.callbackNode = null),
        (e.callbackPriority = 0)
      );
    if ((a & 3) === 0 || un(e, a)) {
      if (((t = a & -a), t === e.callbackPriority)) return t;
      switch ((l !== null && Ju(l), er(a))) {
        case 2:
        case 8:
          a = If;
          break;
        case 32:
          a = hi;
          break;
        case 268435456:
          a = Ff;
          break;
        default:
          a = hi;
      }
      return (
        (l = uh.bind(null, e)),
        (a = Fu(a, l)),
        (e.callbackPriority = t),
        (e.callbackNode = a),
        t
      );
    }
    return (
      l !== null && l !== null && Ju(l),
      (e.callbackPriority = 2),
      (e.callbackNode = null),
      2
    );
  }
  function uh(e, t) {
    if ($e !== 0 && $e !== 5)
      return (e.callbackNode = null), (e.callbackPriority = 0), null;
    var a = e.callbackNode;
    if (cu() && e.callbackNode !== a) return null;
    var l = ge;
    return (
      (l = yi(
        e,
        e === Oe ? l : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1
      )),
      l === 0
        ? null
        : (Xm(e, l, t),
          ih(e, Ht()),
          e.callbackNode != null && e.callbackNode === a
            ? uh.bind(null, e)
            : null)
    );
  }
  function rh(e, t) {
    if (cu()) return null;
    Xm(e, t, !0);
  }
  function Ay() {
    Cy(function () {
      (be & 6) !== 0 ? Fu(Kf, Ey) : nh();
    });
  }
  function Bs() {
    return il === 0 && (il = Jf()), il;
  }
  function sh(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean"
      ? null
      : typeof e == "function"
      ? e
      : Ai("" + e);
  }
  function ch(e, t) {
    var a = t.ownerDocument.createElement("input");
    return (
      (a.name = t.name),
      (a.value = t.value),
      e.id && a.setAttribute("form", e.id),
      t.parentNode.insertBefore(a, t),
      (e = new FormData(e)),
      a.parentNode.removeChild(a),
      e
    );
  }
  function Ty(e, t, a, l, n) {
    if (t === "submit" && a && a.stateNode === n) {
      var i = sh((n[et] || null).action),
        f = l.submitter;
      f &&
        ((t = (t = f[et] || null)
          ? sh(t.formAction)
          : f.getAttribute("formAction")),
        t !== null && ((i = t), (f = null)));
      var d = new Ri("action", "action", null, l, n);
      e.push({
        event: d,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (l.defaultPrevented) {
                if (il !== 0) {
                  var S = f ? ch(n, f) : new FormData(n);
                  us(
                    a,
                    { pending: !0, data: S, method: n.method, action: i },
                    null,
                    S
                  );
                }
              } else
                typeof i == "function" &&
                  (d.preventDefault(),
                  (S = f ? ch(n, f) : new FormData(n)),
                  us(
                    a,
                    { pending: !0, data: S, method: n.method, action: i },
                    i,
                    S
                  ));
            },
            currentTarget: n,
          },
        ],
      });
    }
  }
  for (var Ys = 0; Ys < Or.length; Ys++) {
    var Xs = Or[Ys],
      xy = Xs.toLowerCase(),
      Oy = Xs[0].toUpperCase() + Xs.slice(1);
    jt(xy, "on" + Oy);
  }
  jt(Xo, "onAnimationEnd"),
    jt(Zo, "onAnimationIteration"),
    jt(Vo, "onAnimationStart"),
    jt("dblclick", "onDoubleClick"),
    jt("focusin", "onFocus"),
    jt("focusout", "onBlur"),
    jt(X1, "onTransitionRun"),
    jt(Z1, "onTransitionStart"),
    jt(V1, "onTransitionCancel"),
    jt(Qo, "onTransitionEnd"),
    hl("onMouseEnter", ["mouseout", "mouseover"]),
    hl("onMouseLeave", ["mouseout", "mouseover"]),
    hl("onPointerEnter", ["pointerout", "pointerover"]),
    hl("onPointerLeave", ["pointerout", "pointerover"]),
    Za(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    Za(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    Za("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Za(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    Za(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    Za(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var Qn =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    Ry = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(Qn)
    );
  function fh(e, t) {
    t = (t & 4) !== 0;
    for (var a = 0; a < e.length; a++) {
      var l = e[a],
        n = l.event;
      l = l.listeners;
      e: {
        var i = void 0;
        if (t)
          for (var f = l.length - 1; 0 <= f; f--) {
            var d = l[f],
              S = d.instance,
              N = d.currentTarget;
            if (((d = d.listener), S !== i && n.isPropagationStopped()))
              break e;
            (i = d), (n.currentTarget = N);
            try {
              i(n);
            } catch (L) {
              Wi(L);
            }
            (n.currentTarget = null), (i = S);
          }
        else
          for (f = 0; f < l.length; f++) {
            if (
              ((d = l[f]),
              (S = d.instance),
              (N = d.currentTarget),
              (d = d.listener),
              S !== i && n.isPropagationStopped())
            )
              break e;
            (i = d), (n.currentTarget = N);
            try {
              i(n);
            } catch (L) {
              Wi(L);
            }
            (n.currentTarget = null), (i = S);
          }
      }
    }
  }
  function me(e, t) {
    var a = t[tr];
    a === void 0 && (a = t[tr] = new Set());
    var l = e + "__bubble";
    a.has(l) || (oh(t, e, 2, !1), a.add(l));
  }
  function Zs(e, t, a) {
    var l = 0;
    t && (l |= 4), oh(a, e, l, t);
  }
  var du = "_reactListening" + Math.random().toString(36).slice(2);
  function Vs(e) {
    if (!e[du]) {
      (e[du] = !0),
        lo.forEach(function (a) {
          a !== "selectionchange" && (Ry.has(a) || Zs(a, !1, e), Zs(a, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[du] || ((t[du] = !0), Zs("selectionchange", !1, t));
    }
  }
  function oh(e, t, a, l) {
    switch (Lh(t)) {
      case 2:
        var n = Py;
        break;
      case 8:
        n = ep;
        break;
      default:
        n = nc;
    }
    (a = n.bind(null, t, a, e)),
      (n = void 0),
      !dr ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (n = !0),
      l
        ? n !== void 0
          ? e.addEventListener(t, a, { capture: !0, passive: n })
          : e.addEventListener(t, a, !0)
        : n !== void 0
        ? e.addEventListener(t, a, { passive: n })
        : e.addEventListener(t, a, !1);
  }
  function Qs(e, t, a, l, n) {
    var i = l;
    if ((t & 1) === 0 && (t & 2) === 0 && l !== null)
      e: for (;;) {
        if (l === null) return;
        var f = l.tag;
        if (f === 3 || f === 4) {
          var d = l.stateNode.containerInfo;
          if (d === n) break;
          if (f === 4)
            for (f = l.return; f !== null; ) {
              var S = f.tag;
              if ((S === 3 || S === 4) && f.stateNode.containerInfo === n)
                return;
              f = f.return;
            }
          for (; d !== null; ) {
            if (((f = ol(d)), f === null)) return;
            if (((S = f.tag), S === 5 || S === 6 || S === 26 || S === 27)) {
              l = i = f;
              continue e;
            }
            d = d.parentNode;
          }
        }
        l = l.return;
      }
    po(function () {
      var N = i,
        L = fr(a),
        q = [];
      e: {
        var j = $o.get(e);
        if (j !== void 0) {
          var D = Ri,
            ue = e;
          switch (e) {
            case "keypress":
              if (xi(a) === 0) break e;
            case "keydown":
            case "keyup":
              D = S1;
              break;
            case "focusin":
              (ue = "focus"), (D = gr);
              break;
            case "focusout":
              (ue = "blur"), (D = gr);
              break;
            case "beforeblur":
            case "afterblur":
              D = gr;
              break;
            case "click":
              if (a.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              D = Eo;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              D = s1;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              D = T1;
              break;
            case Xo:
            case Zo:
            case Vo:
              D = o1;
              break;
            case Qo:
              D = O1;
              break;
            case "scroll":
            case "scrollend":
              D = u1;
              break;
            case "wheel":
              D = _1;
              break;
            case "copy":
            case "cut":
            case "paste":
              D = m1;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              D = To;
              break;
            case "toggle":
            case "beforetoggle":
              D = j1;
          }
          var ae = (t & 4) !== 0,
            Te = !ae && (e === "scroll" || e === "scrollend"),
            x = ae ? (j !== null ? j + "Capture" : null) : j;
          ae = [];
          for (var A = N, _; A !== null; ) {
            var U = A;
            if (
              ((_ = U.stateNode),
              (U = U.tag),
              (U !== 5 && U !== 26 && U !== 27) ||
                _ === null ||
                x === null ||
                ((U = fn(A, x)), U != null && ae.push($n(A, U, _))),
              Te)
            )
              break;
            A = A.return;
          }
          0 < ae.length &&
            ((j = new D(j, ue, null, a, L)),
            q.push({ event: j, listeners: ae }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((j = e === "mouseover" || e === "pointerover"),
            (D = e === "mouseout" || e === "pointerout"),
            j &&
              a !== cr &&
              (ue = a.relatedTarget || a.fromElement) &&
              (ol(ue) || ue[fl]))
          )
            break e;
          if (
            (D || j) &&
            ((j =
              L.window === L
                ? L
                : (j = L.ownerDocument)
                ? j.defaultView || j.parentWindow
                : window),
            D
              ? ((ue = a.relatedTarget || a.toElement),
                (D = N),
                (ue = ue ? ol(ue) : null),
                ue !== null &&
                  ((Te = v(ue)),
                  (ae = ue.tag),
                  ue !== Te || (ae !== 5 && ae !== 27 && ae !== 6)) &&
                  (ue = null))
              : ((D = null), (ue = N)),
            D !== ue)
          ) {
            if (
              ((ae = Eo),
              (U = "onMouseLeave"),
              (x = "onMouseEnter"),
              (A = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((ae = To),
                (U = "onPointerLeave"),
                (x = "onPointerEnter"),
                (A = "pointer")),
              (Te = D == null ? j : cn(D)),
              (_ = ue == null ? j : cn(ue)),
              (j = new ae(U, A + "leave", D, a, L)),
              (j.target = Te),
              (j.relatedTarget = _),
              (U = null),
              ol(L) === N &&
                ((ae = new ae(x, A + "enter", ue, a, L)),
                (ae.target = _),
                (ae.relatedTarget = Te),
                (U = ae)),
              (Te = U),
              D && ue)
            )
              t: {
                for (ae = D, x = ue, A = 0, _ = ae; _; _ = Ql(_)) A++;
                for (_ = 0, U = x; U; U = Ql(U)) _++;
                for (; 0 < A - _; ) (ae = Ql(ae)), A--;
                for (; 0 < _ - A; ) (x = Ql(x)), _--;
                for (; A--; ) {
                  if (ae === x || (x !== null && ae === x.alternate)) break t;
                  (ae = Ql(ae)), (x = Ql(x));
                }
                ae = null;
              }
            else ae = null;
            D !== null && dh(q, j, D, ae, !1),
              ue !== null && Te !== null && dh(q, Te, ue, ae, !0);
          }
        }
        e: {
          if (
            ((j = N ? cn(N) : window),
            (D = j.nodeName && j.nodeName.toLowerCase()),
            D === "select" || (D === "input" && j.type === "file"))
          )
            var I = Do;
          else if (jo(j))
            if (Co) I = G1;
            else {
              I = q1;
              var oe = U1;
            }
          else
            (D = j.nodeName),
              !D ||
              D.toLowerCase() !== "input" ||
              (j.type !== "checkbox" && j.type !== "radio")
                ? N && sr(N.elementType) && (I = Do)
                : (I = H1);
          if (I && (I = I(e, N))) {
            zo(q, I, a, L);
            break e;
          }
          oe && oe(e, j, N),
            e === "focusout" &&
              N &&
              j.type === "number" &&
              N.memoizedProps.value != null &&
              rr(j, "number", j.value);
        }
        switch (((oe = N ? cn(N) : window), e)) {
          case "focusin":
            (jo(oe) || oe.contentEditable === "true") &&
              ((El = oe), (Ar = N), (pn = null));
            break;
          case "focusout":
            pn = Ar = El = null;
            break;
          case "mousedown":
            Tr = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (Tr = !1), Bo(q, a, L);
            break;
          case "selectionchange":
            if (Y1) break;
          case "keydown":
          case "keyup":
            Bo(q, a, L);
        }
        var P;
        if (pr)
          e: {
            switch (e) {
              case "compositionstart":
                var ne = "onCompositionStart";
                break e;
              case "compositionend":
                ne = "onCompositionEnd";
                break e;
              case "compositionupdate":
                ne = "onCompositionUpdate";
                break e;
            }
            ne = void 0;
          }
        else
          Sl
            ? _o(e, a) && (ne = "onCompositionEnd")
            : e === "keydown" &&
              a.keyCode === 229 &&
              (ne = "onCompositionStart");
        ne &&
          (xo &&
            a.locale !== "ko" &&
            (Sl || ne !== "onCompositionStart"
              ? ne === "onCompositionEnd" && Sl && (P = bo())
              : ((va = L),
                (mr = "value" in va ? va.value : va.textContent),
                (Sl = !0))),
          (oe = mu(N, ne)),
          0 < oe.length &&
            ((ne = new Ao(ne, e, null, a, L)),
            q.push({ event: ne, listeners: oe }),
            P ? (ne.data = P) : ((P = No(a)), P !== null && (ne.data = P)))),
          (P = D1 ? C1(e, a) : M1(e, a)) &&
            ((ne = mu(N, "onBeforeInput")),
            0 < ne.length &&
              ((oe = new Ao("onBeforeInput", "beforeinput", null, a, L)),
              q.push({ event: oe, listeners: ne }),
              (oe.data = P))),
          Ty(q, e, N, a, L);
      }
      fh(q, t);
    });
  }
  function $n(e, t, a) {
    return { instance: e, listener: t, currentTarget: a };
  }
  function mu(e, t) {
    for (var a = t + "Capture", l = []; e !== null; ) {
      var n = e,
        i = n.stateNode;
      if (
        ((n = n.tag),
        (n !== 5 && n !== 26 && n !== 27) ||
          i === null ||
          ((n = fn(e, a)),
          n != null && l.unshift($n(e, n, i)),
          (n = fn(e, t)),
          n != null && l.push($n(e, n, i))),
        e.tag === 3)
      )
        return l;
      e = e.return;
    }
    return [];
  }
  function Ql(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function dh(e, t, a, l, n) {
    for (var i = t._reactName, f = []; a !== null && a !== l; ) {
      var d = a,
        S = d.alternate,
        N = d.stateNode;
      if (((d = d.tag), S !== null && S === l)) break;
      (d !== 5 && d !== 26 && d !== 27) ||
        N === null ||
        ((S = N),
        n
          ? ((N = fn(a, i)), N != null && f.unshift($n(a, N, S)))
          : n || ((N = fn(a, i)), N != null && f.push($n(a, N, S)))),
        (a = a.return);
    }
    f.length !== 0 && e.push({ event: t, listeners: f });
  }
  var _y = /\r\n?/g,
    Ny = /\u0000|\uFFFD/g;
  function mh(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        _y,
        `
`
      )
      .replace(Ny, "");
  }
  function hh(e, t) {
    return (t = mh(t)), mh(e) === t;
  }
  function hu() {}
  function Ae(e, t, a, l, n, i) {
    switch (a) {
      case "children":
        typeof l == "string"
          ? t === "body" || (t === "textarea" && l === "") || yl(e, l)
          : (typeof l == "number" || typeof l == "bigint") &&
            t !== "body" &&
            yl(e, "" + l);
        break;
      case "className":
        bi(e, "class", l);
        break;
      case "tabIndex":
        bi(e, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        bi(e, a, l);
        break;
      case "style":
        go(e, l, i);
        break;
      case "data":
        if (t !== "object") {
          bi(e, "data", l);
          break;
        }
      case "src":
      case "href":
        if (l === "" && (t !== "a" || a !== "href")) {
          e.removeAttribute(a);
          break;
        }
        if (
          l == null ||
          typeof l == "function" ||
          typeof l == "symbol" ||
          typeof l == "boolean"
        ) {
          e.removeAttribute(a);
          break;
        }
        (l = Ai("" + l)), e.setAttribute(a, l);
        break;
      case "action":
      case "formAction":
        if (typeof l == "function") {
          e.setAttribute(
            a,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof i == "function" &&
            (a === "formAction"
              ? (t !== "input" && Ae(e, t, "name", n.name, n, null),
                Ae(e, t, "formEncType", n.formEncType, n, null),
                Ae(e, t, "formMethod", n.formMethod, n, null),
                Ae(e, t, "formTarget", n.formTarget, n, null))
              : (Ae(e, t, "encType", n.encType, n, null),
                Ae(e, t, "method", n.method, n, null),
                Ae(e, t, "target", n.target, n, null)));
        if (l == null || typeof l == "symbol" || typeof l == "boolean") {
          e.removeAttribute(a);
          break;
        }
        (l = Ai("" + l)), e.setAttribute(a, l);
        break;
      case "onClick":
        l != null && (e.onclick = hu);
        break;
      case "onScroll":
        l != null && me("scroll", e);
        break;
      case "onScrollEnd":
        l != null && me("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l)) throw Error(r(61));
          if (((a = l.__html), a != null)) {
            if (n.children != null) throw Error(r(60));
            e.innerHTML = a;
          }
        }
        break;
      case "multiple":
        e.multiple = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "muted":
        e.muted = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          l == null ||
          typeof l == "function" ||
          typeof l == "boolean" ||
          typeof l == "symbol"
        ) {
          e.removeAttribute("xlink:href");
          break;
        }
        (a = Ai("" + l)),
          e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        l != null && typeof l != "function" && typeof l != "symbol"
          ? e.setAttribute(a, "" + l)
          : e.removeAttribute(a);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        l && typeof l != "function" && typeof l != "symbol"
          ? e.setAttribute(a, "")
          : e.removeAttribute(a);
        break;
      case "capture":
      case "download":
        l === !0
          ? e.setAttribute(a, "")
          : l !== !1 &&
            l != null &&
            typeof l != "function" &&
            typeof l != "symbol"
          ? e.setAttribute(a, l)
          : e.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        l != null &&
        typeof l != "function" &&
        typeof l != "symbol" &&
        !isNaN(l) &&
        1 <= l
          ? e.setAttribute(a, l)
          : e.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l)
          ? e.removeAttribute(a)
          : e.setAttribute(a, l);
        break;
      case "popover":
        me("beforetoggle", e), me("toggle", e), pi(e, "popover", l);
        break;
      case "xlinkActuate":
        Qt(e, "http://www.w3.org/1999/xlink", "xlink:actuate", l);
        break;
      case "xlinkArcrole":
        Qt(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", l);
        break;
      case "xlinkRole":
        Qt(e, "http://www.w3.org/1999/xlink", "xlink:role", l);
        break;
      case "xlinkShow":
        Qt(e, "http://www.w3.org/1999/xlink", "xlink:show", l);
        break;
      case "xlinkTitle":
        Qt(e, "http://www.w3.org/1999/xlink", "xlink:title", l);
        break;
      case "xlinkType":
        Qt(e, "http://www.w3.org/1999/xlink", "xlink:type", l);
        break;
      case "xmlBase":
        Qt(e, "http://www.w3.org/XML/1998/namespace", "xml:base", l);
        break;
      case "xmlLang":
        Qt(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", l);
        break;
      case "xmlSpace":
        Qt(e, "http://www.w3.org/XML/1998/namespace", "xml:space", l);
        break;
      case "is":
        pi(e, "is", l);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) ||
          (a[0] !== "o" && a[0] !== "O") ||
          (a[1] !== "n" && a[1] !== "N")) &&
          ((a = n1.get(a) || a), pi(e, a, l));
    }
  }
  function $s(e, t, a, l, n, i) {
    switch (a) {
      case "style":
        go(e, l, i);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l)) throw Error(r(61));
          if (((a = l.__html), a != null)) {
            if (n.children != null) throw Error(r(60));
            e.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof l == "string"
          ? yl(e, l)
          : (typeof l == "number" || typeof l == "bigint") && yl(e, "" + l);
        break;
      case "onScroll":
        l != null && me("scroll", e);
        break;
      case "onScrollEnd":
        l != null && me("scrollend", e);
        break;
      case "onClick":
        l != null && (e.onclick = hu);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!no.hasOwnProperty(a))
          e: {
            if (
              a[0] === "o" &&
              a[1] === "n" &&
              ((n = a.endsWith("Capture")),
              (t = a.slice(2, n ? a.length - 7 : void 0)),
              (i = e[et] || null),
              (i = i != null ? i[a] : null),
              typeof i == "function" && e.removeEventListener(t, i, n),
              typeof l == "function")
            ) {
              typeof i != "function" &&
                i !== null &&
                (a in e
                  ? (e[a] = null)
                  : e.hasAttribute(a) && e.removeAttribute(a)),
                e.addEventListener(t, l, n);
              break e;
            }
            a in e
              ? (e[a] = l)
              : l === !0
              ? e.setAttribute(a, "")
              : pi(e, a, l);
          }
    }
  }
  function ke(e, t, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        me("error", e), me("load", e);
        var l = !1,
          n = !1,
          i;
        for (i in a)
          if (a.hasOwnProperty(i)) {
            var f = a[i];
            if (f != null)
              switch (i) {
                case "src":
                  l = !0;
                  break;
                case "srcSet":
                  n = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(r(137, t));
                default:
                  Ae(e, t, i, f, a, null);
              }
          }
        n && Ae(e, t, "srcSet", a.srcSet, a, null),
          l && Ae(e, t, "src", a.src, a, null);
        return;
      case "input":
        me("invalid", e);
        var d = (i = f = n = null),
          S = null,
          N = null;
        for (l in a)
          if (a.hasOwnProperty(l)) {
            var L = a[l];
            if (L != null)
              switch (l) {
                case "name":
                  n = L;
                  break;
                case "type":
                  f = L;
                  break;
                case "checked":
                  S = L;
                  break;
                case "defaultChecked":
                  N = L;
                  break;
                case "value":
                  i = L;
                  break;
                case "defaultValue":
                  d = L;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (L != null) throw Error(r(137, t));
                  break;
                default:
                  Ae(e, t, l, L, a, null);
              }
          }
        oo(e, i, d, S, N, f, n, !1), Si(e);
        return;
      case "select":
        me("invalid", e), (l = f = i = null);
        for (n in a)
          if (a.hasOwnProperty(n) && ((d = a[n]), d != null))
            switch (n) {
              case "value":
                i = d;
                break;
              case "defaultValue":
                f = d;
                break;
              case "multiple":
                l = d;
              default:
                Ae(e, t, n, d, a, null);
            }
        (t = i),
          (a = f),
          (e.multiple = !!l),
          t != null ? gl(e, !!l, t, !1) : a != null && gl(e, !!l, a, !0);
        return;
      case "textarea":
        me("invalid", e), (i = n = l = null);
        for (f in a)
          if (a.hasOwnProperty(f) && ((d = a[f]), d != null))
            switch (f) {
              case "value":
                l = d;
                break;
              case "defaultValue":
                n = d;
                break;
              case "children":
                i = d;
                break;
              case "dangerouslySetInnerHTML":
                if (d != null) throw Error(r(91));
                break;
              default:
                Ae(e, t, f, d, a, null);
            }
        ho(e, l, n, i), Si(e);
        return;
      case "option":
        for (S in a)
          if (a.hasOwnProperty(S) && ((l = a[S]), l != null))
            switch (S) {
              case "selected":
                e.selected =
                  l && typeof l != "function" && typeof l != "symbol";
                break;
              default:
                Ae(e, t, S, l, a, null);
            }
        return;
      case "dialog":
        me("beforetoggle", e), me("toggle", e), me("cancel", e), me("close", e);
        break;
      case "iframe":
      case "object":
        me("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < Qn.length; l++) me(Qn[l], e);
        break;
      case "image":
        me("error", e), me("load", e);
        break;
      case "details":
        me("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        me("error", e), me("load", e);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (N in a)
          if (a.hasOwnProperty(N) && ((l = a[N]), l != null))
            switch (N) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(r(137, t));
              default:
                Ae(e, t, N, l, a, null);
            }
        return;
      default:
        if (sr(t)) {
          for (L in a)
            a.hasOwnProperty(L) &&
              ((l = a[L]), l !== void 0 && $s(e, t, L, l, a, void 0));
          return;
        }
    }
    for (d in a)
      a.hasOwnProperty(d) && ((l = a[d]), l != null && Ae(e, t, d, l, a, null));
  }
  function jy(e, t, a, l) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var n = null,
          i = null,
          f = null,
          d = null,
          S = null,
          N = null,
          L = null;
        for (D in a) {
          var q = a[D];
          if (a.hasOwnProperty(D) && q != null)
            switch (D) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                S = q;
              default:
                l.hasOwnProperty(D) || Ae(e, t, D, null, l, q);
            }
        }
        for (var j in l) {
          var D = l[j];
          if (((q = a[j]), l.hasOwnProperty(j) && (D != null || q != null)))
            switch (j) {
              case "type":
                i = D;
                break;
              case "name":
                n = D;
                break;
              case "checked":
                N = D;
                break;
              case "defaultChecked":
                L = D;
                break;
              case "value":
                f = D;
                break;
              case "defaultValue":
                d = D;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (D != null) throw Error(r(137, t));
                break;
              default:
                D !== q && Ae(e, t, j, D, l, q);
            }
        }
        ur(e, f, d, S, N, L, i, n);
        return;
      case "select":
        D = f = d = j = null;
        for (i in a)
          if (((S = a[i]), a.hasOwnProperty(i) && S != null))
            switch (i) {
              case "value":
                break;
              case "multiple":
                D = S;
              default:
                l.hasOwnProperty(i) || Ae(e, t, i, null, l, S);
            }
        for (n in l)
          if (
            ((i = l[n]),
            (S = a[n]),
            l.hasOwnProperty(n) && (i != null || S != null))
          )
            switch (n) {
              case "value":
                j = i;
                break;
              case "defaultValue":
                d = i;
                break;
              case "multiple":
                f = i;
              default:
                i !== S && Ae(e, t, n, i, l, S);
            }
        (t = d),
          (a = f),
          (l = D),
          j != null
            ? gl(e, !!a, j, !1)
            : !!l != !!a &&
              (t != null ? gl(e, !!a, t, !0) : gl(e, !!a, a ? [] : "", !1));
        return;
      case "textarea":
        D = j = null;
        for (d in a)
          if (
            ((n = a[d]),
            a.hasOwnProperty(d) && n != null && !l.hasOwnProperty(d))
          )
            switch (d) {
              case "value":
                break;
              case "children":
                break;
              default:
                Ae(e, t, d, null, l, n);
            }
        for (f in l)
          if (
            ((n = l[f]),
            (i = a[f]),
            l.hasOwnProperty(f) && (n != null || i != null))
          )
            switch (f) {
              case "value":
                j = n;
                break;
              case "defaultValue":
                D = n;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (n != null) throw Error(r(91));
                break;
              default:
                n !== i && Ae(e, t, f, n, l, i);
            }
        mo(e, j, D);
        return;
      case "option":
        for (var ue in a)
          if (
            ((j = a[ue]),
            a.hasOwnProperty(ue) && j != null && !l.hasOwnProperty(ue))
          )
            switch (ue) {
              case "selected":
                e.selected = !1;
                break;
              default:
                Ae(e, t, ue, null, l, j);
            }
        for (S in l)
          if (
            ((j = l[S]),
            (D = a[S]),
            l.hasOwnProperty(S) && j !== D && (j != null || D != null))
          )
            switch (S) {
              case "selected":
                e.selected =
                  j && typeof j != "function" && typeof j != "symbol";
                break;
              default:
                Ae(e, t, S, j, l, D);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var ae in a)
          (j = a[ae]),
            a.hasOwnProperty(ae) &&
              j != null &&
              !l.hasOwnProperty(ae) &&
              Ae(e, t, ae, null, l, j);
        for (N in l)
          if (
            ((j = l[N]),
            (D = a[N]),
            l.hasOwnProperty(N) && j !== D && (j != null || D != null))
          )
            switch (N) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (j != null) throw Error(r(137, t));
                break;
              default:
                Ae(e, t, N, j, l, D);
            }
        return;
      default:
        if (sr(t)) {
          for (var Te in a)
            (j = a[Te]),
              a.hasOwnProperty(Te) &&
                j !== void 0 &&
                !l.hasOwnProperty(Te) &&
                $s(e, t, Te, void 0, l, j);
          for (L in l)
            (j = l[L]),
              (D = a[L]),
              !l.hasOwnProperty(L) ||
                j === D ||
                (j === void 0 && D === void 0) ||
                $s(e, t, L, j, l, D);
          return;
        }
    }
    for (var x in a)
      (j = a[x]),
        a.hasOwnProperty(x) &&
          j != null &&
          !l.hasOwnProperty(x) &&
          Ae(e, t, x, null, l, j);
    for (q in l)
      (j = l[q]),
        (D = a[q]),
        !l.hasOwnProperty(q) ||
          j === D ||
          (j == null && D == null) ||
          Ae(e, t, q, j, l, D);
  }
  var ks = null,
    Ks = null;
  function vu(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function vh(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function gh(e, t) {
    if (e === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && t === "foreignObject" ? 0 : e;
  }
  function Is(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      typeof t.children == "bigint" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Fs = null;
  function zy() {
    var e = window.event;
    return e && e.type === "popstate"
      ? e === Fs
        ? !1
        : ((Fs = e), !0)
      : ((Fs = null), !1);
  }
  var yh = typeof setTimeout == "function" ? setTimeout : void 0,
    Dy = typeof clearTimeout == "function" ? clearTimeout : void 0,
    ph = typeof Promise == "function" ? Promise : void 0,
    Cy =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof ph < "u"
        ? function (e) {
            return ph.resolve(null).then(e).catch(My);
          }
        : yh;
  function My(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Da(e) {
    return e === "head";
  }
  function bh(e, t) {
    var a = t,
      l = 0,
      n = 0;
    do {
      var i = a.nextSibling;
      if ((e.removeChild(a), i && i.nodeType === 8))
        if (((a = i.data), a === "/$")) {
          if (0 < l && 8 > l) {
            a = l;
            var f = e.ownerDocument;
            if ((a & 1 && kn(f.documentElement), a & 2 && kn(f.body), a & 4))
              for (a = f.head, kn(a), f = a.firstChild; f; ) {
                var d = f.nextSibling,
                  S = f.nodeName;
                f[sn] ||
                  S === "SCRIPT" ||
                  S === "STYLE" ||
                  (S === "LINK" && f.rel.toLowerCase() === "stylesheet") ||
                  a.removeChild(f),
                  (f = d);
              }
          }
          if (n === 0) {
            e.removeChild(i), ti(t);
            return;
          }
          n--;
        } else
          a === "$" || a === "$?" || a === "$!"
            ? n++
            : (l = a.charCodeAt(0) - 48);
      else l = 0;
      a = i;
    } while (a);
    ti(t);
  }
  function Js(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var a = t;
      switch (((t = t.nextSibling), a.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Js(a), ar(a);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (a.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(a);
    }
  }
  function wy(e, t, a, l) {
    for (; e.nodeType === 1; ) {
      var n = a;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!l && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
      } else if (l) {
        if (!e[sn])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (
                ((i = e.getAttribute("rel")),
                i === "stylesheet" && e.hasAttribute("data-precedence"))
              )
                break;
              if (
                i !== n.rel ||
                e.getAttribute("href") !==
                  (n.href == null || n.href === "" ? null : n.href) ||
                e.getAttribute("crossorigin") !==
                  (n.crossOrigin == null ? null : n.crossOrigin) ||
                e.getAttribute("title") !== (n.title == null ? null : n.title)
              )
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (
                ((i = e.getAttribute("src")),
                (i !== (n.src == null ? null : n.src) ||
                  e.getAttribute("type") !== (n.type == null ? null : n.type) ||
                  e.getAttribute("crossorigin") !==
                    (n.crossOrigin == null ? null : n.crossOrigin)) &&
                  i &&
                  e.hasAttribute("async") &&
                  !e.hasAttribute("itemprop"))
              )
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var i = n.name == null ? null : "" + n.name;
        if (n.type === "hidden" && e.getAttribute("name") === i) return e;
      } else return e;
      if (((e = Dt(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function Ly(e, t, a) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !a) ||
        ((e = Dt(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function Ws(e) {
    return (
      e.data === "$!" ||
      (e.data === "$?" && e.ownerDocument.readyState === "complete")
    );
  }
  function Uy(e, t) {
    var a = e.ownerDocument;
    if (e.data !== "$?" || a.readyState === "complete") t();
    else {
      var l = function () {
        t(), a.removeEventListener("DOMContentLoaded", l);
      };
      a.addEventListener("DOMContentLoaded", l), (e._reactRetry = l);
    }
  }
  function Dt(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (
          ((t = e.data),
          t === "$" || t === "$!" || t === "$?" || t === "F!" || t === "F")
        )
          break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  var Ps = null;
  function Sh(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var a = e.data;
        if (a === "$" || a === "$!" || a === "$?") {
          if (t === 0) return e;
          t--;
        } else a === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function Eh(e, t, a) {
    switch (((t = vu(a)), e)) {
      case "html":
        if (((e = t.documentElement), !e)) throw Error(r(452));
        return e;
      case "head":
        if (((e = t.head), !e)) throw Error(r(453));
        return e;
      case "body":
        if (((e = t.body), !e)) throw Error(r(454));
        return e;
      default:
        throw Error(r(451));
    }
  }
  function kn(e) {
    for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
    ar(e);
  }
  var Rt = new Map(),
    Ah = new Set();
  function gu(e) {
    return typeof e.getRootNode == "function"
      ? e.getRootNode()
      : e.nodeType === 9
      ? e
      : e.ownerDocument;
  }
  var ia = w.d;
  w.d = { f: qy, r: Hy, D: Gy, C: By, L: Yy, m: Xy, X: Vy, S: Zy, M: Qy };
  function qy() {
    var e = ia.f(),
      t = ru();
    return e || t;
  }
  function Hy(e) {
    var t = dl(e);
    t !== null && t.tag === 5 && t.type === "form" ? Xd(t) : ia.r(e);
  }
  var $l = typeof document > "u" ? null : document;
  function Th(e, t, a) {
    var l = $l;
    if (l && typeof t == "string" && t) {
      var n = bt(t);
      (n = 'link[rel="' + e + '"][href="' + n + '"]'),
        typeof a == "string" && (n += '[crossorigin="' + a + '"]'),
        Ah.has(n) ||
          (Ah.add(n),
          (e = { rel: e, crossOrigin: a, href: t }),
          l.querySelector(n) === null &&
            ((t = l.createElement("link")),
            ke(t, "link", e),
            Ye(t),
            l.head.appendChild(t)));
    }
  }
  function Gy(e) {
    ia.D(e), Th("dns-prefetch", e, null);
  }
  function By(e, t) {
    ia.C(e, t), Th("preconnect", e, t);
  }
  function Yy(e, t, a) {
    ia.L(e, t, a);
    var l = $l;
    if (l && e && t) {
      var n = 'link[rel="preload"][as="' + bt(t) + '"]';
      t === "image" && a && a.imageSrcSet
        ? ((n += '[imagesrcset="' + bt(a.imageSrcSet) + '"]'),
          typeof a.imageSizes == "string" &&
            (n += '[imagesizes="' + bt(a.imageSizes) + '"]'))
        : (n += '[href="' + bt(e) + '"]');
      var i = n;
      switch (t) {
        case "style":
          i = kl(e);
          break;
        case "script":
          i = Kl(e);
      }
      Rt.has(i) ||
        ((e = g(
          {
            rel: "preload",
            href: t === "image" && a && a.imageSrcSet ? void 0 : e,
            as: t,
          },
          a
        )),
        Rt.set(i, e),
        l.querySelector(n) !== null ||
          (t === "style" && l.querySelector(Kn(i))) ||
          (t === "script" && l.querySelector(In(i))) ||
          ((t = l.createElement("link")),
          ke(t, "link", e),
          Ye(t),
          l.head.appendChild(t)));
    }
  }
  function Xy(e, t) {
    ia.m(e, t);
    var a = $l;
    if (a && e) {
      var l = t && typeof t.as == "string" ? t.as : "script",
        n =
          'link[rel="modulepreload"][as="' + bt(l) + '"][href="' + bt(e) + '"]',
        i = n;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          i = Kl(e);
      }
      if (
        !Rt.has(i) &&
        ((e = g({ rel: "modulepreload", href: e }, t)),
        Rt.set(i, e),
        a.querySelector(n) === null)
      ) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(In(i))) return;
        }
        (l = a.createElement("link")),
          ke(l, "link", e),
          Ye(l),
          a.head.appendChild(l);
      }
    }
  }
  function Zy(e, t, a) {
    ia.S(e, t, a);
    var l = $l;
    if (l && e) {
      var n = ml(l).hoistableStyles,
        i = kl(e);
      t = t || "default";
      var f = n.get(i);
      if (!f) {
        var d = { loading: 0, preload: null };
        if ((f = l.querySelector(Kn(i)))) d.loading = 5;
        else {
          (e = g({ rel: "stylesheet", href: e, "data-precedence": t }, a)),
            (a = Rt.get(i)) && ec(e, a);
          var S = (f = l.createElement("link"));
          Ye(S),
            ke(S, "link", e),
            (S._p = new Promise(function (N, L) {
              (S.onload = N), (S.onerror = L);
            })),
            S.addEventListener("load", function () {
              d.loading |= 1;
            }),
            S.addEventListener("error", function () {
              d.loading |= 2;
            }),
            (d.loading |= 4),
            yu(f, t, l);
        }
        (f = { type: "stylesheet", instance: f, count: 1, state: d }),
          n.set(i, f);
      }
    }
  }
  function Vy(e, t) {
    ia.X(e, t);
    var a = $l;
    if (a && e) {
      var l = ml(a).hoistableScripts,
        n = Kl(e),
        i = l.get(n);
      i ||
        ((i = a.querySelector(In(n))),
        i ||
          ((e = g({ src: e, async: !0 }, t)),
          (t = Rt.get(n)) && tc(e, t),
          (i = a.createElement("script")),
          Ye(i),
          ke(i, "link", e),
          a.head.appendChild(i)),
        (i = { type: "script", instance: i, count: 1, state: null }),
        l.set(n, i));
    }
  }
  function Qy(e, t) {
    ia.M(e, t);
    var a = $l;
    if (a && e) {
      var l = ml(a).hoistableScripts,
        n = Kl(e),
        i = l.get(n);
      i ||
        ((i = a.querySelector(In(n))),
        i ||
          ((e = g({ src: e, async: !0, type: "module" }, t)),
          (t = Rt.get(n)) && tc(e, t),
          (i = a.createElement("script")),
          Ye(i),
          ke(i, "link", e),
          a.head.appendChild(i)),
        (i = { type: "script", instance: i, count: 1, state: null }),
        l.set(n, i));
    }
  }
  function xh(e, t, a, l) {
    var n = (n = le.current) ? gu(n) : null;
    if (!n) throw Error(r(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string"
          ? ((t = kl(a.href)),
            (a = ml(n).hoistableStyles),
            (l = a.get(t)),
            l ||
              ((l = { type: "style", instance: null, count: 0, state: null }),
              a.set(t, l)),
            l)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          a.rel === "stylesheet" &&
          typeof a.href == "string" &&
          typeof a.precedence == "string"
        ) {
          e = kl(a.href);
          var i = ml(n).hoistableStyles,
            f = i.get(e);
          if (
            (f ||
              ((n = n.ownerDocument || n),
              (f = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              i.set(e, f),
              (i = n.querySelector(Kn(e))) &&
                !i._p &&
                ((f.instance = i), (f.state.loading = 5)),
              Rt.has(e) ||
                ((a = {
                  rel: "preload",
                  as: "style",
                  href: a.href,
                  crossOrigin: a.crossOrigin,
                  integrity: a.integrity,
                  media: a.media,
                  hrefLang: a.hrefLang,
                  referrerPolicy: a.referrerPolicy,
                }),
                Rt.set(e, a),
                i || $y(n, e, a, f.state))),
            t && l === null)
          )
            throw Error(r(528, ""));
          return f;
        }
        if (t && l !== null) throw Error(r(529, ""));
        return null;
      case "script":
        return (
          (t = a.async),
          (a = a.src),
          typeof a == "string" &&
          t &&
          typeof t != "function" &&
          typeof t != "symbol"
            ? ((t = Kl(a)),
              (a = ml(n).hoistableScripts),
              (l = a.get(t)),
              l ||
                ((l = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                a.set(t, l)),
              l)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(r(444, e));
    }
  }
  function kl(e) {
    return 'href="' + bt(e) + '"';
  }
  function Kn(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Oh(e) {
    return g({}, e, { "data-precedence": e.precedence, precedence: null });
  }
  function $y(e, t, a, l) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]")
      ? (l.loading = 1)
      : ((t = e.createElement("link")),
        (l.preload = t),
        t.addEventListener("load", function () {
          return (l.loading |= 1);
        }),
        t.addEventListener("error", function () {
          return (l.loading |= 2);
        }),
        ke(t, "link", a),
        Ye(t),
        e.head.appendChild(t));
  }
  function Kl(e) {
    return '[src="' + bt(e) + '"]';
  }
  function In(e) {
    return "script[async]" + e;
  }
  function Rh(e, t, a) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case "style":
          var l = e.querySelector('style[data-href~="' + bt(a.href) + '"]');
          if (l) return (t.instance = l), Ye(l), l;
          var n = g({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null,
          });
          return (
            (l = (e.ownerDocument || e).createElement("style")),
            Ye(l),
            ke(l, "style", n),
            yu(l, a.precedence, e),
            (t.instance = l)
          );
        case "stylesheet":
          n = kl(a.href);
          var i = e.querySelector(Kn(n));
          if (i) return (t.state.loading |= 4), (t.instance = i), Ye(i), i;
          (l = Oh(a)),
            (n = Rt.get(n)) && ec(l, n),
            (i = (e.ownerDocument || e).createElement("link")),
            Ye(i);
          var f = i;
          return (
            (f._p = new Promise(function (d, S) {
              (f.onload = d), (f.onerror = S);
            })),
            ke(i, "link", l),
            (t.state.loading |= 4),
            yu(i, a.precedence, e),
            (t.instance = i)
          );
        case "script":
          return (
            (i = Kl(a.src)),
            (n = e.querySelector(In(i)))
              ? ((t.instance = n), Ye(n), n)
              : ((l = a),
                (n = Rt.get(i)) && ((l = g({}, a)), tc(l, n)),
                (e = e.ownerDocument || e),
                (n = e.createElement("script")),
                Ye(n),
                ke(n, "link", l),
                e.head.appendChild(n),
                (t.instance = n))
          );
        case "void":
          return null;
        default:
          throw Error(r(443, t.type));
      }
    else
      t.type === "stylesheet" &&
        (t.state.loading & 4) === 0 &&
        ((l = t.instance), (t.state.loading |= 4), yu(l, a.precedence, e));
    return t.instance;
  }
  function yu(e, t, a) {
    for (
      var l = a.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]'
        ),
        n = l.length ? l[l.length - 1] : null,
        i = n,
        f = 0;
      f < l.length;
      f++
    ) {
      var d = l[f];
      if (d.dataset.precedence === t) i = d;
      else if (i !== n) break;
    }
    i
      ? i.parentNode.insertBefore(e, i.nextSibling)
      : ((t = a.nodeType === 9 ? a.head : a), t.insertBefore(e, t.firstChild));
  }
  function ec(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.title == null && (e.title = t.title);
  }
  function tc(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.integrity == null && (e.integrity = t.integrity);
  }
  var pu = null;
  function _h(e, t, a) {
    if (pu === null) {
      var l = new Map(),
        n = (pu = new Map());
      n.set(a, l);
    } else (n = pu), (l = n.get(a)), l || ((l = new Map()), n.set(a, l));
    if (l.has(e)) return l;
    for (
      l.set(e, null), a = a.getElementsByTagName(e), n = 0;
      n < a.length;
      n++
    ) {
      var i = a[n];
      if (
        !(
          i[sn] ||
          i[Ke] ||
          (e === "link" && i.getAttribute("rel") === "stylesheet")
        ) &&
        i.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var f = i.getAttribute(t) || "";
        f = e + f;
        var d = l.get(f);
        d ? d.push(i) : l.set(f, [i]);
      }
    }
    return l;
  }
  function Nh(e, t, a) {
    (e = e.ownerDocument || e),
      e.head.insertBefore(
        a,
        t === "title" ? e.querySelector("head > title") : null
      );
  }
  function ky(e, t, a) {
    if (a === 1 || t.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof t.precedence != "string" ||
          typeof t.href != "string" ||
          t.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof t.rel != "string" ||
          typeof t.href != "string" ||
          t.href === "" ||
          t.onLoad ||
          t.onError
        )
          break;
        switch (t.rel) {
          case "stylesheet":
            return (
              (e = t.disabled), typeof t.precedence == "string" && e == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          t.async &&
          typeof t.async != "function" &&
          typeof t.async != "symbol" &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function jh(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  var Fn = null;
  function Ky() {}
  function Iy(e, t, a) {
    if (Fn === null) throw Error(r(475));
    var l = Fn;
    if (
      t.type === "stylesheet" &&
      (typeof a.media != "string" || matchMedia(a.media).matches !== !1) &&
      (t.state.loading & 4) === 0
    ) {
      if (t.instance === null) {
        var n = kl(a.href),
          i = e.querySelector(Kn(n));
        if (i) {
          (e = i._p),
            e !== null &&
              typeof e == "object" &&
              typeof e.then == "function" &&
              (l.count++, (l = bu.bind(l)), e.then(l, l)),
            (t.state.loading |= 4),
            (t.instance = i),
            Ye(i);
          return;
        }
        (i = e.ownerDocument || e),
          (a = Oh(a)),
          (n = Rt.get(n)) && ec(a, n),
          (i = i.createElement("link")),
          Ye(i);
        var f = i;
        (f._p = new Promise(function (d, S) {
          (f.onload = d), (f.onerror = S);
        })),
          ke(i, "link", a),
          (t.instance = i);
      }
      l.stylesheets === null && (l.stylesheets = new Map()),
        l.stylesheets.set(t, e),
        (e = t.state.preload) &&
          (t.state.loading & 3) === 0 &&
          (l.count++,
          (t = bu.bind(l)),
          e.addEventListener("load", t),
          e.addEventListener("error", t));
    }
  }
  function Fy() {
    if (Fn === null) throw Error(r(475));
    var e = Fn;
    return (
      e.stylesheets && e.count === 0 && ac(e, e.stylesheets),
      0 < e.count
        ? function (t) {
            var a = setTimeout(function () {
              if ((e.stylesheets && ac(e, e.stylesheets), e.unsuspend)) {
                var l = e.unsuspend;
                (e.unsuspend = null), l();
              }
            }, 6e4);
            return (
              (e.unsuspend = t),
              function () {
                (e.unsuspend = null), clearTimeout(a);
              }
            );
          }
        : null
    );
  }
  function bu() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) ac(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        (this.unsuspend = null), e();
      }
    }
  }
  var Su = null;
  function ac(e, t) {
    (e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++,
        (Su = new Map()),
        t.forEach(Jy, e),
        (Su = null),
        bu.call(e));
  }
  function Jy(e, t) {
    if (!(t.state.loading & 4)) {
      var a = Su.get(e);
      if (a) var l = a.get(null);
      else {
        (a = new Map()), Su.set(e, a);
        for (
          var n = e.querySelectorAll(
              "link[data-precedence],style[data-precedence]"
            ),
            i = 0;
          i < n.length;
          i++
        ) {
          var f = n[i];
          (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") &&
            (a.set(f.dataset.precedence, f), (l = f));
        }
        l && a.set(null, l);
      }
      (n = t.instance),
        (f = n.getAttribute("data-precedence")),
        (i = a.get(f) || l),
        i === l && a.set(null, n),
        a.set(f, n),
        this.count++,
        (l = bu.bind(this)),
        n.addEventListener("load", l),
        n.addEventListener("error", l),
        i
          ? i.parentNode.insertBefore(n, i.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e),
            e.insertBefore(n, e.firstChild)),
        (t.state.loading |= 4);
    }
  }
  var Jn = {
    $$typeof: F,
    Provider: null,
    Consumer: null,
    _currentValue: G,
    _currentValue2: G,
    _threadCount: 0,
  };
  function Wy(e, t, a, l, n, i, f, d) {
    (this.tag = 1),
      (this.containerInfo = e),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = Wu(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Wu(0)),
      (this.hiddenUpdates = Wu(null)),
      (this.identifierPrefix = l),
      (this.onUncaughtError = n),
      (this.onCaughtError = i),
      (this.onRecoverableError = f),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = d),
      (this.incompleteTransitions = new Map());
  }
  function zh(e, t, a, l, n, i, f, d, S, N, L, q) {
    return (
      (e = new Wy(e, t, a, f, d, S, N, q)),
      (t = 1),
      i === !0 && (t |= 24),
      (i = ft(3, null, null, t)),
      (e.current = i),
      (i.stateNode = e),
      (t = qr()),
      t.refCount++,
      (e.pooledCache = t),
      t.refCount++,
      (i.memoizedState = { element: l, isDehydrated: a, cache: t }),
      Yr(i),
      e
    );
  }
  function Dh(e) {
    return e ? ((e = Ol), e) : Ol;
  }
  function Ch(e, t, a, l, n, i) {
    (n = Dh(n)),
      l.context === null ? (l.context = n) : (l.pendingContext = n),
      (l = pa(t)),
      (l.payload = { element: a }),
      (i = i === void 0 ? null : i),
      i !== null && (l.callback = i),
      (a = ba(e, l, t)),
      a !== null && (vt(a, e, t), _n(a, e, t));
  }
  function Mh(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var a = e.retryLane;
      e.retryLane = a !== 0 && a < t ? a : t;
    }
  }
  function lc(e, t) {
    Mh(e, t), (e = e.alternate) && Mh(e, t);
  }
  function wh(e) {
    if (e.tag === 13) {
      var t = xl(e, 67108864);
      t !== null && vt(t, e, 67108864), lc(e, 67108864);
    }
  }
  var Eu = !0;
  function Py(e, t, a, l) {
    var n = O.T;
    O.T = null;
    var i = w.p;
    try {
      (w.p = 2), nc(e, t, a, l);
    } finally {
      (w.p = i), (O.T = n);
    }
  }
  function ep(e, t, a, l) {
    var n = O.T;
    O.T = null;
    var i = w.p;
    try {
      (w.p = 8), nc(e, t, a, l);
    } finally {
      (w.p = i), (O.T = n);
    }
  }
  function nc(e, t, a, l) {
    if (Eu) {
      var n = ic(l);
      if (n === null) Qs(e, t, l, Au, a), Uh(e, l);
      else if (ap(n, e, t, a, l)) l.stopPropagation();
      else if ((Uh(e, l), t & 4 && -1 < tp.indexOf(e))) {
        for (; n !== null; ) {
          var i = dl(n);
          if (i !== null)
            switch (i.tag) {
              case 3:
                if (((i = i.stateNode), i.current.memoizedState.isDehydrated)) {
                  var f = Xa(i.pendingLanes);
                  if (f !== 0) {
                    var d = i;
                    for (d.pendingLanes |= 2, d.entangledLanes |= 2; f; ) {
                      var S = 1 << (31 - st(f));
                      (d.entanglements[1] |= S), (f &= ~S);
                    }
                    Zt(i), (be & 6) === 0 && ((iu = Ht() + 500), Vn(0));
                  }
                }
                break;
              case 13:
                (d = xl(i, 2)), d !== null && vt(d, i, 2), ru(), lc(i, 2);
            }
          if (((i = ic(l)), i === null && Qs(e, t, l, Au, a), i === n)) break;
          n = i;
        }
        n !== null && l.stopPropagation();
      } else Qs(e, t, l, null, a);
    }
  }
  function ic(e) {
    return (e = fr(e)), uc(e);
  }
  var Au = null;
  function uc(e) {
    if (((Au = null), (e = ol(e)), e !== null)) {
      var t = v(e);
      if (t === null) e = null;
      else {
        var a = t.tag;
        if (a === 13) {
          if (((e = m(t)), e !== null)) return e;
          e = null;
        } else if (a === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return (Au = e), null;
  }
  function Lh(e) {
    switch (e) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Bg()) {
          case Kf:
            return 2;
          case If:
            return 8;
          case hi:
          case Yg:
            return 32;
          case Ff:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var rc = !1,
    Ca = null,
    Ma = null,
    wa = null,
    Wn = new Map(),
    Pn = new Map(),
    La = [],
    tp =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " "
      );
  function Uh(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Ca = null;
        break;
      case "dragenter":
      case "dragleave":
        Ma = null;
        break;
      case "mouseover":
      case "mouseout":
        wa = null;
        break;
      case "pointerover":
      case "pointerout":
        Wn.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Pn.delete(t.pointerId);
    }
  }
  function ei(e, t, a, l, n, i) {
    return e === null || e.nativeEvent !== i
      ? ((e = {
          blockedOn: t,
          domEventName: a,
          eventSystemFlags: l,
          nativeEvent: i,
          targetContainers: [n],
        }),
        t !== null && ((t = dl(t)), t !== null && wh(t)),
        e)
      : ((e.eventSystemFlags |= l),
        (t = e.targetContainers),
        n !== null && t.indexOf(n) === -1 && t.push(n),
        e);
  }
  function ap(e, t, a, l, n) {
    switch (t) {
      case "focusin":
        return (Ca = ei(Ca, e, t, a, l, n)), !0;
      case "dragenter":
        return (Ma = ei(Ma, e, t, a, l, n)), !0;
      case "mouseover":
        return (wa = ei(wa, e, t, a, l, n)), !0;
      case "pointerover":
        var i = n.pointerId;
        return Wn.set(i, ei(Wn.get(i) || null, e, t, a, l, n)), !0;
      case "gotpointercapture":
        return (
          (i = n.pointerId), Pn.set(i, ei(Pn.get(i) || null, e, t, a, l, n)), !0
        );
    }
    return !1;
  }
  function qh(e) {
    var t = ol(e.target);
    if (t !== null) {
      var a = v(t);
      if (a !== null) {
        if (((t = a.tag), t === 13)) {
          if (((t = m(a)), t !== null)) {
            (e.blockedOn = t),
              Ig(e.priority, function () {
                if (a.tag === 13) {
                  var l = ht();
                  l = Pu(l);
                  var n = xl(a, l);
                  n !== null && vt(n, a, l), lc(a, l);
                }
              });
            return;
          }
        } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Tu(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var a = ic(e.nativeEvent);
      if (a === null) {
        a = e.nativeEvent;
        var l = new a.constructor(a.type, a);
        (cr = l), a.target.dispatchEvent(l), (cr = null);
      } else return (t = dl(a)), t !== null && wh(t), (e.blockedOn = a), !1;
      t.shift();
    }
    return !0;
  }
  function Hh(e, t, a) {
    Tu(e) && a.delete(t);
  }
  function lp() {
    (rc = !1),
      Ca !== null && Tu(Ca) && (Ca = null),
      Ma !== null && Tu(Ma) && (Ma = null),
      wa !== null && Tu(wa) && (wa = null),
      Wn.forEach(Hh),
      Pn.forEach(Hh);
  }
  function xu(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      rc ||
        ((rc = !0),
        u.unstable_scheduleCallback(u.unstable_NormalPriority, lp)));
  }
  var Ou = null;
  function Gh(e) {
    Ou !== e &&
      ((Ou = e),
      u.unstable_scheduleCallback(u.unstable_NormalPriority, function () {
        Ou === e && (Ou = null);
        for (var t = 0; t < e.length; t += 3) {
          var a = e[t],
            l = e[t + 1],
            n = e[t + 2];
          if (typeof l != "function") {
            if (uc(l || a) === null) continue;
            break;
          }
          var i = dl(a);
          i !== null &&
            (e.splice(t, 3),
            (t -= 3),
            us(i, { pending: !0, data: n, method: a.method, action: l }, l, n));
        }
      }));
  }
  function ti(e) {
    function t(S) {
      return xu(S, e);
    }
    Ca !== null && xu(Ca, e),
      Ma !== null && xu(Ma, e),
      wa !== null && xu(wa, e),
      Wn.forEach(t),
      Pn.forEach(t);
    for (var a = 0; a < La.length; a++) {
      var l = La[a];
      l.blockedOn === e && (l.blockedOn = null);
    }
    for (; 0 < La.length && ((a = La[0]), a.blockedOn === null); )
      qh(a), a.blockedOn === null && La.shift();
    if (((a = (e.ownerDocument || e).$$reactFormReplay), a != null))
      for (l = 0; l < a.length; l += 3) {
        var n = a[l],
          i = a[l + 1],
          f = n[et] || null;
        if (typeof i == "function") f || Gh(a);
        else if (f) {
          var d = null;
          if (i && i.hasAttribute("formAction")) {
            if (((n = i), (f = i[et] || null))) d = f.formAction;
            else if (uc(n) !== null) continue;
          } else d = f.action;
          typeof d == "function" ? (a[l + 1] = d) : (a.splice(l, 3), (l -= 3)),
            Gh(a);
        }
      }
  }
  function sc(e) {
    this._internalRoot = e;
  }
  (Ru.prototype.render = sc.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(r(409));
      var a = t.current,
        l = ht();
      Ch(a, l, e, t, null, null);
    }),
    (Ru.prototype.unmount = sc.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          Ch(e.current, 2, null, e, null, null), ru(), (t[fl] = null);
        }
      });
  function Ru(e) {
    this._internalRoot = e;
  }
  Ru.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = to();
      e = { blockedOn: null, target: e, priority: t };
      for (var a = 0; a < La.length && t !== 0 && t < La[a].priority; a++);
      La.splice(a, 0, e), a === 0 && qh(e);
    }
  };
  var Bh = c.version;
  if (Bh !== "19.1.1") throw Error(r(527, Bh, "19.1.1"));
  w.findDOMNode = function (e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function"
        ? Error(r(188))
        : ((e = Object.keys(e).join(",")), Error(r(268, e)));
    return (
      (e = y(t)),
      (e = e !== null ? h(e) : null),
      (e = e === null ? null : e.stateNode),
      e
    );
  };
  var np = {
    bundleType: 0,
    version: "19.1.1",
    rendererPackageName: "react-dom",
    currentDispatcherRef: O,
    reconcilerVersion: "19.1.1",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var _u = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!_u.isDisabled && _u.supportsFiber)
      try {
        (nn = _u.inject(np)), (rt = _u);
      } catch {}
  }
  return (
    (li.createRoot = function (e, t) {
      if (!o(e)) throw Error(r(299));
      var a = !1,
        l = "",
        n = am,
        i = lm,
        f = nm,
        d = null;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (a = !0),
          t.identifierPrefix !== void 0 && (l = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (n = t.onUncaughtError),
          t.onCaughtError !== void 0 && (i = t.onCaughtError),
          t.onRecoverableError !== void 0 && (f = t.onRecoverableError),
          t.unstable_transitionCallbacks !== void 0 &&
            (d = t.unstable_transitionCallbacks)),
        (t = zh(e, 1, !1, null, null, a, l, n, i, f, d, null)),
        (e[fl] = t.current),
        Vs(e),
        new sc(t)
      );
    }),
    (li.hydrateRoot = function (e, t, a) {
      if (!o(e)) throw Error(r(299));
      var l = !1,
        n = "",
        i = am,
        f = lm,
        d = nm,
        S = null,
        N = null;
      return (
        a != null &&
          (a.unstable_strictMode === !0 && (l = !0),
          a.identifierPrefix !== void 0 && (n = a.identifierPrefix),
          a.onUncaughtError !== void 0 && (i = a.onUncaughtError),
          a.onCaughtError !== void 0 && (f = a.onCaughtError),
          a.onRecoverableError !== void 0 && (d = a.onRecoverableError),
          a.unstable_transitionCallbacks !== void 0 &&
            (S = a.unstable_transitionCallbacks),
          a.formState !== void 0 && (N = a.formState)),
        (t = zh(e, 1, !0, t, a ?? null, l, n, i, f, d, S, N)),
        (t.context = Dh(null)),
        (a = t.current),
        (l = ht()),
        (l = Pu(l)),
        (n = pa(l)),
        (n.callback = null),
        ba(a, n, l),
        (a = l),
        (t.current.lanes = a),
        rn(t, a),
        Zt(t),
        (e[fl] = t.current),
        Vs(e),
        new Ru(t)
      );
    }),
    (li.version = "19.1.1"),
    li
  );
}
var Fh;
function hp() {
  if (Fh) return oc.exports;
  Fh = 1;
  function u() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
      } catch (c) {
        console.error(c);
      }
  }
  return u(), (oc.exports = mp()), oc.exports;
}
var vp = hp();
const gp = "_instructionBtn_1chbo_171",
  ua = {
    "grand-container": "_grand-container_1chbo_1",
    "parent-container": "_parent-container_1chbo_17",
    "top-container": "_top-container_1chbo_51",
    "middle-container": "_middle-container_1chbo_75",
    "button-container": "_button-container_1chbo_89",
    "middle-panel-container": "_middle-panel-container_1chbo_117",
    "bottom-container": "_bottom-container_1chbo_147",
    instructionBtn: gp,
  },
  yp = { "top-container": "_top-container_16fg4_1" },
  pp = () =>
    T.jsx("div", {
      className: yp["top-container"],
      children: T.jsx("h2", {
        children:
          "Awareness of a Biomedical System Used for Monitoring Biomedical Signals",
      }),
    }),
  bp = "_instructions_1sj51_1",
  Sp = "_insHeading_1sj51_21",
  Ep = "_steps_1sj51_41",
  Ap = "_stepText_1sj51_77",
  qa = { instructions: bp, insHeading: Sp, steps: Ep, stepText: Ap },
  Tp = () =>
    T.jsx("div", {
      children: T.jsx("div", {
        className: qa.instructions,
        id: "instTab",
        children: T.jsxs("div", {
          children: [
            T.jsx("p", { className: qa.insHeading, children: "Instructions" }),
            T.jsxs("ul", {
              className: qa.steps,
              children: [
                T.jsxs("li", {
                  children: [
                    T.jsx("p", {
                      children: T.jsx("b", { children: "Step 1:" }),
                    }),
                    T.jsx("p", {
                      className: qa.stepText,
                      children:
                        "The aim of this experiment is to get familiarized with the biomdecal systems.",
                    }),
                  ],
                }),
                T.jsxs("li", {
                  children: [
                    T.jsx("p", {
                      children: T.jsx("b", { children: "Step 2:" }),
                    }),
                    T.jsxs("p", {
                      className: qa.stepText,
                      children: [
                        "Click on ",
                        T.jsx("span", { children: "Next" }),
                        " Button to view the next biomdecal system component.",
                      ],
                    }),
                  ],
                }),
                T.jsxs("li", {
                  children: [
                    T.jsx("p", {
                      children: T.jsx("b", { children: "Step 3:" }),
                    }),
                    T.jsxs("p", {
                      className: qa.stepText,
                      children: [
                        "Click on ",
                        T.jsx("span", { children: "Previous" }),
                        " button to go back to previous biomdecal component.",
                      ],
                    }),
                  ],
                }),
                T.jsxs("li", {
                  children: [
                    T.jsx("p", {
                      children: T.jsx("b", { children: "Step 4:" }),
                    }),
                    T.jsxs("p", {
                      className: qa.stepText,
                      children: [
                        "Click on the ",
                        T.jsx("span", { children: "labeled image" }),
                        " or ",
                        T.jsx("span", { children: "Button" }),
                        " of each biomedical system component to explore its  role and functionality",
                      ],
                    }),
                  ],
                }),
                T.jsxs("li", {
                  children: [
                    T.jsx("p", {
                      children: T.jsx("b", { children: "Step 5:" }),
                    }),
                    T.jsxs("p", {
                      className: qa.stepText,
                      children: [
                        "Repeat ",
                        T.jsx("span", { children: "Step 2" }),
                        " and ",
                        T.jsx("span", { children: "Step 3" }),
                        " until you reach the end of the experiment.",
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    }),
  xp = "_middlePanelWrapper_169do_47",
  Op = "_contentArea_169do_59",
  Rp = "_instructionPanel_169do_69",
  _p = "_fadeIn_169do_87",
  Np = "_fadeOut_169do_95",
  ul = {
    middlePanelWrapper: xp,
    contentArea: Op,
    instructionPanel: Rp,
    fadeIn: _p,
    fadeOut: Np,
  },
  jp = "_eegCap_1tgd2_1",
  zp = "_sliderTitle_1tgd2_19",
  Dp = "_sliderContainer_1tgd2_33",
  Cp = "_eegCapcontainer_1tgd2_49",
  Mp = "_eegCapImage_1tgd2_69",
  wp = "_sliderButton_1tgd2_99",
  Lp = "_indicators_1tgd2_147",
  Up = "_indicator_1tgd2_147",
  qp = "_activeIndicator_1tgd2_179",
  Hp = "_lobedescription_1tgd2_187",
  Gp = "_eegCapDescription_1tgd2_223",
  _t = {
    eegCap: jp,
    sliderTitle: zp,
    sliderContainer: Dp,
    eegCapcontainer: Cp,
    eegCapImage: Mp,
    sliderButton: wp,
    indicators: Lp,
    indicator: Up,
    activeIndicator: qp,
    lobedescription: Hp,
    eegCapDescription: Gp,
  },
  Jh = "assets/frontlobe-BBM7-7tx.png",
  vc = "assets/backlobe-eV-Tps0f.png",
  Bp = "assets/rightlobe-DyL9Xzpn.png",
  Yp = "assets/Lobes-TvqP3bpY.png",
  Xp = () => {
    const [u, c] = Ge.useState(0),
      s = [
        {
          src: Yp,
          alt: "Lobes",
          title: "Lobes",
          description:
            "The brain has six lobes — Frontal, Prefrontal, Occipital, Parietal, Temporal, and Central — each with dedicated electrodes for recording EEG activity.",
        },
        {
          src: Jh,
          alt: "Front Lobe",
          title: "Frontal Lobe",
          description:
            "Frontal lobe: Located at the front of the brain, Responsible for higher functions like thinking, decision making, and voluntary movement. examle: Fz, F3, F4, F7,F8",
        },
        {
          src: Jh,
          alt: "Front Lobe",
          title: "PreFrontal Lobe",
          description:
            "PreFrontal lobe: located just above the forehead, linked to attention and behavior. Examples: Fp1, Fp2",
        },
        {
          src: vc,
          alt: "Back Lobe",
          title: "Occipital Lobe",
          description:
            "Occipital lobe: Located at the back of the brain, primarily responsible for visual processing. Examples: O1, O2.",
        },
        {
          src: vc,
          alt: "backlobe Lobe",
          title: "Parietal Lobe",
          description:
            "Parietal lobe: Located at the back-top of the head, processes sensory information and spatial awareness.Example: Pz, P3, P4, P7, P8",
        },
        {
          src: Bp,
          alt: "Right Lobe",
          title: "Temporal Lobe",
          description:
            "Temporal lobe: Found near the ears, important for hearing and language processing. Example: T7, T8.",
        },
        {
          src: vc,
          alt: "Back Lobe",
          title: "Central Lobe",
          description:
            "Central lobe: Located along the midline of the head, Commonly used in motor function, movement, and brain–computer interface studies. Examples: Cz, C3, C4.",
        },
      ],
      r = Ge.useCallback(() => {
        c((v) => (v < s.length - 1 ? v + 1 : v));
      }, [s.length]),
      o = Ge.useCallback(() => {
        c((v) => (v > 0 ? v - 1 : v));
      }, []);
    return (
      Ge.useEffect(() => {
        const v = (m) => {
          m.key === "ArrowRight" && u < s.length - 1
            ? r()
            : m.key === "ArrowLeft" && u > 0 && o();
        };
        return (
          window.addEventListener("keydown", v),
          () => window.removeEventListener("keydown", v)
        );
      }, [u, s.length, r, o]),
      T.jsxs("div", {
        className: _t.eegCap,
        children: [
          T.jsxs("div", {
            children: [
              T.jsx("h2", { className: _t.sliderTitle, children: s[u].title }),
              T.jsxs("div", {
                className: _t.sliderContainer,
                children: [
                  T.jsx("button", {
                    className: _t.sliderButton,
                    onClick: o,
                    disabled: u === 0,
                    children: "<",
                  }),
                  T.jsx("div", {
                    className: _t.eegCapcontainer,
                    children: T.jsx(
                      "img",
                      {
                        className: _t.eegCapImage,
                        src: s[u].src,
                        alt: s[u].alt,
                      },
                      u
                    ),
                  }),
                  T.jsx("button", {
                    className: _t.sliderButton,
                    onClick: r,
                    disabled: u === s.length - 1,
                    children: ">",
                  }),
                ],
              }),
              T.jsx("div", {
                className: _t.indicators,
                children: s.map((v, m) =>
                  T.jsx(
                    "div",
                    {
                      className: `${_t.indicator} ${
                        m === u ? _t.activeIndicator : ""
                      }`,
                      onClick: () => c(m),
                    },
                    m
                  )
                ),
              }),
              T.jsx("div", {
                className: _t.lobedescription,
                children: T.jsx("p", { children: s[u].description }),
              }),
            ],
          }),
          T.jsxs("div", {
            className: _t.eegCapDescription,
            children: [
              T.jsx("h4", { children: "EEG(Electroencephalogram) Cap" }),
              T.jsx("p", {
                children:
                  "An EEG cap is a head-mounted device used on the scalp to record the brain’s electrical activity. It holds multiple electrodes arranged according to the international 10–20 system, ensuring standardized placement. These electrodes detect weak neural signals (1–150 µV) from different brain regions and transmit them to an amplifier and display system for analysis",
              }),
              T.jsx("h4", {
                children: "Electrode Placement and Brain Regions",
              }),
              T.jsx("p", {
                children:
                  "In the 10–20 system, electrodes are named according to the brain lobe they cover:",
              }),
              T.jsxs("ul", {
                children: [
                  T.jsx("li", { children: "Frontal lobe" }),
                  T.jsx("li", { children: "Central region " }),
                  T.jsx("li", { children: "Temporal lobe " }),
                  T.jsx("li", { children: "Occipital lobe " }),
                  T.jsx("li", { children: "Prefrontal region " }),
                  T.jsx("li", { children: "Parietal lobe" }),
                ],
              }),
              T.jsx("h4", { children: "Gel Usage" }),
              T.jsxs("ul", {
                children: [
                  T.jsxs("li", {
                    children: [
                      T.jsx("b", { children: "Wet electrodes (with gel):" }),
                      " Provide low impedance and high-quality recordings, standard in clinical use.",
                    ],
                  }),
                  T.jsxs("li", {
                    children: [
                      T.jsx("b", { children: "Dry electrodes (without gel):" }),
                      " Faster setup and portable, but with higher impedance and lower accuracy.",
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      })
    );
  },
  Zp = "assets/human-body-BWATHO7U.png",
  Vp = "assets/disposable-ecg-electrode-BFwP5KQO.png",
  R0 = "assets/opAmp-iCwFkLYM.png",
  _0 = "assets/ecgMonitor-BFHQF816.png",
  Qp = "_container_178wr_1",
  $p = "_arrow_178wr_19",
  Wh = { container: Qp, arrow: $p },
  ni = () =>
    T.jsx("div", {
      className: Wh.container,
      children: T.jsx("div", { className: Wh.arrow }),
    }),
  kp = "assets/animationStep1-DgePtddf.mp3",
  Kp = "assets/animationStep2-ZCUAHSKH.mp3",
  Ip = "assets/animationStep3-GBB909-P.mp3",
  Fp = "assets/animationStep4-rAz570Jn.mp3",
  Jp = "assets/animationStep5-rJ4Hw_eu.mp3",
  Wp = "assets/animationStep6-CVKWCdfk.mp3",
  Pp = [kp, Kp, Ip, Fp, Jp, Wp],
  eb = () => {
    const [u, c] = Ge.useState(!1),
      [s, r] = Ge.useState(!1),
      [o, v] = Ge.useState(0),
      m = Ge.useRef(!1),
      p = Ge.useRef(Pp.map((E) => new Audio(E))),
      y = () => {
        console.log("handlePlay pressed", s),
          m.current
            ? (p.current[o] &&
                (p.current[o].pause(), (p.current[o].currentTime = 0)),
              r(!1),
              (m.current = !1))
            : (console.log("currentStepIndex", o),
              u && p.current[o] && p.current[o].play(),
              r(!0),
              (m.current = !0));
      };
    function h() {
      if (u) return;
      r(!0),
        (m.current = !0),
        console.log("startSignalFlowAnimation pressed", s),
        v(0),
        c(!0);
      const E = document.querySelectorAll(".flow-stage"),
        R = document.querySelectorAll(".flow-arrow");
      E.forEach((Z) => Z.classList.remove("active")),
        R.forEach((Z) => Z.classList.remove("active"));
      const z = [0, 9e3, 19e3, 33e3, 48e3, 62e3];
      z.forEach((Z, M) => {
        setTimeout(() => {
          E[M] && E[M].classList.add("active"),
            R[M] && M < R.length && R[M].classList.add("active"),
            p.current.forEach(($) => {
              $.pause(), ($.currentTime = 0);
            }),
            v(M),
            m.current && p.current[M] && p.current[M].play(),
            M === z.length - 1 && setTimeout(() => c(!1), 1e3);
        }, Z);
      });
    }
    function g() {
      if (u) return;
      console.log("resetAnimation pressed", s);
      const E = document.querySelectorAll(".flow-stage"),
        R = document.querySelectorAll(".flow-arrow");
      E.forEach((z) => z.classList.remove("active")),
        R.forEach((z) => z.classList.remove("active")),
        p.current.forEach((z) => {
          z.pause(), (z.currentTime = 0);
        }),
        r(!1),
        (m.current = !1),
        c(!1),
        v(0);
    }
    return T.jsx("div", {
      className: "slide",
      "data-slide": "5",
      children: T.jsxs("div", {
        className: "slide-content",
        children: [
          T.jsx("h2", {
            children:
              "Block Diagram - Complete signal flow from human body to display",
          }),
          T.jsx("p", {
            children:
              "Watch how biomedical signals travel from the human body to the display screen",
          }),
          T.jsxs("div", {
            className: "animation-container",
            children: [
              T.jsxs("div", {
                className: "signal-flow-diagram",
                children: [
                  T.jsxs("div", {
                    className: "flow-stage",
                    "data-stage": "0",
                    children: [
                      T.jsx("div", {
                        className: "stage-icon",
                        children: T.jsx("img", {
                          src: Zp,
                          width: 70,
                          height: 100,
                          alt: "Human Body",
                        }),
                      }),
                      T.jsx("div", {
                        className: "stage-label",
                        children: "Human Body",
                      }),
                      T.jsx("div", {
                        className: "stage-description",
                        children: "Generates electrical signals",
                      }),
                    ],
                  }),
                  T.jsx("div", {
                    className: "flow-arrow",
                    "data-stage": "1",
                    children: T.jsx(ni, {}),
                  }),
                  T.jsxs("div", {
                    className: "flow-stage",
                    "data-stage": "1",
                    children: [
                      T.jsx("div", {
                        className: "stage-icon",
                        children: T.jsx("img", {
                          src: Vp,
                          width: 100,
                          height: 100,
                          alt: "Electrodes",
                        }),
                      }),
                      T.jsx("div", {
                        className: "stage-label",
                        children: "Electrodes",
                      }),
                      T.jsx("div", {
                        className: "stage-description",
                        children: "Detect ionic currents",
                      }),
                    ],
                  }),
                  T.jsx("div", {
                    className: "flow-arrow",
                    "data-stage": "2",
                    children: T.jsx(ni, {}),
                  }),
                  T.jsxs("div", {
                    className: "flow-stage",
                    "data-stage": "2",
                    children: [
                      T.jsx("div", {
                        className: "stage-icon",
                        children: T.jsx("img", {
                          src: R0,
                          width: 100,
                          height: 100,
                          alt: "Pre-amplifier",
                        }),
                      }),
                      T.jsx("div", {
                        className: "stage-label",
                        children: "Amplifier",
                      }),
                      T.jsx("div", {
                        className: "stage-description",
                        children: "Boost signal strength",
                      }),
                    ],
                  }),
                  T.jsx("div", {
                    className: "flow-arrow",
                    "data-stage": "3",
                    children: T.jsx(ni, {}),
                  }),
                  T.jsxs("div", {
                    className: "flow-stage",
                    "data-stage": "3",
                    children: [
                      T.jsx("div", {
                        className: "stage-icon",
                        style: {
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        },
                        children: T.jsx("div", {
                          className: "filter-box",
                          children: "Proposed Filter",
                        }),
                      }),
                      T.jsx("div", {
                        className: "stage-description",
                        children: "Remove noise & artifacts",
                      }),
                    ],
                  }),
                  T.jsx("div", {
                    className: "flow-arrow",
                    "data-stage": "5",
                    children: T.jsx(ni, {}),
                  }),
                  T.jsxs("div", {
                    className: "flow-stage",
                    "data-stage": "5",
                    children: [
                      T.jsx("div", {
                        className: "stage-icon",
                        style: {
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        },
                        children: T.jsx("div", {
                          className: "adc-box",
                          children: "ADC",
                        }),
                      }),
                      T.jsx("div", {
                        className: "stage-description",
                        children: "Analog to digital conversion",
                      }),
                    ],
                  }),
                  T.jsx("div", {
                    className: "flow-arrow",
                    "data-stage": "7",
                    children: T.jsx(ni, {}),
                  }),
                  T.jsxs("div", {
                    className: "flow-stage",
                    "data-stage": "7",
                    children: [
                      T.jsx("div", {
                        className: "stage-icon",
                        children: T.jsx("img", {
                          src: _0,
                          width: 100,
                          height: 100,
                          alt: "ECG Monitor",
                        }),
                      }),
                      T.jsx("div", {
                        className: "stage-label",
                        children: "Display",
                      }),
                      T.jsx("div", {
                        className: "stage-description",
                        children: "Visual representation",
                      }),
                    ],
                  }),
                ],
              }),
              T.jsxs("div", {
                className: "animation-controls",
                children: [
                  T.jsx("button", {
                    className: "btn-exp2-speech",
                    id: "playBtn",
                    onClick: y,
                    children: s ? "⏸️ Pause" : "▶️ Play",
                  }),
                  T.jsx("button", {
                    className: "btn-exp2-start",
                    id: "startAnimation",
                    onClick: h,
                    children: "Start Animation",
                  }),
                  T.jsx("button", {
                    className: "btn-exp2-reset",
                    id: "resetAnimation",
                    disabled: u,
                    onClick: g,
                    children: "Reset",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  },
  tb = "_container_70rzs_1",
  ab = "_header_70rzs_11",
  lb = "_gallery_70rzs_39",
  nb = "_card_70rzs_53",
  ib = "_transducerImage_70rzs_77",
  ub = "_infoBox_70rzs_121",
  Il = {
    container: tb,
    header: ab,
    gallery: lb,
    card: nb,
    transducerImage: ib,
    infoBox: ub,
  },
  rb = "assets/needleElectrode-ZajkY5Le.png",
  sb = "assets/disposableElectrodes-Cm_bW7k7.png",
  cb = "assets/suctionCupElectrodes-BCKpl6OT.png",
  fb = "assets/microElectrode-ChjMFTk8.png",
  Fl = {
    suctionCupElectrodes: {
      title: "Suction Cup Surface Electrode",
      img: cb,
      info: "Cup-shaped electrode with suction mechanism to attach to skin without adhesives. Used for ECG chest leads.",
    },
    disposableElectrodes: {
      title: "Disposable Surface Electrode",
      img: sb,
      info: "Adhesive electrodes with conductive gel. Widely used for ECG, EEG, and EMG monitoring. Hygienic and single-use.",
    },
    needleElectrode: {
      title: "Needle Electrode",
      img: rb,
      info: "Electrodes used to penetrate the skin to record EEG potentials from a local region of the brain or EMG potentials from a specific group of muscles.",
    },
    microElectrode: {
      title: "Microelectrode",
      img: fb,
      info: "Very fine electrodes used to record bioelectric potentials near or within a single cell.",
    },
  },
  ob = () => {
    const [u, c] = Ge.useState(null);
    return T.jsxs("div", {
      className: Il.container,
      children: [
        T.jsxs("div", {
          className: Il.header,
          children: [
            T.jsx("h2", { children: "Working of Electrodes" }),
            T.jsx("p", {
              children:
                "Electrodes act as biomedical transducers that convert the body’s ionic currents into electrical signals. These signals are then amplified and processed to display biomedical waveforms such as ECG, EEG, or EMG.",
            }),
          ],
        }),
        T.jsx("div", {
          className: Il.gallery,
          children: Object.keys(Fl).map((s) =>
            T.jsxs(
              "div",
              {
                className: Il.card,
                onClick: () => c(s),
                children: [
                  T.jsx("img", {
                    src: Fl[s].img,
                    alt: Fl[s].title,
                    className: Il.transducerImage,
                  }),
                  T.jsx("p", { children: Fl[s].title }),
                ],
              },
              s
            )
          ),
        }),
        u &&
          T.jsxs("div", {
            className: Il.infoBox,
            children: [
              T.jsx("h3", { children: Fl[u].title }),
              T.jsx("ul", { children: T.jsx("li", { children: Fl[u].info }) }),
            ],
          }),
      ],
    });
  },
  db = "_container_1vwzz_1",
  mb = "_content_1vwzz_17",
  hb = "_humanBodyContainer_1vwzz_27",
  vb = "_buttonContainer_1vwzz_47",
  gb = "_buttonWitharrow_1vwzz_79",
  yb = "_sourceButton_1vwzz_101",
  pb = "_arrowContainer_1vwzz_139",
  bb = "_arrowIcon_1vwzz_149",
  Sb = "_sourceContainer_1vwzz_161",
  Eb = "_signalImage_1vwzz_205",
  Ab = "_activeButton_1vwzz_213",
  gt = {
    container: db,
    content: mb,
    humanBodyContainer: hb,
    buttonContainer: vb,
    buttonWitharrow: gb,
    sourceButton: yb,
    arrowContainer: pb,
    arrowIcon: bb,
    sourceContainer: Sb,
    signalImage: Eb,
    activeButton: Ab,
  },
  Tb = "assets/humanwithecg.png",
  xb = "assets/humanwithemg.png",
  Ob = "assets/humanwitheegcap.png",
  Rb = "modulepreload",
  _b = function (u) {
    return "/" + u;
  },
  Ph = {},
  Nb = function (c, s, r) {
    let o = Promise.resolve();
    if (s && s.length > 0) {
      let h = function (g) {
        return Promise.all(
          g.map((E) =>
            Promise.resolve(E).then(
              (R) => ({ status: "fulfilled", value: R }),
              (R) => ({ status: "rejected", reason: R })
            )
          )
        );
      };
      var m = h;
      document.getElementsByTagName("link");
      const p = document.querySelector("meta[property=csp-nonce]"),
        y = p?.nonce || p?.getAttribute("nonce");
      o = h(
        s.map((g) => {
          if (((g = _b(g)), g in Ph)) return;
          Ph[g] = !0;
          const E = g.endsWith(".css"),
            R = E ? '[rel="stylesheet"]' : "";
          if (document.querySelector(`link[href="${g}"]${R}`)) return;
          const z = document.createElement("link");
          if (
            ((z.rel = E ? "stylesheet" : Rb),
            E || (z.as = "script"),
            (z.crossOrigin = ""),
            (z.href = g),
            y && z.setAttribute("nonce", y),
            document.head.appendChild(z),
            E)
          )
            return new Promise((Z, M) => {
              z.addEventListener("load", Z),
                z.addEventListener("error", () =>
                  M(new Error(`Unable to preload CSS for ${g}`))
                );
            });
        })
      );
    }
    function v(p) {
      const y = new Event("vite:preloadError", { cancelable: !0 });
      if (((y.payload = p), window.dispatchEvent(y), !y.defaultPrevented))
        throw p;
    }
    return o.then((p) => {
      for (const y of p || []) y.status === "rejected" && v(y.reason);
      return c().catch(v);
    });
  };
/*!
 * Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */ function vf(u, c) {
  (c == null || c > u.length) && (c = u.length);
  for (var s = 0, r = Array(c); s < c; s++) r[s] = u[s];
  return r;
}
function jb(u) {
  if (Array.isArray(u)) return u;
}
function zb(u) {
  if (Array.isArray(u)) return vf(u);
}
function Db(u, c) {
  if (!(u instanceof c))
    throw new TypeError("Cannot call a class as a function");
}
function Cb(u, c) {
  for (var s = 0; s < c.length; s++) {
    var r = c[s];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(u, N0(r.key), r);
  }
}
function Mb(u, c, s) {
  return (
    c && Cb(u.prototype, c),
    Object.defineProperty(u, "prototype", { writable: !1 }),
    u
  );
}
function Cu(u, c) {
  var s = (typeof Symbol < "u" && u[Symbol.iterator]) || u["@@iterator"];
  if (!s) {
    if (Array.isArray(u) || (s = Df(u)) || c) {
      s && (u = s);
      var r = 0,
        o = function () {};
      return {
        s: o,
        n: function () {
          return r >= u.length ? { done: !0 } : { done: !1, value: u[r++] };
        },
        e: function (y) {
          throw y;
        },
        f: o,
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var v,
    m = !0,
    p = !1;
  return {
    s: function () {
      s = s.call(u);
    },
    n: function () {
      var y = s.next();
      return (m = y.done), y;
    },
    e: function (y) {
      (p = !0), (v = y);
    },
    f: function () {
      try {
        m || s.return == null || s.return();
      } finally {
        if (p) throw v;
      }
    },
  };
}
function ve(u, c, s) {
  return (
    (c = N0(c)) in u
      ? Object.defineProperty(u, c, {
          value: s,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (u[c] = s),
    u
  );
}
function wb(u) {
  if (
    (typeof Symbol < "u" && u[Symbol.iterator] != null) ||
    u["@@iterator"] != null
  )
    return Array.from(u);
}
function Lb(u, c) {
  var s =
    u == null
      ? null
      : (typeof Symbol < "u" && u[Symbol.iterator]) || u["@@iterator"];
  if (s != null) {
    var r,
      o,
      v,
      m,
      p = [],
      y = !0,
      h = !1;
    try {
      if (((v = (s = s.call(u)).next), c === 0)) {
        if (Object(s) !== s) return;
        y = !1;
      } else
        for (
          ;
          !(y = (r = v.call(s)).done) && (p.push(r.value), p.length !== c);
          y = !0
        );
    } catch (g) {
      (h = !0), (o = g);
    } finally {
      try {
        if (!y && s.return != null && ((m = s.return()), Object(m) !== m))
          return;
      } finally {
        if (h) throw o;
      }
    }
    return p;
  }
}
function Ub() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function qb() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ev(u, c) {
  var s = Object.keys(u);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(u);
    c &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(u, o).enumerable;
      })),
      s.push.apply(s, r);
  }
  return s;
}
function X(u) {
  for (var c = 1; c < arguments.length; c++) {
    var s = arguments[c] != null ? arguments[c] : {};
    c % 2
      ? ev(Object(s), !0).forEach(function (r) {
          ve(u, r, s[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(s))
      : ev(Object(s)).forEach(function (r) {
          Object.defineProperty(u, r, Object.getOwnPropertyDescriptor(s, r));
        });
  }
  return u;
}
function Hu(u, c) {
  return jb(u) || Lb(u, c) || Df(u, c) || Ub();
}
function wt(u) {
  return zb(u) || wb(u) || Df(u) || qb();
}
function Hb(u, c) {
  if (typeof u != "object" || !u) return u;
  var s = u[Symbol.toPrimitive];
  if (s !== void 0) {
    var r = s.call(u, c);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (c === "string" ? String : Number)(u);
}
function N0(u) {
  var c = Hb(u, "string");
  return typeof c == "symbol" ? c : c + "";
}
function Lu(u) {
  "@babel/helpers - typeof";
  return (
    (Lu =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (c) {
            return typeof c;
          }
        : function (c) {
            return c &&
              typeof Symbol == "function" &&
              c.constructor === Symbol &&
              c !== Symbol.prototype
              ? "symbol"
              : typeof c;
          }),
    Lu(u)
  );
}
function Df(u, c) {
  if (u) {
    if (typeof u == "string") return vf(u, c);
    var s = {}.toString.call(u).slice(8, -1);
    return (
      s === "Object" && u.constructor && (s = u.constructor.name),
      s === "Map" || s === "Set"
        ? Array.from(u)
        : s === "Arguments" ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)
        ? vf(u, c)
        : void 0
    );
  }
}
var tv = function () {},
  Cf = {},
  j0 = {},
  z0 = null,
  D0 = { mark: tv, measure: tv };
try {
  typeof window < "u" && (Cf = window),
    typeof document < "u" && (j0 = document),
    typeof MutationObserver < "u" && (z0 = MutationObserver),
    typeof performance < "u" && (D0 = performance);
} catch {}
var Gb = Cf.navigator || {},
  av = Gb.userAgent,
  lv = av === void 0 ? "" : av,
  Ga = Cf,
  Re = j0,
  nv = z0,
  Nu = D0;
Ga.document;
var oa =
    !!Re.documentElement &&
    !!Re.head &&
    typeof Re.addEventListener == "function" &&
    typeof Re.createElement == "function",
  C0 = ~lv.indexOf("MSIE") || ~lv.indexOf("Trident/"),
  gc,
  Bb =
    /fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|jr|jfr|jdr|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,
  Yb =
    /Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Slab Press|Slab|Whiteboard)?.*/i,
  M0 = {
    classic: {
      fa: "solid",
      fas: "solid",
      "fa-solid": "solid",
      far: "regular",
      "fa-regular": "regular",
      fal: "light",
      "fa-light": "light",
      fat: "thin",
      "fa-thin": "thin",
      fab: "brands",
      "fa-brands": "brands",
    },
    duotone: {
      fa: "solid",
      fad: "solid",
      "fa-solid": "solid",
      "fa-duotone": "solid",
      fadr: "regular",
      "fa-regular": "regular",
      fadl: "light",
      "fa-light": "light",
      fadt: "thin",
      "fa-thin": "thin",
    },
    sharp: {
      fa: "solid",
      fass: "solid",
      "fa-solid": "solid",
      fasr: "regular",
      "fa-regular": "regular",
      fasl: "light",
      "fa-light": "light",
      fast: "thin",
      "fa-thin": "thin",
    },
    "sharp-duotone": {
      fa: "solid",
      fasds: "solid",
      "fa-solid": "solid",
      fasdr: "regular",
      "fa-regular": "regular",
      fasdl: "light",
      "fa-light": "light",
      fasdt: "thin",
      "fa-thin": "thin",
    },
    slab: { "fa-regular": "regular", faslr: "regular" },
    "slab-press": { "fa-regular": "regular", faslpr: "regular" },
    thumbprint: { "fa-light": "light", fatl: "light" },
    whiteboard: { "fa-semibold": "semibold", fawsb: "semibold" },
    notdog: { "fa-solid": "solid", fans: "solid" },
    "notdog-duo": { "fa-solid": "solid", fands: "solid" },
    etch: { "fa-solid": "solid", faes: "solid" },
    jelly: { "fa-regular": "regular", fajr: "regular" },
    "jelly-fill": { "fa-regular": "regular", fajfr: "regular" },
    "jelly-duo": { "fa-regular": "regular", fajdr: "regular" },
    chisel: { "fa-regular": "regular", facr: "regular" },
  },
  Xb = { GROUP: "duotone-group", PRIMARY: "primary", SECONDARY: "secondary" },
  w0 = [
    "fa-classic",
    "fa-duotone",
    "fa-sharp",
    "fa-sharp-duotone",
    "fa-thumbprint",
    "fa-whiteboard",
    "fa-notdog",
    "fa-notdog-duo",
    "fa-chisel",
    "fa-etch",
    "fa-jelly",
    "fa-jelly-fill",
    "fa-jelly-duo",
    "fa-slab",
    "fa-slab-press",
  ],
  Je = "classic",
  ci = "duotone",
  L0 = "sharp",
  U0 = "sharp-duotone",
  q0 = "chisel",
  H0 = "etch",
  G0 = "jelly",
  B0 = "jelly-duo",
  Y0 = "jelly-fill",
  X0 = "notdog",
  Z0 = "notdog-duo",
  V0 = "slab",
  Q0 = "slab-press",
  $0 = "thumbprint",
  k0 = "whiteboard",
  Zb = "Classic",
  Vb = "Duotone",
  Qb = "Sharp",
  $b = "Sharp Duotone",
  kb = "Chisel",
  Kb = "Etch",
  Ib = "Jelly",
  Fb = "Jelly Duo",
  Jb = "Jelly Fill",
  Wb = "Notdog",
  Pb = "Notdog Duo",
  eS = "Slab",
  tS = "Slab Press",
  aS = "Thumbprint",
  lS = "Whiteboard",
  K0 = [Je, ci, L0, U0, q0, H0, G0, B0, Y0, X0, Z0, V0, Q0, $0, k0];
(gc = {}),
  ve(
    ve(
      ve(
        ve(
          ve(
            ve(ve(ve(ve(ve(gc, Je, Zb), ci, Vb), L0, Qb), U0, $b), q0, kb),
            H0,
            Kb
          ),
          G0,
          Ib
        ),
        B0,
        Fb
      ),
      Y0,
      Jb
    ),
    X0,
    Wb
  ),
  ve(ve(ve(ve(ve(gc, Z0, Pb), V0, eS), Q0, tS), $0, aS), k0, lS);
var nS = {
    classic: { 900: "fas", 400: "far", normal: "far", 300: "fal", 100: "fat" },
    duotone: { 900: "fad", 400: "fadr", 300: "fadl", 100: "fadt" },
    sharp: { 900: "fass", 400: "fasr", 300: "fasl", 100: "fast" },
    "sharp-duotone": { 900: "fasds", 400: "fasdr", 300: "fasdl", 100: "fasdt" },
    slab: { 400: "faslr" },
    "slab-press": { 400: "faslpr" },
    whiteboard: { 600: "fawsb" },
    thumbprint: { 300: "fatl" },
    notdog: { 900: "fans" },
    "notdog-duo": { 900: "fands" },
    etch: { 900: "faes" },
    chisel: { 400: "facr" },
    jelly: { 400: "fajr" },
    "jelly-fill": { 400: "fajfr" },
    "jelly-duo": { 400: "fajdr" },
  },
  iS = {
    "Font Awesome 7 Free": { 900: "fas", 400: "far" },
    "Font Awesome 7 Pro": {
      900: "fas",
      400: "far",
      normal: "far",
      300: "fal",
      100: "fat",
    },
    "Font Awesome 7 Brands": { 400: "fab", normal: "fab" },
    "Font Awesome 7 Duotone": {
      900: "fad",
      400: "fadr",
      normal: "fadr",
      300: "fadl",
      100: "fadt",
    },
    "Font Awesome 7 Sharp": {
      900: "fass",
      400: "fasr",
      normal: "fasr",
      300: "fasl",
      100: "fast",
    },
    "Font Awesome 7 Sharp Duotone": {
      900: "fasds",
      400: "fasdr",
      normal: "fasdr",
      300: "fasdl",
      100: "fasdt",
    },
    "Font Awesome 7 Jelly": { 400: "fajr", normal: "fajr" },
    "Font Awesome 7 Jelly Fill": { 400: "fajfr", normal: "fajfr" },
    "Font Awesome 7 Jelly Duo": { 400: "fajdr", normal: "fajdr" },
    "Font Awesome 7 Slab": { 400: "faslr", normal: "faslr" },
    "Font Awesome 7 Slab Press": { 400: "faslpr", normal: "faslpr" },
    "Font Awesome 7 Thumbprint": { 300: "fatl", normal: "fatl" },
    "Font Awesome 7 Notdog": { 900: "fans", normal: "fans" },
    "Font Awesome 7 Notdog Duo": { 900: "fands", normal: "fands" },
    "Font Awesome 7 Etch": { 900: "faes", normal: "faes" },
    "Font Awesome 7 Chisel": { 400: "facr", normal: "facr" },
    "Font Awesome 7 Whiteboard": { 600: "fawsb", normal: "fawsb" },
  },
  uS = new Map([
    [
      "classic",
      {
        defaultShortPrefixId: "fas",
        defaultStyleId: "solid",
        styleIds: ["solid", "regular", "light", "thin", "brands"],
        futureStyleIds: [],
        defaultFontWeight: 900,
      },
    ],
    [
      "duotone",
      {
        defaultShortPrefixId: "fad",
        defaultStyleId: "solid",
        styleIds: ["solid", "regular", "light", "thin"],
        futureStyleIds: [],
        defaultFontWeight: 900,
      },
    ],
    [
      "sharp",
      {
        defaultShortPrefixId: "fass",
        defaultStyleId: "solid",
        styleIds: ["solid", "regular", "light", "thin"],
        futureStyleIds: [],
        defaultFontWeight: 900,
      },
    ],
    [
      "sharp-duotone",
      {
        defaultShortPrefixId: "fasds",
        defaultStyleId: "solid",
        styleIds: ["solid", "regular", "light", "thin"],
        futureStyleIds: [],
        defaultFontWeight: 900,
      },
    ],
    [
      "chisel",
      {
        defaultShortPrefixId: "facr",
        defaultStyleId: "regular",
        styleIds: ["regular"],
        futureStyleIds: [],
        defaultFontWeight: 400,
      },
    ],
    [
      "etch",
      {
        defaultShortPrefixId: "faes",
        defaultStyleId: "solid",
        styleIds: ["solid"],
        futureStyleIds: [],
        defaultFontWeight: 900,
      },
    ],
    [
      "jelly",
      {
        defaultShortPrefixId: "fajr",
        defaultStyleId: "regular",
        styleIds: ["regular"],
        futureStyleIds: [],
        defaultFontWeight: 400,
      },
    ],
    [
      "jelly-duo",
      {
        defaultShortPrefixId: "fajdr",
        defaultStyleId: "regular",
        styleIds: ["regular"],
        futureStyleIds: [],
        defaultFontWeight: 400,
      },
    ],
    [
      "jelly-fill",
      {
        defaultShortPrefixId: "fajfr",
        defaultStyleId: "regular",
        styleIds: ["regular"],
        futureStyleIds: [],
        defaultFontWeight: 400,
      },
    ],
    [
      "notdog",
      {
        defaultShortPrefixId: "fans",
        defaultStyleId: "solid",
        styleIds: ["solid"],
        futureStyleIds: [],
        defaultFontWeight: 900,
      },
    ],
    [
      "notdog-duo",
      {
        defaultShortPrefixId: "fands",
        defaultStyleId: "solid",
        styleIds: ["solid"],
        futureStyleIds: [],
        defaultFontWeight: 900,
      },
    ],
    [
      "slab",
      {
        defaultShortPrefixId: "faslr",
        defaultStyleId: "regular",
        styleIds: ["regular"],
        futureStyleIds: [],
        defaultFontWeight: 400,
      },
    ],
    [
      "slab-press",
      {
        defaultShortPrefixId: "faslpr",
        defaultStyleId: "regular",
        styleIds: ["regular"],
        futureStyleIds: [],
        defaultFontWeight: 400,
      },
    ],
    [
      "thumbprint",
      {
        defaultShortPrefixId: "fatl",
        defaultStyleId: "light",
        styleIds: ["light"],
        futureStyleIds: [],
        defaultFontWeight: 300,
      },
    ],
    [
      "whiteboard",
      {
        defaultShortPrefixId: "fawsb",
        defaultStyleId: "semibold",
        styleIds: ["semibold"],
        futureStyleIds: [],
        defaultFontWeight: 600,
      },
    ],
  ]),
  rS = {
    chisel: { regular: "facr" },
    classic: {
      brands: "fab",
      light: "fal",
      regular: "far",
      solid: "fas",
      thin: "fat",
    },
    duotone: { light: "fadl", regular: "fadr", solid: "fad", thin: "fadt" },
    etch: { solid: "faes" },
    jelly: { regular: "fajr" },
    "jelly-duo": { regular: "fajdr" },
    "jelly-fill": { regular: "fajfr" },
    notdog: { solid: "fans" },
    "notdog-duo": { solid: "fands" },
    sharp: { light: "fasl", regular: "fasr", solid: "fass", thin: "fast" },
    "sharp-duotone": {
      light: "fasdl",
      regular: "fasdr",
      solid: "fasds",
      thin: "fasdt",
    },
    slab: { regular: "faslr" },
    "slab-press": { regular: "faslpr" },
    thumbprint: { light: "fatl" },
    whiteboard: { semibold: "fawsb" },
  },
  I0 = ["fak", "fa-kit", "fakd", "fa-kit-duotone"],
  iv = {
    kit: { fak: "kit", "fa-kit": "kit" },
    "kit-duotone": { fakd: "kit-duotone", "fa-kit-duotone": "kit-duotone" },
  },
  sS = ["kit"],
  cS = "kit",
  fS = "kit-duotone",
  oS = "Kit",
  dS = "Kit Duotone";
ve(ve({}, cS, oS), fS, dS);
var mS = { kit: { "fa-kit": "fak" } },
  hS = {
    "Font Awesome Kit": { 400: "fak", normal: "fak" },
    "Font Awesome Kit Duotone": { 400: "fakd", normal: "fakd" },
  },
  vS = { kit: { fak: "fa-kit" } },
  uv = { kit: { kit: "fak" }, "kit-duotone": { "kit-duotone": "fakd" } },
  yc,
  ju = {
    GROUP: "duotone-group",
    SWAP_OPACITY: "swap-opacity",
    PRIMARY: "primary",
    SECONDARY: "secondary",
  },
  gS = [
    "fa-classic",
    "fa-duotone",
    "fa-sharp",
    "fa-sharp-duotone",
    "fa-thumbprint",
    "fa-whiteboard",
    "fa-notdog",
    "fa-notdog-duo",
    "fa-chisel",
    "fa-etch",
    "fa-jelly",
    "fa-jelly-fill",
    "fa-jelly-duo",
    "fa-slab",
    "fa-slab-press",
  ],
  yS = "classic",
  pS = "duotone",
  bS = "sharp",
  SS = "sharp-duotone",
  ES = "chisel",
  AS = "etch",
  TS = "jelly",
  xS = "jelly-duo",
  OS = "jelly-fill",
  RS = "notdog",
  _S = "notdog-duo",
  NS = "slab",
  jS = "slab-press",
  zS = "thumbprint",
  DS = "whiteboard",
  CS = "Classic",
  MS = "Duotone",
  wS = "Sharp",
  LS = "Sharp Duotone",
  US = "Chisel",
  qS = "Etch",
  HS = "Jelly",
  GS = "Jelly Duo",
  BS = "Jelly Fill",
  YS = "Notdog",
  XS = "Notdog Duo",
  ZS = "Slab",
  VS = "Slab Press",
  QS = "Thumbprint",
  $S = "Whiteboard";
(yc = {}),
  ve(
    ve(
      ve(
        ve(
          ve(
            ve(ve(ve(ve(ve(yc, yS, CS), pS, MS), bS, wS), SS, LS), ES, US),
            AS,
            qS
          ),
          TS,
          HS
        ),
        xS,
        GS
      ),
      OS,
      BS
    ),
    RS,
    YS
  ),
  ve(ve(ve(ve(ve(yc, _S, XS), NS, ZS), jS, VS), zS, QS), DS, $S);
var kS = "kit",
  KS = "kit-duotone",
  IS = "Kit",
  FS = "Kit Duotone";
ve(ve({}, kS, IS), KS, FS);
var JS = {
    classic: {
      "fa-brands": "fab",
      "fa-duotone": "fad",
      "fa-light": "fal",
      "fa-regular": "far",
      "fa-solid": "fas",
      "fa-thin": "fat",
    },
    duotone: { "fa-regular": "fadr", "fa-light": "fadl", "fa-thin": "fadt" },
    sharp: {
      "fa-solid": "fass",
      "fa-regular": "fasr",
      "fa-light": "fasl",
      "fa-thin": "fast",
    },
    "sharp-duotone": {
      "fa-solid": "fasds",
      "fa-regular": "fasdr",
      "fa-light": "fasdl",
      "fa-thin": "fasdt",
    },
    slab: { "fa-regular": "faslr" },
    "slab-press": { "fa-regular": "faslpr" },
    whiteboard: { "fa-semibold": "fawsb" },
    thumbprint: { "fa-light": "fatl" },
    notdog: { "fa-solid": "fans" },
    "notdog-duo": { "fa-solid": "fands" },
    etch: { "fa-solid": "faes" },
    jelly: { "fa-regular": "fajr" },
    "jelly-fill": { "fa-regular": "fajfr" },
    "jelly-duo": { "fa-regular": "fajdr" },
    chisel: { "fa-regular": "facr" },
  },
  WS = {
    classic: ["fas", "far", "fal", "fat", "fad"],
    duotone: ["fadr", "fadl", "fadt"],
    sharp: ["fass", "fasr", "fasl", "fast"],
    "sharp-duotone": ["fasds", "fasdr", "fasdl", "fasdt"],
    slab: ["faslr"],
    "slab-press": ["faslpr"],
    whiteboard: ["fawsb"],
    thumbprint: ["fatl"],
    notdog: ["fans"],
    "notdog-duo": ["fands"],
    etch: ["faes"],
    jelly: ["fajr"],
    "jelly-fill": ["fajfr"],
    "jelly-duo": ["fajdr"],
    chisel: ["facr"],
  },
  gf = {
    classic: {
      fab: "fa-brands",
      fad: "fa-duotone",
      fal: "fa-light",
      far: "fa-regular",
      fas: "fa-solid",
      fat: "fa-thin",
    },
    duotone: { fadr: "fa-regular", fadl: "fa-light", fadt: "fa-thin" },
    sharp: {
      fass: "fa-solid",
      fasr: "fa-regular",
      fasl: "fa-light",
      fast: "fa-thin",
    },
    "sharp-duotone": {
      fasds: "fa-solid",
      fasdr: "fa-regular",
      fasdl: "fa-light",
      fasdt: "fa-thin",
    },
    slab: { faslr: "fa-regular" },
    "slab-press": { faslpr: "fa-regular" },
    whiteboard: { fawsb: "fa-semibold" },
    thumbprint: { fatl: "fa-light" },
    notdog: { fans: "fa-solid" },
    "notdog-duo": { fands: "fa-solid" },
    etch: { faes: "fa-solid" },
    jelly: { fajr: "fa-regular" },
    "jelly-fill": { fajfr: "fa-regular" },
    "jelly-duo": { fajdr: "fa-regular" },
    chisel: { facr: "fa-regular" },
  },
  PS = [
    "fa-solid",
    "fa-regular",
    "fa-light",
    "fa-thin",
    "fa-duotone",
    "fa-brands",
    "fa-semibold",
  ],
  F0 = [
    "fa",
    "fas",
    "far",
    "fal",
    "fat",
    "fad",
    "fadr",
    "fadl",
    "fadt",
    "fab",
    "fass",
    "fasr",
    "fasl",
    "fast",
    "fasds",
    "fasdr",
    "fasdl",
    "fasdt",
    "faslr",
    "faslpr",
    "fawsb",
    "fatl",
    "fans",
    "fands",
    "faes",
    "fajr",
    "fajfr",
    "fajdr",
    "facr",
  ].concat(gS, PS),
  eE = ["solid", "regular", "light", "thin", "duotone", "brands", "semibold"],
  J0 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  tE = J0.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
  aE = ["aw", "fw", "pull-left", "pull-right"],
  lE = []
    .concat(wt(Object.keys(WS)), eE, aE, [
      "2xs",
      "xs",
      "sm",
      "lg",
      "xl",
      "2xl",
      "beat",
      "border",
      "fade",
      "beat-fade",
      "bounce",
      "flip-both",
      "flip-horizontal",
      "flip-vertical",
      "flip",
      "inverse",
      "layers",
      "layers-bottom-left",
      "layers-bottom-right",
      "layers-counter",
      "layers-text",
      "layers-top-left",
      "layers-top-right",
      "li",
      "pull-end",
      "pull-start",
      "pulse",
      "rotate-180",
      "rotate-270",
      "rotate-90",
      "rotate-by",
      "shake",
      "spin-pulse",
      "spin-reverse",
      "spin",
      "stack-1x",
      "stack-2x",
      "stack",
      "ul",
      "width-auto",
      "width-fixed",
      ju.GROUP,
      ju.SWAP_OPACITY,
      ju.PRIMARY,
      ju.SECONDARY,
    ])
    .concat(
      J0.map(function (u) {
        return "".concat(u, "x");
      })
    )
    .concat(
      tE.map(function (u) {
        return "w-".concat(u);
      })
    ),
  nE = {
    "Font Awesome 5 Free": { 900: "fas", 400: "far" },
    "Font Awesome 5 Pro": { 900: "fas", 400: "far", normal: "far", 300: "fal" },
    "Font Awesome 5 Brands": { 400: "fab", normal: "fab" },
    "Font Awesome 5 Duotone": { 900: "fad" },
  },
  ca = "___FONT_AWESOME___",
  yf = 16,
  W0 = "fa",
  P0 = "svg-inline--fa",
  sl = "data-fa-i2svg",
  pf = "data-fa-pseudo-element",
  iE = "data-fa-pseudo-element-pending",
  Mf = "data-prefix",
  wf = "data-icon",
  rv = "fontawesome-i2svg",
  uE = "async",
  rE = ["HTML", "HEAD", "STYLE", "SCRIPT"],
  eg = ["::before", "::after", ":before", ":after"],
  tg = (function () {
    try {
      return !0;
    } catch {
      return !1;
    }
  })();
function fi(u) {
  return new Proxy(u, {
    get: function (s, r) {
      return r in s ? s[r] : s[Je];
    },
  });
}
var ag = X({}, M0);
ag[Je] = X(
  X(X(X({}, { "fa-duotone": "duotone" }), M0[Je]), iv.kit),
  iv["kit-duotone"]
);
var sE = fi(ag),
  bf = X({}, rS);
bf[Je] = X(X(X(X({}, { duotone: "fad" }), bf[Je]), uv.kit), uv["kit-duotone"]);
var sv = fi(bf),
  Sf = X({}, gf);
Sf[Je] = X(X({}, Sf[Je]), vS.kit);
var lg = fi(Sf),
  Ef = X({}, JS);
Ef[Je] = X(X({}, Ef[Je]), mS.kit);
fi(Ef);
var cE = Bb,
  ng = "fa-layers-text",
  fE = Yb,
  oE = X({}, nS);
fi(oE);
var dE = [
    "class",
    "data-prefix",
    "data-icon",
    "data-fa-transform",
    "data-fa-mask",
  ],
  pc = Xb,
  mE = [].concat(wt(sS), wt(lE)),
  ui = Ga.FontAwesomeConfig || {};
function hE(u) {
  var c = Re.querySelector("script[" + u + "]");
  if (c) return c.getAttribute(u);
}
function vE(u) {
  return u === "" ? !0 : u === "false" ? !1 : u === "true" ? !0 : u;
}
if (Re && typeof Re.querySelector == "function") {
  var gE = [
    ["data-family-prefix", "familyPrefix"],
    ["data-css-prefix", "cssPrefix"],
    ["data-family-default", "familyDefault"],
    ["data-style-default", "styleDefault"],
    ["data-replacement-class", "replacementClass"],
    ["data-auto-replace-svg", "autoReplaceSvg"],
    ["data-auto-add-css", "autoAddCss"],
    ["data-search-pseudo-elements", "searchPseudoElements"],
    ["data-search-pseudo-elements-warnings", "searchPseudoElementsWarnings"],
    ["data-search-pseudo-elements-full-scan", "searchPseudoElementsFullScan"],
    ["data-observe-mutations", "observeMutations"],
    ["data-mutate-approach", "mutateApproach"],
    ["data-keep-original-source", "keepOriginalSource"],
    ["data-measure-performance", "measurePerformance"],
    ["data-show-missing-icons", "showMissingIcons"],
  ];
  gE.forEach(function (u) {
    var c = Hu(u, 2),
      s = c[0],
      r = c[1],
      o = vE(hE(s));
    o != null && (ui[r] = o);
  });
}
var ig = {
  styleDefault: "solid",
  familyDefault: Je,
  cssPrefix: W0,
  replacementClass: P0,
  autoReplaceSvg: !0,
  autoAddCss: !0,
  searchPseudoElements: !1,
  searchPseudoElementsWarnings: !0,
  searchPseudoElementsFullScan: !1,
  observeMutations: !0,
  mutateApproach: "async",
  keepOriginalSource: !0,
  measurePerformance: !1,
  showMissingIcons: !0,
};
ui.familyPrefix && (ui.cssPrefix = ui.familyPrefix);
var tn = X(X({}, ig), ui);
tn.autoReplaceSvg || (tn.observeMutations = !1);
var ee = {};
Object.keys(ig).forEach(function (u) {
  Object.defineProperty(ee, u, {
    enumerable: !0,
    set: function (s) {
      (tn[u] = s),
        ri.forEach(function (r) {
          return r(ee);
        });
    },
    get: function () {
      return tn[u];
    },
  });
});
Object.defineProperty(ee, "familyPrefix", {
  enumerable: !0,
  set: function (c) {
    (tn.cssPrefix = c),
      ri.forEach(function (s) {
        return s(ee);
      });
  },
  get: function () {
    return tn.cssPrefix;
  },
});
Ga.FontAwesomeConfig = ee;
var ri = [];
function yE(u) {
  return (
    ri.push(u),
    function () {
      ri.splice(ri.indexOf(u), 1);
    }
  );
}
var Jl = yf,
  Vt = { size: 16, x: 0, y: 0, rotate: 0, flipX: !1, flipY: !1 };
function pE(u) {
  if (!(!u || !oa)) {
    var c = Re.createElement("style");
    c.setAttribute("type", "text/css"), (c.innerHTML = u);
    for (var s = Re.head.childNodes, r = null, o = s.length - 1; o > -1; o--) {
      var v = s[o],
        m = (v.tagName || "").toUpperCase();
      ["STYLE", "LINK"].indexOf(m) > -1 && (r = v);
    }
    return Re.head.insertBefore(c, r), u;
  }
}
var bE = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function cv() {
  for (var u = 12, c = ""; u-- > 0; ) c += bE[(Math.random() * 62) | 0];
  return c;
}
function an(u) {
  for (var c = [], s = (u || []).length >>> 0; s--; ) c[s] = u[s];
  return c;
}
function Lf(u) {
  return u.classList
    ? an(u.classList)
    : (u.getAttribute("class") || "").split(" ").filter(function (c) {
        return c;
      });
}
function ug(u) {
  return ""
    .concat(u)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
function SE(u) {
  return Object.keys(u || {})
    .reduce(function (c, s) {
      return c + "".concat(s, '="').concat(ug(u[s]), '" ');
    }, "")
    .trim();
}
function Gu(u) {
  return Object.keys(u || {}).reduce(function (c, s) {
    return c + "".concat(s, ": ").concat(u[s].trim(), ";");
  }, "");
}
function Uf(u) {
  return (
    u.size !== Vt.size ||
    u.x !== Vt.x ||
    u.y !== Vt.y ||
    u.rotate !== Vt.rotate ||
    u.flipX ||
    u.flipY
  );
}
function EE(u) {
  var c = u.transform,
    s = u.containerWidth,
    r = u.iconWidth,
    o = { transform: "translate(".concat(s / 2, " 256)") },
    v = "translate(".concat(c.x * 32, ", ").concat(c.y * 32, ") "),
    m = "scale("
      .concat((c.size / 16) * (c.flipX ? -1 : 1), ", ")
      .concat((c.size / 16) * (c.flipY ? -1 : 1), ") "),
    p = "rotate(".concat(c.rotate, " 0 0)"),
    y = { transform: "".concat(v, " ").concat(m, " ").concat(p) },
    h = { transform: "translate(".concat((r / 2) * -1, " -256)") };
  return { outer: o, inner: y, path: h };
}
function AE(u) {
  var c = u.transform,
    s = u.width,
    r = s === void 0 ? yf : s,
    o = u.height,
    v = o === void 0 ? yf : o,
    m = "";
  return (
    C0
      ? (m += "translate("
          .concat(c.x / Jl - r / 2, "em, ")
          .concat(c.y / Jl - v / 2, "em) "))
      : (m += "translate(calc(-50% + "
          .concat(c.x / Jl, "em), calc(-50% + ")
          .concat(c.y / Jl, "em)) ")),
    (m += "scale("
      .concat((c.size / Jl) * (c.flipX ? -1 : 1), ", ")
      .concat((c.size / Jl) * (c.flipY ? -1 : 1), ") ")),
    (m += "rotate(".concat(c.rotate, "deg) ")),
    m
  );
}
var TE = `:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 7 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 7 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 7 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 7 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 7 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 7 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-slab-regular: normal 400 1em/1 "Font Awesome 7 Slab";
  --fa-font-slab-press-regular: normal 400 1em/1 "Font Awesome 7 Slab Press";
  --fa-font-whiteboard-semibold: normal 600 1em/1 "Font Awesome 7 Whiteboard";
  --fa-font-thumbprint-light: normal 300 1em/1 "Font Awesome 7 Thumbprint";
  --fa-font-notdog-solid: normal 900 1em/1 "Font Awesome 7 Notdog";
  --fa-font-notdog-duo-solid: normal 900 1em/1 "Font Awesome 7 Notdog Duo";
  --fa-font-etch-solid: normal 900 1em/1 "Font Awesome 7 Etch";
  --fa-font-jelly-regular: normal 400 1em/1 "Font Awesome 7 Jelly";
  --fa-font-jelly-fill-regular: normal 400 1em/1 "Font Awesome 7 Jelly Fill";
  --fa-font-jelly-duo-regular: normal 400 1em/1 "Font Awesome 7 Jelly Duo";
  --fa-font-chisel-regular: normal 400 1em/1 "Font Awesome 7 Chisel";
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}`;
function rg() {
  var u = W0,
    c = P0,
    s = ee.cssPrefix,
    r = ee.replacementClass,
    o = TE;
  if (s !== u || r !== c) {
    var v = new RegExp("\\.".concat(u, "\\-"), "g"),
      m = new RegExp("\\--".concat(u, "\\-"), "g"),
      p = new RegExp("\\.".concat(c), "g");
    o = o
      .replace(v, ".".concat(s, "-"))
      .replace(m, "--".concat(s, "-"))
      .replace(p, ".".concat(r));
  }
  return o;
}
var fv = !1;
function bc() {
  ee.autoAddCss && !fv && (pE(rg()), (fv = !0));
}
var xE = {
    mixout: function () {
      return { dom: { css: rg, insertCss: bc } };
    },
    hooks: function () {
      return {
        beforeDOMElementCreation: function () {
          bc();
        },
        beforeI2svg: function () {
          bc();
        },
      };
    },
  },
  fa = Ga || {};
fa[ca] || (fa[ca] = {});
fa[ca].styles || (fa[ca].styles = {});
fa[ca].hooks || (fa[ca].hooks = {});
fa[ca].shims || (fa[ca].shims = []);
var Mt = fa[ca],
  sg = [],
  cg = function () {
    Re.removeEventListener("DOMContentLoaded", cg),
      (Uu = 1),
      sg.map(function (c) {
        return c();
      });
  },
  Uu = !1;
oa &&
  ((Uu = (Re.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(
    Re.readyState
  )),
  Uu || Re.addEventListener("DOMContentLoaded", cg));
function OE(u) {
  oa && (Uu ? setTimeout(u, 0) : sg.push(u));
}
function oi(u) {
  var c = u.tag,
    s = u.attributes,
    r = s === void 0 ? {} : s,
    o = u.children,
    v = o === void 0 ? [] : o;
  return typeof u == "string"
    ? ug(u)
    : "<"
        .concat(c, " ")
        .concat(SE(r), ">")
        .concat(v.map(oi).join(""), "</")
        .concat(c, ">");
}
function ov(u, c, s) {
  if (u && u[c] && u[c][s]) return { prefix: c, iconName: s, icon: u[c][s] };
}
var Sc = function (c, s, r, o) {
  var v = Object.keys(c),
    m = v.length,
    p = s,
    y,
    h,
    g;
  for (r === void 0 ? ((y = 1), (g = c[v[0]])) : ((y = 0), (g = r)); y < m; y++)
    (h = v[y]), (g = p(g, c[h], h, c));
  return g;
};
function fg(u) {
  return wt(u).length !== 1 ? null : u.codePointAt(0).toString(16);
}
function dv(u) {
  return Object.keys(u).reduce(function (c, s) {
    var r = u[s],
      o = !!r.icon;
    return o ? (c[r.iconName] = r.icon) : (c[s] = r), c;
  }, {});
}
function og(u, c) {
  var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
    r = s.skipHooks,
    o = r === void 0 ? !1 : r,
    v = dv(c);
  typeof Mt.hooks.addPack == "function" && !o
    ? Mt.hooks.addPack(u, dv(c))
    : (Mt.styles[u] = X(X({}, Mt.styles[u] || {}), v)),
    u === "fas" && og("fa", c);
}
var si = Mt.styles,
  RE = Mt.shims,
  dg = Object.keys(lg),
  _E = dg.reduce(function (u, c) {
    return (u[c] = Object.keys(lg[c])), u;
  }, {}),
  qf = null,
  mg = {},
  hg = {},
  vg = {},
  gg = {},
  yg = {};
function NE(u) {
  return ~mE.indexOf(u);
}
function jE(u, c) {
  var s = c.split("-"),
    r = s[0],
    o = s.slice(1).join("-");
  return r === u && o !== "" && !NE(o) ? o : null;
}
var pg = function () {
  var c = function (v) {
    return Sc(
      si,
      function (m, p, y) {
        return (m[y] = Sc(p, v, {})), m;
      },
      {}
    );
  };
  (mg = c(function (o, v, m) {
    if ((v[3] && (o[v[3]] = m), v[2])) {
      var p = v[2].filter(function (y) {
        return typeof y == "number";
      });
      p.forEach(function (y) {
        o[y.toString(16)] = m;
      });
    }
    return o;
  })),
    (hg = c(function (o, v, m) {
      if (((o[m] = m), v[2])) {
        var p = v[2].filter(function (y) {
          return typeof y == "string";
        });
        p.forEach(function (y) {
          o[y] = m;
        });
      }
      return o;
    })),
    (yg = c(function (o, v, m) {
      var p = v[2];
      return (
        (o[m] = m),
        p.forEach(function (y) {
          o[y] = m;
        }),
        o
      );
    }));
  var s = "far" in si || ee.autoFetchSvg,
    r = Sc(
      RE,
      function (o, v) {
        var m = v[0],
          p = v[1],
          y = v[2];
        return (
          p === "far" && !s && (p = "fas"),
          typeof m == "string" && (o.names[m] = { prefix: p, iconName: y }),
          typeof m == "number" &&
            (o.unicodes[m.toString(16)] = { prefix: p, iconName: y }),
          o
        );
      },
      { names: {}, unicodes: {} }
    );
  (vg = r.names),
    (gg = r.unicodes),
    (qf = Bu(ee.styleDefault, { family: ee.familyDefault }));
};
yE(function (u) {
  qf = Bu(u.styleDefault, { family: ee.familyDefault });
});
pg();
function Hf(u, c) {
  return (mg[u] || {})[c];
}
function zE(u, c) {
  return (hg[u] || {})[c];
}
function rl(u, c) {
  return (yg[u] || {})[c];
}
function bg(u) {
  return vg[u] || { prefix: null, iconName: null };
}
function DE(u) {
  var c = gg[u],
    s = Hf("fas", u);
  return (
    c ||
    (s ? { prefix: "fas", iconName: s } : null) || {
      prefix: null,
      iconName: null,
    }
  );
}
function Ba() {
  return qf;
}
var Sg = function () {
  return { prefix: null, iconName: null, rest: [] };
};
function CE(u) {
  var c = Je,
    s = dg.reduce(function (r, o) {
      return (r[o] = "".concat(ee.cssPrefix, "-").concat(o)), r;
    }, {});
  return (
    K0.forEach(function (r) {
      (u.includes(s[r]) ||
        u.some(function (o) {
          return _E[r].includes(o);
        })) &&
        (c = r);
    }),
    c
  );
}
function Bu(u) {
  var c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    s = c.family,
    r = s === void 0 ? Je : s,
    o = sE[r][u];
  if (r === ci && !u) return "fad";
  var v = sv[r][u] || sv[r][o],
    m = u in Mt.styles ? u : null,
    p = v || m || null;
  return p;
}
function ME(u) {
  var c = [],
    s = null;
  return (
    u.forEach(function (r) {
      var o = jE(ee.cssPrefix, r);
      o ? (s = o) : r && c.push(r);
    }),
    { iconName: s, rest: c }
  );
}
function mv(u) {
  return u.sort().filter(function (c, s, r) {
    return r.indexOf(c) === s;
  });
}
var hv = F0.concat(I0);
function Yu(u) {
  var c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    s = c.skipLookups,
    r = s === void 0 ? !1 : s,
    o = null,
    v = mv(
      u.filter(function (z) {
        return hv.includes(z);
      })
    ),
    m = mv(
      u.filter(function (z) {
        return !hv.includes(z);
      })
    ),
    p = v.filter(function (z) {
      return (o = z), !w0.includes(z);
    }),
    y = Hu(p, 1),
    h = y[0],
    g = h === void 0 ? null : h,
    E = CE(v),
    R = X(X({}, ME(m)), {}, { prefix: Bu(g, { family: E }) });
  return X(
    X(
      X({}, R),
      qE({
        values: u,
        family: E,
        styles: si,
        config: ee,
        canonical: R,
        givenPrefix: o,
      })
    ),
    wE(r, o, R)
  );
}
function wE(u, c, s) {
  var r = s.prefix,
    o = s.iconName;
  if (u || !r || !o) return { prefix: r, iconName: o };
  var v = c === "fa" ? bg(o) : {},
    m = rl(r, o);
  return (
    (o = v.iconName || m || o),
    (r = v.prefix || r),
    r === "far" && !si.far && si.fas && !ee.autoFetchSvg && (r = "fas"),
    { prefix: r, iconName: o }
  );
}
var LE = K0.filter(function (u) {
    return u !== Je || u !== ci;
  }),
  UE = Object.keys(gf)
    .filter(function (u) {
      return u !== Je;
    })
    .map(function (u) {
      return Object.keys(gf[u]);
    })
    .flat();
function qE(u) {
  var c = u.values,
    s = u.family,
    r = u.canonical,
    o = u.givenPrefix,
    v = o === void 0 ? "" : o,
    m = u.styles,
    p = m === void 0 ? {} : m,
    y = u.config,
    h = y === void 0 ? {} : y,
    g = s === ci,
    E = c.includes("fa-duotone") || c.includes("fad"),
    R = h.familyDefault === "duotone",
    z = r.prefix === "fad" || r.prefix === "fa-duotone";
  if (
    (!g && (E || R || z) && (r.prefix = "fad"),
    (c.includes("fa-brands") || c.includes("fab")) && (r.prefix = "fab"),
    !r.prefix && LE.includes(s))
  ) {
    var Z = Object.keys(p).find(function ($) {
      return UE.includes($);
    });
    if (Z || h.autoFetchSvg) {
      var M = uS.get(s).defaultShortPrefixId;
      (r.prefix = M), (r.iconName = rl(r.prefix, r.iconName) || r.iconName);
    }
  }
  return (r.prefix === "fa" || v === "fa") && (r.prefix = Ba() || "fas"), r;
}
var HE = (function () {
    function u() {
      Db(this, u), (this.definitions = {});
    }
    return Mb(u, [
      {
        key: "add",
        value: function () {
          for (
            var s = this, r = arguments.length, o = new Array(r), v = 0;
            v < r;
            v++
          )
            o[v] = arguments[v];
          var m = o.reduce(this._pullDefinitions, {});
          Object.keys(m).forEach(function (p) {
            (s.definitions[p] = X(X({}, s.definitions[p] || {}), m[p])),
              og(p, m[p]),
              pg();
          });
        },
      },
      {
        key: "reset",
        value: function () {
          this.definitions = {};
        },
      },
      {
        key: "_pullDefinitions",
        value: function (s, r) {
          var o = r.prefix && r.iconName && r.icon ? { 0: r } : r;
          return (
            Object.keys(o).map(function (v) {
              var m = o[v],
                p = m.prefix,
                y = m.iconName,
                h = m.icon,
                g = h[2];
              s[p] || (s[p] = {}),
                g.length > 0 &&
                  g.forEach(function (E) {
                    typeof E == "string" && (s[p][E] = h);
                  }),
                (s[p][y] = h);
            }),
            s
          );
        },
      },
    ]);
  })(),
  vv = [],
  Pl = {},
  en = {},
  GE = Object.keys(en);
function BE(u, c) {
  var s = c.mixoutsTo;
  return (
    (vv = u),
    (Pl = {}),
    Object.keys(en).forEach(function (r) {
      GE.indexOf(r) === -1 && delete en[r];
    }),
    vv.forEach(function (r) {
      var o = r.mixout ? r.mixout() : {};
      if (
        (Object.keys(o).forEach(function (m) {
          typeof o[m] == "function" && (s[m] = o[m]),
            Lu(o[m]) === "object" &&
              Object.keys(o[m]).forEach(function (p) {
                s[m] || (s[m] = {}), (s[m][p] = o[m][p]);
              });
        }),
        r.hooks)
      ) {
        var v = r.hooks();
        Object.keys(v).forEach(function (m) {
          Pl[m] || (Pl[m] = []), Pl[m].push(v[m]);
        });
      }
      r.provides && r.provides(en);
    }),
    s
  );
}
function Af(u, c) {
  for (
    var s = arguments.length, r = new Array(s > 2 ? s - 2 : 0), o = 2;
    o < s;
    o++
  )
    r[o - 2] = arguments[o];
  var v = Pl[u] || [];
  return (
    v.forEach(function (m) {
      c = m.apply(null, [c].concat(r));
    }),
    c
  );
}
function cl(u) {
  for (
    var c = arguments.length, s = new Array(c > 1 ? c - 1 : 0), r = 1;
    r < c;
    r++
  )
    s[r - 1] = arguments[r];
  var o = Pl[u] || [];
  o.forEach(function (v) {
    v.apply(null, s);
  });
}
function Ya() {
  var u = arguments[0],
    c = Array.prototype.slice.call(arguments, 1);
  return en[u] ? en[u].apply(null, c) : void 0;
}
function Tf(u) {
  u.prefix === "fa" && (u.prefix = "fas");
  var c = u.iconName,
    s = u.prefix || Ba();
  if (c)
    return (c = rl(s, c) || c), ov(Eg.definitions, s, c) || ov(Mt.styles, s, c);
}
var Eg = new HE(),
  YE = function () {
    (ee.autoReplaceSvg = !1), (ee.observeMutations = !1), cl("noAuto");
  },
  XE = {
    i2svg: function () {
      var c =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return oa
        ? (cl("beforeI2svg", c), Ya("pseudoElements2svg", c), Ya("i2svg", c))
        : Promise.reject(new Error("Operation requires a DOM of some kind."));
    },
    watch: function () {
      var c =
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
        s = c.autoReplaceSvgRoot;
      ee.autoReplaceSvg === !1 && (ee.autoReplaceSvg = !0),
        (ee.observeMutations = !0),
        OE(function () {
          VE({ autoReplaceSvgRoot: s }), cl("watch", c);
        });
    },
  },
  ZE = {
    icon: function (c) {
      if (c === null) return null;
      if (Lu(c) === "object" && c.prefix && c.iconName)
        return {
          prefix: c.prefix,
          iconName: rl(c.prefix, c.iconName) || c.iconName,
        };
      if (Array.isArray(c) && c.length === 2) {
        var s = c[1].indexOf("fa-") === 0 ? c[1].slice(3) : c[1],
          r = Bu(c[0]);
        return { prefix: r, iconName: rl(r, s) || s };
      }
      if (
        typeof c == "string" &&
        (c.indexOf("".concat(ee.cssPrefix, "-")) > -1 || c.match(cE))
      ) {
        var o = Yu(c.split(" "), { skipLookups: !0 });
        return {
          prefix: o.prefix || Ba(),
          iconName: rl(o.prefix, o.iconName) || o.iconName,
        };
      }
      if (typeof c == "string") {
        var v = Ba();
        return { prefix: v, iconName: rl(v, c) || c };
      }
    },
  },
  yt = {
    noAuto: YE,
    config: ee,
    dom: XE,
    parse: ZE,
    library: Eg,
    findIconDefinition: Tf,
    toHtml: oi,
  },
  VE = function () {
    var c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      s = c.autoReplaceSvgRoot,
      r = s === void 0 ? Re : s;
    (Object.keys(Mt.styles).length > 0 || ee.autoFetchSvg) &&
      oa &&
      ee.autoReplaceSvg &&
      yt.dom.i2svg({ node: r });
  };
function Xu(u, c) {
  return (
    Object.defineProperty(u, "abstract", { get: c }),
    Object.defineProperty(u, "html", {
      get: function () {
        return u.abstract.map(function (r) {
          return oi(r);
        });
      },
    }),
    Object.defineProperty(u, "node", {
      get: function () {
        if (oa) {
          var r = Re.createElement("div");
          return (r.innerHTML = u.html), r.children;
        }
      },
    }),
    u
  );
}
function QE(u) {
  var c = u.children,
    s = u.main,
    r = u.mask,
    o = u.attributes,
    v = u.styles,
    m = u.transform;
  if (Uf(m) && s.found && !r.found) {
    var p = s.width,
      y = s.height,
      h = { x: p / y / 2, y: 0.5 };
    o.style = Gu(
      X(
        X({}, v),
        {},
        {
          "transform-origin": ""
            .concat(h.x + m.x / 16, "em ")
            .concat(h.y + m.y / 16, "em"),
        }
      )
    );
  }
  return [{ tag: "svg", attributes: o, children: c }];
}
function $E(u) {
  var c = u.prefix,
    s = u.iconName,
    r = u.children,
    o = u.attributes,
    v = u.symbol,
    m = v === !0 ? "".concat(c, "-").concat(ee.cssPrefix, "-").concat(s) : v;
  return [
    {
      tag: "svg",
      attributes: { style: "display: none;" },
      children: [
        { tag: "symbol", attributes: X(X({}, o), {}, { id: m }), children: r },
      ],
    },
  ];
}
function kE(u) {
  var c = ["aria-label", "aria-labelledby", "title", "role"];
  return c.some(function (s) {
    return s in u;
  });
}
function Gf(u) {
  var c = u.icons,
    s = c.main,
    r = c.mask,
    o = u.prefix,
    v = u.iconName,
    m = u.transform,
    p = u.symbol,
    y = u.maskId,
    h = u.extra,
    g = u.watchable,
    E = g === void 0 ? !1 : g,
    R = r.found ? r : s,
    z = R.width,
    Z = R.height,
    M = [ee.replacementClass, v ? "".concat(ee.cssPrefix, "-").concat(v) : ""]
      .filter(function (Q) {
        return h.classes.indexOf(Q) === -1;
      })
      .filter(function (Q) {
        return Q !== "" || !!Q;
      })
      .concat(h.classes)
      .join(" "),
    $ = {
      children: [],
      attributes: X(
        X({}, h.attributes),
        {},
        {
          "data-prefix": o,
          "data-icon": v,
          class: M,
          role: h.attributes.role || "img",
          viewBox: "0 0 ".concat(z, " ").concat(Z),
        }
      ),
    };
  !kE(h.attributes) &&
    !h.attributes["aria-hidden"] &&
    ($.attributes["aria-hidden"] = "true"),
    E && ($.attributes[sl] = "");
  var J = X(
      X({}, $),
      {},
      {
        prefix: o,
        iconName: v,
        main: s,
        mask: r,
        maskId: y,
        transform: m,
        symbol: p,
        styles: X({}, h.styles),
      }
    ),
    ie =
      r.found && s.found
        ? Ya("generateAbstractMask", J) || { children: [], attributes: {} }
        : Ya("generateAbstractIcon", J) || { children: [], attributes: {} },
    F = ie.children,
    fe = ie.attributes;
  return (J.children = F), (J.attributes = fe), p ? $E(J) : QE(J);
}
function gv(u) {
  var c = u.content,
    s = u.width,
    r = u.height,
    o = u.transform,
    v = u.extra,
    m = u.watchable,
    p = m === void 0 ? !1 : m,
    y = X(X({}, v.attributes), {}, { class: v.classes.join(" ") });
  p && (y[sl] = "");
  var h = X({}, v.styles);
  Uf(o) &&
    ((h.transform = AE({ transform: o, width: s, height: r })),
    (h["-webkit-transform"] = h.transform));
  var g = Gu(h);
  g.length > 0 && (y.style = g);
  var E = [];
  return E.push({ tag: "span", attributes: y, children: [c] }), E;
}
function KE(u) {
  var c = u.content,
    s = u.extra,
    r = X(X({}, s.attributes), {}, { class: s.classes.join(" ") }),
    o = Gu(s.styles);
  o.length > 0 && (r.style = o);
  var v = [];
  return v.push({ tag: "span", attributes: r, children: [c] }), v;
}
var Ec = Mt.styles;
function xf(u) {
  var c = u[0],
    s = u[1],
    r = u.slice(4),
    o = Hu(r, 1),
    v = o[0],
    m = null;
  return (
    Array.isArray(v)
      ? (m = {
          tag: "g",
          attributes: { class: "".concat(ee.cssPrefix, "-").concat(pc.GROUP) },
          children: [
            {
              tag: "path",
              attributes: {
                class: "".concat(ee.cssPrefix, "-").concat(pc.SECONDARY),
                fill: "currentColor",
                d: v[0],
              },
            },
            {
              tag: "path",
              attributes: {
                class: "".concat(ee.cssPrefix, "-").concat(pc.PRIMARY),
                fill: "currentColor",
                d: v[1],
              },
            },
          ],
        })
      : (m = { tag: "path", attributes: { fill: "currentColor", d: v } }),
    { found: !0, width: c, height: s, icon: m }
  );
}
var IE = { found: !1, width: 512, height: 512 };
function FE(u, c) {
  !tg &&
    !ee.showMissingIcons &&
    u &&
    console.error(
      'Icon with name "'.concat(u, '" and prefix "').concat(c, '" is missing.')
    );
}
function Of(u, c) {
  var s = c;
  return (
    c === "fa" && ee.styleDefault !== null && (c = Ba()),
    new Promise(function (r, o) {
      if (s === "fa") {
        var v = bg(u) || {};
        (u = v.iconName || u), (c = v.prefix || c);
      }
      if (u && c && Ec[c] && Ec[c][u]) {
        var m = Ec[c][u];
        return r(xf(m));
      }
      FE(u, c),
        r(
          X(
            X({}, IE),
            {},
            {
              icon:
                ee.showMissingIcons && u ? Ya("missingIconAbstract") || {} : {},
            }
          )
        );
    })
  );
}
var yv = function () {},
  Rf =
    ee.measurePerformance && Nu && Nu.mark && Nu.measure
      ? Nu
      : { mark: yv, measure: yv },
  ii = 'FA "7.0.0"',
  JE = function (c) {
    return (
      Rf.mark("".concat(ii, " ").concat(c, " begins")),
      function () {
        return Ag(c);
      }
    );
  },
  Ag = function (c) {
    Rf.mark("".concat(ii, " ").concat(c, " ends")),
      Rf.measure(
        "".concat(ii, " ").concat(c),
        "".concat(ii, " ").concat(c, " begins"),
        "".concat(ii, " ").concat(c, " ends")
      );
  },
  Bf = { begin: JE, end: Ag },
  Mu = function () {};
function pv(u) {
  var c = u.getAttribute ? u.getAttribute(sl) : null;
  return typeof c == "string";
}
function WE(u) {
  var c = u.getAttribute ? u.getAttribute(Mf) : null,
    s = u.getAttribute ? u.getAttribute(wf) : null;
  return c && s;
}
function PE(u) {
  return (
    u &&
    u.classList &&
    u.classList.contains &&
    u.classList.contains(ee.replacementClass)
  );
}
function e2() {
  if (ee.autoReplaceSvg === !0) return wu.replace;
  var u = wu[ee.autoReplaceSvg];
  return u || wu.replace;
}
function t2(u) {
  return Re.createElementNS("http://www.w3.org/2000/svg", u);
}
function a2(u) {
  return Re.createElement(u);
}
function Tg(u) {
  var c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    s = c.ceFn,
    r = s === void 0 ? (u.tag === "svg" ? t2 : a2) : s;
  if (typeof u == "string") return Re.createTextNode(u);
  var o = r(u.tag);
  Object.keys(u.attributes || []).forEach(function (m) {
    o.setAttribute(m, u.attributes[m]);
  });
  var v = u.children || [];
  return (
    v.forEach(function (m) {
      o.appendChild(Tg(m, { ceFn: r }));
    }),
    o
  );
}
function l2(u) {
  var c = " ".concat(u.outerHTML, " ");
  return (c = "".concat(c, "Font Awesome fontawesome.com ")), c;
}
var wu = {
  replace: function (c) {
    var s = c[0];
    if (s.parentNode)
      if (
        (c[1].forEach(function (o) {
          s.parentNode.insertBefore(Tg(o), s);
        }),
        s.getAttribute(sl) === null && ee.keepOriginalSource)
      ) {
        var r = Re.createComment(l2(s));
        s.parentNode.replaceChild(r, s);
      } else s.remove();
  },
  nest: function (c) {
    var s = c[0],
      r = c[1];
    if (~Lf(s).indexOf(ee.replacementClass)) return wu.replace(c);
    var o = new RegExp("".concat(ee.cssPrefix, "-.*"));
    if ((delete r[0].attributes.id, r[0].attributes.class)) {
      var v = r[0].attributes.class.split(" ").reduce(
        function (p, y) {
          return (
            y === ee.replacementClass || y.match(o)
              ? p.toSvg.push(y)
              : p.toNode.push(y),
            p
          );
        },
        { toNode: [], toSvg: [] }
      );
      (r[0].attributes.class = v.toSvg.join(" ")),
        v.toNode.length === 0
          ? s.removeAttribute("class")
          : s.setAttribute("class", v.toNode.join(" "));
    }
    var m = r.map(function (p) {
      return oi(p);
    }).join(`
`);
    s.setAttribute(sl, ""), (s.innerHTML = m);
  },
};
function bv(u) {
  u();
}
function xg(u, c) {
  var s = typeof c == "function" ? c : Mu;
  if (u.length === 0) s();
  else {
    var r = bv;
    ee.mutateApproach === uE && (r = Ga.requestAnimationFrame || bv),
      r(function () {
        var o = e2(),
          v = Bf.begin("mutate");
        u.map(o), v(), s();
      });
  }
}
var Yf = !1;
function Og() {
  Yf = !0;
}
function _f() {
  Yf = !1;
}
var qu = null;
function Sv(u) {
  if (nv && ee.observeMutations) {
    var c = u.treeCallback,
      s = c === void 0 ? Mu : c,
      r = u.nodeCallback,
      o = r === void 0 ? Mu : r,
      v = u.pseudoElementsCallback,
      m = v === void 0 ? Mu : v,
      p = u.observeMutationsRoot,
      y = p === void 0 ? Re : p;
    (qu = new nv(function (h) {
      if (!Yf) {
        var g = Ba();
        an(h).forEach(function (E) {
          if (
            (E.type === "childList" &&
              E.addedNodes.length > 0 &&
              !pv(E.addedNodes[0]) &&
              (ee.searchPseudoElements && m(E.target), s(E.target)),
            E.type === "attributes" &&
              E.target.parentNode &&
              ee.searchPseudoElements &&
              m([E.target], !0),
            E.type === "attributes" &&
              pv(E.target) &&
              ~dE.indexOf(E.attributeName))
          )
            if (E.attributeName === "class" && WE(E.target)) {
              var R = Yu(Lf(E.target)),
                z = R.prefix,
                Z = R.iconName;
              E.target.setAttribute(Mf, z || g),
                Z && E.target.setAttribute(wf, Z);
            } else PE(E.target) && o(E.target);
        });
      }
    })),
      oa &&
        qu.observe(y, {
          childList: !0,
          attributes: !0,
          characterData: !0,
          subtree: !0,
        });
  }
}
function n2() {
  qu && qu.disconnect();
}
function i2(u) {
  var c = u.getAttribute("style"),
    s = [];
  return (
    c &&
      (s = c.split(";").reduce(function (r, o) {
        var v = o.split(":"),
          m = v[0],
          p = v.slice(1);
        return m && p.length > 0 && (r[m] = p.join(":").trim()), r;
      }, {})),
    s
  );
}
function u2(u) {
  var c = u.getAttribute("data-prefix"),
    s = u.getAttribute("data-icon"),
    r = u.innerText !== void 0 ? u.innerText.trim() : "",
    o = Yu(Lf(u));
  return (
    o.prefix || (o.prefix = Ba()),
    c && s && ((o.prefix = c), (o.iconName = s)),
    (o.iconName && o.prefix) ||
      (o.prefix &&
        r.length > 0 &&
        (o.iconName =
          zE(o.prefix, u.innerText) || Hf(o.prefix, fg(u.innerText))),
      !o.iconName &&
        ee.autoFetchSvg &&
        u.firstChild &&
        u.firstChild.nodeType === Node.TEXT_NODE &&
        (o.iconName = u.firstChild.data)),
    o
  );
}
function r2(u) {
  var c = an(u.attributes).reduce(function (s, r) {
    return s.name !== "class" && s.name !== "style" && (s[r.name] = r.value), s;
  }, {});
  return c;
}
function s2() {
  return {
    iconName: null,
    prefix: null,
    transform: Vt,
    symbol: !1,
    mask: { iconName: null, prefix: null, rest: [] },
    maskId: null,
    extra: { classes: [], styles: {}, attributes: {} },
  };
}
function Ev(u) {
  var c =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { styleParser: !0 },
    s = u2(u),
    r = s.iconName,
    o = s.prefix,
    v = s.rest,
    m = r2(u),
    p = Af("parseNodeAttributes", {}, u),
    y = c.styleParser ? i2(u) : [];
  return X(
    {
      iconName: r,
      prefix: o,
      transform: Vt,
      mask: { iconName: null, prefix: null, rest: [] },
      maskId: null,
      symbol: !1,
      extra: { classes: v, styles: y, attributes: m },
    },
    p
  );
}
var c2 = Mt.styles;
function Rg(u) {
  var c = ee.autoReplaceSvg === "nest" ? Ev(u, { styleParser: !1 }) : Ev(u);
  return ~c.extra.classes.indexOf(ng)
    ? Ya("generateLayersText", u, c)
    : Ya("generateSvgReplacementMutation", u, c);
}
function f2() {
  return [].concat(wt(I0), wt(F0));
}
function Av(u) {
  var c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!oa) return Promise.resolve();
  var s = Re.documentElement.classList,
    r = function (E) {
      return s.add("".concat(rv, "-").concat(E));
    },
    o = function (E) {
      return s.remove("".concat(rv, "-").concat(E));
    },
    v = ee.autoFetchSvg ? f2() : w0.concat(Object.keys(c2));
  v.includes("fa") || v.push("fa");
  var m = [".".concat(ng, ":not([").concat(sl, "])")]
    .concat(
      v.map(function (g) {
        return ".".concat(g, ":not([").concat(sl, "])");
      })
    )
    .join(", ");
  if (m.length === 0) return Promise.resolve();
  var p = [];
  try {
    p = an(u.querySelectorAll(m));
  } catch {}
  if (p.length > 0) r("pending"), o("complete");
  else return Promise.resolve();
  var y = Bf.begin("onTree"),
    h = p.reduce(function (g, E) {
      try {
        var R = Rg(E);
        R && g.push(R);
      } catch (z) {
        tg || (z.name === "MissingIcon" && console.error(z));
      }
      return g;
    }, []);
  return new Promise(function (g, E) {
    Promise.all(h)
      .then(function (R) {
        xg(R, function () {
          r("active"),
            r("complete"),
            o("pending"),
            typeof c == "function" && c(),
            y(),
            g();
        });
      })
      .catch(function (R) {
        y(), E(R);
      });
  });
}
function o2(u) {
  var c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  Rg(u).then(function (s) {
    s && xg([s], c);
  });
}
function d2(u) {
  return function (c) {
    var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      r = (c || {}).icon ? c : Tf(c || {}),
      o = s.mask;
    return (
      o && (o = (o || {}).icon ? o : Tf(o || {})),
      u(r, X(X({}, s), {}, { mask: o }))
    );
  };
}
var m2 = function (c) {
    var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      r = s.transform,
      o = r === void 0 ? Vt : r,
      v = s.symbol,
      m = v === void 0 ? !1 : v,
      p = s.mask,
      y = p === void 0 ? null : p,
      h = s.maskId,
      g = h === void 0 ? null : h,
      E = s.classes,
      R = E === void 0 ? [] : E,
      z = s.attributes,
      Z = z === void 0 ? {} : z,
      M = s.styles,
      $ = M === void 0 ? {} : M;
    if (c) {
      var J = c.prefix,
        ie = c.iconName,
        F = c.icon;
      return Xu(X({ type: "icon" }, c), function () {
        return (
          cl("beforeDOMElementCreation", { iconDefinition: c, params: s }),
          Gf({
            icons: {
              main: xf(F),
              mask: y
                ? xf(y.icon)
                : { found: !1, width: null, height: null, icon: {} },
            },
            prefix: J,
            iconName: ie,
            transform: X(X({}, Vt), o),
            symbol: m,
            maskId: g,
            extra: { attributes: Z, styles: $, classes: R },
          })
        );
      });
    }
  },
  h2 = {
    mixout: function () {
      return { icon: d2(m2) };
    },
    hooks: function () {
      return {
        mutationObserverCallbacks: function (s) {
          return (s.treeCallback = Av), (s.nodeCallback = o2), s;
        },
      };
    },
    provides: function (c) {
      (c.i2svg = function (s) {
        var r = s.node,
          o = r === void 0 ? Re : r,
          v = s.callback,
          m = v === void 0 ? function () {} : v;
        return Av(o, m);
      }),
        (c.generateSvgReplacementMutation = function (s, r) {
          var o = r.iconName,
            v = r.prefix,
            m = r.transform,
            p = r.symbol,
            y = r.mask,
            h = r.maskId,
            g = r.extra;
          return new Promise(function (E, R) {
            Promise.all([
              Of(o, v),
              y.iconName
                ? Of(y.iconName, y.prefix)
                : Promise.resolve({
                    found: !1,
                    width: 512,
                    height: 512,
                    icon: {},
                  }),
            ])
              .then(function (z) {
                var Z = Hu(z, 2),
                  M = Z[0],
                  $ = Z[1];
                E([
                  s,
                  Gf({
                    icons: { main: M, mask: $ },
                    prefix: v,
                    iconName: o,
                    transform: m,
                    symbol: p,
                    maskId: h,
                    extra: g,
                    watchable: !0,
                  }),
                ]);
              })
              .catch(R);
          });
        }),
        (c.generateAbstractIcon = function (s) {
          var r = s.children,
            o = s.attributes,
            v = s.main,
            m = s.transform,
            p = s.styles,
            y = Gu(p);
          y.length > 0 && (o.style = y);
          var h;
          return (
            Uf(m) &&
              (h = Ya("generateAbstractTransformGrouping", {
                main: v,
                transform: m,
                containerWidth: v.width,
                iconWidth: v.width,
              })),
            r.push(h || v.icon),
            { children: r, attributes: o }
          );
        });
    },
  },
  v2 = {
    mixout: function () {
      return {
        layer: function (s) {
          var r =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : {},
            o = r.classes,
            v = o === void 0 ? [] : o;
          return Xu({ type: "layer" }, function () {
            cl("beforeDOMElementCreation", { assembler: s, params: r });
            var m = [];
            return (
              s(function (p) {
                Array.isArray(p)
                  ? p.map(function (y) {
                      m = m.concat(y.abstract);
                    })
                  : (m = m.concat(p.abstract));
              }),
              [
                {
                  tag: "span",
                  attributes: {
                    class: ["".concat(ee.cssPrefix, "-layers")]
                      .concat(wt(v))
                      .join(" "),
                  },
                  children: m,
                },
              ]
            );
          });
        },
      };
    },
  },
  g2 = {
    mixout: function () {
      return {
        counter: function (s) {
          var r =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          r.title;
          var o = r.classes,
            v = o === void 0 ? [] : o,
            m = r.attributes,
            p = m === void 0 ? {} : m,
            y = r.styles,
            h = y === void 0 ? {} : y;
          return Xu({ type: "counter", content: s }, function () {
            return (
              cl("beforeDOMElementCreation", { content: s, params: r }),
              KE({
                content: s.toString(),
                extra: {
                  attributes: p,
                  styles: h,
                  classes: ["".concat(ee.cssPrefix, "-layers-counter")].concat(
                    wt(v)
                  ),
                },
              })
            );
          });
        },
      };
    },
  },
  y2 = {
    mixout: function () {
      return {
        text: function (s) {
          var r =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : {},
            o = r.transform,
            v = o === void 0 ? Vt : o,
            m = r.classes,
            p = m === void 0 ? [] : m,
            y = r.attributes,
            h = y === void 0 ? {} : y,
            g = r.styles,
            E = g === void 0 ? {} : g;
          return Xu({ type: "text", content: s }, function () {
            return (
              cl("beforeDOMElementCreation", { content: s, params: r }),
              gv({
                content: s,
                transform: X(X({}, Vt), v),
                extra: {
                  attributes: h,
                  styles: E,
                  classes: ["".concat(ee.cssPrefix, "-layers-text")].concat(
                    wt(p)
                  ),
                },
              })
            );
          });
        },
      };
    },
    provides: function (c) {
      c.generateLayersText = function (s, r) {
        var o = r.transform,
          v = r.extra,
          m = null,
          p = null;
        if (C0) {
          var y = parseInt(getComputedStyle(s).fontSize, 10),
            h = s.getBoundingClientRect();
          (m = h.width / y), (p = h.height / y);
        }
        return Promise.resolve([
          s,
          gv({
            content: s.innerHTML,
            width: m,
            height: p,
            transform: o,
            extra: v,
            watchable: !0,
          }),
        ]);
      };
    },
  },
  _g = new RegExp('"', "ug"),
  Tv = [1105920, 1112319],
  xv = X(
    X(X(X({}, { FontAwesome: { normal: "fas", 400: "fas" } }), iS), nE),
    hS
  ),
  Nf = Object.keys(xv).reduce(function (u, c) {
    return (u[c.toLowerCase()] = xv[c]), u;
  }, {}),
  p2 = Object.keys(Nf).reduce(function (u, c) {
    var s = Nf[c];
    return (u[c] = s[900] || wt(Object.entries(s))[0][1]), u;
  }, {});
function b2(u) {
  var c = u.replace(_g, "");
  return fg(wt(c)[0] || "");
}
function S2(u) {
  var c = u.getPropertyValue("font-feature-settings").includes("ss01"),
    s = u.getPropertyValue("content"),
    r = s.replace(_g, ""),
    o = r.codePointAt(0),
    v = o >= Tv[0] && o <= Tv[1],
    m = r.length === 2 ? r[0] === r[1] : !1;
  return v || m || c;
}
function E2(u, c) {
  var s = u.replace(/^['"]|['"]$/g, "").toLowerCase(),
    r = parseInt(c),
    o = isNaN(r) ? "normal" : r;
  return (Nf[s] || {})[o] || p2[s];
}
function Ov(u, c) {
  var s = "".concat(iE).concat(c.replace(":", "-"));
  return new Promise(function (r, o) {
    if (u.getAttribute(s) !== null) return r();
    var v = an(u.children),
      m = v.filter(function (re) {
        return re.getAttribute(pf) === c;
      })[0],
      p = Ga.getComputedStyle(u, c),
      y = p.getPropertyValue("font-family"),
      h = y.match(fE),
      g = p.getPropertyValue("font-weight"),
      E = p.getPropertyValue("content");
    if (m && !h) return u.removeChild(m), r();
    if (h && E !== "none" && E !== "") {
      var R = p.getPropertyValue("content"),
        z = E2(y, g),
        Z = b2(R),
        M = h[0].startsWith("FontAwesome"),
        $ = S2(p),
        J = Hf(z, Z),
        ie = J;
      if (M) {
        var F = DE(Z);
        F.iconName && F.prefix && ((J = F.iconName), (z = F.prefix));
      }
      if (
        J &&
        !$ &&
        (!m || m.getAttribute(Mf) !== z || m.getAttribute(wf) !== ie)
      ) {
        u.setAttribute(s, ie), m && u.removeChild(m);
        var fe = s2(),
          Q = fe.extra;
        (Q.attributes[pf] = c),
          Of(J, z)
            .then(function (re) {
              var he = Gf(
                  X(
                    X({}, fe),
                    {},
                    {
                      icons: { main: re, mask: Sg() },
                      prefix: z,
                      iconName: ie,
                      extra: Q,
                      watchable: !0,
                    }
                  )
                ),
                W = Re.createElementNS("http://www.w3.org/2000/svg", "svg");
              c === "::before"
                ? u.insertBefore(W, u.firstChild)
                : u.appendChild(W),
                (W.outerHTML = he.map(function (Be) {
                  return oi(Be);
                }).join(`
`)),
                u.removeAttribute(s),
                r();
            })
            .catch(o);
      } else r();
    } else r();
  });
}
function A2(u) {
  return Promise.all([Ov(u, "::before"), Ov(u, "::after")]);
}
function T2(u) {
  return (
    u.parentNode !== document.head &&
    !~rE.indexOf(u.tagName.toUpperCase()) &&
    !u.getAttribute(pf) &&
    (!u.parentNode || u.parentNode.tagName !== "svg")
  );
}
var x2 = function (c) {
    return (
      !!c &&
      eg.some(function (s) {
        return c.includes(s);
      })
    );
  },
  O2 = function (c) {
    if (!c) return [];
    for (
      var s = new Set(),
        r = [c],
        o = [/(?=\s:)/, new RegExp("(?<=\\)\\)?[^,]*,)")],
        v = function () {
          var z = p[m];
          r = r.flatMap(function (Z) {
            return Z.split(z).map(function (M) {
              return M.replace(/,\s*$/, "").trim();
            });
          });
        },
        m = 0,
        p = o;
      m < p.length;
      m++
    )
      v();
    r = r.flatMap(function (R) {
      return R.includes("(")
        ? R
        : R.split(",").map(function (z) {
            return z.trim();
          });
    });
    var y = Cu(r),
      h;
    try {
      for (y.s(); !(h = y.n()).done; ) {
        var g = h.value;
        if (x2(g)) {
          var E = eg.reduce(function (R, z) {
            return R.replace(z, "");
          }, g);
          E !== "" && E !== "*" && s.add(E);
        }
      }
    } catch (R) {
      y.e(R);
    } finally {
      y.f();
    }
    return s;
  };
function Rv(u) {
  var c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  if (oa) {
    var s;
    if (c) s = u;
    else if (ee.searchPseudoElementsFullScan) s = u.querySelectorAll("*");
    else {
      var r = new Set(),
        o = Cu(document.styleSheets),
        v;
      try {
        for (o.s(); !(v = o.n()).done; ) {
          var m = v.value;
          try {
            var p = Cu(m.cssRules),
              y;
            try {
              for (p.s(); !(y = p.n()).done; ) {
                var h = y.value,
                  g = O2(h.selectorText),
                  E = Cu(g),
                  R;
                try {
                  for (E.s(); !(R = E.n()).done; ) {
                    var z = R.value;
                    r.add(z);
                  }
                } catch (M) {
                  E.e(M);
                } finally {
                  E.f();
                }
              }
            } catch (M) {
              p.e(M);
            } finally {
              p.f();
            }
          } catch (M) {
            ee.searchPseudoElementsWarnings &&
              console.warn(
                "Font Awesome: cannot parse stylesheet: "
                  .concat(m.href, " (")
                  .concat(
                    M.message,
                    `)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`
                  )
              );
          }
        }
      } catch (M) {
        o.e(M);
      } finally {
        o.f();
      }
      if (!r.size) return;
      var Z = Array.from(r).join(", ");
      try {
        s = u.querySelectorAll(Z);
      } catch {}
    }
    return new Promise(function (M, $) {
      var J = an(s).filter(T2).map(A2),
        ie = Bf.begin("searchPseudoElements");
      Og(),
        Promise.all(J)
          .then(function () {
            ie(), _f(), M();
          })
          .catch(function () {
            ie(), _f(), $();
          });
    });
  }
}
var R2 = {
    hooks: function () {
      return {
        mutationObserverCallbacks: function (s) {
          return (s.pseudoElementsCallback = Rv), s;
        },
      };
    },
    provides: function (c) {
      c.pseudoElements2svg = function (s) {
        var r = s.node,
          o = r === void 0 ? Re : r;
        ee.searchPseudoElements && Rv(o);
      };
    },
  },
  _v = !1,
  _2 = {
    mixout: function () {
      return {
        dom: {
          unwatch: function () {
            Og(), (_v = !0);
          },
        },
      };
    },
    hooks: function () {
      return {
        bootstrap: function () {
          Sv(Af("mutationObserverCallbacks", {}));
        },
        noAuto: function () {
          n2();
        },
        watch: function (s) {
          var r = s.observeMutationsRoot;
          _v
            ? _f()
            : Sv(Af("mutationObserverCallbacks", { observeMutationsRoot: r }));
        },
      };
    },
  },
  Nv = function (c) {
    var s = { size: 16, x: 0, y: 0, flipX: !1, flipY: !1, rotate: 0 };
    return c
      .toLowerCase()
      .split(" ")
      .reduce(function (r, o) {
        var v = o.toLowerCase().split("-"),
          m = v[0],
          p = v.slice(1).join("-");
        if (m && p === "h") return (r.flipX = !0), r;
        if (m && p === "v") return (r.flipY = !0), r;
        if (((p = parseFloat(p)), isNaN(p))) return r;
        switch (m) {
          case "grow":
            r.size = r.size + p;
            break;
          case "shrink":
            r.size = r.size - p;
            break;
          case "left":
            r.x = r.x - p;
            break;
          case "right":
            r.x = r.x + p;
            break;
          case "up":
            r.y = r.y - p;
            break;
          case "down":
            r.y = r.y + p;
            break;
          case "rotate":
            r.rotate = r.rotate + p;
            break;
        }
        return r;
      }, s);
  },
  N2 = {
    mixout: function () {
      return {
        parse: {
          transform: function (s) {
            return Nv(s);
          },
        },
      };
    },
    hooks: function () {
      return {
        parseNodeAttributes: function (s, r) {
          var o = r.getAttribute("data-fa-transform");
          return o && (s.transform = Nv(o)), s;
        },
      };
    },
    provides: function (c) {
      c.generateAbstractTransformGrouping = function (s) {
        var r = s.main,
          o = s.transform,
          v = s.containerWidth,
          m = s.iconWidth,
          p = { transform: "translate(".concat(v / 2, " 256)") },
          y = "translate(".concat(o.x * 32, ", ").concat(o.y * 32, ") "),
          h = "scale("
            .concat((o.size / 16) * (o.flipX ? -1 : 1), ", ")
            .concat((o.size / 16) * (o.flipY ? -1 : 1), ") "),
          g = "rotate(".concat(o.rotate, " 0 0)"),
          E = { transform: "".concat(y, " ").concat(h, " ").concat(g) },
          R = { transform: "translate(".concat((m / 2) * -1, " -256)") },
          z = { outer: p, inner: E, path: R };
        return {
          tag: "g",
          attributes: X({}, z.outer),
          children: [
            {
              tag: "g",
              attributes: X({}, z.inner),
              children: [
                {
                  tag: r.icon.tag,
                  children: r.icon.children,
                  attributes: X(X({}, r.icon.attributes), z.path),
                },
              ],
            },
          ],
        };
      };
    },
  },
  Ac = { x: 0, y: 0, width: "100%", height: "100%" };
function jv(u) {
  var c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return (
    u.attributes && (u.attributes.fill || c) && (u.attributes.fill = "black"), u
  );
}
function j2(u) {
  return u.tag === "g" ? u.children : [u];
}
var z2 = {
    hooks: function () {
      return {
        parseNodeAttributes: function (s, r) {
          var o = r.getAttribute("data-fa-mask"),
            v = o
              ? Yu(
                  o.split(" ").map(function (m) {
                    return m.trim();
                  })
                )
              : Sg();
          return (
            v.prefix || (v.prefix = Ba()),
            (s.mask = v),
            (s.maskId = r.getAttribute("data-fa-mask-id")),
            s
          );
        },
      };
    },
    provides: function (c) {
      c.generateAbstractMask = function (s) {
        var r = s.children,
          o = s.attributes,
          v = s.main,
          m = s.mask,
          p = s.maskId,
          y = s.transform,
          h = v.width,
          g = v.icon,
          E = m.width,
          R = m.icon,
          z = EE({ transform: y, containerWidth: E, iconWidth: h }),
          Z = { tag: "rect", attributes: X(X({}, Ac), {}, { fill: "white" }) },
          M = g.children ? { children: g.children.map(jv) } : {},
          $ = {
            tag: "g",
            attributes: X({}, z.inner),
            children: [
              jv(
                X({ tag: g.tag, attributes: X(X({}, g.attributes), z.path) }, M)
              ),
            ],
          },
          J = { tag: "g", attributes: X({}, z.outer), children: [$] },
          ie = "mask-".concat(p || cv()),
          F = "clip-".concat(p || cv()),
          fe = {
            tag: "mask",
            attributes: X(
              X({}, Ac),
              {},
              {
                id: ie,
                maskUnits: "userSpaceOnUse",
                maskContentUnits: "userSpaceOnUse",
              }
            ),
            children: [Z, J],
          },
          Q = {
            tag: "defs",
            children: [
              { tag: "clipPath", attributes: { id: F }, children: j2(R) },
              fe,
            ],
          };
        return (
          r.push(Q, {
            tag: "rect",
            attributes: X(
              {
                fill: "currentColor",
                "clip-path": "url(#".concat(F, ")"),
                mask: "url(#".concat(ie, ")"),
              },
              Ac
            ),
          }),
          { children: r, attributes: o }
        );
      };
    },
  },
  D2 = {
    provides: function (c) {
      var s = !1;
      Ga.matchMedia &&
        (s = Ga.matchMedia("(prefers-reduced-motion: reduce)").matches),
        (c.missingIconAbstract = function () {
          var r = [],
            o = { fill: "currentColor" },
            v = { attributeType: "XML", repeatCount: "indefinite", dur: "2s" };
          r.push({
            tag: "path",
            attributes: X(
              X({}, o),
              {},
              {
                d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z",
              }
            ),
          });
          var m = X(X({}, v), {}, { attributeName: "opacity" }),
            p = {
              tag: "circle",
              attributes: X(X({}, o), {}, { cx: "256", cy: "364", r: "28" }),
              children: [],
            };
          return (
            s ||
              p.children.push(
                {
                  tag: "animate",
                  attributes: X(
                    X({}, v),
                    {},
                    { attributeName: "r", values: "28;14;28;28;14;28;" }
                  ),
                },
                {
                  tag: "animate",
                  attributes: X(X({}, m), {}, { values: "1;0;1;1;0;1;" }),
                }
              ),
            r.push(p),
            r.push({
              tag: "path",
              attributes: X(
                X({}, o),
                {},
                {
                  opacity: "1",
                  d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z",
                }
              ),
              children: s
                ? []
                : [
                    {
                      tag: "animate",
                      attributes: X(X({}, m), {}, { values: "1;0;0;0;0;1;" }),
                    },
                  ],
            }),
            s ||
              r.push({
                tag: "path",
                attributes: X(
                  X({}, o),
                  {},
                  {
                    opacity: "0",
                    d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z",
                  }
                ),
                children: [
                  {
                    tag: "animate",
                    attributes: X(X({}, m), {}, { values: "0;0;1;1;0;0;" }),
                  },
                ],
              }),
            { tag: "g", attributes: { class: "missing" }, children: r }
          );
        });
    },
  },
  C2 = {
    hooks: function () {
      return {
        parseNodeAttributes: function (s, r) {
          var o = r.getAttribute("data-fa-symbol"),
            v = o === null ? !1 : o === "" ? !0 : o;
          return (s.symbol = v), s;
        },
      };
    },
  },
  M2 = [xE, h2, v2, g2, y2, R2, _2, N2, z2, D2, C2];
BE(M2, { mixoutsTo: yt });
yt.noAuto;
yt.config;
yt.library;
yt.dom;
var Ng = yt.parse;
yt.findIconDefinition;
yt.toHtml;
var w2 = yt.icon;
yt.layer;
yt.text;
yt.counter;
var zu = { exports: {} },
  Tc,
  zv;
function Zu() {
  if (zv) return Tc;
  zv = 1;
  const u = "2.0.0",
    c = 256,
    s = Number.MAX_SAFE_INTEGER || 9007199254740991,
    r = 16,
    o = c - 6;
  return (
    (Tc = {
      MAX_LENGTH: c,
      MAX_SAFE_COMPONENT_LENGTH: r,
      MAX_SAFE_BUILD_LENGTH: o,
      MAX_SAFE_INTEGER: s,
      RELEASE_TYPES: [
        "major",
        "premajor",
        "minor",
        "preminor",
        "patch",
        "prepatch",
        "prerelease",
      ],
      SEMVER_SPEC_VERSION: u,
      FLAG_INCLUDE_PRERELEASE: 1,
      FLAG_LOOSE: 2,
    }),
    Tc
  );
}
var xc, Dv;
function Vu() {
  if (Dv) return xc;
  Dv = 1;
  var u = {};
  return (
    (xc =
      typeof process == "object" &&
      u &&
      u.NODE_DEBUG &&
      /\bsemver\b/i.test(u.NODE_DEBUG)
        ? (...s) => console.error("SEMVER", ...s)
        : () => {}),
    xc
  );
}
var Cv;
function di() {
  return (
    Cv ||
      ((Cv = 1),
      (function (u, c) {
        const {
            MAX_SAFE_COMPONENT_LENGTH: s,
            MAX_SAFE_BUILD_LENGTH: r,
            MAX_LENGTH: o,
          } = Zu(),
          v = Vu();
        c = u.exports = {};
        const m = (c.re = []),
          p = (c.safeRe = []),
          y = (c.src = []),
          h = (c.safeSrc = []),
          g = (c.t = {});
        let E = 0;
        const R = "[a-zA-Z0-9-]",
          z = [
            ["\\s", 1],
            ["\\d", o],
            [R, r],
          ],
          Z = ($) => {
            for (const [J, ie] of z)
              $ = $.split(`${J}*`)
                .join(`${J}{0,${ie}}`)
                .split(`${J}+`)
                .join(`${J}{1,${ie}}`);
            return $;
          },
          M = ($, J, ie) => {
            const F = Z(J),
              fe = E++;
            v($, fe, J),
              (g[$] = fe),
              (y[fe] = J),
              (h[fe] = F),
              (m[fe] = new RegExp(J, ie ? "g" : void 0)),
              (p[fe] = new RegExp(F, ie ? "g" : void 0));
          };
        M("NUMERICIDENTIFIER", "0|[1-9]\\d*"),
          M("NUMERICIDENTIFIERLOOSE", "\\d+"),
          M("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${R}*`),
          M(
            "MAINVERSION",
            `(${y[g.NUMERICIDENTIFIER]})\\.(${y[g.NUMERICIDENTIFIER]})\\.(${
              y[g.NUMERICIDENTIFIER]
            })`
          ),
          M(
            "MAINVERSIONLOOSE",
            `(${y[g.NUMERICIDENTIFIERLOOSE]})\\.(${
              y[g.NUMERICIDENTIFIERLOOSE]
            })\\.(${y[g.NUMERICIDENTIFIERLOOSE]})`
          ),
          M(
            "PRERELEASEIDENTIFIER",
            `(?:${y[g.NONNUMERICIDENTIFIER]}|${y[g.NUMERICIDENTIFIER]})`
          ),
          M(
            "PRERELEASEIDENTIFIERLOOSE",
            `(?:${y[g.NONNUMERICIDENTIFIER]}|${y[g.NUMERICIDENTIFIERLOOSE]})`
          ),
          M(
            "PRERELEASE",
            `(?:-(${y[g.PRERELEASEIDENTIFIER]}(?:\\.${
              y[g.PRERELEASEIDENTIFIER]
            })*))`
          ),
          M(
            "PRERELEASELOOSE",
            `(?:-?(${y[g.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${
              y[g.PRERELEASEIDENTIFIERLOOSE]
            })*))`
          ),
          M("BUILDIDENTIFIER", `${R}+`),
          M(
            "BUILD",
            `(?:\\+(${y[g.BUILDIDENTIFIER]}(?:\\.${y[g.BUILDIDENTIFIER]})*))`
          ),
          M(
            "FULLPLAIN",
            `v?${y[g.MAINVERSION]}${y[g.PRERELEASE]}?${y[g.BUILD]}?`
          ),
          M("FULL", `^${y[g.FULLPLAIN]}$`),
          M(
            "LOOSEPLAIN",
            `[v=\\s]*${y[g.MAINVERSIONLOOSE]}${y[g.PRERELEASELOOSE]}?${
              y[g.BUILD]
            }?`
          ),
          M("LOOSE", `^${y[g.LOOSEPLAIN]}$`),
          M("GTLT", "((?:<|>)?=?)"),
          M("XRANGEIDENTIFIERLOOSE", `${y[g.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`),
          M("XRANGEIDENTIFIER", `${y[g.NUMERICIDENTIFIER]}|x|X|\\*`),
          M(
            "XRANGEPLAIN",
            `[v=\\s]*(${y[g.XRANGEIDENTIFIER]})(?:\\.(${
              y[g.XRANGEIDENTIFIER]
            })(?:\\.(${y[g.XRANGEIDENTIFIER]})(?:${y[g.PRERELEASE]})?${
              y[g.BUILD]
            }?)?)?`
          ),
          M(
            "XRANGEPLAINLOOSE",
            `[v=\\s]*(${y[g.XRANGEIDENTIFIERLOOSE]})(?:\\.(${
              y[g.XRANGEIDENTIFIERLOOSE]
            })(?:\\.(${y[g.XRANGEIDENTIFIERLOOSE]})(?:${
              y[g.PRERELEASELOOSE]
            })?${y[g.BUILD]}?)?)?`
          ),
          M("XRANGE", `^${y[g.GTLT]}\\s*${y[g.XRANGEPLAIN]}$`),
          M("XRANGELOOSE", `^${y[g.GTLT]}\\s*${y[g.XRANGEPLAINLOOSE]}$`),
          M(
            "COERCEPLAIN",
            `(^|[^\\d])(\\d{1,${s}})(?:\\.(\\d{1,${s}}))?(?:\\.(\\d{1,${s}}))?`
          ),
          M("COERCE", `${y[g.COERCEPLAIN]}(?:$|[^\\d])`),
          M(
            "COERCEFULL",
            y[g.COERCEPLAIN] +
              `(?:${y[g.PRERELEASE]})?(?:${y[g.BUILD]})?(?:$|[^\\d])`
          ),
          M("COERCERTL", y[g.COERCE], !0),
          M("COERCERTLFULL", y[g.COERCEFULL], !0),
          M("LONETILDE", "(?:~>?)"),
          M("TILDETRIM", `(\\s*)${y[g.LONETILDE]}\\s+`, !0),
          (c.tildeTrimReplace = "$1~"),
          M("TILDE", `^${y[g.LONETILDE]}${y[g.XRANGEPLAIN]}$`),
          M("TILDELOOSE", `^${y[g.LONETILDE]}${y[g.XRANGEPLAINLOOSE]}$`),
          M("LONECARET", "(?:\\^)"),
          M("CARETTRIM", `(\\s*)${y[g.LONECARET]}\\s+`, !0),
          (c.caretTrimReplace = "$1^"),
          M("CARET", `^${y[g.LONECARET]}${y[g.XRANGEPLAIN]}$`),
          M("CARETLOOSE", `^${y[g.LONECARET]}${y[g.XRANGEPLAINLOOSE]}$`),
          M("COMPARATORLOOSE", `^${y[g.GTLT]}\\s*(${y[g.LOOSEPLAIN]})$|^$`),
          M("COMPARATOR", `^${y[g.GTLT]}\\s*(${y[g.FULLPLAIN]})$|^$`),
          M(
            "COMPARATORTRIM",
            `(\\s*)${y[g.GTLT]}\\s*(${y[g.LOOSEPLAIN]}|${y[g.XRANGEPLAIN]})`,
            !0
          ),
          (c.comparatorTrimReplace = "$1$2$3"),
          M(
            "HYPHENRANGE",
            `^\\s*(${y[g.XRANGEPLAIN]})\\s+-\\s+(${y[g.XRANGEPLAIN]})\\s*$`
          ),
          M(
            "HYPHENRANGELOOSE",
            `^\\s*(${y[g.XRANGEPLAINLOOSE]})\\s+-\\s+(${
              y[g.XRANGEPLAINLOOSE]
            })\\s*$`
          ),
          M("STAR", "(<|>)?=?\\s*\\*"),
          M("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"),
          M("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
      })(zu, zu.exports)),
    zu.exports
  );
}
var Oc, Mv;
function Xf() {
  if (Mv) return Oc;
  Mv = 1;
  const u = Object.freeze({ loose: !0 }),
    c = Object.freeze({});
  return (Oc = (r) => (r ? (typeof r != "object" ? u : r) : c)), Oc;
}
var Rc, wv;
function jg() {
  if (wv) return Rc;
  wv = 1;
  const u = /^[0-9]+$/,
    c = (r, o) => {
      const v = u.test(r),
        m = u.test(o);
      return (
        v && m && ((r = +r), (o = +o)),
        r === o ? 0 : v && !m ? -1 : m && !v ? 1 : r < o ? -1 : 1
      );
    };
  return (
    (Rc = { compareIdentifiers: c, rcompareIdentifiers: (r, o) => c(o, r) }), Rc
  );
}
var _c, Lv;
function Pe() {
  if (Lv) return _c;
  Lv = 1;
  const u = Vu(),
    { MAX_LENGTH: c, MAX_SAFE_INTEGER: s } = Zu(),
    { safeRe: r, t: o } = di(),
    v = Xf(),
    { compareIdentifiers: m } = jg();
  class p {
    constructor(h, g) {
      if (((g = v(g)), h instanceof p)) {
        if (
          h.loose === !!g.loose &&
          h.includePrerelease === !!g.includePrerelease
        )
          return h;
        h = h.version;
      } else if (typeof h != "string")
        throw new TypeError(
          `Invalid version. Must be a string. Got type "${typeof h}".`
        );
      if (h.length > c)
        throw new TypeError(`version is longer than ${c} characters`);
      u("SemVer", h, g),
        (this.options = g),
        (this.loose = !!g.loose),
        (this.includePrerelease = !!g.includePrerelease);
      const E = h.trim().match(g.loose ? r[o.LOOSE] : r[o.FULL]);
      if (!E) throw new TypeError(`Invalid Version: ${h}`);
      if (
        ((this.raw = h),
        (this.major = +E[1]),
        (this.minor = +E[2]),
        (this.patch = +E[3]),
        this.major > s || this.major < 0)
      )
        throw new TypeError("Invalid major version");
      if (this.minor > s || this.minor < 0)
        throw new TypeError("Invalid minor version");
      if (this.patch > s || this.patch < 0)
        throw new TypeError("Invalid patch version");
      E[4]
        ? (this.prerelease = E[4].split(".").map((R) => {
            if (/^[0-9]+$/.test(R)) {
              const z = +R;
              if (z >= 0 && z < s) return z;
            }
            return R;
          }))
        : (this.prerelease = []),
        (this.build = E[5] ? E[5].split(".") : []),
        this.format();
    }
    format() {
      return (
        (this.version = `${this.major}.${this.minor}.${this.patch}`),
        this.prerelease.length &&
          (this.version += `-${this.prerelease.join(".")}`),
        this.version
      );
    }
    toString() {
      return this.version;
    }
    compare(h) {
      if (
        (u("SemVer.compare", this.version, this.options, h), !(h instanceof p))
      ) {
        if (typeof h == "string" && h === this.version) return 0;
        h = new p(h, this.options);
      }
      return h.version === this.version
        ? 0
        : this.compareMain(h) || this.comparePre(h);
    }
    compareMain(h) {
      return (
        h instanceof p || (h = new p(h, this.options)),
        m(this.major, h.major) ||
          m(this.minor, h.minor) ||
          m(this.patch, h.patch)
      );
    }
    comparePre(h) {
      if (
        (h instanceof p || (h = new p(h, this.options)),
        this.prerelease.length && !h.prerelease.length)
      )
        return -1;
      if (!this.prerelease.length && h.prerelease.length) return 1;
      if (!this.prerelease.length && !h.prerelease.length) return 0;
      let g = 0;
      do {
        const E = this.prerelease[g],
          R = h.prerelease[g];
        if ((u("prerelease compare", g, E, R), E === void 0 && R === void 0))
          return 0;
        if (R === void 0) return 1;
        if (E === void 0) return -1;
        if (E === R) continue;
        return m(E, R);
      } while (++g);
    }
    compareBuild(h) {
      h instanceof p || (h = new p(h, this.options));
      let g = 0;
      do {
        const E = this.build[g],
          R = h.build[g];
        if ((u("build compare", g, E, R), E === void 0 && R === void 0))
          return 0;
        if (R === void 0) return 1;
        if (E === void 0) return -1;
        if (E === R) continue;
        return m(E, R);
      } while (++g);
    }
    inc(h, g, E) {
      if (h.startsWith("pre")) {
        if (!g && E === !1)
          throw new Error("invalid increment argument: identifier is empty");
        if (g) {
          const R = `-${g}`.match(
            this.options.loose ? r[o.PRERELEASELOOSE] : r[o.PRERELEASE]
          );
          if (!R || R[1] !== g) throw new Error(`invalid identifier: ${g}`);
        }
      }
      switch (h) {
        case "premajor":
          (this.prerelease.length = 0),
            (this.patch = 0),
            (this.minor = 0),
            this.major++,
            this.inc("pre", g, E);
          break;
        case "preminor":
          (this.prerelease.length = 0),
            (this.patch = 0),
            this.minor++,
            this.inc("pre", g, E);
          break;
        case "prepatch":
          (this.prerelease.length = 0),
            this.inc("patch", g, E),
            this.inc("pre", g, E);
          break;
        case "prerelease":
          this.prerelease.length === 0 && this.inc("patch", g, E),
            this.inc("pre", g, E);
          break;
        case "release":
          if (this.prerelease.length === 0)
            throw new Error(`version ${this.raw} is not a prerelease`);
          this.prerelease.length = 0;
          break;
        case "major":
          (this.minor !== 0 ||
            this.patch !== 0 ||
            this.prerelease.length === 0) &&
            this.major++,
            (this.minor = 0),
            (this.patch = 0),
            (this.prerelease = []);
          break;
        case "minor":
          (this.patch !== 0 || this.prerelease.length === 0) && this.minor++,
            (this.patch = 0),
            (this.prerelease = []);
          break;
        case "patch":
          this.prerelease.length === 0 && this.patch++, (this.prerelease = []);
          break;
        case "pre": {
          const R = Number(E) ? 1 : 0;
          if (this.prerelease.length === 0) this.prerelease = [R];
          else {
            let z = this.prerelease.length;
            for (; --z >= 0; )
              typeof this.prerelease[z] == "number" &&
                (this.prerelease[z]++, (z = -2));
            if (z === -1) {
              if (g === this.prerelease.join(".") && E === !1)
                throw new Error(
                  "invalid increment argument: identifier already exists"
                );
              this.prerelease.push(R);
            }
          }
          if (g) {
            let z = [g, R];
            E === !1 && (z = [g]),
              m(this.prerelease[0], g) === 0
                ? isNaN(this.prerelease[1]) && (this.prerelease = z)
                : (this.prerelease = z);
          }
          break;
        }
        default:
          throw new Error(`invalid increment argument: ${h}`);
      }
      return (
        (this.raw = this.format()),
        this.build.length && (this.raw += `+${this.build.join(".")}`),
        this
      );
    }
  }
  return (_c = p), _c;
}
var Nc, Uv;
function ln() {
  if (Uv) return Nc;
  Uv = 1;
  const u = Pe();
  return (
    (Nc = (s, r, o = !1) => {
      if (s instanceof u) return s;
      try {
        return new u(s, r);
      } catch (v) {
        if (!o) return null;
        throw v;
      }
    }),
    Nc
  );
}
var jc, qv;
function L2() {
  if (qv) return jc;
  qv = 1;
  const u = ln();
  return (
    (jc = (s, r) => {
      const o = u(s, r);
      return o ? o.version : null;
    }),
    jc
  );
}
var zc, Hv;
function U2() {
  if (Hv) return zc;
  Hv = 1;
  const u = ln();
  return (
    (zc = (s, r) => {
      const o = u(s.trim().replace(/^[=v]+/, ""), r);
      return o ? o.version : null;
    }),
    zc
  );
}
var Dc, Gv;
function q2() {
  if (Gv) return Dc;
  Gv = 1;
  const u = Pe();
  return (
    (Dc = (s, r, o, v, m) => {
      typeof o == "string" && ((m = v), (v = o), (o = void 0));
      try {
        return new u(s instanceof u ? s.version : s, o).inc(r, v, m).version;
      } catch {
        return null;
      }
    }),
    Dc
  );
}
var Cc, Bv;
function H2() {
  if (Bv) return Cc;
  Bv = 1;
  const u = ln();
  return (
    (Cc = (s, r) => {
      const o = u(s, null, !0),
        v = u(r, null, !0),
        m = o.compare(v);
      if (m === 0) return null;
      const p = m > 0,
        y = p ? o : v,
        h = p ? v : o,
        g = !!y.prerelease.length;
      if (!!h.prerelease.length && !g) {
        if (!h.patch && !h.minor) return "major";
        if (h.compareMain(y) === 0)
          return h.minor && !h.patch ? "minor" : "patch";
      }
      const R = g ? "pre" : "";
      return o.major !== v.major
        ? R + "major"
        : o.minor !== v.minor
        ? R + "minor"
        : o.patch !== v.patch
        ? R + "patch"
        : "prerelease";
    }),
    Cc
  );
}
var Mc, Yv;
function G2() {
  if (Yv) return Mc;
  Yv = 1;
  const u = Pe();
  return (Mc = (s, r) => new u(s, r).major), Mc;
}
var wc, Xv;
function B2() {
  if (Xv) return wc;
  Xv = 1;
  const u = Pe();
  return (wc = (s, r) => new u(s, r).minor), wc;
}
var Lc, Zv;
function Y2() {
  if (Zv) return Lc;
  Zv = 1;
  const u = Pe();
  return (Lc = (s, r) => new u(s, r).patch), Lc;
}
var Uc, Vv;
function X2() {
  if (Vv) return Uc;
  Vv = 1;
  const u = ln();
  return (
    (Uc = (s, r) => {
      const o = u(s, r);
      return o && o.prerelease.length ? o.prerelease : null;
    }),
    Uc
  );
}
var qc, Qv;
function Lt() {
  if (Qv) return qc;
  Qv = 1;
  const u = Pe();
  return (qc = (s, r, o) => new u(s, o).compare(new u(r, o))), qc;
}
var Hc, $v;
function Z2() {
  if ($v) return Hc;
  $v = 1;
  const u = Lt();
  return (Hc = (s, r, o) => u(r, s, o)), Hc;
}
var Gc, kv;
function V2() {
  if (kv) return Gc;
  kv = 1;
  const u = Lt();
  return (Gc = (s, r) => u(s, r, !0)), Gc;
}
var Bc, Kv;
function Zf() {
  if (Kv) return Bc;
  Kv = 1;
  const u = Pe();
  return (
    (Bc = (s, r, o) => {
      const v = new u(s, o),
        m = new u(r, o);
      return v.compare(m) || v.compareBuild(m);
    }),
    Bc
  );
}
var Yc, Iv;
function Q2() {
  if (Iv) return Yc;
  Iv = 1;
  const u = Zf();
  return (Yc = (s, r) => s.sort((o, v) => u(o, v, r))), Yc;
}
var Xc, Fv;
function $2() {
  if (Fv) return Xc;
  Fv = 1;
  const u = Zf();
  return (Xc = (s, r) => s.sort((o, v) => u(v, o, r))), Xc;
}
var Zc, Jv;
function Qu() {
  if (Jv) return Zc;
  Jv = 1;
  const u = Lt();
  return (Zc = (s, r, o) => u(s, r, o) > 0), Zc;
}
var Vc, Wv;
function Vf() {
  if (Wv) return Vc;
  Wv = 1;
  const u = Lt();
  return (Vc = (s, r, o) => u(s, r, o) < 0), Vc;
}
var Qc, Pv;
function zg() {
  if (Pv) return Qc;
  Pv = 1;
  const u = Lt();
  return (Qc = (s, r, o) => u(s, r, o) === 0), Qc;
}
var $c, e0;
function Dg() {
  if (e0) return $c;
  e0 = 1;
  const u = Lt();
  return ($c = (s, r, o) => u(s, r, o) !== 0), $c;
}
var kc, t0;
function Qf() {
  if (t0) return kc;
  t0 = 1;
  const u = Lt();
  return (kc = (s, r, o) => u(s, r, o) >= 0), kc;
}
var Kc, a0;
function $f() {
  if (a0) return Kc;
  a0 = 1;
  const u = Lt();
  return (Kc = (s, r, o) => u(s, r, o) <= 0), Kc;
}
var Ic, l0;
function Cg() {
  if (l0) return Ic;
  l0 = 1;
  const u = zg(),
    c = Dg(),
    s = Qu(),
    r = Qf(),
    o = Vf(),
    v = $f();
  return (
    (Ic = (p, y, h, g) => {
      switch (y) {
        case "===":
          return (
            typeof p == "object" && (p = p.version),
            typeof h == "object" && (h = h.version),
            p === h
          );
        case "!==":
          return (
            typeof p == "object" && (p = p.version),
            typeof h == "object" && (h = h.version),
            p !== h
          );
        case "":
        case "=":
        case "==":
          return u(p, h, g);
        case "!=":
          return c(p, h, g);
        case ">":
          return s(p, h, g);
        case ">=":
          return r(p, h, g);
        case "<":
          return o(p, h, g);
        case "<=":
          return v(p, h, g);
        default:
          throw new TypeError(`Invalid operator: ${y}`);
      }
    }),
    Ic
  );
}
var Fc, n0;
function k2() {
  if (n0) return Fc;
  n0 = 1;
  const u = Pe(),
    c = ln(),
    { safeRe: s, t: r } = di();
  return (
    (Fc = (v, m) => {
      if (v instanceof u) return v;
      if ((typeof v == "number" && (v = String(v)), typeof v != "string"))
        return null;
      m = m || {};
      let p = null;
      if (!m.rtl)
        p = v.match(m.includePrerelease ? s[r.COERCEFULL] : s[r.COERCE]);
      else {
        const z = m.includePrerelease ? s[r.COERCERTLFULL] : s[r.COERCERTL];
        let Z;
        for (; (Z = z.exec(v)) && (!p || p.index + p[0].length !== v.length); )
          (!p || Z.index + Z[0].length !== p.index + p[0].length) && (p = Z),
            (z.lastIndex = Z.index + Z[1].length + Z[2].length);
        z.lastIndex = -1;
      }
      if (p === null) return null;
      const y = p[2],
        h = p[3] || "0",
        g = p[4] || "0",
        E = m.includePrerelease && p[5] ? `-${p[5]}` : "",
        R = m.includePrerelease && p[6] ? `+${p[6]}` : "";
      return c(`${y}.${h}.${g}${E}${R}`, m);
    }),
    Fc
  );
}
var Jc, i0;
function K2() {
  if (i0) return Jc;
  i0 = 1;
  class u {
    constructor() {
      (this.max = 1e3), (this.map = new Map());
    }
    get(s) {
      const r = this.map.get(s);
      if (r !== void 0) return this.map.delete(s), this.map.set(s, r), r;
    }
    delete(s) {
      return this.map.delete(s);
    }
    set(s, r) {
      if (!this.delete(s) && r !== void 0) {
        if (this.map.size >= this.max) {
          const v = this.map.keys().next().value;
          this.delete(v);
        }
        this.map.set(s, r);
      }
      return this;
    }
  }
  return (Jc = u), Jc;
}
var Wc, u0;
function Ut() {
  if (u0) return Wc;
  u0 = 1;
  const u = /\s+/g;
  class c {
    constructor(Y, O) {
      if (((O = o(O)), Y instanceof c))
        return Y.loose === !!O.loose &&
          Y.includePrerelease === !!O.includePrerelease
          ? Y
          : new c(Y.raw, O);
      if (Y instanceof v)
        return (
          (this.raw = Y.value),
          (this.set = [[Y]]),
          (this.formatted = void 0),
          this
        );
      if (
        ((this.options = O),
        (this.loose = !!O.loose),
        (this.includePrerelease = !!O.includePrerelease),
        (this.raw = Y.trim().replace(u, " ")),
        (this.set = this.raw
          .split("||")
          .map((w) => this.parseRange(w.trim()))
          .filter((w) => w.length)),
        !this.set.length)
      )
        throw new TypeError(`Invalid SemVer Range: ${this.raw}`);
      if (this.set.length > 1) {
        const w = this.set[0];
        if (
          ((this.set = this.set.filter((G) => !M(G[0]))), this.set.length === 0)
        )
          this.set = [w];
        else if (this.set.length > 1) {
          for (const G of this.set)
            if (G.length === 1 && $(G[0])) {
              this.set = [G];
              break;
            }
        }
      }
      this.formatted = void 0;
    }
    get range() {
      if (this.formatted === void 0) {
        this.formatted = "";
        for (let Y = 0; Y < this.set.length; Y++) {
          Y > 0 && (this.formatted += "||");
          const O = this.set[Y];
          for (let w = 0; w < O.length; w++)
            w > 0 && (this.formatted += " "),
              (this.formatted += O[w].toString().trim());
        }
      }
      return this.formatted;
    }
    format() {
      return this.range;
    }
    toString() {
      return this.range;
    }
    parseRange(Y) {
      const w =
          ((this.options.includePrerelease && z) | (this.options.loose && Z)) +
          ":" +
          Y,
        G = r.get(w);
      if (G) return G;
      const V = this.options.loose,
        b = V ? y[h.HYPHENRANGELOOSE] : y[h.HYPHENRANGE];
      (Y = Y.replace(b, we(this.options.includePrerelease))),
        m("hyphen replace", Y),
        (Y = Y.replace(y[h.COMPARATORTRIM], g)),
        m("comparator trim", Y),
        (Y = Y.replace(y[h.TILDETRIM], E)),
        m("tilde trim", Y),
        (Y = Y.replace(y[h.CARETTRIM], R)),
        m("caret trim", Y);
      let C = Y.split(" ")
        .map((te) => ie(te, this.options))
        .join(" ")
        .split(/\s+/)
        .map((te) => it(te, this.options));
      V &&
        (C = C.filter(
          (te) => (
            m("loose invalid filter", te, this.options),
            !!te.match(y[h.COMPARATORLOOSE])
          )
        )),
        m("range list", C);
      const H = new Map(),
        B = C.map((te) => new v(te, this.options));
      for (const te of B) {
        if (M(te)) return [te];
        H.set(te.value, te);
      }
      H.size > 1 && H.has("") && H.delete("");
      const K = [...H.values()];
      return r.set(w, K), K;
    }
    intersects(Y, O) {
      if (!(Y instanceof c)) throw new TypeError("a Range is required");
      return this.set.some(
        (w) =>
          J(w, O) &&
          Y.set.some(
            (G) => J(G, O) && w.every((V) => G.every((b) => V.intersects(b, O)))
          )
      );
    }
    test(Y) {
      if (!Y) return !1;
      if (typeof Y == "string")
        try {
          Y = new p(Y, this.options);
        } catch {
          return !1;
        }
      for (let O = 0; O < this.set.length; O++)
        if (Nt(this.set[O], Y, this.options)) return !0;
      return !1;
    }
  }
  Wc = c;
  const s = K2(),
    r = new s(),
    o = Xf(),
    v = $u(),
    m = Vu(),
    p = Pe(),
    {
      safeRe: y,
      t: h,
      comparatorTrimReplace: g,
      tildeTrimReplace: E,
      caretTrimReplace: R,
    } = di(),
    { FLAG_INCLUDE_PRERELEASE: z, FLAG_LOOSE: Z } = Zu(),
    M = (k) => k.value === "<0.0.0-0",
    $ = (k) => k.value === "",
    J = (k, Y) => {
      let O = !0;
      const w = k.slice();
      let G = w.pop();
      for (; O && w.length; )
        (O = w.every((V) => G.intersects(V, Y))), (G = w.pop());
      return O;
    },
    ie = (k, Y) => (
      m("comp", k, Y),
      (k = re(k, Y)),
      m("caret", k),
      (k = fe(k, Y)),
      m("tildes", k),
      (k = W(k, Y)),
      m("xrange", k),
      (k = qt(k, Y)),
      m("stars", k),
      k
    ),
    F = (k) => !k || k.toLowerCase() === "x" || k === "*",
    fe = (k, Y) =>
      k
        .trim()
        .split(/\s+/)
        .map((O) => Q(O, Y))
        .join(" "),
    Q = (k, Y) => {
      const O = Y.loose ? y[h.TILDELOOSE] : y[h.TILDE];
      return k.replace(O, (w, G, V, b, C) => {
        m("tilde", k, w, G, V, b, C);
        let H;
        return (
          F(G)
            ? (H = "")
            : F(V)
            ? (H = `>=${G}.0.0 <${+G + 1}.0.0-0`)
            : F(b)
            ? (H = `>=${G}.${V}.0 <${G}.${+V + 1}.0-0`)
            : C
            ? (m("replaceTilde pr", C),
              (H = `>=${G}.${V}.${b}-${C} <${G}.${+V + 1}.0-0`))
            : (H = `>=${G}.${V}.${b} <${G}.${+V + 1}.0-0`),
          m("tilde return", H),
          H
        );
      });
    },
    re = (k, Y) =>
      k
        .trim()
        .split(/\s+/)
        .map((O) => he(O, Y))
        .join(" "),
    he = (k, Y) => {
      m("caret", k, Y);
      const O = Y.loose ? y[h.CARETLOOSE] : y[h.CARET],
        w = Y.includePrerelease ? "-0" : "";
      return k.replace(O, (G, V, b, C, H) => {
        m("caret", k, G, V, b, C, H);
        let B;
        return (
          F(V)
            ? (B = "")
            : F(b)
            ? (B = `>=${V}.0.0${w} <${+V + 1}.0.0-0`)
            : F(C)
            ? V === "0"
              ? (B = `>=${V}.${b}.0${w} <${V}.${+b + 1}.0-0`)
              : (B = `>=${V}.${b}.0${w} <${+V + 1}.0.0-0`)
            : H
            ? (m("replaceCaret pr", H),
              V === "0"
                ? b === "0"
                  ? (B = `>=${V}.${b}.${C}-${H} <${V}.${b}.${+C + 1}-0`)
                  : (B = `>=${V}.${b}.${C}-${H} <${V}.${+b + 1}.0-0`)
                : (B = `>=${V}.${b}.${C}-${H} <${+V + 1}.0.0-0`))
            : (m("no pr"),
              V === "0"
                ? b === "0"
                  ? (B = `>=${V}.${b}.${C}${w} <${V}.${b}.${+C + 1}-0`)
                  : (B = `>=${V}.${b}.${C}${w} <${V}.${+b + 1}.0-0`)
                : (B = `>=${V}.${b}.${C} <${+V + 1}.0.0-0`)),
          m("caret return", B),
          B
        );
      });
    },
    W = (k, Y) => (
      m("replaceXRanges", k, Y),
      k
        .split(/\s+/)
        .map((O) => Be(O, Y))
        .join(" ")
    ),
    Be = (k, Y) => {
      k = k.trim();
      const O = Y.loose ? y[h.XRANGELOOSE] : y[h.XRANGE];
      return k.replace(O, (w, G, V, b, C, H) => {
        m("xRange", k, w, G, V, b, C, H);
        const B = F(V),
          K = B || F(b),
          te = K || F(C),
          le = te;
        return (
          G === "=" && le && (G = ""),
          (H = Y.includePrerelease ? "-0" : ""),
          B
            ? G === ">" || G === "<"
              ? (w = "<0.0.0-0")
              : (w = "*")
            : G && le
            ? (K && (b = 0),
              (C = 0),
              G === ">"
                ? ((G = ">="),
                  K
                    ? ((V = +V + 1), (b = 0), (C = 0))
                    : ((b = +b + 1), (C = 0)))
                : G === "<=" && ((G = "<"), K ? (V = +V + 1) : (b = +b + 1)),
              G === "<" && (H = "-0"),
              (w = `${G + V}.${b}.${C}${H}`))
            : K
            ? (w = `>=${V}.0.0${H} <${+V + 1}.0.0-0`)
            : te && (w = `>=${V}.${b}.0${H} <${V}.${+b + 1}.0-0`),
          m("xRange return", w),
          w
        );
      });
    },
    qt = (k, Y) => (m("replaceStars", k, Y), k.trim().replace(y[h.STAR], "")),
    it = (k, Y) => (
      m("replaceGTE0", k, Y),
      k.trim().replace(y[Y.includePrerelease ? h.GTE0PRE : h.GTE0], "")
    ),
    we = (k) => (Y, O, w, G, V, b, C, H, B, K, te, le) => (
      F(w)
        ? (O = "")
        : F(G)
        ? (O = `>=${w}.0.0${k ? "-0" : ""}`)
        : F(V)
        ? (O = `>=${w}.${G}.0${k ? "-0" : ""}`)
        : b
        ? (O = `>=${O}`)
        : (O = `>=${O}${k ? "-0" : ""}`),
      F(B)
        ? (H = "")
        : F(K)
        ? (H = `<${+B + 1}.0.0-0`)
        : F(te)
        ? (H = `<${B}.${+K + 1}.0-0`)
        : le
        ? (H = `<=${B}.${K}.${te}-${le}`)
        : k
        ? (H = `<${B}.${K}.${+te + 1}-0`)
        : (H = `<=${H}`),
      `${O} ${H}`.trim()
    ),
    Nt = (k, Y, O) => {
      for (let w = 0; w < k.length; w++) if (!k[w].test(Y)) return !1;
      if (Y.prerelease.length && !O.includePrerelease) {
        for (let w = 0; w < k.length; w++)
          if (
            (m(k[w].semver),
            k[w].semver !== v.ANY && k[w].semver.prerelease.length > 0)
          ) {
            const G = k[w].semver;
            if (
              G.major === Y.major &&
              G.minor === Y.minor &&
              G.patch === Y.patch
            )
              return !0;
          }
        return !1;
      }
      return !0;
    };
  return Wc;
}
var Pc, r0;
function $u() {
  if (r0) return Pc;
  r0 = 1;
  const u = Symbol("SemVer ANY");
  class c {
    static get ANY() {
      return u;
    }
    constructor(g, E) {
      if (((E = s(E)), g instanceof c)) {
        if (g.loose === !!E.loose) return g;
        g = g.value;
      }
      (g = g.trim().split(/\s+/).join(" ")),
        m("comparator", g, E),
        (this.options = E),
        (this.loose = !!E.loose),
        this.parse(g),
        this.semver === u
          ? (this.value = "")
          : (this.value = this.operator + this.semver.version),
        m("comp", this);
    }
    parse(g) {
      const E = this.options.loose ? r[o.COMPARATORLOOSE] : r[o.COMPARATOR],
        R = g.match(E);
      if (!R) throw new TypeError(`Invalid comparator: ${g}`);
      (this.operator = R[1] !== void 0 ? R[1] : ""),
        this.operator === "=" && (this.operator = ""),
        R[2]
          ? (this.semver = new p(R[2], this.options.loose))
          : (this.semver = u);
    }
    toString() {
      return this.value;
    }
    test(g) {
      if (
        (m("Comparator.test", g, this.options.loose),
        this.semver === u || g === u)
      )
        return !0;
      if (typeof g == "string")
        try {
          g = new p(g, this.options);
        } catch {
          return !1;
        }
      return v(g, this.operator, this.semver, this.options);
    }
    intersects(g, E) {
      if (!(g instanceof c)) throw new TypeError("a Comparator is required");
      return this.operator === ""
        ? this.value === ""
          ? !0
          : new y(g.value, E).test(this.value)
        : g.operator === ""
        ? g.value === ""
          ? !0
          : new y(this.value, E).test(g.semver)
        : ((E = s(E)),
          (E.includePrerelease &&
            (this.value === "<0.0.0-0" || g.value === "<0.0.0-0")) ||
          (!E.includePrerelease &&
            (this.value.startsWith("<0.0.0") || g.value.startsWith("<0.0.0")))
            ? !1
            : !!(
                (this.operator.startsWith(">") && g.operator.startsWith(">")) ||
                (this.operator.startsWith("<") && g.operator.startsWith("<")) ||
                (this.semver.version === g.semver.version &&
                  this.operator.includes("=") &&
                  g.operator.includes("=")) ||
                (v(this.semver, "<", g.semver, E) &&
                  this.operator.startsWith(">") &&
                  g.operator.startsWith("<")) ||
                (v(this.semver, ">", g.semver, E) &&
                  this.operator.startsWith("<") &&
                  g.operator.startsWith(">"))
              ));
    }
  }
  Pc = c;
  const s = Xf(),
    { safeRe: r, t: o } = di(),
    v = Cg(),
    m = Vu(),
    p = Pe(),
    y = Ut();
  return Pc;
}
var ef, s0;
function ku() {
  if (s0) return ef;
  s0 = 1;
  const u = Ut();
  return (
    (ef = (s, r, o) => {
      try {
        r = new u(r, o);
      } catch {
        return !1;
      }
      return r.test(s);
    }),
    ef
  );
}
var tf, c0;
function I2() {
  if (c0) return tf;
  c0 = 1;
  const u = Ut();
  return (
    (tf = (s, r) =>
      new u(s, r).set.map((o) =>
        o
          .map((v) => v.value)
          .join(" ")
          .trim()
          .split(" ")
      )),
    tf
  );
}
var af, f0;
function F2() {
  if (f0) return af;
  f0 = 1;
  const u = Pe(),
    c = Ut();
  return (
    (af = (r, o, v) => {
      let m = null,
        p = null,
        y = null;
      try {
        y = new c(o, v);
      } catch {
        return null;
      }
      return (
        r.forEach((h) => {
          y.test(h) &&
            (!m || p.compare(h) === -1) &&
            ((m = h), (p = new u(m, v)));
        }),
        m
      );
    }),
    af
  );
}
var lf, o0;
function J2() {
  if (o0) return lf;
  o0 = 1;
  const u = Pe(),
    c = Ut();
  return (
    (lf = (r, o, v) => {
      let m = null,
        p = null,
        y = null;
      try {
        y = new c(o, v);
      } catch {
        return null;
      }
      return (
        r.forEach((h) => {
          y.test(h) &&
            (!m || p.compare(h) === 1) &&
            ((m = h), (p = new u(m, v)));
        }),
        m
      );
    }),
    lf
  );
}
var nf, d0;
function W2() {
  if (d0) return nf;
  d0 = 1;
  const u = Pe(),
    c = Ut(),
    s = Qu();
  return (
    (nf = (o, v) => {
      o = new c(o, v);
      let m = new u("0.0.0");
      if (o.test(m) || ((m = new u("0.0.0-0")), o.test(m))) return m;
      m = null;
      for (let p = 0; p < o.set.length; ++p) {
        const y = o.set[p];
        let h = null;
        y.forEach((g) => {
          const E = new u(g.semver.version);
          switch (g.operator) {
            case ">":
              E.prerelease.length === 0 ? E.patch++ : E.prerelease.push(0),
                (E.raw = E.format());
            case "":
            case ">=":
              (!h || s(E, h)) && (h = E);
              break;
            case "<":
            case "<=":
              break;
            default:
              throw new Error(`Unexpected operation: ${g.operator}`);
          }
        }),
          h && (!m || s(m, h)) && (m = h);
      }
      return m && o.test(m) ? m : null;
    }),
    nf
  );
}
var uf, m0;
function P2() {
  if (m0) return uf;
  m0 = 1;
  const u = Ut();
  return (
    (uf = (s, r) => {
      try {
        return new u(s, r).range || "*";
      } catch {
        return null;
      }
    }),
    uf
  );
}
var rf, h0;
function kf() {
  if (h0) return rf;
  h0 = 1;
  const u = Pe(),
    c = $u(),
    { ANY: s } = c,
    r = Ut(),
    o = ku(),
    v = Qu(),
    m = Vf(),
    p = $f(),
    y = Qf();
  return (
    (rf = (g, E, R, z) => {
      (g = new u(g, z)), (E = new r(E, z));
      let Z, M, $, J, ie;
      switch (R) {
        case ">":
          (Z = v), (M = p), ($ = m), (J = ">"), (ie = ">=");
          break;
        case "<":
          (Z = m), (M = y), ($ = v), (J = "<"), (ie = "<=");
          break;
        default:
          throw new TypeError('Must provide a hilo val of "<" or ">"');
      }
      if (o(g, E, z)) return !1;
      for (let F = 0; F < E.set.length; ++F) {
        const fe = E.set[F];
        let Q = null,
          re = null;
        if (
          (fe.forEach((he) => {
            he.semver === s && (he = new c(">=0.0.0")),
              (Q = Q || he),
              (re = re || he),
              Z(he.semver, Q.semver, z)
                ? (Q = he)
                : $(he.semver, re.semver, z) && (re = he);
          }),
          Q.operator === J ||
            Q.operator === ie ||
            ((!re.operator || re.operator === J) && M(g, re.semver)))
        )
          return !1;
        if (re.operator === ie && $(g, re.semver)) return !1;
      }
      return !0;
    }),
    rf
  );
}
var sf, v0;
function eA() {
  if (v0) return sf;
  v0 = 1;
  const u = kf();
  return (sf = (s, r, o) => u(s, r, ">", o)), sf;
}
var cf, g0;
function tA() {
  if (g0) return cf;
  g0 = 1;
  const u = kf();
  return (cf = (s, r, o) => u(s, r, "<", o)), cf;
}
var ff, y0;
function aA() {
  if (y0) return ff;
  y0 = 1;
  const u = Ut();
  return (
    (ff = (s, r, o) => (
      (s = new u(s, o)), (r = new u(r, o)), s.intersects(r, o)
    )),
    ff
  );
}
var of, p0;
function lA() {
  if (p0) return of;
  p0 = 1;
  const u = ku(),
    c = Lt();
  return (
    (of = (s, r, o) => {
      const v = [];
      let m = null,
        p = null;
      const y = s.sort((R, z) => c(R, z, o));
      for (const R of y)
        u(R, r, o)
          ? ((p = R), m || (m = R))
          : (p && v.push([m, p]), (p = null), (m = null));
      m && v.push([m, null]);
      const h = [];
      for (const [R, z] of v)
        R === z
          ? h.push(R)
          : !z && R === y[0]
          ? h.push("*")
          : z
          ? R === y[0]
            ? h.push(`<=${z}`)
            : h.push(`${R} - ${z}`)
          : h.push(`>=${R}`);
      const g = h.join(" || "),
        E = typeof r.raw == "string" ? r.raw : String(r);
      return g.length < E.length ? g : r;
    }),
    of
  );
}
var df, b0;
function nA() {
  if (b0) return df;
  b0 = 1;
  const u = Ut(),
    c = $u(),
    { ANY: s } = c,
    r = ku(),
    o = Lt(),
    v = (E, R, z = {}) => {
      if (E === R) return !0;
      (E = new u(E, z)), (R = new u(R, z));
      let Z = !1;
      e: for (const M of E.set) {
        for (const $ of R.set) {
          const J = y(M, $, z);
          if (((Z = Z || J !== null), J)) continue e;
        }
        if (Z) return !1;
      }
      return !0;
    },
    m = [new c(">=0.0.0-0")],
    p = [new c(">=0.0.0")],
    y = (E, R, z) => {
      if (E === R) return !0;
      if (E.length === 1 && E[0].semver === s) {
        if (R.length === 1 && R[0].semver === s) return !0;
        z.includePrerelease ? (E = m) : (E = p);
      }
      if (R.length === 1 && R[0].semver === s) {
        if (z.includePrerelease) return !0;
        R = p;
      }
      const Z = new Set();
      let M, $;
      for (const W of E)
        W.operator === ">" || W.operator === ">="
          ? (M = h(M, W, z))
          : W.operator === "<" || W.operator === "<="
          ? ($ = g($, W, z))
          : Z.add(W.semver);
      if (Z.size > 1) return null;
      let J;
      if (M && $) {
        if (((J = o(M.semver, $.semver, z)), J > 0)) return null;
        if (J === 0 && (M.operator !== ">=" || $.operator !== "<="))
          return null;
      }
      for (const W of Z) {
        if ((M && !r(W, String(M), z)) || ($ && !r(W, String($), z)))
          return null;
        for (const Be of R) if (!r(W, String(Be), z)) return !1;
        return !0;
      }
      let ie,
        F,
        fe,
        Q,
        re =
          $ && !z.includePrerelease && $.semver.prerelease.length
            ? $.semver
            : !1,
        he =
          M && !z.includePrerelease && M.semver.prerelease.length
            ? M.semver
            : !1;
      re &&
        re.prerelease.length === 1 &&
        $.operator === "<" &&
        re.prerelease[0] === 0 &&
        (re = !1);
      for (const W of R) {
        if (
          ((Q = Q || W.operator === ">" || W.operator === ">="),
          (fe = fe || W.operator === "<" || W.operator === "<="),
          M)
        ) {
          if (
            (he &&
              W.semver.prerelease &&
              W.semver.prerelease.length &&
              W.semver.major === he.major &&
              W.semver.minor === he.minor &&
              W.semver.patch === he.patch &&
              (he = !1),
            W.operator === ">" || W.operator === ">=")
          ) {
            if (((ie = h(M, W, z)), ie === W && ie !== M)) return !1;
          } else if (M.operator === ">=" && !r(M.semver, String(W), z))
            return !1;
        }
        if ($) {
          if (
            (re &&
              W.semver.prerelease &&
              W.semver.prerelease.length &&
              W.semver.major === re.major &&
              W.semver.minor === re.minor &&
              W.semver.patch === re.patch &&
              (re = !1),
            W.operator === "<" || W.operator === "<=")
          ) {
            if (((F = g($, W, z)), F === W && F !== $)) return !1;
          } else if ($.operator === "<=" && !r($.semver, String(W), z))
            return !1;
        }
        if (!W.operator && ($ || M) && J !== 0) return !1;
      }
      return !(
        (M && fe && !$ && J !== 0) ||
        ($ && Q && !M && J !== 0) ||
        he ||
        re
      );
    },
    h = (E, R, z) => {
      if (!E) return R;
      const Z = o(E.semver, R.semver, z);
      return Z > 0
        ? E
        : Z < 0 || (R.operator === ">" && E.operator === ">=")
        ? R
        : E;
    },
    g = (E, R, z) => {
      if (!E) return R;
      const Z = o(E.semver, R.semver, z);
      return Z < 0
        ? E
        : Z > 0 || (R.operator === "<" && E.operator === "<=")
        ? R
        : E;
    };
  return (df = v), df;
}
var mf, S0;
function iA() {
  if (S0) return mf;
  S0 = 1;
  const u = di(),
    c = Zu(),
    s = Pe(),
    r = jg(),
    o = ln(),
    v = L2(),
    m = U2(),
    p = q2(),
    y = H2(),
    h = G2(),
    g = B2(),
    E = Y2(),
    R = X2(),
    z = Lt(),
    Z = Z2(),
    M = V2(),
    $ = Zf(),
    J = Q2(),
    ie = $2(),
    F = Qu(),
    fe = Vf(),
    Q = zg(),
    re = Dg(),
    he = Qf(),
    W = $f(),
    Be = Cg(),
    qt = k2(),
    it = $u(),
    we = Ut(),
    Nt = ku(),
    k = I2(),
    Y = F2(),
    O = J2(),
    w = W2(),
    G = P2(),
    V = kf(),
    b = eA(),
    C = tA(),
    H = aA(),
    B = lA(),
    K = nA();
  return (
    (mf = {
      parse: o,
      valid: v,
      clean: m,
      inc: p,
      diff: y,
      major: h,
      minor: g,
      patch: E,
      prerelease: R,
      compare: z,
      rcompare: Z,
      compareLoose: M,
      compareBuild: $,
      sort: J,
      rsort: ie,
      gt: F,
      lt: fe,
      eq: Q,
      neq: re,
      gte: he,
      lte: W,
      cmp: Be,
      coerce: qt,
      Comparator: it,
      Range: we,
      satisfies: Nt,
      toComparators: k,
      maxSatisfying: Y,
      minSatisfying: O,
      minVersion: w,
      validRange: G,
      outside: V,
      gtr: b,
      ltr: C,
      intersects: H,
      simplifyRange: B,
      subset: K,
      SemVer: s,
      re: u.re,
      src: u.src,
      tokens: u.t,
      SEMVER_SPEC_VERSION: c.SEMVER_SPEC_VERSION,
      RELEASE_TYPES: c.RELEASE_TYPES,
      compareIdentifiers: r.compareIdentifiers,
      rcompareIdentifiers: r.rcompareIdentifiers,
    }),
    mf
  );
}
var uA = iA();
const rA = x0(uA);
var sA = {};
function cA(u) {
  return (u = u - 0), u === u;
}
function Mg(u) {
  return cA(u)
    ? u
    : ((u = u.replaceAll(/[_-]+(.)?/g, (c, s) => (s ? s.toUpperCase() : ""))),
      u.charAt(0).toLowerCase() + u.slice(1));
}
function fA(u) {
  return u.charAt(0).toUpperCase() + u.slice(1);
}
var Wl = new Map(),
  oA = 1e3;
function dA(u) {
  if (Wl.has(u)) return Wl.get(u);
  const c = {};
  let s = 0;
  const r = u.length;
  for (; s < r; ) {
    const o = u.indexOf(";", s),
      v = o === -1 ? r : o,
      m = u.slice(s, v).trim();
    if (m) {
      const p = m.indexOf(":");
      if (p > 0) {
        const y = m.slice(0, p).trim(),
          h = m.slice(p + 1).trim();
        if (y && h) {
          const g = Mg(y);
          c[g.startsWith("webkit") ? fA(g) : g] = h;
        }
      }
    }
    s = v + 1;
  }
  if (Wl.size === oA) {
    const o = Wl.keys().next().value;
    o && Wl.delete(o);
  }
  return Wl.set(u, c), c;
}
function wg(u, c, s = {}) {
  if (typeof c == "string") return c;
  const r = (c.children || []).map((y) => wg(u, y)),
    o = c.attributes || {},
    v = {};
  for (const [y, h] of Object.entries(o))
    switch (!0) {
      case y === "class": {
        (v.className = h), delete o.class;
        break;
      }
      case y === "style": {
        v.style = dA(String(h));
        break;
      }
      case y === "aria-label": {
        (v["aria-label"] = h), (v["aria-hidden"] = "false");
        break;
      }
      case y === "aria-hidden": {
        v["aria-hidden"] = v["aria-label"] ? "false" : h;
        break;
      }
      case y.startsWith("aria-"):
      case y.startsWith("data-"): {
        v[y.toLowerCase()] = h;
        break;
      }
      default:
        v[Mg(y)] = h;
    }
  const { style: m, ...p } = s;
  return (
    m && (v.style = v.style ? { ...v.style, ...m } : m),
    u(c.tag, { ...p, ...v }, ...r)
  );
}
var E0 = (u, c) => {
    const s = Ge.useId();
    return u || (c ? s : void 0);
  },
  Lg = class {
    constructor(u = "react-fontawesome") {
      this.enabled = !1;
      let c = !1;
      try {
        c = typeof process < "u" && !1;
      } catch {}
      (this.scope = u), (this.enabled = c);
    }
    log(...u) {
      this.enabled && console.log(`[${this.scope}]`, ...u);
    }
    warn(...u) {
      this.enabled && console.warn(`[${this.scope}]`, ...u);
    }
    error(...u) {
      this.enabled && console.error(`[${this.scope}]`, ...u);
    }
  },
  mA = new Lg(),
  jf = "",
  hA = async () => {
    if (!jf)
      try {
        jf = (await Nb(() => import("./package-aBYktcue.js"), [])).default
          .version;
      } catch (u) {
        mA.error("Error loading SVGCore version:", u);
        return;
      }
  };
hA();
var vA = "7.0.0",
  gA = (typeof process < "u" && sA.FA_VERSION) || "7.0.0",
  yA = jf || gA,
  pA = rA.gte(yA, vA),
  ra = {
    beat: "fa-beat",
    fade: "fa-fade",
    beatFade: "fa-beat-fade",
    bounce: "fa-bounce",
    shake: "fa-shake",
    spin: "fa-spin",
    spinPulse: "fa-spin-pulse",
    spinReverse: "fa-spin-reverse",
    pulse: "fa-pulse",
  },
  bA = { left: "fa-pull-left", right: "fa-pull-right" },
  SA = { 90: "fa-rotate-90", 180: "fa-rotate-180", 270: "fa-rotate-270" },
  EA = {
    "2xs": "fa-2xs",
    xs: "fa-xs",
    sm: "fa-sm",
    lg: "fa-lg",
    xl: "fa-xl",
    "2xl": "fa-2xl",
    "1x": "fa-1x",
    "2x": "fa-2x",
    "3x": "fa-3x",
    "4x": "fa-4x",
    "5x": "fa-5x",
    "6x": "fa-6x",
    "7x": "fa-7x",
    "8x": "fa-8x",
    "9x": "fa-9x",
    "10x": "fa-10x",
  },
  sa = {
    border: "fa-border",
    fixedWidth: "fa-fw",
    flip: "fa-flip",
    flipHorizontal: "fa-flip-horizontal",
    flipVertical: "fa-flip-vertical",
    inverse: "fa-inverse",
    rotateBy: "fa-rotate-by",
    swapOpacity: "fa-swap-opacity",
    widthAuto: "fa-width-auto",
  };
function AA(u) {
  const {
      beat: c,
      fade: s,
      beatFade: r,
      bounce: o,
      shake: v,
      spin: m,
      spinPulse: p,
      spinReverse: y,
      pulse: h,
      fixedWidth: g,
      inverse: E,
      border: R,
      flip: z,
      size: Z,
      rotation: M,
      pull: $,
      swapOpacity: J,
      rotateBy: ie,
      widthAuto: F,
      className: fe,
    } = u,
    Q = [];
  return (
    fe && Q.push(...fe.split(" ")),
    c && Q.push(ra.beat),
    s && Q.push(ra.fade),
    r && Q.push(ra.beatFade),
    o && Q.push(ra.bounce),
    v && Q.push(ra.shake),
    m && Q.push(ra.spin),
    y && Q.push(ra.spinReverse),
    p && Q.push(ra.spinPulse),
    h && Q.push(ra.pulse),
    g && Q.push(sa.fixedWidth),
    E && Q.push(sa.inverse),
    R && Q.push(sa.border),
    z === !0 && Q.push(sa.flip),
    (z === "horizontal" || z === "both") && Q.push(sa.flipHorizontal),
    (z === "vertical" || z === "both") && Q.push(sa.flipVertical),
    Z != null && Q.push(EA[Z]),
    M != null && M !== 0 && Q.push(SA[M]),
    $ != null && Q.push(bA[$]),
    J && Q.push(sa.swapOpacity),
    pA && (ie && Q.push(sa.rotateBy), F && Q.push(sa.widthAuto)),
    Q
  );
}
var TA = (u) => typeof u == "object" && "icon" in u && !!u.icon;
function A0(u) {
  if (u) return TA(u) ? u : Ng.icon(u);
}
function xA(u) {
  return Object.keys(u);
}
var T0 = new Lg("FontAwesomeIcon"),
  Ug = {
    border: !1,
    className: "",
    mask: void 0,
    maskId: void 0,
    fixedWidth: !1,
    inverse: !1,
    flip: !1,
    icon: void 0,
    listItem: !1,
    pull: void 0,
    pulse: !1,
    rotation: void 0,
    rotateBy: !1,
    size: void 0,
    spin: !1,
    spinPulse: !1,
    spinReverse: !1,
    beat: !1,
    fade: !1,
    beatFade: !1,
    bounce: !1,
    shake: !1,
    symbol: !1,
    title: "",
    titleId: void 0,
    transform: void 0,
    swapOpacity: !1,
    widthAuto: !1,
  },
  OA = new Set(Object.keys(Ug)),
  qg = O0.forwardRef((u, c) => {
    const s = { ...Ug, ...u },
      {
        icon: r,
        mask: o,
        symbol: v,
        title: m,
        titleId: p,
        maskId: y,
        transform: h,
      } = s,
      g = E0(y, !!o),
      E = E0(p, !!m),
      R = A0(r);
    if (!R) return T0.error("Icon lookup is undefined", r), null;
    const z = AA(s),
      Z = typeof h == "string" ? Ng.transform(h) : h,
      M = A0(o),
      $ = w2(R, {
        ...(z.length > 0 && { classes: z }),
        ...(Z && { transform: Z }),
        ...(M && { mask: M }),
        symbol: v,
        title: m,
        titleId: E,
        maskId: g,
      });
    if (!$) return T0.error("Could not find icon", R), null;
    const { abstract: J } = $,
      ie = { ref: c };
    for (const F of xA(s)) OA.has(F) || (ie[F] = s[F]);
    return RA(J[0], ie);
  });
qg.displayName = "FontAwesomeIcon";
var RA = wg.bind(null, O0.createElement);
/*!
 * Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */ var _A = {
  prefix: "fas",
  iconName: "arrow-right-long",
  icon: [
    576,
    512,
    ["long-arrow-right"],
    "f178",
    "M566.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L466.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l434.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z",
  ],
};
const hf = {
    ecg: {
      id: "ecg",
      img: Tb,
      title: "ECG Signal Source",
      info: "Electrocardiogram (ECG) records the heart’s electrical activity generated by depolarization and repolarization of atria and ventricles. Electrodes are typically placed on the chest and limbs to capture the cardiac biopotentials.",
    },
    eeg: {
      id: "eeg",
      img: Ob,
      title: "EEG Signal Source",
      info: "Electroencephalogram (EEG) captures electrical activity of cortical neurons in the brain. Scalp electrodes, usually arranged in the 10–20 system, detect voltage fluctuations across regions such as frontal, temporal, parietal, and occipital lobes.",
    },
    emg: {
      id: "emg",
      img: xb,
      title: "EMG Signal Source",
      info: "Electromyogram (EMG) measures the electrical activity produced by muscle fibers during contraction and relaxation. Surface or needle electrodes are positioned on specific muscles to detect motor unit action potentials.",
    },
  },
  NA = () => {
    const [u, c] = Ge.useState(null),
      s = (r) => {
        c(hf[r]),
          document
            .querySelector(`.${gt.sourceButton}`)
            .classList.add(gt.active);
      };
    return T.jsxs("div", {
      className: gt.container,
      children: [
        T.jsx("div", {
          className: gt.content,
          children: T.jsx("p", {
            children:
              "The human body serves as a complex bioelectric generator, producing various types of signals through different physiological processes. The three primary bioelectric signals of clinical interest are ECG, EMG and EEG signals.",
          }),
        }),
        T.jsxs("div", {
          className: gt.humanBodyContainer,
          children: [
            T.jsx("div", {
              className: gt.buttonContainer,
              children: Object.keys(hf).map((r) =>
                T.jsxs(
                  "div",
                  {
                    className: gt.buttonWitharrow,
                    children: [
                      T.jsx("button", {
                        className: `${gt.sourceButton} ${
                          u?.id === r ? gt.activeButton : ""
                        }`,
                        onClick: () => s(r),
                        children: hf[r].id.toUpperCase(),
                      }),
                      T.jsx("div", {
                        className: gt.arrowContainer,
                        children:
                          u?.id === r &&
                          T.jsx(qg, { className: gt.arrowIcon, icon: _A }),
                      }),
                    ],
                  },
                  r
                )
              ),
            }),
            T.jsx("div", {
              className: gt.sourceContainer,
              children:
                u &&
                T.jsxs("div", {
                  children: [
                    T.jsx("h2", { children: u.title }),
                    T.jsx("img", {
                      src: u.img,
                      alt: u.title,
                      className: gt.signalImage,
                    }),
                    T.jsx("p", { children: u.info }),
                  ],
                }),
            }),
          ],
        }),
      ],
    });
  },
  jA = "_container_1mrt8_1",
  zA = "_header_1mrt8_11",
  DA = "_gallery_1mrt8_39",
  CA = "_card_1mrt8_53",
  MA = "_transducerImage_1mrt8_77",
  wA = "_infoBox_1mrt8_121",
  LA = "_mainInfo_1mrt8_147",
  UA = "_subSectionContent_1mrt8_187",
  qA = "_subSectionImage_1mrt8_193",
  Ct = {
    container: jA,
    header: zA,
    gallery: DA,
    card: CA,
    transducerImage: MA,
    infoBox: wA,
    mainInfo: LA,
    subSectionContent: UA,
    subSectionImage: qA,
  },
  HA =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVsAAADkCAMAAAAB+nfLAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAL1QTFRF////AJ/oyMXEIxgVkYuKWlJQkIuJWVFP4+LiEVt+8fHwrKinPzUy1tTTgM/0MSYkTENBdm9thH18QLfuure2aGBev+f5IhcUCX2znpqYGjlJMCYjIKvrEKXp8fDwICAhApfbYMPx7/n+PjQx3/P8z+37cMnyMLHsBI7OUL3vn9v2dW5sHigvZ2Bej9X1r+H41dPTTENAg317HDE8ura1npmYBobAF0JWD2SLFUpkC3WmDWyZE1NxS0NAZ2BdzzqeKgAADl5JREFUeNrsnQtb4joTx9NcNJuk9EKL2wVUEHTFVfd+znn37Pn+H+udSQsC3kCobmH+z1NbmxR3f6TTZJrMMEYikUgkEolEIpFIJBKJRCKRSCQS6bUVpsbvTRrW8vlS7wdHIUSULP1fs1gzbRnTcVbP3+R7wpYznaj7562q9W/uC1vGBdgBJXKwADJyKRwz6yJlmQqNgnKbsDD3xXAskyiGI5NH0Koz+AaKHC6TzCR4Ai5xCZqTRMSW2ZThFibSOXt3reDTj919tjJmJpLA1YQiBGMArHUSc42FMeCJUxNZVjhvK6OMJXCkcsMF1yJksdMsLpiCL0DAJS5DC1M4wzmTgB42LgpjoWx6LXws1GYq3XW2sXIuZBmCAyxCmrIdIxaEAESNCDPHORfYcPE8nDCAiiUpc4VxiYXfjMg4B8TCliYlslVlzxaOoay6Fj/WRv5ox9kWfIqMKQmMo2KBLRCwDlqcAs0qCu5xwXGSZ3mRwDfDBdawM1sKxoUvsIUPn34m1omsdftgb7FrULZbvJuFnmfL8jQH2tGs/wTnNTbTst1mLi1CJ+EOr1rh7Dll4O6fZwsGt7rW10nzJN0TtgaaK9pbCSbXswWDaXyhjYEG3PhG+5rShSYHRipBewvNGh5OET6o8libbPZ51tvnIjI6RrYZfvjsWqyjRbTzvVxVGT2uBBzqXLgC+wnMKFGUhfjYgX5CFMuSLfQYgIqGE2hSU4Wb9u0UvoDp5/FYxBw/RGUpsIX+Ab+7Nse7II5pkLY8pnpBv9fbhOVr4Tsk1cLW5rEhmMuc7PrXaHnvWmsJLYm0P9IHxKA2o3xIDIgtsSURW2JLbEnEltgSWxKxJbbElkRsiS2xJRFbYktsScT2lXVwxoltXWy/nVxrYlsP23en/3R/ENt62AbB+29fOLGth20Q/H1ydUxs62EbnP61qmEgtuuyBcPw6ctnYlsP2yB4d/L1mNjWwzb4+FfXEtt62AbB/z4dfia29bANTt8dHRwT21rYgmH4cPad2NbDFgzDyaHeWbYm27zGBmyD03+PDhrNVuE6IfXgstfiydWwWj9XY1O2QfDzw6PusSawFZF5NNrAk+tcUvlcjc3ZBsGvx9xjjWCbJCXbMM39um6TqmrJG64rsrpQqWEFLuGUhtk81VgnkdYpqbHG9AIoknLrbIPTf7oHjWVry5XFOpIZBjIQsc1EaUZxPZxykruUYdiOwrE05gW0cxGn3LPFGtUF1mWpqIHtY+6xRrDlwE2Ua+U9Ku7Xys/YSr/WMBMG4zzgyvDYMs8QS+YuwF83CGTyBNuH3WPNYGsiXO3teVaBB+BYiDKAQcWWOWtEyAVKlgyX2Eplsshsie3H+4bhRyPZApaYY6ACZqrAA/fbLQNjHPvy6pp7bHXkNgmZtMD2/Yf7huHTkmFoCFvjIg72EoMPPGYTWChyeGDFie8alGzTBbaF3Oif8Rzbe+6xhrBl1gffiOIofJQtw/ARLHQudmU8CTDBKptj6wOeFDWyXXKPNWtcZlYZB+i73qZeqC8LzrO5ocT3g+sDvVW2aBju3GP75E/IoYEXs4fZ8eGZlFdHdrts0T02NQz7xDaMRZTPmu31f0g57PLtsp1zj+2tH0x3ywYsr7fN1vvN9T6znf7Hw+7Bijr0bN998Pp2Uu4/nD5oGP5FvzmxXZPtx/def38r9z8fabroHiObUINNqNxjX/b2vcP1FavnWXZnGLr7Gvjj+MuZtNvvgy26x874ntK1X7c/dljBPdZoYTDrGvQStsGa00r//DFC+qgjcZOw7C9iu+a00sb0ssyye4GxiG+J7cdfwcp6t0OGwTvHUqdExrhTcZSUvrLSnS62w3YtrTR7rEFsc8OSnGEE6xC2iu1GselfznbRPdZ8tnIhDvVbswXDcPT1mNjWwzb4+KH7fefYmij7E9jO3GO7wzbluWMscVxGcMol2duxXWFa6Z/vhsHJNtwH8eXC5tjbNYnKOM7MyRPzdmy9e2wHDMNdE65lXPZi/VpzcSWxXccw7Ip7zPA/ju2T00r3VWuy7T/pHrs+JqAPsO3fdG4vn0V7wc4fKem0ds89tiW2/eGoNWGtp7i2O/Djsv8E2x11j23K9mYE0M5ZP7joX7Qu8MzleS8Ier1eqx/0BnDcm4zbvaAN1fq+KGgHl76mL63Y7qDffHO2I3+vDwdBZ3R7wy6D/vi2NbwMWrejTv9ydDMZ9gajYWcQsDYUdW6gYsA6kxt2EZSlM7boHiPDsMAWmJU3ducmCFrj4BwMwGActNhF+QAbnwetTlnvfARFQzgE8zxuTUs7rd1zj22dLTBqswDaa2fMSp7B4HYIpnjK9hYpAnO8BGuXpZ3W49NK95wtNtegD7gqtpPbNqjkeT4c9DuPsq1KF9iie8wS24rt+RBu/smwbImTW7jxfYfA88RT4zu25+PKJrRnDX28zHY33GPb6t92WGcEDy/Yw6MJqI1HrduKZ2vYgt+gNd9c+mfZqHqWlWyr0ttOfzvuMc0/7xpb6FD5nlWnVfawgnYL2PV8d2wwgL4YnrmY9sHwNB5e9KalvVYvWHPV9YNkD48Oz2aX8VhE86+3wwfcfbwBbBfGAFvSr5M1DcPx2RXmua2MdShybqP8rji+D9KIPWW7tnvs639lW+z6nc83zoX2fmvYpEgk47x0XmNSe6l1IqRtCtvV1e5t3z02rfvb732OZUw+Wb288mylSHlcJVQVfLfYDm6qnsNocjleAe/7o3VU/asOPdvyPeDSS9f5RMCw8QbZhGeFXYfWJfQa+sHFTX/LbyS+ZPPtN/K/xcU9ttN1pE1l22+Xe+wq9Mr22b+Ydnn9+GLqdywB93pbeJN28NvvijO/yzF7sF6a5DKXeL2hbPvj0RiGE+1xZzyc3I6HYAjYZDQa9z3bTqsNl7aR78WoM8LCAZts4w3wl8OQGdktu7iZKJjGPMoqYcYhW2jIMq7WkVroRyBb07h2C612MoHW2Q4GuOE47ByGDecVW99ucYMzffgS2Li/lZkLxwfdo6Pr6ehBCoF5w3EpqMJ1dGkUGxnFMU4uTCOVY58sdnnT2PYHk1FnRhA3HIcB2EW2PdZqtWBYxi5rmXFjeFgN1qrBg/bzM8rjaUZy0zC2vWFnMFmB7QWyhREca7/WTLGXJL/+s9iiQ6Z1n23nZtkmVA12iW2NLlybNp3tYHh5Plxi22m3WC9ogWWdY9saDi5vltju0MzcWuxt6/b8YhD0YJAw3VhrMsH+2O0gGLRnZ4PBZDKA3kNvN2eUv9LY4Z5J3aOVEH8EW5qi8CK27ecHuPQGfUt+sGaumHx+Lt32FvJtj20zpjI+7X+w9smFfG/FtiFTcCu2C4O5cLZmL5dL7Ts0b8+2MTNE55bpYWCwTJjQKZf6GI6Jmka+E9LFkWYafr7J2r17EUGaw7ZcplfgkpEc32uYKGQiNnNx7aR/35Ek3g3/lmybNBdhbkkOeoad1UJK6aT3Xy7HDMxT7yp+O7YfG7WSZD6uXZ6GkQmRreQPxmPkUarU29nb04YtjZxna12alA539nCsS57bTYKPb8i2cXMW59mayOGLjMhmacU2ibmej3WpOH+rdZENdHjNLdODA9/lsklijZ/vwEyShz4mtva1eKxUHL3J2r2dnwqac7bJw+zlbFdNHNVgQf9BuuTVbcJ+OLwyWWwrXs3qIodXXWz31P99/OPw8JrXyvaxzA+7Ln12mHHZ/Voj291Zc76mDqt4jN/rYvvzQ3dPX4d97lY+3ut62J7+e3S97/FvdfdwRZ3Nxxae6q/TRxxeJ4d6F+PfrvSqYRZb+IyvqKv52MIzPeHw2kW2T7wis7MSfVQeyqut24TphM89i9vs7p4uX39j67ZdvW22swyoO2kTMLlOluN81DCRzln4tdyUiO8cuF+7V/J3d/WB/mps5xxeu8jWOx5jjnOouSgMZj+rpqrDr3PdIv3j4Psaw9GV2M47vHaW7VzMwKUlFjWOeRf93/vA9rXiMZ4uxZrYB7ZgcF+D7T2H186zzZiMDMvhEOMxRoWpie0DDq+d7SdYPyediyTCJSqhE2mBpyJXyzudB/3fO96/faWYgX8/6PAitpuzfWyG146z1bJ2to9P+NzbXEXbYvtEUAliuxHbJ2d4EdsN2D6zwpnYvpztcxM+ie1L2T4fNI3YvpDtCjO8iO2L2K404ZPYvoDtihM+ie36bFdd4Uxs12W7+gwvYrse23UmfBLbtdiulTyA2K7B9ud6K5yJ7epsP6054ZPYrix7teaET2Jbn4gtsSW2JGJLbIktidgSW2JLIrbEltiSiC2xJbYkYktsiS2J2BJbYkuqRZoQkEgk0qqPIzSZT6VU2176iL2TqFKFPqjtpo/YP7YYCtqz1WX7vMsYyObSR5Qyd0FK+cLuTne5J0jC5wnlzKg4VoZlkRLQlItIRQmbpo/IMK9BnLLUKefpqtzFERxZoSILPxlLIp/mdS73BKEFrK5AtkkOyAqMIGKdb326CjCEC90BoBahdYbJvGQLJHM4h3lbtYGdizE/wkLuCZLgWeThJFIqhembswhvbang5JQtgAfiiZIy8SEFqvM2huPYsljqOC20MAu5J0ieYMRZBGylxajazie/Tfkc21AYML25wswSc2x9mlE4TpVNbA6kF3JPkPC2xqAsqkwZKsug2lFWUa+CX7gCLISMpxf5WDkxXIh5EfADEqujNF3MPUFCDIm3m5KnmuUpxxTDLslyNMJV+ghozjFizHnh4SmXWbDBzOU8R+CR08xFS7knSJgZQuMPnuYFZmpWyikWAmOrZ+kjoIbvpUkly35CkuYI2cAJH/MRk1CUR3e5J0hLwueYf5g9KSWJ1PpSSqaRJbZ1yFhpn7+hQ7rnSSQSiUQikUgkEolEIpFIJBKJRPqT9H8BBgDrMAiAq6A27AAAAABJRU5ErkJggg==",
  GA = "assets/InstrumentationAmplifier-BGlQoywp.png",
  BA = "assets/adc-wOfbdwre.png",
  YA = "assets/filter-Qitv_sS0.png",
  Ha = {
    amplifier: {
      title: "Amplifier",
      img: R0,
      info: "Amplifies weak biopotentials (in the range of microvolts to millivolts) acquired from electrodes. Ensures signals are strong enough for further processing without distortion.",
      subSections: [
        {
          subImg: GA,
          subTitle: "Instrumentation Amplifier",
          content:
            "Provides high input impedance, excellent common-mode rejection, and is widely used in biomedical systems to handle low-level physiological signals.",
        },
        {
          subImg: HA,
          subTitle: "Operational Amplifier",
          content:
            "General-purpose amplifiers used for additional gain, buffering, and signal conditioning after the instrumentation stage.",
        },
      ],
    },
    filters: {
      title: "Filters",
      img: YA,
      info: "Filters remove noise and artifacts from physiological signals (ECG, EEG, EMG) to preserve clinically relevant features.",
      subSections: [
        {
          subTitle: "High-Pass Filter (HPF)",
          content: `Removes baseline drift caused by respiration, movement, or electrode polarization.
Typical cutoff: ~0.5 Hz.`,
        },
        {
          subTitle: "Low-Pass Filter (LPF)",
          content: `Removes high-frequency noise such as muscle artifacts or external interference.
Typical cutoff: ~40-100 Hz.`,
        },
        {
          subTitle: "Notch Filter",
          content:
            "Specifically removes 50/60 Hz powerline interference without affecting other frequency bands.",
        },
        {
          subTitle: "Band-Pass Filter (BPF)",
          content: `Combines HPF and LPF to pass only the physiological frequency band of interest.
Typical range: 0.5–40 Hz.`,
        },
      ],
    },
    analogToDigitalConverter: {
      title: "Analog-to-Digital Converter (ADC)",
      img: BA,
      info: "To enable computerized processing, storage, and display, the conditioned analog signals are passed through an Analog-to-Digital Converter (ADC). The ADC samples the continuous waveform at specific intervals and converts it into discrete digital values that can be interpreted by computers and microcontrollers. The choice of sampling rate and resolution is critical to ensure that important physiological information is preserved without distortion.",
    },
    displayDevice: {
      title: "Display Device",
      img: _0,
      info: "It presents biomedical signals in a human-readable format such as graphs, waveforms, or numerical values.",
      subSections: [
        {
          subTitle: "Monitors",
          content:
            "Common in ICUs for continuous real-time display of vital signs like ECG, EEG, EMG.",
        },
        {
          subTitle: "Oscilloscopes",
          content:
            "Used in labs to study waveforms dynamically with adjustable time and voltage scales.",
        },
        {
          subTitle: "Chart/Graphic Recorders",
          content:
            "Provide permanent hardcopy records of physiological signals for diagnosis and archival.",
        },
      ],
    },
  },
  XA = () => {
    const [u, c] = Ge.useState(null);
    return T.jsxs("div", {
      className: Ct.container,
      children: [
        T.jsx("div", {
          className: Ct.header,
          children: T.jsx("h2", { children: "Others Components" }),
        }),
        T.jsx("div", {
          className: Ct.gallery,
          children: Object.keys(Ha).map((s) =>
            T.jsxs(
              "div",
              {
                className: Ct.card,
                onClick: () => c(s),
                children: [
                  T.jsx("img", {
                    src: Ha[s].img,
                    alt: Ha[s].title,
                    className: Ct.transducerImage,
                  }),
                  T.jsx("p", { children: Ha[s].title }),
                ],
              },
              s
            )
          ),
        }),
        u &&
          T.jsxs("div", {
            className: Ct.infoBox,
            children: [
              T.jsx("h3", { children: Ha[u].title }),
              T.jsx("p", { className: Ct.mainInfo, children: Ha[u].info }),
              Ha[u].subSections &&
                T.jsx("div", {
                  className: Ct.subSections,
                  children: T.jsx("ul", {
                    children: Ha[u].subSections.map((s, r) =>
                      T.jsxs(
                        "li",
                        {
                          className: Ct.subSectionimageBox,
                          children: [
                            T.jsxs("div", {
                              className: Ct.subSectionContent,
                              children: [
                                T.jsxs("strong", {
                                  children: [s.subTitle, ":"],
                                }),
                                " ",
                                s.content,
                              ],
                            }),
                            s.subImg &&
                              T.jsx("img", {
                                src: s.subImg,
                                alt: s.subTitle,
                                className: Ct.subSectionImage,
                              }),
                          ],
                        },
                        r
                      )
                    ),
                  }),
                }),
            ],
          }),
      ],
    });
  },
  ZA = ({ showInstructions: u, currentSignal: c }) => {
    const s = Ge.useRef(null);
    return (
      Ge.useEffect(() => {
        s.current &&
          (u
            ? (s.current.classList.add(ul.fadeIn),
              s.current.classList.remove(ul.fadeOut))
            : (s.current.classList.add(ul.fadeOut),
              s.current.classList.remove(ul.fadeIn)));
      }, [u]),
      T.jsxs("div", {
        className: ul.middlePanelWrapper,
        children: [
          u &&
            T.jsx("div", {
              className: ul.instructionPanel,
              ref: s,
              children: T.jsx(Tp, {}),
            }),
          T.jsxs("div", {
            className: ul.contentArea,
            children: [
              c === "signalSource" && T.jsx(NA, {}),
              c === "transducer" && T.jsx(ob, {}),
              c === "eegCap" && T.jsx(Xp, {}),
              c === "otherComponents" && T.jsx(XA, {}),
              c === "signalProcessingFlow" && T.jsx(eb, {}),
            ],
          }),
        ],
      })
    );
  },
  VA = "_navBtn_wd6ef_25",
  Du = {
    "button-panel-container": "_button-panel-container_wd6ef_3",
    "button-panel-title": "_button-panel-title_wd6ef_15",
    navBtn: VA,
  },
  QA = ({
    currentSignal: u,
    onNext: c,
    onPrevious: s,
    isFirstSignal: r,
    isLastSignal: o,
  }) =>
    T.jsxs("div", {
      className: Du["button-panel-container"],
      children: [
        T.jsx("div", {
          children: T.jsx("button", {
            className: Du.navBtn,
            onClick: s,
            disabled: r,
            id: "prevBtn",
            children: "Previous",
          }),
        }),
        T.jsx("div", {
          children: T.jsx("h3", {
            className: Du["button-panel-title"],
            children: u.name,
          }),
        }),
        T.jsx("div", {
          children: T.jsx("button", {
            className: Du.navBtn,
            onClick: c,
            disabled: o,
            id: "nextBtn",
            children: "Next",
          }),
        }),
      ],
    }),
  $A = () => {
    const [u, c] = Ge.useState(!1),
      [s, r] = Ge.useState(0),
      o = [
        { id: 0, name: "Signal Source: The Human Body", code: "signalSource" },
        { id: 1, name: "Transducer", code: "transducer" },
        { id: 2, name: "EEG Cap", code: "eegCap" },
        {
          id: 3,
          name: "Other Biomedical System Components",
          code: "otherComponents",
        },
        {
          id: 4,
          name: "Signal Processing Flow using biomedical system",
          code: "signalProcessingFlow",
        },
      ],
      v = () => {
        s < o.length - 1 && r(s + 1);
      },
      m = () => {
        s > 0 && r(s - 1);
      },
      p = () => {
        c(!u);
      },
      y = (h) => {
        u && !h.target.closest(`.${ua.instructionBtn}`) && c(!1);
      };
    return T.jsx("div", {
      className: ua["grand-container"],
      onClick: y,
      children: T.jsxs("div", {
        className: ua["parent-container"],
        children: [
          T.jsx("div", {
            className: ua["top-container"],
            children: T.jsx(pp, {}),
          }),
          T.jsx("div", {
            className: ua["button-container"],
            children: T.jsx(QA, {
              currentSignal: o[s],
              onNext: v,
              onPrevious: m,
              isFirstSignal: s === 0,
              isLastSignal: s === o.length - 1,
            }),
          }),
          T.jsx("div", {
            className: ua.instructionBtn,
            onClick: (h) => {
              h.stopPropagation(), p();
            },
            children: "Instructions",
          }),
          T.jsx("div", {
            className: ua["middle-container"],
            children: T.jsx("div", {
              className: ua["middle-panel-container"],
              children: T.jsx(ZA, {
                showInstructions: u,
                currentSignal: o[s].code,
              }),
            }),
          }),
          T.jsx("div", {
            className: ua["bottom-container"],
            children: "©Copyright 2025 Virtual Labs, IIT Roorkee",
          }),
        ],
      }),
    });
  },
  kA = () => T.jsx("div", { children: T.jsx($A, {}) });
vp.createRoot(document.getElementById("root")).render(
  T.jsx(Ge.StrictMode, { children: T.jsx(kA, {}) })
);
