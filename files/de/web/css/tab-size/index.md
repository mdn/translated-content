---
title: tab-size
slug: Web/CSS/tab-size
tags:
  - CSS
  - CSS Eigenschaft
  - Experimentell
  - Referenz
translation_of: Web/CSS/tab-size
---
{{ CSSRef() }}

{{ SeeCompatTable() }}

## Übersicht

Die `tab-size` [CSS](/de/docs/Web/CSS) Eigenschaft wird verwendet, um die Breite eines Tabulatorzeichens (`U+0009`) anzupassen.

{{cssinfo}}

## Syntax

```css
/* <integer> Werte */
tab-size: 4;
tab-size: 0;

/* <length> Werte */
tab-size: 10px;
tab-size: 2em;

/* Globale Werte */
tab-size: inherit;
tab-size: initial;
tab-size: unset;
```

### Werte

- {{cssxref("&lt;integer&gt;")}}
  - : Die Anzahl der Leerzeichen in einem Tabulator. Darf nicht negativ sein.
- {{cssxref("&lt;length&gt;")}}
  - : Die Breite eines Tabulators. Darf nicht negativ sein.

### Formale Syntax

{{csssyntax}}

## Beispiele

```css
pre {
  tab-size: 4; /* Setzt die Tabgröße auf 4 Leerzeichen */
}
```

```css
pre {
  tab-size: 0; /* Entfernt die Einrückung */
}
```

```css
pre {
  tab-size: 99; /* Verwende keine Tabs! */
}
```

## Spezifikationen

| Spezifikation                                                        | Status                       | Kommentar                |
| -------------------------------------------------------------------- | ---------------------------- | ------------------------ |
| {{SpecName('CSS3 Text', '#tab-size', 'tab-size')}} | {{Spec2('CSS3 Text')}} | Ursprüngliche Definition |

## Browser Kompatibilität

{{Compat("css.properties.tab-size")}}

## Siehe auch

- [Controlling size of a tab character (U+0009)](http://lists.w3.org/Archives/Public/www-style/2008Dec/0009.html), ein E-Mail von Anne van Kesteren an das CSSWG.
