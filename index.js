for (var i = 0; i < 25; i++) {
  var randomImageIndex = Math.floor(Math.random() * 40);
  fetch(`https://source.unsplash.com/collection/1120118/?sig=${randomImageIndex}`) 
  .then((response)=> { 
    var newImage = '<img src="'+`${response.url}`+'" alt="gallery image"/>'; 
    document.getElementById("image-container").innerHTML += newImage;
    // console.log(newImage);
  })
}



