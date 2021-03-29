// 1. Название TitleMovie
// 2. Страна Country
// 3. Жанр Genre
// 4. Режиссер Director1, 2, 3
// 5. Сценарий MovieScript
// 6. Продюсер Producer
// 7. Оператор Operator
// 8. Композитор Composer
// 9. Бюджет Budget
// 10. Сборы мировые MovieBoxOffice
// 11. Рейтинг возраста age
// 12. Длительность Hours,  Minutes, Seconds
// 13. Постер photo
// 14. Дата выхода Day, Month, Year

//Коллекция всех фильмов с главной страницы
let generalCollection = [];

class Movie{
    constructor(){
        // Для задания id смотрю, есть в LS коллекция с фильмами
        // Если коллекция есть, то присваиваю очередному фильму 
        // id на единицу больше, чем у последнего фильма в коллекции
        // Иначе, если LS пуст, начинаю с нуля
        if(JSON.parse(localStorage.getItem('generalCollection')) != null){
            generalCollection = JSON.parse(localStorage.getItem('generalCollection'));
            this.id = generalCollection[generalCollection.length-1].id + 1;
        }
        else this.id = 0;
        this.titleMovie = document.getElementById("iTitleMovie").value.trim(),
        this.country = document.getElementById("iCountry").value.trim(),
        this.genre = document.getElementById("iGenre").value.trim(),
        this.director1 = document.getElementById("iDirector1").value.trim(),
        this.director2 = document.getElementById("iDirector2").value.trim(),
        this.director3 = document.getElementById("iDirector3").value.trim(),
        this.movieScript = document.getElementById("iMovieScript").value.trim(),
        this.producer = document.getElementById("iProducer").value.trim(),
        this.operator = document.getElementById("iOperator").value.trim(), 
        this.composer = document.getElementById("iComposer").value.trim(), 
        this.budget = document.getElementById("iBudget").value.trim(), 
        this.budgetCurrency = document.getElementById("iBudgetCurrency").value.trim(), 
        this.movieBoxOffice = document.getElementById("iMovieBoxOffice").value.trim(),
        this.movieBoxOfficeCurrency = document.getElementById("iMovieBoxOfficeCurrency").value.trim(),
        this.age = document.getElementById("iAge").value,
        this.hours = document.getElementById("iHours").value.trim(),
        this.minutes = document.getElementById("iMinutes").value.trim(), 
        this.seconds = document.getElementById("iSeconds").value.trim(), 
        this.photo = document.getElementById("iPhoto").value.trim(),
        this.date = new Date(document.getElementById("iYear").value.trim(), document.getElementById("iMonth").value.trim(), document.getElementById("iDay").value.trim()),
        //yearF - свойство для работы фильтра
        this.yearF = document.getElementById("iYear").value.trim()
    }
}


formMovie.addEventListener("submit", sumbitForm);

function sumbitForm(){
    clearDivMessageError();
    if(checkEmptyInput() == false){
        createMovie();
        addMessageSuccess("Фильм успешно добавлен в коллекцию!");
    }
    event.preventDefault();
}

function createMovie(){
    let movie = new Movie();

    if(JSON.parse(localStorage.getItem('generalCollection')) != null){
        generalCollection = JSON.parse(localStorage.getItem('generalCollection'));
    }

    generalCollection.push(movie);
    localStorage.setItem('generalCollection', JSON.stringify(generalCollection));
}


function checkEmptyInput(){
    let res = false;

    // if(document.getElementById("iTitleMovie").value.trim() == ""){
    //     addMessageError("Вы не заполнили поле Название");
    //     res = true;
    // }
    // if(document.getElementById("iCountry").value.trim() == ""){
    //     addMessageError("Вы не заполнили поле Страна");
    //     res = true;
    // }
    // if(document.getElementById("iGenre").value.trim() == ""){
    //     addMessageError("Вы не заполнили поле Жанр");
    //     res = true;
    // }
    // if(document.getElementById("iDirector1").value.trim() == ""){
    //     addMessageError("Вы не заполнили первое поле Режиссер");
    //     res = true;
    // }
    // if(document.getElementById("iMovieScript").value.trim() == ""){
    //     addMessageError("Вы не заполнили поле Сценарий");
    //     res = true;
    // }
    // if(document.getElementById("iProducer").value.trim() == ""){
    //     addMessageError("Вы не заполнили поле Продюсер");
    //     res = true;
    // }
    // if(document.getElementById("iOperator").value.trim() == ""){
    //     addMessageError("Вы не заполнили поле Оператор");
    //     res = true;
    // }
    // if(document.getElementById("iComposer").value.trim() == ""){
    //     addMessageError("Вы не заполнили поле Композитор");
    //     res = true;
    // }
    return res;
}

function addMessageError(strMessage){
    let p = document.createElement('p');
    p.setAttribute("class", "p-mes-error");
    p.textContent = strMessage;
    let div = document.getElementById('message');
    div.appendChild(p); 
}

function addMessageSuccess(strMessage){
    let p = document.createElement('p');
    p.setAttribute("class", "p-mes-success");
    p.textContent = strMessage;
    let div = document.getElementById('message');
    div.appendChild(p); 
}

function clearDivMessageError(){
    let div = document.getElementById('message');

    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }
}