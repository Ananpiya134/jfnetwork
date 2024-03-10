export type Day = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday'
export interface TimeRange  {
  start:string
  end:string
}

export interface RowDataChildren {
  day: Day
  time: TimeRange
  hall: string
}

export interface RowData {
  name: string
  children: RowDataChildren[]
}

export interface DataSet {
  headers: string[]
  rows: RowData[]
}