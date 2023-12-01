---
title: String.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/String/toString
---

{{JSRef("Objetos_globales", "String")}}

## Resumen

El **`toString()`** método devuelve una cadena que representa al objeto especificado.

## Sintaxis

```
cadena.toString()
```

## Descripción

El objeto `String` sobreescribe el método `toString` del objeto {{jsxref("Object")}} object; no hereda {{jsxref("Object.toString()")}}. Para objetos `String`, el método `toString` devuelve una cadena que representa al objeto.

## Ejemplos

### Ejemplo: Usando `toString`

El siguiente ejemplo muestra el valor cadena de un objeto String:

```js
cadena = new String("Hello world");
alert(cadena.toString()); // Displays "Hello world"
```

## Vea También

- {{jsxref("Object.prototype.toSource()")}}
- {{jsxref("String.prototype.valueOf()")}}
