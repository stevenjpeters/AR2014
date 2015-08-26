/*jslint browser: true*/
/*global $, jQuery, alert*/
/*jslint plusplus: true */

//Life Claims Stat
$(document).ready(function () {
    'use strict';
    var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',');
    function lifeNumber() {
        $('#LCNumber').animateNumber(
            {
                number: 28382107,
                numberStep: comma_separator_number_step
            },
            2500
        ).delay(500).queue(function () {
            var el = $('.lifeClaims .copy'),
                curHeight = el.height(),
                autoHeight = el.css('height', 'auto').height();
            el.height(curHeight).animate({
                height: autoHeight
            }, 1000, "easeInOutQuint");
        });
    }
    
    if ($('.lifeClaims .copy').visible()) {
        lifeNumber();
    } else {
        $(document).scroll(function () {
            if ($('.lifeClaims .copy').visible()) {
                lifeNumber();
            }
        }
                          );
    }
});

//Workplace Claims Stat
$(document).ready(function () {
    'use strict';
    var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',');
    function workNumber() {
        $('#WPNumber').animateNumber(
            {
                number: 2400,
                numberStep: comma_separator_number_step
            },
            2500
        ).delay(500).queue(function () {
            var el = $('.wpClaims .copy'),
                curHeight = el.height(),
                autoHeight = el.css('height', 'auto').height();
            el.height(curHeight).animate({
                height: autoHeight
            }, 1000, "easeInOutQuint");
        });
    }
    
    if ($('.wpClaims .copy.bottom').visible()) {
        workNumber();
    } else {
        $(document).scroll(function () {
            if ($('.wpClaims .copy.bottom').visible()) {
                workNumber();
            }
        }
                          );
    }
});

//Disability Income Coverage Stat
$(document).ready(function () {
    'use strict';
    var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',');
    function disabilityNumber() {
        $('#DINumber').animateNumber(
            {
                number: 96000,
                numberStep: comma_separator_number_step
            },
            2500
        ).delay(500).queue(function () {
            var el = $('.diClaims .copy'),
                curHeight = el.height(),
                autoHeight = el.css('height', 'auto').height();
            el.height(curHeight).animate({
                height: autoHeight
            }, 1000, "easeInOutQuint");
        });
    }
    
    if ($('.diClaims .copy').visible()) {
        disabilityNumber();
    } else {
        $(document).scroll(function () {
            if ($('.diClaims .copy').visible()) {
                disabilityNumber();
            }
        }
                          );
    }
});

//United Way Pledge Amount Stat
$(document).ready(function () {
    'use strict';
    var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',');
    function unitedWayNumber() {
        $('#IMNumber').animateNumber(
            {
                number: 118800,
                numberStep: comma_separator_number_step
            },
            2500
        ).delay(500).queue(function () {
            $('.uwPledge .copy').animate({
                height: "32px"
            }, 1000, "easeInOutQuint");
        });
    }
    
    if ($('.uwPledge .copy.bottom').visible()) {
        unitedWayNumber();
    } else {
        $(document).scroll(function () {
            if ($('.uwPledge .copy.bottom').visible()) {
                unitedWayNumber();
            }
        }
                          );
    }
});

//Hall of Fame Stat
$(document).ready(function () {
    'use strict';
    if ($('#animTrigger').visible()) {
        $('.hallOfFame').delay(4000).fadeIn();
        $('.hallOfFame .trophy').delay(4000).each(function (i) {
            $(this).delay((i++) * 250).animate({
                'margin-top': "0"
            });
        }).delay(1500).queue(function () {
            var el = $('.hallOfFame .copy'),
                curHeight = el.height(),
                autoHeight = el.css('height', 'auto').height();
            el.height(curHeight).animate({
                height: autoHeight
            }, 1000, "easeInOutQuint");
        });
    } else {
        $(window).scroll(function () {
            if ($('#animTrigger').visible()) {
                $('.hallOfFame').fadeIn();
                $('.hallOfFame .trophy').each(function (i) {
                    $(this).delay((i++) * 250).animate({
                        'margin-top': "0"
                    });
                }).delay(1500).queue(function () {
                    var el = $('.hallOfFame .copy'),
                        curHeight = el.height(),
                        autoHeight = el.css('height', 'auto').height();
                    el.height(curHeight).animate({
                        height: autoHeight
                    }, 1000, "easeInOutQuint");
                });
            }
        });
    }
});

