/*jslint browser: true*/
/*global $, jQuery, alert*/

$(document).ready(function () {
    'use strict';
    var previous = 0,
        last = 0;
    
    function togglePhoto(x) {
        $(x).addClass('on').addClass('open').find('.message').delay(500).fadeIn();
        $(x).on('click', '.target', function () {
            var photoLink = $(x).find('a').attr('href');
            window.location = photoLink;
        });
    }
    
    function reversePhoto(x) {
        $(x).find('.message').stop(true, false).fadeOut().parent().removeClass('on').removeClass('open');
    }
    
    $('.target').mouseenter(function () {
        var target = $(this).parent(),
            current = target.attr('id');
        if ($('#photoFrame').css('height') !== '320px') {
            if (last !== current) {
                reversePhoto(previous);
                togglePhoto(target);
                previous = target;
                last = current;
            } else {
                previous = target;
                last = current;
            }
        }
    });
    
    $(window).resize(function () {
        if ($('#photoFrame').css('height') === '320px') {
            $(previous).removeClass('on').removeClass('open');
        } else if ($('#photoFrame').css('height') !== '310') {
            reversePhoto(previous);
            previous = 0;
        }
    });
});