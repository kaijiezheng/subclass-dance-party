var makeSharkDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass("shark");
  this.$node.append("<img src='shark.gif'>");
};

makeSharkDancer.prototype = Object.create(makeDancer.prototype);

makeSharkDancer.prototype.constructor = makeSharkDancer;

makeSharkDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  // this.$node.css({
  //   animation: "roll 3s infinite",
  //   transform: "rotate(30deg)"
  // });
};

