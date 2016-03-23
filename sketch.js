
	//setup
	var canvasX = 400;
	var canvasY = 400;
	var froggyX = 200;
	var froggyY = 375;

	function setup() {
		createCanvas(canvasX, canvasY);
		rectMode(CENTER);
	};

	//constructor function for frog
	var Frog = function(x, y, width, height){
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
	};
	
	//this method is used to create frog-ellipse with given parameters
	Frog.prototype.display = function() {
		fill(0, 150, 0);
		rect(this.x, this.y, this.width, this.height);
	};
	
	//new frog assigned to froggy with ellipse arguments
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
		fill(250, 150, 0) //car's color
		rect(this.x, this.y, this.width, this.height);
		if (this.x - (this.width/2)> canvasX){
			// console.log('se paso!');
			this.x = (this.width/2);
		} else {
			this.x += this.speed;
		};
	};

	//Lose Scenario
	Car.prototype.collide = function(){
		if((Math.abs(froggy.x - this.x)<(froggy.width/2 + this.width/2)) && (Math.abs(froggy.y - this.y)<(froggy.height/2 + this.height/2))){
			console.log('collision equation works');
			alert('You lost!');
			noLoop();
		};
	};

	//Win scenario
	var wins = function(){
		if (froggy.y <= 0){
		console.log('You Win, Froggy Lives!');
		noLoop();
		alert('You Win!');
		};
	};

	var cars = [];
	
	cars.push(new Car(0, 240, 50, 35, 1.1)
		, new Car(-133, 240, 50, 35, 1.1)
		, new Car(-267, 240, 50, 35, 1.1) 
		, new Car(50, 180, 50, 35, 0.75)
		, new Car(-150, 180, 50, 35, 0.75)
		, new Car(0, 120, 50, 35, 1.0)
		, new Car(-100, 120, 65, 35, 1.0)
		, new Car(-300, 120, 40, 35, 1.0)
		, new Car(0, 60, 60, 35, 1.5)
		, new Car(-150, 60, 85, 35, 1.5))
	// console.log(cars);

	//draw
	function draw() {
		//background here bc draw function continually executes code until stopped. need background redrawn each time car is redrawn
		background(82, 222, 240);
	
		//call display to show froggy
		froggy.display(); 

		//call display function to show each car
		for(var i=0; i<10; i++){
			cars[i].display();
			cars[i].collide();
		};

		//call wins to log when froggy lives
		wins();
	};


	function keyPressed(){
		if (keyCode === UP_ARROW){
			// console.log("key pressed");
			froggy.y -= 20;
		}
		if (keyCode === DOWN_ARROW){
			froggy.y += 20;
		}
		if (keyCode === LEFT_ARROW){
			froggy.x -= 20;
		}
		if (keyCode === RIGHT_ARROW){
			froggy.x += 20;
		}
	};


	//restart button
	$('#restart').on('click', function(){
	froggy.x = froggyX;
	froggy.y = froggyY;	
	loop();
	});

	