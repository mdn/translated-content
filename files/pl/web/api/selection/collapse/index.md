---
title: collapse
slug: Web/API/Selection/collapse
tags:
  - DOM
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Wszystkie_kategorie
translation_of: Web/API/Selection/collapse
---
{{ ApiRef() }}

### Podsumowanie

Zawęża aktualne zaznaczenie w pojedynczy punkt. Dokument nie jest modyfikowany. Jeżeli treść jest edytowalna i aktywna, przeniesie się tam kursor.

### Składnia

    sel.collapse(parentNode,offset);

### Parametry

- _`parentNode`_
  - : Kursor znajdzie się w tym węźle.

- _`offset`_
  - : Kursor zostanie umieszczony w tej odległości od początku węzła tekstowego
    _`parentNode`_
    .

### Przykłady

    /* Umieszcza kursor na początku ciała dokumentu HTML. */
    var body = document.getElementsByTagName("body")[0];
    window.getSelection().collapse(body,0);





{{ languages( { "en": "en/DOM/Selection/collapse", "es": "es/DOM/Selection/collapse", "it": "it/DOM/Selection/collapse" } ) }}
