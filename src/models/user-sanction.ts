import { DateTime } from 'next-auth/providers/kakao'

export interface UserSanction {
  id: number;
  uuid: string;
  usernames: string;
  type: number;
  services: number[];
  description: string;
  action: number;
  attachments: string;
  note: string;
  created_datetime: DateTime;
  updated_datetime: DateTime;
  deleted_datetime: DateTime;
  deleted_by: string;
  deleted_reason: number;
}
