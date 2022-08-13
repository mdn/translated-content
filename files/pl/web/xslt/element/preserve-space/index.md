---
title: preserve-space
slug: Web/XSLT/Element/preserve-space
tags:
  - Dokumentacje
  - Wszystkie_kategorie
  - XSLT
  - XSLT:Dokumentacje
translation_of: Web/XSLT/Element/preserve-space
original_slug: Web/XSLT/preserve-space
---
{{ XsltRef() }}

Element `<xsl:preserve-space>` definiuje elementy w dokumencie źródłowym, dla których białe znaki (whitespace) powinny zostać zachowane. Jeśli elementów jest więcej niż tylko jeden, oddziel ich nazwy używając jednego z białych znaków. Pozostawienie białych znaków jest ustawieniem domyślnym, dlatego ten element musi być użyty tylko jako przeciwdziałanie elementowi `<xsl:strip-space>`.

### Składnia

    <xsl:preserve-space elements=LISTA-NAZW  />

### Wymagane atrybuty

- `elements`
  - : Określa elementy, dla których białe znaki mają zostać zachowane.

### Opcjonalne atrybuty

Brak.

### Typ

Element najwyższego poziomu, musi być dzieckiem `<xsl:stylesheet>` lub `<xsl:transform>`.

### Definicja

XSLT, sekcja 3.4

### Gecko

Obsługuje.

{{ languages( { "en": "en/XSLT/preserve-space", "fr": "fr/XSLT/preserve-space" } ) }}
