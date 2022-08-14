---
title: '-moz-box-flex'
slug: Web/CSS/box-flex
tags:
  - CSS
  - Non-standard
translation_of: Web/CSS/box-flex
original_slug: Web/CSS/-moz-box-flex
---
{{ CSSRef() }}

{{ warning("This is a property for controlling parts of the XUL box model.  It does not match either the old CSS Flexible Box Layout Module drafts for '<code>box-flex</code>' (which were based on this property) or the behavior of '<code>-webkit-box-flex</code>' (which is based on those drafts).") }}

## Podsumowanie

W aplikacjach opartych na Mozilli `-moz-box-flex` określa jak pudełko powiększa się, by wypełnić pudełko, które je zawiera, w kierunku układu zawierającego pudełka.

- Wartość początkowa: 0
- Dotyczy: elementy, które są bezpośrednim dzieckiem elementu z własnością CSS [display](pl/CSS/display) o wartości -moz-box lub -moz-inline-box.
- Dziedziczony: nie
- Procenty: nie dotyczą
- Wartość wyliczona: jako określone

## Składnia

    -moz-box-flex:liczba

### Wartości

- 0
  - : Pudełko nie powiększa się.
- \> 0
  - : Pudełko rozszerza się, by wypełnić proporcjonalną część dostępnej przestrzeni.

## Przykłady

    hbox.example {
    	-moz-box-flex: 1; /* take up some more space */
    }

## Uwagi

Zawierające pudełko przydziela dodatkową dostępną przestrzeń proporcjonalnie do wartości rozciągania każdego elementu zawartości.

Elementy zawartości, które mają rozciąganie ustawione na zero, nie powiększają się.

Jeśli tylko jeden element zawartości ma niezerowe rozciąganie, wtedy powiększa się on do wypełnienia dostępnej wolnej przestrzeni.

Elementy zawartości, które mają takie samo rozciąganie, powiększają się o tą samą bezwzględną liczbę.

Jeśli wartość rozciąganie jest ustawiona przy użyciu atrybutu flex w elemencie, wtedy styl jest ignorowany.

Aby zrobić element XUL w zawierającym pudełku takich samych rozmiarów, ustaw atrybut equalsize zawierającego pudełka na wartość always. Ten atrybut nie ma odpowiadającej własności CSS.

## Zobacz także

[CSS:-moz-box-orient](pl/CSS/-moz-box-orient), [CSS:-moz-box-pack](pl/CSS/-moz-box-pack)
