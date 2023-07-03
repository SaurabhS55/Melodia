import React, { useState } from 'react';
import { Box, Flex, color } from '@chakra-ui/react';
import { MdSkipPrevious, MdSkipNext, MdPlayArrow, MdPause, MdGraphicEq } from 'react-icons/md';
import VolumeUp from '@mui/icons-material/VolumeUp';
import CustomSlider from '../theme/CustomSlider';
import styles from './Footer.module.css';

const Footer = (props) => {
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
    const defaultimg="https://dev-resws-hungamatech-com.storage.googleapis.com/featured_content/0c7860ad2ab6962612e59cdfc6c4cd44_500x500.jpg"
  const handlePlay = (song) => {
    setCurrentSong(song);
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const handlePrevious = () => {
    // Logic to play the previous song
  };

  const handleNext = () => {
    // Logic to play the next song
  };
 
  return (
    <Flex as="div" h="5rem" w="95vw" bg="rgb(20,20,25)" boxShadow="0px 2px 4px rgba(113, 108, 108, 0.8)" borderRadius="15px" padding="15px" margin="0px auto">
        <Box w="20%" h="100%" bg="gray.700" color="white" display="flex" alignItems="center" justifyContent="center">
            <img src="https://dev-resws-hungamatech-com.storage.googleapis.com/featured_content/0c7860ad2ab6962612e59cdfc6c4cd44_500x500.jpg" alt="music img" width="70px" height="70px"/>
        </Box>
        <Box w="80%" h="100%" bg="gray.700" color="white" display="flex" alignItems="center" justifyContent="center" flexDirection="column">
            <Box w="20%" h="100%" display="flex" alignItems="center" justifyContent="space-between">
                <MdSkipPrevious size="2rem" />
                {isPlaying ? <div style={{backgroundColor:"white", padding:"3px",borderRadius:"60px"}}><MdPause size="2rem" color='black' onClick={handlePause} /></div> : <div style={{backgroundColor:"white", padding:"3px",borderRadius:"70px"}}><MdPlayArrow size="2rem" color='black' onClick={() => handlePlay(props.song)} /></div>}
                <MdSkipNext size="2rem" />
            </Box>
            <Box width="50%" height="100%" display="flex" alignItems="center" justifyContent="center" gap="10px">
        
            <span>0:00</span>
            <CustomSlider
            aria-label="Temperature"
            defaultValue={30}
            color="secondary"
            />
            <span>3:29</span>
      </Box>
        </Box>
        <Box w="20%" h="100%" bg="gray.700" color="white" display="flex" alignItems="center" padding="15px" justifyContent="center" gap="10px">
        <VolumeUp />
        <CustomSlider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
        </Box>

    </Flex>

  );
};

export default Footer;
