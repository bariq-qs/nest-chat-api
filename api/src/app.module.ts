import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InternalServicesModule } from './internal-services/internal-services.module';

@Module({
  imports: [InternalServicesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
