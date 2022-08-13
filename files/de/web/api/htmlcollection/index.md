---
title: HTMLCollection
slug: Web/API/HTMLCollection
translation_of: Web/API/HTMLCollection
---
{{APIRef("HTML DOM")}}

Die **`HTMLCollection`** repräsentiert eine generische Sammlung (Array-ähnliches Objekt) an Elementen (in Dokumentreihenfolge) und bietet Methoden und Eigenschaften zur Auswahl dieser aus einer Liste an.

> **Note:** **Notiz:** Diese Schnittstelle wird aus historischen Gründen `HTMLCollection` genannt (vor DOM4 konnten Sammlungen, die diese Schnittstelle implementierten, nur HTML-Elemente als Einträge haben).

Eine `HTMLCollection` in der HTML DOM ist live; sie wird automatisch aktualisiert, wenn das zugrundeliegende Dokument verändert wird.

## Eigenschaften

- {{domxref("HTMLCollection.length")}} {{readonlyInline}}
  - : Gibt die Anzahl der Elemente in der Auflistung zurück.

## Methoden

- {{domxref("HTMLCollection.item()")}}
  - : Gibt den spezifischen Knoten am angegebenen nullbasierten `index` in die Liste zurück.
    Gibt `null` zurück, wenn der `index` außerhalb des Bereichs ist.
- {{domxref("HTMLCollection.namedItem()")}}
  - : Gibt den spezifischen Knoten, dessen ID oder alternativ dessen Name auf die Zeichenkette (spezifiziert durch `name`) passt, zurück. Die Übereinstimmung des Namens wird nur als letzte Möglichkeit, nur in HTML, und nur, wenn das referenzierte Element das `name` Attribut unterstützt, durchgeführt.
    Gibt `null` zurück, wenn kein Code des angegebenen Namens existiert.

## Verwendung in JavaScript

`HTMLCollection` setzt auch seine Member direkt als Eigenschaften von `name` und `index`. HTML IDs können Doppelpunkte und Punkte als gültige Zeichen beinhalten, was das Verwenden von Klammern für den Zugriff auf Eigenschaften erfordert. Derzeit erkennt `HTMLCollections`rein numerische IDs nicht, da sie einen Konflikt mit dem Array-ähnlichen Zugriff verursachen würden, obwohl HTML5 dies erlaubt.

Zum Beispiel, unter der Annahme, dass es ein `<form>` Element im Dokument und die `id` `"myForm"` ist:

```js
var elem1, elem2;

// document.forms ist eine HTMLCollection

elem1 = document.forms[0];
elem2 = document.forms.item(0);

alert(elem1 === elem2); // zeigt: "true"

elem1 = document.forms.myForm;
elem2 = document.forms.namedItem("myForm");

alert(elem1 === elem2); // zeigt: "true"

elem1 = document.forms["bennantes.Element.mit.Punkten"];
```

## Browser Kompatibilität

Verschiedene Browser verhalten sich unterschiedlich, wenn es mehr als ein Element gibt, das auf die Zeichenkette passt, die als ein index (oder `namedItem`s Argument) verwendet wird. Firefox 8 verhält sich wie in DOM 2 and DOM4 angegeben, und gibt das erste passende Element zurück. WebKit Browser und Internet Explorer geben in diesem Fall eine andere `HTMLCollection` und Opera eine {{domxref("NodeList")}} aller passenden Elemente zurück.

## Spezifikation

- [DOM Level 2 HTML, Section 1.4, Miscellaneous Object Definitions](http://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-75708506)
- [DOM4: HTMLCollection](http://www.w3.org/TR/domcore/#interface-htmlcollection)

## Siehe auch

- {{domxref("NodeList")}}
- {{domxref("HTMLFormControlsCollection")}}, {{domxref("HTMLOptionsCollection")}}
