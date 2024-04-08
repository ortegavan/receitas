import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Category } from '../models/category.model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class CategoryService {
    endpoint = 'assets/db/categories.json';
    http = inject(HttpClient);

    public getAll(): Observable<Category[]> {
        return this.http.get<Category[]>(this.endpoint);
    }
}
