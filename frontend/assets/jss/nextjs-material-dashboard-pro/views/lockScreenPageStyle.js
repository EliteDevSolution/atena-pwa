import {
  cardTitle,
  container,
  whiteColor,
  blackColor,
  hexToRgb,
} from "assets/jss/nextjs-material-dashboard-pro.js";

const lockScreenPageStyle = (theme) => ({
  cardTitle,
  container: {
    ...container,
    zIndex: "4",
    [theme.breakpoints.down("sm")]: {
      paddingBottom: "100px",
    },
  },
  customCardClass: {
    width: "240px !important",
    margin: "60px auto 0 !important",
    color: whiteColor + " !important",
    display: "block !important",
    transform: "translate3d(" + hexToRgb(blackColor) + ") !important",
    transition: "all 300ms linear !important",
  },
  cardHidden: {
    opacity: "0 !important",
    transform: "translate3d(0, -60px, 0) !important",
  },
  cardAvatar: {
    maxWidth: "90px !important",
    maxHeight: "90px !important",
    marginTop: "-45px !important",
  },
  customCardFooterClass: {
    border: "none !important",
    paddingTop: "0 !important",
  },
  justifyContentCenter: {
    justifyContent: "center !important",
  },
});

export default lockScreenPageStyle;
