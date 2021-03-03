//Функция принимает массив строк, выводит самую длинную

let divML = document.getElementById('fieldest__d-2-resMaxLength');
buttonAddString.addEventListener("click", buttonAddStringClick);
buttonDeleteString.addEventListener("click", buttonDeleteStringClick);


let arr=[];

function buttonAddStringClick() {
    arr.push(document.getElementById("inputStringArray").value);
    
    arrayOutput();


    //Очищаю поле ввода
    document.getElementById("inputStringArray").value = '';
}

function buttonDeleteStringClick() {
    arr.pop();
    divML.removeChild(divML.lastChild);
}

function arrayOutput() {
    let pML = document.createElement('p');
    pML.setAttribute("class", "res");

    for(let i=0; i<arr.length; i++){
        pML.textContent = arr[i];
        divML.appendChild(pML); 
    }
}
