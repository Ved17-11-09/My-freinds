var my_best_friend = [] ;

function submit() {

  for (var i = 1 ; i<=5 ; i++) {
    var Friends_Forever = document.getElementById("F"+i).value ;
    console.log(Friends_Forever) ;
    my_best_friend.push(Friends_Forever) ;
  }

  console.log(my_best_friend) ;

  document.getElementById("output").innerHTML=my_best_friend ;
}

function sorting() {
    my_best_friend.sort() ;
             console.log(my_best_friend) ;  
             document.getElementById("output").innerHTML=my_best_friend ; 
}

function song() {
  document.getElementById("music_play").play() ;
}