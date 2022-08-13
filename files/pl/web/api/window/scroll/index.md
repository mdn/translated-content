---
title: window.scroll
slug: Web/API/Window/scroll
tags:
  - DOM
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Wszystkie_kategorie
translation_of: Web/API/Window/scroll
---
{{ ApiRef() }}

### Podsumowanie

Przesuwa się do danych koordynatów w dokumencie.

### Składnia

    window.scroll(x-coord,y-coord)

### Parametry

- `x-coord` jest pikselem wzdłuż poziomej osi dokumentu do wyświetlenia, w jego lewym górnym rogu.
- `y-coord` jest pikselem wzdłuż pionowej osi dokumentu do wyświetlenia, w jego lewym górnym rogu.

### Przykład

     // przenieś 100-ny piksel poziomy na górę okna
     <button onClick="scroll(0, 100);">kliknij, by przesunąć się o 100 pikseli w dół </button>

### Uwagi

Powyższa funkcja jest tym co funkcja [`window.scrollTo`](pl/DOM/window.scrollTo). Dla przesuwu względnego zobacz `window.scrollBy, window.scrollByLines` oraz [`window.scrollByPages`](pl/DOM/window.scrollByPages).

### Specyfikacja

DOM poziom 0. Nie jest częścią specyfikacji.



{{ languages( { "en": "en/DOM/window\.scroll", "ja": "ja/DOM/window\.scroll" } ) }}
