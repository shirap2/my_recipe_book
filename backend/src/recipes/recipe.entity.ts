// import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

// @Entity()
// export class Recipe {
//   @PrimaryGeneratedColumn()
//   id: number;

//   @Column()
//   title: string;

//   @Column('text')
//   ingredients: string;

//   @Column('text')
//   instructions: string;

//   @Column({ nullable: true })
//   imageUrl: string;
// }
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Recipe {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column('text')
  ingredients: string;

  @Column('text')
  instructions: string;

  @Column({ nullable: true })
  imageUrl: string;
}
