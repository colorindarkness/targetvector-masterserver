import { DateTime } from 'next-auth/providers/kakao'

export interface Dlc {
  id: number;
  uuid: string;
  identifier: string;
  name: string;
  official: boolean;
  beta: boolean;
  version: string;
  server_version: number;
  client_version: number;
  modes: string[];
  required_dlc: string[];
  required_mods: string[];
  max_players: number;
  type: string;
  author: string;
  content_rating: number;
  img_url: string;
  description: string;
  description_url: string;
  bugs_url: string;
  note: string;
  publish_datetime: DateTime;
  update_datetime: DateTime;
  deleted_datetime: DateTime;
  deleted_by: string;
  deleted_reason: number;
  params: string[];
}
