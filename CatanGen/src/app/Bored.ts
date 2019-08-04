
// Writing this in a separate file keeps it more MoDuLaR
class Bored {
    constructor() {
    }
    state = {
        numArray: [2, 3, 4, 4, 5, 5, 6, 6, 8, 8, 9, 9, 10, 10, 11, 11, 12],
        resourceArray: ["ore", "ore", "ore", "brick", "brick", "brick", "sheep"
            , "sheep", "sheep", "sheep", "wood", "wood", "wood", "wood",
            "hay", "hay", "hay", "hay",]
    }

    gen = () => {
        let randomNumbers = this.state.numArray
        let randomResources = this.state.resourceArray
        let tiles = []

        //
        for (let x in randomNumbers) {
            let tile = Object()
            tile.chit = randomNumbers[x]
            tile.resource = randomResources[x]
            tiles.push(tile)
        }

        let dessert = Object()
        dessert.resource = "dessert"
        dessert.chit = null
        tiles.push(dessert)

        console.log(tiles)
        return tiles
    }
}

export default Bored
