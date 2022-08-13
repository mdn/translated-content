---
title: '-moz-box-align'
slug: Web/CSS/box-align
tags:
  - CSS
  - Non-standard
translation_of: Web/CSS/box-align
original_slug: Web/CSS/-moz-box-align
---
{{ CSSRef() }}

{{warning("This is a property of the original CSS Flexible Box Layout Module standard which is being replaced by a new standard.")}}

## Podsumowanie

W aplikacjach opartych na Mozilli `-moz-box-align` określa jak element XUL `box` (pudełko) wyrównuje swoją zawartość w poprzek (prostopadle) do kierunku swojego układu. Efekt tego jest widoczny tylko, jeśli w pudełku jest dodatkowa przestrzeń.

Kierunek układu zależy od orientacji elementu: poziomej lub pionowej.

- Wartość początkowa: stretch
- Dotyczy: elementy z własnością [display](pl/CSS/display) o wartości -moz-box lub -moz-inline-box
- Dziedziczony: nie
- Procenty: nie dotyczą
- Wartość wyliczona: jako określone

## Składnia

    -moz-box-align: start | center | end | baseline | stretch

### Wartości

- start
  - : Pudełko wyrównuje zawartość od początku, opuszczając dodatkową przestrzeń na końcu.
- center
  - : Pudełko wyrównuje zawartość do środka, dzieląc pustą przestrzeń odpowiednio między początek i koniec.
- end
  - : Pudełko wyrównuje zawartość do końca, opuszczając dodatkową przestrzeń na początku
- baseline
  - : Pudełko wyrównuje linie bazowe zawartości (ustawiając tekst w kolejności). Ma zastosowanie tylko, gdy orientacja pudełka jest pozioma.
- stretch
  - : Pudełko rozciąga zawartość, zatem w pudełku nie ma dodatkowej przestrzeni.

## Przykłady

    hbox.example {
    	-moz-box-align: end; /* przenosi zawartość do dołu */
    }

## Notatki

Krawędź pudełka określona jako*start* dla celu wyrównania zależy od orientacji pudełka

| **Pozioma** | górna |
| ----------- | ----- |
| **Pionowa** | lewa  |

Krawędź przeciwna do początkowej jest określana jako*end*

Jeśli wyrównanie jest ustawione przy użyciu atrybutu align elementu, wtedy styl jest ignorowany.

## Zobacz także

[CSS:-moz-box-orient](pl/CSS/-moz-box-orient), [CSS:-moz-box-pack](pl/CSS/-moz-box-pack)
