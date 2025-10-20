"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useDeviceOrientation = useDeviceOrientation;
var _react = require("react");
var _reactNative = require("react-native");
/* eslint-disable @typescript-eslint/no-shadow */

const isOrientationPortrait = ({
  width,
  height
}) => height >= width;
const isOrientationLandscape = ({
  width,
  height
}) => width >= height;
function useDeviceOrientation() {
  const screen = _reactNative.Dimensions.get('screen');
  const initialState = {
    portrait: isOrientationPortrait(screen),
    landscape: isOrientationLandscape(screen)
  };
  const [orientation, setOrientation] = (0, _react.useState)(initialState);
  (0, _react.useEffect)(() => {
    const onChange = ({
      screen
    }) => {
      setOrientation({
        portrait: isOrientationPortrait(screen),
        landscape: isOrientationLandscape(screen)
      });
    };
    const subscription = _reactNative.Dimensions.addEventListener('change', onChange);
    return () => {
      if (typeof (subscription === null || subscription === void 0 ? void 0 : subscription.remove) === 'function') {
        subscription.remove();
      }
    };
  }, []);
  return orientation.portrait ? 'PORTRAIT' : 'LANDSCAPE';
}
//# sourceMappingURL=useDeviceOrientation.js.map