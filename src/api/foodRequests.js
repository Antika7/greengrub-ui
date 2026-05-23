import client from './client';

function getUserId() {
  try {
    return JSON.parse(localStorage.getItem('gg_user'))?.userId;
  } catch {
    return null;
  }
}

export async function getMany({ paginationModel }) {
  const userId = getUserId();
  if (!userId) return { items: [], itemCount: 0 };
  const { page, pageSize } = paginationModel;
  const res = await client.get(`/api/v1/food-requests/by-user/${userId}`, {
    params: { page, size: pageSize },
  });
  const pageData = res.data;
  return {
    items: pageData.content ?? [],
    itemCount: pageData.totalElements ?? 0,
  };
}

export async function getOne(id) {
  const res = await client.get(`/api/v1/food-requests/${id}`);
  return res.data;
}

export async function createOne(data) {
  const payload = {
    foodName: data.title ?? data.foodName,
    quantity: {
      amount: data.quantity,
      unit: (data.unit ?? data.role ?? 'SERVINGS').toUpperCase(),
    },
    requestedBy: data.requestedBy,
    usedByDate: data.usedByDate ?? null,
  };
  const res = await client.post('/api/v1/food-requests', payload);
  return res.data;
}

export async function updateOne(id, data) {
  const res = await client.patch(`/api/v1/food-requests/${id}/status`, {
    status: data.status,
  });
  return res.data;
}

export async function deleteOne(id) {
  await client.delete(`/api/v1/food-requests/${id}`);
}

export function validate(foodRequest) {
  let issues = [];
  if (!foodRequest.title && !foodRequest.foodName) {
    issues.push({ message: 'Title is required', path: ['title'] });
  }
  if (!foodRequest.quantity) {
    issues.push({ message: 'Quantity is required', path: ['quantity'] });
  } else if (foodRequest.quantity <= 0) {
    issues.push({ message: 'Quantity must be greater than 0', path: ['quantity'] });
  }
  if (!foodRequest.requestedBy) {
    issues.push({ message: 'Requested By is required', path: ['requestedBy'] });
  }
  return { issues };
}
