import { getTechnologies } from "./database.js";

const technologies = getTechnologies()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "interior") {
            window.alert(`User chose interior ${event.target.value}`)
        }
    }
)


export const technologyChoices = () => {
    const allTechnologies = getTechnologies()
    let html = "<ul>"

    const technologyHTMLArray = allTechnologies.map((technologyObject) => {
            return `<li>${technologyObject.package}</li>`;
        });

    html += technologyHTMLArray.join("")

    html += "</ul>"

    return html
}