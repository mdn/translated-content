---
title: Construir el muro de ladrillos
slug: Games/Tutorials/2D_breakout_game_Phaser/Build_the_brick_field
l10n:
  sourceCommit: 69937a446786abf5a58d4214b4192597d0b3cdc6
---

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser/Game_over", "Games/Tutorials/2D_breakout_game_Phaser/Track_the_score_and_win")}}

Este es el **paso 7** de los 12 del [tutorial para crear un juego Breakout con Phaser](/es/docs/Games/Tutorials/2D_breakout_game_Phaser). Veamos cómo crear un grupo de ladrillos, dibujarlos en la pantalla con un bucle y eliminarlos cuando la pelota los golpea. Construir el muro de ladrillos es un poco más complicado que añadir un solo objeto a la pantalla, aunque probablemente sea menos complicado con Phaser que con JavaScript puro.

## Propiedades nuevas

Primero, añade la nueva propiedad `bricks` debajo de las definiciones de propiedades anteriores:

```js
class ExampleScene extends Phaser.Scene {
  // ... definiciones de propiedades anteriores ...
  bricks;
  // ... resto de la clase ...
}
```

La propiedad `bricks` se usará para crear un grupo de ladrillos, lo que permite gestionar varios ladrillos a la vez.

## Mostrar la imagen del ladrillo

A continuación, carguemos la imagen del ladrillo: añade la siguiente llamada a `load.image()` justo debajo de las demás:

```js
class ExampleScene extends Phaser.Scene {
  // ...
  preload() {
    // ...
    this.load.image("brick", "img/brick.png");
  }
  // ...
}
```

También tienes que [descargar la imagen del ladrillo](https://mdn.github.io/shared-assets/images/examples/2D_breakout_game_Phaser/brick.png) y guardarla en tu directorio `/img`.

## Dibujar los ladrillos

Pondremos todo el código para dibujar los ladrillos dentro de un método `initBricks`, para mantenerlo separado del resto del código. Añade una llamada a `initBricks` al final del método `create()`:

```js
class ExampleScene extends Phaser.Scene {
  // ...
  create() {
    // ...
    this.initBricks();
  }
  // ...
}
```

Ahora vamos con el método en sí. Añade el método `initBricks` al final de la clase `ExampleScene`, justo antes de la llave de cierre `}`, como se muestra a continuación. Para empezar, añadimos el objeto `bricksLayout`, que nos será útil muy pronto:

```js
class ExampleScene extends Phaser.Scene {
  // ...
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
  }
}
```

Este `bricksLayout` contiene toda la información que necesitamos: el ancho y el alto de un solo ladrillo, el número de filas y columnas de ladrillos que veremos en la pantalla, el desplazamiento superior e izquierdo (la posición del canvas donde empezamos a dibujar los ladrillos) y el espacio de separación entre cada fila y columna de ladrillos.

Ahora, empecemos a crear los ladrillos en sí. Primero, añade un grupo vacío que contenga los ladrillos, agregando la siguiente línea al final del método `initBricks()`:

```js
this.bricks = this.add.group();
```

Podemos recorrer las filas y las columnas para crear un ladrillo nuevo en cada iteración; añade el siguiente bucle anidado debajo de la línea de código anterior:

```js
for (let c = 0; c < bricksLayout.count.col; c++) {
  for (let r = 0; r < bricksLayout.count.row; r++) {
    // crear un ladrillo nuevo y añadirlo al grupo
  }
}
```

Así crearemos exactamente el número de ladrillos que necesitamos y los tendremos todos dentro de un grupo. Ahora tenemos que añadir algo de código dentro de la estructura de bucles anidados para dibujar cada ladrillo. Completa el contenido como se muestra a continuación:

```js
for (let c = 0; c < bricksLayout.count.col; c++) {
  for (let r = 0; r < bricksLayout.count.row; r++) {
    const brickX = 0;
    const brickY = 0;

    const newBrick = this.add.sprite(brickX, brickY, "brick");
    this.physics.add.existing(newBrick);
    newBrick.body.setImmovable(true);
    this.bricks.add(newBrick);
  }
}
```

Aquí recorremos las filas y las columnas para crear los ladrillos nuevos y colocarlos en la pantalla. El ladrillo recién creado se activa para el motor de físicas Arcade, su cuerpo se configura como inamovible (para que no se mueva cuando lo golpee la pelota) y, después, se añade al grupo.

El problema ahora es que estamos dibujando todos los ladrillos en un mismo sitio, en las coordenadas (0,0). Lo que tenemos que hacer es dibujar cada ladrillo en su propia posición x e y. Actualiza las líneas `brickX` y `brickY` de esta forma:

```js
const brickX =
  c * (bricksLayout.width + bricksLayout.padding) + bricksLayout.offset.left;
const brickY =
  r * (bricksLayout.height + bricksLayout.padding) + bricksLayout.offset.top;
```

Cada posición `brickX` se calcula como `bricksLayout.width` más `bricksLayout.padding`, multiplicado por el número de columna, `c`, más `bricksLayout.offset.left`; la lógica de `brickY` es idéntica, salvo que usa los valores del número de fila, `r`, `bricksLayout.height` y `bricksLayout.offset.top`. Ahora cada ladrillo puede colocarse en su sitio, con un espacio de separación entre ellos, y dibujarse con un desplazamiento respecto a los bordes izquierdo y superior del canvas.

Si recargas `index.html` en este punto, deberías ver los ladrillos dibujados en la pantalla, a la misma distancia unos de otros.

## Detección de colisiones entre ladrillos y pelota

Pasemos al siguiente reto: la detección de colisiones entre la pelota y los ladrillos. Por suerte, podemos usar el motor de físicas para comprobar colisiones no solo entre objetos individuales (como la pelota y la paleta), sino también entre un objeto y el grupo.

Primero, añade una línea nueva dentro de tu método `update()` que detecte una colisión entre la pelota y los ladrillos, como se muestra a continuación:

```js
class ExampleScene extends Phaser.Scene {
  // ...
  update() {
    this.physics.collide(this.ball, this.paddle);
    this.physics.collide(this.ball, this.bricks, (ball, brick) =>
      this.hitBrick(ball, brick),
    );
    this.paddle.x = this.input.x || this.scale.width * 0.5;
    // ...
  }
  // ...
}
```

La posición de la pelota se calcula respecto a las posiciones de todos los ladrillos del grupo. El tercer parámetro, opcional, es la función que se ejecuta cuando se produce una colisión. Phaser llama a esta función con dos argumentos: el primero es la pelota, que pasamos explícitamente al método collide, y el segundo es el ladrillo concreto del grupo de ladrillos con el que choca la pelota. Aquí implementamos el comportamiento en un método llamado `hitBrick()`. Crea este método nuevo al final de la clase `ExampleScene`, justo antes de la llave de cierre `}`, de esta forma:

```js
class ExampleScene extends Phaser.Scene {
  // ...
  hitBrick(ball, brick) {
    brick.destroy();
  }
}
```

¡Y eso es todo! Recarga tu código y deberías ver que la nueva detección de colisiones funciona tal como se esperaba.

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

Ya podemos golpear los ladrillos y eliminarlos, lo que de por sí es una buena mejora en la jugabilidad. Sería todavía mejor [llevar la cuenta de la puntuación y ganar](/es/docs/Games/Tutorials/2D_breakout_game_Phaser/Track_the_score_and_win) cuando se destruyan todos los ladrillos.

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser/Game_over", "Games/Tutorials/2D_breakout_game_Phaser/Track_the_score_and_win")}}
