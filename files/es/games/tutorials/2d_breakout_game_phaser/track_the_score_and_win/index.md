---
title: Llevar la puntuación y ganar
slug: Games/Tutorials/2D_breakout_game_Phaser/Track_the_score_and_win
l10n:
  sourceCommit: 69937a446786abf5a58d4214b4192597d0b3cdc6
---

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser/Build_the_brick_field", "Games/Tutorials/2D_breakout_game_Phaser/Extra_lives")}}

Este es el **8.º paso** de los 12 del [tutorial para crear un juego Breakout con Phaser](/es/docs/Games/Tutorials/2D_breakout_game_Phaser). En este artículo añadiremos un sistema de puntuación a nuestro juego. Tener una puntuación puede hacer el juego más interesante: puedes intentar superar tu propia puntuación máxima o la de tus amigos. También añadimos una condición de victoria, que se cumple si consigues destruir todos los ladrillos.

Usaremos una propiedad aparte para guardar la puntuación y el método `text()` de Phaser para mostrarla en la pantalla.

## Propiedades nuevas

Añade dos propiedades nuevas justo después de las que definiste antes:

```js
class ExampleScene extends Phaser.Scene {
  // ... definiciones de propiedades anteriores ...
  scoreText;
  score = 0;
  // ... resto de la clase ...
}
```

## Añadir el texto de la puntuación a la pantalla del juego

Ahora añade esta línea al final del método `create()`:

```js
this.scoreText = this.add.text(5, 5, "Puntos: 0", {
  font: "18px Arial",
  color: "#0095dd",
});
```

El método `text()` puede recibir cuatro parámetros:

- Las coordenadas x e y en las que se dibuja el texto.
- El texto que se va a renderizar.
- El estilo de fuente con el que se renderiza el texto.

El último parámetro se parece mucho a los estilos de CSS. En nuestro caso, el texto de la puntuación será azul, de 18 píxeles y con la fuente Arial.

## Actualizar la puntuación al destruir ladrillos

Aumentaremos el número de puntos cada vez que la pelota golpee un ladrillo y actualizaremos `scoreText` para mostrar la puntuación actual. Esto se hace con el método `setText()`: añade las dos líneas nuevas que ves a continuación al método `hitBrick()`:

```js
class ExampleScene extends Phaser.Scene {
  // ...
  hitBrick(ball, brick) {
    brick.destroy();
    this.score += 10;
    this.scoreText.setText(`Puntos: ${this.score}`);
  }
}
```

Eso es todo por ahora: recarga tu `index.html` y comprueba que la puntuación se actualiza cada vez que golpeas un ladrillo.

## ¿Cómo se gana?

Añade el siguiente código nuevo a tu método `update()`:

```js
class ExampleScene extends Phaser.Scene {
  // ...
  update() {
    // ...
    if (this.bricks.countActive() === 0) {
      alert("¡Ganaste el juego, felicidades!");
      location.reload();
    }
  }
  // ...
}
```

Contamos el número de ladrillos que siguen activos con el método `countActive()` de `this.bricks`. Si ya no quedan ladrillos activos, mostramos el mensaje de victoria y reiniciamos el juego cuando se cierra la alerta.

## Compara tu código

Esto es lo que deberías tener hasta ahora, funcionando en vivo. Para ver su código fuente, haz clic en el botón "Play".

```html hidden
<script src="https://cdnjs.cloudflare.com/ajax/libs/phaser/3.90.0/phaser.js"></script>
```

```css hidden
* {
  padding: 0;
  margin: 0;
}
```

```js hidden
class ExampleScene extends Phaser.Scene {
  ball;
  paddle;
  bricks;
  scoreText;
  score = 0;

  preload() {
    this.load.setBaseURL(
      "https://mdn.github.io/shared-assets/images/examples/2D_breakout_game_Phaser",
    );

    this.load.image("ball", "ball.png");
    this.load.image("paddle", "paddle.png");
    this.load.image("brick", "brick.png");
  }
  create() {
    this.physics.world.checkCollision.down = false;

    this.ball = this.add.sprite(
      this.scale.width * 0.5,
      this.scale.height - 25,
      "ball",
    );
    this.physics.add.existing(this.ball);
    this.ball.body.setVelocity(150, -150);
    this.ball.body.setCollideWorldBounds(true, 1, 1);
    this.ball.body.setBounce(1);

    this.paddle = this.add.sprite(
      this.scale.width * 0.5,
      this.scale.height - 5,
      "paddle",
    );
    this.paddle.setOrigin(0.5, 1);
    this.physics.add.existing(this.paddle);
    this.paddle.body.setImmovable(true);

    this.initBricks();

    this.scoreText = this.add.text(5, 5, "Puntos: 0", {
      font: "18px Arial",
      color: "#0095dd",
    });
  }
  update() {
    this.physics.collide(this.ball, this.paddle);
    this.physics.collide(this.ball, this.bricks, (ball, brick) =>
      this.hitBrick(ball, brick),
    );

    this.paddle.x = this.input.x || this.scale.width * 0.5;
    const ballIsOutOfBounds = !Phaser.Geom.Rectangle.Overlaps(
      this.physics.world.bounds,
      this.ball.getBounds(),
    );
    if (ballIsOutOfBounds) {
      // Lógica de fin del juego
      location.reload();
    }
    if (this.bricks.countActive() === 0) {
      alert("¡Ganaste el juego, felicidades!");
      location.reload();
    }
  }

  initBricks() {
    const bricksLayout = {
      width: 50,
      height: 20,
      count: {
        row: 3,
        col: 7,
      },
      offset: {
        top: 50,
        left: 60,
      },
      padding: 10,
    };

    this.bricks = this.add.group();
    for (let c = 0; c < bricksLayout.count.col; c++) {
      for (let r = 0; r < bricksLayout.count.row; r++) {
        const brickX =
          c * (bricksLayout.width + bricksLayout.padding) +
          bricksLayout.offset.left;
        const brickY =
          r * (bricksLayout.height + bricksLayout.padding) +
          bricksLayout.offset.top;

        const newBrick = this.add.sprite(brickX, brickY, "brick");
        this.physics.add.existing(newBrick);
        newBrick.body.setImmovable(true);
        this.bricks.add(newBrick);
      }
    }
  }

  hitBrick(ball, brick) {
    brick.destroy();
    this.score += 10;
    this.scoreText.setText(`Puntos: ${this.score}`);
  }
}

const config = {
  type: Phaser.CANVAS,
  width: 480,
  height: 320,
  scene: ExampleScene,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  backgroundColor: "#eeeeee",
  physics: {
    default: "arcade",
  },
};

const game = new Phaser.Game(config);
```

{{EmbedLiveSample("compara tu código", "", 480, , , , , "allow-modals")}}

## Siguientes pasos

Ya están implementadas tanto la derrota como la victoria, así que la mecánica principal de nuestro juego está terminada. Ahora añadamos algo extra: daremos al jugador tres [vidas](/es/docs/Games/Tutorials/2D_breakout_game_Phaser/Extra_lives) en lugar de una.

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser/Build_the_brick_field", "Games/Tutorials/2D_breakout_game_Phaser/Extra_lives")}}
