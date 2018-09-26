
$("[data-uuid]").mouseenter(function() {
    $("[data-uuid], [data-objectuuid]").css('outline', 'unset');
    $(this).css('outline', '10px solid rgba(100, 255, 100, .5)');
}).mouseleave(function(){
    $("[data-uuid], [data-objectuuid]").css('outline', 'unset');
});

$("[data-objectuuid]").mouseenter(function() {
    $("[data-uuid], [data-objectuuid]").css('outline', 'unset');
    $(this).css('outline', '10px solid rgba(255, 255, 100, .5)');
});

$("[data-objectuuid]").click(function() {
    let uuid = $(this).closest("[data-objectuuid]").data('objectuuid'),
        swingLink = 'http://10.243.230.4:5801/swing/index.html?null#open/' + uuid;
    window.open(swingLink);
    return false;
});

$("[data-uuid]").click(function() {
    let uuid = $(this).closest("[data-uuid]").data('uuid'),
        swingLink = 'http://10.243.230.4:5801/swing/index.html?null#open/' + uuid;
    window.open(swingLink);
    return false;
});
