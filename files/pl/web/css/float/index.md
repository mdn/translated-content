---
title: float
slug: Web/CSS/float
tags:
  - CSS
  - CSS:Dokumentacje
  - Dokumentacje
  - Wszystkie_kategorie
translation_of: Web/CSS/float
---
{{ CSSRef() }}

### Podsumowanie

Własność **float** określa, że element powinien być wyjęty z normalnego przepływu i umieszczony przy lewej lub prawej stronie zawierającego go kontenera, zaś tekst i elementy liniowe będą zawijały się wokół niego.

- {{ Xref_cssinitial() }}: {{ Cssxref("none") }}
- Stosowana do: wszystkich elementów
- {{ Xref_cssinherited() }}: no
- Procenty:
- Media: {{ Xref_cssvisual() }}
- {{ Xref_csscomputed() }}: jako określone

**Element pływający** jest jedynym, gdzie [wartość wyliczona](pl/CSS/warto%c5%9b%c4%87_wyliczona) `float` **nie** jest równa `none`.

Zauważ, że, jeśli odwołujesz się do tej wartości z JavaScript jako elementu obiektu [element.style](pl/DOM/element.style), musisz oznaczyć to **cssFloat** (zobacz listę na [DOM:CSS](pl/DOM/CSS)). Zwróć też uwagę, że IE nazywa to **styleFloat**.

### Składnia

float: left | right | none | [inherit](pl/CSS/inherit)

### Wartości

- **left** : Element pływa po lewej stronie zawierającego go bloku.
- **right** : Element pływa po prawej stronie zawierającego go bloku.
- **none** : Element nie pływa.

### Przykłady

[Zobacz przykład](/samples/cssref/float.html)

    <html>
     <head>
      <style type="text/css">
       b
       {
         font-size: 25px;
         float:right;
       }
      </style>
     </head>
     <body>

      <p>
        <b>HELLO!</b>
        To jest jakiś tekst. To jest jakiś tekst. To jest jakiś tekst.
        To jest jakiś tekst. To jest jakiś tekst. To jest jakiś tekst.
        To jest jakiś tekst. To jest jakiś tekst. To jest jakiś tekst.
        To jest jakiś tekst. To jest jakiś tekst. To jest jakiś tekst.
        To jest jakiś tekst. To jest jakiś tekst. To jest jakiś tekst.
        To jest jakiś tekst. To jest jakiś tekst. To jest jakiś tekst.
        To jest jakiś tekst. To jest jakiś tekst. To jest jakiś tekst.
        To jest jakiś tekst. To jest jakiś tekst. To jest jakiś tekst.
        To jest jakiś tekst. To jest jakiś tekst. To jest jakiś tekst.
        To jest jakiś tekst. To jest jakiś tekst. To jest jakiś tekst.
      </p>

    </body>
    </html>

### Notatki

TODO: Notatka powinna wyjaśniać, jak elementy pływające są pozycjonowane. Wzmianka o [block formatting context](pl/CSS/block_formatting_context).

### Specyfikacje

- [CSS 1](http://www.w3.org/TR/CSS1#float)
- [CSS 2.1](http://www.w3.org/TR/CSS21/visuren.html#propdef-float)

### Zgodność z przeglądarką

| Przeglądarka      | Najniższa wersja |
| ----------------- | ---------------- |
| Internet Explorer | 4                |
| Netscape          | 4                |
| Opera             | 3.5              |

### Zobacz także

{{ Cssxref("clear") }}, {{ Cssxref("display") }}, {{ Cssxref("position") }}



{{ languages( { "en": "en/CSS/float", "es": "es/CSS/float", "fr": "fr/CSS/float" } ) }}
