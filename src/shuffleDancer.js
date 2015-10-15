var makeShuffleDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass("shuffle");
  this.$node.append("<img src='peter.gif'>");
};

makeShuffleDancer.prototype = Object.create(makeDancer.prototype);

makeShuffleDancer.prototype.constructor = makeShuffleDancer;

makeShuffleDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.css({
    left: this.$node.position().left - 4 + "px"
  });
};

