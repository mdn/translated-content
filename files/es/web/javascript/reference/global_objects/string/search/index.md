---
title: String.prototype.search()
slug: Web/JavaScript/Reference/Global_Objects/String/search
---

{{JSRef("Objetos_globales", "String")}}

## Resumen

El método **`search()`** ejecuta una búsqueda que encaje entre una expresión regular y el objeto `String` desde el que se llama.

## Sintaxis

```
str.search(expresionregular)
```

### Parámetros

- regexp
  - : Un objeto [expresión regular](/es/docs/Web/JavaScript/Referencia/Objetos_globales/RegExp). Si se pasa un objeto `obj` que no sea una expresión regular, se convierte implicitamente en una expresión regualar usando `new RegExp(obj)`.

### Valor devuelto

El índice de la primera coincidencia entre la expresión regular y la cadena de texto proporcionada, si no se encuentra devuelve **-1**.

## Descripción

Cuando se desee saber en qué casos un patrón se encuentra en una cadena de texto utiliza `search()` (si sólo deseas saber si existe, utiliza el método {{jsxref("RegExp.prototype.test()", "test()")}} del prototipo de `RegExp`); para más información (pero de ejecución más lenta) utiliza {{jsxref("String.prototype.match()", "match()")}} (similar al método {{jsxref("RegExp.prototype.exec()", "exec()")}} de las expresiones regulares).

## Ejemplos

### Utilizando `search()`

El siguiente ejemplo imprime un mensaje dependiendo de cuál sea el resultado de la evaluación.

```js
function testinput(re, str) {
  var midstring;
  if (str.search(re) != -1) {
    midstring = " contains ";
  } else {
    midstring = " does not contain ";
  }
  console.log(str + midstring + re);
}
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Vea también

- {{jsxref("String.prototype.match()")}}
- {{jsxref("RegExp.prototype.exec()")}}
