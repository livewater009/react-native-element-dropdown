function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* eslint-disable @typescript-eslint/no-shadow */
import React, { useEffect, useState } from 'react';
import { Image, TextInput, TouchableOpacity, View, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { styles } from './styles';
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
  const [text, setText] = useState('');
  useEffect(() => {
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
        return /*#__PURE__*/React.createElement(TouchableOpacity, {
          onPress: () => onChange('')
        }, /*#__PURE__*/React.createElement(Image, {
          source: ic_close,
          style: StyleSheet.flatten([styles.icon, iconStyle])
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
  return /*#__PURE__*/React.createElement(TouchableWithoutFeedback, null, /*#__PURE__*/React.createElement(View, {
    style: [style]
  }, /*#__PURE__*/React.createElement(View, {
    style: styles.textInput
  }, renderLeftIcon === null || renderLeftIcon === void 0 ? void 0 : renderLeftIcon(), /*#__PURE__*/React.createElement(TextInput, _extends({}, props, {
    style: StyleSheet.flatten([styles.input, inputStyle, font()]),
    value: text,
    placeholder: placeholder,
    placeholderTextColor: placeholderTextColor,
    onChangeText: onChange
  })), _renderRightIcon())));
};
export default TextInputComponent;
//# sourceMappingURL=index.js.map