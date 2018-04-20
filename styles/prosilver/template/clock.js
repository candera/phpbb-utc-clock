// Credit: https://codepen.io/mathiasschjott/pen/rerdGj
function startTime() {
    var today = new Date();

    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    
    var y = today.getUTCFullYear();
    var month = monthNames[today.getUTCMonth()];
    var d = checkTime(today.getUTCDate());
    var h = today.getUTCHours();
    var m = today.getUTCMinutes();
    var s = today.getUTCSeconds();
    if (h > 24) {
        h = h - 24;
    }
    if (h < 0) {
        h = h + 24;
    }
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML = "<div class='date'>" + y + "-" + month + "-" + d + "</div>" + "<div class='time'>" + h + ":" + m + ":" + s + " UTC</div>";
    var t = setTimeout(function() {
        startTime()
    }, 500);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    };
    return i;
}

startTime()
