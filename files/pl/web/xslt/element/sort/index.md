---
title: sort
slug: Web/XSLT/Element/sort
tags:
  - Dokumentacje
  - Wszystkie_kategorie
  - XSLT
  - XSLT:Dokumentacje
translation_of: Web/XSLT/Element/sort
original_slug: Web/XSLT/sort
---
{{ XsltRef() }}

Element `<xsl:sort>` definiuje klucz sortowania dla węzłów wybranych przez `<xsl:apply-templates>` lub `<xsl:for-each>` i określa kolejność, w jakiej mają być one przetwarzane.

### Składnia

    <xsl:sort
    	select=WYRAZENIE
    	order="ascending" | "descending"
    	case-order="upper-first"| "lower-first"
    	lang=XML:KOD-JEZYKA
    	data-type="text" | "number" />

### Wymagane atrybuty

Brak.

### Opcjonalne atrybuty

- `select`
  - : Używa wyrażenia XPath do określenia węzłów, które mają zostać posortowane.

- `order`
  - : Określa czy węzły mają być przetwarzane w kolejności "`ascending`" (rosnącej) lub "`descending`" (malejącej). Wartością domyślną jest "`ascending`".

- `case-order`
  - : Wskazuje, które z liter (małe czy duże) mają być uporządkowane jako pierwsze. Dostępnymi wartościami są "`upper-first`" (najpierw duże) i "`lower-first`" (najpierw małe).

- `lang`
  - : Określa, który język ma zostać użyty przez sortowanie.

- `data-type`
  - : Definiuje czy pozycje mają być uporządkowane alfabetycznie czy numerycznie. Dostępnymi wartościami są "`text`" (alfabetycznie) i "`number`" (numerycznie) z "`text`" jako wartością domyślną.

### Typ

Podinstrukcja, zawsze pojawia się jako dziecko \<xsl:for-each> (gdzie musi się pojawić przed szablonem) lub \<xsl:apply-templates>.

### Definicja

XSLT, sekcja 10.

### Gecko

Obsługuje.

{{ languages( { "en": "en/XSLT/sort", "fr": "fr/XSLT/sort" } ) }}
