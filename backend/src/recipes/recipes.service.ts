import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Recipe } from './recipe.entity';

@Injectable()
export class RecipesService {
  constructor(
    @InjectRepository(Recipe)
    private recipesRepository: Repository<Recipe>,
  ) {}

  // Create a new recipe
  async create(recipe: Partial<Recipe>): Promise<Recipe> {
    const newRecipe = this.recipesRepository.create(recipe);
    return this.recipesRepository.save(newRecipe);
  }

  // Get all recipes
  async findAll(): Promise<Recipe[]> {
    return this.recipesRepository.find();
  }

  // Find one recipe by ID
  async findOne(id: number): Promise<Recipe> {
    return this.recipesRepository.findOneBy({id});
  }
}
