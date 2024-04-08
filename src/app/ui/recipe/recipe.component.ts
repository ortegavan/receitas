import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Recipe } from '../../models/recipe.model';

@Component({
    selector: 'app-recipe',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './recipe.component.html',
    styleUrl: './recipe.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipeComponent {
    @Input({ required: true }) recipe!: Recipe;
}
