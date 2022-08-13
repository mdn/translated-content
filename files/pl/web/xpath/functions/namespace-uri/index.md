---
title: namespace-uri
slug: Web/XPath/Functions/namespace-uri
tags:
  - Dokumentacje
  - Wszystkie_kategorie
  - XSLT
  - XSLT:Dokumentacje
translation_of: Web/XPath/Functions/namespace-uri
original_slug: Web/XPath/Funkcje/namespace-uri
---
{{ XsltRef() }}

Funkcja `namespace-uri` zwraca łańcuch znaków reprezentujący URI przestrzeni nazw dla pierwszego wierzchołka danego zbioru wierzchołków.

### Składnia

    namespace-uri( [zbiór_wierzchołków] )

### Argumenty

- `zbiór_wierzchołków` (opcjonalny)
  - : Zwrócony zostanie URI przestrzeni nazw pierwszego wierzchołka w tym zbiorze wierzchołków. Jeśli argument ten zostanie pominięty, użyty zostanie aktualny wierzchołek kontekstu.

### Zwraca

Ciąg reprezentujący URI przestrzeni nazw, w której dany wierzchołek kontekstu się znajduje.

### Uwagi

- Jeśli podany wierzchołek nie posiada przestrzeni nazw, zwrócony łańcuch znaków będzie zawsze pusty.

- Dla wierzchołków innych niż wierzchołki elementu i atrybutu, zwrócony łańcuch znaków będzie zawsze pusty.

### Definicja

[XPath 1.0 4.1](http://www.w3.org/TR/xpath#function-local-name)

### Gecko

Obsługuje.

{{ languages( { "en": "en/XPath/Functions/namespace-uri", "fr": "fr/XPath/Fonctions/namespace-uri", "ja": "ja/XPath/Functions/namespace-uri" } ) }}
