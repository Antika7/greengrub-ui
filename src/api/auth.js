import client from './client';

export async function login(email, password) {
  const res = await client.post('/api/v1/auth/login', { email, password });
  return res.data.data;
}

export async function signup(name, email, password, role) {
  const res = await client.post('/api/v1/auth/signup', { name, email, password, role });
  return res.data.data;
}

export async function getMe() {
  const res = await client.get('/api/v1/auth/me');
  return res.data.data;
}
