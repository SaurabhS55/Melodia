// import React, { useState } from 'react'
import classes from './SongCard.module.css'
import play from '../assets/play.png'
import pause from '../assets/pause.png'
import {useDispatch,useSelector} from "react-redux"
import {setCurrentSong} from "../store/currentSongSlice"
const SongCard= (props) => {
  // const [button, setButton] = useState(false)
  const currentSong=useSelector(state=>state.currentSong.currentSong)
  const dispatch=useDispatch()
  const name=(props.name.trim().length>30)?props.name.trim().substring(0,30)+"...":props.name.trim()
  const playHandler = () => {
    dispatch(setCurrentSong({
      id: props.id,
      img: props.img,
      src: props.src,
      isPlaying:(currentSong.id===props.id)?!currentSong.isPlaying:true,   
      name: name,
      artist: props.artist,
      date: props.date,

    }))
  }
  return (
    <div className={classes.songcard}>
        <img src={props.img} width={150} height={150}/>
        <div className={classes.songinfo}>
          <p>{name}</p>

          <div className={classes.end}>
            <p>{props.date} .|</p>
            <p>. {props.author}</p>
            <button className={(currentSong.isPlaying)?classes.pause:classes.play} onClick={playHandler}>
              <img src={(currentSong.isPlaying)?pause:play} alt="play" />
            </button>
          </div>
        </div>

    </div>
  )
}

export default SongCard