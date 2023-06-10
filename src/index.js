import Player  from '@vimeo/player';
import throttle from 'lodash.throttle';


const videoPlayer = new Player('vimeo-player');


videoPlayer.on('timeupdate', throttle((time) => {

    localStorage.setItem("videoplayer-current-time", time.hour);


}, 1000));


videoPlayer.setCurrentTime(localStorage.getItem("videoplayer-current-time"));