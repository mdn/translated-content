---
title: '::-moz-list-number'
slug: Web/CSS/:-moz-list-number
tags:
  - CSS
  - CSS Referenz
  - NeedsCompatTable
  - Non-standard
  - Pseudoelement
translation_of: Web/CSS/:-moz-list-number
---
{{Non-standard_header}}{{CSSRef}}

## Übersicht

Das `::-moz-list-number` [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Pseudo-elements) erlaubt es, das Aussehen von Zahlen in Listeneinträgen ({{HTMLElement("li")}}), die in geordneten Listen ({{HTMLElement("ol")}}) auftreten, anzupassen.

## Syntax

    li::-moz-list-number { style properties }

## Beispiel

### CSS

```css
li::-moz-list-number {
  font-style: italic;
  font-weight: bold;
}
```

### HTML

```html
<ol>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ol>
```

### Ergebnis

![moz-list-number.png](/@api/deki/files/4668/=moz-list-number.png)
{{EmbedLiveSample("Beispiel")}}
