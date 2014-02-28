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
"<ul class='list-unstyled'>"+
"{{#arr}}"+
"<li class='col-md-6 col-sm-12 col-xs-12'>"+
"<div class='form-group col-md-6 col-sm-5 col-xs-4'><a href='javascript:void(0)'><img src='{{image}}' alt='' class='img-responsive'></a></div>"+
" <div class='product-description-holder col-md-6 col-sm-7 col-xs-8'><h2><a href='javascript:void(0)'>{{title}}</a></h2>"+
" <p><b>Item's description:</b> {{description}}</p></div>"+
" <div class='clearfix'></div>"+
" <div class='row form-group'><div class='col-md-4 col-sm-4 col-xs-12 col-sm-push-8'>"+
" <div class='row'><div class='col-md-12 col-sm-12 col-xs-4'><label class='control-label'>{{currency}} {{price}}</label></div>"+
" <div class='col-md-12 col-sm-12 col-xs-8'><p>Current Price</p></div></div></div>"+
" <div class='col-md-4 col-sm-4 col-xs-12'>"+
" <div class='row'><div class='col-md-12 col-sm-12 col-xs-4'>"+
" <span class='glyphicon glyphicon-eye-open'></span>&nbsp;<label class='control-label'>{{watchers}}</label></div>"+
" <div class='col-md-12 col-sm-12 col-xs-8'><span>Watchers</span></div></div></div>"+
" <div class='col-md-4 col-sm-4 col-xs-12 col-sm-pull-8'>"+
" <div class='row'><div class='col-md-12 col-sm-12 col-xs-4'><label class='control-label'>6h left</label></div>"+
" <div class='col-md-12 col-sm-12 col-xs-8'><span>Today 15:23</span></div></div></div></div><div class='clearfix'></div><br />"+
" </li>"+
"{{/arr}}" +
"</ul>";

$(document).ready(function() {
    $("#searchSubmit").click(function(){
      gotoSearch();
    });

    $("#priceSlider").slider({}).on("slide", function(e) {
        $("#priceLow").val(e.value[0]);
        $("#priceHigh").val(e.value[1]);
    });

    $('.input-group.date').datepicker({
        startDate: "-1d",
        todayBtn: "linked",
        todayHighlight: true
    });

    //gotoSearch();

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
  //loadDataWithTemplate("api/search.json", "#search-results-grid", templateSearch);
  $.getJSON("api/search.json", function( data ) {
    $("#search-results-count").html(data.length.toString());
    $("#search-results-grid").html(Mustache.to_html(templateSearch, { "arr": data }));
  });
}

function loadDataWithTemplate(from, to, template) {
  $.getJSON(from, function( data ) {
    $(to).html(Mustache.to_html(template, { "arr": data }));
  });
}