---
title: element
slug: Web/XSLT/Element/element
tags:
  - Dokumentacje
  - Wszystkie_kategorie
  - XSLT
  - XSLT:Dokumentacje
translation_of: Web/XSLT/Element/element
---
{{ XsltRef() }}

Element `<xsl:element>` tworzy element w dokumencie wyjściowym.

### Składnia

    <xsl:element name=NAZWA namespace=URI use-attribute-sets=LISTA-NAZW >
    	SZABLON
    </xsl:element>

### Wymagane atrybuty

- `name`
  - : Określa żądaną nazwę elementu wyjściowego. Nazwa musi być zgodna z QName.

### Opcjonalne atrybuty

- `namespace`
  - : Określa przestrzeń nazw elementu wyjściowego.
- `use-attribute-sets`
  - : Lista nazwanych zestawów atrybutów, które mają być użyte w elemencie wyjściowym. Nazwa zestawów powinna być oddzielona za pomocą białych znaków.

### Typ

Instrukcja, pojawia się wewnątrz szablonu.

### Definicja

XSLT, sekcja 7.1.2.

### Gecko

Obsługuje.

{{ languages( { "en": "en/XSLT/element", "es": "es/XSLT/element", "fr": "fr/XSLT/element" } ) }}
