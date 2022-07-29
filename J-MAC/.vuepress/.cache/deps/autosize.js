import {
  init_define_BACK_TO_TOP_LOCALES,
  init_define_CODE_COPY_LOCALES,
  init_define_CODE_COPY_OPTIONS,
  init_define_CODE_DEMO_OPTIONS,
  init_define_COMMENT_OPTIONS,
  init_define_EXTERNAL_LINK_ICON_LOCALES,
  init_define_MERMAID_OPTIONS,
  init_define_PHOTO_SWIPE_LOCALES,
  init_define_PHOTO_SWIPE_OPTIONS,
  init_define_PWA_LOCALES,
  init_define_READING_TIME_LOCALES,
  init_define_REVEAL_CONFIG,
  init_define_SEARCH_HOT_KEYS,
  init_define_SEARCH_LOCALES,
  init_define_WALINE_LOCALES
} from "./chunk-QSV2DUFA.js";

// dep:autosize
init_define_BACK_TO_TOP_LOCALES();
init_define_CODE_COPY_LOCALES();
init_define_CODE_COPY_OPTIONS();
init_define_CODE_DEMO_OPTIONS();
init_define_COMMENT_OPTIONS();
init_define_MERMAID_OPTIONS();
init_define_PHOTO_SWIPE_LOCALES();
init_define_PHOTO_SWIPE_OPTIONS();
init_define_PWA_LOCALES();
init_define_READING_TIME_LOCALES();
init_define_REVEAL_CONFIG();
init_define_WALINE_LOCALES();
init_define_EXTERNAL_LINK_ICON_LOCALES();
init_define_SEARCH_HOT_KEYS();
init_define_SEARCH_LOCALES();

