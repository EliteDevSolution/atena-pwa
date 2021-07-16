import React from "react";

// layout for this page
import Admin from "layouts/Admin.js";
// core components
import Wizard from "components/Wizard/Wizard.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import Step1 from "components/WizardSteps/Step1.js";
import Step2 from "components/WizardSteps/Step2.js";
import Step3 from "components/WizardSteps/Step3.js";

function WizardView() {
  return (
    <GridContainer justify="center">
      <GridItem xs={12} sm={8}>
        <Wizard
          validate
          steps={[
            { stepName: "About", stepComponent: Step1, stepId: "about" },
            { stepName: "Account", stepComponent: Step2, stepId: "account" },
            { stepName: "Address", stepComponent: Step3, stepId: "address" },
          ]}
          title="Build Your Profile"
          subtitle="This information will let us know more about you."
          finishButtonClick={(e) => console.log(e)}
        />
      </GridItem>
    </GridContainer>
  );
}

WizardView.layout = Admin;

export default WizardView;
