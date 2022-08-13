---
title: document
slug: Web/XPath/Functions/document
tags:
  - Dokumentacje
  - Wszystkie_kategorie
  - XSLT
  - XSLT:Dokumentacje
translation_of: Web/XPath/Functions/document
original_slug: Web/XPath/Funkcje/document
---
{{ XsltRef() }}

`document` znajduje zbiór wierzchołków w jednym lub wielu zewnętrznych dokumentach i zwraca wynik jako zbiór wierzchołków.

### Składnia

    document( URI [, zbiór_wierzchołków] )

### Argumenty

- `URI`
  - : Bezwzględny lub relatywny adres URI dokumentu do pobrania. URI może także zawierać identyfikator fragmentu.

- `zbiór_wierzchołków` (opcjonalny)
  - : Wyrażenie wskazujące zbiór wierzchołków zewnętrznego dokumentu, który powinien zostać zwrócony.

### Zwraca

Zbiór wierzchołków.

### Uwagi

- Jeśli URI zawiera identyfikator fragmentu i fragment ten może zostać zidentyfikowany w dokumencie zewnętrznym, będzie on uważany za główny w wyrażeniu argumentu `zbiór_wierzchołków`. Jeśli argument `zbiór_wierzchołków` jest pominięty, zwrócony zostanie cały fragment.

- Jeśli argument `URI` jest zbiorem wierzchołków i obecny jest drugi argument, każdy wierzchołek w zbiorze wierzchołków zostanie przetworzony jako oddzielny adres URI, a zwrócony zbiór wierzchołków będzie taki, jak gdyby funkcja `document` została wywołana wielokrotnie, przy czym wynikowe zbiory wierzchołków zostaną połączone w pojedynczy zbiór wierzchołków.

- Pozostałe specyficzne warunki istnieją wraz z określonymi zachowaniami. Zobacz dokumentację XSLT 1.0, aby uzyskać szczegóły.

- Gdy adres URI jest względny wobec dokumentu XSL, `document("")` zwróci wierzchołek główny aktualnego dokumentu.

Ta funkcja jest specyficznym dla XSLT dodatkiem do XPath. Nie jest częścią głównej biblioteki funkcji XPath.

### Definicja

[XSLT 1.0 12.1](http://www.w3.org/TR/xslt#function-document)

### Obsługa Gecko

Obsługuje.

{{ languages( { "en": "en/XPath/Functions/document", "fr": "fr/XPath/Fonctions/document" } ) }}
