import { getPaintColors, setPaintColor } from "./database.js";

const paintColors = getPaintColors()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "paintColor") {
            setPaintColor(parseInt(event.target.value))
        }
    }
)


export const paintColorChoices = () => {
    const allPaintColors = getPaintColors()
    let html = "<ul>"

    const paintColorHTMLArray = allPaintColors.map((paintColorObject) => {
            return `<li>
            <input type="radio" name="paintColor" value="${paintColorObject.id}"/>${paintColorObject.color}
            </li>`;
        });

    html += paintColorHTMLArray.join("")

    html += "</ul>"

    return html
}