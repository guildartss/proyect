import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

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
//  addStock() {
//    console.log('Metodo addStock ejecutado');
 // }
}
