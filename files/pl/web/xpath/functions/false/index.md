---
title: 'false'
slug: Web/XPath/Functions/false
tags:
  - Dokumentacje
  - Wszystkie_kategorie
  - XSLT
  - XSLT:Dokumentacje
translation_of: Web/XPath/Functions/false
original_slug: Web/XPath/Funkcje/false
---
{{ XsltRef() }}

Funkcja `false` zwraca wartość logiczną _fałsz_.

### Składnia

    false()

### Zwraca

Wartość logiczną `false`.

### Uwagi

Ta funkcja jest użyteczna jako część porównania:

    <xsl:if test="boolean((1 &gt; 2) = false())">
     Wyrażenie jest ocenione jako true
    </xsl:if>

### Definicja

[XPath 1.0 4.3](http://www.w3.org/TR/xpath#function-false)

### Gecko

Obsługuje.

{{ languages( { "en": "en/XPath/Functions/false", "fr": "fr/XPath/Fonctions/false", "ja": "ja/XPath/Functions/false" } ) }}
