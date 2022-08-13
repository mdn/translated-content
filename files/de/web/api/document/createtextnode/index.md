---
title: Document.createTextNode()
slug: Web/API/Document/createTextNode
tags:
  - API
  - DOM
  - Méthode
  - Referenz
  - Textknoten
  - Textnode
translation_of: Web/API/Document/createTextNode
---
{{APIRef("DOM")}}

Erzeugt einen Textknoten.

## Syntax

    var text = document.createTextNode(data);

- `text` ist ein Textknoten
- `data` ist eine Zeichenkette oder ein Ausdruck, der eine Zeichenkette erzeugt. Entity-Definitionen (&...;) werden nicht umgesetzt.

## Example

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
  <button onclick="addTextNode('JA! ');">JA!</button>
  <button onclick="addTextNode('NEIN! ');">NEIN!</button>
  <button onclick="addTextNode('WIR SCHAFFEN DAS! ');">WIR SCHAFFEN DAS!</button>

  <hr />

  <p id="p1">Erste Zeile des Absatzes.</p>
</body>
</html>
```

## Spezifikationen

| Specifikation                                                                                                | Status                       | Kommentar                |
| ------------------------------------------------------------------------------------------------------------ | ---------------------------- | ------------------------ |
| {{SpecName("DOM3 Core", "core.html#ID-1975348127", "Document.createTextNode()")}} | {{Spec2("DOM3 Core")}} | Keine Änderung           |
| {{SpecName("DOM2 Core", "core.html#ID-1975348127", "Document.createTextNode()")}} | {{Spec2("DOM2 Core")}} | Ursprüngliche Definition |

## Browser Kompatibilität

{{Compat}}
