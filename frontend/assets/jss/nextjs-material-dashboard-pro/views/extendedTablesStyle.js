import buttonGroupStyle from "assets/jss/nextjs-material-dashboard-pro/buttonGroupStyle.js";
import customCheckboxRadioSwitch from "assets/jss/nextjs-material-dashboard-pro/customCheckboxRadioSwitch.js";
import {
  cardTitle,
  grayColor,
} from "assets/jss/nextjs-material-dashboard-pro.js";

const extendedTablesStyle = {
  ...customCheckboxRadioSwitch,
  ...buttonGroupStyle,
  right: {
    textAlign: "right",
  },
  center: {
    textAlign: "center",
  },
  description: {
    maxWidth: "150px !important",
  },
  actionButton: {
    margin: "0 0 0 5px !important",
    padding: "5px !important",
    "& svg,& .fab,& .fas,& .far,& .fal,& .material-icons": {
      marginRight: "0px !important",
    },
  },
  icon: {
    verticalAlign: "middle !important",
    width: "17px !important",
    height: "17px !important",
    top: "-1px !important",
    position: "relative !important",
  },
  imgContainer: {
    width: "120px !important",
    maxHeight: "160px !important",
    overflow: "hidden !important",
    display: "block !important",
  },
  img: {
    width: "100% !important",
    height: "auto !important",
    verticalAlign: "middle !important",
    border: "0 !important",
  },
  tdName: {
    minWidth: "200px !important",
    fontWeight: "400 !important",
    fontSize: "1.5em !important",
  },
  tdNameAnchor: {
    color: grayColor[2] + " !important",
  },
  tdNameSmall: {
    color: grayColor[0] + " !important",
    fontSize: "0.75em !important",
    fontWeight: "300 !important",
  },
  tdNumber: {
    textAlign: "right !important",
    minWidth: "145px !important",
    fontWeight: "300 !important",
    fontSize: "1.3em !important",
  },
  tdNumberSmall: {
    marginRight: "3px !important",
  },
  tdNumberAndButtonGroup: {
    lineHeight: "1 !important",
  },
  positionAbsolute: {
    position: "absolute !important",
    right: "0 !important",
    top: "0 !important",
  },
  customFont: {
    fontSize: "16px !important",
  },
  actionButtonRound: {
    width: "auto !important",
    height: "auto !important",
    minWidth: "auto !important",
  },
  cardIconTitle: {
    ...cardTitle,
    marginTop: "15px !important",
    marginBottom: "0px !important",
  },
};

export default extendedTablesStyle;
