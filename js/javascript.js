const displayHamburgerMenu = (event) => {
    const hamBurgerItems = document.querySelector(".hamBurgerItems");
    toggleVisibility(hamBurgerItems);
    console.log(event)
    //const outsideClick = !hamBurgerItems.contains(event.target);
}

const hamburgerDropDown = document.querySelector("#hamburger");

hamburgerDropDown.addEventListener("click", displayHamburgerMenu);