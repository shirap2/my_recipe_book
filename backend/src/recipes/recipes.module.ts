// import { Module } from '@nestjs/common';
// import { RecipesService } from './recipes.service';
// import { RecipesController } from './recipes.controller';

// @Module({
//   providers: [RecipesService],
//   controllers: [RecipesController]
// })
// export class RecipesModule {}
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Recipe } from './recipe.entity';
import { RecipesService } from './recipes.service';
import { RecipesController } from './recipes.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Recipe]),  // Import Recipe entity to enable repository injection
  ],
  providers: [RecipesService],
  controllers: [RecipesController],
})
export class RecipesModule {}
