$(function() {
    function hide_content() {
      $("#content")
        .children("h2")
        .hide()
        .next("div")
        .hide();
    }

    function show_content(name) {
      $("#content")
        .children("h2[id='" + name + "']")
        .show()
        .next("div")
        .show();
    }

    function show_only(name) {
      hide_content();
      show_content(name);
    }

    function location_id() {
      var ix = location.href.lastIndexOf("#");
      return ix === -1 ? "home" : location.href.substring(ix + 1);
    }

    function location_set_id(id) {
        var ix = location.href.indexOf("#");
        if (ix === -1)
          location.href = location.href + id;
        else
          location.href = location.href.substring(0, ix) + id;
    }

    $("#navbar a").click(function(e) {
        e.preventDefault();

        var href = $(this).attr("href");
        location_set_id(href);

        show_only(href.substring(1));
    });

    show_only(location_id());
});
