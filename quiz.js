class Quiz{

    constructor(){

    }

    getState()
    {
       var gameStateRef=database.ref('gameState');
       gameStateRef.on("value",function(data){
           gameState=data.val()
       })
    }
    update(State)
    {
      database.ref('/').update({
          gameState:State
      })
    }

    async start(){

        if(gameState===0){
            contestant=new Contestant();    
            var contestantCountRef=await database.ref('contestantCount').once("value");
        
        if( contestantCountRef.exists()){
            contestantCount=contestantCountRef.val();
            contestant.getCount();
          
        }
    }
        question=new Question();
        question.display();
}

play(){
    question.hide();
    background("yellow");
    textSize(20)
    text("Correct")
    Contestant.getPlayerInfo();
    if(Allcontestants!==undefined)
    {
       debugger;
       var display_Answers=230;
       fill("blue");
       textSize(20);
       text("contestants who answered correctly are highlighted in green colour",130,230);
       for(var plr in Allcontestants){
          debugger;
          var correctAnswer="2";
          if(correctAnswer===Allcontestants[plr].answer)
          
              fill("green");
          
          else
          fill("red");
          display_Answers+=30;
          textSize(20);
          text(Allcontestants[plr].name+":"+Allcontestants[plr].answer,250,display_Answers);

       }
    }
}
}