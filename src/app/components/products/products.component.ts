import { Component } from '@angular/core';
import { MealtyApiService } from 'src/app/services/mealty-api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  constructor(
    private mealtyApi: MealtyApiService,
  ) {}

  ngOnInit() {
    this.mealtyApi.getProducts().subscribe(console.log);
  }
}
