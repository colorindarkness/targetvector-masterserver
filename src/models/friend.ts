import { DateTime } from 'next-auth/providers/kakao'

export interface Friend {
  id: number;
  from: number;
  to: number;
  created_datetime: DateTime;
}
