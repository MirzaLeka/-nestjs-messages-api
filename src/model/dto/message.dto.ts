import { IsString, Length, IsEmpty } from 'class-validator';

export class MessageDTO {

  @IsString()
  @IsEmpty()
  @Length(1, 30)
  title: string;

  @IsString()
  @IsEmpty()
  @Length(1, 500)
  description: string;
}
