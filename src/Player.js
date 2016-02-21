function Player()  {
  this.score = 0;
  this.results = [];
}

Player.prototype.roll = function(number) {
  if (number > 10)
    throw "roll must be a number between 1 and 10";
  var pinsDown = number;
  this.results.push(pinsDown);
};

Player.prototype.calculateScore = function() {
  for(var i in this.results) { this.score += this.results[i]; }
};


// RANDOM ROLL FUNCTIONALITY:
// Player.prototype.roll = function() {
//   var rollOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   var pinsDown = rollOptions[Math.floor(Math.random()*rollOptions.length)];
//   this.results.push(pinsDown);
// };
