// 1. Название TitleMovie
// 2. Страна Country
// 3. Жанр Genre
// 4. Режиссер Director1, 2, 3
// 5. Сценарий FilmScript
// 6. Продюсер Producer
// 7. Оператор Operator
// 8. Композитор Composer
// 9. Бюджет Budget
// 10. Сборы мировые FilmBoxOffice
// 11. Рейтинг возраста age
// 12. Длительность Hours,  Minutes, Seconds
// 13. Постер photo
// 14. Дата выхода Day, Month, Year

function FilmConstructor(titleMovie, country, genre, director1, director2, director3, filmScript,
    producer, operator, composer, budget, filmBoxOffice, age,  hours, minutes, seconds, photo, day, month, year) {
        
    this.titleMovie = titleMovie,
    this.country = country,
    this.genre = genre,
    this.director1 = director1,
    this.director2 = director2,
    this.director3 = director3,
    this.filmScript = filmScript,
    this.producer = producer,
    this.operator = operator, 
    this.composer = composer, 
    this.budget = budget, 
    this.filmBoxOffice= filmBoxOffice,
    this.age = age,
    this.hours = hours,
    this.minutes = minutes, 
    this.seconds = seconds, 
    this.photo = photo,
    this.day = day,
    this.month = month,
    this.year = year
};

function sumbitFormFilm(){
    let titleMovie = document.getElementById("iTitleMovie").value.trim();
    let country = document.getElementById("iCountry").value.trim();
    let genre = document.getElementById("iGenre").value.trim();
    let director1 = document.getElementById("iDirector1").value.trim();
    let director2 = document.getElementById("iDirector2").value.trim();
    let director3 = document.getElementById("iDirector3").value.trim();
    let filmScript = document.getElementById("iFilmScript").value.trim();
    let producer = document.getElementById("iProducer").value.trim();
    let operator = document.getElementById("iOperator").value.trim();
    let composer = document.getElementById("iComposer").value.trim(); 
    let budget = document.getElementById("iBudget").value.trim();
    let filmBoxOffice = document.getElementById("iFilmBoxOffice").value.trim();
    let age = document.getElementById("iAge").value;
    let hours = document.getElementById("iHours").value.trim();
    let minutes = document.getElementById("iMinutes").value.trim();
    let seconds = document.getElementById("iSeconds").value.trim();
    let photo = document.getElementById("iPhoto").value.trim();
    let day = document.getElementById("iDay").value.trim();
    let month = document.getElementById("iMonth").value.trim();
    let year = document.getElementById("iYear").value.trim();


    let film1 = new FilmConstructor(titleMovie, country, genre, director1, director2, director3,
        filmScript, producer, operator, composer, budget, filmBoxOffice, age, hours, minutes, 
        seconds, photo, day, month, year);
    
        console.log(film1);
};