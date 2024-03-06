import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class BillsService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.getClient().bill.findMany();
  }

  async findOne(id: string) {
    return this.prisma.getClient().bill.findUnique({
      where: { id: parseInt(id) },
    });
  }
}
