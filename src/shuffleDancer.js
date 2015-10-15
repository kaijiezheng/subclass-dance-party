var makeShuffleDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass("shuffle");
  this.$node.append("<img src='peter.gif'>");
  this.left = left;
};

makeShuffleDancer.prototype = Object.create(makeDancer.prototype);

makeShuffleDancer.prototype.constructor = makeShuffleDancer;

makeShuffleDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  var change = 0;
  if (this.$node.position().left - this.left > 30) {
    change = -5;
  } else if (this.$node.position().left - this.left < 30) {
    change = 5;
  }
  this.$node.css({
    left: this.$node.position().left + change + "px"
  });
};

