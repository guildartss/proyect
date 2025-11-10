import { ChangeDetectionStrategy, Component, signal, input } from '@angular/core';
import { Stock } from '../../interfaces/stock.interface';
import { StockService } from '../../services/stockService';
@Component({
  selector: 'app-stock-list',
  imports: [],
  templateUrl: './stockList.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StockList {
  stockTitle = signal<string>('listado de Stock');
  stockList = input.required<Stock[]>();
}