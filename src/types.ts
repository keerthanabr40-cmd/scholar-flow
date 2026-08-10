export type ViewTab =
  | 'login'
  | 'register'
  | 'forgot_password'
  | 'dashboard'
  | 'timetable'
  | 'assignments'
  | 'analytics'
  | 'subjects'
  | 'calendar';

export interface UserProfile {
  name: string;
  role: string;
  tier: string;
  studentId: string;
  email: string;
  avatar: string;
}

export type PriorityLevel = 'high' | 'medium' | 'low';
export type TaskStatus = 'in_progress' | 'pending' | 'completed';

export interface Assignment {
  id: string;
  title: string;
  course: string;
  priority: PriorityLevel;
  status: TaskStatus;
  progress: number; // 0 to 100
  dueDate: string; // e.g. "Tomorrow", "in 2 Days", "2026-10-26"
  dueTag: string; // e.g. "Due Tomorrow", "Due in 2 Days", "Due Next Week"
  description?: string;
}

export interface Subject {
  id: string;
  code: string; // e.g. "CS 410"
  title: string;
  description: string;
  instructor: string;
  location: string;
  schedule: string; // e.g. "Mon/Wed 10:00"
  credits: number;
  attendance: number; // e.g. 92
  color?: string;
}

export interface ClassSession {
  id: string;
  code: string;
  title: string;
  instructor: string;
  location: string;
  day: 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';
  timeStart: string; // e.g. "09:00"
  timeEnd: string; // e.g. "10:30"
  isToday?: boolean;
}

export interface Deadline {
  id: string;
  title: string;
  month: string; // e.g. "Oct"
  day: string; // e.g. "26"
  detail: string; // e.g. "20% of final grade"
  category: string;
  fullDate: string; // e.g. "2026-10-26"
}

export interface GpaTrendItem {
  semester: string;
  gpa: number;
  cgpa: number;
}

export interface StudyHourItem {
  day: string;
  hours: number;
}
