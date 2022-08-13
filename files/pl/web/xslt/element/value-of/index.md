---
title: value-of
slug: Web/XSLT/Element/value-of
tags:
  - Dokumentacje
  - Wszystkie_kategorie
  - XSLT
  - XSLT:Dokumentacje
translation_of: Web/XSLT/Element/value-of
original_slug: Web/XSLT/value-of
---
{{ XsltRef() }}

Element `<xsl:value-of>` ocenia wyrażenie XPath, konwertuje je do ciągu znakowego, który następnie zapisuje do drzewa wynikowego.

### Składnia

    <xsl:value-of select=WYRAZENIE disable-output-escaping="yes" | "no"  />

### Wymagane atrybuty

- `select`
  - : Określa wyrażenie XPath, które ma być ocenione i zwrócone do drzewa wynikowego.

### Opcjonalne atrybuty

- `disable-output-escaping` (Netscape nie dzieli wyników przekształcenia - poniższego "wyjścia" - dlatego atrybut ten jest w zasadzie nieistotny w znaczeniu. Aby otrzymać na wyjściu encje html użyj wartości numerycznych, np. `&#160` dla `&nbsp`)
  - : Określa czy znaki specjalne są pomijane przy zapisywaniu do wyjścia. Dostępne wartości to "`yes`" lub "`no`". Przykładowo, jeżeli ustawiona jest wartość "`yes`", \<tt>>\</tt> jest wyświetlane jako `>`, a nie jako "`&gt`".

### Typ

Instrukcja, pojawia się wraz z szablonem.

### Definicja

XSLT, sekcja 7.6.1.

### Gecko

Obsługuje poza powyższymi przypadkami.

{{ languages( { "en": "en/XSLT/value-of", "fr": "fr/XSLT/value-of", "ja": "ja/XSLT/value-of" } ) }}
