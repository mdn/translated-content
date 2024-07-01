---
title: Boolean() constructor
slug: Web/JavaScript/Reference/Global_Objects/Boolean/Boolean
---

{{JSRef}}

El constructor **`Boolean()`** se usa para crear objetos {{jsxref("Boolean")}}.

{{EmbedInteractiveExample("pages/js/boolean-constructor.html", "shorter")}}

La fuente de este ejemplo interactivo se almacena en un repositorio de GitHub. Si deseas contribuir al proyecto de ejemplos interactivos, clona <https://github.com/mdn/interactive-examples> y envíanos una solicitud de extracción.

## Sintaxis

```
new Boolean([value])
```

### Parámetros

- `value` {{optional_inline}}
  - : El valor inicial del objeto `Boolean`.

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
