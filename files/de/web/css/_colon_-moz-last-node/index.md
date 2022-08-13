---
title: ':-moz-last-node'
slug: Web/CSS/:-moz-last-node
tags:
  - CSS
  - CSS Referenz
  - NeedsCompatTable
  - Non-standard
translation_of: Web/CSS/:-moz-last-node
---
{{Non-standard_header}}{{CSSRef}}

## Übersicht

Die `:-moz-last-node` [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes "Pseudo-classes") matcht ein Element, das der letzte Kindknoten eines anderen Elements ist. Es unterscheidet sich von {{cssxref(":last-child")}}, da es keine letzten Kindelemente mit darauffolgendem (nicht aus Leerzeichen bestehenden) Text matcht.

> **Note:** Leerzeichen am Ende eines Elements werden zur Bestimmung von `:-moz-last-node` ignoriert.

## Syntax

    span:-moz-last-node { Stileigenschaften }

## Beispiel

### CSS

```css
span:-moz-last-node {
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

{{EmbedLiveSample("Beispiel", "220", "20")}}

## Siehe auch

- {{cssxref(":-moz-first-node")}}
- {{cssxref(":last-child")}}
