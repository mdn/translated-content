---
title: Document.anchors
slug: Web/API/Document/anchors
---

{{APIRef("DOM")}} {{deprecated_header()}}

`anchors` retourne une liste de toutes les ancres du document.

## Syntaxe

```js
nodeList = document.anchors;
```

## Exemple

```js
if (document.anchors.length >= 5) {
  dump("Trop d'ancres trouvées !");
  window.location = "http://www.google.com";
}
```

L'exemple suivant remplit un tableau avec chaque ancre présente sur la page :

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

[Voir dans JSFiddle](https://jsfiddle.net/S4yNp)

## Notes

Pour des raisons de rétrocompatibilité, la liste d'ancres retournée contient seulement les ancres créées avec l'attribut `name`, pas celles créées avec l'attribut `id`.

## Spécification

- [DOM Level 2 HTML: anchors](http://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-7577272)
