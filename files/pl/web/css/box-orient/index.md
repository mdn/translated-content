---
title: '-moz-box-orient'
slug: Web/CSS/box-orient
tags:
  - CSS
  - Non-standard
translation_of: Web/CSS/box-orient
original_slug: Web/CSS/-moz-box-orient
---
{{ CSSRef() }}

{{ warning("This is a property of the original CSS Flexible Box Layout Module draft, and has been replaced in newer drafts.") }}

## Podsumowanie

W aplikacjach opartych na Mozilli `-moz-box-orient` określa, czy pudełko rozkłada swoją zawartość poziomo czy pionowo.

Np. elementy XUL box i hbox domyślnie rozkładają swoją zawartość poziomo, zaś elementy XUL vbox domyślnie rozkładają swoją zawartość pionowo.

- Wartość początkowa: horizontal
- Dotyczy: elementy z własnością CSS [display](pl/CSS/display) o wartości -moz-box lub-moz-inline-box
- Dziedziczony: nie
- Procenty: nie dotyczą
- Wartość wyliczona: jako określone

## Składnia

    -moz-box-orient: horizontal | vertical

### Wartości

- horizontal
  - : Pudełko układa swoją zawartość w poziomie.
- vertical
  - : Pudełko układa swoją zawartość w pionie.

## Przykłady

    hbox.example {
    	-moz-box-orient: vertical; /* zmiana orientacji */
    }

## Notatki

Jeśli orientacja jest ustawiona w elemencie przy użyciu atrybutu orient, wtedy styl jest ignorowany.

## Zobacz także

[CSS:direction](pl/CSS/direction), [CSS:-moz-box-direction](pl/CSS/-moz-box-direction)
