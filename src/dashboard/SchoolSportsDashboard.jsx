// App.js - Complete Dashboard with All Pages
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
  ChevronDown,
  User,
  School,
  Award,
  Clock,
  MapPin,
  Eye,
  Edit,
  MoreVertical,
  Play,
  Download,
  Plus,
  Settings,
  FileText,
  MessageSquare,
  Shield,
  LogOut,
  Home,
  Star,
  Activity,
  Target,
  PieChart,
  Mail,
  Phone,
  Globe,
  Lock,
  CreditCard,
  Save,
  HelpCircle
} from 'lucide-react';
import { Link } from 'react-router';
import PATHS from '../Route';

const SchoolSportsDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activePage, setActivePage] = useState('dashboard');
  const [activeSport, setActiveSport] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [settings, setSettings] = useState({
    profile: {
      firstName: 'John',
      lastName: 'Wilson',
      email: 'john.wilson@school.edu',
      phone: '+1 (555) 123-4567',
      school: 'North High School',
      role: 'Coach & Admin'
    },
    notifications: {
      matchUpdates: true,
      teamAnnouncements: true,
      scheduleChanges: true,
      performanceReports: false,
      emailNotifications: true,
      pushNotifications: true
    },
    security: {
      twoFactorAuth: true,
      sessionTimeout: 30,
      loginAlerts: true
    },
    preferences: {
      theme: 'light',
      language: 'english',
      timezone: 'EST',
      dateFormat: 'MM/DD/YYYY'
    }
  });

  // Mock data for all pages
  const dashboardStats = [
    { title: 'Total Matches', value: '48', change: '+12%', icon: Trophy, color: 'blue' },
    { title: 'Active Teams', value: '24', change: '+5%', icon: Users, color: 'green' },
    { title: 'Schools', value: '12', change: '+2%', icon: School, color: 'purple' },
    { title: 'Upcoming Events', value: '8', change: '+3', icon: Calendar, color: 'orange' }
  ];

  const matchesData = [
    { 
      id: 1, 
      homeTeam: 'North High Lions', 
      awayTeam: 'South High Tigers', 
      sport: 'Basketball', 
      score: '72-68', 
      status: 'completed', 
      date: '2024-01-15',
      time: '4:00 PM',
      location: 'Main Gym',
      attendance: 245
    },
    { 
      id: 2, 
      homeTeam: 'East High Eagles', 
      awayTeam: 'West High Bears', 
      sport: 'Soccer', 
      score: '2-1', 
      status: 'completed', 
      date: '2024-01-14',
      time: '5:30 PM',
      location: 'Sports Field',
      attendance: 180
    },
    { 
      id: 3, 
      homeTeam: 'Central High', 
      awayTeam: 'West High Bears', 
      sport: 'Volleyball', 
      score: '3-1', 
      status: 'completed', 
      date: '2024-01-13',
      time: '6:00 PM',
      location: 'East Gym',
      attendance: 120
    },
    { 
      id: 4, 
      homeTeam: 'North High Lions', 
      awayTeam: 'East High Eagles', 
      sport: 'Basketball', 
      score: '-', 
      status: 'upcoming', 
      date: '2024-01-18',
      time: '4:30 PM',
      location: 'West Gym',
      attendance: null
    }
  ];

  const teamsData = [
    { id: 1, name: 'Lions', school: 'North High', sport: 'Basketball', coach: 'Coach Wilson', wins: 7, losses: 1, players: 12 },
    { id: 2, name: 'Eagles', school: 'East High', sport: 'Soccer', coach: 'Coach Davis', wins: 6, losses: 2, players: 18 },
    { id: 3, name: 'Tigers', school: 'South High', sport: 'Volleyball', coach: 'Coach Johnson', wins: 5, losses: 3, players: 14 },
    { id: 4, name: 'Bears', school: 'West High', sport: 'Basketball', coach: 'Coach Brown', wins: 2, losses: 6, players: 10 }
  ];

  const scheduleData = [
    { id: 1, event: 'Basketball Finals', date: '2024-01-25', time: '4:00 PM', location: 'Main Gym', teams: 'Lions vs Eagles', type: 'Championship' },
    { id: 2, event: 'Soccer Tournament', date: '2024-01-28', time: '10:00 AM', location: 'Sports Field', teams: 'Multiple Teams', type: 'Tournament' },
    { id: 3, event: 'Volleyball Semifinals', date: '2024-02-01', time: '5:30 PM', location: 'East Gym', teams: 'Tigers vs Bears', type: 'Playoff' },
    { id: 4, event: 'Baseball Season Opener', date: '2024-03-15', time: '3:00 PM', location: 'Baseball Field', teams: 'Eagles vs Lions', type: 'Regular' }
  ];

  const schoolsData = [
    { id: 1, name: 'North High School', teams: 8, students: 1200, location: 'North District', contact: 'principal@north.edu' },
    { id: 2, name: 'East High School', teams: 7, students: 1100, location: 'East District', contact: 'principal@east.edu' },
    { id: 3, name: 'South High School', teams: 6, students: 950, location: 'South District', contact: 'principal@south.edu' },
    { id: 4, name: 'West High School', teams: 5, students: 800, location: 'West District', contact: 'principal@west.edu' }
  ];

  const sports = ['all', 'basketball', 'soccer', 'volleyball', 'baseball', 'tennis'];

  // Search functionality
  const filteredMatches = matchesData.filter(match => 
    match.homeTeam.toLowerCase().includes(searchQuery.toLowerCase()) ||
    match.awayTeam.toLowerCase().includes(searchQuery.toLowerCase()) ||
    match.sport.toLowerCase().includes(searchQuery.toLowerCase()) ||
    match.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
    match.status.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredTeams = teamsData.filter(team =>
    team.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    team.school.toLowerCase().includes(searchQuery.toLowerCase()) ||
    team.sport.toLowerCase().includes(searchQuery.toLowerCase()) ||
    team.coach.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredSchools = schoolsData.filter(school =>
    school.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    school.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
    school.contact.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredSchedule = scheduleData.filter(event =>
    event.event.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.teams.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Settings handlers
  const handleProfileChange = (field, value) => {
    setSettings(prev => ({
      ...prev,
      profile: {
        ...prev.profile,
        [field]: value
      }
    }));
  };

  const handleNotificationChange = (field, value) => {
    setSettings(prev => ({
      ...prev,
      notifications: {
        ...prev.notifications,
        [field]: value
      }
    }));
  };

  const handleSecurityChange = (field, value) => {
    setSettings(prev => ({
      ...prev,
      security: {
        ...prev.security,
        [field]: value
      }
    }));
  };

  const handlePreferenceChange = (field, value) => {
    setSettings(prev => ({
      ...prev,
      preferences: {
        ...prev.preferences,
        [field]: value
      }
    }));
  };

  const handleSaveSettings = () => {
    // In a real app, you would send this to your backend
    console.log('Saving settings:', settings);
    alert('Settings saved successfully!');
  };

  // Reusable Components
  const StatCard = ({ title, value, change, icon: Icon, color }) => (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900 mt-2">{value}</p>
          <p className={`text-sm mt-1 ${change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
            {change}
          </p>
        </div>
        <div className={`p-3 rounded-xl bg-${color}-500 bg-opacity-10`}>
          <Icon className={`w-6 h-6 text-${color}-500`} />
        </div>
      </div>
    </div>
  );

  const PageHeader = ({ title, description, action, searchResults }) => (
    <div className="flex items-center justify-between mb-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
        <p className="text-gray-600 mt-2">{description}</p>
        {searchQuery && searchResults !== undefined && (
          <p className="text-sm text-blue-600 mt-1">
            Showing {searchResults} results for "{searchQuery}"
          </p>
        )}
      </div>
      {action}
    </div>
  );

  // Page Components
  const DashboardPage = () => (
    <>
      <PageHeader 
        title="Welcome back, Coach!" 
        description="Here's what's happening with your teams today."
        action={
          <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors">
            <Plus className="w-4 h-4" />
            <span>New Match</span>
          </button>
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {dashboardStats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Recent Matches */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-gray-900">Recent Matches</h2>
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  View All →
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {(searchQuery ? filteredMatches : matchesData.slice(0, 3)).map((match) => (
                  <div key={match.id} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl transition-colors">
                    <div className="flex items-center space-x-4">
                      <div className={`w-3 h-3 rounded-full ${match.status === 'completed' ? 'bg-green-500' : 'bg-blue-500'}`}></div>
                      <div>
                        <p className="font-semibold text-gray-900">{match.homeTeam} vs {match.awayTeam}</p>
                        <p className="text-sm text-gray-500">{match.sport} • {match.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-gray-900">{match.score}</p>
                      <p className="text-sm text-gray-500">{match.status}</p>
                    </div>
                  </div>
                ))}
                {searchQuery && filteredMatches.length === 0 && (
                  <div className="text-center py-8 text-gray-500">
                    No matches found for "{searchQuery}"
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {/* Quick Stats */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Team Performance</h3>
            <div className="space-y-4">
              {(searchQuery ? filteredTeams : teamsData).map((team) => (
                <div key={team.id} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900">{team.name}</p>
                    <p className="text-sm text-gray-500">{team.sport}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">{team.wins}W - {team.losses}L</p>
                    <p className="text-sm text-gray-500">{Math.round((team.wins/(team.wins+team.losses))*100)}%</p>
                  </div>
                </div>
              ))}
              {searchQuery && filteredTeams.length === 0 && (
                <div className="text-center py-4 text-gray-500 text-sm">
                  No teams found for "{searchQuery}"
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );

  const MatchesPage = () => (
    <>
      <PageHeader 
        title="Matches & Results" 
        description="Manage and view all match information"
        searchResults={filteredMatches.length}
        action={
          <div className="flex items-center space-x-3">
            <div className="flex bg-gray-100 rounded-lg p-1">
              {sports.map((sport) => (
                <button
                  key={sport}
                  onClick={() => setActiveSport(sport)}
                  className={`px-3 py-1 rounded-md text-sm font-medium capitalize transition-colors ${
                    activeSport === sport
                      ? 'bg-white text-gray-900 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {sport}
                </button>
              ))}
            </div>
            <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors">
              <Plus className="w-4 h-4" />
              <span>New Match</span>
            </button>
          </div>
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {(searchQuery ? filteredMatches : matchesData).map((match) => (
          <div key={match.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  match.status === 'completed' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-blue-100 text-blue-800'
                }`}>
                  {match.status === 'completed' ? 'Completed' : 'Upcoming'}
                </span>
                <div className="text-right">
                  <p className="text-sm text-gray-500">{match.date}</p>
                  <p className="text-xs text-gray-400">{match.time}</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between mb-4">
                <div className="text-center flex-1">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-2 shadow-md">
                    <Trophy className="w-5 h-5 text-white" />
                  </div>
                  <p className="font-semibold text-gray-900 text-sm">{match.homeTeam}</p>
                </div>
                
                <div className="text-center mx-4">
                  <div className="text-xl font-bold text-gray-900 bg-gray-50 px-4 py-2 rounded-lg">
                    {match.score}
                  </div>
                  <p className="text-xs text-gray-500 mt-1 bg-gray-100 px-2 py-1 rounded-full">{match.sport}</p>
                </div>
                
                <div className="text-center flex-1">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-2 shadow-md">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <p className="font-semibold text-gray-900 text-sm">{match.awayTeam}</p>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  {match.location}
                </div>
                {match.attendance && (
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {match.attendance} attendees
                  </div>
                )}
              </div>
              
              <div className="flex space-x-2">
                <button className="flex-1 bg-blue-50 hover:bg-blue-100 text-blue-700 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center">
                  <Eye className="w-4 h-4 mr-2" />
                  View Details
                </button>
                <button className="flex-1 bg-gray-50 hover:bg-gray-100 text-gray-700 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center">
                  <Edit className="w-4 h-4 mr-2" />
                  Edit
                </button>
              </div>
            </div>
          </div>
        ))}
        {searchQuery && filteredMatches.length === 0 && (
          <div className="col-span-3 text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No matches found</h3>
            <p className="text-gray-500">No matches match your search for "{searchQuery}"</p>
          </div>
        )}
      </div>
    </>
  );

  const TeamsPage = () => (
    <>
      <PageHeader 
        title="Team Management" 
        description="View and manage all school teams"
        searchResults={filteredTeams.length}
        action={
          <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors">
            <Plus className="w-4 h-4" />
            <span>New Team</span>
          </button>
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {(searchQuery ? filteredTeams : teamsData).map((team) => (
          <div key={team.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{team.name}</h3>
                  <p className="text-sm text-gray-500">{team.school}</p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold">
                  {team.name.charAt(0)}
                </div>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Sport:</span>
                  <span className="font-medium text-gray-900">{team.sport}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Coach:</span>
                  <span className="font-medium text-gray-900">{team.coach}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Players:</span>
                  <span className="font-medium text-gray-900">{team.players}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Record:</span>
                  <span className="font-medium text-gray-900">{team.wins}W - {team.losses}L</span>
                </div>
              </div>

              <div className="flex space-x-2">
                <Link to={PATHS.TEAMDETAILVIEW} className="flex-1 bg-blue-50 hover:bg-blue-100 text-blue-700 py-2 rounded-lg text-sm font-medium transition-colors text-center">
                  View Roster
                </Link>
                <button className="flex-1 bg-gray-50 hover:bg-gray-100 text-gray-700 py-2 rounded-lg text-sm font-medium transition-colors">
                  Schedule
                </button>
              </div>
            </div>
          </div>
        ))}
        {searchQuery && filteredTeams.length === 0 && (
          <div className="col-span-3 text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No teams found</h3>
            <p className="text-gray-500">No teams match your search for "{searchQuery}"</p>
          </div>
        )}
      </div>
    </>
  );

  const SchedulePage = () => (
    <>
      <PageHeader 
        title="Event Schedule" 
        description="View and manage upcoming events and matches"
        searchResults={filteredSchedule.length}
        action={
          <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors">
            <Plus className="w-4 h-4" />
            <span>New Event</span>
          </button>
        }
      />

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-900">Upcoming Events</h2>
            <div className="flex items-center space-x-2">
              <button className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium transition-colors">
                This Week
              </button>
              <button className="px-3 py-1 bg-blue-100 text-blue-700 rounded-lg text-sm font-medium transition-colors">
                This Month
              </button>
            </div>
          </div>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {(searchQuery ? filteredSchedule : scheduleData).map((event) => (
              <div key={event.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:border-blue-300 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex flex-col items-center justify-center">
                    <span className="text-sm font-bold text-blue-600">
                      {new Date(event.date).getDate()}
                    </span>
                    <span className="text-xs text-blue-600">
                      {new Date(event.date).toLocaleString('en', { month: 'short' })}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{event.event}</h3>
                    <p className="text-sm text-gray-500">{event.teams}</p>
                    <div className="flex items-center space-x-4 mt-1 text-xs text-gray-500">
                      <span className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {event.time}
                      </span>
                      <span className="flex items-center">
                        <MapPin className="w-3 h-3 mr-1" />
                        {event.location}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    event.type === 'Championship' ? 'bg-purple-100 text-purple-800' :
                    event.type === 'Tournament' ? 'bg-green-100 text-green-800' :
                    event.type === 'Playoff' ? 'bg-orange-100 text-orange-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {event.type}
                  </span>
                  <p className="text-sm text-gray-500 mt-1">{event.date}</p>
                </div>
              </div>
            ))}
            {searchQuery && filteredSchedule.length === 0 && (
              <div className="text-center py-8 text-gray-500">
                No events found for "{searchQuery}"
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );

  const StatisticsPage = () => (
    <>
      <PageHeader 
        title="Statistics & Analytics" 
        description="Detailed insights and performance metrics"
        action={
          <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors">
            <Download className="w-4 h-4" />
            <span>Export Report</span>
          </button>
        }
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Sport Distribution</h3>
          <div className="space-y-4">
            {['Basketball', 'Soccer', 'Volleyball', 'Baseball'].map((sport, index) => (
              <div key={sport} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${
                    index === 0 ? 'bg-blue-500' :
                    index === 1 ? 'bg-green-500' :
                    index === 2 ? 'bg-purple-500' : 'bg-orange-500'
                  }`}></div>
                  <span className="font-medium text-gray-700">{sport}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-32 bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${
                        index === 0 ? 'bg-blue-500 w-3/4' :
                        index === 1 ? 'bg-green-500 w-1/2' :
                        index === 2 ? 'bg-purple-500 w-1/3' : 'bg-orange-500 w-1/4'
                      }`}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-gray-900">
                    {index === 0 ? '75%' : index === 1 ? '50%' : index === 2 ? '33%' : '25%'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Metrics</h3>
          <div className="space-y-4">
            {[
              { metric: 'Win Rate', value: '68%', change: '+5%' },
              { metric: 'Average Points', value: '24.5', change: '+2.1' },
              { metric: 'Player Attendance', value: '92%', change: '+3%' },
              { metric: 'Fan Attendance', value: '78%', change: '+8%' }
            ].map((item, index) => (
              <div key={item.metric} className="flex items-center justify-between">
                <span className="font-medium text-gray-700">{item.metric}</span>
                <div className="text-right">
                  <p className="font-semibold text-gray-900">{item.value}</p>
                  <p className={`text-sm ${item.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                    {item.change}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );

  const SchoolsPage = () => (
    <>
      <PageHeader 
        title="Schools Directory" 
        description="Manage partner schools and institutions"
        searchResults={filteredSchools.length}
        action={
          <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors">
            <Plus className="w-4 h-4" />
            <span>Add School</span>
          </button>
        }
      />

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
        {searchQuery && filteredSchools.length === 0 && (
          <div className="col-span-3 text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <School className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No schools found</h3>
            <p className="text-gray-500">No schools match your search for "{searchQuery}"</p>
          </div>
        )}
      </div>
    </>
  );

  const SettingsPage = () => (
    <>
      <PageHeader 
        title="Settings & Configuration" 
        description="Manage your account and platform settings"
        action={
          <button 
            onClick={handleSaveSettings}
            className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
          >
            <Save className="w-4 h-4" />
            <span>Save Changes</span>
          </button>
        }
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Profile Settings */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <User className="w-5 h-5 mr-2 text-blue-600" />
              Profile Settings
            </h3>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <User className="w-4 h-4 inline mr-2" />
                    First Name
                  </label>
                  <input 
                    type="text" 
                    value={settings.profile.firstName}
                    onChange={(e) => handleProfileChange('firstName', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input 
                    type="text" 
                    value={settings.profile.lastName}
                    onChange={(e) => handleProfileChange('lastName', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Mail className="w-4 h-4 inline mr-2" />
                  Email
                </label>
                <input 
                  type="email" 
                  value={settings.profile.email}
                  onChange={(e) => handleProfileChange('email', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Phone className="w-4 h-4 inline mr-2" />
                  Phone
                </label>
                <input 
                  type="text" 
                  value={settings.profile.phone}
                  onChange={(e) => handleProfileChange('phone', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <School className="w-4 h-4 inline mr-2" />
                  School
                </label>
                <select 
                  value={settings.profile.school}
                  onChange={(e) => handleProfileChange('school', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option>North High School</option>
                  <option>East High School</option>
                  <option>South High School</option>
                  <option>West High School</option>
                </select>
              </div>
            </div>
          </div>

          {/* Notification Settings */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Bell className="w-5 h-5 mr-2 text-green-600" />
              Notification Preferences
            </h3>
            <div className="space-y-4">
              {Object.entries(settings.notifications).map(([key, value]) => (
                <div key={key} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900 capitalize">
                      {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                    </p>
                    <p className="text-sm text-gray-500">Receive notifications for {key.toLowerCase().replace(/([A-Z])/g, ' $1')}</p>
                  </div>
                  <button
                    onClick={() => handleNotificationChange(key, !value)}
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
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Shield className="w-5 h-5 mr-2 text-red-600" />
              Security Settings
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">Two-Factor Authentication</p>
                  <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
                </div>
                <button
                  onClick={() => handleSecurityChange('twoFactorAuth', !settings.security.twoFactorAuth)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.security.twoFactorAuth ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.security.twoFactorAuth ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">Login Alerts</p>
                  <p className="text-sm text-gray-500">Get notified of new sign-ins</p>
                </div>
                <button
                  onClick={() => handleSecurityChange('loginAlerts', !settings.security.loginAlerts)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.security.loginAlerts ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.security.loginAlerts ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Session Timeout
                </label>
                <select
                  value={settings.security.sessionTimeout}
                  onChange={(e) => handleSecurityChange('sessionTimeout', parseInt(e.target.value))}
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
        </div>

        <div className="space-y-6">
          {/* Account Overview */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Account Overview</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-500">Member since</span>
                <span className="font-medium">Jan 2023</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Role</span>
                <span className="font-medium">{settings.profile.role}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Teams managed</span>
                <span className="font-medium">3 teams</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Last login</span>
                <span className="font-medium">2 hours ago</span>
              </div>
            </div>
          </div>

          {/* Preferences */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Preferences</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Theme</label>
                <select
                  value={settings.preferences.theme}
                  onChange={(e) => handlePreferenceChange('theme', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="light">Light</option>
                  <option value="dark">Dark</option>
                  <option value="auto">Auto</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Language</label>
                <select
                  value={settings.preferences.language}
                  onChange={(e) => handlePreferenceChange('language', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="english">English</option>
                  <option value="spanish">Spanish</option>
                  <option value="french">French</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Timezone</label>
                <select
                  value={settings.preferences.timezone}
                  onChange={(e) => handlePreferenceChange('timezone', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="EST">Eastern Time (EST)</option>
                  <option value="CST">Central Time (CST)</option>
                  <option value="PST">Pacific Time (PST)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="space-y-2">
              <button className="w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <FileText className="w-4 h-4 inline mr-2" />
                Export Data
              </button>
              <button className="w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <Shield className="w-4 h-4 inline mr-2" />
                Privacy Settings
              </button>
              <button className="w-full text-left px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                <LogOut className="w-4 h-4 inline mr-2" />
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  // Render active page
  const renderActivePage = () => {
    switch (activePage) {
      case 'dashboard': return <DashboardPage />;
      case 'matches': return <MatchesPage />;
      case 'teams': return <TeamsPage />;
      case 'schedule': return <SchedulePage />;
      case 'statistics': return <StatisticsPage />;
      case 'schools': return <SchoolsPage />;
      case 'settings': return <SettingsPage />;
      default: return <DashboardPage />;
    }
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-white shadow-xl transition-all duration-300 flex flex-col`}>
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-700 rounded-xl flex items-center justify-center shadow-lg">
              <Trophy className="w-6 h-6 text-white" />
            </div>
            {sidebarOpen && (
              <div>
                <h1 className="text-xl font-bold text-gray-900">SportSync</h1>
                <p className="text-xs text-gray-500">School Platform</p>
              </div>
            )}
          </div>
        </div>

        <nav className="flex-1 mt-6">
          {[
            { name: 'Dashboard', icon: Home, id: 'dashboard' },
            { name: 'Matches', icon: Trophy, id: 'matches' },
            { name: 'Teams', icon: Users, id: 'teams' },
            { name: 'Schedule', icon: Calendar, id: 'schedule' },
            { name: 'Statistics', icon: BarChart3, id: 'statistics' },
            { name: 'Schools', icon: School, id: 'schools' },
            { name: 'Settings', icon: Settings, id: 'settings' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActivePage(item.id);
                setSearchQuery(''); // Clear search when changing pages
              }}
              className={`w-full flex items-center px-6 py-3 text-left transition-all duration-200 ${
                activePage === item.id
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
                  <p className="text-sm font-medium">Premium Plan</p>
                  <p className="text-xs opacity-90">12 schools active</p>
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
              <div className="relative">
                <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="text"
                  placeholder={`Search ${activePage}...`}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-80 transition-all"
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
              
              <div className="flex items-center space-x-3 bg-gray-50 rounded-xl px-3 py-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
                <div className="flex items-center space-x-1">
                  <span className="text-sm font-medium text-gray-900">Coach Wilson</span>
                  <ChevronDown className="w-4 h-4 text-gray-500" />
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto p-6">
          {renderActivePage()}
        </main>
      </div>
    </div>
  );
};

export default SchoolSportsDashboard;