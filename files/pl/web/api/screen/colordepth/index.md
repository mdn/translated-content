---
title: Screen.colorDepth
slug: Web/API/Screen/colorDepth
tags:
  - DOM
  - DOM_0
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Wszystkie_kategorie
translation_of: Web/API/Screen/colorDepth
---
{{ ApiRef() }}

### Podsumowanie

Zwraca głębię koloru ekranu.

### Składnia

    bitDepth = window.screen.colorDepth

### Przykład

    // Sprawdzenie głębi koloru ekranu
    if ( window.screen.colorDepth < 8) {
        // Użycie wersji strony z małą ilością kolorów
    } else {
        // Użycie prawidłowej wersji strony, o pełnej głębi kolorów
    }

### Uwagi

Zobacz także [`window.screen.pixelDepth`](pl/DOM/window.screen.pixelDepth).

### Specyfikacja

{{ DOM0() }}



{{ languages( { "en": "en/DOM/window\.screen.colorDepth", "ja": "ja/DOM/window\.screen.colorDepth" } ) }}
