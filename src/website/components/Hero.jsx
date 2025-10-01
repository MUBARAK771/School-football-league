import React from 'react';
import { Link } from 'react-router';
import PATHS from '../../Route';

const Hero = ({ user }) => {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400 rounded-full blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-green-400 rounded-full blur-xl opacity-20 animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-red-400 rounded-full blur-xl opacity-20 animate-pulse delay-500"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/20">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              <span className="text-sm font-semibold">Live Matches Today</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Where Champions
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Are Made
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Track every goal, every point, every victory. Your school's journey to glory starts here.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 mb-8 justify-center lg:justify-start">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-yellow-400">50+</div>
                <div className="text-gray-300 text-sm">Schools</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-green-400">200+</div>
                <div className="text-gray-300 text-sm">Teams</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-blue-400">1000+</div>
                <div className="text-gray-300 text-sm">Matches</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              {!user ? (
                <>
                  <Link
                    to={PATHS.REGISTER}
                    className="group bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-gray-900 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    <span className="flex items-center justify-center">
                      Join Now
                      <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  </Link>
                  <Link
                    to="/matches"
                    className="group border-2 border-white/30 hover:border-white bg-white/5 backdrop-blur-sm hover:bg-white/10 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300"
                  >
                    <span className="flex items-center justify-center">
                      View Matches
                      <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </span>
                  </Link>
                </>
              ) : (
                <Link
                  to="/dashboard"
                  className="group bg-gradient-to-r from-green-400 to-blue-400 hover:from-green-500 hover:to-blue-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <span className="flex items-center justify-center">
                    Go to Dashboard
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </Link>
              )}
            </div>
          </div>

          {/* Visual Content */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
              {/* Featured Match Card */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-center mb-4">
                  <span className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-bold">
                    LIVE NOW
                  </span>
                </div>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-white font-bold text-lg">NH</span>
                    </div>
                    <div className="font-bold text-lg">North High</div>
                    <div className="text-2xl font-bold text-yellow-400 mt-2">2</div>
                  </div>
                  
                  <div className="text-center mx-4">
                    <div className="text-sm text-gray-300 mb-2">Basketball</div>
                    <div className="text-xl font-bold">VS</div>
                    <div className="text-sm text-green-400 mt-2">Q3 • 08:24</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-white font-bold text-lg">SA</span>
                    </div>
                    <div className="font-bold text-lg">South Academy</div>
                    <div className="text-2xl font-bold text-yellow-400 mt-2">1</div>
                  </div>
                </div>
                
                <div className="text-center">
                  <Link 
                    to="/matches" 
                    className="inline-flex items-center text-blue-300 hover:text-white text-sm font-semibold transition-colors"
                  >
                    Watch Live Stream
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg font-bold text-sm transform rotate-6 shadow-lg">
              🏆 Champions 2024
            </div>
            <div className="absolute -bottom-4 -left-4 bg-green-400 text-gray-900 px-4 py-2 rounded-lg font-bold text-sm transform -rotate-6 shadow-lg">
              ⚽ 5 Live Games
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;