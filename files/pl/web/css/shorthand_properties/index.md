---
title: Skrócone deklaracje CSS
slug: Web/CSS/Shorthand_properties
tags:
  - CSS
  - Wszystkie_kategorie
translation_of: Web/CSS/Shorthand_properties
original_slug: Web/CSS/Skrócone_deklaracje_CSS
---
## Dlaczego skracamy deklaracje CSS?

Wielu programistów CSS stosuje skrócone wersje często stosowanych własności w celu zaoszczędzenia czasu i energii. Chociaż skracanie deklaracji może wydawać się nie intuicyjnie i prawdopodobnie będzie wymagało trochę zapamiętywania, to z całą pewnością zaoszczędzi nam pisania na klawiaturze, podczas tworzenia dużych lub kompleksowych arkuszy stylów.

## Własności tła

Tło określone za pomocą następujących własności:

    background-color: #000;
    background-image: url(images/bg.gif);
    background-repeat: no-repeat;
    background-position: top right;

Można zapisać w jednej deklaracji jako:

    background: #000 url(images/bg.gif) no-repeat top right;

(Forma skrócona jest ściśle mówiąc odpowiednikiem wypisanych powyżej własności plus `background-attachment: scroll` oraz kilku dodatkowych własności w CSS3)

## Własności czcionki

Następujące deklaracje:

    font-style: italic;
    font-weight: bold;
    font-size: .8em;
    line-height: 1.2;
    font-family: Arial, sans-serif;

Mogą zostać skrócone do następującej deklaracji:

    font: italic bold .8em/1.2 Arial, sans-serif;

(Forma skrócona jest ściśle mówiąc odpowiednikiem wypisanych powyżej własności plus `font-variant: normal` i `font-size-adjust: none` (CSS2.0 / css3), `font-stretch: normal` (css3).)

## Własności obramowania

Obramowanie, szerokość, kolor i styl możemy uprościć do jednej deklaracji. Na przykład:

    border-width: 1px;
    border-style: solid;
    border-color: #000;

Możemy zapisać jako:

    border: 1px solid #000;

## Własności margin/padding

Skrócona wersja wartości margin i padding działa w ten sam sposób. Następujące deklaracje CSS:

    margin-top: 10px;
    margin-right: 5px;
    margin-bottom: 10px;
    margin-left: 5px;

Są tym samym, co poniższa deklaracja (ważne jest, aby wartości były rozmieszczone zgodnie z kierunkiem ruchu wskazówek zegara, zaczynając od wartości top: top, right, bottom i left (TRBL, spółgłoski w słowie "trouble"))

    margin: 10px 5px 10px 5px;

{{ languages( { "en": "en/Guide_to_Shorthand_CSS" } ) }}
