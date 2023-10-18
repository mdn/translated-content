---
title: String.prototype.big()
slug: Web/JavaScript/Reference/Global_Objects/String/big
---

{{JSRef("Objetos_globales", "String")}}

{{deprecated_header}}

## Resumen

Provoca que una cadena sea mostrada con un tamaño de fuente grade, como si estuviese en una etiqueta {{HTMLElement("big")}}.

## Sintaxis

```
cadena.big()
```

## Descripción

Usa el método `big` para formatear y mostrar una cadena en un documento.

## Ejemplos

### Ejemplo: Usando `big`

El siguiente ejemplo usa los métodos de `string` para cambiar el tamañó de una cadena:

```js
var cadenaMundo = "¡Hola Mundo!";

console.log(cadenaMundo.small());
console.log("<P>" + cadenaMundo.big());
console.log("<P>" + cadenaMundo.fontsize(7));
```

Este ejemplo produce el mismo resultado que el siguiente HTML:

```html
<small>¡Hola Mundo!</small>
<p><big>¡Hola Mundo!</big></p>
<p><font size="7">¡Hola Mundo!</font></p>
```

### Vea También

- {{jsxref("String.prototype.fontsize()")}}
- {{jsxref("String.prototype.small()")}}
