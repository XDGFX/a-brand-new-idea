function randomise() {

// Category
var catNumber = Math.floor(Math.random() * (Object.keys(categories[0]).length));
var catName = Object.keys(categories[0])[catNumber];

// Subcatagory
var subcatName = categories[0][catName][Math.floor(Math.random() * (Object.keys(categories[0][catName]).length))];

// Aesthetic
var aesName = aesthetics[Math.floor(Math.random() * (Object.keys(aesthetics).length))];

// Cost
var costName = cost[Math.floor(Math.random() * (Object.keys(cost).length))];

// Consumer
var consName = consumer[Math.floor(Math.random() * (Object.keys(consumer).length))];

// Materials
var matName = material[Math.floor(Math.random() * (Object.keys(material).length))];

ide = document.getElementById("idea")

ide.innerHTML = ide.innerHTML
+ "design <b>" + subcatName.toLowerCase() + "</b> (" + catName.toLowerCase() + "), "
+ " with a <b>" + aesName.toLowerCase() + "</b> aesthetic, "
+ "<b>" + costName.toLowerCase() + "</b> cost, "
+ " where the primary user is <b>" + consName.toLowerCase() + "</b>, "
+ " and the main material used is <b>" + matName.toLowerCase() + "</b>."
+ "<br><br style=\"line-height:-0.6em\">"

}
