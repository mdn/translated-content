---
title: stylesheet.parentStyleSheet
slug: Web/API/Stylesheet/parentStyleSheet
tags:
  - DOM
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Wszystkie_kategorie
translation_of: Web/API/StyleSheet/parentStyleSheet
---
{{ ApiRef() }}

### Podsumowanie

Zwraca arkusz stylów, który włącza obecny arkusz (jeśli istnieje).

### Składnia

    objRef = stylesheet.parentStyleSheet

### Przykład

    // znajdź arkusz stylów najwyższego poziomu
    if (stylesheet.parentStyleSheet) {
      sheet = stylesheet.parentStyleSheet;
    }
    else
    { sheet = stylesheet; }

### Uwagi

Ta własność zwraca wartość NULL, jeśli obecny arkusz stylów jest arkuszem najwyższego poziomu lub jeśli włączanie arkuszy stylów nie jest obsługiwane.

### Specyfikacja

[parentStyleSheet](http://www.w3.org/TR/2000/REC-DOM-Level-2-Style-20001113/stylesheets.html#StyleSheets-StyleSheet-parentStyleSheet)

{{ languages( { "en": "en/DOM/stylesheet.parentStyleSheet" } ) }}
