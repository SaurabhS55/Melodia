import {createSlice} from '@reduxjs/toolkit'

const currentSongSlice = createSlice({
    name: 'currentSong',
    initialState: {
        currentSong: {
            id: undefined,
            img: '',
            src: '',
            isPlaying: false,   
            name: '',
            artist: '',
            date: '',
        },
        songList: []
    },
    reducers: {
        setCurrentSong: (state, action) => {
            const newSong = action.payload;
            const currentSong = state.currentSong;
      
            if (currentSong && currentSong.id === newSong.id) {
              // If the same song is already playing, toggle its play state
              state.currentSong.isPlaying = !currentSong.isPlaying;
            } else {
              // Pause the currently playing song, if any
              if (currentSong) {
                state.currentSong.isPlaying = false;
              }
              // Play the new song
              state.currentSong = {
                ...newSong,
                isPlaying: true
              };
            }
          },
        setsongList(state, action) {
            state.songList = action.payload
        }
    }
})

export const {setCurrentSong,setsongList} = currentSongSlice.actions
export default currentSongSlice.reducer
