export interface MessageModel {
  id?: number;
  title: string;
  description: string;
  dateCreated?: string;
}

export type MessageWrapper = {
  [key in number]: MessageModel
}
