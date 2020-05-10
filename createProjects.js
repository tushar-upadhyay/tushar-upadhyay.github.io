for (let project of projects) {
  let targetDiv = document.getElementById("projects");
  let cardDiv = document.createElement("div");
  cardDiv.className = "card";
  cardDiv.style.width = "18rem";
  cardDiv.style.margin = "10px";
  let img = document.createElement("img");
  img.src = project.image;
  img.style = "max-height: 202px;";
  img.className = "card-img-top";
  cardDiv.appendChild(img);
  let cardBodyDiv = document.createElement("div");
  cardBodyDiv.className = "card-body";
  let title = document.createElement("h5");
  title.className = "card-title";
  let titleText = document.createTextNode(project.name);
  title.appendChild(titleText);
  let discription = document.createElement("p");
  discription.className = "card-text";
  let discriptionText = document.createTextNode(project.discription);
  discription.appendChild(discriptionText);
  let bottomDiv = document.createElement("div");
  bottomDiv.style =
    "display: flex;justify-content: space-evenly;align-items: center;";
  if (project.source!=null) {
    let link1 = document.createElement("a");
    link1.href = project.source;
    let button1 = document.createElement("button");
    button1.className = "btn btn-primary";
    let btnText = document.createTextNode("Source Code");
    button1.appendChild(btnText);
    link1.appendChild(button1);
    bottomDiv.appendChild(link1);
  }
  if (project.demo != null) {
    let link2 = document.createElement("a");
    link2.href = project.demo;
    let button2 = document.createElement("button");
    button2.className = "btn btn-primary";
    let btnText = document.createTextNode("View");
    button2.appendChild(btnText);
    link2.appendChild(button2);
    bottomDiv.appendChild(link2);
  }
  cardBodyDiv.appendChild(title);
  cardBodyDiv.appendChild(discription);
  cardBodyDiv.appendChild(bottomDiv);
  cardDiv.appendChild(img);
  cardDiv.appendChild(cardBodyDiv);
  targetDiv.appendChild(cardDiv);
}
