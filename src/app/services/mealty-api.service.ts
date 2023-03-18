import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export type IMealtyCategory = {
  id: string;
  name: string;
  title: string;
};

export type IMealtyProduct = {
  category: IMealtyCategory,
  meta: Record<string, string>,
  id: string;
  sellerId: string;
  priority: string;
  heatable: string;
  newProduct: string;
  imageUrl: string;
  name: string;
  note: string;
  price: string;
};

export type IMealtyCategoryWithProducts = IMealtyCategory & {
  products: IMealtyProduct[];
};

@Injectable({
  providedIn: 'root'
})
export class MealtyApiService {
  constructor(
    private http: HttpClient,
  ) {}

  getBaseUrl() {
    return 'http://localhost:3000/api/v1';
  }
  
  getCategories() {
    return this.http.get<IMealtyCategoryWithProducts[]>(this.getBaseUrl() + '/categories');
  }

  getProducts() {
    return this.http.get<IMealtyProduct[]>(this.getBaseUrl() + '/products');
  }
}
