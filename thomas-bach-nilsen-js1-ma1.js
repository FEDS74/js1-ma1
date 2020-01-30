//question 1
//answer question 1
var cat = {complain: "Meow!"};
console.log(cat);

//question 2
//answer question 2
const h3 = document.querySelector("h3");
h3.classList.add("heading");
console.log(h3.className);

//question 3
//answer question 3
const heading = document.querySelector("h3");
heading.style.fontSize = "2em";

//question 4
//answer question 4
h3.classList.add("subheading");

//question 5
//answer qustion 5
document.querySelectorAll("p");
const p = document.querySelectorAll("p");
for(let i=0; i < p.length; i++){
    p[i].classList.add("paragraphs");
}

//question 6
//answer question 6
document.querySelector(".results").classList.add("resultsContainer");
const newP = document.querySelector("div.resultsContainer");
newP.innerHTML = "<p>New paragraph</p>";


//question 7
//answer question 7
const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

function callArgument(catArray){
  for(let i=0; i < catArray.length; i++){
    console.log(catArray[i].name);
  }
}

callArgument(cats);


//question 8
//answer question 8
    const name = "<h5>" + catArray[i].name + "</h5>";


//question 9
//answer question 9
let newDiv = document.querySelector(".resultsContainer");
const exsistingHTML = newDiv.innerHTML;
newDiv.innerHTML = exsistingHTML + name;

//question 10
//answer question 10
const secondDiv = document.createElement("div");
document.body.appendChild(secondDiv);
secondDiv.classList.add("secondDiv");

    const secondDiv = document.querySelector("secondDiv");
    secondDiv.innerHTML = ??????
