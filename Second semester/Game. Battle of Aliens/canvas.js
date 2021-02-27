let ctx =canvas.getContext('2d');

// Управление гг на английской клавиатуре:
// Бег вправо: -> (runRight)
// Бег влево: <- (runLeft)
// Стрельба магическая вправо: D (attackRight1)
// Стрельба магическая влево: A (attackLeft1)
// Стрельба из пистолета вправо: R (attackRight2)
// Стрельба из пистолета влево: E (attackRight1)
// Пауза игры: esc
// 

let bg = new Image();

let runRight = new Image();
let runLeft = new Image();
let standLeft = new Image();
let standRight = new Image();
let attackRight1 = new Image();
let attackLeft1 = new Image();
let deadRight = new Image();
let deadLeft = new Image();
let attackRight2 = new Image();
let attackLeft2 = new Image();

let start = new Image();
let stop = new Image();
let dead = new Image();
let victory = new Image();
let health_sprite = new Image();

let learn1 = new Image();
let learn2 = new Image();
let learn3 = new Image();
let learn4 = new Image();
let learn5 = new Image();
let learn6 = new Image();
let learn7 = new Image();

let greenRunLeft = new Image();
let greenRunRight = new Image();
let greenAttackLeft = new Image();
let greenAttackRight = new Image();
let greenDeadLeft = new Image();

let blueRunLeft = new Image();
let blueRunRight = new Image();
let blueAttackLeft = new Image();
let blueAttackRight = new Image();
let blueDeadLeft = new Image();

let redRunLeft = new Image();
let redRunRight = new Image();
let redAttackLeft = new Image();
let redAttackRight = new Image();
let redDeadLeft = new Image();

let killed1 = new Image();
let killed2 = new Image();
let killed3 = new Image();
let killed4 = new Image();
let killed5 = new Image();
let killed6 = new Image();
let killed7 = new Image();
let killed8 = new Image();

bg.src = 'sprite/details/location.png';

runRight.src = 'sprite/player/run_right.png';
runLeft.src = 'sprite/player/run_left.png';
standLeft.src = 'sprite/player/stand_left.png';
standRight.src = 'sprite/player/stand_right.png';
attackRight1.src = 'sprite/player/attack_right1.png';
attackLeft1.src = 'sprite/player/attack_left1.png';
deadRight.src = 'sprite/player/dead_right.png';
deadLeft.src = 'sprite/player/dead_left.png';
attackRight2.src = 'sprite/player/attack_right2.png';
attackLeft2.src = 'sprite/player/attack_left2.png';

start.src = 'sprite/details/start.png';
stop.src = 'sprite/details/stop.png';
dead.src = 'sprite/details/dead.png';
victory.src = 'sprite/details/victory.png';
health_sprite.src = 'sprite/details/health.png';

learn1.src = 'sprite/details/learn1.png';
learn2.src = 'sprite/details/learn2.png';
learn3.src = 'sprite/details/learn3.png';
learn4.src = 'sprite/details/learn4.png';
learn5.src = 'sprite/details/learn5.png';
learn6.src = 'sprite/details/learn6.png';
learn7.src = 'sprite/details/learn7.png';

greenRunLeft.src = 'sprite/monstr_green/green_run_left.png';
greenRunRight.src = 'sprite/monstr_green/green_run_right.png';
greenAttackLeft.src = 'sprite/monstr_green/green_attack_left.png';
greenAttackRight.src = 'sprite/monstr_green/green_attack_right.png';
greenDeadLeft.src = 'sprite/monstr_green/green_dead_left.png';

blueRunLeft.src = 'sprite/monstr_blue/blue_run_left.png';
blueRunRight.src = 'sprite/monstr_blue/blue_run_right.png';
blueAttackLeft.src = 'sprite/monstr_blue/blue_attack_left.png';
blueAttackRight.src = 'sprite/monstr_blue/blue_attack_right.png';
blueDeadLeft.src = 'sprite/monstr_blue/blue_dead_left.png';

redRunLeft.src = 'sprite/monstr_red/red_run_left.png';
redRunRight.src = 'sprite/monstr_red/red_run_right.png';
redAttackLeft.src = 'sprite/monstr_red/red_attack_left.png';
redAttackRight.src = 'sprite/monstr_red/red_attack_right.png';
redDeadLeft.src = 'sprite/monstr_red/red_dead_left.png';

killed1.src = 'sprite/killed/killed1.png';
killed2.src = 'sprite/killed/killed2.png';
killed3.src = 'sprite/killed/killed3.png';
killed4.src = 'sprite/killed/killed4.png';
killed5.src = 'sprite/killed/killed5.png';
killed6.src = 'sprite/killed/killed6.png';
killed7.src = 'sprite/killed/killed7.png';
killed8.src = 'sprite/killed/killed8.png';

