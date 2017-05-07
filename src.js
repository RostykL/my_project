  $(document).ready(function() {
    $('i').hide();
    var balls = $('.ball');
     var ball = 0,
         goal = 10, 
         teamA = 0,
         teamB = 0;
    $('.btn').click(function () {
        $('i').show();
        ball = Math.floor(Math.random() * 20) + 1;  
        if(ball > goal) {
                 balls.css({'margin-left':'620px'});
                 teamA++
                 $('#teamNum2').html(teamA);
                 console.log('teamA won  score ' + teamA);
        }else {
                 balls.css({'margin-left':'200px'});
                 teamB++
                 $('#teamNum1').html(teamB);
                 console.log('teamB won  score ' + teamB );
        }
    }); 
  });
 
