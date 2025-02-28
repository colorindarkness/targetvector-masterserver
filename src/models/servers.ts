import { Type } from '@/models/type'
import { ServerRegion } from '@/models/serverregion'
import {DateTime} from 'next-auth/providers/kakao'

export interface Servers {
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
  uptime: number;
  latency: number;
  time: DateTime;
  weather: string;
  mods: string[];
  special_defense: number;
  speed: number;
  total: number;
  description: string;
  motd: string;
  admin: string;
  moderators: string[];
}
