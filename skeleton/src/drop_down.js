
const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};

function dogLinkCreator() {
  const ul = document.getElementById("drop-down-dog-list");
  let completedLinks = [];

  Object.keys(dogs).forEach (dogName => {
    let a = document.createElement('a');
    let listEl = document.createElement("li");
    listEl.className = "dog-link";
    a.innerHTML = dogName;
    a.href = dogs[dogName];
    listEl.appendChild(a);
    completedLinks.push(listEl);
    // ul.appendChild(listEl);
  });

  return completedLinks;
}

function attachDogLinks() {
  let dogLinks = dogLinkCreator(); 
  const ul = document.getElementsByClassName("drop-down-dog-list");
  // debugger;
  dogLinks.forEach(dogLink => {   //<li class=dog-link><a href=URL>...</a></li> 
    console.log(ul);
    ul[0].appendChild(dogLink);
  });
}

document.getElementById("here-dogs").addEventListener("mouseenter", () => {
  let ul = document.getElementsByClassName("drop-down-dog-list");
  ul[0].style.visibility = "visible";
});

document.getElementById("dog-drop-down-nav").addEventListener("mouseleave", () => {
  let ul = document.getElementsByClassName("drop-down-dog-list");
  ul[0].style.visibility = "hidden";
});

attachDogLinks();