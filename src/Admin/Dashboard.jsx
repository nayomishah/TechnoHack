import React, { useState, useEffect } from 'react';
import AdminSidebar from './AdminSidebar';
import './Dashboard.css';

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalOrders: 0,
    totalRevenue: 0,
    totalCustomers: 0,
    activeDeliveries: 0
  });

  const [recentOrders, setRecentOrders] = useState([]);
  const [activities, setActivities] = useState([]);

  // Simulate data loading
  useEffect(() => {
    // Simulate API calls
    setTimeout(() => {
      setStats({
        totalOrders: 1247,
        totalRevenue: 45680,
        totalCustomers: 892,
        activeDeliveries: 23
      });

      setRecentOrders([
        { id: '#1234', customer: 'John Doe', items: 'Veg Thali, Roti', amount: '₹250', status: 'delivered', time: '2 mins ago' },
        { id: '#1235', customer: 'Jane Smith', items: 'Dal Rice, Curry', amount: '₹180', status: 'processing', time: '5 mins ago' },
        { id: '#1236', customer: 'Mike Johnson', items: 'Biryani, Raita', amount: '₹320', status: 'pending', time: '10 mins ago' },
        { id: '#1237', customer: 'Sarah Wilson', items: 'Chapati, Sabzi', amount: '₹200', status: 'delivered', time: '15 mins ago' },
        { id: '#1238', customer: 'David Brown', items: 'Paratha, Curd', amount: '₹150', status: 'cancelled', time: '20 mins ago' }
      ]);

      setActivities([
        { icon: '📦', text: 'New order received from John Doe', time: '2 minutes ago' },
        { icon: '🚚', text: 'Delivery completed for Order #1234', time: '5 minutes ago' },
        { icon: '👥', text: 'New customer registered: Jane Smith', time: '10 minutes ago' },
        { icon: '💰', text: 'Payment received for Order #1230', time: '15 minutes ago' },
        { icon: '🔔', text: 'Low stock alert: Basmati Rice', time: '20 minutes ago' }
      ]);
    }, 1000);
  }, []);

  const handleQuickAction = (action) => {
    switch(action) {
      case 'addOrder':
        alert('Redirecting to Add New Order...');
        break;
      case 'viewOrders':
        alert('Redirecting to Orders Management...');
        break;
      case 'manageUsers':
        alert('Redirecting to User Management...');
        break;
      case 'viewReports':
        alert('Redirecting to Reports & Analytics...');
        break;
      default:
        break;
    }
  };

  return (
    <div className="admin-container">
      <AdminSidebar />
      <div className="admin-main">
        {/* Dashboard Header */}
        <div className="dashboard-header">
          <h2>Admin Dashboard</h2>
          <p>Welcome back! Here's what's happening with Dabba Express today.</p>
        </div>

        {/* Statistics Cards */}
        <div className="dashboard-stats">
          <div className="stat-card">
            <div className="stat-header">
              <div className="stat-icon orders">📦</div>
              <div className="stat-trend positive">+12.5%</div>
            </div>
            <div className="stat-value">{stats.totalOrders.toLocaleString()}</div>
            <div className="stat-label">Total Orders</div>
          </div>

          <div className="stat-card">
            <div className="stat-header">
              <div className="stat-icon revenue">💰</div>
              <div className="stat-trend positive">+8.2%</div>
            </div>
            <div className="stat-value">₹{stats.totalRevenue.toLocaleString()}</div>
            <div className="stat-label">Total Revenue</div>
          </div>

          <div className="stat-card">
            <div className="stat-header">
              <div className="stat-icon customers">👥</div>
              <div className="stat-trend positive">+15.3%</div>
            </div>
            <div className="stat-value">{stats.totalCustomers.toLocaleString()}</div>
            <div className="stat-label">Total Customers</div>
          </div>

          <div className="stat-card">
            <div className="stat-header">
              <div className="stat-icon deliveries">🚚</div>
              <div className="stat-trend negative">-2.1%</div>
            </div>
            <div className="stat-value">{stats.activeDeliveries}</div>
            <div className="stat-label">Active Deliveries</div>
          </div>
        </div>

        {/* Chart and Activity Feed */}
        <div className="dashboard-content">
          <div className="chart-container">
            <div className="chart-header">
              <h3>Order Analytics</h3>
              <select style={{padding: '8px', borderRadius: '5px', border: '1px solid #ddd'}}>
                <option>Last 7 days</option>
                <option>Last 30 days</option>
                <option>Last 3 months</option>
              </select>
            </div>
            <div className="chart-placeholder">
              📊 Chart Component Will Be Integrated Here
              <br />
              <small>(Orders, Revenue, Customer trends over time)</small>
            </div>
          </div>

          <div className="activity-feed">
            <div className="activity-header">
              <h3>Recent Activity</h3>
              <button style={{padding: '5px 10px', borderRadius: '5px', border: 'none', background: '#667eea', color: 'white', cursor: 'pointer'}}>
                View All
              </button>
            </div>
            <div className="activity-list">
              {activities.map((activity, index) => (
                <div key={index} className="activity-item">
                  <div className="activity-icon">{activity.icon}</div>
                  <div className="activity-content">
                    <div className="activity-text">{activity.text}</div>
                    <div className="activity-time">{activity.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="quick-actions">
          <div className="action-card" onClick={() => handleQuickAction('addOrder')}>
            <div className="action-icon">➕</div>
            <div className="action-title">Add New Order</div>
            <div className="action-desc">Create a new order manually</div>
          </div>

          <div className="action-card" onClick={() => handleQuickAction('viewOrders')}>
            <div className="action-icon">📋</div>
            <div className="action-title">Manage Orders</div>
            <div className="action-desc">View and manage all orders</div>
          </div>

          <div className="action-card" onClick={() => handleQuickAction('manageUsers')}>
            <div className="action-icon">👤</div>
            <div className="action-title">User Management</div>
            <div className="action-desc">Manage customers & delivery partners</div>
          </div>

          <div className="action-card" onClick={() => handleQuickAction('viewReports')}>
            <div className="action-icon">📊</div>
            <div className="action-title">Reports & Analytics</div>
            <div className="action-desc">View detailed reports and insights</div>
          </div>
        </div>

        {/* Recent Orders Table */}
        <div className="recent-orders">
          <div className="orders-header">
            <h3>Recent Orders</h3>
            <button style={{padding: '8px 16px', borderRadius: '8px', border: 'none', background: '#667eea', color: 'white', cursor: 'pointer'}}>
              View All Orders
            </button>
          </div>
          <table className="orders-table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Items</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order, index) => (
                <tr key={index}>
                  <td style={{fontWeight: '600', color: '#667eea'}}>{order.id}</td>
                  <td>{order.customer}</td>
                  <td>{order.items}</td>
                  <td style={{fontWeight: '600'}}>{order.amount}</td>
                  <td>
                    <span className={`status-badge status-${order.status}`}>
                      {order.status}
                    </span>
                  </td>
                  <td style={{color: '#7F8C8D'}}>{order.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;