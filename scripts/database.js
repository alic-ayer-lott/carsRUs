const database = {
    paintColors: [
        { id: 1, color: "Silver", price: 150 },
        { id: 2, color: "Midnight Blue", price: 200 },
        { id: 3, color: "Firebrick Red", price: 250 },
        { id: 4, color: "Spring Green", price: 300 }
    ],
    interiors: [
        { id: 1, fabric: "Beige Fabric", price: 350 },
        { id: 2, fabric: "Charcoal Fabric", price: 375 },
        { id: 3, fabric: "White Leather", price: 380 },
        { id: 4, fabric: "Black Leather", price: 396 }
    ],
    technologies: [
        { id: 1, package: "Basic Package", price: 1000 },
        { id: 2, package: "Navigation Package", price: 1200 },
        { id: 3, package: "Visibility Package", price: 1500 },
        { id: 4, package: "Ultra Package", price: 2000 }
    ],
    wheels: [
        { id: 1, wheel: "17- inch Pair Radial", price: 500 },
        { id: 2, wheel: "17-inch Pair Radial Black", price: 550 },
        { id: 3, wheel: "18-inch Pair Spoke Silver", price: 650 },
        { id: 4, wheel: "18-inch Pair Spoke Black", price: 800 }
    ]
}

export const getPaintColors = () => {
    return database.paintColors.map(paint => ({...paint}))
}

export const getInteriors = () => {
    return database.interiors.map(interior => ({...interior}))
}

export const getTechnologies = () => {
    return database.technologies.map(technology => ({...technology}))
}

export const getWheels = () => {
    return database.wheels.map(wheel => ({...wheel}))
}