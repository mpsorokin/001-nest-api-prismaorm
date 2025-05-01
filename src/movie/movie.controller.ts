import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  HttpStatus,
} from '@nestjs/common';
import { MovieService } from './movie.service';
import { MovieDto } from './dto/movie.dto';
import {
  ApiBody,
  ApiHeader,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('Movies')
@Controller('movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @ApiOperation({ summary: 'Get movies', description: 'Get movies' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Success' })
  @Get()
  findAll() {
    return this.movieService.findAll();
  }

  @ApiOperation({ summary: 'Create movie', description: 'Create movie' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        title: { type: 'string', example: 'Movie Title' },
      },
    },
  })
  @Post()
  create(@Body() dto: MovieDto) {
    return this.movieService.create(dto);
  }

  @ApiOperation({
    summary: 'Get movie by id',
    description: 'Get movie by id',
  })
  //@ApiParam({ name: 'id', type: 'string', description: 'The id of the movie' })
  /*@ApiQuery({
    name: 'year',
    type: 'string',
    description: 'The year of the movie',
    required: false,
  })*/
  @ApiHeader({ name: 'Authorization', description: 'Auth token' })
  @ApiOkResponse({ description: 'Success' })
  @ApiNotFoundResponse({ description: 'Not Found' })
  @Get(':id')
  findById(@Param('id') id: string) {
    return this.movieService.findById(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: MovieDto) {
    return this.movieService.update(id, dto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.movieService.delete(id);
  }
}
