---
title: Física
slug: Games/Tutorials/2D_breakout_game_Phaser/Physics
l10n:
  sourceCommit: 69937a446786abf5a58d4214b4192597d0b3cdc6
---

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser/Move_the_ball", "Games/Tutorials/2D_breakout_game_Phaser/Bounce_off_the_walls")}}

Este es el **paso 3** de los 12 del [tutorial para crear un juego Breakout con Phaser](/es/docs/Games/Tutorials/2D_breakout_game_Phaser). Para que la detección de colisiones entre los objetos del juego funcione bien, necesitaremos física; este artículo te presenta lo que ofrece Phaser y muestra una configuración sencilla típica.

## Añadir física

Phaser incluye tres motores de física distintos (Arcade Physics, Impact Physics y Matter.js Physics), y una cuarta opción, Box2D, disponible como complemento comercial. Para juegos sencillos como el nuestro, podemos usar el motor Arcade Physics. No necesitamos cálculos geométricos complejos: al fin y al cabo, solo es una pelota que rebota en paredes y ladrillos.

Primero, configuremos el motor Arcade Physics en nuestro juego. Añade la propiedad `physics` al objeto `config`, como se muestra a continuación:

```js
const config = {
  // ...
  physics: {
    default: "arcade",
  },
};
```

A continuación, tenemos que activar la física para nuestra pelota, porque en Phaser la física de los objetos no está activada de forma predeterminada. Añade la siguiente línea al final del método `create()`:

```js
this.physics.add.existing(this.ball);
```

Después, si queremos mover la pelota por la pantalla, podemos establecer la `velocity` (velocidad) de su `body`. Añade la siguiente línea, también al final de `create()`:

```js
this.ball.body.setVelocity(150, 150);
```

## Quitar las instrucciones de actualización anteriores

Recuerda quitar del método `update()` nuestra forma anterior de sumar valores a `x` e `y`, es decir, déjalo vacío otra vez:

```js
class ExampleScene extends Phaser.Scene {
  // ...
  update() {}
}
```

Ahora lo estamos haciendo como corresponde, con un motor de física.

Prueba a recargar `index.html` otra vez. Por ahora, el motor de física no tiene gravedad ni fricción, así que la pelota avanzará en la dirección indicada a velocidad constante.

## Divertirse con la física

Puedes hacer mucho más con la física; por ejemplo, si añades `this.ball.body.gravity.y = 500;` dentro de `create()`, establecerás la gravedad vertical de la pelota. Prueba a cambiar la velocidad a `this.ball.body.setVelocity(150, -150);` y verás que la pelota sale disparada hacia arriba, pero luego cae porque la gravedad tira de ella hacia abajo.

Este tipo de funcionalidad es solo la punta del iceberg: hay varias funciones y variables que te ayudan a manipular los objetos físicos. Consulta la [documentación oficial de física](https://docs.phaser.io/phaser/concepts/physics/arcade) y mira la [enorme colección de ejemplos](https://phaser.io/examples/v3.85.0/physics) que usan los sistemas de física Arcade y Matter.js.

## Compara tu código

Esto es lo que deberías tener hasta ahora, funcionando en vivo. Para ver su código fuente, haz clic en el botón "Play".

De nuevo, si no ves la pelota, prueba a recargar la página: probablemente la pelota ya se salió de la pantalla.

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

Ahora podemos pasar a la siguiente lección y ver cómo hacer que la pelota [rebote en las paredes](/es/docs/Games/Tutorials/2D_breakout_game_Phaser/Bounce_off_the_walls).

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser/Move_the_ball", "Games/Tutorials/2D_breakout_game_Phaser/Bounce_off_the_walls")}}
