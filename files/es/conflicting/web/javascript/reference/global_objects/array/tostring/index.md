---
title: Array.prototype.toSource()
slug: conflicting/Web/JavaScript/Reference/Global_Objects/Array/toString
original_slug: Web/JavaScript/Reference/Global_Objects/Array/toSource
---

{{JSRef}} {{non-standard_header}}

El método **`toSource()`** devuelve un string representando el código fuente de un arreglo.

## Sintaxis

```js
arr.toSource()
```

### Valor devuelto

Un string representando el código fuente del arreglo.

## Descripción

El método `toSource` retorna los siguientes valores:

- Para el objeto global {{jsxref("Array")}}, `toSource` devuelve el siguiente string indicando que el código fuente no está disponible:

  ```js
  function Array() {
      [native code]
  }
  ```

- Para instancias de {{jsxref("Array")}}, `toSource` devuelve un string representando el código fuente.

Este método suele ser llamado internamente por JavaScript y no explícitamente en código. Puede usar `toSource` mientras depura para examinar el contenido de un arreglo.

## Ejemplos

### Examinar el código fuente de un arreglo

Para examinar el código fuente de un arreglo:

```js
var alpha = new Array('a', 'b', 'c');

alpha.toSource();
//devuelve ['a', 'b', 'c']
```

## Ver también

- {{jsxref("Object.prototype.toSource()")}}
- {{jsxref("Array.prototype.toString()")}}
