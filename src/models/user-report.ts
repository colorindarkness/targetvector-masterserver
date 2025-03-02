import { DateTime } from 'next-auth/providers/kakao'

export interface UserReport {
  id: number;
  uuid: string;
  players: string;
  type: number;
  severity: number;
  services: number[];
  description: string;
  attachments: string;
  action: number;
  sanctions: number[];
  note: string;
  created_by: string;
  created_datetime: DateTime;
  updated_datetime: DateTime;
  deleted_datetime: DateTime;
  deleted_by: string;
  deleted_reason: number;
}
