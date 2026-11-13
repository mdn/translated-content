---
title: Animaciones y tweens
slug: Games/Tutorials/2D_breakout_game_Phaser/Animations_and_tweens
l10n:
  sourceCommit: 69937a446786abf5a58d4214b4192597d0b3cdc6
---

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser/Extra_lives", "Games/Tutorials/2D_breakout_game_Phaser/Buttons")}}

Este es el **paso 10** de los 12 del [tutorial para crear un juego Breakout con Phaser](/es/docs/Games/Tutorials/2D_breakout_game_Phaser). Veremos cómo implementar animaciones y tweens de Phaser en nuestro juego, para que se vea más vistoso y lleno de vida. El resultado será una experiencia mejor y más entretenida.

## Animaciones

En Phaser, las animaciones consisten en tomar una hoja de sprites de una fuente externa y mostrar los sprites uno tras otro. Como ejemplo, haremos que la pelota se tambalee cuando choque con algo.

Antes que nada, [descarga la hoja de sprites](https://mdn.github.io/shared-assets/images/examples/2D_breakout_game_Phaser/wobble.png) y guárdala en tu directorio `/img`.

Después, cargaremos la hoja de sprites; añade la siguiente línea al final de tu método `preload()`:

```js
this.load.spritesheet("wobble", "img/wobble.png", {
  frameWidth: 20,
  frameHeight: 20,
});
```

En lugar de cargar una sola imagen de la pelota, podemos cargar toda la hoja de sprites, es decir, una colección de imágenes distintas. Mostraremos los sprites uno tras otro para crear la ilusión de animación. El parámetro adicional del método `spritesheet()` determina el ancho y el alto de cada fotograma de la hoja de sprites, e indica al programa cómo dividirla para obtener los fotogramas individuales.

## Cargar la animación

A continuación, ve a tu método `create()`, busca el bloque de código que carga y configura el sprite de la pelota y, debajo, añade la llamada a `anims.create` que se ve a continuación:

```js
this.ball = this.add.sprite(
  this.scale.width * 0.5,
  this.scale.height - 25,
  "ball",
);
// ...
this.ball.anims.create({
  key: "wobble",
  frameRate: 24,
  frames: this.anims.generateFrameNumbers("wobble", {
    frames: [0, 1, 0, 2, 0, 1, 0, 2, 0],
  }),
});
```

Para añadir una animación al objeto, usamos el método `anims.create()`, que recibe un parámetro con las siguientes propiedades:

- `key`: el nombre que elegimos para la animación.
- `frameRate`: la velocidad de fotogramas, en fps. Como reproducimos la animación a 24 fps y hay 9 fotogramas, la animación se mostrará algo menos de tres veces por segundo.
- `frames`: un array que define el orden en que se muestran los fotogramas durante la animación. Si vuelves a mirar la imagen `wobble.png`, verás que tiene tres fotogramas. Phaser los extrae y guarda referencias a ellos en un array, en las posiciones 0, 1 y 2. El array anterior indica que mostramos el fotograma 0, luego el 1, luego el 0, etc.

## Aplicar la animación cuando la pelota golpea la paleta

En la llamada al método `physics.collide()` que gestiona la colisión entre la pelota y la paleta (la primera línea dentro de `update()`, que se ve a continuación), podemos añadir un parámetro adicional que especifica una función que se ejecutará cada vez que ocurra la colisión, de la misma forma que con el método `hitBrick()`. Actualiza la primera línea dentro de `update()` como se muestra a continuación:

```js
class ExampleScene extends Phaser.Scene {
  // ...
  update() {
    this.physics.collide(this.ball, this.paddle, (ball, paddle) =>
      this.hitPaddle(ball, paddle),
    );
    this.physics.collide(this.ball, this.bricks, (ball, brick) =>
      this.hitBrick(ball, brick),
    );
    this.paddle.x = this.input.x || this.scale.width * 0.5;
    // ...
  }
  // ...
}
```

Después, podemos crear el método `hitPaddle()` (con `ball` y `paddle` como parámetros), que reproduce la animación de tambaleo cuando se llama. Añade el siguiente método encima del método `hitBrick()`:

```js
class ExampleScene extends Phaser.Scene {
  // ...
  hitPaddle(ball, paddle) {
    this.ball.anims.play("wobble");
  }
  // ...
}
```

La animación se reproduce cada vez que la pelota golpea la paleta. También puedes añadir la llamada a `anims.play()` dentro del método `hitBrick()`, si crees que así el juego se verá mejor.

## Tweens

Mientras que las animaciones reproducen sprites externos uno tras otro, los tweens animan de forma suave las propiedades de un objeto del mundo del juego, como el ancho o la opacidad.

Añadamos un tween a nuestro juego para que los ladrillos desaparezcan suavemente cuando la pelota los golpee. Ve a tu método `hitBrick()`, busca la línea `brick.destroy();` y sustitúyela por lo siguiente:

```js
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
```

Repasémoslo para que veas qué ocurre aquí:

1. Al definir un tween nuevo, tienes que especificar qué propiedad de `targets` se animará con el tween. En nuestro caso, en lugar de ocultar los ladrillos al instante cuando los golpea la pelota, haremos que su ancho y su alto se reduzcan hasta cero, para que desaparezcan de forma elegante. Para ello, usamos el método `tweens.add()`, especificando `brick` como `targets` y las propiedades `scaleX` y `scaleY` que se animarán en el objeto `props`.
2. Otras propiedades que podemos establecer son `ease`, que define la función de aceleración que se usará (en este caso, `Linear`), `repeat`, que define cuántas veces debe repetirse el tween (0 significa que no se repetirá), y `duration`, que es el tiempo en milisegundos que tardará en completarse el tween.
3. También añadiremos el manejador de eventos opcional `onComplete`, que define una función que se ejecutará cuando termine el tween.
4. Lo último que queda por hacer es iniciar el tween de inmediato con el método `play()`.

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
  }
  update() {
    this.physics.collide(this.ball, this.paddle, (ball, paddle) =>
      this.hitPaddle(ball, paddle),
    );
    this.physics.collide(this.ball, this.bricks, (ball, brick) =>
      this.hitBrick(ball, brick),
    );

    this.paddle.x = this.input.x || this.scale.width * 0.5;
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

Las animaciones y los tweens se ven muy bien, pero podemos añadir todavía más cosas a nuestro juego: en la siguiente sección veremos cómo gestionar la interacción con [botones](/es/docs/Games/Tutorials/2D_breakout_game_Phaser/Buttons).

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser/Extra_lives", "Games/Tutorials/2D_breakout_game_Phaser/Buttons")}}
