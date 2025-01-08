export class BaseEvent {
  type: string;
  machineId: string;

  constructor(type: string, machineId: string) {
    this.type = type; 
    this.machineId = machineId;   // library of taobin ladkrabang campus
  }
}

export class MachineSaleEvent extends BaseEvent {
  sold: number;

  constructor(sold: number, machineId: string) {
    super("sale", machineId);
    this.sold = sold;
  }
}

export class MachineRefillEvent extends BaseEvent {
  refill: number;

  constructor(refill: number, machineId: string) {
    super("refill", machineId);
    this.refill = refill;
  }
}
