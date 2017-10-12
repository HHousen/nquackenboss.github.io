$("[data-fancybox]").fancybox({
  buttons: ['close']
  // baseTpl	:
  // '<div class="fancybox-container" role="dialog" tabindex="-1">' +
  // '<div class="fancybox-bg"></div>' +
  // '<div class="fancybox-inner">' +
  // '<div class="fancybox-infobar">' +
  // '<button data-fancybox-prev title="{{PREV}}" class="fancybox-button fancybox-button--left"></button>' +
  // '<div class="fancybox-infobar__body">' +
  // '<span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span>' +
  // '</div>' +
  // '<button data-fancybox-next title="{{NEXT}}" class="fancybox-button fancybox-button--right"></button>' +
  // '</div>' +
  // '<div class="fancybox-toolbar">' +
  // '{{BUTTONS}}' +
  // '</div>' +
  // '<div class="fancybox-navigation">' +
  // '<button data-fancybox-prev title="{{PREV}}" class="fancybox-arrow fancybox-arrow--left" />' +
  // '<button data-fancybox-next title="{{NEXT}}" class="fancybox-arrow fancybox-arrow--right" />' +
  // '</div>' +
  // '<div class="fancybox-stage"><a class="btn btn-primary">Test</a></div>' +
  // '<div class="fancybox-caption-wrap">' +
  // '<div class="fancybox-caption"></div>' +
  // '</div>' +
  // '</div>' +
  // '</div>',
});

// Select all links with hashes
$('a[href*="#"]')
// Remove links that don't actually link to anything
.not('[href="#"]').not('[href="#0"]').click(function (event) {
  // On-page links
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top - 60
      }, 1000, function () {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) {
          // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  }
});

// ISOTOPE
var $grid = $('#grid').isotope({
  itemSelector: '.grid-item',
  layoutMode: 'fitRows'
});
// filter items on button click
$('#filters').on('click', 'a', function () {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});

$('#filters').each(function (i, buttonGroup) {
  var $buttonGroup = $(buttonGroup);
  $buttonGroup.on('click', 'a', function () {
    $buttonGroup.find('.selected').removeClass('selected');
    $(this).addClass('selected');
  });
});

particlesJS.load('particles-js', 'https://api.myjson.com/bins/1617vz', function () {
  console.log('callback - particles.js config loaded');
});

// WOW
new WOW({ offset: 100 }).init();
$(".revealOnScroll:not(.animated)").each(function () {
  var $this = $(this),
      offsetTop = $this.offset().top;

  if (scrolled + win_height_padded > offsetTop) {
    if ($this.data('timeout')) {
      window.setTimeout(function () {
        $this.addClass('animated ' + $this.data('animation'));
      }, parseInt($this.data('timeout'), 10));
    } else {
      $this.addClass('animated ' + $this.data('animation'));
    }
  }
});
// Hidden...
$(".revealOnScroll.animated").each(function (index) {
  var $this = $(this),
      offsetTop = $this.offset().top;
  if (scrolled + win_height_padded < offsetTop) {
    $(this).removeClass('animated fadeInUp flipInX lightSpeedIn');
  }
});

//# sourceMappingURL=scripts.js.map