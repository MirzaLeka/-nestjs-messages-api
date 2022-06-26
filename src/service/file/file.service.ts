import { Injectable } from '@nestjs/common';
import { readFile, writeFile } from 'fs/promises';

@Injectable()
export class FileService {
  private filePath = './messages.json';

  async readFromFile(): Promise<string> {
    return await readFile(this.filePath, { encoding: 'utf8' });
  }

  writeToFile(data: any): void {
    writeFile(this.filePath, JSON.stringify(data));
  }
}
