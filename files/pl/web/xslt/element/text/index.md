---
title: text
slug: Web/XSLT/Element/text
tags:
  - Dokumentacje
  - Wszystkie_kategorie
  - XSLT
  - XSLT:Dokumentacje
translation_of: Web/XSLT/Element/text
original_slug: Web/XSLT/text
---
{{ XsltRef() }}

Element `<xsl:text>` zapisuje tekst literałowy do drzewa wyjściowego. Może on zawierać elementy `#PCDATA`, tekst literałowy i referencje encji.

### Składnia

    <xsl:text disable-output-escaping="yes" | "no">
    	TEKST
    </xsl:text>

### Wymagane atrybuty

Brak.

### Opcjonalne atrybuty

- `disable-output-escaping` (Netscape nie dzieli wyników przekształcenia - poniższego "wyjścia" - dlatego atrybut ten jest w zasadzie nieistotny w znaczeniu. Aby otrzymać na wyjściu encje html użyj wartości numerycznych, np. `&#160` dla `&nbsp`)
  - : Określa czy znaki specjalne są pomijane przy zapisywaniu do wyjścia. Dostępne wartości to "`yes`" lub "`no`". Przykładowo, jeżeli ustawiona jest wartość "`yes`", \<tt>>\</tt> jest wyświetlane jako `>`, a nie jako "`&gt`".

### Typ

Instrukcja, pojawia się wewnątrz szablonu.

### Definicja

XSLT, sekcja 7.2

### Gecko

Obsługuje jak wspomniano wyżej.

{{ languages( { "en": "en/XSLT/text", "fr": "fr/XSLT/text" } ) }}
