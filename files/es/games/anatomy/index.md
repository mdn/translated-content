---
title: Anatomía de un videojuego
slug: Games/Anatomy
l10n:
  sourceCommit: 4b9fefebc6d21e003c8f31b40d98136a7a4b5a95
---

{{GamesSidebar}}

Este artículo examina la anatomía y el flujo de trabajo de un videojuego promedio desde un punto de vista técnico, en términos de cómo debe ejecutarse el bucle principal. Ayuda a los principiantes en el desarrollo de videojuegos modernos a entender qué se necesita para crear un juego y cómo los estándares web como JavaScript se prestan a ser herramientas. Los programadores de juegos experimentados que son nuevos en el desarrollo web también podrían beneficiarse.

## Presentar, aceptar, interpretar, calcular, repetir

El objetivo de todo videojuego es **presentar** al usuario o usuarios una situación, **aceptar** sus entradas, **interpretar** esas señales en acciones y **calcular** una nueva situación resultante de esas acciones. Los juegos pasan constantemente por estas fases, una y otra vez, hasta que se produce alguna condición final (como ganar, perder o irse a la cama). No es sorprendente que este patrón se corresponda con el modo en que se programa un motor de juego.

Los detalles dependen del juego.

Algunos juegos controlan este ciclo mediante la entrada de datos del usuario. Imagina que estás desarrollando un juego del tipo "encuentra las diferencias entre estas dos imágenes similares". Estos juegos **presentan** dos imágenes al usuario; **aceptan** su clic (o toque); **interpretan** la entrada como un éxito, fracaso, pausa, interacción de menú, etc.; finalmente, **calculan** una escena actualizada resultante de esa entrada. El bucle del juego avanza por la entrada del usuario y duerme hasta que éste la proporciona. Se trata más bien de un enfoque por turnos que no exige una actualización constante en cada fotograma, sino sólo cuando el jugador reacciona.

Otros juegos exigen el control de cada uno de los menores intervalos de tiempo posibles. Se aplican los mismos principios anteriores con un ligero giro: cada fotograma de animación hace avanzar el ciclo y cualquier cambio en la entrada del usuario se capta en el primer turno disponible. Este modelo de una vez por fotograma se implementa en algo llamado **bucle principal**. Si tu juego hace un bucle basado en el tiempo, entonces esta será la autoridad a la que se adherirán tus simulaciones.

Pero puede que no necesite control por fotograma. Tu bucle de juego podría ser similar al ejemplo de _encuentra las diferencias_ y basarse en eventos de entrada. Podría requerir tanto la entrada como el tiempo simulado. Incluso podría basarse en algo completamente distinto.

El JavaScript moderno -como se describe en las siguientes secciones- facilita el desarrollo de un bucle principal eficiente, que se ejecuta una vez por fotograma. Por supuesto, tu juego sólo estará tan optimizado como tú lo hagas. Si algo parece que debería estar unido a un evento más infrecuente, entonces a menudo es una buena idea sacarlo del bucle principal (pero no siempre).

## Creación de un bucle principal en JavaScript

JavaScript funciona mejor con eventos y funciones callback. Los navegadores modernos se esfuerzan por llamar a los métodos justo cuando se necesitan y se quedan inactivos (o hacen sus otras tareas) en los huecos. Es una excelente idea adjuntar su código a los momentos adecuados para ellos. Piensa si tu función realmente necesita ser llamada en un intervalo de tiempo estricto, cada frame, o sólo después de que ocurra algo más. Ser más específico con el navegador sobre cuando tu función necesita ser llamada permite al navegador optimizar cuando es llamada. Además, probablemente hará tu trabajo más fácil.

Algún código necesita ejecutarse fotograma a fotograma, así que ¿por qué adjuntar esa función a otra cosa que no sea el programa de redibujado del navegador? En la Web, `{{ domxref("window.requestAnimationFrame()") }}` será la base de la mayoría de los bucles principales por fotograma bien programados. Se le debe pasar una función callback cuando es llamada. Esa función callback se ejecutará en un momento adecuado antes del siguiente repintado. He aquí un ejemplo de un bucle principal simple:

