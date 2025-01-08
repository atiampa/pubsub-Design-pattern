"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublishSubscribeService = void 0;
var PublishSubscribeService = /** @class */ (function () {
    function PublishSubscribeService() {
        this.subscribers = [];
    }
    PublishSubscribeService.prototype.publish = function (event) {
        for (var i = 0; i < this.subscribers.length; i++) {
            if (this.subscribers[i].machineId === event.machineId) {
                this.subscribers[i].subscriber.handle(event);
            }
        }
    };
    PublishSubscribeService.prototype.subscribe = function (subscriber) {
        this.subscribers[this.subscribers.length] = {
            machineId: subscriber.machine.id,
            subscriber: subscriber,
        };
    };
    PublishSubscribeService.prototype.unsubscribe = function (machineId) {
        var newSubscribers = [];
        for (var i = 0; i < this.subscribers.length; i++) {
            if (this.subscribers[i].machineId !== machineId) {
                newSubscribers[newSubscribers.length] = this.subscribers[i];
            }
        }
        this.subscribers = newSubscribers;
    };
    return PublishSubscribeService;
}());
exports.PublishSubscribeService = PublishSubscribeService;
