class player {
  constructor() {
    this.pos = new position(this, 300, 300, 0, -16);
    this.img = new animator(this, this.pos, "boy_run", 4, 4, 0);
    this.controller = new userMovement(this, this.pos, this.img);

    this.properties = [
      this.pos,
      this.img,
      this.controller
    ];

    objects.push(this);
  }
  step() {
    //every frame send position associated with client
    client.send({
      posX: this.pos.x,
      posY: this.pos.y
    }, "playerMovement");
  }
}
