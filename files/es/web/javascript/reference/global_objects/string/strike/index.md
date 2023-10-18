---
title: String.prototype.strike()
slug: Web/JavaScript/Reference/Global_Objects/String/strike
---

{{JSRef("Objetos_globales", "String")}}

{{deprecated_header}}

## Resumen

Causa que una cadena se muestre como texto tachado, como si estuviese dentro de una etiqueta {{HTMLElement("strike")}}.

## Sintaxis

```
cadena.strike()
```

## Descripción

Usa el método `strike` para formatear y mostrar una cadena en un documento.

## Ejemplos

### Ejemplo: Usando métodos de `string` para cambiar el formateado de una cadena

El siguiente ejemplo usa los métodos de `string` para cambiar el formateado de una cadena:

```js
var cadenaMundo = "¡Hola mundo!";

console.log(cadenaMundo.blink());
console.log(cadenaMundo.bold());
console.log(cadenaMundo.italics());
console.log(cadenaMundo.strike());
```

Este ejemplo produce el mismo resultado que el siguiente código HTML:

```html
<blink>¡Hola mundo!</blink>
<b>¡Hola mundo!</b>
<i>¡Hola mundo!</i>
<strike>¡Hola mundo!</strike>
```

## Vea También

- {{jsxref("String.prototype.blink()")}}
- {{jsxref("String.prototype.bold()")}}
- {{jsxref("String.prototype.italics()")}}
