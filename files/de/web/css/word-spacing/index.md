---
title: word-spacing
slug: Web/CSS/word-spacing
tags:
  - CSS
  - CSS Text
  - NeedsLiveSample
  - NeedsMobileBrowserCompatibility
  - Property
  - Referenz
translation_of: Web/CSS/word-spacing
---
{{CSSRef}}

## Übersicht

Die** `word-spacing`** [CSS](/de/docs/Web/CSS) Eigenschaft gibt das Abstandsverhalten zwischen Tags und Wörtern an.

{{cssinfo}}

## Syntax

```css
/* Schlüsselwortwerte */
word-spacing: normal;

/* <length> Werte */
word-spacing: 3px;
word-spacing: 0.3em;

/* <percentage> Werte */
word-spacing: 50%;
word-spacing: 200%;

/* Globale Werte */
word-spacing: inherit;
word-spacing: initial;
word-spacing: unset;
```

### Werte

- `normal`
  - : Der normale Abstand zwischen Wörtern, wie durch die aktuelle Schriftart und/oder den Browser angegeben.
- `<length>`
  - : Definiert Abstände zusätzlich zu den immanenten Abständen zwischen den Wörtern, die durch die Schriftart definiert werden. Siehe {{cssxref("&lt;length&gt;")}} für mögliche Einheiten.
- `<percentage>`
  - : Definiert die zusätzlichen Abstände als Prozentwert der Breite des betreffenden Zeichens.

### Formale Syntax

{{csssyntax}}

## Beispiele

Der folgende CSS Code:

```css
#mozdiv1 {
  word-spacing: 15px;
}

#mozdiv2 {
  word-spacing: 5em;
}
```

formatiert zwei {{HTMLElement("div")}} Tags, die Text beinhalten wie hier gezeigt:

![example.png](/@api/deki/files/6103/=example.png)

## Spezifikationen

| Spezifikation                                                                                    | Status                                   | Kommentar                                                                                                                                                                                                       |
| ------------------------------------------------------------------------------------------------ | ---------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('CSS3 Text', '#propdef-word-spacing', 'word-spacing')}}         | {{Spec2('CSS3 Text')}}             | Ersetzt die vorherigen Werte mit einem `<spacing-limit>` Wert, der denselben Wert definiert plus den `<percentage>` Wert und erlaubt bis zu drei Werte, die den Optimal-, Minimal- und Maximalwert beschreiben. |
| {{SpecName('CSS3 Transitions', '#animatable-css', 'word-spacing')}}         | {{Spec2('CSS3 Transitions')}} | Definiert `word-spacing` als animierbar.                                                                                                                                                                        |
| {{SpecName('CSS2.1', 'text.html#propdef-word-spacing', 'word-spacing')}} | {{Spec2('CSS2.1')}}                 | Keine Änderung                                                                                                                                                                                                  |
| {{SpecName('CSS1', '#word-spacing', 'word-spacing')}}                         | {{Spec2('CSS1')}}                 | Ursprüngliche Definition                                                                                                                                                                                        |

## Browser Kompatibilität

{{Compat("css.properties.word-spacing")}}
