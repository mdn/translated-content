---
title: name
slug: Web/XPath/Functions/name
tags:
  - Dokumentacje
  - Wszystkie_kategorie
  - XSLT
  - XSLT:Dokumentacje
translation_of: Web/XPath/Functions/name
original_slug: Web/XPath/Funkcje/name
---
{{ XsltRef() }}

Funkcja `name` zwraca łańcuch znaków reprezentujący QName pierwszego wierzchołka w danym zbiorze wierzchołków.

### Składnia

    name( [zbiór_wierzchołków] )

### Argumenty

- `zbiór_wierzchołków` (opcjonalny)
  - : Zostanie zwrócony QName pierwszego wierzchołka w tym zbiorze. Jeśli argument ten zostanie pominięty, użyty zostanie aktualny wierzchołek kontekstu.

### Zwraca

Łańcuch znaków reprezentujący QName wierzchołka.

### Uwagi

- [QName](http://www.w3.org/TR/REC-xml-names/#NT-QName) jest odpowiednią nazwą wierzchołka, włączając prefiks jego przestrzeni nazw i jego lokalną nazwę.

### Definicja

[XPath 1.0 4.1](http://www.w3.org/TR/xpath#function-local-name)

### Gecko

Obsługuje.

{{ languages( { "en": "en/XPath/Functions/name", "fr": "fr/XPath/Fonctions/name", "ja": "ja/XPath/Functions/name" } ) }}
