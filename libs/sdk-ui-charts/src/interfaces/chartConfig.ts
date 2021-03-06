// (C) 2020 GoodData Corporation
import { ISeparators } from "@gooddata/numberjs";
import { IColorPalette, Identifier } from "@gooddata/sdk-model";
import { VisType } from "@gooddata/sdk-ui";
import { IColorMapping } from "@gooddata/sdk-ui-vis-commons";

/**
 * Chart config is used to customize visual aspects of the different charts. At the moment, a single structure
 * is used for all the charts - however not all options are applicable to all charts.
 *
 * As is, using the not-applicable option for a chart will be ignored. Going forward, we will add warnings to
 * notify developers that the option has no effect.
 *
 * Note: some properties of the chart config leak unnecessary implementation detail and should not be used. These
 * properties are marked as internal.
 *
 * @public
 */
export interface IChartConfig {
    /**
     * Customize what separators to use between different segments of formatted numbers (thousands, decimals etc).
     */
    separators?: ISeparators;

    /**
     * Specify list of colors (#rrggbb) to use when coloring the chart.
     */
    colors?: string[];

    /**
     * Specify color palette to use when coloring the chart.
     *
     * Note: The color palette is the primary way to specify the colors. If you specify both `colorPalette` and `colors`,
     * then colorPalette will be used.
     */
    colorPalette?: IColorPalette;

    /**
     * Specify custom coloring. This is done using (predicate, color) pairs. The different entities to chart (e.g.
     * data point, or a measure slice for particular attribute value) will be evaluated against the predicates. The color
     * will be associated in first-found approach.
     */
    colorMapping?: IColorMapping[];

    /**
     * Configure how legend appears and behaves.
     */
    legend?: ILegendConfig;

    /**
     * Configure whether legend items should be laid-out vertically (column legend) or horizontally (line legend).
     */
    legendLayout?: "vertical" | "horizontal";

    /**
     * Configure chart grid.
     */
    grid?: IGridConfig;

    /**
     * Customize format string to use for numeric tics on the X axis.
     */
    xFormat?: string;

    /**
     * Customize name of the x axis
     */
    xLabel?: string;

    /**
     * Customize format string to use for numeric tics on the Y axis.
     *
     * The format string conventions are exact same as when formatting measure values.
     */
    yFormat?: string;

    /**
     * Customize name of the y axis
     */
    yLabel?: string;

    /**
     * Customize visibility of the primary X axis, what should be on the primary X axis and how it should look like.
     */
    xaxis?: IAxisConfig;

    /**
     * Customize visibility of the primary Y axis, what should be on the primary Y axis and how it should look like.
     */
    yaxis?: IAxisConfig;

    /**
     * Customize visibility of the secondary X axis, what should be on the secondary X axis and how it should look like.
     */
    secondary_xaxis?: IAxisConfig;

    /**
     * Customize visibility of the secondary Y axis, what should be on the secondary Y axis and how it should look like.
     */
    secondary_yaxis?: IAxisConfig;

    /**
     * Customize visibility of the data labels. Data Labels typically appear within chart (e.g. next to a bar, inside a pie slice)
     * and
     */
    dataLabels?: IDataLabelsConfig;

    /**
     * Applicable for ComboChart only. When combo chart specifies both primary and secondary measures, it is by default
     * treated as dual-axis chart. Both primary and secondary axis will be visible.
     *
     * To turn the secondary axis off for ComboChart, set dualAxis: false
     */
    dualAxis?: boolean;

    /**
     * Applicable for ComboChart only. Specify type of chart to use for primary measures.
     */
    primaryChartType?: "line" | "column" | "area";

    /**
     * Applicable for ComboChart only. Specify type of chart to use for primary measures.
     */
    secondaryChartType?: "line" | "column" | "area";

    /**
     * Applicable for Area, Bar, Column and Combo charts which have more than one measure.
     *
     * For Area chart, this is on by default. If disables, the areas will overall.
     * For Bar and Column charts, this is off by default and each measure has its own bar or column.
     * For Combo, only measures assigned to the left (primary) axis will be stacked.
     */
    stackMeasures?: boolean;

