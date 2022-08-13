---
title: background-blend-mode
slug: Web/CSS/background-blend-mode
tags:
  - CSS
  - CSS Compositing
  - CSS Eigenschaft
  - Referenz
translation_of: Web/CSS/background-blend-mode
---
{{CSSRef}}

Die [CSS](/de/docs/Web/CSS) Eigenschaft `background-blend-mode` beschreibt, wie sich die Hintergrundbilder eines Elementes, sowie dessen Hintergrundfarbe, miteinander vemischen

{{EmbedInteractiveExample("pages/css/background-blend-mode.html")}}

Die Blending-Verfahren sollten in der selben Reihenfolge wie die Bilder der `background-image` Eigenschaft definiert werden. Wenn die Anzahl der Blending-Verfahren nicht mit der Anzahl der Hintergrundbilder übereinstimmt, werden sie wiederholt oder abgeschnitten, bis jedem Hintergrundbild ein Blending-Verfahren zugeordnet werden kann.

## Syntax

```css
/* Ein Wert */
background-blend-mode: normal;

/* Zwei Werte, einer pro Hintergrund */
background-blend-mode: darken, luminosity;

/* Globale Werte */
background-blend-mode: initial;
background-blend-mode: inherit;
background-blend-mode: unset;
```

### Werte

- {{cssxref("&lt;blend-mode&gt;")}}
  - : Ein {{cssxref("&lt;blend-mode&gt;")}} welcher das Verfahren zur Vermischung von Hintergrundbildern und -farbe beschreibt. Es können mehrere Werte mit Kommas getrennt angegeben werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches Beispiel

#### HTML

```css
.item {
    width: 300px;
    height: 300px;
    background: url('image1.png'),url('image2.png');
    background-blend-mode: screen;
}
```

### Probieren Sie verschiedene Mischmodi aus

```html hidden
<div id="div"></div>
<select id="select">
    <option>normal</option>
    <option>multiply</option>
    <option selected>screen</option>
    <option>overlay</option>
    <option>darken</option>
    <option>lighten</option>
    <option>color-dodge</option>
    <option>color-burn</option>
    <option>hard-light</option>
    <option>soft-light</option>
    <option>difference</option>
    <option>exclusion</option>
    <option>hue</option>
    <option>saturation</option>
    <option>color</option>
    <option>luminosity</option>
</select>
```

```css hidden
#div {
    width: 300px;
    height: 300px;
    background: url('https://mdn.mozillademos.org/files/8543/br.png'),url('https://mdn.mozillademos.org/files/8545/tr.png');
    background-blend-mode: screen;
}
```

```js hidden
document.getElementById("select").onchange = function(event) {
    document.getElementById("div").style.backgroundBlendMode = document.getElementById("select").selectedOptions[0].innerHTML;
}
console.log(document.getElementById('div'));
```

#### Ergebnis

{{ EmbedLiveSample('Examples', "330", "330") }}

## Spezifikationen

| Spezifikation                                                                                            | Status                           | Kommentar                |
| -------------------------------------------------------------------------------------------------------- | -------------------------------- | ------------------------ |
| {{SpecName('Compositing', '#background-blend-mode', 'background-blend-mode')}} | {{Spec2('Compositing')}} | Ursprüngliche Definition |

## Browser Kompatibilität

{{Compat("css.properties.background-blend-mode")}}

## Siehe auch

- {{cssxref("&lt;blend-mode&gt;")}}
- {{cssxref("mix-blend-mode")}}
