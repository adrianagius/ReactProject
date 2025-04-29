import MovieCard from "../components/MovieCard"
import NavBar from "../components/NavBar";
import {useState} from "react"

function Home(){
    const [searchQuery, setSearchQuery] = useState("");
    const movies = [
    {id:1, title:"John Wick", release_date:"2020"},
    {id:2, title:"Wicked", release_date:"2022"},
    {id:3, title:"The Matrix 4", release_date:"2024"},
    ]   

    const handleSearch = (e) => {
        e.preventDefault()
        alert(searchQuery)
        setSearchQuery("")
    }
    return (
        <div className="home"> 
            <form onSubmit={handleSearch} className="search-form">
                <input type="text" placeholder="Search for Movies..." className="search-input" value={searchQuery} onChange={(e)=> setSearchQuery(e.target.value)}/>
                <button type="submit" className="search-button">Search</button>
            </form>
            <div className="movies-grid">
                {movies.map((movie) => 
                (<MovieCard movie={movie} key={movie.id}
                />))}
            </div>
        </div>
    )
}

export default Home