import { JsonPipe, TitleCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  imports: [ReactiveFormsModule, TitleCasePipe, JsonPipe],
  templateUrl: './reactive-forms.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ReactiveForms {
  public name= signal("felix zelaya");
  private fb = inject(FormBuilder);
  public myForm = this.fb.group({ 
    product: ['', [Validators.required, Validators.minLength(6)]], 
    cuantity: [0, [Validators.required, Validators.min(2)]],
    existence: [0, [Validators.required, Validators.min(1)]]
  });
}
