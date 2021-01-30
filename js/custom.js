$(document).ready(function () {
    // Scroll
    //niceScroll();
    // Scroll Animate
    new WOW().init();
    // SideNav
    nmSidenav();
    // Rope
    nmRope();

});


// Scroll
function niceScroll() {
    $(function () {
        $("body").niceScroll({cursorcolor: "#D38920"});
    });
}

// Scroll Animate
function animeScroll() {
    new WOW().init();
}
// SideNav
function nmSidenav() {
    
    for (var i = 0; i < 4; i++) {
        var navLine = document.createElement('div');
        $('#nmSidenavIcon').append(navLine);
    }

    $('#nmSidenavIcon').hover(function () {
        $(this).children().toggleClass('sidenav-icon-hover');
        $('#nmSidenavIcon div:nth-child(2)').toggleClass('nm-sidenav-div-2');
        $('#nmSidenavIcon div:nth-child(3)').toggleClass('nm-sidenav-div-3');
    });

    $('#nmSidenavIcon').on('click', function () {
        $('#nmSidenav').removeClass('nmSidenav-close');
        $('#nmSidenav').addClass('nmSidenav-open'); 
    });

    $('#nmSidenavClose').on('click', function () {
        $('#nmSidenav').removeClass('nmSidenav-open');
        $('#nmSidenav').toggleClass('nmSidenav-close');
    });
}

// Rope
function nmRope() {
    for (var i = 0; i < 5; i++) {
        var dot = document.createElement('div');
        var dot2 = document.createElement('div');
        var dot3 = document.createElement('div');

        $('#nmRope').append(dot);
        $('#nmRope2').append(dot2);
        $('#nmRope3').append(dot3);
    }
}