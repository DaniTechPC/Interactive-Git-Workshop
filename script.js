function showProjects() {
    let list = document.getElementById("project-list")

    if (list.style.display === "none") {
        list.style.display = "block"
    } else {
        list.style.display = "My Stuff!!! Woopeeee..."; // BUG: should be string
    }
}