let sprite = start; //определает спрайт для рисовки 
let spriteBeforeStop; //переменная сохраняет тот спрайт, который рисовался в момент нажатия паузы, чтобы с него потом и продолжить игру 


let person = {

	x_padding: 0,   //отступ по OX в спрайтах для runRight, runLeft

	x_padding_standLeft: 0,   //отступ по OX в спрайте для standLeft

	x_padding_standRight: 0,   //отступ по OX в спрайте для standRight 

	x_padding_attackRight1: 0,   //отступ по OX в спрайте для attackRight1 

	x_padding_attackLeft1: 0,   //отступ по OX в спрайте для attackLeft1 

	x_padding_deadRight: 0,   //отступ по OX в спрайте для deadRight

	x_padding_deadLeft: 0,   //отступ по OX в спрайте для deadLeft

	x_padding_attackRight2: 0,   //отступ по OX в спрайте для attackRight2

	x_padding_attackLeft2: 0,   //отступ по OX в спрайте для attackLeft2 

	x_padding_start: 0,   //отступ по OX в спрайте для start

	y_padding_before_stop: 0,   //будет хранить значение y_padding, которое было до нажатия паузы

	x_pos_before_stop: 0,      //будет хранить значение x_pos, которое было до нажатия паузы

	tick_count: 0,

	x_pos: 60,      //начальное смещение от левого края экрана

	y_padding: 360 //отступ по OY в спрайте stand для второго ряда (стоит на месте и смотрит вправо, начальное положение)
}

let health = {

	counter: 300,

	y_padding:0,
	
	coordinateToTheGround: 55, // расстояние по OY, определяет положение линии зоровья

	x_pos: 100,

	width: 300,

	hight: 45
}

let kill = {

	x_padding:0,

	y_padding:0,
	
	coordinateToTheGround: 15, // расстояние по OY, определяет положение линии зоровья

	x_pos: 750,

	width: 300,

	hight: 125
}

let mainHero = { //параметры гг
	hight: 170,
	width: 90
}

let position = {
	sx: 0,
	sy: 0,
	swidth: 1200,     //позиции для отрисовки фона
	sheight: 675,
	x:0,
	y:0,
	width:1200,
	height:675
}


let coordinateToTheGround = 385; // расстояние по OY, определяет стояние гг на земле
let flag=0;    //флаг для паузы
let flagLearn=0;     //флаг для обучения
let flagMotionControl=0; //флаг для блокировки клавиш передвижения и стрельбы после смерти гг

bg.onload = function(){      //догрузка картинок в браузер
	bgChange();
	tick();
	requestAnimationFrame(tick);
};

function bgChange(){       //отрисовка фона
	ctx.drawImage(bg, position.sx, position.sy, position.swidth, position.sheight, position.x , position.y , position.width, position.height);
};

function tick(){
	if (person.tick_count>30){
		Player();
		person.tick_count=0;
	}
	person.tick_count+=1;
	requestAnimationFrame(tick);
}


function check(){
	if (person.x_pos>1050){
  		person.x_pos=1050; 	
	}

	if (person.x_pos<-60){
  		person.x_pos=-60;	
	}
};

