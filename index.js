document.addEventListener('DOMContentLoaded', function () {
    // Get the modal
    var modal = document.getElementById("surprise-modal");
  
    // Get the button that opens the modal
    var btn = document.getElementById("special-button");
  
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close-button")[0];
  
    // When the user clicks the button, open the modal
    btn.onclick = function() {
      modal.style.display = "block";
    }
  
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    }
  
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  
    // Optionally, add a sweet message animation
    var loveMessage = document.getElementById("love-message");
    var messages = [
      "Cada día te amo más. ¡Bello!",
      "Eres mi persona favorita en el mundo. ¡Poopaye!",
      "Gracias por ser mi San Valentín. ¡Para tú!",
      "Tu sonrisa ilumina mi mundo. ¡Bee do bee do bee do!",
      "Contigo cada momento es especial. ¡Bananaaa!"];
    var messageIndex = 0;

    
    setInterval(function() {
      loveMessage.textContent = messages[messageIndex];
      messageIndex = (messageIndex + 1) % messages.length;
    }, 3000); // Change message every 3 seconds
  
    // Function to create falling hearts
    function createFallingHeart() {
      const heart = document.createElement('div');
      heart.classList.add('heart');
      heart.textContent = '❤️'; // Use a heart emoji
      heart.style.left = Math.random() * 100 + 'vw';
      heart.style.animationDuration = Math.random() * 2 + 2 + 's'; // Randomize the animation duration
      heart.style.opacity = Math.random(); // Randomize opacity
      heart.style.fontSize = Math.random() * 1.5 + 1 + 'em'; // Randomize size
  
      document.querySelector('.falling-hearts').appendChild(heart);
  
      // Remove the heart after it falls off screen
      heart.addEventListener('animationend', function() {
        heart.remove();
      });
    }
  
    // Create falling hearts every 100 milliseconds
    setInterval(createFallingHeart, 500);
  
    // Initialize Slick Carousel
    $('.slick-carousel').slick({
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
  });