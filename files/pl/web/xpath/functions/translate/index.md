---
title: translate
slug: Web/XPath/Functions/translate
tags:
  - Dokumentacje
  - Wszystkie_kategorie
  - XSLT
  - XSLT:Dokumentacje
translation_of: Web/XPath/Functions/translate
original_slug: Web/XPath/Funkcje/translate
---
{{ XsltRef() }}

Funkcja `translate` ocenia ciąg i zbiór znaków do przetłumaczenia i zwraca przetłumaczony łańcuch znaków.

### Składnia

    translate( string, abc, XYZ )

### Argumenty

- _`string`_
  - : Oceniany łańcuch znaków.

- _`abc`_
  - : Ciąg znaków, które zostaną zastąpione.

- _`XYZ`_
  - : Ciąg znaków, które użyte zostaną do zastąpienia. Pierwszy znak w _`XYZ`_ zastąpi każde wystąpienie pierwszego znaku w _`abc`_, które pojawi się w*` `\_\_`string`* .

### Zwraca

Przetłumaczony łańcuch znaków.

### Uwagi

W XPath funkcja `translate` nie jest wystarczającym rozwiązaniem w przypadku konwersji we wszystkich językach. Przyszłe wersje XPath mogą dostarczyć dodatkowych funkcji dla przypadku konwersji.

Jednakże jest to obecnie rozwiązanie najbliższe funkcji, która potrafi skonwertować łańcuch znaków do małych lub dużych znaków.

Przykład

    <xsl:value-of select="translate('The quick brown fox.', 'abcdefghijklmnopqrstuvwxyz', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'" />

Otrzymamy

    THE QUICK BROWN FOX.

- Jeśli*` abc`* jest dłuższy niż*` XYZ`*, to każde wystąpienie znaków w*` abc`*, które nie ma odpowiadającego znaku w` `_`XYZ`_, zostanie usunięte.

Przykład

    <xsl:value-of select="translate('The quick brown fox.', 'brown', 'red'" />

Otrzymamy

    The quick red fox.

- Jeśli*` XYZ`* zawiera więcej znaków niż _`abc`_, dodatkowe znaki są ignorowane.

### Definicja

[XPath 1.0 4.2](http://www.w3.org/TR/xpath#function-translate)

### Gecko

Obsługuje.



{{ languages( { "en": "en/XPath/Functions/translate", "fr": "fr/XPath/Fonctions/translate", "ja": "ja/XPath/Functions/translate" } ) }}
