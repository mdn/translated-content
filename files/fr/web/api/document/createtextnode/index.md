---
title: document.createTextNode
slug: Web/API/Document/createTextNode
---

{{APIRef("DOM")}}

Crée un nouveau nœud de texte.

## Syntaxe

```js
var text = document.createTextNode(données);
```

- `texte` est un nœud de texte.
- `donnees` est une chaîne contenant les données à placer dans le nœud de texte.

## Exemple

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

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
