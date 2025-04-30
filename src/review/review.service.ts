import { Injectable } from '@nestjs/common';
import { ReviewDto } from './dto/create-review.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Review } from '../../generated/prisma';

@Injectable()
export class ReviewService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(dto: ReviewDto): Promise<Review> {
    const { text, rating, movieId } = dto;

    const review = await this.prismaService.review.create({
      data: {
        text,
        rating,
        movie: {
          connect: {
            id: movieId,
          },
        },
      },
    });

    return review;
  }
}
