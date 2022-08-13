---
title: Node.nextSibling
slug: Web/API/Node/nextSibling
translation_of: Web/API/Node/nextSibling
---
{{ ApiRef() }}

### Allgemein

Gibt den Datenknoten zurück, der entsprechend der `childNodes`-Liste des Elternelements direkt auf den gegebenen Datenknoten folgt. Falls der übergebene Knoten bereits der letzte dieser Liste ist, wird `null` zurückgegeben.

### Syntax

    nextNode = node.nextSibling;

### Beispiele

Folgendes HTML-Dokument ist gegeben:

```html
<!DOCTYPE html>
<html>
  <body>
    <div>Das ist eine DIV-Box</div>
    <p>Hier steht Text!</p>
  </body>
</html>
```

Mit folgendem Code kann der Name des Geschwisterelements der DIV-Box ermittelt werden:

```js
// Diese Variable speichert eine Referenz auf das Erste Element, das <body> enthält, also die DIV-Box
 var element = document.body.children[0];

 // Nun ermitteln wir das folgende Element
 var folgeElement = element.nextSibling;

 // Ausgabe des nodeNames
 alert(folgeElement.nodeName);
```

**Erläuterung:**

Die Variable `element` enthält das erste Kindelement des `<body>`-Tags, also die `DIV`-Box.
`folgeElement` speichert den ersten Geschwisterknoten der DIV-Box. In diesem Fall ist das ein Textknoten der einen Zeilenvorschub und vier Leerzeichen enthält, die sich in dem HTML-Dokument zwischen dem `>` der DIV-Box und dem `<` des `<p>` befinden. Das `alert()`-Fenster gibt somit `#text` aus.

Folgendermaßen können alle nachfolgenden Geschwisterknoten ermittelt werden:

```js
var element = document.body.children[0];
var liste = [];

while(element.nextSibling) {
  var element = liste[liste.push(element.nextSibling)-1];
}
```

Das Skript erzeugt ein Array `liste` mit folgendem Inhalt:

    Array[3]
      0: Text
      1: HTMLParagraphElement
      2: Text

### Anmerkungen

Am obigen Beispiel lässt sich klar erkennen, dass einige Male ein `#text`-Knoten im Index auftaucht. Das kommt immer dann vor, wenn sich zwischen den Elementen Whitespace befindet. Da die Eigenschaft `nextSibling` auch Textknoten berücksichtigt, landet dieser Whitespace letztendlich als Solcher im Index. Falls dies nicht erwünscht ist, sollten Sie statt `nextSibling` die Eigenschaft {{ domxref("Element.nextElementSibling") }} verwenden

### Spezifikationen

- [DOM Level 1 Core: nextSibling](http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#attribute-nextSibling) (en)
- [DOM Level 2 Core: nextSibling](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-6AC54C2F) (en)

{{ languages( { "fr": "fr/DOM/element.nextSibling", "ja": "ja/DOM/element.nextSibling", "pl": "pl/DOM/element.nextSibling" } ) }}

### Siehe auch

- [Element.nextElementSibling](/En/DOM/Element.nextElementSibling "En/DOM/Element.nextElementSibling")
