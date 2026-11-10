---
title: Mover la pelota
slug: Games/Tutorials/2D_breakout_game_Phaser/Move_the_ball
l10n:
  sourceCommit: 69937a446786abf5a58d4214b4192597d0b3cdc6
---

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser/Initialize_the_framework", "Games/Tutorials/2D_breakout_game_Phaser/Physics")}}

Este es el **paso 2** de los 12 del [tutorial para crear un juego Breakout con Phaser](/es/docs/Games/Tutorials/2D_breakout_game_Phaser). En este artículo veremos cómo cargar un sprite de la pelota, añadirlo al mundo del juego y moverlo por la pantalla. Nuestro juego tendrá una pelota que rueda por la pantalla, rebota en una paleta y destruye ladrillos para ganar puntos.

Manejar la pelota requiere dos pasos: cargar el recurso de la pelota y renderizarla en la posición correcta mientras se mueve.

## Tener una pelota

Empecemos añadiendo a la clase `ExampleScene` una propiedad que represente nuestra pelota. Añade la siguiente línea justo después de la línea de apertura, dentro del cuerpo de la clase:

```js
class ExampleScene extends Phaser.Scene {
  ball;
  // ...
}
```

## Cargar el sprite de la pelota

Con Phaser, cargar imágenes y mostrarlas en nuestro canvas es menos complejo que hacerlo con JavaScript puro. Para cargar el recurso, usaremos el método `load.image()` de `Phaser.Scene`, disponible como `this.load.image`. Añade la siguiente línea nueva dentro del método `preload()`:

```js
class ExampleScene extends Phaser.Scene {
  // ...
  preload() {
    this.load.image("ball", "img/ball.png");
  }
  // ...
}
```

El primer parámetro le da al recurso el nombre que se usará en todo el código del juego. Por coherencia, usa el mismo nombre que la propiedad correspondiente, que es `ball`. El segundo parámetro es la ruta relativa al recurso gráfico. En nuestro caso, cargaremos la imagen de la pelota. (Ten en cuenta que no hace falta que el archivo se llame `ball`, pero te lo recomendamos, porque así todo es más fácil de seguir).

Por supuesto, para cargar la imagen, esta debe estar disponible en el directorio de tu código. [Descarga la imagen de la pelota de nuestro sitio de recursos](https://mdn.github.io/shared-assets/images/examples/2D_breakout_game_Phaser/ball.png) y guárdala en un directorio `/img`, en el mismo lugar que tu archivo `index.html`.

Ahora, para mostrarla en la pantalla, usaremos otro método de `Phaser.Scene` llamado `add.sprite()`; añade la siguiente línea nueva dentro del método `create()`:

```js
class ExampleScene extends Phaser.Scene {
  // ...
  create() {
    this.ball = this.add.sprite(50, 50, "ball");
  }
  // ...
}
```

Esto añade la pelota al juego y la renderiza en la pantalla. Los dos primeros parámetros son las coordenadas x e y del canvas donde quieres añadirla, y el tercero es el nombre del recurso que definimos antes. Eso es todo: si cargas tu archivo `index.html`, verás la imagen ya cargada y renderizada en el canvas.

## Actualizar la posición de la pelota en cada fotograma

¿Recuerdas el método `update()` y su definición? El código que contiene se ejecuta en cada fotograma, así que es el lugar perfecto para poner el código que actualiza la posición de la pelota en la pantalla. Añade las siguientes líneas nuevas dentro de `update()`, como se muestra:

```js
class ExampleScene extends Phaser.Scene {
  // ...
  update() {
    this.ball.x += 1;
    this.ball.y += 1;
  }
}
```

El código anterior suma 1 a las propiedades `x` e `y` que representan las coordenadas de la pelota en el canvas, en cada fotograma. Recarga `index.html` y deberías ver la pelota rodando por la pantalla.

## Compara tu código

Esto es lo que deberías tener hasta ahora, funcionando en vivo. Para ver su código fuente, haz clic en el botón "Play".

Si no ves la pelota, prueba a recargar la página: probablemente la pelota ya se salió de la pantalla.

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
  }
  update() {
    this.ball.x += 1;
    this.ball.y += 1;
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
};

const game = new Phaser.Game(config);
```

{{EmbedLiveSample("compara tu código", "", 480, , , , , "allow-modals")}}

## Próximos pasos

El siguiente paso es añadir una detección de colisiones básica, para que la pelota rebote en las paredes. Esto requeriría varias líneas de código, un paso bastante más complejo que los que hemos visto hasta ahora, sobre todo si también queremos añadir colisiones con la paleta y los ladrillos; pero, por suerte, Phaser nos permite hacerlo mucho más fácilmente que con JavaScript puro.

En cualquier caso, antes de todo eso, presentaremos los motores de [física](/es/docs/Games/Tutorials/2D_breakout_game_Phaser/Physics) de Phaser y haremos algo de configuración.

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser/Initialize_the_framework", "Games/Tutorials/2D_breakout_game_Phaser/Physics")}}