function Player() { //основная фукция отрисовки 
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	check();          //проверка положения гг, не даёт уйти за границы экрана
	bgChange();       //отрисовка фона
	drawHealth();     //отрисовка линии здоровья
	drawKilled();     //отрисовка убитых монстров

	runGreen();        //отрсисовка бега зеленого монстра
	checkHealthGreen();//поверка здоровья зеленого монстра
	deadGreen();       //смерть зеленого

	runBlue();        //отрсисовка бега синего монстра
	checkHealthBlue();//поверка здоровья синего монстра
	deadBlue();       //смерть синего

	runRed();         //отрсисовка бега красного монстра
	checkHealthRed(); //поверка здоровья красного монстра
	deadRed();        //смерть красного
	
	if (sprite == runLeft || sprite == runRight){
		person.x_padding = (person.x_padding===2100 ? 0 : person.x_padding+420);
		mainHero.width=220;
		ctx.drawImage(sprite, person.x_padding, person.y_padding, 420, 360, person.x_pos, coordinateToTheGround, mainHero.width, mainHero.hight);
	}

	else if (sprite == standLeft){
		person.x_padding_standLeft = (person.x_padding_standLeft===840 ? 0 : person.x_padding_standLeft+420);
		mainHero.width=220;
		ctx.drawImage(sprite, person.x_padding_standLeft, person.y_padding, 420, 360, person.x_pos, coordinateToTheGround, mainHero.width, mainHero.hight);
	}

	else if (sprite == standRight){
		person.x_padding_standRight = (person.x_padding_standRight===840 ? 0 : person.x_padding_standRight+420);
		mainHero.width=220;
		ctx.drawImage(sprite, person.x_padding_standRight, person.y_padding, 420, 360, person.x_pos, coordinateToTheGround, mainHero.width, mainHero.hight);
	}

	else if (sprite == attackRight1){
		person.x_padding_attackRight1 = (person.x_padding_attackRight1===2400 ? 0 : person.x_padding_attackRight1+600);
		mainHero.width=300;
		person.x_pos+=10; //без этого он рисуется с неправильного места, после отрисовки спрайта person.x_pos возвращается в изначальное значение
		ctx.drawImage(sprite, person.x_padding_attackRight1, person.y_padding, 600, 360, person.x_pos, coordinateToTheGround, mainHero.width, mainHero.hight);
		person.x_pos-=10; 
	}

	else if (sprite == attackLeft1){
		person.x_padding_attackLeft1 = (person.x_padding_attackLeft1===2400 ? 0 : person.x_padding_attackLeft1+600);
		mainHero.width=300;
		person.x_pos-=135; //без этого он рисуется с неправильного места, после отрисовки спрайта person.x_pos возвращается в изначальное значение
		ctx.drawImage(sprite, person.x_padding_attackLeft1, person.y_padding, 600, 360, person.x_pos, coordinateToTheGround, mainHero.width, mainHero.hight);
		person.x_pos+=135;
	}

	else if (sprite == deadRight){ //отрисовка одного цикла падения, потом рисуется постоянное лежание на спине
		person.x_padding_deadRight = (person.x_padding_deadRight===3680 ? 3680 : person.x_padding_deadRight+460);
		mainHero.width=220;
		person.x_pos-=60; //без этого он рисуется с неправильного места, после отрисовки спрайта person.x_pos возвращается в изначальное значение
		ctx.drawImage(sprite, person.x_padding_deadRight, person.y_padding, 460, 360, person.x_pos, coordinateToTheGround, mainHero.width, mainHero.hight);
		person.x_pos+=60; 
		if (person.x_padding_deadRight == 3680){ //отрисовка, если персонаж умер
			person.y_padding=0;
			ctx.drawImage(dead, person.x_padding_start, 0, 1208, 608, -5, -5, 1210, 605);	
		}
	}

	else if (sprite == deadLeft){ //отрисовка одного цикла падения, потом рисуется постоянное лежание на спине
		person.x_padding_deadLeft = (person.x_padding_deadLeft===3680 ? 3680 : person.x_padding_deadLeft+460);
		mainHero.width=220;
		person.x_pos+=60; //без этого он рисуется с неправильного места, после отрисовки спрайта person.x_pos возвращается в изначальное значение
		ctx.drawImage(sprite, person.x_padding_deadLeft, person.y_padding, 460, 360, person.x_pos, coordinateToTheGround, mainHero.width, mainHero.hight);
		person.x_pos-=60;
		if (person.x_padding_deadLeft == 3680){//отрисовка, если персонаж умер
			person.y_padding=0;
			ctx.drawImage(dead, person.x_padding_start, 0, 1208, 608, -5, -5, 1210, 605);	
		}
	}

	else if (sprite == attackRight2){
		person.x_padding_attackRight2 = (person.x_padding_attackRight2===6000 ? 0 : person.x_padding_attackRight2+1000);
		mainHero.width=500;
		person.x_pos+=60; //без этого он рисуется с неправильного места, после отрисовки спрайта person.x_pos возвращается в изначальное значение
		ctx.drawImage(sprite, person.x_padding_attackRight2, person.y_padding, 1000, 360, person.x_pos, coordinateToTheGround, mainHero.width, mainHero.hight);
		person.x_pos-=60; 
	}

	else if (sprite == attackLeft2){
		person.x_padding_attackLeft2 = (person.x_padding_attackLeft2===6000 ? 0 : person.x_padding_attackLeft2+1000);	
		mainHero.width=500;
		person.x_pos-=340; //без этого он рисуется с неправильного места, после отрисовки спрайта person.x_pos возвращается в изначальное значение
		ctx.drawImage(sprite, person.x_padding_attackLeft2, person.y_padding, 1000, 360, person.x_pos, coordinateToTheGround, mainHero.width, mainHero.hight);
		person.x_pos+=340; 
	}

	else if (sprite == start){    //отрисовка страртовой картинки игры
		person.y_padding=0;
		ctx.drawImage(sprite, person.x_padding_start, 0, 1208, 608, -5, -5, 1210, 605);
	}

	else if (sprite == stop){    //отрисовка остановки игры
		person.y_padding=0;
		ctx.drawImage(sprite, person.x_padding_start, 0, 1208, 608, -5, -5, 1210, 605);
	}

	else if (sprite == learn1 || sprite == learn2 || sprite == learn3 || sprite == learn4 || sprite == learn5 || sprite == learn6 || sprite == learn7){    //отрисовка обучалки по игре
		person.y_padding=0;
		ctx.drawImage(sprite, person.x_padding_start, 0, 1208, 608, -5, -5, 1210, 605);
	}

	else if (sprite == victory){    //отрисовка победы 
		person.y_padding=0;
		ctx.drawImage(sprite, person.x_padding_start, 0, 1208, 608, -5, -5, 1210, 605);
	}
}

