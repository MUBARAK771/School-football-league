// OfficialsDashboard.js - Enhanced with Live Game Controls
import React, { useState, useEffect, useRef } from 'react';
import {
  Users,
  Trophy,
  Calendar,
  UserRound, 
  MapPin,
  Clock,
  Flag,
  Award,
  FileText,
  Download,
  Bell,
  Search,
  Filter,
  ChevronDown,
  User,
  Settings,
  BarChart3,
  Eye,
  Edit,
  CheckCircle,
  XCircle,
  Star,
  Play,
  Pause,
  RotateCcw,
  AlertTriangle,
  Zap,
  TrendingUp,
  DollarSign,
  BookOpen,
  Video,
  MessageSquare,
  Shield,
  Plus,
  Minus,
  ShoppingBag // Add this import
} from 'lucide-react';

const OfficialsDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedGame, setSelectedGame] = useState(null);
  const [liveGame, setLiveGame] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [gameTime, setGameTime] = useState(0); // Time in seconds
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [quarter, setQuarter] = useState(1);
  const timerRef = useRef(null);

  // Mock data
  const officialStats = [
    { title: 'Games Officiated', value: '48', change: '+12%', icon: Trophy, color: 'blue' },
    { title: 'Upcoming Games', value: '8', change: '+2', icon: Calendar, color: 'green' },
    { title: 'Avg. Rating', value: '4.8/5', change: '+0.2', icon: Star, color: 'yellow' },
    { title: 'Earnings', value: '$2,480', change: '+$320', icon: DollarSign, color: 'purple' }
  ];

  const games = [
    {
      id: 1,
      homeTeam: 'North High Lions',
      awayTeam: 'South High Tigers',
      sport: 'Basketball',
      date: '2024-01-25',
      time: '4:00 PM',
      location: 'Main Gym',
      status: 'upcoming',
      role: 'Head Referee',
      level: 'Varsity',
      pay: '$120',
      duration: '2 hours',
      assignedOfficials: [
        { id: 1, name: 'John Smith', role: 'Head Referee', status: 'confirmed', phone: '+1-555-0101' },
        { id: 2, name: 'Maria Garcia', role: 'Umpire', status: 'confirmed', phone: '+1-555-0102' },
        { id: 3, name: 'David Lee', role: 'Line Judge', status: 'pending', phone: '+1-555-0103' }
      ]
    },
    {
      id: 2,
      homeTeam: 'East High Eagles',
      awayTeam: 'West High Bears',
      sport: 'Soccer',
      date: '2024-01-26',
      time: '5:30 PM',
      location: 'Sports Field',
      status: 'upcoming',
      role: 'Center Referee',
      level: 'JV',
      pay: '$90',
      duration: '1.5 hours',
      assignedOfficials: [
        { id: 1, name: 'John Smith', role: 'Center Referee', status: 'confirmed', phone: '+1-555-0101' },
        { id: 2, name: 'Robert Brown', role: 'Assistant Referee', status: 'confirmed', phone: '+1-555-0104' }
      ]
    },
    {
      id: 3,
      homeTeam: 'Central High',
      awayTeam: 'West High Bears',
      sport: 'Volleyball',
      date: '2024-01-23',
      time: '6:00 PM',
      location: 'East Gym',
      status: 'completed',
      role: 'Head Referee',
      level: 'Varsity',
      score: '3-1',
      rating: 4.8,
      pay: '$110',
      feedback: 'Excellent game control and communication',
      assignedOfficials: [
        { id: 1, name: 'John Smith', role: 'Head Referee', status: 'completed', phone: '+1-555-0101' },
        { id: 2, name: 'Sarah Johnson', role: 'Line Judge', status: 'completed', phone: '+1-555-0105' }
      ]
    }
  ];

  const certifications = [
    { id: 1, name: 'NFHS Basketball Official', level: 'Level 2', expires: '2024-12-31', status: 'active', badge: '🟢' },
    { id: 2, name: 'US Soccer Federation Referee', level: 'Grade 7', expires: '2024-08-15', status: 'active', badge: '🟢' },
    { id: 3, name: 'NFHS Volleyball Official', level: 'Level 1', expires: '2024-06-30', status: 'active', badge: '🟢' },
    { id: 4, name: 'First Aid & CPR Certified', level: 'Basic', expires: '2024-03-31', status: 'expiring', badge: '🟡' }
  ];

  const performanceData = [
    { metric: 'Call Accuracy', value: '94%', change: '+2%', trend: 'up' },
    { metric: 'Game Control', value: '4.7/5', change: '+0.3', trend: 'up' },
    { metric: 'Rule Knowledge', value: '96%', change: '+1%', trend: 'up' },
    { metric: 'Coach Satisfaction', value: '4.8/5', change: '+0.2', trend: 'up' }
  ];

  const quickActions = [
    { label: 'Submit Game Report', icon: FileText, color: 'blue' },
    { label: 'View Rulebook', icon: BookOpen, color: 'green' },
    { label: 'Training Videos', icon: Video, color: 'purple' },
    { label: 'Contact Assignor', icon: MessageSquare, color: 'orange' }
  ];

  // Timer functionality
  useEffect(() => {
    if (isTimerRunning) {
      timerRef.current = setInterval(() => {
        setGameTime(prev => {
          if (prev <= 0) {
            setIsTimerRunning(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }

    return () => clearInterval(timerRef.current);
  }, [isTimerRunning]);

  // Format time as MM:SS
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Custom Whistle Icon Component
  const Whistle = ({ className, ...props }) => (
    <svg 
      className={className} 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24" 
      {...props}
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth={2} 
        d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 001.414-1.414m-1.414-2.828a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728M9.172 9.172a1 1 0 000 1.414m1.414-1.414a1 1 0 00-1.414 0"
      />
    </svg>
  );

  // Enhanced Live Game Panel with Timer and Foul Tracking
  const LiveGamePanel = ({ game, onEndGame }) => {
    const [homeScore, setHomeScore] = useState(0);
    const [awayScore, setAwayScore] = useState(0);
    const [homeFouls, setHomeFouls] = useState(0);
    const [awayFouls, setAwayFouls] = useState(0);
    const [timeouts, setTimeouts] = useState({ home: 3, away: 3 });
    const [gameEvents, setGameEvents] = useState([]);

    // Initialize game time based on sport
    useEffect(() => {
      if (game.sport === 'Basketball') {
        setGameTime(600); // 10 minutes per quarter
      } else if (game.sport === 'Soccer') {
        setGameTime(2700); // 45 minutes per half
      } else {
        setGameTime(1200); // 20 minutes for other sports
      }
    }, [game.sport]);

    const addFoul = (team) => {
      if (team === 'home') {
        setHomeFouls(prev => prev + 1);
        addGameEvent(`${game.homeTeam} foul`, 'foul');
      } else {
        setAwayFouls(prev => prev + 1);
        addGameEvent(`${game.awayTeam} foul`, 'foul');
      }
    };

    const addTimeout = (team) => {
      if (timeouts[team] > 0) {
        setTimeouts(prev => ({ ...prev, [team]: prev[team] - 1 }));
        addGameEvent(`${team === 'home' ? game.homeTeam : game.awayTeam} timeout`, 'timeout');
        setIsTimerRunning(false); // Pause timer during timeout
      }
    };

    const addGameEvent = (description, type) => {
      const event = {
        id: Date.now(),
        time: formatTime(gameTime),
        description,
        type,
        quarter
      };
      setGameEvents(prev => [event, ...prev]);
    };

    const handleScore = (team, points) => {
      if (team === 'home') {
        setHomeScore(prev => prev + points);
        addGameEvent(`${game.homeTeam} scores ${points} points`, 'score');
      } else {
        setAwayScore(prev => prev + points);
        addGameEvent(`${game.awayTeam} scores ${points} points`, 'score');
      }
    };

    const nextQuarter = () => {
      if (quarter < 4) {
        setQuarter(prev => prev + 1);
        // Reset timer for new quarter
        if (game.sport === 'Basketball') {
          setGameTime(600); // 10 minutes
        }
        addGameEvent(`Quarter ${quarter + 1} starts`, 'quarter');
        setIsTimerRunning(false); // Pause at quarter start
      }
    };

    const handleEndGame = () => {
      setIsTimerRunning(false);
      const completedGame = {
        ...game,
        score: `${homeScore}-${awayScore}`,
        status: 'completed',
        homeFouls,
        awayFouls,
        gameEvents,
        finalTime: formatTime(gameTime),
        quarters: quarter
      };
      onEndGame(completedGame);
    };

    const addTime = (seconds) => {
      setGameTime(prev => prev + seconds);
    };

    const resetTimer = () => {
      if (game.sport === 'Basketball') {
        setGameTime(600); // 10 minutes
      }
      setIsTimerRunning(false);
    };

    return (
      <div className="bg-white rounded-2xl shadow-lg border-2 border-red-500">
        <div className="bg-red-500 text-white p-4 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
              <span className="font-semibold">LIVE GAME - Q{quarter}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5" />
              <span className="font-mono text-lg">{formatTime(gameTime)}</span>
            </div>
          </div>
        </div>
        
        <div className="p-6">
          {/* Score Display */}
          <div className="text-center mb-6">
            <div className="flex items-center justify-center space-x-6 mb-4">
              <div className="text-center">
                <p className="font-bold text-lg">{game.homeTeam}</p>
                <p className="text-3xl font-bold text-gray-900">{homeScore}</p>
                <div className="flex items-center justify-center space-x-2 mt-1">
                  <span className="text-sm text-red-600">{homeFouls} F</span>
                  <span className="text-sm text-blue-600">{timeouts.home} TO</span>
                </div>
              </div>
              <div className="text-gray-500 text-xl">VS</div>
              <div className="text-center">
                <p className="font-bold text-lg">{game.awayTeam}</p>
                <p className="text-3xl font-bold text-gray-900">{awayScore}</p>
                <div className="flex items-center justify-center space-x-2 mt-1">
                  <span className="text-sm text-red-600">{awayFouls} F</span>
                  <span className="text-sm text-blue-600">{timeouts.away} TO</span>
                </div>
              </div>
            </div>
          </div>

          {/* Timer Controls */}
          <div className="grid grid-cols-4 gap-2 mb-6">
            <button 
              onClick={() => setIsTimerRunning(!isTimerRunning)}
              className={`py-2 rounded-lg font-semibold transition-colors flex items-center justify-center ${
                isTimerRunning 
                  ? 'bg-yellow-600 hover:bg-yellow-700 text-white' 
                  : 'bg-green-600 hover:bg-green-700 text-white'
              }`}
            >
              {isTimerRunning ? <Pause className="w-4 h-4 mr-1" /> : <Play className="w-4 h-4 mr-1" />}
              {isTimerRunning ? 'Pause' : 'Start'}
            </button>
            <button 
              onClick={() => addTime(30)}
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition-colors"
            >
              +30s
            </button>
            <button 
              onClick={resetTimer}
              className="bg-gray-600 hover:bg-gray-700 text-white py-2 rounded-lg font-semibold transition-colors flex items-center justify-center"
            >
              <RotateCcw className="w-4 h-4 mr-1" />
              Reset
            </button>
            <button 
              onClick={nextQuarter}
              disabled={quarter >= 4}
              className={`py-2 rounded-lg font-semibold transition-colors flex items-center justify-center ${
                quarter >= 4 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-purple-600 hover:bg-purple-700 text-white'
              }`}
            >
              Next Q
            </button>
          </div>

          {/* Score Controls */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="space-y-2">
              <p className="text-sm font-medium text-gray-700 text-center">{game.homeTeam} Score</p>
              <div className="grid grid-cols-3 gap-2">
                <button onClick={() => handleScore('home', 1)} className="bg-green-600 hover:bg-green-700 text-white py-2 rounded text-sm font-medium">
                  +1
                </button>
                <button onClick={() => handleScore('home', 2)} className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded text-sm font-medium">
                  +2
                </button>
                <button onClick={() => handleScore('home', 3)} className="bg-purple-600 hover:bg-purple-700 text-white py-2 rounded text-sm font-medium">
                  +3
                </button>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium text-gray-700 text-center">{game.awayTeam} Score</p>
              <div className="grid grid-cols-3 gap-2">
                <button onClick={() => handleScore('away', 1)} className="bg-green-600 hover:bg-green-700 text-white py-2 rounded text-sm font-medium">
                  +1
                </button>
                <button onClick={() => handleScore('away', 2)} className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded text-sm font-medium">
                  +2
                </button>
                <button onClick={() => handleScore('away', 3)} className="bg-purple-600 hover:bg-purple-700 text-white py-2 rounded text-sm font-medium">
                  +3
                </button>
              </div>
            </div>
          </div>

          {/* Foul and Timeout Controls */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="space-y-2">
              <button 
                onClick={() => addFoul('home')}
                className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded text-sm font-medium transition-colors flex items-center justify-center"
              >
                <Flag className="w-4 h-4 mr-2" />
                {game.homeTeam} Foul
              </button>
              <button 
                onClick={() => addTimeout('home')}
                disabled={timeouts.home === 0}
                className={`w-full py-2 rounded text-sm font-medium transition-colors flex items-center justify-center ${
                  timeouts.home === 0 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}
              >
                <Zap className="w-4 h-4 mr-2" />
                {game.homeTeam} TO ({timeouts.home})
              </button>
            </div>
            <div className="space-y-2">
              <button 
                onClick={() => addFoul('away')}
                className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded text-sm font-medium transition-colors flex items-center justify-center"
              >
                <Flag className="w-4 h-4 mr-2" />
                {game.awayTeam} Foul
              </button>
              <button 
                onClick={() => addTimeout('away')}
                disabled={timeouts.away === 0}
                className={`w-full py-2 rounded text-sm font-medium transition-colors flex items-center justify-center ${
                  timeouts.away === 0 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}
              >
                <Zap className="w-4 h-4 mr-2" />
                {game.awayTeam} TO ({timeouts.away})
              </button>
            </div>
          </div>

          {/* Game Events Log */}
          <div className="mb-6">
            <h4 className="font-semibold text-gray-900 mb-3">Game Events</h4>
            <div className="max-h-32 overflow-y-auto space-y-2">
              {gameEvents.map((event) => (
                <div key={event.id} className="flex items-center justify-between text-sm p-2 bg-gray-50 rounded">
                  <span className="text-gray-600">{event.time}</span>
                  <span className={`font-medium ${
                    event.type === 'foul' ? 'text-red-600' :
                    event.type === 'score' ? 'text-green-600' :
                    event.type === 'timeout' ? 'text-blue-600' : 'text-gray-600'
                  }`}>
                    {event.description}
                  </span>
                  <span className="text-gray-500">Q{event.quarter}</span>
                </div>
              ))}
              {gameEvents.length === 0 && (
                <p className="text-gray-500 text-center py-4">No events recorded yet</p>
              )}
            </div>
          </div>

          {/* End Game Button */}
          <button 
            onClick={handleEndGame}
            className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center"
          >
            <Flag className="w-5 h-5 mr-2" />
            End Game
          </button>
        </div>
      </div>
    );
  };

  // Components
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
        <div className={`p-3 rounded-xl bg-${color}-100`}>
          <Icon className={`w-6 h-6 text-${color}-600`} />
        </div>
      </div>
    </div>
  );

  const GameCard = ({ game, onViewDetails, onStartGame }) => {
    const handleStartGame = () => {
      setGameTime(600); // Reset to 10 minutes for basketball
      setIsTimerRunning(false); // Start paused
      setQuarter(1); // Reset to first quarter
      onStartGame(game);
    };

    return (
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
        <div className="p-6">
          {/* Game Header */}
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center space-x-2">
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                game.status === 'completed' 
                  ? 'bg-green-100 text-green-800' 
                  : game.status === 'live'
                  ? 'bg-red-100 text-red-800'
                  : 'bg-blue-100 text-blue-800'
              }`}>
                {game.status === 'completed' ? 'Completed' : game.status === 'live' ? 'Live' : 'Upcoming'}
              </span>
              <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
                {game.level}
              </span>
              <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                {game.pay}
              </span>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">{game.date}</p>
              <p className="text-xs text-gray-400">{game.time}</p>
            </div>
          </div>

          {/* Teams and Score */}
          <div className="flex items-center justify-between mb-4">
            <div className="text-center flex-1">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-2 shadow-md">
                <Trophy className="w-5 h-5 text-white" />
              </div>
              <p className="font-semibold text-gray-900 text-sm">{game.homeTeam}</p>
            </div>
            
            <div className="text-center mx-4">
              <div className="text-xl font-bold text-gray-900 bg-gray-50 px-4 py-2 rounded-lg">
                {game.score || 'VS'}
              </div>
              <p className="text-xs text-gray-500 mt-1 bg-gray-100 px-2 py-1 rounded-full">{game.sport}</p>
            </div>
            
            <div className="text-center flex-1">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-2 shadow-md">
                <Users className="w-5 h-5 text-white" />
              </div>
              <p className="font-semibold text-gray-900 text-sm">{game.awayTeam}</p>
            </div>
          </div>

          {/* Game Details */}
          <div className="space-y-2 mb-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500">Your Role:</span>
              <span className="font-semibold text-gray-900">{game.role}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500">Location:</span>
              <span className="font-medium text-gray-900 flex items-center">
                <MapPin className="w-3 h-3 mr-1" />
                {game.location}
              </span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500">Duration:</span>
              <span className="font-medium text-gray-900">{game.duration}</span>
            </div>
            {game.rating && (
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">Rating:</span>
                <span className="font-semibold text-yellow-600 flex items-center">
                  <Star className="w-3 h-3 mr-1 fill-current" />
                  {game.rating}/5
                </span>
              </div>
            )}
          </div>

          {/* Assigned Officials */}
          <div className="mb-4">
            <p className="text-sm font-medium text-gray-700 mb-2">Officiating Crew:</p>
            <div className="flex -space-x-2">
              {game.assignedOfficials.map((official, index) => (
                <div key={official.id} className="relative group">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold ${
                    official.status === 'confirmed' ? 'bg-green-500' : 
                    official.status === 'pending' ? 'bg-yellow-500' : 'bg-gray-400'
                  }`}>
                    {official.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {official.name} - {official.role}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-2">
            {game.status === 'upcoming' ? (
              <>
                <button 
                  onClick={handleStartGame}
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center"
                >
                  <Play className="w-4 h-4 mr-2" />
                  Start Game
                </button>
                <button 
                  onClick={() => onViewDetails(game)}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center"
                >
                  <Eye className="w-4 h-4 mr-2" />
                  Details
                </button>
              </>
            ) : game.status === 'completed' ? (
              <>
                <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center">
                  <FileText className="w-4 h-4 mr-2" />
                  View Report
                </button>
                <button className="flex-1 bg-gray-500 hover:bg-gray-600 text-white py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  Analytics
                </button>
              </>
            ) : (
              <button className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center">
                <Pause className="w-4 h-4 mr-2" />
                Live Game Active
              </button>
            )}
          </div>
        </div>
      </div>
    );
  };

  // Handle game actions
  const handleStartGame = (game) => {
    setLiveGame({ ...game, status: 'live' });
  };

  const handleEndGame = (completedGame) => {
    setLiveGame(null);
    setIsTimerRunning(false);
    setGameTime(0);
    setQuarter(1);
    
    // Update the games array with completed game
    const updatedGames = games.map(g => 
      g.id === completedGame.id ? completedGame : g
    );
    console.log('Game completed:', completedGame);
    console.log('Updated games:', updatedGames);
  };

  // View Components
  const DashboardView = () => (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Welcome back, John!</h1>
            <p className="text-blue-100 mt-2">Ready to officiate your next game? You have 2 upcoming assignments.</p>
          </div>
          <div className="w-20 h-20 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center cursor-pointer relative">
            <input type="file" name="" id="profile-upload" className="w-5 absolute opacity-0 cursor-pointer" />
            <UserRound className="text-blue-900" />
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {officialStats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Upcoming Games */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">Upcoming Games</h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {games.filter(g => g.status === 'upcoming').map((game) => (
                  <div key={game.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:border-blue-300 transition-colors">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                        <Whistle className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{game.homeTeam} vs {game.awayTeam}</h3>
                        <p className="text-sm text-gray-500">{game.sport} • {game.role}</p>
                        <div className="flex items-center space-x-4 mt-1 text-xs text-gray-500">
                          <span className="flex items-center">
                            <Calendar className="w-3 h-3 mr-1" />
                            {game.date}
                          </span>
                          <span className="flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            {game.time}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                        {game.pay}
                      </span>
                      <p className="text-sm text-gray-500 mt-1">{game.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions & Performance */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-3">
              {quickActions.map((action, index) => (
                <button key={index} className="flex flex-col items-center p-3 border border-gray-200 rounded-xl hover:border-blue-500 hover:bg-blue-50 transition-colors">
                  <action.icon className={`w-6 h-6 text-${action.color}-600 mb-2`} />
                  <span className="text-sm font-medium text-gray-700 text-center">{action.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Performance Metrics */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance</h3>
            <div className="space-y-4">
              {performanceData.map((stat, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-gray-600">{stat.metric}</span>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">{stat.value}</p>
                    <p className={`text-sm ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                      {stat.change}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const GamesView = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Game Assignments</h1>
          <p className="text-gray-600">Manage your officiating schedule and game reports</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors">
            <Filter className="w-4 h-4" />
            <span>Filter</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors">
            <Download className="w-4 h-4" />
            <span>Export Schedule</span>
          </button>
        </div>
      </div>

      {liveGame && (
        <div className="mb-6">
          <LiveGamePanel 
            game={liveGame} 
            onEndGame={handleEndGame}
          />
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {games.map((game) => (
          <GameCard 
            key={game.id} 
            game={game}
            onViewDetails={setSelectedGame}
            onStartGame={handleStartGame}
          />
        ))}
      </div>
    </div>
  );

  const CertificationsView = () => (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">My Certifications</h1>
        <p className="text-gray-600">Manage your officiating credentials and training</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert) => (
          <div key={cert.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-semibold text-gray-900">{cert.name}</h3>
                <p className="text-sm text-gray-500">{cert.level}</p>
              </div>
              <span className="text-2xl">{cert.badge}</span>
            </div>
            
            <div className="space-y-3 mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Status:</span>
                <span className={`font-medium ${
                  cert.status === 'active' ? 'text-green-600' : 'text-yellow-600'
                }`}>
                  {cert.status === 'active' ? 'Active' : 'Expiring Soon'}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Expires:</span>
                <span className="font-medium">{cert.expires}</span>
              </div>
            </div>

            <div className="flex space-x-2">
              <button className="flex-1 bg-blue-50 hover:bg-blue-100 text-blue-700 py-2 rounded-lg text-sm font-medium transition-colors">
                View Details
              </button>
              <button className="flex-1 bg-gray-50 hover:bg-gray-100 text-gray-700 py-2 rounded-lg text-sm font-medium transition-colors">
                Renew
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Training Progress */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Training Progress</h3>
        <div className="space-y-4">
          {[
            { course: 'Advanced Basketball Officiating', progress: 75 },
            { course: 'Game Management Skills', progress: 30 },
            { course: 'NFHS Rules Update 2024', progress: 100 }
          ].map((course, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="font-medium text-gray-700">{course.course}</span>
                <span className="text-gray-500">{course.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-green-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${course.progress}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const PerformanceView = () => (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Performance Analytics</h1>
        <p className="text-gray-600">Track your officiating performance and improvement</p>
      </div>

      {/* Performance Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: 'Total Games', value: '48', change: '+12%', icon: Trophy, color: 'blue' },
          { title: 'Avg. Rating', value: '4.8/5', change: '+0.2', icon: Star, color: 'yellow' },
          { title: 'Call Accuracy', value: '94%', change: '+2%', icon: CheckCircle, color: 'green' },
          { title: 'Coach Satisfaction', value: '96%', change: '+3%', icon: TrendingUp, color: 'purple' }
        ].map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Rating Trend */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Rating Trend</h3>
          <div className="space-y-4">
            {[
              { month: 'Jan', rating: 4.6 },
              { month: 'Feb', rating: 4.7 },
              { month: 'Mar', rating: 4.8 },
              { month: 'Apr', rating: 4.9 },
              { month: 'May', rating: 4.8 },
              { month: 'Jun', rating: 4.9 }
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-gray-600">{item.month}</span>
                <div className="flex items-center space-x-2">
                  <div className="w-32 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-yellow-500 h-2 rounded-full"
                      style={{ width: `${(item.rating / 5) * 100}%` }}
                    ></div>
                  </div>
                  <span className="font-semibold text-gray-900 w-8">{item.rating}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sport Performance */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance by Sport</h3>
          <div className="space-y-4">
            {[
              { sport: 'Basketball', games: 25, rating: 4.9, accuracy: '96%' },
              { sport: 'Soccer', games: 15, rating: 4.7, accuracy: '92%' },
              { sport: 'Volleyball', games: 8, rating: 4.8, accuracy: '94%' }
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                <div>
                  <p className="font-semibold text-gray-900">{item.sport}</p>
                  <p className="text-sm text-gray-500">{item.games} games</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-yellow-600 flex items-center">
                    <Star className="w-3 h-3 mr-1 fill-current" />
                    {item.rating}
                  </p>
                  <p className="text-sm text-gray-500">{item.accuracy} accuracy</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Feedback */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Feedback</h3>
        <div className="space-y-4">
          {[
            { 
              game: 'North High vs South High', 
              sport: 'Basketball',
              date: '2024-01-20',
              rating: 5,
              comment: 'Excellent game control and communication with coaches',
              coach: 'Coach Johnson'
            },
            { 
              game: 'East High vs West High', 
              sport: 'Soccer',
              date: '2024-01-18',
              rating: 4,
              comment: 'Good positioning and consistent calls throughout the game',
              coach: 'Coach Davis'
            }
          ].map((feedback, index) => (
            <div key={index} className="p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <p className="font-semibold text-gray-900">{feedback.game}</p>
                  <p className="text-sm text-gray-500">{feedback.sport} • {feedback.date}</p>
                </div>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < feedback.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-2">{feedback.comment}</p>
              <p className="text-sm text-gray-500">- {feedback.coach}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const EarningsView = () => (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Earnings & Payments</h1>
        <p className="text-gray-600">Track your officiating income and payment history</p>
      </div>

      {/* Earnings Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: 'Total Earnings', value: '$2,480', change: '+$320', icon: DollarSign, color: 'green' },
          { title: 'This Month', value: '$680', change: '+$120', icon: TrendingUp, color: 'blue' },
          { title: 'Pending Payments', value: '$240', change: '+$60', icon: Clock, color: 'yellow' },
          { title: 'Avg. Per Game', value: '$98', change: '+$8', icon: BarChart3, color: 'purple' }
        ].map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Payments */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">Recent Payments</h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {[
                  { game: 'North High vs South High', date: '2024-01-20', amount: '$120', status: 'Paid', sport: 'Basketball' },
                  { game: 'East High vs West High', date: '2024-01-18', amount: '$90', status: 'Paid', sport: 'Soccer' },
                  { game: 'Central High Tournament', date: '2024-01-15', amount: '$180', status: 'Paid', sport: 'Basketball' },
                  { game: 'Regional Finals', date: '2024-01-12', amount: '$150', status: 'Pending', sport: 'Volleyball' }
                ].map((payment, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-xl">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        payment.status === 'Paid' ? 'bg-green-100' : 'bg-yellow-100'
                      }`}>
                        <DollarSign className={`w-6 h-6 ${
                          payment.status === 'Paid' ? 'text-green-600' : 'text-yellow-600'
                        }`} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{payment.game}</h3>
                        <p className="text-sm text-gray-500">{payment.sport} • {payment.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-900">{payment.amount}</p>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        payment.status === 'Paid' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {payment.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Earnings Breakdown */}
        <div className="space-y-6">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Earnings by Sport</h3>
            <div className="space-y-4">
              {[
                { sport: 'Basketball', amount: '$1,450', percentage: '58%', color: 'bg-blue-500' },
                { sport: 'Soccer', amount: '$680', percentage: '27%', color: 'bg-green-500' },
                { sport: 'Volleyball', amount: '$350', percentage: '15%', color: 'bg-purple-500' }
              ].map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium text-gray-700">{item.sport}</span>
                    <span className="text-gray-900">{item.amount}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`${item.color} h-2 rounded-full transition-all duration-300`}
                      style={{ width: item.percentage }}
                    ></div>
                  </div>
                  <p className="text-xs text-gray-500">{item.percentage} of total</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition-colors">
                Download Tax Documents
              </button>
              <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-medium transition-colors">
                Set Up Direct Deposit
              </button>
              <button className="w-full bg-gray-600 hover:bg-gray-700 text-white py-2 rounded-lg font-medium transition-colors">
                View Payment History
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const ResourcesView = () => (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Officiating Resources</h1>
        <p className="text-gray-600">Access rulebooks, training materials, and officiating tools</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Rulebooks */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Rulebooks</h3>
              <p className="text-sm text-gray-500">Official rulebooks and guides</p>
            </div>
          </div>
          <div className="space-y-3">
            {[
              { name: 'NFHS Basketball Rules 2024', type: 'PDF', size: '4.2 MB' },
              { name: 'US Soccer Federation Guide', type: 'PDF', size: '3.8 MB' },
              { name: 'Volleyball Officiating Manual', type: 'PDF', size: '2.9 MB' }
            ].map((doc, index) => (
              <button key={index} className="w-full flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
                <div className="text-left">
                  <p className="font-medium text-gray-900 text-sm">{doc.name}</p>
                  <p className="text-xs text-gray-500">{doc.type} • {doc.size}</p>
                </div>
                <Download className="w-4 h-4 text-gray-400" />
              </button>
            ))}
          </div>
        </div>

        {/* Training Videos */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <Video className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Training Videos</h3>
              <p className="text-sm text-gray-500">Video tutorials and game footage</p>
            </div>
          </div>
          <div className="space-y-3">
            {[
              { name: 'Positioning Fundamentals', duration: '15:32', level: 'Beginner' },
              { name: 'Advanced Game Management', duration: '22:45', level: 'Advanced' },
              { name: 'Hand Signals Masterclass', duration: '18:17', level: 'Intermediate' }
            ].map((video, index) => (
              <button key={index} className="w-full flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:border-purple-300 transition-colors">
                <div className="text-left">
                  <p className="font-medium text-gray-900 text-sm">{video.name}</p>
                  <p className="text-xs text-gray-500">{video.duration} • {video.level}</p>
                </div>
                <Play className="w-4 h-4 text-gray-400" />
              </button>
            ))}
          </div>
        </div>

        {/* Tools & Calculators */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              <Settings className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Tools</h3>
              <p className="text-sm text-gray-500">Officiating calculators and tools</p>
            </div>
          </div>
          <div className="space-y-3">
            {[
              { name: 'Pay Rate Calculator', description: 'Calculate your game fees' },
              { name: 'Travel Expense Tracker', description: 'Track mileage and expenses' },
              { name: 'Game Schedule Planner', description: 'Plan your officiating schedule' }
            ].map((tool, index) => (
              <button key={index} className="w-full text-left p-3 border border-gray-200 rounded-lg hover:border-green-300 transition-colors">
                <p className="font-medium text-gray-900 text-sm">{tool.name}</p>
                <p className="text-xs text-gray-500">{tool.description}</p>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links & Contacts</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { name: 'Assignor Contact', icon: User, color: 'blue' },
            { name: 'Emergency Protocols', icon: AlertTriangle, color: 'red' },
            { name: 'Equipment Store', icon: ShoppingBag, color: 'green' },
            { name: 'Support Center', icon: MessageSquare, color: 'purple' }
          ].map((link, index) => (
            <button key={index} className="flex flex-col items-center p-4 border border-gray-200 rounded-xl hover:border-blue-500 hover:bg-blue-50 transition-colors">
              <link.icon className={`w-8 h-8 text-${link.color}-600 mb-2`} />
              <span className="text-sm font-medium text-gray-700 text-center">{link.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  const SettingsView = () => (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Settings & Preferences</h1>
        <p className="text-gray-600">Manage your account settings and preferences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Profile Settings */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Profile Information</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                  <input type="text" defaultValue="John" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                  <input type="text" defaultValue="Smith" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" defaultValue="john.smith@example.com" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input type="tel" defaultValue="+1 (555) 123-4567" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors">
                Save Changes
              </button>
            </div>
          </div>

          {/* Notification Preferences */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Notification Preferences</h3>
            <div className="space-y-4">
              {[
                { label: 'Game Assignments', description: 'Get notified when assigned to new games', enabled: true },
                { label: 'Schedule Changes', description: 'Receive alerts for schedule updates', enabled: true },
                { label: 'Payment Updates', description: 'Notifications about payments and earnings', enabled: false },
                { label: 'Training Opportunities', description: 'Updates on new training materials', enabled: true }
              ].map((pref, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900">{pref.label}</p>
                    <p className="text-sm text-gray-500">{pref.description}</p>
                  </div>
                  <button className={`relative inline-flex h-6 w-11 items-center rounded-full ${
                    pref.enabled ? 'bg-blue-600' : 'bg-gray-200'
                  }`}>
                    <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                      pref.enabled ? 'translate-x-6' : 'translate-x-1'
                    }`} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {/* Account Security */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Account Security</h3>
            <div className="space-y-3">
              <button className="w-full text-left p-3 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
                <p className="font-medium text-gray-900">Change Password</p>
                <p className="text-sm text-gray-500">Update your login password</p>
              </button>
              <button className="w-full text-left p-3 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
                <p className="font-medium text-gray-900">Two-Factor Authentication</p>
                <p className="text-sm text-gray-500">Add extra security to your account</p>
              </button>
              <button className="w-full text-left p-3 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
                <p className="font-medium text-gray-900">Connected Devices</p>
                <p className="text-sm text-gray-500">Manage your logged-in devices</p>
              </button>
            </div>
          </div>

          {/* Preferences */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Preferences</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Default Sport</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option>Basketball</option>
                  <option>Soccer</option>
                  <option>Volleyball</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Distance Preference</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option>Within 25 miles</option>
                  <option>Within 50 miles</option>
                  <option>Any distance</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderActiveView = () => {
    switch (activeTab) {
      case 'dashboard': return <DashboardView />;
      case 'games': return <GamesView />;
      case 'certifications': return <CertificationsView />;
      case 'performance': return <PerformanceView />;
      case 'earnings': return <EarningsView />;
      case 'resources': return <ResourcesView />;
      case 'settings': return <SettingsView />;
      default: return <DashboardView />;
    }
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-white shadow-xl transition-all duration-300 flex flex-col`}>
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-700 rounded-xl flex items-center justify-center shadow-lg">
              <Whistle className="w-6 h-6 text-white" />
            </div>
            {sidebarOpen && (
              <div>
                <h1 className="text-xl font-bold text-gray-900">OfficialsHub</h1>
                <p className="text-xs text-gray-500">Professional Portal</p>
              </div>
            )}
          </div>
        </div>

        <nav className="flex-1 mt-6">
          {[
            { name: 'Dashboard', icon: BarChart3, id: 'dashboard' },
            { name: 'My Games', icon: Calendar, id: 'games' },
            { name: 'Certifications', icon: Award, id: 'certifications' },
            { name: 'Performance', icon: TrendingUp, id: 'performance' },
            { name: 'Earnings', icon: DollarSign, id: 'earnings' },
            { name: 'Resources', icon: FileText, id: 'resources' },
            { name: 'Settings', icon: Settings, id: 'settings' }
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
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-4 text-white">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-medium">Certified Official</p>
                  <p className="text-xs opacity-90">Level 2 • 4.8 Rating</p>
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
                  placeholder="Search games, schools, locations..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-80 transition-all"
                />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {liveGame && (
                <div className="flex items-center space-x-2 bg-red-50 text-red-700 px-3 py-2 rounded-lg">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Game in Progress - {formatTime(gameTime)}</span>
                </div>
              )}
              
              <button className="relative p-2 rounded-lg hover:bg-gray-100 transition-colors">
                <Bell className="w-5 h-5 text-gray-600" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              
              <div className="flex items-center space-x-3 bg-gray-50 rounded-xl px-3 py-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
                <div className="flex items-center space-x-1">
                  <span className="text-sm font-medium text-gray-900">John Smith</span>
                  <ChevronDown className="w-4 h-4 text-gray-500" />
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto p-6">
          {renderActiveView()}
        </main>
      </div>
    </div>
  );
};

export default OfficialsDashboard;