class Contestant{
    constructor(){

        this.index=null;
        this.answer=0;
        this.name=null;
    }
    
    getCount()
    {
       var contestantCountRef=database.ref('contestantCount');
       contestantCountRef.on("value",(data)=>{
           contestantCount=data.val();
       })
    }
    updateCount(Count){
        database.ref("/").update({
            contestantCount:Count
        });
    }

    update(){
        var contestantIndex="contestants/contestant"+this.index;
        database.ref(contestantIndex).set({
            name:this.name,
            answer:this.answer
            
        });
    }
    static getContestantinfo()
    {
       var contestantInfoRef=database.ref('contestants');
       contestantInfoRef.on("value",(data)=>{
           Allcontestants=data.val();
       })
    }
}