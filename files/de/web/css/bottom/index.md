---
title: bottom
slug: Web/CSS/Bottom
tags:
  - CSS
  - CSS Referenz
translation_of: Web/CSS/bottom
---
{{ CSSRef() }}

## Übersicht

Die `bottom` Eigenschaft macht eine Angabe zur Position von Elementen und wird daher zusammen mit der [`position`](/de/CSS/position "de/CSS/position") Eigenschaft notiert, wenn für die Positionsart der Wert `absolute`, `fixed` oder `relative` definiert wurde.

Bei absolut positionierten Elementen (`position: absolute` oder `position: fixed`) wird der Abstand zwischen der unteren, äußeren Kante (_margin edge_) des Elements und der unteren Kante des umschließenden Blocks definiert.

Bei relativ positionierten Elementen (`position: relative`) wird das Element aus seiner normalen Position im Elementfluss verschoben. Dabei gilt: Wenn die [`top`](/De/CSS/Top "De/CSS/Top") Eigenschaft definiert wurde, überschreibt diese den Wert der `bottom` Eigenschaft. Wenn [`top`](/De/CSS/Top "De/CSS/Top") den Wert `auto` besitzt, ist der berechnete Wert für `bottom` gleich dem Wert der [`top`](/De/CSS/Top "De/CSS/Top") Eigenschaft mit umgedrehtem Vorzeichen.
Wenn beide Eigenschaften nicht den Wert `auto` besitzen, wird `bottom` ignoriert und auf `auto` gesetzt.

- Standardwert: `auto`
- Anwendbar auf: [positionierte Elemente](/de/CSS/position "de/CSS/position")
- Vererbbar: Nein
- Prozentwerte: Beziehen sich auf die Höhe des umschließenden Blocks
- Medium: visuell
- berechneter Wert: absolute Länge, Prozentwert oder `auto`

## Syntax

    bottom: <Länge> | <Prozentzahl> | auto | inherit

## Werte

- \<Länge>
  - : Eine [Längenangabe](/de/CSS/Einheiten#L.c3.a4ngen), die positive und negative Werte sowie Null erlaubt.
- \<Prozentzahl>
  - : Eine [prozentuale Angabe](/de/CSS/Einheiten#Prozent), die sich auf den umschließenden Block bezieht. Die Prozentangabe kann nur berücksichtigt werden, wenn die Höhe des umschließenden Blocks festgelegt wurde, andernfalls wird die definierte Prozentzahl wie `auto` behandelt.
- auto
  - : Standardwert. Die vertikale Position des Elementes wird nicht weiter beeinflusst, es sei denn durch [`top`](/De/CSS/Top "De/CSS/Top"), [`margin`](/de/CSS/margin "de/CSS/margin"), [`padding`](/de/CSS/padding "de/CSS/padding") oder durch die [Höhe](/de/CSS/height "de/CSS/height").
- inherit
  - : Der Wert des Elternelements wird geerbt.

## Beispiele

    element {
        position: absolute;
        bottom: 20px;
        height: 200px;
        border: 1px solid #000;
    }

## Browser Kompatibilität

{{Compat("css.properties.bottom")}}

## Spezifikation

- [CSS 2.1 Visual formatting model #bottom](http://www.w3.org/TR/CSS21/visuren.html#propdef-bottom)

## Siehe auch

- [`position`](/de/CSS/position "de/CSS/position")
- [`top`](/De/CSS/Top "De/CSS/Top"), [`left`](/De/CSS/Left "De/CSS/Left"), [`right`](/De/CSS/Right "De/CSS/Right")

{{ languages( { "en": "en/CSS/bottom", "fr": "fr/CSS/bottom", "pl": "pl/CSS/bottom", "es": "es/CSS/bottom" } ) }}
