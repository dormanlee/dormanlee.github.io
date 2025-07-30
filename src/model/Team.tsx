export interface Player {
  id: number
  image?: string
  name: string
  team: string
  number: string
  position?: string
  age?: number
  height?: string
  weight?: string
  scores?: number
  assists?: number
  rebounds?: number
  steals?: number
  blocks?: number
  turnovers?: number
  fouls?: number
  minutes?: number
  threePoints?: number
  penaltyShots?: number
  penaltyShotsIn?: number
}

export interface Team {
  id: number
  name: string
  logo?: string
  win?: number
  loss?: number
  draw?: number
  points?: number
  lastMatch?: 'win' | 'loss' | 'draw'
  matches?: number
  players: Player[]
}
