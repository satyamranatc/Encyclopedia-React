import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import { ArrowRight, Search, BookOpen } from 'lucide-react';

export default function Subjects() {

  let [AllSubjects,setAllSubjects] = useState([
    {
      id: 1,
      subjectName: "Mathematics",
      description: "From calculus to number theory, unlock the language of the universe.",
      subjectPoster:"https://www.bwseducationconsulting.com/wp-content/uploads/2020/08/bws-maths-tutoring.jpg",

    },
    {
      id: 2,
      subjectName: "Science",
      description: "Explore the fundamental laws of nature, from quantum mechanics to astrophysics.",
      subjectPoster:"https://www.euroschoolindia.com/wp-content/uploads/2023/08/importance-of-learning-science.jpg",
    },
    {
      id: 3,
      subjectName: "Computer Science",
      description: "Learn to program, analyze algorithms, and create complex systems.",
      subjectPoster:"https://www.oecd.org/adobe/dynamicmedia/deliver/dm-aid--81da1bba-5e45-46df-9741-33c6113a84d1/a8d820bd-en.jpg?preferwebp=true&quality=80",
    }
  ])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <section className="max-w-7xl mx-auto mb-16">
        <div className="text-center space-y-8">
          <h2 className="text-4xl font-bold text-slate-800 leading-tight">
            Browse From The Biggest Repository Of
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Subjects From All Over The World
            </span>
          </h2>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
              <input
                type="text"
                placeholder="Search subjects..."
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Subjects Grid */}
      <section className="max-w-7xl mx-auto">
        <div className="space-y-6">
          {AllSubjects.map((subject) => (
            <div
              key={subject.id}
              className="group bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="flex flex-col md:flex-row">
                {/* Image Section */}
                <div className="md:w-1/3 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 group-hover:opacity-0 transition-opacity"/>
                  <img
                    src={subject.subjectPoster}
                    alt={subject.subjectName}
                    className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content Section */}
                <div className="md:w-2/3 p-6 md:p-8 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-bold text-slate-800">
                        {subject.subjectName}
                      </h3>
                      <BookOpen className="text-blue-600 w-6 h-6" />
                    </div>
                    <p className="text-slate-600 leading-relaxed">
                      {subject.description}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between">
                    <Link to={`/subjects/${subject.subjectName}/Chapters`} >
                    <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-colors shadow-md hover:shadow-lg font-medium group">
                      Explore Now
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                    </Link>
                    
                    <div className="flex items-center text-slate-500">
                      <span className="text-sm">Updated Recently</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}