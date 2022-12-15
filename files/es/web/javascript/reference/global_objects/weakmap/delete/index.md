---
title: WeakMap.prototype.delete()
slug: Web/JavaScript/Reference/Global_Objects/WeakMap/delete
original_slug: Web/JavaScript/Referencia/Objetos_globales/WeakMap/delete
---

{{JSRef}}

El método **`delete()`** elimina un elemento específico del objeto `WeakMap` .

## Sintaxis

```
wm.delete(key);
```

### Parámetros

- identificador (key)
  - : Requerido. El identificador del elemento a eliminar en el objeto `WeakMap`.

### Valor de retorno

`true` si el elemento del objeto `WeakMap` ha sido eliminado correctamente. Y `false` si la llave a eliminar no fue encontrada en el objeto `WeakMap` o bien, si la llave no es un objeto.

## Ejemplos

### Utilización del método `delete`

```
var wm = new WeakMap();
wm.set(window, "foo");

wm.delete(window); // Devuelve true. Eliminado correctamente.

wm.has(window);    // Devuelve false. El elemento window ya no es parte de WeakMap.
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat("javascript.builtins.WeakMap.delete")}}

## Notas especificas de Firefox

- Anterior a SpiderMonkey 38 (Firefox 38 / Thunderbird 38 / SeaMonkey 2.35), este método lanzaba {{jsxref("TypeError")}} cuando el parámetro `key` no era un objeto. Esto ha sido corregido en la versión 38 y posteriormente devuelve `false` como parte del estándar de ES6 ({{bug(1127827)}}).

## Vea también

- {{jsxref("WeakMap")}}
