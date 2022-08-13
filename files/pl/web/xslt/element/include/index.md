---
title: include
slug: Web/XSLT/Element/include
tags:
  - Dokumentacje
  - Wszystkie_kategorie
  - XSLT
  - XSLT:Dokumentacje
translation_of: Web/XSLT/Element/include
original_slug: Web/XSLT/include
---
{{ XsltRef() }}

Element `<xsl:include>` łączy zawartości dwóch arkuszy. W przeciwieństwie do `<xsl:import>`, zawartość arkusza włączanego ma tę samą ważność, co zawartość arkusza włączającego.

### Składnia

    <xsl:include href=URI />

### Wymagane atrybuty

- `href`
  - : Określa URI arkusza stylów do włączenia.

### Opcjonalne atrybuty

Brak.

### Typ

Element najwyższego poziomu, może pojawić się w dowolnej kolejności jako dziecko `<xsl:stylesheet>` lub `<xsl:transform>`.

### Definicja

XSLT, sekcja 2.6.1.

### Gecko

Obsługuje.

{{ languages( { "en": "en/XSLT/include", "es": "es/XSLT/include", "fr": "fr/XSLT/include" } ) }}
