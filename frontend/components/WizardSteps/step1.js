import React from "react";
import PropTypes from "prop-types";
// @material-ui/icons
import Face from "@material-ui/icons/Face";
import RecordVoiceOver from "@material-ui/icons/RecordVoiceOver";
import Email from "@material-ui/icons/Email";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import PictureUpload from "components/CustomUpload/PictureUpload.js";
import CustomInput from "components/CustomInput/CustomInput.js";

const style = {
  infoText: {
    fontWeight: "300",
    margin: "10px 0 30px",
    textAlign: "center",
  },
  inputAdornmentIcon: {
    color: "#555",
  },
  inputAdornment: {
    position: "relative",
  },
};

const Step1 = React.forwardRef((props, ref) => {
  const [firstname, setfirstname] = React.useState("");
  const [firstnameState, setfirstnameState] = React.useState("");
  const [lastname, setlastname] = React.useState("");
  const [lastnameState, setlastnameState] = React.useState("");
  const [email, setemail] = React.useState("");
  const [emailState, setemailState] = React.useState("");
  const stateFunctions = {
    setemailState: (value) => setemailState(value),
    setemail: (value) => setemail(value),
    setlastnameState: (value) => setlastnameState(value),
    setlastname: (value) => setlastname(value),
    setfirstnameState: (value) => setfirstnameState(value),
    setfirstname: (value) => setfirstname(value),
  };
  const sendState = () => {
    return {
      firstname,
      firstnameState,
      lastname,
      lastnameState,
      email,
      emailState,
    };
  };
  // function that returns true if value is email, false otherwise
  const verifyEmail = (value) => {
    var emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailRex.test(value)) {
      return true;
    }
    return false;
  };
  // function that verifies if a string has a given length or not
  const verifyLength = (value, length) => {
    if (value.length >= length) {
      return true;
    }
    return false;
  };
  const change = (event, stateName, type, stateNameEqualTo, maxValue) => {
    switch (type) {
      case "email":
        if (verifyEmail(event.target.value)) {
          stateFunctions["set" + stateName + "State"]("success");
        } else {
          stateFunctions["set" + stateName + "State"]("error");
        }
        break;
      case "length":
        if (verifyLength(event.target.value, stateNameEqualTo)) {
          stateFunctions["set" + stateName + "State"]("success");
        } else {
          stateFunctions["set" + stateName + "State"]("error");
        }
        break;
      default:
        break;
    }
    stateFunctions["set" + stateName](event.target.value);
  };
  const isValidated = () => {
    if (
      firstnameState === "success" &&
      lastnameState === "success" &&
      emailState === "success"
    ) {
      return true;
    } else {
      if (firstnameState !== "success") {
        setfirstnameState("error");
      }
      if (lastnameState !== "success") {
        setlastnameState("error");
      }
      if (emailState !== "success") {
        setemailState("error");
      }
    }
    return false;
  };
  React.useImperativeHandle(ref, () => ({
    isValidated: () => {
      return isValidated();
    },
    sendState: () => {
      return sendState();
    },
  }));
  const { classes } = props;
  return (
    <GridContainer justify="center">
      <GridItem xs={12} sm={12}>
        <h4 className={classes.infoText}>
          Let{"'"}s start with the basic information (with validation)
        </h4>
      </GridItem>
      <GridItem xs={12} sm={4}>
        <PictureUpload />
      </GridItem>
      <GridItem xs={12} sm={6}>
        <CustomInput
          success={firstnameState === "success"}
          error={firstnameState === "error"}
          labelText={
            <span>
              First Name <small>(required)</small>
            </span>
          }
          id="firstname"
          formControlProps={{
            fullWidth: true,
          }}
          inputProps={{
            onChange: (event) => change(event, "firstname", "length", 3),
            endAdornment: (
              <InputAdornment position="end" className={classes.inputAdornment}>
                <Face className={classes.inputAdornmentIcon} />
              </InputAdornment>
            ),
          }}
        />
        <CustomInput
          success={lastnameState === "success"}
          error={lastnameState === "error"}
          labelText={
            <span>
              Last Name <small>(required)</small>
            </span>
          }
          id="lastname"
          formControlProps={{
            fullWidth: true,
          }}
          inputProps={{
            onChange: (event) => change(event, "lastname", "length", 3),
            endAdornment: (
              <InputAdornment position="end" className={classes.inputAdornment}>
                <RecordVoiceOver className={classes.inputAdornmentIcon} />
              </InputAdornment>
            ),
          }}
        />
      </GridItem>
      <GridItem xs={12} sm={12} md={12} lg={10}>
        <CustomInput
          success={emailState === "success"}
          error={emailState === "error"}
          labelText={
            <span>
              Email <small>(required)</small>
            </span>
          }
          id="email"
          formControlProps={{
            fullWidth: true,
          }}
          inputProps={{
            onChange: (event) => change(event, "email", "email"),
            endAdornment: (
              <InputAdornment position="end" className={classes.inputAdornment}>
                <Email className={classes.inputAdornmentIcon} />
              </InputAdornment>
            ),
          }}
        />
      </GridItem>
    </GridContainer>
  );
});

Step1.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(style)(Step1);
