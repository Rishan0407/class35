class Player{
    constructor(){

    }
    getCount(){
        var playerCountRef=database.ref("playerCount") ;
        playerCountRef.on("value",function(data){
            PlayerCount=data.val();
        })   
    } 
}