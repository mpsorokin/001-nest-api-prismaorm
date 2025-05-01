import {
  IsArray,
  IsInt,
  IsNotEmpty,
  IsString,
  IsUUID,
  Max,
  Min,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class MovieDto {
  @ApiProperty({
    description: 'Movie title',
    example: 'Movie title',
    type: String,
  })
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty({ description: 'Release Year', example: 2012, type: Number })
  @IsNotEmpty()
  @IsInt()
  @Min(1888)
  @Max(2030)
  releaseYear: number;

  @IsString()
  imageUrl: string;

  @ApiPropertyOptional({
    description: 'Movie poster',
    example: 'https://www.movie.com/pic.jpg',
    type: String,
  })
  @IsString()
  poster?: string;

  @IsArray()
  @IsUUID('4', {
    each: true,
  })
  actorIds: string[];
}
