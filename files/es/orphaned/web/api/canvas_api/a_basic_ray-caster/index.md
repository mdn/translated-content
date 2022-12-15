---
title: A basic ray-caster
slug: orphaned/Web/API/Canvas_API/A_basic_ray-caster
original_slug: Web/API/Canvas_API/A_basic_ray-caster
---

{{DefaultAPISidebar("Canvas API")}}

Este artículo proporciona un interesante ejemplo de la vida real usando el elemento {{HTMLElement("canvas")}} para renderizar un sencillo entorno 3D usando una técnica de render llamada ray-casting.

{{EmbedGHLiveSample("canvas-raycaster/index.html", 900, 300)}}

**[Abrir en una nueva ventana](http://mdn.github.io/canvas-raycaster/)**

## ¿Por qué?

Después de darme cuenta, para mi satisfacción, de que el ingenioso elemento \<canvas> sobre el que había estado leyendo, no sólo iba a recibir soporte por parte de Firefox, sino que **ya estaba** soportado por la versión actual de Safari, así que tenía que ponerme manos a la obra y hacer un pequeño experimento.

El [tutorial](/es/docs/Canvas_tutorial) y el [resumen](/es/docs/Web/API/Canvas_API) que encontré en la MDN son geniales, pero nadie había escrito nada (todavía) sobre animación, así que pensé que sería una buena oportunidad para portar un sencillo raycaster en el que había trabajado hacía tiempo y comprobar qué tipo de rendimiento podía esperar de un buffer de pixeles controlado por JavaScript.

## ¿Cómo?

La idea es sencilla, usar {{domxref("WindowTimers.setInterval","setInterval()")}} con un retraso arbitrario que se corresponde con la velocidad de fotogramas deseada. Por cada llamada al intervalo se ejecutará una función que volverá a pintar el elemento \<canvas> en el que se muestra la vista actual del usuario. Sé que podría haber empezado con un ejemplo más simple, pero creo que el [tutorial](/es/docs/Web/API/Canvas_API/Tutorial/Basic_animations) sobre \<canvas> vale para eso, y quería ver si podía hacer esto.

Continuemos, por cada actualización, el raycaster comprueba si has presionado alguna tecla, si no has presionado ninguna se mantendrán los cálculos para ahorrar tiempo de ejecución. Si se ha presionado alguna tecla, el \<canvas> es borrado, el suelo y el cielo son pintados, la posición y la orientación de la cámara son actualizados, y los rayos son lanzados. Según van intersectando los rayos con las paredes se van pintando líneas verticales de pared del color de la pared con la que han colisionado, mezcladas con una versión más oscura del color en función de la distancia a la que se encuentra la pared. La altura de la línea vertical depende directamente de la distancia a la que el rayo es interesectado, dibujándose centrada con respecto la línea del horizonte.

El código que he terminado usando es una amalgama regurgitada del código que aparece en los capítulos sobre raycasting del libro de André LaMothe _Tricks of the Game Programming Gurus_ y una [versión en java de un raycaster](http://www.shinelife.co.uk/java-maze/) que encontré online, a su vez pasado por el filtro de mi pulsión a renombrar todo para que tenga sentido para mí y todo el chapuceo necesario para que las cosas funcionen bien.

## Resultados

El \<canvas> en Safari 2.0.1 rindió sorprendentemente bien. Renderizando columnas de 8 pixeles de ancho, puedo correr una ventana de 320 x 240 a 24 FPS en mi Apple Mini. Firefox 1.5 Beta 1 es incluso más rápido; puedo correr una ventana de 320 x 240 a 24 FPS con columnas de 4 píxeles de ancho. No es exactamente un nuevo miembro de la familia de ID Software, pero es bastante decente teniendo en cuenta que es un entorno completamente interpretado, y que no me he tenido que preocupar de reservar memoria, ni modos de vídeo o escribir rutinas en ensamblador. Aún así el código intenta ser lo más eficiente posible, usando tablas de acceso rápido para valores precalculados, pero no soy ningún gurú de la optimización, así que seguramente haya varias cosas que se puedan escribir más rápido.

Además, deja bastante que desear en términos de intentar convertir esto en un motor de juego - no hay texturas en las paredes, no hay sprites, no hay puertas, ni siquiera hay teletransportadores que te permitan ir a otro nivel. Pero tengo bastante confianza en que todas esas cosas se podrían añadir con el suficiente tiempo disponible. La API de canvas soporta copiado de píxeles de imágenes, así que tener texturas parece bastante factible. Dejaré esto para otro artículo, seguramente para otra persona. =)

## El ray-caster

El gente tan maravillosa que hay aquí han copiado manualmente mis archivos así vosotros podéis echarle un [vistazo](http://mdn.github.io/canvas-raycaster/), y para vuestro disfrute he puesto los archivos individuales como listados de código (ver abajo).

¡Así que aquí lo tenéis, arrancad Safari 1.3+ o Firefox 1.5+ o cualquier otro navegador que soporte el elemento `<canvas>` y a disfrutar!

[input.js](https://github.com/mdn/canvas-raycaster/blob/master/input.js) | [Level.js](https://github.com/mdn/canvas-raycaster/blob/master/Level.js) | [Player.js](https://github.com/mdn/canvas-raycaster/blob/master/Player.js) | [RayCaster.html](https://github.com/mdn/canvas-raycaster/blob/master/index.html) | [RayCaster.js](https://github.com/mdn/canvas-raycaster/blob/master/RayCaster.js) | [trace.css](https://github.com/mdn/canvas-raycaster/blob/master/trace.css) | [trace.js](https://github.com/mdn/canvas-raycaster/blob/master/trace.js)

## Ver también

- [Tutorial de canvas](/es/docs/Web/API/Canvas_API/Tutorial)
