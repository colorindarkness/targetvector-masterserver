import { DateTime } from 'next-auth/providers/kakao'

export interface FriendRequest {
  id: number;
  from: number;
  to: number;
  created_datetime: DateTime;
  status: number;
  accepted_datetime: DateTime;
}
