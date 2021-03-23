// (C) 2021 GoodData Corporation
import { LoadingSpinner } from "@gooddata/sdk-ui-kit";
import React from "react";
import { storiesOf } from "@storybook/react";
import { UiKit } from "../../../_infra/storyGroups";
import { withScreenshot } from "../../../_infra/backstopWrapper";

import "@gooddata/sdk-ui-kit/styles/css/main.css";
import "./styles.scss";

const LoadingSpinnerTest: React.FC = () => {
    return (
        <div className="library-component screenshot-target">
            <div className="loading-spinner-wrapper">
                Small
                <LoadingSpinner color="#00f" className="small" />
            </div>
            <br />
            <div className="loading-spinner-wrapper">
                Large
                <LoadingSpinner color="#f00" className="large" />
            </div>
        </div>
    );
};

storiesOf(`${UiKit}/LoadingSpinner`, module).add("full-featured", () =>
    withScreenshot(<LoadingSpinnerTest />),
);
