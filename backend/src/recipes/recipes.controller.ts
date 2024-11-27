import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { RecipesService } from './recipes.service';
import { Recipe } from './recipe.entity';

@Controller('recipes')
export class RecipesController {
  constructor(private readonly recipesService: RecipesService) {}

  // Endpoint to create a new recipe
  @Post()
  async create(@Body() recipeData: Partial<Recipe>): Promise<Recipe> {
    return this.recipesService.create(recipeData);
  }

  // Endpoint to get all recipes
  @Get()
  async findAll(): Promise<Recipe[]> {
    return this.recipesService.findAll();
  }

  // Endpoint to get a recipe by its ID
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Recipe> {
    return this.recipesService.findOne(id);
  }
}
