---
title: <length>
slug: Web/CSS/length
tags:
  - CSS
  - CSS Datentyp
  - Layout
  - Länge
  - Referenz
  - Web
  - length
translation_of: Web/CSS/length
---
{{ CSSRef() }}

## Übersicht

Der Platzhalter `<length>` steht für eine Längenangabe. Diese besteht immer aus aus einer Zahl ({{cssxref("&lt;number&gt;")}}) und einer Maßeinheit (`px`, `em`, `pc`, `in`, `mm`, …); zwischen diesen Elementen darf sich kein Leerzeichen befinden.

Der Wertebereich ist abhängig von der jeweiligen CSS-Eigenschaft, teils sind nur positive Werte sinnvoll und zulässig.
Oftmals wird auch eine prozentuale Angabe ({{cssxref("&lt;percentage&gt;")}}) akzeptiert, diese gehört jedoch strenggenommen nicht zu den \<length>-Werten und wird deshalb an anderer Stelle besprochen.

`<length>` wird von vielen Eigenschaften benutzt, zum Beispiel {{ Cssxref("width") }}, {{ Cssxref("margin") }}, {{ Cssxref("padding") }}, {{ Cssxref("font-size") }}, {{ Cssxref("border-width") }} und {{ Cssxref("text-shadow") }}.

## Interpolation

`<length>`-Werte können für Animationen interpoliert werden. Für die Berechnung werden sie als reelle Fließkommazahlen behandelt, dabei wird immer der berechnete Wert interpoliert. Die Geschwindigkeit bzw. die Zwischenschritte hängen von der der Animation zugeordneten [Zeitfunktion](/en/CSS/timing-function "timing-function") ab.

## Einheiten

### Relative Längenmaße

#### Relativ zur Schriftgröße

Die nachfolgenden Einheiten beziehen sich immer auf eine Eigenschaft der Schriftart des Elements, für das sie genutzt werden (Ausnahme: `rem` und `rlh`, diese beziehen sich auf das Wurzelelement, meist das {{HTMLElement("html")}}-Element).

- `em`
  - : `1em` entspricht der aus {{Cssxref("font-size")}} berechneten Schriftgröße. Wird em zusammen mit {{Cssxref("font-size")}} selbst benutzt, entspricht `1em` der Schriftgröße des Elternelements.
    em ist, zusammen mit Prozentwerten, das gebräuchlichste Maß, um den Fluss der Seitenelemente unabhängig von der vom Benutzer gewählten Schriftgröße einheitlich zu gewährleisten.
- `rem`
  - : Wie `em`, bezieht sich jedoch immer auf die berechnete Schriftgröße des Wurzelelements. {{ gecko_minversion_inline("1.9.2") }}
- `ex`
  - : `1ex` enspricht üblicherweise der Höhe des kleinen x; oftmals ist 1ex ≈ 0,5em`.`
- `ch`
  - : `1ch` enspricht der Breite der Ziffer '0' (Null, Unicode U+0030) {{gecko_minversion_inline("1.9.1") }}
- `cap` {{experimental_inline}}
  - : Nominale Höhe der Großbuchstaben.
- `lh` {{experimental_inline}}
  - : Die aus {{Cssxref("line-height")}} berechnete Zeilenhöhe.
- `rlh` {{experimental_inline}}
  - : Wie lh, bezieht sich jedoch immer auf die berechnete Zeilenhöhe des Wurzelelements.
- ic {{experimental_inline}}
  - : Größe des "水"-Zeichens (CJK "Wasser"-Ideograph U+6C34) in der aktuellen Schriftart.

#### Relativ zum Viewport

Diese Werte werden vom sichtbaren Teil des Dokuments abgeleitet, dem Anzeigebereich (Englisch: Viewport). Sie sind also abhängig von der Fenster- bzw. Bildschirmgröße.

Innerhalb einer {{cssxref("@page")}}-Regel sind Viewport-Werte nicht zulässig.

- `vh`
  - : `1vh` entspricht 1% der Anzeigenhöhe (vh = viewport height).
- `vw`
  - : `1vw` entspricht 1% Anzeigenbreite (vh = viewport width).
- `vi` {{experimental_inline}}
  - : Entspricht 1% der Länge der [Inlineachse](/de/docs/Web/CSS/CSS_Logical_Properties) des umgebenden Blocks. Die Inlineachse ist die Richtung, in der Text geschrieben wird, also horizontal für deutschen Text.
- `vi` {{experimental_inline}}
  - : Entspricht 1% der Länge der [Blockachse](/de/docs/Web/CSS/CSS_Logical_Properties) des umgebenden Blocks. Die Blockachse verläuft im Winkel von 90° zur Inlineachse, also vertikal für deutschen Text.
- `vmin`
  - : Der kleinere der Werte `vh` und `vw`.
- `vmax`
  - : Der größere der Werte `vh` und `vw`.

### Absolute Längenmaße

Absolute Längenmaße stehen für ein physikalisches Maß, sofern die physischen Eigenheiten des Ausgabemediums bekannt sind. Eine der Einheiten wird als Referenz festgelegt, alle anderen werden relativ zu ihr definiert. Die Festlegung hängt vom Ausgabegerät ab, genauer: von dessen Auflösung.

