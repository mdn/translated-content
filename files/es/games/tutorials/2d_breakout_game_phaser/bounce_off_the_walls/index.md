---
title: Rebotar en las paredes
slug: Games/Tutorials/2D_breakout_game_Phaser/Bounce_off_the_walls
l10n:
  sourceCommit: 69937a446786abf5a58d4214b4192597d0b3cdc6
---

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser/Physics", "Games/Tutorials/2D_breakout_game_Phaser/Player_paddle_and_controls")}}

Este es el **paso 4** de los 12 del [tutorial para crear un juego Breakout con Phaser](/es/docs/Games/Tutorials/2D_breakout_game_Phaser). Ahora que ya tenemos la física, podemos empezar a implementar la detección de colisiones en el juego; primero veremos las paredes.

## Rebotar en los límites del mundo

La forma más sencilla de hacer que la pelota rebote en las paredes es decirle al framework que queremos tratar los límites del elemento {{htmlelement("canvas")}} como paredes y no dejar que la pelota los atraviese. En Phaser, esto se consigue fácilmente con el método `setCollideWorldBounds()`. Añade esta línea justo después de la llamada existente al método `this.ball.body.setVelocity()`:

```js
this.ball.body.setCollideWorldBounds(true, 1, 1);
```

El `true` le indica a Phaser que active la detección de colisiones con los límites del mundo, mientras que los dos `1` son el factor de rebote en los ejes x e y, respectivamente. Esto significa que, cuando la pelota choque con una pared, rebotará con la misma velocidad que tenía antes del choque. Prueba a recargar index.html otra vez: ahora deberías ver la pelota rebotando en todas las paredes y moviéndose dentro del área del canvas.

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

  preload() {
    this.load.setBaseURL(
      "https://mdn.github.io/shared-assets/images/examples/2D_breakout_game_Phaser",
    );

    this.load.image("ball", "ball.png");
  }
  create() {
    this.ball = this.add.sprite(50, 50, "ball");
    this.physics.add.existing(this.ball);
    this.ball.body.setVelocity(150, 150);
    this.ball.body.setCollideWorldBounds(true, 1, 1);
  }
  update() {}
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

Esto empieza a parecerse más a un juego, pero todavía no podemos controlarlo de ninguna forma: ya es hora de presentar [la paleta del jugador y los controles](/es/docs/Games/Tutorials/2D_breakout_game_Phaser/Player_paddle_and_controls).

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser/Physics", "Games/Tutorials/2D_breakout_game_Phaser/Player_paddle_and_controls")}}
