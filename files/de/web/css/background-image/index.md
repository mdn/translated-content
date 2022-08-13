---
title: background-image
slug: Web/CSS/background-image
tags:
  - CSS
  - CSS Referenz
translation_of: Web/CSS/background-image
---
{{ CSSRef() }}

## Übersicht

Die `background-image`-Eigenschaft legt ein oder mehrere Hintergrundbilder für ein Element fest. Die einzelnen Bilder werden übereinander gestapelt, wobei die erste Schicht so dargestellt wird, dass sie dem Benutzer am nächsten erscheint. Hintergrundbilder werden immer über Hintergrundfarben gelegt.

Um bei ausgeschalteten Grafiken oder Fehlern beim Laden des Bildes einen ausreichenden Kontrast zu gewährleisten, ist es deshalb sinnvoll, immer eine Hintergrundfarbe mittels [`background-color`](/de/CSS/background-color "de/CSS/background-color") anzugeben. Die Kurzform [`background`](/de/CSS/background "de/CSS/background") bietet sich an, um beides zu notieren.

> **Note:** Ab Gecko 1.9.2 (Firefox 3.6) können mehrere Hintergrundbilder, durch Kommata getrennt, definiert werden.
> Das zuerst definierte Hintergrundbild ist dabei das Oberste.

- Standardwert: `none`
- Anwendbar auf: Alle Elemente
- Vererbbar: Nein
- Prozentwerte: Nein
- Medium: visuell
- berechneter Wert: absolute URI oder `none`

## Syntax

    background-image:  <Hintergrundbild>[, <Hintergrundbild>]*

    <Hintergrundbild>:
    none | url | inherit | -moz-linear-gradient() | -moz-radial-gradient()

### Werte

- none
  - : Standardwert. Es wird kein Hintergrundbild verwendet.
- url
  - : Der Pfad des Bildes, das als Hintergrund angezeigt werden soll.
- inherit
  - : Der Wert des Elternelements wird geerbt.

#### Mozilla Erweiterungen:

- [`-moz-linear-gradient()`](/de/CSS/-moz-linear-gradient "de/CSS/-moz-linear-gradient") {{ gecko_minversion_inline("1.9.2") }}
  - : Linearer Verlauf
- [`-moz-radial-gradient()`](/de/CSS/-moz-radial-gradient "de/CSS/-moz-radial-gradient") {{ gecko_minversion_inline("1.9.2") }}
  - : Radialer Verlauf

## Beispiele

Es ist zu beachten, dass das Bild des Sterns teilweise transparent ist und das Katzenbild überlagert.

### HTML

```html
<div>
    <p class="catsandstars">
        This paragraph is full of cats<br />and stars.
    </p>
    <p>This paragraph is not.</p>
    <p class="catsandstars">
        Here are more cats for you.<br />Look at them!
    </p>
    <p>And no more.</p>
</div>
```

### CSS

```css
pre, p {
    font-size: 1.5em;
    color: #FE7F88;
    background-color: transparent;
}

div {
  background-image: url("https://mdn.mozillademos.org/files/6457/mdn_logo_only_color.png");
}

p {
  background-image: none;
}

.catsandstars {
  background-image:  url("https://mdn.mozillademos.org/files/11991/startransparent.gif"),
                     url("https://mdn.mozillademos.org/files/7693/catfront.png");
  background-color: transparent;
}
```

### Ergebnis

{{EmbedLiveSample('Beispiele')}}

## Browser Kompatibilität

| Browser           | ab Version | mehrere Hintergrundbilder | Verläufe                                                                                                                                                                             |
| ----------------- | ---------- | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Internet Explorer | 4.0        | ---                       | ---                                                                                                                                                                                  |
| Firefox (Gecko)   | 1.0 (1.0)  | 3.6 (1.9.2)               | 3.6 (1.9.2) [-moz-]                                                                                                                                                                  |
| Opera             | 3.5        | 10.5                      | ---                                                                                                                                                                                  |
| Safari (WebKit)   | 1.0 (85)   | 1.3 (312)                 | 4.0 (528) [[-webkit-](http://developer.apple.com/safari/library/documentation/AppleApplications/Reference/SafariCSSRef/Articles/Functions.html#//apple_ref/doc/uid/TP40007955-SW25)] |

## Spezifikation

- [CSS 3 Background and Borders #background-image](http://www.w3.org/TR/css3-background/#background-image)
- [CSS 2.1 Colors and Backgrounds #background-image](http://www.w3.org/TR/CSS21/colors.html#propdef-background-image)
- [CSS 3 Images #gradients](http://dev.w3.org/csswg/css3-images/#gradients-) (Editor's Draft)

## Siehe auch

- [`background`](/de/CSS/background "de/CSS/background"), [`background-attachment`](/de/CSS/background-attachment "de/CSS/background-attachment"), [`background-clip`](/de/CSS/background-clip "de/CSS/background-clip"), [`background-color`](/de/CSS/background-color "de/CSS/background-color"), [`background-origin`](/de/CSS/background-origin "de/CSS/background-origin"), [`background-position`](/de/CSS/background-position "de/CSS/background-position"), [`background-repeat`](/de/CSS/background-repeat "de/CSS/background-repeat"), [`background-size`](/de/CSS/background-size "de/CSS/background-size")
- [`-moz-background-inline-policy`](/de/CSS/-moz-background-inline-policy "de/CSS/-moz-background-inline-policy")
- [`-moz-linear-gradient`](/de/CSS/-moz-linear-gradient "de/CSS/-moz-linear-gradient"), [`-moz-radial-gradient`](/de/CSS/-moz-radial-gradient "de/CSS/-moz-radial-gradient"), [`-moz-repeating-linear-gradient`](/de/CSS/-moz-repeating-linear-gradient "de/CSS/-moz-repeating-linear-gradient"), [`-moz-repeating-radial-gradient`](/de/CSS/-moz-repeating-radial-gradient "de/CSS/-moz-repeating-radial-gradient")

{{ languages( {"en": "en/CSS/background-image", "fr": "fr/CSS/background-image", "pl": "pl/CSS/background-image", "es": "es/CSS/background-image" } ) }}
