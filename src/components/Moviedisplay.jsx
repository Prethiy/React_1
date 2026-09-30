import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { courses } from "./CourseList";

function MovieDisplay() {
  const { id } = useParams();

  const navigate = useNavigate();

  const movie = courses.find(
    (movie) => String(movie.id) === String(id)
  );


  
  const [isAdded, setIsAdded] = useState(false);



  useEffect(() => {

    const existingList =
      JSON.parse(localStorage.getItem("myList")) || [];

    const alreadyAdded = existingList.some(
      (item) => String(item.id) === String(id)
    );

    setIsAdded(alreadyAdded);

  }, [id]);


  const addToList = () => {

    const existingList =
      JSON.parse(localStorage.getItem("myList")) || [];


    const alreadyAdded = existingList.some(
      (item) => String(item.id) === String(movie.id)
    );


    if (alreadyAdded) {

      setIsAdded(true);

    } else {

      const updatedList = [
        ...existingList,
        movie
      ];

      localStorage.setItem(
        "myList",
        JSON.stringify(updatedList)
      );

      setIsAdded(true);
    }
  };


  return (
    <div className="bg-black min-h-screen text-white">


      

      <button
        onClick={() => navigate(-1)}
        className="absolute top-5 right-5 z-20 text-white px-4 py-2 rounded-full hover:bg-gray-700"
      >
        ✕
      </button>


      

      <div className="relative h-[600px]">

        <img
          src={movie.image}
          alt={movie.title}
          className="absolute inset-0 w-full h-full object-cover"
        />


        {/* DARK OVERLAY */}

        <div className="absolute inset-0 bg-black/60"></div>


        {/* BOTTOM GRADIENT */}

        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent"></div>


        

        <div className="relative z-10 flex flex-col justify-end p-10 h-full">

          <h1 className="text-5xl font-bold">
            {movie?.title}
          </h1>


          

          <div className="flex gap-3 mt-5">

            <button
              className="bg-white text-black px-6 py-2 rounded hover:bg-gray-300"
            >
              Play
            </button>

            <button
              onClick={addToList}
              className="bg-gray-500/70 px-6 py-2 rounded hover:bg-gray-600"
            >
              {isAdded
                ? "✓ Added to List"
                : "+ My List"}
            </button>


          </div>

          <p className="max-w-2xl mt-5 text-gray-200">
            {movie.description}
          </p>


          <p className="mt-3 text-gray-300">
            {movie?.genre} . {movie?.year} . {movie?.duration} .{" "}
            {movie?.crating} . {movie?.quality}
          </p>

        </div>

      </div>


      <div className="bg-black text-white p-10">

        <h2 className="text-3xl font-bold mb-5">
          More Like This
        </h2>


        <div className="flex gap-5">

          {courses.map((movie) => (

            <div
              key={movie.id}
              className="w-48 flex-shrink-0"
            >

              <Link to={`/movie/${movie.id}`}>

                <img
                  src={movie.image}
                  alt={movie.title}
                  className="w-full h-72 object-cover rounded-lg"
                />

              </Link>


              <h3 className="text-lg font-semibold mt-2">
                {movie.title}
              </h3>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default MovieDisplay;