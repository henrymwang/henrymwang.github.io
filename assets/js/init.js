$(document).ready(function() {
  // initialize the timeline
  $('#timeline').verticalTimeline({
      startLeft: false,
      alternate: false,
      animate: "slide",
      arrows: false
  });

  new Vivus('plane', {type: 'scenario'});
});
