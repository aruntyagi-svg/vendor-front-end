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
    })
}); 