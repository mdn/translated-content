---
title: Move the ball
slug: Games/Tutorials/2D_breakout_game_Phaser/Move_the_ball
---

{{GamesSidebar}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Load_the_assets_and_print_them_on_screen", "Games/Workflows/2D_Breakout_game_Phaser/Physics")}}

Este es el **4º** paso sobre 16 del tutorial [Gamedev Phaser](/es/docs/Games/Workflows/2D_Breakout_game_Phaser). Puedes encontrar el código fuente tal y como quedaría al completar la lección en [Gamedev-Phaser-Content-Kit/demos/lesson04.html](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/lesson04.html).

Tenemos a nuestra pelota azul pintada en la pantalla, pero sin hacer nada — Estaría bien hacerla moverse de algún modo. Este artículo muestra como hacerlo.

## Actualizando la posición de la pelota en cada marco

¿Recuerdas la función `update()` y su definición? El código del interior del cuadro se ejecuta en cada cuadro, así que ese es el mejor lugar para colocar el código que actualiza la posición de la pelota en la pantalla. Añade las siguientes lineas a la función `update()`, como se muestra a continuación:

```js
function update() {
  ball.x += 1;
  ball.y += 1;
}
```

El código de arriba incrementa en 1 las propiedades `x` e `y` , las cuales representan las coordenadas de la pelota en el lienzo, en cada cuadro. Vuelve a cargar el index.html y deberías ver la pelota rodando a través de la pantalla.

## Compara tú código

Puedes comprobar el código terminado de esta lección en la demo de abajo, y jugar para entender mejor cómo funciona:

{{JSFiddleEmbed("https://jsfiddle.net/end3r/g1cfp0vv/","","400")}}

## Próximos pasos

El siguiente paso es añadir una detección básica de colisión, para que la pelota pueda rebotar con las paredes.Esto nos llevará unas cuántas líneas de código — un paso significativamente más complejo que lo que hemos visto hasta ahora especialmente si queremos añadir la paleta y colisiones con los ladrillos — pero afortunadamente Phaser nos permite hacerlo de una forma mucho más sencilla que si lo quisieramos hacer usando JavaScript puro.

En cualquier caso, antes de hacer todo esto debemos introducir los motores de Física de Phaser y hacer un poco de trabajo de configuración.

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Load_the_assets_and_print_them_on_screen", "Games/Workflows/2D_Breakout_game_Phaser/Physics")}}
