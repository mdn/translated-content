---
title: background-repeat
slug: Web/CSS/background-repeat
tags:
  - CSS
  - CSS Referenz
translation_of: Web/CSS/background-repeat
---
{{ CSSRef() }}

### Übersicht:

Die `background-repeat` Eigenschaft bestimmt, ob und wie Hintergrundbilder wiederholt werden.

> **Note:** Ab Gecko 1.9.2 (Firefox 3.6) können mehrere Hintergrundwiederholungen, durch Kommata getrennt, definiert werden.
> Vorherige Versionen unterstützen nur einen Wert.

- Standardwert: `repeat`
- Anwendbar auf: Alle Elemente
- Vererbbar: Nein
- Prozentwerte: Nein
- Medium: visuell
- berechneter Wert: wie festgelegt

### Syntax

    background-repeat:  <Hintergrundwiederholung>[, <Hintergrundwiederholung>]*

    <Hintergrundwiederholung>:
    repeat | repeat-x | repeat-y | no-repeat | round | space | inherit

### Werte

- repeat
  - : Das Hintergrundbild wird horizontal und vertikal wiederholt.
- repeat-x
  - : Das Hintergrundbild wird nur horizontal wiederholt.
- repeat-y
  - : Das Hintergrundbild wird nur vertikal wiederholt.
- no-repeat
  - : Das Hintergrundbild wird nicht wiederholt. Nur ein Exemplar wird angezeigt.
- round
  - : {{ unimplemented_inline() }} Das Hintergrundbild wird so oft wiederholt, wie es in das Element hinein passt. Dabei kann das Hintergrundbild in seiner Größe angepasst werden, um auf die volle Breite bzw. Höhe des Elements ausgestreckt zu werden.
- space
  - : {{ unimplemented_inline() }} Das Hintergrundbild wird so oft wiederholt, wie es in das Element hinein passt. Allerdings wird die Bildgröße nicht angepasst, sondern soviel Platz zwischen den Hintergrundbildern gelassen, sodass sich der Hintergrund auf das gesamte Element verteilt.
- inherit
  - : Der Wert des Elternelements wird geerbt.

## Beispiele

### HTML

```html
<ol>
    <li>no-repeat
        <div class="one">&nbsp;</div>
    </li>
    <li>repeat
        <div class="two">&nbsp;</div>
    </li>
    <li>repeat-x
        <div class="three">&nbsp;</div>
    </li>
    <li>repeat-y
        <div class="four">&nbsp;</div>
    </li>
    <li>repeat-x, repeat-y (multiple images)
        <div class="five">&nbsp;</div>
    </li>
</ol>
```

### CSS

```css
/* Shared for all DIVS in example */
li {margin-bottom: 12px;}
div {
    background-image: url(https://mdn.mozillademos.org/files/12005/starsolid.gif);
    width: 144px;
    height: 84px;
}

/* background repeat CSS */
.one {
    background-repeat: no-repeat;
}
.two {
    background-repeat: repeat;
}
.three {
    background-repeat: repeat-x;
}
.four {
    background-repeat: repeat-y;
}

/* Multiple images */
.five {
    background-image:  url(https://mdn.mozillademos.org/files/12005/starsolid.gif),
                       url(https://developer.mozilla.org/static/img/favicon32.png);
    background-repeat: repeat-x,
                       repeat-y;
    height: 144px;
}
```

### Result

In this example, each list item is matched with a different value of `background-repeat`.

{{EmbedLiveSample('Beispiele', 240, 360)}}

### Browser Kompatibilität

| Browser           | ab Version | mehrere Hintergrundbilder | `round` und `space` Werte |
| ----------------- | ---------- | ------------------------- | ------------------------- |
| Internet Explorer | 4.0        | ---                       | ---                       |
| Firefox (Gecko)   | 1.0 (1.0)  | 3.6 (1.9.2)               | ---                       |
| Opera             | 3.5        | 10.5                      | 10.5                      |
| Safari (WebKit)   | 1.0 (85)   | 1.3 (312)                 | ---                       |

### Spezifikation

- [CSS 3 Background and Borders #background-repeat](http://www.w3.org/TR/css3-background/#background-repeat)
- [CSS 2.1 Colors and Backgrounds #background-repeat](http://www.w3.org/TR/CSS21/colors.html#propdef-background-repeat)

### Siehe auch

- [`background`](/de/CSS/background "de/CSS/background"), [`background-attachment`](/de/CSS/background-attachment "de/CSS/background-attachment"), [`background-clip`](/de/CSS/background-clip "de/CSS/background-clip"), [`background-color`](/de/CSS/background-color "de/CSS/background-color"), [`background-image`](/de/CSS/background-image "de/CSS/background-image"), [`background-origin`](/de/CSS/background-origin "de/CSS/background-origin"), [`background-position`](/de/CSS/background-position "de/CSS/background-position"), [`background-size`](/de/CSS/background-size "de/CSS/background-size")
- [`-moz-background-inline-policy`](/de/CSS/-moz-background-inline-policy "de/CSS/-moz-background-inline-policy")

{{ languages( { "en": "en/CSS/background-repeat", "es": "es/CSS/background-repeat", "fr": "fr/CSS/background-repeat", "pl": "pl/CSS/background-repeat" } ) }}
