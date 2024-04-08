import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../ui/header/header.component';
import { RecipeService } from '../../services/recipe.service';
import { RecipeComponent } from '../../ui/recipe/recipe.component';
import { HeroComponent } from '../../ui/hero/hero.component';
import { CategoryService } from '../../services/category.service';
import { CategoryComponent } from '../../ui/category/category.component';

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
export class HomeComponent {
    categoryService = inject(CategoryService);
    categories$ = this.categoryService.getAll();

    recipeService = inject(RecipeService);
    recipes$ = this.recipeService.getAll();
}
