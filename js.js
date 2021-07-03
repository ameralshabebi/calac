const DOG_URLf = "https://dog.ceo/api/breeds/image/random";

const doggos = document.querySelector(".dog-con");
const gif = document.querySelector(".gif");
function addNewDoggo() {
  gif.classList.add("active");
  const promise = fetch(DOG_URLf);
  promise
    .then(function(response) {
      const processingPromise = response.json();
      return processingPromise;

    })
    .then(function(processedResponse) {
      const img = document.createElement("img");
      img.src = processedResponse.message;
      img.alt = "Cute doggo";
      doggos.appendChild(img);
     gif.classList.remove("active")
     console.log("hi")
    });
    }

document.querySelector("button").addEventListener("click", addNewDoggo);