function loadContactPage() {
  const content = document.querySelector('#content')

  const background = document.createElement('img')
  background.setAttribute('id', 'background')
  background.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Restaurant_N%C3%A4sinneula.jpg/2880px-Restaurant_N%C3%A4sinneula.jpg')
  content.appendChild(background)


  const titleBox = document.createElement('div')
  titleBox.setAttribute('id', 'title-box')
  const title = document.createElement('h1')
  title.textContent = 'Contact'
  titleBox.appendChild(title)
  const contactInfo = document.createElement('div')
  contactInfo.classList.add('flexbox')
  contactInfo.innerHTML = `
  <p>Address: 1st street N° 57</p>
  <p>Phone: +43 0143965473</p>
  <p>E-mail: office@abilnf.food</p>
  `
  titleBox.appendChild(contactInfo)
  content.appendChild(titleBox)

  const style = document.createElement('style')
  style.innerHTML = `
  body {
    margin: 0;
    padding: 0;
    font-family: Roboto, sans-serif;
  }

  .flexbox {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  #content {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
  }

  #background {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    z-index: -1;
  }

  #title-box {
    margin: 64px 0;
    background-color: rgba(255, 255, 255, 0.5);
    padding: 16px 0;
  }

  #hour-box {
    margin: 64px 0;
    background-color: rgba(255, 255, 255, 0.5);
    padding: 16px 32px;
    align-self: center;
  }

  h1 {
    font-size: 64px;
    font-weight: 900;
    text-align: center;
  }`
  content.appendChild(style)
}

export { loadContactPage }