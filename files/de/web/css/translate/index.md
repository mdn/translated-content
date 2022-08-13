---
title: translate
slug: Web/CSS/translate
tags:
  - CSS
  - CSS Eigenschaft
  - Experimentell
  - Referenz
  - Tranformation
translation_of: Web/CSS/translate
---
{{CSSRef}}

Mit der [CSS](/de/docs/Web/CSS)-Eigenschaft **`translate`** [CSS](/de/docs/Web/CSS) können Sie Transformationen einzeln und unabhängig von der Eigenschaft {{CSSxRef("transform")}} angeben. Dies entspricht eher der typischen Verwendung auf der Benutzeroberfläche und erspart es, sich die genaue Reihenfolge der Transformationsfunktionen zu merken, die im Transformationswert angegeben werden müssen.

## Syntax

```css
/* Standardwert */
translate: none;

/* Einzelwert */
translate: 100px;
translate: 50%;

/* Zwei Werte */
translate: 100px 200px;
translate: 50% 105px;

/* Drei Werte */
translate: 50% 105px 5rem;
```

### Values

- Einzelwert {{cssxref("&lt;length-percentage&gt;")}}
  - : Ein Einzelwert als {{cssxref("&lt;Länge&gt;")}} oder {{cssxref("&lt;Prozentsatz&gt;")}}, der eine 2D-Verschiebung angibt, die eine gleiche Verschiebung entlang der X- und Y-Achse spezifiziert. Äquivalent zu einer Funktion `translate()` (2D-Übersetzung) mit zwei angegebenen Werten.
- Zwei Werte {{cssxref("&lt;length-percentage&gt;")}}
  - : Zwei Werte als {{cssxref("&lt;Länge&gt;")}} oder {{cssxref("&lt;Prozentsatz&gt;")}}, wobei der erste Wert für die Verschiebung auf der X- und der Zweite auf der Y-Achse steht.
- Drei Werte {{cssxref("&lt;length-percentage&gt;")}}
  - : Zwei Werte als {{cssxref("&lt;Länge&gt;")}} oder {{cssxref("&lt;Prozentsatz&gt;")}} und ein dritter Wert im Format {{cssxref("&lt;length&gt;")}}, die die Verchiebung auf der X-, Y-, und Z-Achse spezifizieren. Entspricht der Funktion {{cssxref("translate3d()")}} (3D-Verschiebung).
- `none`
  - : Gibt an, dass keine Verschiebung angewendet werden soll.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiel

### HTML

```html
<div>
  <p class="translate">Translation</p>
</div>
```

### CSS

```css
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

div {
  width: 150px;
  margin: 0 auto;
}

p {
  padding: 10px 5px;
  border: 3px solid black;
  border-radius: 20px;
  width: 150px;
  font-size: 1.2rem;
  text-align: center;
}

.translate {
  transition: translate 1s;
}

div:hover .translate {
  translate: 200px 50px;
}
```

### Result

{{EmbedLiveSample('Examples')}}

## Spezifikation

| Spezifikation                                                                                                    | Status                                   | Kommentar                |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------- | ------------------------ |
| {{SpecName('CSS Transforms 2', '#individual-transforms', 'individual transforms')}} | {{Spec2('CSS Transforms 2')}} | Ursprüngliche Definition |

## Browser-Kompatibilität

{{Compat("css.types.transform-function")}}

## See also

- [`translateX()`](/de/docs/Web/CSS/transform-function/translateX)
- [`translateY()`](/de/docs/Web/CSS/transform-function/translateY)
- [`translateZ()`](</de/docs/Web/CSS/transform-function/translateZ()>)
- [`translate3d()`](</de/docs/Web/CSS/transform-function/translate3d()>)
- {{cssxref('scale')}}
- {{cssxref('rotate')}}
- {{cssxref('transform')}}

Note: skew is not an independent transform value
