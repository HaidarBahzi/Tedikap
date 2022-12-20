// Javascript Code
// Author : Haidar Bahzi

// Greetings

console.log("%c 0110        1010            101010101010  101010101010  10      0101      0101  ", "color:red;font-weight: bold;");
console.log("%c 1010        1010            01        01  01        01  01       0101    0101   ", "color:red;font-weight: bold;");
console.log("%c 0110        1010            10        10  01        01  10         0101 0101    ", "color:red;font-weight: bold;");
console.log("%c 1010101010101010            01        10  01        01  01            01        ", "color:red;font-weight: bold;");
console.log("%c 0110        1010            10        01  01        01  10            01        ", "color:red;font-weight: bold;");
console.log("%c 1010        1010            01        10  01        01  01            01        ", "color:red;font-weight: bold;");
console.log("%c 0110        1010  10101010  101010101010  01        01  101010101010  01        ", "color:red;font-weight: bold;");

// Product Logic

document.querySelector(".Product-Tea").addEventListener("click", function () {
  document.querySelector(".Product-Tea").style.display = "none";
  document.querySelector(".Product-Special").style.display = "none";
  document.querySelector(".List-Product-Tea").style.display = "flex";
  document.querySelector(".btn-back-Tea").style.display = "flex";
});

document.querySelector(".Product-Special").addEventListener("click", function () {
  document.querySelector(".Product-Tea").style.display = "none";
  document.querySelector(".Product-Special").style.display = "none";
  document.querySelector(".List-Product-Special").style.display = "flex";
  document.querySelector(".btn-back-Special").style.display = "flex";
});

document.querySelector(".btn-back-Tea").addEventListener("click", function () {
  document.querySelector(".Product-Tea").style.display = "flex";
  document.querySelector(".Product-Special").style.display = "flex";
  document.querySelector(".List-Product-Tea").style.display = "none";
  document.querySelector(".btn-back-Tea").style.display = "none";
});

document.querySelector(".btn-back-Special").addEventListener("click", function () {
  document.querySelector(".Product-Tea").style.display = "flex";
  document.querySelector(".Product-Special").style.display = "flex";
  document.querySelector(".List-Product-Special").style.display = "none";
  document.querySelector(".btn-back-Special").style.display = "none";
});

// Outlet Gallery Slider

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}

function prevSlide() {
  slideIndex--;
  if (slideIndex < 1) {
    slideIndex = slides.length;
  }
  showSlides();
}

function nextSlide() {
  showSlides();
}
