---
title: A basic ray-caster
slug: orphaned/Web/API/Canvas_API/A_basic_ray-caster
tags:
  - Avanzado
  - Canvas
  - Ejemplo
  - Espanol(2)
  - Gráficos(2)
  - HTML
  - Necesita traducción
  - Web
translation_of: Web/API/Canvas_API/A_basic_ray-caster
original_slug: Web/API/Canvas_API/A_basic_ray-caster
---
<div>{{CanvasSidebar}}</div>

<div class="summary">
<p>Este artículo proporciona un interesante ejemplo de la vida real usando el elemento {{HTMLElement("canvas")}} para renderizar un sencillo entorno 3D usando una técnica de render llamada ray-casting.</p>
</div>

<p>{{EmbedGHLiveSample("canvas-raycaster/index.html", 900, 300)}}</p>

<p><strong><a href="http://mdn.github.io/canvas-raycaster/">Abrir en una nueva ventana</a></strong></p>

<h2 id="Why.3F" name="Why.3F">¿Por qué?</h2>

<p> </p>

<p>Después de darme cuenta, para mi satisfacción, de que el ingenioso elemento &lt;canvas&gt; sobre el que había estado leyendo, no sólo iba a recibir soporte por parte de Firefox, sino que <strong>ya estaba</strong> soportado por la versión actual de Safari, así que tenía que ponerme manos a la obra y hacer un pequeño experimento.</p>

<p>El <a href="https://developer.mozilla.org/en-US/docs/Canvas_tutorial">tutorial</a> y el <a href="https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API">resumen</a> que encontré en la MDN son geniales, pero nadie había escrito nada (todavía) sobre animación, así que pensé que sería una buena oportunidad para portar un sencillo raycaster en el que había trabajado hacía tiempo y comprobar qué tipo de rendimiento podía esperar de un buffer de pixeles controlado por JavaScript.</p>

<h2 id="How.3F" name="How.3F">¿Cómo?</h2>

<p>La idea es sencilla, usar {{domxref("WindowTimers.setInterval","setInterval()")}} con un retraso arbitrario que se corresponde con la velocidad de fotogramas deseada. Por cada llamada al intervalo se ejecutará una función que volverá a pintar el elemento &lt;canvas&gt;  en el que se muestra la vista actual del usuario. Sé que podría haber empezado con un ejemplo más simple, pero creo que el <a href="/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_animations">tutorial</a> sobre &lt;canvas&gt; vale para eso, y quería ver si podía hacer esto.</p>

<p>Continuemos, por cada actualización, el raycaster comprueba si has presionado alguna tecla, si no has presionado ninguna se mantendrán los cálculos para ahorrar tiempo de ejecución. Si se ha presionado alguna tecla, el &lt;canvas&gt; es borrado, el suelo y el cielo son pintados, la posición y la orientación de la cámara son actualizados, y los rayos son lanzados. Según van intersectando los rayos con las paredes se van pintando líneas verticales de pared del color de la pared con la que han colisionado, mezcladas con una versión más oscura del color en función de la distancia a la que se encuentra la pared. La altura de la línea vertical depende directamente de la distancia a la que el rayo es interesectado, dibujándose centrada con respecto la línea del horizonte.</p>

<p>El código que he terminado usando es una amalgama regurgitada del código que aparece en los capítulos sobre raycasting del libro de André LaMothe <em>Tricks of the Game Programming Gurus</em> y una <a class="external" href="http://www.shinelife.co.uk/java-maze/">versión en java de un raycaster</a> que encontré online, a su vez pasado por el filtro de mi pulsión a renombrar todo para que tenga sentido para mí y todo el chapuceo necesario para que las cosas funcionen bien.</p>

<h2 id="Results" name="Results">Resultados</h2>

<p>El &lt;canvas&gt; en Safari 2.0.1 rindió sorprendentemente bien. Renderizando columnas de 8 pixeles de ancho, puedo correr una ventana de 320 x 240 a 24 FPS en mi Apple Mini. Firefox 1.5 Beta 1 es incluso más rápido; puedo correr una ventana de 320 x 240 a 24 FPS con columnas de 4 píxeles de ancho. No es exactamente un nuevo miembro de la familia de ID Software, pero es bastante decente teniendo en cuenta que es un entorno completamente interpretado, y que no me he tenido que preocupar de reservar memoria, ni modos de vídeo o escribir rutinas en ensamblador. Aún así el código intenta ser lo más eficiente posible, usando tablas de acceso rápido para valores precalculados, pero no soy ningún gurú de la optimización, así que seguramente haya varias cosas que se puedan escribir más rápido.</p>

<p>Además, deja bastante que desear en términos de intentar convertir esto en un motor de juego - no hay texturas en las paredes, no hay sprites, no hay puertas, ni siquiera hay teletransportadores que te permitan ir a otro nivel. Pero tengo bastante confianza en que todas esas cosas se podrían añadir con el suficiente tiempo disponible. La API de canvas soporta copiado de píxeles de imágenes, así que tener texturas parece bastante factible. Dejaré esto para otro artículo, seguramente para otra persona. =)</p>

<h2 id="The_RayCaster" name="The_RayCaster">El ray-caster</h2>

<p>El gente tan maravillosa que hay aquí han copiado manualmente mis archivos así vosotros podéis echarle un <a href="http://mdn.github.io/canvas-raycaster/">vistazo</a>, y para vuestro disfrute he puesto los archivos individuales como listados de código (ver abajo).</p>

<p>¡Así que aquí lo tenéis, arrancad Safari 1.3+ o Firefox 1.5+ o cualquier otro navegador que soporte el elemento <code>&lt;canvas&gt;</code> y a disfrutar!<br>
 <br>
 <small><a href="https://github.com/mdn/canvas-raycaster/blob/master/input.js">input.js</a> | <a href="https://github.com/mdn/canvas-raycaster/blob/master/Level.js">Level.js</a> | <a href="https://github.com/mdn/canvas-raycaster/blob/master/Player.js">Player.js</a> | <a href="https://github.com/mdn/canvas-raycaster/blob/master/index.html">RayCaster.html</a> | <a href="https://github.com/mdn/canvas-raycaster/blob/master/RayCaster.js">RayCaster.js</a> | <a href="https://github.com/mdn/canvas-raycaster/blob/master/trace.css">trace.css</a> | <a href="https://github.com/mdn/canvas-raycaster/blob/master/trace.js">trace.js</a> </small></p>

<h2 id="See_also" name="See_also">Ver también</h2>

<ul>
 <li><a href="/en-US/docs/Web/API/Canvas_API/Tutorial">Tutorial de canvas</a></li>
</ul>
