---
title: namespace-alias
slug: Web/XSLT/Element/namespace-alias
tags:
  - Dokumentacje
  - Wszystkie_kategorie
  - XSLT
  - XSLT:Dokumentacje
translation_of: Web/XSLT/Element/namespace-alias
original_slug: Web/XSLT/namespace-alias
---
{{ XsltRef() }}

Element `<xsl:namespace-alias>` jest rzadko używanym narzędziem, które mapuje przestrzeń nazw w arkuszu stylów do innej przestrzeni nazw w drzewie wyjściowym. Najczęstszym zastosowaniem tego elementu jest generowanie arkusza stylów z innego arkusza. Aby zapobiec elementowi wyniku literałowego (LRE) z prefiksem `xsl:` przez byciem źle zrozumianym przez procesor (element ten powinien być po prostu skopiowany tak jak jest do drzewa wynikowego), jest on przypisywany do tymczasowej przestrzeni nazw, która jest odpowiednio przekonwertowana do przestrzeni nazw XSLT w drzewie wyjściowym.

### Składnia

    <xsl:namespace-alias stylesheet-prefix=NAZWA result-prefix=NAZWA />

### Wymagane atrybuty

- `stylesheet-prefix`
  - : Określa tymczasową przestrzeń nazw.
- `result-prefix`
  - : Określa pożądaną przestrzeń nazw dla drzewa wyjściowego.

### Opcjonalne atrybuty

Brak.

### Typ

Element najwyższego poziomu, musi być dzieckiem `<xsl:stylesheet>` lub `<xsl:transform>`.

### Definicja

XSLT, sekcja 7.1.1

### Gecko

W chwili obecnej nie obsługuje.

{{ languages( { "en": "en/XSLT/namespace-alias", "es": "es/XSLT/namespace-alias", "fr": "fr/XSLT/namespace-alias" } ) }}
