---
title: ':only-child'
slug: Web/CSS/:only-child
tags:
  - CSS
  - CSS Pseudo-Klasse
  - Layout
  - Referenz
  - Selektoren
  - Web
translation_of: Web/CSS/:only-child
---
{{CSSRef}}

## Übersicht

Die CSS [Pseudo-Klasse](/de/docs/CSS/Pseudo-classes "Pseudo-classes") `:only-child` repräsentiert ein Element, welches das einzige Kindeelement innerhalb seines Elternelementes ist. Das ist das gleiche wie `:first-child:last-child` oder `:nth-child(1):nth-last-child(1)`, nur mit einer geringeren Spezifizität.

## Syntax

    parent child:only-child {
      property: value;
    }

## Beispiele

### Einfaches Beispiel

```css
span:only-child {
  color: red;
}
```

```html
<div>
  <span>Dieser span ist das einzige Kind seines Elternteils</span>
</div>

<div>
  <span>Dieser span ist eines von zwei Kindern seines Elternteils</span>
  <span>Dieser span ist eines von zwei Kindern seines Elternteils</span>
</div>
```

#### Ergebnis

{{EmbedLiveSample('Basic_example', '100%', 100)}}

### Ein Beispiel für Listen

```css
li li {
  list-style-type: disc;
}
li:only-child {
  color: #6699ff;
  font-style: italic;
  list-style-type: square;
}
```

```html
<ol>
  <li>Erstens
    <ul>
      <li>Einziges Kind
    </ul>
  </li>
  <li>Zweitens
    <ul>
      <li>Diese Liste hat zwei Elemente
      <li>Diese Liste hat zwei Elemente
    </ul>
  </li>
  <li>Drittens
    <ul>
      <li>Diese Liste hat drei Elemente
      <li>Diese Liste hat drei Elemente
      <li>Diese Liste hat drei Elemente
    </ul>
  </li>
<ol>
```

#### Ergebnis

{{EmbedLiveSample('A_list_example', '100%', 150)}}

---

## Spezifizierungen

| Spezifizierung                                                                           | Status                               | Kommentar            |
| ---------------------------------------------------------------------------------------- | ------------------------------------ | -------------------- |
| {{SpecName('CSS4 Selectors', '#only-child-pseudo', ':only-child')}} | {{Spec2('CSS4 Selectors')}} | Keine Änderung.      |
| {{SpecName('CSS3 Selectors', '#only-child-pseudo', ':only-child')}} | {{Spec2('CSS3 Selectors')}} | Ausgangs-Definition. |

## Browser-Kompatibilität

{{Compat("css.selectors.only-child")}}
