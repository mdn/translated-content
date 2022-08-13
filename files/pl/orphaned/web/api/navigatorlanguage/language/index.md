---
title: NavigatorLanguage.language
slug: orphaned/Web/API/NavigatorLanguage/language
tags:
  - DOM
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Wszystkie_kategorie
translation_of: Web/API/NavigatorLanguage/language
original_slug: Web/API/NavigatorLanguage/language
---
{{ ApiRef() }}

### Podsumowanie

Zwraca łańcuch znaków reprezentujący wersję językową przeglądarki.

### Składnia

    lang = window.navigator.language

### Parametry

- `lang` jest dwu znakowym łańcuchem znaków (na przykład "en" lub "ja") reprezentującym wersję języka.

### Przykład

    if ( window.navigator.language != "pl" ) {
     doLangSelect(window.navigator.language);
    }

### Uwagi

Ta własność pojawia się również jako część łańcucha znaków [navigator.userAgent](pl/DOM/window.navigator.userAgent).

### Specyfikacja

DOM Level 0. Nie jest częścią specyfikacji.



{{ languages( { "en": "en/DOM/window\.navigator.language", "ja": "ja/DOM/window\.navigator.language" } ) }}
