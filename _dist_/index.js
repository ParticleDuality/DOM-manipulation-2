import { registerImage } from "./lazy.js"
const container = document.getElementById("images")
const button = document.getElementById("addImageBtn")

const fetchFox = async function () {
  const response = await fetch("https://randomfox.ca/floof/")
  const fox = await response.json()

  return fox
}

const addImage = async function (event) {
  const innerContainer = document.createElement("div")
  const img = document.createElement("img")

  innerContainer.className = "my-4 mx-auto bg-gray-200 shadow-lg"
  innerContainer.style.width = "320px";
  innerContainer.style.height = "320px";
  innerContainer.style.borderRadius = '1%'
  container.appendChild(innerContainer)

  const fox = await fetchFox()

  img.dataset.src = `${fox.image}`
  innerContainer.appendChild(img)

  registerImage(innerContainer)

  img.style = "min-width:320px;max-width: 100%; max-height: 100%; border-radius: 1%"
  img.style.objectFit = 'cover'
  innerContainer.style.height = 'auto'
}

button.addEventListener("click", addImage)
