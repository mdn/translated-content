---
title: Inicializar el canvas
slug: Games/Tutorials/2D_breakout_game_pure_JavaScript/Initialize_the_canvas
l10n:
  sourceCommit: 69937a446786abf5a58d4214b4192597d0b3cdc6
---

{{PreviousNext("Games/Tutorials/2D_breakout_game_pure_JavaScript", "Games/Tutorials/2D_breakout_game_pure_JavaScript/Move_the_ball")}}

Este es el **paso 1** de los 11 del [tutorial para crear un juego Breakout con JavaScript puro](/es/docs/Games/Tutorials/2D_breakout_game_pure_JavaScript). Antes de empezar a escribir la funcionalidad del juego, necesitamos crear una estructura básica para renderizarlo. Esto se hace con el elemento {{htmlelement("canvas")}}.

## El HTML del juego

El juego se renderizará por completo en el elemento {{htmlelement("canvas")}} generado por el framework. Con tu editor de texto favorito, crea un documento HTML nuevo, guárdalo como `index.html` en un lugar adecuado y añádele el código siguiente:

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
    <script src="js/script.js" defer></script>
  </head>
  <body>
    <canvas id="game-canvas" width="480" height="320"></canvas>
  </body>
</html>
```

A continuación, crea un directorio `js` nuevo en el mismo lugar que tu archivo `index.html` y, dentro de él, un archivo nuevo llamado `script.js`. Ahí escribiremos el código JavaScript que controla el juego. Al principio debe contener lo siguiente:

```js
const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "#eeeeee";
ctx.fillRect(0, 0, canvas.width, canvas.height);
```

## Repaso de lo que tenemos hasta ahora

En la cabecera del documento tenemos un `charset`, un {{htmlelement("title")}}, algo de CSS básico para restablecer el `margin` y el `padding` predeterminados, y un elemento {{htmlelement("script")}} que hace referencia al código JavaScript que escribiremos para renderizar el juego y controlarlo.

El elemento {{htmlelement("canvas")}} es donde realmente se renderiza el juego. Al principio está vacío y ocupa 480x320 píxeles. Usamos {{domxref("HTMLCanvasElement.getContext()")}} para obtener el {{domxref("CanvasRenderingContext2D")}}, que nos permite dibujar formas 2D en el canvas, y hacemos que rellene todo el espacio del canvas con un color gris muy claro.

## Escalado

Por ahora, el canvas ocupa una cantidad fija de espacio en la pantalla. En una pantalla grande (como la de un portátil) queda en una esquina pequeña; en una pantalla pequeña (como la de un teléfono, ¡aunque tendría que ser un teléfono realmente pequeño!) se desborda. Podemos hacer que el juego se adapte a cualquier tamaño de pantalla haciendo que el canvas sea adaptable, para no tener que preocuparnos por ello más adelante. Ampliaremos o reduciremos el canvas de forma que:

1. Se conserve su relación de aspecto
2. Su ancho sea igual al ancho de la ventana o su alto sea igual al alto de la ventana
3. La otra dimensión no se desborde

Para ello, añadimos el siguiente CSS al elemento `<style>` de `index.html`:

```css
body {
  min-height: 100vh;
  display: grid;
  place-items: center;
}

canvas {
  display: block;
  width: min(100vw, 150vh);
  height: auto;
}
```

El canvas tiene una relación de aspecto de 480 / 320, es decir, 3:2. Para caber en la ventana, su ancho no debe superar el ancho de la ventana (`100vw`) ni 1,5 veces el alto de la ventana (`150vh`). La función CSS {{CSSxRef("min()")}} elige el menor de estos dos valores. Con `height: auto`, el alto sigue la relación de aspecto del canvas, así que las dos dimensiones caben en la ventana. El cuerpo ocupa como mínimo el alto de la ventana y usa `place-items: center` para centrar el canvas tanto en horizontal como en vertical.

Este CSS cambia el tamaño con el que se muestra el canvas, mientras que sus atributos HTML `width` y `height` mantienen el área de dibujo en 480×320 píxeles. Por eso podemos seguir usando las mismas coordenadas en nuestro JavaScript, sea cual sea el tamaño de la ventana. El navegador escala la imagen resultante para ajustarla al tamaño mostrado.

## Ejecutar la aplicación

Para ejecutar la aplicación, puedes abrir directamente el archivo `index.html`, pero te recomendamos un servidor web local por si queremos cargar recursos externos, que el navegador bloquearía por la [política del mismo origen](/es/docs/Web/Security/Defenses/Same-origin_policy).

Consulta los [tutoriales para configurar un servidor local](/es/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server) y usa la opción que prefieras. Por ejemplo, si eliges el servidor HTTP de Python, abre una terminal, ve al directorio donde está tu archivo `index.html` y ejecuta el comando siguiente:

```bash
python3 -m http.server
```

Esto inicia un servidor HTTP sencillo en el puerto 8000. Después, abre tu navegador web y ve a `http://localhost:8000/index.html`.

## Compara tu código

Esto es lo que deberías tener hasta ahora, funcionando en vivo. Para ver su código fuente, haz clic en el botón "Play".

Todavía no hay nada que ver, aparte del fondo gris claro del canvas.

```html hidden
<canvas id="game-canvas" width="480" height="320"></canvas>
```

```css hidden
* {
  padding: 0;
  margin: 0;
}

body {
  min-height: 100vh;
  display: grid;
  place-items: center;
}

canvas {
  display: block;
  width: min(100vw, 150vh);
  height: auto;
}
```

```js hidden
const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "#eeeeee";
ctx.fillRect(0, 0, canvas.width, canvas.height);
```

{{EmbedLiveSample("compara tu código", "", 480, , , , , "allow-modals")}}

## Próximos pasos

Ahora que ya tenemos el HTML básico, pasemos a la segunda lección y veamos cómo [renderizar una pelota y moverla](/es/docs/Games/Tutorials/2D_breakout_game_pure_JavaScript/Move_the_ball).

{{PreviousNext("Games/Tutorials/2D_breakout_game_pure_JavaScript", "Games/Tutorials/2D_breakout_game_pure_JavaScript/Move_the_ball")}}
