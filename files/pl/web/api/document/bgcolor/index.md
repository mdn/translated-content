---
title: document.bgColor
slug: Web/API/Document/bgColor
tags:
  - DOM
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Wszystkie_kategorie
translation_of: Web/API/Document/bgColor
---
{{ ApiRef() }}

### Podsumowanie

{{ Deprecated_header() }} Własność
_bgColor_
pobiera/zwraca kolor tła dokumentu.

### Składnia

    kolor = document.bgColor
    document.bgColor =kolor

### Parametry

- `kolor` jest łańcuchem znaków reprezentującym nazwę koloru - słownie (np. "red") lub w systemie szesnastkowym, jak w HTML-u (np. "#fdfef8")

### Przykład

    document.bgColor = "darkblue";

### Notes

Domyślną wartością tej własności w Mozilli Firefox jest kolor biały (`#ffffff` w systemie szesnastkowym).

Własność `document.bgColor` jest wycofywana [DOM Level 2 HTML](http://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-26809268). Zalecanym rozwiązaniem alternatywnym jest użycie stylu CSS [background-color](pl/CSS/background-color), gdy możemy uzyskać dostęp bezpośrednio przez DOM za pomocą własności`document.body.style.backgroundColor`. Innym alternatywnym rozwiązaniem jest `document.body.bgColor`, chociaż to rozwiązanie jest także wycofywane w HTML 4.01 na rzecz rozwiązania wykorzystującego CSS .

### Specyfikacja

DOM Level 0 - brak w specyfikacji.

{{ languages( { "en": "en/DOM/document.bgColor", "es": "es/DOM/document.bgColor" } ) }}
