import { Trading } from "./trading.js";

export class Tradings {
  private _tradings: Trading[] = [];

  add(trading: Trading): void {
    this._tradings.push(trading);
  }

  getAll(): readonly Trading[] {
    return this._tradings;
  }
}