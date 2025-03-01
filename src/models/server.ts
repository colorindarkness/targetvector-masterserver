import { ServerRegion } from '@/models/serverregion'
import {DateTime} from 'next-auth/providers/kakao'

export interface Server {
  id: number;
  identifier: string;
  name: string;
  region: ServerRegion;
  address: string;
  port: number;
  official: boolean;
  mode: string;
  map: string;
  modded: boolean;
  total_players: number;
  current_players: number;
  initialized_datetime: DateTime;
  latency: number;
  time: DateTime;
  weather: string;
  mods: string[];
  dayscale: number;
  nightscale: number;
  total: number;
  description: string;
  motd: string;
  admin: string;
  moderators: string[];
  params: string[];
}
