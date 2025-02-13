import React from 'react';
import { Link } from 'react-router-dom';
import { Book, Calculator, Code, ChevronRight, Globe, Brain, Atom, Search } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl font-bold text-slate-900 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                Knowledge Explorer
              </span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Dive into the fascinating world of Science, Mathematics, and Computer Science
            </p>
          </div>
          
          {/* Search Bar */}
          <div className="max-w-xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
              <input
                type="text"
                placeholder="Search for topics..."
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              />
            </div>
          </div>
        </div>

        {/* Category Cards */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {/* Science Card */}
          <div className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-purple-100 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-purple-100 rounded-xl group-hover:scale-110 transition-transform">
                  <Atom className="text-purple-600" size={28} />
                </div>
                <h3 className="text-2xl font-semibold text-slate-800">Science</h3>
              </div>
              <p className="text-slate-600 mb-6">Explore the fundamental laws of nature, from quantum mechanics to astrophysics.</p>
              <Link to="/subjects" className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium">
                Discover More <ChevronRight className="ml-1" size={16} />
              </Link>
            </div>
          </div>

          {/* Mathematics Card */}
          <div className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-blue-100 rounded-xl group-hover:scale-110 transition-transform">
                  <Calculator className="text-blue-600" size={28} />
                </div>
                <h3 className="text-2xl font-semibold text-slate-800">Mathematics</h3>
              </div>
              <p className="text-slate-600 mb-6">From calculus to number theory, unlock the language of the universe.</p>
              <Link to="/subjects" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
                Learn More <ChevronRight className="ml-1" size={16} />
              </Link>
            </div>
          </div>

          {/* Computer Science Card */}
          <div className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-emerald-100 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-emerald-100 rounded-xl group-hover:scale-110 transition-transform">
                  <Code className="text-emerald-600" size={28} />
                </div>
                <h3 className="text-2xl font-semibold text-slate-800">Computer Science</h3>
              </div>
              <p className="text-slate-600 mb-6">Master algorithms, data structures, and the art of programming.</p>
              <Link to="/subjects" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium">
                Start Learning <ChevronRight className="ml-1" size={16} />
              </Link>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Book, label: 'Articles', count: '1000+' },
              { icon: Globe, label: 'Topics', count: '50+' },
              { icon: Brain, label: 'Expert Authors', count: '100+' }
            ].map((stat, index) => (
              <div key={index} className="bg-white/50 backdrop-blur-sm rounded-xl p-6 text-center hover:transform hover:scale-105 transition-transform">
                <stat.icon className="mx-auto mb-4 text-slate-600" size={32} />
                <p className="text-3xl font-bold text-slate-800">{stat.count}</p>
                <p className="text-slate-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center space-x-4">
            <Link 
              to="/subjects" 
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl font-medium"
            >
              Start Your Journey
            </Link>
            <Link 
              to="/topics" 
              className="px-8 py-4 bg-white text-slate-800 rounded-xl hover:bg-slate-50 transition-all shadow-sm hover:shadow-md font-medium"
            >
              Browse Topics
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}