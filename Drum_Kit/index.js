var numberOfButtons=document.querySelectorAll(".drum").length;
for(var i=0;i<numberOfButtons;i++){
    //using buttons
    document.querySelectorAll(".drum")[i].addEventListener("click",function()
        {
        var buttonNAmes=this.innerHTML;
        makeSound(buttonNAmes);
        backAnimation(buttonNAmes);
    }
);
}

    //using keyboard
    document.addEventListener("keypress",function(event){
        makeSound(event.key);
        backAnimation(event.key);
    });

        function makeSound(key){
        switch(key)
        {
            case "w":
                var a1=new Audio("sounds/crash.mp3");
                a1.play();
            break;
            case "a":
                var a2=new Audio("sounds/kick-bass.mp3");
                a2.play();
            break;
            case "s":
                var a3=new Audio("sounds/snare.mp3");
                a3.play();
            break;
            case "d":
                var a4=new Audio("sounds/tom-1.mp3");
                a4.play();
            break;
            case "j":
                var a5=new Audio("sounds/tom-2.mp3");
                a5.play();
            break;
            case "k":
                var a6=new Audio("sounds/tom-3.mp3");
                a6.play();
            break;
            case "l":
                var a7=new Audio("sounds/tom-4.mp3");
                a7.play();
            break;
            default:console.log(key);
        }
    }

    function backAnimation(currentKey){
        var cur=document.querySelector("."+currentKey);
        cur.classList.add("pressed");
        setTimeout(function(){
            cur.classList.remove("pressed");
    },100);
    }

