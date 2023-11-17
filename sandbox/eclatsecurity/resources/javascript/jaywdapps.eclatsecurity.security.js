$(".security-section-service-selections").on("change", function(){
    

    if($(".security-services-details-area").length == 0)
    {
        $(".security-services-details-area").slideToggle("fast", function(){
            // complete
        });
    }
    
    if($(this).val() !== "(Choose a service)")
    {
        $(".security-services-details-title").text($(this).val());
        $(".security-services-details-description").slideDown("fast", function(){
            // complete
        });

        $(".security-services-details-description").html(getDescriptionToShow($(this).val()));
    }
    else
    {
        $(".security-services-details-title").text("Select A Service");
        $(".security-services-details-description").slideUp("fast", function(){
            // complete
        });
    }

    
});

function getDescriptionToShow(title) {
    for(var x = 0; x < descriptions.length; x++)
    {
        if(descriptions[x] === title)
        {
            return descriptions[x+1];
        }
    }
}