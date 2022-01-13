import { loadContactPage } from "./contact_page"
import { loadHomePage } from "./home_page"
import { loadMenuPage } from "./menu_page"

function load(page) {
  const content = document.querySelector('#content')
  content.innerHTML = `
  <div id="menubar">
      <ul>
        <li><button class="menu-button" id="home">Home</button></li>
        <li><button class="menu-button" id="menu">Menu</button></li>
        <li><button class="menu-button" id="contact">Contact</button></li>
      </ul>
    </div>
    
    <style>
    #menubar {
      background-color: rgb(36, 36, 36);
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    ul {
      display: flex;
      justify-content: center;
      margin: 0;
      padding: 0;
    }

    li {
      list-style: none;
    }

    .menu-button {
      color: rgb(156, 156, 156);
      font-size: 32px;
      font-weight: bold;
      border: none;
      background-color: transparent;
      cursor: pointer;
      padding: 16px;
    }

    .menu-button-selected {
      background-color: rgb(90, 90, 90);
    }

    button:hover {
      background-color: rgb(65, 65, 65);
    }
  </style>`

  document.querySelectorAll('.menu-button').forEach(button => {
    button.addEventListener('click', e => {
      load(button.getAttribute('id'))
    })
  })

  document.querySelector(`#${page}`).classList.add('menu-button-selected')

  if (page === 'home') {
    loadHomePage()
  } else if (page == 'menu') {
    loadMenuPage()
  } else if (page == 'contact') {
    loadContactPage()
  }
}

load('home')