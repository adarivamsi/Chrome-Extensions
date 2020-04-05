// Copyrights to Passionate Burger Crafts @ 2019
// Any details mail me at adarivamsi@gmail.com
// Created by Vamsi Charan Adari
// Created on 12/04/2019

$(document).ready(function(){
    setInterval(function(){
        skipVideoAd();
        closeImageAd();
    }, 1500);

    function closeImageAd(){
        var display = $('.ytp-ad-image-overlay');
        if (display.length > 0) {
            display.find('.ytp-ad-overlay-close-button').trigger('click');
        }
    }

    function skipVideoAd(){
        var skipButton = $('.ytp-ad-skip-button-slot');
        if (skipButton.length > 0) {
            skipButton.trigger('click');
        }
    }
});