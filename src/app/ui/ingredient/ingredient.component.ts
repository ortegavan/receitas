import { Component, Input } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { Ingredient } from '../../models/ingredient.model';

@Component({
    selector: 'app-ingredient',
    standalone: true,
    imports: [],
    templateUrl: './ingredient.component.html',
    styleUrl: './ingredient.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IngredientComponent {
    @Input({ required: true }) ingredient!: Ingredient;
}