Bei Geräten mit niedriger Auflösung (namentlich herkömmliche Flachbildschirme) ist die Bezugsgröße das sogenannte Referenzpixel. Die Größe des Referenzpixels ist definiert als die wahrgenommene Größe eines Pixels auf einem Bildschirm mit der Auflösung 96dpi in etwa einer Armlänge Abstand. In der Praxis wird jedoch meist das tatsächliche Bildschirmpixel des gerade angeschlossenen Bildschirms als Referenzpixel definiert.
Ein Referenzpixel entspricht `1px`, alle anderen Einheiten sind bei niedrig auflösenden Geräten von px abgeleitet. `1in` ist in Abhängigkeit von px als `96px` festgelegt, was wiederum `72pt` entspricht.

Aufgrund dieser eher ungenauen Definition können in `mm`, `cm` oder `in` gegebene Längen von jenen abweichen, die tatsächlich als solche gemessen werden würden – in anderen Worten: `1cm` auf dem Bildschirm ist üblicherweise nur ungefähr gleich einem Zentimeter auf dem Zollstock.

Bei Geräten mit hoher Auflösung hingegen entsprechen die Einheiten `mm`, `cm` und `in` ihren tatsächlichen Maßen, mithin den Einheiten Millimeter, Zentimeter und Zoll (Englisch: Inch). Von ihnen abhängig ist die Einheit `px`, sie ist definiert als 1/96 eines Zolls.

> **Hinweis:** Viele Benutzer erhöhen die Standardschriftgröße ihres Browsers zur besseren Lesbarkeit. Absolute Schriftgrößen können Probleme mit der Barrierefreiheit verursachen, weil sie nicht von den Benutzereinstellungen der Schriftgröße abhängen. Es wird deshalb empfohlen, relative Schriftgrößen wie `em` und `rem` zu benutzen, selbst für allgemeine Schriftgrößendefinitionen auf `p`- oder `body`-Ebene.

- `px`
  - : Pixel, abhängig vom Anzeigegerät. Auf herkömmlichen Bildschirmen entspricht `1px` in der Regel einem physischen Pixel des Bildschirms.
    Bei hochauflösenden Geräten wird die Anzahl physischer Pixel so bemessen, dass 1 Zoll ungefähr 96px entspricht, also für `px` eine theoretische Auflösung von 96dpi beibehalten wird.
- `cm`
  - : Zentimeter
- `mm`
  - : Millimeter
- `in`
  - : Zoll (Englisch: Inch). 1 Zoll = 2,54cm
- `pc`
  - : Picas. 1pc = 12pt = 1/6in
- `pt`
  - : Punkt, ein Wert aus dem Druckgewerbe. 1pt = 1/72in. pt wird häufig für Schriftgrößen auch in anderen Anwendungen verwendet.
- `mozmm` {{ non-standard_inline() }}
  - : Experimentelle Maßeinheit, die unter Berücksichtigung der Auflösung des Anzeigegeräts _immer_ exakten Millimetern entspricht.

## Beispiel

### HTML

```html
<div style="width: 10em;">10em</div>
<div style="width: 10ex;">10ex</div>
<div style="width: 10ch;">10ch</div>
<div style="width: 10vh;">10vh</div>
<div style="width: 10vw;">10vw</div>
<div style="width: 10vmin;">10vmin</div>
<div style="width: 10vmax;">10vmax</div>
<div style="width: 100px;">100px</div>
<div style="width: 10cm;">10cm</div>
<div style="width: 10mm;">10mm</div>
<div style="width: 10in;">10in</div>
<div style="width: 10pc;">10pc</div>
<div style="width: 50pt;">50pt</div>
```

### CSS

```css
div {
    background-color: green;
    margin: 6px;
}
```

### Ergebnis

{{ EmbedLiveSample('Beispiel', '', '', '', 'Web/CSS/length') }}

## Spezifikationen

| Spezifikation                                                                                    | Status                               | Anmerkung                                           |
| ------------------------------------------------------------------------------------------------ | ------------------------------------ | --------------------------------------------------- |
| {{SpecName('CSS4 Values', '#lengths', '')}}                                         | {{Spec2('CSS4 Values')}}     | `vi`, `vb`, `ic`, `lh`, und `rlh` hinzugefügt.      |
| {{ SpecName('CSS3 Values', '#lengths', '&lt;length&gt;') }}                 | {{ Spec2('CSS3 Values') }} | `ch`, `rem`, `vw`, `vh`, `vmin`, `vmax` hinzugefügt |
| {{ SpecName('CSS2.1', 'syndata.html#length-units', '&lt;length&gt;') }} | {{ Spec2('CSS2.1') }}         | `pt`, `pc`, `px` definiert                          |
| {{ SpecName('CSS1', '#length-units', '&lt;length&gt;') }}                     | {{ Spec2('CSS1') }}             |                                                     |

## Browserkompatibilität

{{Compat("css.types.length")}}
