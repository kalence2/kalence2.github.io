/**
 * 1.1 version of theme custom js
 * Support for Navpane plugin
 */

jQuery(function($) {

  // Define Theme specific functions
  var Theme = {
    // Swiping mobile galleries wwith Hammer.js
    swipeGallery: function() {
      setTimeout(function() {
        var touchGallery = document.getElementsByClassName("fancybox-wrap")[0];
        var mc = new Hammer(touchGallery);
        mc.on("panleft panright", function(ev) {
          if (ev.type == "panleft") {
            $("a.fancybox-next").trigger("click");
          } else if (ev.type == "panright") {
            $("a.fancybox-prev").trigger("click");
          }
          Theme.swipeGallery();
        });
      }, 500);
    },
    swipeInit: function() {
      if ('ontouchstart' in window) {
        $("body").on("click", "a.w-fancybox", function() {
          Theme.swipeGallery();
        });
      }
      // Add fullwidth class to gallery thumbs if less than 6
      $('.imageGallery').each(function(){
        if ($(this).children('div').length <= 6) {
          $(this).children('div').addClass('fullwidth-mobile');
        }
      });
    },
    // Show/hide header when scrolling
    scrollHide: function(scrollpane, target) {
      var prevScroll = 0,
          current = 'down',
          previous = 'up',
          distance = $(target).height();
      $(scrollpane).scroll(function(){
        if (($(this).scrollTop() >= prevScroll + 10) && $(this).scrollTop() > distance) {
          current = 'down';
          if (current != previous) {
            $(target).css({ top: '-'+ (distance + 10) +'px' });
            previous = current;
          }
        }
        else if ($(this).scrollTop() < prevScroll - 5) {
          current = 'up';
          if (current != previous) {
            $(target).css({ top: '0px' });
            previous = current;
          }
        }
        prevScroll = $(this).scrollTop();
      });
    },
    // Form Styling
    formstyle: function(){
      // Sublabels into placeholders
      $(".wsite-form-sublabel").each(function(){
        var sublabel = $(this).text();
        $(this).prev('input').attr("placeholder", sublabel);
      });
    },
    toggleClick: function(click, target, classname){
      $(click).click(function(){
        $(target).toggleClass(classname);
      });
    },
    // Category + Search sidebar dropdown on mobile
    toggleOpen: function(sidebar){
      $(sidebar).click(function(){
        $(this).toggleClass("open");
      });
    },
    // Interval function to execute post-post-load events
    interval: function(condition, action, duration, limit) {
      var counter = 0;
      var looper = setInterval(function(){
        if (counter >= limit || Theme.checkElement(condition)) {
          clearInterval(looper);
        } else {
          action();
          counter++;
        }
      }, duration);
    },
    checkElement: function(selector) {
      return $(selector).length;
    },
    cartLink: function() {
      $("#wsite-nav-cart-a").click(function(e){
        e.preventDefault();
        $("body").addClass("open");
        $("#cart").addClass("active");
      });
      $("#wsite-com-product-add-to-cart, .wsite-product-button").on('click', function() {
        $("#header").css({ top: '0px' });
        setTimeout(function(){ $("#wsite-nav-cart-a").addClass("emphasize"); }, 900);
        setTimeout(function(){ $("#wsite-nav-cart-a").removeClass("emphasize"); }, 2400);
      });
      if($('#wsite-nav-cart-a').length) {
        $("#cart h2").text($('#wsite-nav-cart-a').text().replace(/[((0-9,)]|[-]/g, ''));
        $('#wsite-nav-cart-a').html($('#wsite-nav-cart-a').html().replace(/[()]/g, ''));
      }
    },
    moveMinicart: function() {
      var move = $("#wsite-mini-cart").detach();
      $("#cart .container").append(move);
    },
    moveLogin: function() {
      var login = $('#wsite-nav-login-a').parents("li").clone(true);
      $("#nav .wsite-menu-default > li:last-child").after(login);
    },
    padHeader: function(header, container){
      $(container).css({"padding-top" : $(header).height() + "px"});
    },
    searchSwap: function(){
      if ($(".icons .wsite-search").is(":visible")) {
        var search = $(".icons .wsite-search").detach();
        $("#search .container").append(search);
        $(".icons:last-child").prepend('<a href="#" class="wsite-search-button"></a>');
        $(".icons .wsite-search-button").click(function(e){
          e.preventDefault();
          $("body").addClass("open");
          $("#search").addClass("active");
          $("#search .wsite-search-input").focus();
        });
      }
    },
    closePanel: function(){
      var closeAll = function() {
        $("body").removeClass("open");
        $("#header .active").removeClass("active");
        $('.submenu').delay(300).slideUp(300, function(){
          $(this).remove();
        });
        $(".expanded").removeClass("expanded");
        $(".submenu-expanded").removeClass("submenu-expanded");
      }

      window.onkeydown = function(e) {
        if (e.keyCode == 27) {
          closeAll();
        }
      }

      $(".close, .overlay, .hamburger").click(function(e){
        e.preventDefault();
        closeAll();
  		});

    },
    carouselInit: function(){
      if ($("#product-carousel").length) {
        var size = function(){
          var maxHeight = 0;
          $('#wsite-com-product-images .item').each(function() {
            maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
          });
          $("#wsite-com-product-images #product-carousel").height(maxHeight);
        }
        size();
        // Adjust if resized
        var resize = _.debounce(function(e) {
          size();
        }, 500);
        window.addEventListener("resize", resize, false);

        $("#product-carousel .carousel-inner .item:first-child, #product-carousel .carousel-indicators li:first-child").addClass("active");
        var indexPos = 0;
        $("#product-carousel .carousel-indicators li").each(function(){
          $(this).attr("data-slide-to", indexPos);
          indexPos++;
        });
        $('#product-carousel').carousel();
        $('.carousel-indicators li').click(function(e){
          e.stopPropagation();
          var goTo = $(this).data('slide-to');
          $('.carousel-inner .item').each(function(index){
            if ($(this).data('id') == goTo){
              goTo = index;
              return false;
            }
          });
          $('#product-carousel').carousel(goTo);
        });
      }
    },
    submenu: function(){
      // Clone the subnav links for editor functionality
      $("#menu .subnav-link:first-child").each(function(){
        var clickable = $(this).clone(true, true);
        $(this).after(clickable);
        $(this).unbind();
        $(this).next("#menu .subnav-link").addClass("editor-subnav");
      });

      $("#header").on("click", "#menu .subnav-link:not(.expanded, .editor-subnav)", function(e){
        e.preventDefault();
        $(this).closest("ul").find(".expanded").removeClass("expanded");
        $(this).addClass("expanded");
        $("#nav").addClass("submenu-expanded");

        // Add sliding submenus if desktop/mobile
        if ($(window).width() >= 768) {
          var menuID = $(this).attr("data-submenu"),
              menu = $("#"+menuID).clone(true, true);
          $(this).parents(".nav").after('<div class="nav submenu slide-panel ' + menuID + '"><div class="container"></div></div>');
          $('.'+menuID + " .container").append(menu);
          setTimeout(function(){ $('.'+menuID).addClass("active"); }, 300);
          $('.'+menuID).nextAll(".nav").slideUp(300, function(){
            $(this).remove()
          });
        }
      });
    },
    footerCheck: function(){
      setTimeout(function() {
        var contentHeight = $("#banner").height() + $("#main").height();
        if (contentHeight >  $("#content").height()) {
          $("#footer > div:not(.wsite-footer)").addClass("auto");
        }
      }, 500);
    }
  }

  $(document).ready(function() {
    $("body").addClass("postload");
    setTimeout(function(){
      Theme.submenu();
      Theme.padHeader("#header", "#banner");
    }, 800);
    Theme.interval("#cart #wsite-mini-cart", Theme.moveMinicart, 800, 5);
    Theme.cartLink();
    Theme.interval("#nav #wsite-nav-login-a", Theme.moveLogin, 800, 5);
    Theme.interval("#product-carousel .active", Theme.carouselInit, 800, 5);
    Theme.searchSwap();
    Theme.closePanel();
    Theme.scrollHide(window, "#header");
    setTimeout(function(){
      Theme.toggleOpen(".wsite-com-sidebar, .blog-social, #wsite-search-sidebar, #wsite-com-product-short-description, .wsite-product-description");
      if($('#wsite-nav-cart-a').length) {
        $('#wsite-nav-cart-a').html($('#wsite-nav-cart-a').html().replace(/[()]/g, ''));
      }
    }, 900);
    Theme.swipeInit();
    Theme.formstyle();
    Theme.footerCheck();
  });

});
