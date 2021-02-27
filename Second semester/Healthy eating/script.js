
function SelectionElements(bookOrMovie, about, title, author, poster, country, description) {
    this.bookOrMovie = bookOrMovie,
    this.about = about,
    this.title = title,
    this.author = author,
    this.poster = poster,
    this.country = country,
    this.description = description 
};

let elements = [
  new SelectionElements("Книга", "О питании", "Как престать питаться заблуждениями на голодный желудок", "Книга Плискиной Юлианны", "https://cdn1.ozone.ru/s3/multimedia-g/6008302804.jpg", "Россия", "Жизнь дается нам лишь однажды, и каждый ее миг должен быть ярким, здоровым и вкусным! Тем временем мы сделали из еды культ. А все желанное, как вы догадываетесь, всегда обрастает мифами. Кулинарные заблуждения, пищевые предрассудки и халатное отношение к собственному здоровью глубоко вросли в наше сознание. Пришло время вытащить их из ваших голов!"),
  new SelectionElements("Книга", "О питании", "Секреты лаборатории питания", "Книга Трейски Манна", "https://royallib.com/data/images/390/cover_390157.jpg", "НеРоссия", "Опираясь на современные научные данные и огромный личный опыт, автор книги Трейси Манн объясняет, почему популярные диеты не работают. И утверждает: худеть ради соответствия навязанным шаблонам не просто бессмысленно, а опасно для здоровья. Вес, в котором вам комфортно, в котором вы чувствуете себя здоровым и довольным — вот идеал, к которому нужно стремиться. Только за него и имеет смысл бороться, и профессор Трейси Манн подскажет, с чего начать и как удержать результат."),
  new SelectionElements("Книга", "О диете", "Клеточная диета – стройность за 90 дней", "Книга Татьяны Лебедь", "https://cv5.litres.ru/pub/c/cover/18592453.jpg", "Россия", "Эксперт по похудению Татьяна Лебедь рассказывает об основных причинах лишнего веса: главная из них — это голодание клеток организма. Да, именно так: множество людей, страдающих от избыточного веса, часто едят не больше (а порой даже меньше!) своих стройных друзей, но продолжают полнеть, потому что их клетки не получают нужных питательных веществ... Прочитав книгу, вы поймете, какие питательные вещества — нужные, научитесь правильно сочетать продукты, чтобы привести вес к норме, и изучите полезные правила стройности, которые легко соблюдать в повседневной жизни. "),
  new SelectionElements("Книга", "О диете", "Диета чемпионов", "Книга Мэта Фицджеральда", "https://img1.labirint.ru/rcimg/d6e6e5ee9ce8f7ce8fa79fcbe644e101/1920x1080/books61/605969/ph_01.jpg?1575386712", "НеРоссия", "5 правил, по которым питаются лучшие спортсмены на выносливость во всем мире и которым можете следовать вы для улучшения здоровья и спортивных результатов. Мэт Фицджеральд, известный спортивный эксперт и автор многих книг, исследовал то, как питаются лучшие в мире атлеты на выносливость  и вывел 5 правил. Эта книга поможет вам его настроить для себя."),

  new SelectionElements("Фильм", "О питании", "Мифы о правильном питании. Мнения диетологов", "Документальный фильм врача-диетолога Марины Копытько", "https://www.facenews.ua/media/illustration/video/2845bc9db22106a1.jpg", "Россия", "Существует масса мифов о правильном питании, развеиваем их в программе.  Ведущие диетологи и пищевые психологи подробно рассказывают о каждом мифе. В передаче принимала участие и главный врач клиники здорового питания, к.м.н. врач-диетолог Марина Копытько. "),
  new SelectionElements("Фильм", "О питании", "Двойная порция", "Документальный фильм, снятый в 2004 году Морганом Сперлоком", "https://cdn.vox-cdn.com/thumbor/dnuCDXkUcrqtjHrr7P0W4HXCBo0=/0x0:260x173/1200x800/filters:focal(110x66:150x106)/cdn.vox-cdn.com/uploads/chorus_image/image/64163719/585040195.0.jpg", "НеРоссия", "Морган ест в McDonald’s каждый день. На протяжении месяца он должен съедать каждое блюдо из меню ресторана хотя бы один раз. Все это время Морган не занимается спортом. И к чему это всё приведет — неизвестно."),
  new SelectionElements("Фильм", "О диете", "Давайте похудеем?", "Документальный фильм о диетах от Первого канала", "http://s018.radikal.ru/i520/1309/79/2d1e550d88af.jpg", "Россия", "Хочешь похудеть — плати. Все производители нас убеждают, что просто так похудеть нельзя, нужно купить специальные продукты, таблетки, мыло, пояс, заплатить за индивидуальную программу питания, и стоит все это очень дорого. На лишних калориях делают бизнес."),
  new SelectionElements("Фильм", "О диете", "Сахар", "Дебютный документальный проект австралийского актера Дэймона Гамо", "https://4heal.ru/wp-content/uploads/2017/10/film-s-sahar-smotret-online.jpg", "НеРоссия", "История о том, как общество потребления и мода на «здоровое питание» на самом деле приводят нас к ожирению. Австралийский режиссер и актер Дэймон Гамо снимает на камеру свой эксперимент, в ходе которого он начинает питаться исключительно едой, имеющей маркировку «healthy» (полезно для здоровья), чтобы раскрыть для зрителей всю горькую правду о сахаре, который на самом деле скрыт в свежевыжатых соках, обезжиренных йогуртах, мюсли, протеиновых батончиках и другой «полезной» еде."),
];

