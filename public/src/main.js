
client.init("localhost:3000");

function setup() {
  Screen.init();
  new rawImage("boy_run");
  new imageSet("tilesets", "Outside", 8, 501);
  new rawMap("maps", "pallet_town");

  new player();
}
function step() {
  drawMap("pallet_town");
}
