import React from "react";

// mterial-ui components
import { makeStyles } from "@material-ui/core/styles";

const styles = {
  clearfix: {
    "&:after,&:before": {
      display: "table",
      content: '" "',
    },
    "&:after": {
      clear: "both",
    },
  },
};

export default function Clearfix() {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  return <div className={classes.clearfix} />;
}
