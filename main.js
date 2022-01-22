link = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.XNhppFZLTOVlQUSXtVgwvwHaHa%26pid%3DApi&f=1"
loop = (function censor(i) {
  setTimeout(function() {
    for(var i=0; i<document.images.length; i++) {
    	if (document.images[i].src == link) {continue}
		document.images[i].setAttribute("style", `height:${document.images[i].height}px; width:${document.images[i].width}px; object-fit:cover; content:url(${link});`);
		document.images[i].src = link;
	}              
    if (--i) censor(i);
  }, 500)
})(10); 
