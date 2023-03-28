const video = document.querySelector('video');
const bottomCta = document.querySelector('.bottom-cta');

let videoPlayedFor89s = false;

video.addEventListener('timeupdate', () => {
  if (video.currentTime >= 78 && !videoPlayedFor89s) {
    bottomCta.classList.remove('hidden');
    videoPlayedFor89s = true;
  }
});

bottomCta.addEventListener('click', () => {
  window.location.href = "https://go.hotmart.com/Q80903705X?ap=05af";  
});