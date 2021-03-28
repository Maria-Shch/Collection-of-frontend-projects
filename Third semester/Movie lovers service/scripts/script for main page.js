//import {addMoviesOnPage} from './addMoviesOnPage.js';
addMoviesOnPage('generalCollection');

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

//import {addMovieOnPage} from './add movie on page.js';
function addMovieOnPage(movie, collection){
    
    let containerMain = document.getElementById("container-main");

    let cardMovie = document.createElement('div');
    cardMovie.setAttribute("class", "card-movie");
    cardMovie.id = "card-movie";

    let movieTitle = document.createElement('p');
    movieTitle.setAttribute("class", "movie-title");
    movieTitle.textContent = movie.titleMovie;

    let cardMovieRow = document.createElement('div');
    cardMovieRow.setAttribute("class", "card-movie__row");

    let movieInform = document.createElement('div');
    movieInform.setAttribute("class", "movie-inform");


    // IMG -------------------------------------
    let movieImg = document.createElement('div');
    movieImg.setAttribute("class", "movie-img");

    let img = document.createElement('img');
    img.setAttribute("class", "img");
    img.src = movie.photo;

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
    movieDescriptionTitle.textContent = movie.titleMovie;

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
    movieDescriptionCountry.textContent = movie.country;

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
    movieDescriptionGenre.textContent = movie.genre;

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

    if (movie.director2 != "" & movie.director3 == ""){
        movieDescriptionDirector.textContent = movie.director1 + ", " +  movie.director2;
    }
    else if (movie.director3 != "" & movie.director2 == ""){
        movieDescriptionDirector.textContent = movie.director1 + ", " + movie.director3;
    }
    else if (movie.director3 != "" & movie.director2 != ""){
        movieDescriptionDirector.textContent = movie.director1 + ", " + movie.director2 + ", " + movie.director3;
    }
    else movieDescriptionDirector.textContent = movie.director1;

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
    movieDescriptionMoviescript.textContent = movie.Moviescript;

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
    movieDescriptionProducer.textContent = movie.producer;

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
    movieDescriptionOperator.textContent = movie.operator;

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
    movieDescriptionComposer.textContent = movie.composer;

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
    movieDescriptionBudget.textContent = movie.budget + ' ' + movie.budgetCurrency;

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
    movieDescriptionmovieBoxOffice.textContent = movie.movieBoxOffice + ' ' + movie.movieBoxOfficeCurrency;

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
    movieDescriptionAge.textContent = movie.age;

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

    let hours;
    let minutes;
    let seconds;

    if (movie.hours == '') hours = "00";
    else if (movie.hours < 10 & hours!= "00") hours = "0" + movie.hours; 
    else hours = movie.hours;


    if (movie.minutes == '') minutes = "00";
    else if (movie.minutes < 10 & minutes!= "00") minutes = "0" + movie.minutes; 
    else minutes = movie.minutes;

    if (movie.seconds == '') seconds = "00";
    else if (movie.seconds < 10 & seconds!= "00") seconds = "0" + movie.seconds; 
    else seconds = movie.seconds;

    movieDescriptionTime.textContent = hours + ":" + minutes + ":" + seconds;

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
    let date = new Date(movie.date);
    let day;
    let month;
    let year;

    if(date.getDate() < 10) day = "0" + date.getDate();
    else day = date.getDate();
    

    if(date.getMonth() < 10){
        month = "0" + (date.getMonth());

        if(date.getMonth() == "00" ) month = "12";
    }

    else  month = date.getMonth();


    if(month == "12") year = date.getFullYear()-1;
    else year = date.getFullYear();

    movieDescriptionDate.textContent = day + "." + month + "." + year

    movieInformRowDate.appendChild(movieParamDate);
    movieInformRowDate.appendChild(movieDescriptionDate);


    //--------------------------------------------------------

    

    //if(collection == 'generalCollection'){
        let buttonAddMoviePersCol = document.createElement('input');
        buttonAddMoviePersCol.type = "button";
        buttonAddMoviePersCol.value = "Добавить в свою коллекцию";

        // Просматариваю персональную коллекцию
        // Если в ней уже есть фильм, то для него на кнопке устанавливаю 
        // buttonAddMoviePersCol.value = "Фильм добавлен";
        // Это заблокирует повторное добавление одного и того же фильма в персональную коллекцию

        let allMoviesInLPC =  JSON.parse(localStorage.getItem('personalCollection'));
        
        if(allMoviesInLPC!=null){
            for(let i=0; i<allMoviesInLPC.length; i++) {
                if(allMoviesInLPC[i].id == movie.id)buttonAddMoviePersCol.value = "Фильм добавлен";
            }
        }

        buttonAddMoviePersCol.onclick = function addClick(){
            if(buttonAddMoviePersCol.value != "Фильм добавлен"){
                buttonAddMoviePersCol.value = "Фильм добавлен";
            
                let personalCollection = [];
        
                if(JSON.parse(localStorage.getItem('personalCollection')) != null){
                    personalCollection = JSON.parse(localStorage.getItem('personalCollection'));
                }
            
                personalCollection.push(movie);
                localStorage.setItem('personalCollection', JSON.stringify(personalCollection));
            }
        }
    //}


    // if (collection == 'personalCollection')
    //     buttonAddMoviePersCol.value = "Удалить из своей коллекции";

    //     buttonAddMoviePersCol.onclick = function deleteClick(){
            
    //         //Удаляю всю прежнюю отрисовку карточек фильмов
    //         document.querySelectorAll(".card-movie").forEach(e => e.remove());

    //         //Получаю коллекцию фильмов из LS
    //         let allMoviesPC =  JSON.parse(localStorage.getItem('personalCollection'));


    //         //Перебираю всю коллекцию фильмов и удаляю из коллекции выбранный по id
    //         //После удаления помещаю коллекцию обратно в LS 
    //         for(let i=0; i<allMoviesPC.length; i++){
    //             if(allMoviesPC[i].id == movie.id){
    //                 allMoviesPC.pop(i);
    //                 localStorage.setItem('personalCollection', JSON.stringify(allMoviesPC));
    //             }
    //         }


    //         //Если в LS есть фильмы, отрисовываю их карточки
    //         if(allMoviesPC!=null){
    //             for(let i=0; i<allMoviesPC.length; i++){
    //                 addMovieOnPagePC(allMoviesPC[i]);
    //             }
    //         }
    //     }
    // }


    //--------------------------------------------------------
    let buttonAddMovieComment = document.createElement('input');
    buttonAddMovieComment.type = "button";
    buttonAddMovieComment.value = "Добавить отзыв";

    buttonAddMovieComment.onclick = function addComment(){
        let commentBlock = document.createElement('div');
        commentBlock.setAttribute("class", "comment-block");

        cardMovie.appendChild(commentBlock);

        let commentTitleMovie = document.createElement('p');
        commentTitleMovie.setAttribute("class", "comment-title-movie");
        commentTitleMovie.textContent = "Отзыв к фильму " + movie.titleMovie;

        let commentInputName = document.createElement('input');
        commentInputName.setAttribute("class", "comment-input-name");
        commentInputName.placeholder = "Имя";
        commentInputName.id = "commentInputName";

        let commentInputJob = document.createElement('input');
        commentInputJob.setAttribute("class", "comment-input-name");
        commentInputJob.placeholder = "Род деятельности";
        commentInputJob.id = "commentInputJob";

        let commentText = document.createElement('textarea');
        commentText.setAttribute("class", "comment-textarea");
        commentText.placeholder = "Ваш отзыв";
        commentText.id = "commentText";

        let commentSelectGrade = document.createElement('select');
        commentSelectGrade.id = "iGrade";

        let commentOptionGrade1 = document.createElement('option');
        commentOptionGrade1.value = 1;
        commentOptionGrade1.textContent = 1;
        let commentOptionGrade2 = document.createElement('option');
        commentOptionGrade2.value = 2;
        commentOptionGrade2.textContent = 2;
        let commentOptionGrade3 = document.createElement('option');
        commentOptionGrade3.value = 3;
        commentOptionGrade3.textContent = 3;
        let commentOptionGrade4 = document.createElement('option');
        commentOptionGrade4.value = 4;
        commentOptionGrade4.textContent = 4;
        let commentOptionGrade5 = document.createElement('option');
        commentOptionGrade5.value = 5;
        commentOptionGrade5.textContent = 5;

        commentSelectGrade.setAttribute("class", "comment-select-grade");

        commentSelectGrade.appendChild(commentOptionGrade1);
        commentSelectGrade.appendChild(commentOptionGrade2);
        commentSelectGrade.appendChild(commentOptionGrade3);
        commentSelectGrade.appendChild(commentOptionGrade4);
        commentSelectGrade.appendChild(commentOptionGrade5);

        let commentButtonReady = document.createElement('input');
        commentButtonReady.type = "button";
        commentButtonReady.value = "Добавить отзыв";
        commentButtonReady.id = "comment-button";

        let commentButtonReset = document.createElement('input');
        commentButtonReset.type = "button";
        commentButtonReset.value = "Отмена";
        commentButtonReset.id = "comment-button-reset";

        commentButtonReset.onclick = function commentReset(){
            cardMovie.removeChild(commentBlock);
        }

        commentButtonReady.onclick = function addComment(){
            let commentCollection = [];

            class Comment{
                constructor(){
                    if(JSON.parse(localStorage.getItem('commentCollection')) != null){
                        commentCollection = JSON.parse(localStorage.getItem('commentCollection'));
                        this.id = commentCollection[commentCollection.length-1].id + 1;
                    }
                    else this.id = 0;
                    this.movieId = movie.id;
                    if(document.getElementById("commentInputName").value.trim()=="") this.name = "Аноним";
                    else this.name = document.getElementById("commentInputName").value.trim();

                    if(document.getElementById("commentInputJob").value.trim()=="") this.job = "безработный";
                    else this.job = document.getElementById("commentInputJob").value.trim();

                    this.text = document.getElementById("commentText").value.trim();
                    this.grade = document.getElementById("iGrade").value;
                }
            }

            let comment = new Comment();

            if(JSON.parse(localStorage.getItem('commentCollection')) != null){
                commentCollection = JSON.parse(localStorage.getItem('commentCollection'));
            }
            commentCollection.push(comment);
            localStorage.setItem('commentCollection', JSON.stringify(commentCollection));

            cardMovie.removeChild(commentBlock);
        }
        
        commentBlock.appendChild(commentTitleMovie);
        commentBlock.appendChild(commentInputName);
        commentBlock.appendChild(commentInputJob);
        commentBlock.appendChild(commentText);
        commentBlock.appendChild(commentSelectGrade);
        commentBlock.appendChild(commentButtonReady);
        commentBlock.appendChild(commentButtonReset);
    } 
    //--------------------------------------------------------


    //--------------------------------------------------------
    let buttonShowComments = document.createElement('input');
    buttonShowComments.type = "button";
    buttonShowComments.value = "Посмотреть отзывы";

    buttonShowComments.onclick = function addComment(){
        addCommentsOnPage(movie);
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
    cardMovie.appendChild(buttonAddMovieComment);
    cardMovie.appendChild(buttonShowComments);


    containerMain.appendChild(cardMovie);
}


let commentsBlock = document.createElement('div');

function addCommentsOnPage(movie){

    let allCommentsInLS =  JSON.parse(localStorage.getItem('commentCollection'));
    let commentsThisMovie = [];

    if(allCommentsInLS!=null){
        for(let i=0; i<allCommentsInLS.length; i++) {
            if(allCommentsInLS[i].movieId == movie.id) commentsThisMovie.push(allCommentsInLS[i]);
        }
    }

    commentsBlock.setAttribute("class", "comments-block");
    document.getElementById("card-movie").appendChild(commentsBlock);
    
    let commentTitleMovie = document.createElement('p');
    commentTitleMovie.setAttribute("class", "comment-title-movie");
    commentTitleMovie.textContent = "Отзывы к фильму " + movie.titleMovie;
    commentsBlock.appendChild(commentTitleMovie);

    
    if(commentsThisMovie.length == 0){
        let commentEmpty = document.createElement('p');
        commentEmpty.setAttribute("class", "comment-empty");
        commentEmpty.textContent = "На этот фильм еще нет отзывов! Будьте первым!"
        commentsBlock.appendChild(commentEmpty);
    }
    else if(commentsThisMovie!=null){
        for(let i=0; i<commentsThisMovie.length; i++) addCommentOnPage(commentsThisMovie[i]);
    }

    let commentsButtonReset = document.createElement('input');
    commentsButtonReset.type = "button";
    commentsButtonReset.value = "Отмена";
    commentsButtonReset.id = "comment-button-reset";
    commentsBlock.appendChild(commentsButtonReset);

    commentsButtonReset.onclick = function commentsReset(){
        while (commentsBlock.firstChild) {
            commentsBlock.removeChild(commentsBlock.firstChild);
        }
        document.getElementById("card-movie").removeChild(commentsBlock);
    }
}

function addCommentOnPage(comment){
    let commentName = document.createElement('p');
    commentName.setAttribute("class", "comment-name");
    commentName.textContent = "(" + comment.grade + ") " + comment.name + ", " + comment.job;
    commentsBlock.appendChild(commentName);

    let commentText = document.createElement('p');
    commentText.setAttribute("class", "comment-text");
    commentText.textContent = comment.text;
    commentsBlock.appendChild(commentText);
}




//import {filter} from './filter.js';
filter();

function filter(){
    document.querySelectorAll(".card-movie").forEach(e => e.remove());
    
    let country = document.getElementById("iCountryFilter").value;
    let genre = document.getElementById("iGenreFilter").value;
    let year = document.getElementById("iYearFilter").value;
    
    //Получаю коллекцию фильмов из LS
    let allMoviesInLS =  JSON.parse(localStorage.getItem('generalCollection'));
    
    //Отрисовываю из LS карточки тех фильмов, которые соответствуют параметрам
    if(allMoviesInLS!=null){

        if(country != "Любая" & genre != "Любой" & year != "Любой") {
            for(let i=0; i<allMoviesInLS.length; i++){
                if(allMoviesInLS[i].country == country & allMoviesInLS[i].genre == genre & allMoviesInLS[i].yearF == year) addMovieOnPage(allMoviesInLS[i]);
            }
        }

        if(country != "Любая" & genre != "Любой" & year == "Любой") {
            for(let i=0; i<allMoviesInLS.length; i++){
                if(allMoviesInLS[i].country == country & allMoviesInLS[i].genre == genre) addMovieOnPage(allMoviesInLS[i]);
            }
        }

        if(country != "Любая" & genre == "Любой" & year != "Любой") {
            for(let i=0; i<allMoviesInLS.length; i++){
                if(allMoviesInLS[i].country == country & allMoviesInLS[i].yearF == year) addMovieOnPage(allMoviesInLS[i]);
            }
        }
        if(country != "Любая" & genre == "Любой" & year == "Любой") {
            for(let i=0; i<allMoviesInLS.length; i++){
                if(allMoviesInLS[i].country == country) addMovieOnPage(allMoviesInLS[i]);
            }
        }
        if(country == "Любая" & genre != "Любой" & year != "Любой") {
            for(let i=0; i<allMoviesInLS.length; i++){
                if(allMoviesInLS[i].genre == genre & allMoviesInLS[i].yearF == year) addMovieOnPage(allMoviesInLS[i]);
            }
        }
        if(country == "Любая" & genre != "Любой" & year == "Любой") {
            for(let i=0; i<allMoviesInLS.length; i++){
                if( allMoviesInLS[i].genre == genre) addMovieOnPage(allMoviesInLS[i]);
            }
        }
        if(country == "Любая" & genre == "Любой" & year != "Любой") {
            for(let i=0; i<allMoviesInLS.length; i++){
                if(allMoviesInLS[i].yearF == year) addMovieOnPage(allMoviesInLS[i]);
            }
        }
        if(country == "Любая" & genre == "Любой" & year == "Любой") {
            for(let i=0; i<allMoviesInLS.length; i++){
                addMovieOnPage(allMoviesInLS[i]);
            }
        }
    }
}