function drawHealth() { //отрисовка линии здоровья
	if (health.counter==300){  
		ctx.drawImage(health_sprite, 0, health.y_padding, 450, 82, health.x_pos, health.coordinateToTheGround, health.width, health.hight);
	}
	if (health.counter==240){ 
		ctx.drawImage(health_sprite, 450, health.y_padding, 450, 82, health.x_pos, health.coordinateToTheGround, health.width, health.hight);
	}
	if (health.counter==180){
		ctx.drawImage(health_sprite, 900, health.y_padding, 450, 82, health.x_pos, health.coordinateToTheGround, health.width, health.hight);
	}
	if (health.counter==120){
		ctx.drawImage(health_sprite, 1350, health.y_padding, 450, 82, health.x_pos, health.coordinateToTheGround, health.width, health.hight);
	}
	if (health.counter==60){  
		ctx.drawImage(health_sprite, 1800, health.y_padding, 450, 82, health.x_pos, health.coordinateToTheGround, health.width, health.hight);
	}
	if (health.counter==0||health.counter<0){ 
		flagMotionControl=1;
		ctx.drawImage(health_sprite, 2250, health.y_padding, 450, 82, health.x_pos, health.coordinateToTheGround, health.width, health.hight);
		if (sprite==standRight|| sprite==runRight|| sprite == attackRight1 || sprite == attackRight2){
			person.y_padding=0; //умирает,смотря вправо и лежит (F)
			sprite = deadRight;
			person.x_padding_deadRight=0;
		}
		else if (sprite==standLeft|| sprite==runLeft|| sprite == attackLeft1 || sprite == attackLeft2){
			person.y_padding=0; //умирает,смотря влево и лежит (F)
			sprite = deadLeft;
			person.x_padding_deadLeft=0;
		}
	}	
}

function drawKilled(){ //отрисовка убитых монстров
	if (monsterGreen.life > 0 && monsterBlue.life > 0 && monsterRed.life > 0){
		ctx.drawImage(killed1, kill.x_padding, kill.y_padding, 470, 200, kill.x_pos, kill.coordinateToTheGround, kill.width, kill.hight);
	}
	if (monsterGreen.life < 0 && monsterBlue.life > 0 && monsterRed.life > 0){
		ctx.drawImage(killed2, kill.x_padding, kill.y_padding, 470, 200, kill.x_pos, kill.coordinateToTheGround, kill.width, kill.hight);
	}
	if (monsterGreen.life > 0 && monsterBlue.life < 0 && monsterRed.life > 0){
		ctx.drawImage(killed3, kill.x_padding, kill.y_padding, 470, 200, kill.x_pos, kill.coordinateToTheGround, kill.width, kill.hight);
	}
	if (monsterGreen.life > 0 && monsterBlue.life > 0 && monsterRed.life < 0){
		ctx.drawImage(killed4, kill.x_padding, kill.y_padding, 470, 200, kill.x_pos, kill.coordinateToTheGround, kill.width, kill.hight);
	}
	if (monsterGreen.life < 0 && monsterBlue.life < 0 && monsterRed.life > 0){
		ctx.drawImage(killed5, kill.x_padding, kill.y_padding, 470, 200, kill.x_pos, kill.coordinateToTheGround, kill.width, kill.hight);
	}
	if (monsterGreen.life < 0 && monsterBlue.life > 0 && monsterRed.life < 0){
		ctx.drawImage(killed6, kill.x_padding, kill.y_padding, 470, 200, kill.x_pos, kill.coordinateToTheGround, kill.width, kill.hight);
	}
	if (monsterGreen.life > 0 && monsterBlue.life < 0 && monsterRed.life < 0){
		ctx.drawImage(killed7, kill.x_padding, kill.y_padding, 470, 200, kill.x_pos, kill.coordinateToTheGround, kill.width, kill.hight);
	}
	if (monsterGreen.life < 0 && monsterBlue.life < 0 && monsterRed.life < 0){
		ctx.drawImage(killed8, kill.x_padding, kill.y_padding, 470, 200, kill.x_pos, kill.coordinateToTheGround, kill.width, kill.hight);
	}
}

