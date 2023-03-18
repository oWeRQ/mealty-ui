import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
    return this.http.get(this.getBaseUrl() + '/categories');
  }

  getProducts() {
    return this.http.get(this.getBaseUrl() + '/products');
  }
}
