var ilike = [ "Eat","Think","Code", "Sleep"];
var introvar = -1;
let isDark = true;
function nice(){
	var intro = document.getElementById('intro');
	introvar++;
	if(introvar >= ilike.length){
		introvar = 0;
	}
	intro.innerHTML = ilike[introvar];
}
setInterval(nice,200);


function changemode(){
	const navbar = document.getElementById("nav-bar");
	const hero = document.getElementById("hero");
	if(isDark){
		//make light
		navbar.style.color = hero.style.color  = "black";
		navbar.style.backgroundColor   = hero.style.backgroundColor  = "white";
		isDark = false;
	}
	else{
		//make dark
		navbar.style.color = hero.style.color  = "white";
		navbar.style.backgroundColor = hero.style.backgroundColor = " #142030";
		isDark = true;
	}
}