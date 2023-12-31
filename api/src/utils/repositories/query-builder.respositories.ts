import { Model, Query } from 'mongoose';

export class QueryBuilder<T> {
  private baseQuery: Query<T[], T>;
  constructor(private readonly model: Model<T>) {
    this.baseQuery = this.model.find();
  }

  filterByField(fieldName: string, value: any): this {
    this.baseQuery = this.baseQuery.where(fieldName, value);
    return this;
  }

  sortByField(fieldName: string, order: 'asc' | 'desc' = 'asc'): this {
    this.baseQuery = this.baseQuery.sort({ [fieldName]: order });
    return this;
  }

  async paginate(page: number = 1, limit: number = 10) {
    const skip = (page - 1) * limit;

    const query = this.baseQuery;
    const dataQuery = query.skip(skip).limit(limit);

    const [data, total] = await Promise.all([
      await dataQuery.exec(),
      await this.model.countDocuments(),
    ]);
    const totalPage = Math.ceil(total / limit);
    return {
      data,
      pagination: {
        total,
        page,
        limit,
        totalPage,
      },
    };
  }

  // Execute the query

  exec(): Promise<T[]> {
    return this.baseQuery.exec();
  }
}