```js
window.main = () => {
  window.requestAnimationFrame(main);

  // Lo que tenga que hacer tu bucle principal
};

main(); // Iniciar el ciclo
```

> **Nota:** En cada uno de los métodos `main()` discutidos aquí, programamos un nuevo `requestAnimationFrame` antes de realizar el contenido de nuestro bucle. Esto no es accidental y se considera la mejor práctica. Llamar al siguiente `requestAnimationFrame` antes de tiempo asegura que el navegador lo recibe a tiempo para planificar en consecuencia incluso si tu frame actual pierde su ventana VSync.

El fragmento de código anterior tiene dos sentencias. La primera crea una función como variable global llamada `main()`. Esta función hace algo de trabajo y también le dice al navegador que se llame a sí mismo al siguiente frame con `window.requestAnimationFrame()`. La segunda sentencia llama a la función `main()`, definida en la primera sentencia. Debido a que `main()` es llamada una vez en la segunda sentencia y cada llamada se coloca en la cola de cosas a hacer en el siguiente frame, `main()` está sincronizada con tu tasa de frames.

Por supuesto, este bucle no es perfecto. Antes de discutir formas de cambiarlo, vamos a discutir lo que ya hace bien.

Programar el bucle principal para cuando el navegador pinte en la pantalla te permite ejecutar tu bucle tan frecuentemente como el navegador quiera pintar. Tienes el control sobre cada cuadro de la animación. También es muy simple porque `main()` es la única función que se ejecuta en bucle. Un juego de disparos en primera persona (o un juego similar) presenta una nueva escena una vez cada fotograma. Realmente no se puede ser más suave y sensible que eso.

Pero no asuma inmediatamente que las animaciones requieren un control fotograma a fotograma. Las animaciones sencillas pueden realizarse fácilmente, incluso aceleradas por GPU, con animaciones CSS y otras herramientas incluidas en el navegador. Hay muchas y te harán la vida más fácil.

## Crear un bucle principal mejor en JavaScript

Hay dos problemas obvios con nuestro bucle principal anterior: `main()` contamina el objeto `{{ domxref("window") }}` (donde se almacenan todas las variables globales) y el código de ejemplo no nos deja una forma de _detener_ el bucle a menos que se cierre o actualice toda la pestaña. Para el primer problema, si quieres que el bucle principal sólo se ejecute y no necesitas un acceso fácil (directo) a él, podrías crearlo como una Expresión de Función Inmediatamente Invocada (IIFE).

<!-- prettier-ignore-start -->
```js
/*
 * Empezar con el punto y coma es en caso de que cualquier línea de código por encima
 * de este ejemplo se basó en la inserción automática de punto y coma (ASI). El navegador
 * podría pensar accidentalmente que todo este ejemplo continúa desde la línea anterior.
 * El punto y coma inicial marca el comienzo de nuestra nueva línea si la anterior no
 * estaba vacía o terminada.
 */

;(() => {
  function main() {
    window.requestAnimationFrame(main);

    // Contenido del bucle principal
  }

  main(); // Inicio del ciclo
})();
```
<!-- prettier-ignore-end -->

Cuando el navegador se encuentre con este IIFE, definirá tu bucle principal e inmediatamente lo pondrá en cola para el siguiente frame. No se adjuntará a ningún objeto y `main` (o `main()` para métodos) será un nombre válido sin usar en el resto de la aplicación, libre para ser definido como otra cosa.

> **Nota:** En la práctica, es más común prevenir la siguiente `requestAnimationFrame()` con una sentencia `if`, en lugar de llamar a `cancelAnimationFrame()`.

