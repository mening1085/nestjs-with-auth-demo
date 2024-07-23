import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'cgr_users',
})
export class CgrUser {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 100,
  })
  first_name: string;

  @Column({
    length: 100,
  })
  last_name: string;

  @Column({
    unique: true,
    length: 100,
  })
  email: string;

  @Column({
    length: 100,
  })
  password: string;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;
}
