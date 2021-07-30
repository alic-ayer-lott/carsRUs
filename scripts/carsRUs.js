import { interiorChoices } from "./interior.js"
import { paintColorChoices } from "./paintColor.js"
import { technologyChoices } from "./technology.js"
import { wheelChoices } from "./wheel.js"

export const carsRUs = () => {
    return `
        <h1>Cars R Us</h1>

        <article class="choices">
            <section class="choices__paintColor options">
                <h2>Paint Color</h2>
               ${paintColorChoices()}
            </section>
            <section class="choices__interior options">
                <h2>Interior</h2>
                ${interiorChoices()}
            </section>
            <section class="choices__technology options">
                <h2>Technology</h2>
                ${technologyChoices()}
            </section>
            <section class="choices__wheel options">
            <h2>Wheels</h2>
                ${wheelChoices()}
        </section>
        </article>

        <article>
            <button id="orderButton">Create Custom Order</button>
        </article>

        <article class="customOrders">
            <h2>Custom Car Orders</h2>
          
        </article>
    `
}
