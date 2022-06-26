import { Injectable } from '@nestjs/common';
import { MessageModel, MessageWrapper } from 'src/model/interface/message.model';
import { DateService } from 'src/service/date/date.service';
import { FileService } from 'src/service/file/file.service';

const MESSAGES = {
  123: {
    id: 123,
    title: 'red',
    description: 'blue',
    dateCreated: 'today'
  }
};

@Injectable()
export class MessageRepository {

  private fileService: FileService;
  private dateService: DateService;

  constructor(private readonly fs: FileService, private readonly ds: DateService) {
    this.fileService = fs;
    this.dateService = ds;
  }

  private generateRandomId(): number {
    return Math.floor(Math.random() * 999);
  }

  private async getMessagesFromFile(): Promise<MessageWrapper> {
    // const fileData = await this.fileService.readFromFile();
    // const messages: MessageWrapper = JSON.parse(fileData);
    // return messages;
    return MESSAGES;
  }

  async getAllMessages(): Promise<MessageWrapper> {
    const messages = await this.getMessagesFromFile();
    return messages;
  }

  async getSingleMessage(id: number): Promise<MessageModel> {
    const messages: MessageWrapper = await this.getMessagesFromFile();

    console.log('date: ', this.dateService.create().format('LLL'))

    return messages[id];
  }

  async createMessage({ title, description }: MessageModel): Promise<MessageModel> {

    const messages: MessageWrapper = await this.getMessagesFromFile();
    const id = Number(this.generateRandomId);

    messages[id] = {
      id,
      title,
      description,
      dateCreated: this.dateService.create().format('LLL')
    };

    // this.fileService.writeToFile(messages);
    return messages[id];
  }

}
