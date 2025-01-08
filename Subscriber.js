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
exports.MachineRefillSubscriber = exports.MachineSaleSubscriber = exports.Subscriber = void 0;
var Event_1 = require("./Event");
var Subscriber = /** @class */ (function () {
    function Subscriber(machine) {
        this.machine = machine;
    }
    Subscriber.prototype.handle = function (event) {
        console.log("Base Subscriber cannot handle events directly.");
    };
    Subscriber.prototype.subscribe = function (publisher) {
        publisher.subscribe(this);
    };
    Subscriber.prototype.unsubscribe = function (publisher) {
        publisher.unsubscribe(this.machine.id);
    };
    return Subscriber;
}());
exports.Subscriber = Subscriber;
var MachineSaleSubscriber = /** @class */ (function (_super) {
    __extends(MachineSaleSubscriber, _super);
    function MachineSaleSubscriber() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MachineSaleSubscriber.prototype.handle = function (event) {
        if (event instanceof Event_1.MachineSaleEvent && event.machineId === this.machine.id) {
            this.machine.reduceStock(event.sold); // when me buying an oreo with 120 sweetness
            console.log("Machine ".concat(this.machine.id, " sold ").concat(event.sold, ". Remaining stock: ").concat(this.machine.stockLevel));
        }
    };
    return MachineSaleSubscriber;
}(Subscriber));
exports.MachineSaleSubscriber = MachineSaleSubscriber;
var MachineRefillSubscriber = /** @class */ (function (_super) {
    __extends(MachineRefillSubscriber, _super);
    function MachineRefillSubscriber() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MachineRefillSubscriber.prototype.handle = function (event) {
        if (event instanceof Event_1.MachineRefillEvent && event.machineId === this.machine.id) {
            this.machine.resetStock(event.refill); // taobin at ladkrabang campus have 100 stock per days
            console.log("Machine ".concat(this.machine.id, " refilled. Stock level: ").concat(this.machine.stockLevel));
        }
    };
    return MachineRefillSubscriber;
}(Subscriber));
exports.MachineRefillSubscriber = MachineRefillSubscriber;
