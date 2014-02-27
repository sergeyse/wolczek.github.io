$(document).ready(function() {
    $("#searchSubmit").click(function(){
      gotoSearch();
    });
    gotoSearch();
});

function gotoHome() {
  $("#homepage").removeClass("hidden");
  $("#searchresults").addClass("hidden");
}

function gotoSearch() {
  $("#homepage").addClass("hidden");
  $("#searchresults").removeClass("hidden");
}