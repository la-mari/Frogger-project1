
	//setup
	var canvasX = 400;
	var canvasY = 400;
	var froggyX = 200;
	var froggyY = 315;
	var lives = 3;
	var cars = [];

	function setup() {
		var myCanvas = createCanvas(canvasX, canvasY);
		rectMode(CENTER);
		$('canvas').attr('id', 'canvasStyling');
	};

	//constructor function for frog
	var Frog = function(x, y, width, height){
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
	};
	
	//this method to create frog
	Frog.prototype.display = function() {
		fill(0, 150, 0);
		ellipse(this.x, this.y, this.width, this.height);
		fill(250, 250, 250);
		ellipse(this.x + 8, this.y - 10, 10, 7);
		ellipse(this.x - 8, this.y - 10, 10, 7);
		fill(0,0,0);
		ellipse(this.x - 8, this.y - 11, 5, 3.5);
		ellipse(this.x + 8, this.y -11, 5, 3.5);
	};
	
	//new frog assigned to froggy as a square
	var froggy = new Frog(froggyX, froggyY, 25, 20);

	// constructor function for cars
	var Car = function(x, y, width, height, speed){
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.speed = speed;
	};

	Car.prototype.display = function(){
		//car wheels
		fill(0, 0, 0);
		rect(this.x + this.width/2 - 8, this.y + this.height/2, 10, 4);
		rect(this.x - this.width/2 + 8, this.y + this.height/2, 10, 4);
		rect(this.x + this.width/2 - 8, this.y - this.height/2, 10, 4);
		rect(this.x - this.width/2 + 8, this.y - this.height/2, 10, 4);
		//body of car
		fill(250, 150, 0) 
		rect(this.x, this.y, this.width, this.height);
		//headlights
		fill(255, 255, 51);
		ellipse(this.x + this.width/2, this.y-6, 4, 6);
		ellipse(this.x + this.width/2, this.y+6, 4, 6);
		//collision
		if (this.x - (this.width/2)> canvasX){
			// console.log('se paso!');
			this.x = (this.width/2);
		} else {
			this.x += this.speed;
		};
	};

	var song = document.querySelector('audio');
	song.loop = true;
	song.play();

	//Lose scenario
	Car.prototype.collide = function(){
		if((Math.abs(froggy.x - this.x)<(froggy.width/2 + this.width/2)) && (Math.abs(froggy.y - this.y)<(froggy.height/2 + this.height/2))){
			// console.log('collision equation works');
			noLoop();
			textSize(25);
			fill(250, 0, 0);
			text('Froggy Died!' , 120, 25);
			lives -= 1;
			song.pause();
		if (lives === 0){
			textSize(50);
			fill(255, 26, 26);
			text('Game Over', 70, 320);
			lives = 3;
		};
		$('p').text(lives);
		};
	};

	//Win scenario
	var wins = function(){
		if (froggy.y <= 20){
		lives=3;
		$('p').text(lives);
		// console.log('You Win, Froggy Lives!');
		noLoop();
		textSize(25);
		fill(0, 128, 0);
		text('You Win! Froggy Lives!', 70, 25);
		};
	};
	
	cars.push(new Car(0, 240, 50, 35, 1.1),
		new Car(-133, 240, 50, 35, 1.1),
		new Car(-267, 240, 50, 35, 1.1),
		new Car(50, 180, 50, 35, 0.75),
		new Car(-150, 180, 50, 35, 0.75),
		new Car(0, 120, 50, 35, 1.0),
		new Car(-100, 120, 65, 35, 1.0),
		new Car(-300, 120, 40, 35, 1.0),
		new Car(0, 60, 60, 35, 1.5),
		new Car(-150, 60, 85, 35, 1.5))
		// console.log(cars);

	//draw
	function draw() {
		//background here bc draw function continually executes code until stopped. need background redrawn each time car is redrawn
		background(82, 222, 240);
		//street
		fill(150,150,150);
		rect(200, 150, canvasX, 230);
		//striping
		fill(255, 255, 51);
		rect(200, 153, canvasX, 3);
		rect(200, 147, canvasX, 3);
		//call display to show froggy
		froggy.display(); 
		//call display function to show each car
		for(var i=0; i<10; i++){
			cars[i].display();
			//calling collision function for all cars
			cars[i].collide();
		};
		//call wins to log when froggy lives
		wins();
	};

	function keyPressed(){
		if (keyCode === UP_ARROW){
			// console.log("key pressed");
			froggy.y -= 20;
		};
		if (keyCode === DOWN_ARROW){
			froggy.y += 20;
		};
		if (keyCode === LEFT_ARROW){
			froggy.x -= 20;
		};
		if (keyCode === RIGHT_ARROW){
			froggy.x += 20;
		};
	};

 	$('button').addClass('buttonDesign');

	//restart button
	$('#restart').on('click', function(){
	froggy.x = froggyX;
	froggy.y = froggyY;	
	loop();
	song.play();
	song.loop = true;
	});

	