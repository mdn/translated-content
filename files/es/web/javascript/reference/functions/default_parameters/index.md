---
title: Parámetros predeterminados
slug: Web/JavaScript/Reference/Functions/Default_parameters
---

{{jsSidebar("Functions", "Funciones")}}

**Parámetros predeterminados de función** permiten que los parámetros con nombre se inicien con valores predeterminados si no se pasa ningún valor o `undefined`.

{{EmbedInteractiveExample("pages/js/functions-default.html")}}

La fuente de este ejemplo interactivo se almacena en un repositorio de GitHub. Si deseas contribuir al proyecto de ejemplos interactivos, clona <https://github.com/mdn/interactive-examples> y envíanos una solicitud de extracción.

## Sintaxis

```
function [name]([param1[ = defaultValue1 ][, ..., paramN[ = defaultValueN ]]]) {
   statements
}
```

## Descripción

En JavaScript, los parámetros de función están predeterminados en {{jsxref("undefined")}}. Sin embargo, a menudo es útil establecer un valor predeterminado diferente. Aquí es donde los parámetros predeterminados pueden ayudar.

En el pasado, la estrategia general para establecer valores predeterminados era probar los valores de los parámetros en el cuerpo de la función y asignar un valor si eran `undefined`.

En el siguiente ejemplo, si no se proporciona ningún valor para `b` cuando se llama a `multiply`, el valor de `b` sería `undefined` al evaluar `a * b` y `multiply` devolvería `NaN`.

```js
function multiply(a, b) {
  return a * b;
}

multiply(5, 2); // 10
multiply(5); // NaN !
```

Para protegerte contra esto, usarías algo como la segunda línea, donde `b` se establece en `1` si llamas a `multiply` con un solo argumento:

```js
function multiply(a, b) {
  b = typeof b !== "undefined" ? b : 1;
  return a * b;
}

multiply(5, 2); // 10
multiply(5); // 5
```

Con los parámetros predeterminados en ES2015, las comprobaciones en el cuerpo de la función ya no son necesarias. Ahora, puedes asignar `1` como valor predeterminado para `b` en el encabezado de la función:

```js
function multiply(a, b = 1) {
  return a * b;
}

multiply(5, 2); // 10
multiply(5); // 5
multiply(5, undefined); // 5
```

## Ejemplos

### Pasar `undefined` vs. otros valores falsos

En la segunda llamada de este ejemplo, incluso si el primer argumento se establece explícitamente en `undefined` (aunque no `null` u otros valores {{Glossary("falsy", "falsos", "", 1)}} , el valor del argumento `num` sigue siendo el predeterminado.

```js
function test(num = 1) {
  console.log(typeof num);
}

test(); // 'number' (num se establece en 1)
test(undefined); // 'number' (num se establece en 1 también)

// prueba con otros valores falsos:
test(""); // 'string' (num se establece en '')
test(null); // 'object' (num se establece en null)
```

### Evaluado en el momento de la llamada

El argumento predeterminado se evalúa en el _momento de la llamada_. Entonces, a diferencia de (por ejemplo) Python, se crea un nuevo objeto cada vez que se llama a la función.

```js
function append(value, array = []) {
  array.push(value);
  return array;
}

append(1); // [1]
append(2); // [2], no [1, 2]
```

Esto incluso se aplica a funciones y variables:

```js
function callSomething(thing = something()) {
  return thing;
}

let numberOfTimesCalled = 0;
function something() {
  numberOfTimesCalled += 1;
  return numberOfTimesCalled;
}

callSomething(); // 1
callSomething(); // 2
```

### Los parámetros anteriores están disponibles para los parámetros predeterminados posteriores

Los parámetros definidos anteriormente (a la izquierda) están disponibles para los parámetros predeterminados posteriores:

```js
function greet(name, greeting, message = greeting + " " + name) {
  return [name, greeting, message];
}

greet("David", "Hi"); // ["David", "Hi", "Hi David"]
greet("David", "Hi", "Happy Birthday!"); // ["David", "Hi", "Happy Birthday!"]
```

Esta funcionalidad se puede aproximar de esta manera, lo que demuestra cuántos casos extremos se manejan:

```js
function go() {
  return ":P";
}

function withDefaults(
  a,
  b = 5,
  c = b,
  d = go(),
  e = this,
  f = arguments,
  g = this.value,
) {
  return [a, b, c, d, e, f, g];
}

function withoutDefaults(a, b, c, d, e, f, g) {
  switch (arguments.length) {
    case 0:
      a;
    case 1:
      b = 5;
    case 2:
      c = b;
    case 3:
      d = go();
    case 4:
      e = this;
    case 5:
      f = arguments;
    case 6:
      g = this.value;
    default:
  }
  return [a, b, c, d, e, f, g];
}

withDefaults.call({ value: "=^_^=" });
// [undefined, 5, 5, ":P", {value:"=^_^="}, arguments, "=^_^="]

withoutDefaults.call({ value: "=^_^=" });
// [undefined, 5, 5, ":P", {value:"=^_^="}, arguments, "=^_^="]
```

### Efectos de el ámbito

Si se definen parámetros predeterminados para uno o más parámetros, se crea un [segundo ámbito](https://tc39.es/ecma262/#sec-functiondeclarationinstantiation) (registro de entorno), específicamente para los identificadores dentro de la lista de parámetros. Este ámbito es padre del ámbito creado para el cuerpo de la función.

Esto significa que no se puede hacer referencia a las funciones y variables declaradas en el cuerpo de la función desde los iniciadores de parámetros de valor predeterminado; intentar hacerlo arroja un {{jsxref("ReferenceError")}} en tiempo de ejecución.

También significa que las variables declaradas dentro del cuerpo de la función usando `var` enmascararán los parámetros del mismo nombre, en lugar de que el comportamiento habitual de las declaraciones `var` duplicadas no tenga ningún efecto.

La siguiente función arrojará un `ReferenceError` cuando se invoca, porque el valor del parámetro predeterminado no tiene acceso al ámbito secundario del cuerpo de la función:

```js example-bad
function f(a = go()) {
  // Lanza un `ReferenceError` cuando se invoca a `f`.
  function go() {
    return ":P";
  }
}
```

...y esta función imprimirá `undefined` porque la variable `var a` se eleva solo a la parte superior del ámbito creado para el cuerpo de la función (y no hasta el ámbito principal creado para la lista de parámetros):

```js example-bad
function f(a, b = () => console.log(a)) {
  var a = 1;
  b(); // Imprime `undefined`, porque los valores de los parámetros predeterminados existen en su propio ámbito
}
```

### Parámetros sin valores predeterminados después de los parámetros predeterminados

Los parámetros aún se establecen de izquierda a derecha, sobrescribiendo los parámetros predeterminados incluso si hay parámetros posteriores sin valores predeterminados.

```js
function f(x = 1, y) {
  return [x, y];
}

f(); // [1, undefined]
f(2); // [2, undefined]
```

### Parámetro desestructurado con asignación de valor predeterminado

Puedes usar la asignación de valor predeterminado con la notación {{jsxref("Operators/Destructuring_assignment", "la desestructuración", "", 1)}}:

```js
function f([x, y] = [1, 2], { z: z } = { z: 3 }) {
  return x + y + z;
}

f(); // 6
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ve también

- [Propuesta original en ecmascript.org](http://wiki.ecmascript.org/doku.php?id=harmony:parameter_default_values)
