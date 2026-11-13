---
title: Fin del juego
slug: Games/Tutorials/2D_breakout_game_Phaser/Game_over
l10n:
  sourceCommit: 69937a446786abf5a58d4214b4192597d0b3cdc6
---

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser/Player_paddle_and_controls", "Games/Tutorials/2D_breakout_game_Phaser/Build_the_brick_field")}}

Este es el **paso 6** de los 12 del [tutorial para crear un juego Breakout con Phaser](/es/docs/Games/Tutorials/2D_breakout_game_Phaser). Para que el juego sea más interesante, podemos introducir la posibilidad de perder: si no golpeas la pelota antes de que llegue al borde inferior de la pantalla, será el fin del juego.

## Cómo perder

Para introducir la posibilidad de perder, desactivaremos la colisión de la pelota con el borde inferior de la pantalla. Añade el código siguiente dentro del método `create()`, al principio del todo:

```js
this.physics.world.checkCollision.down = false;
```

Así, las tres paredes (superior, izquierda y derecha) harán rebotar la pelota, pero la cuarta (inferior) desaparecerá, lo que deja que la pelota caiga fuera de la pantalla si la paleta no la alcanza. Necesitamos una forma de detectarlo y actuar en consecuencia. Añade las líneas siguientes al final del método `update()`:

```js
const ballIsOutOfBounds = !Phaser.Geom.Rectangle.Overlaps(
  this.physics.world.bounds,
  this.ball.getBounds(),
);
if (ballIsOutOfBounds) {
  // Lógica de fin del juego
  alert("¡Fin del juego!");
  location.reload();
}
```

Con esas líneas se comprueba si la pelota se sale de los límites del mundo (en nuestro caso, del canvas) y, en ese caso, se muestra una alerta. Al hacer clic en la alerta, la página se recarga y puedes volver a jugar.

> [!NOTE]
> La experiencia de usuario aquí es bastante mejorable, porque [`alert()`](/es/docs/Web/API/Window/alert) muestra un cuadro de diálogo del sistema y bloquea el juego. En un juego real, probablemente querrías diseñar tu propio cuadro de diálogo modal con {{HTMLElement("dialog")}}.
>
> Además, más adelante añadiremos un [botón "Start"](/es/docs/Games/Tutorials/2D_breakout_game_Phaser/Buttons), pero por ahora el juego empieza en cuanto se carga la página, así que podrías "perder" antes incluso de empezar a jugar. Para evitar el molesto cuadro de diálogo, a partir de ahora quitaremos la llamada a `alert()`.

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

  preload() {
    this.load.setBaseURL(
      "https://mdn.github.io/shared-assets/images/examples/2D_breakout_game_Phaser",
    );

    this.load.image("ball", "ball.png");
    this.load.image("paddle", "paddle.png");
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
  }
  update() {
    this.physics.collide(this.ball, this.paddle);
    this.paddle.x = this.input.x || this.scale.width * 0.5;
    const ballIsOutOfBounds = !Phaser.Geom.Rectangle.Overlaps(
      this.physics.world.bounds,
      this.ball.getBounds(),
    );
    if (ballIsOutOfBounds) {
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

Ahora que ya tenemos la jugabilidad básica, hagámosla más interesante añadiendo ladrillos que romper: es hora de [construir el muro de ladrillos](/es/docs/Games/Tutorials/2D_breakout_game_Phaser/Build_the_brick_field).

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser/Player_paddle_and_controls", "Games/Tutorials/2D_breakout_game_Phaser/Build_the_brick_field")}}
