import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../ui/header/header.component';
import { RecipeService } from '../../services/recipe.service';
import { RecipeComponent } from '../../ui/recipe/recipe.component';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [HeaderComponent, CommonModule, RecipeComponent],
})
export class HomeComponent {
    recipeService = inject(RecipeService);
    recipes$ = this.recipeService.getAll();
}
