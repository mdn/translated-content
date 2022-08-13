---
title: direction
slug: Web/CSS/direction
tags:
  - CSS
  - CSS:Dokumentacje
  - Dokumentacje
  - Wszystkie_kategorie
translation_of: Web/CSS/direction
---
{{ CSSRef() }}

### Podsumowanie

Własność `direction` powinna być ustawiana w celu dobrania kierunku tekstu: `rtl` dla hebrajskiego lub arabskiego tekstu oraz `ltr` dla innych pism. Normalnie powinno być to robione raczej jako cześć dokumentu (np. poprzez użycie atrybutu `dir` w HTML) niż poprzez bezpośrednie użycie CSS.

Własność ustawia bazowy kierunek tekstu elementów blokowych oraz kierunek osadzonych utworzonych przez własność {{ Cssxref("unicode-bidi") }}. Ustawia również domyślne wyrównanie tekstu i elementów blokowych oraz kierunek, w jakim komórki następują w wierszu tabeli.

- {{ Xref_cssinitial() }}: {{ Cssxref("ltr") }}
- Stosowana do: wszystkich elementów
- {{ Xref_cssinherited() }}: tak
- Procenty: niedostępne
- Media: {{ Xref_cssvisual() }}
- {{ Xref_csscomputed() }}:

### Składnia

    direction: [ 'ltr' | 'rtl' | inherit ] ;

### Wartości

- ltr
  - : Domyślna wartość `direction`. Tekst i inne elementy idą od lewej do prawej,
- rtl
  - : Tekst i inne elementy idą od prawej do lewej.

Aby własność `direction` miała jakiś efekt w elementach inline, wartością własności {{ Cssxref("unicode-bidi") }} musi być 'embed' lub 'override'.

### Przykłady

    blockquote {
      direction : rtl ;
    }

### Notatki

W odróżnieniu od atrybutu `dir` w HTML, własność `direction` nie jest dziedziczona od kolumn tabeli do komórek tabeli, ponieważ dziedziczenie CSS spływa po drzewie dokumentu, a komórki tabeli są wewnątrz wierszy, ale nie wewnątrz kolumn.

### Specyfikacje

- [CSS 2.1](http://www.w3.org/TR/CSS21/visuren.html#direction)
- [CSS 3 Text Module](http://www.w3.org/TR/2003/CR-css3-text-20030514/#direction)

### Zobacz także

{{ Cssxref("unicode-bidi") }}

{{ languages( { "en": "en/CSS/direction", "es": "es/CSS/direction", "fr": "fr/CSS/direction" } ) }}
