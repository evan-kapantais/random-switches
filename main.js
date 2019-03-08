$(document).ready(function(){

  function randomNumber () {
    return Math.floor(Math.random() * 11);
  }

  $('.inner').on('click', toggleButton);

  function toggleButton() {
    var rand = randomNumber();

    $(this).toggleClass('target');
  
    if(rand > 5) {
      $('.inner').toggleClass('active');
    }
  }
});

