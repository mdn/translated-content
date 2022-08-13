---
title: for-each
slug: Web/XSLT/Element/for-each
tags:
  - Dokumentacje
  - Wszystkie_kategorie
  - XSLT
  - XSLT:Dokumentacje
translation_of: Web/XSLT/Element/for-each
original_slug: Web/XSLT/for-each
---
{{ XsltRef() }}

Element `<xsl:for-each>` zaznacza zbiór węzłów i przetwarza każdy z nich w ten sam sposób. Element ten jest często używany do iteracji zbioru węzłów lub zmiany aktualnego węzła. Jeśli jeden lub więcej elementów `<xsl:sort>` pojawią się jako dzieci tego elementu, przez przetworzeniem zostanie wywołane sortowanie. W przeciwnym wypadku węzły są przetwarzane w kolejności, w jakiej pojawiają się w dokumencie.

### Składnia

    <xsl:for-each select=WYRAZENIE>
    	<xsl:sort> [opcjonalnie]
    	SZABLON
    </xsl:for-each>

### Wymagane atrybuty

- `select`
  - : Używa wyrażenia XPath do zaznaczenia węzłów, które mają zostać przetworzone.

### Opcjonalne atrybuty

Brak.

### Typ

Instrukcja, pojawia się wewnątrz szablonu.

### Definicja

XSLT, sekcja 8.

### Gecko

Obsługuje.

{{ languages( { "en": "en/XSLT/for-each", "es": "es/XSLT/for-each", "fr": "fr/XSLT/for-each" } ) }}
