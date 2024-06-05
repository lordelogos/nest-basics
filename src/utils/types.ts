export type Role = 'INTERN' | 'ENGINEER' | 'ADMIN';

export type User = {
  id: number;
  name: string;
  email: string;
  role: Role;
};
