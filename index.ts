type StoreChangeHandler = () => void;
type UnsubscribeHandler = () => void;

export default class ZenStore {
  private value: any;
  private listeners: StoreChangeHandler[] = [];

  constructor(value: any) {
    this.value = value;
  }

  subscribe(handler: StoreChangeHandler): UnsubscribeHandler {
    this.listeners.push(handler);
    return () => {
      this.listeners = this.listeners.filter((l) => l !== handler);
    };
  }

  getSnapshot() {
    return this.value;
  }

  update(newValue: any) {
    this.value = newValue;
    this.listeners.forEach((handler) => handler());
  }
}
