---
title: General asynchronous programming concepts
slug: Learn/JavaScript/Asynchronous/Introducing
tags:
  - Aprender
  - Hilos
  - JavaScript
  - Promesas
  - Threads
  - bloques
translation_of: Learn/JavaScript/Asynchronous/Concepts
original_slug: Learn/JavaScript/Asynchronous/Concepts
---
{{LearnSidebar}}{{NextMenu("Learn/JavaScript/Asynchronous/Introducing", "Learn/JavaScript/Asynchronous")}}

En este artículo, repasaremos una serie de conceptos importantes relacionados con la programación asincrónica y cómo se ve esto en los navegadores web y JavaScript. Debe comprender estos conceptos antes de trabajar con los demás artículos del módulo.

| Pre-requisitos: | Literatura básica de computadora, un razonable entendimiento de los fundamentos de JavaScript.                                   |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| Objetivo:       | Entender los conceptos básicos detrás de la programación asincrónica, y cómo se manifiesta en los exploradores web y JavaScript. |

## ¿Asincrónico?

Normalmente, el código de un programa determinado se ejecuta directamente, y solo sucede una cosa a la vez. Si una función se basa en el resultado de otra función, tiene que esperar a que la otra función termine y regrese, y hasta que eso suceda, todo el programa se detiene esencialmente desde la perspectiva del usuario.

Los usuarios de Mac, por ejemplo, a veces experimentan esto como un cursor giratorio multicolor (o "beachball" - "bola de playa" - como es llamado frecuentemente). Este cursor es la manera que tiene el sistema operativo de decir "el actual programa que está usando tiene que parar y esperar que algo termine, y está tomando tanto tiempo que me preocupa que pienses qué está sucediendo."

