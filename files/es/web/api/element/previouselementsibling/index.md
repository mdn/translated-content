---
title: NonDocumentTypeChildNode.previousElementSibling
slug: Web/API/Element/previousElementSibling
---

{{APIRef}}

La propiedad de sólo lectura `NonDocumentTypeChildNode.previousElementSibling` retorna el {{domxref("Element")}} predecesor inmediato al especificado dentro de la lista de hijos de su padre, o bien `null` si el elemento especificado es el primero de dicha lista.

## Sintaxis

```js
prevNode = elementNodeReference.previousElementSibling;
```

## Ejemplo

```html
<div id="div-01">Aquí está div-01</div>
<div id="div-02">Aquí está div-02</div>
<li>Esto es un elemento de lista</li>
<li>Esto es otro elemento de lista</li>
<div id="div-03">Aquí esta div-03</div>

<script>
  var el = document.getElementById("div-03").previousElementSibling;
  document.write("<p>Hermanos de div-03</p><ol>");
  while (el) {
    document.write("<li>" + el.nodeName + "</li>");
    el = el.previousElementSibling;
  }
  document.write("</ol>");
</script>
```

Este ejemplo muestra lo siguiente en la página cuando carga:

```
Hermanos de div-03

   1. LI
   2. LI
   3. DIV
   4. DIV
```

## Polyfill para Internet Explorer 8

Esta propiedad no está soportada con anterioridad a IE9, así que puede utilizarse el siguiente fragmento para añadri el soporte a IE8:

```js
// Source: https://github.com/Alhadis/Snippets/blob/master/js/polyfills/IE8-child-elements.js
if (!("previousElementSibling" in document.documentElement)) {
  Object.defineProperty(Element.prototype, "previousElementSibling", {
    get: function () {
      var e = this.previousSibling;
      while (e && 1 !== e.nodeType) e = e.previousSibling;
      return e;
    },
  });
}
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- El interfaz puro {{domxref("NonDocumentTypeChildNode")}}.
- Tipos de objetos que implementan este interfaz puro: {{domxref("CharacterData")}}, y {{domxref("Element")}}.
