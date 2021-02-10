var containerVideo, mediaVideo;
window.addEventListener("load", function () {
    mediaVideo = document.getElementById('video');
    containerVideo = document.getElementById('container-video');
    reescalar();
});
function reescalar() {
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;
    windowAspectRatio = windowWidth / windowHeight;

    videoWidth = mediaVideo.offsetWidth;
    videoHeight = mediaVideo.offsetHeight;
    videoAspectRatio = videoWidth / videoHeight;

    if (videoAspectRatio > windowAspectRatio) {
        newVideoWidth = windowWidth * videoAspectRatio;
        containerVideo.style.width = newVideoWidth + "px";
        containerVideo.style.height = windowHeight + "px";
        let leftRight = (newVideoWidth - windowWidth) / 2;
        containerVideo.style.left = `-${leftRight}px`;
        containerVideo.style.right = `-${leftRight}px`;
        containerVideo.style.top = "0";
        containerVideo.style.button = "0";
    }
    if (videoAspectRatio == windowAspectRatio) {
        containerVideo.style.width = windowWidth + "px";
        containerVideo.style.innerHeight = windowHeight + "px";
        containerVideo.style.left = "0";
        containerVideo.style.right = "0";
        containerVideo.style.top = "0";
        containerVideo.style.button = "0";
    }
    if (videoAspectRatio < windowAspectRatio) {
        newVideoHeight = windowHeight / videoAspectRatio;
        containerVideo.style.width = windowWidth;
        containerVideo.style.height = newVideoHeight;
        let topBottom = (newVideoHeight - windowHeight) / 2;
        containerVideo.style.left = "0";
        containerVideo.style.right = "0";
        containerVideo.style.top = `-${topBottom}px`;
        containerVideo.style.button = `-${topBottom}px`;
    }
    mediaVideo.style.width = '100%';
    mediaVideo.style.height = '100%';
}

//ar = w/h
//w = w * ar
//h = w/ar