![Multi-colored macOS beachball busy spinner](https://mdn.mozillademos.org/files/16577/beachball.jpg)

Esto es una experiencia frustrante y no es un buen uso del poder de procesamiento de una computadora - especialmente en una era donde las computadoras tienen múltiples procesadores disponibles. No tiene sentido sentarse allí a esperar algo cuando podrías dejar que la otra tarea se ejecute en otro procesador y le notifique cuando termine. Mientras tanto, esto le permitiría terminar otros trabajos, lo cual es la base de la **programación asincrónica**. Depende del entorno de programación que esté usando (exploradores web, en caso de desarrollo web) proveer de APIs que le permitan ejecutar dichas tareas de manera asincrónica.

## Código de bloqueo (Blocking)

Las técnicas asincrónicas son muy útiles, particularmente en programación web. Cuando una app web se ejecuta en el navegador y ejecuta un gran bloque de código sin retornar el control al navegador, este mismo puede parecer que se congela. Esto es llamado **blocking**; el navegador es bloqueado para que el usuario pueda seguir interactuando y realizando otras tareas hasta que la app web retorne el control sobre el procesador.

Vamos a ver algunos ejemplos que muestren lo que significa blocking.

En nuestro ejemplo [simple-sync.html](https://github.com/mdn/learning-area/tree/master/javascript/asynchronous/introducing/simple-sync.html) ([véalo en vivo](https://mdn.github.io/learning-area/javascript/asynchronous/introducing/simple-sync.html)), agregamos un detector del evento click ("click event listener") a un botón con el fin de que cuando sea clickeado, ejecute una operación de un gran consumo de tiempo (calcula 10 millones de fechas y luego muestra la última en la consola) y luego agrega un párrafo al DOM:

```js
const btn = document.querySelector('button');
btn.addEventListener('click', () => {
  let myDate;
  for(let i = 0; i < 10000000; i++) {
    let date = new Date();
    myDate = date
  }

  console.log(myDate);

  let pElem = document.createElement('p');
  pElem.textContent = 'This is a newly-added paragraph.';
  document.body.appendChild(pElem);
});
```

Cuando ejecute el ejemplo, abra su consola de JavaScript y haga click en el botón — notará que el párrafo no aparece hasta que las fechas hayan sido calculadas en su totalidad y el mensaje en la consola haya sido logueado. EL código se ejecuta en el orden en que aparece (de arriba hacia abajo), y la última operación no se ejecuta hasta que la anterior haya terminado.

> **Nota:** El ejemplo anterior es poco realista. ¡Nunca se van a calcular 10 millones de fechas en una app web real! Sin embargo, sirve para dar una idea básica.

En nuestro segundo ejemplo, [simple-sync-ui-blocking.html](https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/introducing/simple-sync-ui-blocking.html) ([véalo en vivo](https://mdn.github.io/learning-area/javascript/asynchronous/introducing/simple-sync-ui-blocking.html)), se simula algo un poco más realista con el que se puede encontrar en una página real. Se bloquea la interacción del usuario con la carga ("rendering") de la UI. En este ejemplo, se tienen dos botones:

- Un botón "Fill canvas" que cuando es clickeado llena con 1 millón de círculos azules al {{htmlelement("canvas")}} disponible.
- Un botón "Click me for alert" que cuando es clickeado muestra un mensaje de alerta.

```js
function expensiveOperation() {
  for(let i = 0; i < 1000000; i++) {
    ctx.fillStyle = 'rgba(0,0,255, 0.2)';
    ctx.beginPath();
    ctx.arc(random(0, canvas.width), random(0, canvas.height), 10, degToRad(0), degToRad(360), false);
    ctx.fill()
  }
}

fillBtn.addEventListener('click', expensiveOperation);

alertBtn.addEventListener('click', () =>
  alert('You clicked me!')
);
```

Si se clickea el primer botón y rápidamente se clickea el segundo, se verá que la alerta no aparece hasta que los círculos hayan terminado de representarse. La primer operación blockea a la segunda hasta que esta haya terminado de ejecutarse.

> **Nota:** OK, nuestro caso es feo y estamos fingiendo el efecto de bloqueo, pero es un problema común con el que los desarrolladores de aplicaciones reales batallan todo el tiempo.

¿Por qué es esto? La respuesta es porque JavaScript, en general, es de **"un solo hilo" (single-threaded)**. En este punto, se tiene que introduce el concepto de **"hilos" (threads)**.

## Threads

Un **hilo (thread)** es básicamente un proceso simple que un programa puede usar para completar tareas ("tasks"). Cada hilo solo puede realizar una tarea a la vez:

```
Task A --> Task B --> Task C
```

Cada tarea se va a ejecutar secuencialmente; una tarea tiene que completarse antes de que la próxima empiece.

Como se dijo previamente, muchas computadores actualmente tienen múltiples procesadores, por lo que pueden realizar múltiples tareas a la vez. Los lenguajes de programación que pueden manejar múltiples hilos pueden usar múltiples procesadores para completar múltiples tareas en simultáneo.

```
Thread 1: Task A --> Task B
Thread 2: Task C --> Task D
```

### JavaScript es single-threaded

JavScript es tradicionalmente single-threaded. Aún con múltiples procesadores, solo se puede ejecutar tareas en un solo hilo, llamado el **hilo principal (main thread)**. El ejemplo de arriba se ejecuta de la siguiente manera:

```
Main thread: Render circles to canvas --> Display alert()
```

Después de un tiempo, JavaScript ganó algunas herramientas que ayudaron con dichos problemas. [Web workers](/es/docs/Web/API/Web_Workers_API) permiten que se envíe parte del procesamiento de JavaScript a un hilo separado, llamado worker con el fin de que puedan ejecutar múltiples pedazos de JavaScript en simultáneo. Generalmente se usará un worker para ejectuar procesos de mucho consumo del hilo principal (main thread) con el fin de que no se bloquee la interacción del usuario.

```
  Main thread: Task A --> Task C
Worker thread: Expensive task B
```

Con esto en mente, miremos el ejemplo [simple-sync-worker.html](https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/introducing/simple-sync-worker.html) ([véalo ejecutándose en vivo](https://mdn.github.io/learning-area/javascript/asynchronous/introducing/simple-sync-worker.html)) nuevamente con la consola de JavaScript del navegador abierta. Esto es una re-escritura del ejemplo anterior que calculaba 10 millones de fechas en hilos worker separados. Ahora si se clickea el botón, el navegador tiene permitido mostrar el párrafo antes de que las fechas haya terminado de calcularse. La primer operación ya no bloquea a la segunda.

## Código asincrónico

Los web workers son muy útiles, pero tienen limitaciones. La mayor es que no pueden acceder al {{Glossary("DOM")}} — no se puede logar que un worker modifique directamente algo de la UI. No se puede representar 1 millón de círculos azules en un worker; básicamente solo puede hacer el cálculo numérico.

El segundo problema es que a pesar de que el código se ejecuta en un worker no es bloqueador, es simplemente sincrónico. Esto se convierte en un problema cuando una función depender en los resultados de múltiples procesos previos para funcionar. Considere el siguiente diagrama de hilos:

```
Main thread: Task A --> Task B
```

En este caso, digamos que la Tarea A (Task A) está haciendo algo como buscando una imagen de un servidor y la Tarea B (Task B) luego hace algo con la imagen, como aplicarle un filtro. Si se ejecuta la Tarea A y luego inmediatamente se trata de ejecutar la Tarea B, se obtendrá un error, porque la imagen todavía no estará disponible.

```
  Main thread: Task A --> Task B --> |Task D|
Worker thread: Task C -----------> |      |
```

En este caso, digamos que la Tarea D hace uso de los resultados de la Tarea B y la Tarea C. Se se puede garantizar que esos resultados estarán disponibles al mismo tiempo, entonces tal vez estemos OK, pero es poco probable. Si la Tarea D trata de ejecutarse cuando uno de sus inputs no está disponible, disparará un error.

Para arreglar dichos problemas, los navegadores nos permiten ejecutar ciertas operaciones asincrónicamente. Características como las [Promises](/es/docs/Web/JavaScript/Reference/Global_Objects/Promise) (Promesas) permiten establecer la ejecución de una operación (por ejemplo, buscar una imagen desde un servidor), y luego esperar hasta que el resultado sea retornado antes de ejecutar otra operación.

```
Main thread: Task A                   Task B
    Promise:      |__async operation__|
```

Como la operación está sucediendo en otro lugar, el hilo principal no está bloqueado mientras la operación asincrónica está siendo procesada.

Vamos a empezar a ver cómo se puede escribir código asincrónico en el próximo artículo. Cosas emocionantes, ¿eh? ¡Siga leyendo!

## Conclusión

El diseño del software moderno gira cada más entorno a la programación asincrónica, para permiterle a los programas hacer más de una cosa a la vez. A medida que use nuevas y más poderosas APIs, encontrará más casos donde la única forma de realizar las cosas es asincrónicamente. Era muy difícil escribir el código asincrónico. Todavía lleva tiempo acostumbrarse, pero se ha vuelto mucho más sencillo. En el resto de este módulo, exploraremos porqué el código asincrónico importa y cómo diseñar código que evite algunos de los problemas que hemos descrito en este artículo.

## En este módulo

- [Conceptos generales de programación asincrónica](/es/docs/Learn/JavaScript/Asynchronous/Concepts)
- [Introducción a JavaScript asincrónico](/es/docs/Learn/JavaScript/Asynchronous/Introducing)
- [JavaScript asincrónico cooperativo: Timeouts e intervalos](/es/docs/Learn/JavaScript/Asynchronous/Timeouts_and_intervals)
- [Programación asincrónica elegante con Promesas](/es/docs/Learn/JavaScript/Asynchronous/Promises)
- [Programación asincrónica más sencilla con async y await](/es/docs/Learn/JavaScript/Asynchronous/Async_await)
- [Eligiendo el correcto enfoque](/es/docs/Learn/JavaScript/Asynchronous/Choosing_the_right_approach)
