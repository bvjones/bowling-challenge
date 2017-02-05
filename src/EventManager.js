$(document).ready(function(){

    function refreshScores () {
      $('#throw1-1').text(frame._frameScore[0])
      $('#throw1-2').text(frame._frameScore[1])
      $('#throw2-1').text(frame._frameScore[2])
      $('#throw2-2').text(frame._frameScore[3])
      $('#throw3-1').text(frame._frameScore[4])
      $('#throw3-2').text(frame._frameScore[5])
      $('#throw4-1').text(frame._frameScore[6])
      $('#throw4-2').text(frame._frameScore[7])
      $('#throw5-1').text(frame._frameScore[8])
      $('#throw5-2').text(frame._frameScore[9])
      $('#throw6-1').text(frame._frameScore[10])
      $('#throw6-2').text(frame._frameScore[11])
      $('#throw7-1').text(frame._frameScore[12])
      $('#throw7-2').text(frame._frameScore[13])
      $('#throw8-1').text(frame._frameScore[14])
      $('#throw8-2').text(frame._frameScore[15])
      $('#throw9-1').text(frame._frameScore[16])
      $('#throw9-2').text(frame._frameScore[17])
      $('#throw10-1').text(frame._frameScore[18])
      $('#throw10-2').text(frame._frameScore[19])
      $('#throw10-3').text(frame._frameScore[20])
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
    $('#overallScore').text(scorecard.score())
  });
  $('#scoreOne').on("click", function (){
    frame.add(1)
    refreshScores()
    refreshOverallScore()
    $('#overallScore').text(scorecard.score())
  });
  $('#scoreTwo').on("click", function (){
    frame.add(2)
    refreshScores()
    refreshOverallScore()
    $('#overallScore').text(scorecard.score())
  });
  $('#scoreThree').on("click", function (){
    frame.add(3)
    refreshScores()
    refreshOverallScore()
    $('#overallScore').text(scorecard.score())
  });
  $('#scoreFour').on("click", function (){
    frame.add(4)
    refreshScores()
    refreshOverallScore()
    $('#overallScore').text(scorecard.score())
  });
  $('#scoreFive').on("click", function (){
    frame.add(5)
    refreshScores()
    refreshOverallScore()
    $('#overallScore').text(scorecard.score())
  });
  $('#scoreSix').on("click", function (){
    frame.add(6)
    refreshScores()
    $('#overallScore').text(scorecard.score())
  });
  $('#scoreSeven').on("click", function (){
    frame.add(7)
    refreshScores()
    refreshOverallScore()
    $('#overallScore').text(scorecard.score())
  });
  $('#scoreEight').on("click", function (){
    frame.add(8)
    refreshScores()
    refreshOverallScore()
    $('#overallScore').text(scorecard.score())
  });
  $('#scoreNine').on("click", function (){
    frame.add(9)
    refreshScores()
    refreshOverallScore()
    $('#overallScore').text(scorecard.score())
  });
  $('#scoreTen').on("click", function (){
    frame.add(10)
    refreshScores()
    refreshOverallScore()
    $('#overallScore').text(scorecard.score())
  });

});
