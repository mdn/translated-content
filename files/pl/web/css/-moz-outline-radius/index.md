---
title: '-moz-outline-radius'
slug: Web/CSS/-moz-outline-radius
tags:
  - CSS
  - Non-standard
translation_of: Web/CSS/-moz-outline-radius
---
{{Non-standard_header}}{{ CSSRef() }}

## Podsumowanie

W aplikacjach Mozilli `-moz-outline-radius` może być używane do nadania konturowi zaokrąglonych rogów. Kontur jest linią rysowaną wokół elementu, na zewnątrz krawędzi obramowania w celu wyróżnienia elementu.

- Wartość początkowa: 0
- Dotyczy: wszystkie elementy
- Dziedziczony: nie

## Składnia

    -moz-outline-radius:<outline-radius>{1,4} | inherit ;

### Wartości

`<outline-radius>` reprezentuje jedną w wartości:

- \<length>
  - : długość
- \<percentage>
  - : procenty, względem szerokości pudełka

Zatem używane są 4 wartości w porządku górny lewy, górny prawy, dolny prawy i dolny lewy. Jeśli podane są mniej niż 4 wartości, lista wartości jest powtarzana do uzupełnienia pozostałych wartości.

## Powiązane własności

- [outline](pl/CSS/-moz-outline) ustawia kolor, styl i szerokość konturu.
- [outline-color](pl/CSS/-moz-outline-color) ustawi kolor konturu.
- [outline-offset](pl/CSS/-moz-outline-offset) odsuwa kontur od elementu.
- [-moz-outline-radius-bottomleft](pl/CSS/-moz-outline-radius-bottomleft) ustawia zaokrąglenie dolnego lewego rogu.
- [-moz-outline-radius-bottomright](pl/CSS/-moz-outline-radius-bottomright) ustawia zaokrąglenie dolnego prawego rogu.
- [-moz-outline-radius-topleft](pl/CSS/-moz-outline-radius-topleft) ustawia zaokrąglenie górnego lewego rogu.
- [-moz-outline-radius-topright](pl/CSS/-moz-outline-radius-topright) ustawia zaokrąglenie górnego prawego rogu.
- [outline-style](pl/CSS/-moz-outline-style) ustawia styl konturu.
- [outline-width](pl/CSS/-moz-outline-width) ustawia szerokość konturu.

## Przykłady

    hbox.example {
      -moz-outline: #000000 solid 10px;
      width: 500px;
      height: 500px;
      /* kontur wygnie się w kształt litery 'D' */
      -moz-outline-radius: 10px 200px 200px 10px;
    }

## Znane błędy

Te błędy są takie same jak w [border-radius](pl/CSS/-moz-border-radius).

- Obrazki tła wychodzą poza zaokrąglone obramowania {{ Bug(24998) }}
- Zaokrąglone obramowania wspierają jedynie wartość `solid` dla [border-style](pl/CSS/border-style). {{ Bug(24998) }}
