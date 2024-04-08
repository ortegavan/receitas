import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Category } from '../../models/category.model';

@Component({
    selector: 'app-category',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './category.component.html',
    styleUrl: './category.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryComponent {
    @Input({ required: true }) category!: Category;
}
