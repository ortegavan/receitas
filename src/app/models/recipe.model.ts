import { Category } from './category.model';

export type Recipe = {
    id: number;
    name: string;
    description: string;
    imagePath: string;
    ingredients: string[];
    instructions: string[];
    categoryIds: number[];
    categories?: Category[];
};
