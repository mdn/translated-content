---
title: window.resizeTo
slug: Web/API/Window/resizeTo
tags:
  - DOM
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Wszystkie_kategorie
translation_of: Web/API/Window/resizeTo
---
{{ ApiRef() }}

### Podsumowanie

Dynamicznie zmienia rozmiar okna.

### Składnia

    window.resizeTo(iWidth,iHeight)

### Parametry

- `iWidth` jest liczbą całkowitą reprezentującą nową szerokość wyrażoną w pikselach.
- `iHeight` jest liczbą całkowitą wartości reprezentującej nową wyskość w pikselach.

### Przykład

     // funkcja zmienia rozmiar okna do połowy aktualnie
     // wyświetlanego ekranu
     function halve() {
       window.resizeTo(window.screen.availWidth/2,
          window.screen.availHeight/2);
     }

### Uwagi

Zobacz także [DOM:window.resizeBy](pl/DOM/window.resizeBy).

### Specyfikacja

DOM poziom 0. Nie jest częścią specyfikacji.



{{ languages( { "en": "en/DOM/window\.resizeTo", "ja": "ja/DOM/window\.resizeTo" } ) }}
