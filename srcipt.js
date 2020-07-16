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
    // console.log('test');
    var counter =  getRandomNum();
    /*counter ++;
    if (counter > imagesArray.length -1){
        counter = 0;
    }*/
   image.innerHTML = `<img src="${imagesArray[counter]}">`;
    console.log(counter);
    console.log(imagesArray[counter]);
}, false);

