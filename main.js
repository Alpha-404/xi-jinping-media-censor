link = "https://external-content.duckduckgo.com/iu/?u=https://github.com/Alpha-404/xi-jinping-media-censor/blob/main/hd%20xi%20jinping.jpg?raw=true";

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

while (true) {
    console.log("media censored haha");
    for(var i=0; i<document.images.length; i++) {
        if (document.images[i].src == link) {continue;}
        document.images[i].style["object-fit"] = "cover";
        document.images[i].style["opacity"] = 1;
        document.images[i].style["-moz-opacity"] = 1;
        document.images[i].style["filter"] = "alpha(opacity=100))";
        document.images[i].src = link;
        document.images[i].style.display = "initial"; 
    }
    await sleep(500);
}
