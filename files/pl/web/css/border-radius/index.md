---
title: border-radius
slug: Web/CSS/border-radius
tags:
  - CSS
  - CSS:Dokumentacje
  - CSS:Rozszerzenia_Mozilli
  - Dokumentacje
  - Wszystkie_kategorie
translation_of: Web/CSS/border-radius
---
{{ CSSRef() }}

## Podsumowanie

W aplikacjach opartych `border-radius` może być używany do nadawania obramowaniom zaokrąglonych rogów.

- Wartość początkowa: 0
- Dotyczy: wszystkich elementów
- Dziedziczony: nie

`border-radius` nie stosuje się do elementów tabel, kiedy własność {{ Cssxref("border-collapse") }} ustawiona jest na `collapse`.

## Składnia

    -moz-border-radius: <border-radius>{1,4} | inherit

### Wartości

\<border-radius> reprezentuje jedną z wartości:

- \<length>
  - : szerokość
- \<percentage>
  - : procenty, względem długości boksu

Zatem są używane 4 wartości w porządku górny-lewy, górny-prawy, dolny-prawy i dolny-lewy. Jeśli podane są mniej niż 4 wartości, lista wartości jest powtarzana do wypełnienia pozostałych wartości.

## Powiązane własności

- [-moz-border-radius-bottomleft](/pl/CSS/-moz-border-radius-bottomleft "pl/CSS/-moz-border-radius-bottomleft") ustawia zaokrąglenie dla dolnego lewego rogu.
- [-moz-border-radius-bottomright](/pl/CSS/-moz-border-radius-bottomright "pl/CSS/-moz-border-radius-bottomright") ustawia zaokrąglenie dla dolnego prawego rogu.
- [-moz-border-radius-topleft](/pl/CSS/-moz-border-radius-topleft "pl/CSS/-moz-border-radius-topleft") ustawia zaokrąglenie dla górnego lewego rogu.
- [-moz-border-radius-topright](/pl/CSS/-moz-border-radius-topright "pl/CSS/-moz-border-radius-topright") ustawia zaokrąglenie dla górnego prawego rogu.

## Przykłady

    hbox.example {
      border: 10px solid #000000;
      width: 500px;
      height: 500px;
      /* obramowanie wygnie się w kształt 'D' */
      -moz-border-radius: 10px 200px 200px 10px;
    }

## Znane błędy

- Obrazek tła wysypuje się poza zaokrąglone obramowania. {{ Bug(24998) }}
- Zaokrąglone obramowania wspierają tylko wartość `solid` własności {{ Cssxref("border-style") }}. {{ Bug(13944) }}
