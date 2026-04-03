export interface Project {
  id: number; // Changed to number to match PostgreSQL serial ID
  name: string;
  language: string; // Added for Docker sandboxing
  updatedAt: string;
  status: 'online' | 'offline' | 'running';
  description?: string;
  authorName?: string; // Who created it (e.g., Ana or Radu) [cite: 6]
}
