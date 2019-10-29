$(document).ready(function() {
    $('.site-page').find('a').on('click', function(event){
        event.stopPropagation();
    });

    $('.site-page').on('click', function(){
        $('body').toggleClass('page-open');

        $(this).toggleClass('is-active');
        $(this).find('.page-article').toggleClass('is-visible');
    });

	$('.site-menu').on('click', function(){
        $('.site-overlay').addClass('is-visible');
        $('body').addClass('nav-open');
    });

    $('.site-overlay').on('click', function(){
        $('.site-overlay').removeClass('is-visible');
        $('body').removeClass('nav-open');
    });
});
