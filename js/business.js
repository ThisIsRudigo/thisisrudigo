$(document).ready(function(){
    $('.clickable-row').click(function(){
        $('.clear').css('display', 'none'),
        $('#newPage').load('studentDetails.html');
    });
});