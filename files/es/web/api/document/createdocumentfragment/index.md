---
title: Document.createDocumentFragment()
slug: Web/API/Document/createDocumentFragment
---

{{ ApiRef("DOM") }}

Crea un nuevo [`DocumentFragment`](/es/docs/DOM/DocumentFragment) vacio, dentro del cual un nodo del DOM puede ser adicionado para construir un nuevo arbol DOM fuera de pantalla.

## Sintaxis

```js
var fragment = document.createDocumentFragment();
```

Se crea un objeto [DocumentFragment](/es/docs/DOM/DocumentFragment) vacio, el cual queda listo para que pueda insertarseles nodos en el.

## Notas de uso

[`DocumentFragment`](/es/docs/DOM/DocumentFragment) son Nodos del DOM que nunca forman parte del arbol DOM. El caso de uso mas comun es crear un _document fragment_, agregar elementos al _document fragment_ y luego agregar dicho _document fragment_ al arbol del DOM. En el arbol del DOM, el _document fragment_ es remplazado por todos sus hijos.

Dado que el _document fragment_ es generado en memoria y no como parte del arbol del DOM, agregar elementos al mismo no causan [reflow](http://code.google.com/speed/articles/reflow.html) (computo de la posicion y geometria de los elementos) en la pagina. Como consecuencia, usar _document fragments_ usualmente resultan en [mejor performance](http://ejohn.org/blog/dom-documentfragments/).

Tambien puede utilizarse el constructor {{domxref("documentFragment")}} para crear un nuevo fragmento:

```js
let fragment = new DocumentFragment();
```

## Ejemplo

Este ejemplo crea una lista de los principales navegadores web en un _DocumentFragment_, y luego adiciona el nuevo subarbol DOM al document para ser mostrado.

HTML

```html
<ul id="ul"></ul>
```

JavaScript

```js
var element = document.getElementById("ul"); // assuming ul exists
var fragment = document.createDocumentFragment();
var browsers = ["Firefox", "Chrome", "Opera", "Safari", "Internet Explorer"];

browsers.forEach(function (browser) {
  var li = document.createElement("li");
  li.textContent = browser;
  fragment.appendChild(li);
});

element.appendChild(fragment);
```

Resultado

{{EmbedLiveSample("Example", 600, 140)}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Vea También

- {{domxref("DOMImplementation.createDocument", "document.implementation.createDocument()")}}
- {{domxref("documentFragment")}}