    /**
     * Applicable for Area, Bar, Column and Combo charts which have more than one measure.
     *
     * This turns on measure stacking and client-side calculation of percentage contribution.
     *
     * This option has preference over the `stackMeasures` option.
     */
    stackMeasuresToPercent?: boolean;

    /**
     * Disables drilling by clicking on axis labels.
     *
     * When drilling is configured for a chart, users can click either the charted entities (data points, bars, columns etc)
     * or labels on the axes. This setting an be used to disable clicks on the drillable labels on axes.
     */
    forceDisableDrillOnAxes?: boolean;

    /**
     * Disable underlining of drillable items.
     *
     * Any label or text that is drillable and can be clicked is by default underlined. Set this option to true to
     * disable underlining.
     */
    disableDrillUnderline?: boolean;

    //
    //
    //

    /**
     * Do not use this. Instead use stackMeasures and/or stackMeasuresToPercent
     * @internal
     */
    stacking?: boolean;

    /**
     * Options passed directly to Highcharts constructor (ChartOptions type)
     *
     * @internal
     */
    chart?: any;

    /**
     * @internal
     */
    limits?: IChartLimits;

    /**
     * @internal
     */
    type?: VisType;
}

/**
 * @public
 */
export interface IGridConfig {
    enabled?: boolean;
}

/**
 * Available legend positions.
 *
 * @public
 */
export type PositionType = "left" | "right" | "top" | "bottom" | "auto";

/**
 * Data label visibility options.
 *
 * - false: no labels
 * - true: labels shown, values can overlap when rendered
 * - "auto": labels shown, values will not overlap when rendered
 * @public
 */
export type IDataLabelsVisible = boolean | string;

/**
 * Vertical chart alignment options.
 *
 * @public
 */
export type ChartAlignTypes = "top" | "bottom" | "middle";

/**
 * @public
 */
export interface IDataLabelsConfig {
    visible?: IDataLabelsVisible;
}

/**
 * @public
 */
export interface ILegendConfig {
    /**
     * Indicates whether legend should be rendered or not.
     */
    enabled?: boolean;

    /**
     * Where, relative to the chart, should the legend appear.
     */
    position?: PositionType;

    /**
     * Turns on responsive behavior. Legend items will be rendered horizontally on
     * screens smaller than 767px.
     */
    responsive?: boolean;
}

/**
 *
 * @public
 */
export interface IChartLimits {
    series?: number;
    categories?: number;
    dataPoints?: number;
}

/**
 * @public
 */
export type AxisNamePosition = "high" | "low" | "middle";

/**
 * Customize whether to display the axis name and if so, where relative to the axis it should be positioned.
 *
 * @public
 */
export interface IAxisNameConfig {
    /**
     * Toggle axis name visibility.
     */
    visible?: boolean;

    /**
     * Customize where, relative to the axis should the axis name appear.
     */
    position?: AxisNamePosition;
}

/**
 * @public
 */
export interface IAxisConfig {
    /**
     * Toggle axis visilibity.
     */
    visible?: boolean;

    /**
     * Toggle visibility of labels describing the different axis tics.
     */
    labelsEnabled?: boolean;

    /**
     * If labels are enabled, rotation lets you customize how they should be rotated. Specify this as a number
     * of degrees. Positive number means clockwise rotation, negative is counter-clockwise rotation.
     */
    rotation?: string;

    /**
     * Fox axis with numeric tics, this can influence the minimum value shown on the axis and in the chart itself.
     *
     * The min and max can be used to zoom-in or zoom-out the chart.
     */
    min?: string;

    /**
     * For axis with numeric tics, this can influence the maximum value shown on the axis and in the chart itself.
     *
     * The min and max can be used to zoom-in or zoom-out the chart.
     */
    max?: string;

    /**
     * Customize measures which are bound to this axis. This setting comes into play in dual-axis charts where you
     * must specify which measures are on the primary and which on the secondary axis.
     */
    measures?: Identifier[];

    /**
     * Customize whether and how the axis name should appear.
     */
    name?: IAxisNameConfig;
}
