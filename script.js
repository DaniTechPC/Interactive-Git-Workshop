function showProjects() {
    let list = document.getElementById("project-list")

    if (list.style.display === "none") {
        list.style.display = "block"
    } else {
        list.style.display = "none";
    }
}

// Credit to https://stackoverflow.com/a/8000238 and https://stackoverflow.com/a/8175834
var A = 0;
function doABarrelRoll() {
    c = document.createElement("style");
    c.innerHTML = `@-moz-keyframes roll` + A + ` {
    from { -moz-transform: rotate(` + A + `deg) }
    to   { -moz-transform: rotate(` + (A + 360) +`deg) }
}
body {
    -moz-animation-name: roll` + A + `;
    -moz-animation-duration: 4s;
    -moz-animation-iteration-count: 1;
   }`;
   A += 360;
    document.head.appendChild(c);
}