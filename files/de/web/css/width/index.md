---
title: width
slug: Web/CSS/width
tags:
  - CSS
  - CSS Eigenschaft
  - NeedsBrowserCompatibility
  - NeedsMobileBrowserCompatibility
  - Referenz
translation_of: Web/CSS/width
---
{{CSSRef}}

## Übersicht

Die **`width`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Breite des Inhaltsbereichs eines Elements fest. Der [Inhaltsbereich](/de/docs/Web/CSS/Boxmodell#Inhaltsbereich) ist _innerhalb_ des Innenabstands, Rahmens und Außenabstands des Elements.

Die {{cssxref("min-width")}} und {{cssxref("max-width")}} Eigenschaften überschreiben `width`.

{{cssinfo}}

## Syntax

```css
/* <length> Werte */
width: 300px;
width: 25em;

/* <percentage> Werte */
width: 75%;

/* Schlüsselwortwerte */
width: border-box;
width: content-box;
width: max-content;
width: min-content;
width: available;
width: fit-content;
width: auto;

/* Globale Werte */
width: inherit;
width: initial;
width: unset;
```

### Werte

- `<length>`
  - : Siehe {{cssxref("&lt;length&gt;")}} für mögliche Einheiten.
- `<percentage>`
  - : Angegeben als {{cssxref("&lt;percentage&gt;")}} der Breite des beinhaltenden Blocks.
- `border-box`{{experimental_inline}}
  - : Falls angegeben, wird der vorherige {{cssxref("&lt;length&gt;")}} oder {{cssxref("&lt;percentage&gt;")}} Wert auf die Borderbox des Elements angewendet.
- `content-box` {{experimental_inline}}
  - : Falls angegeben, wird der vorherige {{cssxref("&lt;length&gt;")}} oder {{cssxref("&lt;percentage&gt;")}} Wert auf die Contentbox des Elements angewendet.
- `auto`
  - : Der Browser berechnet die Breite für das angegebene Element.
- `max-content` {{experimental_inline}}
  - : Die innere bevorzugte Breite.
- `min-content` {{experimental_inline}}
  - : Die innere Minimalbreite.
- `available` {{experimental_inline}}
  - : Die Breite des beinhaltenden Blocks minus horizontalem Rand, Außen- und Innenabstand.
- `fit-content` {{experimental_inline}}
  - : Der größere Werte von:\* der inneren Minimalbreite.
    - der kleineren Größe der inneren bevorzugten und der verfügbaren Breite.

### Formale Syntax

{{csssyntax}}

## Beispiele

### Standardbreite

```css
p.goldie {
  background: gold;
}
```

```html
<p class="goldie">Die Mozilla Community produziert tolle Software.</p>
```

{{EmbedLiveSample('Standardbreite', '500px', '64px')}}

### Pixel und ems

```css
.px_length {
  width: 200px;
  background-color: red;
  color: white;
  border: 1px solid black;
}

.em_length {
  width: 20em;
  background-color: white;
  color: red;
  border: 1px solid black;
}
```

```html
<div class="px_length">Breite gemessen in px</div>
<div class="em_length">Breite gemessen in em</div>
```

{{EmbedLiveSample('Pixel_und_ems', '500px', '64px')}}

### Prozentwert

```css
.percent {
  width: 20%;
  background-color: silver;
  border: 1px solid red;
}
```

```html
<div class="percent">Breite in Prozent</div>
```

{{EmbedLiveSample('Prozentwert', '500px', '64px')}}

### max-content

```css
p.maxgreen {
  background: lightgreen;
  width: intrinsic;           /* Safari/WebKit verwendet einen nicht standardisierten Namen */
  width: -moz-max-content;    /* Firefox/Gecko */
  width: -webkit-max-content; /* Chrome */
}
```

```html
<p class="maxgreen">Die Mozilla Community produziert tolle Software.</p>
```

{{EmbedLiveSample('max-content', '500px', '64px')}}

### min-content

```css
p.minblue {
  background: lightblue;
  width: -moz-min-content;    /* Firefox */
  width: -webkit-min-content; /* Chrome */
}
```

```html
<p class="minblue">Die Mozilla Community produziert tolle Software.</p>
```

{{EmbedLiveSample('min-content', '500px', '155px')}}

## Spezifikationen

| Spezifikation                                                                                | Status                                   | Kommentar                                                                                                                |
| -------------------------------------------------------------------------------------------- | ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| {{SpecName('CSS3 Box', '#the-width-and-height-properties', 'width')}} | {{Spec2('CSS3 Box')}}             | Fügt die Schlüsselwörter `max-content`, `min-content`, `available`, `fit-content`, `border-box` und `content-box` hinzu. |
| {{SpecName('CSS3 Transitions', '#animatable-css', 'width')}}             | {{Spec2('CSS3 Transitions')}} | Listet `width` als animierbar.                                                                                           |
| {{SpecName('CSS2.1', 'visudet.html#the-width-property', 'width')}}     | {{Spec2('CSS2.1')}}                 | Präzisiert die Art von Elementen, auf die die Eigenschaft angewendet werden kann.                                        |
| {{SpecName('CSS1', '#width', 'width')}}                                         | {{Spec2('CSS1')}}                 | Ursprüngliche Definition                                                                                                 |

## Browser Kompatibilität

{{Compat("css.properties.width")}}

## Siehe auch

- [Boxmodell](/de/docs/Web/CSS/Boxmodell#Inhaltsbereich), {{cssxref("height")}}, {{cssxref("box-sizing")}}, {{cssxref("min-width")}} und {{cssxref("max-width")}}
