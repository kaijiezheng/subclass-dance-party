$(document).ready(function() {
  window.dancers = [];

  $(".addDancerButton").on("click", function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    dancers.push(dancer);
  });

  $('.lineUpButton').on('click', function(event) {
    dancers.forEach(function(dancer) {
      dancer.lineUp();
    });
  });

  $('.pairUpButton').on('click', function(event) {
    var n = dancers.length;
    var available = 0;
    dancers.forEach(function(dancer, index) {
      var dancerOne = (1 << n-1-index);
      if ((available & dancerOne) === 0) {
        available = available | dancerOne;
        var dancerTwo;
        var dancerTwoIndex;
        var min;
        for (var i = index+1; i < n; i++) {
          dancerTwo = (1 << n-1-i);
          console.log("before");
          var distance = Math.sqrt(Math.pow(dancers[index].$node.offset().top - dancers[i].$node.offset().top, 2) + Math.pow(dancers[index].$node.offset().left - dancers[i].$node.offset().left, 2));
          console.log("after");
          console.log(distance);
          if (min === undefined || distance < min) {
            min = distance
            dancerTwoIndex = i;
          }
        }
        console.log(dancerTwoIndex);
        available = available | dancerTwo;
        dancers[dancerTwoIndex].$node.css("top", dancers[index].$node.top);
        dancers[dancerTwoIndex].$node.css("left", dancers[index].$node.left + 50);
      }
    });
  });

  $('body').on('mouseover', '.shark img', function(event) {
    $(this).css('width', '350px');
  });
});


// dancer 1 & available -> check if it is 0

// // var n = number of dancers
// // var available = 0;
// // for loop through window.dancers
//   // var dancerOne = (1 << n-1-index)
//   // if (available & dancerOne === 0)
//     // dancerOne available -> save index
//     // update available = available | dancerOne
//     // calculate distance to all other dancers
//       // var dancerTwo;
//       // var dancerTwoIndex;
//       // for loop through window.dancers
//         //dancerTwo = (1 << n-1-index)
//         // grab coordinates
//         // calculate distance
//         // if (distance < min    &&    dancerTwo & available === 0 )
//           // var min = current minimum distance
//           // dancerTwoIndex = index
//       // move dancerTwo to dancerOne coordinates -> if dancerTwo exists
//       // update available = available | dancerTwo
//   // else if dancerOne not available -> do nothing


