$(".training-section-tabling").click(function(){
    $(this).next().addClass("shown-training-service");
    $(this).next().slideToggle("fast", function(){
        // anim complete
    });

    // hides all others
    //$(".training-section-service-description-extended").not($(this).next()).hide();
});

$(".training-section-service-close-button").click(function(){

    $(this).parent().removeClass("shown-training-service");
    $(this).parent().slideToggle("fast", function(){
        // complete
    });
});