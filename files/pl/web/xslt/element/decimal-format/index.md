---
title: decimal-format
slug: Web/XSLT/Element/decimal-format
tags:
  - Dokumentacje
  - Wszystkie_kategorie
  - XSLT
  - XSLT:Dokumentacje
translation_of: Web/XSLT/Element/decimal-format
original_slug: Web/XSLT/decimal-format
---
{{ XsltRef() }}

Element `<xsl:decimal-format>` definiuje znaki i symbole, które mają być użyte podczas konwersji liczb na łańcuchy znakowe przez funkcję _`format-number( )`_.

### Składnia

    <xsl:decimal-format
    	name=NAZWA
    	decimal-separator=ZNAK
    	grouping-separator=ZNAK
    	infinity=ŁANCUCH-ZNAKOW
    	minus-sign=ZNAK
    	NaN=ŁANCUCH-ZNAKOW
    	percent=ZNAK
    	per-mille=ZNAK
    	zero-digit=ZNAK
    	digit=ZNAK
    	pattern-separator=ZNAK />

### Wymagane atrybuty

Brak.

### Opcjonalne atrybuty

- `name`
  - : Określa nazwę formatu.

- `decimal-separator`
  - : Określa punktowy znak dziesiętny. Domyślną wartością jest (`.`).

- `grouping-separator`
  - : Określa separator tysięczny. Domyślną wartością jest (`,`).

- `infinity`
  - : Określa łańcuch znakowy używany do przedstawienia nieskończoności. Domyślną wartością jest łańcuch "`Infinity`".

- `minus-sign`
  - : Określa znak minusa. Domyślną wartością jest łącznik (`-`).

- `NaN`
  - : Określa łańcuch znaków, używany gdy wartość nie jest liczbą. Domyślnie jest to łańcuch "`NaN`".

- `percent`
  - : Określa znak procenta. Domyślną wartością jest (`%`).

- `per-mille`
  - : Określa znak promila. Domyślną wartością jest (`‰`).

- `zero-digit`
  - : Określa znak cyfry zero. Domyślną wartością jest (`0`).

- `digit`
  - : Określa znak, które we wzorze formatu reprezentuje cyfrę. Domyślną wartością jest (`#`).

- `pattern-separator`
  - : Określa znak rozdzielający dodatnie i ujemne podwzorce we wzorze formatu. Domyślną wartością jest średnik (`;`).

### Typ

Element najwyższego poziomu, musi być dzieckiem `<xsl:stylesheet>` lub `<xsl:transform>`.

### Definicja

XSLT, sekcja 12.3.

### Gecko

Obsługuje od wersji 1.0 (Mozilla 1.0, Netscape 7.0).

{{ languages( { "en": "en/XSLT/decimal-format", "es": "es/XSLT/decimal-format", "fr": "fr/XSLT/decimal-format" } ) }}
