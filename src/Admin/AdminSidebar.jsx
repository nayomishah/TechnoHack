import React from 'react';
import { Link } from 'react-router-dom';

const AdminSidebar = () => (
  <div className="admin-sidebar">
    <h3>Admin</h3>
    <ul>
      <li><Link to="/admin/dashboard">Dashboard</Link></li>
      <li><Link to="/admin/menu">Menu</Link></li>
      <li><Link to="/admin/orders">Orders</Link></li>
      <li><Link to="/admin/users">Users</Link></li>
      <li><Link to="/admin/staff">Delivery Staff</Link></li>
    </ul>
  </div>
);

export default AdminSidebar;
