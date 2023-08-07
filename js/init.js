/*SOLVO - js*/
$(document).ready(function () {
  $('.parallax').parallax();
});



(function ($) {
  var loadPage = function () {
    var dt = new Date();
    var actualYear = dt.getFullYear();
    document.getElementById("year_html").innerHTML = actualYear;
  };
  $(function () {

    $('.button-collapse').sideNav();
    loadPage();
  }); // end of document ready
})(jQuery); // end of jQuery name space
