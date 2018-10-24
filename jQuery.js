
$(function() {
    //cache dom elements and set init vars
    var $img = $('#img_container').find('img'),
            max = $img.length, //how many images you have in the container
            current = 0; //we will start the script at the first item
  
    //Every five seconds, run the code within the handler
    setInterval(function(){
          $($img[current]).fadeOut(100, function(){
              determineIndex(); //Update the index of the image in the img array
              $($img[current]).fadeIn();
          });
    }, 500);
  
    function determineIndex () {
        current = (current === max - 1) ? 0 : (current + 1);
    }
  });