addEventListener('keydown', function(e){
	let step=15;
	if (flagMotionControl == 0){
		if(e.keyCode===37){       //бежит влево
			person.x_pos-=step;
			person.y_padding=0; 
			sprite = runLeft;
		}
		else if (e.keyCode===39){ //бежит вправо
			person.x_pos+=step;
			person.y_padding=0; 
			sprite = runRight;
		}
		else if (e.keyCode===68){ //стреляет вправо, краткая атака (D)
			person.y_padding=0; 
			sprite = attackRight1;
		}
		else if (e.keyCode===65){ //стреляет влево, краткая атака (А)
			person.y_padding=0; 
			sprite = attackLeft1;
		}
		else if (e.keyCode===82){ //стреляет вправо пистолетом (R)
			person.y_padding=0; 
			sprite = attackRight2;
		}
		else if (e.keyCode===69){ //стреляет влево пистолетом (E)
			person.y_padding=0; 
			sprite = attackLeft2;
		}
	}
	if (e.keyCode === 13){ //после отпуска Enter начинается игра с самого начала, поэтому все переменные, меняющиеся во вреям игры здесь принимают начальные значения
		person.x_pos=60;
 		person.x_padding = 0;
 		person.y_padding = 0;
 		sprite = standRight;
 		health.counter=300;
 		monsterGreen.x=1400;
 		monsterBlue.x=2000;
 		monsterRed.x=3400;
 		monsterGreen.life=50;
 		monsterBlue.life=100;
 		monsterRed.life=150;
 		flagMotionControl=0;
 		scriptMonster=greenRunLeft;
 		scriptBlueMonster=blueRunLeft;
 		scriptRedMonster=redRunLeft;
	}
});

addEventListener('keyup', function(b){ //отрисовывает после отпускания клавиши-стрелочки
	if(flagMotionControl==0){
		if(b.keyCode === 37 || b.keyCode === 65 || b.keyCode === 69){      //стоит и смотрит влево
			person.x_padding = 0;
	 		sprite = standLeft;

	 		person.x_padding_attackLeft1=0;//обнуление для фазы атак, чтоб каждая новая атака начиналась с начальной фазы, а не с прерванного места
	 		person.x_padding_attackLeft2=0;
		}
		else if (b.keyCode === 39 || b.keyCode === 68 || b.keyCode === 82){ //стоит и смотрит вправо
	 		person.x_padding = 0;
	 		person.y_padding = 0;
	 		sprite = standRight;

	 		person.x_padding_attackRight2=0;//обнуление для фазы атак, чтоб каждая новая атака начиналась с начальной фазы, а не с прерванного места
	 		person.x_padding_attackRight1=0;
		}
	}
	
	if (flagMotionControl==0){
		if (b.keyCode === 27){ //пауза начинается после отпускания esc
			if(flag==0){
				person.x_pos_before_stop=person.x_pos;
				spriteBeforeStop=sprite;
		 		person.x_padding = 0;
		 		person.y_padding_before_stop=person.y_padding;
		 		sprite = stop;
		 		flag=1;
			}
			else if (flag==1){
				person.x_pos=person.x_pos_before_stop;
				sprite=spriteBeforeStop;
				person.y_padding = person.y_padding_before_stop;
		 		person.x_padding = 0;
		 		flag=0;
			}
		}
	}
	if (b.keyCode === 87){ //для обучения жать на W
		if(flagLearn==0){
	 		sprite = learn1;
	 		flagLearn=1;
		}
		else if (flagLearn==1){
			sprite = learn2;
	 		flagLearn=2;
		}
		else if (flagLearn==2){
			sprite = learn3;
	 		flagLearn=3;
		}
		else if (flagLearn==3){
			sprite = learn4;
	 		flagLearn=4;
		}
		else if (flagLearn==4){
			sprite = learn5;
	 		flagLearn=5;
		}
		else if (flagLearn==5){
			sprite = learn6;
	 		flagLearn=6;
		}
		else if (flagLearn==6){
			sprite = learn7;
	 		flagLearn=0;
		}
	}
});

let scriptMonster = greenRunLeft; //начальные спрайты для отрисовки монстров
let scriptBlueMonster = blueRunLeft;
let scriptRedMonster = redRunLeft;

function deadGreen(){
	if ((monsterGreen.life == 0 || monsterGreen.life < 0)&&(scriptMonster!=greenRunLeft||scriptMonster!=greenRunRight||scriptMonster!=greenAttackRight||scriptMonster!=greenAttackLeft)){
		scriptMonster = greenDeadLeft;
		paintMonster();
	}
}

function deadBlue(){
	if ((monsterBlue.life == 0 || monsterBlue.life < 0)&&(scriptBlueMonster!=blueRunLeft||scriptBlueMonster!=blueRunRight||scriptBlueMonster!=blueAttackRight||scriptBlueMonster!=blueAttackLeft)){
		scriptBlueMonster = blueDeadLeft;
		paintBlueMonster();
	}
}

