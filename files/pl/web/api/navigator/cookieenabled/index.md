---
title: Navigator.cookieEnabled
slug: Web/API/Navigator/cookieEnabled
tags:
  - DOM
  - DOM_0
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Wszystkie_kategorie
translation_of: Web/API/Navigator/cookieEnabled
---
{{ ApiRef() }}

### Posumowanie

Zwraca wartość logiczną tylko do odczytu, wskazującą czy obsługa ciasteczek jest włączona, czy nie.

### Składnia

    var cookieEnabled = navigator.cookieEnabled;

- `cookieEnabled` jest wartością logiczną `true` lub `false`.

### Przykład

    if (!navigator.cookieEnabled) {
      // poinformuj użytkownika, że przy włączonych ciasteczkach
      // strona jest bardziej użyteczna
    }

### Uwagi

W związku z {{ Bug(230350) }}, `cookieEnabled` może zwracać błędny wynik w aplikacjach opartych o Gecko.

### Specyfikacja

{{ DOM0() }}



{{ languages( { "en": "en/DOM/window\.navigator.cookieEnabled", "ja": "ja/DOM/window\.navigator.cookieEnabled" } ) }}
