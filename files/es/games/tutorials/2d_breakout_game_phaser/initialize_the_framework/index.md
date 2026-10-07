---
title: Inicializar el framework
slug: Games/Tutorials/2D_breakout_game_Phaser/Initialize_the_framework
l10n:
  sourceCommit: 69937a446786abf5a58d4214b4192597d0b3cdc6
---

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser", "Games/Tutorials/2D_breakout_game_Phaser/Move_the_ball")}}

Este es el **primer paso** de los 12 del [tutorial para crear un juego Breakout con Phaser](/es/docs/Games/Tutorials/2D_breakout_game_Phaser). Antes de empezar a escribir la funcionalidad del juego, necesitamos crear una estructura básica para renderizarlo. Esto se hace inicializando el framework Phaser en un documento HTML básico: Phaser generará el elemento {{htmlelement("canvas")}} necesario.

## El HTML del juego

El juego se renderizará por completo en el elemento {{htmlelement("canvas")}} que genera el framework. Con tu editor de texto favorito, crea un documento HTML nuevo, guárdalo como `index.html` en una ubicación adecuada y añádele el siguiente código:

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <title>Juego Breakout</title>
    <style>
      * {
        padding: 0;
        margin: 0;
      }
    </style>
    <script src="js/phaser.min.js"></script>
    <script src="js/script.js" defer></script>
  </head>
  <body></body>
</html>
```

A continuación, crea un directorio `js` nuevo en la misma ubicación que tu archivo `index.html`, y dentro de él crea un archivo nuevo llamado `script.js`. Aquí escribiremos el código JavaScript que controla el juego. Al principio debe contener lo siguiente:

```js
class ExampleScene extends Phaser.Scene {
  preload() {}
  create() {}
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
};

const game = new Phaser.Game(config);
```

## Descargar el código de Phaser

Después, tenemos que descargar el código fuente de Phaser y aplicarlo a nuestro documento HTML. Este tutorial usa Phaser v3 (la v3.90.0 en el momento de escribir esto, aunque las versiones menores más recientes deberían funcionar igual).

1. Ve a la [página de descargas de Phaser](https://phaser.io/download/stable).
2. Elige la opción que mejor te convenga; te recomendamos la opción _phaser.min.js_, porque mantiene el código fuente más pequeño y es poco probable que vayas a revisarlo de todos modos.
3. Guarda el código de Phaser en el directorio `js`. Si usas otro nombre de archivo, asegúrate de actualizar en consecuencia el valor `src` del primer elemento {{htmlelement("script")}} del HTML.

## Repaso de lo que tenemos hasta ahora

En el encabezado del documento tenemos un `charset`, un {{htmlelement("title")}}, algo de CSS básico para restablecer los valores predeterminados de `margin` y `padding`, y dos elementos {{htmlelement("script")}}. Uno aplica el código fuente de Phaser a la página; el otro hace referencia al código JavaScript que escribiremos para renderizar el juego y controlarlo.

El framework genera automáticamente el elemento {{htmlelement("canvas")}}. Lo inicializamos creando un objeto `Phaser.Game` nuevo y asignándolo a la variable `game`. Los parámetros son:

- El método de renderizado. Las opciones disponibles son `AUTO`, `CANVAS`, `WEBGL` y `HEADLESS`. Podemos establecer explícitamente `CANVAS` o `WEBGL`, o usar `AUTO` para que Phaser decida cuál usar. Normalmente usa WebGL si está disponible en el navegador y, si no, recurre a Canvas 2D. La última opción, `HEADLESS`, se usa para el renderizado del lado del servidor o para pruebas, y no es relevante en este tutorial.
- El ancho y el alto que se asignan al {{htmlelement("canvas")}}.
- La escena que se añade al juego. En este caso, creamos una clase nueva llamada `ExampleScene` que extiende `Phaser.Scene`. Esta clase implementa los métodos a los que Phaser llama en distintas etapas del ciclo de vida del juego. Más adelante iremos completando estos métodos:
  - `preload` se encarga de precargar los recursos
  - `create` se ejecuta una vez, cuando todo está cargado y listo
  - `update` se ejecuta en cada fotograma.
- Cómo se escalará el canvas del juego. Aquí, `mode: Phaser.Scale.FIT` escala el canvas para que ocupe el espacio disponible sin alterar la relación de aspecto. Según la relación de aspecto, puede que no cubra todo el espacio. La otra propiedad, `autoCenter`, se encarga de alinear el elemento canvas horizontal y verticalmente, de modo que el canvas siempre quede centrado en la pantalla, sea cual sea su tamaño.
- El color de fondo, que es un gris claro en lugar del negro predeterminado.

## Ejecutar la aplicación

Para ejecutar la aplicación no puedes abrir directamente el archivo `index.html`, porque más adelante cargaremos recursos externos, y el navegador los bloquearía por la [política del mismo origen](/es/docs/Web/Security/Defenses/Same-origin_policy).

Para resolverlo, necesitas ejecutar un servidor web local que sirva los archivos HTML y las imágenes. [Como sugiere la documentación oficial de Phaser](https://docs.phaser.io/phaser/getting-started/set-up-dev-environment#installing-a-web-server), hay muchas opciones para ejecutar un servidor web local. También tenemos nuestros propios [tutoriales para configurar un servidor local](/es/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server); usa la opción que prefieras. Por ejemplo, si eliges el servidor HTTP de Python, abre una terminal, ve al directorio donde está tu archivo `index.html` y ejecuta el siguiente comando:

```bash
python3 -m http.server
```

Esto iniciará un servidor HTTP sencillo en el puerto 8000. Después, abre tu navegador web y ve a `http://localhost:8000/index.html`.

## Compara tu código

Esto es lo que deberías tener hasta ahora, funcionando en vivo. Para ver su código fuente, haz clic en el botón "Play".

Todavía no hay nada que ver aquí, aparte del fondo gris claro del canvas.

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
  preload() {}
  create() {}
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
};

const game = new Phaser.Game(config);
```

{{EmbedLiveSample("compara tu código", "", 480, , , , , "allow-modals")}}

## Siguientes pasos

Ahora que hemos preparado el HTML básico y aprendido un poco sobre la inicialización de Phaser, sigamos con la segunda lección y veamos cómo [renderizar una pelota y moverla](/es/docs/Games/Tutorials/2D_breakout_game_Phaser/Move_the_ball).

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser", "Games/Tutorials/2D_breakout_game_Phaser/Move_the_ball")}}
