import { Trading } from "../models/trading.js";
import { Tradings } from "../models/tradings.js";
export class TradingController {
    constructor() {
        this._tradings = new Tradings();
        this._inputDate = document.querySelector('#data');
        this._inputQuantity = document.querySelector('#quantidade');
        this._inputValue = document.querySelector('#valor');
    }
    addTrading() {
        this._tradings.add(this.createTrading());
        console.log(this._tradings.getAll());
        this.clearForm();
    }
    createTrading() {
        const exp = /-/g;
        const date = new Date(this._inputDate.value.replace(exp, ','));
        const quantity = parseInt(this._inputQuantity.value);
        const value = parseFloat(this._inputValue.value);
        return new Trading(date, quantity, value);
    }
    clearForm() {
        this._inputDate.value = '';
        this._inputQuantity.value = '';
        this._inputValue.value = '';
        this._inputDate.focus();
    }
}
