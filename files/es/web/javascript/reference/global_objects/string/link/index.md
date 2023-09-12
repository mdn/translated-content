---
title: String.prototype.link()
slug: Web/JavaScript/Reference/Global_Objects/String/link
---

{{JSRef("Objetos_globales", "String")}}

## Resumen

Crea un enlace de hipertexto HTML, {{HTMLElement("a")}}, que solicita otra URL.

## Sintaxis

```
cadena.link(atributoHref)
```

### Parámetros

- `atributoHref`
  - : Cualquier cadena que especifique el atributo [`href`](/es/docs/Web/HTML/Element/a#href) de la etiqueta {{HTMLElement("a")}}; debería ser una URL válida (relativa o absoluta).

## Descripción

Usa el método `link` para crear un atajo HTML para un enlace de hipertexto. La cadena devuelta puede ser añadida al documento vía {{domxref("element.innerHTML")}}.

Los enlaces creados con el método `link` serán elementos del array `links` del objeto `document`. Vea {{domxref("document.links")}}.

## Ejemplos

### Ejemplo: Usando `link`

El siguiente ejemplo muestra la palabra "Netscape" como un enlace de hipertexto que devuelve al usuario a la página inicial de Netscape:

```js
var textoActivo = "MDN";
var URL = "https://developer.mozilla.org/";

console.log("Haga click para volver a " + textoActivo.link(URL));
```

Este ejemplo produce el mismo resultado que el siguiente código HTML:

```html
Haga click para volver a <a href="http://developer.mozilla.org/">MDN</a>
```

## Vea También

- {{jsxref("String.prototype.anchor()")}}
