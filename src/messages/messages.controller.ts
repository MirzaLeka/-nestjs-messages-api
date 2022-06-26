import {
  Controller,
  Get,
  Post,
  Body,
  Param
} from '@nestjs/common';
import { MessageDTO } from 'src/model/dto/message.dto';
import { MessageModel } from 'src/model/interface/message.model';
import { MessagesService } from 'src/service/messages/messages.service';

@Controller('messages')
export class MessagesController {

  constructor(private messagesService: MessagesService) {}

  @Get()
  listMessages() {
    return this.messagesService.retrieveAllMessages();
  }

  @Post()
  createMessage(@Body() message: MessageDTO) {
    // https://medium.com/@exfabrica/nestjs-dto-with-automapper-c4e89009f30b
    const messageModel: MessageModel = { title: message.title, description: message.description };
    return this.messagesService.addMessage(messageModel);
  }


  @Get('/:id')
  async getMessage(@Param('id') id: number) {
    const message = await this.messagesService.retrieveSingleMssage(id);

    // if (!message) {
    //   throw new NotFoundException('message not found');
    // }

    return message;
  }
}
