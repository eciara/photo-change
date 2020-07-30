var imagesArray = [
    'img/img1.jpg',
    'img/img2.jpg',
    'img/img3.jpg'
]

var btn = document.querySelector('.button');
var image = document.querySelector('.image');

function getRandomNum() {
  return Math.floor(Math.random() * imagesArray.length);
}

btn.addEventListener('click', function(){
    var counter =  getRandomNum();
   image.innerHTML = `<img src="${imagesArray[counter]}">`;
}, false);

