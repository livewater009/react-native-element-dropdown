"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _Dropdown = _interopRequireDefault(require("../Dropdown"));
var _styles = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SelectCountryComponent = /*#__PURE__*/_react.default.forwardRef((props, currentRef) => {
  const {
    data,
    value,
    valueField,
    labelField,
    imageField,
    selectedTextStyle,
    imageStyle
  } = props;
  const ref = (0, _react.useRef)(null);
  (0, _react.useImperativeHandle)(currentRef, () => {
    return {
      open: eventOpen,
      close: eventClose
    };
  });
  const eventOpen = () => {
    ref.current.open();
  };
  const eventClose = () => {
    ref.current.close();
  };
  const _renderItem = item => {
    return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      style: _styles.styles.item
    }, /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
      source: item[imageField],
      style: [_styles.styles.image, imageStyle]
    }), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
      style: [_styles.styles.selectedTextStyle, selectedTextStyle]
    }, item[labelField]));
  };
  const selectItem = (0, _react.useMemo)(() => {
    const index = data.findIndex(e => e[valueField] === value);
    return data[index];
  }, [data, valueField, value]);
  return /*#__PURE__*/_react.default.createElement(_Dropdown.default, _extends({
    ref: ref
  }, props, {
    renderItem: _renderItem,
    renderLeftIcon: () => {
      if (selectItem !== null && selectItem !== void 0 && selectItem.image) {
        return /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
          source: selectItem.image,
          style: [_styles.styles.image, imageStyle]
        });
      } else {
        return null;
      }
    }
  }));
});
var _default = exports.default = SelectCountryComponent;
//# sourceMappingURL=index.js.map