import React, { useEffect } from "react";
import classes from "./Search.module.css";
import axios from "axios";
import SongItem from "../components/SongCard";
import { useSelector,useDispatch } from "react-redux";
import {setsongList} from "../store/currentSongSlice"
const Search = () => {
  // const [search, setSearch] = React.useState([]);
  const [query, setQuery] = React.useState("");
  const [loading,setLoading]=React.useState(false)
  const search=useSelector(state=>state.currentSong.songList)
  const dispatch=useDispatch()
//   const [error,setError]=React.useState(null)
  const queryHandler=(e)=>{
    if(e.target.value.trim().length===0)
        dispatch(setsongList([])) 
    setQuery(e.target.value)
  }
  useEffect(() => {
    const fun = async () => {

      const options = {
        method: "GET",
        url: "https://spotify23.p.rapidapi.com/search/",
        params: {
          q: query,
          type: "multi",
          offset: "0",
          limit: "10",
          numberOfTopResults: "5",
        },
        headers: {
          "X-RapidAPI-Key":
            "95dd194559msh8b7209341474d43p10eed0jsn1407154502d7",
          "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
        },
      };
      try{
        const response = await axios.request(options);
        dispatch(setsongList(response.data.albums.items));
        console.log(response.data.albums.items);
      }
      catch(err){
        console.log(search)
            dispatch(setsongList([]))
      }
    };
    setLoading(true);
    const t=setTimeout(()=>{
        fun();
        setLoading(false);
    },3000)
    return ()=>{
        clearTimeout(t)
    }
  }, [query]);
  const content=(search.length===0)?<p style={{color:"white",fontWeight:"bold",fontSize:"1.5rem"}}>No results found</p>:
  <ul style={{ color: "white" }} className={classes.searchlist}>
  {search.map((item, index) => (
    <SongItem
      key={index}
      id={index}
      img={item.data.coverArt.sources[0].url }
      name={item.data.name}
      date={item.data.date.year}
      artist={item.data.artists.items[0].profile.name}
      src={item.data.uri}
    />
  ))}
</ul>
  return (
    <div className={classes.search}>
      <form className={classes.container}>
        <input
          maxLength="800"
          className={classes.form}
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
          placeholder="What do you want to listen to?"
          onChange={queryHandler}
        />
      </form>
      {
            (loading)?<p style={{color:"white",fontWeight:"bold",fontSize:"1.5rem"}}>Loading...</p>:content
      }
     

    </div>
  );
};

export default Search;
