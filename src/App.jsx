import { createHashRouter, RouterProvider } from 'react-router';
import CrudDashboard from './crud-dashboard/CrudDashboard';
import FoodRequests from './crud-dashboard/components/FoodRequests';
import FoodRequestCreate from './crud-dashboard/components/FoodRequestCreate';
import EmployeeList from './crud-dashboard/components/EmployeeList';
import EmployeeShow from './crud-dashboard/components/EmployeeShow';
import EmployeeCreate from './crud-dashboard/components/EmployeeCreate';
import EmployeeEdit from './crud-dashboard/components/EmployeeEdit';
import SignIn from './sign-in/SignIn';
import SignUp from './sign-up/SignUp';

const router = createHashRouter([
  { path: '/', element: <SignIn /> },
  { path: '/sign-up', element: <SignUp /> },
  {
    element: <CrudDashboard />,
    children: [
      {path: '/dashboard', Component: FoodRequests},
      {path: '/foodRequests', Component: FoodRequests},
      { path: '/foodRequests/new', Component: FoodRequestCreate },
      { path: '/employees', Component: EmployeeList },
      { path: '/employees/:employeeId', Component: EmployeeShow },
      { path: '/employees/new', Component: EmployeeCreate },
      { path: '/employees/:employeeId/edit', Component: EmployeeEdit },
      { path: '*', Component: EmployeeList },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}