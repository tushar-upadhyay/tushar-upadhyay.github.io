for (let art of arts) {
  let targetDiv = document.getElementById("arts");
  let cardDiv = document.createElement("div");
  cardDiv.className = "card";
  cardDiv.style.width = "18rem";
  cardDiv.style.margin = "10px";
  if (art.image!=null) {
    const image = document.createElement("img",{id:'tushar'});
    image.src = art.image;
    image.style = "max-height: 202px;";
    image.className = "card-img-top";
    cardDiv.appendChild(image);
  }
  if (art.iframe!=null) {
    let iframe = document.createElement("iframe");
    iframe.src = art.iframe;
    iframe.style = "max-height: 202px;";
    cardDiv.appendChild(iframe);
  }
  let cardBodyDiv = document.createElement("div");
  cardBodyDiv.className = "card-body";
  let title = document.createElement("h5");
  title.className = "card-title";
  let titleText = document.createTextNode(art.name);
  title.appendChild(titleText);
  let discription = document.createElement("p");
  discription.className = "card-text";
  let discriptionText = document.createTextNode(art.discription);
  discription.appendChild(discriptionText);
  let bottomDiv = document.createElement("div");
  bottomDiv.style =
    "display: flex;justify-content: space-evenly;align-items: center;";
  if (art.source != null) {
    let link1 = document.createElement("a");
    link1.href = art.source;
    let button1 = document.createElement("button");
    button1.className = "btn btn-primary";
    let btnText = document.createTextNode("Source Code");
    button1.appendChild(btnText);
    link1.appendChild(button1);
    bottomDiv.appendChild(link1);
  }
  cardBodyDiv.appendChild(title);
  cardBodyDiv.appendChild(discription);
  cardBodyDiv.appendChild(bottomDiv);
  
  cardDiv.appendChild(cardBodyDiv);
  targetDiv.appendChild(cardDiv);
}
