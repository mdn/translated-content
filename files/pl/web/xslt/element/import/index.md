---
title: import
slug: Web/XSLT/Element/import
tags:
  - Dokumentacje
  - Wszystkie_kategorie
  - XSLT
  - XSLT:Dokumentacje
translation_of: Web/XSLT/Element/import
original_slug: Web/XSLT/import
---
{{ XsltRef() }}

Element `<xsl:import>` jest elementem najwyższego poziomu, który służy do importowania zawartości jednego arkusza do innego. Ogólnie mówiąc zawartość arkusza importowanego posiada niższą ważność od zawartości arkusza importującego. Zostało to ustanowione w odróżnieniu od `<xsl:include>`, gdzie zawartości dwóch arkuszów - włączanego i włączającego - mają tę samę ważność.

### Składnia

    <xsl:import href=URI  />

### Wymagane atrybuty

- `href`
  - : Określa URI arkusza stylów do importu.

### Opcjonalne atrybuty

Brak.

### Typ

Element najwyższego poziomu, musi pojawić się przed jakimkolwiek dzieckiem `<xsl:stylesheet>` lub `<xsl:transform>` w arkuszu importującym.

### Definicja

XSLT, sekcja 2.6.2.

### Gecko

Przeważnie obsługiwany, z kilkoma problemami ze zmiennymi i parametrami najwyższego poziomu, od wersji Mozilla 1.0.

{{ languages( { "en": "en/XSLT/import", "es": "es/XSLT/import", "fr": "fr/XSLT/import" } ) }}
