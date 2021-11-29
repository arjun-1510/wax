import { useState, useEffect } from "react";
import Player from "./components/Player";
//import Heart from "./heart.json";
import Lottie from "react-lottie";
//import Heart from './heart.json';
import Love from './love.json';

function App() {
  const [songs] = useState([
    {
      title: "Bhuvana",
      artist: "HBD chellam",
      img_src: "./images/bhuvana1.jpeg",
      src: "./music/UnnaiKandane.mp3",
    },
    {
      title: "Honey Love U",
      artist: "alway stay with me",
      img_src: "./images/bhuvana2.jpeg",
      src: "./music/Anbe.mp3",
    },
    {
      title: "Care Ni Karda",
      artist: "Yo Yo Honey Singh",
      img_src: "./images/bhuvana31.jpeg",
      src: "./music/Care Ni Karda.mp3",
    },
    {
      title: "Burj Khalifa",
      artist: "Shashi",
      img_src: "./images/bhuvana41.jpeg",
      src: "./music/BurjKhalifa.mp3",
    },
    {
      title: "Tango Del Fuego",
      artist: "Parov Stelar",
      img_src: "./images/ParovStelarGeorgiaGibbs-TangoDelFuego.jpg",
      src: "./music/ParovStelarGeorgiaGibbs-TangoDelFuego.mp3",
    },
    {
      title: "Take You Dancing",
      artist: "Jason Derulo",
      img_src: "./images/JasonDerulo-TakeYouDancing.jpg",
      src: "./music/JasonDerulo-TakeYouDancing.mp3",
    },
    {
      title: "Daisy",
      artist: "Ashnikko",
      img_src: "./images/Ashnikko-Daisy.jpg",
      src: "./music/Ashnikko-Daisy.mp3",
    },
    {
      title: "Dolly Song",
      artist: "Partz Grimbad",
      img_src: "./images/PatzGrimbard-DollySong.jpg",
      src: "./music/PatzGrimbard-DollySong.mp3",
    },
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex, songs.length]);


  //React animation is started

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Love,
    rendererSettings: {
      // preserveAspectRatio: "xMidYMid slice"
    }
  };
 






  const  [loading, setLoading] = useState(false);
   
  useEffect(() => {

    setLoading(true)
    setTimeout(() => {
       setLoading(false)
    }, 4000)

  },[])


  return (
    <div className="App">
      
      {
        loading ? 
        
        <Lottie  options={defaultOptions}  height={400} width={400}/>
        :
      
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />
}
    </div>
  );
}

export default App;
