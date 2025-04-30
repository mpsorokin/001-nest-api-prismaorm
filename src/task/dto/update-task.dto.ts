import { IsBoolean, IsNotEmpty, IsString, Length } from 'class-validator';

export class UpdateTaskDto {
  @IsString({ message: 'Task should be a string' })
  @IsNotEmpty({ message: 'Task should not be empty' })
  @Length(3, 50)
  title: string;

  @IsBoolean()
  isCompleted: boolean;
}
