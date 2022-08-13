---
title: document.documentElement
slug: Web/API/Document/documentElement
tags:
  - DOM
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Wszystkie_kategorie
translation_of: Web/API/Document/documentElement
---
{{ ApiRef() }}

### Podsumowanie

**Tylko do odczytu**

Zwraca [`Element`](pl/DOM/element) będący bezpośrednim dzieckiem [document](pl/DOM/document) (na przykład dla dokumentów HTML jest to element `<html>`).

### Składnia

    varelement = document.documentElement;

### Przykład

    actual_doc = document.documentElement;
    first_tier = actual_doc.childNodes;
    //first_tier to bezpośrednie dzieci HTML
    for (var i = 0; i < first_tier.length; i++) {
       //zrób cos z każdym dzieckiem HTML
       //poprzez first_tier[i]
    }

<!---->

    var rootElement = document.documentElement;
    var firstTier = rootElement.childNodes;
    // firstTier jest NodeList bezpośredniego dziecka elementu głównego
    for (var i = 0; i < firstTier.length; i++) {
       // zrób coś z każdym dzieckiem HTML głównego elementu
       // as firstTier[i]
    }

### Uwagi

Ta własność tylko do odczytu jest udogodnieniem w przechwytywaniu elementu HTML, powiązanego z każdym prawidłowym dokumentem HTML.

Powyżej typowy przykład: potrzebujesz w rzeczywistości elementu HTML, aby mieć dostęp do wszystkich jego dzieci, więc używasz tej własności obiektu `document`, aby go przejąć.

Zauważ też, że zazwyczaj `document` zawiera jeden węzeł-dziecko - HTML - który sam zawiera wszystkie elementy faktycznego dokumentu jako listę węzłów-dzieci (`nodeList`).

### Specyfikacja

[DOM Level 2 Core: Document.documentElement](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-87CD092)

{{ languages( { "en": "en/DOM/document.documentElement", "es": "es/DOM/document.documentElement", "fr": "fr/DOM/document.documentElement", "ja": "ja/DOM/document.documentElement" } ) }}
