import React from "react";
import {
  Container
} from "@mui/material";
import AppTheme from "../../shared-theme/AppTheme";
import { Box, Typography, Grid } from "@mui/material";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line, PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

export default function AdminDashboard() {
  // Sample data for DataGrid
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 130 },
    { field: 'role', headerName: 'Role', width: 130 },
    { field: 'status', headerName: 'Status', width: 100 },
  ];
  const rows = [
    { id: 1, name: 'Alice', role: 'Manager', status: 'Active' },
    { id: 2, name: 'Bob', role: 'Staff', status: 'Inactive' },
    { id: 3, name: 'Charlie', role: 'Admin', status: 'Active' },
    { id: 4, name: 'Diana', role: 'Staff', status: 'Active' },
  ];

  // Food wastage dashboard data
  const foodWastedData = [
    { month: 'Jan', wasted: 120 },
    { month: 'Feb', wasted: 100 },
    { month: 'Mar', wasted: 80 },
    { month: 'Apr', wasted: 90 },
    { month: 'May', wasted: 70 },
  ];
  const foodDonatedData = [
    { month: 'Jan', donated: 60 },
    { month: 'Feb', donated: 80 },
    { month: 'Mar', donated: 100 },
    { month: 'Apr', donated: 110 },
    { month: 'May', donated: 120 },
  ];
  const excessFoodData = [
    { date: '2026-03-01', excess: 30 },
    { date: '2026-03-05', excess: 50 },
    { date: '2026-03-10', excess: 40 },
    { date: '2026-03-15', excess: 60 },
    { date: '2026-03-20', excess: 55 },
    { date: '2026-03-25', excess: 70 },
  ];
  const summaryPieData = [
    { name: 'Wasted', value: 460 },
    { name: 'Donated', value: 470 },
    { name: 'Excess', value: 305 },
  ];
  const COLORS = ['#d32f2f', '#388e3c', '#1976d2'];

  return (
    <AppTheme>
      <Container maxWidth="md">
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" gutterBottom align="center" sx={{ my: 2 }}>Admin Dashboard</Typography>
          <Grid container spacing={4}>
            {/* Summary Pie Chart */}
            <Grid item xs={12} md={4}>
              <Box sx={{ p: 3, borderRadius: 2, boxShadow: 2, bgcolor: 'background.paper', minHeight: 300, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h6" gutterBottom>Food Summary</Typography>
                <Box sx={{ height: 200, width: '100%' }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={summaryPieData}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={60}
                        label
                      >
                        {summaryPieData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend verticalAlign="bottom" height={36} />
                    </PieChart>
                  </ResponsiveContainer>
                </Box>
              </Box>
            </Grid>
            {/* Food Wasted Bar Chart */}
            <Grid item xs={12} md={4}>
              <Box sx={{ p: 3, borderRadius: 2, boxShadow: 2, bgcolor: 'background.paper', minHeight: 300, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h6" gutterBottom>Food Wasted (Monthly)</Typography>
                <Box sx={{ height: 200, width: '100%' }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={foodWastedData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Legend verticalAlign="bottom" height={36} />
                      <Bar dataKey="wasted" fill="#d32f2f" />
                    </BarChart>
                  </ResponsiveContainer>
                </Box>
              </Box>
            </Grid>
            {/* Food Donated Bar Chart */}
            <Grid item xs={12} md={4}>
              <Box sx={{ p: 3, borderRadius: 2, boxShadow: 2, bgcolor: 'background.paper', minHeight: 300, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h6" gutterBottom>Food Donated (Monthly)</Typography>
                <Box sx={{ height: 200, width: '100%' }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={foodDonatedData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Legend verticalAlign="bottom" height={36} />
                      <Bar dataKey="donated" fill="#388e3c" />
                    </BarChart>
                  </ResponsiveContainer>
                </Box>
              </Box>
            </Grid>
            {/* Excess Food Line Chart */}
            <Grid item xs={12}>
              <Box sx={{ p: 3, borderRadius: 2, boxShadow: 2, bgcolor: 'background.paper', mt: 2 }}>
                <Typography variant="h6" gutterBottom>Excess Food Generated Over Time</Typography>
                <Box sx={{ width: '100%', height: 250, mt: 2 }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={excessFoodData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip />
                      <Legend verticalAlign="bottom" height={36} />
                      <Line type="monotone" dataKey="excess" stroke="#1976d2" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </AppTheme>
  );
}