import { Injectable, signal, input } from '@angular/core';
import { Stock } from '../interfaces/stock.interface';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor() { }
  stockList = signal<Stock[]>([
    { id: 1, name: 'laptop', cuantity: 9 },
    { id: 2, name: 'mouse', cuantity: 3 },
    { id: 3, name: 'teclado', cuantity: 15 },
    { id: 4, name: 'monitor', cuantity: 1 },
  ]);
  addStock(stockItem: Stock) {
    this.stockList.update((list) => [...list, stockItem]);
  }

}
