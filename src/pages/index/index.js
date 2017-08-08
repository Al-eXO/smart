import '../../main.styl'
import './index.styl'
import './index.pug'
import $ from 'jquery';

$(function() {

    $('[data-toggle-sidebar]').on('click', function() {
        $('body').toggleClass('show-sidebar');
    });

})

window.onload = function() {
    setTimeout(() => {
        $('#hideAll').fadeOut("slow");
        $('body').addClass("page-loaded");
    }, 150);
}