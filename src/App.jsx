import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import "./App.css"
// !------------Component-----------
import  Sidebar  from './Components/SideBar'
import Footer  from './Components/Footer'
// !------------Pages-----------
import Home  from './Pages/Home'
import Subjects  from './Pages/Courses/Subjects'
import Chapters  from './Pages/Courses/Chapters'
import Topics  from './Pages/Courses/Topics'

// !--------------------------


export default function App() {
  return (
    <div id="App">
      <BrowserRouter>
        <div id="Main">
          <div className="sidebar">
            <Sidebar />
          </div>
          
          <div className="main-content">
            <div className="route-container">
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/subjects" element={<Subjects />} />
                <Route exact path="/subjects/:subjectName/Chapters" element={<Chapters />} />
                <Route exact path="/Subjects/:subjectName/Chapters/:chapterName/Topics" element={<Topics />} />

              </Routes>
            </div>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </div>
  )
}