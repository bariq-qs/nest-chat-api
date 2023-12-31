export class PaginationResultResponseDto<T> {
  data: T[];
  pagination?: PaginationMetadata;
}

export class PaginationMetadata {
  total: number;
  page: number;
  limit: number;
  totalPage: number;
}
