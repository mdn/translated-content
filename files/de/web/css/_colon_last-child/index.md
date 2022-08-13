---
title: ':last-child'
slug: Web/CSS/:last-child
tags:
  - CSS
  - CSS Pseudoklasse
  - Layout
  - Referenz
  - Web
translation_of: Web/CSS/:last-child
---
{{CSSRef}}

## Übersicht

Die `:last-child` CSS [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert jedes Element, das das letzte Kindelement seines Elternelements ist.

## Syntax

    element:last-child { Stileigenschaften }

## Beispiel

### HTML Inhalt

```html
<ul>
  <li>Dieser Punkt ist nicht grün.</li>
  <li>Auch nicht dieser.</li>
  <li>Dieser Punkt ist es! :)</li>
</ul>
```

### CSS Inhalt

```css
li:last-child {
  background-color: lime;
}
```

{{EmbedLiveSample('Beispiel', '100%', 100)}}

## Spezifikationen

| Spezifikation                                                                    | Status                               | Kommentar                 |
| -------------------------------------------------------------------------------- | ------------------------------------ | ------------------------- |
| {{SpecName('CSS4 Selectors', '#last-child', ':last-child')}} | {{Spec2('CSS4 Selectors')}} | Keine Änderung            |
| {{SpecName('CSS3 Selectors', '#last-child', ':last-child')}} | {{Spec2('CSS3 Selectors')}} | Ursprüngliche Definition. |

## Browser Kompatibilität

{{Compat("css.selectors.last-child")}}

## Siehe auch

- {{cssxref(":first-child")}}
- {{cssxref(":nth-child")}}
- {{cssxref(":last-of-type")}}
