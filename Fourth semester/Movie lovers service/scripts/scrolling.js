//Ф-я восстанавливает скроллинг экран
function enableScrolling(){
    window.onscroll=function(){};
}
  
  //Ф-я останавливает скроллинг экрана
function disableScrolling(){
    let x=window.scrollX;
    let y=window.scrollY;
    window.onscroll=function(){
      window.scrollTo(x, y);
    };
}