function deadRed(){
	if ((monsterRed.life == 0 || monsterRed.life < 0)&&(scriptRedMonster!=redRunLeft||scriptRedMonster!=redRunRight||scriptRedMonster!=redAttackRight||scriptRedMonster!=redAttackLeft)){
		scriptRedMonster = redDeadLeft;
		paintRedMonster();
	}
}

function checkHealthGreen(){ //проверка здоровья зеленого монстра
	if ((person.x_pos<monsterGreen.x)&&(monsterGreen.x<person.x_pos+250)&&(person.x_padding_attackRight1===1200)){
		monsterGreen.life-=40;
	} 

	if ((person.x_pos<monsterGreen.x)&&(monsterGreen.x<person.x_pos+450)&&(person.x_padding_attackRight2===4000)){
		monsterGreen.life-=20;
	}

	if ((person.x_pos-250<monsterGreen.x)&&(monsterGreen.x<person.x_pos)&&(person.x_padding_attackLeft1===1200)){
		monsterGreen.life-=40;
	} 

	if ((person.x_pos-450<monsterGreen.x)&&(monsterGreen.x<person.x_pos)&&(person.x_padding_attackLeft2===4000)){
			monsterGreen.life-=20;
	} 

	if (monsterGreen.life<=0 && monsterBlue.life<=0 && monsterRed.life<=0){
	 	sprite = victory;
	 	flagMotionControl=1;
	}
}

function checkHealthBlue(){ //проверка здоровья синего монстра
	if ((person.x_pos<monsterBlue.x)&&(monsterBlue.x<person.x_pos+250)&&(person.x_padding_attackRight1===1200)){
		monsterBlue.life-=40;
	} 

	if ((person.x_pos<monsterBlue.x)&&(monsterBlue.x<person.x_pos+450)&&(person.x_padding_attackRight2===4000)){
		monsterBlue.life-=20;
	}

	if ((person.x_pos-250<monsterBlue.x)&&(monsterBlue.x<person.x_pos)&&(person.x_padding_attackLeft1===1200)){
		monsterBlue.life-=40;
	} 
	
	if ((person.x_pos-450<monsterBlue.x)&&(monsterBlue.x<person.x_pos)&&(person.x_padding_attackLeft2===4000)){
		monsterBlue.life-=20;
	}  
}

function checkHealthRed(){ //проверка здоровья красного монстра
	if ((person.x_pos<monsterRed.x)&&(monsterRed.x<person.x_pos+250)&&(person.x_padding_attackRight1===1200)){
		monsterRed.life-=40;
	} 

	if ((person.x_pos<monsterRed.x)&&(monsterRed.x<person.x_pos+450)&&(person.x_padding_attackRight2===4000)){
		monsterRed.life-=20;
	}

	if ((person.x_pos-250<monsterRed.x)&&(monsterRed.x<person.x_pos)&&(person.x_padding_attackLeft1===1200)){
		monsterRed.life-=40;
	} 
	
	if ((person.x_pos-450<monsterRed.x)&&(monsterRed.x<person.x_pos)&&(person.x_padding_attackLeft2===4000)){
		monsterRed.life-=20;
	} 
}



function paintMonster(){
	if (scriptMonster == greenRunLeft){
		monsterGreen.sx = (monsterGreen.sx===2100 ? 0 : monsterGreen.sx+420);	
		ctx.drawImage(scriptMonster, monsterGreen.sx, 0,monsterGreen.sw,monsterGreen.sh,monsterGreen.x,monsterGreen.y,monsterGreen.width,monsterGreen.height);
	} 
	else if (scriptMonster == greenAttackLeft) {
		monsterGreen.sx1 = (monsterGreen.sx1===1950 ? 0 : monsterGreen.sx1+650);
		if (monsterGreen.sx1===1950){
			health.counter-=60;
		}
		monsterGreen.x-=80;
		ctx.drawImage(scriptMonster, monsterGreen.sx1, 0,monsterGreen.s1w,monsterGreen.sh,monsterGreen.x,monsterGreen.y,230,monsterGreen.height);
		monsterGreen.x+=80;
	}	
	else if (scriptMonster == greenRunRight){
		monsterGreen.sx2 = (monsterGreen.sx2===2100 ? 0 : monsterGreen.sx2+420);	
		ctx.drawImage(scriptMonster, monsterGreen.sx2, 0,monsterGreen.sw,monsterGreen.sh,monsterGreen.x,monsterGreen.y,monsterGreen.width,monsterGreen.height);
	}
	else if (scriptMonster == greenAttackRight){
		monsterGreen.sx3 = (monsterGreen.sx3===1950 ? 0 : monsterGreen.sx3+650);
		if (monsterGreen.sx3===1950){
			health.counter-=60;
		}
		monsterGreen.x+=50;
		ctx.drawImage(scriptMonster, monsterGreen.sx3, 0,monsterGreen.s1w,monsterGreen.sh,monsterGreen.x,monsterGreen.y,230,monsterGreen.height);
		monsterGreen.x-=50;
	}	
	else if (scriptMonster == greenDeadLeft){
		monsterGreen.sx4 = (monsterGreen.sx4 ===3280 ? 3280: monsterGreen.sx4+410);
		ctx.drawImage(scriptMonster, monsterGreen.sx4, 0,monsterGreen.s2w,monsterGreen.sh,monsterGreen.x,monsterGreen.y,monsterGreen.width,monsterGreen.height);
	}
};

