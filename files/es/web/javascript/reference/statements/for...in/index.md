---
title: for...in
slug: Web/JavaScript/Reference/Statements/for...in
---

{{jsSidebar("Statements")}}

La instrucción {{JSxRef("Sentencias/for...in", "for-in")}} itera sobre todas las {{JSxRef("../Enumerability_and_ownership_of_properties", "propiedades enumerables")}} de un objeto que está codificado por cadenas (ignorando los codificados por {{JSxRef("Objetos_globales/Symbol", "Símbolos")}}, incluidas las propiedades enumerables heredadas.

{{EmbedInteractiveExample("pages/js/statement-forin.html")}}

La fuente de este ejemplo interactivo se almacena en un repositorio de GitHub. Si deseas contribuir al proyecto de ejemplos interactivos, clona <https://github.com/mdn/interactive-examples> y envíanos una solicitud de extracción.

## Sintaxis

```
for (variable in objeto)
  instrucción
```

- `variable`
  - : Asigna un nombre de propiedad diferente a la _variable_ en cada iteración.
- `objeto`
  - : Objeto cuyas propiedades enumerables que no son símbolos se iteran.

## Descripción

Un bucle `for...in` solo itera sobre propiedades enumerables que no son símbolo. Los objetos creados a partir de constructores integrados como `Array` y `Object` han heredado propiedades no enumerables de `Object.prototype` y `String.prototype`, como el método {{JSxRef("String.indexOf", "indexOf()")}} de {{JSxRef("String")}} o el método {{JSxRef("Object.toString", "toString()")}} de {{JSxRef("Object")}}. El bucle iterará sobre todas las propiedades enumerables del objeto en sí y aquellas que el objeto hereda de su cadena de prototipos (las propiedades de los prototipos más cercanos tienen prioridad sobre las de los prototipos más alejados del objeto en su cadena de prototipos).

### Propiedades `deleted`, `added` o `modified`

Un bucle `for...in` itera sobre las propiedades de un objeto en un orden arbitrario (consulta el operador {{JSxRef("Operadores/delete", "delete")}} para obtener más información sobre por qué no puede depender del aparente orden de la iteración, al menos en una configuración entre navegadores).

Si una propiedad se modifica en una iteración y luego se visita en un momento posterior, su valor en el bucle es su valor en ese momento posterior. Una propiedad que se elimina antes de haber sido visitada no se visitará más tarde. Las propiedades agregadas al objeto sobre el que se está produciendo la iteración se pueden visitar u omitir de la iteración.

En general, es mejor no agregar, modificar o eliminar propiedades del objeto durante la iteración, aparte de la propiedad que se está visitando actualmente. No hay garantía de si se visitará una propiedad agregada, si se visitará una propiedad modificada (distinta de la actual) antes o después de que se modifique, o si se visitará una propiedad eliminada antes de eliminarla.

### Iteración en arreglos y `for...in`

> **Nota:** `for...in` no se debe usar para iterar sobre un {{JSxRef("Array")}} donde el orden del índice es importante.

Los índices del arreglo son solo propiedades enumerables con nombres enteros y, por lo demás, son idénticos a las propiedades generales del objeto. No hay garantía de que `for...in` devuelva los índices en un orden en particular. La instrucción de bucle `for...in` devolverá todas las propiedades enumerables, incluidas aquellas con nombres no enteros y aquellas que se heredan.

Debido a que el orden de iteración depende de la implementación, es posible que la iteración sobre un arreglo no visite los elementos en un orden coherente. Por lo tanto, es mejor usar un bucle {{JSxRef("Sentencias/for", "for")}} con un índice numérico (o {{JSxRef("Array.prototype.forEach()")}} o el bucle {{JSxRef("Sentencias/for...of", "for...of")}}) cuando se itera sobre arreglos donde el orden de acceso es importante.

### Iterar solo sobre propiedades directas

Si solo deseas considerar las propiedades adjuntas al objeto en sí mismo, y no sus prototipos, usa {{JSxRef("Object.getOwnPropertyNames", "getOwnPropertyNames()")}} o realiza una {{JSxRef("Object.prototype.hasOwnProperty", "hasOwnProperty()")}} verificación ({{jsxref("Object.prototype.propertyIsEnumerable", "propertyIsEnumerable()")}} también se puede utilizar). Alternativamente, si sabes que no habrá ninguna interferencia de código externo, puedes extender los prototipos incorporados con un método de verificación.

## ¿Por qué usar `for...in`?

Dado que `for...in` está construido para iterar propiedades de objeto, no se recomienda su uso con arreglos y opciones como `Array.prototype.forEach()` y existe `for...of`, ¿cuál podría ser el uso de `for...in`?

Es posible que se utilice de forma más práctica con fines de depuración, ya que es una forma fácil de comprobar las propiedades de un objeto (mediante la salida a la consola o de otro modo). Aunque los arreglos suelen ser más prácticos para almacenar datos, en situaciones en las que se prefiere un par clave-valor para trabajar con datos (con propiedades que actúan como la "clave"), puede haber casos en los que desees comprobar si alguna de esas claves cumple un valor particular.

## Ejemplos

### Utilizar `for...in`

El siguiente bucle `for...in` itera sobre todas las propiedades enumerables que no son símbolos del objeto y registra una cadena de los nombres de propiedad y sus valores.

```js
var obj = { a: 1, b: 2, c: 3 };

for (const prop in obj) {
  console.log(`obj.${prop} = ${obj[prop]}`);
}

// Produce:
// "obj.a = 1"
// "obj.b = 2"
// "obj.c = 3"
```

### Iterar propiedades directas

La siguiente función ilustra el uso de {{JSxRef("Object.prototype.hasOwnProperty", "hasOwnProperty()")}} — las propiedades heredadas no se muestran.

```js
var triangle = { a: 1, b: 2, c: 3 };

function ColoredTriangle() {
  this.color = "red";
}

ColoredTriangle.prototype = triangle;

var obj = new ColoredTriangle();

for (const prop in obj) {
  if (obj.hasOwnProperty(prop)) {
    console.log(`obj.${prop} = ${obj[prop]}`);
  }
}

// Produce:
// "obj.color = red"
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ve también

- {{JSxRef("Sentencias/for...of", "for...of")}} — una declaración similar que itera sobre la propiedad `values`
- {{JSxRef("Sentencias/for_each...in", "for each...in")}} — una declaración similar pero obsoleta que itera sobre los valores de las propiedades de un objeto, en lugar de los nombres de las propiedades en sí
- {{JSxRef("Sentencias/for", "for")}}
- {{JSxRef("../Guide/Iterators_and_Generators", "Expresiones generadoras")}} (usa la sintaxis `for...in`)
- {{JSxRef("../Enumerability_and_ownership_of_properties", "Enumerabilidad y posesión de propiedades")}}
- {{JSxRef("Object.getOwnPropertyNames()")}}
- {{JSxRef("Object.prototype.hasOwnProperty()")}}
- {{JSxRef("Array.prototype.forEach()")}}
