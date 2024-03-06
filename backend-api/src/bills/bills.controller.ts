import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { BillsService } from './bills.service';

@Controller('bills')
export class BillsController {
  constructor(private readonly billsService: BillsService) {}

  @Get()
  async findAll() {
    return this.billsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const bill = await this.billsService.findOne(id);
    if (!bill) {
      throw new NotFoundException('Bill not found');
    }
    return bill;
  }
}
