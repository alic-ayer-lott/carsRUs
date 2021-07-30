import { getInteriors } from "./database.js";

const interiors = getInteriors()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "interior") {
            window.alert(`User chose interior ${event.target.value}`)
        }
    }
)


export const interiorChoices = () => {
    const allInteriors = getInteriors()
    let html = "<ul>"

    const interiorHTMLArray = allInteriors.map((interiorObject) => {
            return `<li>
            <input type="radio" name="interior" value="${interiorObject.id}"/>${interiorObject.fabric}
            </li>`;
        });

    html += interiorHTMLArray.join("")

    html += "</ul>"

    return html
}