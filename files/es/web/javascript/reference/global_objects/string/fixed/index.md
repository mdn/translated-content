---
title: String.prototype.fixed()
slug: Web/JavaScript/Reference/Global_Objects/String/fixed
---

{{JSRef("Objetos_globales", "String")}}

{{deprecated_header}}

## Resumen

Causa que una cadena se muestre con una fuente de ancho fijo, como si estuviesde dentro de una etiqueta {{HTMLElement("tt")}}.

## Sintaxis

```
cadena.fixed()
```

## Descripción

Usa el método `fixed` para formatear y mostrar unacadena en un documento.

## Ejemplos

### Ejemplo: Usando `fixed` para cambiar el formateado de una cadena

El siguiente ejemplo usa el método `fixed` para cambiar el formateado de una cadena:

```js
var cadenaMundo = "¡Hola Mundo!";
console.log(cadenaMundo.fixed());
```

Este ejemplo produce el mismo resultado que el siguiente código HTML:

```html
<tt>¡Hola Mundo!</tt>
```

### Vea También

- {{jsxref("String.prototype.bold()")}}
- {{jsxref("String.prototype.italics()")}}
- {{jsxref("String.prototype.strike()")}}
