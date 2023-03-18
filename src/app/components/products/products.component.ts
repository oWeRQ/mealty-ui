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
      this.loadStorage();
    });
  }

  saveStorage() {
    const data = this.productsByDay.map((products) => products.map((product) => product.id));
    window.localStorage.setItem('productsByDay', JSON.stringify(data));
  }

  loadStorage() {
    try {
      const data: string[][] = JSON.parse(window.localStorage.getItem('productsByDay') || '[]');
      this.productsByDay = data.map((productIds) => this.products.filter((product) => productIds.includes(product.id)));
    } catch (e) {}
  }

  addDay() {
    this.productsByDay.push([]);
  }

  removeDay(index: number) {
    if (this.productsByDay[index].length && !confirm(`Remove day ${index + 1}`))
      return;

    this.productsByDay.splice(index, 1);

    this.saveStorage();
  }

  selectProduct(product: IMealtyProduct) {
    if (this.productsByDay.length === 0)
      this.addDay();

    this.productsByDay.at(-1)?.push(product);

    this.saveStorage();
  }

  unselectProduct(product: IMealtyProduct) {
    for (const i in this.productsByDay) {
      this.productsByDay[i] = this.productsByDay[i].filter(p => p !== product);
    }

    this.saveStorage();
  }
}
