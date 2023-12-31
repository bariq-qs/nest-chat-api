import { PaginationResultResponseDto } from 'src/utils/dto/pagination-result.response.dto';
import { BasePaginateResponseDto } from './base-pagination-response.dto';

export class BaseResponseDto<T> {
  message: string;
  error: string;
  data: T;
  pagination_metadata?: BasePaginateResponseDto;

  constructor(partial: Partial<BaseResponseDto<T>>) {
    Object.assign(this, partial);
  }

  static successResponse<T>(data: T, message: string): BaseResponseDto<T> {
    return new BaseResponseDto({
      message,
      data,
    });
  }

  static paginateSuccessResponse<T>(
    result: PaginationResultResponseDto<T>,
    message: string,
  ): BaseResponseDto<T[]> {
    return new BaseResponseDto({
      data: result.data,
      pagination_metadata: BasePaginateResponseDto.fromPaginationMetadata(
        result.pagination,
      ),
      message,
    });
  }

  static errorResponse<T>(message: string, error: string): BaseResponseDto<T> {
    return new BaseResponseDto({
      message,
      error,
    });
  }
}
