
export enum ShiftType {
  ALL = 'ALL',
  MORNING = 'MORNING',
  AFTERNOON = 'AFTERNOON',
  NIGHT = 'NIGHT'
}

export enum WardStatus {
  URGENT = 'URGENT',
  FULL = 'FULL',
  SHORTAGE = 'SHORTAGE',
  NORMAL = 'NORMAL'
}

export interface Staff {
  id: string;
  name: string;
  avatar: string;
}

export interface WardShift {
  id: string;
  wardName: string;
  type: ShiftType;
  timeRange: string;
  requiredStaffCount: number;
  currentStaff: Staff[];
  status: WardStatus;
  imageUrl: string;
  vacancyMessage?: string;
}

export interface DayData {
  date: Date;
  shifts: WardShift[];
}
