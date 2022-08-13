---
title: border-spacing
slug: Web/CSS/border-spacing
tags:
  - CSS
  - CSS:Dokumentacje
  - Dokumentacje
  - Wszystkie_kategorie
translation_of: Web/CSS/border-spacing
---
{{ CSSRef() }}

### Podsumowanie

Własność `border-spacing` określa odległość pomiędzy obramowaniami sąsiadujących komórek (tylko dla [`rozdzielnych obramowań`](pl/CSS/border-collapse)). Jest to odpowiednik atrybutu `cellspacing` w HTML-u.

- {{ Xref_cssinitial() }}: 0
- Dotyczy: tabel i tabel zagnieżdżonych
- {{ Xref_cssinherited() }}: Tak
- Media: {{ Xref_cssvisual() }}
- {{ Xref_csscomputed() }}: dwie całkowite odległości

### Składnia

border-spacing: \<length> | \<length> \<length> | inherit

### Wartości

- **\<length>** : Jednakowa odległość w pionie i poziomie.
- **\<length> \<length>** : Pierwsza wartość podaje poziomą odległość (przestrzeń pomiędzy komórką i sąsiednimi kolumnami), druga odległość pionową (pomiędzy komórką i sąsiadującymi z nią wierszami).

### Przykłady

[Zobacz przykład](/samples/cssref/border-spacing.html)

    table#space {
      border-collapse: separate;
      border-spacing: 10px 5px;
    }

### Notatki

Ta własność ma zastosowanie tylko, gdy {{ Cssxref("border-collapse") }} ma wartość "separate".

Własność `border-spacing` jest również używana przy zewnętrznej krawędzi tabeli, gdzie odległość pomiędzy obramowaniem tabeli a komórkami pierwszej/ostatniej kolumny lub wiersza jest sumą istotnej (poziomej lub pionowej) odległości od obramowania i istotnej (górnej, lewej, dolnej lub prawej) krawędzi tabeli.

### Specyfikacje

- [CSS 2.1](http://www.w3.org/TR/CSS21/tables.html#propdef-border-spacing)

### Zgodność z przeglądarką

| Przeglądarka      | Najniższa wersja |
| ----------------- | ---------------- |
| Netscape          | 6                |
| Internet Explorer | 7                |
| Firefox           | 1                |
| Mozilla           | 1                |
| Safari            | 1                |
| Opera             | 6                |



### Zobacz również

{{ Cssxref("border-collapse") }}



{{ languages( { "en": "en/CSS/border-spacing", "es": "es/CSS/border-spacing", "fr": "fr/CSS/border-spacing" } ) }}
