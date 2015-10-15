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
        var dancerTwo, dancerTwoIndex, min;
        for (var i = index+1; i < n; i++) {
          dancerTwo = (1 << n-1-i);
          var distance = Math.sqrt(Math.pow(dancers[index].$node.offset().top - dancers[i].$node.offset().top, 2) + Math.pow(dancers[index].$node.offset().left - dancers[i].$node.offset().left, 2));
          if (min === undefined || distance < min) {
            min = distance
            dancerTwoIndex = i;
          }
        }
        if (dancerTwoIndex) {
          available = available | (1 << n-1-dancerTwoIndex);
          dancers[dancerTwoIndex].setPosition(dancers[index].$node.offset().top, dancers[index].$node.offset().left + 50);
        }
      }
    });
  });

  $('body').on('mouseover', '.shark img', function(event) {
    $(this).css('width', '350px');
  });
});
