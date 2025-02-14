import React,{useState} from 'react'
import { useParams } from 'react-router-dom'

export default function Topics() {
    let { subjectName, chapterName } = useParams();
    console.log(subjectName, chapterName)

    let [Topics,setTopics] = useState([
        {
            SubjectName:"Mathematics",
            AllTopics:
            [
                {
                    ChapterName: "Algebra",
                    Topics: ["Linear Equations", "Polynomials", "Matrices"]
                },
                {
                    ChapterName: "Geometry",
                    Topics: ["Shapes", "Angles", "Transformations"]
                },
                {
                    ChapterName: "Calculus",
                    Topics: ["Rates of Change", "Derivatives", "Integrals"]
                }
            ]
        },
        {
            SubjectName:"Science",
            AllTopics:
            [
                {
                    ChapterName: "Biology",
                    Topics: ["Life", "Evolution", "The Natural World"]
                },
                {
                    ChapterName: "Chemistry",
                    Topics: ["Matter", "Energy", "The Chemical Universe"]
                },
                {
                    ChapterName: "Physics",
                    Topics: ["Forces", "Motion", "The Universe"]
                }
            ]
        },
        {
            SubjectName:"Computer Science",
            AllTopics:
            [
                {
                    ChapterName: "Programming",
                    Topics: ["Creating, Debugging, and Optimizing Code"]
                },
                {
                    ChapterName: "Data Structures",
                    Topics: ["Different Data Structures", "Algorithms", "Time Complexities"]
                },
                {
                    ChapterName: "Operating Systems",
                    Topics: ["Operating System Architecture", "File Systems", "Memory Management"]
                }
            ]
        }
    ])


  return (
    <div>
        <h1>Topics for {subjectName} - {chapterName}</h1>
        <p>This is the page where you can find all the topics for the selected subject and chapter.</p>
    </div>
  )
}
