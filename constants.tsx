
import { Chore, TaskStatus, TaskPriority, FamilyMember, Expense, Meal } from './types';

export const INITIAL_FAMILY: FamilyMember[] = [
  { id: '1', name: 'Alex', role: 'Head of House', avatar: 'https://picsum.photos/seed/alex/100' },
  { id: '2', name: 'Sam', role: 'Partner', avatar: 'https://picsum.photos/seed/sam/100' },
  { id: '3', name: 'Jordan', role: 'Kid', avatar: 'https://picsum.photos/seed/jordan/100' }
];

export const INITIAL_CHORES: Chore[] = [
  {
    id: '1',
    title: 'Vacuum living room',
    description: 'Ensure under the sofa is cleaned.',
    assignedTo: 'Sam',
    dueDate: new Date().toISOString().split('T')[0],
    status: TaskStatus.TODO,
    priority: TaskPriority.MEDIUM,
    category: 'cleaning'
  },
  {
    id: '2',
    title: 'Grocery Shopping',
    description: 'Milk, Eggs, Bread, and Pasta.',
    assignedTo: 'Alex',
    dueDate: new Date().toISOString().split('T')[0],
    status: TaskStatus.COMPLETED,
    priority: TaskPriority.HIGH,
    category: 'errand'
  }
];

export const INITIAL_EXPENSES: Expense[] = [
  { id: '1', category: 'Groceries', amount: 150, date: '2024-05-10', note: 'Weekly run' },
  { id: '2', category: 'Utilities', amount: 85, date: '2024-05-12', note: 'Electricity' },
  { id: '3', category: 'Rent', amount: 1200, date: '2024-05-01', note: 'Monthly payment' },
  { id: '4', category: 'Entertainment', amount: 45, date: '2024-05-15', note: 'Streaming' }
];

export const INITIAL_MEALS: Meal[] = [
  { day: 'Mon', breakfast: 'Oatmeal', lunch: 'Salad', dinner: 'Pasta' },
  { day: 'Tue', breakfast: 'Toast', lunch: 'Sandwich', dinner: 'Stir Fry' },
  { day: 'Wed', breakfast: 'Smoothie', lunch: 'Leftovers', dinner: 'Tacos' },
  { day: 'Thu', breakfast: 'Yogurt', lunch: 'Soup', dinner: 'Curry' },
  { day: 'Fri', breakfast: 'Eggs', lunch: 'Quinoa Bowl', dinner: 'Pizza Night' }
];
