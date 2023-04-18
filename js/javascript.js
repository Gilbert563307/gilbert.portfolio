const displayHamburgerMenu = () => {
    const hamBurgerItems = document.querySelector(".hamBurgerItems");
    toggleVisibility(hamBurgerItems);
}

const hamburgerDropDown = document.querySelector("#hamburger");

hamburgerDropDown.addEventListener("click", displayHamburgerMenu);