class Form{
    constructor(){

    }
    display(){
        var title=createElement("h2");
        title.html("Car Racing Game");
        title.position(200,20);

        var input=createInput("name");
        input.position(130,160);

        var button=createButton("play");
        button.position(250,200);

        var greeting=createElement("h3");

        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name= input.value();
            player.update(name);
            playerCount=playerCount+1;
            player.updateCount(playerCount);
            greeting.html("Welcome"+name);
            greeting.position(130,160);
        })

    }
}