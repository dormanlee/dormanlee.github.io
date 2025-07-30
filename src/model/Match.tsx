import { Team } from '../model/Team'
import { UrlVideo } from '../components/ui/videos/UrlVideoPlayer'
export interface Match {
  id: number
  date: Date
  name: string
  location?: string
  description?: string
  team: {
    home: Team
    away: Team
  }
  score: {
    home: number
    away: number
  }
  isDraw: boolean
  status: 'cancelled' | 'postponed' | 'scheduled' | 'in_progress' | 'completed'
  attendance?: number
  duration?: string
  matchType?: 'league' | 'friendly' | 'cup' | 'playoff'
  videos?: UrlVideo[]
}
