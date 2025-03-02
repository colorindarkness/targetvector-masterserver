import { DateTime } from 'next-auth/providers/kakao'

export interface Update {
  id: number;
  uuid: string;
  title: string;
  type: string;
  official: boolean;
  author: string;
  version: string;
  client_version: number;
  beta: boolean;
  content_rating: number;
  thumbnail_url: string;
  img_url: string;
  shorttext: string;
  longtext: string;
  description_url: string;
  download_url: string;
  bugs_url: string;
  note: string;
  uri: string;
  params: string;
  created_datetime: DateTime;
  updated_datetime: DateTime;
  deleted_datetime: DateTime;
  deleted_by: string;
  deleted_reason: number;
}
