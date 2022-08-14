---
title: window.setTimeout
slug: Web/API/setTimeout
tags:
  - DOM
  - DOM_0
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Wszystkie_kategorie
translation_of: Web/API/WindowOrWorkerGlobalScope/setTimeout
original_slug: Web/API/WindowOrWorkerGlobalScope/setTimeout
---
{{ ApiRef() }}

### Podsumowanie

Uruchamia fragment kodu bądź funkcję po określonym odstępie czasu.

### Składnia

    id = window.setTimeout(funkcja, opóźnienie[, param1, param2, ...]);
    id = window.setTimeout(kod, opóźnienie);

gdzie

- `funkcja` to [funkcja](/pl/Dokumentacja_języka_JavaScript_1.5/Obiekty/Function "pl/Dokumentacja_języka_JavaScript_1.5/Obiekty/Function"), jaką chcesz uruchomić po opóźnieniu

  - w alternatywnej składni, `kod` to ciąg znaków z kodem, który będzie wykonany po upływie podanego czasu

- `opóźnienie` to liczba milisekund (tysięcznych części sekundy), po których upływie wykonana zostanie funkcja
- `id` to identyfikator, którego można użyć z [window.clearTimeout](/pl/DOM/window.clearTimeout "pl/DOM/window.clearTimeout")

### Przykłady

    window.setTimeout('window.parent.generateOutput()', 1000);

<!---->

    function generateOutput(aConcise) {
      if(aConcise)
        parent.generateConciseOutput();
      else
        parent.generateOutput();
    }
    window.setTimeout(generateOutput, 1000, true);

Zobacz też [przykład użycia clearTimeout()](/pl/DOM/window.clearTimeout#Example "pl/DOM/window.clearTimeout#Example").

### Uwagi

Możesz anulować opóźnienie wywołania funkcji za pomocą [window.clearTimeout()](/pl/DOM/window.clearTimeout "pl/DOM/window.clearTimeout").

Jeśli chcesz, by funkcja była uruchamiana cyklicznie (np. co każde N milisekund), rozważ wykorzystanie [window.setInterval()](/pl/DOM/window.setInterval "pl/DOM/window.setInterval").

### Specyfikacja

{{ DOM0() }}

{{ languages( { "en": "en/DOM/window\.setTimeout", "fr": "fr/DOM/window\.setTimeout", "ja": "ja/DOM/window\.setTimeout", "pl": "pl/DOM/window\.setTimeout" } ) }}
