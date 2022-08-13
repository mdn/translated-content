---
title: column-width
slug: Web/CSS/column-width
tags:
  - CSS
  - CSS Eigenschaft
  - CSS Mehrspalten
  - Referenz
translation_of: Web/CSS/column-width
---
{{CSSRef}}

## Übersicht

Die **`column-width`** CSS Eigenschaft schlägt eine optimale Spaltenbreite vor. Dies ist kein absoluter Wert, sondern lediglich ein Hinweis an den Browser, welcher die Breite der Spalte anhand des vorgeschlagenen Wertes anpasst, was skalierbare Designs ermöglicht, die sich verschiedenen Bildschirmgrößen anpassen. Besonders wenn die {{cssxref("column-count")}} CSS Eigenschaft angegeben ist, welche Vorrang hat, wenn es darum geht, eine exakte Spaltenbreite zu setzen, müssen alle Längenwerte angegeben werden. In horizontalem Text sind dies {{cssxref('width')}}, {{cssxref('column-width')}}, {{cssxref('column-gap')}} und {{cssxref('column-rule-width')}}.

{{cssinfo}}

## Syntax

```css
/* Schlüsselwortwert */
column-width: auto;

/* Verschiedene <length> Werte */
column-width: 6px;
column-width: 25em;
column-width: 0.3vw;

/* Globale Werte */
column-width: inherit;
column-width: initial;
column-width: unset;
```

### Werte

- `<length>`
  - : Ist ein {{cssxref("&lt;length&gt;")}} Wert, der einen Hinweis auf die optimale Breite der Spalte gibt. Die tatsächliche Spaltenbreite kann größer (um den verfügbaren Platz auszufüllen) oder schmaler (nur, falls der verfügbare Platz kleiner als die angegebene Spaltenbreite ist) sein. Die Länge muss positiv sein, ansonsten ist sie ungültig.
- `auto`
  - : Ist ein Schlüsselwort, das angibt, dass die Breite der Spalte durch andere CSS Eigenschaften wie {{cssxref("column-count")}} bestimmt werden soll.

### Formale Syntax

{{csssyntax}}

## Beispiele

### HTML Inhalt

```html
<div class="content-box">
Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
</div>
```

### CSS Inhalt

```css
.content-box {
  border: 10px solid #0ff;

  /* Chrome, Safari, Opera Präfix */
  -webkit-column-width: 100px;

  /* Mozilla Firefox Präfix */
  -moz-column-width: 100px;

  column-width: 100px;
}
```

{{EmbedLiveSample('Beispiele', '300px', '200px')}}

## Spezifikationen

| Spezifikation                                                                                    | Status                                   | Kommentar                                                                                                           |
| ------------------------------------------------------------------------------------------------ | ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('CSS3 Writing Modes', '#multicol-intrinsic', 'column-width')}} | {{Spec2('CSS3 Writing Modes')}} | Fügt innere Größen über die Schlüsselwörter `min-content`, `max-content`, `fill-available` und `fit-content` hinzu. |
| {{SpecName('CSS3 Multicol', '#cw', 'column-width')}}                             | {{Spec2('CSS3 Multicol')}}     | Ursprüngliche Definition                                                                                            |

## Browser Kompatibilität

{{Compat("css.properties.column-width")}}
