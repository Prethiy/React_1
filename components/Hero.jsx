import React from "react";
import { Link } from "react-router-dom";
import { courses } from "./CourseList";

function Hero() {
  const featuredMovie = courses[0];

  return (
    <div className="min-h-screen bg-[#141414] text-white">

      <nav className="fixed top-0 left-0 right-0 z-50 h-[70px] flex items-center px-8 bg-gradient-to-b from-black via-black/80 to-transparent">
    
        
            <div className="text-red-600 text-3xl font-extrabold mr-10 tracking-tight">
              STREAMBOX
            </div>
    
            
            <div className="hidden md:flex items-center gap-7 text-[15px] font-medium">
    
              <Link to="/" className="bg-[#444] px-3 py-2 rounded-full text-white"
              >
                Home
              </Link>
    
              <Link to="/movies" className="text-gray-300 hover:text-white cursor-pointer transition">
                Movies
              </Link>
    
                <Link to="/mylist" className="text-gray-300 hover:text-white cursor-pointer transition">
                My List
              </Link>
    
    
            </div>
    
            {/* Right side */}
            <div className="ml-auto flex items-center gap-6">
    
              {/* Search */}
              <span className="text-3xl cursor-pointer hover:text-gray-300">
                ⌕
              </span>
    
              {/* Notification */}
              <div className="relative cursor-pointer">
                <span className="text-2xl">
                  🔔
                </span>
    
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  3
                </span>
              </div>
    
              {/* Profile */}
              <div className="flex items-center gap-2 cursor-pointer">
                <img
                  src="https://i.pravatar.cc/100?img=12"
                  alt="Profile"
                  className="w-9 h-9 rounded object-cover"
                />
    
                <span className="text-xs">
                  ▼
                </span>
              </div>
    
            </div>
          </nav>
    

      {/* ================= HERO ================= */}

      {featuredMovie && (
        <section
          className="relative mx-0 md:mx-12 h-[650px] md:h-[760px] rounded-none md:rounded-[25px] overflow-hidden bg-cover bg-center flex items-end"
          style={{
            backgroundImage: `url(${featuredMovie.image})`,
          }}
         >

          {/* Dark gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent"></div>

          {/* Bottom gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent"></div>


          {/* Hero Content */}
          <div className="relative z-10 ml-6 md:ml-10 mb-20 w-[90%] md:w-[520px]">

            <p className="text-sm tracking-[3px] font-bold mb-2">
              STREAMBOX ORIGINAL
            </p>

            <h1 className="text-5xl md:text-7xl font-black uppercase leading-[0.95] mb-6">
              {featuredMovie.title}
            </h1>

            {/* Movie details */}
            <div className="flex flex-wrap items-center gap-2 text-sm md:text-base font-bold mb-5">
              <span>Series</span>
              <span>•</span>
              <span>2026</span>
              <span>•</span>
              <span>Drama</span>
              <span>•</span>
              <span>16+</span>
            </div>

            {/* Description */}
            <p className="text-gray-200 text-sm md:text-base leading-6 mb-6 max-w-[500px]">
              {featuredMovie.description}
            </p>

            {/* Buttons */}
            <div className="flex gap-3">

              {/* Play */}
              <button className="flex items-center gap-2 bg-white text-black px-6 py-2 rounded hover:bg-gray-300">
                <span className="text-xl">
                  ▶
                </span>

                Play
              </button>

              {/* More Info */}
              <Link
  to={`/movie/${featuredMovie.id}`}
  className="flex items-center gap-2 bg-gray-500/70 px-6 py-2 rounded hover:bg-gray-600"
>
  <span className="text-xl">
    ⓘ
  </span>

  More Info
</Link>
            </div>

          </div>


          {/* Sound Button */}
          <button className="absolute right-8 bottom-10 z-20 w-11 h-11 rounded-full border border-white/50 bg-gray-500/40 backdrop-blur-sm flex items-center justify-center hover:bg-gray-500/70">
            🔊
          </button>

        </section>
      )}


      {/* ================= MOVIE SECTIONS ================= */}

      <main className="px-6 md:px-12 pb-16">

        <MovieRow
          title="Popular on Streambox"
          movies={courses}
        />

        <MovieRow
          title="Trending Now"
          movies={[...courses].reverse()}
        />

        <MovieRow
          title="Continue Watching"
          movies={courses}
        />

        <MovieRow
          title="Recommended for You"
          movies={[...courses].slice(3, 6)}
        />

      </main>

    </div>
  );
}


/* =====================================================
   MOVIE ROW
===================================================== */

function MovieRow({ title, movies }) {

  return (
    <section className="mt-8 md:mt-10">

      {/* Row title */}
      <h2 className="text-xl md:text-2xl font-bold mb-4">
        {title}
      </h2>


      {/* Horizontal cards */}
      <div className="flex gap-3 overflow-x-auto pb-5 scrollbar-hide">

        {movies.map((movie,) => (

          <Link
            key={movie.id}
            to={`/movie/${movie.id}`}
            className="group relative flex-shrink-0 w-[160px] sm:w-[190px] md:w-[220px] h-[240px] sm:h-[285px] md:h-[320px] rounded-lg overflow-hidden bg-[#222] transition duration-300 hover:scale-105 hover:z-20"
          >

            {/* Movie image */}
            <img
              src={movie.image}
              alt={movie.title}
              className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
            />


            {/* Hover gradient */}
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-black/70 to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>


            {/* Hover information */}
            <div className="absolute left-0 right-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition duration-300">

              <h3 className="font-bold text-sm mb-3 truncate">
                {movie.title}
              </h3>

              <div className="flex gap-2">

                {/* Play */}
                <button
                  onClick={(e) => e.stopPropagation()}
                  className="w-9 h-9 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-300"
                >
                  ▶
                </button>

                {/* Info */}
                <button
                  onClick={(e) => e.stopPropagation()}
                  className="w-9 h-9 rounded-full bg-black/70 border border-gray-400 flex items-center justify-center hover:bg-white hover:text-black"
                >
                  ⓘ
                </button>

              </div>

            </div>

          </Link>

        ))}

      </div>

    </section>
  );
}

export default Hero;