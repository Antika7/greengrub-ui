const INITIAL_FOOD_REQUESTS_STORE = [
  {
    id: 1,
    title: 'Chicken Meal',
    description: 'Need 25 plates for orphanage',
    quantity: 25,
    requestDate: '2026-03-01T00:00:00.000Z',
    status: 'Open',
    requestedBy: 'Edward Perry',
  },
  {
    id: 2,
    title: 'Food for Dogs',
    description: '10 dogs need meals for animal shelter',
    quantity: 10,
    requestDate: '2026-03-02T00:00:00.000Z',
    status: 'Open',
    requestedBy: 'Josephine Drake',
  },
  {
    id: 3,
    title: 'Food Waste',
    description: 'Leftover food for composting',
    quantity: 2,
    requestDate: '2026-03-03T00:00:00.000Z',
    status: 'Closed',
    requestedBy: 'Cody Phillips',
  },
];

export function getFoodRequestsStore() {
  const stringified = localStorage.getItem('foodRequests-store');
  return stringified
    ? JSON.parse(stringified)
    : INITIAL_FOOD_REQUESTS_STORE;
}

export function setFoodRequestsStore(foodRequests) {
  return localStorage.setItem(
    'foodRequests-store',
    JSON.stringify(foodRequests),
  );
}

export async function getMany({ paginationModel, filterModel, sortModel }) {
  const store = getFoodRequestsStore();
  let filtered = [...store];

  // Filtering
  if (filterModel?.items?.length) {
    filterModel.items.forEach(({ field, value, operator }) => {
      if (!field || value == null) return;

      filtered = filtered.filter((item) => {
        const itemValue = item[field];

        switch (operator) {
          case 'contains':
            return String(itemValue)
              .toLowerCase()
              .includes(String(value).toLowerCase());
          case 'equals':
            return itemValue === value;
          case 'startsWith':
            return String(itemValue)
              .toLowerCase()
              .startsWith(String(value).toLowerCase());
          case 'endsWith':
            return String(itemValue)
              .toLowerCase()
              .endsWith(String(value).toLowerCase());
          case '>':
            return itemValue > value;
          case '<':
            return itemValue < value;
          default:
            return true;
        }
      });
    });
  }

  // Sorting
  if (sortModel?.length) {
    filtered.sort((a, b) => {
      for (const { field, sort } of sortModel) {
        if (a[field] < b[field]) return sort === 'asc' ? -1 : 1;
        if (a[field] > b[field]) return sort === 'asc' ? 1 : -1;
      }
      return 0;
    });
  }

  // Pagination
  const start = paginationModel.page * paginationModel.pageSize;
  const end = start + paginationModel.pageSize;
  const paginated = filtered.slice(start, end);

  return {
    items: paginated,
    itemCount: filtered.length,
  };
}

export async function getOne(id) {
  const store = getFoodRequestsStore();
  const item = store.find((req) => req.id === id);

  if (!item) {
    throw new Error('Food request not found');
  }

  return item;
}

export async function createOne(data) {
  const store = getFoodRequestsStore();

  const newItem = {
    id: store.reduce((max, item) => Math.max(max, item.id), 0) + 1,
    ...data,
  };

  setFoodRequestsStore([...store, newItem]);

  return newItem;
}

export async function updateOne(id, data) {
  const store = getFoodRequestsStore();
  let updatedItem = null;

  setFoodRequestsStore(
    store.map((item) => {
      if (item.id === id) {
        updatedItem = { ...item, ...data };
        return updatedItem;
      }
      return item;
    }),
  );

  if (!updatedItem) {
    throw new Error('Food request not found');
  }

  return updatedItem;
}

export async function deleteOne(id) {
  const store = getFoodRequestsStore();
  setFoodRequestsStore(store.filter((item) => item.id !== id));
}

// Validation
export function validate(foodRequest) {
  let issues = [];

  if (!foodRequest.title) {
    issues = [...issues, { message: 'Title is required', path: ['title'] }];
  }

  if (!foodRequest.quantity) {
    issues = [...issues, { message: 'Quantity is required', path: ['quantity'] }];
  } else if (foodRequest.quantity <= 0) {
    issues = [
      ...issues,
      { message: 'Quantity must be greater than 0', path: ['quantity'] },
    ];
  }

  if (!foodRequest.requestDate) {
    issues = [
      ...issues,
      { message: 'Request date is required', path: ['requestDate'] },
    ];
  }

  if (!foodRequest.status) {
    issues = [...issues, { message: 'Status is required', path: ['status'] }];
  } else if (!['Pending', 'Approved', 'Rejected'].includes(foodRequest.status)) {
    issues = [
      ...issues,
      {
        message: 'Status must be "Pending", "Approved" or "Rejected"',
        path: ['status'],
      },
    ];
  }

  if (!foodRequest.requestedBy) {
    issues = [
      ...issues,
      { message: 'Requested By is required', path: ['requestedBy'] },
    ];
  }

  return { issues };
}