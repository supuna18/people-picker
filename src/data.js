// src/data.js

// Mock data 30 
export const mockUsers = Array.from({ length: 30 }, (_, i) => ({
  id: `u-${i + 1}`,
  name: `User ${i + 1}`, 
  email: `user${i + 1}@example.com`,
  role: i % 3 === 0 ? 'Admin' : i % 2 === 0 ? 'Editor' : 'Viewer',
  lastActive: `${Math.floor(Math.random() * 24)} hours ago`,
  avatarUrl: `https://i.pravatar.cc/150?u=${i + 1}`, 
}));