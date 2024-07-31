// ==============================|| DEFAULT THEME - TYPOGRAPHY  ||============================== //

const Typography = (fontFamily) => ({
  htmlFontSize: 16,
  fontSize: 14,
  fontFamily,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 600,
  h1: {
    fontWeight: 600,
    fontSize: "2.375rem",
    lineHeight: 1.21,
  },
  h2: {
    fontWeight: 600,
    fontSize: "1.875rem",
    lineHeight: 1.27,
  },
  h3: {
    fontWeight: 600,
    fontSize: "1.5rem",
    lineHeight: 1.33,
  },
  h4: {
    fontWeight: 600,
    fontSize: "1.25rem",
    lineHeight: 1.4,
  },
  h5: {
    fontWeight: 600,
    fontSize: "1rem",
    lineHeight: 1.5,
  },
  title: {
    fontWeight: 600,
    fontSize: "1.125rem", //18px
    lineHeight: 1.5,
  },
  title1: {
    fontWeight: 600,
    fontSize: "1.375rem", //22px
    lineHeight: 1.5,
  },
  body3: {
    fontWeight: 600,
    fontSize: "0.75rem", // 12px bold
    lineHeight: 1.66,
  },
  subtitle: {
    fontWeight: 600,
    fontSize: "0.8rem",
  },
  h6: {
    fontWeight: 400,
    fontSize: "0.875rem",
    lineHeight: 1.57,
  },
  caption: {
    fontWeight: 400,
    fontSize: "0.75rem",
    lineHeight: 1.66,
  },
  body1: {
    fontSize: "0.875rem",
    lineHeight: 1.57,
  },
  body2: {
    fontSize: "0.75rem",
    lineHeight: 1.66,
  },
  subtitle1: {
    fontSize: "0.875rem",
    fontWeight: 600,
    lineHeight: 1.57,
  },
  subtitle2: {
    fontSize: "0.75rem",
    fontWeight: 500,
    lineHeight: 1.66,
  },
  btnTitle: {
    fontSize: "0.75rem",
    fontWeight: 600,
  },

  overline: {
    lineHeight: 1.66,
    // color: 'red !important'
  },
  button: {
    textTransform: "capitalize",
  },
  subtitle3: {
    fontSize: "0.75rem",
    lineHeight: 1.75,
    fontWeight: 600,
  },
  login1: {
    fontSize: "14px",
    color: "#888888",
  },
  remember:{
    color: "#888888",
    fontWeight: 400,
    fontSize: "0.75rem",
    lineHeight: 1.66,
  }
});

export default Typography;
