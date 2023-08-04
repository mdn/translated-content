---
title: Famoso juego 2D usando JavaScript puro
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript
---

{{GamesSidebar}}

{{Next("Games/Workflows/Famoso_juego_2D_usando_JavaScript_puro/Create_the_Canvas_and_draw_on_it")}}

En este tutorial paso a paso creamos un juego de la MDN, sencillo y muy famoso, escrito íntegramente en JavaScript puro. Todos los elementos gráficos aparecerán dentro de la etiqueta {{htmlelement("canvas")}} de HTML5.

Cada paso tiene ejemplos editables y listos para ejecutar, para que puedas ver qué aspecto debería tener el ejercicio en cada momento. Apenderás a utilizar el elemento {{htmlelement("canvas")}} para implementar mecánicas de juego fundamentales como la representación de imágenes, el movimiento, la detección de colisiones, los mecanismos de control y el final del juego ganando o perdiendo.

Para aprovechar al máximo esta serie de artículos necesitas tener ya un conocimiento básico o intermedio de [JavaScript](/es/Learn/Getting_started_with_the_web/JavaScript_basics). Cuando termines este tutorial serás capaz de construir tus propios juegos Web.

![Gameplay screen from the game MDN Breakout where you can use your paddle to bounce the ball and destroy the brick field, with keeping the score and lives.](mdn-breakout-gameplay.png)

## Detalle de las lecciones

Todas las lecciones y las diferentes versiones del [famoso juego MDN](http://breakout.enclavegames.com/lesson10.html) que estamos construyendo juntos están [disponibles en GitHub](https://github.com/end3r/Canvas-gamedev-workshop):

1. [Crea el lienzo (canvas) y dibuja en él](/es/docs/Games/Workflows/Famoso_juego_2D_usando_JavaScript_puro/Create_the_Canvas_and_draw_on_it)
2. [Mueve la bola](/es/docs/Games/Workflows/Famoso_juego_2D_usando_JavaScript_puro/Mueve_la_bola)
3. [Rebota en las paredes](/es/docs/Games/Workflows/Famoso_juego_2D_usando_JavaScript_puro/Bounce_off_the_walls)
4. [Control de la pala y el teclado](/es/docs/Games/Workflows/Famoso_juego_2D_usando_JavaScript_puro/Control_pala_y_teclado)
5. [Fin del juego](/es/docs/Games/Workflows/Famoso_juego_2D_usando_JavaScript_puro/Fin_del_juego)
6. [Construye el muro de ladrillos](/es/docs/Games/Workflows/Famoso_juego_2D_usando_JavaScript_puro/Construye_grupo_bloques)
7. [Detección de colisiones](/es/docs/Games/Workflows/Famoso_juego_2D_usando_JavaScript_puro/Deteccion_colisiones)
8. [Cuenta los puntos y gana](/es/docs/Games/Workflows/Famoso_juego_2D_usando_JavaScript_puro/Track_the_score_and_win)
9. [Controles del ratón](/es/docs/Games/Workflows/Famoso_juego_2D_usando_JavaScript_puro/Controles_raton)
10. [Finalizando](/es/docs/Games/Workflows/Famoso_juego_2D_usando_JavaScript_puro/Terminando)

Empezar con JavaScript puro es la mejor forma de adquirir un conocimiento sólido sobre desarrollo de juegos. Después, puedes escoger cualquier entorno de desarrollo (framework) que te guste y usarlo para tus proyectos. Los frameworks son simplemente herramientas construidas con el lenguaje JavaScript; por tanto aunque planees trabajar con ellas, es bueno aprender primero sobre el mismo lenguaje para saber exactamente qué es lo que hay por debajo. Los frameworks aceleran el tiempo de desarrollo y ayudan a tener en cuenta las partes aburridas del juego, pero si algo no funciona como esperas, siempre puedes intentar depurarlo o simplemente escribir tu solución en JavaScript puro.

> **Nota:** Si estás interesado en aprender sobre el desarrollo de juegos en 2D usando una entorno de desarrollo, consulta esta serie homóloga, [famoso juego 2D usando Phaser](/es/docs/Games/Workflows/2D_breakout_game_Phaser).

> **Nota:** Esta serie de artículos puede usarse como material para talleres prácticos de desarrollo de juegos. También puedes hacer uso del [kit de contenido canvas Gamedev](/es/docs/) basado en este tutorial si quieres dar una charla sobre desarrollo de juegos en general.

## Siguientes pasos

Vale, ¡vamos a empezar! Dirígete hacia el primer tema — [Crea el lienzo (canvas) y dibuja en él](/es/docs/Games/Workflows/Famoso_juego_2D_usando_JavaScript_puro/Create_the_Canvas_and_draw_on_it).

{{Next("Games/Workflows/Famoso_juego_2D_usando_JavaScript_puro/Create_the_Canvas_and_draw_on_it")}}
