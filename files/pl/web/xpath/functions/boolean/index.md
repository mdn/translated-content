---
title: boolean
slug: Web/XPath/Functions/boolean
tags:
  - Dokumentacje
  - Wszystkie_kategorie
  - XSLT
  - XSLT:Dokumentacje
translation_of: Web/XPath/Functions/boolean
original_slug: Web/XPath/Funkcje/boolean
---
{{ XsltRef() }}

Funkcja `boolean` ocenia wyrażenie i zwraca prawdę (`true`) lub fałsz (`false`).

### Składnia

    boolean( wyrażenie )

### Argumenty

- `wyrażenie`
  - : Oceniane wyrażenie. Wyrażenie może odnosić się zarówno do liczb, jak i do zestawów wierzchołków tak samo jak do wartości logicznych.

### Zwraca

Wartość logiczną `true` lub `false` po ocenie `wyrażenie`.

### Uwagi

- Fałsz, jeśli liczba jest zerem lub `NaN` (nie jest liczbą). Inaczej jest prawdą.
- Wierzchołek jest oceniany jako prawda, jeśli nie jest on pusty.
- Fałsz, jeśli łańcuch znaków jest pusty. Inaczej jest prawdą.
- Typ obiektu inny niż cztery typy podstawowe jest konwertowany do wartości logicznej w sposób zależny od tego typu.

### Definicja

[XPath 1.0 4.3](http://www.w3.org/TR/xpath#function-boolean)

### Gecko

Obsługuje.

{{ languages( { "en": "en/XPath/Functions/boolean", "fr": "fr/XPath/Fonctions/boolean", "ja": "ja/XPath/Functions/boolean" } ) }}
