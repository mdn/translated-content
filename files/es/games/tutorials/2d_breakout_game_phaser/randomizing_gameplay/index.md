---
title: Aleatorizar la jugabilidad
slug: Games/Tutorials/2D_breakout_game_Phaser/Randomizing_gameplay
l10n:
  sourceCommit: 69937a446786abf5a58d4214b4192597d0b3cdc6
---

{{Previous("Games/Tutorials/2D_breakout_game_Phaser/Buttons")}}

Este es el **paso 12** de los 12 del [tutorial para crear un juego Breakout con Phaser](/es/docs/Games/Tutorials/2D_breakout_game_Phaser). Nuestro juego parece terminado, pero si te fijas bien, notarás que la pelota rebota en la paleta con el mismo ángulo durante toda la partida. Esto significa que todas las partidas son bastante parecidas. Para solucionarlo y mejorar la jugabilidad, deberíamos hacer que los ángulos de rebote sean más aleatorios, y en este artículo veremos cómo.

## Hacer los rebotes más aleatorios

Podemos cambiar la velocidad de la pelota según el punto exacto en el que golpee la paleta, modificando la velocidad en `x` cada vez que se ejecute el método `hitPaddle()` con una línea como la siguiente. Añade ahora esta línea nueva a tu código y pruébala.

```js
class ExampleScene extends Phaser.Scene {
  // ...
  hitPaddle(ball, paddle) {
    this.ball.anims.play("wobble");
    ball.body.velocity.x = -5 * (paddle.x - ball.x);
  }
  // ...
}
```

