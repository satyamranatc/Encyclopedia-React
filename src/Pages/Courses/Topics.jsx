import React,{useState} from 'react'
import { useParams } from 'react-router-dom'

export default function Topics() {
  let { subjectName } = useParams();
  let [AllTopics,setallTopics] = useState([
    {
      SubjectName:"Math",
      AllTopics:[
        {
          id: 1,
          topicName: "Algebra",
          description: "Learn about linear equations, polynomials, and matrices.",
          topicPoster:"https://www.brseducationconsulting.com/wp-content/uploads/2020/08/bws-algebra-tutoring.jpg",
    
        },
        {
          id: 2,
          topicName: "Geometry",
          description: "Learn about shapes, angles, and transformations.",
          topicPoster:"https://www.brseducationconsulting.com/wp-content/uploads/2020/08/bws-geometry-tutoring.jpg",
        },
        {
          id: 3,
          topicName: "Calculus",
          description: "Learn about rates of change, derivatives, and integrals.",
          topicPoster:"https://www.brseducationconsulting.com/wp-content/uploads/2020/08/bws-calculus-tutoring.jpg",
        }
      ]
    },
    {
      SubjectName:"Science",
      AllTopics:[
        {
          id: 1,
          topicName: "Biology",
          description: "Learn about life, evolution, and the natural world.",
          topicPoster:"https://www.brseducationconsulting.com/wp-content/uploads/2020/08/bws-biology-tutoring.jpg",
        },
        {
          id: 2,
          topicName: "Chemistry",
          description: "Learn about matter, energy, and the chemical universe.",
          topicPoster:"https://www.brseducationconsulting.com/wp-content/uploads/2020/08/bws-chemistry-tutoring.jpg",
        },
        {
          id: 3,
          topicName: "Physics",
          description: "Learn about forces, motion, and the universe.",
          topicPoster:"https://www.brseducationconsulting.com/wp-content/uploads/2020/08/bws-physics-tutoring.jpg",
        }
      ]
    },{
      SubjectName:"Computer Science",
      AllTopics:[
        {
          id: 1,
          topicName: "Programming",
          description: "Learn to create, debug, and optimize code.",
          topicPoster:"https://www.brseducationconsulting.com/wp-content/uploads/2020/08/bws-programming-tutoring.jpg",
        },
        {
          id: 2,
          topicName: "Data Structures",
          description: "Learn about different data structures, algorithms, and time complexities.",
          topicPoster:"https://www.brseducationconsulting.com/wp-content/uploads/2020/08/bws-data-structures-tutoring.jpg",
        },
        {
          id: 3,
          topicName: "Algorithms",
          description: "Learn about sorting, searching, and problem-solving algorithms.",
          topicPoster:"https://www.brseducationconsulting.com/wp-content/uploads/2020/08/bws-algorithms-tutoring.jpg",
        }
      ]
    }
  ])
  return (
    <div>
      <h1>Welcome</h1>
      <p>{subjectName}</p>
    </div>
  )
}
