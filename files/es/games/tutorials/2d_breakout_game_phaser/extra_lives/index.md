---
title: Vidas extra
slug: Games/Tutorials/2D_breakout_game_Phaser/Extra_lives
l10n:
  sourceCommit: 69937a446786abf5a58d4214b4192597d0b3cdc6
---

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser/Track_the_score_and_win", "Games/Tutorials/2D_breakout_game_Phaser/Animations_and_tweens")}}

Este es el **paso 9** de 12 del [tutorial para crear un juego de Breakout con Phaser](/es/docs/Games/Tutorials/2D_breakout_game_Phaser). En este artículo implementaremos un sistema de vidas, para que el jugador pueda seguir jugando hasta perder tres vidas, y no solo una, lo que hace que el juego resulte divertido durante más tiempo.

## Nuevas propiedades

Añade las siguientes propiedades nuevas debajo de las que ya existen en tu código:

```js
class ExampleScene extends Phaser.Scene {
  // ... definiciones de propiedades anteriores ...
  lives = 3;
  livesText;
  lifeLostText;
  // ... resto de la clase ...
}
```

Estas guardarán, respectivamente, el número de vidas, la etiqueta de texto que muestra el número de vidas restantes y una etiqueta de texto que se mostrará en la pantalla cuando el jugador pierda una de sus vidas.

## Definir las nuevas etiquetas de texto

Definir las etiquetas de texto se parece a lo que ya hicimos en la lección [Llevar la puntuación y ganar](/es/docs/Games/Tutorials/2D_breakout_game_Phaser/Track_the_score_and_win). Añade las siguientes líneas debajo de la definición de `scoreText` que ya existe en tu método `create()`:

```js
this.livesText = this.add.text(
  this.scale.width - 5,
  5,
  `Vidas: ${this.lives}`,
  { font: "18px Arial", fill: "#0095dd" },
);
this.livesText.setOrigin(1, 0);
this.lifeLostText = this.add.text(
  this.scale.width * 0.5,
  this.scale.height * 0.5,
  "Vida perdida, haz clic para continuar",
  { font: "18px Arial", fill: "#0095dd" },
);
this.lifeLostText.setOrigin(0.5, 0.5);
this.lifeLostText.visible = false;
```

Los objetos `this.livesText` y `this.lifeLostText` se parecen mucho a `this.scoreText`: definen una posición en la pantalla, el texto que se muestra y el estilo de la fuente. El primero se ancla por su borde superior derecho para alinearse correctamente con la pantalla, y el segundo se centra, en ambos casos con `setOrigin`.

`lifeLostText` solo se mostrará cuando se pierda una vida, así que su visibilidad se establece inicialmente en `false`.

### Aplicar el principio DRY al estilo del texto

Como probablemente notaste, usamos el mismo estilo para los tres textos: `scoreText`, `livesText` y `lifeLostText`. Si alguna vez queremos cambiar el tamaño o el color de la fuente, tendremos que hacerlo en varios lugares. Para facilitar su mantenimiento en el futuro, podemos crear una variable aparte que guarde el estilo; llamémosla `textStyle` y coloquémosla antes de las definiciones de los textos:

```js
const textStyle = { font: "18px Arial", fill: "#0095dd" };
```

Ahora podemos usar esta variable al dar estilo a las etiquetas de texto. Actualiza tu código para que las distintas apariciones del estilo del texto se sustituyan por la variable:

```js
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
```

Así, al cambiar la fuente en una sola variable, los cambios se aplicarán en todos los lugares donde se use.

## El código para gestionar las vidas

Para implementar las vidas en nuestro juego, primero cambiemos el comportamiento cuando la pelota sale de los límites. En lugar de reiniciar de inmediato:

```js
if (ballIsOutOfBounds) {
  // Lógica de fin del juego
  location.reload();
}
```

Llamaremos a un nuevo método llamado `ballLeaveScreen()`; elimina las líneas anteriores (mostradas arriba) y reemplázalas por la siguiente línea:

```js
if (ballIsOutOfBounds) {
  this.ballLeaveScreen();
}
```

Queremos reducir el número de vidas cada vez que la pelota sale del canvas. Añade la definición del método `ballLeaveScreen()` al final de la clase `ExampleScene`:

```js
class ExampleScene extends Phaser.Scene {
  // ...
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
```

En lugar de mostrar inmediatamente la alerta cuando pierdes una vida, primero restamos una vida del número actual y comprobamos si el valor es distinto de cero. Si lo es, el jugador todavía tiene vidas y puede seguir jugando: verá el mensaje de vida perdida, las posiciones de la pelota y la paleta se restablecerán en la pantalla, y con la siguiente entrada (un clic o un toque) el mensaje se ocultará y la pelota empezará a moverse de nuevo.

Cuando el número de vidas disponibles llega a cero, el juego termina y se muestra el mensaje de alerta de fin del juego.

## Eventos

Probablemente notaste la llamada al método `once` en el bloque de código anterior y te preguntaste qué es. El método `once()` es un detector de eventos de Phaser que escucha la siguiente aparición del evento indicado (en este caso, un evento de pulsación del puntero) y después se elimina a sí mismo tras dispararse. Esto significa que el código dentro de la función de retorno solo se ejecutará una vez después de llamar a `once`, que es justo lo que queremos aquí: ocultar el mensaje de vida perdida y volver a poner en marcha la pelota una sola vez, después de que el jugador haga clic o toque la pantalla.

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

  hitBrick(ball, brick) {
    brick.destroy();
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

Las vidas hicieron que el juego sea más indulgente: si pierdes una vida, todavía te quedan dos más y puedes seguir jugando. Ahora ampliemos el aspecto y la sensación del juego añadiendo [animaciones y tweens](/es/docs/Games/Tutorials/2D_breakout_game_Phaser/Animations_and_tweens).

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser/Track_the_score_and_win", "Games/Tutorials/2D_breakout_game_Phaser/Animations_and_tweens")}}
