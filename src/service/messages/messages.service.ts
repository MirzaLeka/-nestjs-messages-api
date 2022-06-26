import { Injectable, NotFoundException } from '@nestjs/common';
import { MessageModel } from 'src/model/interface/message.model';
import { MessageRepository } from 'src/repository/message.repository';

@Injectable()
export class MessagesService {

  constructor(private readonly messageRepository: MessageRepository) {}

  retrieveAllMessages() {
    return this.messageRepository.getAllMessages();
  }

  async retrieveSingleMssage(id: number) {
    const message = await this.messageRepository.getSingleMessage(id);

    if (!message) {
      console.log('gonna throw');
      throw new NotFoundException();
    }

    return message;
  }

  addMessage(message: MessageModel) {
    return this.messageRepository.createMessage(message);
  }

}
