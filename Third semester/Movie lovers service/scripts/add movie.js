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

function FilmConstructor() {
    this.titleMovie = document.getElementById("iTitleMovie").value.trim(),
    this.country = document.getElementById("iCountry").value.trim(),
    this.genre = document.getElementById("iGenre").value.trim(),
    this.director1 = document.getElementById("iDirector1").value.trim(),
    this.director2 = document.getElementById("iDirector2").value.trim(),
    this.director3 = document.getElementById("iDirector3").value.trim(),
    this.filmScript = document.getElementById("iFilmScript").value.trim(),
    this.producer = document.getElementById("iProducer").value.trim(),
    this.operator = document.getElementById("iOperator").value.trim(), 
    this.composer = document.getElementById("iComposer").value.trim(), 
    this.budget = document.getElementById("iBudget").value.trim(), 
    this.filmBoxOffice= document.getElementById("iFilmBoxOffice").value.trim(),
    this.age = document.getElementById("iAge").value,
    this.hours = document.getElementById("iHours").value.trim(),
    this.minutes = document.getElementById("iMinutes").value.trim(), 
    this.seconds = document.getElementById("iSeconds").value.trim(), 
    this.photo = document.getElementById("iPhoto").value.trim(),
    this.day = document.getElementById("iDay").value.trim(),
    this.month = document.getElementById("iMonth").value.trim(),
    this.year = document.getElementById("iYear").value.trim()
};

function sumbitFormFilm(){
    event.preventDefault();
    let film1 = new FilmConstructor();
    console.log(film1);
};