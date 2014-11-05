(function() {
  function hide_all_content() {
    $('#content')
      .children('h2')
      .hide()
      .next('div')
      .hide();
  }

  function show_content(name) {
    $('#' + name)
      .show()
      .next('div')
      .show();
  }

  function show_only(name) {
    hide_all_content();
    show_content(name);
  }

  function location_id() {
    // ''.substring(999999) returns ''
    return location.hash.substring(1) || 'home';
  }

  function location_set_id(id) {
    // we can navigate to '#anchor' URLs in the same way we can navigate to
    // 'http://example.com/#full' URLs
    location.assign(id);
  }

  // we'll show/hide content for local URLs,
  // and allow other (e.g. GitHub) URLs to behave normally
  $('#navbar a[href^=#]').click(function(e) {
    var href = $(this).attr('href');

    e.preventDefault();
    location_set_id(href);

    show_only(href.substring(1));
  });

  $('.share-button')
    .attr('href', 'javascript:void(0)')
    .click(function(e) {
      e.preventDefault();

      $('#share').toggle();
    });


  $('#share').hide();
  show_only(location_id());

  // ensure the correct content is shown when someone loads a page
  // or presses the back/forward buttons
  window.onpopstate = function() {
    var pageName = location.hash.substring(1);

    if (pageName.length === 0) {
      pageName = 'home';
    }

    show_only(pageName);
  };
})();
