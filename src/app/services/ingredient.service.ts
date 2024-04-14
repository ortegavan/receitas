import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Ingredient } from '../models/ingredient.model';

@Injectable({
    providedIn: 'root',
})
export class IngredientService {
    endpoint = 'assets/db/ingredients.json';
    http = inject(HttpClient);

    public getAll(): Observable<Ingredient[]> {
        return this.http.get<Ingredient[]>(this.endpoint);
    }
}
