$(document).ready(function () {
    $('.card').each(function () {
        $(this).click(function () {
            const hewan = $(this).find('h4').attr('id');
            $('#sound').remove()
            $(this).append(`<audio src="sound/${hewan}.mp3" autoplay id="sound"></audio>`);
            
        });
    });
});