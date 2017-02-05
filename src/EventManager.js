$(document).ready(function(){

    function refreshScores () {
      $('#throw1-1').text(scorecard.gameArray[0])
      $('#throw1-2').text(scorecard.gameArray[1])
      $('#throw2-1').text(scorecard.gameArray[2])
      $('#throw2-2').text(scorecard.gameArray[3])
      $('#throw3-1').text(scorecard.gameArray[4])
      $('#throw3-2').text(scorecard.gameArray[5])
      $('#throw4-1').text(scorecard.gameArray[6])
      $('#throw4-2').text(scorecard.gameArray[7])
      $('#throw5-1').text(scorecard.gameArray[8])
      $('#throw5-2').text(scorecard.gameArray[9])
      $('#throw6-1').text(scorecard.gameArray[10])
      $('#throw6-2').text(scorecard.gameArray[11])
      $('#throw7-1').text(scorecard.gameArray[12])
      $('#throw7-2').text(scorecard.gameArray[13])
      $('#throw8-1').text(scorecard.gameArray[14])
      $('#throw8-2').text(scorecard.gameArray[15])
      $('#throw9-1').text(scorecard.gameArray[16])
      $('#throw9-2').text(scorecard.gameArray[17])
      $('#throw10-1').text(scorecard.gameArray[18])
      $('#throw10-2').text(scorecard.gameArray[19])
      $('#throw10-3').text(scorecard.gameArray[20])
    }

    function refreshOverallScore () {
      $('#f1score').text(scorecard._overallScore[0])
      $('#f2score').text(scorecard._overallScore[1])
      $('#f3score').text(scorecard._overallScore[2])
      $('#f4score').text(scorecard._overallScore[3])
      $('#f5score').text(scorecard._overallScore[4])
      $('#f6score').text(scorecard._overallScore[5])
      $('#f7score').text(scorecard._overallScore[6])
      $('#f8score').text(scorecard._overallScore[7])
      $('#f9score').text(scorecard._overallScore[8])
      $('#f10score').text(scorecard._overallScore[9])
    }

  $('#scoreZero').on("click", function (){
    frame.add(0)
    refreshScores()
    refreshOverallScore()
    $('#overallScore').text(scorecard.totalScore())
  });
  $('#scoreOne').on("click", function (){
    frame.add(1)
    refreshScores()
    refreshOverallScore()
    $('#overallScore').text(scorecard.totalScore())
  });
  $('#scoreTwo').on("click", function (){
    frame.add(2)
    refreshScores()
    refreshOverallScore()
    $('#overallScore').text(scorecard.totalScore())
  });
  $('#scoreThree').on("click", function (){
    frame.add(3)
    refreshScores()
    refreshOverallScore()
    $('#overallScore').text(scorecard.totalScore())
  });
  $('#scoreFour').on("click", function (){
    frame.add(4)
    refreshScores()
    refreshOverallScore()
    $('#overallScore').text(scorecard.totalScore())
  });
  $('#scoreFive').on("click", function (){
    frame.add(5)
    refreshScores()
    refreshOverallScore()
    $('#overallScore').text(scorecard.totalScore())
  });
  $('#scoreSix').on("click", function (){
    frame.add(6)
    refreshScores()
    $('#overallScore').text(scorecard.totalScore())
  });
  $('#scoreSeven').on("click", function (){
    frame.add(7)
    refreshScores()
    refreshOverallScore()
    $('#overallScore').text(scorecard.totalScore())
  });
  $('#scoreEight').on("click", function (){
    frame.add(8)
    refreshScores()
    refreshOverallScore()
    $('#overallScore').text(scorecard.totalScore())
  });
  $('#scoreNine').on("click", function (){
    frame.add(9)
    refreshScores()
    refreshOverallScore()
    $('#overallScore').text(scorecard.totalScore())
  });
  $('#scoreTen').on("click", function (){
    frame.add(10)
    refreshScores()
    refreshOverallScore()
    $('#overallScore').text(scorecard.totalScore())
  });

});
