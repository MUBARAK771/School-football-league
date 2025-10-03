import  { useState, useEffect } from "react";
import { Link } from "react-router";
import Header from "../components/Header";
const Matches = () => {
  const [matches, setMatches] = useState([]);
  const [filteredMatches, setFilteredMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeSport, setActiveSport] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [dateFilter, setDateFilter] = useState("");

  // Mock data - replace with actual API calls
  const mockMatches = [
    {
      id: 1,
      teamA: { name: "North High Lions", school: "North High", score: 3 },
      teamB: {
        name: "South Academy Tigers",
        school: "South Academy",
        score: 2,
      },
      sport: "soccer",
      date: "2024-01-15T14:00:00",
      time: "14:00",
      location: "Main Stadium",
      status: "completed",
      statistics: {
        topScorer: "John Smith (North High)",
        bestPlayer: "Mike Johnson (North High)",
        matchNotes: "Exciting match with last-minute winner",
      },
    },
    {
      id: 2,
      teamA: { name: "East College Eagles", school: "East College", score: 78 },
      teamB: {
        name: "West Institute Bears",
        school: "West Institute",
        score: 82,
      },
      sport: "basketball",
      date: "2024-01-15T16:00:00",
      time: "16:00",
      location: "Indoor Arena",
      status: "completed",
      statistics: {
        topScorer: "Sarah Wilson (West Institute)",
        bestPlayer: "David Brown (West Institute)",
        matchNotes: "Close game with overtime finish",
      },
    },
    {
      id: 3,
      teamA: {
        name: "Central School Panthers",
        school: "Central School",
        score: 0,
      },
      teamB: { name: "Valley Prep Vikings", school: "Valley Prep", score: 0 },
      sport: "soccer",
      date: "2024-01-16T15:30:00",
      time: "15:30",
      location: "Field 2",
      status: "live",
      statistics: {
        topScorer: "-",
        bestPlayer: "-",
        matchNotes: "First half in progress",
      },
    },
    {
      id: 4,
      teamA: {
        name: "Riverside Ravens",
        school: "Riverside High",
        score: null,
      },
      teamB: {
        name: "Mountain View Hawks",
        school: "Mountain View",
        score: null,
      },
      sport: "volleyball",
      date: "2024-01-17T13:00:00",
      time: "13:00",
      location: "Gymnasium A",
      status: "scheduled",
    },
    {
      id: 5,
      teamA: {
        name: "Lakeview Warriors",
        school: "Lakeview School",
        score: 45,
      },
      teamB: {
        name: "Hillside Falcons",
        school: "Hillside Academy",
        score: 38,
      },
      sport: "basketball",
      date: "2024-01-14T17:00:00",
      time: "17:00",
      location: "Indoor Court",
      status: "completed",
    },
    {
      id: 6,
      teamA: {
        name: "Oakwood Knights",
        school: "Oakwood College",
        score: null,
      },
      teamB: {
        name: "Pinecrest Pirates",
        school: "Pinecrest School",
        score: null,
      },
      sport: "baseball",
      date: "2024-01-18T11:00:00",
      time: "11:00",
      location: "Baseball Field",
      status: "scheduled",
    },
  ];

  const sports = [
    { id: "all", name: "All Sports", icon: "🏆" },
    { id: "soccer", name: "Soccer", icon: "⚽" },
    { id: "basketball", name: "Basketball", icon: "🏀" },
    { id: "volleyball", name: "Volleyball", icon: "🏐" },
    { id: "baseball", name: "Baseball", icon: "⚾" },
    { id: "tennis", name: "Tennis", icon: "🎾" },
  ];

  const statuses = [
    { id: "all", name: "All Matches" },
    { id: "live", name: "Live Now" },
    { id: "scheduled", name: "Upcoming" },
    { id: "completed", name: "Completed" },
  ];

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setMatches(mockMatches);
      setFilteredMatches(mockMatches);
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    filterMatches();
  }, [activeSport, statusFilter, searchTerm, dateFilter, matches]);

  const filterMatches = () => {
    let filtered = matches;

    // Filter by sport
    if (activeSport !== "all") {
      filtered = filtered.filter((match) => match.sport === activeSport);
    }

    // Filter by status
    if (statusFilter !== "all") {
      filtered = filtered.filter((match) => match.status === statusFilter);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (match) =>
          match.teamA.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          match.teamB.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          match.teamA.school.toLowerCase().includes(searchTerm.toLowerCase()) ||
          match.teamB.school.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by date
    if (dateFilter) {
      filtered = filtered.filter((match) => match.date.startsWith(dateFilter));
    }

    setFilteredMatches(filtered);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800 border-green-200";
      case "live":
        return "bg-red-100 text-red-800 border-red-200 animate-pulse";
      case "scheduled":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "cancelled":
        return "bg-gray-100 text-gray-800 border-gray-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getSportIcon = (sport) => {
    const sportMap = {
      soccer: "⚽",
      basketball: "🏀",
      volleyball: "🏐",
      baseball: "⚾",
      tennis: "🎾",
    };
    return sportMap[sport] || "🏆";
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
	  <Header />
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            School Matches
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Follow all the action from school sports competitions. Live scores,
            schedules, and match details.
          </p>
        </div>

        {/* Live Matches Banner */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-6 mb-8 text-white shadow-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse mr-3"></div>
              <h2 className="text-2xl font-bold">Live Matches</h2>
            </div>
            <div className="text-right">
              <p className="text-purple-200">
                {filteredMatches.filter((m) => m.status === "live").length}{" "}
                matches in progress
              </p>
              <p className="text-sm text-purple-300">Refresh for updates</p>
            </div>
          </div>
        </div>

        {/* Filters Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-purple-100">
          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search teams or schools..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
              />
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Sport Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Sport
              </label>
              <select
                value={activeSport}
                onChange={(e) => setActiveSport(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
              >
                {sports.map((sport) => (
                  <option key={sport.id} value={sport.id}>
                    {sport.icon} {sport.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Status Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Status
              </label>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
              >
                {statuses.map((status) => (
                  <option key={status.id} value={status.id}>
                    {status.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Date Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Date
              </label>
              <input
                type="date"
                value={dateFilter}
                onChange={(e) => setDateFilter(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
              />
            </div>
          </div>

          {/* Quick Sport Filters */}
          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Quick Filters
            </label>
            <div className="flex flex-wrap gap-2">
              {sports.slice(1).map((sport) => (
                <button
                  key={sport.id}
                  onClick={() => setActiveSport(sport.id)}
                  className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeSport === sport.id
                      ? "bg-purple-600 text-white shadow-md"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  <span className="mr-2">{sport.icon}</span>
                  {sport.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-600">
            Showing {filteredMatches.length} of {matches.length} matches
          </p>
          <button
            onClick={() => {
              setActiveSport("all");
              setStatusFilter("all");
              setSearchTerm("");
              setDateFilter("");
            }}
            className="text-purple-600 hover:text-purple-700 font-medium text-sm"
          >
            Clear all filters
          </button>
        </div>

        {/* Matches Grid */}
        <div className="grid gap-6">
          {filteredMatches.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-2xl shadow-lg border border-purple-100">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No matches found
              </h3>
              <p className="text-gray-600 mb-4">
                Try adjusting your search or filters
              </p>
              <button
                onClick={() => {
                  setActiveSport("all");
                  setStatusFilter("all");
                  setSearchTerm("");
                  setDateFilter("");
                }}
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            filteredMatches.map((match) => (
              <div
                key={match.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-purple-100 hover:shadow-xl transition-all duration-300"
              >
                {/* Match Header */}
                <div className="bg-gradient-to-r from-purple-50 to-blue-50 px-6 py-4 border-b border-purple-100">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">
                        {getSportIcon(match.sport)}
                      </span>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 capitalize">
                          {match.sport}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {match.location}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold border ${getStatusColor(
                          match.status
                        )}`}
                      >
                        {match.status === "live" && (
                          <span className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></span>
                        )}
                        {match.status.toUpperCase()}
                      </span>
                      <p className="text-sm text-gray-600 mt-1">
                        {formatDate(match.date)} • {match.time}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Teams and Score */}
                <div className="px-6 py-8">
                  <div className="flex items-center justify-between">
                    {/* Team A */}
                    <div className="text-center flex-1">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                        <span className="text-white font-bold text-lg">
                          {match.teamA.name
                            .split(" ")
                            .map((word) => word[0])
                            .join("")}
                        </span>
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-1">
                        {match.teamA.name}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {match.teamA.school}
                      </p>
                      <div className="text-3xl font-bold text-purple-600 mt-3">
                        {match.teamA.score !== null ? match.teamA.score : "-"}
                      </div>
                    </div>

                    {/* VS */}
                    <div className="mx-8">
                      <div className="bg-gray-100 text-gray-600 px-4 py-2 rounded-lg font-bold text-sm">
                        VS
                      </div>
                      {match.status === "live" && (
                        <div className="text-center mt-2">
                          <span className="inline-flex items-center px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs font-bold">
                            <span className="w-2 h-2 bg-red-500 rounded-full mr-1 animate-pulse"></span>
                            LIVE
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Team B */}
                    <div className="text-center flex-1">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                        <span className="text-white font-bold text-lg">
                          {match.teamB.name
                            .split(" ")
                            .map((word) => word[0])
                            .join("")}
                        </span>
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-1">
                        {match.teamB.name}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {match.teamB.school}
                      </p>
                      <div className="text-3xl font-bold text-blue-600 mt-3">
                        {match.teamB.score !== null ? match.teamB.score : "-"}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Statistics */}
                {match.statistics && (
                  <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <svg
                        className="w-4 h-4 mr-2 text-purple-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        />
                      </svg>
                      Match Statistics
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      {match.statistics.topScorer &&
                        match.statistics.topScorer !== "-" && (
                          <div className="flex items-center">
                            <span className="font-medium text-gray-600 mr-2">
                              Top Scorer:
                            </span>
                            <span className="text-gray-900">
                              {match.statistics.topScorer}
                            </span>
                          </div>
                        )}
                      {match.statistics.bestPlayer &&
                        match.statistics.bestPlayer !== "-" && (
                          <div className="flex items-center">
                            <span className="font-medium text-gray-600 mr-2">
                              Best Player:
                            </span>
                            <span className="text-gray-900">
                              {match.statistics.bestPlayer}
                            </span>
                          </div>
                        )}
                      {match.statistics.matchNotes && (
                        <div className="md:col-span-2">
                          <span className="font-medium text-gray-600 mr-2">
                            Notes:
                          </span>
                          <span className="text-gray-900">
                            {match.statistics.matchNotes}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Actions */}
                <div className="px-6 py-4 bg-white border-t border-gray-200">
                  <div className="flex justify-between items-center">
                    <button className="text-purple-600 hover:text-purple-700 font-medium text-sm flex items-center">
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                      View Details
                    </button>
                    {match.status === "live" && (
                      <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium text-sm flex items-center transition-colors">
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                          />
                        </svg>
                        Watch Live
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Matches;
