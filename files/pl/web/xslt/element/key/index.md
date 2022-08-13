---
title: key
slug: Web/XSLT/Element/key
tags:
  - Dokumentacje
  - Wszystkie_kategorie
  - XSLT
  - XSLT:Dokumentacje
translation_of: Web/XSLT/Element/key
original_slug: Web/XSLT/key
---
{{ XsltRef() }}

Element `<xsl:key>` deklaruje nazwę klucza, który możemy zastosować gdziekolwiek w arkuszu stylów z funkcją `key( )`.

### Składnia

    <xsl:key name=NAZWA match=WYRAZENIE use=WYRAZENIE />

### Wymagane atrybuty

- `name`
  - : Określa nazwę klucza. Musi być poprawną wartością QName.
- `match`
  - : Określa węzły, do których odnosi się klucz.
- `use`
  - : Określa wyrażenie XPath wykorzystywane do ustalenia wartości klucza dla każdego z węzłów.

### Opcjonalne atrybuty

Brak.

### Typ

Element najwyższego poziomu, musi być dzieckiem `<xsl:stylesheet>` lub `<xsl:transform>`.

### Definicja

XSLT, sekcja 12.2.

### Gecko

Obsługuje.

{{ languages( { "en": "en/XSLT/key", "es": "es/XSLT/key", "fr": "fr/XSLT/key" } ) }}
