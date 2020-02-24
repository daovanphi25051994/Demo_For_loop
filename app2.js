let total = 0;
let enterNumber = parseInt(prompt("enter a number: "));
if (enterNumber > 0){
    for (let i = 1; i<= enterNumber; i++){
        total += i;
    }
    alert(total);
}else {
    alert("So nhap sai!!")
}