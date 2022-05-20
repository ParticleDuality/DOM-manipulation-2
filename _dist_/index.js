import { registerImage } from "./lazy.js"
// <div class="p-4">
//   <img class="mx-auto" width="320" src="https://randomfox.ca/?i=75">
// </div>

// const createImageNode = () => {
//   const image = document.createElement('img')
//   image.className = 'mx-auto'
//   image.width = '320'
//   image.src = 'https://randomfox.ca/floof'

//   return image
// }

// const newImage = createImageNode()

// const mountNode = document.getElementById('images')
// mountNode.appendChild(newImage)

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
  const fox = await fetchFox()

  innerContainer.className = "my-4 mx-auto bg-gray-200"
  innerContainer.style.minHeight = "100px";
  innerContainer.style.display = "inline-block";
  innerContainer.style.borderRadius = '1%'
  innerContainer.appendChild(img)

  // img.class = "mx-auto" 
  img.style = "width: 320; border-radius: 1%"
  img.dataset.src = `${fox.image}`

  registerImage(innerContainer)

  container.appendChild(innerContainer)

}

button.addEventListener("click", addImage)
