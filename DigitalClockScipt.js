function clock(){
    //New date
    var time = new Date();
    //Get times from date
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();
    var type = "AM";
    
    //Conver to 12
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
    
    //Get name day
    var day = time.getDay();
    
    //Convert to days name;
    if( day == 1){
        day = "Monday";
    }else if(day == 2){
        day = "Tuesday";
    }else if(day == 3){
        day = "Wednesday";
    }else if(day == 4){
        day = "Thursday";
    }else if(day == 5){
        day = "Friday";
    }else if(day == 6){
        day = "Saturday";
    }else if(day == 7){
        day = "Sunday";
    }
    
    //Get date
    var date = time.getDate();
    var month = time.getMonth();
    
    //Get month name
    if(month == 0){
        month = "January";
    }else if(month == 1){
        month = "February";
    }else if(month == 2){
        month = "March";
    }else if(month == 3){
        month = "April";
    }else if(month == 4){
        month = "May";
    }else if(month == 5){
        month = "June";
    }else if(month == 6){
        month = "July";
    }else if(month == 7){
        month = "August";
    }else if(month == 8){
        month = "September";
    }else if(month == 9){
        month = "October";
    }else if(month == 10){
        month = "November";
    }else if(month == 11){
        month = "December";
    }
    var year = time.getFullYear();
    //Add everything to a var
    var time = "<strong>" + day.toUpperCase() + "</strong>" +"<br>" + "<b>" + hours + ":" + minutes +  "</b>" + "<i>" + seconds + "</i>" + "<u>" + type + "</u>" + "<br>" + "<big>" + date + " " + month.toUpperCase() + " " + year + "</big>";
    
    //Add time to HTML doc
    document.getElementById("time").innerHTML = time;
    
    //Set interval of 1 sec
    setTimeout(clock, 1000);

}
clock();