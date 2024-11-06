---
title: Scaling
slug: Games/Tutorials/2D_breakout_game_Phaser/Scaling
---

{{GamesSidebar}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Initialize_the_framework", "Games/Workflows/2D_Breakout_game_Phaser/Load_the_assets_and_print_them_on_screen")}}

Este es el **2do paso** de los 16 del tutorial [Gamedev Phaser tutorial](/es/docs/Games/Workflows/2D_Breakout_game_Phaser). Puede encontrar el código fuente como debería verse luego de completar esta lección en [Gamedev-Phaser-Content-Kit/demos/lesson02.html](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/lesson02.html).

Scaling se refiere a como el lienzo del juego se escalará en diferentes tamaños de pantalla. Podemos hacer que la escala del juego se ajuste automáticamente a cualquier tamaño de pantalla durante la etapa de precarga por lo que no debemos preocuparnos más tarde.

## El objeto scale de Phaser

Hay un objeto especial `scale` disponible en Phaser con algunos métodos prácticos y propiedades disponibles. Actualice su función `preload()` existente de la siguiente manera:

```js
function preload() {
  game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
  game.scale.pageAlignHorizontally = true;
  game.scale.pageAlignVertically = true;
}
```

`scaleMode` tiene algunas opciones diferentes disponibles para ver como se puede escalar el Canvas (lienzo):

- `NO_SCALE` — nada está escalado.
- `EXACT_FIT` — escala el lienzo para llenar todo el espacio disponible tanto vertical como horizontalmente, sin conservar la relación de aspecto.
- `SHOW_ALL` — escala el lienzo, pero mantiene intacta la relación de aspecto, por lo que las imagenes no se verán sesgadas como en el modo anterior. Puede haber franjas negras visibles en los bordes de la pantalla, pero podemos vivir con eso.
- `RESIZE` — creates the canvas with the same size as the available width and height, so you have to place the objects inside your game dynamically; this is more of an advanced mode.
- `USER_SCALE` — le permite tener una escala dinámica personalizada, calculando el tamaño, la escala y la relación por su cuenta; de nuevo, esto es mas un modo avanzado.

Las otras dos lineas de código en la función `preload()` son responsables de alinear el elemento canvas horizontal y verticalmente, por lo que siempre se centra en la pantalla independientemente del tamaño.

## Agregar un color de fondo de lienzo personalizado

También podemos agregar un color de fondo personalizado a nuestro lienzo, por lo que no se mantendrá negro. El objeto `stage` tiene una propiedad `backgroundColor` para este propósito, que podemos establecer usando la sintaxis de definición de color de CSS. Agregue la siguiente línea debajo de las otras tres que agregó anteriormente:

```js
game.stage.backgroundColor = "#eee";
```

## Compara tu código

Puedes verificar el código final de esta lección en la demostración en vivo a continuación, y jugar con la misma para entender mejor como trabaja:

{{JSFiddleEmbed("https://jsfiddle.net/end3r/6a64vecL/","","400")}}

## Pasos siguientes

Ahora que hemos configurado el escalamiento de nuestro juego, continuemos con la tercera lección y descubramos cómo [cargar los assets e imprimirlos en la pantalla](/es/docs/Games/Workflows/2D_Breakout_game_Phaser/Load_the_assets_and_print_them_on_screen).

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Initialize_the_framework", "Games/Workflows/2D_Breakout_game_Phaser/Load_the_assets_and_print_them_on_screen")}}
