import { Stream } from "./stream";

export enum PlayerStatus {
  LOADING,
  ERROR,
  PLAYING,
  PAUSED,
  SEEKING,
}

export interface Player {
  // stream: Stream;
  status: PlayerStatus;
  duration?: number;
  selectedLevel?: any;
  levels?: any;
}
