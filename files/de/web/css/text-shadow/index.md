---
title: text-shadow
slug: Web/CSS/text-shadow
tags:
  - CSS
  - CSS Text
  - Eigenschaft
  - NeedsMobileBrowserCompatibility
  - Referenz
translation_of: Web/CSS/text-shadow
---
{{Cssref}}

## Übersicht

Die **`text-shadow`** CSS Eigenschaft fügt Text Schatten hinzu. Sie akzeptiert eine kommaseparierte Liste von Schatten, die auf den Text und {{cssxref("text-decoration","Textdekorationen")}} des Elements angewendet werden sollen.

Jeder Schatten wird mit einem Versatz vom Text angegeben, zusammen mit optionalen Farb- und Unschärferadiuswerten.

Mehrere Schatten werden von vorne nach hinten angewendet, wobei der zuerst angewendete Schatten oben ist.

Diese Eigenschaft gilt sowohl für {{cssxref("::first-line")}} als auch {{cssxref("::first-letter")}} [Pseudoelemente](/de/docs/Web/CSS/Pseudo-elements).

{{cssinfo}}

## Syntax

```css
/* offset-x | offset-y | blur-radius | color */
text-shadow: 1px 1px 2px black;

/* color | offset-x | offset-y | blur-radius */
text-shadow: #CCC 1px 0 10px;

/* offset-x | offset-y | color */
text-shadow: 5px 5px #558ABB;

/* color | offset-x | offset-y */
text-shadow: white 2px 5px;

/* offset-x | offset-y */
/* Für color und blur-radius werden Standardwerte verwendet */
text-shadow: 5px 10px;

/* Globale Werte */
text-shadow: inherit;
text-shadow: initial;
text-shadow: unset;
```

### Werte

- \<color>
  - : Optional. Kann entweder vor oder nach dem Versatzwert angegeben werden. Falls die Farbe nicht angegeben wurde, wird eine vom User Agent bestimmte Farbe verwendet. {{note("Falls Konsistenz zwischen den Browsern gewünscht ist, sollte eine Farbe explizit gewählt werden.")}}
- \<offset-x> \<offset-y>
  - : Benötigt. Diese `<length>` Werte bestimmen den Versatz des Schattens vom Text. `<offset-x>` bestimmt die horizontale Distanz; ein negativer Wert platziert den Schatten links vom Text. `<offset-y>` bestimmt die vertikale Distanz; ein negativer Wert platziert den Schatten oberhalb des Texts. Falls beide Werte `0` sind, wird der Schatten hinter dem Text platziert (und kann einen Unschärfeeffekt erzeugen, falls `<blur-radius>` gesetzt ist).
    Siehe {{cssxref("&lt;length&gt;")}} für mögliche Einheiten.
- \<blur-radius>
  - : Optional. Dies ist ein {{cssxref("&lt;length&gt;")}} Wert. Falls nicht angegeben, ist der Standardwert `0`. Je größer dieser Wert ist, desto größer ist die Unschärfe; der Schatten wird ausgedehnter und geringer.

### Formale Syntax

{{csssyntax}}

## Beispiele

```css
.red-text-shadow {
   text-shadow: red 0 -2px;
}
```

```html
<p class="red-text-shadow">
   Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
   inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
</p>
```

{{EmbedLiveSample('Beispiel1', '689px', '90px')}}

```css
.white-with-blue-shadow {
   text-shadow: 1px 1px 2px black, 0 0 1em blue, 0 0 0.2em blue;
   color: white;
   font: 1.5em Georgia, "Bitstream Charter", "URW Bookman L", "Century Schoolbook L", serif;
}
```

```html
<p class="white-with-blue-shadow">
   Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
   veritatis et quasi architecto beatae vitae dicta sunt explicabo.
</p>
```

{{EmbedLiveSample('Beispiel2', '689px', '180px')}}

```css
.gold-on-gold {
   text-shadow: rgba(0,0,0,0.1) -1px 0, rgba(0,0,0,0.1) 0 -1px,
   rgba(255,255,255,0.1) 1px 0, rgba(255,255,255,0.1) 0 1px,
   rgba(0,0,0,0.1) -1px -1px, rgba(255,255,255,0.1) 1px 1px;
   color: gold;
   background: gold;
}
```

```html
<p class="gold-on-gold">
   Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
   veritatis et quasi architecto beatae vitae dicta sunt explicabo.
</p>
```

{{EmbedLiveSample('Beispiel3', '689px', '90px')}}

## Spezifikationen

| Spezifikation                                                                            | Status                                       | Kommentar                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ---------------------------------------------------------------------------------------- | -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| {{SpecName('CSS3 Transitions', '#animatable-css', 'text-shadow')}} | {{Spec2('CSS3 Transitions')}}     | Definiert `text-shadow` als animierbar.                                                                                                                                                                                                                                                                                                                                                                                        |
| {{SpecName('CSS3 Text Decoration', '#text-shadow', 'text-shadow')}} | {{Spec2('CSS3 Text Decoration')}} | Die CSS Eigenschaft `text-shadow` wurde [in CSS2 inkorrekt definiert](http://www.w3.org/TR/2008/REC-CSS2-20080411/text.html#text-shadow-props) und in CSS2 (Level 1) verworfen. Die _CSS Text Module Level 3_ Spezifikation hat die Syntax verbessert und präzisiert. Später wurde sie in den neuen Arbeitsentwurf _[CSS Text Decoration Module Level 3](http://www.w3.org/TR/2012/WD-css-text-decor-3-20121113/)_ verschoben. |

## Browser Kompatibilität

{{Compat("css.properties.text-shadow")}}

## Siehe auch

- {{cssxref("box-shadow")}}
