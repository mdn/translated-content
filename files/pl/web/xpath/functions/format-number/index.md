---
title: format-number
slug: Web/XPath/Functions/format-number
tags:
  - Dokumentacje
  - Wszystkie_kategorie
  - XSLT
  - XSLT:Dokumentacje
translation_of: Web/XPath/Functions/format-number
original_slug: Web/XPath/Funkcje/format-number
---
{{ XsltRef() }}

Funkcja `format-number` ocenia liczbę i zwraca łańcuch znaków reprezentujący liczbę w podanym formacie.

### Składnia

    format-number( liczba , wzorzec [, format_dziesiętny] )

### Argumenty

- `liczba`
  - : Liczba do sformatowania

- `wzorzec`
  - : Łańcuch znaków w formacie klasy DecimalFormat [JDK 1.1](http://java.sun.com/products/archive/jdk/1.1/) (Dokumentacja JDK 1.1 nie jest dostępna. Dostępne są informacje dotyczące [Java SE 6 DecimalFormat](http://java.sun.com/javase/6/docs/api/java/text/DecimalFormat.html).).

- `format_dziesiętny` (opcjonalnie)
  - : Nazwa elementu [`xsl:decimal-format`](pl/XSLT/decimal-format) definiująca format liczby, który ma zostać użyty. Jeśli argument zostanie pominięty, użyty zostanie format dziesiętny.

### Zwraca

Łańcuch znaków reprezentujący liczbę w nowym formacie.

### Uwagi

Ta funkcja jest specyficznym dla XSLT dodatkiem do XPath. Nie jest częścią głównej biblioteki funkcji XPath.

### Definicja

[XSLT 1.0 12.3](http://www.w3.org/TR/xslt#function-format-number)

### Gecko

Obsługuje.

{{ languages( { "en": "en/XPath/Functions/format-number", "fr": "fr/XPath/Fonctions/format-number" } ) }}
