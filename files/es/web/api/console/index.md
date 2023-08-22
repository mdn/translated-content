---
title: Consola
slug: Web/API/console
---

{{APIRef("Console API")}}

El objeto **`console`** provee acceso a la consola de depuración de los navegadores (p. ej. la [Consola Web](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) en Firefox). Los detalles de como funciona varían de navegador en navegador, pero hay un conjunto de características que _de facto_ son proporcionadas generalmente.

El objeto `console` puede ser accedido desde cualquier objeto global. {{domxref("Window")}} en el ámbito de navegación y {{domxref("WorkerGlobalScope")}} como variantes específicas de `workers` a través de la propiedad `console`. Está expuesto como {{domxref("Window.console")}}, y puede ser referenciado como `console`. Por ejemplo:

```js
console.log("Falló al abrir el enlace especificado");
```

Esta página documenta los [Métodos](#métodos) disponibles en el objeto `console` y da algunos ejemplos de [uso](#ejemplos).

{{AvailableInWorkers}}

## Métodos

- {{domxref("console.assert()")}}
  - : Registra un mensaje y envía una traza de error a la consola si el primer argumento es `false`.
- {{domxref("console.clear()")}}
  - : Limpia la consola.
- {{domxref("console.count()")}}
  - : Registra el número de veces que esta línea ha sido llamada con la etiqueta dada.
- {{domxref("console.countReset()")}}
  - : Reinicia el valor del contador para la etiqueta dada.
- {{domxref("console.debug()")}}
  - : Registra un mensaje con el nivel de `debug`.
- {{domxref("console.dir()")}}
  - : Muestra un listado interactivo de las propiedades de un objeto JavaScript específico. Este listado permite usar triángulos de lista desplegables para examinar el contenido de objetos hijo.
- {{domxref("console.dirxml()")}}
  - : Muestra una representación en forma de árbol de un elemento XML/HTML si es posible o la vista del objeto JavaScript si no es posible.
- {{domxref("console.error()")}}
  - : Muestra un mensaje de error. Se pueden utilizar [sustituciones de cadenas](#usando_sustituciones_de_cadenas) y argumentos adicionales con este método.
- `console.exception()` {{Non-standard_inline}} {{deprecated_inline}}
  - : Un alias para `error()`.
- {{domxref("console.group()")}}
  - : Crea un nuevo [grupo](#usando_grupos_en_la_consola), indentando todos los mensajes subsecuentes en un nuevo nivel. Para retroceder un nivel, se utiliza `groupEnd()`.
- {{domxref("console.groupCollapsed()")}}
  - : Crea un nuevo [grupo](#usando_grupos_en_la_consola), indentando todos los mensajes subsecuentes en un nuevo nivel. A diferencia de `group()`, inicia con la línea de grupo colapsada, requiriendo el uso de un botón de apertura para expandir el grupo. Para retroceder un nivel, se utiliza `groupEnd()`.
- {{domxref("console.groupEnd()")}}
  - : Finaliza el [grupo](#usando_grupos_en_la_consola) actual.
- {{domxref("console.info()")}}
  - : Muestra un mensaje de información en la consola. Puedes usar [sustituciones de cadenas](#usando_sustituciones_de_cadenas) y argumentos adicionales con este método.
- {{domxref("console.log()")}}
  - : Para salida general de la información registrada. Puedes usar [sustituciones de cadenas](#usando_sustituciones_de_cadenas) y argumentos adicionales con este método.
- {{domxref("console.profile()")}} {{Non-standard_inline}}
  - : Inicia el `profiler` incluído del navegador (por ejemplo, la [Firefox performance tool](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html)). Puedes especificar un nombre opcional para el perfil.
- {{domxref("console.profileEnd()")}} {{Non-standard_inline}}
  - : Detiene el `profiler`. Puedes ver el resultado en la herramienta de rendimiento del navegador (por ejemplo, la [Firefox performance tool](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html)).
- {{domxref("console.table()")}}
  - : Muestra datos tabulares en forma de tabla.
- {{domxref("console.time()")}}
  - : Inicia un [temporizador](#temporizadores) con un nombre especificado como parámetro. Hasta 10 000 temporizadores simultáneos pueden ejecutarse en una página determinada.
- {{domxref("console.timeEnd()")}}
  - : Detiene el [temporizador](#temporizadores) especificado y registra el tiempo transcurrido en milisegundos desde que fue iniciado.
- {{domxref("console.timeLog()")}}
  - : Muestra el valor del [temporizador](#temporizadores) especificado en la consola.
- {{domxref("console.timeStamp()")}} {{Non-standard_inline}}
  - : Agrega un marcador a las herramientas del navegador [Chrome](https://developer.chrome.com/docs/devtools/evaluate-performance/reference/) o [Firefox](https://profiler.firefox.com/docs/#/./guide-ui-tour-timeline).
- {{domxref("console.trace()")}}
  - : Muestra una [traza de pila](#trazas_de_pila).
- {{domxref("console.warn()")}}
  - : Muestra un mensaje de advertencia. Puedes usar [sustituciones de cadenas](#usando_sustituciones_de_cadenas) y argumentos adicionales con este método.

## Ejemplos

### Enviar texto a la consola

La característica más utilizada de la consola es la de mostrar texto y otros datos. Existen varias categorías de salida que se pueden generar, utilizando los métodos {{domxref("console.log()")}}, {{domxref("console.info()")}}, {{domxref("console.warn()")}}, {{domxref("console.error()")}} o {{domxref("console.debug()")}}. Cada uno de estos muestran resultados que lucen diferente en el registro y se pueden utilizar los controles de filtro proveídos por el navegador para ver únicamente los tipos de salida de interés.

Hay dos maneras de usar cada uno de los métodos de salida; se puede ingresar una lista de objetos cuyas representaciones en cadena serán concatenadas en un único `string`, el cual se mostrará en la consola, o se puede ingresar una lista que contenga cero o más sustituciones de cadena seguida por una lista de objetos con los cuales reemplazarlas.

#### Mostrando un solo objeto

La manera más simple de utilizar los métodos de registro es mostrar un solo objeto:

```js
var someObject = { str: "Algún texto", id: 5 };
console.log(someObject);
```

La salida se verá parecido a esto:

```bash
[09:27:13.475] ({str:"Algún texto", id:5})
```

#### Mostrando múltiples objetos

También se pueden mostrar múltiples objetos listándolos y luego llamando el método de registro, de esta forma:

```js
const car = "Dodge Charger";
const someObject = { str: "Algún texto", id: 5 };
console.info("Mi primer automóvil fue un ", car, ". El objeto es:", someObject);
```

La salida se verá parecido a esto:

```bash
[09:28:22.711] Mi primer automóvil fue un Dodge Charger . El objeto es:: ({str:"Some text", id:5})
```

#### Usando sustituciones de cadenas

Cuando se pasa una cadena a uno de los métodos del objeto `console` que la acepta (como `log()`), puedes usar las siguientes sustituciones de cadena:

- `%o` or `%O`
  - : Muestra un objeto JavaScript. Haciendo clic sobre el nombre del objeto abre más información acerca del mismo en el inspector.
- `%d` or `%i`
  - : Muestra un entero. El formateo de números está soportado, por ejemplo `console.log("Foo %.2d", 1.1)` mostrará el número como los dos dígitos significativos con un cero adelante: `Foo 01`.
- `%s`
  - : Muestra una cadena.
- `%f`
  - : Muestra un valor de punto flotante. El formateo está soportado, por ejemplo `console.log("Foo %.2f", 1.1)` mostrará el número con dos decimales: `Foo 1.10`.

> **Nota:** El formateo de precisión no funciona en Chrome.

Cada uno de ellos trae el siguiente argumento posterior a la cadena de la lista de parámetros. Por ejemplo:

```js
for (let i = 0; i < 5; i++) {
  console.log("Hola, %s. Me has llamado %d veces.", "Bob", i + 1);
}
```

La salida se verá parecido a esto:

```bash
[13:14:13.481] Hola, Bob. Me has llamado 1 veces.
[13:14:13.483] Hola, Bob. Me has llamado 2 veces.
[13:14:13.485] Hola, Bob. Me has llamado 3 veces.
[13:14:13.487] Hola, Bob. Me has llamado 4 veces.
[13:14:13.488] Hola, Bob. Me has llamado 5 veces.
```

#### Estilizando la salida de la consola

Puedes usar la directiva `%c` para aplicar un estilo CSS a la salida de la consola:

```js
console.log(
  "This is %cMy stylish message",
  "color: yellow; font-style: italic; background-color: blue;padding: 2px",
);
```

El texto previo a la directiva no se verá afectado, pero el texto posterior a la directiva será estilizado usando las declaraciones CSS en el parámetro.

![](css-styling.png)

Puedes usar `%c` varias veces:

```js
console.log(
  "Varios estilos: %crojo %cnaranja",
  "color: red",
  "color: orange",
  "Mensaje adicional sin estilo",
);
```

Las propiedadas utilizables junto con la directiva `%c` son las siguientes (al menos, en Firefox - pueden variar en otros navegadores):

- {{cssxref("background")}} y sus variantes largas equivalentes
- {{cssxref("border")}} y sus variantes largas equivalentes
- {{cssxref("border-radius")}}
- {{cssxref("box-decoration-break")}}
- {{cssxref("box-shadow")}}
- {{cssxref("clear")}} y {{cssxref("float")}}
- {{cssxref("color")}}
- {{cssxref("cursor")}}
- {{cssxref("display")}}
- {{cssxref("font")}} y sus variantes largas equivalentes
- {{cssxref("line-height")}}
- {{cssxref("margin")}}
- {{cssxref("outline")}} y sus variantes largas equivalentes
- {{cssxref("padding")}}
- `text-*` propiedas como {{cssxref("text-transform")}}
- {{cssxref("white-space")}}
- {{cssxref("word-spacing")}} y {{cssxref("word-break")}}
- {{cssxref("writing-mode")}}

> **Nota:** Los mensajes de consola se comportan como un elemento en línea por defecto. Para ver los efectos de `padding`, `margin`, etc. debes establecerlo como por ejemplo `display: inline-block`.

### Usando grupos en la consola

Puedes usar grupos anidados para ayudar a organizar la salida visualmente combinando material relacionado. Para crear un nuevo bloque anidado, haz una llamada a `console.group()`. El método `console.groupCollapsed()` es similar, pero crea el nuevo bloque colapsado, requiriendo el uso de un "botón de mostrar" para abrirlo y leerlo.

Para salir del grupo actual, ejecuta `console.groupEnd()`. Por ejemplo, dado el siguiente código:

```js
console.log("This is the outer level");
console.group("First group");
console.log("In the first group");
console.group("Second group");
console.log("In the second group");
console.warn("Still in the second group");
console.groupEnd();
console.log("Back to the first group");
console.groupEnd();
console.debug("Back to the outer level");
```

La salida se verá así:

![Demostración de grupos anidados en la consola de Firefox](console_groups_demo.png)

### Temporizadores

Puedes inicializar un temporizador para calcular la duración de una operación específica. Para iniciar uno, llama al método `console.time()`, pasándole como único parámetro un nombre. Para detener un temporizador, y obtener el tiempo transcurrido en milisegundos, solo llama al método `console.timeEnd()`, nuevamente pasándole el nombre del contador como parámetro. Se pueden ejecutar hasta 10 000 temporizadores simultáneamente en una página.

Por ejemplo, dado este código:

```js
console.time("answer time");
alert("Click to continue");
console.timeLog("answer time");
alert("Do a bunch of other stuff...");
console.timeEnd("answer time");
```

Registrará el tiempo necesitado por el usuario para descartar el cuadro de alerta, mostrará el tiempo en la consola, esperará a que el usuario descarte la segunda alerta, y luego registrará el tiempo de finalización a la consola:

![](console-timelog.png)

Nótese que el nombre del temporizador es mostrado tanto cuando el temporizador es iniciado como cuando es detenido.

> **Nota:** Es importante saber que si estas usando esto para registrar el tiempo del trafico de red, el temporizador reportará el tiempo total para la transacción, mientras que el tiempo listado en el panel de conexiones o panel de red es solo la cantidad de tiempo requerida para obtener la cabecera.
> Si en cambio tienes el registro de cuerpo (`response body logging`) habilitado, el tiempo listado para la respuesta de la cabecera y el cuerpo combinados debiera coincidir con lo que ves en la salida de la consola.

### Trazas de pila

El objeto consola tambien soporta la salida de una traza de pila; esto te mostrará la ruta de llamadas tomadas hasta alcanzar el punto de tu llamada {{domxref("console.trace()")}}. Dado un código como el siguiente:

```js
function foo() {
  function bar() {
    console.trace();
  }
  bar();
}

foo();
```

La salida en la consola se verá como esto:

![](api-trace2.png)

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Notas

- Al menos en Firefox, si una página define un objeto `console`, ese objeto sobrescribe el que viene incorporado en Firefox.

## Véase también

- [Herramientas de Desarrollo de Firefox](https://firefox-source-docs.mozilla.org/devtools-user/index.html)
- [Consola Web](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) — como la consola Web en Firefox maneja las llamadas API de consola
- [Depuración Remota](https://firefox-source-docs.mozilla.org/devtools-user/remote_debugging/index.html) — como ver la salida de consola cuando el objetivo de depuración es un dispositivo móvil

### Otras implementaciones

- [Google Chrome DevTools](https://developer.chrome.com/docs/devtools/console/api/)
- [Microsoft Edge DevTools](https://docs.microsoft.com/en-us/archive/microsoft-edge/legacy/developer/)
- [Inspector Web Safari](https://developer.apple.com/library/archive/documentation/AppleApplications/Conceptual/Safari_Developer_Guide/Console/Console.html)