document.getElementById('test').addEventListener("submit", function (event) {
    event.preventDefault(); 

    let Value1 = '';
    let Value2 = '';
    let Value3 = '';

    localStorage.setItem('bookOrMovie', Value1);
    localStorage.setItem('about', Value2);
    localStorage.setItem('country', Value3);

    let bookOrMovieInputs = document.getElementsByName('bookOrMovie');
    bookOrMovieInputs.forEach(function (input) {
        if (input.checked) Value1 = input.value;
    });

    let aboutInputs = document.getElementsByName('about');
    aboutInputs.forEach(function (input) {
        if (input.checked) Value2 = input.value;
    });

    let countryInputs = document.getElementsByName('country');
    countryInputs.forEach(function (input) {
        if (input.checked) Value3 = input.value;
    });

    localStorage.setItem('bookOrMovie', Value1);
    localStorage.setItem('about', Value2);
    localStorage.setItem('country', Value3);

    getElements();
});

let getElements = function () {
    let result = elements;

    if (localStorage.getItem('bookOrMovie') == 'Фильм') {
      result = result.filter(b => b.bookOrMovie == 'Фильм');
    } 
    else if(localStorage.getItem('bookOrMovie') == 'Книга'){
      result = result.filter(b => b.bookOrMovie == 'Книга');
    }


    if (localStorage.getItem('about') == 'О питании') {
      result = result.filter(b => b.about == 'О питании');
    } 
    else if(localStorage.getItem('about') == 'О диете'){
      result = result.filter(b => b.about == 'О диете');
    }


    if (localStorage.getItem('country') == 'Россия') {
      result = result.filter(b => b.country == 'Россия');
    } 
    else if(localStorage.getItem('country') == 'НеРоссия'){
      result = result.filter(b => b.country == 'НеРоссия');
    }

    let container = document.getElementById('list');
    container.innerHTML = '';

    result.forEach(function (elements) {

      let itemContainer = document.createElement('div');
      itemContainer.classList.add('result');

      container.appendChild(itemContainer);

      let title = document.createElement('p');
      title.innerText = elements.title;
      title.classList.add('p-header-res-servis');

      let description = document.createElement('p');
      description.innerText = elements.description;
      description.classList.add('p-servis-description');

      let author = document.createElement('p');
      author.innerText = elements.author;
      author.classList.add('p-servis-author');


      let image = document.createElement('img');
      image.src = elements.poster;

      image.classList.add('img-s');
      let card = document.createElement('div');

      card.appendChild(title);
      card.appendChild(author);
      card.appendChild(description);
      card.appendChild(image);
      card.classList.add('card');
      container.appendChild(card);
    });
}


getElements();
