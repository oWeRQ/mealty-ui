import { Component } from '@angular/core';
import { IMealtyProduct, MealtyApiService } from 'src/app/services/mealty-api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  constructor(
    private mealtyApi: MealtyApiService,
  ) {}

  products: IMealtyProduct[] = [];
  productsByDay: IMealtyProduct[][] = [];

  get selectedProducts() {
    return this.productsByDay.flat();
  }

  get availableProducts() {
    return this.products.filter(product => !this.selectedProducts.includes(product));
  }

  ngOnInit() {
    this.mealtyApi.getProducts().subscribe((products) => {
      this.products = products;
    });
  }

  addDay() {
    this.productsByDay.push([]);
  }

  removeDay(index: number) {
    this.productsByDay.splice(index, 1);
  }

  selectProduct(product: IMealtyProduct) {
    if (this.productsByDay.length === 0)
      this.addDay();

    this.productsByDay.at(-1)?.push(product);
  }

  unselectProduct(product: IMealtyProduct) {
    for (const i in this.productsByDay) {
      this.productsByDay[i] = this.productsByDay[i].filter(p => p !== product);
    }
  }
}
