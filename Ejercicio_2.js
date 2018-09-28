function ejercicio2(array){
    total = 0;
    array.forEach(element => {
        total += element;
    });
    promedio=total/array.length;
    console.log(total+" es el total,");
    console.log(promedio + " es el promedio del arreglo")
}