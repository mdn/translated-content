---
title: String.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/String/valueOf
---

{{JSRef("Objetos_globales", "String")}}

## Resumen

The **`valueOf()`** método devuelve el valor primitivo de un objeto String.

## Sintaxis

```
caneda.valueOf()
```

## Descripción

El método `valueOf` de `String` devuelve el valor primitivo de un objeto String como un tipo de dato cadena. Este valor es equivalente a String.toString.

Normalmente este método es llamado internamente por JavaScript y no en el código.

## Ejemplos

### Ejemplo: Usando `valueOf`

```js
cadena = new String("Hello world");
alert(cadena.valueOf()); // Displays "Hello world"
```

## Vea También

- {{jsxref("String.prototype.toString()")}}
- {{jsxref("Object.prototype.valueOf()")}}
