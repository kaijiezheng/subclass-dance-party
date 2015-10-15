var makeBouncyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass("bouncy");
  this.$node.append("<img src='carlton.gif'>");
  this.top = top;
  this.left = left;
};

makeBouncyDancer.prototype = Object.create(makeDancer.prototype);

makeBouncyDancer.prototype.constructor = makeBouncyDancer;

makeBouncyDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  var change = 0;
  if (this.$node.position().top - this.top > 20) {
    change = -5;
  } else if (this.$node.position().top - this.top <= 20) {
    change = 5;
  }
  this.$node.css({
    top: this.$node.position().top + change + "px"
  });
};
