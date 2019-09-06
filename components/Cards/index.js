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

function cardMaker (data){
    const card = document.createElement("div");
    const headline = document.createElement("div");
    const authorContainer = document.createElement("div");
    const imgContainer = document.createElement("div");
    const img = document.createElement("img");
    const author = document.createElement("span");

    card.append(headline);
    card.append(authorContainer);
    authorContainer.append(imgContainer);
    imgContainer.append(img);
    authorContainer.append(author);
    
    card.classList.add("card");
    headline.classList.add("headline");
    authorContainer.classList.add("author");
    imgContainer.classList.add("img-container");
    
    img.src = data.authorPhoto;
    headline.textContent = data.headline;
    author.textContent = data.authorName

    return card;
}
axios
.get(`https://lambda-times-backend.herokuapp.com/articles`)
    .then(response =>{
        console.log(response);
        allMyData = response.data.articles; //obj{javascript:arr[{},{},{}]
    //bootstrap:arr[{},{},{}]}
        newArr = Object.values(allMyData);
        console.log(newArr);//[Array(4), Array(3), Array(3), Array(3), Array(2)]
        newArr.forEach(arrayIndex => {
            arrayIndex.forEach(object =>{
                cardContainer.append(cardMaker(object));
            })            
        })
        // This is an alternate way to do lines 53-59
        // newArr = [];
        //     for(x in allMyData){
        //         newArr.push(allMyData[x])
        //     }
        //     console.log(newArr);//[Array(4), Array(3), Array(3), Array(3), Array(2)]
        //     newArr.forEach(arrayIndex => {
        //         arrayIndex.forEach(object =>{
        //             cardContainer.append(cardMaker(object));
        //         })            
        //     });
    })
    .catch(error =>{
        console.log(`The data was not returned:`, error);
    });

