import {
  IsArray,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsPositive,
  IsString,
  IsUrl,
  IsUUID,
  Length,
  Matches,
} from 'class-validator';
//import { StartWith } from '../decorators/start-with.decorator';

export enum TaskTag {
  WORK = 'work',
  STUDY = 'study',
  HOME = 'home',
}

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  //@StartWith('Task:')
  @Length(3, 50)
  title: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsInt()
  @IsOptional()
  @IsPositive()
  priority: number;

  @IsArray()
  @IsEnum(TaskTag, { each: true })
  @IsOptional()
  tags: TaskTag[];

  @IsString()
  @Matches(/^[a-zA-Z][1-9]$/)
  @IsOptional()
  password: string;

  @IsUrl()
  @IsOptional()
  websiteUrl: string;

  @IsOptional()
  @IsUUID()
  userId: string;
}
