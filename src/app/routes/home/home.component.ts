import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../ui/header/header.component';
import { RecipeService } from '../../services/recipe.service';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [HeaderComponent, CommonModule],
})
export class HomeComponent {
    recipeService = inject(RecipeService);
    recipes$ = this.recipeService.getAll();
}
