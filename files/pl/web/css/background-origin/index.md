---
title: background-origin
slug: Web/CSS/background-origin
tags:
  - CSS
  - CSS Background
  - CSS Property
translation_of: Web/CSS/background-origin
---
{{ CSSRef() }}

## Podsumowanie

w aplikacjach opartych na Mozilli `-moz-background-origin` decyduje, który boks wyznacza układ współrzędnych używanych przez wartości własności {{ Cssxref("background-position") }}.

`background-origin` nie stosuje się, gdy własność {{ Cssxref("background-attachment") }} ma wartość `fixed`.

- Wartość początkowa: padding-box
- Dotyczy: wszystkich elementów
- Dziedziczony: nie



## Składnia

    background-origin: border-box | padding-box | content-box

### Wartości

- border-box
  - : Pozycja tła jest relatywna względem obramowania, zatem obrazek może znaleźć się pod obramowaniem.
- padding-box
  - : Pozycja tła jest relatywna względem wypełnienia.
- content-box
  - : Pozycja tła jest relatywna względem zawartości.

### Przykłady

    hbox.example {
      border: 10px double #000000;
      padding: 10px;
      background: url('image.jpg');
      background-position: center left;
      /* tło będzie wewnątrz padding */
      background-origin: content-box;
    }
