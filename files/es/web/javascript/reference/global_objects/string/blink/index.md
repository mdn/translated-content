---
title: String.prototype.blink()
slug: Web/JavaScript/Reference/Global_Objects/String/blink
---

{{JSRef("Objetos_globales", "String")}}

{{deprecated_header}}

## Resumen

Causa que una cadena parpadee como si estuviese en una etiqueta {{HTMLElement("blink")}}.

## Sintaxis

```
cadena.blink()
```

## Descripción

Usa el método `blink` para formatear y mostrar una cadena en un documento.

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
<i>¡Hola mundo!</b>
<strike>¡Hola mundo!</strike>
```

## Vea también

- {{jsxref("String.prototype.bold()")}}
- {{jsxref("String.prototype.italics()")}}
- {{jsxref("String.prototype.strike()")}}
