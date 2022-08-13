---
title: document.createRange
slug: Web/API/Document/createRange
tags:
  - DOM
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Wszystkie_kategorie
translation_of: Web/API/Document/createRange
---
{{ ApiRef() }}

### Podsumowanie

Zwraca nowy objekt [`Range`](pl/DOM/range).

### Składnia

    range = document.createRange();

`range` jest utworzonym objektem [range](pl/DOM/range).

### Przykład

    var range = document.createRange();
    range.setStart(startNode, startOffset);
    range.setEnd(endNode, endOffset);

### Uwagi

Gdy tylko `Range` jest utworzony, musisz określić jego punkty graniczne zanim będziesz mógł użyć większości jego metod.

### Specyfikacja

[DOM Level 2 Range: DocumentRange.createRange](http://www.w3.org/TR/DOM-Level-2-Traversal-Range/ranges.html#Level2-DocumentRange-method-createRange)



{{ languages( { "en": "en/DOM/document.createRange", "es": "es/DOM/document.createRange" } ) }}
