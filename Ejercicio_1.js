function ejercicio1(array,b) {
    total = 0;
    array.forEach(element => {
        if(element === b)
            total += 1;
    });
    console.log(total);
}