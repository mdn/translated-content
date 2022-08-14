---
title: border-style
slug: Web/CSS/border-style
tags:
  - CSS
  - CSS Referenz
translation_of: Web/CSS/border-style
---
{{CSSRef}}

## Übersicht

Die **`border-style`** [CSS](/de/docs/Web/CSS) Eigenschaft ist eine Kurzschreibweise zum Setzen des Linienstils für alle vier Seiten des Elementrands.

> **Note:** **Hinweis:** Der Standardwert von `border-style` ist `none`. Das bedeutet, falls die {{cssxref("border-width")}} und die {{cssxref("border-color")}} geändert werden, wird der Rand nicht angezeigt, solange diese Eigenschaft nicht auf etwas anderes als `none` oder `hidden` gesetzt wird.

{{cssinfo}}

## Syntax

```css
/* Auf alle vier Seiten anwenden */
border-style: dashed;

/* horizontal | vertikal */
border-style: dotted solid;

/* open | horizontal | vertikal */
border-style: hidden double dashed;

/* open | rechts | unten | links */
border-style: none solid dotted dashed;

/* Global values */
border-style: inherit;
border-style: initial;
border-style: unset;
```

### Werte

- `<br-style>`
  - | : Ist ein Schlüsselwort, das den Stil des unteren Rahmens beschreibt. Es kann die folgenden Werte annehmen: | `none` |                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Wie beim `hidden` Schlüsselwort wird kein Rahmen angezeigt. In diesem Fall sind die berechneten Werte von {{cssxref("border-width")}} `0`, außer ein Hintergrundbild ist gesetzt, auch wenn die Eigenschaft anders gesetzt wurde. Im Fall von Zusammenfallen von Tabellenzellen und Rahmen hat der `none` Wert die niedrigste Priorität: Das bedeutet, dass falls irgendein anderer, gegensätzlicher Rahmen gesetzt ist, wird er angezeigt. |
    | ----------------------------------------------------------------------------------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `hidden`                                                                                                    |        | Wie beim `none` Schlüsselwort wird kein Rahmen angezeigt. In diesem Fall sind die berechneten Werte von {{cssxref("border-width")}} `0`, außer ein Hintergrundbild ist gesetzt, auch wenn die Eigenschaft anders gesetzt wurde. Im Fall von Zusammenfallen von Tabellenzellen und Rahmen hat der `hidden` Wert die höchste Priorität: Das bedeutet, dass falls irgendein anderer, gegensätzlicher Rahmen gesetzt ist, wird er nicht angezeigt. |
    | `dotted`                                                                                                    |        | Zeigt eine Reihe von runden Punkten an. Die Abstände der Punkte werden nicht durch die Spezifikation bestimmt und sind implementationsspezifisch. Der Radius der Punkte ist die halbe {{cssxref("border-width")}}.                                                                                                                                                                                                                             |
    | `dashed`                                                                                                    |        | Zeigt eine Reihe von kurzen Strichen mit quadratischen Enden oder Liniensegmenten an. Die exakte Größe und Länger der Segmente werden nicht durch die Spezifikation bestimmt und sind implementationsspezifisch.                                                                                                                                                                                                                                        |
    | `solid`                                                                                                     |        | Zeigt eine einfache, gerade, ausgefüllte Linie an.                                                                                                                                                                                                                                                                                                                                                                                                      |
    | `double`                                                                                                    |        | Zeigt zwei gerade Linien an, die zum Pixelwert hinzugefügt werden, der durch {{cssxref("border-width")}} definiert wird.                                                                                                                                                                                                                                                                                                                       |
    | `groove`                                                                                                    |        | Zeigt einen Rahmen an, der zu einem eingeritzten Effekt führt. Er ist das Gegenteil von `ridge`.                                                                                                                                                                                                                                                                                                                                                        |
    | `ridge`                                                                                                     |        | Zeigt einen Rahmen mit einem 3D-Effekt an, so als ob es aus der Seite herauskommt. Er ist das Gegenteil von `groove`.                                                                                                                                                                                                                                                                                                                                   |
    | `inset`                                                                                                     |        | Zeigt einen Rahmen an, der die Box so darstellt, als wäre sie eingelassen. Es ist das Gegenteil von `outset`. Auf eine Tabellenzelle mit {{cssxref("border-collapse")}} auf collapsed gesetzt angewendet, verhält sich dieser Wert wie groove.                                                                                                                                                                                                |
    | `outset`                                                                                                    |        | Zeigt einen Rahmen an, der die Box in 3D wie geprägt darstellt. Es ist das Gegenteil von `inset`. Auf eine Tabellenzelle mit {{cssxref("border-collapse")}} auf `collapsed` gesetzt angewendet, verhält sich dieser Wert wie `ridge`.                                                                                                                                                                                                         |

### Formale Syntax

{{csssyntax}}

## Beispiele

### Tabelle mit allen Eigenschaftswerten

Hier ist ein Beispiel aller Eigenschaftswerte.

#### HTML Inhalt

```html
<table>
  <tr>
    <td class="b1">none</td>
    <td class="b2">hidden</td>
    <td class="b3">dotted</td>
    <td class="b4">dashed</td>
  </tr>
  <tr>
    <td class="b5">solid</td>
    <td class="b6">double</td>
    <td class="b7">groove</td>
    <td class="b8">ridge</td>
  </tr>
  <tr>
    <td class="b9">inset</td>
    <td class="b10">outset</td>
  </tr>
</table>
```

#### CSS Inhalt

```css
/* Definiert das Aussehen der Tabelle */
table {
  border-width: 3px;
  background-color: #52E396;
}

tr, td {
  padding: 2px;
}

/* border-style Beispielklassen */
.b1 { border-style: none; }
.b2 { border-style: hidden; }
.b3 { border-style: dotted; }
.b4 { border-style: dashed; }
.b5 { border-style: solid; }
.b6 { border-style: double; }
.b7 { border-style: groove; }
.b8 { border-style: ridge; }
.b9 { border-style: inset; }
.b10  { border-style: outset; }
```

#### Ausgabe

{{EmbedLiveSample('Tabelle_mit_allen_Eigenschaftswerten', 300, 200)}}

## Spezifikationen

| Spezifikation                                                                                    | Status                                   | Kommentar                              |
| ------------------------------------------------------------------------------------------------ | ---------------------------------------- | -------------------------------------- |
| {{SpecName('CSS3 Backgrounds', '#border-style', 'border-style')}}         | {{Spec2('CSS3 Backgrounds')}} | Keine Änderung                         |
| {{SpecName('CSS2.1', 'box.html#propdef-border-style', 'border-style')}} | {{Spec2('CSS2.1')}}                 | 2-, 3- und 4-Wert-Syntaxen hinzugefügt |
| {{SpecName('CSS1', '#border-style', 'border-style')}}                         | {{Spec2('CSS1')}}                 | Ursprüngliche Definition               |

## Browser Kompatibilität

{{Compat("css.properties.border-style")}}

## Siehe auch

- Die Rahmen-bezogenen Kurzschreibweise CSS Eigenschaften: {{cssxref("border")}}, {{cssxref("border-width")}}, {{cssxref("border-color")}}, {{cssxref("border-radius")}}
