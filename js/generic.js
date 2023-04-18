const toggleVisibility = (element) => {
    if (element.classList.contains("show")) {
        console.log("added")
        element.classList.remove("show");
    } else {
        console.log("removed")
        element.classList.add("show");
    }
}