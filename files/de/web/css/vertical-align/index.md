---
title: vertical-align
slug: Web/CSS/vertical-align
tags:
  - CSS
  - CSS Eigenschaft
  - Referenz
  - recipe:css-property
translation_of: Web/CSS/vertical-align
---
{{CSSRef}}

Die [CSS](/de/docs/Web/CSS) Eigenschaft **`vertical-align`** bestimmt die vertikale Ausrichtung in inline Elementen oder in Tabellenzellen.

{{EmbedInteractiveExample("pages/css/vertical-align.html")}}

Die vertical-align Eigenschaft kann in zwei Anwendungsfällen genutzt werden:

- Um die Box eines inline-Elements vertikal in der beinhaltenden Box auszurichten. Beispielsweise kann sie eingesetzt werden um die ein {{HTMLElement("img")}} in einer Textzeile vertikal auszurichten:

```html hidden
<p>
top:<img style="vertical-align:top" src="https://mdn.mozillademos.org/files/15189/star.png"/>
middle:<img style="vertical-align:middle" src="https://mdn.mozillademos.org/files/15189/star.png"/>
bottom:<img style="vertical-align:bottom" src="https://mdn.mozillademos.org/files/15189/star.png"/>
super:<img style="vertical-align:super" src="https://mdn.mozillademos.org/files/15189/star.png"/>
sub:<img style="vertical-align:sub" src="https://mdn.mozillademos.org/files/15189/star.png"/>
</p>
<p>
text-top:<img style="vertical-align:text-top" src="https://mdn.mozillademos.org/files/15189/star.png"/>
text-bottom:<img  style="vertical-align:text-bottom" src="https://mdn.mozillademos.org/files/15189/star.png"/>
0.2em:<img style="vertical-align:0.2em" src="https://mdn.mozillademos.org/files/15189/star.png"/>
-1em:<img  style="vertical-align:-1em" src="https://mdn.mozillademos.org/files/15189/star.png"/>
20%:<img style="vertical-align:20%" src="https://mdn.mozillademos.org/files/15189/star.png"/>
-100%:<img  style="vertical-align:-100%" src="https://mdn.mozillademos.org/files/15189/star.png"/>
</p>
```

```css hidden
#* {
  box-sizing: border-box;
}

img {
  margin-right: 0.5em;
}

p {
  height: 3em;
  padding: 0 .5em;
  font-family: monospace;
  text-decoration: underline overline;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
}
```

{{EmbedLiveSample("vertical-align-inline", 1200, 160)}}

- Um den Inhalt einer Zelle vertikal in einer Tabelle auszurichten:

```html hidden
<table>
  <tr>
    <td style="vertical-align: baseline">baseline</td>
    <td style="vertical-align: top">top</td>
    <td style="vertical-align: middle">middle</td>
    <td style="vertical-align: bottom">bottom</td>
    <td>
      <p>There is a theory which states that if ever anyone discovers exactly what the Universe is for and why it is here, it will instantly disappear and be replaced by something even more bizarre and inexplicable.</p>
<p>There is another theory which states that this has already happened.</p>
    </td>
  </tr>
</table>
```

```css hidden
table {
  margin-left: auto;
  margin-right: auto;
  width: 80%;
}

table, th, td {
  border: 1px solid black;
}

td {
  padding: 0.5em;
  font-family: monospace;
}
```

{{EmbedLiveSample("vertical-align-table", 1200, 230)}}

Beachte, dass sich `vertical-align` nur auf inline- und Tabellenzellenelemente bezieht: es kann nicht eingesetzt werden um [Block-level Elemente](/de/docs/Web/HTML/Block-level_elemente) auszurichten.

## Syntax

```css
/* Schlüsselwörter */
vertical-align: baseline;
vertical-align: sub;
vertical-align: super;
vertical-align: text-top;
vertical-align: text-bottom;
vertical-align: middle;
vertical-align: top;
vertical-align: bottom;

/* <length> Werte */
vertical-align: 10em;
vertical-align: 4px;

/* <percentage> Werte */
vertical-align: 20%;

/* Globale Werte */
vertical-align: inherit;
vertical-align: initial;
vertical-align: unset;
```

Bei Elementen, die keine Grundlinie besitzen, beziehen sich die Angaben auf die untere äußere Kante (_bottom margin edge_).

