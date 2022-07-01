setInterval(() =>{
    var hours = document.getElementById('hours');
    var minutes = document.getElementById('minutes');
    var seconds = document.getElementById('seconds');
    var ampm = document.getElementById('ampm');

    var hh = document.getElementById('hh');
    var mm = document.getElementById('mm');
    var ss = document.getElementById('ss');

    var hr_dot = document.querySelector('.hr_dot');
    var min_dot = document.querySelector('.min_dot');
    var sec_dot = document.querySelector('.sec_dot');

    var h = new Date().getHours();
    var m = new Date().getMinutes();
    var s = new Date().getSeconds();
    var am = h >= 12 ? "PM"  : "AM";

    // conversion 24h en 12h
    if (h > 12){
        h = h - 12;
    }

    // zero avant un chiffre seul

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    hours.innerHTML = h + "<br><span>Heures</span>";
    minutes.innerHTML = m + "<br><span>Minutes</span>";
    seconds.innerHTML = s + "<br><span>secondes</span>";
    ampm.innerHTML = am;

    // 12hr
    hh.style.strokeDashoffset = 440 - (440 * h) / 12;
    
    // 60mn
    mm.style.strokeDashoffset = 440 - (440 * m) / 60;
    
    // 60s
    ss.style.strokeDashoffset = 440 - (440 * s) / 60;

    // 360 / 12 = 30
    hr_dot.style.transform = 'rotate(${h * 30}deg)';

    // 360 / 60 = 6
    min_dot.style.transform = 'rotate(${m * 6}deg)';
    
    // 360 / 60 = 6
    sec_dot.style.transform = 'rotate(${s * 6}deg)';
    
    })