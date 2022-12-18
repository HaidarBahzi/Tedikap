// Javascript Code
// Author : Haidar Bahzi

// Greetings

console.log("0110        1010            101010101010  101010101010  10      0101      0101  ");
console.log("1010        1010            01        01  01        01  01       0101    0101   ");
console.log("0110        1010            10        10  01        01  10         0101 0101    ");
console.log("1010101010101010            01        10  01        01  01            01        ");
console.log("0110        1010            10        01  01        01  10            01        ");
console.log("1010        1010            01        10  01        01  01            01        ");
console.log("0110        1010  10101010  101010101010  01        01  101010101010  01        ");

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
