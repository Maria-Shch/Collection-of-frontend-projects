//import {addMovieOnPage} from './add movie on page.js';

function addMoviesOnPage(collection){
    //Удаляю всю прежнюю отрисовку карточек фильмов
    document.querySelectorAll(".card-movie").forEach(e => e.remove());

    //Получаю коллекцию фильмов из LS
    let allMoviesInLS =  JSON.parse(localStorage.getItem(collection));
    
    //Если в LS были фильмы, отрисовываю их карточки
    if(allMoviesInLS!=null){
        for(let i=0; i<allMoviesInLS.length; i++) addMovieOnPage(allMoviesInLS[i], collection);
    }
}