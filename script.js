const player = videojs('my_video');

const onAddTrack = ({ track }) => {
  console.log('onAddTrack track', track)
  track.addEventListener('cuechange', () => {
    console.log('字幕track', track)
    printCuesData(track.activeCues);
  });
};

const printCuesData = (cues)=>{
  console.log('------------ new cue ----------')
  Array.from(cues).forEach((cue) => {
      console.log({
        cue: cue,
        text: cue.text,
        start: cue.startTime,
        end: cue.endTime,
      });
  });
}

document.querySelector('.load-btn').addEventListener('click', function() {
  player.src({
    src: document.querySelector('.video-url').value,
    type: 'application/x-mpegURL'
  })
  player.ready(function() {
    console.log('player.textTracks():', player.textTracks());
    player.textTracks().addEventListener('addtrack', onAddTrack);
    player.currentTime(296)
  });
});
