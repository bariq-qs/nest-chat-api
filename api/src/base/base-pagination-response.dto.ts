import { PaginationMetadata } from 'src/utils/dto/pagination-result.response.dto';

export class BasePaginateResponseDto extends PaginationMetadata {
  static fromPaginationMetadata(
    metadata: PaginationMetadata,
  ): BasePaginateResponseDto {
    const result = new BasePaginateResponseDto();

    result['total'] = metadata.total;
    result['page'] = metadata.page;
    result['limit'] = metadata.limit;
    result['totalPage'] = metadata.totalPage;

    return result;
  }
}
