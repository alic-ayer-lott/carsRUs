import { getTechnologies, setTechnology } from "./database.js";

const technologies = getTechnologies()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "technology") {
            setTechnology(parseInt(event.target.value))
        }
    }
)


export const technologyChoices = () => {
    const allTechnologies = getTechnologies()
    let html = "<ul>"

    const technologyHTMLArray = allTechnologies.map((technologyObject) => {
            return `<li>
            <input type="radio" name="technology" value="${technologyObject.id}"/>${technologyObject.package}
            </li>`;
        });

    html += technologyHTMLArray.join("")

    html += "</ul>"

    return html
}