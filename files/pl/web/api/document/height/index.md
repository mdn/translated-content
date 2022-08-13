---
title: document.height
slug: Web/API/Document/height
tags:
  - DOM
  - DOM_0
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Wszystkie_kategorie
translation_of: Web/API/Document/height
---
{{ ApiRef() }}

### Podsumowanie

**height** pobiera/ustawia wysokość dokumentu.

### Składnia

    wysokość = document.height
    document.height =wysokość

### Parametry

- `wysokość` jest ciągiem reprezentującym wysokość dokumentu w pikselach, calach bądź poprzez `em`. Jesli nie zostanie określona jednostka (jak np. "px" w "200px"), domyślnie przyjmowane są piksele.

### Przykład

    // zmniejsz okno po załadowaniu
    function onLoad() {
        document.height = "200";
        document.width = "200";
    }

### Uwagi

Zobacz także [DOM:document.width](pl/DOM/document.width).

### Specyfikacja

{{ DOM0() }}

{{ languages( { "en": "en/DOM/document.height" } ) }}
