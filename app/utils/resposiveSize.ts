import { Dimensions, PixelRatio } from 'react-native';

// Retrieve initial screen's width
let screenWidth = Dimensions.get('window').width;

// Retrieve initial screen's height
let screenHeight = Dimensions.get('window').height;

const setHeight = (value: number | string): number => {
  const finalSize = typeof value === 'number' ? value : parseFloat(value);
  return PixelRatio.roundToNearestPixel((screenHeight * finalSize) / 100);
};

const setWidth = (value: number | string): number => {
  const finalSize = typeof value === 'number' ? value : parseFloat(value);
  return PixelRatio.roundToNearestPixel((screenWidth * finalSize) / 100);
};

export { setHeight, setWidth };
