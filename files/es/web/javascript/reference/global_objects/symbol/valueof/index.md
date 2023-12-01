---
title: Symbol.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Symbol/valueOf
l10n:
  sourceCommit: cf607d68522cd35ee7670782d3ee3a361eaef2e4
---

{{JSRef}}

El método **`valueOf()`** devuelve el valor primitivo de un objeto Symbol.

## Sintaxis

```js
valueOf();
```

### Valor de retorno

El valor primitivo del objeto {{jsxref("Symbol")}} especificado.

## Descripción

El método `valueOf()` de {{jsxref("Symbol")}} devuelve el valor primitivo de un objeto Symbol como un tipo de datos Symbol.

JavaScript llama al método `valueOf()` para convertir un objeto en un valor primitivo. Rara vez es necesario invocar el método `valueOf()`; JavaScript lo invoca automáticamente cuando encuentra un objeto del que se espera un valor primitivo.

## Ejemplos

### Usando valueOf()

```js
const sym = Symbol("example");
sym === sym.valueOf(); // true
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- {{jsxref("Object.prototype.valueOf()")}}
