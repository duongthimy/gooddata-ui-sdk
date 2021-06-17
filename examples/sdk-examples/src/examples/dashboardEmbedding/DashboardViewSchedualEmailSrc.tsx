// (C) 2007-2018 GoodData Corporation
import React, { useState } from "react";
import { DashboardView } from "@gooddata/sdk-ui-ext";
import "@gooddata/sdk-ui-ext/styles/css/main.css";
import { idRef } from "@gooddata/sdk-model";
// import { MAPBOX_TOKEN } from "../../constants/fixtures";

const dashboardRef = idRef("aeO5PVgShc0T");
// const config = { mapboxToken: MAPBOX_TOKEN };

const DashboardViewSchedualEmail = () => {
    const [isEmailDialogOpen, setIsEmailDialogOpen] = useState(false);
    return (
        <>
            <button onClick={() => setIsEmailDialogOpen(true)}>Open Schedule Email Dialog</button>
            <DashboardView
                dashboard={dashboardRef}
                isScheduledMailDialogVisible={isEmailDialogOpen}
                onScheduledMailDialogCancel={() => setIsEmailDialogOpen(false)}
                onScheduledMailSubmitSuccess={() => {
                    alert("Scheduled email scheduled successfully");
                    setIsEmailDialogOpen(false);
                }}
                onScheduledMailSubmitError={() => {
                    alert("Scheduled email error");
                    setIsEmailDialogOpen(false);
                }}
            />
        </>
    );
};

export default DashboardViewSchedualEmail;
