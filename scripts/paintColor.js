import { getPaintColors } from "./database.js";

const paintColors = getPaintColors()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "interior") {
            window.alert(`User chose interior ${event.target.value}`)
        }
    }
)


export const paintColorChoices = () => {
    const allPaintColors = getPaintColors()
    let html = "<ul>"

    const paintColorHTMLArray = allPaintColors.map((paintColorObject) => {
            return `<li>${paintColorObject.color}</li>`;
        });

    html += paintColorHTMLArray.join("")

    html += "</ul>"

    return html
}