### Werte für inline-Elemente

#### Eltern-Elemente

Diese Werte richten das Element vertikal relativ zu seinem übergeordneten Element aus:

- `baseline`
  - : Die Grundlinie des Elements liegt auf der Grundlinie des Elternelements.
- `sub`
  - : Das Element ist tiefgestellt.
- `super`
  - : Das Element ist hochgestellt.
- `text-top`
  - : Die Oberkante des Elements liegt auf der Oberkante der Schrift des Elternelements.
- `text-bottom`
  - : Die Unterkante des Elements liegt auf der Unterkante der Schrift des Elternelements.
- `middle`
  - : Die Mitte des Elements liegt auf der Mitte der Kleinbuchstaben des Elternelements.
- `top`
  - : Die Oberkante des Elements liegt auf der Oberkante des Elternelements.
- `bottom`
  - : Die Unterkante des Elements liegt auf der Unterkante des Elternelements.
- {{cssxref("&lt;percentage&gt;")}}
  - : Die Unterkante des Elements liegt um einen [prozentualen Wert](/de/CSS/Einheiten#Prozent) höher als die Unterkante des Elternelements. Die Anteile beziehen sich auf den Wert der [`line-height`](/de/CSS/line-height "de/CSS/line-height") Eigenschaft.
- {{cssxref("&lt;length&gt;")}}
  - : Die Unterkante des Elements liegt um einen [bestimmten Wert](/de/CSS/Einheiten#L.c3.a4ngen) höher als die Unterkante des Elternelements. Negative Werte sind erlaubt.
- `inherit`
  - : Der Wert des Elternelements wird geerbt.

### Werte für Tabellenzellen

- baseline, sub, super, text-top, text-bottom, \<Prozentzahl> und \<Länge>
  - : Die Grundlinie des Elements liegt auf der Grundlinie des Elternelements
- top
  - : Die Oberkante der Textzeile liegt auf der Oberkante der Tabellenzelle.
- middle
  - : Die vertikale Mitte der Textzeile liegt auf der Mitte der Tabellenzelle.
- bottom
  - : Die Unterkante der Textzeile liegt auf der Unterkante der Tabellenzelle.
- inherit
  - : Der Wert des Elternelements wird geerbt.

### Formale Syntax

{{csssyntax}}

## Beispiel

### HTML

```html
<div>Ein <img src="https://mdn.mozillademos.org/files/12245/frame_image.svg" alt="link" width="32" height="32" /> Bild mit default Ausrichtung.</div>
<div>Ein <img class="top" src="https://mdn.mozillademos.org/files/12245/frame_image.svg" alt="link" width="32" height="32" /> Bild mit text-top Ausrichtung.</div>
<div>Ein <img class="bottom" src="https://mdn.mozillademos.org/files/12245/frame_image.svg" alt="link" width="32" height="32" /> Bild mit text-bottom Ausrichtung.</div>
<div>Ein <img class="middle" src="https://mdn.mozillademos.org/files/12245/frame_image.svg" alt="link" width="32" height="32" /> Bild mit middle Ausrichtung.</div>
```

### CSS

```css
img.top { vertical-align: text-top; }
img.bottom { vertical-align: text-bottom; }
img.middle { vertical-align: middle; }
```

### Ergebnis

{{EmbedLiveSample("Beispiel")}}

## Spezifikation

| Spezifikation                                                                                            | Status                                   | Kommentar                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------- | ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| {{SpecName('CSS3 Transitions', '#animatable-css', 'vertical-align')}}             | {{Spec2('CSS3 Transitions')}} | Definiert`vertical-align` als animierbar.                                                                                                              |
| {{SpecName('CSS2.1', 'visudet.html#propdef-vertical-align', 'vertical-align')}} | {{Spec2('CSS2.1')}}                 | Fügt den {{cssxref("&lt;length&gt;")}} Wert hinzu und erlaubt die Anwendung auf Elemente mit `table-cell `{{cssxref("display")}}-Typ. |
| {{SpecName('CSS1', '#vertical-align', 'vertical-align')}}                             | {{Spec2('CSS1')}}                 | Einführung.                                                                                                                                            |

{{cssinfo}}

## Browserkompatibilität

{{Compat("css.properties.vertical-align")}}

## Siehe auch

- {{Cssxref("line-height")}}
- {{Cssxref("text-align")}}
