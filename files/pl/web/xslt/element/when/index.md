---
title: when
slug: Web/XSLT/Element/when
tags:
  - Dokumentacje
  - Wszystkie_kategorie
  - XSLT
  - XSLT:Dokumentacje
translation_of: Web/XSLT/Element/when
original_slug: Web/XSLT/when
---
{{ XsltRef() }}

Element `<xsl:when>` zawsze pojawia się wewnątrz elementu `<xsl:choose>`, działając jak instrukcja wyboru.

### Składnia

    <xsl:when test=WYRAZENIE>
    	SZABLON
    </xsl:when>

### Wymagane atrybuty

- `test`
  - : Określa wyrażenie logiczne, które ma zostać ocenione. Jeśli jest prawdziwe, zawartość elementu jest przetwarzana; jeśli fałszywe, zawartość jest ignorowana.

### Opcjonalne atrybuty

Brak.

### Typ

Podinstrukcja, pojawia się zawsze wewnątrz elementu `<xsl:choose>`.

### Definicja

XSLT, sekcja 9.2.

### Gecko

Obsługuje.

{{ languages( { "en": "en/XSLT/when", "es": "es/XSLT/when", "fr": "fr/XSLT/when" } ) }}
