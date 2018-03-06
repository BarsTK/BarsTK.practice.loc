$(function(){
    $('.menu-toggle-btn').on('click', function(){
        //$(this).next().slideToggle(600);
        $(this).next().slideToggle(600, function(){
            const menu = $(this);
            if(menu.css('display') === 'none'){
                menu.removeAttr('style');
            }
        });
    });
});