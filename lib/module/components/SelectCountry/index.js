function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { useImperativeHandle, useMemo, useRef } from 'react';
import { Image, Text, View } from 'react-native';
import Dropdown from '../Dropdown';
import { styles } from './styles';
const SelectCountryComponent = /*#__PURE__*/React.forwardRef((props, currentRef) => {
  const {
    data,
    value,
    valueField,
    labelField,
    imageField,
    selectedTextStyle,
    imageStyle
  } = props;
  const ref = useRef(null);
  useImperativeHandle(currentRef, () => {
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
    return /*#__PURE__*/React.createElement(View, {
      style: styles.item
    }, /*#__PURE__*/React.createElement(Image, {
      source: item[imageField],
      style: [styles.image, imageStyle]
    }), /*#__PURE__*/React.createElement(Text, {
      style: [styles.selectedTextStyle, selectedTextStyle]
    }, item[labelField]));
  };
  const selectItem = useMemo(() => {
    const index = data.findIndex(e => e[valueField] === value);
    return data[index];
  }, [data, valueField, value]);
  return /*#__PURE__*/React.createElement(Dropdown, _extends({
    ref: ref
  }, props, {
    renderItem: _renderItem,
    renderLeftIcon: () => {
      if (selectItem !== null && selectItem !== void 0 && selectItem.image) {
        return /*#__PURE__*/React.createElement(Image, {
          source: selectItem.image,
          style: [styles.image, imageStyle]
        });
      } else {
        return null;
      }
    }
  }));
});
export default SelectCountryComponent;
//# sourceMappingURL=index.js.map