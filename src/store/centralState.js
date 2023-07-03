import { configureStore } from '@reduxjs/toolkit';
import currentSongSlice from './currentSongSlice';
const store = configureStore(
    {
        reducer: {
            currentSong: currentSongSlice
        }
    }
);
export default store;

