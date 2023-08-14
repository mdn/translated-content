---
title: Object.prototype.__proto__
slug: Web/JavaScript/Reference/Global_Objects/Object/proto
---

> **Advertencia:** Cambiar la propiedad `[[Prototype]]` de un objeto es, por como los navegadores modernos optimizan las propiedades de acceso, una operación muy lenta en **_todos_** los navegadores y motores JavaScript. Los efectos en el rendimiento de alterar la herencia son muchos y delicados, y no se limita simplemente al tiempo que necesita la asignación `obj.__proto__ = ...` sentencia, sin embargo afecta a **_cualquier_** código que tiene acceso a **_cualquier_** objeto cuya propiedad `[[Prototype]]` ha sido alterada, por lo que se debe de tener mucho cuidado.Si el rendimiento en tu aplicación es necesario, deberías evitar modificar la propiedad `[[Prototype]]` de un objeto. En su lugar, crea un objecto nuevo con la propiedad `[[Prototype]]` deseada usando {{jsxref("Object.create()")}}.

> **Advertencia:** Mientras `Object.prototype.__proto__` es soportado hoy día por la mayoría de navegadores, su existencia y comportamiento exacto solo ha sido estandarizado en la especificación ECMAScript 6 como una característica de legado y para asegurar la compatibilidad entre los navegadores web. Para tener un mejor soporte, es recomendable que se utilice {{jsxref("Object.getPrototypeOf()")}} para obtener el prototipo de un objeto.

{{JSRef}}

La propiedad `__proto__` de {{jsxref("Object.prototype")}} es una propiedad llamada de acceso (una función getter y también función setter) que provee acceso al interior de `[[Prototype]]` (ya sea un objeto o {{jsxref("Global_Objects/null", "null")}}) del objeto a través del cual se accede a ella.

El uso de la propiedad `__proto__` es polémico actualmente, y está rechazado. Originalmente, nunca fué incluído en la especificación de EcmaScript, pero los navegadores modernos decidieron implementarla de todas maneras. Sólo actualmente, `la propiedad __proto__` ha sido estandarizada en la especificación del lenguaje ECMAScript 6, para asegurar la compatibilidad entre navegadores, por lo tanto, esta será soportada en el futuro. Actualmente está obsoleta en favor de {{jsxref("Object.getPrototypeOf")}}/{{jsxref("Reflect.getPrototypeOf")}} y {{jsxref("Object.setPrototypeOf")}}/{{jsxref("Reflect.setPrototypeOf")}} (aunque todavía establecer el `[[Prototype]]` de un objeto es una operación muy lenta, por lo que si nos preocupa el rendimiento, debemos de evitarlo).

La propiedad `__proto__` puede ser usada también en un objeto definido de forma literal, para establecer el `[[Prototype]]` en la creación de este, como alternativa a {{jsxref("Object.create()")}}. Ver: [object initializer / literal syntax](/es/docs/Web/JavaScript/Reference/Operators/Object_initializer).

## Síntaxis

```js
var shape = {};
var circle = new Circle();

// Establecer el objeto prototype.
// OBSOLETO. Esto es solo un ejemplo. NO HACER ESTO en código real.
shape.__proto__ = circle;

// Obtener el objeto prototype
console.log(shape.__proto__ === circle); // true
```

Nota: esto es, dos guiones bajos, seguidos de cinco carácteres "proto", seguido de dos guiones bajos mas.

## Descripción

La función getter `__proto__`el valor interno del `[[Prototype]]` de un objeto. Para objetos creados usando un objeto literal, el valor es {{jsxref("Object.prototype")}}. Para objetos creados usando literales de array, este valor es {{jsxref("Array.prototype")}}. Para funciones, este valor {{jsxref("Function.prototype")}}. Para objetos creados utilizando el operador new fun, donde **fun** es una función constructora incluída en JavaScript ({{jsxref("Array")}}, {{jsxref("Boolean")}}, {{jsxref("Date")}}, {{jsxref("Number")}}, {{jsxref("Object")}}, {{jsxref("String")}}, etcétera—incluyendo nuevos contrusctores conforme JavaScript evoluciona), este valor es `fun.prototype`. (Esto es, si el constructor no devuelve un objeto de forma explícita, o el `fun.prototype` ha sido reasignado desde que la instancia fué creada).

El `__proto__` setter la mutación del objeto `[[Prototype]]` de un objeto. El objeto debe ser extensible según {{jsxref("Object.isExtensible()")}}: si no, un {{jsxref("Global_Objects/TypeError", "TypeError")}} es lanzado. El valor proveído debe ser un objeto o {{jsxref("Global_Objects/null", "null")}}. Provetendo otro tipo de valor no hará nada.

Para entender como los prototipos son usados para herencia, ver el artículo [Inheritance and the prototype chain](/es/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain).

La propiedad `__proto__` es una simple propiedad de acceso a {{jsxref("Object.prototype")}} que consiste en una función getter y setter. Un acceso a la propiedad `__proto__` que eventualmente consulta {{jsxref("Object.prototype")}} encontrará esta propiedad, pero un acceso que no consulta {{jsxref("Object.prototype")}} no lo encontrará. Si alguna otra propiedad `__proto__` es encontrada antes {{jsxref("Object.prototype")}} es consultada, esta propiedad sera ocultada por la encontrada en {{jsxref("Object.prototype")}}.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Notas de compatibilidad

Mientras la especificación ECMAScript 2015 (ES6) dicta que el soporte para `__proto__` es requerido _solo_ para navegadores web (a pesar de ser normativo), otros medios pueden soportarlo por uso de legado.

## Ver también

- {{jsxref("Object.prototype.isPrototypeOf()")}}
- {{jsxref("Object.getPrototypeOf()")}}
- {{jsxref("Object.setPrototypeOf()")}}
