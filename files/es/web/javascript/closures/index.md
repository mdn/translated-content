---
title: Closures
slug: Web/JavaScript/Closures
l10n:
  sourceCommit: 41cddfdaeed4a73fb8234c332150df8e54df31e9
---

{{jsSidebar("Intermediate")}}

Un **closure** es la combinación de una función agrupada (dentro de otra) con referencias a su estado adyacente (el **entorno léxico**). En otras palabras, un _closure_ te da acceso al alcance de una función externa desde una función interna. En JavaScript, los _closure_ se crean cada vez que se crea una función, en el momento de la creación de la función.

## Ámbito léxico

Considere el siguiente ejemplo:

```js
function init() {
  var name = "Mozilla"; // name es una variable local creada por init
  function displayName() {
    // displayName() es la función interna que forma el closure
    console.log(name); // usar la variable declarada en la función padre
  }
  displayName();
}
init();
```

`init()` crea una variable local llamada `name` y una función llamada `displayName()`. La función `displayName()` es una función interna que se define dentro de `init()` y está disponible solo dentro del cuerpo de la función `init()`. Tenga en cuenta que la función `displayName()` no tiene variables locales propias. Sin embargo, dado que las funciones internas tienen acceso a las variables de las funciones externas, `displayName()` puede acceder a la variable `name` declarada en la función principal, `init()`.

