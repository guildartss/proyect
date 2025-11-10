import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { StockAdd } from '../../components/stockAdd/stockAdd';
import { StockList } from '../../components/stockList/stockList';
import { StockService } from '../../services/stockService';
import { StockExistence } from "../../components/stockExistence/stockExistence";

@Component({
  selector: 'app-stock',
  imports: [StockAdd, StockList],
  templateUrl: './stock.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Stock {
  public stockService = inject(StockService);
}