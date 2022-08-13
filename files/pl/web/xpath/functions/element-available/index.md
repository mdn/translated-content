---
title: element-available
slug: Web/XPath/Functions/element-available
tags:
  - Dokumentacje
  - Wszystkie_kategorie
  - XSLT
  - XSLT:Dokumentacje
translation_of: Web/XPath/Functions/element-available
original_slug: Web/XPath/Funkcje/element-available
---
{{ XsltRef() }}

Funkcja `element-available` określa czy element jest dostępny i zwraca prawdę lub fałsz.

### Składnia

    element-available( QName )

### Argumenty

- `QName`
  - : Musi być prawidłową nazwę (QName). QName jest rozwijany do nazwy za pomocą deklaracji przestrzeni nazw w zasięgu wyrażenia.

### Zwraca

Zwraca prawdę wtedy i tylko wtedy, gdy rozszerzona nazwa jest nazwą instrukcji. Jeśli rozszerzona nazwa posiada URI przestrzeni nazw identyczny z URI przestrzeni nazw XSLT, to odnosi się ona do elementu zdefiniowanego przez XSLT. W przeciwnym wypadku odnosi się ona do elementu rozszerzenia. Jeśli rozszerzona nazwa posiada puste URI przestrzeni nazw, funkcja zwróci wartość fałsz.

### Definicja

[XSLT 1.0 15](http://www.w3.org/TR/xslt#function-element-available)

### Gecko

Obsługuje.

{{ languages( { "en": "en/XPath/Functions/element-available", "fr": "fr/XPath/Fonctions/element-available" } ) }}
