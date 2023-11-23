import React, { useState } from 'react'
import CommonButton from "../components/common/CommonButton/CommonButton";
import GridWrapper from "../components/common/GridWrapper/GridWrapper";
import BasicSnackbar from "../components/common/BasicSnackbar/BasicSnackbar";

const Storage = () => {
    const [open, setOpen] = useState(false);
    const [severity, setSeverity] = useState('success');

    const handleClick = () => {
        setOpen(true);
        setSeverity("success")
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
        // setSeverity(false)
    };

    const handleFailureClick = () => {
        setOpen(true);
        setSeverity("error")
    };
    return (
        <GridWrapper>
            This is storage page.
            <CommonButton
                variant="contained"
                onClick={handleClick}
            >
                Open success snackbar
            </CommonButton>
            <CommonButton
                variant="contained"
                onClick={handleFailureClick}
            >
                Open Failure snackbar
            </CommonButton>
            <BasicSnackbar
                open={open}
                onClose={handleClose}
                severity={severity}
                message="Error msg"
            />

        </GridWrapper>
    )
}

export default Storage