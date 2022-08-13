---
title: with-param
slug: Web/XSLT/Element/with-param
tags:
  - Dokumentacje
  - Wszystkie_kategorie
  - XSLT
  - XSLT:Dokumentacje
translation_of: Web/XSLT/Element/with-param
original_slug: Web/XSLT/with-param
---
{{ XsltRef() }}

Element `<xsl:with-param>` ustala wartość parametru, który ma zostać przekazany do szablonu.

### Składnia

    <xsl:with-param name=NAZWA select=WYRAZENIE>
    	SZABLON
    </xsl:with-param>

### Wymagane atrybuty

- `name`
  - : Nadaje nazwę parametrowi.

### Opcjonalne atrybuty

- `select`
  - : Definiuje wartość parametru poprzez wyrażenie XPath. Jeśli element zawiera szablon, atrybut jest ignorowany.

### Typ

Podinstrukcja, pojawia się zawsze wewnątrz elementu `<xsl:apply-templates>` lub `<xsl:call-template>`.

### Definicja

XSLT 11.6

### Gecko

Obsługuje.

{{ languages( { "en": "en/XSLT/with-param", "es": "es/XSLT/with-param", "fr": "fr/XSLT/with-param" } ) }}
