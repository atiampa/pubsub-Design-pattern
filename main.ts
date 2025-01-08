import { Machine } from "./Machine";
import { MachineSaleSubscriber, MachineRefillSubscriber } from "./Subscriber";
import { PublishSubscribeService } from "./PublishSubscribeService";
import { BaseEvent, MachineSaleEvent, MachineRefillEvent } from "./Event";

const randomMachine = (): string => {
  const random = Math.random() * 3;
  if (random < 1) {
    return "001";
  } else if (random < 2) {
    return "002";
  }
  return "003";
};

const eventGenerator = (): BaseEvent => {
  const random = Math.random();
  if (random < 0.5) {
    const saleQty = Math.random() < 0.5 ? 1 : 2; // 1 or 2
    return new MachineSaleEvent(saleQty, randomMachine());
  }
  const refillQty = Math.random() < 0.5 ? 3 : 5; // 3 or 5
  return new MachineRefillEvent(refillQty, randomMachine());
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

(async () => {
    const machines: Machine[] = [
      new Machine("001"),
      new Machine("002"),
      new Machine("003"),
    ];
  
    const pubSubService = new PublishSubscribeService();
  
    for (const machine of machines) {
      const saleSubscriber = new MachineSaleSubscriber(machine);
      const refillSubscriber = new MachineRefillSubscriber(machine);
  
      saleSubscriber.subscribe(pubSubService);
      refillSubscriber.subscribe(pubSubService);
    }
  
    const events = [1, 2, 3, 4, 5].map(() => eventGenerator());
    events.forEach((event) => pubSubService.publish(event));
  })();
  
