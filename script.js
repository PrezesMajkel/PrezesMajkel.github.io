class Canvas {
    constructor(parent = document.body, width = 400, height = 400) {
        this.canvas = document.createElement('canvas');
        this.canvas.width = width;
        this.canvas.height = height;
        parent.appendChild(this.canvas);
        this.ctx = this.canvas.getContext('2d');
    }
  
    sync(state) {
      this.clearDisplay();
      this.drawActors(state.actors);
    }
  
    clearDisplay() {
  
      // opacity controls the trail effect set to 1 to remove
      this.ctx.fillStyle = 'rgba(255, 255, 255, .4)';
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.strokeStyle = 'black';
      this.ctx.strokeRect(0, 0, this.canvas.width, this.canvas.height);
    }
  
    drawActors(actors) {
      for (let actor of actors) {
        if (actor.type === 'circle') {
          this.drawCircle(actor);
        }
        if (actor.type === 'platform'){
          this.drawPlatform(actor);
        }
      }
    }
  
    drawCircle(actor) {
      this.ctx.beginPath();
      this.ctx.arc(actor.position.x, actor.position.y, actor.radius, 0, Math.PI * 2);
      this.ctx.closePath();
      this.ctx.fillStyle = actor.color;
      this.ctx.fill();
    }

    drawPlatform(actor){

    }
}

class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    add(vector) {
        return new Vector(this.x + vector.x, this.y + vector.y);
    }

    subtract(vector) {
        return new Vector(this.x - vector.x, this.y - vector.y);
    }

    multiply(scalar) {
        return new Vector(this.x * scalar, this.y * scalar);
    }

    dotProduct(vector) {
        return this.x * vector.x + this.y * vector.y;
    }

    get magnitude() {
        return Math.sqrt(this.x ** 2 + this.y ** 2);
    }

    get direction() {
        return Math.atan2(this.x, this.y);
    }
}

const startGame = () => {
    const canvas = new Canvas(document.getElementById("gameDiv"), 640, 480);

}