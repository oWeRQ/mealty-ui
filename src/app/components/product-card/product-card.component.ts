import { Component, Input } from '@angular/core';
import { IMealtyProduct } from 'src/app/services/mealty-api.service';

@Component({
  selector: 'app-product-card[product]',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product!: IMealtyProduct;
}
