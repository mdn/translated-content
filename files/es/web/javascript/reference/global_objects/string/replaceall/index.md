---
title: String.prototype.replaceAll()
slug: Web/JavaScript/Reference/Global_Objects/String/replaceAll
l10n:
  sourceCommit: 6e3889be77fa45d5823216d0cc61b4f7c4b99e1b
---

{{JSRef}}

El método **`replaceAll()`** retorna una nueva cadena con todas las coincidencias de un `patrón` reemplazadas por un `reemplazo`. El `patrón` puede ser una cadena o un objeto {{jsxref("RegExp")}}, y el `reemplazo` puede ser una cadena o una función que será llamada para cada coincidencia. La cadena original permanecerá inalterada.

{{EmbedInteractiveExample("pages/js/string-replaceall.html")}}

## Sintasix

```js-nolint
replaceAll(patrón, reemplazo)
```

### Parámetros

- `patrón`

  - : Puede ser una cadena o un objeto con un método [`Symbol.replace`](/es/docs/Web/JavaScript/Reference/Global_Objects/Symbol/replace) — el típico ejemplo es una [expresión regular (_regex_)](/es/docs/Web/JavaScript/Reference/Global_Objects/RegExp). Cualquier valor que no tenga el método `Symbol.replace` será convertido a una cadena.

    Si `patrón` [es una _regex_](/es/docs/Web/JavaScript/Reference/Global_Objects/RegExp#special_handling_for_regexes), entonces debe tener el parámetro global (`g`) establecido, o un {{jsxref("TypeError")}} es lanzado.

- `reemplazo`

  - : Puede ser una cadena o una función. El reemplazo tiene la misma semántica que la de [`String.prototype.replace()`](/es/docs/Web/JavaScript/Reference/Global_Objects/String/replace).

### Valor de retorno

Una nueva cadena, con todas las coincidencias de un patrón reemplazadas por un reemplazo.

### Excepciones

- {{jsxref("TypeError")}}
  - : Lanzado si el `patrón` [es una _regex_](/es/docs/Web/JavaScript/Reference/Global_Objects/RegExp#special_handling_for_regexes) que no tiene el parámetro global (`g`) configurado (su propiedad [`flags`](/es/docs/Web/JavaScript/Reference/Global_Objects/RegExp/flags) no contiene `"g"`)

## Descripción

Este método no modifica el valor de la cadena en la que es ejecutado. Regresa una nueva cadena.

A diferencia de [`replace()`](/es/docs/Web/JavaScript/Reference/Global_Objects/String/replace), este método reemplazará todas las coincidencias de una cadena, no solo la primera. Esto es especialmente útil si la cadena no es estáticamente conocida, como llamando al contructor del objeto [`RegExp()`](/es/docs/Web/JavaScript/Reference/Global_Objects/RegExp/RegExp) sin escapar caracteres especiales podría cambiar su semántica sin intención.

```js
function unsafeRedactName(text, name) {
  return text.replace(new RegExp(name, "g"), "[REDACTED]");
}
function safeRedactName(text, name) {
  return text.replaceAll(name, "[REDACTED]");
}

const report =
  "A hacker called ha.*er used special characters in their name to breach the system.";

console.log(unsafeRedactName(report, "ha.*er")); // "A [REDACTED]s in their name to breach the system."
console.log(safeRedactName(report, "ha.*er")); // "A hacker called [REDACTED] used special characters in their name to breach the system."
```

Si el `patrón` es un objeto con un método [`Symbol.replace`](/es/docs/Web/JavaScript/Reference/Global_Objects/Symbol/replace) (incluyendo objetos `RegExp`), ese método es llamado con la cadena objetivo y `reemplazo` como argumento. Su valor de retorno se convierte en el valor de retorno de `replaceAll()`. En este caso el comportamiento de `replaceAll()` es enteramente codificado por el método `@@replace`, y por lo tanto tendrá el mismo resultado que `replace()` (aparte de la validación extra de que _regex_ es global).

Si el `patrón` es una cadena vacía, el reemplazo será insertado entre cada unidad de código UTF-16, similar al comportamiento de [`split()`](/es/docs/Web/JavaScript/Reference/Global_Objects/String/split).

```js
"xxx".replaceAll("", "_"); // "_x_x_x_"
```

Para más información acerca de cómo interactúan las propiedades de una _regex_ (especialmente el paramétro [sticky](/es/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky)), véase [`RegExp.prototype[@@replace]()`](/es/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@replace).

## Ejemplos

### Usando replaceAll()

```js
"aabbcc".replaceAll("b", ".");
// 'aa..cc'
```

### Excepciones de una regex no global

Cuando se usa una expresión regular como valor de búsqueda, ésta debe ser global. Esto no funcionará:

```js example-bad
"aabbcc".replaceAll(/b/, ".");
// TypeError: replaceAll must be called with a global RegExp
```

Esto sí funcionará:

```js example-good
"aabbcc".replaceAll(/b/g, ".");
// "aa..cc"
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [Polyfill de `String.prototype.replaceAll` en `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.replace", "String.prototype.replace()")}}
- {{jsxref("String.prototype.match", "String.prototype.match()")}}
- {{jsxref("RegExp.prototype.exec", "RegExp.prototype.exec()")}}
- {{jsxref("RegExp.prototype.test", "RegExp.prototype.test()")}}
