import { extendTheme } from '@chakra-ui/react';

export const colors = {
  primary: {
    main: '#47AF64',
    text: '#212121',
  },
  secondary: {
    text: '#616161',
  },
  card: {
    background: '#F5F5F5',
  },
  placeholder: {
    text: '#BDBDBD',
  },
  border: {
    line: '#BDBDBD',
  },
};

export const customfonts = {
  fonts: {
    heading: `Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    body: `"Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
  },
};

export default extendTheme({ colors, customfonts });
