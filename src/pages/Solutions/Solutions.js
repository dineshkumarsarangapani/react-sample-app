import React from 'react'
import Grid from '@mui/material/Grid';
import ProgressStepper from "../../components/common/ProgressStepper/ProgressStepper";
import GridWrapper from "../../components/common/GridWrapper/GridWrapper";
import BasicCard from "../../components/common/BasicCard/BasicCard";

const Solutions = () => {
    const stepDescription = ['Description 1', 'Description 2', 'Description 3', "Dec 4"];
    const steps = ['Step 1', 'Step 2', 'Step 3'];

    return (
        <GridWrapper>
            <BasicCard
                content={
                    <ProgressStepper
                        steps={steps}
                        stepDescription={stepDescription}
                    />
                }
            />
        </GridWrapper>
    )
}

export default Solutions