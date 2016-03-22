	
	//setup
	function setup() {
		createCanvas(400, 400);
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
		ellipse(this.x, this.y, this.width, this.height);
	};
	
	//new frog assigned to froggy with ellipse arguments
	var froggy = new Frog(200, 350, 20, 20);

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
		if (this.x > 400){
			// console.log('se paso!');
			this.x = 0;
		} else {
			this.x += this.speed;
		};
	};

	// Car.prototype.collide = function(theFrog){ //other will be froggy
	// 	if (this.x === theFrog.x){ //when x coordinates are equal, they have collided
	// 		console.log('collision');
	// 	};
	// };



	Car.prototype.collide = function(){
		// if (this.x === froggy.x){
		// 	console.log('collision');
		// 	noLoop();
		// };

		if((Math.abs((froggy.x + froggy.width/2) - (carOne.x + carOne.width/2))<(froggy.width/2 + carOne.width/2)) && (Math.abs((froggy.y + froggy.height/2) - (carOne.y + carOne.height/2))<(froggy.height/2 + carOne.height/2))){
			console.log('collision equation works');
			noLoop();
		};

	};

	
	// if(((froggy.x + froggy.width/2) - (carOne.x + carOne.width/2))<(froggy.width/2 + carOne.width/2)){
	// 	console.log('collision equation works');
	// };



	var carOne = new Car(0, 300, 50, 35, 3);
	var carTwo = new Car(0, 250, 50, 35, 2);


	//draw
	function draw() {
		//background here bc draw function continually executes code until stopped. need background redrawn each time car is redrawn
		background(82, 222, 240);
	
		
		// rect(-50, 200, 50, 35); //car2
		// rect(50, 250, 50, 35);
		// rect(400, 100, 50, 35);


		carOne.display(); //call display function to show carcar
		carTwo.display(); //display carTwo
		froggy.display(); //call display to show froggy
		carOne.collide(); 
		

		// if (){ //if carOne collide with frog
		// 	console.log('dead frog!')
		// 	noLoop(); 
		// }
	};


		function keyPressed(){
			if (keyCode === UP_ARROW){
				// console.log("key pressed");
				froggy.y -= 10;
			}
			if (keyCode === DOWN_ARROW){
				froggy.y += 10;
			}
			if (keyCode === LEFT_ARROW){
				froggy.x -= 10;
			}
			if (keyCode === RIGHT_ARROW){
				froggy.x += 10;
			}
		}

		
		// var checkCollision = function(){
		// 	if ((froggy.xPosFrog + 10)-(xPosition + 25) < (10+25)){
		// 	console.log("collision!");
		// 	};
		// };
		// checkCollision();


	