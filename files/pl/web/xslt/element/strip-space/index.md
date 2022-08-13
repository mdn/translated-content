---
title: strip-space
slug: Web/XSLT/Element/strip-space
tags:
  - Dokumentacje
  - Wszystkie_kategorie
  - XSLT
  - XSLT:Dokumentacje
translation_of: Web/XSLT/Element/strip-space
original_slug: Web/XSLT/strip-space
---
{{ XsltRef() }}

Element `<xsl:strip-space>` definiuje elementy w dokumencie źródłowym, dla których białe znaki powinny zostać usunięte.

### Składnia

    <xsl:strip-space elements=LISTA-NAZW  />

### Wymagane atrybuty

- `elements`
  - : Określa listę oddzielonych za pomocą spacji elementów w źródle, którego węzły tekstowe zawierające tylko białe znaki powinny zostać usunięte.

### Opcjonalne atrybuty

Brak.

### Typ

Element najwyższego poziomu, musi być dzieckiem `<xsl:stylesheet>` lub `<xsl:transform>`.

### Definicja

XSLT, sekcja 3.4

### Gecko

Obsługuje.

{{ languages( { "en": "en/XSLT/strip-space", "fr": "fr/XSLT/strip-space" } ) }}
