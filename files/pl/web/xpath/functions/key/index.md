---
title: key
slug: Web/XPath/Functions/key
tags:
  - Dokumentacje
  - Wszystkie_kategorie
  - XSLT
  - XSLT:Dokumentacje
translation_of: Web/XPath/Functions/key
original_slug: Web/XPath/Funkcje/key
---
{{ XsltRef() }}

Funkcja `key` zwraca zbiór wierzchołków posiadających podaną wartość danego klucza.

### Składnia

    key( nazwaklucza , wartość )

### Argumenty

- `nazwaklucza`
  - : Łańcuch znaków zawierający nazwę elementu [`xsl:key`](pl/XSLT/key) do użycia.

<!---->

- `wartość`
  - : Zwrócony zbiór wierzchołków będzie zawierał każdy wierzchołek, który posiada tę wartość dla danego klucza.

### Zwraca

Zbiór wierzchołków.

### Uwagi

- Element [`xsl:key`](pl/XSLT/key) określa, który atrybut i z jakich elementów zostanie użyty do dopasowania klucza.

Ta funkcja jest specyficznym dla XSLT dodatkiem do XPath. Nie jest częścią głównej biblioteki funkcji XPath.

### Definicja

[XSLT 1.0 12.2](http://www.w3.org/TR/xslt#function-key)

### Gecko

Obsługuje.

{{ languages( { "en": "en/XPath/Functions/key", "fr": "fr/XPath/Fonctions/key" } ) }}
