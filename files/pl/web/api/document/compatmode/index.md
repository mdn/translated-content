---
title: document.compatMode
slug: Web/API/Document/compatMode
tags:
  - DOM
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Wszystkie_kategorie
translation_of: Web/API/Document/compatMode
---
{{ ApiRef() }}

### Podsumowanie

Wskazuje, czy dokument renderowany jest w trybie zgodności wstecznej (ang.
_quirks mode_
), czy też w trybie standardów (ang.
_strict mode_
).

### Składnia

    tryb = document.compatMode

### Parametry

- `tryb` jest ciągiem zawierającym "BackCompat" dla trybu zgodności wstecznej lub "CSS1Compat" dla trybu standardów.

### Przykład

    if ( document.compatMode == "BackCompat" ){
      //wykonaj coś dla trybu zgodności
    }

{{ languages( { "en": "en/DOM/document.compatMode" } ) }}
