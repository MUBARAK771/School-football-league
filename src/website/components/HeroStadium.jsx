import React from "react";
import { Link } from "react-router";
import { House, Volleyball, Spotlight, Users, Trophy } from "lucide-react";
import PATHS from "../../Route";
const HeroStadium = ({ user }) => {
  return (
    <section className="relative bg-gradient-to-br from-indigo-950 via-purple-900 to-blue-900 text-white min-h-screen flex items-center justify-center overflow-hidden">
      {/* Stadium Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-purple-900/80 to-indigo-900/80">
        <div className="absolute inset-0 bg-stadium-pattern opacity-10"></div>
        {/* Field Lines - Updated to purple/blue theme */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 h-3/5 border-2 border-purple-400/30 rounded-lg"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 border-2 border-blue-400/30 rounded-full"></div>
        
        {/* Animated Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-1/3 w-28 h-28 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="bg-black/30 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-purple-500/20 shadow-2xl">
          {/* Badge */}
          <div className="inline-flex items-center bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full px-6 py-3 mb-8 border border-purple-400/30 shadow-lg">
            <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
            <span className="font-bold text-sm tracking-wide">SCHOOL SPORTS SEASON 2024</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-none">
            GAME
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              ON
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl lg:text-3xl text-blue-100 mb-8 font-light max-w-3xl mx-auto leading-relaxed">
            Experience the thrill of school sports like never before. Real-time
            scores, live streams, and championship moments.
          </p>

          {/* Live Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-400">
                12
              </div>
              <div className="text-blue-200 text-sm uppercase tracking-wider font-semibold">
                Live Games
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-400">
                48
              </div>
              <div className="text-blue-200 text-sm uppercase tracking-wider font-semibold">
                Teams Playing
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-indigo-400">
                5K+
              </div>
              <div className="text-blue-200 text-sm uppercase tracking-wider font-semibold">
                Fans Watching
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {!user ? (
              <>
                <Link
                  to={PATHS.REGISTER}
                  className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-12 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-purple-500/25 border border-purple-400/30"
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
                  className="group border-2 border-purple-400/50 hover:border-purple-300 hover:bg-purple-500/10 text-white hover:text-purple-300 px-12 py-4 rounded-full font-bold text-lg transition-all duration-300 backdrop-blur-sm"
                >
                  Watch Live Games
                </Link>
              </>
            ) : (
              <Link
                to="/dashboard"
                className="group bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-12 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl border border-purple-400/30"
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
              className="text-blue-200  flex flex-col gap-5 items-center hover:text-purple-300 transition-colors text-sm font-semibold hover:scale-105 transform transition-transform"
            >
              <Spotlight />Highlight
            </Link>
            <Link
              to="/leaderboard"
              className="text-blue-200 items-center gap-5 flex flex-col hover:text-purple-300 transition-colors text-sm font-semibold hover:scale-105 transform transition-transform"
            >
              <Trophy />View Rankings
            </Link>
            <Link
              to="/teams"
              className="text-blue-200 items-center gap-5 flex flex-col hover:text-purple-300 transition-colors text-sm font-semibold hover:scale-105 transform transition-transform"
            >
              <Users />Teams & Players
            </Link>
          </div>
        </div>
      </div>

      {/* Floating Sports Icons */}
      <div className="absolute top-20 left-10 text-4xl opacity-30 animate-float">
        ⚽
      </div>
      <div className="absolute top-40 right-20 text-3xl opacity-30 animate-float delay-1000">
        🏀
      </div>
      <div className="absolute bottom-40 left-20 text-4xl opacity-30 animate-float delay-500">
        🎾
      </div>
      <div className="absolute bottom-20 right-10 text-3xl opacity-30 animate-float delay-1500">
        🏈
      </div>
      
      {/* Additional floating elements */}
      <div className="absolute top-1/4 right-1/4 text-2xl opacity-20 animate-float delay-700">
        ⚾
      </div>
      <div className="absolute bottom-1/4 left-1/3 text-2xl opacity-20 animate-float delay-1200">
        🏐
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <svg 
            className="w-6 h-6 text-purple-300/60" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroStadium;