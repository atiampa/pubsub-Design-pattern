"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.MachineRefillEvent = exports.MachineSaleEvent = exports.BaseEvent = void 0;
var BaseEvent = /** @class */ (function () {
    function BaseEvent(type, machineId) {
        this.type = type;
        this.machineId = machineId; // library of taobin ladkrabang campus
    }
    return BaseEvent;
}());
exports.BaseEvent = BaseEvent;
var MachineSaleEvent = /** @class */ (function (_super) {
    __extends(MachineSaleEvent, _super);
    function MachineSaleEvent(sold, machineId) {
        var _this = _super.call(this, "sale", machineId) || this;
        _this.sold = sold;
        return _this;
    }
    return MachineSaleEvent;
}(BaseEvent));
exports.MachineSaleEvent = MachineSaleEvent;
var MachineRefillEvent = /** @class */ (function (_super) {
    __extends(MachineRefillEvent, _super);
    function MachineRefillEvent(refill, machineId) {
        var _this = _super.call(this, "refill", machineId) || this;
        _this.refill = refill;
        return _this;
    }
    return MachineRefillEvent;
}(BaseEvent));
exports.MachineRefillEvent = MachineRefillEvent;
