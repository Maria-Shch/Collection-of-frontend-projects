//import {addMoviesOnPage} from './addMoviesOnPage.js';
addMoviesOnPage('personalCollection');

function addMoviesOnPage(collection){
    //Удаляю всю прежнюю отрисовку карточек фильмов
    document.querySelectorAll(".card-movie").forEach(e => e.remove());

    //Получаю коллекцию фильмов из LS
    let allMoviesInLS =  JSON.parse(localStorage.getItem(collection));
    
    //Если в LS были фильмы, отрисовываю их карточки
    if(allMoviesInLS!=null){
        for(let i=0; i<allMoviesInLS.length; i++) addMovieOnPage(allMoviesInLS[i]);
    }
}

//import {addMovieOnPage} from './add movie on page.js';
function addMovieOnPage(movie){
    
    //деструктуризация объекта movie
    let {id, titleMovie, country, genre, director1, director2, director3, 
        movieScript, producer, operator, composer, budget, budgetCurrency, 
        movieBoxOffice, movieBoxOfficeCurrency, age, hours, minutes, 
        seconds, photo, date} = movie;

    let containerMain = document.getElementById("container-main");

    let cardMovie = document.createElement('div');
    cardMovie.setAttribute("class", "card-movie");

    let movieTitle = document.createElement('p');
    movieTitle.setAttribute("class", "movie-title");
    movieTitle.textContent = titleMovie;

    let cardMovieRow = document.createElement('div');
    cardMovieRow.setAttribute("class", "card-movie__row");

    let movieInform = document.createElement('div');
    movieInform.setAttribute("class", "movie-inform");


    // IMG -------------------------------------
    let movieImg = document.createElement('div');
    movieImg.setAttribute("class", "movie-img");

    let img = document.createElement('img');
    img.setAttribute("class", "img");
    img.src = photo;

    movieImg.appendChild(img);
    //-----------------------------------------

    //--------------------------------------------------------

    let movieInformRowTitle = document.createElement('div');
    movieInformRowTitle.setAttribute("class", "movie-inform__row");

    let movieParamTitle = document.createElement('pre');
    movieParamTitle.setAttribute("class", "movie-param");
    movieParamTitle.textContent = "Название: ";

    let movieDescriptionTitle = document.createElement('p');
    movieDescriptionTitle.setAttribute("class", "movie-description");
    movieDescriptionTitle.textContent = titleMovie;

    movieInformRowTitle.appendChild(movieParamTitle);
    movieInformRowTitle.appendChild(movieDescriptionTitle); 

    //--------------------------------------------------------

    let movieInformRowCountry = document.createElement('div');
    movieInformRowCountry.setAttribute("class", "movie-inform__row");

    let movieParamCountry = document.createElement('pre');
    movieParamCountry.setAttribute("class", "movie-param");
    movieParamCountry.textContent = "Страна: ";

    let movieDescriptionCountry = document.createElement('p');
    movieDescriptionCountry.setAttribute("class", "movie-description");
    movieDescriptionCountry.textContent = country;

    movieInformRowCountry.appendChild(movieParamCountry);
    movieInformRowCountry.appendChild(movieDescriptionCountry); 

    //--------------------------------------------------------

    let movieInformRowGenre = document.createElement('div');
    movieInformRowGenre.setAttribute("class", "movie-inform__row");

    let movieParamGenre = document.createElement('pre');
    movieParamGenre.setAttribute("class", "movie-param");
    movieParamGenre.textContent = "Жанр: ";

    let movieDescriptionGenre = document.createElement('p');
    movieDescriptionGenre.setAttribute("class", "movie-description");
    movieDescriptionGenre.textContent = genre;

    movieInformRowGenre.appendChild(movieParamGenre);
    movieInformRowGenre.appendChild(movieDescriptionGenre);

    //--------------------------------------------------------

    let movieInformRowDirector = document.createElement('div');
    movieInformRowDirector.setAttribute("class", "movie-inform__row");

    let movieParamDirector = document.createElement('pre');
    movieParamDirector.setAttribute("class", "movie-param");
    movieParamDirector.textContent = "Режиссер: ";

    let movieDescriptionDirector = document.createElement('p');
    movieDescriptionDirector.setAttribute("class", "movie-description");

    if (director2 != "" & director3 == ""){
        movieDescriptionDirector.textContent = director1 + ", " +  director2;
    }
    else if (director3 != "" & director2 == ""){
        movieDescriptionDirector.textContent = director1 + ", " + director3;
    }
    else if (director3 != "" & director2 != ""){
        movieDescriptionDirector.textContent = director1 + ", " + director2 + ", " + director3;
    }
    else movieDescriptionDirector.textContent = director1;

    movieInformRowDirector.appendChild(movieParamDirector);
    movieInformRowDirector.appendChild(movieDescriptionDirector);

    
    //--------------------------------------------------------

    let movieInformRowMoviescript = document.createElement('div');
    movieInformRowMoviescript.setAttribute("class", "movie-inform__row");

    let movieParamMoviescript = document.createElement('pre');
    movieParamMoviescript.setAttribute("class", "movie-param");
    movieParamMoviescript.textContent = "Сценарий: ";

    let movieDescriptionMoviescript = document.createElement('p');
    movieDescriptionMoviescript.setAttribute("class", "movie-description");
    movieDescriptionMoviescript.textContent = movieScript;

    movieInformRowMoviescript.appendChild(movieParamMoviescript);
    movieInformRowMoviescript.appendChild(movieDescriptionMoviescript);

    //--------------------------------------------------------

    let movieInformRowProducer = document.createElement('div');
    movieInformRowProducer.setAttribute("class", "movie-inform__row");

    let movieParamProducer = document.createElement('pre');
    movieParamProducer.setAttribute("class", "movie-param");
    movieParamProducer.textContent = "Продюсер: ";

    let movieDescriptionProducer = document.createElement('p');
    movieDescriptionProducer.setAttribute("class", "movie-description");
    movieDescriptionProducer.textContent = producer;

    movieInformRowProducer.appendChild(movieParamProducer);
    movieInformRowProducer.appendChild(movieDescriptionProducer);

    //--------------------------------------------------------

    let movieInformRowOperator = document.createElement('div');
    movieInformRowOperator.setAttribute("class", "movie-inform__row");

    let movieParamOperator = document.createElement('pre');
    movieParamOperator.setAttribute("class", "movie-param");
    movieParamOperator.textContent = "Оператор: ";

    let movieDescriptionOperator = document.createElement('p');
    movieDescriptionOperator.setAttribute("class", "movie-description");
    movieDescriptionOperator.textContent = operator;

    movieInformRowOperator.appendChild(movieParamOperator);
    movieInformRowOperator.appendChild(movieDescriptionOperator);

    //--------------------------------------------------------

    let movieInformRowComposer = document.createElement('div');
    movieInformRowComposer.setAttribute("class", "movie-inform__row");

    let movieParamComposer = document.createElement('pre');
    movieParamComposer.setAttribute("class", "movie-param");
    movieParamComposer.textContent = "Композитор: ";

    let movieDescriptionComposer = document.createElement('p');
    movieDescriptionComposer.setAttribute("class", "movie-description");
    movieDescriptionComposer.textContent = composer;

    movieInformRowComposer.appendChild(movieParamComposer);
    movieInformRowComposer.appendChild(movieDescriptionComposer);

    //--------------------------------------------------------

    let movieInformRowBudget = document.createElement('div');
    movieInformRowBudget.setAttribute("class", "movie-inform__row");

    let movieParamBudget = document.createElement('pre');
    movieParamBudget.setAttribute("class", "movie-param");
    movieParamBudget.textContent = "Бюджет: ";

    let movieDescriptionBudget = document.createElement('p');
    movieDescriptionBudget.setAttribute("class", "movie-description");
    movieDescriptionBudget.textContent = budget + ' ' + budgetCurrency;

    movieInformRowBudget.appendChild(movieParamBudget);
    movieInformRowBudget.appendChild(movieDescriptionBudget);

    //--------------------------------------------------------

    let movieInformRowmovieBoxOffice = document.createElement('div');
    movieInformRowmovieBoxOffice.setAttribute("class", "movie-inform__row");

    let movieParammovieBoxOffice = document.createElement('pre');
    movieParammovieBoxOffice.setAttribute("class", "movie-param");
    movieParammovieBoxOffice.textContent = "Сборы мировые: ";

    let movieDescriptionmovieBoxOffice = document.createElement('p');
    movieDescriptionmovieBoxOffice.setAttribute("class", "movie-description");
    movieDescriptionmovieBoxOffice.textContent = movieBoxOffice + ' ' + movieBoxOfficeCurrency;

    movieInformRowmovieBoxOffice.appendChild(movieParammovieBoxOffice);
    movieInformRowmovieBoxOffice.appendChild(movieDescriptionmovieBoxOffice);

    //--------------------------------------------------------

    let movieInformRowAge = document.createElement('div');
    movieInformRowAge.setAttribute("class", "movie-inform__row");

    let movieParamAge = document.createElement('pre');
    movieParamAge.setAttribute("class", "movie-param");
    movieParamAge.textContent = "Возрастной ценз: ";

    let movieDescriptionAge = document.createElement('p');
    movieDescriptionAge.setAttribute("class", "movie-description");
    movieDescriptionAge.textContent = age;

    movieInformRowAge.appendChild(movieParamAge);
    movieInformRowAge.appendChild(movieDescriptionAge);

    //--------------------------------------------------------

    let movieInformRowTime = document.createElement('div');
    movieInformRowTime.setAttribute("class", "movie-inform__row");

    let movieParamTime = document.createElement('pre');
    movieParamTime.setAttribute("class", "movie-param");
    movieParamTime.textContent = "Длительность: ";

    let movieDescriptionTime = document.createElement('p');
    movieDescriptionTime.setAttribute("class", "movie-description");

    let hoursRes;
    let minutesRes;
    let secondsRes;

    if (hours == '') hoursRes = "00";
    else if (hours < 10 & hoursRes!= "00") hoursRes = "0" + hours; 
    else hoursRes = hours;

    if (minutes == '') minutesRes = "00";
    else if (minutes < 10 & minutesRes!= "00") minutesRes = "0" + minutes; 
    else minutesRes = minutes;

    if (seconds == '') secondsRes = "00";
    else if (seconds < 10 & secondsRes!= "00") secondsRes = "0" + seconds; 
    else secondsRes = seconds;

    movieDescriptionTime.textContent = hoursRes + ":" + minutesRes + ":" + secondsRes;

    movieInformRowTime.appendChild(movieParamTime);
    movieInformRowTime.appendChild(movieDescriptionTime);

    //--------------------------------------------------------

    let movieInformRowDate = document.createElement('div');
    movieInformRowDate.setAttribute("class", "movie-inform__row");

    let movieParamDate = document.createElement('pre');
    movieParamDate.setAttribute("class", "movie-param");
    movieParamDate.textContent = "Дата выхода: ";

    let movieDescriptionDate = document.createElement('p');
    movieDescriptionDate.setAttribute("class", "movie-description");

    //Приходится заново создавать объект Date, т.к. после LS он перестаёт быть объектом Date, становится простой строкой
    let dateRes = new Date(date);
    let day;
    let month;
    let year;

    if(dateRes.getDate() < 10) day = "0" + dateRes.getDate();
    else day = dateRes.getDate();

    if(dateRes.getMonth() < 10){
        month = "0" + (dateRes.getMonth());

        if(dateRes.getMonth() == "00" ) month = "12";
    }

    else  month = dateRes.getMonth();

    if(month == "12") year = dateRes.getFullYear()-1;
    else year = dateRes.getFullYear();

    movieDescriptionDate.textContent = day + "." + month + "." + year

    movieInformRowDate.appendChild(movieParamDate);
    movieInformRowDate.appendChild(movieDescriptionDate);

    //--------------------------------------------------------

    let buttonAddMoviePersCol = document.createElement('input');
    buttonAddMoviePersCol.type = "button";

    buttonAddMoviePersCol.value = "Удалить из своей коллекции";

    buttonAddMoviePersCol.onclick = function deleteClick(){
        
        //Удаляю всю прежнюю отрисовку карточек фильмов
        document.querySelectorAll(".card-movie").forEach(e => e.remove());

        //Получаю коллекцию фильмов из LS
        let allMoviesPC =  JSON.parse(localStorage.getItem('personalCollection'));

        //Перебираю всю коллекцию фильмов и удаляю из коллекции выбранный по id
        //После удаления помещаю коллекцию обратно в LS 
        for(let i=0; i<allMoviesPC.length; i++){
            if(allMoviesPC[i].id == id){
                allMoviesPC.pop(i);
                localStorage.setItem('personalCollection', JSON.stringify(allMoviesPC));
            }
        }

        //Если в LS есть фильмы, отрисовываю их карточки
        if(allMoviesPC!=null){
            for(let i=0; i<allMoviesPC.length; i++) addMovieOnPage(allMoviesPC[i]);
        }
    }
    
    //--------------------------------------------------------

    movieInform.appendChild(movieInformRowTitle);
    movieInform.appendChild(movieInformRowCountry);
    movieInform.appendChild(movieInformRowGenre);
    movieInform.appendChild(movieInformRowDirector);
    movieInform.appendChild(movieInformRowMoviescript);
    movieInform.appendChild(movieInformRowProducer);
    movieInform.appendChild(movieInformRowOperator);
    movieInform.appendChild(movieInformRowComposer);
    movieInform.appendChild(movieInformRowBudget);
    movieInform.appendChild(movieInformRowmovieBoxOffice);
    movieInform.appendChild(movieInformRowAge);
    movieInform.appendChild(movieInformRowTime);
    movieInform.appendChild(movieInformRowDate);


    cardMovieRow.appendChild(movieInform);
    cardMovieRow.appendChild(movieImg);


    cardMovie.appendChild(movieTitle);
    cardMovie.appendChild(cardMovieRow);
    cardMovie.appendChild(buttonAddMoviePersCol);


    containerMain.appendChild(cardMovie);
}