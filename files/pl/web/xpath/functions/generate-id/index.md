---
title: generate-id
slug: Web/XPath/Functions/generate-id
tags:
  - Dokumentacje
  - Wszystkie_kategorie
  - XSLT
  - XSLT:Dokumentacje
translation_of: Web/XPath/Functions/generate-id
original_slug: Web/XPath/Funkcje/generate-id
---
{{ XsltRef() }}

Funkcja `generate-id` generuje unikatowy identyfikator dla pierwszego wierzchołka w podanym zbiorze wierzchołków i zwraca łańcuch znaków zawierający ten identyfikator.

### Składnia

    generate-id( [zbiór_wierzchołków] )

### Argumenty

- `zbiór_wierzchołków` (opcjonalny)
  - : Zostanie wygenerowany identyfikator dla pierwszego wierzchołka tego zbioru wierzchołków. Jeśli argument zostanie pominięty, zostanie użyty aktualny wierzchołek kontekstu.

### Zwraca

Łańcuch znaków zawierający wygenerowany identyfikator.

### Uwagi

- Ten sam identyfikator musi zostać wygenerowany każdorazowo dla tego samego wierzchołka w aktualnym dokumencie aktualnej transformacji.

- Wygenerowany identyfikator nie może być taki sam w kolejnej transformacji.

Ta funkcja jest specyficznym dla XSLT dodatkiem do XPath. Nie jest częścią głównej biblioteki funkcji XPath.

### Definicja

[XSLT 1.0 12.4](http://www.w3.org/TR/xslt#function-generate-id)

### Gecko

Obsługuje.

{{ languages( { "en": "en/XPath/Functions/generate-id", "fr": "fr/XPath/Fonctions/generate-id" } ) }}
