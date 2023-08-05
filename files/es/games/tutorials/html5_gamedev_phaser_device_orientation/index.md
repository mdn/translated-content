---
title: Introducción al Desarrollo de Juegos en HTML5 con Phaser y la API de Orientación a Dispositivos
slug: Games/Tutorials/HTML5_Gamedev_Phaser_Device_Orientation
---

{{GamesSidebar}}

## Introducción

En este tutorial iremos a través del proceso de construcción de un juego en HTML5 para móviles que utilizará las _APIs_ de [Orientación para Dispositivos](/es/Apps/Build/gather_and_modify_data/responding_to_device_orientation_changes) y [Vibración](/es/docs/Web/Guide/API/Vibration) para mejorar la jugabilidad y estará construido utilizando el _framework_ [Phaser](http://phaser.io/). Se recomienda tener conocimientos básicos de JavaScript para sacar mayor provecho a este tutorial.

## Ejemplo

Al finalizar este tutorial tendrás un juego _demo_ completamente funcional: [Cyber Orb](http://orb.enclavegames.com/). Se verá más o menos así:

![](cyber-orb.png)

## Phaser framework

[Phaser](http://phaser.io/) es un _framework_ para construir juegos, de móvil o escritorio, en HTML5 . Es nuevo pero está creciendo velozmente gracias a la apasionada comunidad involucrada en el proceso de desarrollo. Puedes chequearlo [en GitHub](https://github.com/photonstorm/phaser) donde se encuentra como _open source._ Lee [la documentación](http://docs.phaser.io/) en línea y recorre su gran colección de [ejemplos](http://examples.phaser.io/). El _framework_ Phaser provee una serie de herramientas que acelerarán el desarrollo y te ayudaran a manejar las tareas genéricas necesarias para completar tu juego, para que así puedas concentrarte en la idea del juego en sí.

## Empezando con el proyecto

Puedes ver [el código fuente de Cyber Orb](https://github.com/EnclaveGames/Cyber-Orb) en GitHub. La estructura de carpetas no es nada complicada: el punto de partida es el archivo `index.html` donde inicializaremos el _framework_ y configuraremos el canvas donde correrá el juego.

![](cyber-orb-github.png)

Puedes hacer clic en el archivo index desde tu navegador favorito para iniciar el juego y probarlo. También hay tres carpetas en el directorio:

- `img`

  : Todas las imágenes que usaremos en el juego.

- `src`

  : Los archivos JavaScript que contienen todo el código fuente del juego definido dentro.

- `audio`

  Los archivos de sonido usados en el juego.

## Configurando el canvas

Vamos a renderizar nuestro juego sobre el elemento `<canvas>`, pero no lo haremos manualmente — de esto se ocupará el _framework._ Vamos a configurarlo: nuestro punto de partida es el archivo `index.html` con el siguiente contenido. Puedes crearlo tú mismo si quieres hacer un seguimiento más detallado:

```html
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Cyber Orb</title>
    <style>
      body {
        margin: 0;
        background: #333;
      }
    </style>
    <script src="src/phaser.min.js"></script>
    <script src="src/Boot.js"></script>
    <script src="src/Preloader.js"></script>
    <script src="src/MainMenu.js"></script>
    <script src="src/Game.js"></script>
  </head>
  <body>
    <script>
      (function () {
        var game = new Phaser.Game(320, 480, Phaser.CANVAS, "game");
        game.state.add("Boot", Ball.Boot);
        game.state.add("Preloader", Ball.Preloader);
        game.state.add("MainMenu", Ball.MainMenu);
        game.state.add("Game", Ball.Game);
        game.state.start("Boot");
      })();
    </script>
  </body>
</html>
```

Hasta ahora tenemos una simple página web `HTML` con el contenido básico en la sección `<head>`: configuración de caracteres, título, estilo y las inclusión de los archivos JavaScripts. El `<body>` contiene la inicialización del framework Phaser y las definiciones del estado del juego.

```js
var game = new Phaser.Game(320, 480, Phaser.CANVAS, "game");
```

La linea de arriba inicializará la intancia de Phaser — los argumentos son el ancho del `<canvas>`, su altura, el método de renderizado (estamos utilizando `CANVAS` pero también existen disponibles las opciones `WEBGL` y `AUTO`) y el ID opcional del contenedor DOM en el que queremos poner el `<canvas>`. Si no hay nada especificado en el último argumento o el elemento no es encontrado, el `<canvas>` será añadido a la etiqueta `<body>`. Sin el _framework_ para añadir el elemento canvas hubieses tenido que escribir algo como esto dentro de la etiqueta `<body>`:

```html
<canvas id="game" width="320" height="480"></canvas>
```

Es importante recordar que el _framework_ está montando métodos útiles para acelerar un montón de cosas como la manipulación de imagenes o la administración de elementos, que serían más difíciles si tuvieramos que hacerlo manualmente.

> **Nota:** Puedes leer este artículo: ["Building Monster Wants Candy"](http://gamedevelopment.tutsplus.com/tutorials/getting-started-with-phaser-building-monster-wants-candy--cms-21723) para una introducción en profundidad a las funciones y métodos específicos de Phaser.

Volviendo a los estados del juego: La linea de abajo añade un nuevo estado al juego llamado `Boot`:

```js
game.state.add("Boot", Ball.Boot);
```

El primer valor es el nombre del estado, el segundo es el objeto al que queremos asignárselo. El metodo `start` está iniciando el estado dado y haciendolo activo. Veamos qué es lo que son los estados realmente.

## Gestionando los estados de juego

Los estados en Phaser son partes separadas de la lógica del juego, en nuestro caso los estamos cargando de archivos JavaScript independientes para un mejor mantenimiento. En este juego tenemos estados básicos: `Boot`, `Preloader`, `MainMenu`, `Howto` y `Game`. `Boot` se hará cargo de la inicialización de algunas opciones de configuración, `Preloader` cargará todos los elementos utilizados como los gráficos y el audio, `MainMenu` es el menu con el botón de inicio, `Howto` muestra las intrucciones de cómo jugar y el estado `Game` es el que finalmente te permite jugar el juego. Veamos rapidamente el contenido de esos estados.

### Boot.js

El estado `Boot` es el primero en el juego.

```js
var Ball = {
  _WIDTH: 320,
  _HEIGHT: 480,
};
Ball.Boot = function (game) {};
Ball.Boot.prototype = {
  preload: function () {
    this.load.image("preloaderBg", "img/loading-bg.png");
    this.load.image("preloaderBar", "img/loading-bar.png");
  },
  create: function () {
    this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.game.scale.pageAlignHorizontally = true;
    this.game.scale.pageAlignVertically = true;
    this.game.state.start("Preloader");
  },
};
```

El objeto principal `Ball` es definido y estamos añadiendo dos variables llamadas `_WIDTH` y `_HEIGHT` esos seran el ancho y la altura del canvas de nuestro juego, respectivamente — nos ayudarán a posicionar los elementos en la pantalla. Estamos cargando dos imagenes primero que serán usadas después en el estado `Preload` para mostrar el progreso de la carga de los demás elementos. La función `create` contiene algunas de las configuraciones básicas: estamos configurando la escala y la alineación del canvas, y avanzando al estado `Preload` cuando todo este listo.

### Preloader.js

El estado `Preloader` se ocupa de cargar todos los elementos:

```js
Ball.Preloader = function (game) {};
Ball.Preloader.prototype = {
  preload: function () {
    this.preloadBg = this.add.sprite(
      (Ball._WIDTH - 297) * 0.5,
      (Ball._HEIGHT - 145) * 0.5,
      "preloaderBg",
    );
    this.preloadBar = this.add.sprite(
      (Ball._WIDTH - 158) * 0.5,
      (Ball._HEIGHT - 50) * 0.5,
      "preloaderBar",
    );
    this.load.setPreloadSprite(this.preloadBar);

    this.load.image("ball", "img/ball.png");
    // ...
    this.load.spritesheet("button-start", "img/button-start.png", 146, 51);
    // ...
    this.load.audio("audio-bounce", [
      "audio/bounce.ogg",
      "audio/bounce.mp3",
      "audio/bounce.m4a",
    ]);
  },
  create: function () {
    this.game.state.start("MainMenu");
  },
};
```

Para crear un nuevo botón tenemos el método `add.button` con la siguiente lista de argumentos opcionales:

- Posición absoluta superior del canvas, en pixeles.
- Posición absoluta izquierda del canvas, en pixeles.
- Nombre del elemento imagen utilizado por el botón.
- Función que será ejecutada cuando alguien haga click sobre el botón.
- El contexto de la ejecución.
- Cuadro (_frame)_ del elemento imagen utilizado para el estado 'hover' del botón (cuando el mouse se encuentra sobre él).
- Cuadro (_frame)_ del elemento imagen utilizado para el estado 'normal' o 'out' del botón.
- Cuadro (_frame)_ del elemento imagen utilizado para el 'click' o 'down' del botón.

El `anchor.set` colocará el punto de ancla en el botón con el cual se realizarán y aplicarán todos los cálculos de posición para el botón. En nuestro caso, está anclado a la mitad del borde izquierdo y al comienzo del borde superior, para así centrarlo de manera horizontal facilmente, sin necesidad de saber su ancho.

Cuando el boton de inicio es presionado, en lugar de saltar directamente a la acción, el juego mostrará la pantalla con las intrucciones para jugar.

### Howto.js

```js
Ball.Howto = function (game) {};
Ball.Howto.prototype = {
  create: function () {
    this.buttonContinue = this.add.button(
      0,
      0,
      "screen-howtoplay",
      this.startGame,
      this,
    );
  },
  startGame: function () {
    this.game.state.start("Game");
  },
};
```

El estado `Howto` muesta las intrucciones de juego en la pantalla antes de comenzar el juego. Luego de clickear la pantalla el juego es lanzado.

### Game.js

El estado `Game` del archivo `Game.js` es donde ocurre toda la magia. Todas las inicializaciones estan en la función `create()` (que se lanza una vez al comienzo del juego). Luego de eso, algunas funcionalidades requeriran más código para controlar — escribiremos nuestras propias funciones para manejar tareas más complicadas. En particular, toma nota de la función `update()` que es ejecutada en cada _frame_ y actualiza cosas como la posición de la pelota.

```js
Ball.Game = function (game) {};
Ball.Game.prototype = {
  create: function () {},
  initLevels: function () {},
  showLevel: function (level) {},
  updateCounter: function () {},
  managePause: function () {},
  manageAudio: function () {},
  update: function () {},
  wallCollision: function () {},
  handleOrientation: function (e) {},
  finishLevel: function () {},
};
```

Las funciones `create` y `update` son específicas del _framework_, mientras que otras seran nuestras propias creaciones:

- `initLevels` inicializa los datos del nivel.
- `showLevel` imprime los datos del nivel en la pantalla.
- `updateCounter` actualiza el tiempo dedicado a jugar cada nivel y registra el tiempo total dedicado al juego.
- `managePause` pausa y reanuda el juego.
- `manageAudio` enciende y apaga el audio.
- `wallCollision` es ejecutado cuando la pelota golpea las paredes u otros objetos.
- `handleOrientation` es la función ligada al evento responsable por la API de orientación de dispositivo, proporciona los controles de movimiento cuando el juego es ejecutado en un dispositivo móvil con el hardware apropiado.
- `finishLevel` carga un nuevo nivel cuando se completa el nivel actual, o termina el juego si se completa el nivel final.

#### Agregando la pelota y sus mecanismos de movimiento

Primero vamos a ir a la función `create()`, inicializamos el objeto `ball` y le asignamos unas cuantas propiedades:

```js
this.ball = this.add.sprite(this.ballStartPos.x, this.ballStartPos.y, "ball");
this.ball.anchor.set(0.5);
this.physics.enable(this.ball, Phaser.Physics.ARCADE);
this.ball.body.setSize(18, 18);
this.ball.body.bounce.set(0.3, 0.3);
```

Aqui estamos agregando un sprite en un lugar de la pantalla y utilizando la imagen de la pelota de los elementos gráficos ya cargados. También estamos configurando el `anchor` (ancla) que realizará los cálculos de física para el centro de la pelota, habilitando el motor de físicas Arcade (que manejara todas las físicas para el movimiento de la pelota), y estableciendo el tamaño del cuerpo para la detección de colisiones. La propiedad `bounce` es utilizada para configurar el 'rebote' de la pelota cuando golpea los obstaculos.

#### Controlando la pelota

Es genial tener lista la pelota para poder lanzarla en la zona del juego, pero también es importante poder realmente moverla! Ahora vamos a añadir la capacidad de controlar con el teclado la pelota en los dispositivos de escritorio, y luego pasaremos a la implementación de la API de Orientación de Dispositivo. Vamos a enfocarnos en el teclado primero añadiendo lo siguiente a la función `create()`:

```js
this.keys = this.game.input.keyboard.createCursorKeys();
```

Como puedes ver, hay una función especial de Phaser llamada `createCursorKeys()` que nos dará un objeto con controladores de evento para las cuatro teclas de flecha, que nos permitira jugar con: arriba, abajo, izquierda y derecha.

A continuación añadiremos el siguiente código a la función `update()`, para que sea ejecutado en cada _frame_. El objeto `this.keys` será chequeado con el input del jugador (las teclas que presione por ejemplo) así la pelota podrá reaccionar acorde, con una fuerza predefinida:

```js
if (this.keys.left.isDown) {
  this.ball.body.velocity.x -= this.movementForce;
} else if (this.keys.right.isDown) {
  this.ball.body.velocity.x += this.movementForce;
}
if (this.keys.up.isDown) {
  this.ball.body.velocity.y -= this.movementForce;
} else if (this.keys.down.isDown) {
  this.ball.body.velocity.y += this.movementForce;
}
```

De esa manera podemos verificar qué tecla es presionada en determinado _frame_ y aplicar la fuerza definida a la pelota, así aumentar la velocidad en la dirección correcta.

#### Implementando la API de Orientación del Dispositivo

Probablemente la parte más interesante del juego es que utiliza la API de Orientación para Dispositivos móviles. Gracias a esto puedes jugar el juego inclinando el dispositivo en la dirección que quieres que la pelota ruede. Aquí está el código de la función `create()` responsable por esto:

```js
window.addEventListener("deviceorientation", this.handleOrientation, true);
```

Vamos a añadir un detector de eventos al evento "`deviceorientation`" y vincularlo a la función `handleOrientation`, se ve como esto:

```js
handleOrientation: function(e) {
    var x = e.gamma;
    var y = e.beta;
    Ball._player.body.velocity.x += x;
    Ball._player.body.velocity.y += y;
}
```

Mientras más inclines el dispositivo, más fuerza se aplica a la pelota y la velocidad en la que se mueve es mayor.

![](cyber-orb-flame-orientation.png)

> **Nota:** Para encontrar más sobre implementar la orientación de los dispositivos y cómo se vé en código crudo, lee [Keep it level: responding to device orientation changes](/es/Apps/Build/gather_and_modify_data/responding_to_device_orientation_changes).

#### Añadiendo el agujero

El principal objetivo del juego es mover la pelota desde la posición inicial a la posición final: un agujero en el suelo. Esta implementación es muy similar a la parte anterior en donde creamos la pelota, y también es añadida en la función `create()` de nuestro estado `Game`:

```js
this.hole = this.add.sprite(Ball._WIDTH * 0.5, 90, "hole");
this.physics.enable(this.hole, Phaser.Physics.ARCADE);
this.hole.anchor.set(0.5);
this.hole.body.setSize(2, 2);
```

La diferencia está en que el cuerpo del agujero se configura como inamovible por lo que no se moverá cuando acertamos con la pelota y tendrá calculada la detección de colisión (esto se tratará más adelante en este artículo).

#### Construyendo el laberinto de bloques

Para hacer más difícil el juego, y más interesante, añadiremos algunos obstaculos entre la pelota y la sálida. Podríamos usar un editor de niveles pero por motivo de este tutorial, vamos a crear algo nosotros mismos.

Para contener el bloque de información usaremos un _array_ con los datos de nivel: para cada bloque almacenaremos las posiciones abolutas izquierda y superior en pixeles (**x** e **y**) y el tipo de bloque: horizontal o vertical (`t` con el valor `'w'` para el ancho, y `'h'` para la altura). Luego, para cargar el nivel analizaremos los datos y mostraremos los bloques especificos para ese nivel. En la función `initLevels` tenemos:

```js
this.levelData = [
  [{ x: 96, y: 224, t: "w" }],
  [
    { x: 72, y: 320, t: "w" },
    { x: 200, y: 320, t: "h" },
    { x: 72, y: 150, t: "w" },
  ],
  // ...
];
```

Todos los elementos del _array_ contienen una colección de bloques con una posición `x` e `y` y un valor `t` para cada uno. Luego de `levelData` pero dentro de la función `initLevels`, añadiremos los bloques dentro de un _array_ en el loop `for` usando algunos de los métodos específicos del _framework_:

```js
for (var i = 0; i < this.maxLevels; i++) {
  var newLevel = this.add.group();
  newLevel.enableBody = true;
  newLevel.physicsBodyType = Phaser.Physics.ARCADE;
  for (var e = 0; e < this.levelData[i].length; e++) {
    var item = this.levelData[i][e];
    newLevel.create(item.x, item.y, "element-" + item.t);
  }
  newLevel.setAll("body.immovable", true);
  newLevel.visible = false;
  this.levels.push(newLevel);
}
```

Primero, `add.group()` es usado para crear un nuevo grupo de items. Luego, el _body tipe_ `ARCADE` se configura para permitir los cálculos de física. El método `newLevel.create` crea nuevos items en el grupo con posiciones superior e izquierda iniciales y su propia imagen. Si no quieres recorrer nuevamente la lista de elementos para agregar una propiedad a cada uno explicitamente, puedes usar `setAll` en un grupo para aplicarlo a todos los items en ese grupo.

Los objetos son almacenados en el _array_ `this.levels`, el cual es por defecto invisible. Para cargar niveles específicos, nos aseguramos de que los niveles previos esten escondidos, y mostramos el nivel actual:

```js
showLevel: function(level) {
    var lvl = level | this.level;
    if(this.levels[lvl-2]) {
        this.levels[lvl-2].visible = false;
    }
    this.levels[lvl-1].visible = true;
}
```

Gracias a eso el juego da al jugador un reto: ahora tiene que rodar la pelota a través del área de juego y guiarla por el laberinto construido por bloques. Es solo un ejemplo de cargar los niveles, y solo hay 5 puramente para mostrar la idea, pero podés trabajar en expandirlo por tu cuenta.

#### Detección de colisión

Hasta este punto tenemos la pelota, que puede ser controlada por el jugador, el agujero que se tiene que alcanzar y los obstáculos que bloquean el camino. Sin embargo, hay un problema: nuestro juego todavía no tiene ninguna detección de colisiones, así que no sucede nada cuando la pelota golpea los bloques, sólo los atraviesa. Vamos a arreglarlo! La buena noticia es que el _framework_ se ocupará de calcular la detección de colisones, nosotros sólo debemos especificar los objetos con los que colisionará en la función `update()`:

```js
this.physics.arcade.collide(
  this.ball,
  this.borderGroup,
  this.wallCollision,
  null,
  this,
);
this.physics.arcade.collide(
  this.ball,
  this.levels[this.level - 1],
  this.wallCollision,
  null,
  this,
);
```

Esto le dirá al _framework_ que ejecute la función `wallCollision` cuando la pelota golpee cualquiera de las paredes. Podemos usar la función `wallCollision` para añadir cualquier funcionalidad que querramos, como por ejemplo agregar el sonido de rebote e implementar la **API de Vibración**.

También debemos volver al objeto pelota y limitarlo a moverse sólo en la zona visible, para que no salga de la pantalla. Hay una función muy útil en Phaser que se llama `collideWorldBounds`:

```js
ball.body.collideWorldBounds = true;
```

Hace exactamente lo que necesitamos: ahora la pelota rebotará en los bordes de la pantalla como de las paredes.

#### Añadiendo el sonido

Entre los elementos precargados hay una pista de audio (en varios formatos para asegurar la compatibilidad con el navegador), que podremos usar ahora. Debe primero ser definida en la función `create()`:

```js
this.bounceSound = this.game.add.audio("audio-bounce");
```

Si el estado del audio es `true` (es decir que el sonido del juego está activado) podremos reproducirlo en la función `wallCollision`:

```js
if (this.audioStatus) {
  this.bounceSound.play();
}
```

Eso es todo: cargar y reproducir sonidos es sencillo con Phaser.

#### Implementando la API de Vibración

Cuando la detección de colisión funcione como es esperado, añadamos algunos efectos especiales con la ayuda de la API de Vibración.![](cyber-orb-flame-vibration.png)

La mejor forma de usarla en nuestro caso es haciendo que el teléfono vibre cada vez que la pelota golpee las paredes: dentro de la función `wallCollision`:

```js
if ("vibrate" in window.navigator) {
  window.navigator.vibrate(100);
}
```

Si el método `vibrate` es soportado por el navegador y está disponible en el objeto `window.navigator`, hará vibrar al telefono por 100 milisegundos. Eso es todo!

#### Añadiendo el tiempo transcurrido

Para mejorar la re-jugabilidad y dar a los jugadores la opción de competir entre ellos, almacenaremos el tiempo transcurrido: los jugadores entonces intentaran mejorar su tiempo de finalizacion. Para implementar esto en el juego tenemos que crear una variable para almacenar el número actual de segundos transcurrido desde el inicio del juego y mostrarselo al jugador durante el juego. Definamos primero las variables en la función `create`:

```js
this.timer = 0; // time elapsed in the current level
this.totalTimer = 0; // time elapsed in the whole game
```

Luego, podemos inicializar los objetos de texto necesarios para mostrar la información al usuario:

```js
this.timerText = this.game.add.text(
  15,
  15,
  "Time: " + this.timer,
  this.fontBig,
);
this.totalTimeText = this.game.add.text(
  120,
  30,
  "Total time: " + this.totalTimer,
  this.fontSmall,
);
```

Estamos definiendo la posición superior e izquierda del texto, el contenido que se muestra y el estilo aplicado al texto. Lo hemos impreso en pantalla, pero sería bueno actualizar los valores cada segundo:

```js
this.time.events.loop(Phaser.Timer.SECOND, this.updateCounter, this);
```

Este bucle, también en la función `create`, ejecutará la función `updateCounter` cada segundo desde el comienzo del juego, así podemos aplicar los cambios acordes. Así es como se ve la función `updateCounter` completa:

```js
updateCounter: function() {
    this.timer++;
    this.timerText.setText("Time: "+this.timer);
    this.totalTimeText.setText("Total time: "+(this.totalTimer+this.timer));
},
```

Como puedes ver estamos incrementando la variable `this.timer` y actualizando el contenido del objeto de texto con el valor actual en cada iteración, por lo que el jugador verá el tiempo transcurrido.

#### Terminando el nivel y el juego

La pelota está rodando en la pantalla, el temporizador funciona y tenemos el agujero al que tenemos que llegar. Vamos a configurar la posibilidad de finalizar el juego! La siguiente linea en la funcion `update()` añade un detector que se activa cuando la pelota llega al agujero.

```js
this.physics.arcade.overlap(this.ball, this.hole, this.finishLevel, null, this);
```

Esto funciona de manera similar al método `colide` explicado anteriormente. Cuando la pelota se superpone con el agujero (en lugar de colisionar), la función `finishLevel` es ejecutada:

```js
finishLevel: function() {
    if(this.level >= this.maxLevels) {
        this.totalTimer += this.timer;
        alert('Congratulations, game completed!\nTotal time of play: '+this.totalTimer+' seconds!');
        this.game.state.start('MainMenu');
    }
    else {
        alert('Congratulations, level '+this.level+' completed!');
        this.totalTimer += this.timer;
        this.timer = 0;
        this.level++;
        this.timerText.setText("Time: "+this.timer);
        this.totalTimeText.setText("Total time: "+this.totalTimer);
        this.levelText.setText("Level: "+this.level+" / "+this.maxLevels);
        this.ball.body.x = this.ballStartPos.x;
        this.ball.body.y = this.ballStartPos.y;
        this.ball.body.velocity.x = 0;
        this.ball.body.velocity.y = 0;
        this.showLevel();
    }
},
```

Si el nivel actual es igual al maximo número de niveles (5, en este caso), entonces el juego termina: recibiras un mensaje de felicitación junto con el numero de segundas transcurridos durante todo el juego, y un botoón para presionar que te llevará al menú principal.

Si el nivel actual es menor que 5, todas las variables necesarias se reinician y el siguiente nivel es cargado.

## Ideas para nuevas características

Esto no es más que una demostración funcional de un juego que podría tener un montón de características adicionales. Por ejemplo podemos añadir poderes para recoger en el camino que harán que nuestra pelota ruede más rápido, otro podría detener el temporizador durante unos segundos o dar la pelota poderes especiales para atravesar obstáculos. También hay espacio para los obstáculos y trampas que harán más lenta la pelota, acelerar el tiempo o trampas de la propia pelota. Puedes crear más niveles con dificultades diferentes para cada uno. Incluso puedes obtener logros, tablas de clasificación y medallas para diferentes acciones en el juego. Hay un sinfín de posibilidades: sólo dependen de tu imaginación.

## Resumen

Espero que este tutorial te ayude a introducirte dentro del desarrollo de los juegos 2D y te inspire a crear asombrosos juegos por tu cuenta. Puedes jugar el demo de Cyber Orb y chequear su código fuente en GitHub.

HTML5 nos da herramientas en bruto, los _frameworks_ construidos sobre estas se están volviendo más rápidos y mejores, por lo que ahora es un gran momento para meterse en el desarrollo de juegos web. En este tutorial usamos Phaser, pero hay un gran número de otros _frameworks_ que vale la pena considerar también, como ImpactJS, Construct 2 o PlayCanvas — depende de tus preferencias, habilidades de programación (o la falta de estas), el tamaño de tu proyecto, los requerimientos y otros aspectos. Deberías chequearlos todos y decidir cual es el que mejor se ajusta a tus necesidades.
