	
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
	var froggy = new Frog(200, 388, 25, 20);

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


	//Collision Detections
	Car.prototype.collide = function(){
		// if (this.x === froggy.x){
		// 	console.log('collision');
		// 	noLoop();
		// };
		if((Math.abs((froggy.x + froggy.width/2) - (car1.x + car1.width/2))<(froggy.width/2 + car1.width/2)) && (Math.abs((froggy.y + froggy.height/2) - (car1.y + car1.height/2))<(froggy.height/2 + car1.height/2))){
			// console.log('collision equation works');
			noLoop();
		};
	};

	//Win scenario
	// if (froggy.x >= )

	


	//Lane One
	var car1 = new Car(0, 240, 50, 35, 1.1);
	var car2 = new Car(-133, 240, 50, 35, 1.1);
	var car3 = new Car(-267, 240, 50, 35, 1.1);

	//Lane Two
	var car4 = new Car(50, 180, 50, 35, 0.75);
	var car5 = new Car(-150, 180, 50, 35, 0.75);

	//Lane Three
	var car6 = new Car(0, 120, 50, 35, 1.0);
	var car7 = new Car(-170, 120, 65, 35, 1.0);
	var car8 = new Car(-300, 120, 40, 35, 1.0);

	//Lane Four
	var car9 = new Car(0, 60, 60, 35, 1.5);
	var car10 = new Car(-150, 60, 85, 35, 1.5);




	//draw
	function draw() {
		//background here bc draw function continually executes code until stopped. need background redrawn each time car is redrawn
		background(82, 222, 240);
	
		
		// rect(-50, 200, 50, 35); //car2
		// rect(50, 250, 50, 35);
		// rect(400, 100, 50, 35);


		car1.display(); //call display function to show each car
		car2.display();
		car3.display();
		car4.display(); 
		car5.display();
		car6.display();
		car7.display();
		car8.display();
		car9.display();
		car10.display();
		froggy.display(); //call display to show froggy
		car1.collide(); //call collisiond detection bt froggy and car1
		

		// if (){ //if carOne collide with frog
		// 	console.log('dead frog!')
		// 	noLoop(); 
		// }
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

		
		// var checkCollision = function(){
		// 	if ((froggy.xPosFrog + 10)-(xPosition + 25) < (10+25)){
		// 	console.log("collision!");
		// 	};
		// };
		// checkCollision();


	