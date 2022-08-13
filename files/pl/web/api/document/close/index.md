---
title: document.close
slug: Web/API/Document/close
tags:
  - DOM
  - Wszystkie_kategorie
translation_of: Web/API/Document/close
---
{{APIRef}}

Podsumowanie

Metoda `document.close()` kończy zapis do otwartego dokumentu.

### Składnia

    document.close()

### Przykład

    // otwieramy dokument do zapisu
    // i kończymy zamknięciem poprzez close()
    document.open();
    document.write("<P>The only content</P>.");
    document.close();

### Specyfikacja

[close](http://www.w3.org/TR/2000/WD-DOM-Level-2-HTML-20001113/html.html#ID-98948567)
