import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { Model } from 'mongoose';
import { QueryBuilder } from 'src/utils/repositories/query-builder.respositories';
// import { PaginationResultResponseDto } from 'src/utils/dto/pagination-result.response.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<UserDocument>,
  ) {}

  async findAll(): Promise<any> {
    const query = new QueryBuilder(this.userModel);
    const result = await query.paginate();
    return result;
  }
}
