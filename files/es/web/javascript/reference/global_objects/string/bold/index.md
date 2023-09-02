---
title: String.prototype.bold()
slug: Web/JavaScript/Reference/Global_Objects/String/bold
---

{{JSRef("Objetos_globales", "String")}}

{{Deprecated_header}}

## Resumen

Provoca que una cadena se muestre en negrita como si estuviera en una etiqueta {{HTMLElement("b")}}.

## Sintaxis

```
cadena.bold()
```

## Descripción

Usa el método `bold` para formatear y mostrar una cadena en un documento.

## Ejemplos

### Ejemplo: Usando métodos de `string` para cambiar el formateado de una cadena

El siguiente ejemplo usa métodos de `string` para cambiar el formateado de una cadena:

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

### Vea También

- {{jsxref("String.prototype.blink()")}}
- {{jsxref("String.prototype.italics()")}}
- {{jsxref("String.prototype.strike()")}}
