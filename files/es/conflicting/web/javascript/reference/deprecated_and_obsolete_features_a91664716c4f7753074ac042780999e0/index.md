---
title: WeakMap.prototype.clear()
slug: >-
  conflicting/Web/JavaScript/Reference/Deprecated_and_obsolete_features_a91664716c4f7753074ac042780999e0
tags:
  - JavaScript
  - Obsolete
  - Protocols
  - WeakMap
translation_of: Web/JavaScript/Reference/Global_Objects/WeakMap/clear
original_slug: Web/JavaScript/Reference/Global_Objects/WeakMap/clear
---
{{JSRef}} {{obsolete_header}}

El método **`clear()`** es utilizado para suprimir todos los elementos del objeto `WeakMap`, sin embargo, ya no es parte de ECMAScript, ni de sus implementaciones.

## Sintaxis

```
wm.clear();
```

## Ejemplos

### Utilización del método `clear`

```plain example-bad
var wm = new WeakMap();
var obj = {};

wm.set(obj, 'foo');
wm.set(window, 'bar');

wm.has(obj); // true
wm.has(window); // true

wm.clear();

wm.has(obj)  // false
wm.has(window)  // false
```

## Especificaciones

No es parte de ninguna especificación actual o borrador. Este método fue parte de ECMAScript 6 como un bosquejo hasta la revisión 28 (versión de Octubre 14, 2014), sin embargo ha sido eliminado en versiones posteriores. No es parte de la última versión estándar.

## Compatibilidad con navegadores

{{Compat("javascript.builtins.WeakMap.clear")}}

## Vea también

- {{jsxref("WeakMap")}}