Para el segundo problema, detener el bucle principal, tendrá que cancelar la llamada a `main()` con `{{ domxref("window.cancelAnimationFrame()") }}`. Usted tendrá que pasar `cancelAnimationFrame()` el ID token dado por `requestAnimationFrame()` cuando fue llamado por última vez. Supongamos que las funciones y variables de tu juego están construidas sobre un espacio de nombres que has llamado `MiJuego`. Ampliando nuestro último ejemplo, el bucle principal ahora se vería así:

<!-- prettier-ignore-start -->
```js
/*
 * Empezar con el punto y coma es en caso de que cualquier línea de código por encima
 * de este ejemplo se basó en la inserción automática de punto y coma (ASI). El navegador
 * podría pensar accidentalmente que todo este ejemplo continúa desde la línea anterior.
 * El punto y coma inicial marca el comienzo de nuestra nueva línea si la anterior no
 * estaba vacía o terminada.
 *
 * Supongamos también que MyGame está previamente definido.
 */

;(() => {
  function main() {
    MyGame.stopMain = window.requestAnimationFrame(main);

    // Contenido del bucle principal
  }

  main(); // Inicio del ciclo
})();
```
<!-- prettier-ignore-end -->

Ahora tenemos una variable declarada en nuestro espacio de nombres `MyGame`, a la que llamamos `stopMain`, que contiene el ID devuelto por la última llamada de nuestro bucle principal a `requestAnimationFrame()`. En cualquier momento, podemos detener el bucle principal diciéndole al navegador que cancele la petición que corresponde a nuestro token.

```js
window.cancelAnimationFrame(MyGame.stopMain);
```

La clave para programar un bucle principal, en JavaScript, es adjuntarlo a cualquier evento que debería estar impulsando su acción y prestar atención a cómo interactúan los diferentes sistemas involucrados. Es posible que tenga varios componentes controlados por varios tipos diferentes de eventos. Esto parece una complejidad innecesaria, pero podría ser una buena optimización (no necesariamente, por supuesto). El problema es que no estás programando un típico bucle principal. En JavaScript, usted está utilizando el bucle principal del navegador y está tratando de hacerlo de manera efectiva.

## Crear un bucle principal más optimizado en JavaScript

