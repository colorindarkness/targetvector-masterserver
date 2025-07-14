import { DateTime } from 'next-auth/providers/kakao'

export interface Favorite {
  id: number;
  user: number;
  type: number;
  subject: number;
  created_datetime: DateTime;
}
