const toggleVisibility = (element) => {
    if (element.classList.contains("show")) {
        element.classList.remove("show");
    } else {
        element.classList.add("show");
    }
}