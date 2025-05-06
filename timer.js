
CountDownTimer('04/18/2018 4:32 PM UTC-4', 'countdown1');
CountDownTimer('04/20/2018 9:32 PM UTC-4', 'countdown2');
CountDownTimer('04/11/2018 4:38 AM UTC-4', 'countdown3');

function CountDownTimer(dt, id)
{
  var end = new Date(dt);

  var _second = 1000;
  var _minute = _second * 60;
  var _hour = _minute * 60;
  var _day = _hour * 24;
  var timer;

  function showRemaining() {
    var now = new Date();
    var distance = end - now;
    if (distance < 0) {

      clearInterval(timer);
      document.getElementById(id).innerHTML = 'Event has Ended';

      return;
    }
    var days = Math.floor(distance / _day);
    var hours = Math.floor((distance % _day) / _hour);
    var minutes = Math.floor((distance % _hour) / _minute);
    var seconds = Math.floor((distance % _minute) / _second);

    document.getElementById(id).innerHTML = days + ' Day : ';
    document.getElementById(id).innerHTML += hours + ' Hour : ';
    document.getElementById(id).innerHTML += minutes + ' Mins';
    if(days==0){
      document.getElementById(id).innerHTML = '';
      document.getElementById(id).innerHTML += hours + ' Hour : ';
      document.getElementById(id).innerHTML += minutes + ' Min : ';
      document.getElementById(id).innerHTML += seconds + ' Secs';

      return;
    }
  }

  timer = setInterval(showRemaining, 1000);
}
