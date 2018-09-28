
function ejercicio5(arr, type) {
    typeArr = [];
    arr.forEach(element => {
        if(typeof element === type) {
            typeArr.push(element);
        }
    });
    console.log(typeArr);
}