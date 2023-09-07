---
title: Booleano
slug: Web/JavaScript/Reference/Global_Objects/Boolean
---

{{JSRef}}

El objeto **`Boolean`** es un objeto contenedor para un valor booleano.

## Descripción

El valor pasado como primer parámetro se convierte en un valor booleano, si es necesario. Si el valor se omite o es `0`, `-0`, {{jsxref("null")}}, `false`, {{jsxref("NaN")}}, {{jsxref("undefined")}}, o la cadena vacía (`""`), el objeto tiene un valor inicial de `false`. Todos los demás valores, incluido cualquier objeto, un arreglo vacío (`[]`) o la cadena "`false`", crean un objeto con un valor inicial de `true`.

No confundas los valores del `Boolean` {{Glossary("Primitive", "primitivo")}}, `true` y `false` con los valores `true` y `false` del objeto `Boolean`.

**Cualquier** objeto cuyo valor no sea {{jsxref("undefined")}} o {{jsxref("null")}}, incluido un objeto `Boolean` cuyo valor es `false`, se evalúa como `true` cuando se pasa a una declaración condicional. Por ejemplo, la condición en la siguiente declaración {{jsxref("Statements/if...else", "if")}} se evalúa como `true`:

```js
var x = new Boolean(false);
if (x) {
  // este código se ejecuta
}
```

Este comportamiento no se aplica a los `Boolean` primitivos. Por ejemplo, la condición en la siguiente instrucción {{jsxref("Statements/if...else", "if")}} se evalúa como `false`:

```js
var x = false;
if (x) {
  // este código no se ejecuta
}
```

No utilices un objeto `Boolean` para convertir un valor no booleano en un valor booleano. Para realizar esta tarea, en su lugar, usa `Boolean` como función, o un [operador `NOT` doble](/es/docs/Web/JavaScript/Reference/Operators/Logical_NOT):

```js
var x = Boolean(expression); // usa esta...
var x = !!expression; // ... o esta
var x = new Boolean(expression); // ¡no uses esta!
```

Si especificas cualquier objeto, incluido un objeto `Boolean` cuyo valor es `false`, como valor inicial de un objeto `Boolean`, el nuevo objeto `Boolean` tiene un valor de `true`.

```js
var myFalse = new Boolean(false); // valor inicial de false
var g = Boolean(myFalse); // valor inicial de true
var myString = new String("Hola"); // objeto string
var s = Boolean(myString); // valor inicial de true
```

No utilices un objeto `Boolean` en lugar de un `Boolean` primitivo.

> **Nota:** Cuando la propiedad no estándar [`document.all`](/es/docs/Web/API/Document#Properties) se usa como argumento para este constructor, el resultado es un objeto `Boolean` con el valor `false`. Esta propiedad es heredada y no estándar y no se debe usar.

## Constructor

- {{jsxref("Global_Objects/Boolean/Boolean", "Boolean()")}}
  - : Crea un nuevo objeto `Boolean`.

## Métodos de instancia

- {{jsxref("Boolean.prototype.toString()")}}
  - : Devuelve una cadena de `true` o `false` dependiendo del valor del objeto. Redefine el método {{jsxref("Object.prototype.toString()")}}.
- {{jsxref("Boolean.prototype.valueOf()")}}
  - : Devuelve el valor primitivo del objeto {{jsxref("Boolean")}}. Redefine el método {{jsxref("Object.prototype.valueOf()")}}.

## Ejemplos

### Creación de objetos `Boolean` con un valor inicial de `false`

```js
var bNoParam = new Boolean();
var bZero = new Boolean(0);
var bNull = new Boolean(null);
var bEmptyString = new Boolean("");
var bfalse = new Boolean(false);
```

### Creación de objetos `Boolean` con un valor inicial de `true`

```js
var btrue = new Boolean(true);
var btrueString = new Boolean("true");
var bfalseString = new Boolean("false");
var bSuLin = new Boolean("Su Lin");
var bArrayProto = new Boolean([]);
var bObjProto = new Boolean({});
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ve también

- [Boolean](/es/docs/Glossary/Boolean)
- [Boolean primitivo](/es/docs/Web/JavaScript/Data_structures#Boolean_type)
- [Tipo de dato `Boolean` (Wikipedia)](https://es.wikipedia.org/wiki/Tipo_de_dato_lógico)
