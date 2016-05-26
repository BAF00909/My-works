var links = document.querySelectorAll('.sliderNav-item');
var wrapper = document.querySelector('.sliderWrapper');
var activLink = 0;
for(var i = 0; i < links.lenght; i++){
	var link = [i];
	link.addEventListener('click', setClickedItem, false);
	link.itemID = i;
}
links[activeLink].classList.add("active");
function setClickedItem(e){
	removeActiveLinks();

	var clickedLink = e.target;
    activeLink = clickedLink.itemID;

    changePosition(clickedLink);
}

function removeActiveLinks() {
    for (var i = 0; i < links.length; i++) {
        links[i].classList.remove("active");
    }
}

function changePosition(link) {
    link.classList.add("active");

    var position = link.getAttribute("data-pos");
    wrapper.style.left = position;
}