Es un poco de magia: cuanto mayor sea la distancia entre el centro de la paleta y el punto en el que la golpea la pelota, mayor será la nueva velocidad. Además, la dirección (izquierda o derecha) depende de ese valor: si la pelota golpea el lado izquierdo de la paleta, rebotará hacia la izquierda, mientras que si golpea el lado derecho, rebotará hacia la derecha. Quedó así tras experimentar un poco con los valores dados; puedes hacer tus propios experimentos y ver qué pasa. Por supuesto, no es completamente aleatorio, pero hace que la jugabilidad sea algo más impredecible y, por lo tanto, más interesante.

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

  lives = 3;
  livesText;
  lifeLostText;

  playing = false;
  startButton;

  preload() {
    this.load.setBaseURL(
      "https://mdn.github.io/shared-assets/images/examples/2D_breakout_game_Phaser",
    );

    this.load.image("ball", "ball.png");
    this.load.image("paddle", "paddle.png");
    this.load.image("brick", "brick.png");
    this.load.spritesheet("wobble", "wobble.png", {
      frameWidth: 20,
      frameHeight: 20,
    });
    this.load.spritesheet("button", "button.png", {
      frameWidth: 120,
      frameHeight: 40,
    });
  }
  create() {
    this.physics.world.checkCollision.down = false;

    this.ball = this.add.sprite(
      this.scale.width * 0.5,
      this.scale.height - 25,
      "ball",
    );
    this.physics.add.existing(this.ball);
    this.ball.body.setCollideWorldBounds(true, 1, 1);
    this.ball.body.setBounce(1);
    this.ball.anims.create({
      key: "wobble",
      frameRate: 24,
      frames: this.anims.generateFrameNumbers("wobble", {
        frames: [0, 1, 0, 2, 0, 1, 0, 2, 0],
      }),
    });

    this.paddle = this.add.sprite(
      this.scale.width * 0.5,
      this.scale.height - 5,
      "paddle",
    );
    this.paddle.setOrigin(0.5, 1);
    this.physics.add.existing(this.paddle);
    this.paddle.body.setImmovable(true);

    this.initBricks();

    const textStyle = { font: "18px Arial", fill: "#0095dd" };
    this.scoreText = this.add.text(5, 5, "Puntos: 0", textStyle);

    this.livesText = this.add.text(
      this.scale.width - 5,
      5,
      `Vidas: ${this.lives}`,
      textStyle,
    );
    this.livesText.setOrigin(1, 0);
    this.lifeLostText = this.add.text(
      this.scale.width * 0.5,
      this.scale.height * 0.5,
      "Vida perdida, haz clic para continuar",
      textStyle,
    );
    this.lifeLostText.setOrigin(0.5, 0.5);
    this.lifeLostText.visible = false;

    this.startButton = this.add.sprite(
      this.scale.width * 0.5,
      this.scale.height * 0.5,
      "button",
      0,
    );
    this.startButton.setInteractive();
    this.startButton.on(
      "pointerover",
      () => {
        this.startButton.setFrame(1);
      },
      this,
    );
    this.startButton.on(
      "pointerdown",
      () => {
        this.startButton.setFrame(2);
      },
      this,
    );
    this.startButton.on(
      "pointerout",
      () => {
        this.startButton.setFrame(0);
      },
      this,
    );
    this.startButton.on(
      "pointerup",
      () => {
        this.startGame();
      },
      this,
    );
  }
  update() {
    this.physics.collide(this.ball, this.paddle, (ball, paddle) =>
      this.hitPaddle(ball, paddle),
    );
    this.physics.collide(this.ball, this.bricks, (ball, brick) =>
      this.hitBrick(ball, brick),
    );

    if (this.playing) {
      this.paddle.x = this.input.x || this.scale.width * 0.5;
    }

    const ballIsOutOfBounds = !Phaser.Geom.Rectangle.Overlaps(
      this.physics.world.bounds,
      this.ball.getBounds(),
    );
    if (ballIsOutOfBounds) {
      this.ballLeaveScreen();
    }
    if (this.bricks.countActive() === 0) {
      alert("¡Ganaste el juego, felicidades!");
      location.reload();
    }
  }

  startGame() {
    this.startButton.destroy();
    this.ball.body.setVelocity(150, -150);
    this.playing = true;
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

  hitPaddle(ball, paddle) {
    this.ball.anims.play("wobble");
    ball.body.velocity.x = -5 * (paddle.x - ball.x);
  }

  hitBrick(ball, brick) {
    const destroyTween = this.tweens.add({
      targets: brick,
      ease: "Linear",
      repeat: 0,
      duration: 200,
      props: {
        scaleX: 0,
        scaleY: 0,
      },
      onComplete() {
        brick.destroy();
      },
    });
    destroyTween.play();
    this.score += 10;
    this.scoreText.setText(`Puntos: ${this.score}`);
  }

  ballLeaveScreen() {
    this.lives--;
    if (this.lives > 0) {
      this.livesText.setText(`Vidas: ${this.lives}`);
      this.lifeLostText.visible = true;
      this.ball.body.reset(this.scale.width * 0.5, this.scale.height - 25);
      this.input.once(
        "pointerdown",
        () => {
          this.lifeLostText.visible = false;
          this.ball.body.setVelocity(150, -150);
        },
        this,
      );
    } else {
      // Lógica de fin del juego
      location.reload();
    }
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

## Resumen

Has terminado todas las lecciones, ¡felicidades! A estas alturas habrás aprendido los fundamentos de Phaser y la lógica que hay detrás de los juegos 2D sencillos.

### Ejercicios para continuar

Puedes hacer mucho más en el juego: añade lo que creas que lo hará más divertido e interesante. Esta es una introducción básica que apenas araña la superficie de los innumerables métodos útiles que ofrece Phaser. Para que empieces, aquí tienes algunas sugerencias sobre cómo podrías ampliar nuestro pequeño juego:

- Añadir una segunda pelota o paleta.
- Cambiar el color del fondo con cada golpe.
- Cambiar las imágenes y usar las tuyas.
- Dar puntos extra si se destruyen ladrillos rápidamente, varios seguidos (u otras bonificaciones que elijas).
- Crear niveles con distintas distribuciones de ladrillos.

No dejes de consultar la lista cada vez más larga de [ejemplos](https://labs.phaser.io/) y la [documentación oficial](https://docs.phaser.io/), y visita el [foro de Phaser en Discourse](https://phaser.discourse.group/) si alguna vez necesitas ayuda.

También puedes volver a la [página de inicio de esta serie de tutoriales](/es/docs/Games/Tutorials/2D_breakout_game_Phaser).

{{Previous("Games/Tutorials/2D_breakout_game_Phaser/Buttons")}}
