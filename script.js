// Function to add list items
var list = document.getElementById("infi-list");
function addListItems() {
  for (var i = 0; i < 2; i++) {
    var listItem = document.createElement("li");
    listItem.textContent = "List Item " + (list.children.length + 1);
    list.appendChild(listItem);
  }
}

// Function to check if user has reached the end of list
function checkEndOfList() {
  var list = document.getElementById("infi-list");
  var lastListItem = list.lastElementChild;
  var lastListItemRect = lastListItem.getBoundingClientRect();

  if (lastListItemRect.bottom <= list.getBoundingClientRect().bottom) {
    addListItems();
  }
}

// Add event listener for scroll event on list element
var list = document.getElementById("infi-list");
list.addEventListener("scroll", checkEndOfList);

// Add initial list items
initialItems();
function initialItems(){
	for(var i=0;i<8;i++){
		var listItem = document.createElement("li");
		listItem.textContent = "List Item " + (list.children.length + 1);
		list.appendChild(listItem);
	}
}