//Photo Contest Stat
$(document).ready(function () {
    'use strict';
    if ($('#animTrigger').visible()) {
        $('.photoContest').delay(4000).fadeIn();
        $('.gallery .photo').delay(4000).each(function (i) {
            $(this).delay((i++) * 150).animate({
                'margin-top': "0px"
            });
        });
        $('#PCNumber').delay(4000).animateNumber(
            {
                number: 13
            },
            1950
        ).delay(500).queue(function () {
            var el = $('.photoContest .copy.bottom'),
                curHeight = el.height(),
                autoHeight = el.css('height', 'auto').height();
            el.height(curHeight).animate({
                height: autoHeight
            }, 1000, "easeInOutQuint");
        });
    } else {
        $(document).scroll(function () {
            if ($('#animTrigger').visible()) {
                $('.photoContest').fadeIn();
                $('.gallery .photo').each(function (i) {
                    $(this).delay((i++) * 150).animate({
                        'margin-top': "0px"
                    });
                });
                $('#PCNumber').animateNumber(
                    {
                        number: 13
                    },
                    1950
                ).delay(500).queue(function () {
                    var el = $('.photoContest .copy.bottom'),
                        curHeight = el.height(),
                        autoHeight = el.css('height', 'auto').height();
                    el.height(curHeight).animate({
                        height: autoHeight
                    }, 1000, "easeInOutQuint");
                });
            }
        });
    }
});

//CI Launch Stat
$(document).ready(function () {
    'use strict';
    if ($('#animTrigger').visible()) {
        var el = $('.newCI .copy.bottom'),
            curHeight = el.height(),
            autoHeight = el.css('height', 'auto').height();
        el.height(curHeight).delay(4000).animate({
            height: autoHeight
        }, 1000, "easeInOutQuint");
    } else {
        $(document).scroll(function () {
            if ($('#animTrigger').visible()) {
                var el = $('.newCI .copy.bottom'),
                    curHeight = el.height(),
                    autoHeight = el.css('height', 'auto').height();
                el.height(curHeight).animate({
                    height: autoHeight
                }, 1000, "easeInOutQuint");
            }
        });
    }
});

//Policy Service Call Stat
$(document).ready(function () {
    'use strict';
    var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',');
    if ($('#animTrigger').visible()) {
        $('.psCalls').delay(4000).fadeIn();
        $('#PSNumber').delay(4000).animateNumber(
            {
                number: 50758,
                numberStep: comma_separator_number_step
            },
            2500
        ).delay(500).queue(function () {
            var el = $('.psCalls .copy'),
                curHeight = el.height(),
                autoHeight = el.css('height', 'auto').height();
            el.height(curHeight).animate({
                height: autoHeight
            }, 1000, "easeInOutQuint");
        });
    } else {
        $(window).scroll(function () {
            var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',');
            if ($('#animTrigger').visible()) {
                $('.psCalls').fadeIn();
                $('#PSNumber').animateNumber(
                    {
                        number: 50758,
                        numberStep: comma_separator_number_step
                    },
                    2500
                ).delay(500).queue(function () {
                    var el = $('.psCalls .copy'),
                        curHeight = el.height(),
                        autoHeight = el.css('height', 'auto').height();
                    el.height(curHeight).animate({
                        height: autoHeight
                    }, 1000, "easeInOutQuint");
                });
            }
        });
    }
});