import { useState } from "react";
import MovieDisplay from "./Moviedisplay";

function MovieCard({ movie }) {

  const [showMovieDisplay, setShowMovieDisplay] = useState(false);

  return (
    <>
      <div
        className="group relative h-60 w-40 cursor-pointer overflow-hidden rounded-lg transition duration-300 hover:scale-105 hover:z-20">

        <img
          src={movie.image}
          alt={movie.title}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />

        {/* Hover Gradient */}
        <div
          className="absolute inset-x-0 bottom-0 h-1/2
                     bg-gradient-to-t from-black
                     via-black/70 to-transparent
                     opacity-0
                     group-hover:opacity-100
                     transition duration-300"
        ></div>

        {/* Hover Information */}
        <div
          className="absolute bottom-0 left-0 right-0 p-3
                     opacity-0
                     group-hover:opacity-100
                     transition duration-300"
        >

          <h2 className="font-semibold text-white truncate mb-3">
            {movie.title}
          </h2>

          <div className="flex gap-2">

            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowMovieDisplay(true);
              }}
              className="flex h-9 w-9 items-center
                         justify-center rounded-full
                         bg-white text-black
                         hover:bg-gray-300"
            >
              ▶
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowMovieDisplay(true);
              }}
              className="flex h-9 w-9 items-center
                         justify-center rounded-full
                         bg-black/70
                         border border-gray-400
                         text-white
                         hover:bg-white hover:text-black"
            >
              ⓘ
            </button>

          </div>

        </div>

      </div>

      {showMovieDisplay && (
        <MovieDisplay
          movie={movie}
          onClose={() => setShowMovieDisplay(false)}
        />
      )}

    </>
  );
}

export default MovieCard;