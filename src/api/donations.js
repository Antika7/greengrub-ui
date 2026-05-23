import client from './client';

export async function getMany({ paginationModel }) {
  const res = await client.get('/api/v1/donations');
  const all = res.data ?? [];
  const { page, pageSize } = paginationModel;
  const start = page * pageSize;
  return {
    items: all.slice(start, start + pageSize),
    itemCount: all.length,
  };
}

export async function getOne(id) {
  const res = await client.get(`/api/v1/donations/${id}`);
  return res.data;
}

export async function createOne(data) {
  const res = await client.post('/api/v1/donations', data);
  return res.data;
}

export async function updateOne(id, data) {
  const res = await client.put(`/api/v1/donations/${id}`, data);
  return res.data;
}

export async function deleteOne(id) {
  await client.delete(`/api/v1/donations/${id}`);
}

export function validate(donation) {
  let issues = [];
  if (!donation.donationName) {
    issues.push({ message: 'Donation name is required', path: ['donationName'] });
  }
  if (!donation.pickUpAddress) {
    issues.push({ message: 'Pick-up address is required', path: ['pickUpAddress'] });
  }
  if (!donation.status) {
    issues.push({ message: 'Status is required', path: ['status'] });
  }
  return { issues };
}
