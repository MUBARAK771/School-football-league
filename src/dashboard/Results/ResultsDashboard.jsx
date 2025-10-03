// ResultsDashboard.js
import React, { useState } from 'react';
import {
  Trophy,
  Calendar,
  Users,
  BarChart3,
  Filter,
  Search,
  Download,
  ChevronDown,
  Star,
  Award,
  TrendingUp,
  TrendingDown,
  Clock,
  MapPin,
  Play,
  Eye,
  Share2,
  MoreVertical,
  Home,
  Target,
  Activity,
  Heart,
  Zap,
  User,
  School,
  Settings,
  Bell,
  Plus,
  Edit,
  Trash2,
  ArrowUpRight,
  ArrowDownRight,
  PieChart,
  LineChart,
  BarChart,
  Target as TargetIcon,
  Crown,
  Medal,
  Flag,
  Clock4,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  Grid
} from 'lucide-react';
const ResultsDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedMatch, setSelectedMatch] = useState(null);
  const [timeRange, setTimeRange] = useState('month');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [showTeamDetails, setShowTeamDetails] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  // Mock data for matches and results
  const matchStats = [
    { title: 'Total Matches', value: '156', change: '+12%', icon: Trophy, color: 'blue' },
    { title: 'Matches This Month', value: '24', change: '+5%', icon: Calendar, color: 'green' },
    { title: 'Teams Competing', value: '32', change: '+3', icon: Users, color: 'purple' },
    { title: 'Avg. Attendance', value: '245', change: '+18%', icon: BarChart3, color: 'orange' }
  ];

  const matches = [
    {
      id: 1,
      homeTeam: 'North High Lions',
      awayTeam: 'South High Tigers',
      sport: 'Basketball',
      date: '2024-01-25',
      time: '4:00 PM',
      location: 'Main Gym',
      status: 'completed',
      homeScore: 72,
      awayScore: 68,
      quarter: 'Final',
      homeRecord: '7-1',
      awayRecord: '5-3',
      topPerformers: [
        { name: 'James Wilson', team: 'home', points: 24, rebounds: 8, assists: 6 },
        { name: 'Marcus Johnson', team: 'away', points: 22, rebounds: 5, assists: 4 }
      ],
      attendance: 245,
      highlight: 'Game-winning 3-pointer with 2 seconds left'
    },
    {
      id: 2,
      homeTeam: 'East High Eagles',
      awayTeam: 'West High Bears',
      sport: 'Soccer',
      date: '2024-01-24',
      time: '5:30 PM',
      location: 'Sports Field',
      status: 'completed',
      homeScore: 2,
      awayScore: 1,
      quarter: 'Full Time',
      homeRecord: '6-2',
      awayRecord: '4-4',
      topPerformers: [
        { name: 'Sarah Chen', team: 'home', goals: 1, assists: 1, saves: 3 },
        { name: 'David Kim', team: 'away', goals: 1, assists: 0, saves: 5 }
      ],
      attendance: 180,
      highlight: 'Last-minute penalty kick decides the match'
    },
    {
      id: 3,
      homeTeam: 'Central High Sharks',
      awayTeam: 'West High Bears',
      sport: 'Volleyball',
      date: '2024-01-23',
      time: '6:00 PM',
      location: 'East Gym',
      status: 'completed',
      homeScore: 3,
      awayScore: 1,
      quarter: 'Final',
      homeRecord: '5-3',
      awayRecord: '4-4',
      topPerformers: [
        { name: 'Emily Rodriguez', team: 'home', kills: 15, blocks: 4, aces: 2 },
        { name: 'Michael Brown', team: 'away', kills: 12, blocks: 3, aces: 1 }
      ],
      attendance: 120,
      highlight: 'Dominant performance with 15 kills from Rodriguez'
    },
    {
      id: 4,
      homeTeam: 'North High Lions',
      awayTeam: 'East High Eagles',
      sport: 'Basketball',
      date: '2024-01-20',
      time: '4:30 PM',
      location: 'West Gym',
      status: 'completed',
      homeScore: 81,
      awayScore: 75,
      quarter: 'Final',
      homeRecord: '6-2',
      awayRecord: '6-2',
      topPerformers: [
        { name: 'James Wilson', team: 'home', points: 28, rebounds: 7, assists: 5 },
        { name: 'Sarah Chen', team: 'away', points: 24, rebounds: 6, assists: 4 }
      ],
      attendance: 210,
      highlight: 'Overtime thriller with multiple lead changes'
    }
  ];

  const leaderboard = [
    { rank: 1, team: 'Lions', school: 'North High', wins: 7, losses: 1, points: 21, streak: 'W4' },
    { rank: 2, team: 'Eagles', school: 'East High', wins: 6, losses: 2, points: 18, streak: 'W2' },
    { rank: 3, team: 'Tigers', school: 'South High', wins: 5, losses: 3, points: 15, streak: 'L1' },
    { rank: 4, team: 'Bears', school: 'West High', wins: 4, losses: 4, points: 12, streak: 'L2' },
    { rank: 5, team: 'Sharks', school: 'Central High', wins: 5, losses: 3, points: 15, streak: 'W1' }
  ];

  const teams = [
    {
      id: 1,
      name: 'Lions',
      school: 'North High',
      sport: 'Basketball',
      coach: 'Michael Johnson',
      record: '7-1',
      pointsFor: 645,
      pointsAgainst: 580,
      streak: 'W4',
      players: [
        { name: 'James Wilson', number: 23, position: 'Forward', points: 28.5, rebounds: 7.2, assists: 5.1 },
        { name: 'Chris Brown', number: 11, position: 'Guard', points: 16.8, rebounds: 4.5, assists: 8.2 },
        { name: 'Alex Johnson', number: 7, position: 'Center', points: 12.3, rebounds: 9.8, assists: 2.1 }
      ],
      upcomingMatches: [
        { opponent: 'West High Bears', date: '2024-02-01', location: 'Main Gym' },
        { opponent: 'Central High Sharks', date: '2024-02-08', location: 'Away' }
      ]
    },
    {
      id: 2,
      name: 'Eagles',
      school: 'East High',
      sport: 'Soccer',
      coach: 'Sarah Wilson',
      record: '6-2',
      pointsFor: 18,
      pointsAgainst: 12,
      streak: 'W2',
      players: [
        { name: 'Sarah Chen', number: 10, position: 'Forward', goals: 8, assists: 6, saves: 12 },
        { name: 'Daniel Kim', number: 7, position: 'Midfielder', goals: 5, assists: 8, saves: 3 },
        { name: 'Marcus Lee', number: 1, position: 'Goalkeeper', goals: 0, assists: 1, saves: 25 }
      ],
      upcomingMatches: [
        { opponent: 'South High Tigers', date: '2024-02-02', location: 'Sports Field' }
      ]
    }
  ];

  const upcomingMatches = [
    {
      id: 5,
      homeTeam: 'North High Lions',
      awayTeam: 'West High Bears',
      sport: 'Basketball',
      date: '2024-02-01',
      time: '4:00 PM',
      location: 'Main Gym',
      status: 'scheduled'
    },
    {
      id: 6,
      homeTeam: 'East High Eagles',
      awayTeam: 'South High Tigers',
      sport: 'Soccer',
      date: '2024-02-02',
      time: '5:30 PM',
      location: 'Sports Field',
      status: 'scheduled'
    },
    {
      id: 7,
      homeTeam: 'Central High Sharks',
      awayTeam: 'North High Lions',
      sport: 'Volleyball',
      date: '2024-02-08',
      time: '6:00 PM',
      location: 'East Gym',
      status: 'scheduled'
    },
    {
      id: 8,
      homeTeam: 'South High Tigers',
      awayTeam: 'East High Eagles',
      sport: 'Basketball',
      date: '2024-02-15',
      time: '4:30 PM',
      location: 'South Gym',
      status: 'scheduled'
    },
    {
      id: 9,
      homeTeam: 'West High Bears',
      awayTeam: 'Central High Sharks',
      sport: 'Soccer',
      date: '2024-02-22',
      time: '5:00 PM',
      location: 'West Field',
      status: 'scheduled'
    }
  ];

  const statistics = {
    topScorers: [
      { name: 'James Wilson', team: 'Lions', points: 228, games: 8, avg: 28.5 },
      { name: 'Sarah Chen', team: 'Eagles', goals: 8, games: 8, avg: 1.0 },
      { name: 'Marcus Johnson', team: 'Tigers', points: 185, games: 8, avg: 23.1 },
      { name: 'Emily Rodriguez', team: 'Sharks', kills: 98, games: 8, avg: 12.3 }
    ],
    teamStats: [
      { team: 'Lions', wins: 7, losses: 1, pointsFor: 645, pointsAgainst: 580, diff: '+65' },
      { team: 'Eagles', wins: 6, losses: 2, pointsFor: 18, pointsAgainst: 12, diff: '+6' },
      { team: 'Tigers', wins: 5, losses: 3, pointsFor: 520, pointsAgainst: 510, diff: '+10' },
      { team: 'Sharks', wins: 5, losses: 3, pointsFor: 480, pointsAgainst: 470, diff: '+10' }
    ],
    attendance: {
      total: 4560,
      average: 228,
      highest: 320,
      lowest: 120
    }
  };

  const sports = ['all', 'basketball', 'soccer', 'volleyball', 'baseball', 'tennis'];

  // Calendar functions
  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const navigateMonth = (direction) => {
    setCurrentMonth(prev => {
      const newDate = new Date(prev);
      newDate.setMonth(prev.getMonth() + direction);
      return newDate;
    });
  };

  const getMatchesForDate = (date) => {
    const dateString = date.toISOString().split('T')[0];
    return [...matches, ...upcomingMatches].filter(match => 
      match.date === dateString
    );
  };

  const formatDate = (date) => {
    return date.toISOString().split('T')[0];
  };

  const isToday = (date) => {
    const today = new Date();
    return date.toDateString() === today.toDateString();
  };

  // Components
  const StatCard = ({ title, value, change, icon: Icon, color }) => (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900 mt-2">{value}</p>
          <p className={`text-sm mt-1 flex items-center ${change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
            {change.startsWith('+') ? <TrendingUp className="w-4 h-4 mr-1" /> : <TrendingDown className="w-4 h-4 mr-1" />}
            {change}
          </p>
        </div>
        <div className={`p-3 rounded-xl bg-${color}-100`}>
          <Icon className={`w-6 h-6 text-${color}-600`} />
        </div>
      </div>
    </div>
  );

  const MatchCard = ({ match }) => (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
      <div className="p-6">
        {/* Match Header */}
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center space-x-2">
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
              match.status === 'completed' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
            }`}>
              {match.status === 'completed' ? 'Completed' : 'Scheduled'}
            </span>
            <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
              {match.sport}
            </span>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-500">{match.date}</p>
            <p className="text-xs text-gray-400">{match.time}</p>
          </div>
        </div>

        {/* Teams and Score */}
        <div className="flex items-center justify-between mb-6">
          <div className="text-center flex-1">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
              <Home className="w-6 h-6 text-white" />
            </div>
            <p className="font-bold text-gray-900">{match.homeTeam}</p>
            {match.homeRecord && <p className="text-sm text-gray-500 mt-1">{match.homeRecord}</p>}
            {match.homeScore !== undefined && <p className="text-3xl font-bold text-gray-900 mt-2">{match.homeScore}</p>}
          </div>
          
          <div className="text-center mx-4">
            <div className="text-lg text-gray-500 mb-2">VS</div>
            <div className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
              {match.quarter || 'Upcoming'}
            </div>
            <div className="mt-2 text-xs text-gray-500">
              <div className="flex items-center justify-center">
                <MapPin className="w-3 h-3 mr-1" />
                {match.location}
              </div>
            </div>
          </div>
          
          <div className="text-center flex-1">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
              <Target className="w-6 h-6 text-white" />
            </div>
            <p className="font-bold text-gray-900">{match.awayTeam}</p>
            {match.awayRecord && <p className="text-sm text-gray-500 mt-1">{match.awayRecord}</p>}
            {match.awayScore !== undefined && <p className="text-3xl font-bold text-gray-900 mt-2">{match.awayScore}</p>}
          </div>
        </div>

        {match.status === 'completed' && (
          <>
            {/* Match Highlight */}
            <div className="mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
              <div className="flex items-start space-x-2">
                <Zap className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-yellow-800">{match.highlight}</p>
              </div>
            </div>

            {/* Top Performers */}
            <div className="mb-4">
              <p className="text-sm font-medium text-gray-700 mb-2">Top Performers</p>
              <div className="space-y-2">
                {match.topPerformers.slice(0, 2).map((player, index) => (
                  <div key={index} className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-2">
                      <Star className="w-3 h-3 text-yellow-500 fill-current" />
                      <span className="font-medium text-gray-900">{player.name}</span>
                      <span className={`px-1.5 py-0.5 rounded text-xs ${
                        player.team === 'home' ? 'bg-blue-100 text-blue-800' : 'bg-orange-100 text-orange-800'
                      }`}>
                        {player.team === 'home' ? match.homeTeam.split(' ').pop() : match.awayTeam.split(' ').pop()}
                      </span>
                    </div>
                    <div className="text-gray-600">
                      {match.sport === 'Basketball' && `${player.points} PTS, ${player.rebounds} REB`}
                      {match.sport === 'Soccer' && `${player.goals} G, ${player.assists} A`}
                      {match.sport === 'Volleyball' && `${player.kills} K, ${player.blocks} B`}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* Match Details */}
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center">
            <Users className="w-4 h-4 mr-1" />
            {match.attendance || 'Upcoming'}
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            {match.time}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-2">
          {match.status === 'completed' ? (
            <>
              <button 
                onClick={() => setSelectedMatch(match)}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center"
              >
                <Eye className="w-4 h-4 mr-2" />
                View Details
              </button>
              <button className="flex-1 bg-gray-50 hover:bg-gray-100 text-gray-700 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </button>
            </>
          ) : (
            <button className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center">
              <Calendar className="w-4 h-4 mr-2" />
              Add to Calendar
            </button>
          )}
        </div>
      </div>
    </div>
  );

  // New Calendar View Component
  const CalendarView = () => {
    const daysInMonth = getDaysInMonth(currentMonth);
    const firstDay = getFirstDayOfMonth(currentMonth);
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    // Generate days array including empty cells for previous month
    const days = [];
    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), i);
      days.push(date);
    }

    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Match Calendar</h1>
            <p className="text-gray-600">View all matches and events in calendar format</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <button 
                onClick={() => navigateMonth(-1)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <h2 className="text-xl font-semibold text-gray-900 w-48 text-center">
                {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
              </h2>
              <button 
                onClick={() => navigateMonth(1)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            <button 
              onClick={() => setCurrentMonth(new Date())}
              className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
            >
              Today
            </button>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          {/* Calendar Header */}
          <div className="grid grid-cols-7 bg-gray-50 border-b border-gray-200">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
              <div key={day} className="p-4 text-center font-semibold text-gray-700">
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7">
            {days.map((date, index) => {
              const matchesOnDate = date ? getMatchesForDate(date) : [];
              
              return (
                <div
                  key={index}
                  className={`min-h-32 border-r border-b border-gray-200 p-2 ${
                    !date ? 'bg-gray-50' : isToday(date) ? 'bg-blue-50' : 'bg-white'
                  }`}
                >
                  {date && (
                    <>
                      <div className={`flex items-center justify-between mb-2 ${
                        isToday(date) ? 'text-blue-600 font-semibold' : 'text-gray-900'
                      }`}>
                        <span className="text-sm">{date.getDate()}</span>
                        {matchesOnDate.length > 0 && (
                          <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        )}
                      </div>
                      
                      {/* Matches for this date */}
                      <div className="space-y-1">
                        {matchesOnDate.slice(0, 2).map((match, matchIndex) => (
                          <div
                            key={matchIndex}
                            className={`text-xs p-1 rounded cursor-pointer ${
                              match.status === 'completed' 
                                ? 'bg-green-100 text-green-800 border border-green-200' 
                                : 'bg-blue-100 text-blue-800 border border-blue-200'
                            }`}
                            onClick={() => setSelectedMatch(match)}
                          >
                            <div className="font-medium truncate">
                              {match.homeTeam.split(' ').pop()} vs {match.awayTeam.split(' ').pop()}
                            </div>
                            <div className="text-xs opacity-75">
                              {match.time} • {match.sport}
                            </div>
                          </div>
                        ))}
                        {matchesOnDate.length > 2 && (
                          <div className="text-xs text-gray-500 text-center">
                            +{matchesOnDate.length - 2} more
                          </div>
                        )}
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Legend */}
        <div className="flex items-center justify-center space-x-6 text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-100 border border-green-300 rounded"></div>
            <span className="text-gray-600">Completed Match</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-blue-100 border border-blue-300 rounded"></div>
            <span className="text-gray-600">Upcoming Match</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-blue-50 border-2 border-blue-400 rounded"></div>
            <span className="text-gray-600">Today</span>
          </div>
        </div>

        {/* Upcoming Matches List */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Matches This Month</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {upcomingMatches
              .filter(match => {
                const matchDate = new Date(match.date);
                return matchDate.getMonth() === currentMonth.getMonth() && 
                       matchDate.getFullYear() === currentMonth.getFullYear();
              })
              .map(match => (
                <div key={match.id} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <div>
                    <p className="font-medium text-gray-900">
                      {match.homeTeam} vs {match.awayTeam}
                    </p>
                    <p className="text-sm text-gray-500">
                      {match.date} • {match.time} • {match.location}
                    </p>
                  </div>
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                    {match.sport}
                  </span>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  };

  // View Components
  const OverviewView = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {matchStats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Matches Section */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">Recent Match Results</h2>
            <div className="flex items-center space-x-3">
              <button className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors">
                <Filter className="w-4 h-4" />
                <span>Filter</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {matches.map((match) => (
              <MatchCard key={match.id} match={match} />
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <LeaderboardTable />
          <QuickStats />
        </div>
      </div>
    </div>
  );

  const StatisticsView = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Statistics & Analytics</h1>
          <p className="text-gray-600">Detailed performance metrics and insights</p>
        </div>
        <div className="flex items-center space-x-3">
          <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
            <option>This Season</option>
            <option>Last Season</option>
            <option>All Time</option>
          </select>
          <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors">
            <Download className="w-4 h-4" />
            <span>Export Report</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Scorers */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <Crown className="w-5 h-5 mr-2 text-yellow-500" />
            Top Performers
          </h3>
          <div className="space-y-4">
            {statistics.topScorers.map((player, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold ${
                    index === 0 ? 'bg-yellow-500' : 
                    index === 1 ? 'bg-gray-400' : 
                    index === 2 ? 'bg-orange-500' : 'bg-blue-500'
                  }`}>
                    {index + 1}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{player.name}</p>
                    <p className="text-sm text-gray-500">{player.team}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-gray-900">
                    {player.points || player.goals || player.kills} {player.points ? 'PTS' : player.goals ? 'G' : 'K'}
                  </p>
                  <p className="text-sm text-gray-500">{player.avg} avg</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Statistics */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <BarChart className="w-5 h-5 mr-2 text-blue-500" />
            Team Statistics
          </h3>
          <div className="space-y-3">
            {statistics.teamStats.map((team, index) => (
              <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {team.team.slice(0, 2)}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{team.team}</p>
                    <p className="text-sm text-gray-500">{team.wins}W - {team.losses}L</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-gray-900">{team.diff}</p>
                  <p className="text-sm text-gray-500">{team.pointsFor} : {team.pointsAgainst}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Attendance Stats */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <Users className="w-5 h-5 mr-2 text-green-500" />
            Attendance Statistics
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-4 bg-blue-50 rounded-xl">
              <p className="text-2xl font-bold text-blue-600">{statistics.attendance.total}</p>
              <p className="text-sm text-blue-600">Total Attendance</p>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-xl">
              <p className="text-2xl font-bold text-green-600">{statistics.attendance.average}</p>
              <p className="text-sm text-green-600">Average per Match</p>
            </div>
            <div className="text-center p-4 bg-yellow-50 rounded-xl">
              <p className="text-2xl font-bold text-yellow-600">{statistics.attendance.highest}</p>
              <p className="text-sm text-yellow-600">Highest Attendance</p>
            </div>
            <div className="text-center p-4 bg-red-50 rounded-xl">
              <p className="text-2xl font-bold text-red-600">{statistics.attendance.lowest}</p>
              <p className="text-sm text-red-600">Lowest Attendance</p>
            </div>
          </div>
        </div>

        {/* Performance Trends */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <LineChart className="w-5 h-5 mr-2 text-purple-500" />
            Performance Trends
          </h3>
          <div className="space-y-4">
            {[
              { metric: 'Win Percentage', current: '68%', trend: 'up', change: '+5%' },
              { metric: 'Points Per Game', current: '72.5', trend: 'up', change: '+3.2' },
              { metric: 'Defense Rating', current: '64.8', trend: 'down', change: '-2.1' },
              { metric: 'Fan Engagement', current: '89%', trend: 'up', change: '+12%' }
            ].map((trend, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-gray-600">{trend.metric}</span>
                <div className="flex items-center space-x-2">
                  <span className="font-semibold text-gray-900">{trend.current}</span>
                  <div className={`flex items-center ${trend.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                    {trend.trend === 'up' ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                    <span className="text-sm">{trend.change}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const TeamsView = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Teams & Rosters</h1>
          <p className="text-gray-600">Manage team information and player rosters</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors">
            <Filter className="w-4 h-4" />
            <span>Filter</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors">
            <Plus className="w-4 h-4" />
            <span>Add Team</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teams.map((team) => (
          <div key={team.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
            <div className="p-6">
              {/* Team Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold">
                    {team.name.slice(0, 2)}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{team.name}</h3>
                    <p className="text-sm text-gray-500">{team.school}</p>
                  </div>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  team.streak.startsWith('W') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                  {team.streak}
                </span>
              </div>

              {/* Team Info */}
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Sport:</span>
                  <span className="font-medium">{team.sport}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Coach:</span>
                  <span className="font-medium">{team.coach}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Record:</span>
                  <span className="font-medium text-green-600">{team.record}</span>
                </div>
              </div>

              {/* Key Players */}
              <div className="mb-4">
                <p className="text-sm font-medium text-gray-700 mb-2">Key Players</p>
                <div className="space-y-2">
                  {team.players.slice(0, 2).map((player, index) => (
                    <div key={index} className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-2">
                        <User className="w-3 h-3 text-gray-400" />
                        <span className="font-medium">{player.name}</span>
                      </div>
                      <span className="text-gray-600">
                        {team.sport === 'Basketball' && `${player.points} PPG`}
                        {team.sport === 'Soccer' && `${player.goals} G`}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-2">
                <button 
                  onClick={() => {
                    setSelectedTeam(team);
                    setShowTeamDetails(true);
                  }}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  View Team
                </button>
                <button className="p-2 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-lg transition-colors">
                  <Edit className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const ScheduleView = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Upcoming Schedule</h1>
          <p className="text-gray-600">Future matches and events calendar</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors">
            <Filter className="w-4 h-4" />
            <span>Filter</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors">
            <Plus className="w-4 h-4" />
            <span>Add Event</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upcoming Matches */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-900">Upcoming Matches</h2>
          {upcomingMatches.map((match) => (
            <MatchCard key={match.id} match={match} />
          ))}
        </div>

        {/* Calendar View */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">February 2024</h3>
          <div className="grid grid-cols-7 gap-2 mb-4">
            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
              <div key={index} className="text-center text-sm font-medium text-gray-500 py-2">
                {day}
              </div>
            ))}
            {[
              null, null, null, null, 1, 2, 3,
              4, 5, 6, 7, 8, 9, 10,
              11, 12, 13, 14, 15, 16, 17,
              18, 19, 20, 21, 22, 23, 24,
              25, 26, 27, 28, 29
            ].map((date, index) => (
              <div
                key={index}
                className={`text-center p-2 rounded-lg text-sm ${
                  date === 1 || date === 8 ? 'bg-blue-100 text-blue-600 font-semibold' :
                  date ? 'text-gray-900 hover:bg-gray-100 cursor-pointer' : 'text-gray-300'
                }`}
              >
                {date}
              </div>
            ))}
          </div>

          {/* Key Events */}
          <div className="space-y-3">
            <h4 className="font-semibold text-gray-900">Key Events</h4>
            {[
              { date: 'Feb 1', event: 'Lions vs Bears - Basketball', type: 'match' },
              { date: 'Feb 2', event: 'Eagles vs Tigers - Soccer', type: 'match' },
              { date: 'Feb 8', event: 'Sharks vs Lions - Volleyball', type: 'match' },
              { date: 'Feb 15', event: 'Mid-season Break', type: 'break' }
            ].map((event, index) => (
              <div key={index} className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  event.type === 'match' ? 'bg-blue-100 text-blue-600' : 'bg-yellow-100 text-yellow-600'
                }`}>
                  <Calendar className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">{event.event}</p>
                  <p className="text-sm text-gray-500">{event.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  // Helper Components
  const LeaderboardTable = () => (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
      <div className="p-6 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">School Leaderboard</h3>
      </div>
      <div className="p-6">
        <div className="space-y-3">
          {leaderboard.map((team) => (
            <div key={team.rank} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
              <div className="flex items-center space-x-4">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold ${
                  team.rank === 1 ? 'bg-yellow-500' : 
                  team.rank === 2 ? 'bg-gray-400' : 
                  team.rank === 3 ? 'bg-orange-500' : 'bg-blue-500'
                }`}>
                  {team.rank}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{team.team}</p>
                  <p className="text-sm text-gray-500">{team.school}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-gray-900">{team.points} pts</p>
                <p className="text-sm text-gray-500">{team.wins}W - {team.losses}L • <span className={
                  team.streak.startsWith('W') ? 'text-green-600' : 'text-red-600'
                }>{team.streak}</span></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const QuickStats = () => (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Stats</h3>
      <div className="space-y-4">
        {[
          { label: 'Close Games (<5 pts)', value: '8', change: '+2' },
          { label: 'Overtime Matches', value: '3', change: '+1' },
          { label: 'Record Attendance', value: '320', match: 'Lions vs Eagles' },
          { label: 'Avg. Points/Game', value: '68.5', change: '+4.2' }
        ].map((stat, index) => (
          <div key={index} className="flex items-center justify-between">
            <span className="text-gray-600 text-sm">{stat.label}</span>
            <div className="text-right">
              <p className="font-semibold text-gray-900">{stat.value}</p>
              {stat.change && (
                <p className={`text-xs ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                  {stat.change}
                </p>
              )}
              {stat.match && (
                <p className="text-xs text-gray-500">{stat.match}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const TeamDetailModal = ({ team, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{team.name}</h2>
              <p className="text-gray-600">{team.school} • {team.sport}</p>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <MoreVertical className="w-5 h-5 text-gray-500" />
            </button>
          </div>
        </div>

        <div className="p-6">
          {/* Team Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-6 text-white">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-bold">{team.name}</h3>
                    <p className="text-blue-100">Coach: {team.coach}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold">{team.record}</div>
                    <p className="text-blue-100">Current Record</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <p className="text-lg font-semibold">Points For</p>
                    <p className="text-blue-100">{team.pointsFor}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-semibold">Points Against</p>
                    <p className="text-blue-100">{team.pointsAgainst}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-xl p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Team Stats</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Current Streak:</span>
                    <span className={`font-medium ${
                      team.streak.startsWith('W') ? 'text-green-600' : 'text-red-600'
                    }`}>{team.streak}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Win Percentage:</span>
                    <span className="font-medium">{
                      Math.round((team.wins / (parseInt(team.wins) + parseInt(team.losses))) * 100)
                    }%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Player Roster */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Player Roster</h3>
            <div className="space-y-3">
              {team.players.map((player, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                      {player.number}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{player.name}</p>
                      <p className="text-sm text-gray-500">{player.position}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    {team.sport === 'Basketball' && (
                      <div className="space-y-1">
                        <p className="font-semibold text-gray-900">{player.points} PPG</p>
                        <p className="text-sm text-gray-500">{player.rebounds} RPG, {player.assists} APG</p>
                      </div>
                    )}
                    {team.sport === 'Soccer' && (
                      <div className="space-y-1">
                        <p className="font-semibold text-gray-900">{player.goals} Goals</p>
                        <p className="text-sm text-gray-500">{player.assists} Assists</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Matches */}
          {team.upcomingMatches && team.upcomingMatches.length > 0 && (
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Matches</h3>
              <div className="space-y-3">
                {team.upcomingMatches.map((match, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900">vs {match.opponent}</p>
                      <p className="text-sm text-gray-500">{match.date} • {match.location}</p>
                    </div>
                    <button className="px-3 py-1 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition-colors">
                      Details
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="p-6 border-t border-gray-200 bg-gray-50 rounded-b-2xl">
          <div className="flex space-x-3">
            <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors">
              Download Roster
            </button>
            <button className="flex-1 bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 py-3 rounded-lg font-medium transition-colors">
              Edit Team
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderActiveView = () => {
    switch (activeTab) {
      case 'overview': return <OverviewView />;
      case 'matches': return <OverviewView />;
      case 'leaderboard': return <OverviewView />;
      case 'statistics': return <StatisticsView />;
      case 'teams': return <TeamsView />;
      case 'schedule': return <ScheduleView />;
      case 'calendar': return <CalendarView />;
      default: return <OverviewView />;
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
                <h1 className="text-xl font-bold text-gray-900">SportResults</h1>
                <p className="text-xs text-gray-500">Match Dashboard</p>
              </div>
            )}
          </div>
        </div>

        <nav className="flex-1 mt-6">
          {[
            { name: 'Results Overview', icon: BarChart3, id: 'overview' },
            { name: 'All Matches', icon: Trophy, id: 'matches' },
            { name: 'Leaderboard', icon: Award, id: 'leaderboard' },
            { name: 'Statistics', icon: Activity, id: 'statistics' },
            { name: 'Teams', icon: Users, id: 'teams' },
            { name: 'Schedule', icon: Calendar, id: 'schedule' },
            { name: 'Calendar', icon: Grid, id: 'calendar' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center px-6 py-3 text-left transition-all duration-200 ${
                activeTab === item.id
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
            <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-xl p-4 text-white">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-medium">24 Matches</p>
                  <p className="text-xs opacity-90">This month</p>
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
                  placeholder="Search matches, teams, results..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-80 transition-all"
                />
              </div>
              
              <div className="flex bg-gray-100 rounded-lg p-1">
                {sports.map((sport) => (
                  <button
                    key={sport}
                    onClick={() => setActiveTab(sport)}
                    className={`px-3 py-1 rounded-md text-sm font-medium capitalize transition-colors ${
                      activeTab === sport
                        ? 'bg-white text-gray-900 shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {sport}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">Time Range:</span>
                <select 
                  value={timeRange}
                  onChange={(e) => setTimeRange(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-1 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="week">This Week</option>
                  <option value="month">This Month</option>
                  <option value="season">This Season</option>
                  <option value="all">All Time</option>
                </select>
              </div>
              
              <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors">
                <Download className="w-4 h-4" />
                <span>Export Data</span>
              </button>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto p-6">
          {renderActiveView()}
        </main>
      </div>

      {/* Match Detail Modal */}
      {selectedMatch && (
        <MatchDetailModal 
          match={selectedMatch} 
          onClose={() => setSelectedMatch(null)} 
        />
      )}

      {/* Team Detail Modal */}
      {showTeamDetails && (
        <TeamDetailModal 
          team={selectedTeam} 
          onClose={() => setShowTeamDetails(false)} 
        />
      )}
    </div>
  );
};

// Add the missing MatchDetailModal component
const MatchDetailModal = ({ match, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
    <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">Match Details</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <MoreVertical className="w-5 h-5 text-gray-500" />
          </button>
        </div>
      </div>

      <div className="p-6">
        {/* Match Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-6 text-white">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold">{match.homeTeam} vs {match.awayTeam}</h3>
                  <p className="text-blue-100">{match.sport} • {match.date} • {match.location}</p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold">{match.homeScore} - {match.awayScore}</div>
                  <p className="text-blue-100">{match.quarter}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <p className="text-lg font-semibold">{match.homeTeam}</p>
                  <p className="text-blue-100">Record: {match.homeRecord}</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-semibold">{match.awayTeam}</p>
                  <p className="text-blue-100">Record: {match.awayRecord}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-xl p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Match Info</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Attendance:</span>
                  <span className="font-medium">{match.attendance}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Duration:</span>
                  <span className="font-medium">2 hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Officials:</span>
                  <span className="font-medium">3 referees</span>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
              <h4 className="font-semibold text-yellow-900 mb-2">Match Highlight</h4>
              <p className="text-sm text-yellow-800">{match.highlight}</p>
            </div>
          </div>
        </div>

        {/* Player Statistics */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Player Statistics</h3>
          <div className="space-y-4">
            {match.topPerformers.map((player, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    {player.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{player.name}</p>
                    <p className="text-sm text-gray-500">
                      {player.team === 'home' ? match.homeTeam : match.awayTeam}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  {match.sport === 'Basketball' && (
                    <div className="space-y-1">
                      <p className="font-semibold text-gray-900">{player.points} points</p>
                      <p className="text-sm text-gray-500">{player.rebounds} rebounds, {player.assists} assists</p>
                    </div>
                  )}
                  {match.sport === 'Soccer' && (
                    <div className="space-y-1">
                      <p className="font-semibold text-gray-900">{player.goals} goals</p>
                      <p className="text-sm text-gray-500">{player.assists} assists, {player.saves} saves</p>
                    </div>
                  )}
                  {match.sport === 'Volleyball' && (
                    <div className="space-y-1">
                      <p className="font-semibold text-gray-900">{player.kills} kills</p>
                      <p className="text-sm text-gray-500">{player.blocks} blocks, {player.aces} aces</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quarter/Period Breakdown */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Game Progression</h3>
          <div className="space-y-3">
            {[
              { period: 'Q1', home: 18, away: 16 },
              { period: 'Q2', home: 20, away: 18 },
              { period: 'Q3', home: 17, away: 19 },
              { period: 'Q4', home: 17, away: 15 }
            ].map((quarter, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="w-8 text-sm font-medium text-gray-600">{quarter.period}</span>
                <div className="flex-1 flex items-center justify-center space-x-4">
                  <span className="text-sm font-medium">{quarter.home}</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: `${(quarter.home / (quarter.home + quarter.away)) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium">{quarter.away}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="p-6 border-t border-gray-200 bg-gray-50 rounded-b-2xl">
        <div className="flex space-x-3">
          <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors flex items-center justify-center">
            <Download className="w-5 h-5 mr-2" />
            Download Report
          </button>
          <button className="flex-1 bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 py-3 rounded-lg font-medium transition-colors flex items-center justify-center">
            <Share2 className="w-5 h-5 mr-2" />
            Share Results
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default ResultsDashboard;