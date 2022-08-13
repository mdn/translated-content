---
title: param
slug: Web/XSLT/Element/param
tags:
  - Dokumentacje
  - Wszystkie_kategorie
  - XSLT
  - XSLT:Dokumentacje
translation_of: Web/XSLT/Element/param
original_slug: Web/XSLT/param
---
{{ XsltRef() }}

Element `<xsl:param>` ustala parametr przez nazwę i (opcjonalnie) przez domyślną wartość dla tego parametru. Jeśli użyty jako element najwyższego poziomu, parametr jest globalny. Jeśli użyty wewnątrz elementu `<xsl:template>`, parametr jest lokalny dla tego szablonu. W takim przypadku musi być on pierwszym elementem-dzieckiem szablonu.

### Składnia

    <xsl:param name=NAZWA select=WYRAZENIE
    	SZABLON
    </xsl:param>

### Wymagane atrybuty

- `name`
  - : Nazywa parametr. Musi być poprawną wartością QName.

### Opcjonalne atrybuty

- `select`
  - : Używa wyrażenia XPath, aby dostarczyć domyślną wartość, gdy żadna nie została określona.

### Typ

Instrukcja, może pojawić się jako element najwyższego poziomu lub wewnątrz szablonu.

### Definicja

XSLT, sekcja 11.

### Gecko

Obsługuje.

{{ languages( { "en": "en/XSLT/param", "fr": "fr/XSLT/param" } ) }}
