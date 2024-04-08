import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from '../models/recipe.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class RecipeService {
    endpoint = 'assets/db/recipes.json';
    http = inject(HttpClient);

    public getAll(): Observable<Recipe[]> {
        return this.http.get<Recipe[]>(this.endpoint);
    }
}
