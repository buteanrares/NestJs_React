import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class InvoicesService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.getClient().invoice.findMany();
  }

  async findOne(id: string) {
    return this.prisma.getClient().invoice.findUnique({
      where: { id: parseInt(id) },
    });
  }
}
