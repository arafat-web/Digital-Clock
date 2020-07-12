function clock(){
    //New date
    var time = new Date();
    
    //Get times from date
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();
    var type = "AM";
    
    //Convert to 12
    if( hours == 0){
        hours =12;
    }
    if( hours > 12){
        hours = hours - 12;
        type = "PM";
    }
    //Put a 0 if time is less then 10
    hours = (hours < 10)? "0" + hours : hours;
    minutes = (minutes < 10)? "0" + minutes : minutes;
    seconds = (seconds < 10)? "0" + seconds : seconds;
    
    var dayname = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    var day = dayname[time.getDay()];
    
    //Get date
    var date = time.getDate();
    
    //Get month name
    var monthname = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var month = monthname[time.getMonth()];
    var year = time.getFullYear();
    
    //Add everything to a var
    var time = "<strong>" + day.toUpperCase() + "</strong>" +"<br>" + "<b>" + hours + ":" + minutes +  "</b>" + "<i>" + seconds + "</i>" + "<u>" + type + "</u>" + "<br>" + "<big>" + date + " " + month.toUpperCase() + " " + year + "</big>";
    
    //Add time to HTML doc
    document.getElementById("time").innerHTML = time;
    
    //Set interval of 1 sec
    setTimeout(clock, 1000);

}
clock();