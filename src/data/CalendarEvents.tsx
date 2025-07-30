import { CalendarEvent } from '../pages/Calendar'

export const calendarsEvents: CalendarEvent[] = [
  {
    id: '1',
    title: 'Game 1',
    start: '2025-07-21T20:00:00Z',
    end: '2025-07-21T22:00:00Z',
    extendedProps: {
      calendar: 'Success',
      description: 'Team 1 VS Team 2 | Team 1 Wins',
      location: 'Venue A, Main Hall',
    },
  },
  {
    id: '2',
    title: 'Game 2',
    start: '2025-08-01T20:00:00Z',
    end: '2025-08-01T22:00:00Z',
    extendedProps: {
      calendar: 'Primary',
      description: 'Team 3 VS Team 4',
      location: 'Venue A, Main Hall',
    },
  },
  {
    id: '3',
    title: 'Game 3',
    start: '2025-08-03T20:00:00Z',
    end: '2025-08-03T22:00:00Z',
    extendedProps: {
      calendar: 'Primary',
      description: 'Team 1 VS Team 5',
      location: 'Venue A, Main Hall',
    },
  },
]
