var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  console.log("new");
  makeDancer.call(this, top, left, timeBetweenSteps);
  debugger;
  makeDancer.prototype.step.call(this);
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);

makeBlinkyDancer.prototype.step = function() {
  console.log("makeBlinkyDancer step");
  makeDancer.prototype.step.call(this);
  this.$node.toggle();
};

// var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
//   var blinkyDancer = makeDancer(top, left, timeBetweenSteps);

//   // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
//   // so we must keep a copy of the old version of this function

//   var oldStep = blinkyDancer.step;

//   blinkyDancer.step = function() {
//     // call the old version of step at the beginning of any call to this new version of step
//     oldStep();
//     // toggle() is a jQuery method to show/hide the <span> tag.
//     // See http://api.jquery.com/category/effects/ for this and
//     // other effects you can use on a jQuery-wrapped html tag.
//     blinkyDancer.$node.toggle();
//   };

//   return blinkyDancer;
// };
