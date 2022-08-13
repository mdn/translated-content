---
title: attribute
slug: Web/XSLT/Element/attribute
tags:
  - Dokumentacje
  - Wszystkie_kategorie
  - XSLT
  - XSLT:Dokumentacje
translation_of: Web/XSLT/Element/attribute
original_slug: Web/XSLT/attribute
---
{{ XsltRef() }}

Element `<xsl:attribute>` tworzy w dokumencie wyjściowym atrybut używając dowolnej wartości dostępnej z arkusza. Element musi być pierwszą rzeczy zdefiniowaną w dokumencie wyjściowym, dla którego ustala on wartość atrybutu.

### Składnia

    <xsl:attribute name=NAZWA namespace=URI>
    	SZABLON
    </xsl:attribute>

### Wymagane atrybuty

- `name`
  - : Określa nazwę atrybutu, który ma zostać utworzony w dokumencie wyjściowym. Nazwa musi być poprawną wartością QName.

### Opcjonalne atrybuty

- `namespace`
  - : Określa dla atrybutu URI przestrzeni nazw w dokumencie wyjściowym. Nie można za pomocą tego elementu ustawić pokrewnego prefiksu przestrzeni nazw.

### Typ

Instrukcja, pojawia się wewnątrz szablonu lub elementu `<xsl:attribute-set>`.

### Definicja

XSLT, sekcja 7.1.3.

### Gecko

Obsługuje.

{{ languages( { "en": "en/XSLT/attribute", "es": "es/XSLT/attribute", "fr": "fr/XSLT/attribute" } ) }}
