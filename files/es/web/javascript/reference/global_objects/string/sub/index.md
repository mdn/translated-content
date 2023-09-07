---
title: String.prototype.sub()
slug: Web/JavaScript/Reference/Global_Objects/String/sub
---

{{JSRef("Objetos_globales", "String")}}

## Resumen

Causa que una cadena se muestre como subíndice, como si estuviese dentro de una etiqueta {{HTMLElement("sub")}}.

## Sintaxis

```
cadena.sub()
```

## Descripción

Usa el método `sub` junto para formatear y mostrar una cadena en un documento.

## Ejemplos

### Ejemplo: Usando los métodos `sub` y `sup` para formatear una cadena

El siguiente ejemplo usa los métodos `sub` y `sup` para formatear una cadena:

```js
var superText = "superscript";
var subText = "subscript";

console.log("Esto es lo que un " + superText.sup() + " parece.");
console.log("Esto es lo que un " + subText.sub() + " parece.");
```

Este ejemplo produce el mismo resultado que el siguiente código HTML:

```html-nolint
Esto es lo que <sup>superscript</sup> parece.
Esto es lo que <sub>subscript</sub> parece.
```

### Vea También

- {{jsxref("String.prototype.sup()")}}
