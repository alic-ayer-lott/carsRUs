import { getWheels } from "./database.js";

const wheels = getWheels()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "wheels") {
            window.alert(`User chose interior ${event.target.value}`)
        }
    }
)


export const wheelChoices = () => {
    const allWheels = getWheels()
    let html = "<ul>"

    const wheelHTMLArray = allWheels.map((wheelObject) => {
            return `<li>${wheelObject.wheel}</li>`;
        });

    html += wheelHTMLArray.join("")

    html += "</ul>"

    return html
}