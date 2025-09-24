import {Status} from "../enums/status";

export interface Book {
  id: string;
  title: string;
  author: string;
  publicationYear: number;
  isbn: string;
  status: Status;
  coverImage?: string;
  description?: string;
}
