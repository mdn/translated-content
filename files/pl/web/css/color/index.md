---
title: color
slug: Web/CSS/color
tags:
  - CSS
  - CSS:Dokumentacje
  - Dokumentacje
  - Wszystkie_kategorie
translation_of: Web/CSS/color
---
{{ CSSRef() }}

### Podsumowanie

`color` ustawia pierwszoplanowy kolor dla zawartości tekstowej elementu.

- {{ Xref_cssinitial() }}: zależy od programu użytkownika
- Stosowana do: wszystkich elementów
- {{ Xref_cssinherited() }}: tak
- Procenty: niedostępne
- Media: {{ Xref_cssvisual() }}
- {{ Xref_csscomputed() }}: jako określone

### Składnia

    color: color | inherit

### Wartości

- color
  - : Kolor może być określony zgodnie z poniższymi zasadami:

- jako heksadecymalna (szesnastkowa) wartość RGB
- jako regularna wartość RGB lub RGBA
- jako regularna wartość HSL lub HSLA
- jako jedna z predefiniowanych nazw kolorów

### Przykłady

Poniżej są wszystkie sposoby na zrobienie czerwonego tekstu w elemencie:

    element { color: red }
    element { color: #f00 }
    element { color: #ff0000 }
    element { color: rgb(255,0,0) }
    element { color: rgb(100%, 0%, 0%) }
    element { color: hsl(0, 100%, 50%) }

Jeśli chcesz uwzględnić wartość kanału alfa by uwzględnić przezroczystość, możesz użyć kolorów w formacie RGBA lub HSLA:

    element { color: rgba(255, 0, 0, 0.5) }
    element { color: hsla(0, 100%, 50%, 0.5) }

Oba powyższe przykłady definiują kolor z przezroczystością ustawioną na 0.5 lub 50%.

### Notatki

- [Color Chart by VisiBone](http://html-color-codes.com/)

### Specyfikacje

- [CSS 1](http://www.w3.org/TR/CSS1#color)
- [CSS 2.1](http://www.w3.org/TR/CSS21/colors.html)
- [CSS 3](http://www.w3.org/TR/2003/CR-css3-color-20030514/#color)

### Zgodność z przeglądarką

{{ languages( { "en": "en/CSS/color", "es": "es/CSS/color", "fr": "fr/CSS/color", "ja": "ja/CSS/color" } ) }}
