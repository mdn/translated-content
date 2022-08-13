---
title: height
slug: Web/CSS/height
tags:
  - CSS
  - CSS Eigenschaft
  - Referenz
translation_of: Web/CSS/height
---
{{CSSRef}}

## Übersicht

Die **`height`** CSS Eigenschaft bestimmt die Höhe des Inhaltsbereichs eines Elements. Der [Inhaltsbereich](/de/docs/Web/CSS/Boxmodell#Inhalt) ist _innerhalb_ des Innenabstands, der Rahmen und des Außenabstands des Elements.

Die Eigenschaften {{cssxref("min-height")}} und {{cssxref("max-height")}} überschreiben `height`.

{{cssinfo}}

## Syntax

```css
/* Schlüsselwortwert */
height: auto;

/* <length> Werte */
height: 120px;
height: 10em;

/* <percentage> Wert */
height: 75%;

/* Globale Werte */
height: inherit;
height: initial;
height: unset;
```

### Werte

- `<length>`
  - : Siehe {{cssxref("&lt;length&gt;")}} für mögliche Einheiten.
- `<percentage>`
  - : Definiert als eine {{cssxref("&lt;percentage&gt;")}} der Höhe des beinhaltenden Blocks.
- `border-box`{{experimental_inline}}
  - : Falls angegeben, wird die vorhergehende {{cssxref("&lt;length&gt;")}} oder {{cssxref("&lt;percentage&gt;")}} auf die Rahmenbox des Elements angewendet.
- `content-box` {{experimental_inline}}
  - : Falls angegeben, wird die vorhergehende {{cssxref("&lt;length&gt;")}} oder {{cssxref("&lt;percentage&gt;")}} auf die Inhaltsbox des Elements angewendet.
- `auto`
  - : Der Browser berechnet und wählt die Höhe für das angegebene Element aus.
- `max-content` {{experimental_inline}}
  - : Die innere bevorzugte Höhe.
- `min-content` {{experimental_inline}}
  - : Die innere Minimalhöhe.
- `available` {{experimental_inline}}
  - : Die Höhe des beinhaltenden Blocks minus vertikaler Außenabstand, Rahmen und Innenabstand.
- `fit-content` {{experimental_inline}}
  - : Die größere der:\* inneren Minimalhöhe
    - kleineren der inneren bevorzugten und der verfügbaren Höhe

### Formale Syntax

{{csssyntax}}

## Beispiel

### HTML

```html
<div id="red">
  <span>Ich bin 50 Pixel hoch.</span>
</div>
<div id="green">
  <span>Ich bin 25 Pixel hoch.</span>
</div>
<div id="parent">
  <div id="child">
    <span>Ich bin halb so groß wie mein Elternelement.</span>
  </div>
</div>
```

### CSS

```css
div {
  width: 250px;
  margin-bottom: 5px;
  border: 3px solid #999999;
}

#red {
  height: 50px;
}

#green {
  height: 25px;
}

#parent {
  height: 100px;
}

#child {
  height: 50%;
  width: 75%;
}
```

{{EmbedLiveSample('Beispiel')}}

## Spezifikationen

| Spezifikation                                                                                | Status                                   | Kommentar                                                                                                                             |
| -------------------------------------------------------------------------------------------- | ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('CSS3 Box', '#the-width-and-height-properties', 'height')}} | {{Spec2('CSS3 Box')}}             | Fügt die Schlüsselwörter `max-content`, `min-content`, `available`, `fit-content`, `border-box` und `content-box` hinzu.              |
| {{SpecName('CSS3 Transitions', '#animatable-css', 'height')}}             | {{Spec2('CSS3 Transitions')}} | Definiert `height` als animierbar.                                                                                                    |
| {{SpecName('CSS2.1', 'visudet.html#the-height-property', 'height')}} | {{Spec2('CSS2.1')}}                 | Fügt Unterstützung für {{cssxref("&lt;length&gt;")}} Werte hinzu und präzisiert, für welche Elemente die Eigenschaft gilt. |
| {{SpecName('CSS1', '#height', 'height')}}                                     | {{Spec2('CSS1')}}                 | Ursprüngliche Definition                                                                                                              |

## Browser Kompatibilität

{{Compat("css.properties.height")}}

## Siehe auch

- [Boxmodell](/de/docs/Web/CSS/Boxmodell), {{cssxref("width")}}, {{cssxref("box-sizing")}}, {{cssxref("min-height")}}, {{cssxref("max-height")}}
