"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var Machine_1 = require("./Machine");
var Subscriber_1 = require("./Subscriber");
var PublishSubscribeService_1 = require("./PublishSubscribeService");
var Event_1 = require("./Event");
var randomMachine = function () {
    var random = Math.random() * 3;
    if (random < 1) {
        return "001";
    }
    else if (random < 2) {
        return "002";
    }
    return "003";
};
var eventGenerator = function () {
    var random = Math.random();
    if (random < 0.5) {
        var saleQty = Math.random() < 0.5 ? 1 : 2; // 1 or 2
        return new Event_1.MachineSaleEvent(saleQty, randomMachine());
    }
    var refillQty = Math.random() < 0.5 ? 3 : 5; // 3 or 5
    return new Event_1.MachineRefillEvent(refillQty, randomMachine());
};
/*(async () => {
  const machines: Machine[] = [new Machine("001"), new Machine("002"), new Machine("003")];

  const saleSubscriber = new MachineSaleSubscriber(machines[0]);
  const refillSubscriber = new MachineRefillSubscriber(machines[0]);

  const pubSubService = new PublishSubscribeService();

  saleSubscriber.subscribe(pubSubService);
  refillSubscriber.subscribe(pubSubService);

  const events = [1, 2, 3, 4, 5].map(() => eventGenerator());
  events.forEach((event) => pubSubService.publish(event));

  saleSubscriber.unsubscribe(pubSubService);
})();*/
(function () { return __awaiter(void 0, void 0, void 0, function () {
    var machines, pubSubService, _i, machines_1, machine, saleSubscriber, refillSubscriber, events;
    return __generator(this, function (_a) {
        machines = [
            new Machine_1.Machine("001"),
            new Machine_1.Machine("002"),
            new Machine_1.Machine("003"),
        ];
        pubSubService = new PublishSubscribeService_1.PublishSubscribeService();
        for (_i = 0, machines_1 = machines; _i < machines_1.length; _i++) {
            machine = machines_1[_i];
            saleSubscriber = new Subscriber_1.MachineSaleSubscriber(machine);
            refillSubscriber = new Subscriber_1.MachineRefillSubscriber(machine);
            saleSubscriber.subscribe(pubSubService);
            refillSubscriber.subscribe(pubSubService);
        }
        events = [1, 2, 3, 4, 5].map(function () { return eventGenerator(); });
        events.forEach(function (event) { return pubSubService.publish(event); });
        return [2 /*return*/];
    });
}); })();
