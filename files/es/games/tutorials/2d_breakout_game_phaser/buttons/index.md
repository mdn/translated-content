---
title: Botones
slug: Games/Tutorials/2D_breakout_game_Phaser/Buttons
l10n:
  sourceCommit: 69937a446786abf5a58d4214b4192597d0b3cdc6
---

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser/Animations_and_tweens", "Games/Tutorials/2D_breakout_game_Phaser/Randomizing_gameplay")}}

Este es el **paso 11** de los 12 del [tutorial para crear un juego Breakout con Phaser](/es/docs/Games/Tutorials/2D_breakout_game_Phaser). En lugar de empezar el juego de inmediato, podemos dejar esa decisión en manos del jugador añadiendo un botón de inicio que pueda pulsar. Veamos cómo hacerlo.

## Propiedades nuevas

Necesitaremos una propiedad que guarde un valor booleano que indique si se está jugando o no, y otra que represente nuestro botón. Añade estas líneas debajo de las definiciones de tus otras propiedades:

```js
class ExampleScene extends Phaser.Scene {
  // ... definiciones de propiedades anteriores ...
  playing = false;
  startButton;
  // ... resto de la clase ...
}
```

## Cargar la hoja de sprites del botón

Podemos cargar la hoja de sprites del botón de la misma forma que cargamos la animación de tambaleo de la pelota. Añade lo siguiente al final del método `preload()`:

```js
this.load.spritesheet("button", "img/button.png", {
  frameWidth: 120,
  frameHeight: 40,
});
```

Cada fotograma del botón mide 120 píxeles de ancho y 40 de alto.

También tienes que [descargar la hoja de sprites del botón](https://mdn.github.io/shared-assets/images/examples/2D_breakout_game_Phaser/button.png) y guardarla en tu directorio `/img`.

## Añadir el botón al juego

Para añadir el botón nuevo al juego, se usa el método `add.sprite`. Añade las siguientes líneas al final de tu método `create()`:

```js
this.startButton = this.add.sprite(
  this.scale.width * 0.5,
  this.scale.height * 0.5,
  "button",
  0,
);
```

Además de los parámetros que pasamos a las otras llamadas a `add.sprite` (como cuando añadimos la pelota y la paleta), esta vez también pasamos el número de fotograma, que en este caso es `0`. Esto significa que se usará el primer fotograma de la hoja de sprites como aspecto inicial del botón.

## Gestionar la interacción con el botón

Para que el botón responda a distintas interacciones, como los clics del ratón, tenemos que añadir las siguientes líneas justo después de la llamada anterior a `add.sprite`:

```js
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
```

Primero, llamamos a `setInteractive` en el botón para que responda a los eventos de puntero. Después, añadimos al botón los cuatro detectores de eventos:

- `pointerover`: cuando el puntero está sobre el botón, cambiamos el fotograma del botón a `1`, el segundo fotograma de la hoja de sprites.
- `pointerdown`: cuando se pulsa el botón, cambiamos el fotograma del botón a `2`, el tercer fotograma de la hoja de sprites.
- `pointerout`: cuando el puntero sale del botón, volvemos a poner el fotograma del botón en `0`, el primer fotograma de la hoja de sprites.
- `pointerup`: cuando se suelta el botón, llamamos al método `startGame` para iniciar el juego.

## Iniciar el juego

Ahora tenemos que definir el método `startGame()` al que hace referencia el código anterior:

```js
class ExampleScene extends Phaser.Scene {
  // ...
  startGame() {
    this.startButton.destroy();
    this.ball.body.setVelocity(150, -150);
    this.playing = true;
  }
}
```

Cuando se pulsa el botón, eliminamos el botón, establecemos la velocidad inicial de la pelota y ponemos la propiedad `playing` en `true`.

Por último en esta sección, vuelve a tu método `create`, busca la línea `this.ball.body.setVelocity(150, -150);` y elimínala. Solo quieres que la pelota se mueva cuando se pulse el botón, ¡no antes!

## Mantener la paleta quieta antes de que empiece el juego

Funciona como se esperaba, pero todavía podemos mover la paleta cuando el juego aún no ha empezado, lo que queda un poco raro. Para evitarlo, podemos aprovechar la propiedad `playing` y hacer que la paleta solo se pueda mover cuando el juego haya empezado. Para ello, ajusta el método `update()` así:

```js
class ExampleScene extends Phaser.Scene {
  // ...
  update() {
    // ...
    if (this.playing) {
      this.paddle.x = this.input.x || this.scale.width * 0.5;
    }
    // ...
  }
  // ...
}
```

Así, la paleta queda inmóvil una vez que todo está cargado y preparado, pero antes de que empiece la partida de verdad.

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

## Próximos pasos

Lo último que haremos en esta serie de artículos es hacer que la jugabilidad sea aún más interesante, añadiendo algo de [aleatoriedad](/es/docs/Games/Tutorials/2D_breakout_game_Phaser/Randomizing_gameplay) a la forma en que la pelota rebota en la paleta.

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser/Animations_and_tweens", "Games/Tutorials/2D_breakout_game_Phaser/Randomizing_gameplay")}}
