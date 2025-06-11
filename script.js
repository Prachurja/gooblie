const colorThief = new ColorThief()

const imagesCount = 11
var currentImageNumber = localStorage.getItem("currentImageNumber") ?? "1"

const button = document.querySelector("button")
const image = document.querySelector("img")

image.src = "images/img" + currentImageNumber + ".jpg"

function brightNess(r, g, b) {
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

image.addEventListener("load", () => {
    if (image.complete) {
        var palette = colorThief.getPalette(image, 3)
        palette = palette.sort((a, b) => brightNess(a) - brightNess(b))

        console.log(palette)

        const darkColor = `rgb(${palette[1].join(",")})`
        document.body.style.setProperty("--dark-color", darkColor)
        localStorage

        const mediumColor = `rgb(${palette[0].join(",")})`
        document.body.style.setProperty("--medium-color", mediumColor)

        const lightColor = `rgb(${palette[2].join(",")})`
        document.body.style.setProperty("--light-color", lightColor)

        console.log(mediumColor)
    }
})

button.addEventListener("click", () => {
    var temp = parseInt(currentImageNumber, 10)

    if (temp + 1 > imagesCount) {
        temp = 1
    }

    else {
        temp += 1
    }

    currentImageNumber = temp.toString()

    image.src = "images/img" + currentImageNumber + ".jpg"

    localStorage.setItem("currentImageNumber", currentImageNumber)
    console.log(localStorage.getItem("currentImageNumber"))
})

