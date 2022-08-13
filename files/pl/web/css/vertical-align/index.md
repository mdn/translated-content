---
title: vertical-align
slug: Web/CSS/vertical-align
tags:
  - CSS
  - CSS:Dokumentacje
  - Dokumentacje
  - Wszystkie_kategorie
translation_of: Web/CSS/vertical-align
---
{{ CSSRef() }}

### Podsumowanie

Własność `vertical-align` określa wyrównanie pionowe elementów _inline_ lub komórek tabeli.

- {{ Xref_cssinitial() }}: {{ Cssxref("baseline") }}
- Stosowana do: elementy _inline_ i komórki tabeli
- {{ Xref_cssinherited() }}: nie
- Media: {{ Xref_cssvisual() }}
- {{ Xref_csscomputed() }}:

### Składnia

`vertical-align:` `baseline` | `sub` | `super` | `text-top` | `text-bottom` | `middle` | `top` | `bottom` | \<percentage> | [\<length>](pl/CSS/length) | {{ Cssxref("inherit") }}

### Wartości (dla elementów inline)

Większość wartości wyrównuje element w pionie w stosunku do jego rodzica:

- baseline
  - : Wyrównuje linię bazową elementu z linią bazową jego rodzica.
- sub
  - : Wyrównuje linię bazową elementu z linią bazową indeksu dolnego jego rodzica.
- super
  - : Wyrównuje linię bazową elementu z linią bazową indeksu górnego jego rodzica.
- text-top
  - : Wyrównuje górę elementu z górą czcionki elementu rodzica.
- text-bottom
  - : Wyrównuje dół elementu z dołem czcionki elementu rodzica.
- middle
  - : Wyrównuje środek elementu ze środkiem małych liter rodzica.
- [\<length>](pl/CSS/length)
  - : Ustawia linię bazową elementu o daną wartość powyżej linii bazowej jego rodzica.
- \<percentage>
  - : podobnie jak wartość \<length> z procentami będącymi procentem własności {{ Cssxref("line-height") }}

Dla elementów, które nie mają linii bazowej, używana jest w zamian dolna krawędź marginesu.

Natomiast dwie wartości wyrównują element w pionie raczej względem całkowitej linii niż względem jego rodzica:

- top
  - : Wyrównuje górę elementu i jego potomków z górą całkowitej linii.
- bottom
  - : Wyrównuje dół elementu i jego potomków z dołem całkowitej linii.

Wartości ujemne są dozwolone.

### Wartości (dla komórek tabeli)

- baseline (oraz sub, super, text-top, text-bottom, \<length>, i \<percentage>)
  - : Wyrównuje linię bazową komórki z linią bazową wszystkich innych komórek w wierszu, które są wyrównane względem linii bazowej.
- top
  - : Wyrównuje górną krawędź dopełnienia komórki z górą wiersza.
- middle
  - : Centruje obszar dopełnienia komórki względem wiersza.
- bottom
  - : Wyrównuje dolną krawędź dopełnienia komórki z dołem wiersza.

Wartości ujemne są dozwolone.

### Przykłady

    img {
    	vertical-align: bottom;
    }

### Uwagi

### Specyfikacje

- [CSS 1](http://www.w3.org/TR/CSS1#vertical-align)
- [CSS 2.1](http://www.w3.org/TR/CSS21/visudet.html#propdef-vertical-align)

### Zgodność z przeglądarką

### Zobacz także

{{ Cssxref("line-height") }}, {{ Cssxref("text-align") }}, {{ Cssxref("margin") }} (`auto`)

{{ languages( { "en": "en/CSS/vertical-align", "fr": "fr/CSS/vertical-align" } ) }}
