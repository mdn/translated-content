---
title: message
slug: Web/XSLT/Element/message
tags:
  - Dokumentacje
  - Wszystkie_kategorie
  - XSLT
  - XSLT:Dokumentacje
translation_of: Web/XSLT/Element/message
original_slug: Web/XSLT/message
---
{{ XsltRef() }}

Element `<xsl:message>` zwraca komunikat (do konsoli JavaScript Console w NS) i opcjonalnie przerywa wykonywanie arkusza stylów. Może się okazać przydatny podczas debugowania.

### Składnia

    <xsl:message terminate="yes" | "no" >
    	SZABLON
    </xsl:message>

### Wymagane atrybuty

Brak.

### Opcjonalne atrybuty

- `terminate`
  - : Z wartością "`yes`" wskazuje, że wykonywanie powinno zostać przerwane. Domyślną wartością jest "`no`", w przypadku której zostaje zwrócony komunikat, a wykonywanie jest kontynuowane.

### Typ

Instrukcja, pojawia się wewnątrz szablonu.

### Definicja

XSLT, sekcja 13.

### Gecko

Obsługuje.

{{ languages( { "en": "en/XSLT/message", "es": "es/XSLT/message", "fr": "fr/XSLT/message" } ) }}
