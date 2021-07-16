import React from "react";
import PropTypes from "prop-types";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";

// @material-ui/icons
import ExpandMore from "@material-ui/icons/ExpandMore";

import styles from "assets/jss/nextjs-material-dashboard-pro/components/accordionStyle.js";

export default function AccordionExample(props) {
  const [active, setActive] = React.useState(props.active);
  const handleChange = (panel) => (event, expanded) => {
    setActive(expanded ? panel : -1);
  };
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const { collapses } = props;
  return (
    <div className={classes.root}>
      {collapses.map((prop, key) => {
        return (
          <Accordion
            expanded={active === key}
            onChange={handleChange(key)}
            key={key}
            classes={{
              root: classes.accordion,
              expanded: classes.accordionExpanded,
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMore />}
              classes={{
                root: classes.accordionSummary,
                expanded: classes.accordionSummaryExpaned,
                content: classes.accordionSummaryContent,
                expandIcon: classes.accordionSummaryExpandIcon,
              }}
            >
              <h4 className={classes.title}>{prop.title}</h4>
            </AccordionSummary>
            <AccordionDetails className={classes.accordionDetails}>
              {prop.content}
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}

Accordion.defaultProps = {
  active: -1,
  collapses: [],
};

Accordion.propTypes = {
  // index of the default active collapse
  active: PropTypes.number,
  collapses: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      content: PropTypes.node,
    })
  ).isRequired,
};
