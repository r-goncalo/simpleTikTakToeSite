function fun(form){

	defineNames(form);
	document.getElementById("statustext").innerHTML = "Game started!";
	playing = true;
	matrix = [0, 0, 0, 0, 0, 0, 0, 0, 0];
	playerToPlay = 1;
	render();

}

var playerToPlay = 1;
var playerOne;
var playerTwo;
var playing = false;
var matrix = [0, 0, 0, 0, 0, 0, 0, 0, 0];

function playerName(number){

	if(number == 1){

		return playerOne;

	}else {

		return playerTwo;

	}


}

function defineNames(form){

	playerOne = form.name1.value;
	playerTwo = form.name2.value;



}

function play(index){

	if(playing && matrix[index] == 0){

		console.log("Player: " + playerToPlay + " index: " + index);
		matrix[index] = playerToPlay;
		playerToPlay = - playerToPlay;

	}

	let winner = returnWinner();
	console.log(winner);
	if(winner != 0) {

		document.getElementById("statustext").textContent = "Player " + playerName(winner) + " won";
		playing = false;

		}

	render();

}

function returnWinner(){

	if(checkHorizontalWinner() == 0){

		if(checkVerticalWinner() == 0){

			return checkDiagonalWinner();

		}else {

			return checkVerticalWinner();

		}
	}
	else {return checkHorizontalWinner();}

}

function checkHorizontalWinner(){

	if(matrix[0] ==  matrix[1] && matrix[1] == matrix[2] && matrix[2] != 0){
		return matrix[0];
	}
	else if(matrix[3] ==  matrix[4] && matrix[4] == matrix[5] && matrix[5] != 0){
		return matrix[3];
	}
	else if(matrix[6] ==  matrix[7] && matrix[7] == matrix[8] && matrix[8] != 0){
		return matrix[6];
	}
	else {return 0;}

}


function checkVerticalWinner(){

	if(matrix[0] ==  matrix[3] && matrix[3] == matrix[6] && matrix[6] != 0){
		return matrix[0];
	}
	else if(matrix[1] ==  matrix[4] && matrix[4] == matrix[7] && matrix[7] != 0){
		return matrix[1];
	}
	else if(matrix[2] ==  matrix[5] && matrix[5] == matrix[8] && matrix[8] != 0){
		return matrix[2];
	}
	else {return 0;}

}

function checkDiagonalWinner(){

	if(matrix[0] ==  matrix[4] && matrix[4] == matrix[8] && matrix[8] != 0){
		return matrix[0];
	}
	else if(matrix[2] ==  matrix[4] && matrix[4] == matrix[6] && matrix[6] != 0){
		return matrix[1];
	}
	else {return 0;}

}


function render(){

	for(let i = 0; i < matrix.length; i++){

		if(matrix[i] == 1){ document.getElementById(i.toString()).style = "background-color:Red" ;}
		else if(matrix[i] == -1){ document.getElementById(i.toString()).style = "background-color:Orange" ;}
		else{ document.getElementById(i.toString()).style = "background-color:Gray" ;}
	}

}

