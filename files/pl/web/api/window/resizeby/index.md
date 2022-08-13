---
title: window.resizeBy
slug: Web/API/Window/resizeBy
tags:
  - DOM
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Wszystkie_kategorie
translation_of: Web/API/Window/resizeBy
---
{{ ApiRef() }}

### Podsumowanie

Zmienia rozmiar okna o pewną wartość.

### Składnia

    window.resizeBy(xDelta,yDelta)

### Parametry

- `xDelta` jest liczbą pikseli o jaką ma wzrosnąć okno w poziomie.
- `yDelta` jest liczbą pikseli o jaką ma wzrosnąć okno w pionie.

### Przykład

    // Spowoduje zmniejszenie się okna
    window.resizeBy(-200, -200);

### Uwagi

Ta metoda zmienia rozmiar okna relatywnie do jego obecnego rozmiaru. Aby zmienić rozmiar okna bezwzględnie zastosuj [DOM:window.resizeTo](pl/DOM/window.resizeTo).

### Specyfikacja

DOM poziom 0. Nie jest częścią specyfikacji.



{{ languages( { "en": "en/DOM/window\.resizeBy", "ja": "ja/DOM/window\.resizeBy" } ) }}
