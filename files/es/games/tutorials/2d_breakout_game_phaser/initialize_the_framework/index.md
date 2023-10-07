---
title: Inicializar el framework
slug: Games/Tutorials/2D_breakout_game_Phaser/Initialize_the_framework
---

{{GamesSidebar}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser", "Games/Workflows/2D_Breakout_game_Phaser/Scaling")}}

Este es el primero de los 16 tutoriales para aprender a usar [Gamedev Phaser](/es/docs/Games/Workflows/2D_Breakout_game_Phaser). Luego de completar este tutorial, puede encontrar el código fuente de esta sección en [Gamedev-Phaser-Content-Kit/demos/lesson01.html](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/lesson01.html).

Antes de que podamos comenzar a escribir la funcionalidad del juego, necesitamos crear una estructura básica para procesarlo. Esto podemos hacerlo usando HTML — el framework de Phaser va a generar el elemento {{htmlelement("canvas")}} requerido.

## El HTML del juego

La estructura del elemento HTML es bastante simple, ya que el juego va ser renderizado por completo en el elemento {{htmlelement("canvas")}} generado por el framework. Utilizando su editor de texto favorito, cree un nuevo documento HTML, guárdelo como `index.html`, en una ubicación sensata y agregue el siguiente código:

```html
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Gamedev Phaser Workshop - lesson 01: Initialize the framework</title>
    <style>
      * {
        padding: 0;
        margin: 0;
      }
    </style>
    <script src="js/phaser.min.js"></script>
  </head>
  <body>
    <script>
      var game = new Phaser.Game(480, 320, Phaser.AUTO, null, {
        preload: preload,
        create: create,
        update: update,
      });
      function preload() {}
      function create() {}
      function update() {}
    </script>
  </body>
</html>
```

## Descargando el código de Phaser

A continuación, necesitamos pasar por el proceso de descargar el código fuente de Phaser y aplicarlo a nuestro documento HTML.

1. Ir a la página de descarga del [Phaser download page](http://phaser.io/download/stable).
2. Elegir la opción que mas le convenga — Recomendaría la opción _min.js_ ya que mantiene el codigo más pequeño, y es poco probable que tenga que pasar por el código fuente de todos modos.
3. Guarde el código Phaser dentro de un directorio`/js` en la misma ubicación que su archivo `index.html`.
4. Actualice el valor `src` del primer elemento {{htmlelement("script")}} como se muestra arriba.

## Caminando a través de lo que tenemos hasta ahora

En este punto, tenemos un `charset` definido, {{htmlelement("title")}} y algunos CSS básicos en el encabezado para restablecer el `margin` y el `padding`. También tenemos un elemento {{htmlelement("script")}} para aplicar el código fuente del Phaser a la página. El cuerpo contiene un segundo elemento {{htmlelement("script")}}, donde vamos a escribir el codigo JavaScript para renderizar el juego y controlarlo.

El elemento {{htmlelement("canvas")}} es generado automaticamente por el framework. Estamos inicializandolo creando un nuevo objeto `Phaser.Game` y asignandolo a la variable del juego. Los parametros son:

- El ancho y el alto para configurar el {{htmlelement("canvas")}}.
- El método de renderizado. Las otras tres opciones son `AUTO`, `CANVAS` y `WEBGL`. Podemos establecer uno de los dos últimos explícitamente o usar `AUTO` para dejar que Phaser decida cuál usar. Usualmente usa WebGL si está disponible en el navegador, volviendo a Canvas 2D si no es así.
- El `id` del {{htmlelement("canvas")}} se utilizará para renderizar si ya existe en la pagina (hemos especificado null porque queremos que Phaser cree el suyo propio).
- Los nombres que se usarán para las tres funciones claves del Phaser que cargan e incian el juego, y actualizan el bucle del juego en cada fotograma; usaremos los mismos nombres para mantenerlo limpio.

  - `preload` se encargará de precargar los assets
  - `create` se ejecuta una vez cuando todo está cargado y listo
  - `update` se ejecuta en cada fotograma.

## Compara tu código

Aquí está el código fuente completo de la primera lección, ejecutándose en un JSFiddle:

{{JSFiddleEmbed("https://jsfiddle.net/end3r/h6cwzv2b/","","400")}}

## Pasos siguientes

Ahora hemos configurado el HTML básico y aprendido un poco sobre la inicialización de Phaser, continuemos con la segunda lección y aprendamos sobre [scaling](/es/docs/Games/Workflows/2D_Breakout_game_Phaser/Scaling).

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser", "Games/Workflows/2D_Breakout_game_Phaser/Scaling")}}
