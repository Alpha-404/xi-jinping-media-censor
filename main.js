async function xiJinpingMediaCensor(backup) {

    link = "https://external-content.duckduckgo.com/iu/?u=https://github.com/Alpha-404/xi-jinping-media-censor/blob/main/hd%20xi%20jinping.jpg?raw=true";

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    while (true) {
        console.log("media censored haha");
        for(var i=0; i<document.images.length; i++) {
            if (document.images[i].src == link) {continue;}
            if (backup !== true) {
                document.images[i].style["object-fit"] = "cover";
                document.images[i].style["opacity"] = 1;
                document.images[i].style["-moz-opacity"] = 1;
                document.images[i].style["filter"] = "alpha(opacity=100))";
            } else {
                document.images[i].setAttribute("style", `height:${document.images[i].height}px; width:${document.images[i].width}px; object-fit:cover; content:url(${link}); opacity:1; -moz-opacity:1; filter:alpha(opacity=100)`);
            }
            document.images[i].src = link;
            document.images[i].style.display = "initial"; 
        }
        await sleep(250);
    }
}
