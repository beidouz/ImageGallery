const collectionID = 1120118;
const numImagesAvailable = 40;

for (var i = 0; i < 25; i++) {
  var imageWidth = 200;
  var imageHeight = 300;
  var randomImageIndex = Math.floor(Math.random() * numImagesAvailable);
  fetch(`https://source.unsplash.com/collection/${collectionID}/${imageWidth}x${imageHeight}/?sig=${randomImageIndex}`) 
  .then((response)=> { 
    var newImage = '<img src="'+`${response.url}`+'" alt="gallery image"/>'; 
    document.getElementById("image-container").innerHTML += newImage;
    // console.log(newImage);
  })
}



