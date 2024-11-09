import { Component, signal, computed } from '@angular/core';

@Component({
  selector: 'app-ttccalculator',
  standalone: true,
  imports: [],
  templateUrl: './ttccalculator.component.html',
  styleUrl: './ttccalculator.component.css',
})
export class TTCCalculatorComponent {
  price = signal<number>(0);
  quantity = signal<number>(1);
  tva = signal<number>(0);
  unitPrice = computed(() => this.price() + (this.price() * this.tva()) / 100);
  discount = computed(() => {
    if (this.quantity() > 15) return 30;
    if (this.quantity() > 10) return 20;
    return 0;
  });
  totalPrice = computed(() => {
    const unitPrice = this.unitPrice();
    const disc = this.discount();
    return this.quantity() * unitPrice * (1 - disc / 100);
  });

  onTvaChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.tva.set(input.valueAsNumber || 0);
  }

  onPriceChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.price.set(input.valueAsNumber || 0);
  }
  onQuantityChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.quantity.set(input.valueAsNumber || 0);
  }
}
