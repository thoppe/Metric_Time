// http://en.wikipedia.org/wiki/Decimal_time

function standard_to_pong(h,m,s,ms) {
    var elapsed_milliseconds = 1000.0*(s + 60*m + 3600*h) + ms;
    var milliseconds_per_day = 86400000.0;
    return elapsed_milliseconds/milliseconds_per_day;
}


function format_pongs(p) {
    return p.toFixed(5);
}


function startTime() {
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    var ms=today.getMilliseconds();

    var p = standard_to_pong(h,m,s,ms);
    p = format_pongs(p);

    div = $(clock1);
    str = "H:"+h + " M:"+m + " S:"+s;// + " ms:" +ms;
    div.text(str);

    div = $(clock2);
    str = "pongs:"+p;
    div.text(str);

    var update_steps = setTimeout(function(){startTime()},1);   
    //console.log(p);

}



//$(document).ready(function() {    startTime();}); 

$(window).on("load", function() { 
    startTime();
});

