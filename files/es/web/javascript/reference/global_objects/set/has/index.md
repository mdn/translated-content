---
title: Set.prototype.has()
slug: Web/JavaScript/Reference/Global_Objects/Set/has
---

{{JSRef}}

El método **`has()`** retorna un booleano indicando si el elemento especificado existe en el objeto `Set` o no.

## Sintaxis

```
mySet.has(value);
```

### Parametros

- valor
  - : Requerido. El valor del cual se probará su presencia en el objeto `Set`.

### Valor de retorno

- Booleano
  - : Retorna `true` si el elemento con el valor especificado existe en el objeto `Set`; de otra manera retorna `false`.

## Ejemplos

### Usando el método `has`

```js
var mySet = new Set();
mySet.add("foo");

mySet.has("foo"); // retorna true
mySet.has("bar"); // retorna false
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{jsxref("Set")}}
- {{jsxref("Set.prototype.add()")}}
- {{jsxref("Set.prototype.delete()")}}
