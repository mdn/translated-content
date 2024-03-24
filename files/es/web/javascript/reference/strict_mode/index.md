---
title: Modo Estricto
slug: Web/JavaScript/Reference/Strict_mode
---

{{JsSidebar("More", "Más")}}A veces, verás que llaman {{Glossary("Sloppy_mode", "sloppy mode — modo poco riguroso")}} al modo no estricto predeterminado. Este no es un término oficial, pero tenlo en cuenta, por si acaso.

El modo estricto de [ECMAScript 5](http://www.ecma-international.org/publications/standards/Ecma-262.htm) es una forma de elegir una variante _restringida_ de _JavaScript_, así implícitamente se deja de lado el modo poco riguroso. El modo estricto no es sólo un subconjunto: _intencionalmente_ tiene diferencia semántica del código normal. Los navegadores que no admiten el modo estricto ejecutarán el código con un comportamiento diferente a los que sí lo soportan, por lo tanto no confíes en el modo estricto sin antes hacer pruebas de sus características más relevantes. Los modos estricto y no estricto pueden coexistir, por lo tanto el código se puede transformar a modo estricto incrementalmente.

El modo estricto tiene varios cambios en la semántica normal de JavaScript:

1. Elimina algunos errores silenciosos de JavaScript cambiándolos para que lancen errores.
2. Corrige errores que hacen difícil para los motores de JavaScript realizar optimizaciones: a veces, el código en modo estricto puede correr más rápido que un código idéntico pero no estricto.
3. Prohíbe cierta sintaxis que probablemente sea definida en futuras versiones de ECMAScript.

Ve [transición a modo estricto](/es/docs/Web/JavaScript/Reference/Strict_mode/Transitioning_to_strict_mode), si deseas cambiar tu código para trabajar en la variante estricta de JavaScript.

## Invocar el modo estricto

El modo estricto se aplica a un _script completo_ o a _funciones individuales_. No se aplica a bloques entre corchetes `{}`; intentar aplicarlo en tales contextos no hace nada. Código `eval`, código `Function`, atributos de controladores de eventos, cadenas pasadas a [`setTimeout`](/es/docs/Web/API/WindowTimers.setTimeout), y similares son scripts enteros, de modo que invocar modo estricto en tales contextos funciona como se espera.

### Modo estricto para scripts

Para invocar el modo estricto en todo un script, escribe _exactamente_ `"use strict";` (o `'use strict';`) antes de cualquier otra expresión.

```js
// Sintaxis del modo estricto para todo el script
"use strict";
var v = "¡Hola! ¡Estoy en modo estricto para script!";
```

Esta sintaxis tiene un problema que [ya ha afectado](https://bugzilla.mozilla.org/show_bug.cgi?id=579119) a [cierta página bien conocida](https://bugzilla.mozilla.org/show_bug.cgi?id=627531): no es posible concatenar ciegamente scripts conflictivos entre sí. Si concatena un script en modo estricto con otro que no es, la concatenación de ambos producirá código en modo estricto. Lo contrario también es cierto: código en modo no estricto mas código estricto produce código que no es estricto. Concatenar scripts no produce problemas si todos están en modo estricto (o si todos están en modo no estricto). El problema es mezclar scripts en modo estricto con scripts en modo no estricto. Por eso se recomienda habilitar el modo estricto a nivel de función solamente (al menos durante el periodo de transición de un programa).

Otra opción es envolver el contenido completo del script en una función y tener esa función externa en modo estricto. Así se elimina el problema de la concatenación, pero entonces tienes que hacerte cargo de exportar explícitamente las variables globales fuera del ámbito de la función.

### Modo estricto para funciones

De igual forma, para invocar el modo estricto para una función, escribe _exactamente_ `"use strict";` (o `'use strict';`) en el cuerpo de la función antes de cualquier otra expresión.

```js
function strict() {
  // Sintaxis del modo estricto a nivel de función
  "use strict";
  function nested() {
    return "¡Y yo también!";
  }
  return "¡Hola!  ¡Soy una función en modo estricto!  " + nested();
}
function notStrict() {
  return "Yo no soy estricto.";
}
```

### Modo estricto para módulos

ECMAScript 2015 introdujo módulos y por tanto una tercera manera de entrar en el modo estricto. Todo el contenido de los módulos de JavaScript se encuentra automáticamente en modo estricto, sin necesidad de una declaración para iniciarlo.

```js
function strict() {
  // debido a que este es un módulo, soy estricto por omisión
}
export default strict;
```

## Cambios en modo estricto

El modo estricto cambia la sintaxis y el comportamiento en tiempo de ejecución. Los cambios generalmente caen dentro de estas categorías: cambios que convierten equivocaciones en errores (como errores de sintaxis o en tiempo de ejecución), cambios que simplifican cómo se calcula el nombre de una variable particular, cambios que simplifican el uso de `eval` y `arguments`, cambios que hacen más fácil escribir JavaScript "seguro", y cambios que anticipan la evolución futura de ECMAScript.

### Convertir equivocaciones en errores

El modo estricto cambia algunos errores de sintaxis tolerados en modo no estricto y los convierte en errores. JavaScript fue diseñado de modo que fuera fácil para programadores novatos, y puede haber operaciones semánticas que deberían ser errores pero son tratadas como libres de error. A veces esto sirve para solucionar el problema en el momento, pero puede crear problemas más graves en el futuro. El modo estricto trata las equivocaciones como errores, para que se puedan descubrir y subsanar inmediatamente.

En primer lugar, el modo estricto hace imposible crear variables globales por accidente. En JavaScript no estricto, si se escribe mal una variable en una asignación, se creará una nueva propiedad en el objeto global y el código continuará "trabajando" como si nada (aunque es posible que el código así escrito falle en el futuro, en concreto, en JavaScript moderno). En modo estricto, cualquier asignación que produzca variables globales por accidente lanzará un error:

```js
"use strict";
// Asumiendo que exista una variable global llamada mistypedVariable
mistypeVariable = 17; // esta línea lanza un ReferenceError debido a
// una errata en el nombre de la variable
```

En segundo lugar, el modo estricto lanza una excepción en asignaciones que de otro modo fallarían silenciosamente. Por ejemplo, `NaN` es una variable global que no puede ser asignada. En un código normal, asignar a `NaN` no tiene efecto; el programador no recibe ningún mensaje de error. En cambio, en modo estricto, si se intenta asignar un valor a `NaN`, el programador recibirá una excepción. Cualquier asignación que falle silenciosamente en código normal (asignaciones a una propiedad de no escritura, asignaciones a una propiedad captadora, asignaciones a una nueva propiedad o a un objecto {{jsxref("Global_Objects/Object/preventExtensions", "no extensible")}}) lanzará una excepción en modo estricto:

```js
"use strict";

// Asignación a una no-escritura global
var undefined = 5; // lanza un TypeError
var Infinity = 5; // lanza un TypeError

// Asignación a una propiedad de no-escritura
var obj1 = {};
Object.defineProperty(obj1, "x", { value: 42, writable: false });
obj1.x = 9; // lanza un TypeError

// Asignación a una propiedad de tipo getter
var obj2 = {
  get x() {
    return 17;
  },
};
obj2.x = 5; // lanza un TypeError

// Asignación a una nueva propiedad en un objeto no extensible
var fixed = {};
Object.preventExtensions(fixed);
fixed.newProp = "ohai"; // lanza un TypeError
```

En tercer lugar, el modo estricto lanza una excepción al intentar eliminar propiedades no eliminables (mientra que en código normal el intento no tendría ningún efecto):

```js
"use strict";
delete Object.prototype; // lanza un TypeError
```

En cuarto lugar, la versión de modo estricto anterior a Gecko 34 requiere que todas las propiedades nombradas en un objeto sean únicas. En código normal se pueden duplicar nombres, siendo el último el que determina el valor de la propiedad. Pero como el último es el único que hace algo, la duplicidad da origen a errores si el código se modifica para cambiar el valor de la propiedad. Duplicar nombres de propiedades es un error de sintaxis en modo estricto.

> **Nota:** Este ya no es el caso en ECMAScript 2015 ([error 1041128](https://bugzilla.mozilla.org/show_bug.cgi?id=1041128)).

```js
"use strict";
var o = { p: 1, p: 2 }; // !!! error de sintaxis
```

En quinto lugar, el modo estricto requiere que los nombres de los parámetros de una función sean únicos. En código normal, el último argumento repetido oculta argumentos anteriores con el mismo nombre. Estos argumentos permanecen disponibles a través de `arguments[i]`, de modo que no son completamente inaccesibles. Aun así, esta ocultación tiene poco sentido y es probablemente indeseable (pues puede ocultar, por ejemplo, un error al teclear una letra). Por lo tanto, en modo estricto, duplicar nombres de argumentos es un error de sintaxis:

```js
function sum(a, a, c) {
  // !!! error de sintaxis
  "use strict";
  return a + a + c; // incorrecto si este código se ejecutó
}
```

En sexto lugar, en modo estricto ECMAScript 5 se prohíbe la notación octal. La notación octal no es parte de ECMAScript 5, pero está soportada en todos los navegadores al poner como prefijo un cero al número: `0644 == 420` y `"\045" === "%"`. En ECMAScript 2015, el número octal es compatible con el prefijo de un número con "`0o`". Es decir:

```js
var a = 0o10; // ES2015: Octal
```

Los programadores novatos a veces creen que un prefijo cero inicial no tiene un significado semántico, por lo que lo usan como dispositivo de alineación, ¡pero esto cambia el significado del número! Una sintaxis de cero a la izquierda para los octales rara vez es útil y se puede usar por error, por lo que el modo estricto lo convierte en un error de sintaxis:

```js
"use strict";
var sum =
  015 + // !!! error de sintaxis
  197 +
  142;

var sumWithOctal = 0o10 + 8;
console.log(sumWithOctal); // 16
```

Séptimo, el modo estricto en ECMAScript 2015 prohíbe establecer propiedades en valores {{Glossary("Primitive", "primitivos")}}. La sintaxis octal rara vez es útil y se puede usar equivocadamente, de modo que en modo estricto, utilizar notación octal lanza un {{jsxref("TypeError")}}:

```js
(function () {
  "use strict";

  false.true = ""; // TypeError
  (14).sailing = "home"; // TypeError
  "with".you = "far away"; // TypeError
})();
```

### Simplificación en el uso de variables

El modo estricto simplifica el modo en que el nombre de una variable es asignado a un variable particular en el código. Muchas optimizaciones del compilador se basan en la habilidad para decir el lugar específico en que una variable está almacenada, lo cual es crítico para una optimización completa del código JavaScript. Algunas veces JavaScript hace que esta asignación básica del nombre de una variable y su valor no suceda hasta que no se está en tiempo de ejecución. El modo estricto elimina muchos de los casos en los que esto pasa, de modo que el compilador puede optimizar mejor el código que es estricto.

Primero, el modo estricto prohíbe el uso de `with`. El problema con `with` es que cualquier nombre dentro del bloque pude ser asignado a una propiedad del objecto pasado como argumento, o a una variable en su ámbito circundante (o incluso global), en tiempo de ejecución: es imposible saber de antemano cuál será. El modo estricto hace que el uso de `with` sea un error de sintaxis, de modo que no hay oportunidad de que una variable dentro de un `with` se refiera a una dirección desconocida en tiempo de ejecución:

```js
"use strict";
var x = 17;
with (obj) {
  // !!! error de sintaxis
  // Si este no estuviera un modo estricto, ¿sería var x?, o
  // ¿sería obj.x en su lugar?  Es imposible en general
  // decirlo sin ejecutar el código, por lo que el nombre no
  // se puede optimizar.
  x;
}
```

En vez de usar `with`, existe la simple alternativa de asignar el objecto a una variable de nombre más corto, y después acceder a la propiedad correspondiente de esa variable.

Segundo, el uso de `eval` en modo estricto no introduce nuevas variables en el ámbito circundante. En código normal, `eval("var x;")` introduce una variable `x` dentro de la función circundante o el ámbito global. Esto significa que, en general, en una función que contiene una llamada a `eval` en cada nombre que no se refiera a un argumento o a una variable local, se debe asignar a una definición en particular en tiempo de ejecución (debido a que `eval` puedo haber introducido una nueva variable que podría ocultar una variable externa). En modo estricto, `eval` crea variables solo para el código que se está evaluando, por lo que `eval` no puede afectar si un nombre se refiere a una variable externa o a alguna variable local:

```js
var x = 17;
var evalX = eval("'use strict'; var x = 42; x");
console.assert(x === 17);
console.assert(evalX === 42);
```

En el ejemplo anterior, si la función `eval` es invocada por una expresión de la forma `eval(...)` en código de modo estricto, el código será evaluado en modo estricto. El código puede explícitamente invocar el modo estricto, pero no es necesario.

```js
function strict1(str) {
  "use strict";
  return eval(str); // str será tratado como código de modo estricto
}
function strict2(f, str) {
  "use strict";
  return f(str); // no eval(...): str es estricto si y solo
  // si invoca el modo estricto
}
function nonstrict(str) {
  return eval(str); // str es estricto si y solo
  // si invoca el modo estricto
}

strict1("'¡Código en modo estricto!'");
strict1("'use strict'; '¡Código en modo estricto!'");
estricto2(eval, "'Código no estricto'");
strict2(eval, "'use strict'; '¡Código en modo estricto!'");
nonstrict("'Código no estricto'");
nonstrict("'use strict'; '¡Código en modo estricto!'");
```

Así los nombres en modo estricto usando `eval` se comportan idénticamente a los nombres en modo estricto no siendo evaluados como resultado de `eval`.

Tercero, el modo estricto prohíbe eliminar nombres planos. De este modo, `delete name` produce un error de sintaxis.

```js
"use strict";

var x;
delete x; // !!! error de sintaxis

eval("var y; delete y;"); // !!! error de sintaxis
```

### Haciendo `eval` y `arguments` más simples

El modo estricto hace que el uso de `arguments` y `eval` sea más intuitivo. Ambos envuelven un considerable misticismo en código normal: `eval` al añadir o remover los enlaces y cambiar los valores de dichos enlaces, y `arguments` al poder sustituir los nombres de los argumentos por propiedades indexadas. El modo estricto ofrece un gran paso al tratar a `eval` y a `arguments` como palabras clave, aunque soluciones finales no estarán disponibles hasta futuras ediciones de ECMAScript.

Primero, las palabras `eval` y `arguments` no se pueden ligar o asignar en la sintaxis del lenguaje. Cualquier intento producirá un error de sintaxis:

```js
"use strict";
eval = 17;
arguments++;
++eval;
var obj = { set p(arguments) {} };
var eval;
try {
} catch (arguments) {}
function x(eval) {}
function arguments() {}
var y = function eval() {};
var f = new Function("arguments", "'use strict'; return 17;");
```

Segundo, el modo estricto no permite usar alias en elementos del objecto `arguments` creados dentro de la función. En una función en código normal cuyo primer parámetro sea `args`, si se cambia el valor de `args` también se cambiará de `arguments[0]`, y viceversa (a menos que no se proporcionen parámetros o se elimine `arguments[0]`). El objecto `arguments` para el modo estricto almacena los parámetros originales cuando la función es invocada. `arguments[i]` no guarda el valor del correspondiente nombre del parámetro, ni tampoco un parámetro con nombre guarda el valor correspondiente de `arguments[i]`.

```js
function f(a) {
  "use strict";
  a = 42;
  return [a, arguments[0]];
}
var pair = f(17);
console.assert(pair[0] === 42);
console.assert(pair[1] === 17);
```

Tercero, `arguments.callee` no está soportado. En código normal, `arguments.callee` se refiere a la función envolvente. Este caso de uso es débil: ¡simplemente nombra la función envolvente!. Además `arguments.callee` merma el desempeño de funciones en línea pues debe ser posible proveer la referencia de la función que llamó a la función original cada vez que se usa `arguments.callee`. `arguments.callee` en modo estricto es una propiedad no eliminable y lanza una excepción cuando se le asigna un valor o se intenta regresar su valor.

```js
"use strict";
var f = function () {
  return arguments.callee;
};
f(); // lanza un TypeError
```

### "Asegurando" JavaScript

El modo estricto hace más fácil el escribir código "seguro" en JavaScript. Algunos sitios web ofrecen ahora medios para que los usuarios codifiquen en JavaScript para que el código corra en el sitio en _beneficio de otros usuarios_. JavaScript en los navegadores puede acceder a la información privada del usuario, por lo que dicho JavaScript se debe transformar parcialmente antes de ejecutarse, para censurar el acceso a funciones prohibidas. La flexibilidad de JavaScript hace que efectivamente sea imposible hacer esto sin muchas comprobaciones en tiempo de ejecución. La flexibilidad de JavaScript hace casi imposible hacer esto sin hacer revisiones en tiempo de ejecución. Unos pocos ajustes del modo estricto, además de requerir que el JavaScript enviado por el usuario sea código de modo estricto y que se invoque de cierta manera, reducen sustancialmente la necesidad de esas comprobaciones en tiempo de ejecución.

Primero, el valor `this` pasado a una función en modo estricto no forzosamente debe ser un objeto (es decir, "empaquetado"). Para una función normal, `this` siempre es un objeto: o el objeto proporcionado si se llama con un `this` con valor de objeto; el valor, empaquetado, si se llama con un booleano, una cadena o un número `this`; o el objeto global si se llama con un `undefined` o `null` `this`. (Usar {{jsxref("Global_Objects/Function/call", "call")}}, {{jsxref("Global_Objects/Function/apply", "apply")}}, o {{jsxref("Global_Objects/Function/bind", "bind")}} para especificar un valor del `this` particular). Este empaquetado automático al pasar valores a una función tiene un costo en el rendimiento; no solo eso, si no que al exponer el objeto global en los navegadores es un riesgo de seguridad, debido a que el objeto global provee acceso a una funcionalidad que el código de JavaScript "seguro" debe restringir. Así, en una función en modo estricto , el valor de `this` no está empaquetado dentro de un objecto, y si no se especifica, `this` toma el valor de `undefined`.

```js
"use strict";
function fun() {
  return this;
}
console.assert(fun() === undefined);
console.assert(fun.call(2) === 2);
console.assert(fun.apply(null) === null);
console.assert(fun.call(undefined) === undefined);
console.assert(fun.bind(true)() === true);
```

Esto significa, entre otras cosas, que en los navegadores no es posible hacer referencia al objeto `window` a través de `this` dentro de una función en modo estricto.

Segundo, en modo estricto ya no es posible "recorrer" la pila de JavaScript a través de extensiones de ECMAScript. En código normal con estas extensiones, cuando una función llamada `fun` está en medio de su ejecución, `fun.caller` es la función que más recientemente llamó a `fun`, y `fun.arguments` son los parámetros para esa invocación de `fun`. Ambas extensiones son problemáticas para JavaScript "seguro", debido a que permiten acceder a funciones "privilegiadas" y sus (potencialmente inseguros) argumentos. Si `fun` está en modo estricto, tanto `fun.caller` como `fun.arguments` son propiedades no eliminables que lanzan una excepción cuando se establecen o recuperan:

```js
function restricted() {
  "use strict";
  restricted.caller; // lanza un TypeError
  restricted.arguments; // lanza un TypeError
}
function privilegedInvoker() {
  return restricted();
}
privilegedInvoker();
```

Tercero, en funciones de modo estricto, el objeto `arguments` no provee acceso a las variables usadas al llamar a la función. En algunas implementaciones antiguas de ECMAScript, `arguments.caller` era un objeto cuyas propiedades apuntaban a las variables en la función. Esto es una [amenaza de seguridad](http://stuff.mit.edu/iap/2008/facebook/) por que rompe la habilidad de ocultar valores privilegiados a través de la abstracción de la función; además, frena algunas optimizaciones. Por estas razones los navegadores modernos no la implementan. Por su funcionalidad a lo largo de los años, `arguments.caller` en una función de modo estricto es una propiedad que lanza una excepción cuando se usa.

```js
"use strict";
function fun(a, b) {
  "use strict";
  var v = 12;
  return arguments.caller; // lanza un TypeError
}
fun(1, 2); // no expone v (o a o b)
```

### Preparando el camino para futuras versiones de ECMAScript

Las futuras versiones de ECMAScript introducirán nuevos cambios, y el modo estricto en ECMAScript 5 aplica algunos de esos cambios para hacer una transición más suave. Será más fácil hacer cambios si las bases de esos cambios son prohibidas en modo estricto.

Primero, en modo estricto una lista de identificadores se convierte en palabras reservadas. Estas palabras son `implements`, `interface`, `let`, `package`, `private`, `protected`, `public`, `static`, y `yield`. De modo que en modo estricto, no se pueden usar estas palabras para nombrar variables o argumentos.

```js
function package(protected) {
  // !!!
  "use strict";
  var implements; // !!!

  // !!!
  interface: while (true) {
    break interface; // !!!
  }

  function private() {} // !!!
}
function fun(static) {
  "use strict";
} // !!!
```

_Dos advertencias específicas de Mozilla_: Primero, si tu código esta escrito en JavaScript 1.7 o mayor (por ejemplo en código chrome o cuando se usa bien `<script type="">`) y el código esta en modo estricto, `let` y `yield` tienen la funcionalidad que han tenido desde que esas palabras clave se introdujeron por primera vez. Pero el código en modo estricto en la web, cargado con `<script src="">` o `<script>...</script>`, no podrá usar `let`/`yield` como identificadores. _Segundo, mientras que ES5 incondicionalmente reserva las palabras `class`, `enum`, `export`, `extends`, `import` y `super`, Mozilla Firefox 5 solo las reserva en modo estricto_.

En segundo lugar, [el modo estricto prohíbe las declaraciones de función, no en el nivel superior de un script o función](http://whereswalden.com/2011/01/24/new-es5-strict-mode-requirement-function-statements-not-at-top-level-of-a-program-or-function-are-prohibited/). En el modo normal de los navegadores, las declaraciones de función se permiten "en todas partes". _¡Esto no es parte de ES5 (ni siquiera de ES3)!_ Es una extensión con semántica incompatible en diferentes navegadores. Ten en cuenta que en ES2015 se permiten declaraciones de función fuera del nivel superior.

```js
"use strict";
if (true) {
  function f() {} // !!! error de sintaxis
  f();
}

for (var i = 0; i < 5; i++) {
  function f2() {} // !!! error de sintaxis
  f2();
}

function baz() {
  // legal
  function eit() {} // también legal
}
```

Esta prohibición no es el modo estricto propiamente dicho porque tales declaraciones de función son una extensión de ES5 básico. Pero es la recomendación del comité ECMAScript y los navegadores la implementarán.

## Modo estricto en navegadores

La mayoría de los navegadores ya implementan el modo estricto. Sin embargo, no dependas ciegamente de él, ya que todavía hay numerosas [Versiones del navegador utilizadas en la naturaleza que solo tienen soporte parcial para el modo estricto](http://caniuse.com/use-strict) o no lo admiten en absoluto (por ejemplo, Internet Explorer por debajo de la versión 10). _El modo estricto cambia la semántica_. Depender de esos cambios provocará equivocaciones y errores en los navegadores que no implementan el modo estricto. Ten cuidado al usar el modo estricto y respalda la dependencia del modo estricto con pruebas de funciones que comprueben si se implementan las partes relevantes del modo estricto. Finalmente, asegúrate de _probar tu código en navegadores que admitan y no admitan el modo estricto_. Si realizas tus pruebas solo en navegadores que no admiten el modo estricto, es muy probable que tengas problemas en los navegadores que sí lo hacen, y viceversa.

## Especificaciones

{{Specifications}}

## Ve también

- [¿Dónde está Walden? » Nuevo soporte de modo estricto ES5: ¡ahora con píldoras venenosas!](http://whereswalden.com/2010/09/08/new-es5-strict-mode-support-now-with-poison-pills/)
- [¿Dónde está Walden? » Nuevo requisito del modo estricto de ES5: se prohíben las declaraciones de función que no estén en el nivel superior de un programa o función](http://whereswalden.com/2011/01/24/new-es5-strict-mode-requirement-function-statements-not-at-top-level-of-a-program-or-function-are-prohibited/)
- [¿Dónde está Walden? » Nueva compatibilidad con el modo estricto de ES5: las nuevas variables creadas por el código de evaluación del modo estricto son locales solo para ese código](http://whereswalden.com/2011/01/10/new-es5-strict-mode-support-new-vars-created-by-strict-mode-eval-code-are-local-to-that-code-only/)
- [Tutorial de "uso estricto" de JavaScript para principiantes.](http://qnimate.com/javascript-strict-mode-in-nutshell/)
- [John Resig — Modo estricto ECMAScript 5, JSON y más](http://ejohn.org/blog/ecmascript-5-strict-mode-json-and-more/)
- [ECMA-262-5 en detalle. Capitulo 2. Modo estricto.](http://dmitrysoshnikov.com/ecmascript/es5-chapter-2-strict-mode/)
- [Tabla de compatibilidad del modo estricto](http://kangax.github.io/compat-table/es5/#Strict_mode)
- [Transición al modo estricto](/es/docs/Web/JavaScript/Reference/Strict_mode/Transitioning_to_strict_mode)
