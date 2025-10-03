// App.js - Main Admin Dashboard with Match Details
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
  Activity,
  X,
  Flag,
  Shirt,
  Users as TeamIcon,
  Clock,
  MapPin,
  AlertTriangle,
  CheckCircle,
  Play,
  Pause,
  Save,
  Mail,
  Phone,
  Globe,
  Lock,
  CreditCard,
  Shield,
  HelpCircle
} from 'lucide-react';

const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeView, setActiveView] = useState('overview');
  const [selectedSport, setSelectedSport] = useState('all');
  const [selectedMatch, setSelectedMatch] = useState(null);
  const [showMatchDetails, setShowMatchDetails] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [settings, setSettings] = useState({
    schoolName: 'SportsAdmin Pro',
    adminEmail: 'admin@sportsadmin.com',
    contactPhone: '+1 (555) 123-4567',
    website: 'www.sportsadmin.com',
    notifications: {
      email: true,
      sms: false,
      push: true
    },
    security: {
      twoFactor: true,
      sessionTimeout: 30
    },
    billing: {
      plan: 'pro',
      billingCycle: 'monthly'
    }
  });

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

  // Complete matches data
  const matches = [
    { 
      id: 1, 
      homeTeam: 'North High Lions', 
      awayTeam: 'South High Tigers', 
      sport: 'Basketball', 
      date: '2024-01-15', 
      time: '4:00 PM',
      location: 'Main Gym',
      status: 'completed', 
      attendance: 245, 
      revenue: 1225,
      homeScore: 78,
      awayScore: 72,
      homeCoach: 'Michael Johnson',
      awayCoach: 'Sarah Wilson',
      officials: [
        { name: 'John Smith', role: 'Head Referee' },
        { name: 'Maria Garcia', role: 'Umpire' },
        { name: 'David Lee', role: 'Line Judge' }
      ],
      events: [
        { type: 'goal', team: 'home', player: 'James Wilson', time: '10:15', score: '2-0' },
        { type: 'goal', team: 'away', player: 'Mike Davis', time: '25:30', score: '2-1' },
        { type: 'yellow', team: 'home', player: 'Chris Brown', time: '32:45', reason: 'Foul' },
        { type: 'substitution', team: 'away', playerOut: 'Tom Harris', playerIn: 'Sam Green', time: '55:20' },
        { type: 'goal', team: 'home', player: 'James Wilson', time: '68:10', score: '3-1' },
        { type: 'red', team: 'away', player: 'Mike Davis', time: '75:30', reason: 'Second yellow' },
        { type: 'goal', team: 'away', player: 'Sam Green', time: '89:45', score: '3-2' }
      ],
      homeLineup: {
        starting: [
          { number: 1, name: 'James Wilson', position: 'Forward', goals: 2, assists: 1, yellowCards: 0, redCards: 0 },
          { number: 4, name: 'Chris Brown', position: 'Midfielder', goals: 0, assists: 2, yellowCards: 1, redCards: 0 },
          { number: 7, name: 'Alex Johnson', position: 'Forward', goals: 1, assists: 0, yellowCards: 0, redCards: 0 },
          { number: 9, name: 'Ryan Miller', position: 'Defender', goals: 0, assists: 0, yellowCards: 0, redCards: 0 },
          { number: 12, name: 'Tyler Scott', position: 'Goalkeeper', goals: 0, assists: 0, yellowCards: 0, redCards: 0 }
        ],
        substitutes: [
          { number: 3, name: 'Jordan Lee', position: 'Defender', minutesPlayed: 25 },
          { number: 8, name: 'Kevin Martin', position: 'Midfielder', minutesPlayed: 15 },
          { number: 11, name: 'Brian Wilson', position: 'Forward', minutesPlayed: 10 }
        ]
      },
      awayLineup: {
        starting: [
          { number: 1, name: 'Mike Davis', position: 'Forward', goals: 1, assists: 0, yellowCards: 1, redCards: 1 },
          { number: 5, name: 'Tom Harris', position: 'Midfielder', goals: 0, assists: 1, yellowCards: 0, redCards: 0 },
          { number: 8, name: 'Sam Green', position: 'Forward', goals: 1, assists: 0, yellowCards: 0, redCards: 0 },
          { number: 10, name: 'Adam Clark', position: 'Defender', goals: 0, assists: 0, yellowCards: 0, redCards: 0 },
          { number: 13, name: 'Jake White', position: 'Goalkeeper', goals: 0, assists: 0, yellowCards: 0, redCards: 0 }
        ],
        substitutes: [
          { number: 2, name: 'Luke Taylor', position: 'Defender', minutesPlayed: 35 },
          { number: 7, name: 'Noah Wilson', position: 'Midfielder', minutesPlayed: 20 },
          { number: 9, name: 'Ethan Moore', position: 'Forward', minutesPlayed: 5 }
        ]
      }
    },
    { 
      id: 2, 
      homeTeam: 'East High Eagles', 
      awayTeam: 'West High Bears', 
      sport: 'Soccer', 
      date: '2024-01-14', 
      time: '5:30 PM',
      location: 'Sports Field',
      status: 'completed', 
      attendance: 180, 
      revenue: 900,
      homeScore: 2,
      awayScore: 1,
      homeCoach: 'Robert Brown',
      awayCoach: 'Emily Davis',
      officials: [
        { name: 'Sarah Johnson', role: 'Center Referee' },
        { name: 'Mark Wilson', role: 'Assistant Referee' }
      ],
      events: [
        { type: 'goal', team: 'home', player: 'Daniel Kim', time: '15:20', score: '1-0' },
        { type: 'yellow', team: 'away', player: 'Carlos Ruiz', time: '28:45', reason: 'Handball' },
        { type: 'goal', team: 'away', player: 'Miguel Santos', time: '52:10', score: '1-1' },
        { type: 'substitution', team: 'home', playerOut: 'Daniel Kim', playerIn: 'Jason Park', time: '65:30' },
        { type: 'goal', team: 'home', player: 'Jason Park', time: '78:15', score: '2-1' }
      ],
      homeLineup: {
        starting: [
          { number: 1, name: 'Daniel Kim', position: 'Forward', goals: 1, assists: 0, yellowCards: 0, redCards: 0 },
          { number: 4, name: 'Jason Park', position: 'Forward', goals: 1, assists: 0, yellowCards: 0, redCards: 0 },
          { number: 7, name: 'Marcus Lee', position: 'Midfielder', goals: 0, assists: 1, yellowCards: 0, redCards: 0 }
        ],
        substitutes: [
          { number: 3, name: 'Kevin Zhang', position: 'Defender', minutesPlayed: 25 }
        ]
      },
      awayLineup: {
        starting: [
          { number: 1, name: 'Miguel Santos', position: 'Forward', goals: 1, assists: 0, yellowCards: 0, redCards: 0 },
          { number: 5, name: 'Carlos Ruiz', position: 'Defender', goals: 0, assists: 0, yellowCards: 1, redCards: 0 }
        ],
        substitutes: [
          { number: 2, name: 'Javier Lopez', position: 'Midfielder', minutesPlayed: 30 }
        ]
      }
    },
    { 
      id: 3, 
      homeTeam: 'Central High', 
      awayTeam: 'West High Bears', 
      sport: 'Volleyball', 
      date: '2024-01-13', 
      time: '6:00 PM',
      location: 'East Gym',
      status: 'completed', 
      attendance: 120, 
      revenue: 600,
      homeScore: 3,
      awayScore: 1,
      homeCoach: 'Jennifer Lopez',
      awayCoach: 'Emily Davis'
    },
    { 
      id: 4, 
      homeTeam: 'North High Lions', 
      awayTeam: 'East High Eagles', 
      sport: 'Basketball', 
      date: '2024-01-18', 
      time: '4:00 PM',
      location: 'Main Gym',
      status: 'scheduled', 
      attendance: null, 
      revenue: null 
    }
  ];

  const users = [
    { id: 1, name: 'Michael Johnson', email: 'michael@northhigh.edu', role: 'Coach', school: 'North High', status: 'active', lastLogin: '2 hours ago' },
    { id: 2, name: 'Sarah Wilson', email: 'sarah@easthigh.edu', role: 'Admin', school: 'East High', status: 'active', lastLogin: '5 hours ago' },
    { id: 3, name: 'David Brown', email: 'david@southhigh.edu', role: 'Referee', school: 'South High', status: 'inactive', lastLogin: '2 days ago' },
    { id: 4, name: 'Emily Davis', email: 'emily@westhigh.edu', role: 'Coach', school: 'West High', status: 'active', lastLogin: '1 hour ago' }
  ];

  const sports = ['all', 'basketball', 'soccer', 'volleyball', 'baseball', 'tennis'];

  // Add schools data for the schools view
  const schoolsData = [
    { id: 1, name: 'North High School', location: 'Springfield', teams: 12, students: 245, contact: 'admin@northhigh.edu' },
    { id: 2, name: 'South High School', location: 'Springfield', teams: 10, students: 198, contact: 'admin@southhigh.edu' },
    { id: 3, name: 'East High School', location: 'Springfield', teams: 8, students: 167, contact: 'admin@easthigh.edu' },
    { id: 4, name: 'West High School', location: 'Springfield', teams: 11, students: 223, contact: 'admin@westhigh.edu' },
    { id: 5, name: 'Central High School', location: 'Springfield', teams: 9, students: 185, contact: 'admin@centralhigh.edu' },
    { id: 6, name: 'Springfield Academy', location: 'Springfield', teams: 7, students: 142, contact: 'admin@springfieldacademy.edu' }
  ];

  // Search functionality
  const filteredMatches = matches.filter(match => 
    match.homeTeam.toLowerCase().includes(searchQuery.toLowerCase()) ||
    match.awayTeam.toLowerCase().includes(searchQuery.toLowerCase()) ||
    match.sport.toLowerCase().includes(searchQuery.toLowerCase()) ||
    match.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
    match.status.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.school.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.status.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredSchools = schoolsData.filter(school =>
    school.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    school.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
    school.contact.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Settings handlers
  const handleSettingChange = (section, field, value) => {
    setSettings(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const handleNestedSettingChange = (section, subSection, field, value) => {
    setSettings(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [subSection]: {
          ...prev[section][subSection],
          [field]: value
        }
      }
    }));
  };

  const handleSaveSettings = () => {
    // In a real app, you would send this to your backend
    console.log('Saving settings:', settings);
    alert('Settings saved successfully!');
  };

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
          <button 
            onClick={() => {
              setSelectedMatch(match);
              setShowMatchDetails(true);
            }}
            className="p-1 hover:bg-gray-100 rounded transition-colors"
          >
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

  // Match Details Modal Component
  const MatchDetailsModal = ({ match, onClose }) => {
    if (!match) return null;

    const getEventIcon = (type) => {
      switch (type) {
        case 'goal': return <CheckCircle className="w-4 h-4 text-green-500" />;
        case 'yellow': return <AlertTriangle className="w-4 h-4 text-yellow-500" />;
        case 'red': return <AlertTriangle className="w-4 h-4 text-red-500" />;
        case 'substitution': return <Shirt className="w-4 h-4 text-blue-500" />;
        default: return <Activity className="w-4 h-4 text-gray-500" />;
      }
    };

    const getEventColor = (type) => {
      switch (type) {
        case 'goal': return 'bg-green-50 border-green-200';
        case 'yellow': return 'bg-yellow-50 border-yellow-200';
        case 'red': return 'bg-red-50 border-red-200';
        case 'substitution': return 'bg-blue-50 border-blue-200';
        default: return 'bg-gray-50 border-gray-200';
      }
    };

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Match Details</h2>
              <p className="text-gray-600 mt-1">{match.sport} • {new Date(match.date).toLocaleDateString()}</p>
            </div>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          {/* Match Overview */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <div className="text-center flex-1">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <TeamIcon className="w-8 h-8 text-white" />
                </div>
                <p className="font-bold text-lg text-gray-900">{match.homeTeam}</p>
                <p className="text-sm text-gray-500">Coach: {match.homeCoach}</p>
                {match.homeScore !== undefined && (
                  <p className="text-3xl font-bold text-gray-900 mt-2">{match.homeScore}</p>
                )}
              </div>
              
              <div className="text-center mx-8">
                <div className="text-2xl font-bold text-gray-900 bg-gray-50 px-6 py-4 rounded-xl">
                  {match.status === 'completed' ? `${match.homeScore || 0} - ${match.awayScore || 0}` : 'VS'}
                </div>
                <div className="flex items-center justify-center space-x-4 mt-3 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {match.time}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {match.location}
                  </div>
                </div>
              </div>
              
              <div className="text-center flex-1">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <p className="font-bold text-lg text-gray-900">{match.awayTeam}</p>
                <p className="text-sm text-gray-500">Coach: {match.awayCoach}</p>
                {match.awayScore !== undefined && (
                  <p className="text-3xl font-bold text-gray-900 mt-2">{match.awayScore}</p>
                )}
              </div>
            </div>

            {/* Match Info */}
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-sm text-gray-600">Attendance</p>
                <p className="font-semibold text-gray-900">{match.attendance || 'N/A'}</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-sm text-gray-600">Revenue</p>
                <p className="font-semibold text-gray-900">{match.revenue ? `$${match.revenue}` : 'N/A'}</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-sm text-gray-600">Status</p>
                <p className={`font-semibold ${
                  match.status === 'completed' ? 'text-green-600' : 'text-blue-600'
                }`}>
                  {match.status}
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
            {/* Match Events */}
            {match.events && (
              <div className="bg-white rounded-xl border border-gray-200">
                <div className="p-4 border-b border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                    <Activity className="w-5 h-5 mr-2 text-blue-600" />
                    Match Events
                  </h3>
                </div>
                <div className="p-4">
                  <div className="space-y-3">
                    {match.events.map((event, index) => (
                      <div 
                        key={index}
                        className={`flex items-center space-x-3 p-3 border rounded-lg ${getEventColor(event.type)}`}
                      >
                        {getEventIcon(event.type)}
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <p className="font-medium text-gray-900">
                              {event.type === 'goal' && `⚽ ${event.player} scored`}
                              {event.type === 'yellow' && `🟨 ${event.player} - ${event.reason}`}
                              {event.type === 'red' && `🟥 ${event.player} - ${event.reason}`}
                              {event.type === 'substitution' && `🔄 ${event.playerOut} → ${event.playerIn}`}
                            </p>
                            <span className="text-sm text-gray-500 bg-white px-2 py-1 rounded">
                              {event.time}
                            </span>
                          </div>
                          {event.score && (
                            <p className="text-sm text-gray-600 mt-1">Score: {event.score}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Officials */}
            {match.officials && (
              <div className="bg-white rounded-xl border border-gray-200">
                <div className="p-4 border-b border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                    <User className="w-5 h-5 mr-2 text-purple-600" />
                    Match Officials
                  </h3>
                </div>
                <div className="p-4">
                  <div className="space-y-3">
                    {match.officials.map((official, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium text-gray-900">{official.name}</p>
                          <p className="text-sm text-gray-500">{official.role}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Home Team Lineup */}
            {match.homeLineup && (
              <div className="bg-white rounded-xl border border-gray-200">
                <div className="p-4 border-b border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                    <Shirt className="w-5 h-5 mr-2 text-blue-600" />
                    {match.homeTeam} Lineup
                  </h3>
                </div>
                <div className="p-4">
                  <h4 className="font-medium text-gray-700 mb-3">Starting XI</h4>
                  <div className="space-y-2 mb-4">
                    {match.homeLineup.starting.map((player, index) => (
                      <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                        <div className="flex items-center space-x-3">
                          <span className="w-6 h-6 bg-blue-600 text-white text-xs rounded-full flex items-center justify-center">
                            {player.number}
                          </span>
                          <div>
                            <p className="font-medium text-gray-900">{player.name}</p>
                            <p className="text-xs text-gray-500">{player.position}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          {player.goals > 0 && (
                            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">⚽{player.goals}</span>
                          )}
                          {player.yellowCards > 0 && (
                            <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">🟨{player.yellowCards}</span>
                          )}
                          {player.redCards > 0 && (
                            <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">🟥{player.redCards}</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {match.homeLineup.substitutes && match.homeLineup.substitutes.length > 0 && (
                    <>
                      <h4 className="font-medium text-gray-700 mb-3">Substitutes</h4>
                      <div className="space-y-2">
                        {match.homeLineup.substitutes.map((player, index) => (
                          <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                            <div className="flex items-center space-x-3">
                              <span className="w-6 h-6 bg-gray-400 text-white text-xs rounded-full flex items-center justify-center">
                                {player.number}
                              </span>
                              <div>
                                <p className="font-medium text-gray-900">{player.name}</p>
                                <p className="text-xs text-gray-500">{player.position}</p>
                              </div>
                            </div>
                            {player.minutesPlayed && (
                              <span className="text-xs text-gray-500">{player.minutesPlayed} min</span>
                            )}
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
            )}

            {/* Away Team Lineup */}
            {match.awayLineup && (
              <div className="bg-white rounded-xl border border-gray-200">
                <div className="p-4 border-b border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                    <Shirt className="w-5 h-5 mr-2 text-red-600" />
                    {match.awayTeam} Lineup
                  </h3>
                </div>
                <div className="p-4">
                  <h4 className="font-medium text-gray-700 mb-3">Starting XI</h4>
                  <div className="space-y-2 mb-4">
                    {match.awayLineup.starting.map((player, index) => (
                      <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                        <div className="flex items-center space-x-3">
                          <span className="w-6 h-6 bg-red-600 text-white text-xs rounded-full flex items-center justify-center">
                            {player.number}
                          </span>
                          <div>
                            <p className="font-medium text-gray-900">{player.name}</p>
                            <p className="text-xs text-gray-500">{player.position}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          {player.goals > 0 && (
                            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">⚽{player.goals}</span>
                          )}
                          {player.yellowCards > 0 && (
                            <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">🟨{player.yellowCards}</span>
                          )}
                          {player.redCards > 0 && (
                            <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">🟥{player.redCards}</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {match.awayLineup.substitutes && match.awayLineup.substitutes.length > 0 && (
                    <>
                      <h4 className="font-medium text-gray-700 mb-3">Substitutes</h4>
                      <div className="space-y-2">
                        {match.awayLineup.substitutes.map((player, index) => (
                          <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                            <div className="flex items-center space-x-3">
                              <span className="w-6 h-6 bg-gray-400 text-white text-xs rounded-full flex items-center justify-center">
                                {player.number}
                              </span>
                              <div>
                                <p className="font-medium text-gray-900">{player.name}</p>
                                <p className="text-xs text-gray-500">{player.position}</p>
                              </div>
                            </div>
                            {player.minutesPlayed && (
                              <span className="text-xs text-gray-500">{player.minutesPlayed} min</span>
                            )}
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-gray-200 bg-gray-50 rounded-b-2xl">
            <div className="flex justify-end space-x-3">
              <button 
                onClick={onClose}
                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Close
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Export Report
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

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
              onClick={() => {
                setActiveView(item.name.toLowerCase());
                setSearchQuery(''); // Clear search when changing views
              }}
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
                  placeholder={`Search ${activeView}...`}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-80"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
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
              {searchQuery && (
                <p className="text-sm text-blue-600 mt-1">
                  Showing {filteredMatches.length || filteredUsers.length || filteredSchools.length} results for "{searchQuery}"
                </p>
              )}
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
                    {(searchQuery ? filteredMatches : matches).map((match) => (
                      <MatchRow key={match.id} match={match} />
                    ))}
                    {searchQuery && filteredMatches.length === 0 && (
                      <tr>
                        <td colSpan="6" className="py-8 text-center text-gray-500">
                          No matches found for "{searchQuery}"
                        </td>
                      </tr>
                    )}
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
                    {(searchQuery ? filteredUsers : users).map((user) => (
                      <UserRow key={user.id} user={user} />
                    ))}
                    {searchQuery && filteredUsers.length === 0 && (
                      <tr>
                        <td colSpan="6" className="py-8 text-center text-gray-500">
                          No users found for "{searchQuery}"
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Schools View */}
          {activeView === 'schools' && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">Schools Management</h2>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {(searchQuery ? filteredSchools : schoolsData).map((school) => (
                    <div key={school.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900">{school.name}</h3>
                            <p className="text-sm text-gray-500">{school.location}</p>
                          </div>
                          <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl flex items-center justify-center text-white">
                            <School className="w-6 h-6" />
                          </div>
                        </div>

                        <div className="space-y-3 mb-4">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-500">Active Teams:</span>
                            <span className="font-medium text-gray-900">{school.teams}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-500">Student Athletes:</span>
                            <span className="font-medium text-gray-900">{school.students}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-500">Contact:</span>
                            <span className="font-medium text-gray-900 text-blue-600">{school.contact}</span>
                          </div>
                        </div>

                        <div className="flex space-x-2">
                          <button className="flex-1 bg-blue-50 hover:bg-blue-100 text-blue-700 py-2 rounded-lg text-sm font-medium transition-colors">
                            View Teams
                          </button>
                          <button className="flex-1 bg-gray-50 hover:bg-gray-100 text-gray-700 py-2 rounded-lg text-sm font-medium transition-colors">
                            Contact
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {searchQuery && filteredSchools.length === 0 && (
                  <div className="text-center py-8 text-gray-500">
                    No schools found for "{searchQuery}"
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Settings View */}
          {activeView === 'settings' && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">Settings</h2>
                <p className="text-gray-600 mt-1">Manage your platform settings and preferences</p>
              </div>
              
              <div className="p-6 space-y-8">
                {/* General Settings */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                    <Settings className="w-5 h-5 mr-2 text-blue-600" />
                    General Settings
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Mail className="w-4 h-4 inline mr-2" />
                        School Name
                      </label>
                      <input
                        type="text"
                        value={settings.schoolName}
                        onChange={(e) => handleSettingChange('schoolName', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Mail className="w-4 h-4 inline mr-2" />
                        Admin Email
                      </label>
                      <input
                        type="email"
                        value={settings.adminEmail}
                        onChange={(e) => handleSettingChange('adminEmail', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Phone className="w-4 h-4 inline mr-2" />
                        Contact Phone
                      </label>
                      <input
                        type="text"
                        value={settings.contactPhone}
                        onChange={(e) => handleSettingChange('contactPhone', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Globe className="w-4 h-4 inline mr-2" />
                        Website
                      </label>
                      <input
                        type="text"
                        value={settings.website}
                        onChange={(e) => handleSettingChange('website', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Notification Settings */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                    <Bell className="w-5 h-5 mr-2 text-green-600" />
                    Notification Settings
                  </h3>
                  <div className="space-y-4">
                    {Object.entries(settings.notifications).map(([key, value]) => (
                      <div key={key} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium text-gray-900 capitalize">{key} Notifications</p>
                          <p className="text-sm text-gray-500">Receive {key} notifications for important updates</p>
                        </div>
                        <button
                          onClick={() => handleNestedSettingChange('notifications', key, !value)}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                            value ? 'bg-blue-600' : 'bg-gray-300'
                          }`}
                        >
                          <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                              value ? 'translate-x-6' : 'translate-x-1'
                            }`}
                          />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Security Settings */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                    <Shield className="w-5 h-5 mr-2 text-red-600" />
                    Security Settings
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900">Two-Factor Authentication</p>
                        <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
                      </div>
                      <button
                        onClick={() => handleNestedSettingChange('security', 'twoFactor', !settings.security.twoFactor)}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          settings.security.twoFactor ? 'bg-blue-600' : 'bg-gray-300'
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            settings.security.twoFactor ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Session Timeout (minutes)
                      </label>
                      <select
                        value={settings.security.sessionTimeout}
                        onChange={(e) => handleNestedSettingChange('security', 'sessionTimeout', parseInt(e.target.value))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value={15}>15 minutes</option>
                        <option value={30}>30 minutes</option>
                        <option value={60}>60 minutes</option>
                        <option value={120}>2 hours</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Billing Settings */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                    <CreditCard className="w-5 h-5 mr-2 text-purple-600" />
                    Billing Settings
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Plan</label>
                      <select
                        value={settings.billing.plan}
                        onChange={(e) => handleNestedSettingChange('billing', 'plan', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="basic">Basic</option>
                        <option value="pro">Pro</option>
                        <option value="enterprise">Enterprise</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Billing Cycle</label>
                      <select
                        value={settings.billing.billingCycle}
                        onChange={(e) => handleNestedSettingChange('billing', 'billingCycle', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="monthly">Monthly</option>
                        <option value="yearly">Yearly</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Save Button */}
                <div className="flex justify-end pt-6 border-t border-gray-200">
                  <button
                    onClick={handleSaveSettings}
                    className="flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <Save className="w-4 h-4" />
                    <span>Save Settings</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Other Views Placeholder */}
          {(activeView === 'schedule' || activeView === 'analytics') && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-12 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                {activeView === 'schedule' && <Calendar className="w-8 h-8 text-blue-600" />}
                {activeView === 'analytics' && <TrendingUp className="w-8 h-8 text-blue-600" />}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 capitalize">{activeView} View</h3>
              <p className="text-gray-600 max-w-md mx-auto">
                This section is under development. The {activeView} management interface will be available soon.
              </p>
            </div>
          )}
        </main>
      </div>

      {/* Match Details Modal */}
      {showMatchDetails && (
        <MatchDetailsModal 
          match={selectedMatch} 
          onClose={() => setShowMatchDetails(false)} 
        />
      )}
    </div>
  );
};

export default AdminDashboard;