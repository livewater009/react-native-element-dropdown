"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _styles = require("./styles");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); } /* eslint-disable @typescript-eslint/no-shadow */
const ic_close = require('../../assets/close.png');
const TextInputComponent = props => {
  const {
    fontFamily,
    style,
    value,
    placeholderTextColor = '#000',
    placeholder = '',
    showIcon,
    inputStyle,
    iconStyle,
    onChangeText = _value => {},
    renderLeftIcon,
    renderRightIcon
  } = props;
  const [text, setText] = (0, _react.useState)('');
  (0, _react.useEffect)(() => {
    if (value) {
      setText(value);
    }
  }, [value]);
  const onChange = text => {
    setText(text);
    onChangeText(text);
  };
  const _renderRightIcon = () => {
    if (showIcon) {
      if (renderRightIcon) {
        return renderRightIcon();
      }
      if (text.length > 0) {
        return /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
          onPress: () => onChange('')
        }, /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
          source: ic_close,
          style: _reactNative.StyleSheet.flatten([_styles.styles.icon, iconStyle])
        }));
      }
      return null;
    }
    return null;
  };
  const font = () => {
    if (fontFamily) {
      return {
        fontFamily: fontFamily
      };
    } else {
      return {};
    }
  };
  return /*#__PURE__*/_react.default.createElement(_reactNative.TouchableWithoutFeedback, null, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [style]
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _styles.styles.textInput
  }, renderLeftIcon === null || renderLeftIcon === void 0 ? void 0 : renderLeftIcon(), /*#__PURE__*/_react.default.createElement(_reactNative.TextInput, _extends({}, props, {
    style: _reactNative.StyleSheet.flatten([_styles.styles.input, inputStyle, font()]),
    value: text,
    placeholder: placeholder,
    placeholderTextColor: placeholderTextColor,
    onChangeText: onChange
  })), _renderRightIcon())));
};
var _default = exports.default = TextInputComponent;
//# sourceMappingURL=index.js.map