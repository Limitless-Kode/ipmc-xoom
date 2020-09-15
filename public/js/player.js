window.addEventListener('DOMContentLoaded',()=>{
    const vid = document.querySelector('video');
    const play_pause = document.querySelector('.play_pause');
  
    vid.addEventListener('contextmenu',(e)=> e.preventDefault());

  
  
    function playPause(){
      const icon = play_pause.children[0];
      if(vid.paused){
        vid.play();
        icon.setAttribute('name','pause');

      }else{
        vid.pause();
        icon.setAttribute('name','play');
      }
    }
  
  
    play_pause.addEventListener('click',()=> playPause());

    let volume = document.querySelector('.speaker');
  
    volume.addEventListener('click',()=>{
      const icon = volume.children[0];
  
      if(vid.volume == 0){
        vid.volume = 1;
        icon.setAttribute('name','volume-high-outline');
      }else{
        vid.volume = 0;
        icon.setAttribute('name','volume-mute-outline');
      }
    })
  })
  