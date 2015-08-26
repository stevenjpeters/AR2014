/*jslint browser: true*/
/*global $, jQuery, alert*/

$(document).ready(function () {
    'use strict';
    var mobileMenu = $('#mobile_menu').find('.Item-5'),
        topMobileMenu = $('#search2'),
        pathname = window.location.pathname;
    $('<li class=" Item-6 "><a href="/2014annualreport/Presidents-Message" class="menuitem " title="Message from the President"><span>Message from the President & Chairperson</span></a></li>').insertAfter(mobileMenu);
    $('<div id="mobile_menu"><div class="menu_main"><div class="multi_menu"><ul class="dropdown "><li><a href="/2014annualreport/about-illinois-mutual" class="menuitem"><span>About Us</span></a></li><li><a href="/annualreport2013/photocontestwinners" target="_blank" class="menuitem"><span>Illinois Mutual Photo Contest</span></a></li></ul></div></div></div>').insertAfter(topMobileMenu);
    $('a.menuitem[href="' + pathname + '"]').parent().addClass('current');
});