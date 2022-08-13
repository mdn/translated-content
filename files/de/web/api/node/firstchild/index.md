---
title: Node.firstChild
slug: Web/API/Node/firstChild
translation_of: Web/API/Node/firstChild
---
{{ ApiRef() }}

## Allgemein

`firstChild` gibt den ersten Kindknoten (`childNode`) eines Datenknotens zurück.

## Syntax

    var ersterKindknoten = element.firstChild;

Die Variable _ersterKindknoten_ enthält einen Datenknoten.

## Beispiel

Folgendes HTML-Dokument ist gegeben:

```html
<!DOCTYPE html>
<html>
  <body>
    <h3>Texte</h3>
    <p>Hier steht Text!</p>
  </body>
</html>
```

Um auf das erste Kindelement zuzugreifen, kann man folgenden Code verwenden:

```js
var ersterKindknoten = document.body.firstChild;
```

In diesem Fall ist der erste Kindknoten ein Textknoten, da sich zwischen dem Schlusstag des `Paragraphs` und dem Start-Tag von `<body>` ein Zeilenumbruch und vier Leerzeichen befinden.

## Anmerkungen

- Gibt `null` zurück, wenn der gegebene Datenknoten keine Kindknoten hat.
- `firstChild` berücksichtigt wie bereits erwähnt auch `TextNodes`. Daher wird jede Art von Whitespace innerhalb eines Elements als Kindknoten interpretiert. Im obigen Beispiel geschieht das durch die Einrückungen im HTML-Dokument. Falls Sie Textknoten als Rückgabewert ausschließen, und nur HTML-Elemente erhalten wollen, verwenden Sie statt `firstChild` bitte {{ domxref("Element.firstElementChild") }}.

## Spezifikationen

- [DOM Level 1 Core: firstChild](http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#attribute-firstChild) (en)
- [DOM Level 2 Core: firstChild](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-169727388) (en)

## Siehe auch:

- {{ domxref("Node") }}
- {{ domxref("Node.lastChild") }}
- {{ domxref("Node.previousSibling") }}
- {{ domxref("Node.childNodes") }}

{{ languages( { "fr": "fr/DOM/element.firstChild", "ja": "ja/DOM/element.firstChild", "pl": "pl/DOM/element.firstChild", "zh-cn": "zh-cn/DOM/Node.firstChild" } ) }}
