import React from "react";
import { Link } from "react-router";

const HeroStadium = ({ user }) => {
  return (
    <section className="relative bg-gray-900 text-white min-h-screen flex items-center justify-center overflow-hidden">
      {/* Stadium Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-900 via-green-800 to-gray-900">
        <div className="absolute inset-0 bg-stadium-pattern opacity-10"></div>
        {/* Field Lines */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 h-3/5 border-2 border-white/20 rounded-lg"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 border-2 border-white/20 rounded-full"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="bg-black/40 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10">
          {/* Badge */}
          <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 rounded-full px-6 py-2 mb-8">
            <span className="w-2 h-2 bg-green-600 rounded-full mr-2 animate-pulse"></span>
            <span className="font-bold text-sm">SCHOOL SPORTS SEASON 2024</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-none">
            GAME
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              ON
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 font-light max-w-3xl mx-auto">
            Experience the thrill of school sports like never before. Real-time
            scores, live streams, and championship moments.
          </p>

          {/* Live Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-400">
                12
              </div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">
                Live Games
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-400">
                48
              </div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">
                Teams Playing
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-400">
                5K+
              </div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">
                Fans Watching
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {!user ? (
              <>
                <Link
                  to="/register"
                  className="group bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-12 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-green-500/25"
                >
                  <span className="flex items-center justify-center">
                    Join The Action
                    <svg
                      className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </span>
                </Link>
                <Link
                  to="/matches"
                  className="group border-2 border-white hover:border-yellow-400 hover:bg-yellow-400/10 text-white hover:text-yellow-400 px-12 py-4 rounded-full font-bold text-lg transition-all duration-300"
                >
                  Watch Live Games
                </Link>
              </>
            ) : (
              <Link
                to="/dashboard"
                className="group bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-gray-900 px-12 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl"
              >
                <span className="flex items-center justify-center">
                  Go to Dashboard
                  <svg
                    className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
              </Link>
            )}
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <Link
              to="/highlights"
              className="text-gray-400 hover:text-yellow-400 transition-colors text-sm font-semibold"
            >
              🎥 Match Highlights
            </Link>
            <Link
              to="/leaderboard"
              className="text-gray-400 hover:text-yellow-400 transition-colors text-sm font-semibold"
            >
              🏆 View Rankings
            </Link>
            <Link
              to="/teams"
              className="text-gray-400 hover:text-yellow-400 transition-colors text-sm font-semibold"
            >
              👥 Teams & Players
            </Link>
          </div>
        </div>
      </div>

      {/* Floating Sports Icons */}
      <div className="absolute top-20 left-10 text-4xl opacity-20 animate-float">
        ⚽
      </div>
      <div className="absolute top-40 right-20 text-3xl opacity-20 animate-float delay-1000">
        🏀
      </div>
      <div className="absolute bottom-40 left-20 text-4xl opacity-20 animate-float delay-500">
        🎾
      </div>
      <div className="absolute bottom-20 right-10 text-3xl opacity-20 animate-float delay-1500">
        🏈
      </div>
    </section>
  );
};

export default HeroStadium;
