function randomise() {

var catNumber = Math.floor(Math.random() * (Object.keys(categories[0]).length));
var catName = Object.keys(categories[0])[catNumber];

var subcatNumber = Math.floor(Math.random() * (Object.keys(categories[0][catName]).length));
var subcatName = categories[0][catName][subcatNumber];

document.getElementById("category").innerHTML = catName.toLowerCase()
document.getElementById("subcategory").innerHTML = subcatName.toLowerCase()


}
