---
title: copy
slug: Web/XSLT/Element/copy
tags:
  - Dokumentacje
  - Wszystkie_kategorie
  - XSLT
  - XSLT:Dokumentacje
translation_of: Web/XSLT/Element/copy
original_slug: Web/XSLT/copy
---
{{ XsltRef() }}

Element `<xsl:copy>` przenosi kopię powierzchni (węzeł i powiązany węzeł przestrzeni nazw) obecnego węzła do dokumentu wyjściowego. Nie kopiuje potomków lub atrybutów obecnego węzła.

### Składnia

    <xsl:copy use-attribute-sets=LISTA-NAZW>
    	SZABLON
    </xsl:copy>

### Wymagane atrybuty

Brak.

### Opcjonalne atrybuty

- `use-attribute-sets`
  - : Lista zestawów atrybutu, które powinny być zastosowane do węzła wyjściowego, jeśli jest to element. Nazwy zestawów powinna być oddzielona za pomocą białych znaków.

### Typ

Instrukcja, pojawiająca się wewnątrz szablonu.

### Definicja

XSLT, sekcja 7.5.

### Gecko

Obsługuje.

{{ languages( { "en": "en/XSLT/copy", "es": "es/XSLT/copy", "fr": "fr/XSLT/copy" } ) }}
