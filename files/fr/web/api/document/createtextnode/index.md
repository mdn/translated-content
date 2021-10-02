---
title: document.createTextNode
slug: Web/API/Document/createTextNode
tags:
  - API
  - DOM
  - Méthodes
  - Reference
translation_of: Web/API/Document/createTextNode
---
{{APIRef("DOM")}}

Crée un nouveau nœud de texte.

## Syntaxe

    var text = document.createTextNode(données);

- `texte` est un nœud de texte.
- `donnees` est une chaîne contenant les données à placer dans le nœud de texte.

## Exemple

```html
<!DOCTYPE html>
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

| Spécification                                                                                                | Statut                       | Commentaire         |
| ------------------------------------------------------------------------------------------------------------ | ---------------------------- | ------------------- |
| {{SpecName("DOM3 Core", "core.html#ID-1975348127", "Document.createTextNode()")}} | {{Spec2("DOM3 Core")}} | Pas de changement   |
| {{SpecName("DOM2 Core", "core.html#ID-1975348127", "Document.createTextNode()")}} | {{Spec2("DOM2 Core")}} | Définition initiale |

## Compatibilité des navigateurs

{{Compat("api.Document.createTextNode")}}
