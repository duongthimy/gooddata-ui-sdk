// (C) 2020 GoodData Corporation

import React, { useState } from "react";
import { Button, ExportDialog } from "@gooddata/sdk-ui-kit";
import { ThemeProvider, useTheme, useThemeIsLoading } from "@gooddata/sdk-ui-theme-provider";
import { newPositiveAttributeFilter, newRankingFilter } from "@gooddata/sdk-model";
import { AttributeFilter, RankingFilter } from "@gooddata/sdk-ui-filters";
import { BarChart, ColumnChart, Headline, LineChart } from "@gooddata/sdk-ui-charts";
import { PivotTable } from "@gooddata/sdk-ui-pivot";
import { Kpi } from "@gooddata/sdk-ui";
import { DashboardView, InsightView } from "@gooddata/sdk-ui-ext";
import { idRef } from "@gooddata/sdk-model";

import { attributeDropdownItems, measureDropdownItems } from "../rankingFilter/RankingFilterExample";
import { DateFilterComponentExample } from "../dateFilter/DateFilterComponentExample";
import { Ldm, LdmExt } from "../../ldm";
import { customTheme } from "../../constants/customTheme";

const style = {
    color: "var(--gd-palette-complementary-8, #464e56)",
    backgroundColor: "var(--gd-palette-complementary-0, #fff)",
    height: 700,
};

// const style = { height: 700 };
const dashboardRef = idRef("aaSn7njxfipF");
// const config = { mapboxToken: MAPBOX_TOKEN };

export const ThemeProviderExample: React.FC = () => {
    return (
        <div className="s-theme-provider" style={style}>
            <ThemeProvider theme={customTheme}>
                <ThemedComponentsExample />
            </ThemeProvider>
        </div>
    );
};

