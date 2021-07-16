import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// layout for this page
import Auth from "layouts/Auth.js";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/nextjs-material-dashboard-pro/views/errorPageStyles.js";

function ErrorPage() {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  return (
    <div className={classes.contentCenter}>
      <GridContainer>
        <GridItem md={12}>
          <h1 className={classes.title}>404</h1>
          <h2 className={classes.subTitle}>Page not found :(</h2>
          <h4 className={classes.description}>
            Ooooups! Looks like you got lost.
          </h4>
        </GridItem>
      </GridContainer>
    </div>
  );
}

ErrorPage.layout = Auth;

export default ErrorPage;
