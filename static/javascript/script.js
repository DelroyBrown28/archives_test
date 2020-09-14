$(document).ready(function () {


    // onload animations

    function mainPageFadeIn() {
        $('.main_page_title_blurb').animate({
            opacity: '1'
        }, function () {
            $('#read_posts_btn').animate({
                opacity: '1'
            }, function () {
                $('#write_posts_btn').animate({
                    opacity: '1'
                }, function () {
                    $('#local_time').animate({
                        opacity: '1'
                    })
                })
            })
        })
    }
    window.onload = mainPageFadeIn;


    // Displays user sign in

    $('#write_posts_btn').click(function () {
        $('.center_contents_main').fadeOut('fast', function () {
            $('.center_contents_writer_signin').css("display", "flex").hide().fadeIn()
        })
    })

    $('.back_arrow').click(function () {
        $('.center_contents_writer_signin').fadeOut('fast', function () {
            $('.center_contents_main').css("display", "flex").hide().fadeIn()
        })
    })


    // Local time display
    function addZero(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }

    function timeUpdate() {
        var grabDate = new Date();
        var theTime = document.getElementById("the_time");
        var hours = addZero(grabDate.getHours());
        var minutes = addZero(grabDate.getMinutes());
        theTime.innerHTML = hours + ":" + minutes;
    }
    setInterval(timeUpdate, 1000);

})