import  { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { House, Volleyball, Spotlight, Users, Trophy } from "lucide-react";
import PATHS from "../../Route";
const Header = ({ user, logout }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Navigation items for public website
  const navigation = [
    { name: "Home", href:PATHS.HOME , icon: <House /> },
    { name: "Matches", href: "/matches", icon: <Volleyball /> },
    { name: "Highlights", href: "/highlights", icon:<Spotlight /> },
    { name: "Teams", href: "/teams", icon: <Users />},
    { name: "Leaderboard", href: "/leaderboard", icon: <Trophy /> },
    { name: "About", href: "/about",  },
  ];

  const handleLogout = () => {
    logout();
    navigate("/");
    setIsUserDropdownOpen(false);
  };

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/dashboard" className="flex-shrink-0 flex items-center">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">SS</span>
            </div>
            <div className="ml-3">
              <h1 className="text-xl font-bold text-gray-900">School Sports</h1>
              <p className="text-xs text-gray-500">Competition Platform</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`inline-flex items-center px-4 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  isActivePath(item.href)
                    ? " text-blue-600"
                    : "text-gray-700 hover:text-blue-600 "
                }`}
              >
                <span className="mr-2 text-lg">{item.icon}</span>
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Auth Section */}
          <div className="flex items-center space-x-4">
            {user ? (
              /* User is logged in */
              <div className="flex items-center space-x-4">
                {/* Welcome text - hidden on mobile */}
                <div className="hidden md:block text-right">
                  <p className="text-sm text-gray-600">Welcome back</p>
                  <p className="text-sm font-semibold text-gray-900">
                    {user?.username}
                  </p>
                </div>

                {/* User dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
                    className="flex items-center space-x-3 bg-gray-50 hover:bg-gray-100 rounded-xl px-4 py-2 transition-all duration-200 border border-gray-200"
                  >
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-green-400 rounded-full flex items-center justify-center shadow-md">
                      <span className="text-white font-semibold">
                        {user?.username?.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <svg
                      className={`w-4 h-4 text-gray-500 transition-transform ${
                        isUserDropdownOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {/* Dropdown menu */}
                  {isUserDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-2xl py-2 z-50 border border-gray-200">
                      <div className="px-4 py-3 border-b border-gray-100">
                        <p className="font-semibold text-gray-900">
                          {user?.username}
                        </p>
                        <p className="text-sm text-gray-500">{user?.email}</p>
                        <div className="flex items-center mt-2">
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            🏫 {user?.school}
                          </span>
                          <span className="ml-2 inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 capitalize">
                            {user?.role}
                          </span>
                        </div>
                      </div>

                      <div className="py-1">
                        <Link
                          to="/dashboard"
                          onClick={() => setIsUserDropdownOpen(false)}
                          className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                        >
                          <span className="mr-3">📊</span>
                          Dashboard
                        </Link>
                        <Link
                          to="/profile"
                          onClick={() => setIsUserDropdownOpen(false)}
                          className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                        >
                          <span className="mr-3">👤</span>
                          My Profile
                        </Link>
                      </div>

                      <div className="border-t border-gray-100 py-1">
                        <button
                          onClick={handleLogout}
                          className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                        >
                          <span className="mr-3">🚪</span>
                          Sign out
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              /* User is not logged in */
              <div className="flex items-center space-x-3">
                <Link
                  to="/login"
                  className="px-6 py-2 text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors"
                >
                  Sign In
                </Link>
                <Link
                  to="/register"
                  className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:from-blue-700 hover:to-purple-600 text-white text-sm font-semibold rounded-xl shadow-md transition-all duration-200"
                >
                  Sign Up
                </Link>
              </div>
            )}

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden inline-flex items-center justify-center p-3 rounded-xl text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <div className="grid grid-cols-2 gap-2 px-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center justify-center px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                    isActivePath(item.href)
                      ? "bg-blue-50 text-blue-600 border-2 border-blue-200"
                      : "text-gray-700 hover:bg-gray-50 border-2 border-transparent"
                  }`}
                >
                  <span className="mr-2 text-lg">{item.icon}</span>
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile auth section */}
            {!user && (
              <div className="mt-4 pt-4 border-t border-gray-200 grid grid-cols-2 gap-3 px-2">
                <Link
                  to="/login"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-center px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 rounded-xl transition-colors"
                >
                  Sign In
                </Link>
                <Link
                  to="/register"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-center px-4 py-3 bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-white text-sm font-semibold rounded-xl shadow-md transition-all duration-200"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Overlay for dropdown */}
      {isUserDropdownOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsUserDropdownOpen(false)}
        ></div>
      )}
    </header>
  );
};

export default Header;
