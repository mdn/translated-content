---
title: element.hasChildNodes
slug: Web/API/Node/hasChildNodes
tags:
  - DOM
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Wszystkie_kategorie
translation_of: Web/API/Node/hasChildNodes
original_slug: Web/API/Element/hasChildNodes
---
{{ ApiRef() }}

### Podsumowanie

**hasChildNodes** zwraca wartość logiczną określającą, czy element posiada dzieci czy nie.

### Składnia

    [ true | false ] = element.hasChildNodes()

### Przykład

    t1 = document.getElementById("table-data");
    if ( t1.hasChildNodes() ) {
        // tabela ma dzieci }

### Uwagi

Zauważ, że składnia `element.hasChildNodes` - bez nawiasów `()` - jest nieprawidłowa. Takie użycie zawsze zwraca `true`, oznaczające, że metoda o tej nazwie jest dostępna w obiekcie. Nie daj się nabrać.

### Specyfikacja

[hasChildNodes](http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#ID-810594187)



{{ languages( { "en": "en/DOM/element.hasChildNodes", "fr": "fr/DOM/element.hasChildNodes", "ja": "ja/DOM/element.hasChildNodes" } ) }}
