var makeBouncyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass("bouncy");
  this.$node.append("<img src='carlton.gif'>");
};

makeBouncyDancer.prototype = Object.create(makeDancer.prototype);

makeBouncyDancer.prototype.constructor = makeBouncyDancer;

makeBouncyDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  var change = 0;
  if (this.$node.position().top > 300) {
    change = -25;
  } else {
    change = 25;
  }
  this.$node.css({
    top: this.$node.position().top + change + "px"
  });
};

