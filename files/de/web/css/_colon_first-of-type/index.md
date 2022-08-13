---
title: ':first-of-type'
slug: Web/CSS/:first-of-type
tags:
  - CSS
  - CSS Pseudoklasse
  - Layout
  - Referenz
  - Web
translation_of: Web/CSS/:first-of-type
---
{{CSSRef}}

## Übersicht

Die `:first-of-type` [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert den ersten Geschwisterknoten eines Typs in der Liste der Kindknoten des Elternelements.

## Syntax

    element:first-of-type { Stileigenschaften }

## Beispiel

Dieses Beispiel zeigt, wie der universelle Selektor angenommen wird, falls kein einfacher Selektor angegeben wird.

```css
div :first-of-type {
  background-color: lime;
}
```

```html
<div>
  <span>Dieser Text kommt zuerst!</span>
  <span>Dieser Text nicht. :(</span>
  <span>Was ist mit diesem <em>verschachtelten Element</em>?</span>
  <strike>Dies ist ein weiterer Typ.</strike>
  <span>Dieser leider nicht...</span>
</div>
```

...ergibt:

{{EmbedLiveSample('Beispiel','100%', '120')}}

## Spezifikationen

| Spezifikation                                                                                    | Status                               | Kommentar                |
| ------------------------------------------------------------------------------------------------ | ------------------------------------ | ------------------------ |
| {{SpecName('CSS4 Selectors', '#first-of-type-pseudo', ':first-of-type')}} | {{Spec2('CSS4 Selectors')}} | Keine Änderung           |
| {{SpecName('CSS3 Selectors', '#first-of-type-pseudo', ':first-of-type')}} | {{Spec2('CSS3 Selectors')}} | Ursprüngliche Definition |

## Browser Kompatibilität

{{Compat("css.selectors.first-of-type")}}

## Siehe auch

- {{Cssxref(":nth-of-type")}}, {{Cssxref(":last-of-type")}}
