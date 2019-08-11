counter = 0;

function edit() {
	document.getElementById("blogBody").contentEditable = true;
	document.getElementById("blogTitleNew").contentEditable = true;
	document.getElementById("blogTitleNew").style.border = "3px solid pink";
	document.getElementById("editbtn").style.display = "none";
	document.getElementById("savebtn").style.display = "block";
	document.getElementById("blogBody").focus();
}

function save() {
	document.getElementById("blogBody").contentEditable = false;
	document.getElementById("blogTitleNew").contentEditable = false;
	document.getElementById("blogTitleNew").style.border = "none";
	document.getElementById("editbtn").style.display = "block";
	document.getElementById("savebtn").style.display = "none";
}

function like() {
	if(counter == 0) {
		document.getElementById("likebtn").style.display = "none";
		document.getElementById("likedbtn").style.display = "block";
		document.getElementById("likeline").textContent = "1 person likes this!";
		counter++;
	}
	else {
		counter++;
		document.getElementById("likeline").textContent = counter + " people have liked this!";		
	}
}

function comment() {
	var comment = document.getElementsByTagName("textarea")[0].value;
	var element = document.createElement("div");
	element.innerHTML = comment;
	// document.getElementById("allcomments").appendChild(element);
	document.getElementById("allcomments").insertBefore(element, document.getElementById("allcomments").firstChild);
	document.getElementsByTagName("textarea")[0].value = "";
}