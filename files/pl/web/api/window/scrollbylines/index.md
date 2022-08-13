---
title: window.scrollByLines
slug: Web/API/Window/scrollByLines
tags:
  - DOM
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Wszystkie_kategorie
translation_of: Web/API/Window/scrollByLines
---
{{ ApiRef() }}

### Podsumowanie

Przewija dokument przez daną liczbę linii.

### Składnia

    window.scrollByLines(lines)

### Parametry

- `lines` jest liczbą linii do przewinięcia w dokumencie.
- `lines` może być liczbą całkowitą dodatnią lub ujemną.

### Przykład

    // przewija w dół o 5 linii w dokumencie.
    <button onclick="scrollByLines(5);">down 5 lines</button>

    // przewija w górę o 5 linii w dokumencie.
    <button onclick="scrollByLines(-5);">up 5 lines</button>

### Uwagi

Zobacz także `window.scrollBy, window.scrollByPages`.

### Specyfikacja

DOM poziom 0. Nie jest częścią specyfikacji.



{{ languages( { "en": "en/DOM/window\.scrollByLines", "ja": "ja/DOM/window\.scrollByLines" } ) }}
