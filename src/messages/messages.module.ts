import { Module } from '@nestjs/common';
import { MessageRepository } from 'src/repository/message.repository';
import { DateService } from 'src/service/date/date.service';
import { FileService } from 'src/service/file/file.service';
import { MessagesService } from 'src/service/messages/messages.service';
import { MessagesController } from './messages.controller';

@Module({
  controllers: [MessagesController],
  providers: [FileService, DateService, MessagesService, MessageRepository]
})
export class MessagesModule {}
