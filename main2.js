//sometimes the primary script wont work so this is backup to fufil your xi jinping needs

link = "https://external-content.duckduckgo.com/iu/?u=https://github.com/Alpha-404/xi-jinping-media-censor/blob/main/hd%20xi%20jinping.jpg?raw=true";

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

while (true) {
    console.log("media censored haha");
    for(var i=0; i<document.images.length; i++) {
        if (document.images[i].src == link) {continue;}
        document.images[i].setAttribute("style", `height:${document.images[i].height}px; width:${document.images[i].width}px; object-fit:cover; content:url(${link}); opacity:1; -moz-opacity:1; filter:alpha(opacity=100)`);
        document.images[i].src = link;
        document.images[i].style.display = "initial"; 
    }
    await sleep(500);
}
