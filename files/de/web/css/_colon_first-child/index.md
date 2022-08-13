---
title: ':first-child'
slug: Web/CSS/:first-child
tags:
  - CSS
  - CSS Pseudoklasse
  - Layout
  - Referenz
  - Web
translation_of: Web/CSS/:first-child
---
{{CSSRef}}

## Übersicht

Die `:first-child` [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert jedes Element, das das erste Kindelement seines Elternelements ist.

## Syntax

    element:first-child { Stileigenschaften }

## Beispiele

### Beispiel 1

#### HTML Inhalt

```html
<div>
  <span>Dieser Text ist grün!</span>
  <span>Dieser Text nicht. :(</span>
</div>
```

#### CSS Inhalt

```css
span:first-child {
    background-color: lime;
}
```

... sieht folgendermaßen aus:

{{EmbedLiveSample('Beispiel_1',300,50)}}

### Beispiel 2 - Verwendung von UL

#### HTML Inhalt

```html
<ul>
  <li>Eintrag 1</li>
  <li>Eintrag 2</li>
  <li>Eintrag 3</li>
</ul>
```

#### CSS Inhalt

```css
li{
  color:red;
}
li:first-child{
  color:green;
}
```

... sieht folgendermaßen aus:

{{EmbedLiveSample('Beispiel_2_-_Verwendung_von_UL',300,100)}}

## Spezifikationen

| Spezifikation                                                                                | Status                               | Kommentar                |
| -------------------------------------------------------------------------------------------- | ------------------------------------ | ------------------------ |
| {{SpecName('CSS4 Selectors', '#first-child-pseudo', ':first-child')}} | {{Spec2('CSS4 Selectors')}} | Keine Änderung           |
| {{SpecName('CSS3 Selectors', '#first-child-pseudo', ':first-child')}} | {{Spec2('CSS3 Selectors')}} | Ursprüngliche Definition |

## Browser Kompatibilität

{{Compat("css.selectors.first-child")}}

## Siehe auch

- {{cssxref(":last-child")}}
- {{cssxref(":nth-child")}}
- {{cssxref(":last-of-type")}}
