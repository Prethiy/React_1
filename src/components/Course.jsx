import { Link } from "react-router-dom";

function Course(props) {
  return (
    <div
      className="group relative inline-flex flex-col w-40 h-60 m-5 rounded-lg overflow-hidden bg-[#222] shadow transition duration-300 hover:scale-105 hover:z-20" >

      <Link to={`/movie/${props.id}`} className="w-full h-full">

        <img
          className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
          src={props.image}
          alt={props.title}
        />

      </Link>

      <div
        className="absolute inset-x-0 bottom-0 h-1/2
                   bg-gradient-to-t
                   from-black via-black/70 to-transparent
                   opacity-0
                   group-hover:opacity-100
                   transition duration-300
                   pointer-events-none"
      ></div>

      <div
        className="absolute bottom-0 left-0 right-0
                   p-3
                   opacity-0
                   group-hover:opacity-100
                   transition duration-300
                   pointer-events-none"
      >

        <h2 className="text-white font-semibold text-sm truncate mb-3">
          {props.title}
        </h2>

        <div className="flex gap-2">

          <button
            className="w-9 h-9 rounded-full
                       bg-white text-black
                       flex items-center justify-center"
          >
            ▶
          </button>


          <button
            className="w-9 h-9 rounded-full
                       bg-black/70
                       border border-gray-400
                       text-white
                       flex items-center justify-center"
          >
            ⓘ
          </button>

        </div>

      </div>

    </div>
  );
}

export default Course;