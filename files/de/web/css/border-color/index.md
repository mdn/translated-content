---
title: border-color
slug: Web/CSS/border-color
tags:
  - CSS
  - CSS Referenz
translation_of: Web/CSS/border-color
---
{{CSSRef}}

## Übersicht

Die `border-color` Eigenschaft legt die Farbe des oberen, rechten, unteren und linken Rahmens fest.

{{cssinfo}}

## Syntax

    border-color:  {{csssyntax("border-color")}}

### Werte

- \<Farbe>
  - : [Farbangabe](/de/CSS/Farben) \[ Hexadezimalwert, Farbname, Systemfarbe, rgb(), rgba(), hsl() oder hlsa() ]
- transparent
  - : Der Rahmen hat keine Farbe. Es wird die Farbe des dahinter liegenden Elementes angezeigt.
- inherit
  - : Der Wert des Elternelements wird geerbt.
- Ein Wert
  - : Gilt für alle vier Seiten: [border-top-color](/de/CSS/border-top-color), [border-right-color](/de/CSS/border-right-color), [border-bottom-color](/de/CSS/border-bottom-color) und [border-left-color](/de/CSS/border-left-color).
- Zwei Werte
  - : Der erste Wert gilt für [border-top-color](/de/CSS/border-top-color) und [border-bottom-color](/de/CSS/border-bottom-color), der zweite Wert für [border-right-color](/de/CSS/border-right-color) und [border-left-color](/de/CSS/border-left-color).
- Drei Werte
  - : Der erste Wert gilt für [border-top-color](/de/CSS/border-top-color), der zweite Wert für [border-right-color](/de/CSS/border-right-color) und [border-left-color](/de/CSS/border-left-color) und der dritte Wert für [border-bottom-color](/de/CSS/border-bottom-color).
- Vier Werte
  - : Der erste Wert gilt für [border-top-color](/de/CSS/border-top-color), der zweite Wert für [border-right-color](/de/CSS/border-right-color), der dritte Wert für [border-bottom-color](/de/CSS/border-bottom-color) und der vierte Wert für [border-left-color](/de/CSS/border-left-color).

## Beispiele

```css
.beispielEins {
  border: solid;
  border-color: blue;
}
```

```css
.beispielZwei {
  border: solid;
  border-color: blue #f00;
}
```

```css
.beispielDrei {
  border: solid;
  border-color: blue #f00 rgb(0,150,0);
}
```

```css
.beispielVier {
  border: solid;
  border-color: blue #f00 rgb(0,150,0) transparent;
}
```

## Spezifikation

| Spezifikation                                                                                        | Status                                   | Anmerkung                                                                                                             |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| {{ SpecName('CSS3 Backgrounds', '#border-color', 'border-color') }}             | {{ Spec2('CSS3 Backgrounds') }} | The `transparent` keyword has been removed as it is now a part of the {{cssxref("&lt;color&gt;")}} data type. |
| {{ SpecName('CSS2.1', 'box.html#border-color-properties', 'border-color') }} | {{ Spec2('CSS2.1') }}             | The property is now a shorthand property                                                                              |
| {{ SpecName('CSS1', '#border-color', 'border-color') }}                             | {{ Spec2('CSS1') }}                 |                                                                                                                       |

## Browser Kompatibilität

{{Compat("css.properties.border-color")}}

## Siehe auch

- {{CSSxRef("border")}}
- {{CSSxRef("border-top-color")}}, {{CSSxRef("border-right-color")}}, {{CSSxRef("border-bottom-color")}}, {{CSSxRef("border-left-color")}}
- {{CSSxRef("&lt;color&gt;")}}\</color>
- {{CSSxRef("color")}}, {{CSSxRef("background-color")}}, {{CSSxRef("outline-color")}}, {{CSSxRef("text-decoration-color")}}, {{CSSxRef("text-emphasis-color")}}, {{CSSxRef("text-shadow")}}, {{CSSxRef("caret-color")}}, and {{CSSxRef("column-rule-color")}}
