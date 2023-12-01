---
title: Closures
slug: Web/JavaScript/Closures
---

{{jsSidebar("Intermediate")}}

Una clausura o _closure_ es una función que guarda referencias del estado adyacente (**ámbito léxico**). En otras palabras, una clausura permite acceder al ámbito de una función exterior desde una función interior. En JavaScript, las clausuras se crean cada vez que una función es creada.

## Ámbito léxico

Consideremos el siguiente ejemplo:

```js
function iniciar() {
  var nombre = "Mozilla"; // La variable nombre es una variable local creada por iniciar.
  function mostrarNombre() {
    // La función mostrarNombre es una función interna, una clausura.
    alert(nombre); // Usa una variable declarada en la función externa.
  }
  mostrarNombre();
}
iniciar();
```

La función `iniciar()` crea una variable local llamada `nombre` y una función interna llamada `mostrarNombre()`. Por ser una función interna, esta última solo está disponible dentro del cuerpo de `iniciar()`. Notemos a su vez que `mostrarNombre()` no tiene ninguna variable propia; pero, dado que las funciones internas tienen acceso a las variables de las funciones externas, `mostrarNombre()` puede acceder a la variable `nombre` declarada en la función `iniciar()`.

Ejecuta el código usando [este enlace de JSFiddle](http://jsfiddle.net/xAFs9/3/) y observa que la sentencia `alert()`, dentro de `mostrarNombre()`, muestra con éxito el valor de la variable `nombre`, la cual fue declarada en la función externa. Este es un ejemplo de _ámbito léxico_, el cual describe cómo un analizador sintáctico resuelve los nombres de las variables cuando hay funciones anidadas. La palabra _léxico_ hace referencia al hecho de que el ámbito léxico se basa en el lugar donde una variable fue declarada para determinar dónde esta variable estará disponible. Las funciones anidadas tienen acceso a las variables declaradas en su ámbito exterior.

En este ejemplo en particular, el ámbito se llama _ámbito de la función_, porque la variable es accesible solo dentro del cuerpo de la función donde se declara.

### Alcance con let y const

Tradicionalmente (antes de ES6), JavaScript sólo tenía dos tipos de ámbitos: _ámbito de función_ y _ámbito global_. Las variables declaradas con `var` tienen ámbito de función o ámbito global, dependiendo de si se declaran dentro o fuera de una función. Esto puede ser complicado, porque los bloques con llaves no crean ámbitos:

```js
if (Math.random() > 0.5) {
  var x = 1;
} else {
  var x = 2;
}
console.log(x); // 2
```

Para los desarrolladores de otros lenguajes (por ejemplo, C, Java) donde los bloques crean ámbitos, el código anterior debería arrojar un error en la línea `console.log`, porque estamos fuera del ámbito de `x` en cualquiera de los bloques. Sin embargo, dado que los bloques no crean ámbitos para `var`, las sentencias `var` aquí crean realmente una variable global. También hay [un ejemplo práctico](#creating_closures_in_loops_a_common_mistake) introducido a continuación que ilustra cómo esto puede causar errores reales cuando se combina con _closures_.

En ES6, JavaScript introdujo las declaraciones `let` y `const`, que, entre otras cosas, como [zonas muertas temporales](/es/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz), permiten crear variables con alcance de bloque.

```js
if (Math.random() > 0.5) {
  const x = 1;
} else {
  const x = 2;
}
console.log(x); // ReferenceError: x is not defined
```

En esencia, los bloques se tratan finalmente como ámbitos en ES6, pero sólo si se declaran variables con `let` o `const`. Además, ES6 introdujo [modules](/es/docs/Web/JavaScript/Guide/Modules), que introdujo otro tipo de ámbito. Los _closures_ son capaces de capturar variables en todos estos ámbitos, que introduciremos más adelante.

## Closure

Considera el siguiente ejemplo:

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

Si se ejecuta este código tendrá exactamente el mismo efecto que el ejemplo anterior: se mostrará el texto "Mozilla" en un cuadro de alerta de Javascript. Lo que lo hace diferente (e interesante) es que la función externa nos ha devuelto la función interna `muestraNombre()` antes de ejecutarla.

Puede parecer poco intuitivo que este código funcione. Normalmente, las variables locales dentro de una función sólo existen mientras dura la ejecución de dicha función. Una vez que `creaFunc()` haya terminado de ejecutarse, es razonable suponer que no se pueda ya acceder a la variable `nombre`. Dado que el código funciona como se esperaba, esto obviamente no es el caso.

La solución a este rompecabezas es que `miFunc` se ha convertido en un _closure_. Un _closure_ es un tipo especial de objeto que combina dos cosas: una función, y el entorno en que se creó esa función. El entorno está formado por las variables locales que estaban dentro del alcance en el momento que se creó el closure. En este caso, `miFunc` es un closure que incorpora tanto la función `muestraNombre` como el string "Mozilla" que existían cuando se creó el closure.

Este es un ejemplo un poco más interesante: una función `makeAdder`:

```js
function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

const add5 = makeAdder(5);
const add10 = makeAdder(10);

console.log(add5(2)); // muestra 7
console.log(add10(2)); // muestra 12
```

En este ejemplo, hemos definido una función `makeAdder(x)` que toma un argumento único `x` y devuelve una nueva función. Esa nueva función toma un único argumento `y`, devolviendo la suma de `x` + `y`.

En esencia, `makeAdder` es una fábrica de función: crea funciones que pueden sumar un valor específico a su argumento. En el ejemplo anterior utilizamos nuestra fábrica de función para crear dos nuevas funciones: una que agrega 5 a su argumento y otra que agrega 10.

`add5` y `add10` son ambos _closures_. Comparten la misma definición de cuerpo de función, pero almacenan diferentes entornos. En el entorno `add5`, `x` es 5. En lo que respecta a `add10`, `x` es 10.

## Closures prácticos

Hasta aquí hemos visto teoría, pero ¿son los _closures_ realmente útiles? Vamos a considerar sus implicaciones prácticas. Un closure permite asociar algunos datos (el entorno) con una función que opera sobre esos datos. Esto tiene evidentes paralelismos con la programación orientada a objetos, en la que los objetos nos permiten asociar algunos datos (las propiedades del objeto) con uno o más métodos.

En consecuencia, puede utilizar un closure en cualquier lugar en el que normalmente pondría un objeto con un solo método.

En la web hay situaciones habituales en las que aplicarlos. Gran parte del código JavaScript para web está basado en eventos: definimos un comportamiento y lo conectamos a un evento que es activado por el usuario (como un click o pulsación de una tecla). Nuestro código generalmente se adjunta como una devolución de llamada (callback): que es una función que se ejecuta en respuesta al evento.

Aquí está un ejemplo práctico: Supongamos que queremos añadir algunos botones a una página para ajustar el tamaño del texto. Una manera de hacer esto es especificar el tamaño de fuente del elemento `body` en píxeles y, a continuación, ajustar el tamaño de los demás elementos de la página (como los encabezados) utilizando la unidad relativa `em`:

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

Nuestros botones interactivos de tamaño de texto pueden cambiar la propiedad `font-size` del elemento `body`, y los ajustes serán aplicados por los otros elementos de la página gracias a las unidades relativas.

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

`size12`, `size14` y `size16` ahora son funciones que cambian el tamaño del texto de `body` a 12, 14 y 16 pixels, respectivamente. Podemos conectarlos a botones (en este caso enlaces) de la siguiente forma:

```js
document.getElementById("size-12").onclick = size12;
document.getElementById("size-14").onclick = size14;
document.getElementById("size-16").onclick = size16;
```

```html
<a href="#" id="size-12">12</a>
<a href="#" id="size-14">14</a>
<a href="#" id="size-16">16</a>
```

Ejecute el código utilizando [JSFiddle](https://jsfiddle.net/vnkuZ/7726/).

## Emulando métodos privados con closures

Lenguajes como Java ofrecen la posibilidad de declarar métodos privados, es decir, que sólo pueden ser llamados por otros métodos en la misma clase.

JavaScript no proporciona una forma nativa de hacer esto, pero es posible emular métodos privados utilizando _closures_. Los métodos privados no son sólo útiles para restringir el acceso al código: también proporcionan una poderosa manera de administrar tu espacio de nombres global, evitando que los métodos no esenciales embrollen la interfaz pública de tu código.

Aquí vemos cómo definir algunas funciones públicas que pueden acceder a variables y funciones privadas utilizando _closures_. A esto se le conoce también como el [patrón módulo](http://www.google.com/search?q=javascript+patron+modulo):

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

En los ejemplos anteriores cada closure ha tenido su propio entorno; aquí creamos un único entorno compartido por tres funciones: `counter.increment`, `counter.decrement` y `counter.value`.

El entorno compartido se crea en el cuerpo de una función anónima, que se ejecuta en el momento que se define. El entorno contiene dos elementos privados: una variable llamada `privateCounter` y una función llamada `changeBy`. No se puede acceder a ninguno de estos elementos privados directamente desde fuera de la función anónima. Se accede a ellos por las tres funciones públicas que se devuelven desde el contenedor anónimo.

Esas tres funciones públicas son _closures_ que comparten el mismo entorno. Gracias al ámbito léxico de Javascript, cada uno de ellas tienen acceso a la variable `privateCounter` y a la función `changeBy.`

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

Ten en cuenta que cada uno de los dos contadores mantiene su independencia del otro. Su entorno durante la llamada de la función `makeCounter()` es diferente cada vez. La variable del closure llamada `privateCounter` contiene una instancia diferente cada vez.

> **Nota:** Utilizar _closures_ de este modo proporciona una serie de beneficios que se asocian normalmente con la programación orientada a objectos, en particular la encapsulación y la ocultación de datos.

## Cadena de alcance del closure

Cada closure tiene tres ambitos:

- Ámbito local (Ámbito propio)
- Ámbito encapsulado (puede ser un bloque, funcion o módulo)
- Ámbito global

Un error común es no darse cuenta de que en el caso de que la función externa sea a su vez una función anidada, el acceso al ámbito de la función externa incluye el ámbito de la función externa, creando así una cadena de ámbitos de funciones. Para demostrarlo, considere el siguiente ejemplo.

```js
// ámbito global
const e = 10;

function sum(a) {
  return function (b) {
    return function (c) {
      // ámbito de funciones externas
      return function (d) {
        // ámbito local
        return a + b + c + d + e;
      };
    };
  };
}

console.log(sum(1)(2)(3)(4)); // 20
```

También puedes escribir sin funciones anónimas:

```js
// ámbito global
const e = 10;

function sum(a) {
  return function sum2(b) {
    return function sum3(c) {
      // ámbito de funciones externas
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

En el ejemplo anterior, hay una serie de funciones anidadas, las cuales tienen acceso al ámbito de las funciones externas. En este contexto, podemos decir que los _closures_ tienen acceso a _todos_ los ámbitos de las funciones externas.

Los _closures_ pueden capturar variables en ámbitos de bloque y de módulo también. Por ejemplo, lo siguiente crea un cierre sobre la variable de ámbito de bloque `y`:

```js
function outer() {
  const x = 5;

  if (Math.random() > 0.5) {
    const y = 6;
    return () => console.log(x, y);
  }
}

outer()(); // Muestra 5 6
```

Los _closures_ sobre módulos pueden ser aún más interesantes.

```js
// myModule.js
let x = 5;
export const getX = () => x;
export const setX = (val) => {
  x = val;
};
```

En este ejemplo, el módulo exporta un par de funciones _getter-setter_, que se cierran sobre la variable `x` del módulo. Incluso cuando `x` no es directamente accesible desde otros módulos, se puede leer y escribir con las funciones.

```js
import { getX, setX } from "./myModule.js";

console.log(getX()); // 5
setX(6);
console.log(getX()); // 6
```

Los _closures_ también pueden cerrarse sobre valores importados, que se consideran _enlaces vivos_, porque cuando el valor original cambia, el importado cambia en consecuencia.

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

export const getX = () => x; // Cierre sobre un enlace vivo importado
```

```js
import { getX } from "./closureCreator.js";
import { setX } from "./myModule.js";

console.log(getX()); // 1
setX(2);
console.log(getX()); // 2
```

## Creando closures en bucle: Un error común

Antes de la introducción de la palabra clave [`let`](/es/docs/JavaScript/Reference/Statements/let) en JavaScript 1.7, un problema común con _closures_ ocurría cuando se creaban dentro de un bucle 'loop'. Veamos el siguiente ejemplo:

```html
<p id="help">Aquí aparecerán notas útiles</p>
<p>Correo: <input type="text" id="email" name="email" /></p>
<p>Nombre: <input type="text" id="name" name="name" /></p>
<p>Edad: <input type="text" id="age" name="age" /></p>
```

```js
function showHelp(help) {
  document.getElementById("help").textContent = help;
}

function setupHelp() {
  var helpText = [
    { id: "email", help: "Tu dirección de correo electronico" },
    { id: "name", help: "Tu nombre completo" },
    { id: "age", help: "Tu edad (debe ser mayor de 16)" },
  ];

  for (var i = 0; i < helpText.length; i++) {
    var item = helpText[i];
    document.getElementById(item.id).onfocus = function () {
      showHelp(item.help);
    };
  }
}

setupHelp();
```

[Ver en el JSFiddle](https://jsfiddle.net/v7gjv)

El array `helpText` define tres avisos de ayuda, cada uno asociado con el ID de un campo de entrada en el documento. El bucle recorre estas definiciones, enlazando un evento onfocus a cada uno que muestra el método de ayuda asociada.

Si pruebas este código, verás que no funciona como esperabas. Independientemente del campo en el que se haga foco, siempre se mostrará el mensaje de ayuda relativo a la edad.

La razón de esto es que las funciones asignadas a onfocus son _closures_; que constan de la definición de la función y del entorno abarcado desde el ámbito de la función `setupHelp`. Se han creado tres _closures_, pero todos comparten el mismo entorno. En el momento en que se ejecutan las funciones callback de onfocus, el bucle ya ha finalizado y la variable `item` (compartida por los tres _closures_) ha quedado apuntando a la última entrada en la lista de `helpText.`

En este caso, una solución es utilizar más _closures_: concretamente añadiendo una fábrica de función como se ha descrito anteriormente:

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
    { id: "email", help: "Tu dirección de correo electronico" },
    { id: "name", help: "Tu nombre completo" },
    { id: "age", help: "Tu edad (debe ser mayor de 16)" },
  ];

  for (var i = 0; i < helpText.length; i++) {
    var item = helpText[i];
    document.getElementById(item.id).onfocus = makeHelpCallback(item.help);
  }
}

setupHelp();
```

[Ver en el JSFiddle](https://jsfiddle.net/v7gjv/1)

Esto funciona como se esperaba. En lugar de los tres callbacks compartiendo el mismo entorno, la función `makeHelpCallback` crea un nuevo entorno para cada uno en el que `help` se refiere a la cadena correspondiente del array `helpText`.

Otra forma de escribir lo anterior es utilizando _closures_ anónimos:

```js
function showHelp(help) {
  document.getElementById("help").textContent = help;
}

function setupHelp() {
  var helpText = [
    { id: "email", help: "Tu dirección de correo electronico" },
    { id: "name", help: "Tu nombre completo" },
    { id: "age", help: "Tu edad (debe ser mayor de 16)" },
  ];

  for (var i = 0; i < helpText.length; i++) {
    (function () {
      var item = helpText[i];
      document.getElementById(item.id).onfocus = function () {
        showHelp(item.help);
      };
    })(); // Inmediatamente el detector de eventos adjunta el valor actual del item (conservado hasta la iteración)
  }
}

setupHelp();
```

Si no quires usar más _closures_, puedes optar por usar la palabra clave [`let`](/es/docs/Web/JavaScript/Reference/Statements/let) o [`const`](/es/docs/Web/JavaScript/Reference/Statements/const):

```js
function showHelp(help) {
  document.getElementById("help").textContent = help;
}

function setupHelp() {
  const helpText = [
    { id: "email", help: "Tu dirección de correo electronico" },
    { id: "name", help: "Tu nombre completo" },
    { id: "age", help: "Tu edad (debe ser mayor de 16)" },
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

En este ejemplo se usa `const` en lugar de `var`, por lo que cada cierre vincula la variable de ámbito de bloque, lo que significa que no se requieren cierres adicionales.

Otra alternativa podría ser utilizar `forEach()` para iterar sobre el array `helpText` y adjuntar un evento a cada [`<input>`](/es/docs/Web/HTML/Element/input), como se muestra:

```js
function showHelp(help) {
  document.getElementById("help").textContent = help;
}

function setupHelp() {
  var helpText = [
    { id: "email", help: "Tu dirección de correo electronico" },
    { id: "name", help: "Tu nombre completo" },
    { id: "age", help: "Tu edad (debe ser mayor de 16)" },
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

No es aconsejable crear innecesariamente funciones dentro de otras funciones si no se necesitan los _closures_ para una tarea particular ya que afectará negativamente el rendimiento del script tanto en consumo de memoria como en velocidad de procesamiento.

Por ejemplo, cuando se crea un nuevo objeto/clase, los métodos normalmente deberían asociarse al prototipo del objeto en vez de definirse en el constructor del objeto. La razón es que con este último sistema, cada vez que se llama al constructor (cada vez que se crea un objeto) se tienen que reasignar los métodos.

Veamos el siguente caso, que no es práctico pero sí demostrativo:

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

El código anterior no aprovecha los beneficios de los _closures_. Podríamos modificarlo de la siguiente manera:

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

Sin embargo, no se recomienda redefinir el prototipo, así que el siguiente ejemplo es aún mejor que el anterior, porque lo que hace es añadir funcionalidad al prototipo existente:

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

En los dos ejemplos anteriores, todos los objetos comparten el prototipo heredado y no se van a definir los métodos cada vez que se crean de objetos. Ver [Detalles del Modelo de Objetos](/es/docs/Web/JavaScript/Guide/Details_of_the_Object_Model) para más información.
