import { DateTime } from 'next-auth/providers/kakao'

export interface Mod {
  id: number;
  identifier: string;
  name: string;
  official: boolean;
  modes: string[];
  required_dlc: string[];
  required_mods: string[];
  max_players: number;
  publish_datetime: DateTime;
  update_datetime: DateTime;
  params: string[];
}
