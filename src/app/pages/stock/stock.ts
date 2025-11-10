import { ChangeDetectionStrategy, Component } from '@angular/core';
import { StockAdd } from '../../components/stockAdd/stockAdd';
import { StockList } from '../../components/stockList/stockList';

@Component({
  selector: 'app-stock',
  imports: [StockAdd, StockList],
  templateUrl: './stock.html',
//  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Stock { }
