---
title: WeakMap.prototype.set()
slug: Web/JavaScript/Reference/Global_Objects/WeakMap/set
tags:
  - ECMAScript6
  - JavaScript
  - Method
  - Protocols
  - WeakMap
translation_of: Web/JavaScript/Reference/Global_Objects/WeakMap/set
original_slug: Web/JavaScript/Referencia/Objetos_globales/WeakMap/set
---
{{JSRef}}

El método **`set()`** añade un nuevo elemento con su `key` y `value` específicos al objeto `WeakMap`.

{{EmbedInteractiveExample("pages/js/weakmap-prototype-set.html")}}

## Sintaxis

```
wm.set(key, value);
```

### Parámetros

- indentificador (key)
  - : Requerido. El identificador (objeto) del elemento a añadir al objeto `WeakMap`.
- valor (value)
  - : Requerido. El valor del elemento a añadir al objeto `WeakMap`.

### Valor devuelto

El objeto `WeakMap`.

## Ejemplos

### Utilización del método `set`

```js
var wm = new WeakMap();
var obj = {};

// Agregando nuevos elementos a WeakMap
wm.set(obj, 'foo').set(window, 'bar'); // encadenamiento
// Actualiza el un elemento en el objeto WeakMap
wm.set(obj, 'baz');
```

## Especificaciones

| Especificación                                                                                           | Estado                       | Comentarios         |
| -------------------------------------------------------------------------------------------------------- | ---------------------------- | ------------------- |
| {{SpecName('ES2015', '#sec-weakmap.prototype.set', 'WeakMap.prototype.set')}} | {{Spec2('ES2015')}}     | Definición inicial. |
| {{SpecName('ESDraft', '#sec-weakmap.prototype.set', 'WeakMap.prototype.set')}} | {{Spec2('ESDraft')}} |                     |

## Compatibilidad con navegadores

{{Compat("javascript.builtins.WeakMap.set")}}

## Notas específicas de Firefox

- Antes de Firefox 33 {{geckoRelease("33")}}, `WeakMap.prototype.set` devolvía `undefined` y no permitía el encadenamiento. Esto ha sido corregido ({{bug(1031632)}}). Este comportamiento puede encontrarse también en Chrome/v8 ([fallo](https://code.google.com/p/v8/issues/detail?id=3410)).

## Vea también

- {{jsxref("WeakMap")}}
- {{jsxref("WeakMap.prototype.get()")}}
- {{jsxref("WeakMap.prototype.has()")}}
