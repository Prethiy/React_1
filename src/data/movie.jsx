<function MovieData() {
    const movies=
        [
           {
            id=1;
            title="RRR";
            description="RRR is a 2022 Indian Telugu-language drama.";
            genre="Action, Drama";
            rating=7.1;
            year=2022;
            duration="3h 0m";
           },

           {
            id=2;
            title="KGF";
            description="KGF is a 2022 Indian Kannada-language action film.";
            genre="Action, Crime";
            rating=8.0;
            year=2022;
            duration="2h 45m";
           },

           {
            id=3;
            title="Hi Nanna";
            description="Hi Nanna is a 2024 Indian Telugu-language drama.";
            genre="Romance, Drama";
            rating=9.8;
            year=2024;
            duration="2h 30m";
           },

           {
            id=4;
            title="Dear Comrade";
            description="Dear Comrade is a 2023 Indian Telugu-language drama.";
            genre="Romance, Drama";
            rating=9.5;
            year=2023;
            duration="2h 15m";
           },

           {
            id=5;
            title="Karuppu";
            description="Karuppu is a 2026 Indian Tamil-language drama.";
            genre="Action, Drama";
            rating=8.2;
            year=2026;
            duration="3h 0m";
           },

           {
            id=6;
            title="With Love";
            description="With Love is a 2026 Indian Tamil-language drama.";
            genre="Romance, Drama";
            rating=9.0;
            year=2026;
            
            duration="2h 30m";
           }

        ];
    
        const movieData=movies.map(movie ) => <Movie id={movie.id} title={movie.title} description={movie.description} genre={movie.genre} rating={movie.rating} year={movie.year} duration={movie.duration} />);
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            {movieData}
            <p >{movies[0].title}</p>
        </div>
    
    );
}

export default MovieData;