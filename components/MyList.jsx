import { Link,useNavigate } from "react-router-dom";

function MyList() {
  const navigate = useNavigate();

  const myList =
    JSON.parse(localStorage.getItem("myList")) || [];

  const removeFromList = (id) => {

    const existingList =
      JSON.parse(localStorage.getItem("myList")) || [];

    const updatedList = existingList.filter(
      (movie) => movie.id !== id
    );

    localStorage.setItem(
      "myList",
      JSON.stringify(updatedList)
    );

    window.location.reload();
  };

  return (
    <div className="bg-black min-h-screen text-white ">

      <div className="flex items-center justify-between px-5 py-5">

        {/* Movies button */}
        <p
          className=" text-red-600 text-3xl font-bold ">
          My List
        </p>

        {/* Close button */}
        <button
          onClick={() => navigate(-1)}
          className="text-white text-3xl hover:text-gray-400"
        >
          ×
        </button>

      </div>

      {myList.length === 0 ? (

        <p className="text-gray-400 text-xl">
          Your list is empty.
        </p>

      ) : (

        <div className="flex flex-wrap">

          {myList.map((movie) => (

            <div
              key={movie.id}
              className="w-40 m-5"
            >

              <Link to={`/movie/${movie.id}`}>
                <img
                  src={movie.image}
                  alt={movie.title}
                  className="w-full h-60 object-cover rounded-lg"
                />
              </Link>

              <h2 className="text-lg font-semibold mt-2">
                {movie.title}
              </h2>

              <button
                onClick={() => removeFromList(movie.id)}
                className="bg-red-600 text-white px-4 py-2 rounded mt-2 hover:bg-red-700"
              >
                Remove
              </button>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}

export default MyList;