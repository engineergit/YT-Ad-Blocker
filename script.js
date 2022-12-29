let skipButton = document.getElementsByClassName("ytp-ad-skip-button");

setInterval(() => {
    if (skipButton != undefined && skipButton.length > 0) {
        console.log('ad detected');
        skipButton[0].click();
    }   
}, 1000); // check for ad every 1000 milliseconds (1 second)