import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Checkbox from "@material-ui/core/Checkbox";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import customSelectStyle from "assets/jss/nextjs-material-dashboard-pro/customSelectStyle.js";
import customCheckboxRadioSwitch from "assets/jss/nextjs-material-dashboard-pro/customCheckboxRadioSwitch.js";

const style = {
  infoText: {
    fontWeight: "300",
    margin: "10px 0 30px",
    textAlign: "center",
  },
  inputAdornmentIcon: {
    color: "#555",
  },
  choiche: {
    textAlign: "center",
    cursor: "pointer",
    marginTop: "20px",
  },
  ...customSelectStyle,
  ...customCheckboxRadioSwitch,
};

const Step2 = React.forwardRef((props, ref) => {
  const [simpleSelect, setsimpleSelect] = React.useState("");
  const [design, setdesign] = React.useState(false);
  const [code, setcode] = React.useState(false);
  const [develop, setdevelop] = React.useState(false);
  const sendState = () => {
    return {
      simpleSelect,
      design,
      code,
      develop,
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
    <div>
      <h4 className={classes.infoText}>What are you doing? (checkboxes)</h4>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={12} lg={10}>
          <GridContainer>
            <GridItem xs={12} sm={4}>
              <div className={classes.choiche}>
                <Checkbox
                  tabIndex={-1}
                  onClick={() => setdesign(!design)}
                  checkedIcon={
                    <i
                      className={
                        "fas fa-pencil-alt " + classes.iconCheckboxIcon
                      }
                    />
                  }
                  icon={
                    <i
                      className={
                        "fas fa-pencil-alt " + classes.iconCheckboxIcon
                      }
                    />
                  }
                  classes={{
                    checked: classes.iconCheckboxChecked,
                    root: classes.iconCheckbox,
                  }}
                />
                <h6>Design</h6>
              </div>
            </GridItem>
            <GridItem xs={12} sm={4}>
              <div className={classes.choiche}>
                <Checkbox
                  tabIndex={-1}
                  onClick={() => setcode(!code)}
                  checkedIcon={
                    <i
                      className={"fas fa-terminal " + classes.iconCheckboxIcon}
                    />
                  }
                  icon={
                    <i
                      className={"fas fa-terminal " + classes.iconCheckboxIcon}
                    />
                  }
                  classes={{
                    checked: classes.iconCheckboxChecked,
                    root: classes.iconCheckbox,
                  }}
                />
                <h6>Code</h6>
              </div>
            </GridItem>
            <GridItem xs={12} sm={4}>
              <div className={classes.choiche}>
                <Checkbox
                  tabIndex={-1}
                  onClick={() => setdevelop(!develop)}
                  checkedIcon={
                    <i
                      className={"fas fa-laptop " + classes.iconCheckboxIcon}
                    />
                  }
                  icon={
                    <i
                      className={"fas fa-laptop " + classes.iconCheckboxIcon}
                    />
                  }
                  classes={{
                    checked: classes.iconCheckboxChecked,
                    root: classes.iconCheckbox,
                  }}
                />
                <h6>Develop</h6>
              </div>
              <FormControl fullWidth className={classes.selectFormControl}>
                <InputLabel
                  htmlFor="simple-select-2"
                  className={classes.selectLabel}
                >
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
                    id: "simple-select-2",
                  }}
                >
                  <MenuItem
                    disabled
                    classes={{
                      root: classes.selectMenuItem,
                    }}
                  >
                    Choose City
                  </MenuItem>
                  <MenuItem
                    classes={{
                      root: classes.selectMenuItem,
                      selected: classes.selectMenuItemSelected,
                    }}
                    value="2"
                  >
                    Paris
                  </MenuItem>
                  <MenuItem
                    classes={{
                      root: classes.selectMenuItem,
                      selected: classes.selectMenuItemSelected,
                    }}
                    value="3"
                  >
                    Bucharest
                  </MenuItem>
                </Select>
              </FormControl>
            </GridItem>
          </GridContainer>
        </GridItem>
      </GridContainer>
    </div>
  );
});

Step2.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(style)(Step2);
