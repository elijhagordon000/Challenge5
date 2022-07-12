//Setting the current day:
function currentDay(){
    // $('#current-day').text(moment().format('MMMM Do YYYY, h:mm:ss a'))
    $('#current-day').text(moment().toString())
}

setInterval(currentDay,1000);



var times = document.querySelectorAll('.time');
var textBoxes = document.querySelectorAll('.textbox');

const d = new Date();
// let hour = d.getHours();
var hour = 13;



for(var i =0; i< times.length;i++){
   var time =  times[i].innerHTML.split(' '); //seperating values
   time[0]= parseInt(time[0]);
    
    //i less than 4 because those are am times meaning they don't need to add 12 hours
    if((i < 4) &&  (time[0] < hour)){
        //past
        textBoxes[i].style.background = 'gray';

    }
    else if( (i => 4 )&& (time[0] + 12 < hour)){
        //past
     
        textBoxes[i].style.background = 'gray';
       
    }
    else if((i < 4) &&  (time[0] === hour)){
        //present

        textBoxes[i].style.background = 'red';
    }
    else if((i => 4) &&  (time[0] +12  === hour)){
        //present
        textBoxes[i].style.background = 'red';

    }
    else if((i < 4) &&  (time[0] > hour)){
        //future
        textBoxes[i].style.background = 'green';
    }
    else if((i => 4) &&  (time[0] +12  > hour)){
        //future
        textBoxes[i].style.background = 'green';

    }
}
var buttons = document.querySelectorAll('button');
var textBoxArr = document.querySelectorAll('.textbox');



buttons.forEach(
    button=>{button.addEventListener('click',function(event){
    for(var i = 0; i< textBoxArr.length; i++){
        //allows me to access each button address
        var textId = '#'+textBoxArr[i].id;
        console.log(textId,textBoxArr[i].value);
        window.localStorage.setItem(textId, textBoxArr[i].value);
    }
    
   
})
}
);




