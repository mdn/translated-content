---
title: String.prototype.sup()
slug: Web/JavaScript/Reference/Global_Objects/String/sup
---

{{JSRef("Objetos_globales", "String")}}

## Resumen

Causa que una cadena se muestre como superíndice, como si estuviese dentro de una etiqueta {{HTMLElement("sup")}}.

## Sintaxis

```
cadena.sup()
```

## Descripción

Usa el método `sup` junto para formatear y mostrar una cadena en un documento.

## Ejemplos

### Ejemplo: Usando los métodos `sub` y `sup` para formatear una cadena

El siguiente ejemplo usa los métodos `sub` y `sup` para formatear una cadena:

```js
var textoSuper = "superscript";
var textoSub = "subscript";

console.log("Esto es lo que un " + textoSuper.sup() + " parece.");
console.log("Esto es lo que un " + textoSub.sub() + " parece.");
```

Este ejemplo produce el mismo resultado que el siguiente código HTML:

```html
Esto es lo que <sup>superscript</sup> parece. Esto es lo que
<sub>subscript</sub> parece.
```

### Vea También

- {{jsxref("String.prototype.sub()")}}
