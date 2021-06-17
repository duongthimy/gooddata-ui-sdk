// (C) 2007-2019 GoodData Corporation
/* eslint-disable import/no-unresolved,import/default */
import React from "react";

import { ExampleWithSource } from "../../components/ExampleWithSource";

import DashboardViewSchedualEmail from "./DashboardViewSchedualEmailSrc";
import DashboardViewSchedualEmailSRC from "./DashboardViewSchedualEmailSrc?raw";
import DashboardViewSchedualEmailSRCJS from "./DashboardViewSchedualEmailSrc?rawJS";

const DashboardView = (): JSX.Element => (
    <div>
        <h1>DashboardView Schedual Email</h1>

        <p>
            Simple example of how to embed a Dashboard into your application. There is a filter set on this
            Dashboard itself to show only <em>Fine Dining</em> restaurants.
        </p>

        <ExampleWithSource
            for={DashboardViewSchedualEmail}
            source={DashboardViewSchedualEmailSRC}
            sourceJS={DashboardViewSchedualEmailSRCJS}
        />
    </div>
);

export default DashboardView;