Ejecute el código utilizando [este enlace de JSFiddle](https://jsfiddle.net/3dxck52m/) y observe que la instrucción `console.log()` dentro de la función `displayName()` muestra con éxito el valor de la variable `name`, que se declara en su función principal. Este es un ejemplo de _ámbito léxico_, que describe cómo un analizador resuelve los nombres de variables cuando las funciones están anidadas. La palabra _léxico_ se refiere al hecho de que el ámbito léxico utiliza la ubicación donde se declara una variable dentro del código fuente para determinar dónde está disponible esa variable. Las funciones anidadas tienen acceso a variables declaradas en su ámbito externo.

En este ejemplo particular, el ámbito se denomina _ámbito de función_ o _alcance de la función_, porque la variable es accesible y solo es accesible dentro del cuerpo de la función donde se declara.

### Alcance con let y const

Tradicionalmente (antes de ES6), JavaScript solo tenía dos tipos de ámbitos: _ámbito de la función_ y _ámbito global_. Las variables declaradas con `var` tienen un alcance de función o un alcance global, dependiendo de si se declaran dentro de una función o fuera de una función. Esto puede ser complicado, porque los bloques con llaves rizadas no crean ámbitos:

```js
if (Math.random() > 0.5) {
  var x = 1;
} else {
  var x = 2;
}
console.log(x);
```

Para personas de otros lenguajes (por ejemplo, C, Java) donde los bloques crean ámbitos, el código anterior debería arrojar un error en la línea `console.log`, porque estamos fuera del alcance de `x` en cualquiera de los bloques. Sin embargo, debido a que los bloques no crean ámbitos para `var`, las instrucciones `var` aquí en realidad crean una variable global. También se presenta a continuación [un ejemplo práctico](#creating_closures_in_loops_a_common_mistake) que ilustra cómo esto puede causar errores reales cuando se combina con _closures_.

En ES6, JavaScript introdujo las declaraciones `let` y `const`, que, entre otras cosas, como [zonas muertas temporales](/es/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz), le permiten crear variables de alcance de bloque.

```js
if (Math.random() > 0.5) {
  const x = 1;
} else {
  const x = 2;
}
console.log(x); //ReferenceError: x no está definido
```

En esencia, los bloques finalmente se tratan como ámbitos en ES6, pero solo si declaras variables con `let` o `const`. Además, ES6 introdujo [módulos](/es/docs/Web/JavaScript/Guide/Modules), que introdujo otro tipo de alcance. Los _closure_ son capaces de capturar variables en todos estos ámbitos, que introduciremos más adelante.

## Closure

Considere el siguiente ejemplo:

```js
function makeFunc() {
  const name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

const myFunc = makeFunc();
myFunc();
```

Ejecutar este código tiene exactamente el mismo efecto que el ejemplo anterior de la función `init()` anterior. Lo que es diferente (e interesante) es que la función interna `displayName()` se devuelve desde la función externa _antes de ejecutarse_.

A primera vista, puede parecer poco intuitivo que este código siga funcionando. En algunos lenguajes de programación, las variables locales dentro de una función existen solo durante la ejecución de esa función. Una vez que `makeFunc()` termine de ejecutarse, es de esperar que la variable `name` ya no sea accesible. Sin embargo, debido a que el código sigue funcionando como se esperaba, este obviamente no es el caso en JavaScript.

La razón es que las funciones en JavaScript forman _closures_. Un _closure_ es la combinación de una función y el entorno léxico dentro del cual se declaró esa función. Este entorno consiste en cualquier variable local que estuviera dentro del alcance en el momento en que se creó el _closure_. En este caso, `myFunc` es una referencia a la instancia de la función `displayName` que se crea cuando se ejecuta `makeFunc`. La instancia de `displayName` mantiene una referencia a su entorno léxico, dentro del cual existe la variable `name`. Por esta razón, cuando se invoca `myFunc`, la variable `name` permanece disponible para su uso, y 'Mozilla' se pasa a `console.log`.

Aquí hay un ejemplo un poco más interesante: una función `makeAdder`:

```js
function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

const add5 = makeAdder(5);
const add10 = makeAdder(10);

console.log(add5(2)); // 7
console.log(add10(2)); // 12
```

En este ejemplo, hemos definido una función `makeAdder(x)`, que toma un solo argumento `x` y devuelve una nueva función. La función que devuelve toma un solo argumento `y` y devuelve la suma de la variable `x` y la variable `y`.

En esencia, `makeAdder` es una fábrica de funciones. Crea funciones que pueden añadir un valor específico a su argumento. En el ejemplo anterior, la fábrica de funciones crea dos nuevas funciones: una que suma cinco a su argumento y otra que suma 10.

`add5` y `add10` forman _closures_. Comparten la misma definición de cuerpo de función, pero almacenan diferentes entornos léxicos. En el entorno léxico de `add5`, `x` es 5, mientras que en el entorno léxico de `add10`, `x` es 10.

## Closure prácticos

Los _closure_ son útiles porque te permiten asociar datos (el entorno léxico) con una función que opera sobre esos datos. Esto tiene paralelismos obvios con la programación orientada a objetos, donde los objetos le permiten asociar datos (las propiedades del objeto) con uno o más métodos.

En consecuencia, puede usar un _closure_ en cualquier lugar donde normalmente pueda usar un objeto con un solo método.

Las situaciones en las que es posible que desee hacer esto son particularmente comunes en la web. Gran parte del código escrito en JavaScript para _front-end_ está basado en eventos. Defina algún comportamiento y luego adjúntelo a un evento activado por el usuario (como un clic o una pulsación de tecla). El código se adjunta como una devolución de llamada (una sola función que se ejecuta en respuesta al evento).

Por ejemplo, supongamos que queremos añadir botones a una página para ajustar el tamaño del texto. Una forma de hacerlo es especificar el tamaño de fuente del elemento `body` (en píxeles) y luego establecer el tamaño de los otros elementos de la página (como los encabezados) utilizando la unidad `em` relativa:

```css
body {
  font-family: Helvetica, Arial, sans-serif;
  font-size: 12px;
}

h1 {
  font-size: 1.5em;
}

h2 {
  font-size: 1.2em;
}
```

Dichos botones interactivos de tamaño de texto pueden cambiar la propiedad `font-size` del elemento `body`, y los ajustes son recogidos por otros elementos de la página gracias a las unidades relativas.

Aquí está el código JavaScript:

```js
function makeSizer(size) {
  return function () {
    document.body.style.fontSize = `${size}px`;
  };
}

const size12 = makeSizer(12);
const size14 = makeSizer(14);
const size16 = makeSizer(16);
```

`size12`, `size14` y `size16` son ahora funciones que cambian el tamaño del texto del cuerpo a 12, 14 y 16 píxeles, respectivamente. Puede adjuntarlos a los botones como se muestra en el siguiente ejemplo de código.

```js
document.getElementById("size-12").onclick = size12;
document.getElementById("size-14").onclick = size14;
document.getElementById("size-16").onclick = size16;
```

```html
<button id="size-12">12</button>
<button id="size-14">14</button>
<button id="size-16">16</button>
```

Ejecuta el código usando [JSFiddle](https://jsfiddle.net/hotae160/).

## Emular métodos privados con _closures_

Los lenguajes como Java le permiten declarar métodos como privados, lo que significa que solo pueden ser llamados por otros métodos de la misma clase.

JavaScript, antes de [clases](/es/docs/Web/JavaScript/Reference/Classes), no tenía una forma nativa de declarar [métodos privados](/es/docs/Web/JavaScript/Reference/Classes/Private_properties#private_methods), pero era posible emular métodos privados usando _closures_. Los métodos privados no solo son útiles para restringir el acceso al código. También proporcionan una forma poderosa de gestionar su espacio de nombres global.

El siguiente código ilustra cómo usar _closures_ para definir funciones públicas que pueden acceder a funciones y variables privadas. Tenga en cuenta que estos _closures_ siguen el [Patrón de diseño de módulo](https://www.google.com/search?q=javascript+module+pattern).

```js
const counter = (function () {
  let privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }

  return {
    increment() {
      changeBy(1);
    },

    decrement() {
      changeBy(-1);
    },

    value() {
      return privateCounter;
    },
  };
})();

console.log(counter.value()); // 0.

counter.increment();
counter.increment();
console.log(counter.value()); // 2.

counter.decrement();
console.log(counter.value()); // 1.
```

En ejemplos anteriores, cada _closure_ tenía su propio entorno léxico. Aquí, sin embargo, hay un único entorno léxico que es compartido por las tres funciones: `counter.increment`, `counter.decrement` y `counter.value`.

El entorno léxico compartido se crea en el cuerpo de una función anónima, _que se ejecuta tan pronto como se ha definido_ (también conocida como [IIFE](/es/docs/Glossary/IIFE)). El entorno léxico contiene dos elementos privados: una variable llamada `privateCounter` y una función llamada `changeBy`. No puedes acceder a ninguno de estos miembros privados desde fuera de la función anónima. En su lugar, puede acceder a ellos utilizando las tres funciones públicas que se devuelven desde el contenedor anónimo.

Esas tres funciones públicas forman _closures_ que comparten un mismo entorno léxico. Gracias al alcance léxico de JavaScript, cada uno tiene acceso a la variable `privateCounter` y a la función `changeBy`.

```js
const makeCounter = function () {
  let privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment() {
      changeBy(1);
    },

    decrement() {
      changeBy(-1);
    },

    value() {
      return privateCounter;
    },
  };
};

const counter1 = makeCounter();
const counter2 = makeCounter();

console.log(counter1.value()); // 0.

counter1.increment();
counter1.increment();
console.log(counter1.value()); // 2.

counter1.decrement();
console.log(counter1.value()); // 1.
console.log(counter2.value()); // 0.
```

Observa cómo los dos contadores mantienen su independencia el uno del otro. Cada _closure_ hace referencia a una versión diferente de la variable `privateCounter` a través de su propio _closure_. Cada vez que se llama a uno de los contadores, su entorno léxico cambia cambiando el valor de esta variable. Los cambios en el valor de la variable en un _closure_ no afectan el valor en el otro _closure_.

> [!NOTE]
> El uso de _closures_ de esta manera proporciona beneficios que normalmente se asocian con la programación orientada a objetos. En particular, _ocultación de datos_ y _encapsulación_.

## Cadena de alcance de closure

Cada _closure_ tiene tres alcances:

- Alcance local (Ámbito propio)
- Alcance envolvente (puede ser alcance de bloque, función o módulo)
- Alcance global

Un error común es no darse cuenta de que en el caso de que la función externa sea en sí misma una función anidada, el acceso al alcance de la función externa incluye el alcance circundante de la función externa, creando efectivamente una cadena de alcances de función. Para demostrarlo, considere el siguiente código de ejemplo.

```js
// ámbito global
const e = 10;
function sum(a) {
  return function (b) {
    return function (c) {
      // ámbito de funciones exteriores
      return function (d) {
        // ámbito local
        return a + b + c + d + e;
      };
    };
  };
}

console.log(sum(1)(2)(3)(4)); // 20
```

También puede escribir sin funciones anónimas:

```js
// ámbito global
const e = 10;
function sum(a) {
  return function sum2(b) {
    return function sum3(c) {
      // ámbito de funciones exteriores
      return function sum4(d) {
        // ámbito local
        return a + b + c + d + e;
      };
    };
  };
}

const sum2 = sum(1);
const sum3 = sum2(2);
const sum4 = sum3(3);
const result = sum4(4);
console.log(result); // 20
```

En el ejemplo anterior, hay una serie de funciones anidadas, todas las cuales tienen acceso al ámbito de las funciones externas. En este contexto, podemos decir que los _closures_ tienen acceso a _todos_ los ámbitos de función externos.

Los _closure_ también pueden capturar variables en ámbitos de bloque y ámbitos de módulo. Por ejemplo, lo siguiente crea un _closure_ sobre la variable de ámbito de bloque `y`:

```js
function outer() {
  let getY;
  {
    const y = 6;
    getY = () => y;
  }
  console.log(typeof y); // undefined
  console.log(getY()); // 6
}

outer();
```

Los _closure_ sobre los módulos pueden ser más interesantes.

```js
// myModule.js
let x = 5;
export const getX = () => x;
export const setX = (val) => {
  x = val;
};
```

Aquí, el módulo exporta un par de funciones _getter-setter_ (para asignar y obtener), que se cierran sobre la variable de alcance del módulo `x`. Incluso cuando `x` no es directamente accesible desde otros módulos, se puede leer y escribir con las funciones.

```js
import { getX, setX } from "./myModule.js";

console.log(getX()); // 5
setX(6);
console.log(getX()); // 6
```

Los _closure_ también pueden cerrar sobre valores importados, que se consideran como _{{Glossary("binding", "enlazadas")}}_ en vivo, porque cuando el valor original cambia, el importado cambia en consecuencia.

```js
// myModule.js
export let x = 1;
export const setX = (val) => {
  x = val;
};
```

```js
// closureCreator.js
import { x } from "./myModule.js";

export const getX = () => x; // Cerrar sobre un enlace en vivo importado
```

```js
import { getX } from "./closureCreator.js";
import { setX } from "./myModule.js";

console.log(getX()); // 1
setX(2);
console.log(getX()); // 2
```

## Crear closures en bucles: un error común

Antes de la introducción de la palabra clave [`let`](/es/docs/Web/JavaScript/Reference/Statements/let), se producía un problema común con los _closure_ cuando los creabas dentro de un bucle. Para demostrarlo, considere el siguiente código de ejemplo.

```html
<p id="help">Aquí aparecerán notas útiles</p>
<p>Correo electrónico: <input type="text" id="email" name="email" /></p>
<p>Nombre: <input type="text" id="name" name="name" /></p>
<p>Edad: <input type="text" id="age" name="age" /></p>
```

```js
function showHelp(help) {
  document.getElementById("help").textContent = help;
}

function setupHelp() {
  var helpText = [
    { id: "email", help: "Tu dirección de correo electrónico" },
    { id: "name", help: "Tu nombre completo" },
    { id: "age", help: "Tu edad (debes ser mayor de 16 años)" },
  ];

  for (var i = 0; i < helpText.length; i++) {
    // La razón es el uso de `var` en esta línea
    var item = helpText[i];
    document.getElementById(item.id).onfocus = function () {
      showHelp(item.help);
    };
  }
}

setupHelp();
```

Intenta ejecutar el código en [JSFiddle](https://jsfiddle.net/v7gjv/8164/).

La matriz `helpText` define tres consejos útiles, cada uno asociado con el ID de un campo de entrada en el documento. El bucle recorre estas definiciones, conectando un evento `onfocus` a cada uno que muestra el método de ayuda asociado.

Si pruebas este código, verás que no funciona como esperabas. No importa en qué campo se centre, se mostrará el mensaje sobre su edad.

La razón de esto es que las funciones asignadas a `onfocus` forman _closures_; consisten en la definición de la función y el entorno capturado desde el alcance de la función `setupHelp`. El bucle ha creado tres _closure_, pero cada uno comparte el mismo entorno léxico único, que tiene una variable con valores cambiantes (`item`). Esto se debe a que la variable `item` se declara con `var` y, por lo tanto, tiene un alcance de función debido a la elevación. El valor de `item.help' se determina cuando se ejecutan las devoluciones de llamada `onfocus`. Debido a que el bucle ya ha seguido su curso en ese momento, el objeto variable `item`(compartido por los tres _closure_) se ha dejado apuntando a la última entrada en la lista`helpText`.

Una solución en este caso es usar más _closure_: en particular, usar una fábrica de funciones como se describió anteriormente:

```js
function showHelp(help) {
  document.getElementById("help").textContent = help;
}

function makeHelpCallback(help) {
  return function () {
    showHelp(help);
  };
}

function setupHelp() {
  var helpText = [
    { id: "email", help: "Tu dirección de correo electrónico" },
    { id: "name", help: "Tu nombre completo" },
    { id: "age", help: "Tu edad (debes ser mayor de 16 años)" },
  ];

  for (var i = 0; i < helpText.length; i++) {
    var item = helpText[i];
    document.getElementById(item.id).onfocus = makeHelpCallback(item.help);
  }
}

setupHelp();
```

Ejecuta el código usando [este enlace de JSFiddle](https://jsfiddle.net/v7gjv/9573/).

Esto funciona como se esperaba. En lugar de que todas las devoluciones de llamada compartan un único entorno léxico, la función `makeHelpCallback` crea _un nuevo entorno léxico_ para cada devolución de llamada, en el que `help` se refiere a la cadena correspondiente de la matriz `helpText`.

Otra forma de escribir lo anterior utilizando cierres anónimos es:

```js
function showHelp(help) {
  document.getElementById("help").textContent = help;
}

function setupHelp() {
  var helpText = [
    { id: "email", help: "Tu dirección de correo electrónico" },
    { id: "name", help: "Tu nombre completo" },
    { id: "age", help: "Tu edad (debes ser mayor de 16 años)" },
  ];

  for (var i = 0; i < helpText.length; i++) {
    (function () {
      var item = helpText[i];
      document.getElementById(item.id).onfocus = function () {
        showHelp(item.help);
      };
    })(); //Adjunto del detector de eventos inmediatos con el valor actual del elemento (conservado hasta la iteración).
  }
}

setupHelp();
```

Si no desea utilizar más _closure_, puede utilizar la palabra clave [`let`](/es/docs/Web/JavaScript/Reference/Statements/let) o [`const`](/es/docs/Web/JavaScript/Reference/Statements/const):

```js
function showHelp(help) {
  document.getElementById("help").textContent = help;
}

function setupHelp() {
  const helpText = [
    { id: "email", help: "Tu dirección de correo electrónico" },
    { id: "name", help: "Tu nombre completo" },
    { id: "age", help: "Tu edad (debes ser mayor de 16 años)" },
  ];

  for (let i = 0; i < helpText.length; i++) {
    const item = helpText[i];
    document.getElementById(item.id).onfocus = () => {
      showHelp(item.help);
    };
  }
}

setupHelp();
```

Este ejemplo usa `const` en lugar de `var`, por lo que cada _closure_ vincula la variable de alcance de bloque, lo que significa que no se requieren _closure_ adicionales.

Otra alternativa podría ser usar `forEach()` para iterar sobre la matriz `helpText` y adjuntar un detector a cada [`<input>`](/es/docs/Web/HTML/Element/input), como se muestra:

```js
function showHelp(help) {
  document.getElementById("help").textContent = help;
}

function setupHelp() {
  var helpText = [
    { id: "email", help: "Tu dirección de correo electrónico" },
    { id: "name", help: "Tu nombre completo" },
    { id: "age", help: "Tu edad (debes ser mayor de 16 años)" },
  ];

  helpText.forEach(function (text) {
    document.getElementById(text.id).onfocus = function () {
      showHelp(text.help);
    };
  });
}

setupHelp();
```

## Consideraciones de rendimiento

Como se mencionó anteriormente, cada instancia de función gestiona su propio alcance y cierre. Por lo tanto, no es prudente crear funciones innecesariamente dentro de otras funciones si no se necesitan _closures_ para una tarea en particular, ya que afectará negativamente el rendimiento del script tanto en términos de velocidad de procesamiento como de consumo de memoria.

Por ejemplo, al crear un nuevo objeto/clase, los métodos normalmente deben asociarse al prototipo del objeto en lugar de definirse en el constructor del objeto. La razón es que cada vez que se llama al constructor, los métodos se reasignan (es decir, para cada creación de objetos).

Observemos el siguiente caso:

```js
function MyObject(name, message) {
  this.name = name.toString();
  this.message = message.toString();
  this.getName = function () {
    return this.name;
  };

  this.getMessage = function () {
    return this.message;
  };
}
```

Debido a que el código anterior no aprovecha los beneficios de usar _closures_ en esta instancia en particular, podríamos reescribirlo para evitar usar _closures_ de la siguiente manera:

```js
function MyObject(name, message) {
  this.name = name.toString();
  this.message = message.toString();
}
MyObject.prototype = {
  getName() {
    return this.name;
  },
  getMessage() {
    return this.message;
  },
};
```

Sin embargo, no se recomienda redefinir el prototipo. En su lugar, el siguiente ejemplo se adjunta al prototipo existente:

```js
function MyObject(name, message) {
  this.name = name.toString();
  this.message = message.toString();
}
MyObject.prototype.getName = function () {
  return this.name;
};
MyObject.prototype.getMessage = function () {
  return this.message;
};
```

En los dos ejemplos anteriores, el prototipo heredado puede ser compartido por todos los objetos y las definiciones del método no necesitan ocurrir en cada creación de objetos. Consulte [La herencia y la cadena de prototipos](/es/docs/Web/JavaScript/Inheritance_and_the_prototype_chain) para obtener más información.