const ThemedComponentsExample: React.FC = () => {
    const theme = useTheme();
    const themeIsLoading = useThemeIsLoading();
    const [showExportDialog, setShowExportDialog] = useState(false);
    return (
        <div className="s-themed-components">
            {themeIsLoading ? (
                <div>...</div>
            ) : (
                <div>
                    <pre>{JSON.stringify(theme, null, "  ")}</pre>
                    {/* <br />
                    <br />
                    <br />
                    <h1>InsightView 1</h1>
                    <div style={style} className="s-insightView-pivot">
                        <InsightView
                            insight={Ldm.Insights.ThemePivotTable}
                            config={{
                                menu: {
                                    aggregations: true,
                                    aggregationsSubMenu: true,
                                },
                            }}
                        />
                    </div> */}
                    <br />
                    <br />
                    <br />
                    {/* <h1>InsightView 2</h1>
                    <div style={style} className="s-insightView-chart">
                        <InsightView insight={Ldm.Insights.ThemeColumnChart} />
                    </div>
                    <br />
                    <br />
                    <br />
                    <h1>InsightView 3</h1>
                    <div style={style} className="s-insightView-chart">
                        <InsightView insight={Ldm.Insights.ThemeBarChart} />
                    </div>
                    <br />
                    <br />
                    <br />
                    <h1>InsightView 4</h1>
                    <div style={style} className="s-insightView-chart">
                        <InsightView insight={Ldm.Insights.ThemeLineChart} />
                    </div>
                    <br />
                    <br />
                    <br />
                    <h1>InsightView 5</h1>
                    <div style={style} className="s-insightView-chart">
                        <InsightView insight={Ldm.Insights.ThemeStackedAreaChart} />
                    </div>
                    <br />
                    <br />
                    <br />
                    <h1>InsightView 6</h1>
                    <div style={style} className="s-insightView-chart">
                        <InsightView insight={Ldm.Insights.ThemeComboChart} />
                    </div>
                    <br />
                    <br />
                    <br />
                    <h1>InsightView 7</h1>
                    <div style={style} className="s-insightView-chart">
                        <InsightView insight={Ldm.Insights.ThemeScatterPlot} />
                    </div>
                    <br />
                    <br />
                    <br />
                    <h1>InsightView 8</h1>
                    <div style={style} className="s-insightView-chart">
                        <InsightView insight={Ldm.Insights.ThemeBubble} />
                    </div>
                    <br />
                    <br />
                    <br />
                    <h1>InsightView 9</h1>
                    <div style={style} className="s-insightView-chart">
                        <InsightView insight={Ldm.Insights.ThemePie} />
                    </div>
                    <br />
                    <br />
                    <br />
                    <h1>InsightView 10</h1>
                    <div style={style} className="s-insightView-chart">
                        <InsightView insight={Ldm.Insights.ThemeDonut} />
                    </div>
                    <br />
                    <br />
                    <br />
                    <h1>InsightView 11</h1>
                    <div style={style} className="s-insightView-chart">
                        <InsightView insight={Ldm.Insights.ThemeTreemap} />
                    </div>
                    <br />
                    <br />
                    <br />
                    <h1>InsightView 12</h1>
                    <div style={style} className="s-insightView-chart">
                        <InsightView insight={Ldm.Insights.ThemeHeatmap} />
                    </div>
                    <br />
                    <br />
                    <br />
                    <h1>InsightView 13</h1>
                    <div style={style} className="s-insightView-chart">
                        <InsightView insight={Ldm.Insights.ThemeBullet} />
                    </div>
                    <br />
                    <br />
                    <br />
                    <h1>InsightView 14</h1>
                    <div style={style} className="s-insightView-chart">
                        <InsightView insight={Ldm.Insights.ThemeXIRR} />
                    </div>
                    <br />
                    <br />
                    <br />
                    <h1>InsightView 15</h1>
                    <div style={style} className="s-insightView-chart">
                        <InsightView insight={Ldm.Insights.ThemeHeadline} />
                    </div>
                    <br />
                    <br />
                    <br /> */}
                    {/* <div style={style} className="s-insightView-chart">
                        <InsightView 
                            insight={Ldm.Insights.ThemeGeochart} 
                        />
                    </div> */}
                    <br />
                    <br />
                    <br />
                    <h1>Chart Component</h1>
                    <div style={style} className="s-column-chart">
                        <BarChart
                            measures={[LdmExt.TotalSalesWithoutFormatMeasure, LdmExt.TotalSalesHasLocalId]}
                            viewBy={[Ldm.DateYear, Ldm.LocationName.Default]}
                            // columns={[Ldm.EmployeeName.EmployeeURL]}
                            // stackBy={Ldm.EmployeeName.EmployeeURL}
                            config={{
                                // menu: {
                                //     aggregations: true,
                                //     aggregationsSubMenu: true,
                                // },
                                dataLabels: {
                                    visible: "true", // "auto" | true | false
                                },
                                // legend: {
                                //     enabled: true, // boolean
                                //     position: "right", // "top" | "left" | "right" | "bottom"
                                // },
                                // secondary_xaxis: {
                                //     visible: true,
                                //     labelsEnabled: true,
                                //     rotation: "auto",
                                //     // min: "300", // numeral string
                                //     // max: "400", // numeral string
                                //     measures: [LdmExt.totalSalesHasLocalIdentifier]
                                // }
                            }}
                            // filters={[
                            //     {
                            //         relativeDateFilter: {
                            //             dataSet: {
                            //                 uri: "/gdc/md/y2lwt04m1kb3r4mlclsu39tmvf935vy9/obj/2180",
                            //             },
                            //             from: -6,
                            //             granularity: "GDC.time.date",
                            //             to: 0,
                            //         },
                            //     },
                            // ]}
                        />
                    </div>
                    <br />
                    <br />
                    <br />
                    <h1>DashboardView component</h1>
                    <div>
                        <DashboardView
                            dashboard={dashboardRef}
                            // isReadOnly={false}
                            // onDrill={(e) => {
                            //     // eslint-disable-next-line no-console
                            //     console.log("Drill event in DashboardView: ", e);
                            // }}
                        />
                        <br />
                    </div>
                    <br />
                    Button
                    <br />
                    <Button className="gd-button-action" value="Themed button" />
                    <br />
                    <br />
                    AttributeFilter
                    <br />
                    <AttributeFilter
                        filter={newPositiveAttributeFilter(Ldm.EmployeeName.Default, ["Abbie Adams"])}
                        onApply={() => {}}
                    />
                    <br />
                    <br />
                    DateFilter
                    <br />
                    <DateFilterComponentExample />
                    <br />
                    <br />
                    ExportDialog
                    <br />
                    <Button
                        className="gd-button-secondary"
                        onClick={() => {
                            setShowExportDialog(true);
                        }}
                        value={"Open Export Dialog"}
                    />
                    {showExportDialog && (
                        <ExportDialog
                            headline="Export to XLSX"
                            cancelButtonText="Cancel"
                            submitButtonText="Export"
                            isPositive
                            className="s-dialog"
                            mergeHeaders
                            mergeHeadersDisabled={false}
                            mergeHeadersText="Keep attribute cells merged"
                            mergeHeadersTitle="CELLS"
                            onCancel={() => {
                                setShowExportDialog(false);
                            }}
                            onSubmit={() => {
                                setShowExportDialog(false);
                            }}
                        />
                    )}
                    <br />
                    <br />
                    Bar chart
                    <br />
                    <div style={{ height: 300 }}>
                        <BarChart measures={[LdmExt.TotalSales1]} viewBy={Ldm.LocationResort} />
                    </div>
                </div>
            )}
        </div>
    );
};
