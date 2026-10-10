---
title: La paleta del jugador y los controles
slug: Games/Tutorials/2D_breakout_game_Phaser/Player_paddle_and_controls
l10n:
  sourceCommit: 69937a446786abf5a58d4214b4192597d0b3cdc6
---

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser/Bounce_off_the_walls", "Games/Tutorials/2D_breakout_game_Phaser/Game_over")}}

Este es el **paso 5** de los 12 del [tutorial para crear un juego Breakout con Phaser](/es/docs/Games/Tutorials/2D_breakout_game_Phaser). Ya tenemos la pelota moviéndose y rebotando en las paredes, pero enseguida se vuelve aburrido: ¡no hay interactividad! Necesitamos una forma de introducir la jugabilidad, así que en este artículo crearemos una paleta que se pueda mover para golpear la pelota.

## Renderizar la paleta

Desde el punto de vista del framework, la paleta es muy parecida a la pelota: necesitamos añadir una propiedad que la represente, cargar el recurso de imagen correspondiente y después hacer la magia.

### Cargar la paleta

Primero, añade la propiedad `paddle` que usaremos en nuestro juego, justo después de la propiedad `ball`:

```js
class ExampleScene extends Phaser.Scene {
  ball;
  paddle;
  // ...
}
```

Después, en el método `preload`, carga la imagen `paddle` añadiendo la siguiente llamada nueva a `load.image()`:

```js
class ExampleScene extends Phaser.Scene {
  // ...
  preload() {
    this.load.image("ball", "img/ball.png");
    this.load.image("paddle", "img/paddle.png");
  }
  // ...
}
```

Para que no se nos olvide, en este momento deberías descargar el [gráfico de la paleta](https://mdn.github.io/shared-assets/images/examples/2D_breakout_game_Phaser/paddle.png) y guardarlo en tu carpeta `/img`.

### Renderizar la paleta con física

A continuación, inicializaremos la paleta añadiendo la siguiente llamada a `add.sprite()` dentro del método `create()`; añádela justo al final:

```js
this.paddle = this.add.sprite(
  this.scale.width * 0.5,
  this.scale.height - 5,
  "paddle",
);
```

Podemos usar los valores `scale.width` y `scale.height` para colocar la paleta exactamente donde queremos: `this.scale.width * 0.5` quedará justo en el centro de la pantalla. En nuestro caso, el mundo es igual que el canvas, pero en otros tipos de juegos, como los de desplazamiento lateral, el mundo será más grande y podrás experimentar con él para crear efectos interesantes.

Como verás si recargas tu `index.html` en este momento, la paleta está ahora en el borde inferior de la pantalla, demasiado abajo. ¿Por qué? Porque el origen a partir del cual se calcula la posición está en el centro del objeto. Podemos cambiarlo para que el origen quede en el centro del ancho de la paleta y en la parte inferior de su altura, de modo que sea más sencillo colocarla contra el borde inferior. Añade la siguiente línea debajo de la anterior:

```js
this.paddle.setOrigin(0.5, 1);
```

La paleta ya está colocada justo donde queremos. Ahora, para que choque con la pelota, tenemos que activar la física de la paleta. Continúa añadiendo la siguiente línea nueva, de nuevo al final del método `create()`:

```js
this.physics.add.existing(this.paddle);
```

Ahora puede empezar la magia: el framework puede encargarse de comprobar la detección de colisiones en cada fotograma. Para activar la detección de colisiones entre la paleta y la pelota, añade el método `collide()` al método `update()` como se muestra:

```js
class ExampleScene extends Phaser.Scene {
  // ...
  update() {
    this.physics.collide(this.ball, this.paddle);
  }
}
```

El primer parámetro es uno de los objetos que nos interesan (la pelota) y el segundo es el otro, la paleta. Esto funciona, pero no exactamente como esperábamos: cuando la pelota golpea la paleta, ¡la paleta se cae de la pantalla! Lo único que queremos es que la pelota rebote en la paleta y que la paleta se quede en su sitio. Podemos hacer que el `body` de la paleta sea inamovible, para que no se mueva cuando la pelota la golpee. Para ello, añade la siguiente línea al final del método `create()`:

```js
this.paddle.body.setImmovable(true);
```

Lo segundo que notarás es que, después de que la pelota golpee la paleta, empieza a moverse en horizontal en lugar de rebotar. Para solucionarlo, tenemos que establecer también el factor de rebote en la propia pelota (ya lo hicimos para las colisiones con las paredes con `setCollideWorldBounds()`). Añade la siguiente línea al método `create()`, justo después de la línea `ball.body.setCollideWorldBounds(true, 1, 1)` (queremos mantener juntas todas las configuraciones de la pelota):

```js
this.ball.body.setBounce(1);
```

Ahora funciona como esperábamos.

## Controlar la paleta

El siguiente problema es que no podemos mover la paleta. Para solucionarlo, podemos usar la entrada predeterminada del sistema (ratón o pantalla táctil, según la plataforma) y colocar la paleta en la posición de `input`. Añade la siguiente línea nueva al método `update()`, como se muestra:

```js
this.paddle.x = this.input.x;
```

Ahora, en cada fotograma nuevo, la posición `x` de la paleta se ajustará a la posición `x` de la entrada. Sin embargo, al empezar el juego, la paleta no está en el centro. Esto se debe a que la posición de la entrada todavía no está definida. Para solucionarlo, podemos establecer como posición predeterminada (si la posición de la entrada aún no está definida) el centro de la pantalla. Actualiza la línea anterior de la siguiente forma:

```js
this.paddle.x = this.input.x || this.scale.width * 0.5;
```

Si aún no lo has hecho, recarga tu `index.html` y ¡pruébalo!

## Colocar la pelota

La paleta ya funciona como esperábamos, así que vamos a colocar la pelota sobre ella. Es muy parecido a colocar la paleta: tenemos que situarla en el centro de la pantalla en horizontal y en la parte inferior en vertical, con un pequeño desplazamiento desde el borde inferior. Para colocarla exactamente como queremos, estableceremos el origen en el centro exacto de la pelota. Busca la línea `this.ball = this.add.sprite(...)` existente y reemplázala por las siguientes líneas:

```js
this.ball = this.add.sprite(
  this.scale.width * 0.5,
  this.scale.height - 25,
  "ball",
);
```

La velocidad se mantiene casi igual: solo cambiamos el valor del segundo parámetro de 150 a -150, para que la pelota empiece el juego moviéndose hacia arriba en lugar de hacia abajo. Busca la línea `this.ball.body.setVelocity()` existente y actualízala así:

```js
this.ball.body.setVelocity(150, -150);
```

Ahora la pelota empezará justo desde el centro de la paleta.

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

Podemos mover la paleta y hacer que la pelota rebote en ella, pero ¿qué sentido tiene si la pelota rebota igualmente en el borde inferior de la pantalla? Vamos a introducir la posibilidad de perder, también conocida como la lógica de [fin del juego](/es/docs/Games/Tutorials/2D_breakout_game_Phaser/Game_over).

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser/Bounce_off_the_walls", "Games/Tutorials/2D_breakout_game_Phaser/Game_over")}}
