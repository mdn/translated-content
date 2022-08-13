---
title: '-moz-box-direction'
slug: Web/CSS/box-direction
tags:
  - CSS
  - CSS:Dokumentacje
  - CSS:Rozszerzenia_Mozilli
  - Dokumentacje
  - Wszystkie_kategorie
translation_of: Web/CSS/box-direction
---
{{ CSSRef() }}

## Podsumowanie

{{warning("This property reflects an old version of the specification. The <code>-moz-box-direction</code> will only be used for XUL while the standard <code>box-direction</code> has been replaced by <code>flex-direction</code> (which belongs to the CSS Flexible Box Layout Module currently under the Working Draft status).")}}

W aplikacjach opartych na Mozilli `-moz-box-direction` określa, czy pudełko rozkłada swoją zawartość normalnie (od górnej lub lewej krawędzi), czy w odwróceniu (od dolnej lub prawej krawędzi).

- Wartość początkowa: normal
- Dotyczy: elementy z własnością CSS [display](pl/CSS/display) o wartości -moz-box lub -moz-inline-box
- Dziedziczony: nie
- Procenty: nie dotyczą
- Wartość wyliczona: jako określone

## Składnia

    -moz-box-direction: normal | reverse

### Wartości

- normal
  - : Pudełko rozkłada swoją zawartość od początku (lewej lub górnej krawędzi).
- reverse
  - : Pudełko rozkłada swoją zawartość od końca (prawej lub dolnej krawędzi).

## Przykłady

    vbox.example {
    	-moz-box-direction: reverse; /* układ od dołu do góry */
    }

## Notatki

Krawędź pudełka określona jako*start* dla docelowego układu zależy od orientacji pudełka:

| **Pozioma** | lewa  |
| ----------- | ----- |
| **Pionowa** | górna |

Krawędź przeciwna do początkowej określana jest jako*end*.

Jeśli kierunek jest ustawiony przy użyciu atrybutu dir elementu, wtedy styl jest ignorowany.

## Zobacz także

[CSS:-moz-box-orient](pl/CSS/-moz-box-orient)
