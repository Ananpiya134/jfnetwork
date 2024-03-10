import type {DataSet, Day as DayType} from '@/types'

export const day:DayType = 'Thursday'

export const halls: {
  [key:string] : string
} = {
  a: 'Arena Kitzingen',
  d:'Deusterschule Kitzingen',
  m: 'Mainstockheim',
}


export const tableHeader = ['Team', 'Day', 'Time', 'Hall']

export const tableBody:DataSet['rows'] = [
  {
    name: 'U8 mix',
    children : [
      {
        time: {
          start: '15:30',
          end: '16.45'
        },
        hall:halls.d ,
        day
      }
    ]
  }, {
    name: 'U10 mix',
    children: [
      {
        time: {
          start: '17:00',
          end: '18:30',
        }, 
        hall : halls.d ,
        day
      },
      {
        time: {
          start: '16:45',
          end: '18:15'
        },
        hall : halls.d ,
      day
      }
    ]
  },{
    name: 'U12 mix',
    children: [
      {
        time: {
          start: '17:35',
          end: '18:45',
        },
        hall:halls.m,
        day
      },
      {
        time: {
          start: '11:00',
          end: '12:30',
        },
        hall:halls.m,
        day
      }
    ]
  },{
    name: 'U14 m',
    children: [
      {
        time: {
          start: '16:30',
          end: '18:30'
        },
        hall: halls.a,
        day 
      },
      {
        time: {
          start: '17:00',
          end: '18:30'
        },
        hall: halls.a,
        day 
      },
    ]
  },
  {
    name:'U14 w',
    children: [
      {
        time: {
          start: '17:00',
          end: '18:30'
        },
        hall: halls.a,
        day
      },
      {
        time: {
          start: '18:30',
          end: '20:30'
        },
        hall: halls.a,
        day
      },
    ]
  },
  {
    name: 'U16 m',
    children: [
      {
        time: {
          start: '16:30',
          end: '18:30'
        },
        hall: halls.a,
        day
      },
      {
        time: {
          start: '18:30',
          end: '20:00'
        },
        hall: halls.a,
        day
      },
    ]
  },{
    name: 'U18/20 Damon',
    children: [
      {
        time: {
          start: '18:30',
          end: '20:00'
        },
        hall:halls.a,
        day
      },
      {
        time: {
          start: '18:30',
          end: '20:30'
        },
        hall:halls.a,
        day
      },
    ]
  },{
    name: 'U18 m',
    children: [
      {
        time: {start: '20:30', end: '22:00'},
        hall:halls.a,
        day
      },
      {
        time: {
          start: '18:30',
          end: '20:00'
        },
        hall:halls.a,
        day
      },
    ]
  },{
    name: 'U20 / Men',
    children: [
      {
        time: {start: '20:30', end: '22:00'},
        hall:halls.a,
        day
      },
      {
        time: {
          start: '20:00',
          end: '21:30'
        },
        hall:halls.a,
        day
      },
    ]
  },{
    name: 'OPEN COURT',
    children: [
      {
        time: {
          start: '15:00',
          end: '16:00',
        },
        hall:halls.a,
        day
      }
    ]
  }
]

export const dataset:DataSet = {
  headers: tableHeader,
  rows: tableBody

}