---
title: quotes
slug: Web/CSS/quotes
tags:
  - CSS
  - CSS Eigenschaft
  - Layout
  - Referenz
  - Web
translation_of: Web/CSS/quotes
---
{{CSSRef}}

## Übersicht

Die `quotes` [CSS](/de/docs/Web/CSS "CSS") Eigenschaft gibt an, wie User Agents Anführungszeichen darstellen sollen.

{{cssinfo}}

## Syntax

```css
/* Schlüsselwortwert */
quotes: none;

/* <string> Werte */
quotes: "«" "»"         /* Setzt open-quote und close-quote auf französische Anführungszeichen */
quotes: "«" "»" "‹" "›" /* Setzt zwei Ebenen von Anführungszeichen */

/* Globale Werte */
quotes: inherit;
quotes: initial;
quotes: unset;
```

### Werte

- `none`
  - : Die `open-quote` und `close-quote` Werte der {{cssxref("content")}} Eigenschaft erzeugen keine Anführungszeichen.
- `[<string> <string>]+`
  - : Ein oder mehrere Paare von {{cssxref("&lt;string&gt;")}} Werten für `open-quote` und `close-quote`. Das erste Paar stellt die äußere Ebene des Zitats dar, das zweite Paar das erste Unterebene, das nächste die dritte Ebene usw.

### Formale Syntax

{{csssyntax}}

## Beispiele

```css
q { quotes: '"' '"' "'" "'" }
q:before { content: open-quote }
q:after  { content: close-quote }
```

## Hinweise

Seit Firefox 3.5 kann der ursprüngliche Wert der `quotes` Eigenschaft über `-moz-initial` gelesen werden. Dies war in früheren Versionen von Firefox nicht möglich.

## Spezifikationen

| Spezifikation                                                                | Status                   | Kommentar                |
| ---------------------------------------------------------------------------- | ------------------------ | ------------------------ |
| {{SpecName('CSS2.1', 'generate.html#quotes', 'quotes')}} | {{Spec2('CSS2.1')}} | Ursprüngliche Definition |

## Browser Kompatibilität

{{Compat("css.properties.quotes")}}

## Siehe auch

- {{cssxref("content")}}
