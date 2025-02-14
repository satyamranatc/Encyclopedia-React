import React,{useState} from 'react'
import { useParams,Link } from 'react-router-dom';
import { ArrowRight, Search, BookOpen, ChevronRight } from 'lucide-react';

export default function Chapters() {
  let { subjectName } = useParams();
  let [AllChaptersData,setAllChapterData] = useState([
    {
      SubjectName:"Mathematics",
      AllChapters:[
        {
          id: 1,
          ChapterName: "Algebra",
          description: "Learn about linear equations, polynomials, and matrices.",
          ChapterPoster:"https://www.brseducationconsulting.com/wp-content/uploads/2020/08/bws-algebra-tutoring.jpg",
    
        },
        {
          id: 2,
          ChapterName: "Geometry",
          description: "Learn about shapes, angles, and transformations.",
          ChapterPoster:"https://www.brseducationconsulting.com/wp-content/uploads/2020/08/bws-geometry-tutoring.jpg",
        },
        {
          id: 3,
          ChapterName: "Calculus",
          description: "Learn about rates of change, derivatives, and integrals.",
          ChapterPoster:"https://www.brseducationconsulting.com/wp-content/uploads/2020/08/bws-calculus-tutoring.jpg",
        }
      ]
    },
    {
      SubjectName:"Science",
      AllChapters:[
        {
          id: 1,
          ChapterName: "Biology",
          description: "Learn about life, evolution, and the natural world.",
          ChapterPoster:"https://www.brseducationconsulting.com/wp-content/uploads/2020/08/bws-biology-tutoring.jpg",
        },
        {
          id: 2,
          ChapterName: "Chemistry",
          description: "Learn about matter, energy, and the chemical universe.",
          ChapterPoster:"https://www.brseducationconsulting.com/wp-content/uploads/2020/08/bws-chemistry-tutoring.jpg",
        },
        {
          id: 3,
          ChapterName: "Physics",
          description: "Learn about forces, motion, and the universe.",
          ChapterPoster:"https://www.brseducationconsulting.com/wp-content/uploads/2020/08/bws-physics-tutoring.jpg",
        }
      ]
    },{
      SubjectName:"Computer Science",
      AllChapters:[
        {
          id: 1,
          ChapterName: "Programming",
          description: "Learn to create, debug, and optimize code.",
          ChapterPoster:"https://cdn.builtin.com/cdn-cgi/image/f=auto,fit=cover,w=1200,h=635,q=80/https://builtin.com/sites/www.builtin.com/files/2024-09/programming-languages.jpg",
        },
        {
          id: 2,
          ChapterName: "Data Structures",
          description: "Learn about different data structures, algorithms, and time complexities.",
          ChapterPoster:"https://cdn.builtin.com/cdn-cgi/image/f=auto,fit=cover,w=1200,h=635,q=80/https://builtin.com/sites/www.builtin.com/files/2024-09/programming-languages.jpg",
        },
        {
          id: 3,
          ChapterName: "Algorithms",
          description: "Learn about sorting, searching, and problem-solving algorithms.",
          ChapterPoster:"https://cdn.builtin.com/cdn-cgi/image/f=auto,fit=cover,w=1200,h=635,q=80/https://builtin.com/sites/www.builtin.com/files/2024-09/programming-languages.jpg",
        }
      ]
    }
  ])

  const selectedChapters = AllChaptersData.find(item => item.SubjectName === subjectName)
  console.log(selectedChapters)
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Enhanced Header Section */}
      <section className="max-w-7xl mx-auto mb-16">
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center space-x-2 text-blue-600 mb-4">
              <span className="text-sm font-medium">Subjects</span>
              <ChevronRight size={16} />
              <span className="text-sm font-medium">{subjectName}</span>
            </div>
            
            <h2 className="text-4xl font-bold text-slate-800 leading-tight">
              Explore Chapters in {subjectName}
              <span className="block text-xl text-slate-600 mt-4 font-normal">
                Master every concept with our comprehensive curriculum
              </span>
            </h2>

            {/* Search Bar */}
            <div className="max-w-xl mx-auto mt-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
                <input
                  type="text"
                  placeholder="Search Chapters..."
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapters Grid */}
      <section className="max-w-7xl mx-auto">
        <div className="space-y-6">
          {selectedChapters.AllChapters.map((Chapter) => (
            <div
              key={Chapter.id}
              className="group bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="flex flex-col md:flex-row">
                {/* Image Section */}
                <div className="md:w-1/3 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 group-hover:opacity-0 transition-opacity"/>
                  <img
                    src={Chapter.ChapterPoster}
                    alt={Chapter.ChapterName}
                    className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content Section */}
                <div className="md:w-2/3 p-6 md:p-8 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-bold text-slate-800">
                        {Chapter.ChapterName}
                      </h3>
                      <BookOpen className="text-blue-600 w-6 h-6" />
                    </div>
                    <p className="text-slate-600 leading-relaxed">
                      {Chapter.description}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between">
                   <Link to = {`/Subjects/${subjectName}/Chapters/${Chapter.ChapterName}/Topics`}>
                   <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-colors shadow-md hover:shadow-lg font-medium group">
                      Start Learning
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                   </Link>
                    
                    <div className="flex items-center text-slate-500">
                      <span className="text-sm">5 Lessons</span>
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