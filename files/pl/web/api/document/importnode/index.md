---
title: document.importNode
slug: Web/API/Document/importNode
tags:
  - DOM
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Strony_wymagające_dopracowania
  - Wszystkie_kategorie
translation_of: Web/API/Document/importNode
---
{{ ApiRef("DOM") }}

### Podsumowanie

Tworzy kopię węzła z zewnętrznego dokumentu, która może być umieszczona wewnątrz bieżącego dokumentu.

### Składnia

    var node = document.importNode(externalNode,deep);

- `node`
  - : Zaimportowany węzeł
    Własność [`parentNode`](/pl/docs/Web/API/Element/parentNode) jest ustawiona na null, ponieważ nie został jeszcze wstawiony do drzewa dokumentu
- `externalNode`
  - : Węzeł, bądź `DocumentFragment` przeznaczony do zaimportowania do bieżącego dokumentu.
- `deep`
  - : Boolean mówiący, czy importować potomki `externalNode`

### Przykład

    var iframe = document.getElementsByTagName("iframe")[0];
    var oldNode = iframe.contentDocument.getElementById("myNode");
    var newNode = document.importNode(oldNode,true);
    document.getElementById("container").appendChild(newNode);

### Uwagi

Pierwotny węzeł nie jest usunięty z oryginalnego dokumentu. Importowany węzeł jest klonem oryginału .

Przed włączeniem węzłów pochodzących z zewnętrznych dokumentów do bieżącego dokumentu konieczne jest ich sklonowanie za
pomocą metody [`document.importNode()`](/pl/docs/Web/API/Document/importNode "Tworzy kopię węzła z zewnętrznego dokumentu, która może być umieszczona wewnątrz bieżącego dokumentu.") (lub zaadaptowanie przy użyciu metody [`document.adoptNode()`](/pl/docs/Web/API/Document/adoptNode "The documentation about this has not yet been written; please consider contributing!")). Więcej informacji na temat własności
[`Node.ownerDocument`](/pl/docs/Web/API/Node/ownerDocument "The documentation about this has not yet been written; please consider contributing!") znajduje się na liście najczęściej zadawanych pytań na [temat
DOM w witrynie W3C](http://www.w3.org/DOM/faq.html#ownerdoc).

Aktualnie Firefox nie wymusza tej reguły (robił to przez pewien czas podczas cykli rozwojowych Firefoksa 3, ale zbyt
dużo stron przestawało działać po wymuszeniu tej reguły). Zachęcamy autorów stron do poprawienia ich kodu dla lepszej
kompatybilności w przyszłości.

### Specyfikacja

[DOM Level 2 Core: Document.importNode](http://www.w3.org/TR/DOM-Level-2-Core/core.html#Core-Document-importNode)
