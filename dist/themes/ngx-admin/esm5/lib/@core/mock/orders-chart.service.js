/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@core/mock/orders-chart.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { PeriodsService } from './periods.service';
import { OrdersChartData } from '../data/orders-chart';
var OrdersChartService = /** @class */ (function (_super) {
    tslib_1.__extends(OrdersChartService, _super);
    function OrdersChartService(period) {
        var _this = _super.call(this) || this;
        _this.period = period;
        _this.year = [
            '2012',
            '2013',
            '2014',
            '2015',
            '2016',
            '2017',
            '2018',
        ];
        _this.data = {};
        _this.data = {
            week: _this.getDataForWeekPeriod(),
            month: _this.getDataForMonthPeriod(),
            year: _this.getDataForYearPeriod(),
        };
        return _this;
    }
    /**
     * @private
     * @return {?}
     */
    OrdersChartService.prototype.getDataForWeekPeriod = /**
     * @private
     * @return {?}
     */
    function () {
        return {
            chartLabel: this.getDataLabels(42, this.period.getWeeks()),
            linesData: [
                [
                    184, 267, 326, 366, 389, 399,
                    392, 371, 340, 304, 265, 227,
                    191, 158, 130, 108, 95, 91, 97,
                    109, 125, 144, 166, 189, 212,
                    236, 259, 280, 300, 316, 329,
                    338, 342, 339, 329, 312, 288,
                    258, 221, 178, 128, 71,
                ],
                [
                    158, 178, 193, 205, 212, 213,
                    204, 190, 180, 173, 168, 164,
                    162, 160, 159, 158, 159, 166,
                    179, 195, 215, 236, 257, 276,
                    292, 301, 304, 303, 300, 293,
                    284, 273, 262, 251, 241, 234,
                    232, 232, 232, 232, 232, 232,
                ],
                [
                    58, 137, 202, 251, 288, 312,
                    323, 324, 311, 288, 257, 222,
                    187, 154, 124, 100, 81, 68, 61,
                    58, 61, 69, 80, 96, 115, 137,
                    161, 186, 210, 233, 254, 271,
                    284, 293, 297, 297, 297, 297,
                    297, 297, 297, 297, 297,
                ],
            ],
        };
    };
    /**
     * @private
     * @return {?}
     */
    OrdersChartService.prototype.getDataForMonthPeriod = /**
     * @private
     * @return {?}
     */
    function () {
        return {
            chartLabel: this.getDataLabels(47, this.period.getMonths()),
            linesData: [
                [
                    5, 63, 113, 156, 194, 225,
                    250, 270, 283, 289, 290,
                    286, 277, 264, 244, 220,
                    194, 171, 157, 151, 150,
                    152, 155, 160, 166, 170,
                    167, 153, 135, 115, 97,
                    82, 71, 64, 63, 62, 61,
                    62, 65, 73, 84, 102,
                    127, 159, 203, 259, 333,
                ],
                [
                    6, 83, 148, 200, 240,
                    265, 273, 259, 211,
                    122, 55, 30, 28, 36,
                    50, 68, 88, 109, 129,
                    146, 158, 163, 165,
                    173, 187, 208, 236,
                    271, 310, 346, 375,
                    393, 400, 398, 387,
                    368, 341, 309, 275,
                    243, 220, 206, 202,
                    207, 222, 247, 286, 348,
                ],
                [
                    398, 348, 315, 292, 274,
                    261, 251, 243, 237, 231,
                    222, 209, 192, 172, 152,
                    132, 116, 102, 90, 80, 71,
                    64, 58, 53, 49, 48, 54, 66,
                    84, 104, 125, 142, 156, 166,
                    172, 174, 172, 167, 159, 149,
                    136, 121, 105, 86, 67, 45, 22,
                ],
            ],
        };
    };
    /**
     * @private
     * @return {?}
     */
    OrdersChartService.prototype.getDataForYearPeriod = /**
     * @private
     * @return {?}
     */
    function () {
        return {
            chartLabel: this.getDataLabels(42, this.year),
            linesData: [
                [
                    190, 269, 327, 366, 389, 398,
                    396, 387, 375, 359, 343, 327,
                    312, 298, 286, 276, 270, 268,
                    265, 258, 247, 234, 220, 204,
                    188, 172, 157, 142, 128, 116,
                    106, 99, 95, 94, 92, 89, 84,
                    77, 69, 60, 49, 36, 22,
                ],
                [
                    265, 307, 337, 359, 375, 386,
                    393, 397, 399, 397, 390, 379,
                    365, 347, 326, 305, 282, 261,
                    241, 223, 208, 197, 190, 187,
                    185, 181, 172, 160, 145, 126,
                    105, 82, 60, 40, 26, 19, 22,
                    43, 82, 141, 220, 321,
                ],
                [
                    9, 165, 236, 258, 244, 206,
                    186, 189, 209, 239, 273, 307,
                    339, 365, 385, 396, 398, 385,
                    351, 300, 255, 221, 197, 181,
                    170, 164, 162, 161, 159, 154,
                    146, 135, 122, 108, 96, 87,
                    83, 82, 82, 82, 82, 82, 82,
                ],
            ],
        };
    };
    /**
     * @param {?} nPoints
     * @param {?} labelsArray
     * @return {?}
     */
    OrdersChartService.prototype.getDataLabels = /**
     * @param {?} nPoints
     * @param {?} labelsArray
     * @return {?}
     */
    function (nPoints, labelsArray) {
        /** @type {?} */
        var labelsArrayLength = labelsArray.length;
        /** @type {?} */
        var step = Math.round(nPoints / labelsArrayLength);
        return Array.from(Array(nPoints)).map((/**
         * @param {?} item
         * @param {?} index
         * @return {?}
         */
        function (item, index) {
            /** @type {?} */
            var dataIndex = Math.round(index / step);
            return index % step === 0 ? labelsArray[dataIndex] : '';
        }));
    };
    /**
     * @param {?} period
     * @return {?}
     */
    OrdersChartService.prototype.getOrdersChartData = /**
     * @param {?} period
     * @return {?}
     */
    function (period) {
        return this.data[period];
    };
    OrdersChartService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    OrdersChartService.ctorParameters = function () { return [
        { type: PeriodsService }
    ]; };
    return OrdersChartService;
}(OrdersChartData));
export { OrdersChartService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    OrdersChartService.prototype.year;
    /**
     * @type {?}
     * @private
     */
    OrdersChartService.prototype.data;
    /**
     * @type {?}
     * @private
     */
    OrdersChartService.prototype.period;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXJzLWNoYXJ0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZnMvbmd4LWFkbWluLyIsInNvdXJjZXMiOlsibGliL0Bjb3JlL21vY2svb3JkZXJzLWNoYXJ0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFlLGVBQWUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXBFO0lBQ3dDLDhDQUFlO0lBY3JELDRCQUFvQixNQUFzQjtRQUExQyxZQUNFLGlCQUFPLFNBTVI7UUFQbUIsWUFBTSxHQUFOLE1BQU0sQ0FBZ0I7UUFabEMsVUFBSSxHQUFHO1lBQ2IsTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtTQUNQLENBQUM7UUFFTSxVQUFJLEdBQUcsRUFBRyxDQUFDO1FBSWpCLEtBQUksQ0FBQyxJQUFJLEdBQUc7WUFDVixJQUFJLEVBQUUsS0FBSSxDQUFDLG9CQUFvQixFQUFFO1lBQ2pDLEtBQUssRUFBRSxLQUFJLENBQUMscUJBQXFCLEVBQUU7WUFDbkMsSUFBSSxFQUFFLEtBQUksQ0FBQyxvQkFBb0IsRUFBRTtTQUNsQyxDQUFDOztJQUNKLENBQUM7Ozs7O0lBRU8saURBQW9COzs7O0lBQTVCO1FBQ0UsT0FBTztZQUNMLFVBQVUsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQzFELFNBQVMsRUFBRTtnQkFDVDtvQkFDRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUc7b0JBQzVCLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRztvQkFDNUIsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRTtvQkFDOUIsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHO29CQUM1QixHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUc7b0JBQzVCLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRztvQkFDNUIsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUU7aUJBQ3ZCO2dCQUNEO29CQUNFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRztvQkFDNUIsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHO29CQUM1QixHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUc7b0JBQzVCLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRztvQkFDNUIsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHO29CQUM1QixHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUc7b0JBQzVCLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRztpQkFDN0I7Z0JBQ0Q7b0JBQ0UsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHO29CQUMzQixHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUc7b0JBQzVCLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUU7b0JBQzlCLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUc7b0JBQzVCLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRztvQkFDNUIsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHO29CQUM1QixHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRztpQkFDeEI7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDOzs7OztJQUVPLGtEQUFxQjs7OztJQUE3QjtRQUNFLE9BQU87WUFDTCxVQUFVLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUMzRCxTQUFTLEVBQUU7Z0JBQ1Q7b0JBQ0UsQ0FBQyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHO29CQUN6QixHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRztvQkFDdkIsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUc7b0JBQ3ZCLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHO29CQUN2QixHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRztvQkFDdkIsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUU7b0JBQ3RCLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRTtvQkFDdEIsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUc7b0JBQ25CLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHO2lCQUN4QjtnQkFDRDtvQkFDRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRztvQkFDcEIsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRztvQkFDbEIsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUU7b0JBQ25CLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHO29CQUNwQixHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHO29CQUNsQixHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHO29CQUNsQixHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHO29CQUNsQixHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHO29CQUNsQixHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHO29CQUNsQixHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHO29CQUNsQixHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRztpQkFDeEI7Z0JBQ0Q7b0JBQ0UsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUc7b0JBQ3ZCLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHO29CQUN2QixHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRztvQkFDdkIsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFO29CQUN6QixFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFO29CQUMxQixFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUc7b0JBQzNCLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRztvQkFDNUIsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRTtpQkFDOUI7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDOzs7OztJQUVPLGlEQUFvQjs7OztJQUE1QjtRQUNFLE9BQU87WUFDTCxVQUFVLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQztZQUM3QyxTQUFTLEVBQUU7Z0JBQ1Q7b0JBQ0UsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHO29CQUM1QixHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUc7b0JBQzVCLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRztvQkFDNUIsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHO29CQUM1QixHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUc7b0JBQzVCLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUU7b0JBQzNCLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRTtpQkFDdkI7Z0JBQ0Q7b0JBQ0UsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHO29CQUM1QixHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUc7b0JBQzVCLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRztvQkFDNUIsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHO29CQUM1QixHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUc7b0JBQzVCLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUU7b0JBQzNCLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHO2lCQUN0QjtnQkFDRDtvQkFDRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUc7b0JBQzFCLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRztvQkFDNUIsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHO29CQUM1QixHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUc7b0JBQzVCLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRztvQkFDNUIsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFO29CQUMxQixFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFO2lCQUMzQjthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7Ozs7OztJQUVELDBDQUFhOzs7OztJQUFiLFVBQWMsT0FBZSxFQUFFLFdBQXFCOztZQUM1QyxpQkFBaUIsR0FBRyxXQUFXLENBQUMsTUFBTTs7WUFDdEMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLGlCQUFpQixDQUFDO1FBRXBELE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHOzs7OztRQUFDLFVBQUMsSUFBSSxFQUFFLEtBQUs7O2dCQUMxQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1lBRTFDLE9BQU8sS0FBSyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQzFELENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFRCwrQ0FBa0I7Ozs7SUFBbEIsVUFBbUIsTUFBYztRQUMvQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDM0IsQ0FBQzs7Z0JBckpGLFVBQVU7Ozs7Z0JBSEYsY0FBYzs7SUF5SnZCLHlCQUFDO0NBQUEsQUF0SkQsQ0FDd0MsZUFBZSxHQXFKdEQ7U0FySlksa0JBQWtCOzs7Ozs7SUFFN0Isa0NBUUU7Ozs7O0lBRUYsa0NBQW1COzs7OztJQUVQLG9DQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGVyaW9kc1NlcnZpY2UgfSBmcm9tICcuL3BlcmlvZHMuc2VydmljZSc7XHJcbmltcG9ydCB7IE9yZGVyc0NoYXJ0LCBPcmRlcnNDaGFydERhdGEgfSBmcm9tICcuLi9kYXRhL29yZGVycy1jaGFydCc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBPcmRlcnNDaGFydFNlcnZpY2UgZXh0ZW5kcyBPcmRlcnNDaGFydERhdGEge1xyXG5cclxuICBwcml2YXRlIHllYXIgPSBbXHJcbiAgICAnMjAxMicsXHJcbiAgICAnMjAxMycsXHJcbiAgICAnMjAxNCcsXHJcbiAgICAnMjAxNScsXHJcbiAgICAnMjAxNicsXHJcbiAgICAnMjAxNycsXHJcbiAgICAnMjAxOCcsXHJcbiAgXTtcclxuXHJcbiAgcHJpdmF0ZSBkYXRhID0geyB9O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBlcmlvZDogUGVyaW9kc1NlcnZpY2UpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLmRhdGEgPSB7XHJcbiAgICAgIHdlZWs6IHRoaXMuZ2V0RGF0YUZvcldlZWtQZXJpb2QoKSxcclxuICAgICAgbW9udGg6IHRoaXMuZ2V0RGF0YUZvck1vbnRoUGVyaW9kKCksXHJcbiAgICAgIHllYXI6IHRoaXMuZ2V0RGF0YUZvclllYXJQZXJpb2QoKSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldERhdGFGb3JXZWVrUGVyaW9kKCk6IE9yZGVyc0NoYXJ0IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGNoYXJ0TGFiZWw6IHRoaXMuZ2V0RGF0YUxhYmVscyg0MiwgdGhpcy5wZXJpb2QuZ2V0V2Vla3MoKSksXHJcbiAgICAgIGxpbmVzRGF0YTogW1xyXG4gICAgICAgIFtcclxuICAgICAgICAgIDE4NCwgMjY3LCAzMjYsIDM2NiwgMzg5LCAzOTksXHJcbiAgICAgICAgICAzOTIsIDM3MSwgMzQwLCAzMDQsIDI2NSwgMjI3LFxyXG4gICAgICAgICAgMTkxLCAxNTgsIDEzMCwgMTA4LCA5NSwgOTEsIDk3LFxyXG4gICAgICAgICAgMTA5LCAxMjUsIDE0NCwgMTY2LCAxODksIDIxMixcclxuICAgICAgICAgIDIzNiwgMjU5LCAyODAsIDMwMCwgMzE2LCAzMjksXHJcbiAgICAgICAgICAzMzgsIDM0MiwgMzM5LCAzMjksIDMxMiwgMjg4LFxyXG4gICAgICAgICAgMjU4LCAyMjEsIDE3OCwgMTI4LCA3MSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIFtcclxuICAgICAgICAgIDE1OCwgMTc4LCAxOTMsIDIwNSwgMjEyLCAyMTMsXHJcbiAgICAgICAgICAyMDQsIDE5MCwgMTgwLCAxNzMsIDE2OCwgMTY0LFxyXG4gICAgICAgICAgMTYyLCAxNjAsIDE1OSwgMTU4LCAxNTksIDE2NixcclxuICAgICAgICAgIDE3OSwgMTk1LCAyMTUsIDIzNiwgMjU3LCAyNzYsXHJcbiAgICAgICAgICAyOTIsIDMwMSwgMzA0LCAzMDMsIDMwMCwgMjkzLFxyXG4gICAgICAgICAgMjg0LCAyNzMsIDI2MiwgMjUxLCAyNDEsIDIzNCxcclxuICAgICAgICAgIDIzMiwgMjMyLCAyMzIsIDIzMiwgMjMyLCAyMzIsXHJcbiAgICAgICAgXSxcclxuICAgICAgICBbXHJcbiAgICAgICAgICA1OCwgMTM3LCAyMDIsIDI1MSwgMjg4LCAzMTIsXHJcbiAgICAgICAgICAzMjMsIDMyNCwgMzExLCAyODgsIDI1NywgMjIyLFxyXG4gICAgICAgICAgMTg3LCAxNTQsIDEyNCwgMTAwLCA4MSwgNjgsIDYxLFxyXG4gICAgICAgICAgNTgsIDYxLCA2OSwgODAsIDk2LCAxMTUsIDEzNyxcclxuICAgICAgICAgIDE2MSwgMTg2LCAyMTAsIDIzMywgMjU0LCAyNzEsXHJcbiAgICAgICAgICAyODQsIDI5MywgMjk3LCAyOTcsIDI5NywgMjk3LFxyXG4gICAgICAgICAgMjk3LCAyOTcsIDI5NywgMjk3LCAyOTcsXHJcbiAgICAgICAgXSxcclxuICAgICAgXSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldERhdGFGb3JNb250aFBlcmlvZCgpOiBPcmRlcnNDaGFydCB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBjaGFydExhYmVsOiB0aGlzLmdldERhdGFMYWJlbHMoNDcsIHRoaXMucGVyaW9kLmdldE1vbnRocygpKSxcclxuICAgICAgbGluZXNEYXRhOiBbXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgNSwgNjMsIDExMywgMTU2LCAxOTQsIDIyNSxcclxuICAgICAgICAgIDI1MCwgMjcwLCAyODMsIDI4OSwgMjkwLFxyXG4gICAgICAgICAgMjg2LCAyNzcsIDI2NCwgMjQ0LCAyMjAsXHJcbiAgICAgICAgICAxOTQsIDE3MSwgMTU3LCAxNTEsIDE1MCxcclxuICAgICAgICAgIDE1MiwgMTU1LCAxNjAsIDE2NiwgMTcwLFxyXG4gICAgICAgICAgMTY3LCAxNTMsIDEzNSwgMTE1LCA5NyxcclxuICAgICAgICAgIDgyLCA3MSwgNjQsIDYzLCA2MiwgNjEsXHJcbiAgICAgICAgICA2MiwgNjUsIDczLCA4NCwgMTAyLFxyXG4gICAgICAgICAgMTI3LCAxNTksIDIwMywgMjU5LCAzMzMsXHJcbiAgICAgICAgXSxcclxuICAgICAgICBbXHJcbiAgICAgICAgICA2LCA4MywgMTQ4LCAyMDAsIDI0MCxcclxuICAgICAgICAgIDI2NSwgMjczLCAyNTksIDIxMSxcclxuICAgICAgICAgIDEyMiwgNTUsIDMwLCAyOCwgMzYsXHJcbiAgICAgICAgICA1MCwgNjgsIDg4LCAxMDksIDEyOSxcclxuICAgICAgICAgIDE0NiwgMTU4LCAxNjMsIDE2NSxcclxuICAgICAgICAgIDE3MywgMTg3LCAyMDgsIDIzNixcclxuICAgICAgICAgIDI3MSwgMzEwLCAzNDYsIDM3NSxcclxuICAgICAgICAgIDM5MywgNDAwLCAzOTgsIDM4NyxcclxuICAgICAgICAgIDM2OCwgMzQxLCAzMDksIDI3NSxcclxuICAgICAgICAgIDI0MywgMjIwLCAyMDYsIDIwMixcclxuICAgICAgICAgIDIwNywgMjIyLCAyNDcsIDI4NiwgMzQ4LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgMzk4LCAzNDgsIDMxNSwgMjkyLCAyNzQsXHJcbiAgICAgICAgICAyNjEsIDI1MSwgMjQzLCAyMzcsIDIzMSxcclxuICAgICAgICAgIDIyMiwgMjA5LCAxOTIsIDE3MiwgMTUyLFxyXG4gICAgICAgICAgMTMyLCAxMTYsIDEwMiwgOTAsIDgwLCA3MSxcclxuICAgICAgICAgIDY0LCA1OCwgNTMsIDQ5LCA0OCwgNTQsIDY2LFxyXG4gICAgICAgICAgODQsIDEwNCwgMTI1LCAxNDIsIDE1NiwgMTY2LFxyXG4gICAgICAgICAgMTcyLCAxNzQsIDE3MiwgMTY3LCAxNTksIDE0OSxcclxuICAgICAgICAgIDEzNiwgMTIxLCAxMDUsIDg2LCA2NywgNDUsIDIyLFxyXG4gICAgICAgIF0sXHJcbiAgICAgIF0sXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXREYXRhRm9yWWVhclBlcmlvZCgpOiBPcmRlcnNDaGFydCB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBjaGFydExhYmVsOiB0aGlzLmdldERhdGFMYWJlbHMoNDIsIHRoaXMueWVhciksXHJcbiAgICAgIGxpbmVzRGF0YTogW1xyXG4gICAgICAgIFtcclxuICAgICAgICAgIDE5MCwgMjY5LCAzMjcsIDM2NiwgMzg5LCAzOTgsXHJcbiAgICAgICAgICAzOTYsIDM4NywgMzc1LCAzNTksIDM0MywgMzI3LFxyXG4gICAgICAgICAgMzEyLCAyOTgsIDI4NiwgMjc2LCAyNzAsIDI2OCxcclxuICAgICAgICAgIDI2NSwgMjU4LCAyNDcsIDIzNCwgMjIwLCAyMDQsXHJcbiAgICAgICAgICAxODgsIDE3MiwgMTU3LCAxNDIsIDEyOCwgMTE2LFxyXG4gICAgICAgICAgMTA2LCA5OSwgOTUsIDk0LCA5MiwgODksIDg0LFxyXG4gICAgICAgICAgNzcsIDY5LCA2MCwgNDksIDM2LCAyMixcclxuICAgICAgICBdLFxyXG4gICAgICAgIFtcclxuICAgICAgICAgIDI2NSwgMzA3LCAzMzcsIDM1OSwgMzc1LCAzODYsXHJcbiAgICAgICAgICAzOTMsIDM5NywgMzk5LCAzOTcsIDM5MCwgMzc5LFxyXG4gICAgICAgICAgMzY1LCAzNDcsIDMyNiwgMzA1LCAyODIsIDI2MSxcclxuICAgICAgICAgIDI0MSwgMjIzLCAyMDgsIDE5NywgMTkwLCAxODcsXHJcbiAgICAgICAgICAxODUsIDE4MSwgMTcyLCAxNjAsIDE0NSwgMTI2LFxyXG4gICAgICAgICAgMTA1LCA4MiwgNjAsIDQwLCAyNiwgMTksIDIyLFxyXG4gICAgICAgICAgNDMsIDgyLCAxNDEsIDIyMCwgMzIxLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgOSwgMTY1LCAyMzYsIDI1OCwgMjQ0LCAyMDYsXHJcbiAgICAgICAgICAxODYsIDE4OSwgMjA5LCAyMzksIDI3MywgMzA3LFxyXG4gICAgICAgICAgMzM5LCAzNjUsIDM4NSwgMzk2LCAzOTgsIDM4NSxcclxuICAgICAgICAgIDM1MSwgMzAwLCAyNTUsIDIyMSwgMTk3LCAxODEsXHJcbiAgICAgICAgICAxNzAsIDE2NCwgMTYyLCAxNjEsIDE1OSwgMTU0LFxyXG4gICAgICAgICAgMTQ2LCAxMzUsIDEyMiwgMTA4LCA5NiwgODcsXHJcbiAgICAgICAgICA4MywgODIsIDgyLCA4MiwgODIsIDgyLCA4MixcclxuICAgICAgICBdLFxyXG4gICAgICBdLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGdldERhdGFMYWJlbHMoblBvaW50czogbnVtYmVyLCBsYWJlbHNBcnJheTogc3RyaW5nW10pOiBzdHJpbmdbXSB7XHJcbiAgICBjb25zdCBsYWJlbHNBcnJheUxlbmd0aCA9IGxhYmVsc0FycmF5Lmxlbmd0aDtcclxuICAgIGNvbnN0IHN0ZXAgPSBNYXRoLnJvdW5kKG5Qb2ludHMgLyBsYWJlbHNBcnJheUxlbmd0aCk7XHJcblxyXG4gICAgcmV0dXJuIEFycmF5LmZyb20oQXJyYXkoblBvaW50cykpLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgY29uc3QgZGF0YUluZGV4ID0gTWF0aC5yb3VuZChpbmRleCAvIHN0ZXApO1xyXG5cclxuICAgICAgcmV0dXJuIGluZGV4ICUgc3RlcCA9PT0gMCA/IGxhYmVsc0FycmF5W2RhdGFJbmRleF0gOiAnJztcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0T3JkZXJzQ2hhcnREYXRhKHBlcmlvZDogc3RyaW5nKTogT3JkZXJzQ2hhcnQge1xyXG4gICAgcmV0dXJuIHRoaXMuZGF0YVtwZXJpb2RdO1xyXG4gIH1cclxufVxyXG4iXX0=