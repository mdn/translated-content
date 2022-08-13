---
title: column-rule-width
slug: Web/CSS/column-rule-width
tags:
  - CSS
  - CSS Eigenschaft
  - CSS Mehrspaltiges Layout
  - Layout
  - NeedsLiveSample
  - NeedsMobileBrowserCompatibility
  - Referenz
translation_of: Web/CSS/column-rule-width
---
{{ CSSRef}}

## Übersicht

Die `column-rule-width` CSS Eigenschaft definiert die Breite der Linie, die zwischen den Spalten in mehrspaltigen Layouts gezeichnet wird.

{{cssinfo('column-rule-width')}}

## Syntax

```css
/* Schlüsselwortwerte */
column-rule-width: thin;
column-rule-width: medium;
column-rule-width: thick;

/* Längenwerte */
column-rule-width: 1px;
column-rule-width: 2.5em;

/* Globale Werte */
column-rule-width: inherit;
column-rule-width: initial;
column-rule-width: unset;
```

### Werte

- <'border-width'>
  - : Ist ein {{cssxref("border-width")}} Wert oder eines der Schlüsselwörter `thin`, `medium` oder `thick`, und beschreibt die Breite der Linie, die zwei Spalten trennt.

### Formale Syntax

{{csssyntax('column-rule-width')}}

## Beispiel

```css
#header {
  column-rule-width: thick;
}
```

## Spezifikation

| Spezifikation                                                                    | Status                               | Kommentar                |
| -------------------------------------------------------------------------------- | ------------------------------------ | ------------------------ |
| {{ SpecName('CSS3 Multicol', '#crw', 'column-rule-width') }} | {{ Spec2('CSS3 Multicol') }} | Ursprüngliche Definition |

## Browser Kompatibilität

{{Compat("css.properties.column-rule-width")}}
