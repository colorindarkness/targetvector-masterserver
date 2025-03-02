import { DateTime } from 'next-auth/providers/kakao'

export interface User {
  id: number;
  uuid: string;
  email: string;
  name: string;
  usernames: string;
  type: number;
  status: number;
  website_url: string;
  twitch_url: string;
  youtube_url: string;
  streamservice01_url: string;
  streamservice02_url: string;
  twitter_url: string;
  bluesky_url: string;
  socialmedia01_url: string;
  socialmedia02_url: string;
  socialmedia03_url: string;
  reports: number[];
  sanctions: number[];
  note: string;
  created_datetime: DateTime;
  updated_datetime: DateTime;
  deleted_datetime: DateTime;
  deleted_by: string;
  deleted_reason: number[];
}
