import Course from "./Course";
import Dude from "./Dude.avif";
import HiNanna from "./hi-nanna_.webp";
import Irugapatru from "./iruggapattru.jpg";
import Leo from "./Leo.avif";
import NOV from "./nithamoruvaanam.jpg";
import WithLove from "./With love.jpg";
import { useNavigate,Link } from "react-router-dom";

   



    export const courses=
        [
           {
            id: 1,
            title: "Dude",
            image: Dude,
            description: "Romantic comedy indian drama.",
            genre: "Romance, Drama",
            rating: 7.1,
            year: 2025,
            duration: "3h 0m",
            crating: "U/A 13+",
            quality: "HD",
            description:"Dude is a Tamil-language romantic comedy about love, relationships and life.", 
            cast: "Pr, Mamitha baiju",
            tags: "Romantic, Emotional, Feel-Good"
           },

           {
            id: 2,
            title: "Irugapatru",
            image: Irugapatru,
            description: "Irugapatru is a 2022 Indian Tamil-language psychological film.",
            genre: "Romance, Drama",
            rating: 9.0,
            year: 2022,
            duration: "2h 45m",
            crating: "U/A 13+", 
            quality: "HD",
            description:"Irugapatru is a Tamil-language psychological drama about love, relationships and life.",
            cast: "Mano, Mithra",
            tags: "Romantic, Emotional, Feel-Good"
           },

           {
            id: 3,
            title: "Hi Nanna",
            image: HiNanna,
            description: "Hi Nanna is a 2024 Indian Telugu-language drama.",
            genre: "Romance, Drama",
            rating: 9.8,
            year: 2024,
            duration: "2h 30m",
            crating: "U/A 13+",
            quality: "HD",
            description:"Hi Nanna is a Telugu-language romantic drama about love, relationships and life.",
            cast: "Nani, Murnal thakurr",
            tags: "Romantic, Emotional, Feel-Good"
           },

           {
            id: 4,
            title: "Leo",
            image: Leo,
            description: "Leo is a 2023 Indian Tamil-language drama.",
            genre: "Action, Drama",
            rating: 9.5,
            year: 2023,
            duration: "2h 15m",
            crating: "U/A 13+",
            quality: "HD",
            description:"Leo is a Tamil-language action drama about love, relationships and life.",
            cast: "Vijay, Trisha, Sanjay Dutt",
            tags: "Action, Emotional, Feel-Good"
           },

           {
            id: 5,
            title: "Nitham Oru Vaanam",
            image: NOV,
            genre: "Romance, Drama",
            rating: 9.4,
            year: 2024,
            duration: "3h 0m",
            crating: "U/A 13+",
            quality: "HD",
            description:"Nitham Oru Vaanam is a Tamil-language romantic drama about love, relationships and life.",
            cast: "Ashok selvan, Ritu Varma",
            tags: "Romantic, Emotional, Feel-Good"
           },

           { id: 6,
             title: "With Love",
             image: WithLove,
             year: "2026",
             duration: "2h 15m",
             crating: "U/A 13+",
             quality: "HD",
             description:"With Love is a Tamil-language romantic drama about love, relationships and life.",
             cast: "ashok jeevan, Anushka",
             genre: "Drama Movies, Romantic Movies, Tamil Movies",
             tags: "Romantic, Emotional, Feel-Good"
            },
            
        ]

    function CourseList(){

    const navigate = useNavigate();
    
    const coursesList=courses.map((course)=> <Course key={course.id} id={course.id} title={course.title} image={course.image} year={course.year} 
    duration={course.duration} crating={course.crating} quality={course.quality} description={course.description} cast={course.cast} 
    genre={course.genre} tags={course.tags}  />);


  
  return (
    <div className="relative min-h-screen bg-black">


      <div className="flex items-center justify-between px-5 py-5">

        <p
          className=" text-red-600 text-3xl font-bold ">
          Movies
        </p>

        <button
          onClick={() => navigate(-1)}
          className="text-white text-3xl hover:text-gray-400"
        >
          ×
        </button>

      </div>

      <div className="px-5 pt-5">
        {coursesList}
      </div>

    </div>
  );
}

export default CourseList;