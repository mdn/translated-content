---
title: WeakMap.prototype.delete()
slug: Web/JavaScript/Reference/Global_Objects/WeakMap/delete
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

{{Compat}}

## Vea también

- {{jsxref("WeakMap")}}
