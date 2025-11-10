import { ChangeDetectionStrategy, Component, signal, output } from '@angular/core';
import { Stock } from '../../interfaces/stock.interface';
@Component({
  selector: 'app-stock-add',
  imports: [],
  templateUrl: './stockAdd.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StockAdd {
  stockAddTitle = signal<string>("Agregar Stock");
  public name = signal("gafete");
  public cuantity = signal(7);
  public existence = signal(5);

  OnNewStock = output<Stock>();

  addStock() {
    const newStock: Stock = {
      id: Math.floor(Math.random() * 100),
      name: this.name(),
      cuantity: this.cuantity(),
      existence: this.existence()
    }
    this.OnNewStock.emit(newStock);
    this.resetInputs();
  }
  resetInputs() {
    this.name.set('');
    this.cuantity.set(0);
    this.existence.set(0);
  }
} 
