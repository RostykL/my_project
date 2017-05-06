  $(document).ready(function() {
    var balls = $('.ball');
     var ball = 0,
         goal = 10, 
         teamA = 0,
         teamB = 0;
    $('.btn').click(function () {
        ball = Math.floor(Math.random() * 20) + 1;  
        if(ball > goal) {
                 balls.css({'margin-left':'620px'});
                 $('#teamNum2').html(teamA);
                 teamA++
                 console.log('teamA won  score ' + teamA);
        }else {
                 balls.css({'margin-left':'200px'});
                 $('#teamNum1').html(teamB);
                 teamB++
                 console.log('teamB won  score ' + teamB );
        }      
    }); 
  });
 