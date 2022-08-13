---
title: document.open
slug: Web/API/Document/open
tags:
  - DOM
  - Wszystkie_kategorie
translation_of: Web/API/Document/open
---
{{APIRef("DOM")}}

### Podsumowanie

Metoda **document.open** otwiera strumień dokumentu do zapisu.

### Składnia

    document.open()

### Przykład

    //W tym przykładzie zawartość dokumentu jest
    //usuwana przy reinicjalizacji poprzez open()

    document.write("<html><p>wyczyść to</p></html>");
    document.open();
    //dokument jest pusty

### Uwagi

Jeżeli dokument docelowy istnieje, metoda ta wyczyści go (zob. powyzszy przykład). **document.open** jest wywoływane również wtedy, gdy zostanie użyte [document.write](pl/DOM/document.write) po załadowaniu dokumentu.

### Specyfikacja

[open](http://www.w3.org/TR/2000/WD-DOM-Level-2-HTML-20001113/html.html#ID-72161170)



{{ languages( { "en": "en/DOM/document.open", "fr": "fr/DOM/document.open", "ja": "ja/DOM/document.open" } ) }}
