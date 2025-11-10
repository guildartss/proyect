import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Stock } from '../../interfaces/stock.interface';

@Component({
  selector: 'app-stock-list',
  imports: [],
  templateUrl: './stockList.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StockList { 
  stockTitle = signal ('Listado de Stock');
  constructor(private) { }
  public stockList: Stock[] = this.stockService.stockList();
}
