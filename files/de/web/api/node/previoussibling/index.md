---
title: Node.previousSibling
slug: Web/API/Node/previousSibling
translation_of: Web/API/Node/previousSibling
---
{{ ApiRef() }}

{{ languages( { "fr": "fr/DOM/element.previousSibling", "ja": "ja/DOM/element.previousSibling", "pl": "pl/DOM/element.previousSibling", "zh-cn": "zh-cn/DOM/Node.previousSibling" } ) }}

### Allgemein

Gibt den Datenknoten zurück, der entsprechend der childNodes-Liste des Elternelements dem gegebenen Datenknoten direkt vorangestellt ist. Falls der übergebene Knoten bereits der erste in dieser Liste ist, wird null zurückgegeben.

### Syntax

    vorangestellterKnoten = node.previousSibling;

### Beispiele

Folgendes HTML-Dokument ist gegeben:

```html
<!DOCTYPE html>
<html>
  <body>
    <div>Das ist eine DIV-Box</div>
    <p>Hier steht Text!</p>
    <ul>
      <li>Punkt 1</li>
      <li>Punkt 2</li>
    </ul>
  </body>
</html>
```

So kann der vorangestellte Datenknoten von `<ul>` ermittelt werden:

```js
	// Diese Variable speichert eine Referenz auf das letzte Element, das <body> enthält, also <ul>
	var element = document.body.children[2];

	// Nun ermitteln wir durch previousSibling den vorangestellten Knoten
	var vorangestellterKnoten = element.previousSibling;

	// Ausgabe des Knoten-Namens
	alert(vorangestellterKnoten.nodeName);
```

**Erläuterung:**

Die Variable `element` enthält das letzte Kindelement des -Tags, also `<ul>`. `vorangestellterKnoten` speichert den direkt vorangestellten Geschwisterknoten von `<ul>`. In diesem Fall ist das ein Textknoten der einen Zeilenvorschub und vier Leerzeichen enthält, die sich in dem HTML-Dokument zwischen dem `>` von `<p>` und dem `<` des `<ul>` befinden. Das alert()-Fenster gibt somit `#text` aus.

So können alle vorangestellten Datenknoten eines Elements ermittelt werden:

```js
var element = document.body.children[2];
var liste = [];

while(element.previousSibling) {
  var element = liste[liste.push(element.previousSibling)-1];
}
```

Das Skript erzeugt ein Array `liste` mit folgendem Inhalt:

    Array[5]
      0: Text
      1: HTMLParagraphElement
      2: Text
      3: HTMLDivElement
      4: Text

### Anmerkungen

Um statt dem vorangestellten Datenknoten den Nächsten zu erhalten, verwenden Sie {{ domxref("Node.nextSibling") }}.
Da die Eigenschaft `previousSibling` Textknoten berücksichtigt, kann es sein, dass Sie statt des vorangestellten Elements einen Textknoten als Rückgabewert erhalten. Oft passiert das durch Whitespace aller Art (z.B. Leerzeichen, Zeilenvorschübe), der sich zwischen den beiden Elementen befindet und von `previousSibling` als Textknoten interpretiert wird.
Falls Textknoten nicht berücksichtigt werden sollen, verwenden Sie stattdessen {{ domxref("Element.previousElementSibling") }}

### Spezifikationen

- [DOM Level 1 Core: previousSibling](http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#attribute-previousSibling) (en)
- [DOM Level 2 Core: previousSibling](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-640FB3C8) (en)

### Siehe auch

- {{ domxref("Node.nextSibling") }}
- {{ domxref("Element.previousElementSibling") }}
- {{ domxref("Node.childNodes") }}
