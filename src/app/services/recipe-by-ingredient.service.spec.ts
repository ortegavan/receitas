import { TestBed } from '@angular/core/testing';

import { RecipeByIngredientService } from './recipe-by-ingredient.service';

describe('RecipeByIngredientService', () => {
  let service: RecipeByIngredientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecipeByIngredientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
