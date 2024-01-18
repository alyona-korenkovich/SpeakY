const menuButtons = document.querySelectorAll('.dropdown_head button');

for (const menuButton of menuButtons) {
  menuButton.addEventListener('click', (event) => {
    event.stopPropagation();

    const submenu = menuButton.parentElement.nextElementSibling;
    if (menuButton.classList.contains('dropdown_closed')) {
      menuButton.classList.remove('dropdown_closed');
      submenu.classList.remove('hidden');
    } else {
      menuButton.classList.add('dropdown_closed');
      submenu.classList.add('hidden');
    }
  });
}

/* ------------------------------------------------------------------------------------------- */

const sections = document.querySelectorAll("section[id]");
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  let scrollY = window.scrollY;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;

    const sectionTop = (current.getBoundingClientRect().top + window.scrollY) - 50;
    const sectionId = current.getAttribute("id");

    console.log(window.scrollY + 1, document.body.scrollHeight - window.innerHeight);

    if (window.scrollY + 1 > document.body.scrollHeight - window.innerHeight) {
      document.querySelector("nav a[href*=checkbox]").parentElement.classList.add("selected_menu_option");
      document.querySelector("nav a[href*=hashtag]").parentElement.classList.remove("selected_menu_option");
    } else if (
      scrollY > sectionTop &&
      scrollY <= sectionTop + sectionHeight
    ) {
      document.querySelector("nav a[href*=" + sectionId + "]").parentElement.classList.add("selected_menu_option");
    } else {
      document.querySelector("nav a[href*=" + sectionId + "]").parentElement.classList.remove("selected_menu_option");
    }
  });
}
