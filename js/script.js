var rowCount = 15;
var colCount = 15;
var gameArray = [];
var neighbours = [];

function generate() {
	var rows = document.getElementById('rows').value;
	rowCount = rows;
	var cols = document.getElementById('cols').value;
	colCount = cols;
	document.getElementById('terrain').innerHTML = '';
	gameArray=[];
	neighbours=[];
	createTable();
}

function createTable() {
	
	for (var i=0;i<rowCount;i++) {
		var row = document.createElement('div');
		row.className += 'row';
		document.getElementById('terrain').appendChild(row);
	}
	
		
	var create = document.getElementsByClassName('row');
	
	for (var i=0; i < rowCount; i++) {
		for (var j=0; j < colCount; j++) {
			var cell = document.createElement('div');
			create[i].appendChild(cell);
			cell.id = i*colCount+j+1;
			var deadOrAlive = Math.round(Math.random());
			if (deadOrAlive == 1) {
				cell.className += 'alive';
				gameArray.push(true);
			}
			else {
				cell.className += 'dead';
				gameArray.push(false);
			}
			cell.className += ' cell';
		}
	}
}

function life() {
	for (i=0; i<gameArray.length;i++) {
		if (gameArray[i]=true) {
			
		}
		else if (gameArray[i]=false) {
			
		}
	}
}