function paintBlueMonster(){
	if (scriptBlueMonster == blueRunLeft){
		monsterBlue.sx = (monsterBlue.sx===2100 ? 0 : monsterBlue.sx+420);	
		ctx.drawImage(scriptBlueMonster, monsterBlue.sx, 0,monsterBlue.sw,monsterBlue.sh,monsterBlue.x,monsterBlue.y,monsterBlue.width,monsterBlue.height);
	} 
	else if (scriptBlueMonster == blueAttackLeft) {
		monsterBlue.sx1 = (monsterBlue.sx1===1950 ? 0 : monsterBlue.sx1+650);
		if (monsterBlue.sx1===1950){
			health.counter-=60;
		}
		monsterBlue.x-=82;
		ctx.drawImage(scriptBlueMonster, monsterBlue.sx1, 0,monsterBlue.s1w,monsterBlue.sh,monsterBlue.x,monsterBlue.y,230,monsterBlue.height);
		monsterBlue.x+=82;

	}	
	else if (scriptBlueMonster == blueRunRight){
		monsterBlue.sx2 = (monsterBlue.sx2===2100 ? 0 : monsterBlue.sx2+420);	
		ctx.drawImage(scriptBlueMonster, monsterBlue.sx2, 0,monsterBlue.sw,monsterBlue.sh,monsterBlue.x,monsterBlue.y,monsterBlue.width,monsterBlue.height);
	}
	else if (scriptBlueMonster == blueAttackRight){
		monsterBlue.sx3 = (monsterBlue.sx3===1950 ? 0 : monsterBlue.sx3+650);
		if (monsterBlue.sx3===1950){
			health.counter-=60;
		}
		monsterBlue.x+=52;
		ctx.drawImage(scriptBlueMonster, monsterBlue.sx3, 0,monsterBlue.s1w,monsterBlue.sh,monsterBlue.x,monsterBlue.y,230,monsterBlue.height);
		monsterBlue.x-=52;
	}	
	else if (scriptBlueMonster == blueDeadLeft){
		monsterBlue.sx4 = (monsterBlue.sx4 ===3280 ? 3280: monsterBlue.sx4+410);
		ctx.drawImage(scriptBlueMonster, monsterBlue.sx4, 0,monsterBlue.s2w,monsterBlue.sh,monsterBlue.x,monsterBlue.y,monsterBlue.width,monsterBlue.height);
	}
};

function paintRedMonster(){
	if (scriptRedMonster == redRunLeft){
		monsterRed.sx = (monsterRed.sx===2100 ? 0 : monsterRed.sx+420);	
		ctx.drawImage(scriptRedMonster, monsterRed.sx, 0,monsterRed.sw,monsterRed.sh,monsterRed.x,monsterRed.y,monsterRed.width,monsterRed.height);
	} 
	else if (scriptRedMonster == redAttackLeft){
		monsterRed.sx1 = (monsterRed.sx1===1950 ? 0 : monsterRed.sx1+650);
		if (monsterRed.sx1===1950){
			health.counter-=60;
		}
		monsterRed.x-=84;
		ctx.drawImage(scriptRedMonster, monsterRed.sx1, 0,monsterRed.s1w,monsterRed.sh,monsterRed.x,monsterRed.y,230,monsterRed.height);
		monsterRed.x+=84;
	}	
	else if (scriptRedMonster == redRunRight){
		monsterRed.sx2 = (monsterRed.sx2===2100 ? 0 : monsterRed.sx2+420);	
		ctx.drawImage(scriptRedMonster, monsterRed.sx2, 0,monsterRed.sw,monsterRed.sh,monsterRed.x,monsterRed.y,monsterRed.width,monsterRed.height);
	}
	else if (scriptRedMonster == redAttackRight){
		monsterRed.sx3 = (monsterRed.sx3===1950 ? 0 : monsterRed.sx3+650);
		if (monsterRed.sx3===1950){
			health.counter-=60;
		}
		monsterRed.x+=54;
		ctx.drawImage(scriptRedMonster, monsterRed.sx3, 0,monsterRed.s1w,monsterRed.sh,monsterRed.x,monsterRed.y,230,monsterRed.height);
		monsterRed.x-=54;
	}	
	else if (scriptRedMonster == redDeadLeft){
		monsterRed.sx4 = (monsterRed.sx4 ===3280 ? 3280: monsterRed.sx4+410);
		ctx.drawImage(scriptRedMonster, monsterRed.sx4, 0,monsterRed.s2w,monsterRed.sh,monsterRed.x,monsterRed.y,monsterRed.width,monsterRed.height);
	}
};