En última instancia, en JavaScript, el navegador está ejecutando su propio bucle principal y tu código existe en algunas de sus etapas. Las secciones anteriores describen bucles principales que intentan no arrebatar el control al navegador. Estos métodos principales se unen a `window.requestAnimationFrame()`, que pide al navegador el control sobre el siguiente frame. Depende del navegador cómo relacionar estas peticiones con su bucle principal. La [especificación del W3C para requestAnimationFrame](https://www.w3.org/TR/animation-timing/) no define exactamente cuándo los navegadores deben realizar las llamadas de retorno a `requestAnimationFrame`. Esto puede ser una ventaja porque deja a los proveedores de navegadores libertad para experimentar con las soluciones que consideren mejores y ajustarlas con el tiempo.

Las versiones modernas de Firefox y Google Chrome (y probablemente otras) _intentan_ conectar las retrollamadas de `requestAnimationFrame` a su hilo principal al principio del _timeslice_ de un fotograma. El hilo principal del navegador _intenta_ parecerse a lo siguiente:

1. Iniciar un nuevo fotograma (mientras el fotograma anterior es manejado por la pantalla).
2. Recorre la lista de callbacks de `requestAnimationFrame` e invócalos.
3. Realizar la recolección de basura y otras tareas por fotograma cuando los callbacks anteriores dejan de controlar el hilo principal.
4. Duerme (a menos que un evento interrumpa la siesta del navegador) hasta que el monitor esté listo para tu imagen ([VSync](https://www.techopedia.com/definition/92/vertical-sync-vsync)) y repite.

Puedes pensar en el desarrollo de aplicaciones en tiempo real como si tuvieras un presupuesto de tiempo para hacer el trabajo. Todos los pasos anteriores deben tener lugar cada 16 milisegundos y medio para mantener el ritmo de una pantalla de 60 Hz. Los navegadores invocan tu código lo antes posible para darle el máximo tiempo de cálculo. Tu hilo principal a menudo iniciará cargas de trabajo que ni siquiera están en el hilo principal (como la rasterización o los shaders en WebGL). Los cálculos largos pueden realizarse en un Web Worker o una GPU al mismo tiempo que el navegador utiliza su hilo principal para gestionar la recolección de basura, sus otras tareas, o manejar eventos asíncronos.

Ya que estamos en el tema de presupuestar el tiempo, muchos navegadores web tienen una herramienta llamada _High Resolution Time_. El objeto {{jsxref("Date")}} ya no es el método reconocido para cronometrar eventos porque es muy impreciso y puede ser modificado por el reloj del sistema. _High Resolution Time_, por otro lado, cuenta el número de milisegundos desde `navigationStart` (cuando se descarga el documento anterior). Este valor se devuelve como un número decimal con una precisión de una milésima de milisegundo. Se conoce como {{ domxref("DOMHighResTimeStamp") }} pero, a todos los efectos, considérelo un número de coma flotante.

> **Nota:** Los sistemas (hardware o software) que no son capaces de precisión de microsegundos se les permite proporcionar precisión de milisegundos como mínimo. Sin embargo, deben proporcionar una precisión de 0,001 ms si son capaces de ello.

Este valor no es demasiado útil por sí solo, ya que es relativo a un evento bastante poco interesante, pero puede restarse de otra marca de tiempo para determinar con exactitud y precisión cuánto tiempo transcurrió entre esos dos puntos. Para adquirir una de estas marcas de tiempo, puede llamar a `window.performance.now()` y almacenar el resultado como una variable.

```js
const tNow = window.performance.now();
```

Volviendo al tema del bucle principal. A menudo querrás saber cuándo fue invocada tu función principal. Debido a que esto es común, `window.requestAnimationFrame()` siempre proporciona un `DOMHighResTimeStamp` a los callbacks como argumento cuando se ejecutan. Esto nos lleva a otra mejora de nuestros bucles principales anteriores.

<!-- prettier-ignore-start -->
```js
/*
 * Empezar con el punto y coma es en caso de que cualquier línea de código por encima
 * de este ejemplo se basó en la inserción automática de punto y coma (ASI). El navegador
 * podría pensar accidentalmente que todo este ejemplo continúa desde la línea anterior.
 * El punto y coma inicial marca el comienzo de nuestra nueva línea si la anterior no estaba
 * vacía o terminada.
 *
 * Supongamos también que MyGame está previamente definido.
 */

;(() => {
  function main(tFrame) {
    MyGame.stopMain = window.requestAnimationFrame(main);

    // Contenido del bucle principal
    // tFrame, de "function main(tFrame)", es ahora un DOMHighResTimeStamp proporcionado por rAF.
  }

  main(); // Inicio del ciclo
})();
```
<!-- prettier-ignore-end -->

Hay otras optimizaciones posibles y todo depende de lo que intente conseguir tu juego. El género de tu juego obviamente marcará la diferencia, pero podría ser incluso más sutil que eso. Podrías dibujar cada píxel individualmente en un lienzo o podrías superponer elementos DOM (incluyendo múltiples lienzos WebGL con fondos transparentes si quieres) en una jerarquía compleja. Cada uno de estos caminos dará lugar a diferentes oportunidades y limitaciones.

## Es hora de... decidir

Tendrás que tomar decisiones difíciles sobre tu bucle principal: cómo simular el progreso preciso del tiempo. Si usted exige un control por fotograma, entonces tendrá que determinar la frecuencia con la que su juego se actualizará y dibujará. Incluso es posible que desee que la actualización y el dibujo se produzcan a diferentes velocidades. También tendrás que considerar cómo de elegante fallará tu juego si el sistema del usuario no puede mantener la carga de trabajo. Empecemos asumiendo que manejarás la entrada del usuario y actualizarás el estado del juego cada vez que dibujes. Más adelante nos extenderemos.

> **Nota:** Cambiar cómo tu bucle principal trata el tiempo es una pesadilla de depuración, en todas partes. Piense en sus necesidades cuidadosamente antes de trabajar en su bucle principal.

### Cómo deberían ser la mayoría de los juegos de navegador

Si tu juego puede alcanzar la máxima tasa de refresco de cualquier hardware compatible, entonces tu trabajo es bastante fácil. Puedes actualizar, renderizar y luego no hacer nada hasta VSync.

<!-- prettier-ignore-start -->
```js
/*
 * Empezar con el punto y coma es en caso de que cualquier línea de código por encima de
 * este ejemplo se basó en la inserción automática de punto y coma (ASI). El navegador
 * podría pensar accidentalmente que todo este ejemplo continúa desde la línea anterior.
 * El punto y coma inicial marca el comienzo de nuestra nueva línea si la anterior no
 * estaba vacía o terminada.
 *
 * Supongamos también que MyGame está previamente definido.
 */

;(() => {
  function main(tFrame) {
    MyGame.stopMain = window.requestAnimationFrame(main);

    update(tFrame); // Llame a su método de actualización. En nuestro caso, le damos el timestamp de rAF.
    render();
  }

  main(); // Inicio del ciclo
})();
```
<!-- prettier-ignore-end -->

Si no se puede alcanzar la frecuencia de refresco máxima, se pueden ajustar los parámetros de calidad para no sobrepasar el presupuesto de tiempo. El ejemplo más famoso de este concepto es el juego de id Software, RAGE. Este juego quitaba el control al usuario para mantener su tiempo de cálculo en unos 16ms (o unos 60fps). Si el cálculo tardaba demasiado, la resolución del renderizado disminuía, las texturas y otros recursos no se cargaban o dibujaban, y así sucesivamente. Este estudio de caso (no web) hizo algunas suposiciones y concesiones:

- Cada fotograma de animación tiene en cuenta la entrada del usuario.
- Ningún fotograma necesita ser extrapolado (adivinado) porque cada dibujo tiene su propia actualización.
- Los sistemas de simulación pueden asumir básicamente que cada actualización completa tiene un intervalo de \~16ms.
- Dar al usuario el control sobre los ajustes de calidad sería una pesadilla.
- Diferentes monitores entran a diferentes velocidades: 30 FPS, 75 FPS, 100 FPS, 120 FPS, 144 FPS, etc.
- Los sistemas que no pueden mantener una velocidad de 60 FPS pierden calidad visual para que el juego funcione a la velocidad óptima (al final, si la calidad es demasiado baja, el juego falla por completo).

### Otras formas de gestionar las necesidades de frecuencia de actualización variable

Existen otros métodos para abordar el problema.

Una técnica habitual consiste en actualizar la simulación con una frecuencia constante y, a continuación, dibujar la mayor cantidad (o la menor) posible de fotogramas reales. El método de actualización puede continuar en bucle sin preocuparse de lo que ve el usuario. El método `draw` puede ver la última actualización y cuándo ocurrió. Dado que dibujar sabe cuando representa, y el tiempo de simulación de la última actualización, puede predecir un fotograma plausible para dibujar para el usuario. No importa si esto es más frecuente que el bucle de actualización oficial (o incluso menos frecuente). El método de actualización establece puntos de control y, tan frecuentemente como el sistema lo permita, el método de renderizado dibuja instantes de tiempo alrededor de ellos. Hay muchas formas de separar el método de actualización en los estándares web:

- Dibuja en `requestAnimationFrame` y actualiza en un {{ domxref("setInterval()") }} o {{ domxref("setTimeout()") }}.

  - Esto utiliza tiempo del procesador incluso cuando está desenfocado o minimizado, acapara el hilo principal, y es probablemente un artefacto de los bucles de juego tradicionales (pero es simple).

- Dibujar en `requestAnimationFrame` y actualizar en un `setInterval` o `setTimeout` en un [Web Worker](/es/docs/Web/API/Web_Workers_API/Using_web_workers).

  - Esto es lo mismo que lo anterior, excepto que la actualización no acapara el hilo principal (ni el hilo principal lo acapara a él). Esta es una solución más compleja, y podría ser demasiada sobrecarga para actualizaciones simples.

- Dibuja en `requestAnimationFrame` y úsalo para dar un toque a un Web Worker que contenga el método `update` con el número de `ticks` a calcular, si los hay.

  - Esto duerme hasta que `requestAnimationFrame` es llamado y no contamina el hilo principal, además de que no estás dependiendo de métodos anticuados. Una vez más, esto es un poco más complejo que las dos opciones anteriores, y _el inicio_ de cada actualización se bloqueará hasta que el navegador decida activar las devoluciones de llamada de rAF.

Cada uno de estos métodos tiene ventajas y desventajas similares:

- Los usuarios pueden omitir fotogramas de renderizado o interpolar fotogramas adicionales en función de su rendimiento.
- Puedes contar con que todos los usuarios actualizarán las variables no cosméticas con la misma frecuencia constante, menos los contratiempos.
- Mucho más complicado de programar que los bucles básicos que vimos antes.
- La entrada del usuario es completamente ignorada hasta la siguiente actualización (incluso si el usuario tiene un dispositivo rápido).
- La interpolación obligatoria tiene una penalización de rendimiento.

Un método separado de actualización y dibujo podría parecerse al siguiente ejemplo. En aras de la demostración, el ejemplo se basa en el tercer punto, pero sin utilizar Web Workers para facilitar la lectura (y, seamos sinceros, la escritura).

> **Advertencia:** Este ejemplo, en concreto, necesita una revisión técnica.

<!-- prettier-ignore-start -->
```js
/*
 * Empezar con el punto y coma es en caso de que cualquier línea de código por encima de
 * este ejemplo se basó en la inserción automática de punto y coma (ASI). El navegador
 * podría pensar accidentalmente que todo este ejemplo continúa desde la línea anterior.
 * El punto y coma inicial marca el comienzo de nuestra nueva línea si la anterior no
 * estaba vacía o terminada.
 *
 * Supongamos también que MyGame está previamente definido.
 *
 * MyGame.lastRender hace un seguimiento de la última marca de tiempo requestAnimationFrame proporcionada.
 * MyGame.lastTick lleva la cuenta del último tiempo de actualización. Siempre se incrementa por tickLength.
 * MyGame.tickLength es la frecuencia con la que se actualiza el estado del juego. Aquí es 20 Hz (50ms).
 *
 * timeSinceTick es el tiempo entre requestAnimationFrame callback y la última actualización.
 * numTicks es cuántas actualizaciones deberían haber ocurrido entre estos dos fotogramas renderizados.
 *
 * A render() se le pasa tFrame porque se asume que el método render calculará cuánto
 *            tiempo ha pasado desde el último tick de actualización pasado para
 *            extrapolación (puramente cosmético para dispositivos rápidos). Dibuja la escena.
 *
 * update() calcula el estado del juego en un momento dado. Siempre debe incrementarse
 *          por tickLength. Es la autoridad para el estado del juego. Se le pasa el 
 *          DOMHighResTimeStamp para el tiempo que representa (que, de nuevo, es siempre
 *          la última actualización + MyGame.tickLength a menos que se añada una función
 *          de pausa, etc.)
 *
 * setInitialState() Realiza las tareas que queden antes de que el bucle principal deba ejecutarse.
 *                   Es sólo una función genérica de ejemplo que podría haber añadido.
 */

;(() => {
  function main(tFrame) {
    MyGame.stopMain = window.requestAnimationFrame(main);
    const nextTick = MyGame.lastTick + MyGame.tickLength;
    let numTicks = 0;

    // Si tFrame < nextTick entonces 0 ticks necesitan ser actualizados (0 es el valor por defecto para numTicks).
    // Si tFrame = nextTick entonces hay que actualizar 1 tick (y así sucesivamente).
    // Nota: Como mencionamos en el resumen, debe llevar la cuenta de lo grande que es numTicks.
    // Si es grande, entonces o tu juego estaba dormido, o la máquina no puede seguir el ritmo.
    if (tFrame > nextTick) {
      const timeSinceTick = tFrame - MyGame.lastTick;
      numTicks = Math.floor(timeSinceTick / MyGame.tickLength);
    }

    queueUpdates(numTicks);
    render(tFrame);
    MyGame.lastRender = tFrame;
  }

  function queueUpdates(numTicks) {
    for (let i = 0; i < numTicks; i++) {
      MyGame.lastTick += MyGame.tickLength; // Ahora lastTick es este tick.
      update(MyGame.lastTick);
    }
  }

  MyGame.lastTick = performance.now();
  MyGame.lastRender = MyGame.lastTick; // Imagina que el primer sorteo fue en la primera actualización.
  MyGame.tickLength = 50; // Configura la simulación para que se ejecute a 20 Hz (50 ms).

  setInitialState();
  main(performance.now()); // Inicio del ciclo
})();
```
<!-- prettier-ignore-end -->

Otra alternativa es hacer ciertas cosas con menos frecuencia. Si una parte de tu bucle de actualización es difícil de calcular pero insensible al tiempo, podrías considerar reducir su frecuencia e, idealmente, repartirla en trozos a lo largo de ese periodo alargado. Un ejemplo implícito de esto lo encontramos en The Artillery Blog para Artillery Games, donde [ajustan su tasa de generación de basura](https://web.archive.org/web/20161021030645/http://blog.artillery.com/2012/10/browser-garbage-collection-and-framerate.html) para optimizar la recolección de basura. Obviamente, la limpieza de recursos no es sensible al tiempo (especialmente si la limpieza es más perjudicial que la propia basura).

Esto también puede aplicarse a algunas de sus propias tareas. Son buenas candidatas para acelerar cuando los recursos disponibles se convierten en una preocupación.

## Resumen

Cualquiera de las opciones anteriores, o ninguna de ellas, podría ser la mejor para tu juego. La decisión correcta depende totalmente de las compensaciones que estés dispuesto (o no) a hacer. Lo que más preocupa es cambiar de opción.

Una cosa importante a recordar para plataformas gestionadas, como la web, es que tu bucle puede detener la ejecución durante periodos significativos de tiempo. Esto podría ocurrir cuando el usuario deselecciona tu pestaña y el navegador duerme (o ralentiza) su intervalo de callback `requestAnimationFrame`. Tienes muchas maneras de lidiar con esta situación y esto podría depender de si tu juego es de un solo jugador o multijugador. Algunas opciones son:

- Considera el vacío como "una pausa" y sáltate el tiempo.

  - Probablemente puedes ver cómo esto es problemático para la mayoría de los juegos multijugador.

- Puedes simular el vacío para ponerte al día.

  - Esto puede ser un problema para caídas largas y/o actualizaciones complejas.

- Puedes recuperar el estado del juego de un peer o del servidor.

  - Esto es ineficaz si tus compañeros o el servidor están desactualizados también, o no existen porque el juego es de un solo jugador y no tiene servidor.

Una vez que se ha desarrollado el bucle principal y se ha decidido un conjunto de suposiciones y compensaciones que se adapten a su juego, ahora es sólo cuestión de utilizar sus decisiones para calcular cualquier física aplicable, IA, sonidos, sincronización de red y cualquier otra cosa que su juego pueda requerir.
