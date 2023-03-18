import { Component, Input } from '@angular/core';
import { IMealtyProduct } from 'src/app/services/mealty-api.service';

@Component({
  selector: 'app-products-summary[products]',
  templateUrl: './products-summary.component.html',
  styleUrls: ['./products-summary.component.css'],
})
export class ProductsSummaryComponent {
  @Input() products!: IMealtyProduct[];

  get price() {
    return this.products.reduce((acc, cur) => acc + +cur.price, 0);
  }

  get weight() {
    return this.products.reduce((acc, cur) => acc + +cur.meta['weight'], 0);
  }

  get calories() {
    return this.products.reduce((acc, cur) => acc + +cur.meta['calories__portion'], 0);
  }
}
