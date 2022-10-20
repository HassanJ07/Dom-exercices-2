//NAVIGATING THE DOM TREE :

//Select the last child of the <ol> tag and put it at the beginning of the list

const list = document.querySelector('ol');
const a = list.children[0];
const b = list.children[4];
list.insertBefore(b,a);

//Move the <h2> of the third section in the second one and vice-versa


const sections = document.querySelectorAll("section");
htwo = sections[1].firstElementChild;
hthree = sections[2].firstElementChild.firstElementChild;
sections[1].insertBefore(hthree, htwo);
console.log(hthree);
sthreediv = sections[2].firstElementChild;
sthreediv.appendChild(htwo);
sthreedivchild = sthreediv.firstElementChild;
sthreediv.insertBefore(htwo, sthreedivchild);

//Delete the last section from the DOM, we don't need it anyways

const section = document.querySelectorAll("section");
dlt = section[2];
dlt.remove();