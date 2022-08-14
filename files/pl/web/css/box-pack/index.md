---
title: '-moz-box-pack'
slug: Web/CSS/box-pack
tags:
  - CSS
  - Non-standard
translation_of: Web/CSS/box-pack
original_slug: Web/CSS/-moz-box-pack
---
{{ CSSRef() }}

{{warning("This is a property of the original CSS Flexible Box Layout Module standard which is being replaced by a new standard.")}}

## Podsumowanie

W aplikacjach opartych na Mozilli `-moz-box-pack` określa jak pudełko wpakowuje swoją zawartość w kierunku swojego układu. Efekt tego jest widoczny tylko wtedy, gdy w pudełku jest dodatkowa wolna przestrzeń.

Kierunek układu zależy od orientacji elementu: poziomej lub pionowej.

- Wartość początkowa: start
- Dotyczy: elementy z własnością CSS [display](pl/CSS/display) o wartości -moz-box lub -moz-inline-box
- Dziedziczony: nie
- Procenty: nie dotyczą
- Wartość wyliczona: jako określone

## Składnia

    -moz-box-pack: start | center | end | justify

### Wartości

- start
  - : Pudełko wpakowuje zawartość od początku, zostawiając dodatkową wolną przestrzeń na końcu.
- center
  - : Pudełko wpakowuje zawartość w środku, dzieląc dodatkową wolną przestrzeń pomiędzy początek i koniec.
- end
  - : Pudełko wpakowuje zawartość na końcu, zostawiając dodatkową wolną przestrzeń na początku.
- justify
  - :  ?

## Przykłady

    hbox.example {
    	-moz-box-pack: end; /* przesuwa zawartość na prawo */
    }

## Notatki

Krawędź pudełka, określona jako*start* dla celów wpakowywania, zależy od orientacji i kierunku pudełka.

|             | **Normalna** | **Odwrócona** |
| ----------- | ------------ | ------------- |
| **Poziomo** | lewa         | prawa         |
| **Pionowo** | góra         | dół           |

Krawędź przeciwna do początkowej jest określana jako*end*.

Jeśli wpakowywanie jest ustawione w atrybucie pack elementu, wtedy styl jest ignorowany.

## Zobacz także

`CSS:-moz-box-orient, CSS:-moz-box-direction, CSS:-moz-box-align`
