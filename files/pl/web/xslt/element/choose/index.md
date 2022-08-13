---
title: choose
slug: Web/XSLT/Element/choose
tags:
  - Dokumentacje
  - Wszystkie_kategorie
  - XSLT
  - XSLT:Dokumentacje
translation_of: Web/XSLT/Element/choose
original_slug: Web/XSLT/choose
---
{{ XsltRef() }}

Element `<xsl:choose>` definiuje wybór spośród określonej liczby wyborów alternatywnych. Przypomina w działaniu wyrażenie switch znane z proceduralnych języków programowania.

### Składnia

    <xsl:choose>
    	<xsl:when test="[cokolwiek do sprawdzenia1]"></xsl:when>
    	<xsl:when test="[cokolwiek do sprawdzenia2]"></xsl:when>
         <xsl:otherwise></xsl:otherwise> [opcjonalnie]
    </xsl:choose>

### Wymagane atrybuty

Brak.

### Opcjonalne atrybuty

Brak.

### Typ

Instrukcja. Pojawia się wraz z szablonem. Zawiera jeden lub więcej elementów `<xsl:when>` i opcjonalnie końcowy element `<xsl:otherwise>`.

### Definicja

XSLT, sekcja 9.2.

### Gecko

Obsługuje.

{{ languages( { "en": "en/XSLT/choose", "es": "es/XSLT/choose", "fr": "fr/XSLT/choose" } ) }}
