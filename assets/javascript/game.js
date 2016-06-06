//variables used for random number generation
  var randoGen = function (min, max) {
    return Math.random() * (max - min) + min;
  }
  var randomNumb1 = Math.pow(2, Math.floor(randoGen(0, 6)))
  var randomNumb2 = Math.pow(2, Math.floor(randoGen(0, 6)))
  var randomNumb3 = Math.pow(2, Math.floor(randoGen(0, 6)))
  var randomNumb4 = Math.pow(2, Math.floor(randoGen(0, 6)))
  var randomTotal = Math.pow(2, Math.floor(randoGen(5, 8)))
  //yes I know this part looks arbitrary. It's serving a purpose, trust me.
  var chances = (Math.log(randomTotal)/(Math.log(2)) + 2*Math.ceil(Math.log(randomTotal)))
  var count = 0;
  var wins = 0;
  var losses = 0;


    //jquery part
    $(document).ready(function(){

        //sets up scoreboard and win conditions
        $(".goal").text("Total needed: " + randomTotal);
        $(".chances").text("Turns left: " + chances);

        //operates the buttons

        //button one logic
        $(".input1").click(function(){
            count += randomNumb1;
            chances--;
            $(".total").text("Total: " + count);
            $(".chances").text("Turns left: " + chances);
            //conditional win/lose statements
            if(chances === 0 || (count > randomTotal)){
               losses++;
               $(".losses").html("Losses: " + losses);
               $(".total").html("<h2>You lose!</h2>");
             }

             else if(randomTotal === count){
               wins++;
               $(".wins").html("Wins: " + wins);
               $(".total").html("<h2>You win!</h2>");
             };
        });
        //button two logic
        $(".input2").click(function(){
            count += randomNumb2;
            chances--;
            $(".total").text("Total: " + count);
            $(".chances").text("Turns left: " + chances);
            //conditional win/lose statements
            if(chances === 0 || (count > randomTotal)){
               losses++;
               $(".losses").html("Losses: " + losses);
               $(".total").html("<h2>You lose!</h2>");
             }

             else if(randomTotal === count){
               wins++;
               $(".wins").html("Wins: " + wins);
               $(".total").html("<h2>You win!</h2>");
             };
        });
        //button three logic
        $(".input3").click(function(){
            count += randomNumb3;
            chances--;
            $(".total").text("Total: " + count);
            $(".chances").text("Turns left: " + chances);
            //conditional win/lose statements
            if(chances === 0 || (count > randomTotal)){
               losses++;
               $(".losses").html("Losses: " + losses);
               $(".total").html("<h2>You lose!</h2>");
             }

             else if(randomTotal === count){
               wins++;
               $(".wins").html("Wins: " + wins);
               $(".total").html("<h2>You win!</h2>");
             };
        });
        //button four logic
        $(".input4").click(function(){
            count += randomNumb4;
            chances--;
            $(".total").text("Total: " + count);
            $(".chances").text("Turns left: " + chances);
            //conditional win/lose statements
            if(chances === 0 || (count > randomTotal)){
               losses++;
               $(".losses").html("Losses: " + losses);
               $(".total").html("<h2>You lose!</h2>");
             }

             else if(randomTotal === count){
               wins++;
               $(".wins").html("Wins: " + wins);
               $(".total").html("<h2>You win!</h2>");
             };
        });

        //reset field
        $(".clear").on('click', function() {
            location.reload();
        });

    });