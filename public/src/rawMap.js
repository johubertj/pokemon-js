let rawMaps = {};

class rawMap {
    constructor(file, name) {
        this.file = file;
        this.name = name;
        this.loaded = false;
        this.raw = loadJSON("res/" + file + "/" + name + ".json", () => {
            this.loaded = true;
        });

        rawMaps[name] = this;
    }
}

function drawMap(name) {
    let map = rawMaps[name];
    if (!map.loaded) return;
    for (let x = 0; x < width; x += 32) {
        for (let y = 0; y < height; y += 32) {
            let p = new position(null, x, y);
            imageSet.draw(map.raw["tileset"], p, map.raw["backgroundTile"].x,
                map.raw["backgroundTile"].y);
        }
    }
    drawMapLayer(map, "layer1");
    drawMapLayer(map, "layer2");
    drawMapLayer(map, "layer3");
}

function drawMapLayer(map, layer) {
    for (let x = 0; x < map.raw[layer].length; ++x) {
        let tile = map.raw[layer][x].tile;
        let p = new position(null, map.raw[layer][x].x * 32, map.raw[layer][x].y * 32);

        imageSet.draw(map.raw["tileset"], p, tile.x, tile.y);
    }
}