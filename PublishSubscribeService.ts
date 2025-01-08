import { BaseEvent } from "./Event";
import { Subscriber } from "./Subscriber";

export class PublishSubscribeService {
  private subscribers: { machineId: string; subscriber: Subscriber }[] = [];

  publish(event: BaseEvent): void {
    for (let i = 0; i < this.subscribers.length; i++) {
      if (this.subscribers[i].machineId === event.machineId) {
        this.subscribers[i].subscriber.handle(event);
      }
    }
  }

  subscribe(subscriber: Subscriber): void {
    this.subscribers[this.subscribers.length] = {
      machineId: subscriber.machine.id,
      subscriber: subscriber,
    };
  }

  unsubscribe(machineId: string): void {
    const newSubscribers: { machineId: string; subscriber: Subscriber }[] = [];
    for (let i = 0; i < this.subscribers.length; i++) {
      if (this.subscribers[i].machineId !== machineId) {
        newSubscribers[newSubscribers.length] = this.subscribers[i];
      }
    }
    this.subscribers = newSubscribers;
  }
}

