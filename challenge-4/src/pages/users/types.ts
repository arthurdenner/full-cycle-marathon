export interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface UserResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: User[];
}

interface UserData extends Omit<UserResponse, 'data'> {
  hasMorePages: boolean;
  users: User[];
}

export interface UserState {
  error: string | undefined;
  status: 'idle' | 'loading' | 'error';
  data: UserData | undefined;
  page: number;
}
