---
title: element.previousSibling
slug: Web/API/Node/previousSibling
tags:
  - DOM
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Wszystkie_kategorie
translation_of: Web/API/Node/previousSibling
original_slug: Web/API/Element/previousSibling
---
{{ ApiRef() }}

### Podsumowanie

Zwraca węzeł bezpośrednio poprzedzający bieżący węzeł w drzewie.

### Składnia i wartości

    pNode = elementNode.previousSibling

`pNode` to węzeł przed bieżącym na liście rodzeństwa (czyli liście dzieci rodzica). Węzeł poprzedzający element jest zwykle węzłem elementu, komentarza lub tekstowym.

### Przykład

    var n1 = n2.previousSibling;

### Uwagi

Zwraca `null`, jeśli nie ma poprzedzających węzłów.

### Specyfikacja

[DOM Level 1 Core: previousSibling](http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#attribute-previousSibling)

[DOM Level 2 Core: previousSibling](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-640FB3C8)



{{ languages( { "en": "en/DOM/element.previousSibling", "fr": "fr/DOM/element.previousSibling", "ja": "ja/DOM/element.previousSibling" } ) }}
