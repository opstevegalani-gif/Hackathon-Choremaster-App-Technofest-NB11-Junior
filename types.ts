
export enum TaskStatus {
  TODO = 'TODO',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED'
}

export enum TaskPriority {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH'
}

export interface Chore {
  id: string;
  title: string;
  description: string;
  assignedTo: string;
  dueDate: string;
  status: TaskStatus;
  priority: TaskPriority;
  category: 'cleaning' | 'errand' | 'maintenance' | 'other';
}

export interface FamilyMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
}

export interface Expense {
  id: string;
  category: string;
  amount: number;
  date: string;
  note: string;
}

export interface Meal {
  day: string;
  breakfast: string;
  lunch: string;
  dinner: string;
}

export type AppView = 'dashboard' | 'chores' | 'budget' | 'meals' | 'ai-assistant';
