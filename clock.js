const display = document.getElementById('clockDisplay');

function showTime() {
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let session = 'AM';
    if (hour === 12){
        hour = 12;
    }
    
    if (hour > 12 ){
        session = 'PM';
        hour = hour - 12;
    };

    if(hour<10){
        hour = '0' + hour;
    }
    if(min<10){
        min = '0' + min;
    }
    if(sec<10){
        sec = '0' + sec;
    }

    display.textContent = hour + ':' + min + ':' + sec + ' ' + session;
    setTimeout(showTime, 1000)
};

showTime();