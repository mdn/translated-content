---
title: element.cloneNode
slug: Web/API/Node/cloneNode
tags:
  - DOM
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Wszystkie_kategorie
translation_of: Web/API/Node/cloneNode
original_slug: Web/API/Element/clientNode
---
{{ ApiRef() }}

### Podsumowanie

Metoda **cloneNode** zwraca kopię bieżącego węzła.

### Składnia

    kopiaWęzła = element.cloneNode(głębokość)

### Parametry

- `głębokość` jest wartością logiczną, oznaczającą, czy kopiowanie ma być głębokie czy nie (zob. uwagi poniżej)

### Przykład

    p = document.getElementById("para1");
    p_prime = p.cloneNode(true);

### Uwagi

Kopia węzła zwrócona przez **cloneNode()** nie ma rodzica. Podczas klonowania węzła skopiowane zostają wszystkie jego atrybuty i ich wartości, ale nie zostaje skopiowana treść zawarta w węźle, ponieważ treść ta przechowywana jest w węźle potomnym typu `Text`.

Głębokie klonowanie kopiuje i zwraca węzeł wraz z całym drzewem pod nim się znajdującym (w tym treścią z potomnych węzłów `Text`) .

### Specyfikacja

[DOM Level 2 Core: cloneNode](http://w3.org/TR/DOM-Level-2-Core/core.html#ID-3A0ED0A4)



{{ languages( { "en": "en/DOM/element.cloneNode", "fr": "fr/DOM/element.cloneNode", "ja": "ja/DOM/element.cloneNode", "pt": "pt/DOM/element.cloneNode", "zh-cn": "cn/DOM/element.cloneNode" } ) }}
