import { getWheels, setWheel } from "./database.js";

const wheels = getWheels()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "wheel") {
            setWheel(parseInt(event.target.value))
        }
    }
)


export const wheelChoices = () => {
    const allWheels = getWheels()
    let html = "<ul>"

    const wheelHTMLArray = allWheels.map((wheelObject) => {
            return `<li>
            <input type="radio" name="wheel" value="${wheelObject.id}"/>${wheelObject.wheel}
            </li>`;
        });

    html += wheelHTMLArray.join("")

    html += "</ul>"

    return html
}