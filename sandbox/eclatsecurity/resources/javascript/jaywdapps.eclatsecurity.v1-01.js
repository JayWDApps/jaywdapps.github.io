/**
 * JayWD Apps - ECLAT Security Group
 */

// 
$( document ).ready(function(){
    $(".eclat-introduction-logo").css("height", ($(".eclat-introduction-logo").width() / 2));

    pageLoadTasks();

    //alert(getEclatSymbolSize());

    

    /*setTimeout(function(){
        $("#eclat-overlay").fadeTo(400, 0);
    }, 1000);*/

   // setTimeout(function(){
        //$("#eclat-overlay").css("display", "none");
        //$("#eclat_wrapper").css("display", "block");
        //
    //}, 1200);
});

$(".eclat-topbar-logo-wrapper").click(function(){
    //window.location.href = '';
});

// Temporarily there.
//$( window ).resize(function(){location.reload();});

function pageLoadTasks() {
    if($("#eclat_coming_soon_wrapper").length > 0)
    {
        // Change the background color to the primary color of the site.
        //$("body").css("background-color", "#171717");
        //$( "body" ).css("background-image", "url(../eclatsecurity/resources/images/patterns/subtle_carbon.png)");

        // Timed animations...
        PlayComingSoonAnimation();
    }
    else {
        ResizeCarousel();
        ResizeMiddleSymbol();
        ResizeMediaFrame();
        ResizeLiveServicesPanels();
        //RepositionMediaWrapper();
    }
}

function ResizeCarousel() {
    $("#information-carousel").height($("#information-carousel").width() * 0.50);
}

function ResizeMediaFrame() {
    $("#media-frame").height($("#media-frame").width() * 0.50);
}

function ResizeMiddleSymbol() {
    $("#eclat_middle_symbol").width(getEclatSymbolSize()).height(getEclatSymbolSize());
}

function ResizeLiveServicesPanels() {
    $(".live-services-panel").height($(".live-services-panel").width() * 0.8);
}

function RepositionMediaWrapper() {
    var topBarHeight = $(".eclat-topbar-area").outerHeight();

    $("#information-section").css('margin-top', topBarHeight - 1);
}

function PlayComingSoonAnimation() {
    var timeOutTime = 500;

    $("#eclat_coming_soon_logo").fadeTo(timeOutTime, 1);

    setTimeout(function(){
        $(".eclat-coming-soon-subtitle").fadeTo(300, 1);
    }, timeOutTime * 3);

    /*setTimeout(function(){
        $("#coming_soon_security_services").animate({
            height: 'show'
        }, "slow");
    }, timeOutTime * 4);*/

    setTimeout(function(){
        $(".coming-soon-services-panels-wrapper").fadeTo(400, 1);
    }, timeOutTime * 5);

    $(".coming-soon-services-panels-wrapper").addClass("services-panel-shown");

    setTimeout(function(){
        $(".eclat-coming-soon-title").fadeTo(300, 1);
    }, timeOutTime * 7);
}

// The function for showing the services on page load.
function ShowServicesAnimation(tto){
    var services = [$("#coming_soon_security_services"), $("#coming_soon_professional_services"), $("#coming_soon_training"), $("#coming_soon_investigations")];

    for(var i = 0; i < 4; i++)
    {
        setTimeout(function(){
            services[i].fadeTo(300, 1);
        }, tto * 3.5)
    }
}

/* Services Explanation Text Functions */
$(".coming-soon-services-panel").click(function()
{
    if(!$(this).hasClass("shown-service"))
    {
        $(".coming-soon-services-panel").removeClass("shown-service");

        $(this).addClass("shown-service");
        
        $("#coming_soon_service_explanation").animate({
            height: 'show'
        });

        PopulateServicesExplanationTextArea($(this).data("title"), $(this).data("explanation"));
    }
    else 
    {
        if( $("#coming_soon_service_explanation").is(":visible") ) 
        {
            $(".coming-soon-services-panel").removeClass("shown-service");

            $("#coming_soon_service_explanation").animate({
                height: 'hide'
            });
        }
    }
    
});

function HideServicesExplanationText() {
    $(".coming-soon-services-panel").removeClass("shown-service");

    $("#coming_soon_service_explanation").animate({
        height: 'hide'
    });
}

function ShowServicesExplanationText(e) {
    if($("#coming_soon_service_explanation").length < 1) 
    {
        $("#coming_soon_service_explanation").animate({
            height: 'show'
        });
    }

    PopulateServicesExplanationTextArea($(e).data("title"), $(e).data("explanation"));
}

function PopulateServicesExplanationTextArea(servicePanelTitle, servicePanelExplanation) {
    $("#coming_soon_service_explanation_text").text(" ");
    $("#coming_soon_service_explanation_text").append(createServicesExplanationText(servicePanelTitle,servicePanelExplanation));
}

// Offloading function to concatenate.
function createServicesExplanationText(subject, explanation) {
    return ("<b>" + subject + "</b> " + explanation);
}

// defining dimensions of eclat symbol...
function getEclatSymbolSize() {
    return $(".eclat-topbar-ribbon-golden").outerHeight() + $(".eclat-topbar-ribbon-dark").outerHeight();
}

// Invoking function that pauses or plays the main video on the site.
function PauseOrPlayVideo(vid) {
    var vidIsPlaying;
    
    vidIsPlaying = (vid.currentTime > 0 && !vid.paused && !vid.ended && vid.readyState > 2);

    if(!vidIsPlaying){
        vid.play();
        $(".media-paused-container").hide();
    }
    else{
        vid.pause();
        $(".media-paused-container").show();
    }
}
