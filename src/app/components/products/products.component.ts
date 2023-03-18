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

  ngOnInit() {
    this.mealtyApi.getProducts().subscribe((products) => {
      this.products = products;
    });
  }
}
