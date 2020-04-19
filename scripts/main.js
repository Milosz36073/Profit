var hamburger = document.querySelector('.hamburger');
var lines = document.querySelectorAll(".line")
var navLinks = document.querySelector('.nav-links');
var links = document.querySelectorAll('.nav-links li');
var close = document.getElementById("modal01");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");

    links.forEach(link => {
        link.classList.toggle("fade");
    })
})

navLinks.addEventListener("click", () => {
    navLinks.classList.toggle("open");

    links.forEach(link => {
        link.classList.toggle("fade");
    })
})

function popup(element) {
    var wrapper = element.parentNode.parentNode.parentNode;
    var text = wrapper.getElementsByClassName("text");
    var title = wrapper.getElementsByClassName("title");
    var img = wrapper.getElementsByClassName("image_proj")[0].attributes[1].textContent;

    document.getElementById("modal_title").innerHTML = title[0].firstChild.textContent
    document.getElementById("modal_img").attributes[1].textContent = img;
    document.getElementById("modal_desc").innerHTML = text[0].firstChild.textContent
    document.getElementById("modal01").classList.add("modal_show");
}


function close_popup() {
    close.classList.remove("modal_show");
}

jQuery(function($) {
    //zresetuj scrolla
    $.scrollTo(0);
    $('#homes').click(function() {
        $.scrollTo($('#home'), 1000, { offset: { top: -62 } });
        $('.scrollup').click(function() { $.scrollTo($('body'), 1000); });
    })

    $('#abouts').click(function() {
        $.scrollTo($('#about'), 1000, { offset: { top: -62 } });
        $('.scrollup').click(function() { $.scrollTo($('body'), 1000); });
    })

    $('#services').click(function() {
        $.scrollTo($('#service'), 1000, { offset: { top: -62 } });
        $('.scrollup').click(function() { $.scrollTo($('body'), 1000); });
    })

    $('#projects').click(function() {
        $.scrollTo($('#project'), 1000, { offset: { top: -62 } });
        $('.scrollup').click(function() { $.scrollTo($('body'), 1000); });
    })

    $('#contacts').click(function() {
        $.scrollTo($('#contact'), 1000, { offset: { top: -62 } });
        $('.scrollup').click(function() { $.scrollTo($('body'), 1000); });
    })
});