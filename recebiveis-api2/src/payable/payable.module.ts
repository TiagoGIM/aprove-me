import { Module } from '@nestjs/common';
import { PayableService } from './payable.service';
import { PayableController } from './payable.controller';
import { BatchService } from '../batch/batch.service';

@Module({
  controllers: [PayableController],
  providers: [PayableService, BatchService],
})
export class PayableModule {}
