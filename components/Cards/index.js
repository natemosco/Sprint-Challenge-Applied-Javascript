// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
const cardContainer = document.querySelector(".cards-container");
axios
.get(`https://lambda-times-backend.herokuapp.com/articles`)
    .then(response =>{
        console.log(response);
    })
    .catch(error =>{
        console.log(`The data was not returned:`, error);
    });
function cardMaker (data){
    const card = document.createElement("div");
    const headline = document.createElement("div");
    const authorContainer = document.createElement("div");
    const imgContainer = document.createElement("div");
    const img = document.createElement("img");
    const author = document.createElement("span");

    card.classList.add("card");
    headline.classList.add("headline");
    author.classList.add("author");
    imgContainer.classList.add("img-container");
    
    img.src = data.authorPhoto;
    headline.textContent = data.headline;
    author.textContent = data.authorName

    return card
}