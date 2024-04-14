import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from '../models/recipe.model';

@Injectable({
    providedIn: 'root',
})
export class RecipeByIngredientService {
    endpoint = 'assets/db/recipes-by-ingredient.json';
    http = inject(HttpClient);

    public getByLovedIngredients(): Observable<Recipe[]> {
        return this.http.get<Recipe[]>(this.endpoint);
    }
}
