console.log('%c HI', 'color: firebrick')


// Challenge 1 

document.addEventListener("DOMContentLoaded", function(e){
  e.preventDefault()
    let imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    fetch(imgUrl)
      .then(response => response.json())
      .then(data => {
        let images = data.message;
        for (let i = 0; i < images.length; i++) {
          let imageContainer = document.getElementById("dog-image-container");
          let img = document.createElement("img");
          img.setAttribute("src", images[i]);
          imageContainer.appendChild(img);
        }
      });
  });
  
  // Challenge 2
  
  document.addEventListener("DOMContentLoaded", function(){
    let breedUrl = "https://dog.ceo/api/breeds/list/all";
    fetch(breedUrl)
      .then(response => response.json())
      .then(data => {
        let breeds = data.message;
        let breedList = document.getElementById("dog-breeds");
        for (let breed in breeds) {
          let breedItem = document.createElement("li");
          breedItem.innerText = breed;
          breedList.appendChild(breedItem);
        }
      });
  });
  
  // Challenge 3
  
  document.addEventListener("DOMContentLoaded", function(){
    let breedList = document.getElementById("dog-breeds");
    breedList.addEventListener("click", function(event) {
      event.target.style.color = "#FF0000";
    });
  });
  
  // Challenge 4
  
  document.addEventListener("DOMContentLoaded", function(){
    let breedDropdown = document.getElementById("breed-dropdown");
    breedDropdown.addEventListener("change", function() {
      let breedUrl = "https://dog.ceo/api/breeds/list/all";
      fetch(breedUrl)
        .then(response => response.json())
        .then(data => {
          let breeds = data.message;
          let breedList = document.getElementById("dog-breeds");
          breedList.innerHTML = "";
          for (let breed in breeds) {
            if (breed.startsWith(breedDropdown.value)) {
              let breedItem = document.createElement("li");
              breedItem.innerText = breed;
              breedList.appendChild(breedItem);
            }
          }
        });
    });
  });