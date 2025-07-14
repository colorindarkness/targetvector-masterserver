import { DateTime } from 'next-auth/providers/kakao'

export interface Event {
  id: number;
  identifier: string;
  name: string;
  official: boolean;
  modes: string[];
  required_dlc: string[];
  required_maps: string[];
  required_mods: string[];
  min_players: number;
  max_players: number;
  promo_datetime: DateTime;
  begin_datetime: DateTime;
  end_datetime: DateTime;
  publish_datetime: DateTime;
  update_datetime: DateTime;
  params: string[];
}