function runGreen(){
	if ((person.x_pos+150<monsterGreen.x)&&(monsterGreen.x<1500)&&(scriptMonster!=greenDeadLeft)){
		scriptMonster = greenRunLeft;
		monsterGreen.x-=15;
		paintMonster();
	} 
	else  if ((person.x_pos<monsterGreen.x)&&(monsterGreen.x<person.x_pos+150)&&(scriptMonster!=greenDeadLeft)){
		scriptMonster = greenAttackLeft;
		paintMonster();
	} 
	else if ((0<monsterGreen.x)&&(monsterGreen.x<person.x_pos-150)&&(scriptMonster!=greenDeadLeft)) {
		scriptMonster = greenRunRight;
		monsterGreen.x+=15;
	 	paintMonster();
	}
	else if ((person.x_pos-150<monsterGreen.x)&&(monsterGreen.x<person.x_pos)&&(scriptMonster!=greenDeadLeft)){
	 	scriptMonster = greenAttackRight;
	 	paintMonster();
	}
}

function runBlue(){
	if ((person.x_pos+150<monsterBlue.x)&&(monsterBlue.x<2100)&&(scriptBlueMonster!=blueDeadLeft)){
		scriptBlueMonster = blueRunLeft;
		monsterBlue.x-=12;
		paintBlueMonster();	
	} 
	else  if ((person.x_pos<monsterBlue.x)&&(monsterBlue.x<person.x_pos+150)&&(scriptBlueMonster!=blueDeadLeft)){
		scriptBlueMonster = blueAttackLeft;
		paintBlueMonster();
	} 
	 else if ((0<monsterBlue.x)&&(monsterBlue.x<person.x_pos-150)&&(scriptBlueMonster!=blueDeadLeft)) {
		scriptBlueMonster = blueRunRight;
		 monsterBlue.x+=12;
	 	paintBlueMonster();
	}
	else if ((person.x_pos-150<monsterBlue.x)&&(monsterBlue.x<person.x_pos)&&(scriptBlueMonster!=blueDeadLeft)){
	 	scriptBlueMonster = blueAttackRight;
	 	paintBlueMonster();
	}
}

function runRed(){
	if ((person.x_pos+150<monsterRed.x)&&(monsterRed.x<3500)&&(scriptRedMonster!=redDeadLeft)){
		scriptRedMonster = redRunLeft;
		monsterRed.x-=15;
		paintRedMonster();	
	} 
	else  if ((person.x_pos<monsterRed.x)&&(monsterRed.x<person.x_pos+150)&&(scriptRedMonster!=redDeadLeft)){
		scriptRedMonster = redAttackLeft;
		paintRedMonster();
	} 
	 else if ((0<monsterRed.x)&&(monsterRed.x<person.x_pos-150)&&(scriptRedMonster!=redDeadLeft)) {
		scriptRedMonster = redRunRight;
		 monsterRed.x+=15;
	 	paintRedMonster();
	}
	else if ((person.x_pos-150<monsterRed.x)&&(monsterRed.x<person.x_pos)&&(scriptRedMonster!=redDeadLeft)){
	 	scriptRedMonster = redAttackRight;
	 	paintRedMonster();
	}
}

let monsterGreen = {
	life:50,
	height: 170,
  	width: 150,
  	sx:0,
  	sy:0,
  	sw:420,
  	sh:360,
  	x:1400,
  	y:385,
  	s1w:650,
  	sx1:0,
  	sx2:0,
  	sx3:0,
  	sx4:0,
  	s2w:410
}

let monsterBlue = {	//параметры трех видов противников
	life:100,
	height: 170,
  	width: 150,
  	sx:0,
  	sy:0,
  	sw:420,
  	sh:360,
  	x:2000,
  	y:385,
  	s1w:650,
  	sx1:0,
  	sx2:0,
  	sx3:0,
  	sx4:0,
  	s2w:410
  }

  let monsterRed = {	//параметры трех видов противников
	life:150,
	height: 170,
  	width: 150,
  	sx:0,
  	sy:0,
  	sw:420,
  	sh:360,
  	x:3400,
  	y:385,
  	s1w:650,
  	sx1:0,
  	sx2:0,
  	sx3:0,
  	sx4:0,
  	s2w:410
  }


