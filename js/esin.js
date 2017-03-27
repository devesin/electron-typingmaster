//swap face starts here
function swap(str1, str2)
{
    var j = jQuery.noConflict();
    j("#" + str1).animate({center:0, opacity:"show"}, 100);
    document.getElementById(str2).style.display="none";
}
//swap face ends here
