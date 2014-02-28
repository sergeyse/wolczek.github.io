var templateHome = 
  "<ul class='list-unstyled'>" +
  "{{#arr}}" +
  "<li class='col-sm-4'>" +
  "<div class='col-md-4'><a href='javascript:void(0)'><img src='{{image}}' alt='' class='img-responsive'></a></div>" +
  "<div class='product-description-holder col-md-8'><h2><a href='javascript:void(0)'>{{title}}</a></h2>" +
  "<p><b>Item's description:</b> {{description}}</p></div>" +
  "</li>" +
  "{{/arr}}" +
  "</ul>";

var templateSearch = 
  "<ul class='list-unstyled'>" +
  "{{#arr}}" +
  "<li class='col-sm-4'>" +
  "<div class='col-md-4'><a href='javascript:void(0)'><img src='{{image}}' alt='' class='img-responsive'></a></div>" +
  "<div class='product-description-holder col-md-8'><h2><a href='javascript:void(0)'>{{title}}</a></h2>" +
  "<p><b>Item's description:</b> {{description}}</p></div>" +
  "</li>" +
  "{{/arr}}" +
  "</ul>";

$(document).ready(function() {
    $("#searchSubmit").click(function(){
      gotoSearch();
    });
    gotoSearch();

    $("#priceSlider").slider({});
    
    loadDataWithTemplate("api/featured.json", "#product-grid", templateHome);
});

function gotoHome() {
  $("#homepage").removeClass("hidden");
  $("#navbar-search").removeClass("hidden");
  $("#searchresults").addClass("hidden");
}

function gotoSearch() {
  $("#homepage").addClass("hidden");
  $("#navbar-search").addClass("hidden");
  $("#searchresults").removeClass("hidden");
  
  $("#search-results-grid").empty();
  loadDataWithTemplate("api/search.json", "#search-results-grid", templateSearch);
}

function loadDataWithTemplate(from, to, template) {
  $.getJSON(from, function( data ) {
    $(to).html(Mustache.to_html(template, { "arr": data }));
  });
}