function showProjects() {
    let list = document.getElementById("project-list")

    if (list.style.display === "none") {
        list.style.display = "block"
    } else {
        list.style.display = none; // BUG: should be string
    }
}