spots = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
];

currentPlayer = 1;

function setup() {
    createCanvas(300, 300);
    noLoop();
}

function draw() {
    background(220);
    strokeWeight();
    line(0, height / 3, width, height / 3);
    line(0, height / 3 * 2, width, height / 3 * 2);
    line(width / 3, 0, width / 3, height);
    for(var row = 0; row < spots.length; row++) {
        for(var col = 0; col < spots[row].length; col++) {
            var mark = spots[row][col];
            if(mark == 1) {
                drawX(row, col);
            }   else if (mark == 2) {
                drawO(row, col);
            }   else {
                continue;
            }
        }
    }
}
function mouseClicked() {
    var row = getRowForClick(mouseY);
    var col = getColForClick(mouseX);
    spots[row][col] = currentPlayer;
    if(currentPlayer == 1) { currentPlayer = 2; }
    else { currentPlayer = 1; }
    redraw();
    return false;
}
function getRowForClick(y){
    if( y < height / 3 ) {
        return 0;
    } else if( y < height / 3 * 2 ) {
        return 1;
    } else {
        return 2;
    }
}