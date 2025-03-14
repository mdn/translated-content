---
title: document.anchors
slug: Web/API/Document/anchors
---

{{APIRef("DOM")}}{{deprecated_header()}}La propiedad de solo lectura **`anchors`** de la interfaz {{domxref("Document")}} devuelve una lista de todas las anclas (anchors) del documento.

## Sintaxis

```js
nodeList = document.anchors;
```

### Valor

Una {{domxref("HTMLCollection")}}.

## Ejemplo

```js
if (document.anchors.length >= 5) {
  dump("dump found too many anchors");
  window.location = "http://www.google.com";
}
```

Lo siguiente es un ejemplo que puebla una Tabla de Contenido con cada ancla en la página:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Test</title>
    <script>
      function init() {
        var toc = document.getElementById("toc");
        var i, li, newAnchor;
        for (i = 0; i < document.anchors.length; i++) {
          li = document.createElement("li");
          newAnchor = document.createElement("a");
          newAnchor.href = "#" + document.anchors[i].name;
          newAnchor.innerHTML = document.anchors[i].text;
          li.appendChild(newAnchor);
          toc.appendChild(li);
        }
      }
    </script>
  </head>
  <body onload="init()">
    <h1>Title</h1>
    <h2><a name="contents">Contents</a></h2>
    <ul id="toc"></ul>

    <h2><a name="plants">Plants</a></h2>
    <ol>
      <li>Apples</li>
      <li>Oranges</li>
      <li>Pears</li>
    </ol>

    <h2><a name="veggies">Veggies</a></h2>
    <ol>
      <li>Carrots</li>
      <li>Celery</li>
      <li>Beats</li>
    </ol>
  </body>
</html>
```

[Ver en JSFiddle](https://jsfiddle.net/S4yNp)

## Notas

Por razones de retrocompatibilidad, el conjunto de anclas devuelto sólo contiene aquellas anclas creadas con el atribuo `name`, y no aquellas creadas con el atributo `id`.

## Especificaciones

{{Specifications}}

## Compatibilidad del Navegador

{{Compat}}
