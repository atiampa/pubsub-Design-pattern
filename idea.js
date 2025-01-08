"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var diagnostics_channel_1 = require("diagnostics_channel");
var app_1 = require("./app");
Isubsciber; //--> should be an abstact class
{
    handle(event);
    {
        //virtual fuction
    }
    subscribe(publisher);
    {
        publisher.subscribe(this.machienId());
    }
    unsubsciber(publisher);
    {
        publisher.unsubscribe(this.machienid());
    }
    machineid();
    {
        return this.machineid;
    }
    Machine;
    machine;
}
IPublishSubscriber;
{
    subsciber(target);
    {
        this.subscibers.push(target);
    }
    (0, diagnostics_channel_1.unsubscribe)(machineId);
    {
        this.subscibers.splice(this.subscibers.find(m -  > m.machineId() == machineId), 1);
    }
    Machine;
    app_1.subscriber = [];
}
MachineRefilsubsciber;
ISubsciber;
{
    handle();
    {
        //refill he machine
        this.machine.stockLevel = 10;
    }
}
