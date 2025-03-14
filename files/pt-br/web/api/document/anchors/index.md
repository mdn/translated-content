---
title: Document.anchors
slug: Web/API/Document/anchors
---

{{APIRef("DOM")}}

{{deprecated_header("HTML5")}}

`anchors` retorna uma lista de todas as âncoras no documento.

## Sintaxe

```
nodeList = document.anchors;
```

## Exemplo

```js
if (document.anchors.length >= 5) {
  dump("dump found too many anchors");
  window.location = "http://www.google.com";
}
```

O código a seguir é um exemplo que popula automaticamente um índice de conteúdo com cada âncora encontrada na página:

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

[View on JSFiddle](https://jsfiddle.net/S4yNp)

## Notas

Por motivos de compatibilidade, o conjunto de âncoras retornadas por `anchors` contém apenas as âncoras criadas com o atributo `name`, não incluindo as âncoras criadas com o atributo [`id`](/pt-BR/docs/Web/HTML/Global_attributes#id).

## Especificações

{{Specifications}}
