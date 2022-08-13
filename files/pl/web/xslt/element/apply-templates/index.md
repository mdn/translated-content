---
title: apply-templates
slug: Web/XSLT/Element/apply-templates
tags:
  - Dokumentacje
  - Wszystkie_kategorie
  - XSLT
  - XSLT:Dokumentacje
translation_of: Web/XSLT/Element/apply-templates
original_slug: Web/XSLT/apply-templates
---
{{ XsltRef() }}

Element `<xsl:apply-templates>` zaznacza zbiór węzłów w drzewie wejściowym i informuje procesor, aby zastosował do nich odpowiedni szablon.

### Składnia

    <xsl:apply-templates select=WYRAZENIE mode=NAZWA>
    	<xsl:with-param> [opcjonalny]
    	<xsl:sort> [opcjonalny]
    </xsl:apply-templates>

### Wymagane atrybuty

Brak.

### Opcjonalne atrybuty

- `select`
  - : Używa wyrażenia XPath do określenia, które węzły mają zostać przetworzone. Gwiazdka (`*`) zaznacza cały zbiór węzłów. Jeśli ten atrybut nie jest ustawiony, zaznaczone są wszystkie węzły-dzieci obecnego węzła.
- `mode`
  - : Wprowadza rozróżnienie, jeśli istnieje wiele sposobów zdefiniowanego przetwarzania tego samego węzła.

### Typ

Instrukcja, pojawia się wewnątrz szablonu.

### Definicja

XSLT sekcja 5.4.

### Gecko

Obsługuje.

{{ languages( { "en": "en/XSLT/apply-templates", "es": "es/XSLT/apply-templates", "fr": "fr/XSLT/apply-templates" } ) }}
