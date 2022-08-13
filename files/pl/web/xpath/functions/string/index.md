---
title: string
slug: Web/XPath/Functions/string
tags:
  - Dokumentacje
  - Wszystkie_kategorie
  - XSLT
  - XSLT:Dokumentacje
translation_of: Web/XPath/Functions/string
original_slug: Web/XPath/Funkcje/string
---
{{ XsltRef() }}

Funkcja `string` konwertuje dany argument do łańcucha znaków.

### Składnia

    string( [obiekt] )

### Argumenty

- _`obiekt`_ (opcjonalny)
  - : Obiekt, który ma zostać przekonwertowany do łańcucha znaków. Jeśli pominięty, użyty zostanie wierzchołek kontekstu.

### Zwraca

Łańcuch znaków

### Uwagi

- Jeśli obiekt jest zbiorem wierzchołków, zwracana jest wartość łańcucha znaków pierwszego wierzchołka w zbiorze.
- Liczby są konwertowane następująco:

  - NaN jest konwertowane do ciągu NaN.
  - Dodatnie zero jest konwertowane do łańcucha 0.
  - Ujemne zero jest konwertowane do łańcucha 0.
  - Dodatnia nieskończoność jest konwertowana do łańcucha `Infinity`.
  - Ujemna nieskończoność jest konwertowana do łańcucha `-Infinity`.
  - Liczby dziesiętne między -1 i 1 są konwertowane do łańcucha znaków z pojedynczym zerem poprzedzającym kropkę dziesiętną.

### Definicja

[XPath 1.0 4.2](http://www.w3.org/TR/xpath#function-string)

### Gecko

Obsługuje.

{{ languages( { "en": "en/XPath/Functions/string", "fr": "fr/XPath/Fonctions/string", "ja": "ja/XPath/Functions/string" } ) }}
