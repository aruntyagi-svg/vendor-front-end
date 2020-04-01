$(document).ready(function() {
    $('.toggle-bar').click(function() {
        $('.sidebar').toggleClass('sidebar-open');
        $('.dashboard-container').toggleClass('section-shrink');
    });
    $(".more-transition-button").click(function() {
        event.preventDefault(); 
        $(this).closest('.more-section').next('.toggle-more-transition-data').slideToggle('slow');
        // $('.toggle-more-transition-data').slideToggle("slow");
    });
    $(".prevent-default").click(function() {
        event.preventDefault();
    });
     //runtime js
    //  function showTime() {
    //     var d = new Date();
    //     document.querySelector("#clock").innerHTML = d.toLocaleTimeString();
    // }
    // setInterval(showTime, 1000);
    function showTime() {
        var d = new Date();
        document.querySelector("#clock").innerHTML = d.toLocaleTimeString();
        document.querySelector("#clock1").innerHTML = d.toLocaleTimeString();
        document.querySelector("#clock2").innerHTML = d.toLocaleTimeString();
        document.querySelector("#clock3").innerHTML = d.toLocaleTimeString();
    }
    setInterval(showTime, 1000);
    // function showTime2() {
    //     var d = new Date();
    //     document.querySelector("#clock2").innerHTML = d.toLocaleTimeString();
    // }
    // setInterval(showTime2, 1000);
    // function showTime3() {
    //     var d = new Date();
    //     document.querySelector("#clock3").innerHTML = d.toLocaleTimeString();
    // }
    // setInterval(showTime3, 1000);
     //runtime js ends here
}); 
