import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../ui/header/header.component';
import { RecipeService } from '../../services/recipe.service';
import { RecipeComponent } from '../../ui/recipe/recipe.component';
import { HeroComponent } from '../../ui/hero/hero.component';
import { CategoryService } from '../../services/category.service';
import { CategoryComponent } from '../../ui/category/category.component';
import { combineLatest, map } from 'rxjs';
import { Category } from '../../models/category.model';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [
        HeaderComponent,
        CommonModule,
        RecipeComponent,
        HeroComponent,
        CategoryComponent,
    ],
})
export class HomeComponent implements OnInit {
    categoryService = inject(CategoryService);
    categories$ = this.categoryService.getAll();

    recipeService = inject(RecipeService);
    recipes$ = this.recipeService.getAll();

    ngOnInit(): void {
        this.recipes$ = combineLatest([
            this.categories$,
            this.recipeService.getAll(),
        ]).pipe(
            map(([categories, recipes]) => {
                return recipes.map((recipe) => {
                    return {
                        ...recipe,
                        categories: recipe.categoryIds.map((categoryId) => {
                            return categories.find(
                                (category) => category.id === categoryId
                            ) as Category;
                        }),
                    };
                });
            })
        );
    }
}
