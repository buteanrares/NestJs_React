import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BillsController } from './bills/bills.controller';
import { InvoicesController } from './invoices/invoices.controller';
import { BillsService } from './bills/bills.service';
import { InvoicesService } from './invoices/invoices.service';
import { PrismaService } from 'prisma/prisma.service';
import { PrismaClient } from '@prisma/client';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [AuthModule],
  controllers: [AppController, BillsController, InvoicesController],
  providers: [
    AppService,
    PrismaClient,
    PrismaService,
    BillsService,
    InvoicesService,
  ],
})
export class AppModule {}
