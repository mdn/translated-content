---
title: window.frameElement
slug: Web/API/Window/frameElement
tags:
  - DOM
  - DOM_0
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Wszystkie_kategorie
translation_of: Web/API/Window/frameElement
---
{{ ApiRef() }}

### Podsumowanie

Zwraca element (jak np. `<iframe>` lub `<object>`), w którym osadzone jest okno lub wartość `null`, gdy okno jest najwyższego poziomu.

### Składnia

    varframeEl = window.frameElement;

- `frameEl` jest elementem, w którym jest osadzone okno lub `null`, jeśli okno jest najwyższego poziomu.

### Przykład

    var frameEl = window.frameElement;
    // jeśli jesteśmy wewnątrz ramki, to zmień jej adres URL na 'http://mozilla.org/'
    if (frameEl)
      frameEl.src = 'http://mozilla.org/';

### Uwagi

Zauważ, że pomimo swojej nazwy własność działa również dla dokumentów wewnątrz `<object>` lub innych elementów osadzających.

Zobacz także [`window.parent`](pl/DOM/window.parent), który zwraca okno-rodzica, którym jest okno zawierające `frameElement` okna-dziecka.

### Specyfikacja

{{ DOM0() }}



{{ languages( { "en": "en/DOM/window\.frameElement", "ja": "ja/DOM/window\.frameElement" } ) }}
