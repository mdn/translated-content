---
title: element.getElementsByTagNameNS
slug: Web/API/Element/getElementsByTagNameNS
tags:
  - DOM
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Strony_wymagające_dopracowania
  - Wszystkie_kategorie
translation_of: Web/API/Element/getElementsByTagNameNS
---
{{ ApiRef("DOM") }}

### Podsumowanie

Zwraca listę elementów o danej nazwie znacznika należącej do danej przestrzeni nazw.

### Składnia

    elements =element.getElementsByTagNameNS(namespace,localName)

- `elements` jest `NodeList` znalezionych elementów w kolejności ich występowania w drzewie.
- `element` jest elementem startowym. Zauważ, że tylko potomkowie tegoż elementu zawarci są w przeszukiwaniu, ale nie on sam węzeł.
- `namespace` jest przestrzenią nazw URI elementów do przeszukania (zobacz [`element.namespaceURI`](pl/DOM/element.namespaceURI)).
- `name` is either the local name of elements to look for or the special value `"*"`, which matches all elements (see [`element.localName`](pl/DOM/element.localName)).

### Przykład

    // check the alignment on a number of cells in a table.
    var table = document.getElementById("forecast-table");
    var cells = table.getElementsByTagNameNS("www.mozilla.org/ns/specialspace/", "td");
    for (var i = 0; i < cells.length; i++) {
        status = cells[i].getAttribute("status");
        if ( status == "open") {
            // grab the data
        }
    }

### Uwagi

`element.getElementsByTagNameNS` is similar to [document.getElementsByTagNameNS](pl/DOM/document.getElementsByTagNameNS), except that its search is restricted to those elements which are descendants of the specified element.

### Specyfikacja

[DOM Level 2 Core: Element.getElementsByTagNameNS](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-A6C90942)
