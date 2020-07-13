window.onload = function(){
    $('#ad-video').removeAttr('muted')
}

$(document).ready(function () {
    $('body').css('overflow', 'hidden')
 });

$('#close-video').click(function(event){
    event.preventDefault();
    $('#main-video').hide();
    window.scrollTo(0,0);
    $('body').css('overflow','auto');
})