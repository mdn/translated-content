---
title: ':-moz-first-node'
slug: Web/CSS/:-moz-first-node
tags:
  - CSS
  - CSS Referenz
  - NeedsCompatTable
  - Non-standard
translation_of: Web/CSS/:-moz-first-node
---
{{Non-standard_header}}{{CSSRef}}

## Übersicht

Die `:-moz-first-node` [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert ein beliebiges Element, dass der erste Kindknoten eines anderen Elements ist. Es unterscheidet sich von {{cssxref(":last-child")}}, da es keine letzten Kindelemente mit darauffolgendem (nicht aus Leerzeichen bestehenden) Text matcht.

> **Note:** Any white space at the start of an element is ignored for the determination of `:-moz-first-node`.

## Syntax

    span:-moz-first-node { Stileigenschaften }

## Beispiel

### CSS

```css
span:-moz-first-node {
  background-color: lime;
}
```

### HTML

```html
<div>
  <span>:-moz-first-node</span>
  <span>:-moz-last-node</span>
</div>
```

{{EmbedLiveSample("Example", "220", "20")}}

## Siehe auch

- {{cssxref(":-moz-last-node")}}
- {{cssxref(":first-child")}}
