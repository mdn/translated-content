---
title: background-color
slug: Web/CSS/background-color
tags:
  - CSS
  - CSS Eigenschaft
  - CSS Hintergrund
  - Grafik
  - Layout
  - Referenz
translation_of: Web/CSS/background-color
---
{{CSSRef}}

## Übersicht

Die **`background-color`** [CSS](/de/docs/Web/CSS) Eigenschaft setzt die Hintergrundfarbe eines Elements, entweder durch einen Farbwert oder das Schlüsselwort `transparent`.

{{cssinfo}}

## Syntax

```css
/* Schlüsselwortwerte */
background-color: red;

/* Hexadezimalwert */
background-color: #bbff00;

/* RGB-Wert */
background-color: rgb(255, 255, 128);

/* HSLA-Wert */
background-color: hsla(50, 33%, 25%, 0.75);

/* Spezielle Schlüsselwortwerte */
background-color: currentColor;
background-color: transparent;

/* Globale Werte */
background-color: inherit;
background-color: initial;
background-color: unset;
```

### Werte

- `<color>`
  - : Ist ein CSS {{cssxref("&lt;color&gt;")}} Wert, der die einheitliche Farbe des Hintergrunds beschreibt. Sogar wenn ein oder mehrere {{cssxref("background-image")}} definiert sind, kann diese Farbe die Darstellung durch Transparenzen in den Bildern beeinflussen. In CSS ist `transparent` eine Farbe.

### Formale Syntax

{{csssyntax}}

## Beispiele

### HTML

```html
<div class="exampleone">
 Lorem ipsum dolor sit amet, consectetuer
</div>

<div class="exampletwo">
  Lorem ipsum dolor sit amet, consectetuer
</div>

<div class="examplethree">
  Lorem ipsum dolor sit amet, consectetuer
</div>
```

### CSS

```css
.exampleone {
  background-color: teal;
  color: white;
}

.exampletwo {
  background-color: rgb(153,102,153);
  color: rgb(255,255,204);
}

.examplethree {
  background-color: #777799;
  color: #FFFFFF;
}
```

### Ergebnis

{{EmbedLiveSample("Beispiele","200","150")}}

## Spezifikationen

| Spezifikation                                                                                                | Status                                   | Kommentar                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------ | ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| {{SpecName('CSS3 Backgrounds', '#background-color', 'background-color')}}             | {{Spec2('CSS3 Backgrounds')}} | Obwohl das Schlüsselwort `transparent` technisch entfernt wurde, ändert dies nichts, da es als echter {{cssxref("&lt;color&gt;")}} integriert wurde. |
| {{SpecName('CSS2.1', 'colors.html#propdef-background-color', 'background-color')}} | {{Spec2('CSS2.1')}}                 | Keine Änderung                                                                                                                                               |
| {{SpecName('CSS1', '#background-color', 'background-color')}}                             | {{Spec2('CSS1')}}                 | Ursprüngliche Definition                                                                                                                                     |

## Browser Kompatibilität

{{Compat("css.properties.background-color")}}

## Siehe auch

- [Mehrere Hintergründe](/de/docs/Web/Guide/CSS/mehrere_Hintergründe_verwenden)