// node_modules/autosize/dist/autosize.esm.js
init_define_BACK_TO_TOP_LOCALES();
init_define_CODE_COPY_LOCALES();
init_define_CODE_COPY_OPTIONS();
init_define_CODE_DEMO_OPTIONS();
init_define_COMMENT_OPTIONS();
init_define_MERMAID_OPTIONS();
init_define_PHOTO_SWIPE_LOCALES();
init_define_PHOTO_SWIPE_OPTIONS();
init_define_PWA_LOCALES();
init_define_READING_TIME_LOCALES();
init_define_REVEAL_CONFIG();
init_define_WALINE_LOCALES();
init_define_EXTERNAL_LINK_ICON_LOCALES();
init_define_SEARCH_HOT_KEYS();
init_define_SEARCH_LOCALES();
var e;
var t;
var n = "function" == typeof Map ? /* @__PURE__ */ new Map() : (e = [], t = [], { has: function(t2) {
  return e.indexOf(t2) > -1;
}, get: function(n2) {
  return t[e.indexOf(n2)];
}, set: function(n2, o2) {
  -1 === e.indexOf(n2) && (e.push(n2), t.push(o2));
}, delete: function(n2) {
  var o2 = e.indexOf(n2);
  o2 > -1 && (e.splice(o2, 1), t.splice(o2, 1));
} });
var o = function(e2) {
  return new Event(e2, { bubbles: true });
};
try {
  new Event("test");
} catch (e2) {
  o = function(e3) {
    var t2 = document.createEvent("Event");
    return t2.initEvent(e3, true, false), t2;
  };
}
function r(e2) {
  var t2 = n.get(e2);
  t2 && t2.destroy();
}
function i(e2) {
  var t2 = n.get(e2);
  t2 && t2.update();
}
var l = null;
"undefined" == typeof window || "function" != typeof window.getComputedStyle ? ((l = function(e2) {
  return e2;
}).destroy = function(e2) {
  return e2;
}, l.update = function(e2) {
  return e2;
}) : ((l = function(e2, t2) {
  return e2 && Array.prototype.forEach.call(e2.length ? e2 : [e2], function(e3) {
    return function(e4) {
      if (e4 && e4.nodeName && "TEXTAREA" === e4.nodeName && !n.has(e4)) {
        var t3, r2 = null, i2 = null, l2 = null, d2 = function() {
          e4.clientWidth !== i2 && c();
        }, a = function(t4) {
          window.removeEventListener("resize", d2, false), e4.removeEventListener("input", c, false), e4.removeEventListener("keyup", c, false), e4.removeEventListener("autosize:destroy", a, false), e4.removeEventListener("autosize:update", c, false), Object.keys(t4).forEach(function(n2) {
            e4.style[n2] = t4[n2];
          }), n.delete(e4);
        }.bind(e4, { height: e4.style.height, resize: e4.style.resize, overflowY: e4.style.overflowY, overflowX: e4.style.overflowX, wordWrap: e4.style.wordWrap });
        e4.addEventListener("autosize:destroy", a, false), "onpropertychange" in e4 && "oninput" in e4 && e4.addEventListener("keyup", c, false), window.addEventListener("resize", d2, false), e4.addEventListener("input", c, false), e4.addEventListener("autosize:update", c, false), e4.style.overflowX = "hidden", e4.style.wordWrap = "break-word", n.set(e4, { destroy: a, update: c }), "vertical" === (t3 = window.getComputedStyle(e4, null)).resize ? e4.style.resize = "none" : "both" === t3.resize && (e4.style.resize = "horizontal"), r2 = "content-box" === t3.boxSizing ? -(parseFloat(t3.paddingTop) + parseFloat(t3.paddingBottom)) : parseFloat(t3.borderTopWidth) + parseFloat(t3.borderBottomWidth), isNaN(r2) && (r2 = 0), c();
      }
      function u(t4) {
        var n2 = e4.style.width;
        e4.style.width = "0px", e4.style.width = n2, e4.style.overflowY = t4;
      }
      function s() {
        if (0 !== e4.scrollHeight) {
          var t4 = function(e5) {
            for (var t5 = []; e5 && e5.parentNode && e5.parentNode instanceof Element; )
              e5.parentNode.scrollTop && t5.push({ node: e5.parentNode, scrollTop: e5.parentNode.scrollTop }), e5 = e5.parentNode;
            return t5;
          }(e4), n2 = document.documentElement && document.documentElement.scrollTop;
          e4.style.height = "", e4.style.height = e4.scrollHeight + r2 + "px", i2 = e4.clientWidth, t4.forEach(function(e5) {
            e5.node.scrollTop = e5.scrollTop;
          }), n2 && (document.documentElement.scrollTop = n2);
        }
      }
      function c() {
        s();
        var t4 = Math.round(parseFloat(e4.style.height)), n2 = window.getComputedStyle(e4, null), r3 = "content-box" === n2.boxSizing ? Math.round(parseFloat(n2.height)) : e4.offsetHeight;
        if (r3 < t4 ? "hidden" === n2.overflowY && (u("scroll"), s(), r3 = "content-box" === n2.boxSizing ? Math.round(parseFloat(window.getComputedStyle(e4, null).height)) : e4.offsetHeight) : "hidden" !== n2.overflowY && (u("hidden"), s(), r3 = "content-box" === n2.boxSizing ? Math.round(parseFloat(window.getComputedStyle(e4, null).height)) : e4.offsetHeight), l2 !== r3) {
          l2 = r3;
          var i3 = o("autosize:resized");
          try {
            e4.dispatchEvent(i3);
          } catch (e5) {
          }
        }
      }
    }(e3);
  }), e2;
}).destroy = function(e2) {
  return e2 && Array.prototype.forEach.call(e2.length ? e2 : [e2], r), e2;
}, l.update = function(e2) {
  return e2 && Array.prototype.forEach.call(e2.length ? e2 : [e2], i), e2;
});
var d = l;
var autosize_esm_default = d;

// dep:autosize
var autosize_default = autosize_esm_default;
export {
  autosize_default as default
};
//# sourceMappingURL=autosize.js.map
