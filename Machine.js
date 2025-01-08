"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Machine = void 0;
var Machine = /** @class */ (function () {
    function Machine(id) {
        this.stockLevel = 1000; //to set a stock each days
        this.id = id;
    }
    Machine.prototype.reduceStock = function (quantity) {
        this.stockLevel -= quantity;
    };
    Machine.prototype.resetStock = function (value) {
        this.stockLevel = value;
    };
    return Machine;
}());
exports.Machine = Machine;
