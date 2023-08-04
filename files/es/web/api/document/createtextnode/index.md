---
title: Document.createTextNode()
slug: Web/API/Document/createTextNode
---

{{APIRef("DOM")}}

Crea un nuevo nodo de texto. Este método puede ser usado para escapar caracteres HTML.

## Sintaxis

```js
var text = document.createTextNode(data);
```

- _text_ es un nodo Text.
- _data_ es una cadena de texto [string](/es/docs/Web/JavaScript/Reference/Global_Objects/String) que contiene los datos a poner en el nodo de texto.

## Ejemplo

```html
<!doctype html>
<html lang="en">
  <head>
    <title>createTextNode example</title>
    <script>
      function addTextNode(text) {
        var newtext = document.createTextNode(text),
          p1 = document.getElementById("p1");

        p1.appendChild(newtext);
      }
    </script>
  </head>

  <body>
    <button onclick="addTextNode('YES! ');">YES!</button>
    <button onclick="addTextNode('NO! ');">NO!</button>
    <button onclick="addTextNode('WE CAN! ');">WE CAN!</button>

    <hr />

    <p id="p1">First line of paragraph.</p>
  </body>
</html>
```

## Especificaciones

{{Specifications}}

## Compatibilidad del Navegador

{{Compat}}
