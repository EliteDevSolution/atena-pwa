const buttonGroupStyle = {
  buttonGroup: {
    position: "relative !important",
    margin: "10px 1px !important",
    display: "inline-block !important",
    verticalAlign: "middle !important",
  },
  firstButton: {
    borderTopRightRadius: "0 !important",
    borderBottomRightRadius: "0 !important",
    margin: "0 !important",
    position: "relative !important",
    float: "left !important",
    "&:hover": {
      zIndex: "2 !important",
    },
  },
  middleButton: {
    borderRadius: "0 !important",
    margin: "0 !important",
    position: "relative !important",
    float: "left !important",
    "&:hover": {
      zIndex: "2 !important",
    },
  },
  lastButton: {
    borderTopLeftRadius: "0 !important",
    borderBottomLeftRadius: "0 !important",
    margin: "0 !important",
    "&:hover": {
      zIndex: "2 !important",
    },
  },
};

export default buttonGroupStyle;
