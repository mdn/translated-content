---
title: top
slug: Web/CSS/Top
tags:
  - CSS
  - CSS Eigenschaft
  - CSS Positionierung
  - CSS Referenz
translation_of: Web/CSS/top
---
{{CSSRef}}

## Übersicht

Die `top` Eigenschaft macht eine Angabe zur Position von Elementen und wird daher zusammen mit der [`position`](/de/CSS/position "de/CSS/position") Eigenschaft notiert, wenn für die Positionsart der Wert `absolute`, `fixed` oder `relative` definiert wurde.

Bei absolut positionierten Elementen (`position: absolute` oder `position: fixed`) wird der Abstand zwischen der oberen, äußeren Kante (_margin edge_) des Elements und der oberen Kante des umschließenden Blocks definiert.

Bei relativ positionierten Elementen (`position: relative`) wird das Element aus seiner normalen Position im Elementfluss verschoben. Dabei gilt: Wenn die `top` Eigenschaft definiert wurde, überschreibt diese den Wert der [`bottom`](/De/CSS/Bottom "De/CSS/Bottom") Eigenschaft. Wenn `top` den Wert `auto` besitzt, ist der berechnete Wert für [`bottom`](/De/CSS/Bottom "De/CSS/Bottom") gleich dem Wert der `top` Eigenschaft mit umgedrehtem Vorzeichen.
Wenn beide Eigenschaften nicht den Wert `auto` besitzen, wird [`bottom`](/De/CSS/Bottom "De/CSS/Bottom") ignoriert und auf `auto` gesetzt.

{{cssinfo}}

## Syntax

### Werte

- \<Länge>
  - : Eine [Längenangabe](/de/CSS/Einheiten#L.c3.a4ngen), die positive und negative Werte sowie Null erlaubt.
- \<Prozentzahl>
  - : Eine [prozentuale Angabe](/de/CSS/Einheiten#Prozent), die sich auf den umschließenden Block bezieht. Die Prozentangabe kann nur berücksichtigt werden, wenn die Höhe des umschließenden Blocks festgelegt wurde, andernfalls wird die definierte Prozentzahl wie `auto` behandelt.
- auto
  - : Standardwert. Die vertikale Position des Elementes wird nicht weiter beeinflusst, es sei denn durch [`bottom`](/De/CSS/Bottom "De/CSS/Bottom"), [`margin`](/de/CSS/margin "de/CSS/margin"), [`padding`](/de/CSS/padding "de/CSS/padding") oder durch die [Höhe](/de/CSS/height "de/CSS/height").
- inherit
  - : Der Wert des Elternelements wird geerbt.

### Formale Syntax

{{csssyntax}}

## Beispiel

    element {
      position: absolute;
    }

## Spezifikation

| Spezifikation                                                                | Status                                   | Anmerkung                      |
| ---------------------------------------------------------------------------- | ---------------------------------------- | ------------------------------ |
| {{SpecName('CSS3 Transitions', '#animatable-css', 'top')}} | {{Spec2('CSS3 Transitions')}} | Definiert `top` als animierbar |
| {{SpecName('CSS2.1', 'visuren.html#propdef-top', 'top')}} | {{Spec2('CSS2.1')}}                 | Ursprüngliche Definition       |

## Browser Kompatibilität

{{Compat("css.properties.top")}}

## Siehe auch

- [`position`](/de/CSS/position "de/CSS/position")
- [`bottom`](/De/CSS/Bottom "De/CSS/Bottom"), [`left`](/De/CSS/Left "De/CSS/Left"), [`right`](/De/CSS/Right "De/CSS/Right")
