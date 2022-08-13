---
title: attribute-set
slug: Web/XSLT/Element/attribute-set
tags:
  - Dokumentacje
  - Wszystkie_kategorie
  - XSLT
  - XSLT:Dokumentacje
translation_of: Web/XSLT/Element/attribute-set
original_slug: Web/XSLT/attribute-set
---
{{ XsltRef() }}

Element `<xsl:attribute-set>` tworzy nazwany zbiór atrybutów, który może być zastosowany jako całość do dokumentu wyjściowego w sposób podobny do stylów w CSS.

### Składnia

    <xsl:attribute-set name=NAZWA use-attribute-sets=LISTA-NAZW>
    	<xsl:attribute>
    </xsl:attribute-set>

### Wymagane atrybuty

- `name`
  - : Określa nazwę zbioru atrybutów. Musi być poprawną wartością QName.

### Opcjonalne atrybuty

- `use-attribute-sets`
  - : Buduje zbiór atrybutów z innego zbioru atrybutów. Nazwy tych zbiorów muszą być oddzielone za pomocą białych znaków (whitespace) i nie mogą bezpośrednio lub pośrednio osadzać się nawzajem.

### Typ

Element najwyższego poziomu, musi być dzieckiem `<xsl:stylesheet>` lub `<xsl:transform>`.

### Definicja

XSLT, sekcja 7.1.4.

### Gecko

Obsługuje.

{{ languages( { "en": "en/XSLT/attribute-set", "es": "es/XSLT/attribute-set", "fr": "fr/XSLT/attribute-set" } ) }}
