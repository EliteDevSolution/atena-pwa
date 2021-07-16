import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

// core components
import CustomInput from "components/CustomInput/CustomInput.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import customSelectStyle from "assets/jss/nextjs-material-dashboard-pro/customSelectStyle.js";

const style = {
  infoText: {
    fontWeight: "300",
    margin: "10px 0 30px",
    textAlign: "center",
  },
  ...customSelectStyle,
};

const Step3 = React.forwardRef((props, ref) => {
  const [simpleSelect, setsimpleSelect] = React.useState("");
  const sendState = () => {
    return {
      simpleSelect,
    };
  };
  const handleSimple = (event) => {
    setsimpleSelect(event.target.value);
  };
  const isValidated = () => {
    return true;
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
        <h4 className={classes.infoText}>Are you living in a nice area?</h4>
      </GridItem>
      <GridItem xs={12} sm={7}>
        <CustomInput
          labelText="Street Name"
          id="streetname"
          formControlProps={{
            fullWidth: true,
          }}
        />
      </GridItem>
      <GridItem xs={12} sm={3}>
        <CustomInput
          labelText="Street No."
          id="streetno"
          formControlProps={{
            fullWidth: true,
          }}
        />
      </GridItem>
      <GridItem xs={12} sm={5}>
        <CustomInput
          labelText="City"
          id="city"
          formControlProps={{
            fullWidth: true,
          }}
        />
      </GridItem>
      <GridItem xs={12} sm={5}>
        <FormControl fullWidth className={classes.selectFormControl}>
          <InputLabel htmlFor="simple-select-3" className={classes.selectLabel}>
            Choose City
          </InputLabel>
          <Select
            MenuProps={{
              className: classes.selectMenu,
            }}
            classes={{
              select: classes.select,
            }}
            value={simpleSelect}
            onChange={handleSimple}
            inputProps={{
              name: "simpleSelect",
              id: "simple-select-3",
            }}
          >
            <MenuItem
              disabled
              classes={{
                root: classes.selectMenuItem,
              }}
            >
              Country
            </MenuItem>
            <MenuItem
              classes={{
                root: classes.selectMenuItem,
                selected: classes.selectMenuItemSelected,
              }}
              value="2"
            >
              France
            </MenuItem>
            <MenuItem
              classes={{
                root: classes.selectMenuItem,
                selected: classes.selectMenuItemSelected,
              }}
              value="3"
            >
              Romania
            </MenuItem>
          </Select>
        </FormControl>
      </GridItem>
    </GridContainer>
  );
});

Step3.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(style)(Step3);
