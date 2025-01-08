import { BaseEvent, MachineSaleEvent, MachineRefillEvent } from "./Event";
import { Machine } from "./Machine";
import { PublishSubscribeService } from "./PublishSubscribeService";

export class Subscriber {
  machine: Machine;

  constructor(machine: Machine) {
    this.machine = machine;
  }

  handle(event: BaseEvent): void {
    console.log("Base Subscriber cannot handle events directly.");
  }

  subscribe(publisher: PublishSubscribeService): void {
    publisher.subscribe(this);
  }

  unsubscribe(publisher: PublishSubscribeService): void {
    publisher.unsubscribe(this.machine.id);
  }
}

export class MachineSaleSubscriber extends Subscriber {
  handle(event: BaseEvent): void {
    if (event instanceof MachineSaleEvent && event.machineId === this.machine.id) {
      this.machine.reduceStock(event.sold); // when me buying an oreo with 120 sweetness
      console.log(
        `Machine ${this.machine.id} sold ${event.sold}. Remaining stock: ${this.machine.stockLevel}`
      );
    }
  }
}

export class MachineRefillSubscriber extends Subscriber {
    handle(event: BaseEvent): void {
      if (event instanceof MachineRefillEvent && event.machineId === this.machine.id) {
        this.machine.resetStock(event.refill) // taobin at ladkrabang campus have 100 stock per days
        console.log(
          `Machine ${this.machine.id} refilled. Stock level: ${this.machine.stockLevel}`
        );
      }
    }
}