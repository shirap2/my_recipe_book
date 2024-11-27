import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecipesModule } from './recipes/recipes.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',        // Change to 'mongodb' if you're using MongoDB
      host: 'localhost',
      port: 5432,              // Default PostgreSQL port
      username: 'postgres',
      password: '12345',
      database: 'recipes_db',   // Your DB name
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,       // Sync database with the entity (set to false in production)
    }),
    RecipesModule],
  // controllers: [AppController],
  // providers: [AppService],
  controllers: [],
  providers: [],
})
export class AppModule {}
