import { getOrders, getPaintColors, getTechnologies, getWheels, getInteriors } from "./database.js"
const paintColors = getPaintColors();
const interiors = getInteriors();
const technologies = getTechnologies();
const wheels = getWheels();

const buildOrderListItem = (order) => {
    const foundPaintColor = paintColors.find((paintColor) => {
        return paintColor.id === order.paintColorId
        }
    );
    const foundInterior = interiors.find((interior) => {
        return interior.id === order.interiorId
        }
    );
    const foundTechnology = technologies.find((technology) => {
        return technology.id === order.technologyId
        }
    );
    const foundWheel = wheels.find((wheel) => {
        return wheel.id === order.wheelId
        }
    )
    
    const totalCost = foundPaintColor.price + foundInterior.price + foundTechnology.price + foundWheel.price
    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    }) 
    return `<li> Order #${order.id} was placed on ${order.timestamp} and costs ${costString}.`
}

export const Orders = () => {
    const orders = getOrders()

    let html ="<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}