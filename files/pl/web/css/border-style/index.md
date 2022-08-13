---
title: border-style
slug: Web/CSS/border-style
tags:
  - CSS
  - CSS:Dokumentacje
  - Dokumentacje
  - Wszystkie_kategorie
translation_of: Web/CSS/border-style
---
{{ CSSRef() }}

### Podsumowanie

Własność `border-style` jest skróconą własnością dla ustawienia stylu linii dla wszystkich czterech stron obramowania elementów.

- {{ Xref_cssinitial() }}: {{ Cssxref("none") }} lub jak w indywidualnych własnościach
- Stosowana do: wszystkich elementów
- {{ Xref_cssinherited() }}: nie
- Procenty: niedostępne
- Media: {{ Xref_cssvisual() }}
- {{ Xref_csscomputed() }}: jak w indywidualnych własnościach

### Składnia

    border-style: [ <border-style> ]{1,4} | inherit

### Wartości

- \<border-style>
  - : Style linii mogą przyjąć którąś z podanych wartości.

<!---->

- **none** : Brak obramowania, ustawia szerokość na 0. Jest to domyślna wartość.
- **hidden** : Tak samo jako 'none', oprócz konfliktu rozdzielczości obramowania dla elementów tabeli.
- **dashed** : Serie kresek lub fragmentów linii.
- **dotted** : Serie kropek.
- **double** : Dwie proste linie, które dają w sumie liczbę pikseli zdefiniowaną jako `border-width`.
- **groove** : Efekt wyrzeźbienia.
- **inset** : Sprawia wrażenie, że blok jest zapadnięty.
- **outset** : Przeciwieństwo 'inset'. Sprawia, że blok wydaje się trójwymiarowy (wysunięty).
- **ridge** : Przeciwieństwo 'groove'. Obramowanie wydaje się trójwymiarowe (zapowiadane).
- **solid** : Pojedyncza, prosta, ciągła linia.

Można podać do czterech wartości.
Pierwsza wartość ustawia wszystkie cztery krawędzie.
Druga ustawia lewą i prawą.
Trzecia ustawia dolną.
Czwarta ustawia lewą

### Przykłady

[Zobacz przykład](/samples/cssref/border.html)

    element {
      border-width: 1px;
      border-style: solid;
      border-color: black;
    }

### Notatki

Domyślnie `border-style` jest ustawione na `none`. To oznacza, że, jeśli zmieniasz wartość {{ Cssxref("border-width") }} oraz {{ Cssxref("border-color") }}, nie zobaczysz obramowania, dopóki nie zmienisz tej wartości na inną niż `none` lub `hidden`

### Specyfikacje

- [CSS 1](http://www.w3.org/TR/CSS1#border-style)
- [CSS 2.1](http://www.w3.org/TR/CSS21/box.html#border-style-properties)
- [CSS 3](http://www.w3.org/TR/css3-background/#border-style)

### Zgodność z przeglądarką

| Przeglądarka      | Najniższa wersja |
| ----------------- | ---------------- |
| Internet Explorer | 4                |
| Firefox           | 1                |
| Netscape          | 4                |
| Opera             | 3.5              |

### Rozszerzenia Mozilli

Następujące rozszerzenia Mozilli ustawiają poszczególne strony obramowania na wielokrotny kolor dla przeglądarek opartych na silniku Gecko.

- {{ Cssxref("-moz-border-bottom-colors") }}
- {{ Cssxref("-moz-border-left-colors") }}
- {{ Cssxref("-moz-border-right-colors") }}
- {{ Cssxref("-moz-border-top-colors") }}

### Zobacz także

{{ Cssxref("border") }}, {{ Cssxref("border-width") }}, {{ Cssxref("border-color") }}, {{ Cssxref("-moz-border-radius") }}

{{ languages( { "de": "de/CSS/border-style", "en": "en/CSS/border-style", "es": "es/CSS/border-style", "fr": "fr/CSS/border-style", "ja": "ja/CSS/border-style" } ) }}
