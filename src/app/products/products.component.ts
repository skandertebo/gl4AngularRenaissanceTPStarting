import { Component } from '@angular/core';
import { BehaviorSubject, Observable, concatMap, map, takeWhile, scan } from 'rxjs';
import { Product } from './dto/product.dto';
import { ProductService } from './services/product.service';
import { Settings } from './dto/product-settings.dto';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products$!: Observable<Product[]>;
  constructor() {}
}
