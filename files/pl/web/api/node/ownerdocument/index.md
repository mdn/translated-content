---
title: element.ownerDocument
slug: Web/API/Node/ownerDocument
tags:
  - DOM
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Wszystkie_kategorie
translation_of: Web/API/Node/ownerDocument
original_slug: Web/API/Element/ownerDocument
---
{{ ApiRef() }}

### Podsumowanie

Własność **ownerDocument** zwraca obiekt najwyższego poziomu - dokument, w którym znajduje się bieżący węzeł.

### Składnia

    dokument = element.ownerDocument

`dokument` to obiekt `document`, będący rodzicem bieżącego elementu.

### Przykład

    // dla danego elementu "p" znajdź element HTML najwyższego poziomu
    d = p.ownerDocument;
    html = d.documentElement;

### Uwagi

Obiekt `document` zwracany przez tę własność jest głównym obiektem, w którym tworzone są wszystkie węzły-dzieci właściwego dokumentu HTML. Własność ta użyta na węźle, który sam jest dokumentem, zwraca `NULL`

### Specyfikacja

[ownerDocument](http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#node-ownerDoc)





{{ languages( { "en": "en/DOM/element.ownerDocument", "fr": "fr/DOM/element.ownerDocument", "ja": "ja/DOM/element.ownerDocument" } ) }}
