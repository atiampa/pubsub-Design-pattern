import { unsubscribe } from "diagnostics_channel"
import { subscriber } from "./app"

Isubsciber //--> should be an abstact class
{
    handle(event)
    {
        //virtual fuction
    }
    subscribe(publisher)
    {
        publisher.subscribe(this.machienId())
    }
    unsubsciber(publisher)
    {
        publisher.unsubscribe(this.machienid())
    }
    machineid()
    {
        return this.machineid:
    }
    Machine machine;
}

IPublishSubscriber
{
    subsciber(target)
    {
        this.subscibers.push(target);
    }
    unsubscribe(machineId)
    {
        this.subscibers.splice(this.subscibers.find(m -> m.machineId() == machineId), 1)
    }
    Machine subscriber = [];
}

MachineRefilsubsciber extends ISubsciber
{
    handle()
    {
        //refill he machine
        this.machine.stockLevel = 10;
    }
}