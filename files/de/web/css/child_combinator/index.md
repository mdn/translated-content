---
title: Kindselektoren
slug: Web/CSS/Child_combinator
tags:
  - CSS
  - CSS Referenz
  - Einsteiger
  - NeedsMobileBrowserCompatibility
  - Selektoren
translation_of: Web/CSS/Child_combinator
original_slug: Web/CSS/Kindselektoren
---
{{CSSRef("Selectors")}}Der **Kindkombinator** (`>`) wird zwischen zwei CSS-Selektoren platziert. Er wählt nur die Elemente aus, die vom zweiten Selektor gewählt werden, die Kinder vom ersten gewählten Element sind.

```css
/* Listenpunkte, die Kinder der "my-things" Liste sind */
ul.my-things > li {
  margin: 2em;
}
```

Elemente, die vom zweiten Selektor gewählt werden, müssen direkte Kinder des ersten gewählten Elements sein. Dies ist strenger, als der [Nachfahrenselektor](/de/docs/Web/CSS/Nachfahrenselektor), der alle Elemente auswählt, die vom zweiten Selektor gewählt werden, für die ein Vorfahrenelement existieren, unabhängig der Anzahl der "Sprünge" aufwärts des DOM.

## Syntax

    selector1 > selector2 { Stileigenschaften }

## Beispiel

### CSS

```css
span {
  background-color: white;
}

div > span {
  background-color: DodgerBlue;
}
```

### HTML

```html
<div>
  <span>Span 1. Innerhalb des Divs.
    <span>Span 2. Innerhalb des Spans, der sich im Div befindet.</span>
  </span>
</div>
<span>Span 3. In keinem Div.</span>
```

### Ergebnis

{{EmbedLiveSample("Beispiel", 200, 100)}}

## Spezifikationen

| Spezifikation                                                                                        | Status                               | Kommentar                |
| ---------------------------------------------------------------------------------------------------- | ------------------------------------ | ------------------------ |
| {{SpecName('CSS4 Selectors', '#child-combinators', 'child combinator')}}     | {{Spec2('CSS4 Selectors')}} |                          |
| {{SpecName('CSS3 Selectors', '#child-combinators', 'child combinators')}}     | {{Spec2('CSS3 Selectors')}} | Keine Änderung           |
| {{SpecName('CSS2.1', 'selector.html#child-selectors', 'child selectors')}} | {{Spec2('CSS2.1')}}             | Ursprüngliche Definition |

## Browser Kompatibilität

{{Compat("css.selectors.child")}}
