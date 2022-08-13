---
title: if
slug: Web/XSLT/Element/if
tags:
  - Dokumentacje
  - Wszystkie_kategorie
  - XSLT
  - XSLT:Dokumentacje
translation_of: Web/XSLT/Element/if
original_slug: Web/XSLT/if
---
{{ XsltRef() }}

Element `<xsl:if>` zawiera atrybut testowy i szablon. Jeżeli wyrażenie testowe zostanie ocenione jako prawdziwe, szablon jest przetwarzany. Element ten jest podobny do instrukcji if w innych językach, jednak aby uzyskać funkcjonalność instrukcji \<tt>if-then-else\</tt>, użyj elementu `<xsl:choose>` wraz z jego dziećmi: `<xsl:when>` i `<xsl:otherwise>`.

### Składnia

    <xsl:if test=WYRAZENIE>
    	SZABLON
    </xsl:if>

### Wymagane atrybuty

- `test`
  - : Zawiera wyrażenie XPath, które może być ocenione (poprzez zasady zdefiniowane poprzez `boolean( )` jeśli konieczne) jako wartość logiczna Boolean. Jeśli wyrażenie jest prawdziwe, szablon jest przetwarzany; jeśli nie, nie jest podejmowana żadna czynność.

### Opcjonalne atrybuty

Brak.

### Typ

Instrukcja, pojawia się wewnątrz szablonu.

### Definicja

XSL sekcja 9.1.

### Gecko

Obsługuje.

{{ languages( { "en": "en/XSLT/if", "es": "es/XSLT/if", "fr": "fr/XSLT/if" } ) }}
