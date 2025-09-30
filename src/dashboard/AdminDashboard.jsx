// App.js - Main Admin Dashboard
import React, { useState } from 'react';
import {
  BarChart3,
  Users,
  Trophy,
  Calendar,
  TrendingUp,
  Bell,
  Search,
  Filter,
  MoreHorizontal,
  ChevronDown,
  User,
  Settings,
  Download,
  Eye,
  Edit,
  Trash2,
  Plus,
  School,
  Award,
  Activity
} from 'lucide-react';

const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeView, setActiveView] = useState('overview');
  const [selectedSport, setSelectedSport] = useState('all');

  // Mock data
  const adminStats = [
    { title: 'Total Users', value: '1,248', change: '+8.2%', icon: Users, color: 'blue', trend: 'up' },
    { title: 'Active Matches', value: '24', change: '+12.1%', icon: Trophy, color: 'green', trend: 'up' },
    { title: 'Schools Registered', value: '48', change: '+3.4%', icon: School, color: 'purple', trend: 'up' },
    { title: 'Revenue', value: '$12,480', change: '-2.1%', icon: TrendingUp, color: 'orange', trend: 'down' }
  ];

  const recentActivities = [
    { id: 1, action: 'New match scheduled', user: 'Coach Johnson', time: '2 min ago', type: 'match' },
    { id: 2, action: 'User registration', user: 'Sarah Wilson', time: '5 min ago', type: 'user' },
    { id: 3, action: 'Score updated', user: 'Referee Smith', time: '12 min ago', type: 'score' },
    { id: 4, action: 'Team added', user: 'Admin User', time: '1 hour ago', type: 'team' },
    { id: 5, action: 'Payment received', user: 'North High School', time: '2 hours ago', type: 'payment' }
  ];

  const matches = [
    { id: 1, homeTeam: 'North High Lions', awayTeam: 'South High Tigers', sport: 'Basketball', date: '2024-01-15', status: 'completed', attendance: 245, revenue: 1225 },
    { id: 2, homeTeam: 'East High Eagles', awayTeam: 'West High Bears', sport: 'Soccer', date: '2024-01-14', status: 'completed', attendance: 180, revenue: 900 },
    { id: 3, homeTeam: 'Central High', awayTeam: 'West High Bears', sport: 'Volleyball', date: '2024-01-13', status: 'completed', attendance: 120, revenue: 600 },
    { id: 4, homeTeam: 'North High Lions', awayTeam: 'East High Eagles', sport: 'Basketball', date: '2024-01-18', status: 'scheduled', attendance: null, revenue: null }
  ];

  const users = [
    { id: 1, name: 'Michael Johnson', email: 'michael@northhigh.edu', role: 'Coach', school: 'North High', status: 'active', lastLogin: '2 hours ago' },
    { id: 2, name: 'Sarah Wilson', email: 'sarah@easthigh.edu', role: 'Admin', school: 'East High', status: 'active', lastLogin: '5 hours ago' },
    { id: 3, name: 'David Brown', email: 'david@southhigh.edu', role: 'Referee', school: 'South High', status: 'inactive', lastLogin: '2 days ago' },
    { id: 4, name: 'Emily Davis', email: 'emily@westhigh.edu', role: 'Coach', school: 'West High', status: 'active', lastLogin: '1 hour ago' }
  ];

  const sports = ['all', 'basketball', 'soccer', 'volleyball', 'baseball', 'tennis'];

  const StatCard = ({ title, value, change, icon: Icon, color, trend }) => (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900 mt-2">{value}</p>
          <div className={`flex items-center mt-1 ${trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
            <TrendingUp className={`w-4 h-4 mr-1 ${trend === 'down' ? 'rotate-180' : ''}`} />
            <span className="text-sm font-medium">{change}</span>
          </div>
        </div>
        <div className={`p-3 rounded-xl bg-${color}-500 bg-opacity-10`}>
          <Icon className={`w-6 h-6 text-${color}-500`} />
        </div>
      </div>
    </div>
  );

  const ActivityItem = ({ activity }) => {
    const getIcon = (type) => {
      switch (type) {
        case 'match': return <Calendar className="w-4 h-4 text-blue-500" />;
        case 'user': return <Users className="w-4 h-4 text-green-500" />;
        case 'score': return <Trophy className="w-4 h-4 text-purple-500" />;
        case 'team': return <Activity className="w-4 h-4 text-orange-500" />;
        case 'payment': return <TrendingUp className="w-4 h-4 text-green-500" />;
        default: return <Activity className="w-4 h-4 text-gray-500" />;
      }
    };

    return (
      <div className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
        <div className="p-2 bg-gray-100 rounded-lg">
          {getIcon(activity.type)}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900">{activity.action}</p>
          <p className="text-sm text-gray-500">by {activity.user}</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-500">{activity.time}</p>
        </div>
      </div>
    );
  };

  const MatchRow = ({ match }) => (
    <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
      <td className="py-4 px-4">
        <div>
          <p className="font-medium text-gray-900">{match.homeTeam} vs {match.awayTeam}</p>
          <p className="text-sm text-gray-500">{match.sport}</p>
        </div>
      </td>
      <td className="py-4 px-4">
        <span className="text-sm text-gray-900">{new Date(match.date).toLocaleDateString()}</span>
      </td>
      <td className="py-4 px-4">
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
          match.status === 'completed' 
            ? 'bg-green-100 text-green-800'
            : 'bg-blue-100 text-blue-800'
        }`}>
          {match.status}
        </span>
      </td>
      <td className="py-4 px-4">
        <span className="text-sm text-gray-900">{match.attendance || '-'}</span>
      </td>
      <td className="py-4 px-4">
        <span className="text-sm text-gray-900">{match.revenue ? `$${match.revenue}` : '-'}</span>
      </td>
      <td className="py-4 px-4">
        <div className="flex items-center space-x-2">
          <button className="p-1 hover:bg-gray-100 rounded transition-colors">
            <Eye className="w-4 h-4 text-gray-600" />
          </button>
          <button className="p-1 hover:bg-gray-100 rounded transition-colors">
            <Edit className="w-4 h-4 text-gray-600" />
          </button>
          <button className="p-1 hover:bg-gray-100 rounded transition-colors">
            <Trash2 className="w-4 h-4 text-red-600" />
          </button>
        </div>
      </td>
    </tr>
  );

  const UserRow = ({ user }) => (
    <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
      <td className="py-4 px-4">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
            <User className="w-4 h-4 text-white" />
          </div>
          <div>
            <p className="font-medium text-gray-900">{user.name}</p>
            <p className="text-sm text-gray-500">{user.email}</p>
          </div>
        </div>
      </td>
      <td className="py-4 px-4">
        <span className="text-sm text-gray-900">{user.role}</span>
      </td>
      <td className="py-4 px-4">
        <span className="text-sm text-gray-900">{user.school}</span>
      </td>
      <td className="py-4 px-4">
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
          user.status === 'active' 
            ? 'bg-green-100 text-green-800'
            : 'bg-red-100 text-red-800'
        }`}>
          {user.status}
        </span>
      </td>
      <td className="py-4 px-4">
        <span className="text-sm text-gray-500">{user.lastLogin}</span>
      </td>
      <td className="py-4 px-4">
        <div className="flex items-center space-x-2">
          <button className="p-1 hover:bg-gray-100 rounded transition-colors">
            <Edit className="w-4 h-4 text-gray-600" />
          </button>
          <button className="p-1 hover:bg-gray-100 rounded transition-colors">
            <Trash2 className="w-4 h-4 text-red-600" />
          </button>
        </div>
      </td>
    </tr>
  );

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-white shadow-xl transition-all duration-300 flex flex-col`}>
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-700 rounded-xl flex items-center justify-center">
              <Trophy className="w-6 h-6 text-white" />
            </div>
            {sidebarOpen && (
              <div>
                <h1 className="text-xl font-bold text-gray-900">SportsAdmin</h1>
                <p className="text-xs text-gray-500">Management Portal</p>
              </div>
            )}
          </div>
        </div>

        <nav className="flex-1 mt-6">
          {[
            { name: 'Overview', icon: BarChart3, active: activeView === 'overview' },
            { name: 'Matches', icon: Trophy, active: activeView === 'matches' },
            { name: 'Users', icon: Users, active: activeView === 'users' },
            { name: 'Schools', icon: School, active: activeView === 'schools' },
            { name: 'Schedule', icon: Calendar, active: activeView === 'schedule' },
            { name: 'Analytics', icon: TrendingUp, active: activeView === 'analytics' },
            { name: 'Settings', icon: Settings, active: activeView === 'settings' }
          ].map((item) => (
            <button
              key={item.name}
              onClick={() => setActiveView(item.name.toLowerCase())}
              className={`w-full flex items-center px-6 py-3 text-left transition-all duration-200 ${
                item.active 
                  ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-600 font-semibold' 
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <item.icon className="w-5 h-5" />
              {sidebarOpen && <span className="ml-3">{item.name}</span>}
            </button>
          ))}
        </nav>

        {sidebarOpen && (
          <div className="p-6 border-t border-gray-200">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-4 text-white">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-medium">Pro Plan</p>
                  <p className="text-xs opacity-90">48 schools active</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <MoreHorizontal className="w-5 h-5 text-gray-600" />
              </button>
              
              <div className="relative">
                <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search matches, users, schools..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-80"
                />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button className="relative p-2 rounded-lg hover:bg-gray-100 transition-colors">
                <Bell className="w-5 h-5 text-gray-600" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              
              <div className="flex items-center space-x-3 bg-gray-50 rounded-lg px-3 py-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
                <div className="flex items-center space-x-1">
                  <span className="text-sm font-medium text-gray-900">Admin User</span>
                  <ChevronDown className="w-4 h-4 text-gray-500" />
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto p-6">
          {/* Page Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 capitalize">{activeView}</h1>
              <p className="text-gray-600 mt-1">Manage your school sports platform efficiently</p>
            </div>
            <div className="flex items-center space-x-3">
              <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <Download className="w-4 h-4" />
                <span>Export</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <Plus className="w-4 h-4" />
                <span>Add New</span>
              </button>
            </div>
          </div>

          {/* Stats Overview */}
          {activeView === 'overview' && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {adminStats.map((stat, index) => (
                  <StatCard key={index} {...stat} />
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Recent Activities */}
                <div className="lg:col-span-2">
                  <div className="bg-white rounded-xl shadow-sm border border-gray-100">
                    <div className="p-6 border-b border-gray-200">
                      <h2 className="text-lg font-semibold text-gray-900">Recent Activities</h2>
                    </div>
                    <div className="p-6">
                      <div className="space-y-1">
                        {recentActivities.map((activity) => (
                          <ActivityItem key={activity.id} activity={activity} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="space-y-6">
                  <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
                    <div className="space-y-3">
                      {[
                        { label: 'Schedule Match', icon: Calendar, color: 'blue' },
                        { label: 'Add User', icon: Users, color: 'green' },
                        { label: 'Create Report', icon: BarChart3, color: 'purple' },
                        { label: 'Manage Schools', icon: School, color: 'orange' }
                      ].map((action, index) => (
                        <button
                          key={index}
                          className="w-full flex items-center space-x-3 p-3 rounded-lg border border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-all duration-200"
                        >
                          <div className={`p-2 rounded-lg bg-${action.color}-100`}>
                            <action.icon className={`w-4 h-4 text-${action.color}-600`} />
                          </div>
                          <span className="text-sm font-medium text-gray-900">{action.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Matches View */}
          {activeView === 'matches' && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-gray-900">All Matches</h2>
                  <div className="flex items-center space-x-3">
                    <div className="flex bg-gray-100 rounded-lg p-1">
                      {sports.map((sport) => (
                        <button
                          key={sport}
                          onClick={() => setSelectedSport(sport)}
                          className={`px-3 py-1 rounded-md text-sm font-medium capitalize transition-colors ${
                            selectedSport === sport
                              ? 'bg-white text-gray-900 shadow-sm'
                              : 'text-gray-600 hover:text-gray-900'
                          }`}
                        >
                          {sport}
                        </button>
                      ))}
                    </div>
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                      <Filter className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 px-4 text-left text-sm font-semibold text-gray-900">Match</th>
                      <th className="py-3 px-4 text-left text-sm font-semibold text-gray-900">Date</th>
                      <th className="py-3 px-4 text-left text-sm font-semibold text-gray-900">Status</th>
                      <th className="py-3 px-4 text-left text-sm font-semibold text-gray-900">Attendance</th>
                      <th className="py-3 px-4 text-left text-sm font-semibold text-gray-900">Revenue</th>
                      <th className="py-3 px-4 text-left text-sm font-semibold text-gray-900">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {matches.map((match) => (
                      <MatchRow key={match.id} match={match} />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Users View */}
          {activeView === 'users' && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-gray-900">User Management</h2>
                  <div className="flex items-center space-x-3">
                    <input
                      type="text"
                      placeholder="Search users..."
                      className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                      <Filter className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 px-4 text-left text-sm font-semibold text-gray-900">User</th>
                      <th className="py-3 px-4 text-left text-sm font-semibold text-gray-900">Role</th>
                      <th className="py-3 px-4 text-left text-sm font-semibold text-gray-900">School</th>
                      <th className="py-3 px-4 text-left text-sm font-semibold text-gray-900">Status</th>
                      <th className="py-3 px-4 text-left text-sm font-semibold text-gray-900">Last Login</th>
                      <th className="py-3 px-4 text-left text-sm font-semibold text-gray-900">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user) => (
                      <UserRow key={user.id} user={user} />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Other Views Placeholder */}
          {(activeView === 'schools' || activeView === 'schedule' || activeView === 'analytics' || activeView === 'settings') && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-12 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                {activeView === 'schools' && <School className="w-8 h-8 text-blue-600" />}
                {activeView === 'schedule' && <Calendar className="w-8 h-8 text-blue-600" />}
                {activeView === 'analytics' && <TrendingUp className="w-8 h-8 text-blue-600" />}
                {activeView === 'settings' && <Settings className="w-8 h-8 text-blue-600" />}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 capitalize">{activeView} View</h3>
              <p className="text-gray-600 max-w-md mx-auto">
                This section is under development. The {activeView} management interface will be available soon.
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;