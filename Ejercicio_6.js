function ejercicio6(cadena="") {
    var array = cadena.toLowerCase().split("");
    for (let index = 0; index < array.length; index++) {
        if(array[index]==="m"){
            array[index]="0";
        }
        if(array[index]==="u"){
            array[index]="1";
        }
        if(array[index]==="r"){
            array[index]="2";
        }
        if(array[index]==="c"){
            array[index]="3";
        }
        if(array[index]==="i"){
            array[index]="4";
        }
        if(array[index]==="e"){
            array[index]="5";
        }
        if(array[index]==="l"){
            array[index]="6";
        }
        if(array[index]==="a"){
            array[index]="7";
        }
        if(array[index]==="g"){
            array[index]="8";
        }
        if(array[index]==="o"){
            array[index]="9";
        }

    }
    console.log(array.join(","));
}