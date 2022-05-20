const observer = new IntersectionObserver((entries) => {
  entries
    .filter((entry) => entry.isIntersecting)
    .forEach((entry) => {
      console.log(entry)
      let container = entry.target
      let image = container.firstChild

      image.src = image.dataset.src
      observer.unobserve(container)
    })
})

export const registerImage = (img) => {
  observer.observe(img)
}
