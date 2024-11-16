---
title: Juego breakout en 2D usando Phaser
slug: Games/Tutorials/2D_breakout_game_Phaser
l10n:
  sourceCommit: e4783c03e39807e0060a2f4df3bf3962d25d8388
---

{{GamesSidebar}}

{{Next("Games/Workflows/2D_Breakout_game_Phaser/Initialize_the_framework")}}

En este tutorial paso a paso, creamos un sencillo juego móvil: **MDN Breakout**, escrito en JavaScript, utilizando el framework [Phaser](https://phaser.io/).

Cada paso tiene muestras editables y en vivo disponibles para jugar, para que puedas ver cómo deberían ser las etapas intermedias. Aprenderás los fundamentos del uso del framework Phaser para implementar mecánicas de juego fundamentales como la renderización y el movimiento de imágenes, la detección de colisiones, los mecanismos de control, las funciones de ayuda específicas del framework, las animaciones y los tweens, y los estados de victoria y derrota.

Para sacar el máximo provecho de esta serie de artículos, deberías tener conocimientos básicos o intermedios de [JavaScript](/es/docs/Learn/Getting_started_with_the_web/JavaScript_basics). Después de terminar este tutorial, deberías ser capaz de construir tus propios juegos web simples con Phaser.

![Pantalla de juego del juego MDN Breakout creado con Phaser en el que se puede utilizar la paleta para hacer rebotar la pelota y destruir el campo de ladrillos, manteniendo registro de los puntos y las vidas](mdn-breakout-phaser.png)

## Detalles de la lección

Todas las lecciones - y las diferentes versiones del [juego MDN Breakout](https://end3r.github.io/Gamedev-Phaser-Content-Kit/demos/lesson16.html) que estamos construyendo juntos - están [disponibles en GitHub](https://end3r.github.io/Gamedev-Phaser-Content-Kit/demos/):

1. [Inicializar el framework](/es/docs/Games/Tutorials/2D_breakout_game_Phaser/Initialize_the_framework)
2. [Escalar](/es/docs/Games/Tutorials/2D_breakout_game_Phaser/Scaling)
3. [Cargar los archivos e imprimirlos en pantalla](/es/docs/Games/Tutorials/2D_breakout_game_Phaser/Load_the_assets_and_print_them_on_screen)
4. [Mover la bola](/es/docs/Games/Tutorials/2D_breakout_game_Phaser/Move_the_ball)
5. [Físicas](/es/docs/Games/Tutorials/2D_breakout_game_Phaser/Physics)
6. [Rebote en las paredes](/es/docs/Games/Tutorials/2D_breakout_game_Phaser/Bounce_off_the_walls)
7. [Paleta y controles del jugador](/es/docs/Games/Tutorials/2D_breakout_game_Phaser/Player_paddle_and_controls)
8. [Fin del juego](/es/docs/Games/Tutorials/2D_breakout_game_Phaser/Game_over)
9. [Construir el campo de ladrillos](/es/docs/Games/Tutorials/2D_breakout_game_Phaser/Build_the_brick_field)
10. [Detección de colisiones](/es/docs/Games/Tutorials/2D_breakout_game_Phaser/Collision_detection)
11. [Puntuación](/es/docs/Games/Tutorials/2D_breakout_game_Phaser/The_score)
12. [Ganar la partida](/es/docs/Games/Tutorials/2D_breakout_game_Phaser/Win_the_game)
13. [Vidas extra](/es/docs/Games/Tutorials/2D_breakout_game_Phaser/Extra_lives)
14. [Animaciones y keyframes intermedios](/es/docs/Games/Tutorials/2D_breakout_game_Phaser/Animations_and_tweens)
15. [Botones](/es/docs/Games/Tutorials/2D_breakout_game_Phaser/Buttons)
16. [Aleatorización del juego](/es/docs/Games/Tutorials/2D_breakout_game_Phaser/Randomizing_gameplay)

Como nota sobre las vías de aprendizaje - comenzar con JavaScript puro es la mejor manera de obtener un conocimiento sólido del desarrollo de juegos web. Si aún no estás familiarizado con el desarrollo de juegos en JavaScript puro, te sugerimos que primero trabajes con la contraparte de esta serie, [Breakout: juego en 2D usando JavaScript puro](/es/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript).

Después de eso, puedes elegir cualquier framework que te guste y usarlo para tus proyectos; nosotros hemos elegido Phaser porque es un buen framework sólido, con un buen soporte y comunidad disponible, y un buen conjunto de plugins. Los frameworks aceleran el tiempo de desarrollo y ayudan a ocuparse de las partes aburridas, permitiéndote concentrarte en las cosas divertidas. Sin embargo, los frameworks no siempre son perfectos, así que si sucede algo inesperado o quieres escribir alguna funcionalidad que el framework no proporciona, necesitarás algunos conocimientos de JavaScript puro.

> [!NOTE]
> Esta serie de artículos puede utilizarse como material para talleres prácticos de desarrollo de juegos. También puedes hacer uso del [Gamedev Phaser Content Kit](https://github.com/end3r/Gamedev-Phaser-Content-Kit) basado en este tutorial si quieres dar una charla sobre desarrollo de juegos con Phaser.

## Próximos pasos

¡Comencemos! Dirígete a la primera parte de la serie - [Inicializar el framework](/es/docs/Games/Tutorials/2D_breakout_game_Phaser/Initialize_the_framework).

{{Next("Games/Workflows/2D_Breakout_game_Phaser/Initialize_the_framework")}}
