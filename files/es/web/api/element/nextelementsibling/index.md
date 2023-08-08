---
title: NonDocumentTypeChildNode.nextElementSibling
slug: Web/API/Element/nextElementSibling
---

{{APIRef}}

La propiedad de sólo lectura `NonDocumentTypeChildNode.nextElementSibling` devuelve el elemento inmediatamente posterior al especificado, dentro de la lista de elementos hijos de su padre, o bien `null` si el elemento especificado es el último en dicha lista.

## Sintaxis

```js
var nextNode = elementNodeReference.nextElementSibling;
```

## Ejemplo

```html
<div id="div-01">Here is div-01</div>
<div id="div-02">Here is div-02</div>

<script type="text/javascript">
  var el = document.getElementById("div-01").nextElementSibling;
  console.log("Siblings of div-01:");
  while (el) {
    console.log(el.nodeName);
    el = el.nextElementSibling;
  }
</script>
```

Este ejemplo muestra en la consola lo siguiente cuando se carga:

```
Siblings of div-01:
DIV
SCRIPT
```

## Polyfill para Internet Explorer 8

Esta propiedad no está soportada con anterioridad a IE9, así que el siguiente fragmento de código puede utilizarse para añadir el soporte a IE8:

```js
// Source: https://github.com/Alhadis/Snippets/blob/master/js/polyfills/IE8-child-elements.js
if (!("nextElementSibling" in document.documentElement)) {
  Object.defineProperty(Element.prototype, "nextElementSibling", {
    get: function () {
      var e = this.nextSibling;
      while (e && 1 !== e.nodeType) e = e.nextSibling;
      return e;
    },
  });
}
```

## Polyfill para Internet Explorer 9+ y Safari

```js
// Source: https://github.com/jserz/js_piece/blob/master/DOM/NonDocumentTypeChildNode/nextElementSibling/nextElementSibling.md
(function (arr) {
  arr.forEach(function (item) {
    if (item.hasOwnProperty("nextElementSibling")) {
      return;
    }
    Object.defineProperty(item, "nextElementSibling", {
      configurable: true,
      enumerable: true,
      get: function () {
        var el = this;
        while ((el = el.nextSibling)) {
          if (el.nodeType === 1) {
            return el;
          }
        }
        return null;
      },
      set: undefined,
    });
  });
})([Element.prototype, CharacterData.prototype]);
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- La interfaz pura {{domxref("ChildNode")}}.
- Tipos de objetos que implementan esta interfaz pura: {{domxref("CharacterData")}}, {{domxref("Element")}}, y {{domxref("DocumentType")}}.
