---
title: isCollapsed
slug: Web/API/Selection/isCollapsed
tags:
  - DOM
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Wszystkie_kategorie
translation_of: Web/API/Selection/isCollapsed
---
{{ ApiRef() }}

### Podsumowanie

Zwraca wartość logiczną, która określa czy początek selekcji znajduje się w tym samym miejscu, co jej koniec.

### Składnia

    sel.isCollapsed

### Uwagi

Nawet załamana selekcja może mieć `rangeCount` większe niż 0. `sel.getRangeAt(0)` może zwrócić zakres, który również jest załamany.



{{ languages( { "en": "en/DOM/Selection/isCollapsed", "es": "es/DOM/Selection/isCollapsed", "it": "it/DOM/Selection/isCollapsed" } ) }}
