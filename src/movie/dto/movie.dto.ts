import {
  IsArray,
  IsInt,
  IsNotEmpty,
  IsString,
  IsUUID,
  Max,
  Min,
} from 'class-validator';

export class MovieDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsInt()
  @Min(1888)
  @Max(2030)
  releaseYear: number;

  @IsString()
  imageUrl: string;

  @IsArray()
  @IsUUID('4', {
    each: true,
  })
  actorIds: string[];
}
