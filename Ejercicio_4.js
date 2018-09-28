function ejercicio4(array=[]) {
    var total=0;
    if(array.length%2==0){
        for (let index = 0; index < array.length/2; index++) {
            total+=array[index]+array[array.length-1];
            
        }
        
    }else{
        for (let index = 0; index < ((array.length/2)-1)+0.5; index++) {
            total+=array[index]+array[array.length-1];
            console.log(index);
            console.log("--");
            console.log(total);
        }
        total+=array[(array.length/2)+0.5]+array[(array.length/2)+0.5];
    }
    console.log(total);
}