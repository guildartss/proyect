import { ChangeDetectionStrategy, Component, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Stock } from '../../interfaces/stock.interface';
import { JsonPipe } from '@angular/common';


@Component({
  selector: 'app-reactive-stock',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe, ],
  templateUrl: './reactive-stock.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ReactiveStock {

  OnNewStock = output<Stock>();

  stockForm = new FormGroup({
    name: new FormControl('', { nonNullable: true }),
    cuantity: new FormControl(0, { nonNullable: true }),
    existence: new FormControl(0, { nonNullable: true }),
  });

  addStock() {
    const { name, cuantity, existence } = this.stockForm.getRawValue();

    const newStock: Stock = {
      id: Math.floor(Math.random() * 100),
      name,
      cuantity,
      existence,
    };

    this.OnNewStock.emit(newStock);
    this.resetInput();
  }

  resetInput() {
    this.stockForm.reset({
      name: (''),
      cuantity: 0,
      existence: 0,
    });
  }
}