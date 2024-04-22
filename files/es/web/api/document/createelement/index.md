---
title: Document.createElement()
slug: Web/API/Document/createElement
---

{{APIRef("DOM")}}

En un documento [HTML](/es/docs/Web/HTML), el método **`Document.createElement()`** crea un elemento HTML especificado por su `tagName`, o un {{domxref("HTMLUnknownElement")}} si su `tagName` no se reconoce. En un documento [XUL](/es/docs/Mozilla/Tech/XUL), crea el elemento XUL especificado. En otros documentos, crea un elemento con un namespace URI `null`.

Para declarar el namespace URI del elemento, utiliza [`document.createElementNS()`](/es/docs/Web/API/Document/createElementNS).

## Sintaxis

```js
var element = document.createElement(tagName, [options]);
```

### Parámetros

- `tagName`
  - : Cadena que especifica el tipo de elemento a crear. El {{domxref("Node.nodeName", "nodeName")}} del elemento creado se inicializa con el valor de `tagName`. No utilizar nombres reservados (como "html:a") con este método. Al ser invocado en un documento HTML, `createElement()` convierte `tagName` a minúsculas antes de crear el elemento. En Firefox, Opera, y Chrome, `createElement(null)` funciona como `createElement("null")`.
- `options`{{optional_inline}}

  - : Un objeto opcional `ElementCreationOptions` que contiene una única propiedad llamada `is`, cuyo valor es el de la etiqueta name de un elemento personalizado definido previamente utilizando `customElements.define()`. Para compatibilidad con versiones anteriores de [Elements specification](https://www.w3.org/TR/custom-elements/), algunos navegadores podrían permitir pasar una cadena aquí en vez de un objeto, donde el valor de la cadena es la etiqueta name del elemento creado. Ver [Extending native HTML elements](https://developers.google.com/web/fundamentals/primers/customelements/#extendhtml) para más información sobre como usar este parámetro.

    El nuevo elemento recibirá el atributo cuyo valor es la etiqueta name del elemento personalizado. Los elementos personalizados son una característica experimental solo disponible en algunos navegadores.

### Retorna

El nuevo [`Element`](/es/docs/Web/API/Element).

## Ejemplo

Crea un nuevo `<div>` y lo inserta antes del elemento con ID "`div1`".

### HTML

```html
<!doctype html>
<html>
  <head>
    <title>||Trabajando con elementos||</title>
  </head>
  <body>
    <div id="div1">El texto superior se ha creado dinámicamente.</div>
  </body>
</html>
```

### JavaScript

```js
document.body.onload = addElement;

function addElement() {
  // crea un nuevo div
  // y añade contenido
  var newDiv = document.createElement("div");
  var newContent = document.createTextNode("Hola!¿Qué tal?");
  newDiv.appendChild(newContent); //añade texto al div creado.

  // añade el elemento creado y su contenido al DOM
  var currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);
}
```

{{EmbedLiveSample("Example", 500, 50)}}

## Especificaciones

{{Specifications}}

## Compatibilidad del Navegador

{{Compat}}

## Ver también

- {{domxref("Node.removeChild()")}}
- {{domxref("Node.replaceChild()")}}
- {{domxref("Node.appendChild()")}}
- {{domxref("Node.insertBefore()")}}
- {{domxref("Node.hasChildNodes()")}}
