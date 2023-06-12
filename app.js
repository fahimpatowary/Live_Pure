function videoHiddefun() {
    let videoHidde = document.querySelector('.second-video');
    let videoHidde2 = document.querySelector('.second-video1');
  
    if (videoHidde.style.display == "none") {
      videoHidde.style.display = 'block';
      videoHidde2.style.display = "none";
    } else {
      videoHidde.style.display = "none";
      videoHidde2.style.display = "block";
    }
  }