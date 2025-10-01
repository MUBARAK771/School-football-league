// TeamDetailView.js - Complete Team Formation & Players Component
import React, { useState } from 'react';
import {
  Users,
  Trophy,
  Calendar,
  MapPin,
  Star,
  Award,
  Shield,
  Target,
  Activity,
  BarChart3,
  Edit,
  Download,
  Share2,
  MoreVertical,
  ChevronLeft,
  Play,
  Pause,
  RotateCcw,
  User,
  Plus,
  Filter,
  Search,
  Clock
} from 'lucide-react';
import { Link } from 'react-router';
import PATHS from '../Route';

const TeamDetailView = ({ team, onBack }) => {
  const [activeTab, setActiveTab] = useState('formation');
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  // Mock team data
  const teamData = {
    id: 1,
    name: 'North High Lions',
    sport: 'Basketball',
    school: 'North High School',
    coach: 'Coach Michael Wilson',
    record: '7-1',
    formation: '4-3-3',
    season: '2024 Spring',
    colors: ['#3B82F6', '#1E40AF'],
    stadium: 'Lions Arena'
  };

  // Players data with positions and stats
  const players = [
    {
      id: 1,
      name: 'James Wilson',
      number: 23,
      position: 'Point Guard',
      height: "6'2\"",
      weight: '185 lbs',
      year: 'Senior',
      status: 'starter',
      stats: {
        points: 24.5,
        assists: 8.2,
        rebounds: 5.7,
        steals: 2.1
      },
      avatar: 'JW'
    },
    {
      id: 2,
      name: 'Marcus Johnson',
      number: 11,
      position: 'Shooting Guard',
      height: "6'4\"",
      weight: '195 lbs',
      year: 'Junior',
      status: 'starter',
      stats: {
        points: 18.3,
        assists: 4.5,
        rebounds: 3.8,
        steals: 1.5
      },
      avatar: 'MJ'
    },
    {
      id: 3,
      name: 'David Brown',
      number: 32,
      position: 'Small Forward',
      height: "6'6\"",
      weight: '210 lbs',
      year: 'Senior',
      status: 'starter',
      stats: {
        points: 15.7,
        assists: 3.2,
        rebounds: 7.3,
        steals: 1.8
      },
      avatar: 'DB'
    },
    {
      id: 4,
      name: 'Chris Davis',
      number: 44,
      position: 'Power Forward',
      height: "6'8\"",
      weight: '225 lbs',
      year: 'Junior',
      status: 'starter',
      stats: {
        points: 12.4,
        assists: 2.1,
        rebounds: 9.8,
        steals: 0.9
      },
      avatar: 'CD'
    },
    {
      id: 5,
      name: 'Alex Miller',
      number: 55,
      position: 'Center',
      height: "6'11\"",
      weight: '240 lbs',
      year: 'Senior',
      status: 'starter',
      stats: {
        points: 10.8,
        assists: 1.5,
        rebounds: 11.2,
        steals: 0.7
      },
      avatar: 'AM'
    },
    {
      id: 6,
      name: 'Ryan Wilson',
      number: 6,
      position: 'Guard',
      height: "6'1\"",
      weight: '180 lbs',
      year: 'Sophomore',
      status: 'bench',
      stats: {
        points: 8.3,
        assists: 3.4,
        rebounds: 2.1,
        steals: 0.8
      },
      avatar: 'RW'
    },
    {
      id: 7,
      name: 'Kevin Lee',
      number: 8,
      position: 'Forward',
      height: "6'5\"",
      weight: '205 lbs',
      year: 'Junior',
      status: 'bench',
      stats: {
        points: 6.7,
        assists: 1.8,
        rebounds: 4.2,
        steals: 0.6
      },
      avatar: 'KL'
    }
  ];

  // Upcoming games
  const upcomingGames = [
    { id: 1, opponent: 'East High Eagles', date: '2024-01-25', time: '4:00 PM', location: 'Home' },
    { id: 2, opponent: 'South High Tigers', date: '2024-01-28', time: '6:30 PM', location: 'Away' },
    { id: 3, opponent: 'West High Bears', date: '2024-02-01', time: '5:00 PM', location: 'Home' }
  ];

  // Formation visualization component
  const FormationVisualization = () => (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Current Formation</h3>
        <div className="flex items-center space-x-2">
          <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
            {teamData.formation}
          </span>
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Edit className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Basketball Court with Player Positions */}
      <div className="relative bg-green-50 border-2 border-green-200 rounded-xl p-4 mb-6">
        {/* Court Lines */}
        <div className="absolute inset-0 border-2 border-green-300 rounded-xl m-4"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 border-2 border-green-300 rounded-full"></div>
        
        {/* Player Positions */}
        <div className="relative h-64">
          {/* Point Guard */}
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
            <PlayerPosition player={players[0]} />
          </div>
          
          {/* Shooting Guards */}
          <div className="absolute top-16 left-1/4 transform -translate-x-1/2">
            <PlayerPosition player={players[1]} />
          </div>
          <div className="absolute top-16 left-3/4 transform -translate-x-1/2">
            <PlayerPosition player={players[2]} />
          </div>
          
          {/* Forwards */}
          <div className="absolute top-32 left-1/3 transform -translate-x-1/2">
            <PlayerPosition player={players[3]} />
          </div>
          <div className="absolute top-32 left-2/3 transform -translate-x-1/2">
            <PlayerPosition player={players[4]} />
          </div>
          
          {/* Center */}
          <div className="absolute top-48 left-1/2 transform -translate-x-1/2">
            <PlayerPosition player={players[5]} />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {players.filter(p => p.status === 'starter').map((player) => (
          <div key={player.id} className="text-center p-3 bg-gray-50 rounded-lg">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm mx-auto mb-2">
              {player.number}
            </div>
            <p className="font-semibold text-gray-900 text-sm">{player.name}</p>
            <p className="text-xs text-gray-500">{player.position}</p>
          </div>
        ))}
      </div>
    </div>
  );

  const PlayerPosition = ({ player }) => (
    <div className="text-center">
      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm mx-auto mb-1 shadow-lg border-2 border-white">
        {player.number}
      </div>
      <div className="bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded-full whitespace-nowrap">
        {player.position}
      </div>
    </div>
  );

  const PlayerCard = ({ player }) => (
    <div 
      className={`bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 cursor-pointer ${
        selectedPlayer?.id === player.id ? 'ring-2 ring-blue-500' : ''
      }`}
      onClick={() => setSelectedPlayer(player)}
    >
      <div className="p-4">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
              {player.avatar}
            </div>
            {player.status === 'starter' && (
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                <Star className="w-3 h-3 text-white" />
              </div>
            )}
          </div>
          
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-gray-900">{player.name}</h3>
              <span className="text-2xl font-bold text-gray-700">#{player.number}</span>
            </div>
            <p className="text-sm text-gray-600">{player.position}</p>
            <div className="flex items-center space-x-4 mt-1 text-xs text-gray-500">
              <span>{player.height}</span>
              <span>{player.weight}</span>
              <span>{player.year}</span>
            </div>
          </div>
        </div>

        {selectedPlayer?.id === player.id && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-3">Season Statistics</h4>
            <div className="grid grid-cols-2 gap-3">
              <div className="text-center p-2 bg-blue-50 rounded-lg">
                <p className="text-2xl font-bold text-blue-600">{player.stats.points}</p>
                <p className="text-xs text-blue-600">PPG</p>
              </div>
              <div className="text-center p-2 bg-green-50 rounded-lg">
                <p className="text-2xl font-bold text-green-600">{player.stats.assists}</p>
                <p className="text-xs text-green-600">APG</p>
              </div>
              <div className="text-center p-2 bg-purple-50 rounded-lg">
                <p className="text-2xl font-bold text-purple-600">{player.stats.rebounds}</p>
                <p className="text-xs text-purple-600">RPG</p>
              </div>
              <div className="text-center p-2 bg-orange-50 rounded-lg">
                <p className="text-2xl font-bold text-orange-600">{player.stats.steals}</p>
                <p className="text-xs text-orange-600">SPG</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  const PlayerStatsTable = () => (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">Player Statistics</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-900">Player</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-900">POS</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-900">PPG</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-900">APG</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-900">RPG</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-900">SPG</th>
            </tr>
          </thead>
          <tbody>
            {players.map((player) => (
              <tr key={player.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                <td className="py-4 px-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      {player.avatar}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{player.name}</p>
                      <p className="text-sm text-gray-500">#{player.number}</p>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <span className="text-sm text-gray-900">{player.position}</span>
                </td>
                <td className="py-4 px-4">
                  <span className="font-semibold text-gray-900">{player.stats.points}</span>
                </td>
                <td className="py-4 px-4">
                  <span className="font-semibold text-gray-900">{player.stats.assists}</span>
                </td>
                <td className="py-4 px-4">
                  <span className="font-semibold text-gray-900">{player.stats.rebounds}</span>
                </td>
                <td className="py-4 px-4">
                  <span className="font-semibold text-gray-900">{player.stats.steals}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const QuickActions = () => (
    <div className="space-y-4">
      {/* Team Overview Card */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Team Overview</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center p-3 bg-blue-50 rounded-lg">
            <Trophy className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-blue-600">{teamData.record}</p>
            <p className="text-sm text-blue-600">Season Record</p>
          </div>
          <div className="text-center p-3 bg-green-50 rounded-lg">
            <Users className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-green-600">{players.length}</p>
            <p className="text-sm text-green-600">Active Players</p>
          </div>
        </div>
      </div>

      {/* Upcoming Games */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Games</h3>
        <div className="space-y-3">
          {upcomingGames.map((game) => (
            <div key={game.id} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
              <div>
                <p className="font-semibold text-gray-900">vs {game.opponent}</p>
                <div className="flex items-center space-x-4 mt-1 text-sm text-gray-500">
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
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                game.location === 'Home' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'
              }`}>
                {game.location}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 gap-3">
          <button className="flex items-center justify-center space-x-2 p-3 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors">
            <Edit className="w-4 h-4 text-gray-600" />
            <span className="text-sm font-medium">Edit Roster</span>
          </button>
          <button className="flex items-center justify-center space-x-2 p-3 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors">
            <Download className="w-4 h-4 text-gray-600" />
            <span className="text-sm font-medium">Export Stats</span>
          </button>
          <button className="flex items-center justify-center space-x-2 p-3 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors">
            <Share2 className="w-4 h-4 text-gray-600" />
            <span className="text-sm font-medium">Share Team</span>
          </button>
          <button className="flex items-center justify-center space-x-2 p-3 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors">
            <Plus className="w-4 h-4 text-gray-600" />
            <span className="text-sm font-medium">Add Player</span>
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          <button 
            onClick={onBack}
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            <Link to={PATHS.SCHOOLSPORTSDASHBOARD}>Back to Schools</Link>
          </button>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{teamData.name}</h1>
            <p className="text-gray-600 mt-1">{teamData.school} • {teamData.sport} • {teamData.season}</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          <button className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors">
            <Edit className="w-4 h-4" />
            <span>Edit Team</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors">
            <Download className="w-4 h-4" />
            <span>Export Data</span>
          </button>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex space-x-1 bg-gray-100 rounded-xl p-1 mb-8">
        {[
          { id: 'formation', label: 'Formation', icon: Target },
          { id: 'roster', label: 'Full Roster', icon: Users },
          { id: 'stats', label: 'Statistics', icon: BarChart3 },
          { id: 'schedule', label: 'Schedule', icon: Calendar }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
              activeTab === tab.id
                ? 'bg-white text-blue-600 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <tab.icon className="w-4 h-4" />
            <span className="font-medium">{tab.label}</span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {activeTab === 'formation' && <FormationVisualization />}
          {activeTab === 'roster' && (
            <div className="space-y-4">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">Team Roster</h3>
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                      <input
                        type="text"
                        placeholder="Search players..."
                        className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-48"
                      />
                    </div>
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                      <Filter className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {players.map((player) => (
                    <PlayerCard key={player.id} player={player} />
                  ))}
                </div>
              </div>
            </div>
          )}
          {activeTab === 'stats' && <PlayerStatsTable />}
          {activeTab === 'schedule' && (
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Game Schedule</h3>
              {/* Schedule content would go here */}
            </div>
          )}
        </div>

        {/* Sidebar
        <div>
          <QuickActions />
        </div> */}
      </div>
    </div>
  );
};

export default TeamDetailView;