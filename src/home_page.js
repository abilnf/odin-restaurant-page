function loadHomePage() {
  const content = document.querySelector('#content')

  const background = document.createElement('img')
  background.setAttribute('id', 'background')
  background.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Restaurant_N%C3%A4sinneula.jpg/2880px-Restaurant_N%C3%A4sinneula.jpg')
  content.appendChild(background)

  const titleBox = document.createElement('div')
  titleBox.setAttribute('id', 'title-box')
  const title = document.createElement('h1')
  title.textContent = 'abilnf\'s fine dining'
  titleBox.appendChild(title)
  content.appendChild(titleBox)

  const hourBox = document.createElement('div')
  hourBox.setAttribute('id', 'hour-box')

  let day = document.createElement('p')
  day.innerHTML = '<strong>Opening Hours</strong>'
  hourBox.appendChild(day)
  day = document.createElement('p')
  day.innerHTML = 'Monday: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Closed'
  hourBox.appendChild(day)
  day = document.createElement('p')
  day.innerHTML = 'Tuesday: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;12pm - 1am'
  hourBox.appendChild(day)
  day = document.createElement('p')
  day.innerHTML = 'Wednesday: 12pm - 1am'
  hourBox.appendChild(day)
  day = document.createElement('p')
  day.innerHTML = 'Thursday: &nbsp;&nbsp;&nbsp;&nbsp;12pm - 1am'
  hourBox.appendChild(day)
  day = document.createElement('p')
  day.innerHTML = 'Friday: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;12pm - 1am'
  hourBox.appendChild(day)
  day = document.createElement('p')
  day.innerHTML = 'Saturday: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4pm - 1am'
  hourBox.appendChild(day)
  day = document.createElement('p')
  day.innerHTML = 'Sunday: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4pm - 1am'
  hourBox.appendChild(day)

  content.appendChild(hourBox)

  const style = document.createElement('style')
  style.innerHTML = `
  body {
    margin: 0;
    padding: 0;
    font-family: Roboto, sans-serif;
  }

  #content {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: space-between;
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

export { loadHomePage }