$(".security-section-service-selections").on("change", function(){
    if($(".security-services-details-area").length == 0)
    {
        $(".security-services-details-area").slideToggle("fast", function(){
            // complete
        });
    }
    
    $(".security-services-details-title").text($(this).val());

    $(".security-services-details-description").slideDown("fast", function(){
        // complete
    });
});