export const theme = {
  colors: {
    white: '#ffffff',
    green: '#008000',
    red: '#FF0000',
    yellow: '#FFFF00',
    text: '#000',
    secondaryText: '#A9A9A9',
    bg: '#F5F5F5',
    secondaryBg: '#DCDCDC',
    primary: '#4169E1',
    secondary: '#0000CD',
    overlay: 'rgba(0, 0, 0, 0.6)',
  },
  fonts: {
    body: 'Roboto, sans- serif',
    monospace: 'Menlo, monospace',
  },
  space: [0, 2, 4, 8, 16, 32, 64],
  fontSizes: {
    xs: 12,
    s: 14,
    m: 16,
    l: 32,
    xl: 64,
  },
  fontWeights: {
    regular: 400,
    medium: 500,
    bold: 700,
  },
  widths: {
    maxWidth: '$calc(10vw - 48px)',
    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
  },
  sizes: {
    normal: '100%',
    container: 1200,
    input: 400,
    img: 260,
    button: 150,
  },
  lineHeights: {
    body: 1.5,
  },
  borders: {
    none: 'none',
    solid: 'solid',
    normal: '1px solid',
    borderWidth: '0 1px 1px 0',
  },
  radii: {
    none: '0',
    normal: '4px',
    round: '50%',
  },
  shadows: {
    boxShadow:
      '0px 1px 3px rgba(0, 0, 0, 0.22), 0px 2px 2px rgba(0, 0, 0, 0.24), 0px 2px 1px rgba(0, 0, 0, 0.32)',
    textShadow: '0 1px 1px #2d2020',
    modalShadow: '0 0 60px 10px rgba(0, 0, 0, 0.9)',
  },
  transition: {
    transition: 'transform 250ms cubic-bezier(0.4, 0, 0.2, 1)',
  },
};
