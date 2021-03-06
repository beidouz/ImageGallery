const collectionID = 1120118;
const numImagesAvailable = 52;

function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

for (var i = 0; i < numImagesAvailable; i++) {
  var imageWidth = getRandomNumber(200, 400);
  var imageHeight =  getRandomNumber(200, 400);
  var randomImageIndex = Math.floor(Math.random() * numImagesAvailable);
  fetch(`https://source.unsplash.com/collection/${collectionID}/${imageWidth}x${imageHeight}/?sig=${randomImageIndex}`) 
  .then((response)=> { 
    var newImage = '<div class="image-container"><img src="'+`${response.url}`+'" alt="gallery image"/></div>'; 
    document.getElementById("gallery").innerHTML += newImage;
  })
}
