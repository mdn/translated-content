---
title: number
slug: Web/XPath/Functions/number
tags:
  - Dokumentacje
  - Wszystkie_kategorie
  - XSLT
  - XSLT:Dokumentacje
translation_of: Web/XPath/Functions/number
original_slug: Web/XPath/Funkcje/number
---
{{ XsltRef() }}

Funkcja `number` konwertuje obiekt do liczby i zwraca liczbę.

### Składnia

    number( [obiekt] )

### Argumenty

- _`obiekt`_ (opcjonalny)
  - : Obiekt, który ma zostać przekonwertowany do liczby. Jeśli pominięty, użyty zostanie wierzchołek aktualnego kontekstu.

### Zwraca

Liczbę będącą wynikiem konwersji obiektu.

### Uwagi

- Łańcuchy znaków są konwertowane do liczby poprzez usunięcie poprzedzających białych znaków znajdujących się przed liczbą i zignorowanie białych znaków występujących po niej. Jeśli łańcuch znaków nie odpowiada temu wzorcowi, jest on konwertowany do wartości NaN.
- Logiczna prawda jest konwertowana do 1. Fałsz jest konwertowany do 0.
- Zbiór wierzchołków jest konwertowany najpierw do łańcucha znaków tak, jak przez funkcję [`string()`](pl/XPath/Funkcje/string), a następnie konwertowany w ten sam sposób, co argument będący łańcuchem znaków.
- Typ obiektu inny niż cztery typy podstawowe jest konwertowany do liczby w sposób zależny od tego typu.

### Definicja

[XPath 1.0 4.4](http://www.w3.org/TR/xpath#function-number)

### Gecko

Obsługuje.

{{ languages( { "en": "en/XPath/Functions/number", "fr": "fr/XPath/Fonctions/number", "ja": "ja/XPath/Functions/number" } ) }}
