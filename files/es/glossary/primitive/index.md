---
title: Primitivo
slug: Glossary/Primitive
---

En {{Glossary("JavaScript")}}, un **primitive** (valor primitivo, tipo de dato primitivo) son datos que no son un {{Glossary("object", "objeto")}} y no tienen {{Glossary("method", "métodos")}}. Hay 6 tipos de datos primitivos: {{Glossary("string")}}, {{Glossary("number")}}, {{Glossary("bigint")}}, {{Glossary("boolean")}}, {{Glossary("undefined")}} y {{Glossary("symbol")}}. También hay {{Glossary("null")}}, que aparentemente es primitivo, pero de hecho es un caso especial para cada {{JSxRef("Object")}}: y cualquier tipo estructurado se deriva de `null` por la [Cadena de prototipos](/es/docs/Learn/JavaScript/Objects/Inheritance).

La mayoría de las veces, un valor primitivo se representa directamente en el nivel más bajo de la implementación del lenguaje.

Todos los primitivos son **inmutables**, es decir, no se pueden modificar. Es importante no confundir un primitivo en sí mismo con un valor primitivo asignado a una variable. Se puede reasignar un nuevo valor a la variable, pero el valor existente no se puede cambiar de la misma forma en que se pueden modificar los objetos, los arreglos y las funciones.

## Ejemplo

Este ejemplo te ayudará a comprender que los valores primitivos son **inmutables**.

### JavaScript

```js
// El uso de un método de cadena no modifica la cadena
var bar = "baz";
console.log(bar); // baz
bar.toUpperCase();
console.log(bar); // baz

// El uso de un método de arreglo muta el arreglo
var foo = [];
console.log(foo); // []
foo.push("plugh");
console.log(foo); // ["plugh"]

// La asignación le da al primitivo un nuevo valor (no lo muta)
bar = bar.toUpperCase(); // BAZ
```

Un primitivo se puede reemplazar, pero no se puede modificar directamente.

## Otro ejemplo \[paso a paso]

El siguiente ejemplo te ayudará a analizar cómo se ocupa JavaScript de los primitivos.

### JavaScript

```js
// El primitivo
let foo = 5;

// Define una función que debería cambiar el valor primitivo
function addTwo(num) {
  num += 2;
}
// Otra función que intenta hacer lo mismo
function addTwo_v2(foo) {
  foo += 2;
}

// Llama a tu primera función mientras pasas el primitivo como argumento
addTwo(foo);
// Obtiene el valor primitivo actual
console.log(foo); // 5

// Intenta de nuevo con tu segunda función...
addTwo_v2(foo);
console.log(foo); // 5
```

¿Esperaba que fuera `7` en lugar de `5`?, si es así, lee cómo se ejecuta este código:

- Para las llamadas a las funciones `addTwo` y `addTwo_v2`, JavaScript busca el valor del identificador `foo`. Encuentra correctamente tu variable instanciada con la primera declaración
- Después de encontrarla, evalúa la expresión, `foo` se reemplaza por 5 y el motor de JavaScript pasa ese valor a las funciones como argumento
- Antes de ejecutar las declaraciones dentro del cuerpo de las funciones, **JavaScript toma una copia del argumento originalmente pasado** (que es un primitivo) y crea una copia local. Estas copias, que existen solo dentro del ámbito de las funciones, son accesibles a través de los identificadores que especificaste en las definiciones de las funciones (`num` para `addTwo`, `foo` para `addTwo_v2`)
- Luego, se ejecutan las instrucciones de las funciones:

  - En la primera función, se creó una variable `num` local. ¡Estas aumentando su valor en 2, no el valor original de `foo`!
  - En la segunda función, se creó una variable `foo` local. ¡Esto incrementa su valor en 2, no el valor original (externo) de `foo`!, además, en esta situación, no se puede acceder directamente a la variable `foo` externa. Esto se debe al alcance léxico de JavaScript y al ensombrecimiento de variables resultante. El `foo` local oculta al `foo` externo. Para obtener más información, consulta {{JSxRef("Closures", "Cierres")}}. (Ten en cuenta que `window.foo` aún se podría usar para acceder a la variable `foo` externa).

- En conclusión, cualquier cambio dentro de tus funciones **no** afectará a la `foo` original en absoluto, ya que estas modificando **copias** de la misma.

Es por eso que los primitivos son inmutables: en lugar de cambiarlos directamente, modificas una _copia, sin afectar el original_.

## Envolturas de objetos primitivos en JavaScript

A excepción de `null` y `undefined`, todos los valores primitivos tienen objetos equivalentes que envuelven los valores primitivos:

- {{JSxRef("String")}} para el `string` primitivo.
- {{JSxRef("Number")}} para el `number` primitivo.
- {{JSxRef("BigInt")}} para el `bigint` primitivo.
- {{JSxRef("Boolean")}} para el `boolean` primitivo.
- {{JSxRef("Symbol")}} para el `symbol` primitivo.

El método {{JSxRef("Objetos_globales/Object/valueOf"," valueOf()")}} del contenedor devuelve el valor primitivo.

## Aprende más

### Conocimientos generales

- {{JSxRef("Data_structures", "Introducción a los tipos de datos de JavaScript")}}
- [Tipo de dato primitivo](https://es.wikipedia.org/wiki/Tipo_de_dato_primitivo) en Wikipedia

<section id="Quick_links">
 <ol>
  <li><a href="/es/docs/Glossary">Glosario</a>
   <ol>
    <li>{{Glossary("JavaScript")}}</li>
    <li>{{Glossary("string")}}</li>
    <li>{{Glossary("number")}}</li>
    <li>{{Glossary("bigint")}}</li>
    <li>{{Glossary("boolean")}}</li>
    <li>{{Glossary("null")}}</li>
    <li>{{Glossary("undefined")}}</li>
    <li>{{Glossary("symbol")}}</li>
   </ol>
  </li>
  <li>{{JSxRef("Data_structures", "Tipos de datos JavaScript")}}</li>
 </ol>
</section>
