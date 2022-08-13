---
title: font-size-adjust
slug: Web/CSS/font-size-adjust
tags:
  - CSS
  - CSS:Dokumentacje
  - Dokumentacje
  - Wszystkie_kategorie
translation_of: Web/CSS/font-size-adjust
---
{{ CSSRef() }}

## Podsumowanie

Własność {{ Cssxref("font-size-adjust") }} określa, że rozmiar czcionki powinien być wybrany raczej na podstawie wysokości małych liter niż wysokości dużych liter.

Jest to użyteczne, ponieważ czytelność czcionek, zwłaszcza o małych rozmiarach, jest zdeterminowana bardziej przez rozmiar małych liter niż dużych liter. Może to powodować problemy, kiedy pierwsza czcionka zdefiniowana w {{ Cssxref("font-family") }} jest niedostępna, zaś czcionka ją zamieniająca ma znacząco odmienny stosunek proporcji (proporcję rozmiaru małych liter do rozmiaru czcionki).

Zrobienie tego w sposób, który jest zgodny z przeglądarkami niewspierającymi {{ Cssxref("font-size-adjust") }}, polega na określeniu liczby, która zwielokrotnia własność {{ Cssxref("font-size") }}. Oznacza to, że wartość określona dla tej własności powinna być zasadniczo stosunkiem proporcji pierwszej deklarowanej czcionki. Na przykład, arkusz stylu, który definiuje `font-size: 16px; font-size-adjust: 0.5`, w praktyce określa, że rozmiar małych liter czcionki powinien wynosić `8px` wysokości (16px razy 0.5).

{{cssinfo}}

## Składnia

`font-size-adjust:` \<liczba> | `none` | {{ Cssxref("inherit") }}

### Wartości

- `none`
  - : Wybiera rozmiar czcionki opierając się jedynie na własności {{ Cssxref("font-size") }}.
- \<liczba>
  - : Wybiera rozmiar czcionki w ten sposób, że jej małe litery (jako wyznaczone przez wartość x-height czcionki) są określane liczbą zwielokrotniająca {{ Cssxref("font-size") }}.Zdefiniowana liczba powinna być zasadniczo stosunkiem proporcji (proporcja wartości x-height do rozmiaru czcionki) czcionki wybieranej w pierwszej kolejności w {{ Cssxref("font-family") }}. Będzie to oznaczało, że czcionka wybrana w pierwszej kolejności, kiedy jest dostępna, wyświetli się w tym samym rozmiarze w przeglądarkach, niezależnie, czy wspierają własność {{ Cssxref("font-size-adjust") }}.

## Przykłady

[Zobacz przykład](/samples/cssref/font-size-adjust.html)

    p{
      font: 12px Verdana, sans-serif;
      font-size-adjust: 0.58;
    }

## Specyfikacje

- [CSS 2](http://www.w3.org/TR/1998/REC-CSS2-19980512/fonts.html#propdef-font-size-adjust)
- [css3-fonts](http://www.w3.org/TR/css3-fonts/#font-size-adjust)

## Zgodność z przeglądarką

Wspierana na wszystkich platformach począwszy od Gecko 1.9 / Firefox 3, zaś w Windows wpierana wcześniej.
