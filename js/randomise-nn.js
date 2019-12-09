function randomise() {

// Select a random idea
var idea = data[Math.floor(Math.random() * (Object.keys(data).length))];
idea = AvsAn.query(pluralize.singular(idea)).article + " <b>" + pluralize.singular(idea);

ide = document.getElementById("idea")

ide.innerHTML = ide.innerHTML
+ "design " + idea.toLowerCase() + "</b>."
+ "<br><br style=\"line-height:-0.6em\">"

ide.scrollTop = ide.scrollHeight;

}
