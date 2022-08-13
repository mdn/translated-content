---
title: Node.lastChild
slug: Web/API/Node/lastChild
translation_of: Web/API/Node/lastChild
---
{{ ApiRef() }}

## Allgemein

`lastChild` gibt den letzten Kindknoten (`childNode`) eines Datenknotens zurück.

## Syntax

    var letzterKindknoten = element.lastChild;

Die Variable _letzterKindknoten_ enthält einen Datenknoten.

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

Um auf das letzte Kindelement zuzugreifen, kann man folgenden Code verwenden:

```js
var letzterKindknoten = document.body.lastChild;
```

In diesem Fall ist der letzte Kindknoten ein Textknoten, da sich zwischen dem Schlusstag des `Paragraphs` und dem Schlusstag des `body`-Tags ein Zeilenumbruch und zwei Leerzeichen befinden.

## Anmerkungen

- Gibt `null` zurück, wenn der gegebene Datenknoten keine Kindknoten hat.
- `lastChild` berücksichtigt wie bereits erwähnt auch `TextNodes`. Daher wird jede Art von Whitespace innerhalb eines Elements als Kindknoten interpretiert. Im obigen Beispiel geschieht das durch die Einrückungen im HTML-Dokument. Falls Sie Textknoten als Rückgabewert ausschließen, und nur HTML-Elemente erhalten wollen, verwenden Sie statt `lastChild` bitte {{ domxref("Element.lastElementChild") }}.

## Spezifikation

[lastChild](http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#ID-61AD09FB) (en)

## Siehe auch:

- {{ domxref("Node") }}
- {{ domxref("Node.firstChild") }}
- {{ domxref("Node.nextSibling") }}
- {{ domxref("Node.childNodes") }}

{{ languages( { "fr": "fr/DOM/element.lastChild", "ja": "ja/DOM/element.lastChild", "pl": "pl/DOM/element.lastChild" , "zh-cn": "zh-cn/DOM/Node.lastChild" } ) }}
